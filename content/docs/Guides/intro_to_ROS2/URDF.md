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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2CBLIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3C5WTK1RVC79IryDdgd5rMaCcSexKCaL64VUWbu96CAiEA%2F%2Bdc2Yyyw%2BLadAtEIgqKIaxgQaZLqUU0MKGgq3vs3r0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B6FcYD%2FNmQF%2FYJjCrcA4D8fp2QwWbjSaD308kjaUNtwLdBUe4D2WaPzDy8FSIWhne1YKQWq41e7LcgqPnNX%2F4h6xkaoJo9gN7slQYJxdWsQbo0YXzZpwkwUn%2B5tPtm%2BMcZlIGj6dvta5LrVXydwjqQI1UvHTeOED6Fz79Th2e6KXg7gUnjmTaMOcCRQkRP6oaOeF3TuyQfxKipf9wZ4rifxTTWglsMYeZlZDNBcvmG856MRATJEAabyAXJMVXE9q5E6WXiqSUEdDaBo9%2F4W7u%2FrgmGUvAzwBR2bsbJJ6tS3tFJ7k5ryk%2BkKf2avM8ZlyK17JJ8FA9UYrnfLrsBDvCUgQ9nRuDXoLbW1BJAXVsqQLaFiLS0nBt0mbDl6s5jAkdN14vWCQaIdYsVgtcOKnj1dvTbufXr4HCfT7dnf%2FPYZUSEto%2B2J31aoZRQAzC2HltfDIZDAnV9gb7dB0gaVU6msgsMj92d0mZ69WiX9%2BNda0Hyani%2BT7ic8w7LBm7uVtjCZMq1I6UxP%2BcI084bQNO9aX4CuS4VQypGsgyU6hwkvPloN4NWAnECRW20tlkqP4suOXhzymJnlQk5GpRk99gCQBWioR047b0tfcTMvLFnHEKpugHenD9OvpwPDZl2IhTjtkiBBKary3v6MOS1xsMGOqUBYKYYgo%2FjsADVSoAzey99W48fymdqqVnOPHHOskOkK9FSrQd5lanBAN4VnI7PYWEWNtHoUmqTNRFj2SW%2BXT7Ay53ikdd47J8XDFN%2BZv1Mg0yuJKjl9C67LiPkKDm8l%2BiPD14jT0pMavhzAvSnBZ%2FyL7OQbJyAykChdV7nkY3xjE0faZp8bLm9%2BbQGU%2BA1QTDhq%2BXPwcGkBr%2BZFb60lt3%2BFByhC%2FuO&X-Amz-Signature=08634e22ca99e9da2d0d88a0842a3b17e13476376b542f77610ccf0accd77805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2CBLIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3C5WTK1RVC79IryDdgd5rMaCcSexKCaL64VUWbu96CAiEA%2F%2Bdc2Yyyw%2BLadAtEIgqKIaxgQaZLqUU0MKGgq3vs3r0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B6FcYD%2FNmQF%2FYJjCrcA4D8fp2QwWbjSaD308kjaUNtwLdBUe4D2WaPzDy8FSIWhne1YKQWq41e7LcgqPnNX%2F4h6xkaoJo9gN7slQYJxdWsQbo0YXzZpwkwUn%2B5tPtm%2BMcZlIGj6dvta5LrVXydwjqQI1UvHTeOED6Fz79Th2e6KXg7gUnjmTaMOcCRQkRP6oaOeF3TuyQfxKipf9wZ4rifxTTWglsMYeZlZDNBcvmG856MRATJEAabyAXJMVXE9q5E6WXiqSUEdDaBo9%2F4W7u%2FrgmGUvAzwBR2bsbJJ6tS3tFJ7k5ryk%2BkKf2avM8ZlyK17JJ8FA9UYrnfLrsBDvCUgQ9nRuDXoLbW1BJAXVsqQLaFiLS0nBt0mbDl6s5jAkdN14vWCQaIdYsVgtcOKnj1dvTbufXr4HCfT7dnf%2FPYZUSEto%2B2J31aoZRQAzC2HltfDIZDAnV9gb7dB0gaVU6msgsMj92d0mZ69WiX9%2BNda0Hyani%2BT7ic8w7LBm7uVtjCZMq1I6UxP%2BcI084bQNO9aX4CuS4VQypGsgyU6hwkvPloN4NWAnECRW20tlkqP4suOXhzymJnlQk5GpRk99gCQBWioR047b0tfcTMvLFnHEKpugHenD9OvpwPDZl2IhTjtkiBBKary3v6MOS1xsMGOqUBYKYYgo%2FjsADVSoAzey99W48fymdqqVnOPHHOskOkK9FSrQd5lanBAN4VnI7PYWEWNtHoUmqTNRFj2SW%2BXT7Ay53ikdd47J8XDFN%2BZv1Mg0yuJKjl9C67LiPkKDm8l%2BiPD14jT0pMavhzAvSnBZ%2FyL7OQbJyAykChdV7nkY3xjE0faZp8bLm9%2BbQGU%2BA1QTDhq%2BXPwcGkBr%2BZFb60lt3%2BFByhC%2FuO&X-Amz-Signature=be81cd24e42147afd234804878815ad01e6b2e2465da09ec14f45d55ca24e4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
