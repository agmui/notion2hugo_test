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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKWWJH4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEH6lan5igNUrtd3W82FElV3k4mKJu5aMTa5cRef2a6tAiBKnO4LfEtka63KGSE7x1DR2o79CmhDUFjrqLEhXeMexCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVdeIqs2j%2BW1KMZcqKtwDgTtl8cwdtPNcCCwXeawUgCMjtetWdNTu7fIjLyRq8oJ4zjI47uPMhwitfDXdC0vk3B6v8eUhJ%2FUnnkJCBzBeZtoqheCxgbj6j0zoEDcAEXHnOY6KNT6AVXIPHGvyFdN6%2FttakMKVYVU5OfivfQ3chuR73y6wZ2Yb79DO0U1We2LEOprSXXyBmJbYzVTg%2FoGDZP%2BuRmWvz1xFfi6BXYjUavAjoXsKLtSnZd%2BIwBO3CtNSVDZ%2BnJF%2B6KnH9VfsmvboJF8iUKr5O0%2Bd5Rl4SFaqhpIVskI2j8bG%2BVyBtC3cLkaRzmQyYqN8ToQwzQjPw5CkM%2FZNqCIGeJ98TNMjXspDgX8z%2BFoWp3NSPF9nP%2BcRlB%2BDnPhT%2B5uDlnBqJ5kl6Aei3ksLI9%2BtIgQziToIDGoY9MRmzN8y1Xz8yNxbcm3is%2FtpMRANB66%2FwJS4loJI9gbdidBuyZ7j%2BnV88hOFZF9JKqqTetx9reVYClPR2D8U2gHxNaw4zSmZXpUYWnHKFQ4P9v5iLe2%2Fp4b2jhGxrhKybLYeur7y%2FKbrpQMTsLineAohUIBEqocXGDA1%2Bjnicf6b314NF%2F3nuZ7TRn5hO%2FB7RjcV98d8h1xDYeFSr3ytw6uo%2Fycyc%2F%2Bky%2BAyZhEw%2BoCnwAY6pgFk%2FjFIxzmGPjLYts8sHemmT9JXmeJWnOgVI8LeJ8QfdOqU5DKGHgEXFGr7fSWbOn19yNyXwSTbF7lMwZI0Zszr7OEwW%2FY12Hgd%2F7BUdlHFiJP%2BTKGwWh2I%2BZ%2BuOBFzRV4WcnTgpjIzVd5C3bYt7qms3NPU%2Bner5fIhvCNUECGRmGiWIZkFQzlbJ3z1plxKESDoJz2HYwXe2wB62w3eoHy8rzDOKnTf&X-Amz-Signature=4ec2ed256b469de04547ea857dfbce7692a0b02956a9a6872d4d868e6005a4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKWWJH4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEH6lan5igNUrtd3W82FElV3k4mKJu5aMTa5cRef2a6tAiBKnO4LfEtka63KGSE7x1DR2o79CmhDUFjrqLEhXeMexCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVdeIqs2j%2BW1KMZcqKtwDgTtl8cwdtPNcCCwXeawUgCMjtetWdNTu7fIjLyRq8oJ4zjI47uPMhwitfDXdC0vk3B6v8eUhJ%2FUnnkJCBzBeZtoqheCxgbj6j0zoEDcAEXHnOY6KNT6AVXIPHGvyFdN6%2FttakMKVYVU5OfivfQ3chuR73y6wZ2Yb79DO0U1We2LEOprSXXyBmJbYzVTg%2FoGDZP%2BuRmWvz1xFfi6BXYjUavAjoXsKLtSnZd%2BIwBO3CtNSVDZ%2BnJF%2B6KnH9VfsmvboJF8iUKr5O0%2Bd5Rl4SFaqhpIVskI2j8bG%2BVyBtC3cLkaRzmQyYqN8ToQwzQjPw5CkM%2FZNqCIGeJ98TNMjXspDgX8z%2BFoWp3NSPF9nP%2BcRlB%2BDnPhT%2B5uDlnBqJ5kl6Aei3ksLI9%2BtIgQziToIDGoY9MRmzN8y1Xz8yNxbcm3is%2FtpMRANB66%2FwJS4loJI9gbdidBuyZ7j%2BnV88hOFZF9JKqqTetx9reVYClPR2D8U2gHxNaw4zSmZXpUYWnHKFQ4P9v5iLe2%2Fp4b2jhGxrhKybLYeur7y%2FKbrpQMTsLineAohUIBEqocXGDA1%2Bjnicf6b314NF%2F3nuZ7TRn5hO%2FB7RjcV98d8h1xDYeFSr3ytw6uo%2Fycyc%2F%2Bky%2BAyZhEw%2BoCnwAY6pgFk%2FjFIxzmGPjLYts8sHemmT9JXmeJWnOgVI8LeJ8QfdOqU5DKGHgEXFGr7fSWbOn19yNyXwSTbF7lMwZI0Zszr7OEwW%2FY12Hgd%2F7BUdlHFiJP%2BTKGwWh2I%2BZ%2BuOBFzRV4WcnTgpjIzVd5C3bYt7qms3NPU%2Bner5fIhvCNUECGRmGiWIZkFQzlbJ3z1plxKESDoJz2HYwXe2wB62w3eoHy8rzDOKnTf&X-Amz-Signature=3fb6c74585d6f3772d6c945581c6bf803f9786a7b54a41524af9932b9c7bade7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
