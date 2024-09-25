import instance from '@/instance/instance'

export const getVariableApi = async () => {
  const resp = await instance.get('variable')
  return resp?.data
}

export const getIntroduceApi = async () => {
  const resp = await instance.get('brands/qna')
  return resp?.data?.data
}
