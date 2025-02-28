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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OUZYJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCMTg%2BliDIN1UFo%2F1SnVNQyFaWzGc7iH32xmS2TpKvPEAIhAKAlz1LLUyTt6s2ksMcWQoJG2nA%2B1dJ5MjNOb1bU6GmCKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXnedStQQBAHGCet4q3ANR%2FyuqHKNx1W%2BvQXnKMVm1RFYEjwto%2FBkgcaBqOIudfpPUtD1roflYaCUy4YAY8L1wIeukARl8B5fsIjSV%2BWfFGJqeO1Lrv5d2TknLCXV9hNG2zD3rKvi%2BmlF2yJ0s8cNJsvCiR6Rq3kyRyXuDr88CPtTBbqUFMOJ77qUepLqsHPwZZ8bpjRuIF9T4tHy%2F71VUFSuJFG1LND%2FtttvvFYQ0zbeaSzNojh3YOKvYGgFBbee90eGO83KDPP0aJ8zZ%2BCio4TDOvZixxsGU8X7UJ0RjHILRQpjDsX5a9fDDKUOEq7rAWf6PpdmYHKK8GZnhXDCPBAVc2kLQtcLn0mcQQOGbwSTeAyuZqYni%2BUfGZ9bNuWN3GZMLcODHXDZlvbzgK4HMrQ4UwlYnC9SwFk7kxINiN4MPabCPTFF6ww0ThpSV86qvwj8eLpmdpKLC1T4nS%2B96F5sh0uGbI6QE8sfIPUdWmME2fWw5hIT1M9eCM4SfgjEQ9bDOiqU0frFz54Uf8RBeXPn%2Fw16ycgg5Q0ex4RB9BnCuZDR3KiyzJj8FrlaR84BFEvTUSJhPUmHxYSODdvo14AGLHePAjNmuxw6TBNQrBadqlfESUJ0abFkpvtgdjZHxHjDnOr7ZydttgzCv74a%2BBjqkASRYusIDWdrFIPaz1K69I29ZvKNyFCGz6EIE042r9QYWC0Ny1V2r%2ByCZAGMVgSqglvJ0TKPNHuaKj%2BT1tWrgNxwN7P1cFVreDq0Oj809DrZCIvyLKjhc2GMb%2Bpl8Xeg8nHx5v1xSiEQ6zD5CmCnkGCuumh3XetE9H1gfvR%2BajvhhjMQa17kZUJJrYmykVfreCrCcmQIL94cuuDnfq3jVMCVii1Vf&X-Amz-Signature=24017f253b88b104cf3dfc159d1bdf7e83edc0be49bea68826afb7c3fc32b492&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OUZYJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCMTg%2BliDIN1UFo%2F1SnVNQyFaWzGc7iH32xmS2TpKvPEAIhAKAlz1LLUyTt6s2ksMcWQoJG2nA%2B1dJ5MjNOb1bU6GmCKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXnedStQQBAHGCet4q3ANR%2FyuqHKNx1W%2BvQXnKMVm1RFYEjwto%2FBkgcaBqOIudfpPUtD1roflYaCUy4YAY8L1wIeukARl8B5fsIjSV%2BWfFGJqeO1Lrv5d2TknLCXV9hNG2zD3rKvi%2BmlF2yJ0s8cNJsvCiR6Rq3kyRyXuDr88CPtTBbqUFMOJ77qUepLqsHPwZZ8bpjRuIF9T4tHy%2F71VUFSuJFG1LND%2FtttvvFYQ0zbeaSzNojh3YOKvYGgFBbee90eGO83KDPP0aJ8zZ%2BCio4TDOvZixxsGU8X7UJ0RjHILRQpjDsX5a9fDDKUOEq7rAWf6PpdmYHKK8GZnhXDCPBAVc2kLQtcLn0mcQQOGbwSTeAyuZqYni%2BUfGZ9bNuWN3GZMLcODHXDZlvbzgK4HMrQ4UwlYnC9SwFk7kxINiN4MPabCPTFF6ww0ThpSV86qvwj8eLpmdpKLC1T4nS%2B96F5sh0uGbI6QE8sfIPUdWmME2fWw5hIT1M9eCM4SfgjEQ9bDOiqU0frFz54Uf8RBeXPn%2Fw16ycgg5Q0ex4RB9BnCuZDR3KiyzJj8FrlaR84BFEvTUSJhPUmHxYSODdvo14AGLHePAjNmuxw6TBNQrBadqlfESUJ0abFkpvtgdjZHxHjDnOr7ZydttgzCv74a%2BBjqkASRYusIDWdrFIPaz1K69I29ZvKNyFCGz6EIE042r9QYWC0Ny1V2r%2ByCZAGMVgSqglvJ0TKPNHuaKj%2BT1tWrgNxwN7P1cFVreDq0Oj809DrZCIvyLKjhc2GMb%2Bpl8Xeg8nHx5v1xSiEQ6zD5CmCnkGCuumh3XetE9H1gfvR%2BajvhhjMQa17kZUJJrYmykVfreCrCcmQIL94cuuDnfq3jVMCVii1Vf&X-Amz-Signature=cccd492a69909f41666daf4534e232ae166cbb87e8da829432754c4f624edd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
