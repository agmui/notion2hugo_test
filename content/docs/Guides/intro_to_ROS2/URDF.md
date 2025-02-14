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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML5AHI6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCxTrdEv70uxilGbXdHUTN7pWnWdHbyFFFUJcGl16zzFQIgJDfLrEuO8agIbQXlf4F3RaL8yBFTB1l%2BVAYAaKJQkx8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA8ubi%2FZd4YPMxxr1ircA1VIBxi4hcLUZ7XQnuSDjAR0lzo6hyGx4sgpvUvUad7rqYs6oij8H%2BdgKKlPgjZNJhVCfxqavIcNWEuK93rrWaps22vOOlY94EvGJi%2FsS2GpHjz8siIBWoXBakGiJdwoZSg6lorpsvqRj6QMzmVylVkym9O%2BxRzapFUbmBVYoPghQVUzquuJ9v51H94iV5vwAbFcNvQP5nSuN8LG1wglbH4L1A%2Brp%2FF%2B9z5kYYnQlxtbmYSSmrZ%2B4Dl8zBP%2FcAcuHB6pFuv4TjfR%2B%2FU3uI8GGhstpDbOUN%2BsnOtWDEAqMdTJjgRK54eLL8xGXGmu5Lm48VhXLp5XUYtIquYde%2B%2FeT37myVmrWErnPob08kMqzE3OKCifOJ6xvwUZIf2xEXTmxdYENOtDx6Ud8qY01%2BCq0cSV3H6HkpLDeIlHoqwy6AROJ3ipgr%2BjY3Y%2Bo1E%2BZhra1DCCGdViS%2Be%2FR1kDS6D7QXUsTnG2GdBN0fFvtq8pHqXaCkOF5CGrpszX5BXVLirCAcyyd79u0rFiT56ROKAxrHVMiY1scApua0Q9BYwF7BA7NnxJscfzuBOmG%2FDqw5%2FJIrvoLhwruxz2%2BFPMQ0NwGZHqr1%2F0bZH%2FvG0HPFjFVZ599s%2F8SaG2EVSsE4vzMIKyvL0GOqUB%2FNMcFCdswVQ6XiTNbd2rbJtR%2FnzwYjM6Ud9v8Vs0Seq8OE%2BqiSE5VM7ySAbW%2BKunVyNt2AF0gUHnnY42vdcQV1HYfOM6MgfsOI9I7xqUky%2Fs1Yr1SaA5xXhM15WNtEg9FLTgH8qOadNu5NdYZ3Q%2BRVN9XZFNjKzO0MlVjcQjJDtwRN%2BW0PZZxB9cNlZ2enwIvQkA%2FbANG8y4EcLw6JZTdfZV4%2Btn&X-Amz-Signature=8152917ee1f64bfdaaa13ea91e746c002bd00aedc0bf9248350406795b6c9a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML5AHI6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCxTrdEv70uxilGbXdHUTN7pWnWdHbyFFFUJcGl16zzFQIgJDfLrEuO8agIbQXlf4F3RaL8yBFTB1l%2BVAYAaKJQkx8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA8ubi%2FZd4YPMxxr1ircA1VIBxi4hcLUZ7XQnuSDjAR0lzo6hyGx4sgpvUvUad7rqYs6oij8H%2BdgKKlPgjZNJhVCfxqavIcNWEuK93rrWaps22vOOlY94EvGJi%2FsS2GpHjz8siIBWoXBakGiJdwoZSg6lorpsvqRj6QMzmVylVkym9O%2BxRzapFUbmBVYoPghQVUzquuJ9v51H94iV5vwAbFcNvQP5nSuN8LG1wglbH4L1A%2Brp%2FF%2B9z5kYYnQlxtbmYSSmrZ%2B4Dl8zBP%2FcAcuHB6pFuv4TjfR%2B%2FU3uI8GGhstpDbOUN%2BsnOtWDEAqMdTJjgRK54eLL8xGXGmu5Lm48VhXLp5XUYtIquYde%2B%2FeT37myVmrWErnPob08kMqzE3OKCifOJ6xvwUZIf2xEXTmxdYENOtDx6Ud8qY01%2BCq0cSV3H6HkpLDeIlHoqwy6AROJ3ipgr%2BjY3Y%2Bo1E%2BZhra1DCCGdViS%2Be%2FR1kDS6D7QXUsTnG2GdBN0fFvtq8pHqXaCkOF5CGrpszX5BXVLirCAcyyd79u0rFiT56ROKAxrHVMiY1scApua0Q9BYwF7BA7NnxJscfzuBOmG%2FDqw5%2FJIrvoLhwruxz2%2BFPMQ0NwGZHqr1%2F0bZH%2FvG0HPFjFVZ599s%2F8SaG2EVSsE4vzMIKyvL0GOqUB%2FNMcFCdswVQ6XiTNbd2rbJtR%2FnzwYjM6Ud9v8Vs0Seq8OE%2BqiSE5VM7ySAbW%2BKunVyNt2AF0gUHnnY42vdcQV1HYfOM6MgfsOI9I7xqUky%2Fs1Yr1SaA5xXhM15WNtEg9FLTgH8qOadNu5NdYZ3Q%2BRVN9XZFNjKzO0MlVjcQjJDtwRN%2BW0PZZxB9cNlZ2enwIvQkA%2FbANG8y4EcLw6JZTdfZV4%2Btn&X-Amz-Signature=efc02895113cd38aa99be72a0621e88697732ab3e3be0c854f7a56a244426b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
