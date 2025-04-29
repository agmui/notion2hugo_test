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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPM6SJF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc54cVJpxK%2BcAsk4U08gbw%2F5G9mo0np8gIi%2BuVNBTmTAiBDcF5yR7DzdN7TorA6cksGOY84kH6hdAq5vnGJ0KSMtSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NUKdicyx824%2BSyTKtwDisNdRP3ZJE0oQxEnGRCSf5OLoMjnx35a%2BeUzIcYZY7OZ4GiiLT5QYcIP5eQbfNRVxBm33Z8iPMqky7HePrg6aLIjsCrXXQzB7q97hckMuXhuj9GAopCJfywWYWA1d%2FW6rUoelk9KJujgKtBV2jkRYPKTV9cC6hSaUwQoOCOrG6bnSqwThPcy8zO56dAXJMXsRwspOs%2B0HIxRgBRcNgG%2F7hyHQ6an5GXXbNaUD572l3GS0cD87lNCPLaFBtqGXnRQRWiLdFwapVIsYdkI%2B%2BRhpXRrnSUl%2F0KjuvhZY2gY2XIPr8gSStYmoznbSBImkJTxA2PiMsF27FW9jukWtV1u5s0tIHcZsB%2B7xkU%2FAHm0jjtop2wtgU2d25BDzvMrLWfqd9rJHvGzQWJG%2BroVjIrgXHUDiOOnTEcTqnNWUR6vSSyrLEga%2BcTIZz9phNOX%2BHokDUVrcYzwN2O%2F4aLHMIzGHpCTGfpfmfBERbaL9m88L8cni7hSJ%2BdAkPBOZZ6dkDEMQ7ORgt12vbFTbpxviOLL40ZVTNu8E53%2FjB21i2uWCV6vmf8pPQlPy8HUzmL2G7O9vhZMlXpSLqx8vniX6Wm%2F%2BDzv%2BCDdsSdj4s69gl11CwXKpVSbIK1N6vqDEcsw%2FJnBwAY6pgG2jdYf5crIkyUfzLpLfEYcp%2B1eRYgrhgOjEYu9Pzp2tNRZysPlvXcoNNd7gKCbeRALrKgKrGviozdXbGyytxtFKvwVQHaRvQh0fJ%2BJ38Lf98EEbY2mHLo1i6uD%2FGjt3xov%2FzGzwQ3Wvbb6iAAG3BySQLhaceckEZ0pet5A%2BVMWL5qdStl2fpfSzxZ8%2F2X2%2BQE39SGlK1t0MsCUs%2FrVh165%2FpPIywgh&X-Amz-Signature=0d4c0642b9826f29526e9c1cd2e382bd3c695a509fc486ea63227ed99e92c1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPM6SJF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc54cVJpxK%2BcAsk4U08gbw%2F5G9mo0np8gIi%2BuVNBTmTAiBDcF5yR7DzdN7TorA6cksGOY84kH6hdAq5vnGJ0KSMtSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NUKdicyx824%2BSyTKtwDisNdRP3ZJE0oQxEnGRCSf5OLoMjnx35a%2BeUzIcYZY7OZ4GiiLT5QYcIP5eQbfNRVxBm33Z8iPMqky7HePrg6aLIjsCrXXQzB7q97hckMuXhuj9GAopCJfywWYWA1d%2FW6rUoelk9KJujgKtBV2jkRYPKTV9cC6hSaUwQoOCOrG6bnSqwThPcy8zO56dAXJMXsRwspOs%2B0HIxRgBRcNgG%2F7hyHQ6an5GXXbNaUD572l3GS0cD87lNCPLaFBtqGXnRQRWiLdFwapVIsYdkI%2B%2BRhpXRrnSUl%2F0KjuvhZY2gY2XIPr8gSStYmoznbSBImkJTxA2PiMsF27FW9jukWtV1u5s0tIHcZsB%2B7xkU%2FAHm0jjtop2wtgU2d25BDzvMrLWfqd9rJHvGzQWJG%2BroVjIrgXHUDiOOnTEcTqnNWUR6vSSyrLEga%2BcTIZz9phNOX%2BHokDUVrcYzwN2O%2F4aLHMIzGHpCTGfpfmfBERbaL9m88L8cni7hSJ%2BdAkPBOZZ6dkDEMQ7ORgt12vbFTbpxviOLL40ZVTNu8E53%2FjB21i2uWCV6vmf8pPQlPy8HUzmL2G7O9vhZMlXpSLqx8vniX6Wm%2F%2BDzv%2BCDdsSdj4s69gl11CwXKpVSbIK1N6vqDEcsw%2FJnBwAY6pgG2jdYf5crIkyUfzLpLfEYcp%2B1eRYgrhgOjEYu9Pzp2tNRZysPlvXcoNNd7gKCbeRALrKgKrGviozdXbGyytxtFKvwVQHaRvQh0fJ%2BJ38Lf98EEbY2mHLo1i6uD%2FGjt3xov%2FzGzwQ3Wvbb6iAAG3BySQLhaceckEZ0pet5A%2BVMWL5qdStl2fpfSzxZ8%2F2X2%2BQE39SGlK1t0MsCUs%2FrVh165%2FpPIywgh&X-Amz-Signature=9836be63400477f382b8094979b91cb8192d4e4b2e449a0d10de1cde26aabdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
