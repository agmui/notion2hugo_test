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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPV2T4UD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGNQj0%2FCX47itlzfzkEO5PBSa0rAp5%2BZib9MFEK9Eb26AiEArd79wAwqK6t4cfXk0llFeFhzyz8g8JP1mSHkGDE%2Blwcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHQi1Q0zV9krtX20PyrcA0QSo3vgYPUvHr9v5uVVue9lHAc8TzFsPKGWq%2BbDPMCKS23q%2Fyyzaf5rLMcBaXCkC8S9lQg0caEXt9FLqZxAtjYx7VzqKC03iphTK1Ap5uV6djaWUYA9KZEq7xU%2BZVgq3JpzP3FU1UvreOnV0Se4FKU4nK8PHlebNkniQG%2FTATJ1xRed%2F2bSKS29e8wRbnXY0DdMfSxIlQP9KBv4DYRZsUBUUwYBJU8BCmDQHT86nsKEVdd8%2FgNzAOf6DJW90GI5h%2FXxdK0ySDlmLBXJ%2BKJ7hHnuNtl7UfRwPuBJ%2BxoeL1BZnye69Ra9mPs6bC3YYeS6f9p7KgZA3TIBjr%2BxtRTjXLeAUD9ED3pgOWGZphK4rhgGVHEP34RFgU0ObknPkjmcvJJ5StAuiHt0y3oJhBXx6fUrZjDdpwAALVrSOlTBro7uG649ENZGUqs%2FwnA%2FKbKbeLvBc1EfHdLoa88dFb9PRLksUMMY66rqJohDsHwHczuhkapzk2Y8Ox05y5Xc1iRVy7E1taHkH6TRQ1BEyXfB%2BgjLyf9mY83%2BHh6cQR%2FnZjhCk4C0oHDvMCnGIXcmL1%2BPC9ZTx4C0wH3u3%2B8xXcaqyazgiKlKJ0kSwdPTBfnl6QgCkNGUQrLftBlwUMcRMNiLosMGOqUBalOJk6Hw2t44jzEje0qLj9GvKwIG291qFVEBPGSCGpzDjMu9YS3piTiWuI4Ap4KhmMzraue%2BtvU%2FiRw20jexAdE8dcp0gQj6fa4afFRCNQweHXVXq3I6XvW4IqLGroz2MGzTuxStWjUFZLaLNqf4j3NfA%2FulR7ufDSrc7ryNQAGsUCKeqn%2BUMiOE5ipq4nztY5DfcAAQ2bR05tVU1AwQJKbp34Py&X-Amz-Signature=20ea437c471ebebd5365fd3523a47135a9549038355b982cd104600596bad35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPV2T4UD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGNQj0%2FCX47itlzfzkEO5PBSa0rAp5%2BZib9MFEK9Eb26AiEArd79wAwqK6t4cfXk0llFeFhzyz8g8JP1mSHkGDE%2Blwcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHQi1Q0zV9krtX20PyrcA0QSo3vgYPUvHr9v5uVVue9lHAc8TzFsPKGWq%2BbDPMCKS23q%2Fyyzaf5rLMcBaXCkC8S9lQg0caEXt9FLqZxAtjYx7VzqKC03iphTK1Ap5uV6djaWUYA9KZEq7xU%2BZVgq3JpzP3FU1UvreOnV0Se4FKU4nK8PHlebNkniQG%2FTATJ1xRed%2F2bSKS29e8wRbnXY0DdMfSxIlQP9KBv4DYRZsUBUUwYBJU8BCmDQHT86nsKEVdd8%2FgNzAOf6DJW90GI5h%2FXxdK0ySDlmLBXJ%2BKJ7hHnuNtl7UfRwPuBJ%2BxoeL1BZnye69Ra9mPs6bC3YYeS6f9p7KgZA3TIBjr%2BxtRTjXLeAUD9ED3pgOWGZphK4rhgGVHEP34RFgU0ObknPkjmcvJJ5StAuiHt0y3oJhBXx6fUrZjDdpwAALVrSOlTBro7uG649ENZGUqs%2FwnA%2FKbKbeLvBc1EfHdLoa88dFb9PRLksUMMY66rqJohDsHwHczuhkapzk2Y8Ox05y5Xc1iRVy7E1taHkH6TRQ1BEyXfB%2BgjLyf9mY83%2BHh6cQR%2FnZjhCk4C0oHDvMCnGIXcmL1%2BPC9ZTx4C0wH3u3%2B8xXcaqyazgiKlKJ0kSwdPTBfnl6QgCkNGUQrLftBlwUMcRMNiLosMGOqUBalOJk6Hw2t44jzEje0qLj9GvKwIG291qFVEBPGSCGpzDjMu9YS3piTiWuI4Ap4KhmMzraue%2BtvU%2FiRw20jexAdE8dcp0gQj6fa4afFRCNQweHXVXq3I6XvW4IqLGroz2MGzTuxStWjUFZLaLNqf4j3NfA%2FulR7ufDSrc7ryNQAGsUCKeqn%2BUMiOE5ipq4nztY5DfcAAQ2bR05tVU1AwQJKbp34Py&X-Amz-Signature=97defa4035d18dca8b0792cbc300d18e82c74a6b7043f5cf5f6f42a7b2e64611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
