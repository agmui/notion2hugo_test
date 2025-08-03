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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZRLWY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRaoeOvXbFOZJPS76W%2FfPlkl9J4W8RC9NtK%2F2AXlggDAiEA0iuXVQJ2TnREfo%2B8lDdqT5v%2B5zyw355SjCX%2Fy2WSfI0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLXvbC9PzfjQxTIHIyrcAyy3rKMXyia7sj%2BETLgYjsYPRFBBIBah4Dof0rj4HIrpHRZGxVf5IYgXwezY%2FU0ZTbXkovbSp3%2B02qxE6pGemWUufYtpx4iGhEf3tC%2BKTevLqkLm%2BtljsCFS558NMOQUWQxoNc61UHFfpUadRmgPxMw2EET2q7xJ66f3g0xPoFxo6rBUAtTHxM83bFOpJjfKKFGbYRUm8NWWYk5WTNPLiT5a2ma%2BD042sYg9kkGN5sGXtRT2UPzx8fOCp3c0r26ZZLkrFiJe16at8lrzYXBiyoc0Bj6jRj2zYSbdIsavDsCuXQI1MS6DZ5PV0L8rQvB%2FXtuciSDDHmvr4nyqqYbit%2Fm0LT7eQ1wOyKb9YmWMHoOC2hlfnESgVAFsJ5PoxaE%2B8vPWWIygMI%2Bb0S0k96FUX0cDC3LGXoA1O7hNx7EwUttNuS%2Fq1gpV8%2FEUOpsM6ygRjR1TnsOQOoRSdNdlV7naYTc%2Fcs8ocmkyvjQHthrFW1vs0DQz%2FrwVEkaK137LIV16HAkHJNuFIEJdZaEU1zMZffYJKI8CMtv5s9uOui9IB9soH3A4%2FgdmC3t6%2BnpFwz7hwJlJXMp9uQOZx4ApZnOuliO44XEqZCsYx5hzXdHBPvcAhHjsyI74lQalXEV4MLaAusQGOqUB610zOOyz0E1zrdp4O%2BbijNEwTRoC%2FXvAA4E0TWGtg3WFBQ3Fkh8HuzgcS0kmmtpv8b4xFg9RbDcou4YH5%2FMYLjRvDu4JJ42muVPLauYLYhD94rB0VL6yYWkYRdXEadIjHsdW6bjRR%2BJ1bwDukN7D9gPwH5JXtTQ21QR93%2FLAIDRPLN8jyGwFTGBcAGgO6%2FzZr9ssKuJumL6ZoPAD%2BqDmWKfpkuQ9&X-Amz-Signature=cdfe33f72a8f5b3d0de5d59b405f231baf43a7614720339a6a82d55f03401002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZRLWY2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRaoeOvXbFOZJPS76W%2FfPlkl9J4W8RC9NtK%2F2AXlggDAiEA0iuXVQJ2TnREfo%2B8lDdqT5v%2B5zyw355SjCX%2Fy2WSfI0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLXvbC9PzfjQxTIHIyrcAyy3rKMXyia7sj%2BETLgYjsYPRFBBIBah4Dof0rj4HIrpHRZGxVf5IYgXwezY%2FU0ZTbXkovbSp3%2B02qxE6pGemWUufYtpx4iGhEf3tC%2BKTevLqkLm%2BtljsCFS558NMOQUWQxoNc61UHFfpUadRmgPxMw2EET2q7xJ66f3g0xPoFxo6rBUAtTHxM83bFOpJjfKKFGbYRUm8NWWYk5WTNPLiT5a2ma%2BD042sYg9kkGN5sGXtRT2UPzx8fOCp3c0r26ZZLkrFiJe16at8lrzYXBiyoc0Bj6jRj2zYSbdIsavDsCuXQI1MS6DZ5PV0L8rQvB%2FXtuciSDDHmvr4nyqqYbit%2Fm0LT7eQ1wOyKb9YmWMHoOC2hlfnESgVAFsJ5PoxaE%2B8vPWWIygMI%2Bb0S0k96FUX0cDC3LGXoA1O7hNx7EwUttNuS%2Fq1gpV8%2FEUOpsM6ygRjR1TnsOQOoRSdNdlV7naYTc%2Fcs8ocmkyvjQHthrFW1vs0DQz%2FrwVEkaK137LIV16HAkHJNuFIEJdZaEU1zMZffYJKI8CMtv5s9uOui9IB9soH3A4%2FgdmC3t6%2BnpFwz7hwJlJXMp9uQOZx4ApZnOuliO44XEqZCsYx5hzXdHBPvcAhHjsyI74lQalXEV4MLaAusQGOqUB610zOOyz0E1zrdp4O%2BbijNEwTRoC%2FXvAA4E0TWGtg3WFBQ3Fkh8HuzgcS0kmmtpv8b4xFg9RbDcou4YH5%2FMYLjRvDu4JJ42muVPLauYLYhD94rB0VL6yYWkYRdXEadIjHsdW6bjRR%2BJ1bwDukN7D9gPwH5JXtTQ21QR93%2FLAIDRPLN8jyGwFTGBcAGgO6%2FzZr9ssKuJumL6ZoPAD%2BqDmWKfpkuQ9&X-Amz-Signature=331cf16bbd99b650858cb37aea24fc4cb8605ba88e2738fe0530cac54b188c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
