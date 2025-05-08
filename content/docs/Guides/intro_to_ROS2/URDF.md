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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGUIIOK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQNJN7xpTYTzkkx9oTJAbMCfEd0LwEd9UbfERTGo99wIgH0OTNdUlnKwRF%2BZjtTzZnxqtX7euwC6UtLvv%2F7zLoo4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHv8SchGkm3tH7imRyrcA%2FIwDMA%2BwxVGO%2Fc%2Bj28fI3rN9nSodvwuCyYifxWOo8KSWGcYdRnivbSbzr8jcYwHVNdRe3%2BgAoX6gXf%2Ft54uwFMfkrTgkX1PQboE7HOarPkCRrSZqVv0e8CQ5%2BXmNUKVs6P53wW%2FKuQjP%2BxXECCIJJ6BDadGCkjMV%2FzUocHJCq6kg0hpH70VCXYJhDWK%2Be0eq0mEyRqjwM9KZOlLzjOlGaFjzZVqs8n8oRrMIj7TkHykKYMt%2FRPyUmOntS0XE8xAYfW6hojsRMU597whwO32BgRi%2BXs7p0xiXxjYZxHeNIk1CCwD4%2FbobY7VSOY4lyA3t%2BlU74ZYQIFXUkwK%2Fwchh3VILJFJ4mYdKn%2BRVAQweds7amYfxLLkGYjHzcU4jKaguasVGCmdGvdjqN1ArMLKP5Su%2Fx90s%2BPyjDn%2FpX1GgfiR1p0b%2Fp5itb9F%2BUg9k%2Fd008neRBFOyEefJLQFyZQHXlsSJvXhSIy3T6n8Q1GfH5PvLBFjkPgjB1NBsQ980U%2FU4HEkQsU7AuoBJdvnWxfh91NI2kyxzWo%2BUYdu9YkyOuyrqEbNIq5FlnoBuWUpDo1kh98jNKvTEAxd%2FbESwhdoekuWxt81fTyLVfd5pY7L8KNrAz0vueM2leCy%2ByieMPyx9MAGOqUBAZEjrYYULRpT9jIiE8pzC0fdd6UPcUzyPLLXjocgRzBR2Ze0gQ1JxIq9WX360ZO80XSA67zHCGPQyOiv7AUy11RAu3BhcvtfTPB0e%2F%2F6nWzsO1Os%2FbvKdBJRhLujQ1AnsHlfuCREdbS%2BK8atsJIVptgW8QZAMSq6%2B14e66wo8UZS9kKD9HzmZatFoUEsZNiuHaGcIHpuK42DQYhPtqeMAuIvJP5%2B&X-Amz-Signature=0bd600400d58316e4d7f8d561915f3685ab4549327fa5aeb5d2bf24792ae9ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGUIIOK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQNJN7xpTYTzkkx9oTJAbMCfEd0LwEd9UbfERTGo99wIgH0OTNdUlnKwRF%2BZjtTzZnxqtX7euwC6UtLvv%2F7zLoo4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHv8SchGkm3tH7imRyrcA%2FIwDMA%2BwxVGO%2Fc%2Bj28fI3rN9nSodvwuCyYifxWOo8KSWGcYdRnivbSbzr8jcYwHVNdRe3%2BgAoX6gXf%2Ft54uwFMfkrTgkX1PQboE7HOarPkCRrSZqVv0e8CQ5%2BXmNUKVs6P53wW%2FKuQjP%2BxXECCIJJ6BDadGCkjMV%2FzUocHJCq6kg0hpH70VCXYJhDWK%2Be0eq0mEyRqjwM9KZOlLzjOlGaFjzZVqs8n8oRrMIj7TkHykKYMt%2FRPyUmOntS0XE8xAYfW6hojsRMU597whwO32BgRi%2BXs7p0xiXxjYZxHeNIk1CCwD4%2FbobY7VSOY4lyA3t%2BlU74ZYQIFXUkwK%2Fwchh3VILJFJ4mYdKn%2BRVAQweds7amYfxLLkGYjHzcU4jKaguasVGCmdGvdjqN1ArMLKP5Su%2Fx90s%2BPyjDn%2FpX1GgfiR1p0b%2Fp5itb9F%2BUg9k%2Fd008neRBFOyEefJLQFyZQHXlsSJvXhSIy3T6n8Q1GfH5PvLBFjkPgjB1NBsQ980U%2FU4HEkQsU7AuoBJdvnWxfh91NI2kyxzWo%2BUYdu9YkyOuyrqEbNIq5FlnoBuWUpDo1kh98jNKvTEAxd%2FbESwhdoekuWxt81fTyLVfd5pY7L8KNrAz0vueM2leCy%2ByieMPyx9MAGOqUBAZEjrYYULRpT9jIiE8pzC0fdd6UPcUzyPLLXjocgRzBR2Ze0gQ1JxIq9WX360ZO80XSA67zHCGPQyOiv7AUy11RAu3BhcvtfTPB0e%2F%2F6nWzsO1Os%2FbvKdBJRhLujQ1AnsHlfuCREdbS%2BK8atsJIVptgW8QZAMSq6%2B14e66wo8UZS9kKD9HzmZatFoUEsZNiuHaGcIHpuK42DQYhPtqeMAuIvJP5%2B&X-Amz-Signature=e5903bf8627a5412629715dd4388657adb93c4faca83a5f4853c0e94ed35b44c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
