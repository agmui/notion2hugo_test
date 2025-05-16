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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645C6QW3Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7yF6vgeh8cMpI%2FlYgJGUhAti2JPueREXdQPfOkrZpcAIgNUJawhTTMV4z%2F2dP8OsGUePHxb4ARgBL3wz4T25zrf8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIO1br%2FPBDroX3zGXCrcA9k%2FjsPZ%2FRnc80Sb8guLcQLjIp2bcehZfdBtQbsq8ox%2BqH%2B0szPh%2FEw%2B06Xjl3kU5oy%2FIvFFP9973Mau%2BU2xtvwSWbVutnCCYAKvWj1Fo%2B0Jn13KJfy0TN4fhINEhbsdu0rtG55Fv73iEjYLg3BaUPkn%2BKqUkP69l%2Fx93hB1EMA0wDAhB2BMzdecUZWiXW8PgsV%2BaFTwBgkWgqOpM5S6rMlVRJZRJ20agW5an6NaNT3YOllWFjQCLsa%2F1184EfhxOZ%2FkdbmqBZf134YA4v4pnPBgTeaHzkrLGVuSk6wCMutiJyD0RAgdSTga3QvzEWxRfw3qu2KKQX%2BO0nXvrE2PORaNqbp9XoBxVtn%2FexL8NuF%2B5ZBmXYZVeA8qljf2F6v5fqv493JpASvb9cHbDae70x4cjyBoMJb%2FPNqIMXwi7vcuuR%2BFes3qn9X9zijEKAiH1Bi%2Fb2TyEFLza%2FwPJhB7q4YLlc2ZLrF0vWeVUtkAZoJdOOyfPT6RaPm5%2FF0Ld2P9UxkM8P37%2BJhObcmPZ8evzKGlggTtoOZVL85%2BOsHAG%2F5SZw0XYFhflLGqT4Uy8i7QEwThrV0HxHMNKy8UruC3GBmfG4z%2Fjosoj6eMgn8lc3%2B0UCEIWQMjXy%2B5wHEsMKuQnsEGOqUBvD8PGMnuG1%2FXczq%2FFWUpsNqizYnZoakApBLcqfuJjWIKWhSSXlo5CWcd0mf968I1%2BAtkak9rnCMg5HH0uLV050VONAhg22Hxu%2BtsC9CjVOSY6%2B5G2W1F40LPtWjo2NsKLdXAfgvO4FkR5hbBOPJWxPA89Ba1XFiQhAzY4X11r%2Bow12DyAU%2BKhDwzwE%2FwVAFA25xOq4SNbKXyuPSGavX0EWlBJ7hq&X-Amz-Signature=412e511852873d94d676b16f11d56d0d6e2c1c2d4a9afab4b84fab81bbaf87ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645C6QW3Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7yF6vgeh8cMpI%2FlYgJGUhAti2JPueREXdQPfOkrZpcAIgNUJawhTTMV4z%2F2dP8OsGUePHxb4ARgBL3wz4T25zrf8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIO1br%2FPBDroX3zGXCrcA9k%2FjsPZ%2FRnc80Sb8guLcQLjIp2bcehZfdBtQbsq8ox%2BqH%2B0szPh%2FEw%2B06Xjl3kU5oy%2FIvFFP9973Mau%2BU2xtvwSWbVutnCCYAKvWj1Fo%2B0Jn13KJfy0TN4fhINEhbsdu0rtG55Fv73iEjYLg3BaUPkn%2BKqUkP69l%2Fx93hB1EMA0wDAhB2BMzdecUZWiXW8PgsV%2BaFTwBgkWgqOpM5S6rMlVRJZRJ20agW5an6NaNT3YOllWFjQCLsa%2F1184EfhxOZ%2FkdbmqBZf134YA4v4pnPBgTeaHzkrLGVuSk6wCMutiJyD0RAgdSTga3QvzEWxRfw3qu2KKQX%2BO0nXvrE2PORaNqbp9XoBxVtn%2FexL8NuF%2B5ZBmXYZVeA8qljf2F6v5fqv493JpASvb9cHbDae70x4cjyBoMJb%2FPNqIMXwi7vcuuR%2BFes3qn9X9zijEKAiH1Bi%2Fb2TyEFLza%2FwPJhB7q4YLlc2ZLrF0vWeVUtkAZoJdOOyfPT6RaPm5%2FF0Ld2P9UxkM8P37%2BJhObcmPZ8evzKGlggTtoOZVL85%2BOsHAG%2F5SZw0XYFhflLGqT4Uy8i7QEwThrV0HxHMNKy8UruC3GBmfG4z%2Fjosoj6eMgn8lc3%2B0UCEIWQMjXy%2B5wHEsMKuQnsEGOqUBvD8PGMnuG1%2FXczq%2FFWUpsNqizYnZoakApBLcqfuJjWIKWhSSXlo5CWcd0mf968I1%2BAtkak9rnCMg5HH0uLV050VONAhg22Hxu%2BtsC9CjVOSY6%2B5G2W1F40LPtWjo2NsKLdXAfgvO4FkR5hbBOPJWxPA89Ba1XFiQhAzY4X11r%2Bow12DyAU%2BKhDwzwE%2FwVAFA25xOq4SNbKXyuPSGavX0EWlBJ7hq&X-Amz-Signature=ec56dac8319bc73341d1fde490d27da147e5eb51da3213f361246026a9217b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
