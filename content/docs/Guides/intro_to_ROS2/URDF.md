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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTM4DDJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsdjbuBIXsKq3vp5wo4bhJIfVqZI78PjGYHmHFGcRPEAiEA6np2rlet4SOA3xk%2BvwZt3XyzdyLjMv3HiwWRwUIQixsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDP6ju5NvZBEULskKvircA4QMztKFzwmoG5mS7TXYsY5WQ5bfJ%2BL0Ni74vT88Urv08G%2BXG8Ec%2FMBgJPsuWAxEx9PkGOT9QZ0z5cjwzYJPY4VgRWvgV97AppYP0EmtuhOy4ZqrS%2BFSlV9M%2BarhmJHMafJIfe0n%2FOEtLM0stQWu7WazBY0u5y1mXT8O7xEwbTEDmcq5%2BJK5aAFwjqC3mr6V5nVT7tZmmNXGGX5MozquSGWkwvWZSntEn45dKRDnzFFBk%2FwZjCAGIv5aQzXKSGAJiHmtxWWKg6Pe2j4b88gVm1mzkMeFI%2Bhtbc3F2DDvK138k1g17CAV7u08kOBu70vsWoWzNkXmJe4irFejtv9ef6k4hROCKaAt0sNKg47iABUnzHyRJDQ0y46IN7MAS9w0NNWOAf3LLn8Zwd0JaERQrS%2FwuzVtSrnW%2FlmAG8MvFuzx8eTza7SiXMMptls6HT0Mp998TtOw%2F183g50AbACc8AE4QN4VpTkL7oP3tCho8Ct7FdZoD4X2aZaszdbB%2BxdY74MsovXLxNhDdx4O5jrDYsHXzGu%2B%2Fxmbq8wJX0lOZhpZVlf1%2F1%2FeRXy2Dk%2B5Gi7hsSgtnMziCsNoUBcNc%2FumrnsVC2Me7yzNV%2FtLXskpZTHbK3bbP1mVt5XQFpfdMOeR68AGOqUBoX1NObG%2BJSKLe2D6uyP80iG147gehazDUsEE%2FPUa%2BBGvNFijPn7awbMC3rucg6sE%2F2YmuEwL1B1vNrpYFy6WrWxxO9ZaTeKsZauJ1H1efmVqg6qGgLm2tqH94lkBfFSU%2BfmCLgNKetD2%2FGip7AyEl9XSYsgQPLL0s6LDzvugxTolB84225pGD9gG6VFylvQqXWMBh3OPVr5j%2BJXE3iNEeOPmrQ%2Bn&X-Amz-Signature=493d7bdf29a48aa5b04760ba50dd407eff30d6bfe1fa9265202335b7d6ea896c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTM4DDJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsdjbuBIXsKq3vp5wo4bhJIfVqZI78PjGYHmHFGcRPEAiEA6np2rlet4SOA3xk%2BvwZt3XyzdyLjMv3HiwWRwUIQixsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDP6ju5NvZBEULskKvircA4QMztKFzwmoG5mS7TXYsY5WQ5bfJ%2BL0Ni74vT88Urv08G%2BXG8Ec%2FMBgJPsuWAxEx9PkGOT9QZ0z5cjwzYJPY4VgRWvgV97AppYP0EmtuhOy4ZqrS%2BFSlV9M%2BarhmJHMafJIfe0n%2FOEtLM0stQWu7WazBY0u5y1mXT8O7xEwbTEDmcq5%2BJK5aAFwjqC3mr6V5nVT7tZmmNXGGX5MozquSGWkwvWZSntEn45dKRDnzFFBk%2FwZjCAGIv5aQzXKSGAJiHmtxWWKg6Pe2j4b88gVm1mzkMeFI%2Bhtbc3F2DDvK138k1g17CAV7u08kOBu70vsWoWzNkXmJe4irFejtv9ef6k4hROCKaAt0sNKg47iABUnzHyRJDQ0y46IN7MAS9w0NNWOAf3LLn8Zwd0JaERQrS%2FwuzVtSrnW%2FlmAG8MvFuzx8eTza7SiXMMptls6HT0Mp998TtOw%2F183g50AbACc8AE4QN4VpTkL7oP3tCho8Ct7FdZoD4X2aZaszdbB%2BxdY74MsovXLxNhDdx4O5jrDYsHXzGu%2B%2Fxmbq8wJX0lOZhpZVlf1%2F1%2FeRXy2Dk%2B5Gi7hsSgtnMziCsNoUBcNc%2FumrnsVC2Me7yzNV%2FtLXskpZTHbK3bbP1mVt5XQFpfdMOeR68AGOqUBoX1NObG%2BJSKLe2D6uyP80iG147gehazDUsEE%2FPUa%2BBGvNFijPn7awbMC3rucg6sE%2F2YmuEwL1B1vNrpYFy6WrWxxO9ZaTeKsZauJ1H1efmVqg6qGgLm2tqH94lkBfFSU%2BfmCLgNKetD2%2FGip7AyEl9XSYsgQPLL0s6LDzvugxTolB84225pGD9gG6VFylvQqXWMBh3OPVr5j%2BJXE3iNEeOPmrQ%2Bn&X-Amz-Signature=27738b7ff3092bde7b22d0d7323820ddb6a6f376b7ff23786eb51829df0acdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
