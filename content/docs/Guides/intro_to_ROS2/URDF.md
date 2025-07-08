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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26LHP5L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCciZRcz6RVE3mxLEtWyqkdiBHP2JXyUavI3QqVAJZjEAIgaPQKwQlBSSFySAKtBNhzJZ3cYQ6aAj0%2BxIYYNPas4YUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITzwSmabwacVPZYwCrcA8DRyVbFdcaIEyfqt%2FB9HHyE0jeMXiJrrR1MxVMvo4RVre0Hn3rUZt4LIxWsc4TZc6Aq4DYhYuNH7YR1vPRhTREwzx%2BqbYCzSfi0R2sK8Ds6RmOoW3b44u5u%2FncmVFYA4pk9rmzkj1Nk2PSoFI21BcpNXo3ECuXTj3JPef1tTaJsNw4MeXD2o4S365t2r4GXaU0RS%2FPle9SkzzrhDsZY%2B%2BTXRCvIQru1%2BzGAgBEy6j6rcEE2iV%2Bch8cQtRxr5%2FWXpWguWlWX%2BX2j78nufD4nMAojLsRmpJwzdk62nV66EzDZAgtXftgeJwC7ovN0VluiTk1B4Arq0Ulp%2B68RGDVuTozQV1EOiUdRqqxpN8RzJORdDf5wzRo0omnWbpx8kov%2BiuL5LkPkwglWWjYDI83Dy7kwU1Atz0fS%2Fe%2FJ28v8zTDBj%2BIlPUcGHvujcFK82fm2QFk8jen6HWPLWaJHhxQvi9ilRcfo0lXzBh24rzJIirhUlfyvejqnfZlWTieSsXazt%2FaNv85N3UKBUtaiKxCXIYPvjrhj1UfO8lGlbs9E4juGSz5UXLhDlPnYNFFAhF0DsE%2BYK51%2Famws8szTX1MZ30eCeAYcxZ2LdNH9I9TrjqHFcqvRLgDa2NYDtUAMMP7Hs8MGOqUBUMmFdRXXt1%2FgbaJHDrRGMe1MiGNyTZRAhvq4K1KoUf8oX3bQGCJS%2Bk%2BVGOPZvDqkgpRTW8veV87nYx3CbHWgzJr9wCrXxwcUJ%2BnSpy36pcbM12DAfsYtA1x0y5hMTneYQIZXr1Zkgfxk48qPGj%2FE%2Bjglns1%2F3hGzcqLztSRRobH5u4bdsJ1dXTgWHC0ye57A81UoG9K%2BGs%2B7nBIi1xHkir5hWDIi&X-Amz-Signature=6abfc517587f0e214464e033c84441dabd27ad49e1e727dc216a72d823b4b525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26LHP5L%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCciZRcz6RVE3mxLEtWyqkdiBHP2JXyUavI3QqVAJZjEAIgaPQKwQlBSSFySAKtBNhzJZ3cYQ6aAj0%2BxIYYNPas4YUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITzwSmabwacVPZYwCrcA8DRyVbFdcaIEyfqt%2FB9HHyE0jeMXiJrrR1MxVMvo4RVre0Hn3rUZt4LIxWsc4TZc6Aq4DYhYuNH7YR1vPRhTREwzx%2BqbYCzSfi0R2sK8Ds6RmOoW3b44u5u%2FncmVFYA4pk9rmzkj1Nk2PSoFI21BcpNXo3ECuXTj3JPef1tTaJsNw4MeXD2o4S365t2r4GXaU0RS%2FPle9SkzzrhDsZY%2B%2BTXRCvIQru1%2BzGAgBEy6j6rcEE2iV%2Bch8cQtRxr5%2FWXpWguWlWX%2BX2j78nufD4nMAojLsRmpJwzdk62nV66EzDZAgtXftgeJwC7ovN0VluiTk1B4Arq0Ulp%2B68RGDVuTozQV1EOiUdRqqxpN8RzJORdDf5wzRo0omnWbpx8kov%2BiuL5LkPkwglWWjYDI83Dy7kwU1Atz0fS%2Fe%2FJ28v8zTDBj%2BIlPUcGHvujcFK82fm2QFk8jen6HWPLWaJHhxQvi9ilRcfo0lXzBh24rzJIirhUlfyvejqnfZlWTieSsXazt%2FaNv85N3UKBUtaiKxCXIYPvjrhj1UfO8lGlbs9E4juGSz5UXLhDlPnYNFFAhF0DsE%2BYK51%2Famws8szTX1MZ30eCeAYcxZ2LdNH9I9TrjqHFcqvRLgDa2NYDtUAMMP7Hs8MGOqUBUMmFdRXXt1%2FgbaJHDrRGMe1MiGNyTZRAhvq4K1KoUf8oX3bQGCJS%2Bk%2BVGOPZvDqkgpRTW8veV87nYx3CbHWgzJr9wCrXxwcUJ%2BnSpy36pcbM12DAfsYtA1x0y5hMTneYQIZXr1Zkgfxk48qPGj%2FE%2Bjglns1%2F3hGzcqLztSRRobH5u4bdsJ1dXTgWHC0ye57A81UoG9K%2BGs%2B7nBIi1xHkir5hWDIi&X-Amz-Signature=3b52525e8c52dd6fd620b3aab792f0ea24070a86f6627f15f8f7ba642e958258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
