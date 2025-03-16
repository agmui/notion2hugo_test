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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEIB55E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArGfxrBZnPU5UGFUiaSqzTW0Ewwq8uY9wM6m70SdJNTAiAYk7h6Qt6yyGdklmZdw548ERn7qmg21SQKln5z0uz3BCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7DYHwp27pve0GSPmKtwDg3g8%2B6GNzB%2FUPPxiYev28zgAvJMtLDea3IpyCYpsflfBJedg9dP2qOKp5FKknrv4FUPuNqpdJ9Q4W6cz1zOk5w6d758cO%2FN6Y0prK0E6%2FGkb3%2FLs240Bp9YHdJ2P7qEXxZX7QXYwtjVmlYYTXzGqx3ov95RQaKU9RGt5NcttHdsK%2FkvBNE%2FpCUU06HnXepB1c%2Far7US%2F1cs1PhcOOOxjgaMASwnEOFP2oJsWJLp%2Fzp9%2FaLt4YDxEnG2JxZWfBI7CBqPt8Ws%2FTOrQjVNZGgegzWhKcL4v9KtQLOngaHMHUIlDJveSGjSqPZdPJF7QptI8bZKnqPZuVbafnLAue4s1g4%2FHzWydNOI4diqJIRVtwmeFYClKBgRTGPkBjhuD%2FRcS%2BhzU17FA9xdwFeQRWg0ADitTTHWpBNdkxNIIP%2BuZ797APbat32gG2nnQm2xxbKTes%2BUidsuX%2BgLQ1iONK2pzNVNHre0VecfWnJ8j0VIZhdekMXWIxSrGh5wGUiVg6MwzAB8ftoOGeZ9f110vVJZiWfx5R3h35f%2BIPPaI%2BD6dI%2B1eOJybUcc5uV1EdhMVZo393n5tx2vgHAZC7HZ3FLcdIQL07cgLFbSM%2BKyoWIx2FywxonJ0PgnrgwL%2FhsMwrurZvgY6pgFNQ7hb3Kckjy3EPEVmQ%2FBHZgzUXxXxPoD2RLkj469oXnqsBNugUuKi3MPZwK7FmC2UFRvsqPki1Nw9dN%2FXf0tu1MfklydUKVhuVrHylLVY6B2k1iKpMITHMUrRElUBYTgyrcQuL%2Fr9ODU0iwqDcvfSkPe%2F8xCsPHQsPTMGZm%2FXIPW%2BvNozsu6dF68C9DB%2B5XGu5v5PHBpVTnrV6H9sFrd2nw9%2BrGPp&X-Amz-Signature=04adb0cb0c405757553aa24530cbd246231818c007d19a469c1a7c5a3192ac05&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEIB55E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArGfxrBZnPU5UGFUiaSqzTW0Ewwq8uY9wM6m70SdJNTAiAYk7h6Qt6yyGdklmZdw548ERn7qmg21SQKln5z0uz3BCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7DYHwp27pve0GSPmKtwDg3g8%2B6GNzB%2FUPPxiYev28zgAvJMtLDea3IpyCYpsflfBJedg9dP2qOKp5FKknrv4FUPuNqpdJ9Q4W6cz1zOk5w6d758cO%2FN6Y0prK0E6%2FGkb3%2FLs240Bp9YHdJ2P7qEXxZX7QXYwtjVmlYYTXzGqx3ov95RQaKU9RGt5NcttHdsK%2FkvBNE%2FpCUU06HnXepB1c%2Far7US%2F1cs1PhcOOOxjgaMASwnEOFP2oJsWJLp%2Fzp9%2FaLt4YDxEnG2JxZWfBI7CBqPt8Ws%2FTOrQjVNZGgegzWhKcL4v9KtQLOngaHMHUIlDJveSGjSqPZdPJF7QptI8bZKnqPZuVbafnLAue4s1g4%2FHzWydNOI4diqJIRVtwmeFYClKBgRTGPkBjhuD%2FRcS%2BhzU17FA9xdwFeQRWg0ADitTTHWpBNdkxNIIP%2BuZ797APbat32gG2nnQm2xxbKTes%2BUidsuX%2BgLQ1iONK2pzNVNHre0VecfWnJ8j0VIZhdekMXWIxSrGh5wGUiVg6MwzAB8ftoOGeZ9f110vVJZiWfx5R3h35f%2BIPPaI%2BD6dI%2B1eOJybUcc5uV1EdhMVZo393n5tx2vgHAZC7HZ3FLcdIQL07cgLFbSM%2BKyoWIx2FywxonJ0PgnrgwL%2FhsMwrurZvgY6pgFNQ7hb3Kckjy3EPEVmQ%2FBHZgzUXxXxPoD2RLkj469oXnqsBNugUuKi3MPZwK7FmC2UFRvsqPki1Nw9dN%2FXf0tu1MfklydUKVhuVrHylLVY6B2k1iKpMITHMUrRElUBYTgyrcQuL%2Fr9ODU0iwqDcvfSkPe%2F8xCsPHQsPTMGZm%2FXIPW%2BvNozsu6dF68C9DB%2B5XGu5v5PHBpVTnrV6H9sFrd2nw9%2BrGPp&X-Amz-Signature=c3c2253b88b1f84f65effd10ac466ef8dddc188be2f052bc9fd1e1cfba770356&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
