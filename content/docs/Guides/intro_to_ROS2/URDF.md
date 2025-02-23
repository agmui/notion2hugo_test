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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUWUZSM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbtV8QLJq79aP%2FTgX%2FeNOp08FGtp5Nvdn602qRNVvNAIgDg3oF72LC%2Ftx0QExULrlGqhvzF4hHNci2tJomto32cgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDbzFlo%2FWyX8jbmrCSrcA2RHSzMiCqaJ3HOpv2Q%2B%2FYSGc9SDI8%2Fu51NHW8zGu%2FsG9DdtpkZhL5nYw0mDSS07WOEjoMLzClDFFHCZcttoI3zH7kzyL0o52l7caOPTAOclWhrDlbglxK4ZS4DbC4HSOlCkxGF3HWwaW%2FEZrMxINiMEKmVmGSXPeksUmbcXeBMUdJzdhq%2B28rSncG%2FNonohnsNi%2Bk9H4IJ9PI0VSzrkVTD29F4hchbVPjYZ105XwwzyqlZ5J05ESQ2DDIT8Rn7QvF6Z6nYdoROsJyX3YB5JekrJ9BvnyqLbcz8InZ%2BuSb3d5DkASnK3seEWD1tp2CNfpbAX%2FIbzmS6et1IWoV39IG%2BqkdNaffy6%2F6PmpJnDkbxLga9YWm58k3LGkoS%2B%2FXnkI9SUeWEz2IdJRuWlnFKzc13ZglUx%2ByLzc%2Fr9UWpik8lM6v9LvUsVmwLQm65uYa36Cfcntf3aon8NWqTt%2BaJrTfHfexQltYgLOHNaLiUe%2BlCZYwjNvO6pbN0nxarc%2BGzpWLyTzWYsSf9P5uTEj%2BgDfIjccB7j%2F0Ga%2Bp86Tc%2Fv5%2Fp7GOIA36TtumSAu6GubUgC8AGFSJtdZBYElg0rCKkvdDS4Ful6%2BY397ICrtgy6PErUz%2BgJgq6w3rMrUN0gMNvr7L0GOqUBdYqTTOp1UJFmzH3I%2B%2F7k1sGzonLm7jPWwk3cpxIsfCHJJFGuRhjXY5NLfYzKngXxvcNJcpPKSgYNJZV%2B49j%2FIXAi5HWEnV0SONCHxV5FNWpLRviS6UVOwHNwtg8L9T7%2BH2vrnq%2FdMvN1FNk%2FUrZhdSSJJ2uVeMv7NfneYD0c5OUljksbN%2BOvVaGGkKPb1FFDy1qOyejmgH6xvBbgHD%2B6uJ%2F4ShFy&X-Amz-Signature=b84779da852303c9ff4463e8922f1f1c81b6acb9585e31db109603b1e1330918&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUWUZSM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbtV8QLJq79aP%2FTgX%2FeNOp08FGtp5Nvdn602qRNVvNAIgDg3oF72LC%2Ftx0QExULrlGqhvzF4hHNci2tJomto32cgq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDbzFlo%2FWyX8jbmrCSrcA2RHSzMiCqaJ3HOpv2Q%2B%2FYSGc9SDI8%2Fu51NHW8zGu%2FsG9DdtpkZhL5nYw0mDSS07WOEjoMLzClDFFHCZcttoI3zH7kzyL0o52l7caOPTAOclWhrDlbglxK4ZS4DbC4HSOlCkxGF3HWwaW%2FEZrMxINiMEKmVmGSXPeksUmbcXeBMUdJzdhq%2B28rSncG%2FNonohnsNi%2Bk9H4IJ9PI0VSzrkVTD29F4hchbVPjYZ105XwwzyqlZ5J05ESQ2DDIT8Rn7QvF6Z6nYdoROsJyX3YB5JekrJ9BvnyqLbcz8InZ%2BuSb3d5DkASnK3seEWD1tp2CNfpbAX%2FIbzmS6et1IWoV39IG%2BqkdNaffy6%2F6PmpJnDkbxLga9YWm58k3LGkoS%2B%2FXnkI9SUeWEz2IdJRuWlnFKzc13ZglUx%2ByLzc%2Fr9UWpik8lM6v9LvUsVmwLQm65uYa36Cfcntf3aon8NWqTt%2BaJrTfHfexQltYgLOHNaLiUe%2BlCZYwjNvO6pbN0nxarc%2BGzpWLyTzWYsSf9P5uTEj%2BgDfIjccB7j%2F0Ga%2Bp86Tc%2Fv5%2Fp7GOIA36TtumSAu6GubUgC8AGFSJtdZBYElg0rCKkvdDS4Ful6%2BY397ICrtgy6PErUz%2BgJgq6w3rMrUN0gMNvr7L0GOqUBdYqTTOp1UJFmzH3I%2B%2F7k1sGzonLm7jPWwk3cpxIsfCHJJFGuRhjXY5NLfYzKngXxvcNJcpPKSgYNJZV%2B49j%2FIXAi5HWEnV0SONCHxV5FNWpLRviS6UVOwHNwtg8L9T7%2BH2vrnq%2FdMvN1FNk%2FUrZhdSSJJ2uVeMv7NfneYD0c5OUljksbN%2BOvVaGGkKPb1FFDy1qOyejmgH6xvBbgHD%2B6uJ%2F4ShFy&X-Amz-Signature=d5048ac727e7c168127843d1116fc37acb77ea785e6ca794f585304a7669c527&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
