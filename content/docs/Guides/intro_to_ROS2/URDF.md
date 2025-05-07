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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q255CFPM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZJF9rdDVXK6BZMEvZ3yknBYtjWp5NxWF3yNEeTMzLwIhALTcLCecxfzCA7L%2B53EFVtnqxwgViutYOgo2R4YaLmc3Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyuXNKqENAGWDqjZrQq3AOfUZISZS1fC9lVI70WDbfmMZyTndRTO6JaIyAe%2F79HRmPhzDi54L3zA8sUUIrqZA6nkorUmyItCN6dd0VjMFueGkv%2Fi3t%2BnhJRaH3gt%2B1UCZ%2FmQ8aZU%2FI056X3J6IgjqBwP26hhalY3vVQ%2FQ7nmN7ZnFR4zcE0mR%2Bbe4vnR35V8YDCxQUCIcpdGUUpy9aOUx%2BjX9WC3J%2FK4AWNJYjPYva28e8%2BqPxIx4FgaL27TUUtWP0rRW8EIm%2Bz00SwbIQtak4rh7Lf1ShPRI5J0QUkQclIzqyovQPtNAuG3Qc%2BT02MxyxV6nUdbjKpmTNyyBjJGo%2BWMOP1w7IuxmMCl58A3olPiAfzcoM8Mt8aqNsTCUDVWqSD%2B%2BOig6gWmh8KgoSVCvZVIvMwqDCN1eIRS9d6BB8QZ3M6x7mqrYL38qoLIuESL%2Bl7mI0uunfDyZSQusL%2FUmyKOLz6lT25tm29h55agmoZswoaQEY3OSh1fwFlzo5Rtcg2vGrbKypfUs97GMx%2BNdMJaUgah8NrwAfGF8Rws%2Ftr7%2Fk1ZSvZ3NahUQYYP4vPeL%2FdYt4z%2BemQLRYoabE9tnDfgPrrgwsb01lVOsAmhgcJ2AmCePGzNbdIIm7nMyaYJkUMxS0VynyU2ovOmTCNnO%2FABjqkAU4DvJhFHNrKeIIbfziop7IIna1Q%2BCWMKBq7CkvS3O1dw%2BAsgZFhPRy9lANuzIrA407JUe0941psRuymm%2FG0O6Gc%2FkCQtqZN8P34ZAL4TKlDuclj7I9XP7Pb8uB9mah5Xswjw%2FpjYbyZvNe%2FNWWe%2BYdUczYcItA0WW4vsURCocVI52ABM0csbLjwIlBs616btDRd0JHn%2B8ZGl3CazYYXVgES%2Fc5R&X-Amz-Signature=8fc41b3831ac0c2ba606cf49bc1a0f27408972da0ca67046fd285a2c18e922ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q255CFPM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJZJF9rdDVXK6BZMEvZ3yknBYtjWp5NxWF3yNEeTMzLwIhALTcLCecxfzCA7L%2B53EFVtnqxwgViutYOgo2R4YaLmc3Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyuXNKqENAGWDqjZrQq3AOfUZISZS1fC9lVI70WDbfmMZyTndRTO6JaIyAe%2F79HRmPhzDi54L3zA8sUUIrqZA6nkorUmyItCN6dd0VjMFueGkv%2Fi3t%2BnhJRaH3gt%2B1UCZ%2FmQ8aZU%2FI056X3J6IgjqBwP26hhalY3vVQ%2FQ7nmN7ZnFR4zcE0mR%2Bbe4vnR35V8YDCxQUCIcpdGUUpy9aOUx%2BjX9WC3J%2FK4AWNJYjPYva28e8%2BqPxIx4FgaL27TUUtWP0rRW8EIm%2Bz00SwbIQtak4rh7Lf1ShPRI5J0QUkQclIzqyovQPtNAuG3Qc%2BT02MxyxV6nUdbjKpmTNyyBjJGo%2BWMOP1w7IuxmMCl58A3olPiAfzcoM8Mt8aqNsTCUDVWqSD%2B%2BOig6gWmh8KgoSVCvZVIvMwqDCN1eIRS9d6BB8QZ3M6x7mqrYL38qoLIuESL%2Bl7mI0uunfDyZSQusL%2FUmyKOLz6lT25tm29h55agmoZswoaQEY3OSh1fwFlzo5Rtcg2vGrbKypfUs97GMx%2BNdMJaUgah8NrwAfGF8Rws%2Ftr7%2Fk1ZSvZ3NahUQYYP4vPeL%2FdYt4z%2BemQLRYoabE9tnDfgPrrgwsb01lVOsAmhgcJ2AmCePGzNbdIIm7nMyaYJkUMxS0VynyU2ovOmTCNnO%2FABjqkAU4DvJhFHNrKeIIbfziop7IIna1Q%2BCWMKBq7CkvS3O1dw%2BAsgZFhPRy9lANuzIrA407JUe0941psRuymm%2FG0O6Gc%2FkCQtqZN8P34ZAL4TKlDuclj7I9XP7Pb8uB9mah5Xswjw%2FpjYbyZvNe%2FNWWe%2BYdUczYcItA0WW4vsURCocVI52ABM0csbLjwIlBs616btDRd0JHn%2B8ZGl3CazYYXVgES%2Fc5R&X-Amz-Signature=4c706f473d3440e0606f0f8c7f91b586ef78882d531dd5a7d9837b72cd86aa1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
