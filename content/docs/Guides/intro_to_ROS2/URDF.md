---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QHCXJT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBTeJfUHnqUOQus6pFVHQcNiXDxCe%2Bh1EWKI3hCdIZuSAiEA4ulkelxT4Fu2PXMnseeEPOdxBrSLjWawtDGNm9U%2FmycqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDbvpU0BtIEiAthuyrcA6wM8DrN2OAdUpoT9btGNVqYmml1alMqxfvSh1vE5LhCxx3PmGsii%2FHCIi0N17x5W%2FA4CKGtBIh5EqNnWvqpMLao9ta8Gj0l99mO3BvhOMdiDR92Yt9qphoFzo9Yp3r74%2BTJhhCmTh9ltUISci4B7hnq8IdYtmB8Sk5mCCeqRe5h4LolqJ0oLb0mFZ%2BNEP0OSSdgGMCwiBpDYd1MYY8cXW4pmGI%2BXePFBU7oVMR3tW3UYX8mIsr3JsxSvAzHofQUX14PDtOtYGUp1IABl9Aw55k%2Fli1uHHWBkl0KwC7lXTEKyw4%2BCkn7NrAStEplF%2FseF74nEZL4oAtwetao%2BJMjhlDNVye8J%2BfNTGsMMBIB%2FgYci8E1RcFlBf%2Bf6HWJRslpL5T5gWSDfNN1YQC1fLcKoFjc7vnruJ0eGfpyzP2lw0xic9qr5lzTOvSkzabJHZR5nB3LXO5RbklvCNaEZClrk%2Fa7RferO8hCtNvIP%2BbxqPauganFnkUNU4UlXPSw%2BEagy5SDqPjnRR32Ub5uG30viaI8fQe6Ia45imP2s2DivF98Bhfba2MBYzD99WiH%2B4lBfLDaqND6W%2FdrH6sgGWX4BY3oBWnp3xgHnZZCCVU9zBsV57CouKbnwuCSjuOqMMyt%2Br4GOqUBH7cOmd6ujM9xXPaG0oTBG5tiYSojUqe4TArSoKJtQvje9vA1FdCe2joomlDlQct2nQKe2iTxjkthYu58X5QKPiKuQFPJ%2BXgg2b7TUSfHLTZ8IHtPjhB8XxVvHFjBwmlK58eA4cJA5iVWRWYD3DtARxPgl683gXHbzBA70vHwTIYnItvze%2BbVPxzHCzXivO%2Fsi5v2d5opglD4mK1jOPxWQagb1U1d&X-Amz-Signature=2a339961d18dc2ee167107d210adef9c8288a87469b7e0b3c7ce00545ec5a3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QHCXJT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBTeJfUHnqUOQus6pFVHQcNiXDxCe%2Bh1EWKI3hCdIZuSAiEA4ulkelxT4Fu2PXMnseeEPOdxBrSLjWawtDGNm9U%2FmycqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDbvpU0BtIEiAthuyrcA6wM8DrN2OAdUpoT9btGNVqYmml1alMqxfvSh1vE5LhCxx3PmGsii%2FHCIi0N17x5W%2FA4CKGtBIh5EqNnWvqpMLao9ta8Gj0l99mO3BvhOMdiDR92Yt9qphoFzo9Yp3r74%2BTJhhCmTh9ltUISci4B7hnq8IdYtmB8Sk5mCCeqRe5h4LolqJ0oLb0mFZ%2BNEP0OSSdgGMCwiBpDYd1MYY8cXW4pmGI%2BXePFBU7oVMR3tW3UYX8mIsr3JsxSvAzHofQUX14PDtOtYGUp1IABl9Aw55k%2Fli1uHHWBkl0KwC7lXTEKyw4%2BCkn7NrAStEplF%2FseF74nEZL4oAtwetao%2BJMjhlDNVye8J%2BfNTGsMMBIB%2FgYci8E1RcFlBf%2Bf6HWJRslpL5T5gWSDfNN1YQC1fLcKoFjc7vnruJ0eGfpyzP2lw0xic9qr5lzTOvSkzabJHZR5nB3LXO5RbklvCNaEZClrk%2Fa7RferO8hCtNvIP%2BbxqPauganFnkUNU4UlXPSw%2BEagy5SDqPjnRR32Ub5uG30viaI8fQe6Ia45imP2s2DivF98Bhfba2MBYzD99WiH%2B4lBfLDaqND6W%2FdrH6sgGWX4BY3oBWnp3xgHnZZCCVU9zBsV57CouKbnwuCSjuOqMMyt%2Br4GOqUBH7cOmd6ujM9xXPaG0oTBG5tiYSojUqe4TArSoKJtQvje9vA1FdCe2joomlDlQct2nQKe2iTxjkthYu58X5QKPiKuQFPJ%2BXgg2b7TUSfHLTZ8IHtPjhB8XxVvHFjBwmlK58eA4cJA5iVWRWYD3DtARxPgl683gXHbzBA70vHwTIYnItvze%2BbVPxzHCzXivO%2Fsi5v2d5opglD4mK1jOPxWQagb1U1d&X-Amz-Signature=27333ad7539e39168ca79d9050745b6849fc059382db8a3a9544582d4bf10191&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
