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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEOL72Q%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIB0EtJqVUj20Bzn%2F1Pjn14aEEBmNIIp4CVeD7%2B%2Bsk8miAiAUQ70xeK6Mj2nOQou%2FvWiDc4bWBMCp5sabFQ1HRO%2BxOir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM5NpLHTdERa7dEG2vKtwD5xg55bgbTao%2F8CAw6a0qv3ANnTj5CrkG5aRQKcHm3%2FXw8Ew2gBEhVjsnV2GNOh5pW9GkDXP%2BKQsesI3RPgWCCc5VaLC5VZHhFjuVDh1X%2FfW3vgmctSPxmk6AKYfNWcHJRPIkDGmzhYBQ2xKllrM3HXUVjR9CkXia%2BQNzhtCWy%2BT93KaNb%2BfMzwT9D%2BW3GTBIXcSFFZnRfZEJLkZJCLj9uvp95etCg1J6%2F%2Fx4NsNgr7xuG5be0H%2BrElXqrDsHk1FWK7F5btWqyMlGK8dDzYjIU6E87KdD9JFPxwgbQLxjYTyoxV1mFW9rqi7D4iAvQqMSv9rz8HycYNqianjyetka5fHzkxPNI65HACFNTwfaACOi4aakZUnPcG63BUso6wnimum84VZlrM8KCBzSssBChULiYKiSE9i1BWV8sYxhbayMvKjfWT0V5zIVN6NTHvTpR%2BooTfhZX3eXY%2FTfEWqsHfHTmPPDxJ1jmscsNc7rW6Zelg34wFgIrTj%2BBzqxRCL5Q9akbIoyZS8z8rmyp0rtIxNz6yVfmtImT%2F8Apt7U5npfXcTIF8qYZn1ghqRSqws1qmY0L3J5DiHvHqofQTt%2BYm6Kr%2BPJEu%2Bbvuam42z2lH0%2BlB37q9%2BWakWQ9UYwr46dwwY6pgGu7s6t5Kv4ZFj1nGAQE9CtHLItgwjAyWznEiYt9hBPwzSjS%2FuoNlDBrZPp%2FGkvE4kHa6VJw%2BNEFgD%2Fjb4xVXVXMEu54YVKL0HZ7GZVJKRmI1N4aQ6CBwxMFnmCFJjesxUmh5jG01ZlO9XpfxnLzMdgEM9zF%2B47O%2BNttU0PGXaXdtqodwYR9Bm4HK9bOa1O7HP6qZ2bB9n6d%2BHtZInq8fHZb%2FWGaEaj&X-Amz-Signature=a33b06a583af1dc43fff8b8a2e3db0186b1f7e8bf2b233aa3128a319c6e89b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEOL72Q%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIB0EtJqVUj20Bzn%2F1Pjn14aEEBmNIIp4CVeD7%2B%2Bsk8miAiAUQ70xeK6Mj2nOQou%2FvWiDc4bWBMCp5sabFQ1HRO%2BxOir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM5NpLHTdERa7dEG2vKtwD5xg55bgbTao%2F8CAw6a0qv3ANnTj5CrkG5aRQKcHm3%2FXw8Ew2gBEhVjsnV2GNOh5pW9GkDXP%2BKQsesI3RPgWCCc5VaLC5VZHhFjuVDh1X%2FfW3vgmctSPxmk6AKYfNWcHJRPIkDGmzhYBQ2xKllrM3HXUVjR9CkXia%2BQNzhtCWy%2BT93KaNb%2BfMzwT9D%2BW3GTBIXcSFFZnRfZEJLkZJCLj9uvp95etCg1J6%2F%2Fx4NsNgr7xuG5be0H%2BrElXqrDsHk1FWK7F5btWqyMlGK8dDzYjIU6E87KdD9JFPxwgbQLxjYTyoxV1mFW9rqi7D4iAvQqMSv9rz8HycYNqianjyetka5fHzkxPNI65HACFNTwfaACOi4aakZUnPcG63BUso6wnimum84VZlrM8KCBzSssBChULiYKiSE9i1BWV8sYxhbayMvKjfWT0V5zIVN6NTHvTpR%2BooTfhZX3eXY%2FTfEWqsHfHTmPPDxJ1jmscsNc7rW6Zelg34wFgIrTj%2BBzqxRCL5Q9akbIoyZS8z8rmyp0rtIxNz6yVfmtImT%2F8Apt7U5npfXcTIF8qYZn1ghqRSqws1qmY0L3J5DiHvHqofQTt%2BYm6Kr%2BPJEu%2Bbvuam42z2lH0%2BlB37q9%2BWakWQ9UYwr46dwwY6pgGu7s6t5Kv4ZFj1nGAQE9CtHLItgwjAyWznEiYt9hBPwzSjS%2FuoNlDBrZPp%2FGkvE4kHa6VJw%2BNEFgD%2Fjb4xVXVXMEu54YVKL0HZ7GZVJKRmI1N4aQ6CBwxMFnmCFJjesxUmh5jG01ZlO9XpfxnLzMdgEM9zF%2B47O%2BNttU0PGXaXdtqodwYR9Bm4HK9bOa1O7HP6qZ2bB9n6d%2BHtZInq8fHZb%2FWGaEaj&X-Amz-Signature=5626a604ca8176a4fa235774c7796d576081f59ec45cf5579137989f0a941cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
