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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HWTHAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBP2KMSVo8W72JX7m%2FCzVriRiTms0mOWQ16Ei7pZDxElAiEAqk1Fpu0kVC7tYLICQCGma4%2FMHu8c6xc%2B4LjGDiSLSr0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj3fEg0LfUM4IbsICrcA%2B2zDW8c1YAm9zh0f0bJxdVakZb2TUuzktzgoeuYB2zMTWJBCwWIBtFmwwTqlWQ%2B%2FQjqPnIfsAmJazv6zjJAJIZWhuBb6%2FN0MPN%2FRUp02SMrTl3Ni1mjInD3bUxSRZJbLOcY4eQZscXCxci%2FSQcsi9rNKCag88NGK3DJ88JCrvV3hxgNMOMOIb%2FE7f1mHwvm3e7YIL%2BKAq%2FZcszOdznlagW%2BBOROb7mPjcPUAQAzuUjg%2FLNcDDvBaK0hBtwWa%2BnSm%2FRx3Lbhln9D04GxXl1SNzClgxly0wYNveyW0xLnobuJOuzQ2dDBfHbbF5r61%2FWTv2svqe6PLV2JrWserHMqrr9Y9xSm5MeaY7wsZuWqCcEPOcD%2BxMnJrulEto70ALHGIbuK7ibkDghoTWQ9rOIVmA1JekNg5vQ8k49%2BZxNTV4FI5H0CD3nuabqfZOIyvkU0yY%2BScTXh%2F89vLMWqY6Psm%2B8xS9MlN%2BNbWstOMlr09c6XusyWR7yLRFsEPmFXTyIhAAHxT1t0Zi28WtmjqSejMXaT0qfBJ1WGU%2BGlL%2FZTpfG85ec0uh3Xn%2BrzUHI6HQZesQ4jFSK6%2BdEJRvwhDE9MBS1HeNS%2B819SgpQ%2BNEDzCCGpYR07gXqM1zU6j%2BWaMNqn4sIGOqUBumXgQpMxecivFo5rAgDRLqEVPaZAhlVj3Nr6G22Flyc3H%2FoUrU1ttF9fwYtrkniNgzdpx46R4V%2BEqE0UzhyxKRqmQ7umqg2BMen9ySn46kjCjTA3KaZfZ9OZFMFn%2BjjLj%2FLrZKJbpBhHcinkSyPHvT5VD4%2BPPsZ%2F59JbGl%2BGxfOoB%2BvlN0xRw6Gbxn809C9y4I3KpCTLJD3Gsi%2BTG3ztOmpN0rz2&X-Amz-Signature=4293f22218951da5a22538593c675f06e5e7e02c3639ca8852053150fe2c9457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HWTHAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBP2KMSVo8W72JX7m%2FCzVriRiTms0mOWQ16Ei7pZDxElAiEAqk1Fpu0kVC7tYLICQCGma4%2FMHu8c6xc%2B4LjGDiSLSr0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj3fEg0LfUM4IbsICrcA%2B2zDW8c1YAm9zh0f0bJxdVakZb2TUuzktzgoeuYB2zMTWJBCwWIBtFmwwTqlWQ%2B%2FQjqPnIfsAmJazv6zjJAJIZWhuBb6%2FN0MPN%2FRUp02SMrTl3Ni1mjInD3bUxSRZJbLOcY4eQZscXCxci%2FSQcsi9rNKCag88NGK3DJ88JCrvV3hxgNMOMOIb%2FE7f1mHwvm3e7YIL%2BKAq%2FZcszOdznlagW%2BBOROb7mPjcPUAQAzuUjg%2FLNcDDvBaK0hBtwWa%2BnSm%2FRx3Lbhln9D04GxXl1SNzClgxly0wYNveyW0xLnobuJOuzQ2dDBfHbbF5r61%2FWTv2svqe6PLV2JrWserHMqrr9Y9xSm5MeaY7wsZuWqCcEPOcD%2BxMnJrulEto70ALHGIbuK7ibkDghoTWQ9rOIVmA1JekNg5vQ8k49%2BZxNTV4FI5H0CD3nuabqfZOIyvkU0yY%2BScTXh%2F89vLMWqY6Psm%2B8xS9MlN%2BNbWstOMlr09c6XusyWR7yLRFsEPmFXTyIhAAHxT1t0Zi28WtmjqSejMXaT0qfBJ1WGU%2BGlL%2FZTpfG85ec0uh3Xn%2BrzUHI6HQZesQ4jFSK6%2BdEJRvwhDE9MBS1HeNS%2B819SgpQ%2BNEDzCCGpYR07gXqM1zU6j%2BWaMNqn4sIGOqUBumXgQpMxecivFo5rAgDRLqEVPaZAhlVj3Nr6G22Flyc3H%2FoUrU1ttF9fwYtrkniNgzdpx46R4V%2BEqE0UzhyxKRqmQ7umqg2BMen9ySn46kjCjTA3KaZfZ9OZFMFn%2BjjLj%2FLrZKJbpBhHcinkSyPHvT5VD4%2BPPsZ%2F59JbGl%2BGxfOoB%2BvlN0xRw6Gbxn809C9y4I3KpCTLJD3Gsi%2BTG3ztOmpN0rz2&X-Amz-Signature=ff388d064498c9d8f265922f86685561ce34cbd51684afe6d84ccceb5779115f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
