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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLNY7HX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHVi6K1aTkZNBXGaJyDcLjUS1SfgHqHNz6V7Un9LeeqAiEAgPwzfWhoxuW4QmM06JxVQ2znfB4no09MQSKBYRt5JrAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPFCtKjbVpeWS1zFTSrcAwVQsIxgbPid%2F1cVPWAeYS9ElZ33SLsj8n78FU2rP%2F3Y9c8qI02smaxy58yFGnJx7zFdn1OqOVJb%2B6dmqF51N9ugZssdvxV3Nhuku4hZxdfLESqlLrCtb3f5TI%2FeT7o0D4wb7pGmnZ%2F0v2gHhETp1gjU711z2yTu2Uc87eFy64ZxHZFjh14EmAL%2F%2BxZwN%2FafJemKLLV4ctkVQbn8rEHQLQ4Ypg1HLGVhCd%2BaaXGlcFoZSfR3A4GT0OJ8i%2FwjqYSf8tivEQPyB84G9nHrBdU%2Fj2rxyuV6JVysnKI%2FjkSNFf9vCTvuOTQyJ8fwxAvTu1ag3F8l1uc91PFV7D2vCNJrLlXdvqGtWCPKxJXqaF9P0f0ugyWfYVBIpEikvgujgVEL6bOa3otHcTCojZmY86FPndylaFUjba2b6tc0P3y%2Fc%2FWgQkKfztxqclCnU07GN9vdifKkWDSQInSzWp5VLw73A94nWOVE5rgJPJ1ESLhtUJAjuGDkrSlkxdfTo4Q%2Fg7kUrO4w4Vrio2whmyVmcEw8oSC7RbZA04pPFsJuN1AEYki6lCIpNzfjkINPi2BygeCke55%2FwTSwnbWqKjrH98RYDz7aLoeDTs3dkewUoFoXkv52QmvbONqlFD5GiolvMLzgq8AGOqUBhJYLbk0P1ssxVtYDgNjm%2B2v1KRMPNU43MFTwMhQ5ZhegQZQcwPQWucdNof6ISCXwNau2Y39NVJvnd8QiUHo8BIoO4lu2xU5fDOD7a9ExVnr%2BdT%2By56fVmbzD8B%2BoqfaxOG4Vu9cdGO04Ia%2FJ3Yn%2BrSjXxYmHUh%2Bd%2FrYtl3cHcryOPD3%2BuwwdNvPs9VrL7dxzn3y2LYqF1u6ehYcLcA88pEk1t1yq&X-Amz-Signature=1089409c7184ed00be54f80e31f84c05df570c0d69b04fd770a6da349c030ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLNY7HX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHVi6K1aTkZNBXGaJyDcLjUS1SfgHqHNz6V7Un9LeeqAiEAgPwzfWhoxuW4QmM06JxVQ2znfB4no09MQSKBYRt5JrAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPFCtKjbVpeWS1zFTSrcAwVQsIxgbPid%2F1cVPWAeYS9ElZ33SLsj8n78FU2rP%2F3Y9c8qI02smaxy58yFGnJx7zFdn1OqOVJb%2B6dmqF51N9ugZssdvxV3Nhuku4hZxdfLESqlLrCtb3f5TI%2FeT7o0D4wb7pGmnZ%2F0v2gHhETp1gjU711z2yTu2Uc87eFy64ZxHZFjh14EmAL%2F%2BxZwN%2FafJemKLLV4ctkVQbn8rEHQLQ4Ypg1HLGVhCd%2BaaXGlcFoZSfR3A4GT0OJ8i%2FwjqYSf8tivEQPyB84G9nHrBdU%2Fj2rxyuV6JVysnKI%2FjkSNFf9vCTvuOTQyJ8fwxAvTu1ag3F8l1uc91PFV7D2vCNJrLlXdvqGtWCPKxJXqaF9P0f0ugyWfYVBIpEikvgujgVEL6bOa3otHcTCojZmY86FPndylaFUjba2b6tc0P3y%2Fc%2FWgQkKfztxqclCnU07GN9vdifKkWDSQInSzWp5VLw73A94nWOVE5rgJPJ1ESLhtUJAjuGDkrSlkxdfTo4Q%2Fg7kUrO4w4Vrio2whmyVmcEw8oSC7RbZA04pPFsJuN1AEYki6lCIpNzfjkINPi2BygeCke55%2FwTSwnbWqKjrH98RYDz7aLoeDTs3dkewUoFoXkv52QmvbONqlFD5GiolvMLzgq8AGOqUBhJYLbk0P1ssxVtYDgNjm%2B2v1KRMPNU43MFTwMhQ5ZhegQZQcwPQWucdNof6ISCXwNau2Y39NVJvnd8QiUHo8BIoO4lu2xU5fDOD7a9ExVnr%2BdT%2By56fVmbzD8B%2BoqfaxOG4Vu9cdGO04Ia%2FJ3Yn%2BrSjXxYmHUh%2Bd%2FrYtl3cHcryOPD3%2BuwwdNvPs9VrL7dxzn3y2LYqF1u6ehYcLcA88pEk1t1yq&X-Amz-Signature=030af4a16411b18abe743012c420b2be225990e1b19e1184cb3188477e6bf8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
