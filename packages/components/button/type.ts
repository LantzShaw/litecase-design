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
  //   type: {
  //     type: String
  //     validator(value: string) {
  //       return buttonType.includes(value);
  //     }
  //   },
  type: {
    type: ButtonType,
    required: true
  },
  size: {
    // type: ButtonSize // TODO: 这里不能用联合类型
  },
  rounded: Boolean
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
