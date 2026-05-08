import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

/**
 * API 요청을 수행하는 공통 함수
 * @template T - 응답 데이터 타입
 * @param url - 요청할 URL
 * @param config - Axios 설정 옵션
 * @returns Promise<T> - 응답 데이터
 */
export async function fetchData<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axios.get<T>(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/**
 * API 요청을 수행하고 상태를 관리하는 함수
 * @template T - 응답 데이터 타입
 * @param url - 요청할 URL
 * @param onSuccess - 성공 콜백
 * @param onError - 에러 콜백 (기본값: 에러 메시지 출력)
 * @param onFinally - 완료 콜백
 */
export async function apiCall<T>(
  url: string,
  onSuccess: (data: T) => void,
  onError?: (error: unknown) => void,
  onFinally?: () => void,
  config?: AxiosRequestConfig
): Promise<void> {
  try {
    const data = await fetchData<T>(url, config);
    onSuccess(data);
  } catch (error) {
    if (onError) {
      onError(error);
    } else {
      console.error(`Failed to fetch from ${url}:`, error);
    }
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
}
