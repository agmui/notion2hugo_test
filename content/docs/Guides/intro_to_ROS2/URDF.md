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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Q6MKZR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDkEuxzgV%2Bk%2FeDFRQFEmvWuApEGqQaVblCCHNk8XG6LYAiEA2yIlL48N0dfln1hZCAlujCUG%2BU%2F18a0V2mjH7KGQK%2Bcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ6J%2BD3S5rNNvrX8SCrcA%2BRL5Y%2BfGIMHoGOMRloPed0QJR%2BhtzcQFKwFp8Q3hBj%2FXseo7JQ8%2BIRBWYsfmtCMdEh1lJzcGCZ4J4iwwizW8k4j5cIbc3k35zW73LTOnKfgh7gY8ChCcSLmrjnrOnaBV06Kd3ebEvCDymvjZ0A0cHWRhxYma4SotJnMc%2FupnyvHo2jdC3gZ2o%2FXqUBfAbs5K27dBQfY3ZbVXuxFDZzE7TaIIuzX5YBTE8h9DUblDxWc%2Fga2xUrOmXCq79THq2gSLOMUWeOP6IIpnSdGBkU2LVaAcAFFZguYoo4eYVHU3mtE1fodR49f5i%2Bu23XNfA7RCToVW4YUKwA78Eo9E7gyX8Tdaj2VWz0NhwNmiBvt1g5u5pScvxgD%2FzB%2F49Ck6MzSOVi75V%2FUbe4ppQQHo6f5UIOn2%2FznZTEtIoLijYeKSU9WVDanBzFk3XiHd%2BIMmbZ7aVeQqu4ZAfg75xv22XehKUa1jGzypJrGCy40CEN5korOSnYglqu38e91bn3bO2VOQBtAkZReLlKZuSC6SXw8lH8hWjjGvERn2dqcO5%2BZ%2FG5ORRgVJW9WiZeYoWTw5eHCuZY7sT2Hy78Txt6%2F9tp1li1k6jtxpNnKFvuHtYIHjLioC0PzhFmdRjcXVEqAMJq7tsIGOqUBohrBBnzxpvANzIPuSAtgC%2BcANhJNYUuR3KPCCxOpQ065ffdSSZzP3lEC6CqUXp2wDIT2LKZ1E5Oi411oh4RtMCvyy5Wo6NaKhlo6l3iUFNzfjQSf8qST4xqOw0xuC7AUUrIOVSmMiRHPeASZE5iv5WJdx1DafCLAqMVuGWFBO0A8fGWorxg7qgl0hXxdp93jfUscJUy12ht8uNcYTKdgXDiSd1Rq&X-Amz-Signature=f3f92a747cf06d8aac7337f6b889a5bbde1704f49d506d2174c907d66ce40969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Q6MKZR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIDkEuxzgV%2Bk%2FeDFRQFEmvWuApEGqQaVblCCHNk8XG6LYAiEA2yIlL48N0dfln1hZCAlujCUG%2BU%2F18a0V2mjH7KGQK%2Bcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ6J%2BD3S5rNNvrX8SCrcA%2BRL5Y%2BfGIMHoGOMRloPed0QJR%2BhtzcQFKwFp8Q3hBj%2FXseo7JQ8%2BIRBWYsfmtCMdEh1lJzcGCZ4J4iwwizW8k4j5cIbc3k35zW73LTOnKfgh7gY8ChCcSLmrjnrOnaBV06Kd3ebEvCDymvjZ0A0cHWRhxYma4SotJnMc%2FupnyvHo2jdC3gZ2o%2FXqUBfAbs5K27dBQfY3ZbVXuxFDZzE7TaIIuzX5YBTE8h9DUblDxWc%2Fga2xUrOmXCq79THq2gSLOMUWeOP6IIpnSdGBkU2LVaAcAFFZguYoo4eYVHU3mtE1fodR49f5i%2Bu23XNfA7RCToVW4YUKwA78Eo9E7gyX8Tdaj2VWz0NhwNmiBvt1g5u5pScvxgD%2FzB%2F49Ck6MzSOVi75V%2FUbe4ppQQHo6f5UIOn2%2FznZTEtIoLijYeKSU9WVDanBzFk3XiHd%2BIMmbZ7aVeQqu4ZAfg75xv22XehKUa1jGzypJrGCy40CEN5korOSnYglqu38e91bn3bO2VOQBtAkZReLlKZuSC6SXw8lH8hWjjGvERn2dqcO5%2BZ%2FG5ORRgVJW9WiZeYoWTw5eHCuZY7sT2Hy78Txt6%2F9tp1li1k6jtxpNnKFvuHtYIHjLioC0PzhFmdRjcXVEqAMJq7tsIGOqUBohrBBnzxpvANzIPuSAtgC%2BcANhJNYUuR3KPCCxOpQ065ffdSSZzP3lEC6CqUXp2wDIT2LKZ1E5Oi411oh4RtMCvyy5Wo6NaKhlo6l3iUFNzfjQSf8qST4xqOw0xuC7AUUrIOVSmMiRHPeASZE5iv5WJdx1DafCLAqMVuGWFBO0A8fGWorxg7qgl0hXxdp93jfUscJUy12ht8uNcYTKdgXDiSd1Rq&X-Amz-Signature=5f30f8b499d9a37a7f9fa9158b1519e4d683a30136b8c33e2d80730db0b7d83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
