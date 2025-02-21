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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVBQIHX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK3CA3iu9Vbe%2F1hQOaXNjmgUblBo8CN7I90szM3Ja3CAiBipwHKDf5gAvXohXJJ3xjz%2BrmSBf6OYVvhwOTEbQs%2F6CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCE7FPuQLKwzVzssKtwD4qEIISQHypUVGA4ns9DMxTfocQhUS7H1FmFEcOogkqua73lu0kwhXj0b%2F6mrCWFOHAkDDfSIK3adt8bpZGu0Q1SSqiC7kcoXbHRrRx9HVOrIp9lqFVESc31Rrxe7hCaU9hw3IvWERdEL29A0uyDtCSPLaraBm4oZYF5xZmIA%2FrMZmsb7r%2BmGctZhy%2BlbKbydvOHB%2BeHAiU4MNS56EEQe%2BqKsna%2B3ndBWdoUPLhGBRPqfUuKIZ7CT%2BFkzaYAnNvtoA307U4LhBwJTg2f3RsYV9QVp0jcE%2FeyjJdavP1g1d%2FJVIxA8F5jqcBXbHh9JS5tLQgUYuSMmrm%2BZSqUhfJi5i6%2BThuHKU9qxYnLVyyqs5Eui%2BDsYvkJdEzk0HYPiay4eyAqXF1X53WSc3BSbNdUOngt9LU83l8quV4xKWpznDZb1uhZ0uOqE4qKdT7uXwVmZ9jjlGGBNeX11lIRo40fHHL5DgrPPhklLnkWrth62L%2Bi7d9Ue%2BaTi7HwvL56cI1CbTMBqbxwd%2F0Vaze41TgzN94SkRRdwvXTpLe%2BSRllEyfMztKsNUvs0GNupCLj%2Blg5oYmQyk7N8pZIgw70f871ekDO6gUy%2FKGDw3XrPc8ioPJ139ZVq75%2BFN8W6XQsw693gvQY6pgGDuqsWeW2P9AgswzkfpacCwUQvdCbflKAD0ll3oZhF7q6W2n0T1oDzP2rI8q0Ba6uAz2vusouBKxSWtEZD5b0LQCmU5x8j1%2FXhRclwqm%2F24VzM7NFyPmMD69p83HvxLAZLfG07txP2uxJzaV1ZAn0oHwJ%2FnpUJDzhaGH3WTYLlVvDkkAQxoor1y%2FtZWwLakTV6z6b%2FTExczX56T6sZU1XKF01uOVhp&X-Amz-Signature=6add9e950549f62094c0a484c28bea09c974e96b5853125a7e3ed7380d472082&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVBQIHX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK3CA3iu9Vbe%2F1hQOaXNjmgUblBo8CN7I90szM3Ja3CAiBipwHKDf5gAvXohXJJ3xjz%2BrmSBf6OYVvhwOTEbQs%2F6CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCE7FPuQLKwzVzssKtwD4qEIISQHypUVGA4ns9DMxTfocQhUS7H1FmFEcOogkqua73lu0kwhXj0b%2F6mrCWFOHAkDDfSIK3adt8bpZGu0Q1SSqiC7kcoXbHRrRx9HVOrIp9lqFVESc31Rrxe7hCaU9hw3IvWERdEL29A0uyDtCSPLaraBm4oZYF5xZmIA%2FrMZmsb7r%2BmGctZhy%2BlbKbydvOHB%2BeHAiU4MNS56EEQe%2BqKsna%2B3ndBWdoUPLhGBRPqfUuKIZ7CT%2BFkzaYAnNvtoA307U4LhBwJTg2f3RsYV9QVp0jcE%2FeyjJdavP1g1d%2FJVIxA8F5jqcBXbHh9JS5tLQgUYuSMmrm%2BZSqUhfJi5i6%2BThuHKU9qxYnLVyyqs5Eui%2BDsYvkJdEzk0HYPiay4eyAqXF1X53WSc3BSbNdUOngt9LU83l8quV4xKWpznDZb1uhZ0uOqE4qKdT7uXwVmZ9jjlGGBNeX11lIRo40fHHL5DgrPPhklLnkWrth62L%2Bi7d9Ue%2BaTi7HwvL56cI1CbTMBqbxwd%2F0Vaze41TgzN94SkRRdwvXTpLe%2BSRllEyfMztKsNUvs0GNupCLj%2Blg5oYmQyk7N8pZIgw70f871ekDO6gUy%2FKGDw3XrPc8ioPJ139ZVq75%2BFN8W6XQsw693gvQY6pgGDuqsWeW2P9AgswzkfpacCwUQvdCbflKAD0ll3oZhF7q6W2n0T1oDzP2rI8q0Ba6uAz2vusouBKxSWtEZD5b0LQCmU5x8j1%2FXhRclwqm%2F24VzM7NFyPmMD69p83HvxLAZLfG07txP2uxJzaV1ZAn0oHwJ%2FnpUJDzhaGH3WTYLlVvDkkAQxoor1y%2FtZWwLakTV6z6b%2FTExczX56T6sZU1XKF01uOVhp&X-Amz-Signature=15d6e2d6ca95a31da9a22b8e1c87608f778ff662df88938ff5c449186f529ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
