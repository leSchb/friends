import { apiClient } from "@/shared/lib/api";
import CookieUtils from "@/shared/lib/utils/cookies.utils";

interface ILoginRes {
  accessToken: string;
  refreshToken: string;
}

export const setCookies = ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  CookieUtils.setCookieWithToken("authentication_token", access);
  CookieUtils.setCookieWithToken("refresh_token", refresh);
};

export const login = async (email: string, password: string) => {
  try {
    const res = await apiClient.post<ILoginRes>(`/auth/login`, {
      email,
      password,
    });

    setCookies({
      refresh: res.data.refreshToken,
      access: res.data.accessToken,
    });

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
