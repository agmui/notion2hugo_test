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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=6de51355ff7c295cc4424d01baec7f262d32944a708a4a2c2c478342c93710dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=58b4a93778185a990d932f484a8cc208514ce4bcf217c8775d9916fba69c9989&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
