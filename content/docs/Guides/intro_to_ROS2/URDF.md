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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBN3WQ2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDRxaBv%2BgTyK5dVQPqE8h9be%2FYRidr5Qjyen5YB3%2FQrrQIgXRNUnJWnPkvQxHlB0lHDIR549x0aLmavk1jE6Sa9HqQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6L3aiRmxOIU39MQCrcA%2BRHmHTPEWCJa0MUxkKB4IfO1%2BsjOOS3B2JXSWgMEgGbEczuZ1QV%2Fb1BheqADIiLEBvBoF%2FC05Qi6jWv8DyUOKmg8hEt20In0dGc3b5EywS7N83s7ia6g7NcM1CmecPf%2BrV0vNFcW7yR5HpSJbK23N7LJzxvb1bmFs69hWybKqnirjUMUA6MPlUq4PPykpg3FGxVRBzmVIWvD7oKrQVNfs8L3O11i2R4uvvOd%2FWp1e2ij%2FJQ%2F%2BZSll6o2EtjRoDXKKOGHj5aqT8KahbJfxfAKdU%2BTXBrFB%2BiO6fbZLYY1QmVRBiw%2FOSt%2FF0un%2BOKjocHUyMhYgO7KfTWTSOt2AwmlHSOZBMr29dnV4ekFuVUGPe4tO5rzSQheK4pHqbrhgTYfkGXUnwJYIL3N7HfxLdNzq2l7JxIfX3e%2B%2BLOWrFzuOPkDBAhLorSDyLic7evi0tKKSHQujZb6gTnU9sBDK2GK3WeZg3dxTF84cs1lcd92FYthmoGsI8xYkuHea%2BzVWTV6reqEObWlRUAhPWD9jy9WJfFS1XYOchTuo379rgGpnPrHb6%2BydXEfxfFowvvJ6hRyteHlSurnWcVTcDiUDGGpnF7uOvRmYPAjzYuWwP5T9JEciOITJtFA5kHfKdqMOyp0L0GOqUBdf2jyjWmwJxPWdtg1SeZohqTJ3%2BQjnNQ0uuBu83J6rUsiUVn0TfR83gfptac5fkw71wpJo4aS83T3YqEOlQFmbwgMYiM0jgW6vPqiu0us9xh3V5Nlq5Tm21NQPIMTXzrmC1VFGxXQnkpxBp0nO3I77lkgTX9bp%2BeIInk%2FIDN1%2Fk%2Bhc1kDTchw3GcpEVVpcxsqZsm6DLria5cv%2BKdH61uHjcTDMJ6&X-Amz-Signature=dd3272fbe53c49a750f872e8493d5f66a9ce71d016511c99263ea2eabbdf1afa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBN3WQ2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDRxaBv%2BgTyK5dVQPqE8h9be%2FYRidr5Qjyen5YB3%2FQrrQIgXRNUnJWnPkvQxHlB0lHDIR549x0aLmavk1jE6Sa9HqQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6L3aiRmxOIU39MQCrcA%2BRHmHTPEWCJa0MUxkKB4IfO1%2BsjOOS3B2JXSWgMEgGbEczuZ1QV%2Fb1BheqADIiLEBvBoF%2FC05Qi6jWv8DyUOKmg8hEt20In0dGc3b5EywS7N83s7ia6g7NcM1CmecPf%2BrV0vNFcW7yR5HpSJbK23N7LJzxvb1bmFs69hWybKqnirjUMUA6MPlUq4PPykpg3FGxVRBzmVIWvD7oKrQVNfs8L3O11i2R4uvvOd%2FWp1e2ij%2FJQ%2F%2BZSll6o2EtjRoDXKKOGHj5aqT8KahbJfxfAKdU%2BTXBrFB%2BiO6fbZLYY1QmVRBiw%2FOSt%2FF0un%2BOKjocHUyMhYgO7KfTWTSOt2AwmlHSOZBMr29dnV4ekFuVUGPe4tO5rzSQheK4pHqbrhgTYfkGXUnwJYIL3N7HfxLdNzq2l7JxIfX3e%2B%2BLOWrFzuOPkDBAhLorSDyLic7evi0tKKSHQujZb6gTnU9sBDK2GK3WeZg3dxTF84cs1lcd92FYthmoGsI8xYkuHea%2BzVWTV6reqEObWlRUAhPWD9jy9WJfFS1XYOchTuo379rgGpnPrHb6%2BydXEfxfFowvvJ6hRyteHlSurnWcVTcDiUDGGpnF7uOvRmYPAjzYuWwP5T9JEciOITJtFA5kHfKdqMOyp0L0GOqUBdf2jyjWmwJxPWdtg1SeZohqTJ3%2BQjnNQ0uuBu83J6rUsiUVn0TfR83gfptac5fkw71wpJo4aS83T3YqEOlQFmbwgMYiM0jgW6vPqiu0us9xh3V5Nlq5Tm21NQPIMTXzrmC1VFGxXQnkpxBp0nO3I77lkgTX9bp%2BeIInk%2FIDN1%2Fk%2Bhc1kDTchw3GcpEVVpcxsqZsm6DLria5cv%2BKdH61uHjcTDMJ6&X-Amz-Signature=f77596ddf6c309d804c52192546c48dd21f4b369bb809a9e1ffb8368e025fdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
