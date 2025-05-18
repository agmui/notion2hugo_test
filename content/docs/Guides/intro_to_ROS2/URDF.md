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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2VEPQH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD2y%2FkZvPehrlXD1lPnZeIR8Gga4%2F5Pa8I7Z1JvdLMrgIgMwAdKZk8iybv6BBDGc%2Bmr5YUD0mxMAskj6MC%2Bg%2BlTKkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMO6OEzcarmsJdDMhircA6Kxjppg%2FUXI6i6p4GH0Ml0MHOPyvoJhAQSREGlZPVIOWbhv77HPUzy1TKqDqaLLLuCzhZIgLoDRA9jENKqe1IgVtM8rivAy5Ml2z52gdNwIyAMOZbc7yW4grG%2B9Bxyj6UObg6SyyZXlZgz9w4kfzuWndA1Gx%2BvXjgVBDqhZDJgbuGxL7Sz5Z5Wl8OccGoHII8ua5mMBlj%2FgsD1Dcajw%2BoOdqcSj1Uz0dArztGcg5CXw4jfHMcWQ1z14UURikFY2mQu7oYosNk5QeygwyoeFTbOU0%2BlzkJy4U5dffPoHb2Qh%2FknLE3aRSnsR14WOwNb9lBgc0rOlpG%2F1%2FE7qxlGq%2BAaSXeAtxRjvHszErVJwElqS9llb93UU0FeYfqtznvKZGm%2BTH%2FQaaQz0rOapaWbJeb1gWRO%2Frd%2BuwS9ds2npfTjJVtFnM4b2Ajn%2F7sxTagAHNGeHDj7f%2BMeAYx4iW0hwwYF7dFtgYrOIwn%2Biw85bN6pWzCVA2OwgmY5q5aexdUFLTdjV5Y5fvc3S%2B0bA3KDaW%2FQ%2BNCCal5eRCohZr1lx0AQIrGHGOZJdALWL5PmuIZmgLDO9mrAp9vMt2cguej6O1yCjQ4rluOjBkDbYVzWDqTV9vIGH%2BiSh%2F3chb%2BEwMLOop8EGOqUB8G5uaFApErk4qTnaQIkCe%2F3HVT3zz4FUKNBKu33%2BWNDD96ml4JQ9dr8BFx%2BM%2BLpH0X3IJGsYkctI252NSgCSZsk3xa4HsXtIHe7ihjCVnrd0dex5y4jWFGsKCf%2B5MT7xSA500xqnpL%2BzPTE%2FuRBZDDX2Nl7Tka%2FPXYboY0tYP5vDM3URWEqHWaRWzUY%2B2FDiPLZDVv78WkpTud37nm%2BNKg9gIeG2&X-Amz-Signature=4c782fddd0c334217951cf33d3baa99e8f76543a4d6b2582cb5383d35429b46a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE2VEPQH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD2y%2FkZvPehrlXD1lPnZeIR8Gga4%2F5Pa8I7Z1JvdLMrgIgMwAdKZk8iybv6BBDGc%2Bmr5YUD0mxMAskj6MC%2Bg%2BlTKkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMO6OEzcarmsJdDMhircA6Kxjppg%2FUXI6i6p4GH0Ml0MHOPyvoJhAQSREGlZPVIOWbhv77HPUzy1TKqDqaLLLuCzhZIgLoDRA9jENKqe1IgVtM8rivAy5Ml2z52gdNwIyAMOZbc7yW4grG%2B9Bxyj6UObg6SyyZXlZgz9w4kfzuWndA1Gx%2BvXjgVBDqhZDJgbuGxL7Sz5Z5Wl8OccGoHII8ua5mMBlj%2FgsD1Dcajw%2BoOdqcSj1Uz0dArztGcg5CXw4jfHMcWQ1z14UURikFY2mQu7oYosNk5QeygwyoeFTbOU0%2BlzkJy4U5dffPoHb2Qh%2FknLE3aRSnsR14WOwNb9lBgc0rOlpG%2F1%2FE7qxlGq%2BAaSXeAtxRjvHszErVJwElqS9llb93UU0FeYfqtznvKZGm%2BTH%2FQaaQz0rOapaWbJeb1gWRO%2Frd%2BuwS9ds2npfTjJVtFnM4b2Ajn%2F7sxTagAHNGeHDj7f%2BMeAYx4iW0hwwYF7dFtgYrOIwn%2Biw85bN6pWzCVA2OwgmY5q5aexdUFLTdjV5Y5fvc3S%2B0bA3KDaW%2FQ%2BNCCal5eRCohZr1lx0AQIrGHGOZJdALWL5PmuIZmgLDO9mrAp9vMt2cguej6O1yCjQ4rluOjBkDbYVzWDqTV9vIGH%2BiSh%2F3chb%2BEwMLOop8EGOqUB8G5uaFApErk4qTnaQIkCe%2F3HVT3zz4FUKNBKu33%2BWNDD96ml4JQ9dr8BFx%2BM%2BLpH0X3IJGsYkctI252NSgCSZsk3xa4HsXtIHe7ihjCVnrd0dex5y4jWFGsKCf%2B5MT7xSA500xqnpL%2BzPTE%2FuRBZDDX2Nl7Tka%2FPXYboY0tYP5vDM3URWEqHWaRWzUY%2B2FDiPLZDVv78WkpTud37nm%2BNKg9gIeG2&X-Amz-Signature=04db52bbc5e702cf436ad636147a9d530db10e178069adeeed06193ae95ffd93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
