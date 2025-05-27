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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQOYPGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ56PycogNTGhJIGpCe1jkDdrZuy%2BruvCtP4x8Nzz%2FuAIhAINcWuP8X3ZUMdpx4P7y2yq5uZKjWS6rsAGa6w2IbmMYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx6n5i3KFS%2Fi5v2RC8q3APZo9CHmHua09BXW7Wu707h38SUxXgF3IUuz9uPwd9ye%2B3NmN%2B8HkvX5b2DRxmFuAa0ynGeX%2BGu0d1skT%2FziBRUOWuXM94wD1hd84ItxnZDfhwRDYUYMfUAtRGWNRR6n0x8t6qtM8coa8s0BdAaTfQGZdOCZPlh9pBdWt5btytf320ceoXXFUBBoOX6bAQfx%2FQzzdZ8u7euVjvFJPLAiTBld6zQFibJowO1yemOdT%2BgVMQOPGwAbPA6CtAouEcHzHKtBcG7eUoW1Oqbd78ijIALERGnBfXWtuwGVxuFaaeufxVgoysX5WGGZ%2Btx7DDxv1hw%2FFJ0cUuYza%2B42vQanRjmt8%2FqU3FpZ2UGM3tx%2BfDUuraNdofYHZ09wD6EwTMatU93xSHaJiS9nkEkVzwJll7Oa%2F8bn81759dEfTTUP6D7juRYfPFH0bHZmDRyvyCvGN3x9dDxMq0dZ2FZCRdw46FiAtfwwkbPLBj86FSixFM1ydBWVFRmYu%2FiNcaTP2nxHUTpeOUg7UWyYB0Ul%2B5QmHcGMADO2B5ZYuiQnQiFm3nb3jMBnwzJuCbtpWklc%2BAu99R6%2BFhMIdUurpA%2BG9XVt%2FmjAGQxDteZyl51SJAUpA41CvK8MQJwf7c5ydZRxTCfqdTBBjqkAX%2FJTxGLsbS%2BsibBrT8ap0JwMdfLdlNYNN3RgbFQ%2BPssPJW86ft4PkzTp6Ij02VrvPmZgJGbG6sfG6ccmuZ%2Fio0QnpjgEc0OP0W03rduBtIyG6PLdkFJXRb8rdRKR2sJ3PrmnHE1bIKni%2FK5JngX%2FNmWIq23KYe1wozllCRg%2FaPnthCkLge9RBHffmLgMwhQJtgFKIdVdrj3SQTjukYlAqJXQVLp&X-Amz-Signature=0f6c5307f561785935b03d24bbd62b88502b43c99901ddea4def065596a62677&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQOYPGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ56PycogNTGhJIGpCe1jkDdrZuy%2BruvCtP4x8Nzz%2FuAIhAINcWuP8X3ZUMdpx4P7y2yq5uZKjWS6rsAGa6w2IbmMYKv8DCFMQABoMNjM3NDIzMTgzODA1Igx6n5i3KFS%2Fi5v2RC8q3APZo9CHmHua09BXW7Wu707h38SUxXgF3IUuz9uPwd9ye%2B3NmN%2B8HkvX5b2DRxmFuAa0ynGeX%2BGu0d1skT%2FziBRUOWuXM94wD1hd84ItxnZDfhwRDYUYMfUAtRGWNRR6n0x8t6qtM8coa8s0BdAaTfQGZdOCZPlh9pBdWt5btytf320ceoXXFUBBoOX6bAQfx%2FQzzdZ8u7euVjvFJPLAiTBld6zQFibJowO1yemOdT%2BgVMQOPGwAbPA6CtAouEcHzHKtBcG7eUoW1Oqbd78ijIALERGnBfXWtuwGVxuFaaeufxVgoysX5WGGZ%2Btx7DDxv1hw%2FFJ0cUuYza%2B42vQanRjmt8%2FqU3FpZ2UGM3tx%2BfDUuraNdofYHZ09wD6EwTMatU93xSHaJiS9nkEkVzwJll7Oa%2F8bn81759dEfTTUP6D7juRYfPFH0bHZmDRyvyCvGN3x9dDxMq0dZ2FZCRdw46FiAtfwwkbPLBj86FSixFM1ydBWVFRmYu%2FiNcaTP2nxHUTpeOUg7UWyYB0Ul%2B5QmHcGMADO2B5ZYuiQnQiFm3nb3jMBnwzJuCbtpWklc%2BAu99R6%2BFhMIdUurpA%2BG9XVt%2FmjAGQxDteZyl51SJAUpA41CvK8MQJwf7c5ydZRxTCfqdTBBjqkAX%2FJTxGLsbS%2BsibBrT8ap0JwMdfLdlNYNN3RgbFQ%2BPssPJW86ft4PkzTp6Ij02VrvPmZgJGbG6sfG6ccmuZ%2Fio0QnpjgEc0OP0W03rduBtIyG6PLdkFJXRb8rdRKR2sJ3PrmnHE1bIKni%2FK5JngX%2FNmWIq23KYe1wozllCRg%2FaPnthCkLge9RBHffmLgMwhQJtgFKIdVdrj3SQTjukYlAqJXQVLp&X-Amz-Signature=db5e02d96a3420dca0c2090776cffa023e9098aa3a871bbe99b8662e98f71885&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
