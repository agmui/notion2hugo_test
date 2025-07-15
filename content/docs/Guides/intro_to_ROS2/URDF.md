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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=cdf781cf6c785506154e199159ce9741169299d5128a651741b7bb7cc0e56ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=2029d4739f8f033c11505589903158b9671a6bb738a47e91d7f99c36f5275f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
