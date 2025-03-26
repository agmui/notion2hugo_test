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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PC2FRM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsW0d8Ghi7h4d05IR6Dg58UKxiRYchCd30lan%2FVsh%2B0QIhAIiMs8PT%2FS9t1s9JwG3Ac0SD5OTEilegUgNnZO%2B%2F6RqfKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2BzwMR9muqZdx943Qq3APpiAlxBuaJHc0HQJRDLPCk5MYVlgTAe3iN1OAzvmUOrC1Bcr%2B24XbvlPA%2BJV8pjaE3p%2BlrvmaPJXq6%2Bnqeo9fbRtGRP3G3nEvRAu53e%2FcniYKOrIxr88kVmKY6uwVh7B2V7Fx9yWYbWerW1BV1y0jwJ7ebSL7GjI3NIR%2BxHN6VWqTYHtkfDy2IG9dGx9404%2Bd48b%2BN9wZQ1Uin%2FCCQqZxbD9vhtK4EFZ4KmMGR2ZM8dLu%2FeAPXyid17NKM6PEJ3LuwXnQC9Eva3xnkhke32mf1qyvkXHcY6FkFKaElxcuivZiwnuqePJCD4r39sQAWw5eDJr4ypGpHHAR1wfgaa7wr3xSu8N97PE9WDf189Tp7H7kmNEU1GLG33HHz8PYL5BJlIw5YYEPAQnmtnmY%2BAfL5%2BtnGzLjpgZc1n21RdMW9xCS3yX1jtqVPqU2djUUWeCiSu0rgJX8Zd3LbV4xFIS9%2Bgr8Hx0oh7hy0eQk%2Bd1EwrUccRIfwrBeeu%2FUTRIKReIEQH4usuqSGegBAjFMb%2BzEp5vEAWr2gOg34RZyt7bwZ7bHzvkP3TNNFEGlY053UCCBbkvKeuN0oqYCSQv4uC%2FAMiqeBbs32CIoTLjtr44lsJXJE9MgSw30JSh4rpDDP9pC%2FBjqkAWX3BR5vQprBh2SskyYuewjq4IWR9F6SLUIPxZUKmgFl5sr2hXCvdxxcHTCQiKWQhc9EBwDUIKTGSfg74e0x5zeitsXFRhRMzKmRQSEE57SkH73A58Fp6u7%2Fp5QMgjtV0UZBR7HTbM9R6ebrz1lgXs4L%2BE890ekOoEKpxpHO73fG5lXllcMT7tOZlbVid2L0t8rmLTt01b1%2BQ4iKwjfuI%2F9xRkBn&X-Amz-Signature=69a750c5f5b6aa4ee47926943be29c50015f7bd45a96b9bbbb8d2d20793a19ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PC2FRM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsW0d8Ghi7h4d05IR6Dg58UKxiRYchCd30lan%2FVsh%2B0QIhAIiMs8PT%2FS9t1s9JwG3Ac0SD5OTEilegUgNnZO%2B%2F6RqfKv8DCDMQABoMNjM3NDIzMTgzODA1Igz%2BzwMR9muqZdx943Qq3APpiAlxBuaJHc0HQJRDLPCk5MYVlgTAe3iN1OAzvmUOrC1Bcr%2B24XbvlPA%2BJV8pjaE3p%2BlrvmaPJXq6%2Bnqeo9fbRtGRP3G3nEvRAu53e%2FcniYKOrIxr88kVmKY6uwVh7B2V7Fx9yWYbWerW1BV1y0jwJ7ebSL7GjI3NIR%2BxHN6VWqTYHtkfDy2IG9dGx9404%2Bd48b%2BN9wZQ1Uin%2FCCQqZxbD9vhtK4EFZ4KmMGR2ZM8dLu%2FeAPXyid17NKM6PEJ3LuwXnQC9Eva3xnkhke32mf1qyvkXHcY6FkFKaElxcuivZiwnuqePJCD4r39sQAWw5eDJr4ypGpHHAR1wfgaa7wr3xSu8N97PE9WDf189Tp7H7kmNEU1GLG33HHz8PYL5BJlIw5YYEPAQnmtnmY%2BAfL5%2BtnGzLjpgZc1n21RdMW9xCS3yX1jtqVPqU2djUUWeCiSu0rgJX8Zd3LbV4xFIS9%2Bgr8Hx0oh7hy0eQk%2Bd1EwrUccRIfwrBeeu%2FUTRIKReIEQH4usuqSGegBAjFMb%2BzEp5vEAWr2gOg34RZyt7bwZ7bHzvkP3TNNFEGlY053UCCBbkvKeuN0oqYCSQv4uC%2FAMiqeBbs32CIoTLjtr44lsJXJE9MgSw30JSh4rpDDP9pC%2FBjqkAWX3BR5vQprBh2SskyYuewjq4IWR9F6SLUIPxZUKmgFl5sr2hXCvdxxcHTCQiKWQhc9EBwDUIKTGSfg74e0x5zeitsXFRhRMzKmRQSEE57SkH73A58Fp6u7%2Fp5QMgjtV0UZBR7HTbM9R6ebrz1lgXs4L%2BE890ekOoEKpxpHO73fG5lXllcMT7tOZlbVid2L0t8rmLTt01b1%2BQ4iKwjfuI%2F9xRkBn&X-Amz-Signature=4c4f3e38cfd6e0acce0e0733ef4938ea3601537658e59c8f39380eccdb6c0535&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
