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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2XZOVX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6cTg1EcQvDtp%2F55DRe9%2BVQ21JZ7CgD5f7j0HuYk5TAIhAK04wtF916iZvm8nOzvYnIbVKWRYIlO5odR0Gu%2Fokw4nKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIvYDd3fxU%2FpcUa8kq3ANQ0vOv3gI2gbw6zo1e2pGPlHtT8M7PDq9lOux9tG3q32UOcUu620mLArBVhH0Px23deXZfKH6wo2R5yLbJzOlFd6ULsRTwRKANTj43gXX4ACY8M3msLMkKR5fl47c7QfheQNQmbGMmo9sAae0IqETI92SGUKBjZSIOKeiRglg9QRxuOMOv9eJLd3NU8Nom4VHcXazb4pAr2DoZ7oES33Uxe7s8abwjdPtS3GA6MgOs2KHlyoCnsj3oHxbcogzrEOwhppZl%2FfNj6pA3JjHuG%2BhxnJPI4z5bbho%2Bia6CgGru%2FGzIS5fjxgrcEFUXAAsAYOWXDv6WlioljeWHcN2lz52O0qZWzlIz3zm7y9XgD8foYpyDARonakFdKufQdaCDfpC9Csu%2BV9o7rm07nynfCrTJaL2fooK5XDPRqNvqy7h%2B%2BOFPPtyGMQlCDu3ZHmDmZHSbHklVw8WPMtNRXj0slROcMarh8As4X5855SXabaQReaUreJhHp5DVI5Pyjz7vIparXIhyzk%2B5xLxlII1LIJP0IaBHdUfJvWx41oxyMDSbr2ZEvUOodLKOsKWW0GLQqeWeu%2FRgcuwS4q0ylEyemb%2FHqNltOM02UN8I33ic8NZ6JzPgiGS46pHBi2BqUzCEtfLDBjqkAaZFMwlXnt6Hs%2F455ZwuMOf1vDWYhUErbmIjEiqd2D33fwta56SX21DZSRYc9%2BAB72fRLEgaliRBDeY7R8zCdp0WpXYLqa%2FVgrQA%2BelsfSbE1VQRA6mwwZGeK0bxKSo9325T557Sfn0NUYW%2BehuYuXCI1amyFwtWChVQlRrNHMF0sz7CTgAz8UDv5AAoJg6orDGotgwsJw%2FeYLaRI%2BB9A%2BpEngTo&X-Amz-Signature=820f9601d1ff586ae43c31135a8c05f69491d63ff5163559ed4ba4501b23ccdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2XZOVX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6cTg1EcQvDtp%2F55DRe9%2BVQ21JZ7CgD5f7j0HuYk5TAIhAK04wtF916iZvm8nOzvYnIbVKWRYIlO5odR0Gu%2Fokw4nKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIvYDd3fxU%2FpcUa8kq3ANQ0vOv3gI2gbw6zo1e2pGPlHtT8M7PDq9lOux9tG3q32UOcUu620mLArBVhH0Px23deXZfKH6wo2R5yLbJzOlFd6ULsRTwRKANTj43gXX4ACY8M3msLMkKR5fl47c7QfheQNQmbGMmo9sAae0IqETI92SGUKBjZSIOKeiRglg9QRxuOMOv9eJLd3NU8Nom4VHcXazb4pAr2DoZ7oES33Uxe7s8abwjdPtS3GA6MgOs2KHlyoCnsj3oHxbcogzrEOwhppZl%2FfNj6pA3JjHuG%2BhxnJPI4z5bbho%2Bia6CgGru%2FGzIS5fjxgrcEFUXAAsAYOWXDv6WlioljeWHcN2lz52O0qZWzlIz3zm7y9XgD8foYpyDARonakFdKufQdaCDfpC9Csu%2BV9o7rm07nynfCrTJaL2fooK5XDPRqNvqy7h%2B%2BOFPPtyGMQlCDu3ZHmDmZHSbHklVw8WPMtNRXj0slROcMarh8As4X5855SXabaQReaUreJhHp5DVI5Pyjz7vIparXIhyzk%2B5xLxlII1LIJP0IaBHdUfJvWx41oxyMDSbr2ZEvUOodLKOsKWW0GLQqeWeu%2FRgcuwS4q0ylEyemb%2FHqNltOM02UN8I33ic8NZ6JzPgiGS46pHBi2BqUzCEtfLDBjqkAaZFMwlXnt6Hs%2F455ZwuMOf1vDWYhUErbmIjEiqd2D33fwta56SX21DZSRYc9%2BAB72fRLEgaliRBDeY7R8zCdp0WpXYLqa%2FVgrQA%2BelsfSbE1VQRA6mwwZGeK0bxKSo9325T557Sfn0NUYW%2BehuYuXCI1amyFwtWChVQlRrNHMF0sz7CTgAz8UDv5AAoJg6orDGotgwsJw%2FeYLaRI%2BB9A%2BpEngTo&X-Amz-Signature=a28e6f769541a5a16e9744e5d7319de4d7b66fa21f19afb7659761ad9d4ad338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
