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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4QODWL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICuU3q%2FO5EZAudOlavpA412q6ehXLf9KIRGneg2Ko4UPAiA%2Bz7M9trPuHfWKFGZgpfaaFMHZed%2FHc3rYf29il8ogESqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1yVau5FEb7IBBFc1KtwD60wGKEbNygVLpAczD6wbcI%2FE9q8tIWMapJIKXRg0SExwE3h722Tesz7ZELQQRVvExL4No7iyfoPvo%2BVisgkcHdA0LIdX26fCC%2FGxr%2B9kbEqBaERJ%2Bfek5b5OpQYr86JDirFiAo4%2FE4T8HvHS%2B5RYl%2BbBgAASOfbvVhPSFt6KSG3LT%2FcGxHwfxjxMRnjbGGu7nulupjC31KRt5ZiP%2F6qVG9Oqnrnh6pvYlUH7Zq36dd%2BrghHxXTdBzZBcFR%2FXIVsGo4%2BWtjnI4bmxkMoz1A4%2F0wrVowZYdQxCMiV0dHxMEPldS16rkevlg0cehdmjIrv1tH6i2ep4fxi2mM58Gjj%2BwfHI2qoNLkpZO%2FLh7fhi24mGhvOBLIvlGfyMJp5voCeBc9cHyuM6eDZkuX4FnFAHlKoqmQhsGWiMHauLVLMdk2AM1Hq5gNrwgbYKQLieVtE6663vuLK2V9sNn3OFAWPgw4uGiNUiDF3TM9L5t1cwQU3RkQcY9UsWaJgqosUvM6kDS83BtAY3zTCKuJqgjcmPs0YnN0iGRmFsSQQDblhh2oJNSGbOz6E9vs6HAJ9I7jf3IV30UXfPh%2BNvDbPL4UA%2BQsERWW31DhuUtt5vMAINDCpIt%2FtUelvsfkvF6TwwsYikwAY6pgH0MRQgrVcEHSe0LDFVdPODBDoXLGwjEYJnrZi%2BgT9rzFok08RyGgtLMmiTUrRIbPdEGd%2F62dLPcNUzIPqIifl2CmKZ3qH9Mz4m%2B%2BEfXK%2B64EcmZpqgsJFQ2U0aB8gmfyghw05ryEYW7IYKq5ROduvbTrvx5RAyWCJC8gjv9Jin3VXGF6Q4rlfHYSDpCn4GgPxAm0xhyx9zUd1oTD%2BtyzYwuGmHpw1r&X-Amz-Signature=7201ffa26098561ad2cbd91fedec556d1e666ed1d43a00e9c3f4b5e5dc07b242&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4QODWL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICuU3q%2FO5EZAudOlavpA412q6ehXLf9KIRGneg2Ko4UPAiA%2Bz7M9trPuHfWKFGZgpfaaFMHZed%2FHc3rYf29il8ogESqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1yVau5FEb7IBBFc1KtwD60wGKEbNygVLpAczD6wbcI%2FE9q8tIWMapJIKXRg0SExwE3h722Tesz7ZELQQRVvExL4No7iyfoPvo%2BVisgkcHdA0LIdX26fCC%2FGxr%2B9kbEqBaERJ%2Bfek5b5OpQYr86JDirFiAo4%2FE4T8HvHS%2B5RYl%2BbBgAASOfbvVhPSFt6KSG3LT%2FcGxHwfxjxMRnjbGGu7nulupjC31KRt5ZiP%2F6qVG9Oqnrnh6pvYlUH7Zq36dd%2BrghHxXTdBzZBcFR%2FXIVsGo4%2BWtjnI4bmxkMoz1A4%2F0wrVowZYdQxCMiV0dHxMEPldS16rkevlg0cehdmjIrv1tH6i2ep4fxi2mM58Gjj%2BwfHI2qoNLkpZO%2FLh7fhi24mGhvOBLIvlGfyMJp5voCeBc9cHyuM6eDZkuX4FnFAHlKoqmQhsGWiMHauLVLMdk2AM1Hq5gNrwgbYKQLieVtE6663vuLK2V9sNn3OFAWPgw4uGiNUiDF3TM9L5t1cwQU3RkQcY9UsWaJgqosUvM6kDS83BtAY3zTCKuJqgjcmPs0YnN0iGRmFsSQQDblhh2oJNSGbOz6E9vs6HAJ9I7jf3IV30UXfPh%2BNvDbPL4UA%2BQsERWW31DhuUtt5vMAINDCpIt%2FtUelvsfkvF6TwwsYikwAY6pgH0MRQgrVcEHSe0LDFVdPODBDoXLGwjEYJnrZi%2BgT9rzFok08RyGgtLMmiTUrRIbPdEGd%2F62dLPcNUzIPqIifl2CmKZ3qH9Mz4m%2B%2BEfXK%2B64EcmZpqgsJFQ2U0aB8gmfyghw05ryEYW7IYKq5ROduvbTrvx5RAyWCJC8gjv9Jin3VXGF6Q4rlfHYSDpCn4GgPxAm0xhyx9zUd1oTD%2BtyzYwuGmHpw1r&X-Amz-Signature=9c8bfca40d9806e10c0bde83f12919ab5891e12041192fe1e4dffbd3de006f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
