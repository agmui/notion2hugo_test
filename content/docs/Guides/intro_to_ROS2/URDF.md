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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRP4LEJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0SfMkrGTCAUFG9RgSy%2FTtHgMKCIaR5IcAtS67AUQxIAiAurWafgM0EDdaeBmuM6wYUnVvT%2BQQg2OW9lFkZEeX5BCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVm8haTYh8az94ct%2BKtwDVf8OtMgB2TYyjT8GRUV3fTZGypvZc6PbQnLLZ0bGMSzV1O8D0W4atpb0g5gvQ50nNfp1x2ElVFFlqPOUB4U0wtdEx2UTX1N7TX28E8u8NKNSnluF5rStPI2jsAO1w3NuUC%2FtTusS1Yd7uAjGjH1RipEeQzS4dMd2Nxy9yLTv1SEXw1FTRh8Bt67hagL6oyJeZxMe4sLdmbYLWmC3y0f2ddKIGrz1lSh%2BYO4EPBpxOZNtgEiH0WJauIouKWy7Ndfvqb3GRAnsCq4PPA%2BjTsTKS0DsXIa5XA6nwAg%2FNQmXlsZyBoSVmUv3Jm5x3kywrePwskjfvRJs%2BcCxdy6SHo5WPnvJIBlhm0crswJ8plMUMdgvU7EQa%2Fan9fQgcqHSKY9LM0%2F6NM%2F%2FMoDqID9icAJGzMkKNLy8iGvyi5nLydkHnbZp4saQkqqSQJd2r4Y9u4ebquBJaJiSIMmTALRQqJunvJpxrDsIuHqgZUUoxHTvhc7xgeqgJfqGrh4NvDM1ELtyECpaytmvJOTzwZWGxhCBXNxlLLbNJIgu0D5xCG0pwuKnl6yKic6%2BlhvlF0e2UfKrYobNMtA02cC4C24abZw4INnfyf5kAdB%2ByRlGWdpMQrL2P2lhXIg3p%2FlIpFAwurOiwgY6pgFGzTpyfQ0j0jg6sQBDWeE8TSXB8Ble4cQLRJ1U4%2BUmBFMAqEODc8usu7gPxDSOb3aRGAk5xRg8BP2IKKLgCjMpUiDuSLyRpQznPYEfeZZXqcVsfC%2Be61qL%2Ff8jmx0H4HCJWhsyN%2BQyqY%2BW7%2FAxr0XcBIePSJ8jkR%2FLbBb6%2FbctC145KdV6gc4ge78SdhEHLzOMeV4FJvpUEsv77hMMaVCTJ%2FXF1%2FVG&X-Amz-Signature=69899fa4f12a7e4988b3d00fa0b6b9cd1de96f2c19f3712f2588c3ee144e3f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRP4LEJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0SfMkrGTCAUFG9RgSy%2FTtHgMKCIaR5IcAtS67AUQxIAiAurWafgM0EDdaeBmuM6wYUnVvT%2BQQg2OW9lFkZEeX5BCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVm8haTYh8az94ct%2BKtwDVf8OtMgB2TYyjT8GRUV3fTZGypvZc6PbQnLLZ0bGMSzV1O8D0W4atpb0g5gvQ50nNfp1x2ElVFFlqPOUB4U0wtdEx2UTX1N7TX28E8u8NKNSnluF5rStPI2jsAO1w3NuUC%2FtTusS1Yd7uAjGjH1RipEeQzS4dMd2Nxy9yLTv1SEXw1FTRh8Bt67hagL6oyJeZxMe4sLdmbYLWmC3y0f2ddKIGrz1lSh%2BYO4EPBpxOZNtgEiH0WJauIouKWy7Ndfvqb3GRAnsCq4PPA%2BjTsTKS0DsXIa5XA6nwAg%2FNQmXlsZyBoSVmUv3Jm5x3kywrePwskjfvRJs%2BcCxdy6SHo5WPnvJIBlhm0crswJ8plMUMdgvU7EQa%2Fan9fQgcqHSKY9LM0%2F6NM%2F%2FMoDqID9icAJGzMkKNLy8iGvyi5nLydkHnbZp4saQkqqSQJd2r4Y9u4ebquBJaJiSIMmTALRQqJunvJpxrDsIuHqgZUUoxHTvhc7xgeqgJfqGrh4NvDM1ELtyECpaytmvJOTzwZWGxhCBXNxlLLbNJIgu0D5xCG0pwuKnl6yKic6%2BlhvlF0e2UfKrYobNMtA02cC4C24abZw4INnfyf5kAdB%2ByRlGWdpMQrL2P2lhXIg3p%2FlIpFAwurOiwgY6pgFGzTpyfQ0j0jg6sQBDWeE8TSXB8Ble4cQLRJ1U4%2BUmBFMAqEODc8usu7gPxDSOb3aRGAk5xRg8BP2IKKLgCjMpUiDuSLyRpQznPYEfeZZXqcVsfC%2Be61qL%2Ff8jmx0H4HCJWhsyN%2BQyqY%2BW7%2FAxr0XcBIePSJ8jkR%2FLbBb6%2FbctC145KdV6gc4ge78SdhEHLzOMeV4FJvpUEsv77hMMaVCTJ%2FXF1%2FVG&X-Amz-Signature=1244136eca17791cc7a29f72b4db571bbc4d534e29cb079ac425aa7715317314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
