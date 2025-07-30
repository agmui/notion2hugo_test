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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRSIFHF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyBEaJXc3YnoY05qhCaCpcCXzlMBx9eDBYwXEcof774AiEAj7Pkmb1rxeedOneWIkw0jb10z8%2FwZvyuWV%2BmJpS5vikqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtl6wnVmMT2FWcDgSrcAwZUwj708n1%2FN%2BQp%2BnJuV12AdpHuPitJfgzPAXjMBxrAm8QSKssDz4J%2BL9ggUc%2FAxi3rj%2FRju8LELZcDxgM25AE2ihNRbzSIeQHrViGk%2FB%2Fd5LKJRhtG2NhYJyjE%2Bc%2FR4hNZ8aZx4fNdZbDJre9yD1ofqwTYxuLrKFjteCb%2BNtk8CfYThFxMgVirWuNsoqC5Dk0zIurWaJPv5JgaCWBVQrqjHcxZePZFJsD6E%2BOjeMDeEj03yg88qFgjv2yIuNoahi1tM70DM5UZPPl8rCyQDcMdr3Zk%2BQskPdDF87leLAdIWy%2BDNCHjUtwCEQa9jkMMLm8IGFzmM04hBkn14YcD1ywFchCLi49tm2RoNV3EIGmny2ZWnb%2FDniwoyhfEz4kT3OmdgTN4%2ByeWfHZm2ql4nglf5ljZed4lscyzTVdKmVoJTaCHqcvGdy9scn4V3sf3v4VCJDOnd%2B1eFN06DIdzzHgarF7M17XzT7YhwHG7eB1q%2F5WRV6LgsX%2BJQtydYjBKYL3f%2FyllRPciJdvO5MHe2sQw4iDRvv0%2F3zLuxh4KCBMzgY1NKMluT1jmopXVmC6%2BG5XKDxm306rvdsF6p3r%2FWBOSOM3Sborwb6CTD2c7dltEuG6miBprDwxIK2yNMLHoqcQGOqUBFOSVv4JCz4S88LLo79zp2h2nfa7zIHkbdRPnlkW84PjGBaqgzUXttCdL5izxaIFP45TZsDXsVKPXXmCiXXhj8HBHVh4H7biE1ccK%2FF4iyRv1VvOO5c5FuHtGawhHbSQwJaVB0K%2BUkykyrgkkjtw%2FrbUYKAPEbl7YPR%2FHaJuiY9ZXKjOCSSQHzfhIlnT3Dgz1Zg3cn6P2YfABxRcegpge%2BwkWup%2Be&X-Amz-Signature=76f70fdf02cd9f04cd2a3258619762635d52802d2b8a4d45e0381913767b38bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRSIFHF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyBEaJXc3YnoY05qhCaCpcCXzlMBx9eDBYwXEcof774AiEAj7Pkmb1rxeedOneWIkw0jb10z8%2FwZvyuWV%2BmJpS5vikqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtl6wnVmMT2FWcDgSrcAwZUwj708n1%2FN%2BQp%2BnJuV12AdpHuPitJfgzPAXjMBxrAm8QSKssDz4J%2BL9ggUc%2FAxi3rj%2FRju8LELZcDxgM25AE2ihNRbzSIeQHrViGk%2FB%2Fd5LKJRhtG2NhYJyjE%2Bc%2FR4hNZ8aZx4fNdZbDJre9yD1ofqwTYxuLrKFjteCb%2BNtk8CfYThFxMgVirWuNsoqC5Dk0zIurWaJPv5JgaCWBVQrqjHcxZePZFJsD6E%2BOjeMDeEj03yg88qFgjv2yIuNoahi1tM70DM5UZPPl8rCyQDcMdr3Zk%2BQskPdDF87leLAdIWy%2BDNCHjUtwCEQa9jkMMLm8IGFzmM04hBkn14YcD1ywFchCLi49tm2RoNV3EIGmny2ZWnb%2FDniwoyhfEz4kT3OmdgTN4%2ByeWfHZm2ql4nglf5ljZed4lscyzTVdKmVoJTaCHqcvGdy9scn4V3sf3v4VCJDOnd%2B1eFN06DIdzzHgarF7M17XzT7YhwHG7eB1q%2F5WRV6LgsX%2BJQtydYjBKYL3f%2FyllRPciJdvO5MHe2sQw4iDRvv0%2F3zLuxh4KCBMzgY1NKMluT1jmopXVmC6%2BG5XKDxm306rvdsF6p3r%2FWBOSOM3Sborwb6CTD2c7dltEuG6miBprDwxIK2yNMLHoqcQGOqUBFOSVv4JCz4S88LLo79zp2h2nfa7zIHkbdRPnlkW84PjGBaqgzUXttCdL5izxaIFP45TZsDXsVKPXXmCiXXhj8HBHVh4H7biE1ccK%2FF4iyRv1VvOO5c5FuHtGawhHbSQwJaVB0K%2BUkykyrgkkjtw%2FrbUYKAPEbl7YPR%2FHaJuiY9ZXKjOCSSQHzfhIlnT3Dgz1Zg3cn6P2YfABxRcegpge%2BwkWup%2Be&X-Amz-Signature=d338f859359563a394a1c755d40802f8bef61584e05b94767b23998f5bcb3543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
