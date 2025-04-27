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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFO7WMU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSnCOf5iUcZFLY%2Bq0UNvRNE%2F5Xhfnmu2wDJt4mmB9SQIhAKSaBtkdFbuKJ6dCNwOvJI9CGOjjC7H6kofIzqWdCep6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgwsGxkuEp8ZOQcRfzMq3APn9K37ZhRTfPxqbI4ZXEdNvCKcGax8tkr006tmGFfMXZmka%2BtTgaPFQOM7izI8bnviRSqJBQuqamt8aEptLLnzjHJEj1Do6Xp3avNku7CJbstMTe0s%2BRi3F2ujW7gCd5D6ZvVUA7OPu7rtiL7J5uQpDEOazY%2FJ1AthIXVbv7uxPPoMbYVy2VrXws6hMd7GaZrlZ47pPl9XG3Q9W5qcGio0%2BhEDUfXLt0YNEz%2FcCghGicRWQHzRBWEioU9GNb4RrSebM4bRSsYUnd6PBn1A6J6XCrOaowbdvSc7sk5aebsmwQk5P7x0KB0brI8hUAWWiRpUXdnoeJ7CwJzsjmAL%2BQo%2Bk%2ByrVGO8ws8CE4ykkCBRtKcd%2Foe9u%2Fm5XQeiigckazRAyQYcrEOJ5ijC0SahdpyjQIqzpt9Yw7QoITq1K6QgzgpFQmFzxdNGXZDPWmSLyFYlhqIElUYhJCkbbbV%2FMdgOuE1gM%2Fdooyu7DAf6QFqxKUrVkPwimSccReZEjmzHeVUP%2B1N3QG%2FEDHcHXAn7Vic6ADLBWbadNjWxC3o9se50%2BRUtlPrGmAstz7cPDYS9TTqYJ7LWY0EPjkOyicxssc1%2FIqLUjJcv2SoU1HpFq7HXRhJ0FfFxXsnJ08tYQTCR7bbABjqkAQUXLC4eUbWA0VVMjADBknww2SYY%2BJkUQ0FTLHbfsZR50rpItBSJnvF23fgaMJc%2Fut895%2F7%2BvDaOSXignna9yCmq2ZSMmAhuGyzqQpFq5Djh2ZJ2IfCIZubH6WfhZFV891K8gbxrX6x5HrLNIl0xF62LY12pTAwyIt29qwgReiVKsGx02NiNNghhcrGaXABhUzrnpfP6RvQ0HEuySJGrJZiEoS%2F8&X-Amz-Signature=f04cfc28ed93e3e79a46763f49aeb9d05624f7bf49525567931d0316924ec3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFO7WMU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSnCOf5iUcZFLY%2Bq0UNvRNE%2F5Xhfnmu2wDJt4mmB9SQIhAKSaBtkdFbuKJ6dCNwOvJI9CGOjjC7H6kofIzqWdCep6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgwsGxkuEp8ZOQcRfzMq3APn9K37ZhRTfPxqbI4ZXEdNvCKcGax8tkr006tmGFfMXZmka%2BtTgaPFQOM7izI8bnviRSqJBQuqamt8aEptLLnzjHJEj1Do6Xp3avNku7CJbstMTe0s%2BRi3F2ujW7gCd5D6ZvVUA7OPu7rtiL7J5uQpDEOazY%2FJ1AthIXVbv7uxPPoMbYVy2VrXws6hMd7GaZrlZ47pPl9XG3Q9W5qcGio0%2BhEDUfXLt0YNEz%2FcCghGicRWQHzRBWEioU9GNb4RrSebM4bRSsYUnd6PBn1A6J6XCrOaowbdvSc7sk5aebsmwQk5P7x0KB0brI8hUAWWiRpUXdnoeJ7CwJzsjmAL%2BQo%2Bk%2ByrVGO8ws8CE4ykkCBRtKcd%2Foe9u%2Fm5XQeiigckazRAyQYcrEOJ5ijC0SahdpyjQIqzpt9Yw7QoITq1K6QgzgpFQmFzxdNGXZDPWmSLyFYlhqIElUYhJCkbbbV%2FMdgOuE1gM%2Fdooyu7DAf6QFqxKUrVkPwimSccReZEjmzHeVUP%2B1N3QG%2FEDHcHXAn7Vic6ADLBWbadNjWxC3o9se50%2BRUtlPrGmAstz7cPDYS9TTqYJ7LWY0EPjkOyicxssc1%2FIqLUjJcv2SoU1HpFq7HXRhJ0FfFxXsnJ08tYQTCR7bbABjqkAQUXLC4eUbWA0VVMjADBknww2SYY%2BJkUQ0FTLHbfsZR50rpItBSJnvF23fgaMJc%2Fut895%2F7%2BvDaOSXignna9yCmq2ZSMmAhuGyzqQpFq5Djh2ZJ2IfCIZubH6WfhZFV891K8gbxrX6x5HrLNIl0xF62LY12pTAwyIt29qwgReiVKsGx02NiNNghhcrGaXABhUzrnpfP6RvQ0HEuySJGrJZiEoS%2F8&X-Amz-Signature=1e4ec5bebd9ce4e502c76d34963898a7626d645a08190d080a935a5b30634461&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
