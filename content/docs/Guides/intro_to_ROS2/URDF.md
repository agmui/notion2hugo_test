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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=2839857911e3f18c6201fd401e6216ba7136737f5d98c117b28cab87982569da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=9de9d88f805b441ddb1a57efd940f672dea2fd893aa5d84e6b0c683362c8ff3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
