import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      destination: string;
      travelDates: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        data.destination,
        data.travelDates,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
