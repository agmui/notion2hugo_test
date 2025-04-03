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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LO4DMB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTeTHN44xr9rHyA6LdTOeP%2Bvlf0eskNk%2FkUg3W4P1aUAIhAK45NxOtXRiwEBeh2TygPo2H1p9BDlvWZCfm1w7ilcszKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1uqPC99p1173%2BwCAq3AMWvaTmmTDvLAdwrXX6hPJNtnQBmzurkfqzVQfRAyMxR2rj7UAZCLDj7l0SSmayLHOb1oWwPPpdZ%2Bwu2Sw0Et8p0Tk6l7Tmz1IQhQ4Jphu8PE0QFp5YfAQKQtnqOPRKfCyGGpiaeQX0jtUQzR6cTN2jI9Dz1hRhj3maxAHqxpdP2ehXQ4VDZWtTMXNa4rvmEgBBtB6EurTD4WYD1TnLzsxutwW6yZrSMaG62XkhlI23u12R3yo6eRJIOIp4iOjVMiRFYEbS9dA18WZHHZOjz0EAWkipNo8zCDIAXJzx6pU4ebNMcl9DeQuhenrSjPrA1PFGHCeqIbZ6BQ%2BR1Laz44wh%2BlMtKmzp0qAiytqAbYnOmyYEkz5BwrJB5E5%2Bu6RM%2BR3EXPtUJk12W0fsQRotOD4Qmt2nlRIQlFeekzkgZrhJnsAIzNdG62qFb9NappjLqO5DFn40dKOe3kr0QCiIhmL8GeltPv41wkIeirUtFge3bG4upXEslF3s4AcqVERXXfYz%2BSkpfO5NPOZs%2B8wV8aGb43rqIV5QcP8zJfRPOf93j0ObpYby3AtgtAgl2otE5x%2Ft5EsYvp%2Fivy3nKsiQF5j%2BQr5e%2FJkqXlOKdbOnftlH%2BhU15XQfp6C0HjMohTC6%2Fbm%2FBjqkAdJQuVTo5p5fpKOWeuRVSAMvAIb3kADrS2FkyE5%2FCT%2F%2B5M%2B1n2N0nb23YMnI2nSMV44Pr3ylvIjVGfCpfcEvWLnaKkklO1zU52e2z9SK6tyizej22qRlF44uFhad%2Bhnu1QyOIsmoUfFlturJjPdNR9FGuHjNxEXkEhdavRsaB%2FC07tSrMI3y5QjH%2FnF%2FUl3hILov%2FPAjX2lSEHbr2uYiJ7CdHhjz&X-Amz-Signature=3b02b79a9345fbfd98002933956058b84bdd5c5dd768be8596c91716320bbf5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LO4DMB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTeTHN44xr9rHyA6LdTOeP%2Bvlf0eskNk%2FkUg3W4P1aUAIhAK45NxOtXRiwEBeh2TygPo2H1p9BDlvWZCfm1w7ilcszKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1uqPC99p1173%2BwCAq3AMWvaTmmTDvLAdwrXX6hPJNtnQBmzurkfqzVQfRAyMxR2rj7UAZCLDj7l0SSmayLHOb1oWwPPpdZ%2Bwu2Sw0Et8p0Tk6l7Tmz1IQhQ4Jphu8PE0QFp5YfAQKQtnqOPRKfCyGGpiaeQX0jtUQzR6cTN2jI9Dz1hRhj3maxAHqxpdP2ehXQ4VDZWtTMXNa4rvmEgBBtB6EurTD4WYD1TnLzsxutwW6yZrSMaG62XkhlI23u12R3yo6eRJIOIp4iOjVMiRFYEbS9dA18WZHHZOjz0EAWkipNo8zCDIAXJzx6pU4ebNMcl9DeQuhenrSjPrA1PFGHCeqIbZ6BQ%2BR1Laz44wh%2BlMtKmzp0qAiytqAbYnOmyYEkz5BwrJB5E5%2Bu6RM%2BR3EXPtUJk12W0fsQRotOD4Qmt2nlRIQlFeekzkgZrhJnsAIzNdG62qFb9NappjLqO5DFn40dKOe3kr0QCiIhmL8GeltPv41wkIeirUtFge3bG4upXEslF3s4AcqVERXXfYz%2BSkpfO5NPOZs%2B8wV8aGb43rqIV5QcP8zJfRPOf93j0ObpYby3AtgtAgl2otE5x%2Ft5EsYvp%2Fivy3nKsiQF5j%2BQr5e%2FJkqXlOKdbOnftlH%2BhU15XQfp6C0HjMohTC6%2Fbm%2FBjqkAdJQuVTo5p5fpKOWeuRVSAMvAIb3kADrS2FkyE5%2FCT%2F%2B5M%2B1n2N0nb23YMnI2nSMV44Pr3ylvIjVGfCpfcEvWLnaKkklO1zU52e2z9SK6tyizej22qRlF44uFhad%2Bhnu1QyOIsmoUfFlturJjPdNR9FGuHjNxEXkEhdavRsaB%2FC07tSrMI3y5QjH%2FnF%2FUl3hILov%2FPAjX2lSEHbr2uYiJ7CdHhjz&X-Amz-Signature=2237e83d00545a03bead11b85d17791190983f90084786f5d229afdcdb8984e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
