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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWMMQLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEutHo0%2FzhYSq5%2BlFlU3X1MA1Zl5kvIPEKldFF5ReEntAiBoiAs21xJQOxiqVYccT%2BDUx41Lkfj7%2FHuVN4MhtabAQir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMb69krL4NiBigUoyCKtwDwHNi3XCI%2F5PW%2Ffxpmpyo3X8zTqVERgKOlPVIC8g5MXu%2FDTXeyi1MYoHQVkYftxO1HQydTaCSPVWHNrW%2FTE2bbdQhmzF2eIehpdFAGSw407aQCi0H4nGqaQ%2BP68iCD%2BzrHK2CzIOQRgCCGZU196CBr3v4sIYQMvKGbXioKgWyi2cKvw4NYuYJLfpujT7DGzrfTsFHCsISxduNcXKBbKGF80EHsXwXZUQAottnn5wgISA4hFHTJYl00Xwf9vdmgjd8%2BNG1XF1B6XCBF2Laq3B9AEi69AkZGu8mtQOyEX%2BMUS7Vcca78qVWmKABDdPT4ExijacETQskLa6rjzowraWMtIZDDR3XE5Mq5IcMDjjE9MpNbHEbUhSDOHxaAdlUyU0Y0YQVSxrtjn6xkC9rhsEI6XIN2CIr4XFOAQZ9lnbQNHTTpLWlyFHIARL3cGSopt%2BljzSJpYSfbIb%2B1wtsd6duvt1Wy3M3g95%2FeI%2B0vFJzj76C3B%2BRelQ20lnpf%2BV1t4h5U9N5WGBx6u%2FSjrkLBCwTITt27Nur28FoQsOuRAw%2BzjLxsE2Qf21cYCNthRcIvRIkQIY%2FosBHZ9mM2Q%2BWFZBVkozqFO0WCdetEqwgqKLo%2BbMAWzSywP7tZ5yUL6Mwt4qhvwY6pgEoVNFNFPnW6jGw3nBCI763Rz4WccuKFeAO75y189EJ2bhLpH8sHBA7duwS4NIJ19dfhms9hJdrXLPGzwtnTnwqckBgRJPWq34u2YOCuu%2BlV4VxaYPKGEfACYkig7uL4NFc8kvCNGGkNjO3VUKjL%2FuxQ3LcuTQ1YCbXfv1%2BLfPB%2FnQrdK4C0ctCpSk1WuuShR%2FJ1JyJWTmZGM8qUsjvLub31CYHfoUj&X-Amz-Signature=838fc66eae1c1a4ee864ce93156d11b6196362ab6b41429a273489c4afecfa83&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWMMQLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEutHo0%2FzhYSq5%2BlFlU3X1MA1Zl5kvIPEKldFF5ReEntAiBoiAs21xJQOxiqVYccT%2BDUx41Lkfj7%2FHuVN4MhtabAQir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMb69krL4NiBigUoyCKtwDwHNi3XCI%2F5PW%2Ffxpmpyo3X8zTqVERgKOlPVIC8g5MXu%2FDTXeyi1MYoHQVkYftxO1HQydTaCSPVWHNrW%2FTE2bbdQhmzF2eIehpdFAGSw407aQCi0H4nGqaQ%2BP68iCD%2BzrHK2CzIOQRgCCGZU196CBr3v4sIYQMvKGbXioKgWyi2cKvw4NYuYJLfpujT7DGzrfTsFHCsISxduNcXKBbKGF80EHsXwXZUQAottnn5wgISA4hFHTJYl00Xwf9vdmgjd8%2BNG1XF1B6XCBF2Laq3B9AEi69AkZGu8mtQOyEX%2BMUS7Vcca78qVWmKABDdPT4ExijacETQskLa6rjzowraWMtIZDDR3XE5Mq5IcMDjjE9MpNbHEbUhSDOHxaAdlUyU0Y0YQVSxrtjn6xkC9rhsEI6XIN2CIr4XFOAQZ9lnbQNHTTpLWlyFHIARL3cGSopt%2BljzSJpYSfbIb%2B1wtsd6duvt1Wy3M3g95%2FeI%2B0vFJzj76C3B%2BRelQ20lnpf%2BV1t4h5U9N5WGBx6u%2FSjrkLBCwTITt27Nur28FoQsOuRAw%2BzjLxsE2Qf21cYCNthRcIvRIkQIY%2FosBHZ9mM2Q%2BWFZBVkozqFO0WCdetEqwgqKLo%2BbMAWzSywP7tZ5yUL6Mwt4qhvwY6pgEoVNFNFPnW6jGw3nBCI763Rz4WccuKFeAO75y189EJ2bhLpH8sHBA7duwS4NIJ19dfhms9hJdrXLPGzwtnTnwqckBgRJPWq34u2YOCuu%2BlV4VxaYPKGEfACYkig7uL4NFc8kvCNGGkNjO3VUKjL%2FuxQ3LcuTQ1YCbXfv1%2BLfPB%2FnQrdK4C0ctCpSk1WuuShR%2FJ1JyJWTmZGM8qUsjvLub31CYHfoUj&X-Amz-Signature=1e0c6632de30bec498f23d8a0136f7362dc373a754ad10a3af11092cbcaa56e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
