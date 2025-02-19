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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2HRZDE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH66y2ziLFt7rxOjWvhC5mMpxhAQ1Cb69Migw6TMHQGZAiEAsiHqNXfu38cb%2F2TxSM4f%2F%2FmELe5Dx3kCJapCj4WkVNYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGmBcH5%2BBon43psrircA3c4UPg6wqCl8neRHxrXp%2B0qgSf9YGXKHjHlWOo%2FKKD%2Bx49ciXfg1sEd8%2BvI1Vj40KSiye%2BBhsJoALnT%2BXXZXWheq11eFS1lnPampXnqT0YH8aMHOpCBshIUboWRLyTv%2BFHOsVVnDK%2BBnjCRymuWrCPgwuzSbT4V8nzOI4tMk9J5m4R28ohmEZCJa23vGruG%2Bu503QExM9co1mwjEVL5YHdHcYcuqOI5DKtbPeud0bDGqH4LTtzwPDBavnsHKZH1tBDepUpI16Ut5CsORzCbK%2FF0QS%2Bz5Hwn9pZJs%2B41WUak1xFVVK0oMqt7Pg5qDX1kGm735VfvqW5yrIoG%2B6H9MWfPh9C18c1%2FG4Oez%2F72OMq1ixmSwd2TZleKM38vkxIisDNxMcG0pOc2KYdi6olBQGPlVnbyoeKIUCuzltvcC7i9ApMVLwPUjbOCW3cGoDnty3jvbaVqyM%2F3r4flCSJ0QK5ls96AaK70fbzjUQmleemxWTO0eZOnJs0%2B00brgkqqipzoS9HFJ%2BRNoJW1qFfjRz1NeKZwL3x2Gh%2FVU452v7LbKSjTKN09ADer32Uw98M7DnCY2FWM4uwvH0BKVMEAY3yvXttuVEdHCwkx71hHaJGmsy%2FXhiccYDenqeokMMX71r0GOqUBzYHcCIXxp%2Bb3mUnKgHkhGpyMj2NG66r8IIUCRdvcSN5UXPeEQB4buP4kNi1lC2yoYzorV4lc7xyqDGDFLsem0qO0GSyfgIBUTvvcBC6wxEcJzmbfDmzcsqmPgLjoJhzQ09bAFgPf7x3Ba4EOMLcBrQ%2FIdHBltP%2F%2Fk3lDYMsLSEKc5IvGqp8ZfWYfOVvlXb9xQ%2FOUeD0%2FZdPuTd2%2BpH37WSp6JnMd&X-Amz-Signature=11035d213005aadc2ad666a7e850a99c53a41c6ccef472a3951a3ff43bfd56e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2HRZDE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIH66y2ziLFt7rxOjWvhC5mMpxhAQ1Cb69Migw6TMHQGZAiEAsiHqNXfu38cb%2F2TxSM4f%2F%2FmELe5Dx3kCJapCj4WkVNYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGmBcH5%2BBon43psrircA3c4UPg6wqCl8neRHxrXp%2B0qgSf9YGXKHjHlWOo%2FKKD%2Bx49ciXfg1sEd8%2BvI1Vj40KSiye%2BBhsJoALnT%2BXXZXWheq11eFS1lnPampXnqT0YH8aMHOpCBshIUboWRLyTv%2BFHOsVVnDK%2BBnjCRymuWrCPgwuzSbT4V8nzOI4tMk9J5m4R28ohmEZCJa23vGruG%2Bu503QExM9co1mwjEVL5YHdHcYcuqOI5DKtbPeud0bDGqH4LTtzwPDBavnsHKZH1tBDepUpI16Ut5CsORzCbK%2FF0QS%2Bz5Hwn9pZJs%2B41WUak1xFVVK0oMqt7Pg5qDX1kGm735VfvqW5yrIoG%2B6H9MWfPh9C18c1%2FG4Oez%2F72OMq1ixmSwd2TZleKM38vkxIisDNxMcG0pOc2KYdi6olBQGPlVnbyoeKIUCuzltvcC7i9ApMVLwPUjbOCW3cGoDnty3jvbaVqyM%2F3r4flCSJ0QK5ls96AaK70fbzjUQmleemxWTO0eZOnJs0%2B00brgkqqipzoS9HFJ%2BRNoJW1qFfjRz1NeKZwL3x2Gh%2FVU452v7LbKSjTKN09ADer32Uw98M7DnCY2FWM4uwvH0BKVMEAY3yvXttuVEdHCwkx71hHaJGmsy%2FXhiccYDenqeokMMX71r0GOqUBzYHcCIXxp%2Bb3mUnKgHkhGpyMj2NG66r8IIUCRdvcSN5UXPeEQB4buP4kNi1lC2yoYzorV4lc7xyqDGDFLsem0qO0GSyfgIBUTvvcBC6wxEcJzmbfDmzcsqmPgLjoJhzQ09bAFgPf7x3Ba4EOMLcBrQ%2FIdHBltP%2F%2Fk3lDYMsLSEKc5IvGqp8ZfWYfOVvlXb9xQ%2FOUeD0%2FZdPuTd2%2BpH37WSp6JnMd&X-Amz-Signature=f1bc130594bcdbcbd114be90f481588815818e2a69de06d6b8ab1175b5f535b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
