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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7E4USD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT5nigxrui2Z0%2FQc74whBJ%2F4kq8qb7CDeCEYlKzo0M8QIgR%2B9Nx%2BMKMwp3%2FffJheILD5JxKG%2BDZFC2l%2FkgMQFI6JoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHTvqPJpwABmrlkCrcA8WUATlTiwAre6zlOp5oJKpeFuVhYe5cWPOLg8PR7zo7FBiKOy%2FJk3UvINnRzSVHttdwF2LzUHHzr3IwguU6ZFJNj87KGF3yENCEb4oTnV65WexeAF3zPorumsL2lKktoodIkMZSlChxVCIGlgiyYDyk%2BWGctnuLaUbOSAypAD2Y7SutJgxVb91%2BYtoUAMO72zbHBovx6cZhQVgyx0ZjfptPq3AoBLw1LjaBQWmmFugpx6u5JmCQx%2FLLrIP3ODa1q16Syi7KhiuwjpCeDsb4ih73IW0bzfpXjcRI5DAfPmkCoGhxlz2pcsJKE4Z02eWoahL%2FANlmBDY0rVZwIlj4P92%2FfpimVh7tPfv9TxVA0N3%2F%2BCa1vGkBG2KtczPC5W%2FQnjWOAje%2B3prZUGDMy72fIs2HYlHwjEtkUP7gdCakFCxAG64Q0TrNHwGhYVx%2FxzVLreRxhLrVhCUslUyrkohSnf42YMtYI6JNXVzUdATFY1WqrQ2CB0NVasJQ6oppHPdGs9sMf9ZFBXYuUEk9VAowSl1wjBxJgt3Cbe2FLtpbMyXcZ31JyZRaKqYF1mBD%2BDXsz9Su4O6qYg2meCUfYvtkanQpJ%2B5jbeXZrcxnq99jZSfAtI3CldfMLYrsI5miMJbFrcQGOqUBfny%2Fq%2FBIBAmsG1UOjiLrSNxeGbjwqHONEX5qJJLPbobZzsfWyat79%2FXkhgJmp6d1MDpaEMWnizx13GMIMN46Imrlk9%2BgBeBAfl3XWQk3h1nLC3c93ZB1%2Fj8XqqCg1ThSfvOufoo3x%2FQ4dfCFWZz%2B%2FU%2BbA0X2Z8iFR3vV6WEwYNrEBBjFFVM8axXnIslC%2BRU99x0Z8QYLrPCP4KRR7TPHthHcvZKc&X-Amz-Signature=5a69943a43f934002ad3931c36daacaac0905054822d656ea44087aa3c646104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH7E4USD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT5nigxrui2Z0%2FQc74whBJ%2F4kq8qb7CDeCEYlKzo0M8QIgR%2B9Nx%2BMKMwp3%2FffJheILD5JxKG%2BDZFC2l%2FkgMQFI6JoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWHTvqPJpwABmrlkCrcA8WUATlTiwAre6zlOp5oJKpeFuVhYe5cWPOLg8PR7zo7FBiKOy%2FJk3UvINnRzSVHttdwF2LzUHHzr3IwguU6ZFJNj87KGF3yENCEb4oTnV65WexeAF3zPorumsL2lKktoodIkMZSlChxVCIGlgiyYDyk%2BWGctnuLaUbOSAypAD2Y7SutJgxVb91%2BYtoUAMO72zbHBovx6cZhQVgyx0ZjfptPq3AoBLw1LjaBQWmmFugpx6u5JmCQx%2FLLrIP3ODa1q16Syi7KhiuwjpCeDsb4ih73IW0bzfpXjcRI5DAfPmkCoGhxlz2pcsJKE4Z02eWoahL%2FANlmBDY0rVZwIlj4P92%2FfpimVh7tPfv9TxVA0N3%2F%2BCa1vGkBG2KtczPC5W%2FQnjWOAje%2B3prZUGDMy72fIs2HYlHwjEtkUP7gdCakFCxAG64Q0TrNHwGhYVx%2FxzVLreRxhLrVhCUslUyrkohSnf42YMtYI6JNXVzUdATFY1WqrQ2CB0NVasJQ6oppHPdGs9sMf9ZFBXYuUEk9VAowSl1wjBxJgt3Cbe2FLtpbMyXcZ31JyZRaKqYF1mBD%2BDXsz9Su4O6qYg2meCUfYvtkanQpJ%2B5jbeXZrcxnq99jZSfAtI3CldfMLYrsI5miMJbFrcQGOqUBfny%2Fq%2FBIBAmsG1UOjiLrSNxeGbjwqHONEX5qJJLPbobZzsfWyat79%2FXkhgJmp6d1MDpaEMWnizx13GMIMN46Imrlk9%2BgBeBAfl3XWQk3h1nLC3c93ZB1%2Fj8XqqCg1ThSfvOufoo3x%2FQ4dfCFWZz%2B%2FU%2BbA0X2Z8iFR3vV6WEwYNrEBBjFFVM8axXnIslC%2BRU99x0Z8QYLrPCP4KRR7TPHthHcvZKc&X-Amz-Signature=1aa8dccc47e6db33c991caaaac169e58cb0639669920d7c98dc8a811a3824067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
