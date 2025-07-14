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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXLQIUD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAU1s1cCzs7fUlyNC4ZFWDGrelOArffBBVaOZXroJ9srAiEA0qCpFJSVxm1GrHMc6CGJ3VXfDv00hBfygpjl4GakY0kq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEc2M%2FAZ7AV5AsqYsSrcAyLkhP1TYUDFWZut0siBkHm4MA0ZOgyyuthTIm0sjWzlqnERzIcyO0ZzZtRFrT5Y1rHPf%2BdGk2nPZDz9gUFKYjtAME2ei56KtypfR67SZI7GqkXA8w26FmbhhLxl9dKH8U%2BGWk397iovxKBE4pRAxztLVcu%2B4ll%2FQH9OvpTO%2Fe1nvYIQcIG74Q3CF9Tp%2FfFSfEXEJGZfesNUlW2o6KhT1u0NdVnsfkHmbCvo%2BhcVc%2FJELjS7jWxXLnKMpEC0wKGYqhKw0VDjxRXCGPNm14%2FyXhAahT2qPTvnQ5tK1TDs%2FHsJL%2BVfw7Y3eeVNbMKpfU3XCaJp6BeiKUygIH%2B6qIK%2B%2BslWStQ4NX1QZldodjXoHKa4cFJF1g0YxuTa2A6Pz2nwoefLU7QYDrmd9QGyubIqNi9ua0H%2B9mQ8oZXfzUsZ9Rgxxc8GmD%2BUaELd6Q23E5WbXap0fMM5gTTZdorlgIcfTddwVabnT3oGbTVzk3slWl8ddyu%2BwyS28fS%2Facj13Az%2Bt5Z3eRINhWZYmn39hmflb7fOVsBLxCMWxrUR7tNRxzuKo2O1Wt%2FPoYspQvN6hkD7kK0LXofbLs8bA%2F44qprurdZfYCGxsYFNElVAMYIAVO7y9RY%2FFcJ%2BeuBvbRI2MOH31cMGOqUBdGv3d3F29NMVEQUjCvBVi0RXqRuekblShQ0zEJJJ3sBUca5PNOxoVqTdjkuT2RhoMDueGvyT7NMUQR8Zc9Hozs31d2xF53MgShmxjpzpmQMw7fkKbKBxO3e0Ojxq7x13zBcyl0%2BE%2FwrYIcNzqAuCGmymwfdbDB8VoFChtG%2F5%2F2tX1NEhl1q2yycSBuX3O%2B0gSGp6sZ3i6w8w3KpgKFYV2c9B38u2&X-Amz-Signature=3aa351b932d59891497cf380ed59be8d8ae7e7abaf403593d9e1408132c56efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXLQIUD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAU1s1cCzs7fUlyNC4ZFWDGrelOArffBBVaOZXroJ9srAiEA0qCpFJSVxm1GrHMc6CGJ3VXfDv00hBfygpjl4GakY0kq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEc2M%2FAZ7AV5AsqYsSrcAyLkhP1TYUDFWZut0siBkHm4MA0ZOgyyuthTIm0sjWzlqnERzIcyO0ZzZtRFrT5Y1rHPf%2BdGk2nPZDz9gUFKYjtAME2ei56KtypfR67SZI7GqkXA8w26FmbhhLxl9dKH8U%2BGWk397iovxKBE4pRAxztLVcu%2B4ll%2FQH9OvpTO%2Fe1nvYIQcIG74Q3CF9Tp%2FfFSfEXEJGZfesNUlW2o6KhT1u0NdVnsfkHmbCvo%2BhcVc%2FJELjS7jWxXLnKMpEC0wKGYqhKw0VDjxRXCGPNm14%2FyXhAahT2qPTvnQ5tK1TDs%2FHsJL%2BVfw7Y3eeVNbMKpfU3XCaJp6BeiKUygIH%2B6qIK%2B%2BslWStQ4NX1QZldodjXoHKa4cFJF1g0YxuTa2A6Pz2nwoefLU7QYDrmd9QGyubIqNi9ua0H%2B9mQ8oZXfzUsZ9Rgxxc8GmD%2BUaELd6Q23E5WbXap0fMM5gTTZdorlgIcfTddwVabnT3oGbTVzk3slWl8ddyu%2BwyS28fS%2Facj13Az%2Bt5Z3eRINhWZYmn39hmflb7fOVsBLxCMWxrUR7tNRxzuKo2O1Wt%2FPoYspQvN6hkD7kK0LXofbLs8bA%2F44qprurdZfYCGxsYFNElVAMYIAVO7y9RY%2FFcJ%2BeuBvbRI2MOH31cMGOqUBdGv3d3F29NMVEQUjCvBVi0RXqRuekblShQ0zEJJJ3sBUca5PNOxoVqTdjkuT2RhoMDueGvyT7NMUQR8Zc9Hozs31d2xF53MgShmxjpzpmQMw7fkKbKBxO3e0Ojxq7x13zBcyl0%2BE%2FwrYIcNzqAuCGmymwfdbDB8VoFChtG%2F5%2F2tX1NEhl1q2yycSBuX3O%2B0gSGp6sZ3i6w8w3KpgKFYV2c9B38u2&X-Amz-Signature=4526ab8848980d22035162e298bcc7730ed347fdf9dfcc4c08d6db51ec13c248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
