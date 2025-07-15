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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2SM3FP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFh9ylmM2KP%2BVc3PvWvmHv4JFKFeapmnWxC53RtbNvFfAiEAuqe8XJZ1O4xJVcMo5%2FJJNkIIT0iVlpFZRUNHoyM6DgIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOB0NIBS880KCNY%2B4yrcA82OJ6RK4t46UnF80R%2Bf0X%2FKnQcR3AxTZLHKt7T4K9k0rzLBeuxFKUx56r97ED%2FaIi7l%2B4mq8IeuXUzbUEM6pqKA87D8rYCgy791vO748p7Ec2pf0GIMYS7uNveCnow7cxSDb42RLlzhzBGtIDXfI%2FPcHuDrewA0z%2FOF%2FM9h%2FV5KgeCDqqX3AkIL0WZMQlubDTV5ql5NdE0pL9XCoaObboOiXUeLEbexl1%2F6neApiIBjbi%2FKhGJsnz9zXyl8uvwUhwsMbp225rtFIvtpESTk1kCBEIuLT6z%2FsBvC4srqxE%2F%2BSH9u8%2FDmNslW8z92DzaoY7o2zT%2FRMVuEVDAMvXkIls6nNUlZB2Do7y0Z5XwRPyoCshckTsjH4LOMgYD7XKtUzIyo7%2FK7%2FAU3U0KYtroRY40dtG76orNuT6jrZF%2FQXw7zSfSHlF4qx8hE4PVyJhyns7FuO6gTrdcbqcidi7rIBFS8IpzDq3rAL6ynWWpyamJY4tpO0E8CT%2BfvD1eio6VfOyeUW399TIypMr9LkHQtR%2B8eynnUKlyBkGlGrQLQ%2FwHMMKRe3VM5i6GM%2F%2Fde6cLytekHQJzhsrHFVors6bT4WVdbkN%2BIlwwA1fBJyV9lzN3q60iQnMqg8pYxJGvwMLDU18MGOqUBRLmplYshYC1XmOyIyGJ%2FDu92MSlVC2b1ATlbk1nZMu5aTnrvTkc%2BJAnwZRkLZIp5WJ47pP0OZoGQEg%2BfheyuibGkBl7uZF%2F1TiHDpPm3cwQpMHsiy%2BACAERKmwWW0wNs5OgzbmEbtRTPIRF7y1q7HG5gv47wjCp6YXEtEXdzJhzbHI7TPBKY2wwm9%2BohkCw85s49Cd047IywIBxM8SNaQMwd7BxD&X-Amz-Signature=073db9d1a4d75663b82d84ec68492d0295d86aa2bd564c8f88d7d00a2a905eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2SM3FP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFh9ylmM2KP%2BVc3PvWvmHv4JFKFeapmnWxC53RtbNvFfAiEAuqe8XJZ1O4xJVcMo5%2FJJNkIIT0iVlpFZRUNHoyM6DgIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOB0NIBS880KCNY%2B4yrcA82OJ6RK4t46UnF80R%2Bf0X%2FKnQcR3AxTZLHKt7T4K9k0rzLBeuxFKUx56r97ED%2FaIi7l%2B4mq8IeuXUzbUEM6pqKA87D8rYCgy791vO748p7Ec2pf0GIMYS7uNveCnow7cxSDb42RLlzhzBGtIDXfI%2FPcHuDrewA0z%2FOF%2FM9h%2FV5KgeCDqqX3AkIL0WZMQlubDTV5ql5NdE0pL9XCoaObboOiXUeLEbexl1%2F6neApiIBjbi%2FKhGJsnz9zXyl8uvwUhwsMbp225rtFIvtpESTk1kCBEIuLT6z%2FsBvC4srqxE%2F%2BSH9u8%2FDmNslW8z92DzaoY7o2zT%2FRMVuEVDAMvXkIls6nNUlZB2Do7y0Z5XwRPyoCshckTsjH4LOMgYD7XKtUzIyo7%2FK7%2FAU3U0KYtroRY40dtG76orNuT6jrZF%2FQXw7zSfSHlF4qx8hE4PVyJhyns7FuO6gTrdcbqcidi7rIBFS8IpzDq3rAL6ynWWpyamJY4tpO0E8CT%2BfvD1eio6VfOyeUW399TIypMr9LkHQtR%2B8eynnUKlyBkGlGrQLQ%2FwHMMKRe3VM5i6GM%2F%2Fde6cLytekHQJzhsrHFVors6bT4WVdbkN%2BIlwwA1fBJyV9lzN3q60iQnMqg8pYxJGvwMLDU18MGOqUBRLmplYshYC1XmOyIyGJ%2FDu92MSlVC2b1ATlbk1nZMu5aTnrvTkc%2BJAnwZRkLZIp5WJ47pP0OZoGQEg%2BfheyuibGkBl7uZF%2F1TiHDpPm3cwQpMHsiy%2BACAERKmwWW0wNs5OgzbmEbtRTPIRF7y1q7HG5gv47wjCp6YXEtEXdzJhzbHI7TPBKY2wwm9%2BohkCw85s49Cd047IywIBxM8SNaQMwd7BxD&X-Amz-Signature=33d99ff1b0a003961a57198af7672eea255e9b3a64c79c934a4648ccadf19fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
