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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFX3OF2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FRx0Dgnkw5yKPgmwwPXOmdiNYSUxy3zW51o3O9SEgkwIgA6irLCeOIYnjw3%2FuxVQy5sTtR1Vh2yZ6iO%2FkwRMeBW0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLonkxwL5qxNabp4EircA4y5CSM898MaWW91ClfEqrSvFOrk6tOHlKXzEiJ4%2FhLyeGejmGRbEfbQwNw5XizklvdPdNT%2FIpeHdnul1St3WFOMDsl%2BeIlfKgB%2B9FK4WTFnZUaw3I9GkCWp5aZNqvrb5aQ5vnCMKbIDtVyKCpR7iBQBP1IRiuvZGxpnSjbukilZrHL%2Feb4TqXD4oxCAPvLrpG%2FeVZ%2BYewtWwNanvLj2ATmnkOCqrpUe5hxu%2F8vXGjemCvNSHNDq47Abl00160FNrtwhVZMWvg%2BdpMsYmuMgKY1of3faQdhvsOfob6t%2Fy02zR0hSk0T94lzyCGJUYzWAzZKHoXGLcJv1xRc5nsuqNRr2wjEXDI7ZMe5Rq0zEjaUtN7I4hbl7nUB9BBKXmJ9MqZINiqH7K%2FVjJvBod1TMJZ1ZrvqV40f%2BSJRFnSZ6B5gKPbTcg0iIKUgkjgFR14NvzcY%2FyANE1uoCiqI3zDQF31f1x2rHW4IS5hhlrjdQp41WMvJl3VfSFCfg%2FKkHMFtP%2FU2t2syY6Jh2QYm2XSc5jcZVg775uO%2FS5gMQRWiStMHEZc0cu2kyEypBxMPrgclAe2NZMB1P5twI9WRdWIFqZsNLVsdo3EFBhzwHDQQVcSnZHpsXM3MJFOSmil3OMLazi8AGOqUBzp7hKdMJ6%2F%2FSpvtDeYQmyluvHNP0lN3TeHY2ChUWimt5WnWGv6C8hFIfZCzoM7dK5el3g4M0N9xhYZwgPq4dsV9S7CjoFkxJ%2Bj5IMTY%2FzUGOWNokb5YZPNq0XG5Mt6IEDrIoHzKWzCfejfEfWrXmFgvPwFuiCZdeHaX%2BJmxoYqNtw41OapgOc%2BfbHjCuFe6IZlHbtnCGAN6zymuEcTTsnKhbIQeI&X-Amz-Signature=8c8579b858d2eb443ac3c4e348937c0e08b8c7d0d440d15d6b45bec3030e371e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFX3OF2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FRx0Dgnkw5yKPgmwwPXOmdiNYSUxy3zW51o3O9SEgkwIgA6irLCeOIYnjw3%2FuxVQy5sTtR1Vh2yZ6iO%2FkwRMeBW0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLonkxwL5qxNabp4EircA4y5CSM898MaWW91ClfEqrSvFOrk6tOHlKXzEiJ4%2FhLyeGejmGRbEfbQwNw5XizklvdPdNT%2FIpeHdnul1St3WFOMDsl%2BeIlfKgB%2B9FK4WTFnZUaw3I9GkCWp5aZNqvrb5aQ5vnCMKbIDtVyKCpR7iBQBP1IRiuvZGxpnSjbukilZrHL%2Feb4TqXD4oxCAPvLrpG%2FeVZ%2BYewtWwNanvLj2ATmnkOCqrpUe5hxu%2F8vXGjemCvNSHNDq47Abl00160FNrtwhVZMWvg%2BdpMsYmuMgKY1of3faQdhvsOfob6t%2Fy02zR0hSk0T94lzyCGJUYzWAzZKHoXGLcJv1xRc5nsuqNRr2wjEXDI7ZMe5Rq0zEjaUtN7I4hbl7nUB9BBKXmJ9MqZINiqH7K%2FVjJvBod1TMJZ1ZrvqV40f%2BSJRFnSZ6B5gKPbTcg0iIKUgkjgFR14NvzcY%2FyANE1uoCiqI3zDQF31f1x2rHW4IS5hhlrjdQp41WMvJl3VfSFCfg%2FKkHMFtP%2FU2t2syY6Jh2QYm2XSc5jcZVg775uO%2FS5gMQRWiStMHEZc0cu2kyEypBxMPrgclAe2NZMB1P5twI9WRdWIFqZsNLVsdo3EFBhzwHDQQVcSnZHpsXM3MJFOSmil3OMLazi8AGOqUBzp7hKdMJ6%2F%2FSpvtDeYQmyluvHNP0lN3TeHY2ChUWimt5WnWGv6C8hFIfZCzoM7dK5el3g4M0N9xhYZwgPq4dsV9S7CjoFkxJ%2Bj5IMTY%2FzUGOWNokb5YZPNq0XG5Mt6IEDrIoHzKWzCfejfEfWrXmFgvPwFuiCZdeHaX%2BJmxoYqNtw41OapgOc%2BfbHjCuFe6IZlHbtnCGAN6zymuEcTTsnKhbIQeI&X-Amz-Signature=f6bd644bb59ec8559b6f80ac5aa125ca6ba79efd9b2bdb35a1071d18f4adae44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
