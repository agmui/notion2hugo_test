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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XLV34J%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGric%2FNaqh7EbVddFF2AIJwzYT0SGqM1f3nDUmFxUfa5AiBDKDmsAyuVmby0p8gvjBn22I19D6i64HwV0Gf8hFmwTyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMi25HaeCbPKYWwRzDKtwD5up%2BJdNwoOO2VbS9BxALtfnALfI8ZyJWFapA94Fi2PVAt2T4CZRgHIoYxNFXlYBBjcyqBDloMtUqaMgS%2F81eOBg22iupN1Mr4lS63U05QP2EwqnwE4rUlQRViY2sX3IQOx7xwZXv7RMCWYnrlAQEcDNTg3xWLjhKIomP71F0tMrWSoUoPolwQQDYuSLMW3WbNBHba547rLXrDU%2FZHWFppMqRnbNyDGLHrQaKksEW79QtQSzurLHx6OaaUnmrqZKhg5E5m9nOIdsdiAdG6BivO7xEKlzv0F46hC%2FTNWR4s4qvOiQ2oNXejJZ5dENwR3F1Hz7v8a1yXWSBpXmPSIc6WvFjG2Mhe%2Fzz6Rthgqu3b3bJ6%2BtQn3n6GxP96EnpcYCJ5%2BdeKng6DRZOjW9DAWXE4v38k%2BZ%2B%2Fozhf1az%2BcBkb0o7IV1Dfn0XzvfYO2RISUoC1pkhVd5mQ7M%2B1Mq6g2bEILD25VPwekvN66YEARK4sQewNZO%2BSBvl5MvXE38MssVUjScptKn%2F%2F9TIx995Q6psqeGtQvBIrYTD01LxDkET8sGALJMpt5MuI9SWWiAFqnWjSJfrcBfaxSMTlMp%2BrJ%2B1Tvpl2lD%2B%2FeuKV%2Fb74CHA0cDS7yDeWya8rBkhA5ww2vqPwgY6pgFvwCxKbhmUY1PbQMwaxAKDu6u6cMTALyk880uluAOFhGAyzRjdSUfTjN2Ae9evIyIXr3q%2Bx4jFG4HvR0ZVccjTk4g6VzunQJKgWx64a%2FyK7JUfKXu5nZcIJz2v6Zrj2sNEtTTEeBwQIkao6QRtsqOcO2LpH8omnEYg2whYVazAJk0nZPCkatXjdH7uIOPMfZiAjne7a%2BcvHPcpVBlGNNDqjuwqKKXM&X-Amz-Signature=2d12e80e6f1889c117c1baa27866dc7c2f2ff641a05aff2ab9fc3eaa18aea8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XLV34J%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGric%2FNaqh7EbVddFF2AIJwzYT0SGqM1f3nDUmFxUfa5AiBDKDmsAyuVmby0p8gvjBn22I19D6i64HwV0Gf8hFmwTyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMi25HaeCbPKYWwRzDKtwD5up%2BJdNwoOO2VbS9BxALtfnALfI8ZyJWFapA94Fi2PVAt2T4CZRgHIoYxNFXlYBBjcyqBDloMtUqaMgS%2F81eOBg22iupN1Mr4lS63U05QP2EwqnwE4rUlQRViY2sX3IQOx7xwZXv7RMCWYnrlAQEcDNTg3xWLjhKIomP71F0tMrWSoUoPolwQQDYuSLMW3WbNBHba547rLXrDU%2FZHWFppMqRnbNyDGLHrQaKksEW79QtQSzurLHx6OaaUnmrqZKhg5E5m9nOIdsdiAdG6BivO7xEKlzv0F46hC%2FTNWR4s4qvOiQ2oNXejJZ5dENwR3F1Hz7v8a1yXWSBpXmPSIc6WvFjG2Mhe%2Fzz6Rthgqu3b3bJ6%2BtQn3n6GxP96EnpcYCJ5%2BdeKng6DRZOjW9DAWXE4v38k%2BZ%2B%2Fozhf1az%2BcBkb0o7IV1Dfn0XzvfYO2RISUoC1pkhVd5mQ7M%2B1Mq6g2bEILD25VPwekvN66YEARK4sQewNZO%2BSBvl5MvXE38MssVUjScptKn%2F%2F9TIx995Q6psqeGtQvBIrYTD01LxDkET8sGALJMpt5MuI9SWWiAFqnWjSJfrcBfaxSMTlMp%2BrJ%2B1Tvpl2lD%2B%2FeuKV%2Fb74CHA0cDS7yDeWya8rBkhA5ww2vqPwgY6pgFvwCxKbhmUY1PbQMwaxAKDu6u6cMTALyk880uluAOFhGAyzRjdSUfTjN2Ae9evIyIXr3q%2Bx4jFG4HvR0ZVccjTk4g6VzunQJKgWx64a%2FyK7JUfKXu5nZcIJz2v6Zrj2sNEtTTEeBwQIkao6QRtsqOcO2LpH8omnEYg2whYVazAJk0nZPCkatXjdH7uIOPMfZiAjne7a%2BcvHPcpVBlGNNDqjuwqKKXM&X-Amz-Signature=5b331550f86ff8dab597bc53872b7af9a5e8c082e570af003d9b85c7e2737923&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
