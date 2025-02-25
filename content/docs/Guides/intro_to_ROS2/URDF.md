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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JB4VWQJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCjQ0QJH3sIyuMJkgyFfSw65QIH6fsTIUEcp0QlwxVYKAIgXxcCtmvYF%2B2Da1BdtPqSmIbB1%2BONOLj3v155Ko4J3TMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJcRl4BJhCaUcrEwvCrcA7%2BxYprDT91dXc0Y2RZVJccqHCFf4xAwqc5IL%2Bgv2LLz9FsAf4RhxhEHHxuFBEPx2%2F3sB36%2FWQthZv8ml%2BdBTtO8VJ%2FWE9mpZ8bAo8UZtK3kRBpamq2VcmuGNM9CuG8QbprdGE%2FTk1%2FgkNtqlHgPQYze%2B5G3GgrQaYF4BleULCf5YkwC%2F%2F7VOvJkC2sWtdzXNlRCpmsnY4acT50yMMMfgD9Wie%2Fhw%2FED901FqyeF0QJ45aKuQug9slw%2FoKUDQx1KAE8%2BN59WxnhFv7glFM%2FuoV3tm%2BvNdQRi47%2F%2FOMSTrQyKh6ltKgEm3vxgnjH43I70uSt%2FqUquviM%2BjPpmDXeYJ32rLAxnaindFteu8VYEGLESJ7%2FjXOMyohHUd49xRh7%2BCLn09m0DaEKf6cPJhB%2FdsW9m%2BmDO%2Fc8pvG6LonANw60zLb%2FSj21l%2BERlhHK2KwkWsxuUUCyS7NahL0L33%2BEBYD6SiXvI%2F%2BuMq%2B%2BpyK32EiOt2%2BOio9llu2SWVq4iJRqip288XLffjMiocXZzvOLzqOydHqmOrkQutuhGhYJEBz4hc8GPNJYIABRHzr5aCfLXLHOrwAIOXgE5MQSGU8UNMlSy%2B0kPZLV%2FE6yDw6laNQBJGs%2FYiCFgeYNhh4cPMMqM%2BL0GOqUBMbIFaveUZr2itzig78ZpZprL7gi8HJ%2Bx4v4y79hmMXWB4KEm%2BmC68jm2K0%2BxKavDx0SEaxmrLx%2Bi%2BMz6qKt5CYUws23J194am8n%2BWYrx9AbXDDpnzIsyNrVwG3V9naiGw5S77EpyvpdWFHIPpGtAIPytWsVZfiDVfoX%2BpUHsG3QZOUL6q3Nn2jthNuU9D6kv5bILDML4l%2FtSN%2BmlLZgL18A5RtSN&X-Amz-Signature=5abb40f42a6b7b141235c0f67d48cc2213a0cbaaabea7c86cef76efc62d7cb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JB4VWQJ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCjQ0QJH3sIyuMJkgyFfSw65QIH6fsTIUEcp0QlwxVYKAIgXxcCtmvYF%2B2Da1BdtPqSmIbB1%2BONOLj3v155Ko4J3TMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJcRl4BJhCaUcrEwvCrcA7%2BxYprDT91dXc0Y2RZVJccqHCFf4xAwqc5IL%2Bgv2LLz9FsAf4RhxhEHHxuFBEPx2%2F3sB36%2FWQthZv8ml%2BdBTtO8VJ%2FWE9mpZ8bAo8UZtK3kRBpamq2VcmuGNM9CuG8QbprdGE%2FTk1%2FgkNtqlHgPQYze%2B5G3GgrQaYF4BleULCf5YkwC%2F%2F7VOvJkC2sWtdzXNlRCpmsnY4acT50yMMMfgD9Wie%2Fhw%2FED901FqyeF0QJ45aKuQug9slw%2FoKUDQx1KAE8%2BN59WxnhFv7glFM%2FuoV3tm%2BvNdQRi47%2F%2FOMSTrQyKh6ltKgEm3vxgnjH43I70uSt%2FqUquviM%2BjPpmDXeYJ32rLAxnaindFteu8VYEGLESJ7%2FjXOMyohHUd49xRh7%2BCLn09m0DaEKf6cPJhB%2FdsW9m%2BmDO%2Fc8pvG6LonANw60zLb%2FSj21l%2BERlhHK2KwkWsxuUUCyS7NahL0L33%2BEBYD6SiXvI%2F%2BuMq%2B%2BpyK32EiOt2%2BOio9llu2SWVq4iJRqip288XLffjMiocXZzvOLzqOydHqmOrkQutuhGhYJEBz4hc8GPNJYIABRHzr5aCfLXLHOrwAIOXgE5MQSGU8UNMlSy%2B0kPZLV%2FE6yDw6laNQBJGs%2FYiCFgeYNhh4cPMMqM%2BL0GOqUBMbIFaveUZr2itzig78ZpZprL7gi8HJ%2Bx4v4y79hmMXWB4KEm%2BmC68jm2K0%2BxKavDx0SEaxmrLx%2Bi%2BMz6qKt5CYUws23J194am8n%2BWYrx9AbXDDpnzIsyNrVwG3V9naiGw5S77EpyvpdWFHIPpGtAIPytWsVZfiDVfoX%2BpUHsG3QZOUL6q3Nn2jthNuU9D6kv5bILDML4l%2FtSN%2BmlLZgL18A5RtSN&X-Amz-Signature=227410fd89487ccf11325c14291ac2a0df0c2ca0822161b6e70aca475771a074&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
