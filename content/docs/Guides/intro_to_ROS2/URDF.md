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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XITXVK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdt17xHYiHu%2FcSBtm5cVrRwiKKDiZ%2FicGklVQyQf8DbQIgAdWGpp4j%2Bsg1mjAo0%2F9gZ1TD5uL2Rd1F7miwTAK3%2F6Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH5Ne2RPf%2ByUurjGVircA4q1EtKGV0HG61dRPUzOm9SlBGq9DKVvjBmqdeV%2BPuLBOJhoV4C0YTZidAJ3W2R%2B2u0ceOuCixQETc6NxcMvNICRx%2FBJ9unKhfOQ5IXkqAXPoToV6f8ybCntG4dnAPELhsCP%2BWGeVVzen78JkCJenDaGDjcNwXx3pNgnL1eLrF7yCSN7jFzcmy7S9r6WGthd9UJF2KllMxGg7aLbfEkDmg1d1LnmyXnL7wJazj6gvd5ZN0OTYmpLGRQM6o30fRMk6ewtM72uJYFY1rpaIei26%2B0t6yBhkBQhYAqwC3S9TNg4VmF%2Fi1E5M2vY%2FrEfhMYNJ%2FHshCeyJDvjE2IW%2Fsk9kMs7GVfyqbGdMjtI5pQjT9DA2TIzU8ZLeoUDfzkQ4QVgjyLK9ptE364cc5pzPkEBDrv%2F2fQUTcoJYExmYhC17S%2B2L8WFYDoqDEcvK0x5Y3S09FUnRF2Zm%2Bjbg%2FCCt5V3okWa2ItHY7%2FfcJzmbGdoAf%2FKym1VZ5JELDqKJf0IKrpYd5q6qjw9qYhjNlnUrv75RJK2T70IT3RmEIbIs1AZ3j963TLxdXWc7bGqHBPyiu5rmMg%2F3GA%2FGBPQQVaKsoUSHNCTH%2FT6AWK7klUpY95IJ5CQOXkKRDlnfF8a5sHEMIKtiMAGOqUBDe85yO6gTBH5K49BbaaTJAsZ0qnF%2F%2BmCbV9Xg%2FIFvG2x91gN0x7ped1SJkJ9QlDcvefZf%2BuM23p9%2BDzRbZ0HrYVmM5eWLAUWwkRb2pFHgOcwHizyhO%2BSyxcLtTWMzghd78GjykOyWZsZIMZN6%2BPb3G%2FaSlfyXjNdLqbmzB%2BLs2y6aWqg3LCpsxxASqAnezOa2H8PcGmV08uItngW1LJDJIqaNYeC&X-Amz-Signature=0a882fc73b53fdb1993d7d94b074317c467951db8e6f8e6c267c12cb829f96d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XITXVK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdt17xHYiHu%2FcSBtm5cVrRwiKKDiZ%2FicGklVQyQf8DbQIgAdWGpp4j%2Bsg1mjAo0%2F9gZ1TD5uL2Rd1F7miwTAK3%2F6Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH5Ne2RPf%2ByUurjGVircA4q1EtKGV0HG61dRPUzOm9SlBGq9DKVvjBmqdeV%2BPuLBOJhoV4C0YTZidAJ3W2R%2B2u0ceOuCixQETc6NxcMvNICRx%2FBJ9unKhfOQ5IXkqAXPoToV6f8ybCntG4dnAPELhsCP%2BWGeVVzen78JkCJenDaGDjcNwXx3pNgnL1eLrF7yCSN7jFzcmy7S9r6WGthd9UJF2KllMxGg7aLbfEkDmg1d1LnmyXnL7wJazj6gvd5ZN0OTYmpLGRQM6o30fRMk6ewtM72uJYFY1rpaIei26%2B0t6yBhkBQhYAqwC3S9TNg4VmF%2Fi1E5M2vY%2FrEfhMYNJ%2FHshCeyJDvjE2IW%2Fsk9kMs7GVfyqbGdMjtI5pQjT9DA2TIzU8ZLeoUDfzkQ4QVgjyLK9ptE364cc5pzPkEBDrv%2F2fQUTcoJYExmYhC17S%2B2L8WFYDoqDEcvK0x5Y3S09FUnRF2Zm%2Bjbg%2FCCt5V3okWa2ItHY7%2FfcJzmbGdoAf%2FKym1VZ5JELDqKJf0IKrpYd5q6qjw9qYhjNlnUrv75RJK2T70IT3RmEIbIs1AZ3j963TLxdXWc7bGqHBPyiu5rmMg%2F3GA%2FGBPQQVaKsoUSHNCTH%2FT6AWK7klUpY95IJ5CQOXkKRDlnfF8a5sHEMIKtiMAGOqUBDe85yO6gTBH5K49BbaaTJAsZ0qnF%2F%2BmCbV9Xg%2FIFvG2x91gN0x7ped1SJkJ9QlDcvefZf%2BuM23p9%2BDzRbZ0HrYVmM5eWLAUWwkRb2pFHgOcwHizyhO%2BSyxcLtTWMzghd78GjykOyWZsZIMZN6%2BPb3G%2FaSlfyXjNdLqbmzB%2BLs2y6aWqg3LCpsxxASqAnezOa2H8PcGmV08uItngW1LJDJIqaNYeC&X-Amz-Signature=c1d3b0aa22ea6200fca79fc40516beafd2e9b29ad3ad07f234bda8ba9e35b97b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
