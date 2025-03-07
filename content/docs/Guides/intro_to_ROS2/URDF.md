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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFYOL4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5xTBdMogodn71nBiRDi4ONYGxG%2BE2EYG6tyhVP2oq2AIhANLVU9vEEMzl0XJ26Zsu8tN%2FKJ%2FaV8YsCoguLUZR2h0ZKv8DCE0QABoMNjM3NDIzMTgzODA1IgyPZtgsILV0xbb7Sw4q3AMzyO9S8FuiH1PdJi5j3DsVHwflHdm5CFmk83%2FI%2FhWWXatBSIIUHbR8c%2FFCAlaGcjmD5hb1cvcWJeqtyPDSuMDpkNfbYTmQekKWArB0jfut6SevK4CnUZwLZ8inbJkFGQ%2FBtlDv3%2FmwsQlj1Qx%2F%2FIiZaVDxTdcu59Uwii7bZhb%2F30zEpvgPAj6qs6fJ1ZBEwd4ECQZGqNdDddZakTfivOuYAlGkb3AXGNs1i9XESnzRY8Jn%2BwWonvSJLfCQUmFf%2Fu1NqR%2F7GejYNqHJP9Nnc51iCOPVrytSbUcSfebBYHG8tbM4Vs7fHz6tu2TVKLpXPLDLYq3oFanydHDdJdQKaBvlY03Ju5j1I24F3BHKZrcyEfYicWBx2q6pf8%2FRJcLQTzauNMgVWyL%2B3AziWrCHnV6t%2FLfTSy%2BpcdetHthcREBwRznp0g%2FDqjxv3zpYnXEybFlr99nGnu7hsiwOGx3kTznIji4zGxtIX5pab%2FwsPLLZBgUiTVauLGS5Boc6dK%2F043ylXo2GOZVV3s%2FvC%2B7asnwMa2Z73ufXfyniZgwx%2FWyrSmb7f%2FhsSkXSX2RsxJv1wiQs58%2B0hpQcqZImjc%2BP87C663tYy51hnIfMLhkoz4xADYkHyHxjIHtMFVajAzCroK2%2BBjqkAR%2FDBxmMLtdO7nOWzSBQLJOejoTqj4STfTA5YU%2Fjn5HnOZeDEhL1xy0I982sMMCR6oWoUhllspz8IZgccg0BUmiUOxJ0dgVwG9eo0q7oeA76pX0rdm%2FjazwIlxMnd7RnOTVYdcOiel090y7%2Bec%2FM5A%2BhANeQKKln2bSR7nzCNetS8XIC7hcIUl7Q1D9PcuVN65L07F%2B8FmLap9x38%2BA0sMeCoAok&X-Amz-Signature=de730dc13fb5eb1402e8a90408bde20429d4969a1bd414aa037b9acd4bb5643c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFYOL4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5xTBdMogodn71nBiRDi4ONYGxG%2BE2EYG6tyhVP2oq2AIhANLVU9vEEMzl0XJ26Zsu8tN%2FKJ%2FaV8YsCoguLUZR2h0ZKv8DCE0QABoMNjM3NDIzMTgzODA1IgyPZtgsILV0xbb7Sw4q3AMzyO9S8FuiH1PdJi5j3DsVHwflHdm5CFmk83%2FI%2FhWWXatBSIIUHbR8c%2FFCAlaGcjmD5hb1cvcWJeqtyPDSuMDpkNfbYTmQekKWArB0jfut6SevK4CnUZwLZ8inbJkFGQ%2FBtlDv3%2FmwsQlj1Qx%2F%2FIiZaVDxTdcu59Uwii7bZhb%2F30zEpvgPAj6qs6fJ1ZBEwd4ECQZGqNdDddZakTfivOuYAlGkb3AXGNs1i9XESnzRY8Jn%2BwWonvSJLfCQUmFf%2Fu1NqR%2F7GejYNqHJP9Nnc51iCOPVrytSbUcSfebBYHG8tbM4Vs7fHz6tu2TVKLpXPLDLYq3oFanydHDdJdQKaBvlY03Ju5j1I24F3BHKZrcyEfYicWBx2q6pf8%2FRJcLQTzauNMgVWyL%2B3AziWrCHnV6t%2FLfTSy%2BpcdetHthcREBwRznp0g%2FDqjxv3zpYnXEybFlr99nGnu7hsiwOGx3kTznIji4zGxtIX5pab%2FwsPLLZBgUiTVauLGS5Boc6dK%2F043ylXo2GOZVV3s%2FvC%2B7asnwMa2Z73ufXfyniZgwx%2FWyrSmb7f%2FhsSkXSX2RsxJv1wiQs58%2B0hpQcqZImjc%2BP87C663tYy51hnIfMLhkoz4xADYkHyHxjIHtMFVajAzCroK2%2BBjqkAR%2FDBxmMLtdO7nOWzSBQLJOejoTqj4STfTA5YU%2Fjn5HnOZeDEhL1xy0I982sMMCR6oWoUhllspz8IZgccg0BUmiUOxJ0dgVwG9eo0q7oeA76pX0rdm%2FjazwIlxMnd7RnOTVYdcOiel090y7%2Bec%2FM5A%2BhANeQKKln2bSR7nzCNetS8XIC7hcIUl7Q1D9PcuVN65L07F%2B8FmLap9x38%2BA0sMeCoAok&X-Amz-Signature=361b774c2e42259c48d32efc46d9f1d17806f8a2f6a78f0eec80852c94575612&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
