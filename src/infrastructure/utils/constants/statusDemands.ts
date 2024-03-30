export const StatusDemands: { 
  [x: string]: 
  'NEW' | 
  'OPEN_BUDGETS' | 
  'RECEIVED_BUDGETS' | 
  'CHOSEN_BUDGET' |
  'IN_PROGRESS' |
  'PAUSED' |
  'CANCELED' |
  'FINISHED'
} = {
  NEW: 'NEW',
  OPEN_BUDGETS: 'OPEN_BUDGETS',
  RECEIVED_BUDGETS: 'RECEIVED_BUDGETS',
  CHOSEN_BUDGET: 'CHOSEN_BUDGET',
  IN_PROGRESS: 'IN_PROGRESS',
  PAUSED: 'PAUSED',
  CANCELED: 'CANCELED',
  FINISHED: 'FINISHED',
}

export type StatusDemands = typeof StatusDemands[keyof typeof StatusDemands]

export enum EnumStatusDemands{
  NEW = 'NEW',
  OPEN_BUDGETS = 'OPEN_BUDGETS',
  RECEIVED_BUDGETS = 'RECEIVED_BUDGETS',
  CHOSEN_BUDGET = 'CHOSEN_BUDGET',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  CANCELED = 'CANCELED',
  FINISHED = 'FINISHED',
}