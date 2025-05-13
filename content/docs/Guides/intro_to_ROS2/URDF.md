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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7AJQIZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDFL9890%2FBZSR0HahHyvQqYqeQdfl4nRE8%2B%2B1ppmhZrqAiEAwYAR35iT%2BeoLH5vuEsJ40JPb83ZA16983ZDp7TqhBd4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqPuEpXz3pFupzLOCrcA%2FBoVSkl7jEavWo0Wavt4bksN2qEX2BENF8WM6XtRSLr5VP8nfoRnI2UC94l2I8KdBifjGwo%2Bw0J%2BHMUiR8n8G70lgC%2FcFp04La01%2FlXPJ6ERc%2BPLwLy2nB5RnnJIiS39B6cKn%2Fq%2B0G7%2BuffCU5JsosHFT76dHDS47y6LHncAtYmNZWqG3dMR0dSHazphlorm6LK800eZ6lhlX4SjNHpzeHku0N4lsOivnjR3Dcm7FXtYAAFPFdQpX3%2BjSi69aWI7mbjqNgvf%2FlZpOHDdwjNI6DeCMMQRpIByk5qgJXoUUTM2u4CKsb0fYpMi4uWgnk289HM%2Fzzp4BXwY0To9JClrsU%2FqEcT9rHvbmDebxsO9eueJAR302%2FUHCo30yD7hhwXNTncebw4LBQvUADq0skFHPfWpvwwBiaE5mJa289Z7TNyw0WARQkHtJc6y6%2FqDb470fZFeZduHbqzLdJHSBYczXwhHpL4Fpbt41AEMj4J66tIDmKaPX1XR9fwD0%2BS%2B71rKqcypjWb%2F1dXxhT%2BS1asORDKWm0qHz6Ceh0mTOUuhNe%2BfMHX6lCtuqlAHhMsBF%2BiX%2BREG2KHJFAY5jRqD6jxIXxZx7RHRvblZjiTVLmJVRuoOOxz99EZWjJUDUw0MLr3isEGOqUBP5rrbz7UH7%2FZDujSqbJBW%2BYngRN9z2dE6njr1hMRnchXmPUGp3tL9NDOhldYzNbaVg2VpMK3%2B7TP%2FSotWEbiKdCwT7PmOOkx7n%2FAjLTqoHRzD1umPD6s5TYDUIWIzaPiaf8OY4q1joavDxx3tNGojNzXiyFv7m9BpNSUAY96%2FxZ6xnmSfKlKSj3vQAWTk2TJNBSGsLavzElZ%2BK%2BT6czn7ksjgoOQ&X-Amz-Signature=3b0acf657107fde319a3fc8493d87b3fa13f6abee21eadf7521eccc79c92aa50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7AJQIZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDFL9890%2FBZSR0HahHyvQqYqeQdfl4nRE8%2B%2B1ppmhZrqAiEAwYAR35iT%2BeoLH5vuEsJ40JPb83ZA16983ZDp7TqhBd4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqPuEpXz3pFupzLOCrcA%2FBoVSkl7jEavWo0Wavt4bksN2qEX2BENF8WM6XtRSLr5VP8nfoRnI2UC94l2I8KdBifjGwo%2Bw0J%2BHMUiR8n8G70lgC%2FcFp04La01%2FlXPJ6ERc%2BPLwLy2nB5RnnJIiS39B6cKn%2Fq%2B0G7%2BuffCU5JsosHFT76dHDS47y6LHncAtYmNZWqG3dMR0dSHazphlorm6LK800eZ6lhlX4SjNHpzeHku0N4lsOivnjR3Dcm7FXtYAAFPFdQpX3%2BjSi69aWI7mbjqNgvf%2FlZpOHDdwjNI6DeCMMQRpIByk5qgJXoUUTM2u4CKsb0fYpMi4uWgnk289HM%2Fzzp4BXwY0To9JClrsU%2FqEcT9rHvbmDebxsO9eueJAR302%2FUHCo30yD7hhwXNTncebw4LBQvUADq0skFHPfWpvwwBiaE5mJa289Z7TNyw0WARQkHtJc6y6%2FqDb470fZFeZduHbqzLdJHSBYczXwhHpL4Fpbt41AEMj4J66tIDmKaPX1XR9fwD0%2BS%2B71rKqcypjWb%2F1dXxhT%2BS1asORDKWm0qHz6Ceh0mTOUuhNe%2BfMHX6lCtuqlAHhMsBF%2BiX%2BREG2KHJFAY5jRqD6jxIXxZx7RHRvblZjiTVLmJVRuoOOxz99EZWjJUDUw0MLr3isEGOqUBP5rrbz7UH7%2FZDujSqbJBW%2BYngRN9z2dE6njr1hMRnchXmPUGp3tL9NDOhldYzNbaVg2VpMK3%2B7TP%2FSotWEbiKdCwT7PmOOkx7n%2FAjLTqoHRzD1umPD6s5TYDUIWIzaPiaf8OY4q1joavDxx3tNGojNzXiyFv7m9BpNSUAY96%2FxZ6xnmSfKlKSj3vQAWTk2TJNBSGsLavzElZ%2BK%2BT6czn7ksjgoOQ&X-Amz-Signature=595c45e23918bc9e109c4a3449dc47c3992b048b0ab2f7011da3d9e87e8fa8d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
