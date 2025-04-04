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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673V4GWNH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJcYpNyEz8FQJgfJf1F69q0A0lwdQW9PQTCSyapBEeXgIgBcPFPwfkCNrcouXO7gyh0aUn00S%2FeHWEKBtz4tFN4o8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIo7duBn1qBw8pve6SrcA98tg7R%2B6pSSUQz8xuPkhno3ygBYsXKvWEhPH7v7Jtql21U0HIdzh%2F51P7mu3YpgQx64CCycbReiApTXPr8dU5uVZzWF0SqWzGIxK10CWnf4tLBKrr7muDJPUSMWKjrbPsBAwa09gx4zTe%2FQtT8TXTQ%2BGid2atDd1gRz2i8t3k7fgKnfJWt6%2FJd5g74tbnmWvKYy5bHNa1jOvV6YoWpvharTB6DkRW4ymIIIA4Dxbbcul9UoeQ0DRhiaRu%2FUoqxn8M4zkgpGlQkaARSIHRgAO8Es9ylyT8%2F5WwSTGxkhoqTOhMDICeaK1C1h0PjcteU%2BegmCL3MES%2Ber1RVlaByuEQAbxrRuFMhLVeuibIvfgmKlAfl5Q9x%2BJVYVv7dRLNKY0y4JFJTlF0SEMkGV%2Bz86EB9DHwYd%2BJISaQSlLorhZhkuCMxfAxmuTewpCXARNoJopnBWD2cNBkvfH2rHx7QddWlqM%2FtRYfuCrerxiv113epf%2BqeansHLMM1h1OD3QoY2uMkojcgMo8GxJuBxX4%2F%2FDxFOL3%2BzzvVBJ%2FhONmomzyGbv8HctVyi%2BoSf4ojDDmV4l457nSufF28fxNOZ%2BLKv5IeRQH9MU%2BwYGTPl%2B%2FKzHDWFwsNTVx7Gh41Y3mYqMN3mv78GOqUB0DNpAsHB%2B97q3Ez1yAN%2BhrkeDrogyK17MItZmtPIlFabF%2BhXZm%2Fw6vIvP%2FIsfeK5L1IVn4ohtx4kaRnRGDhQnNQlKG5HPrqdOdmlWNfw0wZAG3QjCfYB%2FolxffaLBJRnEDUueGr9mjkvH9J%2BOeRlLLTZLLrS4HdPo0%2FZ1LwesYZ5tc3cCqT1udDoUxWN%2BzMtCtztfUvzUcC3mZcBWwRNSOuCdQGq&X-Amz-Signature=0d8f54fe075c309a22dc1c43bed9a7d371ec6651c9789a489e403c1d47af067f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673V4GWNH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJcYpNyEz8FQJgfJf1F69q0A0lwdQW9PQTCSyapBEeXgIgBcPFPwfkCNrcouXO7gyh0aUn00S%2FeHWEKBtz4tFN4o8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIo7duBn1qBw8pve6SrcA98tg7R%2B6pSSUQz8xuPkhno3ygBYsXKvWEhPH7v7Jtql21U0HIdzh%2F51P7mu3YpgQx64CCycbReiApTXPr8dU5uVZzWF0SqWzGIxK10CWnf4tLBKrr7muDJPUSMWKjrbPsBAwa09gx4zTe%2FQtT8TXTQ%2BGid2atDd1gRz2i8t3k7fgKnfJWt6%2FJd5g74tbnmWvKYy5bHNa1jOvV6YoWpvharTB6DkRW4ymIIIA4Dxbbcul9UoeQ0DRhiaRu%2FUoqxn8M4zkgpGlQkaARSIHRgAO8Es9ylyT8%2F5WwSTGxkhoqTOhMDICeaK1C1h0PjcteU%2BegmCL3MES%2Ber1RVlaByuEQAbxrRuFMhLVeuibIvfgmKlAfl5Q9x%2BJVYVv7dRLNKY0y4JFJTlF0SEMkGV%2Bz86EB9DHwYd%2BJISaQSlLorhZhkuCMxfAxmuTewpCXARNoJopnBWD2cNBkvfH2rHx7QddWlqM%2FtRYfuCrerxiv113epf%2BqeansHLMM1h1OD3QoY2uMkojcgMo8GxJuBxX4%2F%2FDxFOL3%2BzzvVBJ%2FhONmomzyGbv8HctVyi%2BoSf4ojDDmV4l457nSufF28fxNOZ%2BLKv5IeRQH9MU%2BwYGTPl%2B%2FKzHDWFwsNTVx7Gh41Y3mYqMN3mv78GOqUB0DNpAsHB%2B97q3Ez1yAN%2BhrkeDrogyK17MItZmtPIlFabF%2BhXZm%2Fw6vIvP%2FIsfeK5L1IVn4ohtx4kaRnRGDhQnNQlKG5HPrqdOdmlWNfw0wZAG3QjCfYB%2FolxffaLBJRnEDUueGr9mjkvH9J%2BOeRlLLTZLLrS4HdPo0%2FZ1LwesYZ5tc3cCqT1udDoUxWN%2BzMtCtztfUvzUcC3mZcBWwRNSOuCdQGq&X-Amz-Signature=ba7d06ea455658bcbe4a27871e76a4be7ebc81b95b3994c7cee56ff417670947&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
