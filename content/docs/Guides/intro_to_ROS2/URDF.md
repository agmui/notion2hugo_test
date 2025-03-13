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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNAAVMI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLshvSDBHsaA2YHFp%2Fj5UeG2DH%2Fb4EIUdmxIvNhH1sTAiEAuZ4qhb67h5d%2BoYogIMUp%2BHHunsYBpW%2FEk8pIle9dSPsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvJM3LUD9zURSWMEircA4MWdJwiCNYwy%2BDsiUlFqhld1FxDGEtC%2BelZLZD84Akbp8ZwPoI2hMug50GEB2XTs%2BiwawLbeuD4XTd%2BygfhaZOQixPJWz3DrTyVUtiycrr52xozB0mLXFg5FmSEpjI%2BG7r8cIlOyNelv6mYfu8TKP9fvYy9gupU%2FkPv8OkRCRUwR8KS1lpxniF6v%2FOm9uWsP9Mm6OGf%2FPin4ukRm33jBN6IqAWZhJOOIbHWiEmwcWIGUJRMuD5d13cNjLadC%2FVeQaNpsqrWVrseWAE6e%2BTDybj1bF1O4iYAUqnHAfQTDcoEr5BDyfvIQjs0aIBFJebuB8IK8famO%2BjrD3kSiA5nMe5iAk28dyiMcSw3KeOwOQCN1R%2BrcpKSz5V62Xh5uk%2BSPR5LlVv1r2G%2B2vQftoZXEeHL51iNmTPB90V%2F%2FhagR5xKKnCqk9R8JUA8AkouqwDDvxlgQXdsTzugAgsLllIgx5vVOOv8qOlaGf4iGeELo0jNuWYVz4rvRsBnrM2snYx7mvf16QLM%2FPWDZyvbNqnOCSCUaB79bnq8qVov6839bdp0E6h9hfGW1qnhsZ9fYg2lafV8JHlLmhFEe8iJh4YoNbbE3uywiD1Wf1wi%2Fp04l8eixIr9Xf3PDkYpnC75MJ33y74GOqUBHufviJ337j9hHGkiZeoLfIWdRMPkBEeVpIMC7t1UyJOUdEX4ugRjXJ8agCbulshcPBz6gnhKPHgOPy%2FB3SZlKBUX0sPT7o2KRdLXE5Qdkakj8NefcWAw1jIiQ5Jm7AiQH%2Fq7Y4Gp0VkNkMtF39tVdk57F3iJRyp76ptH%2FkZR9l4HWQTlNhEZaF2KYYkfImtyHV%2BMMtuwUY2PbwqsrcSM%2BuHDzTnM&X-Amz-Signature=19c3fdf61d5ec315879d21648ee2d414d40d1fc12069365495a93b33d2d52093&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNAAVMI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLshvSDBHsaA2YHFp%2Fj5UeG2DH%2Fb4EIUdmxIvNhH1sTAiEAuZ4qhb67h5d%2BoYogIMUp%2BHHunsYBpW%2FEk8pIle9dSPsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvJM3LUD9zURSWMEircA4MWdJwiCNYwy%2BDsiUlFqhld1FxDGEtC%2BelZLZD84Akbp8ZwPoI2hMug50GEB2XTs%2BiwawLbeuD4XTd%2BygfhaZOQixPJWz3DrTyVUtiycrr52xozB0mLXFg5FmSEpjI%2BG7r8cIlOyNelv6mYfu8TKP9fvYy9gupU%2FkPv8OkRCRUwR8KS1lpxniF6v%2FOm9uWsP9Mm6OGf%2FPin4ukRm33jBN6IqAWZhJOOIbHWiEmwcWIGUJRMuD5d13cNjLadC%2FVeQaNpsqrWVrseWAE6e%2BTDybj1bF1O4iYAUqnHAfQTDcoEr5BDyfvIQjs0aIBFJebuB8IK8famO%2BjrD3kSiA5nMe5iAk28dyiMcSw3KeOwOQCN1R%2BrcpKSz5V62Xh5uk%2BSPR5LlVv1r2G%2B2vQftoZXEeHL51iNmTPB90V%2F%2FhagR5xKKnCqk9R8JUA8AkouqwDDvxlgQXdsTzugAgsLllIgx5vVOOv8qOlaGf4iGeELo0jNuWYVz4rvRsBnrM2snYx7mvf16QLM%2FPWDZyvbNqnOCSCUaB79bnq8qVov6839bdp0E6h9hfGW1qnhsZ9fYg2lafV8JHlLmhFEe8iJh4YoNbbE3uywiD1Wf1wi%2Fp04l8eixIr9Xf3PDkYpnC75MJ33y74GOqUBHufviJ337j9hHGkiZeoLfIWdRMPkBEeVpIMC7t1UyJOUdEX4ugRjXJ8agCbulshcPBz6gnhKPHgOPy%2FB3SZlKBUX0sPT7o2KRdLXE5Qdkakj8NefcWAw1jIiQ5Jm7AiQH%2Fq7Y4Gp0VkNkMtF39tVdk57F3iJRyp76ptH%2FkZR9l4HWQTlNhEZaF2KYYkfImtyHV%2BMMtuwUY2PbwqsrcSM%2BuHDzTnM&X-Amz-Signature=77a5efcd4c0abece03e9a64a2b3c12bee7e34d71898f23af672107eb1343b39c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
