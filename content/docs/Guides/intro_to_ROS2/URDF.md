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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNRHT4B%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEQZg8cRPgFp1pI%2FWNP9izFpSQO%2BrxazDNwjZfeIU5k7AiEA6pJxE3j0YPvP6p4v1lMGlkkCL7239oSejOOQmMAL%2BhMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLe3IFpNB5Mn0iuKlSrcA1TUYhdnKbk4BEPvePWSAIhGr%2BVmfivf6CRWwcpX5juwG4qVkMUY2hLbv%2FWgfLfCKQ2xqWWJ9p9UQusriMUteMmAHQUZcx7%2B1FtknuhW%2FTiR7T2bkILmVGUwcZFWbsV3La5R209kpzhjPHfb15TJTRrXhLO4aAbIVy59esGktmKmG%2FhY%2BmASvOqgUAb2QVkNnel7ToCgLrITgLzHrINGj5w9rJvZQrODDxDjgGuESGq3rgscoyYOK3RXT4WhSnWwxx4iw82rDrBCoX3M2BEBu%2F6VqIrhJS%2BV4pG%2B5G%2BlH77a19sfrQ0t8u1pJU5jMsP9rJ%2B7TIC77QNbnGm2a2dHRR0c6SHd%2BoehN9qCCMKoPYUZ8cM4sKd%2FXVAA2k7nxgGOZMpci78LKTDHeWhBjG6EaolAs7%2BFE3MgJLWsDixXT7XkywBcjhkZJW%2B7yEBM6IWyDEo6qW2oU9AiHJFKw%2FT80%2B3OTiW8FxtWjbjeP3MImVrYitlKFim5ULeqjEhXw9CHI6rsctWDzwgWmhsL7sCoEGtK%2F9BoXRLSOkP15XtUTjMZSDJBxhCMye53KZhcM3Car6h7vi4oWFH%2B54x7AgGo7g2yQ8RFv54XVnwcFl8E996ODwAry8mLh6MC5QPZMPmDtr4GOqUBrLTj8SG3ZUDkTSXSX2f6u%2FC%2B%2F8JVlLYFIabgnI1uydaCEuRjh9a205NvtwLsLrkRpp5rs3kUNJdV%2FnUQKcQYaHrJKvKrC8SLihZu15kmDWquTpbrPj7ans7EsFeMBAV1%2B%2FzGFYQXXWMbtjSPCgj%2BrVce%2FtnODeh%2BWIp8Eafk6VgToUuenaNfHhHvojZRpCGrQMYqCpo9g2mYeD08VJaWtBmJTWBq&X-Amz-Signature=df5e5a7fce423e9a8eb3ca60ba15d0f848d68ef1dd2e2a240e5e80fde7bebe53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNRHT4B%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEQZg8cRPgFp1pI%2FWNP9izFpSQO%2BrxazDNwjZfeIU5k7AiEA6pJxE3j0YPvP6p4v1lMGlkkCL7239oSejOOQmMAL%2BhMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLe3IFpNB5Mn0iuKlSrcA1TUYhdnKbk4BEPvePWSAIhGr%2BVmfivf6CRWwcpX5juwG4qVkMUY2hLbv%2FWgfLfCKQ2xqWWJ9p9UQusriMUteMmAHQUZcx7%2B1FtknuhW%2FTiR7T2bkILmVGUwcZFWbsV3La5R209kpzhjPHfb15TJTRrXhLO4aAbIVy59esGktmKmG%2FhY%2BmASvOqgUAb2QVkNnel7ToCgLrITgLzHrINGj5w9rJvZQrODDxDjgGuESGq3rgscoyYOK3RXT4WhSnWwxx4iw82rDrBCoX3M2BEBu%2F6VqIrhJS%2BV4pG%2B5G%2BlH77a19sfrQ0t8u1pJU5jMsP9rJ%2B7TIC77QNbnGm2a2dHRR0c6SHd%2BoehN9qCCMKoPYUZ8cM4sKd%2FXVAA2k7nxgGOZMpci78LKTDHeWhBjG6EaolAs7%2BFE3MgJLWsDixXT7XkywBcjhkZJW%2B7yEBM6IWyDEo6qW2oU9AiHJFKw%2FT80%2B3OTiW8FxtWjbjeP3MImVrYitlKFim5ULeqjEhXw9CHI6rsctWDzwgWmhsL7sCoEGtK%2F9BoXRLSOkP15XtUTjMZSDJBxhCMye53KZhcM3Car6h7vi4oWFH%2B54x7AgGo7g2yQ8RFv54XVnwcFl8E996ODwAry8mLh6MC5QPZMPmDtr4GOqUBrLTj8SG3ZUDkTSXSX2f6u%2FC%2B%2F8JVlLYFIabgnI1uydaCEuRjh9a205NvtwLsLrkRpp5rs3kUNJdV%2FnUQKcQYaHrJKvKrC8SLihZu15kmDWquTpbrPj7ans7EsFeMBAV1%2B%2FzGFYQXXWMbtjSPCgj%2BrVce%2FtnODeh%2BWIp8Eafk6VgToUuenaNfHhHvojZRpCGrQMYqCpo9g2mYeD08VJaWtBmJTWBq&X-Amz-Signature=c373f12eaabbdd3c67f5d4ac0771c06f671bfbbddf21e0d044228d52c13802b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
