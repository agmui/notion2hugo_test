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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXC2RPP5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIEEDpMsIcXjKGuxqIjRmAxVKe7OqIL9uf0kpzL8%2F4saXAiEApOqSVfkeAwjmi6JeOidnZslieQ19huzteYPApXAYcYIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK4m176pig6%2FqD5YircA%2F42KbpYax%2F6BmZS1nqKRVj0OsP73vkdNUJkw291OKFpyz2aItXHzjavHAngWu4gQxpYznK3Wte%2Fl2vpzRu4%2Fx5R4d0rF9c1hfyKgJJmlvVXHHGHOZeWeq%2BTE%2FOUPWmY4LfpUnGqZ2fd1GabhwaAEQeIjYJM8uBMHYLzB7KUi0IIj13Iu38SLpveTMKa4vGSZ70qLixhGTXuqqhHVunZ3%2FYQ76GWFXmbVQ08hwjNDiyqPBUwlO%2F2dS%2FaNqH6RvUSq6xCowPzspgI%2BbNupnIPKmEHPNWZqkaLs9fWXa9HHxIuOcI5zpuYY8dXrbuaJ4rwQNA7DAwos6Fymv%2B1nd0AmrUdxKCGW0OzAUZhEw9FXTiy7XyofAOxakZPHHaijZXPq9Zor8xQK723yqEjz81kIaz%2F0lt7LHcppwUbm%2BF9l1EfCacegvJUfhfWFN5Js7sybcMso63hEJUNe0NrY%2BePBDQc5e36UwEyeUJ52HxMeOXv7cAdbRVAxSf0N3i9fK6RuzWOPY1HLWJJH6AfFr5Tg2SvTq5LyZZj%2BQwIunC4YodBHWyEuFtfYhBDdK30YF1qrL24xEBn8zCb5bGuX5jEfngHiMXUM0rS20ztBg1Zoo49zUXlSa2IzfjGGCBaMPyb5L8GOqUBnSPHc%2BwoJT9%2FX952MAVDACigXLNj44%2FM32vG8O0b%2B80yhBoXSe6jPyLjS5OLiOOneJYkyiTVz26DIcjm%2BiIM0gOrFDaJwVQNWGQvmb4HM7g1EVi5toXAGXl46rmE65esP5bOvZxp6qPAirtnerYTky%2FGitjfE%2B3INNzNtK33Zp%2BXlx7A5LY1dtwU%2B2OePUwmIuo8%2BpD7ar13skSWbJz8PZk1cAFq&X-Amz-Signature=7c79860d05ac835127c0d7e05ce313bcb237ba18520a5a60eb61b162611e7688&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXC2RPP5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIEEDpMsIcXjKGuxqIjRmAxVKe7OqIL9uf0kpzL8%2F4saXAiEApOqSVfkeAwjmi6JeOidnZslieQ19huzteYPApXAYcYIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK4m176pig6%2FqD5YircA%2F42KbpYax%2F6BmZS1nqKRVj0OsP73vkdNUJkw291OKFpyz2aItXHzjavHAngWu4gQxpYznK3Wte%2Fl2vpzRu4%2Fx5R4d0rF9c1hfyKgJJmlvVXHHGHOZeWeq%2BTE%2FOUPWmY4LfpUnGqZ2fd1GabhwaAEQeIjYJM8uBMHYLzB7KUi0IIj13Iu38SLpveTMKa4vGSZ70qLixhGTXuqqhHVunZ3%2FYQ76GWFXmbVQ08hwjNDiyqPBUwlO%2F2dS%2FaNqH6RvUSq6xCowPzspgI%2BbNupnIPKmEHPNWZqkaLs9fWXa9HHxIuOcI5zpuYY8dXrbuaJ4rwQNA7DAwos6Fymv%2B1nd0AmrUdxKCGW0OzAUZhEw9FXTiy7XyofAOxakZPHHaijZXPq9Zor8xQK723yqEjz81kIaz%2F0lt7LHcppwUbm%2BF9l1EfCacegvJUfhfWFN5Js7sybcMso63hEJUNe0NrY%2BePBDQc5e36UwEyeUJ52HxMeOXv7cAdbRVAxSf0N3i9fK6RuzWOPY1HLWJJH6AfFr5Tg2SvTq5LyZZj%2BQwIunC4YodBHWyEuFtfYhBDdK30YF1qrL24xEBn8zCb5bGuX5jEfngHiMXUM0rS20ztBg1Zoo49zUXlSa2IzfjGGCBaMPyb5L8GOqUBnSPHc%2BwoJT9%2FX952MAVDACigXLNj44%2FM32vG8O0b%2B80yhBoXSe6jPyLjS5OLiOOneJYkyiTVz26DIcjm%2BiIM0gOrFDaJwVQNWGQvmb4HM7g1EVi5toXAGXl46rmE65esP5bOvZxp6qPAirtnerYTky%2FGitjfE%2B3INNzNtK33Zp%2BXlx7A5LY1dtwU%2B2OePUwmIuo8%2BpD7ar13skSWbJz8PZk1cAFq&X-Amz-Signature=2523c4b5913a751d3348df8d2a337bb16365dd5ba54e367fba63b50e29007289&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
