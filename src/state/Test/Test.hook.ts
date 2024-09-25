import { useQuery } from '@tanstack/react-query'
import { getIntroduceApi, getVariableApi } from './Test.api'

export const useGetVariable = () => {
  return useQuery({
    queryKey: ['Variable'],
    queryFn: () => getVariableApi(),
  })
}

export const useGetQuestinos = () => {
  return useQuery({
    queryKey: ['qna'],
    queryFn: () => getIntroduceApi(),
  })
}
