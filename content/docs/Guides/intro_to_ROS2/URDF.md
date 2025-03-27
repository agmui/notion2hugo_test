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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKEUT5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa%2FUZdAQbfiZfdWHs3An9PnwTLWeUNTua0psy8sA0HMAiAxCvNHW2gGo82mD2SaUv748JgWBWjBR9AX4Eh3NIAOOSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMXre6Xk%2BXmbi%2BRJ3OKtwDJUEVd71XiOsjuPP3RWC6RbMSXB%2FC7vuAZpnnWZtQt56i7yPYeulX6E3M8LY69AzAGdRDZBAFxtVrCQpbyksqE7viuDExLALCdJqMSCR4xFXeLNaqSKnEScPxhLcYVzjrqSUFZ2ZtUFnT1a0QkKfbKYfTaLxGqSsJhVqhjfREQcg4QCZHtK%2BxNATEjlws2dysa5FYlel1ig7OLJoRlSO%2B8IAHe9tiIDn%2FXfy%2BuZyd5Eic42DsvXnXhUij7%2BNwbpu92p%2BVjbBq56UH6DGmS4dkAHtq0RWew6%2BeS20yYBBddEJXFyFoz38PH%2F%2B%2FDKYVQqgIi%2BHvaVZEDstE82HRhKGGU3dzqZJWSvYkTO%2Fm3BBjhtwwhKK%2FNRU602mVjg4kZPc2gK4zI%2FPFDyaby%2BVsIjq%2BbxvShP64jMbX6dWpYyFyfqumbmRDfu46LkolrjYEtYMrYbXz6pdvU6VUFbL6CpCanoZQF%2BDZSA823BajBLp%2FLcxSDgR%2FPKIsQqHBTTjS9NmlwgTO0JI5XkxhguORTu81UmMh78NB6qKKYmlhukOmX6sSBlSA%2B6v%2FpwnzcWuPVhdxULipmU%2Fau86Sp2FTTrcCNME0FVDWZKur4MPUQFo8TmXCXzF2YhLpg5zTrTswwtyWvwY6pgGkBBPSQY%2B25vueNmThC%2BY0MW0npHAQ6NBfsn%2Fq6esjrfJoPd6cW10vP%2FPHeouuxhoPoisZmDgYDGslFIG%2FNaP8Ep2jbY7DyJOk0Q0T11ruglRFZuHKmj0mAOxgV4Z50JFGUhuv82MyUQeSLMFcwx8GgQuHMJYOuRn9NcHkpn2YodsUKe2vJmrLrDVC2rywRVyxyyD6ZvpxtR4DP%2Fh%2FSJQjouJ29%2Fuu&X-Amz-Signature=7ff1366a8fddcd48622b6e7b6fea57a61eafaf802d4e277b3a2a505bb3a3be58&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKEUT5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa%2FUZdAQbfiZfdWHs3An9PnwTLWeUNTua0psy8sA0HMAiAxCvNHW2gGo82mD2SaUv748JgWBWjBR9AX4Eh3NIAOOSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMXre6Xk%2BXmbi%2BRJ3OKtwDJUEVd71XiOsjuPP3RWC6RbMSXB%2FC7vuAZpnnWZtQt56i7yPYeulX6E3M8LY69AzAGdRDZBAFxtVrCQpbyksqE7viuDExLALCdJqMSCR4xFXeLNaqSKnEScPxhLcYVzjrqSUFZ2ZtUFnT1a0QkKfbKYfTaLxGqSsJhVqhjfREQcg4QCZHtK%2BxNATEjlws2dysa5FYlel1ig7OLJoRlSO%2B8IAHe9tiIDn%2FXfy%2BuZyd5Eic42DsvXnXhUij7%2BNwbpu92p%2BVjbBq56UH6DGmS4dkAHtq0RWew6%2BeS20yYBBddEJXFyFoz38PH%2F%2B%2FDKYVQqgIi%2BHvaVZEDstE82HRhKGGU3dzqZJWSvYkTO%2Fm3BBjhtwwhKK%2FNRU602mVjg4kZPc2gK4zI%2FPFDyaby%2BVsIjq%2BbxvShP64jMbX6dWpYyFyfqumbmRDfu46LkolrjYEtYMrYbXz6pdvU6VUFbL6CpCanoZQF%2BDZSA823BajBLp%2FLcxSDgR%2FPKIsQqHBTTjS9NmlwgTO0JI5XkxhguORTu81UmMh78NB6qKKYmlhukOmX6sSBlSA%2B6v%2FpwnzcWuPVhdxULipmU%2Fau86Sp2FTTrcCNME0FVDWZKur4MPUQFo8TmXCXzF2YhLpg5zTrTswwtyWvwY6pgGkBBPSQY%2B25vueNmThC%2BY0MW0npHAQ6NBfsn%2Fq6esjrfJoPd6cW10vP%2FPHeouuxhoPoisZmDgYDGslFIG%2FNaP8Ep2jbY7DyJOk0Q0T11ruglRFZuHKmj0mAOxgV4Z50JFGUhuv82MyUQeSLMFcwx8GgQuHMJYOuRn9NcHkpn2YodsUKe2vJmrLrDVC2rywRVyxyyD6ZvpxtR4DP%2Fh%2FSJQjouJ29%2Fuu&X-Amz-Signature=33d3fb9f2cba46fcf078aad1ba66950b04577bf61e3a5e281a7fb5577062a467&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
