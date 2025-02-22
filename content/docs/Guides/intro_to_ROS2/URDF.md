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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI5ZD2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ZObOxxvxP8%2BZA2pyDclvLxisy8UotoMCPRJpRznYEQIgC5PM3QM7qsI4QUN0ZwnfzeW7q1%2B0AQ7o9CBZQ6HACpcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBq7DL1iYBPgr%2B5nyrcA8%2FMzmGqD9e%2B03GfATLaGuCOelZ54fXQagpCwYdXjjfmCMh2riJOapOzePMkhUfhMgR4J3rCJ%2F9Sla7y3Iv7lDwKZE6sxLNzLZ1RP%2Fzj2lxCh2zO%2F4TKP8S%2FEEaZwUPHis86pW8gxsURyKwenA9mqVitkfJlznCKw2JJUZ1R3qO9iubQXVWWYBzazBSzpvea20JLsj6k01oO1aFhUHZnyxVMi1Y6xgeJ8C30eKNWxKeo62WrCKKqWTVTavE7HS7odQF%2FY2bN8Az3MrixjWiCcnmhQt59idrSe7knztBtVv3uPbJ4cJ5h%2FU5ZSEaZGN3xdel8Z4gwuJ95S0ZlLVxmwkdM%2BZN2Z2%2BEUUTJS2HTg%2BBZtLhrs3pLNkPPSmil9pQnwYZDxyCVNPNJ5sdCdGl9k%2BFvi87QvRBDG9kDhWiCvO5pnqa0auS2DmnDwzHYDTb%2BtwQrsQPD1yRpBXqQv%2BNGFcZu8ro5bDZDKTWrMWCdv7xx0W6bzHrkg%2FTd6W7qwhI26Rdy09l%2Bh6MuJQv7jDjMyADOCpRMBDetM6V5CJkCe9I1QQ8WFTEpcFk5Z00z5UZlxhPJPtZYaKP0BT4eqjSiK7LUz7fwW2hldbBwSlgllOH2BaFGT4o3sxrECLS5MJmx5L0GOqUBtuj8A2l7QerKnRdi2y8tcm6SrKWGb1L3ywmeNHswqqbuqPX8H%2FZGT%2Bu%2FK3N7a%2F6gNtvraDLhUNvjVC88DCDqyheVD%2BEwVz4KlOsA6KQAmg%2B5AJSCEwsR8f0eQvcnO%2FH6SJFckxrlAPvDJ7mfxETv34vut0TuKn2rHIQ5KU1nyDp2rIwanQ7CVnX%2B7YqroEXTrRPoXwJiG1lBI7iINwrCmLblBtr3&X-Amz-Signature=21f85a06afd0adc93fcc06720782755d1d659c01d989935a47ab4c9f91470d53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSI5ZD2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ZObOxxvxP8%2BZA2pyDclvLxisy8UotoMCPRJpRznYEQIgC5PM3QM7qsI4QUN0ZwnfzeW7q1%2B0AQ7o9CBZQ6HACpcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBq7DL1iYBPgr%2B5nyrcA8%2FMzmGqD9e%2B03GfATLaGuCOelZ54fXQagpCwYdXjjfmCMh2riJOapOzePMkhUfhMgR4J3rCJ%2F9Sla7y3Iv7lDwKZE6sxLNzLZ1RP%2Fzj2lxCh2zO%2F4TKP8S%2FEEaZwUPHis86pW8gxsURyKwenA9mqVitkfJlznCKw2JJUZ1R3qO9iubQXVWWYBzazBSzpvea20JLsj6k01oO1aFhUHZnyxVMi1Y6xgeJ8C30eKNWxKeo62WrCKKqWTVTavE7HS7odQF%2FY2bN8Az3MrixjWiCcnmhQt59idrSe7knztBtVv3uPbJ4cJ5h%2FU5ZSEaZGN3xdel8Z4gwuJ95S0ZlLVxmwkdM%2BZN2Z2%2BEUUTJS2HTg%2BBZtLhrs3pLNkPPSmil9pQnwYZDxyCVNPNJ5sdCdGl9k%2BFvi87QvRBDG9kDhWiCvO5pnqa0auS2DmnDwzHYDTb%2BtwQrsQPD1yRpBXqQv%2BNGFcZu8ro5bDZDKTWrMWCdv7xx0W6bzHrkg%2FTd6W7qwhI26Rdy09l%2Bh6MuJQv7jDjMyADOCpRMBDetM6V5CJkCe9I1QQ8WFTEpcFk5Z00z5UZlxhPJPtZYaKP0BT4eqjSiK7LUz7fwW2hldbBwSlgllOH2BaFGT4o3sxrECLS5MJmx5L0GOqUBtuj8A2l7QerKnRdi2y8tcm6SrKWGb1L3ywmeNHswqqbuqPX8H%2FZGT%2Bu%2FK3N7a%2F6gNtvraDLhUNvjVC88DCDqyheVD%2BEwVz4KlOsA6KQAmg%2B5AJSCEwsR8f0eQvcnO%2FH6SJFckxrlAPvDJ7mfxETv34vut0TuKn2rHIQ5KU1nyDp2rIwanQ7CVnX%2B7YqroEXTrRPoXwJiG1lBI7iINwrCmLblBtr3&X-Amz-Signature=000944bdcea248ff9f67ac1e7755d4cd180cbbc64d735d02a9b6254aa859e9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
