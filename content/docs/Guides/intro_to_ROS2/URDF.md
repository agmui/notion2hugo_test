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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6C5LQ3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFWk3SRyUs16D7knFhTbhB88aL3EsISX1fJw4UQchVWhAiAIfjEDT1znfrTxI0yhAG%2BzsPs0hBKwV4%2B7gMr80r8W4SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc9ILm5Z%2B9wkGYa%2FWKtwDLJWq%2FTGGUkBXX47U9iq%2BPHkLE%2BN5zc8vl9bDv6RAH%2BxJCYNvP0XoSyidc3w7FeF9Q2ES48Pgzr1g8i5w8jQZccb26cxgxija%2BZIxkWNIRTP2tGnaNlQ2c1fyXwTxPcys%2BtZn9HTCW2NzAHNwLrtnAzm%2BhFbpQYPHxdEFwEvDJ1%2F7DqJ3s7XV124yP1%2F6J3QrG7hfYdmXyBHXWERWiNGrrGYhtVQIr8qndqzrOWV3Vv%2FPhzYzGVL%2BCakmFZG7yiMA9VbRq7aDMsEhKtEXgiGaDvoFgYYj9vmfiETIBjCG0W6bZ%2BnqHPyPYJmAbFDDOjWurn%2Ff4sCslf%2BJwyvU00kl85O3%2BdoGVoSpuJ5NV4vxbgBnqDIvzLl6cnhQnGuiR3O1aBHBvxnc8tEHrDQ7rbAfHBSzUDQx1ZA01xGFeMjB1E12ysKpNqegf6Fp%2F3RpS1f%2FahGf17ZII8K7qPMV7Y5QHsZzWlJuqqVrofaXPS0JOSdUEohQ4u5F%2Ft4owBp2PFcue68ycaOHyoZXBkZtLFPLgnFpHnJuWDDZ6LdJalpAztL9bWEAqpiNUsyzbNa7S6uSNi1KwIuudwMnGUgDBC3ZZBTznhNkVo6XDnpdtceX7Ai8KMp6inU%2F9qq5V7gwp4KRwAY6pgFZdG%2FrUE6UusDiELBKzAtKOfcpO6Uo1uClT%2FjhF51zZSMTTn508YKV2XBwOSpWU1Wkc2KYwHVYmXy6sf43UwvWeErWdQd2DRhVMbDdoHv%2F6KX323b0%2FAC61z1QpgUv8uYVn8sjqyQjI2MOu4Q1PVpt5WH1PnFBe7blBamUh%2B9AUPeTwQLlxSQyFr%2FrDNgwcXdPFcqU3P2WiEwDNCn967DE7bMUmWiW&X-Amz-Signature=72ee398e26179cea53dc021001157e05db7582ef7ee41b3019f6be65e8ed1673&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6C5LQ3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFWk3SRyUs16D7knFhTbhB88aL3EsISX1fJw4UQchVWhAiAIfjEDT1znfrTxI0yhAG%2BzsPs0hBKwV4%2B7gMr80r8W4SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc9ILm5Z%2B9wkGYa%2FWKtwDLJWq%2FTGGUkBXX47U9iq%2BPHkLE%2BN5zc8vl9bDv6RAH%2BxJCYNvP0XoSyidc3w7FeF9Q2ES48Pgzr1g8i5w8jQZccb26cxgxija%2BZIxkWNIRTP2tGnaNlQ2c1fyXwTxPcys%2BtZn9HTCW2NzAHNwLrtnAzm%2BhFbpQYPHxdEFwEvDJ1%2F7DqJ3s7XV124yP1%2F6J3QrG7hfYdmXyBHXWERWiNGrrGYhtVQIr8qndqzrOWV3Vv%2FPhzYzGVL%2BCakmFZG7yiMA9VbRq7aDMsEhKtEXgiGaDvoFgYYj9vmfiETIBjCG0W6bZ%2BnqHPyPYJmAbFDDOjWurn%2Ff4sCslf%2BJwyvU00kl85O3%2BdoGVoSpuJ5NV4vxbgBnqDIvzLl6cnhQnGuiR3O1aBHBvxnc8tEHrDQ7rbAfHBSzUDQx1ZA01xGFeMjB1E12ysKpNqegf6Fp%2F3RpS1f%2FahGf17ZII8K7qPMV7Y5QHsZzWlJuqqVrofaXPS0JOSdUEohQ4u5F%2Ft4owBp2PFcue68ycaOHyoZXBkZtLFPLgnFpHnJuWDDZ6LdJalpAztL9bWEAqpiNUsyzbNa7S6uSNi1KwIuudwMnGUgDBC3ZZBTznhNkVo6XDnpdtceX7Ai8KMp6inU%2F9qq5V7gwp4KRwAY6pgFZdG%2FrUE6UusDiELBKzAtKOfcpO6Uo1uClT%2FjhF51zZSMTTn508YKV2XBwOSpWU1Wkc2KYwHVYmXy6sf43UwvWeErWdQd2DRhVMbDdoHv%2F6KX323b0%2FAC61z1QpgUv8uYVn8sjqyQjI2MOu4Q1PVpt5WH1PnFBe7blBamUh%2B9AUPeTwQLlxSQyFr%2FrDNgwcXdPFcqU3P2WiEwDNCn967DE7bMUmWiW&X-Amz-Signature=189468d96a5afe88639a7ba7bed5f061fd332456e076e1637a319df27448bb43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
