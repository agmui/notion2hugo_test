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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQOIFGC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC4r%2F3gplFjwnDnNGGLhfcPcpx%2F328rFdlqePO2dkhvBAiEAkuR%2FrgaCYaX2gcqAGvNfpo0j%2ByHRZl29NFQYk5akyLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO2MVu7PAr3zp%2FSAoircAxs9%2By4WgYnZlJipNnJvi7iCbKeNaeQol6m%2FhAZr0IvXwRRj%2F5J3IlpdiT4wKv2mVOIpmCJJC9xQZwzU0XvP92oYA3emZ7BRZ1CPIwmNEUfBj8a3SO9pZ0iyspAJcEjFxMfaMgx4L13bKIUunRmvJFBjwD2aI3yz%2Fc8Cm2jXOrn6iMpjDzrrc50c4eUoeSA2yavOJitD9Ymx%2Bo3tnZl7FPct1tYjFu1G3cUGInpfjypUTfKElx%2FT5k49WAZfitF0bqwq3apHwBlFCbPgVArqWT2oHFcB%2B410RuRtwS6LX%2FRdM6X4uM6FlJLKcnnW1ytskUtFtoHoyAx%2FJLWZAU2sclK07sXnDjT3E%2FfLR2KDywLOpzHTJspRVCgNgV8dAFdA16TAOaUdjwcycmEb6nNo%2FrccdmpLhzTks%2Bvcj9RRPRT2guC2eyB25d26TaVw40p%2BSihoxwSVaOh2yfZAP%2BKgjRnDjTP5T%2B1CnKXH0lroyhBAOVGfUUKYsxZoxuYGaYjZMD7OLKyfvQEkHWiVK6pA8p%2F63nIUGLJy0YoclUOa%2FV%2FxE04dT8MotAhg7%2BM8r791i38DqiJHYZ6711eq1PgIr5Yh0wxiNTh2onTD6FUWpl6hwoF97DdYVw%2FJIQ9hMK6x6cIGOqUBL8Zzsrsxz4g8hfEttDuCbWvYPHtZM3ki31U7Sg1uqGHG0%2BzG9kZJlcO436m4woNLQQx7i0HH1ocs6Fs%2F30CCZ7AqHZ%2FRaheZcSnlgQN2dpLT7q%2FaNH0ksb2um1xyo3YJgLH4q4XTQg%2BWkOkoipxUx4%2BopHlLJWERDuSNwtaHV3XT0FwDUJLxSFKMe6uJ0xZepktf%2Bv%2BWtOfRW0A2zRGNi0ZkF5iq&X-Amz-Signature=f2bf2746f41e2e647da69ec3185ab23897939791b39d3bec1e12a4b250c38182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQOIFGC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIC4r%2F3gplFjwnDnNGGLhfcPcpx%2F328rFdlqePO2dkhvBAiEAkuR%2FrgaCYaX2gcqAGvNfpo0j%2ByHRZl29NFQYk5akyLoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO2MVu7PAr3zp%2FSAoircAxs9%2By4WgYnZlJipNnJvi7iCbKeNaeQol6m%2FhAZr0IvXwRRj%2F5J3IlpdiT4wKv2mVOIpmCJJC9xQZwzU0XvP92oYA3emZ7BRZ1CPIwmNEUfBj8a3SO9pZ0iyspAJcEjFxMfaMgx4L13bKIUunRmvJFBjwD2aI3yz%2Fc8Cm2jXOrn6iMpjDzrrc50c4eUoeSA2yavOJitD9Ymx%2Bo3tnZl7FPct1tYjFu1G3cUGInpfjypUTfKElx%2FT5k49WAZfitF0bqwq3apHwBlFCbPgVArqWT2oHFcB%2B410RuRtwS6LX%2FRdM6X4uM6FlJLKcnnW1ytskUtFtoHoyAx%2FJLWZAU2sclK07sXnDjT3E%2FfLR2KDywLOpzHTJspRVCgNgV8dAFdA16TAOaUdjwcycmEb6nNo%2FrccdmpLhzTks%2Bvcj9RRPRT2guC2eyB25d26TaVw40p%2BSihoxwSVaOh2yfZAP%2BKgjRnDjTP5T%2B1CnKXH0lroyhBAOVGfUUKYsxZoxuYGaYjZMD7OLKyfvQEkHWiVK6pA8p%2F63nIUGLJy0YoclUOa%2FV%2FxE04dT8MotAhg7%2BM8r791i38DqiJHYZ6711eq1PgIr5Yh0wxiNTh2onTD6FUWpl6hwoF97DdYVw%2FJIQ9hMK6x6cIGOqUBL8Zzsrsxz4g8hfEttDuCbWvYPHtZM3ki31U7Sg1uqGHG0%2BzG9kZJlcO436m4woNLQQx7i0HH1ocs6Fs%2F30CCZ7AqHZ%2FRaheZcSnlgQN2dpLT7q%2FaNH0ksb2um1xyo3YJgLH4q4XTQg%2BWkOkoipxUx4%2BopHlLJWERDuSNwtaHV3XT0FwDUJLxSFKMe6uJ0xZepktf%2Bv%2BWtOfRW0A2zRGNi0ZkF5iq&X-Amz-Signature=991049dfec000af5ef8ea199d25eaccfffa8010f7c877a33256b1d15ef94e313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
