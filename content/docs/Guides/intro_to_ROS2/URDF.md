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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVFVGSE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD5Beujf6VyymVth8BmHqTPk4qkWzcyuI7%2FRb34t8pIWgIhAIXLHUGaRQzTWx83j5VtAVfhV9H6SzjV3CieQWWuYZL0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz88YPpEeoZJmwGumYq3APMjvBFLHxwp%2B9rOgP%2FUaQoIypBDA32LISW7FfsSpt9ISzR6EIBm90xJ5dTxzJvntc8NEKyjrxi1gHc7FeAUqhlikjdCMXvkugv8GKl%2FZwr1iG9ZA%2Fdv1bjOuxU0xXxJd5uRd0a1XK0puelCqcE09GnXblG7bfu5QxtbqH7shZ5ta3DUQebmzS%2BIYfF3tng%2FLAg5Qx6H%2FqZX6%2F9m5rOt%2BOfIE6G6vP2NVuaP%2FOzE1XdVT28A3oCwNPotBtoHbs4XGzn4c1xz39xO88t0sqN9G1MD2viVR1%2FtgnGMOjXBaqgUlB7hajruilgxnlGefnRJZriRntIXdB8ywTw2ptSBkMBGLnCVBt3UPTOqme7O3SoleYw%2FcFhG%2FP%2BdwpGfn2ywhTl3K6jNtfiplN%2Fr4irXwG62x2bJ5GWLtAuTd0gLGbsi8OQ8zNpIxLPtiKixi7KPYZjEWGTrGV7xsiu%2FsFtITzjyIMePXPQtrJr837G7rO6lp1Bw8Mkqos7nf1Ls0WwPyPmKNT4qSvUZYsdanc9bYrxT67f5yGpfovsiWTCGfZxH5yWwBLJnGzs0zF%2Fc6AdFZHk29TNegTBw8SqbbdZNB5nWCAqQzJ69ZT0uqJjCiGV2MrwouGm3DD6pA%2FFXDCNktS9BjqkAWxlnMvjZAvix2%2BmDX74F05FKlJZGN1GqmAc4ox%2BHxfo2xEUCwHl%2BAa9yAB%2FOf2zQ4X7PqeRAkDETfF1p0aRwLvn3QHiFB16Ce5O6AqN3hQcKpErRmIjeVeYuQV1Jn28LRjXd7NhfppzxGYPKcnJL4xme4TP3T%2F9qZp63G8TttBmSXlGdX3o8Wz7QTyo7ksqrjd4nCL1UgwPQJxNWrmxQb9rDOft&X-Amz-Signature=ea42900b173ff4a4685a76946b1c967a067472c835e66e422ef2defcd52b0b65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVFVGSE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD5Beujf6VyymVth8BmHqTPk4qkWzcyuI7%2FRb34t8pIWgIhAIXLHUGaRQzTWx83j5VtAVfhV9H6SzjV3CieQWWuYZL0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz88YPpEeoZJmwGumYq3APMjvBFLHxwp%2B9rOgP%2FUaQoIypBDA32LISW7FfsSpt9ISzR6EIBm90xJ5dTxzJvntc8NEKyjrxi1gHc7FeAUqhlikjdCMXvkugv8GKl%2FZwr1iG9ZA%2Fdv1bjOuxU0xXxJd5uRd0a1XK0puelCqcE09GnXblG7bfu5QxtbqH7shZ5ta3DUQebmzS%2BIYfF3tng%2FLAg5Qx6H%2FqZX6%2F9m5rOt%2BOfIE6G6vP2NVuaP%2FOzE1XdVT28A3oCwNPotBtoHbs4XGzn4c1xz39xO88t0sqN9G1MD2viVR1%2FtgnGMOjXBaqgUlB7hajruilgxnlGefnRJZriRntIXdB8ywTw2ptSBkMBGLnCVBt3UPTOqme7O3SoleYw%2FcFhG%2FP%2BdwpGfn2ywhTl3K6jNtfiplN%2Fr4irXwG62x2bJ5GWLtAuTd0gLGbsi8OQ8zNpIxLPtiKixi7KPYZjEWGTrGV7xsiu%2FsFtITzjyIMePXPQtrJr837G7rO6lp1Bw8Mkqos7nf1Ls0WwPyPmKNT4qSvUZYsdanc9bYrxT67f5yGpfovsiWTCGfZxH5yWwBLJnGzs0zF%2Fc6AdFZHk29TNegTBw8SqbbdZNB5nWCAqQzJ69ZT0uqJjCiGV2MrwouGm3DD6pA%2FFXDCNktS9BjqkAWxlnMvjZAvix2%2BmDX74F05FKlJZGN1GqmAc4ox%2BHxfo2xEUCwHl%2BAa9yAB%2FOf2zQ4X7PqeRAkDETfF1p0aRwLvn3QHiFB16Ce5O6AqN3hQcKpErRmIjeVeYuQV1Jn28LRjXd7NhfppzxGYPKcnJL4xme4TP3T%2F9qZp63G8TttBmSXlGdX3o8Wz7QTyo7ksqrjd4nCL1UgwPQJxNWrmxQb9rDOft&X-Amz-Signature=24bf3bb3ea678d8045b61ca7d777e9d014010f9ccbea36bb5ba6eb0c26371c60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
