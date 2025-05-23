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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBREK2Y%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICHIuJ972%2B0A9181cXIDJQelGIGvFf0V%2BVLneWJltVAqAiBkXUhsbnMi4mI43Q6INtNhyG2GUgcVttyOcNH2ICbAViqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5AiE5TyHS%2BGkYCWKtwDVpe8cVqfnDW5tUqgPRI3x7r7nJM62D0YI348N6qShOK6m6rwLR8OasEB1JDu8LqfFYtAFJYoRg7NU5iEuuQ%2FSVAn7jk72d2javybFeN1u9Fu4B9gAjBk0fB2SW14S2p9QsJo4vY2dd0AJoJ%2Bz5A3aS%2BaHAg3JJywiLkUr04MEhFZz%2FewScopzmxph4Op9xewivBxejz4N%2BOxPH63nLeEWQtkIyC7Zmkt%2FyWrMJaEEPus08Yw4T0C5%2Ff1WORXe%2BXE18dDTELaNcQFaytSLVpsYKaKmh%2FnSY34BiShbY6FI0MlZepD3HhsdJL%2Blf29wgmSMi7yb9O01RNpofPY%2FQC7%2BFsto2dsEnh9ccc4dhmIyzJHuvGzWhykg4QwR9Y8bBDGEK5oKJBjBOckxy2w8JOpqUPSW2loRo8JPPDbQzThGLhVf%2FSN%2BNRlACTcilZVTso4BT%2BOYqGzjOsUw9faG0niCvnMm9lu5WFgBIp%2BDQcobfG4z0HgvKw9BNd46gg9yl%2F9MwzITe%2B%2BE3TxE%2FxOJWb1%2B8CDIUkNqO2KwxYTUHf0F84aH5moet7pB7o%2F390%2F1iIZeWT5V812xZQ7%2Fj7%2BC%2FBPDs2wMsGcm08tf1d9v4CKKYrBf%2FobAd0Nyai9ZuIwtajCwQY6pgH827furmzL%2BfFXreTz7hQhFC%2FpH%2BcPxVIr0K72%2FKH3UPGzKDVRrRXtd5mJzbeRaTPT0%2BoGYRQ94KS85jNDMvITSqVPcZGku5RU6yP42EM5lKb2Onuq4iFIUUXEGf6sUpFkA%2BJSCu5vSA39Nr5htTOb17plSh%2Fk4W4F8l8bOjF9jIgTxBDn32FGOjvra50pl1Auf%2B7xKRKat3%2Fr%2BijWEWL0cCZIiIdy&X-Amz-Signature=0f75d3644ddc7e7d35d1210891f14c000ef899e72e186255b96bfa68d998def5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBREK2Y%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICHIuJ972%2B0A9181cXIDJQelGIGvFf0V%2BVLneWJltVAqAiBkXUhsbnMi4mI43Q6INtNhyG2GUgcVttyOcNH2ICbAViqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5AiE5TyHS%2BGkYCWKtwDVpe8cVqfnDW5tUqgPRI3x7r7nJM62D0YI348N6qShOK6m6rwLR8OasEB1JDu8LqfFYtAFJYoRg7NU5iEuuQ%2FSVAn7jk72d2javybFeN1u9Fu4B9gAjBk0fB2SW14S2p9QsJo4vY2dd0AJoJ%2Bz5A3aS%2BaHAg3JJywiLkUr04MEhFZz%2FewScopzmxph4Op9xewivBxejz4N%2BOxPH63nLeEWQtkIyC7Zmkt%2FyWrMJaEEPus08Yw4T0C5%2Ff1WORXe%2BXE18dDTELaNcQFaytSLVpsYKaKmh%2FnSY34BiShbY6FI0MlZepD3HhsdJL%2Blf29wgmSMi7yb9O01RNpofPY%2FQC7%2BFsto2dsEnh9ccc4dhmIyzJHuvGzWhykg4QwR9Y8bBDGEK5oKJBjBOckxy2w8JOpqUPSW2loRo8JPPDbQzThGLhVf%2FSN%2BNRlACTcilZVTso4BT%2BOYqGzjOsUw9faG0niCvnMm9lu5WFgBIp%2BDQcobfG4z0HgvKw9BNd46gg9yl%2F9MwzITe%2B%2BE3TxE%2FxOJWb1%2B8CDIUkNqO2KwxYTUHf0F84aH5moet7pB7o%2F390%2F1iIZeWT5V812xZQ7%2Fj7%2BC%2FBPDs2wMsGcm08tf1d9v4CKKYrBf%2FobAd0Nyai9ZuIwtajCwQY6pgH827furmzL%2BfFXreTz7hQhFC%2FpH%2BcPxVIr0K72%2FKH3UPGzKDVRrRXtd5mJzbeRaTPT0%2BoGYRQ94KS85jNDMvITSqVPcZGku5RU6yP42EM5lKb2Onuq4iFIUUXEGf6sUpFkA%2BJSCu5vSA39Nr5htTOb17plSh%2Fk4W4F8l8bOjF9jIgTxBDn32FGOjvra50pl1Auf%2B7xKRKat3%2Fr%2BijWEWL0cCZIiIdy&X-Amz-Signature=7da3d9f4b68f3277200eebbafc085456cc95d06fe929ffb77bbeb629e38dbcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
