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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWLNGX4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Ikcgh1LenTRQZVe4G45ACAeetLYrin3sda2OCkuv4AiEAwRwF8O5d5NS6bWsLFsGCHTTbHUC4BYZJ0CmdRZzrUHkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE80wISmXoprwBWR8CrcA37ElhnftwBISGtUjCj5gdnYbXVTJJNnxmPwA%2BYuzYWMLR%2BtdO1IeFjhy1SGETupyLcIJ2RfgqHASA2a%2BseTv3CeV2ZpmL3aOdx3fKtNL7iYAQBRhOQt2b2APokcx1daZ6eyVPYwTRvBGW%2B1tec6Emz6MHpl7rlaakk5wWtFRb1npKc6spYPWoiHe4eRz4zQ%2FgidIuVgybqZObdb2aDjHci4nrwiEjNyvSQSUZpZdAhWedWSFEWAQF8Sbi4piMwyGTC13b2EZ7rTLphosAzz1E0WmC%2FIadr8q4fDhv2ivgmvT2xBOYglAoQa42xOr%2FzPWRDnnMK7wP%2FVrBD%2BoCoyXAjdQYmzn0grdvjI%2Bd0NX42bgKGK6RcNibW5FUV%2FggWJWwYns4tHRldbzwmjk2kSk1RF8hpkXEcw079u6qw%2FYIHdAr2mdZOZXamhG0R3ri2kwej5anPdFq2XE3n4RVt1vVsLRqV2CW0op3KdjK1yo4y7s%2FoG0mRw0lWnGTZFv7v0y9AV2Z2I7TqhDwupQpShWjLsuvhtlbYu5jlqIYCtzrFRtA6ZmtNSkfEeLiJd20sTjjwpH%2By5iCVMevYRCaCMKm0W99OZAZHjeL7y1KhgMLboUrkXO482QqrQUvCgMJmw2MIGOqUBCnz%2FqwdBlKVyIn4UFYdz6%2BCLznKDssG7nlumuBvfZMVxo60ayqtdK8XrX2OurVvOu67suSbgXHZlR%2B1XlBZXSnVkgBs%2Froiyp2FroxGZvMzAczqMUcf0UQ%2FKKqjaENHXgLzXt5pAc0vPNHxN2G4RnbGKEvY5wYanfDyExhYcXFjls9hXGE9di5FrBjIZL1uLJvlS0SzJUP6r6OXG3BFXiGtsZoqf&X-Amz-Signature=0e208037f8bcb9476f3c411331c10c78f0989c8783518e2ab03efc1d9ecdbccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWLNGX4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Ikcgh1LenTRQZVe4G45ACAeetLYrin3sda2OCkuv4AiEAwRwF8O5d5NS6bWsLFsGCHTTbHUC4BYZJ0CmdRZzrUHkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE80wISmXoprwBWR8CrcA37ElhnftwBISGtUjCj5gdnYbXVTJJNnxmPwA%2BYuzYWMLR%2BtdO1IeFjhy1SGETupyLcIJ2RfgqHASA2a%2BseTv3CeV2ZpmL3aOdx3fKtNL7iYAQBRhOQt2b2APokcx1daZ6eyVPYwTRvBGW%2B1tec6Emz6MHpl7rlaakk5wWtFRb1npKc6spYPWoiHe4eRz4zQ%2FgidIuVgybqZObdb2aDjHci4nrwiEjNyvSQSUZpZdAhWedWSFEWAQF8Sbi4piMwyGTC13b2EZ7rTLphosAzz1E0WmC%2FIadr8q4fDhv2ivgmvT2xBOYglAoQa42xOr%2FzPWRDnnMK7wP%2FVrBD%2BoCoyXAjdQYmzn0grdvjI%2Bd0NX42bgKGK6RcNibW5FUV%2FggWJWwYns4tHRldbzwmjk2kSk1RF8hpkXEcw079u6qw%2FYIHdAr2mdZOZXamhG0R3ri2kwej5anPdFq2XE3n4RVt1vVsLRqV2CW0op3KdjK1yo4y7s%2FoG0mRw0lWnGTZFv7v0y9AV2Z2I7TqhDwupQpShWjLsuvhtlbYu5jlqIYCtzrFRtA6ZmtNSkfEeLiJd20sTjjwpH%2By5iCVMevYRCaCMKm0W99OZAZHjeL7y1KhgMLboUrkXO482QqrQUvCgMJmw2MIGOqUBCnz%2FqwdBlKVyIn4UFYdz6%2BCLznKDssG7nlumuBvfZMVxo60ayqtdK8XrX2OurVvOu67suSbgXHZlR%2B1XlBZXSnVkgBs%2Froiyp2FroxGZvMzAczqMUcf0UQ%2FKKqjaENHXgLzXt5pAc0vPNHxN2G4RnbGKEvY5wYanfDyExhYcXFjls9hXGE9di5FrBjIZL1uLJvlS0SzJUP6r6OXG3BFXiGtsZoqf&X-Amz-Signature=2cd9cdc051543e597c3efebd991b02a5101a40ad8082cfdbf26a84452b828057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
