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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLVDWXK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsEpElgkdbntzaM7vVa6WPjgy7rP20QzfU%2BOm58FVswIhAK7jUFJo7vBTvqUSHcU%2FtkJqHQ0bugM9vqQi2k0AP1lqKv8DCG4QABoMNjM3NDIzMTgzODA1Igz%2B6tN8V2gGdTLmDT8q3APGtRdyOfwSpivNkzuFF2kkCevLb4WTVDUr5NtCDxNxxUwW9XuueZLhKd9PobDUodcPND0NkulIIAG9hhWEXh9HWYcnWO0Ju349GeejlEMSEDW96jLxbnhrvPz%2Fc25x6GPEC3%2FVKA%2Fiu0Jk%2Bc7viNSiv9rNycbO3EcZ0PTufc6cxus5th8lSoHA%2F%2BnSJslg%2FXbAuUXsEzllUBWhrFiApWfEMVh9%2BMWTXUtoyHs8oedIGJxS1aWWvCpQocsbZ%2F996XnpaUbL09pzQHrzDoTvPFs7UvZlx7M%2FSEUQNTjzkFdaW11a645Au0FPXwHPU9jk1%2FX0nVBn7V81HrH8mxjvXtPFypWKKuP7HR97Rqpw6raS6dyvzOKysJ6rqBuIgjYDS6YoPrwYiWQDa8BBi4%2B%2FOkPgdi0EuS53BEpjDj9pFgiJsqUtxOhsmE4kef%2FP1GIKGkPLM8XRvCMF0bgJ9XaecfkbqiPduaxlQZy8Caho6tiT3F%2B9J8JcbjVUkv7XGJWnr4leGAJd5MeLe7OJT59qrLYql7xA90FQbzki9Y6qVo6jV2idk%2BZJ%2F2Ha5aoG9C6CyxlGwfZNLHk1jzJbXuhPvgFTpvuoTDrEpOlZEfvYAydt1GpqeiWg7JSB7cOrLzD609K%2FBjqkAQIw56LId088iss%2FTq5v3fMDHL%2BqzfNbxWQ%2FgZJ3V5vnLSxMqRNyH%2FJnZMLzaX6MBshPAMxB7dkUMUuyKBqqwLM2ncGrzteKY89NRQowQewWRaa3AGf2iSkpjmyWU3YO4zs7rpxBCx20BMJyrPW%2FtkA5str%2FuWXyg2hMXh6K8R8Q8vbB24%2FA8yaWzC0ReUK7YrGMn5Q%2Byj%2Bf3bMCsI5mU5VSp7CQ&X-Amz-Signature=65d45e0e6a916e7f86ac9718f3d9d36a3aa44a3c10f950ca0f8bd9e2af4c6e60&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLVDWXK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsEpElgkdbntzaM7vVa6WPjgy7rP20QzfU%2BOm58FVswIhAK7jUFJo7vBTvqUSHcU%2FtkJqHQ0bugM9vqQi2k0AP1lqKv8DCG4QABoMNjM3NDIzMTgzODA1Igz%2B6tN8V2gGdTLmDT8q3APGtRdyOfwSpivNkzuFF2kkCevLb4WTVDUr5NtCDxNxxUwW9XuueZLhKd9PobDUodcPND0NkulIIAG9hhWEXh9HWYcnWO0Ju349GeejlEMSEDW96jLxbnhrvPz%2Fc25x6GPEC3%2FVKA%2Fiu0Jk%2Bc7viNSiv9rNycbO3EcZ0PTufc6cxus5th8lSoHA%2F%2BnSJslg%2FXbAuUXsEzllUBWhrFiApWfEMVh9%2BMWTXUtoyHs8oedIGJxS1aWWvCpQocsbZ%2F996XnpaUbL09pzQHrzDoTvPFs7UvZlx7M%2FSEUQNTjzkFdaW11a645Au0FPXwHPU9jk1%2FX0nVBn7V81HrH8mxjvXtPFypWKKuP7HR97Rqpw6raS6dyvzOKysJ6rqBuIgjYDS6YoPrwYiWQDa8BBi4%2B%2FOkPgdi0EuS53BEpjDj9pFgiJsqUtxOhsmE4kef%2FP1GIKGkPLM8XRvCMF0bgJ9XaecfkbqiPduaxlQZy8Caho6tiT3F%2B9J8JcbjVUkv7XGJWnr4leGAJd5MeLe7OJT59qrLYql7xA90FQbzki9Y6qVo6jV2idk%2BZJ%2F2Ha5aoG9C6CyxlGwfZNLHk1jzJbXuhPvgFTpvuoTDrEpOlZEfvYAydt1GpqeiWg7JSB7cOrLzD609K%2FBjqkAQIw56LId088iss%2FTq5v3fMDHL%2BqzfNbxWQ%2FgZJ3V5vnLSxMqRNyH%2FJnZMLzaX6MBshPAMxB7dkUMUuyKBqqwLM2ncGrzteKY89NRQowQewWRaa3AGf2iSkpjmyWU3YO4zs7rpxBCx20BMJyrPW%2FtkA5str%2FuWXyg2hMXh6K8R8Q8vbB24%2FA8yaWzC0ReUK7YrGMn5Q%2Byj%2Bf3bMCsI5mU5VSp7CQ&X-Amz-Signature=08095a048ba7191c26405a5e81c69503d7e94b50b163143ca8a8be1d049676a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
