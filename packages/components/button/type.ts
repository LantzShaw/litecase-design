import { ExtractPropTypes } from 'vue';

// export const buttonType = [
//     'primary',
//     'success',
//     'info',
//     'warning',
//     'danger',
//     'text'
//   ];

export const ButtonType = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'text'
] as const;

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

const buttonProps = {
  type: {
    type: ButtonType
    // validator(value: string) {
    //   return buttonType.includes(value);
    // }
    },
    round: 
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
