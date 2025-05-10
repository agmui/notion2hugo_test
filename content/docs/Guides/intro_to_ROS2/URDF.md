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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WULVZCO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAC4xV2%2B7xO87kd7pp9b0%2B1h6WrX9d%2Fo0%2FNLwZaJjqXVAiEA7k9RSS294tDHxHjRAJOlNadsAwsoj0lOuzYvJN%2F3h9cqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUgqudit9PI95fOCrcA2A22RXDaQWDR23Ij1cQ1mMr97gSdFw9Vc0Q%2FNg2ACct%2BPtmg%2BERjVizdE5noEEFJghMbEWztXZVRbI1nWLpZ%2FimkgRKmBU8YmgEWMxckraLNBvgI10wDte%2FzBzH5idExcVNkBnzTmjegr%2F77gYSdklvIc9wq1RUiV2o85SHKAv6l4q7yqm8e5%2FEmiXNQ2uIitwTy%2BxHJC5bjtHgydF0RFbA%2F4WRFO3WRi4GMGhvgijom6k1uR8Qibq3ZoygDYoMxc6BIxtWAcH%2B6Ij%2F1puI4PN3HheSd17JU0xQ0ZtLkLDU9SvgbyZ5Khukk62W1S5caKDamePd5ZXy69DkM6UxFC6i1fAXyllgDlEkSGcV8jq%2FdbFR7f1WuN%2BY%2BF4hlwkK9yyZEKEUv%2BhwCdkh%2BcMnoTRWRPNhxlzjPxiH%2F3n1LhjqUeDcTMslFOvOxfWT%2Fz%2FKSdOpR5GtgbOMTMToWL%2F36VmBIKfYuurDZOPqSrREOOmb6lKrcUDtba61AVrG1%2BaXuKHbJk1S%2F4PK6d6bJIZkVvceRitICY9mVFXcZCOsm10qs7YE%2FxjDHh7HTSA1HCkhijhH6PkVL4mA8hssz17MbWrKjaowA2Na5ue4ik7SN1z9mP0IZZPSZoDtKsaGML%2B6%2FsAGOqUBrn2u8fThV3c9RC%2FNVJ8Iypi91jD1n623oo%2BoE9x0dVo3oSQ9%2BU57buCJQyjN3SiuJ7yDRWXhNKI%2BkCWJjlYNYIogN31h23O50D9zztAvigps%2Bxz0ljYBP98EmvL%2Bt5OfiwlLxNfEoYWFwdjiPIiN2Jsa5ToF2Qrg9XNZivtI%2FGZ5BW6%2FeF24QRz4Fiw82Kej7LW2%2Fno8Lu0oEoraQhYJuAN8un3d&X-Amz-Signature=e87c9896e1e985a8d1a39cf5891227e153e46843e5c3b8f725d10ef649c09c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WULVZCO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAC4xV2%2B7xO87kd7pp9b0%2B1h6WrX9d%2Fo0%2FNLwZaJjqXVAiEA7k9RSS294tDHxHjRAJOlNadsAwsoj0lOuzYvJN%2F3h9cqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUgqudit9PI95fOCrcA2A22RXDaQWDR23Ij1cQ1mMr97gSdFw9Vc0Q%2FNg2ACct%2BPtmg%2BERjVizdE5noEEFJghMbEWztXZVRbI1nWLpZ%2FimkgRKmBU8YmgEWMxckraLNBvgI10wDte%2FzBzH5idExcVNkBnzTmjegr%2F77gYSdklvIc9wq1RUiV2o85SHKAv6l4q7yqm8e5%2FEmiXNQ2uIitwTy%2BxHJC5bjtHgydF0RFbA%2F4WRFO3WRi4GMGhvgijom6k1uR8Qibq3ZoygDYoMxc6BIxtWAcH%2B6Ij%2F1puI4PN3HheSd17JU0xQ0ZtLkLDU9SvgbyZ5Khukk62W1S5caKDamePd5ZXy69DkM6UxFC6i1fAXyllgDlEkSGcV8jq%2FdbFR7f1WuN%2BY%2BF4hlwkK9yyZEKEUv%2BhwCdkh%2BcMnoTRWRPNhxlzjPxiH%2F3n1LhjqUeDcTMslFOvOxfWT%2Fz%2FKSdOpR5GtgbOMTMToWL%2F36VmBIKfYuurDZOPqSrREOOmb6lKrcUDtba61AVrG1%2BaXuKHbJk1S%2F4PK6d6bJIZkVvceRitICY9mVFXcZCOsm10qs7YE%2FxjDHh7HTSA1HCkhijhH6PkVL4mA8hssz17MbWrKjaowA2Na5ue4ik7SN1z9mP0IZZPSZoDtKsaGML%2B6%2FsAGOqUBrn2u8fThV3c9RC%2FNVJ8Iypi91jD1n623oo%2BoE9x0dVo3oSQ9%2BU57buCJQyjN3SiuJ7yDRWXhNKI%2BkCWJjlYNYIogN31h23O50D9zztAvigps%2Bxz0ljYBP98EmvL%2Bt5OfiwlLxNfEoYWFwdjiPIiN2Jsa5ToF2Qrg9XNZivtI%2FGZ5BW6%2FeF24QRz4Fiw82Kej7LW2%2Fno8Lu0oEoraQhYJuAN8un3d&X-Amz-Signature=c151cf1747f33a6248ff07e2c9c89454028c725adc2b052a42cf368c4cc119f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
