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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLMOKV7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8rOm5%2FfdkQndlyvvLJAgKfvTY%2F2n%2BXOtRRa7U32ny5AiEAq6eul8LK5pBf%2BmjoZg1WmrKQoCRWaEPX5E3S33EHSYQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGqazJzILvtCDnTIircA1hMbuyaTx9ab6ULQVelADlFkbucISYtq0EeV1%2BCWFcaqNapA7Y5JX89hao2zPz%2BBXfvt4POGWVDzEzGKOlPWrlMTsVHiFqMzPWf8FX8Mzg6eMz%2BMb8mZhMD67VaSOWQXRQEH%2Bm37YHXO%2FUCmRfjQk6e57ShHNwmG1nFeFp4gcYB73mJP%2FJgm3s1VcgMNLOlRrgLW9jgPBzmH2Nx2yBk4cDKKkweLs4A6aHjuj7%2FSoH8xe4xIUNzw8R%2BAez9Lj%2Fy%2BM1U6UMvUIEWUg01r4XUCdkJ98Wsx2E1rb%2FrS%2Bw7IU3oI6mKLrzcl6QTzd8r65GRUSvpzCupQ%2Fbkgg5RWHV0EVV4c7T0Yx4s8%2FFieJGVtRLkYmoyCfOAf31LUlYEnKLUlcKisA9d8zsdrnceZARAUvTNozMZ6cWlVGZNIHaKUK%2BvNBPj7l5Kf4PMTiR9ketPz%2FhMYTO2DXkZCJurmSjEoNqGIMCz5PZJeu76zodgbxHYtJYihwNII6YY2ztf9yZNwWyjz70BCZb2NTGrFascJBKv6FZsj7ojHZtIzU2F1D2cTBeCaEypOmbyBUIkgpoX2KaMOjF8DcpNmci7CLgA5XTBLL4CaKJUHdvXP1yPvEVZd9IZ1OqKAbxBhNqpMMmy4cEGOqUBIDTvasAoJCoDT5U7RiF7WzSmFAOpUToyOhGg9f%2FBtjfWDJ2EEzGzlMajglSWEm664ft2pzkTFGORExFcj3UBVhppnc5AY4ckfhlPqhhIbO3bwiqxlVLCqi5UavoMNgWzTR4NXumC%2FstAEy5K6x2zhyEYlUZ9mSIBrfMXktACLCbnlUeszujFW144LkCjlMo9F3zzFkrv9izDItVpUZwmrVqoZcBt&X-Amz-Signature=fa0cc8a6731a280b4b5d0ae5b3668fa6ebd7e7414b298ec35c43e2657fdfb442&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLMOKV7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8rOm5%2FfdkQndlyvvLJAgKfvTY%2F2n%2BXOtRRa7U32ny5AiEAq6eul8LK5pBf%2BmjoZg1WmrKQoCRWaEPX5E3S33EHSYQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGqazJzILvtCDnTIircA1hMbuyaTx9ab6ULQVelADlFkbucISYtq0EeV1%2BCWFcaqNapA7Y5JX89hao2zPz%2BBXfvt4POGWVDzEzGKOlPWrlMTsVHiFqMzPWf8FX8Mzg6eMz%2BMb8mZhMD67VaSOWQXRQEH%2Bm37YHXO%2FUCmRfjQk6e57ShHNwmG1nFeFp4gcYB73mJP%2FJgm3s1VcgMNLOlRrgLW9jgPBzmH2Nx2yBk4cDKKkweLs4A6aHjuj7%2FSoH8xe4xIUNzw8R%2BAez9Lj%2Fy%2BM1U6UMvUIEWUg01r4XUCdkJ98Wsx2E1rb%2FrS%2Bw7IU3oI6mKLrzcl6QTzd8r65GRUSvpzCupQ%2Fbkgg5RWHV0EVV4c7T0Yx4s8%2FFieJGVtRLkYmoyCfOAf31LUlYEnKLUlcKisA9d8zsdrnceZARAUvTNozMZ6cWlVGZNIHaKUK%2BvNBPj7l5Kf4PMTiR9ketPz%2FhMYTO2DXkZCJurmSjEoNqGIMCz5PZJeu76zodgbxHYtJYihwNII6YY2ztf9yZNwWyjz70BCZb2NTGrFascJBKv6FZsj7ojHZtIzU2F1D2cTBeCaEypOmbyBUIkgpoX2KaMOjF8DcpNmci7CLgA5XTBLL4CaKJUHdvXP1yPvEVZd9IZ1OqKAbxBhNqpMMmy4cEGOqUBIDTvasAoJCoDT5U7RiF7WzSmFAOpUToyOhGg9f%2FBtjfWDJ2EEzGzlMajglSWEm664ft2pzkTFGORExFcj3UBVhppnc5AY4ckfhlPqhhIbO3bwiqxlVLCqi5UavoMNgWzTR4NXumC%2FstAEy5K6x2zhyEYlUZ9mSIBrfMXktACLCbnlUeszujFW144LkCjlMo9F3zzFkrv9izDItVpUZwmrVqoZcBt&X-Amz-Signature=90b857f5d0f689e8d7d085376a391c841edc864ef2e535d0217adb41eccd34f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
