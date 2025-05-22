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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5TGFTE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDRmQzqDeI6yJPQ5NYAS2dtwiD2oo8wd6OxOu%2FwaTwbLAiEA8%2BKJ9cmuxPuqcQ2OJuv4rglEReMZJxjuny0AF7odPnoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjcEEzl1Ugj1%2F%2B6VircAyxxq%2Bwt9Z5YsZ7W4sfIwRhbOuicpveX%2B3pch%2B9q6ztjBPNiPU9WN6YEHyE2Tse%2BfXOB7koS3L1a%2FYjTSnkQtBdzgUCkwOUnHlztghBO3k2rKLQnbZTjVylDPVnyYyf05INyFCRGIqCr%2FzzxL5YKOjwIzIRsG4QL%2BrJQGGjLaGrHFeG40jo0Xm2cY9vpSaMA4sfhTSb4mgV9Vph0ox%2FndpQuxsu90fc2piW7O%2BosgNxUy%2BWAen0jw4cFbqDwdziOGDpayYM5awhN8i1U1hKCQKHX01ByrDFWwbdTF%2FjsXM8aOuY%2FlxSR5Qui3sOTsUsjD%2B2GwNgA8R8KyLzLnjcd%2BQ2n2z3m0eqMgMlUMstBAwyIA2TFhfUf0AdivtZv4p1MfigujnG7%2Bb5unWypWJh24tuGwbg7wam6Z54dDHA41jlicT1OQTsHkdCEFrXr6Nimjy%2FhR8yuz5Thc%2FrfMGclulCN8P6DVs9hQOKDHqGzru4H5uKQwLMN2oyjXnet1sJAcw9t9%2BBfrHkwjvH4q5aQvL7No8kDjw3Wtxbmn%2BOcjeAzwLoWcVN28qZUMjU%2BYa7A1WSBFkSy9h%2B57Y3IFFpimu9y%2FvZYmG8gF8D3JtveUDtBCaVXV4wWyu73NvB4MP7MvcEGOqUBqZlKK5upOBMducvWxKqrFlgE%2B4TWYX%2FU5lAEMe%2F2iX91ifBaeKk8fO%2B4azHBGlHVbsG%2BaCuE99LmDVdlejjKqi31ThHyx0CKL%2B92s27UDBCCXgLfl0VchrP%2Fmrlwo6g50JWIA2xeee%2Bj6y55mFzcX8H9o6VNXBpcXbk4571O3lWj9IjfbR0kPr1eogozL%2Bg4mrYo0cJ111YCHa2ACOmStLJwLNLb&X-Amz-Signature=3aaae7c018214fa57f12375ede8ab1ec269a0b2eaebeab1226cad243c69f96f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5TGFTE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDRmQzqDeI6yJPQ5NYAS2dtwiD2oo8wd6OxOu%2FwaTwbLAiEA8%2BKJ9cmuxPuqcQ2OJuv4rglEReMZJxjuny0AF7odPnoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjcEEzl1Ugj1%2F%2B6VircAyxxq%2Bwt9Z5YsZ7W4sfIwRhbOuicpveX%2B3pch%2B9q6ztjBPNiPU9WN6YEHyE2Tse%2BfXOB7koS3L1a%2FYjTSnkQtBdzgUCkwOUnHlztghBO3k2rKLQnbZTjVylDPVnyYyf05INyFCRGIqCr%2FzzxL5YKOjwIzIRsG4QL%2BrJQGGjLaGrHFeG40jo0Xm2cY9vpSaMA4sfhTSb4mgV9Vph0ox%2FndpQuxsu90fc2piW7O%2BosgNxUy%2BWAen0jw4cFbqDwdziOGDpayYM5awhN8i1U1hKCQKHX01ByrDFWwbdTF%2FjsXM8aOuY%2FlxSR5Qui3sOTsUsjD%2B2GwNgA8R8KyLzLnjcd%2BQ2n2z3m0eqMgMlUMstBAwyIA2TFhfUf0AdivtZv4p1MfigujnG7%2Bb5unWypWJh24tuGwbg7wam6Z54dDHA41jlicT1OQTsHkdCEFrXr6Nimjy%2FhR8yuz5Thc%2FrfMGclulCN8P6DVs9hQOKDHqGzru4H5uKQwLMN2oyjXnet1sJAcw9t9%2BBfrHkwjvH4q5aQvL7No8kDjw3Wtxbmn%2BOcjeAzwLoWcVN28qZUMjU%2BYa7A1WSBFkSy9h%2B57Y3IFFpimu9y%2FvZYmG8gF8D3JtveUDtBCaVXV4wWyu73NvB4MP7MvcEGOqUBqZlKK5upOBMducvWxKqrFlgE%2B4TWYX%2FU5lAEMe%2F2iX91ifBaeKk8fO%2B4azHBGlHVbsG%2BaCuE99LmDVdlejjKqi31ThHyx0CKL%2B92s27UDBCCXgLfl0VchrP%2Fmrlwo6g50JWIA2xeee%2Bj6y55mFzcX8H9o6VNXBpcXbk4571O3lWj9IjfbR0kPr1eogozL%2Bg4mrYo0cJ111YCHa2ACOmStLJwLNLb&X-Amz-Signature=1e8391a835be40681648d53dbae452b9a25c6ec763eab719651062afae356ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
