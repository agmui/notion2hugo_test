---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77BSIML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FUadspsNsSdhz2vS9dQ%2F5mmbyf78SP7wEtVqPmVnykAiEA6CstKB7ZyJkCGx2PZDtSJK5pJ%2FIBnxomCirF2TBseWIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEvVcbDv1%2B%2BeZSgEWCrcA4ehQzVxKGtj%2Bqqcu83a4IGWhYYZgkagTwblA%2FWVD7P2bTHYZ6%2FkqCTzTUvTUEAjgwP2gwQOh%2Bhk%2FBNqa%2BrJhV7V7gxgU%2BsngPTL9fRsC9n11%2BIbCP86SPLFU7vsJ%2Byzlw%2FUAcYxDCFEjq3MeUWBMWKfHipKGVqYnntqOTJJ3pr1aBuID6vYnIIbjGzn3j0YWwVsV4T9rsGzjCeWztAvdOUgk28py4XLqt%2Fo%2FcslIZJ8dZ5QJsf317fbNdhzkW1ld5lfIZLT0Nu106MzSNsgwcUlK0hIOQKesEnmiX9PYwEhHmWxgUeBsLGIk4Zsex12bIE04k%2BjSTk0ZvNnwFZMA2SXTvI2j99rVscwWbeENYOwJoVF9L3%2FgY73SXmQ9s09I1GDJvaPccIK27nj6UzqsjMHtB1CYjxfyHlXGkMO13fn15Gs24XJf%2BUoxscslREHJxjyeh079uu%2B7%2BZJWPsUiHS17WkG1HdbFj5FZrIRh1%2BfBkNMMLFIWrdOaD1K%2Fn3keaf%2BJzswgy6Bb1Jq96m8KsD42ClyqRvvLhItsEubtttx3DBrnJevzkrIT60qo%2B8gXKd6GlMaF%2FYM72UueHc04vjhGZ3I5pAFEC1%2B1yVHUVmA1ZZhRLRgqdBL%2FGU%2BMODDucQGOqUB2C%2Bqj6KgVjfCMeL8664%2BZQqlOl1mVWdQhGWf89N5tQ2UoQYG0gTZjP5%2BW0j9jXZBrqAeb0SsPlu1buDyIJjwKj4GVcPvLahSTIh03RMheFARMNkCRFyacji5kCxzTZEczIsH%2BJwD5zo1LgOsSC5Ps97%2FjGfBOgGFsfLFQmcBozU%2FHOo1d15OgedtFAcDj4qOt3Tqoe90hzNSm0nazTeQURpQ4jYQ&X-Amz-Signature=7c86f2f8e25b2cc93e4ee938d86a806c64dc79d634790dae4fe6860fd68beff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77BSIML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FUadspsNsSdhz2vS9dQ%2F5mmbyf78SP7wEtVqPmVnykAiEA6CstKB7ZyJkCGx2PZDtSJK5pJ%2FIBnxomCirF2TBseWIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEvVcbDv1%2B%2BeZSgEWCrcA4ehQzVxKGtj%2Bqqcu83a4IGWhYYZgkagTwblA%2FWVD7P2bTHYZ6%2FkqCTzTUvTUEAjgwP2gwQOh%2Bhk%2FBNqa%2BrJhV7V7gxgU%2BsngPTL9fRsC9n11%2BIbCP86SPLFU7vsJ%2Byzlw%2FUAcYxDCFEjq3MeUWBMWKfHipKGVqYnntqOTJJ3pr1aBuID6vYnIIbjGzn3j0YWwVsV4T9rsGzjCeWztAvdOUgk28py4XLqt%2Fo%2FcslIZJ8dZ5QJsf317fbNdhzkW1ld5lfIZLT0Nu106MzSNsgwcUlK0hIOQKesEnmiX9PYwEhHmWxgUeBsLGIk4Zsex12bIE04k%2BjSTk0ZvNnwFZMA2SXTvI2j99rVscwWbeENYOwJoVF9L3%2FgY73SXmQ9s09I1GDJvaPccIK27nj6UzqsjMHtB1CYjxfyHlXGkMO13fn15Gs24XJf%2BUoxscslREHJxjyeh079uu%2B7%2BZJWPsUiHS17WkG1HdbFj5FZrIRh1%2BfBkNMMLFIWrdOaD1K%2Fn3keaf%2BJzswgy6Bb1Jq96m8KsD42ClyqRvvLhItsEubtttx3DBrnJevzkrIT60qo%2B8gXKd6GlMaF%2FYM72UueHc04vjhGZ3I5pAFEC1%2B1yVHUVmA1ZZhRLRgqdBL%2FGU%2BMODDucQGOqUB2C%2Bqj6KgVjfCMeL8664%2BZQqlOl1mVWdQhGWf89N5tQ2UoQYG0gTZjP5%2BW0j9jXZBrqAeb0SsPlu1buDyIJjwKj4GVcPvLahSTIh03RMheFARMNkCRFyacji5kCxzTZEczIsH%2BJwD5zo1LgOsSC5Ps97%2FjGfBOgGFsfLFQmcBozU%2FHOo1d15OgedtFAcDj4qOt3Tqoe90hzNSm0nazTeQURpQ4jYQ&X-Amz-Signature=fc6044f20b90f7bb1cb683cad6c9fc6bd412190cdadaaa3ea091cb7c77f5356c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
