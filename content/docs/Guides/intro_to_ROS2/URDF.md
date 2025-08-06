---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=aded72fdacdf01fd404a8c9c6f956d1d91cda6432eb88b94a85a500829d1b152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=d8e9ef310bbec38540ac0c82ecd644a8635a254e11a8d66d53a535bed17a0909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
