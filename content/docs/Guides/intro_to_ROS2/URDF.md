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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5PIJIS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFqyCJ5t%2FHVqnNoVckxXirlaZEkXptL2chIj5LrAWIHBAiEA9NN8O3URTm%2By1WQapXCYmGYswtYg4V%2BiCW7vn7%2BLD1EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPefH%2BqSqdHecS7M5ircA5IRFLedJBaBoJVOIYH3mR7pGv%2B9ryhwzH51Tm1eK1OiHsz0oo9VS1RBvoTm1TrqOPX2ZN2Ocw45unVe12G21jK5KCLcDN80red8HX5RCfsZwm4CSv11TRWfSkuzslov6S2J%2BFEaOxyeeBpibKl4AYMkKplwFfPTYxiaU2O%2BouzVZavCZ%2Bfos0heMQX7ChDt0%2FOOLbF3wqsIfOBMpGn36JB%2BPaeDKAvL60HSvqhIGVw8labxm%2BSyBAKRqImy62pGs2xP0ShxtYHapDRRUDsx%2BEaPrax8I8nooz8jNF%2F2RrGP1CbPMeoW8EsaaEjMjk8i1oShU6UsrMhYiaH%2F6aREcny7nBoiv6yGcdFbvUZe1ceQfX5ZVRUfyZ1mqGRS5524km354DNbeKKnS5sdIsSZ3V%2FdipkceTfzsmPFXc7bz7JOPLxaLpdQRe9vaQ8TnVLkmaCiBcq9CynHqnS26LkyRM8NyMT9sRPAIqz%2B6Orm87Xx9R0N%2FG4bDFulrStFOmNFpbaPK%2BW9Mb1CJ9jHpGsMexXtg7zoyAu7DUZtsxA4uw2OvMM0vqTiMWRnPC6s0y6n0QjPWfDTSc5ORvmm6Rz0Ndslvje7lVp60pgUzIe8E2mNlEaD%2FtJOVkK5DtJMMJ%2F7tL8GOqUB%2FaEkt4ebmJGOU195%2FVWIWEgEM2zRlf5SxFMAaExCHaMG%2Bnk8GyEhT9bw6PZGDb%2B%2BCyfmtuhUe12nHKP%2BApn62OGPpG32qQPc48YmiguY4Yy51%2FEfQx2mOquyfJlmz0N8jkl1gy7BscUhpk4IAgdQW4%2BEKyceSKzS%2FGzanA9w5g1TKfiCGV2IAIouoe%2FoecxkTXyyWnc2lIltSxL4tDOTJoH8Eho6&X-Amz-Signature=6b62fe62d8c881d97d20d3ac6ace9ac914e338da7e6501a4689ec107c2a1474c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5PIJIS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFqyCJ5t%2FHVqnNoVckxXirlaZEkXptL2chIj5LrAWIHBAiEA9NN8O3URTm%2By1WQapXCYmGYswtYg4V%2BiCW7vn7%2BLD1EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPefH%2BqSqdHecS7M5ircA5IRFLedJBaBoJVOIYH3mR7pGv%2B9ryhwzH51Tm1eK1OiHsz0oo9VS1RBvoTm1TrqOPX2ZN2Ocw45unVe12G21jK5KCLcDN80red8HX5RCfsZwm4CSv11TRWfSkuzslov6S2J%2BFEaOxyeeBpibKl4AYMkKplwFfPTYxiaU2O%2BouzVZavCZ%2Bfos0heMQX7ChDt0%2FOOLbF3wqsIfOBMpGn36JB%2BPaeDKAvL60HSvqhIGVw8labxm%2BSyBAKRqImy62pGs2xP0ShxtYHapDRRUDsx%2BEaPrax8I8nooz8jNF%2F2RrGP1CbPMeoW8EsaaEjMjk8i1oShU6UsrMhYiaH%2F6aREcny7nBoiv6yGcdFbvUZe1ceQfX5ZVRUfyZ1mqGRS5524km354DNbeKKnS5sdIsSZ3V%2FdipkceTfzsmPFXc7bz7JOPLxaLpdQRe9vaQ8TnVLkmaCiBcq9CynHqnS26LkyRM8NyMT9sRPAIqz%2B6Orm87Xx9R0N%2FG4bDFulrStFOmNFpbaPK%2BW9Mb1CJ9jHpGsMexXtg7zoyAu7DUZtsxA4uw2OvMM0vqTiMWRnPC6s0y6n0QjPWfDTSc5ORvmm6Rz0Ndslvje7lVp60pgUzIe8E2mNlEaD%2FtJOVkK5DtJMMJ%2F7tL8GOqUB%2FaEkt4ebmJGOU195%2FVWIWEgEM2zRlf5SxFMAaExCHaMG%2Bnk8GyEhT9bw6PZGDb%2B%2BCyfmtuhUe12nHKP%2BApn62OGPpG32qQPc48YmiguY4Yy51%2FEfQx2mOquyfJlmz0N8jkl1gy7BscUhpk4IAgdQW4%2BEKyceSKzS%2FGzanA9w5g1TKfiCGV2IAIouoe%2FoecxkTXyyWnc2lIltSxL4tDOTJoH8Eho6&X-Amz-Signature=61f5c8edab2c60cc2e67a27b961587d68942e6ea1ae50185d397af2fa25d5a37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
