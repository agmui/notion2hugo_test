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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHJLWUB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICBNoUcL9F8GsHzVVCCMsU5cqUWirG2qMx1fGdfQ4l5IAiEAr12AQ1uJ31bKSti3GlxI0kZWIXo3pa5doUBCz3HNtnkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY9QZA5l%2F9p0M8a4CrcAwmFaINBYhVwZJLXShiWPq6D8bDg61Ucb7dEzheT7li0pTjhj4gMQEq%2BoiP0TqQ%2FKJHIP2xZ3BAQQYyhIfKpmOf3Y1eoPv5IWbmIdz1UCug%2B2HLchunzjVL%2FZiPjwHv0IEaHsl46%2FeTEwYCS4WTTaj812oKvbGqmkksDBN6km6wPiwDNK4QnXbqv0ybsh8ZRZiT0unPssFZx2uCd9SqUVu1xaZq9QIJd4AhwYwZdgBdeKJfuZHhw5GcD8u7ujQaYlRkyq%2FrxZ%2FcNJ259Vu6sDMywgUGYl3wPVhltDXo%2B71HwcEbQoVguV5f0%2B7XcXbegHcEeng%2Fy%2FD%2BXpXlF3wFi8QP%2BKceq8oK8V%2B1YqOJ43xpCAqSJQE0wgL9vDMdiwMQazNt1IpxjhC6xSKwCWrjx8TD05OnykfyISE9CMo3TWZjk0TcLjLHCgyVYUlbK10ZYhmXsvmHkcJK0Mnil9QL8meUg5Ds6gQWheF6OwtgSGNlKb96mP87cqC280BxOIHYN86%2FKvRHxzYPM0Q4Fu%2BfyRqVPVLUv8einZXpfXzwxhG8g0AL5tb9dj%2BOw2UPhgWkWswBGcjrRUWZEu0NbeGQYQG7JoUqryCrpqpX2jzuwSYorGJL8czbC693favhXMJemz70GOqUBPLX%2BVGc%2Be6QkIXfsjNVgFJwLWTCMVC9KvGZkxtLAc0%2Bvo%2FgzngC0wufU0y%2BaE%2FsrF%2BJT4XzayylCmeOTzR5UIHxHyrwZiiQxp2n1gdzVFe78HsFQ%2FC3Yxvncfsa0u3UtxgbovXO0ZyWAS9SzIlJ7IqnuMdkG72YvbpKwsOroJuAb6K9dnqsQgxPx5kSytgAqzpeRTqwOU%2FpghgCAvM2A%2Fla7Y%2BBm&X-Amz-Signature=fec7849c66de93d49168f2ddf467ae998df5192e94098a60964150c3473b90e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHJLWUB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICBNoUcL9F8GsHzVVCCMsU5cqUWirG2qMx1fGdfQ4l5IAiEAr12AQ1uJ31bKSti3GlxI0kZWIXo3pa5doUBCz3HNtnkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY9QZA5l%2F9p0M8a4CrcAwmFaINBYhVwZJLXShiWPq6D8bDg61Ucb7dEzheT7li0pTjhj4gMQEq%2BoiP0TqQ%2FKJHIP2xZ3BAQQYyhIfKpmOf3Y1eoPv5IWbmIdz1UCug%2B2HLchunzjVL%2FZiPjwHv0IEaHsl46%2FeTEwYCS4WTTaj812oKvbGqmkksDBN6km6wPiwDNK4QnXbqv0ybsh8ZRZiT0unPssFZx2uCd9SqUVu1xaZq9QIJd4AhwYwZdgBdeKJfuZHhw5GcD8u7ujQaYlRkyq%2FrxZ%2FcNJ259Vu6sDMywgUGYl3wPVhltDXo%2B71HwcEbQoVguV5f0%2B7XcXbegHcEeng%2Fy%2FD%2BXpXlF3wFi8QP%2BKceq8oK8V%2B1YqOJ43xpCAqSJQE0wgL9vDMdiwMQazNt1IpxjhC6xSKwCWrjx8TD05OnykfyISE9CMo3TWZjk0TcLjLHCgyVYUlbK10ZYhmXsvmHkcJK0Mnil9QL8meUg5Ds6gQWheF6OwtgSGNlKb96mP87cqC280BxOIHYN86%2FKvRHxzYPM0Q4Fu%2BfyRqVPVLUv8einZXpfXzwxhG8g0AL5tb9dj%2BOw2UPhgWkWswBGcjrRUWZEu0NbeGQYQG7JoUqryCrpqpX2jzuwSYorGJL8czbC693favhXMJemz70GOqUBPLX%2BVGc%2Be6QkIXfsjNVgFJwLWTCMVC9KvGZkxtLAc0%2Bvo%2FgzngC0wufU0y%2BaE%2FsrF%2BJT4XzayylCmeOTzR5UIHxHyrwZiiQxp2n1gdzVFe78HsFQ%2FC3Yxvncfsa0u3UtxgbovXO0ZyWAS9SzIlJ7IqnuMdkG72YvbpKwsOroJuAb6K9dnqsQgxPx5kSytgAqzpeRTqwOU%2FpghgCAvM2A%2Fla7Y%2BBm&X-Amz-Signature=430dd1dbd215bea4034e15fb4f57eb15ce6a53db3e02e1f724e891b4e9661861&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
