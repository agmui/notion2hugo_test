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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRZFLPA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8GVwiYgj5hb6dzhrO7hYnWXE0skSd1Y1lNDouSuXCrAiAVATo%2FLzq1cI4kQRIfv%2FFzIF56XpA0h9A3slc5jhjd3CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4TF8J7mbL%2FcCqwcKtwDP%2FOg2%2Bbn4uhQx1PUJloRTN6COKNGYHFmYBOc4i0TzOlBUJ9F5YHRCmt2AZ%2FyMVD02qvXTWAKZPDY6%2BqGTa9rmpi0q%2F%2BhH2dS9sZLWzOqKRKdn80dvQvxmH%2B9gEXfFPrPBzikzbmf4c5JVmjgYyeLoTM%2Fad6PQFqZPwpaKnW2i3%2FaRkNgeQjupIMiCSWK%2BLTEY%2FfNclxv4naLyT42b6jO2MYeMoUySu6w6l8e7Ah8%2BZHX97CSHjSalh56h%2FH4XVIgNUpYILk1IuAIRn2kKDtNQhUonqP2e1vS9KOCHyKKzXro9mdNKK4ddzKifArrdg7tYUnnq3MCwEUOOXLx3ydftv0uHm3wsG4gqTaJPp8h8l1ksxCwe3x86VoxSsS%2F4HoFb%2BImb97V2TrVdLIiI%2BaBnc%2Bc5fslFn3aK0BUc4LAtBYu7At%2BOx0QvBWszz0Fb9cNfPOaZJSrXywr4T9SH0dytwaNsows5WveWhHwYyI2xGX1c96sOhFgoAYhHfUJS%2BZtRpk%2FMqMqgPqlZEs%2FiRmvz1G%2B%2FoSa50UFu6C4TbJMaCTJelGsvqbhsAZvPkXGEL2YFq6TCJlFGJudiXMXTVPk0IOb8F2FMYO4ZChnHWMGRsARmpdRQl5fXYkTq70w0eOhvQY6pgGekZjKkceI%2BqRXna0kfQuqGQfC%2Ba7bDPqMQ2P3uBt5iRZfqviPLBk57zgyQHCZVU8%2BbxByclYpMZneA1rtZHFoGbD%2FJd3mz3A1Ohj6dy%2F7IN0GgdAhHemhuKeSUdHCbGIsM5KcjvGVdYqYbMzDk%2F2DqtPyen2yxskkFjAT7zvxecfdPLDwfY33PR1fkKW%2FT%2FZc5fa8twqeCIkDa8xlghbce016se%2FD&X-Amz-Signature=e177ed8f848681788768afc68707d00a73347aeba8a714a4daafb4ce644e704d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRZFLPA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8GVwiYgj5hb6dzhrO7hYnWXE0skSd1Y1lNDouSuXCrAiAVATo%2FLzq1cI4kQRIfv%2FFzIF56XpA0h9A3slc5jhjd3CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4TF8J7mbL%2FcCqwcKtwDP%2FOg2%2Bbn4uhQx1PUJloRTN6COKNGYHFmYBOc4i0TzOlBUJ9F5YHRCmt2AZ%2FyMVD02qvXTWAKZPDY6%2BqGTa9rmpi0q%2F%2BhH2dS9sZLWzOqKRKdn80dvQvxmH%2B9gEXfFPrPBzikzbmf4c5JVmjgYyeLoTM%2Fad6PQFqZPwpaKnW2i3%2FaRkNgeQjupIMiCSWK%2BLTEY%2FfNclxv4naLyT42b6jO2MYeMoUySu6w6l8e7Ah8%2BZHX97CSHjSalh56h%2FH4XVIgNUpYILk1IuAIRn2kKDtNQhUonqP2e1vS9KOCHyKKzXro9mdNKK4ddzKifArrdg7tYUnnq3MCwEUOOXLx3ydftv0uHm3wsG4gqTaJPp8h8l1ksxCwe3x86VoxSsS%2F4HoFb%2BImb97V2TrVdLIiI%2BaBnc%2Bc5fslFn3aK0BUc4LAtBYu7At%2BOx0QvBWszz0Fb9cNfPOaZJSrXywr4T9SH0dytwaNsows5WveWhHwYyI2xGX1c96sOhFgoAYhHfUJS%2BZtRpk%2FMqMqgPqlZEs%2FiRmvz1G%2B%2FoSa50UFu6C4TbJMaCTJelGsvqbhsAZvPkXGEL2YFq6TCJlFGJudiXMXTVPk0IOb8F2FMYO4ZChnHWMGRsARmpdRQl5fXYkTq70w0eOhvQY6pgGekZjKkceI%2BqRXna0kfQuqGQfC%2Ba7bDPqMQ2P3uBt5iRZfqviPLBk57zgyQHCZVU8%2BbxByclYpMZneA1rtZHFoGbD%2FJd3mz3A1Ohj6dy%2F7IN0GgdAhHemhuKeSUdHCbGIsM5KcjvGVdYqYbMzDk%2F2DqtPyen2yxskkFjAT7zvxecfdPLDwfY33PR1fkKW%2FT%2FZc5fa8twqeCIkDa8xlghbce016se%2FD&X-Amz-Signature=d7046f5aa0c4c65d60942a15006d100aefc90c75f25beccec0e15116a377448a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
