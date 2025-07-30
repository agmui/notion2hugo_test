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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIBIOKM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWSlvY0K6QCvc7nDPm%2F6eFqwBgm3ZosJ625Etq%2B85OsAiBKtKhlF7pRudbRJGCAMh%2FdKcC2fQP%2BcbN8hx5RTIjHsCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr2M6lGenr90jsji0KtwDDnKEvq7SIqCCmbrWnz8jsqpnAWoH2OVAspjart2TTQI33AVcCwEZcMJlp0zxoKo%2FU2e5CnT9ezsdu6327xK5ceSwX95ZQWvCwWDsO6C6g7TbpUDhzSRWCOcjBRQmJz9EH5ZgSrA1rCFyxkPuUnJSC07dGz6M5O4TcjZvrCxNEJ7R6%2F7RzMmVY0jO9ok7b5LgsazUEd019da2qgjuejjpUYZSAJ%2FmqIAYjRGS8myFAlkHeTwTDEuOeZNnJRkkK7H5E4fQTAsUpgX%2F95U77pHkEl9wJcgC%2F3mcvKq4c1NhhpikU4zK%2FVAc7wc5LQRfl2ALWX51k%2BEvYDTcmrGFwp7e9njmDnZLuLEHEmFT7kX8BvhdE5eof1WN%2FkXn2oJuU5%2BFyrNJk05%2BIezDjlA8kMSBVSolcTgXhk4zF%2Fuv07BX19G4C%2FzPRSyAU5rpy37ubMRtL9TOwNcbwaAjB2l%2BJRR36pYr31CLXoUmaBAffvr6kR6SsbvgvkjX0HNx4GiUoX86TgKOGFarWfXxeJ6BkQocsbjlO6YtqwWb8qA7WoMrDoiT4%2BpH51PLnIX8zRb6LBYRqeiSh7ZmCNZzCc%2B%2BDktBN3IYnKvjVDw8ehmZ4p3ns6u26vY8I8Mr4JOT6ZAw9qKoxAY6pgFFg8cnvqOVazJNwCSZt610xXBDcEA8e8ayJz9QhRL96FxtwO0ZC1JQuefPwSAdka4CoLbK3kTI0d2ZZZofUqnW7XFzeNREKMk5vj6grDgnbH74%2FJ%2BNdO9BLqUnLF7FhhZqGlEcZe3g83KR4RASWbOaMV5a%2BQxZDGeEt6gkpgx3yhm0i77ZXqJ4JJykn7bhBla6wk4gom5ybdPYhDU6KrvmUqpFK4FA&X-Amz-Signature=cc70c161a4873e7c36211d922e46fc01cac27f9a30a17f70f801f2dd44859234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIBIOKM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWSlvY0K6QCvc7nDPm%2F6eFqwBgm3ZosJ625Etq%2B85OsAiBKtKhlF7pRudbRJGCAMh%2FdKcC2fQP%2BcbN8hx5RTIjHsCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr2M6lGenr90jsji0KtwDDnKEvq7SIqCCmbrWnz8jsqpnAWoH2OVAspjart2TTQI33AVcCwEZcMJlp0zxoKo%2FU2e5CnT9ezsdu6327xK5ceSwX95ZQWvCwWDsO6C6g7TbpUDhzSRWCOcjBRQmJz9EH5ZgSrA1rCFyxkPuUnJSC07dGz6M5O4TcjZvrCxNEJ7R6%2F7RzMmVY0jO9ok7b5LgsazUEd019da2qgjuejjpUYZSAJ%2FmqIAYjRGS8myFAlkHeTwTDEuOeZNnJRkkK7H5E4fQTAsUpgX%2F95U77pHkEl9wJcgC%2F3mcvKq4c1NhhpikU4zK%2FVAc7wc5LQRfl2ALWX51k%2BEvYDTcmrGFwp7e9njmDnZLuLEHEmFT7kX8BvhdE5eof1WN%2FkXn2oJuU5%2BFyrNJk05%2BIezDjlA8kMSBVSolcTgXhk4zF%2Fuv07BX19G4C%2FzPRSyAU5rpy37ubMRtL9TOwNcbwaAjB2l%2BJRR36pYr31CLXoUmaBAffvr6kR6SsbvgvkjX0HNx4GiUoX86TgKOGFarWfXxeJ6BkQocsbjlO6YtqwWb8qA7WoMrDoiT4%2BpH51PLnIX8zRb6LBYRqeiSh7ZmCNZzCc%2B%2BDktBN3IYnKvjVDw8ehmZ4p3ns6u26vY8I8Mr4JOT6ZAw9qKoxAY6pgFFg8cnvqOVazJNwCSZt610xXBDcEA8e8ayJz9QhRL96FxtwO0ZC1JQuefPwSAdka4CoLbK3kTI0d2ZZZofUqnW7XFzeNREKMk5vj6grDgnbH74%2FJ%2BNdO9BLqUnLF7FhhZqGlEcZe3g83KR4RASWbOaMV5a%2BQxZDGeEt6gkpgx3yhm0i77ZXqJ4JJykn7bhBla6wk4gom5ybdPYhDU6KrvmUqpFK4FA&X-Amz-Signature=ee07d36f691b03cdc206ce33d2cc34997fc7ee6c0c44a07c8f57f989e683eec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
