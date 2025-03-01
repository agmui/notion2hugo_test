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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZWXR5K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICndCfwrW1XrthbdD0C4eCuIY2WYtNsSST1UuT5m2ISBAiBpGgtBAiG8913IUM6UYYizqly0kBSg7XQWUSSeTql0tiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfCZ6xMUUeUM2GNDKtwDFc3WS9Yk90AIYq1IUboWyUyebLhdrzIPpdWCFTyyJh0iDzEMK5exbr7TZck3lrS9v0FXP2kaRy2J1mFn%2BcDGS6qFB3MMIrZihUYWfDanxQrkn%2B3qXHrN%2BMi1REbetAXBvEIJbhzq4Y4glh%2F1PcGqWTzFSO12LOAV%2Bs7llkCjzQihHzI%2Fj%2B%2FW2Z0sdILqwOtKTv81y%2FsHl4UQocqPLAMX6R4Wj0woay%2BAgop3u0SKpP%2BU%2BWx0dgYzXaTx39Va2XO5Of0XbttrjR%2FMAcTBcmc1r8A2oE6wemWOuU8myqfnmbRAo%2FNvUF8V39kdQhRP9fl0dJO0U%2B6GGlCDivjkEDlincB852E1YEIJEMxhHPMvKaffb78a%2F2FfMZX8Ph1tfCU5pad%2FStQHlKxA3pXJART0QtpTByDcsUfaaemhvaSBOJRoMe6XoOthxyOKT%2FyMOvPPOK84CSMRwSu2LwMU%2FNX3nDw7PaT1GwSG4Wb6WxrtbSOyZP5qOoO1nJpmIGYk94Xo%2FHcfU37jpI8Y%2BMMUn6x5MvrfbOn2iJ9MgPWn6znGg3BrlAWenYAz8T4YsjoNkNnCND%2FtmQiTC6jx82rf7ZRFVFLQGMHa4xitJXmHdQTtqQGga148y1Wu%2Fl9joeow85SMvgY6pgHR7Wvjzo3TGboePSTx4eeXI%2FyjpjJgrO36blVnlUOuYZeixJd7XOGKAeTuTYoP67kUINbwe3TQMVX7teGX2Ev0e9nrX2CB00cyQzIHCG1CsX2K9NnqpzkPWpMy38VqATVHTgS9D177TG4sfK%2FaOrwf8zQXY%2FUsjkLkERxLgOf7gf7UfYMEIKhhTvzXMyAMBrN9yym244unFfjynfmrQWhtlW5P8nJS&X-Amz-Signature=711079cc3db9f76545043d3e63184469d0759bec94087d9b991d80a8736d3e43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZWXR5K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICndCfwrW1XrthbdD0C4eCuIY2WYtNsSST1UuT5m2ISBAiBpGgtBAiG8913IUM6UYYizqly0kBSg7XQWUSSeTql0tiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfCZ6xMUUeUM2GNDKtwDFc3WS9Yk90AIYq1IUboWyUyebLhdrzIPpdWCFTyyJh0iDzEMK5exbr7TZck3lrS9v0FXP2kaRy2J1mFn%2BcDGS6qFB3MMIrZihUYWfDanxQrkn%2B3qXHrN%2BMi1REbetAXBvEIJbhzq4Y4glh%2F1PcGqWTzFSO12LOAV%2Bs7llkCjzQihHzI%2Fj%2B%2FW2Z0sdILqwOtKTv81y%2FsHl4UQocqPLAMX6R4Wj0woay%2BAgop3u0SKpP%2BU%2BWx0dgYzXaTx39Va2XO5Of0XbttrjR%2FMAcTBcmc1r8A2oE6wemWOuU8myqfnmbRAo%2FNvUF8V39kdQhRP9fl0dJO0U%2B6GGlCDivjkEDlincB852E1YEIJEMxhHPMvKaffb78a%2F2FfMZX8Ph1tfCU5pad%2FStQHlKxA3pXJART0QtpTByDcsUfaaemhvaSBOJRoMe6XoOthxyOKT%2FyMOvPPOK84CSMRwSu2LwMU%2FNX3nDw7PaT1GwSG4Wb6WxrtbSOyZP5qOoO1nJpmIGYk94Xo%2FHcfU37jpI8Y%2BMMUn6x5MvrfbOn2iJ9MgPWn6znGg3BrlAWenYAz8T4YsjoNkNnCND%2FtmQiTC6jx82rf7ZRFVFLQGMHa4xitJXmHdQTtqQGga148y1Wu%2Fl9joeow85SMvgY6pgHR7Wvjzo3TGboePSTx4eeXI%2FyjpjJgrO36blVnlUOuYZeixJd7XOGKAeTuTYoP67kUINbwe3TQMVX7teGX2Ev0e9nrX2CB00cyQzIHCG1CsX2K9NnqpzkPWpMy38VqATVHTgS9D177TG4sfK%2FaOrwf8zQXY%2FUsjkLkERxLgOf7gf7UfYMEIKhhTvzXMyAMBrN9yym244unFfjynfmrQWhtlW5P8nJS&X-Amz-Signature=b83887bee5b8be2fb420d71fe82b405e20839bbac50a6a90f9f1b21acd8681a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
