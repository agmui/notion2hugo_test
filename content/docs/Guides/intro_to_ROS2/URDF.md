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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUBOS25%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCHsu6tG5OED5tEj3nX6sNkzDofeH7zWzfXgPhfdR0r%2FQIhAKc23Ij66%2BhOuhLG30aQJMcRE%2F25OoQeFywsDG0YYTccKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyog28DLaerqBTvLh8q3AOzGz1EKKzkJ%2FT8fwIMgaop0dRAlN9DROAKX6FWnx3RPu1wkeaEtOfJExVreT9mxqOOkBlEPz%2Fumu9sCDpVVLMzZKCm3WES2GRV5bYoxeYeuDBlDXljEaXIDSjrbbYOeTjqxc6RTirUyE2L2U1Tkx8C3SO14aC3oNA0kEm2TugInXWw9Ccx6LCCL2fqVVJVm%2F10y7OPzSfeeHOaowexjcCkQZDRXYKcg4Cqxy5Sgwa3BbQXlzsKsMyvA0%2BeLafrQU0wgFfRGuRinKTZa5vuO8UwSuRQexu7kG%2Bf8u7sZ8prYDtm5N1yDF45jKS3NGswZ%2F79vL7n5u74qmSlcD7dsE3KbMqNig2xlPirxCQcIVpKwzr9DzhcX%2BldOIkLCWygIs%2FxeeHtAbdxmBVVawZ5%2FanHn7xIsqPk5PypIZa9OAcmIZJ26MCV0iKeTKzKjRx7e2yQVAsrSYPxHrVTSEr001INEc%2FAnQJIbdJZIikSOoTeADlA%2FtrrSBY0TnmYkaEaMWSmbYtzFcJFWoBqJCzY%2FKCZQsOwQf16GhhOs74nnK9Az%2BTWVYciKKQMtRL8lynDh6ToMc7Xc0lnXx9awjnnwtuFrDyaoDrtT6RgBvn1SoZp0dI3D3HKsTCq9A57czDMkIq%2BBjqkAX73v9IdRWKNLD7M8uHGz42JevesYwqI8zwUyQPbszkE0UZ8H52iKHA%2B8xtrsUXHY8bb27b53c5X5a%2Bm6TuU1%2BoxH6a2yqUKqOsv2X6vGTV9ECcK66B%2F1MXsh0573jFh%2BCbc%2FX6uaQXU%2F%2FA79iHxQtPAQiIgmfQEK3Qt6Q9CbtgZmBofjV9f4UvieRhbeApyV4gz%2FGku3jUa21K8DxfewrWG8iCI&X-Amz-Signature=60e20c367c4c4cf2ed7231b295eedd3c525d3ecf668157cb39f30eb86ec4c2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUBOS25%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCHsu6tG5OED5tEj3nX6sNkzDofeH7zWzfXgPhfdR0r%2FQIhAKc23Ij66%2BhOuhLG30aQJMcRE%2F25OoQeFywsDG0YYTccKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyog28DLaerqBTvLh8q3AOzGz1EKKzkJ%2FT8fwIMgaop0dRAlN9DROAKX6FWnx3RPu1wkeaEtOfJExVreT9mxqOOkBlEPz%2Fumu9sCDpVVLMzZKCm3WES2GRV5bYoxeYeuDBlDXljEaXIDSjrbbYOeTjqxc6RTirUyE2L2U1Tkx8C3SO14aC3oNA0kEm2TugInXWw9Ccx6LCCL2fqVVJVm%2F10y7OPzSfeeHOaowexjcCkQZDRXYKcg4Cqxy5Sgwa3BbQXlzsKsMyvA0%2BeLafrQU0wgFfRGuRinKTZa5vuO8UwSuRQexu7kG%2Bf8u7sZ8prYDtm5N1yDF45jKS3NGswZ%2F79vL7n5u74qmSlcD7dsE3KbMqNig2xlPirxCQcIVpKwzr9DzhcX%2BldOIkLCWygIs%2FxeeHtAbdxmBVVawZ5%2FanHn7xIsqPk5PypIZa9OAcmIZJ26MCV0iKeTKzKjRx7e2yQVAsrSYPxHrVTSEr001INEc%2FAnQJIbdJZIikSOoTeADlA%2FtrrSBY0TnmYkaEaMWSmbYtzFcJFWoBqJCzY%2FKCZQsOwQf16GhhOs74nnK9Az%2BTWVYciKKQMtRL8lynDh6ToMc7Xc0lnXx9awjnnwtuFrDyaoDrtT6RgBvn1SoZp0dI3D3HKsTCq9A57czDMkIq%2BBjqkAX73v9IdRWKNLD7M8uHGz42JevesYwqI8zwUyQPbszkE0UZ8H52iKHA%2B8xtrsUXHY8bb27b53c5X5a%2Bm6TuU1%2BoxH6a2yqUKqOsv2X6vGTV9ECcK66B%2F1MXsh0573jFh%2BCbc%2FX6uaQXU%2F%2FA79iHxQtPAQiIgmfQEK3Qt6Q9CbtgZmBofjV9f4UvieRhbeApyV4gz%2FGku3jUa21K8DxfewrWG8iCI&X-Amz-Signature=a6415f0237d4fe92f872c64f289b9a0ce83cfdab5370e6dcbe2916104a0f2eea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
