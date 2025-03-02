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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=2bdc92627e4d42e75a72b273516922bc08d6d0528aac445054b17d6b528b9e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=2e5f2dde63257b0dc19c0c7dd1e1948a79c0187e9af47e1857874a8ccca6c9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
