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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AIZFGO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjVh%2F09RZ2WMwLzi5BgoVfet4%2FDdi97vz22LUnVXeQgAIgYXpQYheAbho1Lr0xOkwSCIAaWgXo70ZI1iFbp0B4etUq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHtcYn%2BI06D%2BbXaeLSrcA70Qb053gCA%2BtXYwwHjO0V03VibwKev2uFHiXgMYN58njJCv%2BbkB6T8YjGJ%2FXlctYC%2FM0qhnoxb6FcV2sAB2lSCQqLDZQwHw86M5u6EBYReNuxPA%2FYz6Il84ihb%2B5ZOSgrDNGLLy4sFu5d1V1Yq0vxXmaOcJH4TbQJ4hFtznH0HPYWt3yRl1DWVFbgLtGPlwlWFo4wSAwVNpmbOXo%2FOQ56jeqJjzGW8uN8szYn4Q%2FBdr4XNdQxCTacG67w8V9p8%2FZoHAZ84QsfJtC7CSDunzoAvSC%2BCP223qupbBJpL4x9Xpbp%2FgEc3Cp4lwPu1iBz6wx1Cpk1pCx1HGHGtdf9k7%2BqAPTfisxJ4EaeW5tSWLFF775sSYBoS%2Bu5t6oBwl7CcyaNhAhfvEKqE6L6nyZwKxN7zzUBk6Ls7HQkNWU0KJwLK4RF6sGMRNp5KBil4NnU%2F6NpK0klrrzu9SEHH96U94krYhwcyoQVosvaJPVASSrF58znQhKG9dxtU%2BaQ0E6CZ9DudhhAa5qgEcKmVnssb8IQixWv4H%2F9HeiKG0ZmfgUySaKfMMl5CAAVCogFXpfIfwHqJGPJ%2F1MIHO9VSXHFSyg3ugIxinxb8EI4v1CDgxf792WeiDEmfQ8I8LJcSlMLKWz8MGOqUBLw90UXpa02OfhDiSqtutZtSq9hlu%2FBjNMHxNHxWzBNeOQIJ4E6goOPk4CQ6zVxfSCNkFqcYZUhnxX2uI3RAnrmibtXFe8cJrQ4YRIZrKG4w9ji0Z2bBhraGUBXtqGuAyxfDIV47HInHgvikdkbir7u0KIGCikJMlB9dWk37oH9SJ0cXXzbDwr6LItd3CxjTfhMBpP%2Fcl8U5GTJIHAZCe1GvYg3Wo&X-Amz-Signature=3cd32477ab716fe59546135f8c65d17eadf0eb9fa112c31611feedbfbe5e5e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AIZFGO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjVh%2F09RZ2WMwLzi5BgoVfet4%2FDdi97vz22LUnVXeQgAIgYXpQYheAbho1Lr0xOkwSCIAaWgXo70ZI1iFbp0B4etUq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHtcYn%2BI06D%2BbXaeLSrcA70Qb053gCA%2BtXYwwHjO0V03VibwKev2uFHiXgMYN58njJCv%2BbkB6T8YjGJ%2FXlctYC%2FM0qhnoxb6FcV2sAB2lSCQqLDZQwHw86M5u6EBYReNuxPA%2FYz6Il84ihb%2B5ZOSgrDNGLLy4sFu5d1V1Yq0vxXmaOcJH4TbQJ4hFtznH0HPYWt3yRl1DWVFbgLtGPlwlWFo4wSAwVNpmbOXo%2FOQ56jeqJjzGW8uN8szYn4Q%2FBdr4XNdQxCTacG67w8V9p8%2FZoHAZ84QsfJtC7CSDunzoAvSC%2BCP223qupbBJpL4x9Xpbp%2FgEc3Cp4lwPu1iBz6wx1Cpk1pCx1HGHGtdf9k7%2BqAPTfisxJ4EaeW5tSWLFF775sSYBoS%2Bu5t6oBwl7CcyaNhAhfvEKqE6L6nyZwKxN7zzUBk6Ls7HQkNWU0KJwLK4RF6sGMRNp5KBil4NnU%2F6NpK0klrrzu9SEHH96U94krYhwcyoQVosvaJPVASSrF58znQhKG9dxtU%2BaQ0E6CZ9DudhhAa5qgEcKmVnssb8IQixWv4H%2F9HeiKG0ZmfgUySaKfMMl5CAAVCogFXpfIfwHqJGPJ%2F1MIHO9VSXHFSyg3ugIxinxb8EI4v1CDgxf792WeiDEmfQ8I8LJcSlMLKWz8MGOqUBLw90UXpa02OfhDiSqtutZtSq9hlu%2FBjNMHxNHxWzBNeOQIJ4E6goOPk4CQ6zVxfSCNkFqcYZUhnxX2uI3RAnrmibtXFe8cJrQ4YRIZrKG4w9ji0Z2bBhraGUBXtqGuAyxfDIV47HInHgvikdkbir7u0KIGCikJMlB9dWk37oH9SJ0cXXzbDwr6LItd3CxjTfhMBpP%2Fcl8U5GTJIHAZCe1GvYg3Wo&X-Amz-Signature=eff54d9811eb2d61d4311bce57979566684f355191340e5f8d565492ad23c4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
