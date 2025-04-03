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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWONO7A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHAngb6GTDhpcr3SFSsZIuIxhgpwMDN4RysCEb18IQO2AiA%2F%2FZRrxOokCbGSg%2FcfnMSxYpN8SaOG3wWeQIinkRKbYiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6VMl9Pq5D4wtK0IKtwDFqf%2FPt%2BMafnNucFO4CpxGJoI3UWmSLYP57paGa58P%2BL0briWZBDTMNDUQ76GykZAya4QPlE4ZdM%2B%2BcUDm82mwUx%2FipEjL65zEQk%2F%2FdxqCTF%2FXQPq8vhsnIbp8GYuagilsiRj6yLP5f2qTZ5TmwIxtHpxRjOSSUPVrs69mvyf1NENX%2FiTleY7YFDXWNA7mq1TXXnYGB%2Bk365WZhKh0jP9JrNESN3q%2BgUYPgheh9XVNnMjHzGTTZ6bbLH5nW4vgFyR4LcmF%2F%2BLUBMcpuJBW0%2FSjTiCf5Y0AsH%2Fg29bxo8lHTOdKNKU4DF6AC8bglhITmkyuhUY8Z6hS7qK%2F4IZc56uB4yLfK%2BINS%2FX7YoJCg%2B5kE6UflQ%2BS1SfUFCfY08rtTLN0SnURe5bprfanK2%2BjD5o5b%2BiGTh8srwGUutu%2FxWPRZmYBCrEIwthxATfIQ4uTxsegNDSQeSph2tK2ZY45bTE2t0v8keIAmBcXr4Lz5krn%2F%2BTsK52Ayyc9a3yvy2Zjt4Nzd2zSS010SvXA0CT7kBhX5%2B0gc537JKD1gYwku1%2BvkQil%2BcPxLxVjo%2F1Usu%2BAm4JqdQ1zH2aXYuo9mE9NNJEhLis1Qd98t53PUE5oXw%2FAIh2r49BMr4kwoIWz5kwveK4vwY6pgFYYjGmnry5vMcRsfEBlltZvzzaYuYZgty98wYBoY2m9lcv31L9IR%2BsCatP94AY5EZPssy79nLBubu7btLQNmpmcIMvtAf3m7UK9u6JqhU2u69SUcEfG8oPVXomFD2NImu%2FSK22nWFX8Hn3srFjDl40wPiYhdpBRRLHh60EQ1axOphU9XIm9dUHCUfaWuSeV3EBqie3hddz6dtvDLapmS7%2B9cfNTAAf&X-Amz-Signature=a33e495bc08c34b1293e7f616ea6b362eacda73ac614480c2d364ab63e27508f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWONO7A%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHAngb6GTDhpcr3SFSsZIuIxhgpwMDN4RysCEb18IQO2AiA%2F%2FZRrxOokCbGSg%2FcfnMSxYpN8SaOG3wWeQIinkRKbYiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6VMl9Pq5D4wtK0IKtwDFqf%2FPt%2BMafnNucFO4CpxGJoI3UWmSLYP57paGa58P%2BL0briWZBDTMNDUQ76GykZAya4QPlE4ZdM%2B%2BcUDm82mwUx%2FipEjL65zEQk%2F%2FdxqCTF%2FXQPq8vhsnIbp8GYuagilsiRj6yLP5f2qTZ5TmwIxtHpxRjOSSUPVrs69mvyf1NENX%2FiTleY7YFDXWNA7mq1TXXnYGB%2Bk365WZhKh0jP9JrNESN3q%2BgUYPgheh9XVNnMjHzGTTZ6bbLH5nW4vgFyR4LcmF%2F%2BLUBMcpuJBW0%2FSjTiCf5Y0AsH%2Fg29bxo8lHTOdKNKU4DF6AC8bglhITmkyuhUY8Z6hS7qK%2F4IZc56uB4yLfK%2BINS%2FX7YoJCg%2B5kE6UflQ%2BS1SfUFCfY08rtTLN0SnURe5bprfanK2%2BjD5o5b%2BiGTh8srwGUutu%2FxWPRZmYBCrEIwthxATfIQ4uTxsegNDSQeSph2tK2ZY45bTE2t0v8keIAmBcXr4Lz5krn%2F%2BTsK52Ayyc9a3yvy2Zjt4Nzd2zSS010SvXA0CT7kBhX5%2B0gc537JKD1gYwku1%2BvkQil%2BcPxLxVjo%2F1Usu%2BAm4JqdQ1zH2aXYuo9mE9NNJEhLis1Qd98t53PUE5oXw%2FAIh2r49BMr4kwoIWz5kwveK4vwY6pgFYYjGmnry5vMcRsfEBlltZvzzaYuYZgty98wYBoY2m9lcv31L9IR%2BsCatP94AY5EZPssy79nLBubu7btLQNmpmcIMvtAf3m7UK9u6JqhU2u69SUcEfG8oPVXomFD2NImu%2FSK22nWFX8Hn3srFjDl40wPiYhdpBRRLHh60EQ1axOphU9XIm9dUHCUfaWuSeV3EBqie3hddz6dtvDLapmS7%2B9cfNTAAf&X-Amz-Signature=ba8c0a41ac2e1dbc1acdfb34f13cfcdbcf23d5d3b1211e7e09b97c76cf971142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
