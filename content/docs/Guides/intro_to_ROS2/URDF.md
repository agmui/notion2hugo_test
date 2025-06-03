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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOAEUZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCacD0Xy7xS%2FXlx5lZOZTVutfpwlPJ8ywZSm7PZ09Og4AIhAKREikbCGGcvmPzeLmTCBLzFqitp9embkYN%2BqgAag6zJKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5MSVcR2N6NdOr%2FWEq3APFWB3nxYTM2zV71IPYxPVrCC3Z11O3szvp7wIU9TPUScg0%2FTdYpuediVBf5LDpJMSwlbPUR1fh7tmQn%2BRrnFiMke3hXYojaH%2FRk%2FRPfh2xjNQgLRMsXji0bqdZRV3cdMqcKiSCh2R%2FmZfcEozvAXzyPFNESNV9HqQqDa90Upr8ruTVELXNHmLHQsvV91ip%2F%2Fw8JAM6JvdpQ0NzRtFpJ%2B1QR0wrjJgWAoEZSlftP63BaK5KKrAP9tCwWNry4%2BNXonYP%2BxKMTCBSAUPu5fIEtsN4BlaNK%2Fh1zoLb%2FHBMYHAJTgEeabU1E0MwbMBIATEKHlTG06yvX%2FOFy3TdHDnyQwxRxHwoMU8QhV%2FUJ1CyyvVF9eudxaQu606VeE2k2hQGlObU7aeztl7Rvxp90ScGfKVfHZRxwB%2B1T1GNXX%2Fjm%2Bu8MIzHELHtzZ4JdGm7tQAH5rYgNgKtqvsLqOsUSpIrznXxPBXhra%2B%2F23bavk%2BVr0GH2XHLrMpXKYfm6rcIhvI3Aiuyrasg1ugKvV%2FNwz0b%2BvH4%2B9fbrsBxXaU4Gt3R3%2B0unhYSUnWTT23XtZtnae4bBCAAS8I%2FvrF1yQwzER0hf4av%2BHbE86tFqtFeiRUJ9a1LJ31Y7TJqPpSjqouVQDCNgvrBBjqkAWykwK7aIjVRKzsvAS50c5tvpiss%2Fn1V9hgVdvTTow%2BdfvcV8JerUHNXrNqUK80njMZkjEd7DpABeQed103OyRIaWevXN86UW1DK0MJj400yoG0zYi2tbZP1LWSiLy7WTk8NyadszIQtxwKBy%2F3MuEcwZXuPphoq50fbcBrWEWv3BYZwXzG8bAjtKV0i5y3qL4eZl9jO3%2Bf6aolZhraKvtya6lmU&X-Amz-Signature=80192b53b835ee1319bc93e7a502c056bc3dd5196907aa4af37e60a459a4d472&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZOAEUZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCacD0Xy7xS%2FXlx5lZOZTVutfpwlPJ8ywZSm7PZ09Og4AIhAKREikbCGGcvmPzeLmTCBLzFqitp9embkYN%2BqgAag6zJKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5MSVcR2N6NdOr%2FWEq3APFWB3nxYTM2zV71IPYxPVrCC3Z11O3szvp7wIU9TPUScg0%2FTdYpuediVBf5LDpJMSwlbPUR1fh7tmQn%2BRrnFiMke3hXYojaH%2FRk%2FRPfh2xjNQgLRMsXji0bqdZRV3cdMqcKiSCh2R%2FmZfcEozvAXzyPFNESNV9HqQqDa90Upr8ruTVELXNHmLHQsvV91ip%2F%2Fw8JAM6JvdpQ0NzRtFpJ%2B1QR0wrjJgWAoEZSlftP63BaK5KKrAP9tCwWNry4%2BNXonYP%2BxKMTCBSAUPu5fIEtsN4BlaNK%2Fh1zoLb%2FHBMYHAJTgEeabU1E0MwbMBIATEKHlTG06yvX%2FOFy3TdHDnyQwxRxHwoMU8QhV%2FUJ1CyyvVF9eudxaQu606VeE2k2hQGlObU7aeztl7Rvxp90ScGfKVfHZRxwB%2B1T1GNXX%2Fjm%2Bu8MIzHELHtzZ4JdGm7tQAH5rYgNgKtqvsLqOsUSpIrznXxPBXhra%2B%2F23bavk%2BVr0GH2XHLrMpXKYfm6rcIhvI3Aiuyrasg1ugKvV%2FNwz0b%2BvH4%2B9fbrsBxXaU4Gt3R3%2B0unhYSUnWTT23XtZtnae4bBCAAS8I%2FvrF1yQwzER0hf4av%2BHbE86tFqtFeiRUJ9a1LJ31Y7TJqPpSjqouVQDCNgvrBBjqkAWykwK7aIjVRKzsvAS50c5tvpiss%2Fn1V9hgVdvTTow%2BdfvcV8JerUHNXrNqUK80njMZkjEd7DpABeQed103OyRIaWevXN86UW1DK0MJj400yoG0zYi2tbZP1LWSiLy7WTk8NyadszIQtxwKBy%2F3MuEcwZXuPphoq50fbcBrWEWv3BYZwXzG8bAjtKV0i5y3qL4eZl9jO3%2Bf6aolZhraKvtya6lmU&X-Amz-Signature=94df6bb45c9553181fbc7dd5469a5cb7dd5f22afaf024757cc92a5b1eadf9e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
