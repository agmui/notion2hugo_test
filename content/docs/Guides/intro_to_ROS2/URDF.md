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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KEL4DUX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXP0JndxgR5CC2cnAOhGqjeZHuvCw5fyGCIpMFjHsdoAiAutS7DD0w6K%2BwJTlVwXc5gs0Txo5zSXCIt6a2V4AyxFyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMlIq6qMiSQvgyOgzYKtwDJs2tXJttGO8b2CF0NTxNNffeORNIPkCbN6Gga7PLOufJhAMHe1QhfQCwAYLvKWiBUhAcS5Pii4SBd8QiUlKYaNZeQwT1hb6CRMOc5KsnVhCAgFcWi%2BtyReuG9yywYJujgdXTOvwpFs1dIX00Xx5yVYK5si4s9gVTPLDB%2FJuHUKRzlOXI7POJQnzRLx3RKzalkulszxUrqmp%2FSWE4mJq%2BDE%2FR5mGY5cvFJKupP5yp6ptNb8M9TqDsFaRZR%2BotUnOUFKBTRF8FOQBbjQ2MbeNAvg1%2B703soVNED3kG8iFU1s%2F8QCqCCiasaXUL9LgUGvEda5%2FgXuiFMHWW7dj2FCNzPe6OBnNV1nz7pR9nIu0rUS8olQTnMweG4umKM4xnJ2d64JBkDDZt7UnK3oA%2Bozxi9BGaVk05K1YLwvOUXs5udIBaszQEyRe9pxpL4atmZUYfOzGLwZo6ppyVNY6yzl%2Bf3BqVS09uOMMJwR5BY9xN70Dwi39ftOvmN5qDcHEVHG%2BepLfoq%2FlX1bs%2FkrVZAV%2FC8FcStYrnJxm4FPui6kqM8V%2F%2Fnmq1ExE%2Fp%2Fvor2Sb%2BWxIXv0hmcTbLUFhNyr%2BZZlwDB81%2BtwVAghEl6YNZNNXDr%2FjveLWF6lYaHBXHF4w2MjFvwY6pgE62MkfTpebfSHHBWbHqxf%2F5P%2FinTTKZu6COBU0unVCk8ZbjR27MRQ7QcuciAr6lOv%2BaWQzilB58NffeSCpPPw7EMd%2Ff%2BLMdGKMFhCW8rnR85UieOLwlggXtolkOK33dRI0uoGpumqvAz7lBBqfJU9jwKywGggAQnfG3%2FdsQZh%2Bt3HTosTgxK7%2Br%2FTnExjJQ7PQ6mQah90MUXe%2Fas7oayiHJUriS5pt&X-Amz-Signature=02e46a4839a2b81d9d8d1122b61add151cdcba552db91a69c0da2076a7e66812&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KEL4DUX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXP0JndxgR5CC2cnAOhGqjeZHuvCw5fyGCIpMFjHsdoAiAutS7DD0w6K%2BwJTlVwXc5gs0Txo5zSXCIt6a2V4AyxFyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMlIq6qMiSQvgyOgzYKtwDJs2tXJttGO8b2CF0NTxNNffeORNIPkCbN6Gga7PLOufJhAMHe1QhfQCwAYLvKWiBUhAcS5Pii4SBd8QiUlKYaNZeQwT1hb6CRMOc5KsnVhCAgFcWi%2BtyReuG9yywYJujgdXTOvwpFs1dIX00Xx5yVYK5si4s9gVTPLDB%2FJuHUKRzlOXI7POJQnzRLx3RKzalkulszxUrqmp%2FSWE4mJq%2BDE%2FR5mGY5cvFJKupP5yp6ptNb8M9TqDsFaRZR%2BotUnOUFKBTRF8FOQBbjQ2MbeNAvg1%2B703soVNED3kG8iFU1s%2F8QCqCCiasaXUL9LgUGvEda5%2FgXuiFMHWW7dj2FCNzPe6OBnNV1nz7pR9nIu0rUS8olQTnMweG4umKM4xnJ2d64JBkDDZt7UnK3oA%2Bozxi9BGaVk05K1YLwvOUXs5udIBaszQEyRe9pxpL4atmZUYfOzGLwZo6ppyVNY6yzl%2Bf3BqVS09uOMMJwR5BY9xN70Dwi39ftOvmN5qDcHEVHG%2BepLfoq%2FlX1bs%2FkrVZAV%2FC8FcStYrnJxm4FPui6kqM8V%2F%2Fnmq1ExE%2Fp%2Fvor2Sb%2BWxIXv0hmcTbLUFhNyr%2BZZlwDB81%2BtwVAghEl6YNZNNXDr%2FjveLWF6lYaHBXHF4w2MjFvwY6pgE62MkfTpebfSHHBWbHqxf%2F5P%2FinTTKZu6COBU0unVCk8ZbjR27MRQ7QcuciAr6lOv%2BaWQzilB58NffeSCpPPw7EMd%2Ff%2BLMdGKMFhCW8rnR85UieOLwlggXtolkOK33dRI0uoGpumqvAz7lBBqfJU9jwKywGggAQnfG3%2FdsQZh%2Bt3HTosTgxK7%2Br%2FTnExjJQ7PQ6mQah90MUXe%2Fas7oayiHJUriS5pt&X-Amz-Signature=2b4b651b78c85ec0ce5e03b14660b38a21e234c88f80fcb7b8779e8de4b0e967&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
