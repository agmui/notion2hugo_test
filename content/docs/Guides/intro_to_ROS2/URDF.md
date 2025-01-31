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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYOL4XD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmJ%2F5WaGO%2BhsS3Bc91PSi5rDWEQksk5nC1SbpeRSjfGAiEApBImVzLhgT%2BUliDIek2CCtrNuEbCwNg9WWfkBOF3jAEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyKG0XS1CZVrg13uircA3ORL0Fbw4q2dAv7tAZ6AfSntHKA2yeu7ypBIBHtjiGrR%2Bp4VADUi0%2Bs3EnkYjjGW38f%2FkaiiL%2B%2FIMte1E4SLeWxWX9PH17FimVnbXoTR3PORpJ8KQfQu8XsiZqk8qJ5CLyfb7bBpzb66pZQ4B1UjruNo7jB4xBnTDUWAjuFCS7mforTbqgzHov9UCexZcjLznMLamGDZV63EsAf%2BVIu94V2TfuuD2B%2Fy9hbonwjuhyBJn7ddjnl8xcuIFQq9moe389d1HlNWNKtSbHp7URo20G8uNGDjUnaWq578IzY1w49eNJKJeVTpgxt34k7%2Ff%2FLFfuLp92BDF3PyJ%2FCa9qUGZ9yx9%2FW0B5aTk43HvhG91RW0WqmawOsbZucVyhcX%2B7Joyc345YIHSA24bL1HdCr%2Bl0n6eVb9a7jMlEmj2k%2FKHEzPlkNXwuCU5eZy9LNRZ6qempFyzlk4nM%2FnP%2BADjaJVoOiyJuOlNY%2FRV1tTVq0TgF6yGLsvz%2BB09Gq5fUxv%2BQmGQgBNmYwGyy%2FgZeu5Lj705Ro83ovFqv6sn%2F%2F6T7C%2BaeIk4yuNoiqSNoYs7vpIr0JKlSCnqBrWz5CvYV5LoUSXGUZwEl0hosg1d%2F25ommaE4xxa6IQifdz0rOLfWyMJ7j8bwGOqUBrHCjMA6YFxdgl7m3m0BejBS1czwLAYaFbe8RNsPB10YaZ9D651v%2FhdYu9KDvy9pphLGxH6LDiHdSNrwTJJRVNU%2B9uaPJhK3D3I6tzMKMqZxcbfvQ1eIZgQhbaez1SPxWuIHTIaOcetf9fcYzKD6FQE%2BFssH70QQ72%2B4sNSqvpXnsyrD4q6c4nDmslWwwtRawyFHOjtCeRrFWBPsrgXtvg6hd8gR%2B&X-Amz-Signature=4e9e5fe8f24c1701bc61773463386b326bc82fa2ba0dab0ea928a2043ea0119c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYOL4XD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmJ%2F5WaGO%2BhsS3Bc91PSi5rDWEQksk5nC1SbpeRSjfGAiEApBImVzLhgT%2BUliDIek2CCtrNuEbCwNg9WWfkBOF3jAEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyKG0XS1CZVrg13uircA3ORL0Fbw4q2dAv7tAZ6AfSntHKA2yeu7ypBIBHtjiGrR%2Bp4VADUi0%2Bs3EnkYjjGW38f%2FkaiiL%2B%2FIMte1E4SLeWxWX9PH17FimVnbXoTR3PORpJ8KQfQu8XsiZqk8qJ5CLyfb7bBpzb66pZQ4B1UjruNo7jB4xBnTDUWAjuFCS7mforTbqgzHov9UCexZcjLznMLamGDZV63EsAf%2BVIu94V2TfuuD2B%2Fy9hbonwjuhyBJn7ddjnl8xcuIFQq9moe389d1HlNWNKtSbHp7URo20G8uNGDjUnaWq578IzY1w49eNJKJeVTpgxt34k7%2Ff%2FLFfuLp92BDF3PyJ%2FCa9qUGZ9yx9%2FW0B5aTk43HvhG91RW0WqmawOsbZucVyhcX%2B7Joyc345YIHSA24bL1HdCr%2Bl0n6eVb9a7jMlEmj2k%2FKHEzPlkNXwuCU5eZy9LNRZ6qempFyzlk4nM%2FnP%2BADjaJVoOiyJuOlNY%2FRV1tTVq0TgF6yGLsvz%2BB09Gq5fUxv%2BQmGQgBNmYwGyy%2FgZeu5Lj705Ro83ovFqv6sn%2F%2F6T7C%2BaeIk4yuNoiqSNoYs7vpIr0JKlSCnqBrWz5CvYV5LoUSXGUZwEl0hosg1d%2F25ommaE4xxa6IQifdz0rOLfWyMJ7j8bwGOqUBrHCjMA6YFxdgl7m3m0BejBS1czwLAYaFbe8RNsPB10YaZ9D651v%2FhdYu9KDvy9pphLGxH6LDiHdSNrwTJJRVNU%2B9uaPJhK3D3I6tzMKMqZxcbfvQ1eIZgQhbaez1SPxWuIHTIaOcetf9fcYzKD6FQE%2BFssH70QQ72%2B4sNSqvpXnsyrD4q6c4nDmslWwwtRawyFHOjtCeRrFWBPsrgXtvg6hd8gR%2B&X-Amz-Signature=f9ecb28886b0a445b7b7b3ec0263edaf2bb0e2b8b17e998973d1ab77fff0cf17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
