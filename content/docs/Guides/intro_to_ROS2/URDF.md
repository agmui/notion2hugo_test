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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5PG63A%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0Uaea14kmMUvcRvi0nO6v2THTeDVxSTfzKXF%2F2e5YAIhAKcgyE5AdkKY7grRSPVdp%2FIJXBa%2FbVm43EzGGIO1BIiBKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO5m%2BiA5aTwT9x3yoq3ANiODy%2FHjHXpGA4X9z6XOe4TkuG3b6E4cyaWuaAPrQzBjSKyr3nHOlQyf16dwY3cFG3dxboL4FouuXWOVkyQdANiHV3J%2Fp9j3kLHVznwdSpLcXc69FMWPgeWzGlABRshtKBsJU6S74UgBG%2BwGXI69BmyJSVB2JXY0pcejR9lhLa8XwzMMK44vyNIOiwwNVD5fA7Rn3EU2LkCFV%2FRFQJKh8Ez6hRvoOiBU5lE4Xx%2BW6vWqBX9wDJz3QNyB%2FCcnGfdwZzJJqj1FUDTNUXitejr5wKBCkomTm6pjRwuZxfUQF%2Ffjbliy3EuzADmVTepmPXNBfRrOZKGsDlQJcVKaKB1ISSg4jI3vy237b6RGFaMdM%2FjLMXhu6ktIN147VvP%2Ff6D1V4MdEGqJfrkvhL8F6T%2FjE%2BbHPLCsP300%2BMQwr1RsrD6RwAG6UUE34c%2FAp%2FVEoXiF%2BkBWBRHGF1h7M4F9LfZe%2BtF5aVgCvSt9%2BFiS9FXktswJQlXr2EcMCsOO6%2FYXYBCMgPvlTNHJBK8%2BheMCe2DCsPKi%2BY6PD6L2T7uNIPP16ysK5ToLlzWnHrpWa6OUv8HI9fTi4Xzbh%2BS2lzUpgKUI8rUPgoocPevZjc3gZQSfqynVtWcic69Xg4UDtIGTCzj%2FzABjqkAcP%2BSrJobQKjh1eQyJy9sdjcYIgqgRFrgwhN5zFFjM1mawzbjAb2Qh41OrisRhIhA8aL8RpOd1ukwtiPgzvMYgfduSjnFtpjzpitgj3qIyCuzxdBI9KN3RNhmKHKC%2FBc09azlTZ4IQLa3EYb3wYKuqIHGKABYkRD%2F%2BO6se1FIyaYbQufcrpunZNHVCnhRe3W6o7wBUZMjrziSZuMux%2BU5kgRDKSp&X-Amz-Signature=f2d3cfd3ccba835c6276b9b6e3c1c76426c10a177b68095dbc6d457dea8acde7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5PG63A%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW0Uaea14kmMUvcRvi0nO6v2THTeDVxSTfzKXF%2F2e5YAIhAKcgyE5AdkKY7grRSPVdp%2FIJXBa%2FbVm43EzGGIO1BIiBKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO5m%2BiA5aTwT9x3yoq3ANiODy%2FHjHXpGA4X9z6XOe4TkuG3b6E4cyaWuaAPrQzBjSKyr3nHOlQyf16dwY3cFG3dxboL4FouuXWOVkyQdANiHV3J%2Fp9j3kLHVznwdSpLcXc69FMWPgeWzGlABRshtKBsJU6S74UgBG%2BwGXI69BmyJSVB2JXY0pcejR9lhLa8XwzMMK44vyNIOiwwNVD5fA7Rn3EU2LkCFV%2FRFQJKh8Ez6hRvoOiBU5lE4Xx%2BW6vWqBX9wDJz3QNyB%2FCcnGfdwZzJJqj1FUDTNUXitejr5wKBCkomTm6pjRwuZxfUQF%2Ffjbliy3EuzADmVTepmPXNBfRrOZKGsDlQJcVKaKB1ISSg4jI3vy237b6RGFaMdM%2FjLMXhu6ktIN147VvP%2Ff6D1V4MdEGqJfrkvhL8F6T%2FjE%2BbHPLCsP300%2BMQwr1RsrD6RwAG6UUE34c%2FAp%2FVEoXiF%2BkBWBRHGF1h7M4F9LfZe%2BtF5aVgCvSt9%2BFiS9FXktswJQlXr2EcMCsOO6%2FYXYBCMgPvlTNHJBK8%2BheMCe2DCsPKi%2BY6PD6L2T7uNIPP16ysK5ToLlzWnHrpWa6OUv8HI9fTi4Xzbh%2BS2lzUpgKUI8rUPgoocPevZjc3gZQSfqynVtWcic69Xg4UDtIGTCzj%2FzABjqkAcP%2BSrJobQKjh1eQyJy9sdjcYIgqgRFrgwhN5zFFjM1mawzbjAb2Qh41OrisRhIhA8aL8RpOd1ukwtiPgzvMYgfduSjnFtpjzpitgj3qIyCuzxdBI9KN3RNhmKHKC%2FBc09azlTZ4IQLa3EYb3wYKuqIHGKABYkRD%2F%2BO6se1FIyaYbQufcrpunZNHVCnhRe3W6o7wBUZMjrziSZuMux%2BU5kgRDKSp&X-Amz-Signature=748191a0e044287679d0c0d7fe88d10a6d10c7ff22d236c0a33b04e3eca64c91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
