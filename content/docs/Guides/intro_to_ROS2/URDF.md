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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMMO3CRJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpbDQCndFqYjaz3YTs1ED1smK%2BzbHlxAUZP2c9hCwlDAiEAsNJuYaOSJqilOFf3yRPgP%2Baknw3k%2BQxMstfnzLK%2F0Vgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLD0GEthozzWcnciyyrcAyakgMfG32yO2mra1ET1AWyLGch4MKpP2NQVeXHv%2BRWp8Dn6C%2FcgBTMBqaey477zuT9k04d8LA7l%2Blz8K6TcdMGPfAUizjdLk6r%2FYiibpQ9aCcTjsk8WGjQbtefxGxjU1Ly2ZVKjJ839zG7SadCtUSCXGmtuIiPuvEpFVZDLjQHfJX88wqdcdFqzIkpJmiyoqs64eKxRL%2FxRnQdfTvc04%2BilQ2Y7gFwTX3PReoBfXnsWfFNqHBS51ZaPflPcGEB%2FPrF18wrXTV%2FngE8Nl0gVeqBthlKxhE15qyGDOv3O6f5XDYMbTRcHe1AAaV2rP%2FRlwqrKbRegNIdcckuSZMPN4I%2FcQ3S6yLXtti4KHv3PNPwmWW5MW0T5zdYt3wWWqfRqvt7yPyPswUMfHktRNbOFQTx2j%2B626NHTMRkiuUEG1HMJTEfC7MvXFcoMTjgfEMsLniG%2Bu%2FRTrNlkYUt%2Fq9xdRyc5WIOTcpbUP1V%2FYtnDqd7YZDCnFijkyQD6ENs5ZPom5qIH8VpnRdRz3CX81WJR24Vg8wCpm%2F5eRvmwmWAL1zOK9gaa2UhXXOKBTLg%2B7InBwi368q5J6SCO0mlsomwCV6H7ExQAd1Z82VDrywx3%2FyZguFeRKIXyRnQWJPtcMIvok78GOqUBelTLlWYSm0fqZmx7DcovHEodf34tOl4SAMGXgVnjh1mJS5kreWq5Td%2FBLOAApzUE9nVUvhN4Z44%2FOstyBtnTaz7%2BG8HeTHnjpk%2Ba7gh0BeS9S4uGezcYeDaU9fJjhDf5%2BQ2b39GrxujtUM80qgwQ0pt1SNCfcHcU6Hk%2FFMaBnAiIqoxe0rXeMihG3XDOCxkr8JN8E0cvMSkxhzf%2BM54L%2FfFqM6Q%2F&X-Amz-Signature=b809b617fe4222b02ae8e95c94e6f5307389300e17cad93fc998400795453b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMMO3CRJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpbDQCndFqYjaz3YTs1ED1smK%2BzbHlxAUZP2c9hCwlDAiEAsNJuYaOSJqilOFf3yRPgP%2Baknw3k%2BQxMstfnzLK%2F0Vgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLD0GEthozzWcnciyyrcAyakgMfG32yO2mra1ET1AWyLGch4MKpP2NQVeXHv%2BRWp8Dn6C%2FcgBTMBqaey477zuT9k04d8LA7l%2Blz8K6TcdMGPfAUizjdLk6r%2FYiibpQ9aCcTjsk8WGjQbtefxGxjU1Ly2ZVKjJ839zG7SadCtUSCXGmtuIiPuvEpFVZDLjQHfJX88wqdcdFqzIkpJmiyoqs64eKxRL%2FxRnQdfTvc04%2BilQ2Y7gFwTX3PReoBfXnsWfFNqHBS51ZaPflPcGEB%2FPrF18wrXTV%2FngE8Nl0gVeqBthlKxhE15qyGDOv3O6f5XDYMbTRcHe1AAaV2rP%2FRlwqrKbRegNIdcckuSZMPN4I%2FcQ3S6yLXtti4KHv3PNPwmWW5MW0T5zdYt3wWWqfRqvt7yPyPswUMfHktRNbOFQTx2j%2B626NHTMRkiuUEG1HMJTEfC7MvXFcoMTjgfEMsLniG%2Bu%2FRTrNlkYUt%2Fq9xdRyc5WIOTcpbUP1V%2FYtnDqd7YZDCnFijkyQD6ENs5ZPom5qIH8VpnRdRz3CX81WJR24Vg8wCpm%2F5eRvmwmWAL1zOK9gaa2UhXXOKBTLg%2B7InBwi368q5J6SCO0mlsomwCV6H7ExQAd1Z82VDrywx3%2FyZguFeRKIXyRnQWJPtcMIvok78GOqUBelTLlWYSm0fqZmx7DcovHEodf34tOl4SAMGXgVnjh1mJS5kreWq5Td%2FBLOAApzUE9nVUvhN4Z44%2FOstyBtnTaz7%2BG8HeTHnjpk%2Ba7gh0BeS9S4uGezcYeDaU9fJjhDf5%2BQ2b39GrxujtUM80qgwQ0pt1SNCfcHcU6Hk%2FFMaBnAiIqoxe0rXeMihG3XDOCxkr8JN8E0cvMSkxhzf%2BM54L%2FfFqM6Q%2F&X-Amz-Signature=f647fe7c44a4bdab0ea415d1b9b0c905fb5039e50722a6aa3bfdcec721a52107&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
