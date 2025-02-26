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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRBRATL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHSsOf0EG90N5yD3e%2Bo71mjmGZAtmEze5%2FcQPZzFWkCwIhAJftBN8O4b2odoWRYTyo5Avto6Hg1BzgEiHdK%2BK4g9jnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwVHJorSj7F3lF%2BaWMq3AOWRLfcULU1PcnxXZE2Z%2BTlXbP%2BYYfO6h8HWAtllmun51KeO82wR%2FtvPwUSz3xUVtidF28pw10RDKJFjBpiCOMJhmtQnFksGhVI7zPPyzgPZo6wnOMD7zF5umtjXQmO7YBdyWcDpptem5%2Fj1a9RfRb%2Fy9bW2P0X%2FM3oh3ForshW4YdLOv9aH4rfSYdvephvdZP8a5aY4fLl8KeR1K%2BoCeqMfRBPHz%2Fai17RMTy4d5f5oTVyWuyXbLlkcu4wG5%2BaogqtIG95lZGzGHpQrD3Bh0U0Bsav3X0IXMoWuu8bbw3TUyGpuBYj1s0A%2BqFy3diS6togsF%2BkKjAEsjLjfJExpmy%2BH%2B3d3jT%2FMt9EO9EQGf5WCwdiPtvaC9P3qCJ3TChZWF7C0zSmlDsgWDYpH4ye5mHQSv1gmbhpch0he0R1yuZ09Bp1KqFGGy8RUUqxGE15GU0n0mLGH3o6czjAyePLiJVmGjScH1tV8upI0Q6d6l6MgiFbpqSDn7ZLeZYH3awGzBGbMCpHPPIscDPzN6kmFuq%2BHd2C8JGWJYiI4uI%2F4zUSG6W6vjY8SvZL9iDLCYzfkIouTncrNLXDZ1%2B7v1bniGVImpHCzU5xsgfzbTn0QU2Ti1rww2%2BTCTVgnGOniTDQ%2F%2Fq9BjqkAVqv1Uq%2BgymZ%2B1%2FCIhjBRTBeSS7XBW7wpmdAUQmntVzLN%2BM%2Bye9IhtDcGthHfR6XiF5xIzb9hZdbMbpSml4sAdD8bfPQ55KknuHM2bHNciV1979Ha3H7%2FeK8Lg3%2B0spaIF82cBP7uKNEcoMQyrZ4Wl%2BX%2BAYUh67ylKpipgQX%2BtZrD8gHu%2FVLIlygS7s5MLCXY12YeiUahAgWJYxuKuGtdaETnIqB&X-Amz-Signature=4ab1cc8802983f629d948c9feb2bf8eb5dd7fcf1d6f6781796cae3182116f72b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRBRATL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHSsOf0EG90N5yD3e%2Bo71mjmGZAtmEze5%2FcQPZzFWkCwIhAJftBN8O4b2odoWRYTyo5Avto6Hg1BzgEiHdK%2BK4g9jnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwVHJorSj7F3lF%2BaWMq3AOWRLfcULU1PcnxXZE2Z%2BTlXbP%2BYYfO6h8HWAtllmun51KeO82wR%2FtvPwUSz3xUVtidF28pw10RDKJFjBpiCOMJhmtQnFksGhVI7zPPyzgPZo6wnOMD7zF5umtjXQmO7YBdyWcDpptem5%2Fj1a9RfRb%2Fy9bW2P0X%2FM3oh3ForshW4YdLOv9aH4rfSYdvephvdZP8a5aY4fLl8KeR1K%2BoCeqMfRBPHz%2Fai17RMTy4d5f5oTVyWuyXbLlkcu4wG5%2BaogqtIG95lZGzGHpQrD3Bh0U0Bsav3X0IXMoWuu8bbw3TUyGpuBYj1s0A%2BqFy3diS6togsF%2BkKjAEsjLjfJExpmy%2BH%2B3d3jT%2FMt9EO9EQGf5WCwdiPtvaC9P3qCJ3TChZWF7C0zSmlDsgWDYpH4ye5mHQSv1gmbhpch0he0R1yuZ09Bp1KqFGGy8RUUqxGE15GU0n0mLGH3o6czjAyePLiJVmGjScH1tV8upI0Q6d6l6MgiFbpqSDn7ZLeZYH3awGzBGbMCpHPPIscDPzN6kmFuq%2BHd2C8JGWJYiI4uI%2F4zUSG6W6vjY8SvZL9iDLCYzfkIouTncrNLXDZ1%2B7v1bniGVImpHCzU5xsgfzbTn0QU2Ti1rww2%2BTCTVgnGOniTDQ%2F%2Fq9BjqkAVqv1Uq%2BgymZ%2B1%2FCIhjBRTBeSS7XBW7wpmdAUQmntVzLN%2BM%2Bye9IhtDcGthHfR6XiF5xIzb9hZdbMbpSml4sAdD8bfPQ55KknuHM2bHNciV1979Ha3H7%2FeK8Lg3%2B0spaIF82cBP7uKNEcoMQyrZ4Wl%2BX%2BAYUh67ylKpipgQX%2BtZrD8gHu%2FVLIlygS7s5MLCXY12YeiUahAgWJYxuKuGtdaETnIqB&X-Amz-Signature=96c1b13d0326452410db217af5ac30797a71a36608c2dc0945e01503a3a62118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
