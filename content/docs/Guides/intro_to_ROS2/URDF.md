---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSFHUFD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqvYKjTc7vrTCH6DKYr8PLd8oFjVoBUi9EtWIkJCQLyAiBsRdufL6xwHQtLl13yqCYfXoMOKPj6IYrTN5IqVaVgIir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMluJ1lvDcyzoH3NwPKtwDV%2FKtPypLVNYo%2FgKpO3vFQK5%2BSEee0Udt8BI2pNKE4mbil8sNmc7LLnnszw7CGHvlrU3DBqknYctdetW3celt%2FozSS2zHimxx1ipr0exLro8Gj2QNTiu1TSCreji%2Bc6qnsBp%2FwzfXkBp9OT%2BzOLyUbhDBBUNYZRiJVRNelosHER%2FSo4rA4OM7CVcysOVlvnDoif7sg5gRmv2G2U%2Bb81CZGp4gxL6W80ZzRs0F5QG736KYY4L%2BcbV1WKrambM6%2F2EFtKztDYhcKv6mOJfrltMcch83%2FM1Q5th1UrEbXMA20VirQw52Be7deHnl6DUOSueg2rk5%2FDZ4Ke2qDoWlmVnnfxZ4C1ZOuqFj7nmy9GbPQDaGR25y%2BhxgVKjc7eprPqgPX8Mzsby%2BF0ATomtSZRJz4CtQOsc0meuJDAHncL2fp6E3ocYRjlym0LRlVL%2FF6%2FzGYWtLGZrkX3QGLDpNcw5fKC1qp%2B%2Bsm9fU%2B9cgXOvenOF3F6uIxfRmbknY%2FF0I0xb7ryLKO8IBtmgmH6Wpjvb%2BHyhToyCAhFdSRyDIHiU%2BdajuR6xqIlgSXNOCDxD4CHM9HlBC6oE8BKhUbvaARSrzI0DOxZRCFuigA0ouWVCnaufdUIs2Aq1TR%2FAZ550w8NG9xAY6pgGbH0FKWCrnaKXvEUeak1H4zHBd2%2FbImA0AiEVUxWYQ3DO4CeE6fBVLMDy3zgDhqH3%2BgXmTA9ZYfmL5Y97Om2mbP%2BMye0VEDVFTH20plerUQxwImJDkOy8sb7MkulrkWdolVqL9jXJoVydNJ16VCVVa48KjLPUkrY07lJ9SuTQ9KrqO%2FtKRY5oOdxqq9y9JDGPb%2BkySIlgh%2BPRruE%2BrEEU0av%2BDATOm&X-Amz-Signature=f719911eada8aa28c9a199466b35dace8336ef8b173369a359952b07dda656fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSFHUFD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqvYKjTc7vrTCH6DKYr8PLd8oFjVoBUi9EtWIkJCQLyAiBsRdufL6xwHQtLl13yqCYfXoMOKPj6IYrTN5IqVaVgIir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMluJ1lvDcyzoH3NwPKtwDV%2FKtPypLVNYo%2FgKpO3vFQK5%2BSEee0Udt8BI2pNKE4mbil8sNmc7LLnnszw7CGHvlrU3DBqknYctdetW3celt%2FozSS2zHimxx1ipr0exLro8Gj2QNTiu1TSCreji%2Bc6qnsBp%2FwzfXkBp9OT%2BzOLyUbhDBBUNYZRiJVRNelosHER%2FSo4rA4OM7CVcysOVlvnDoif7sg5gRmv2G2U%2Bb81CZGp4gxL6W80ZzRs0F5QG736KYY4L%2BcbV1WKrambM6%2F2EFtKztDYhcKv6mOJfrltMcch83%2FM1Q5th1UrEbXMA20VirQw52Be7deHnl6DUOSueg2rk5%2FDZ4Ke2qDoWlmVnnfxZ4C1ZOuqFj7nmy9GbPQDaGR25y%2BhxgVKjc7eprPqgPX8Mzsby%2BF0ATomtSZRJz4CtQOsc0meuJDAHncL2fp6E3ocYRjlym0LRlVL%2FF6%2FzGYWtLGZrkX3QGLDpNcw5fKC1qp%2B%2Bsm9fU%2B9cgXOvenOF3F6uIxfRmbknY%2FF0I0xb7ryLKO8IBtmgmH6Wpjvb%2BHyhToyCAhFdSRyDIHiU%2BdajuR6xqIlgSXNOCDxD4CHM9HlBC6oE8BKhUbvaARSrzI0DOxZRCFuigA0ouWVCnaufdUIs2Aq1TR%2FAZ550w8NG9xAY6pgGbH0FKWCrnaKXvEUeak1H4zHBd2%2FbImA0AiEVUxWYQ3DO4CeE6fBVLMDy3zgDhqH3%2BgXmTA9ZYfmL5Y97Om2mbP%2BMye0VEDVFTH20plerUQxwImJDkOy8sb7MkulrkWdolVqL9jXJoVydNJ16VCVVa48KjLPUkrY07lJ9SuTQ9KrqO%2FtKRY5oOdxqq9y9JDGPb%2BkySIlgh%2BPRruE%2BrEEU0av%2BDATOm&X-Amz-Signature=21490750de45e489c93c286043d319764cf6611037fa27565ce7821a95da782b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
