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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=8a1ef2a577a7cdc89ab4dd39cafcf2d07e0e9d60b0bcecff6754a39a75fda435&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=bb3cbf6f0c3c84f2c86566fdbcdd7657f2cf070a573ab73acccf578482e38769&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
