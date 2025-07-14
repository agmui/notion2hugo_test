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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTARWFN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDkRAxQUxqY2ZAufpnhkE3HCMs3f%2BnUbLCeuinVokoLSgIgJV5NfR8uRMxEzIJveApEKKihMDxI1UgeWg9JzBYZkGoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOBnOD0Ga%2FTAtHjYICrcA0SBw8X8U%2B6kOZaHXdsllOyUx0gnkSY%2BUdgB929unm0nR0%2BfYVsRG90qnFoD07aXuuaAv8lqZ%2FhmFkuR24w0xVIF7UCdsH4pwWdjRW%2FbcakNMIiLxktKazcT%2B6vcceb%2BaRlj6zHZL2Fu8OkVDqMs%2Fz0%2FAnnxrgOODCv1wEUzrQ4RcwOjDbxbjIVNPRtqFuPo7IVxiHpzz9rtOjYtk9kraS5P6YWrAFJV%2FTkyUCwmyIhRrMlm86Kd071HK1AbTQoWe5%2BmdJFm8UmJdvw%2FiDKm8%2BSmm6RkrSCXfyo%2FPms0SZeI85idZJxdHQ%2F4GU56HYvwBxA3mndKV7d3y9%2B9a4lr5br56AxO%2BkV78jvPE65i2yFbgxupawpFmmaYmiqsvIXIIW6FIt9cym0sihqZNGHmfZnxzSmdnS9yp9qZrT38VcbI%2B%2F5qtmi%2BlVFnb7XuXZLRH2ne%2FzlTLM1O7R4mPZQt1HBV3G%2FYuMlUUC6Ys4TMqSsSUZ4PM%2Fso%2FxvLY53YwcUtgo3t5FFW97Mi1hwfjPzNP4ky5oIJfk0J5nQ%2FZpE%2FxFW%2FWLB%2Fk%2FOUcBefiZDBctua%2B1cdT1ptz2CwXw67XYuP3KpOQd6f0XO30E4tP9gbqG74Y333JpMkAvjNV4spMKSI08MGOqUBW5SPAdEJOEjXE%2B3uC4H4MbtMl%2BSaGs0XczcISjhbVqa0RMcDksrDmvEZJ1dCJfdUPLB4aCsa4jX6Pv6CYyKTRNnVHaRCT7%2BIJB%2BgiFY4iRZ0yvKUpmMWjA07uB3w7uRRtzXCWT3d9EnBjpTLgHCPTmowcqjNGadFs9myTNugA5b50OnKi%2F6bk9HfUkJz37LEY3BJ54EHCPRsUO%2B3R49jcGZalpcU&X-Amz-Signature=bbc6bf31719e2b987bbf87f1a7cf7fb552baa2da534e94a0d5440f511964781d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTARWFN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDkRAxQUxqY2ZAufpnhkE3HCMs3f%2BnUbLCeuinVokoLSgIgJV5NfR8uRMxEzIJveApEKKihMDxI1UgeWg9JzBYZkGoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOBnOD0Ga%2FTAtHjYICrcA0SBw8X8U%2B6kOZaHXdsllOyUx0gnkSY%2BUdgB929unm0nR0%2BfYVsRG90qnFoD07aXuuaAv8lqZ%2FhmFkuR24w0xVIF7UCdsH4pwWdjRW%2FbcakNMIiLxktKazcT%2B6vcceb%2BaRlj6zHZL2Fu8OkVDqMs%2Fz0%2FAnnxrgOODCv1wEUzrQ4RcwOjDbxbjIVNPRtqFuPo7IVxiHpzz9rtOjYtk9kraS5P6YWrAFJV%2FTkyUCwmyIhRrMlm86Kd071HK1AbTQoWe5%2BmdJFm8UmJdvw%2FiDKm8%2BSmm6RkrSCXfyo%2FPms0SZeI85idZJxdHQ%2F4GU56HYvwBxA3mndKV7d3y9%2B9a4lr5br56AxO%2BkV78jvPE65i2yFbgxupawpFmmaYmiqsvIXIIW6FIt9cym0sihqZNGHmfZnxzSmdnS9yp9qZrT38VcbI%2B%2F5qtmi%2BlVFnb7XuXZLRH2ne%2FzlTLM1O7R4mPZQt1HBV3G%2FYuMlUUC6Ys4TMqSsSUZ4PM%2Fso%2FxvLY53YwcUtgo3t5FFW97Mi1hwfjPzNP4ky5oIJfk0J5nQ%2FZpE%2FxFW%2FWLB%2Fk%2FOUcBefiZDBctua%2B1cdT1ptz2CwXw67XYuP3KpOQd6f0XO30E4tP9gbqG74Y333JpMkAvjNV4spMKSI08MGOqUBW5SPAdEJOEjXE%2B3uC4H4MbtMl%2BSaGs0XczcISjhbVqa0RMcDksrDmvEZJ1dCJfdUPLB4aCsa4jX6Pv6CYyKTRNnVHaRCT7%2BIJB%2BgiFY4iRZ0yvKUpmMWjA07uB3w7uRRtzXCWT3d9EnBjpTLgHCPTmowcqjNGadFs9myTNugA5b50OnKi%2F6bk9HfUkJz37LEY3BJ54EHCPRsUO%2B3R49jcGZalpcU&X-Amz-Signature=ec27a8aca1fc47d8a9e071e2b6c93af1800ce0609f17cd3d8c38a77ad726fb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
