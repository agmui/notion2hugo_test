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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L4BQRO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBQ7hKWOjqP6%2F0e9GPnEMNzJypu76QXC8K3bpXIWBdMEAiAIOR0THwkNMXF6xp%2F682LLKBwgzA2WwwskXfCwwYaQQiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMiLTLXIKtUH17UNJKtwDIT0XZ3V9zR9eQjab83BOHzKq6nnfps6%2FqnpupEy7Y1iC40QjrFTRI4pcnIN1SqqoQ%2FrGfBXqxE6jHcgdfSlzhLdRJGKHWYQXlh9TI%2F8VtsKO9RYa%2BXzUKTNujNfX6ZffE42DXuuaoLh067Cry6bhwk3YDFtfmcTWDqN8vqXIufS%2FsQgC6lkDYT%2FvlltPzXclu0QScWugCX3ZzBcr0VhUTDyL%2Fbt2AfFnsUi2JQyFia3qNKyLo6MJdz%2Bq99KJqUlb1o1%2F4qHWjeOmoa6I9Prrissk7Q%2B5N4qyMYuwb1BXo4xMuCKnqDDc8Pqv%2FaFNHBi1Aqxo8tgDUJdLPxu2dP6DlxZ62P3l8zONr3L%2BQHtaemTK6jZZQs1NO%2FJL9P1bnTW0ZZul%2F4XEU9Dig5diGve583iG0pFUVrNGIsdn6ejyokowrPUfp%2FnoUde5ieJndKR4TWjRATNmC9kapsOGqnstZp0P5JyJp6%2FJpRZnDK%2FPc3nXktQ5jf3gX5wK2JRrgKuj%2BeQraKm2xVwgXc72EA2e%2B36WpS%2BcKffmXvDEs9UA1SQaC%2BuMTvSbxp9fJl05ejJHt9WsZo9ozc5pmVc6sXcY54B7tHCgLIq2aNV2%2BWSsYclSUADKnaG4T3LOSwgwxeXqwwY6pgFVFjpiqj%2BewFtsVNOBuFW%2FhPWeMpl3zNX4DmYipgQ8MJwUpfOgIOSjnVtUckA5gxyI92KdBHFx5qDzYd2jqwkvuZ4ZM2UhMyjvroAIbjMgRcCGI%2FB5AF7xhh1IT5ih1N5q6GnV%2B5OBmT0AjuGB5CggOn7gH3UcFMP2bKI%2B4XDE611IJ07Hu8nlR5yMpw4IBbdK8aZm4RAznGImd3oKotdoO6QlTL%2BP&X-Amz-Signature=9d6ce5e887e20a50ba2f459115f13911d94b912d6cfa8afab6b653ea177e4b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657L4BQRO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBQ7hKWOjqP6%2F0e9GPnEMNzJypu76QXC8K3bpXIWBdMEAiAIOR0THwkNMXF6xp%2F682LLKBwgzA2WwwskXfCwwYaQQiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMiLTLXIKtUH17UNJKtwDIT0XZ3V9zR9eQjab83BOHzKq6nnfps6%2FqnpupEy7Y1iC40QjrFTRI4pcnIN1SqqoQ%2FrGfBXqxE6jHcgdfSlzhLdRJGKHWYQXlh9TI%2F8VtsKO9RYa%2BXzUKTNujNfX6ZffE42DXuuaoLh067Cry6bhwk3YDFtfmcTWDqN8vqXIufS%2FsQgC6lkDYT%2FvlltPzXclu0QScWugCX3ZzBcr0VhUTDyL%2Fbt2AfFnsUi2JQyFia3qNKyLo6MJdz%2Bq99KJqUlb1o1%2F4qHWjeOmoa6I9Prrissk7Q%2B5N4qyMYuwb1BXo4xMuCKnqDDc8Pqv%2FaFNHBi1Aqxo8tgDUJdLPxu2dP6DlxZ62P3l8zONr3L%2BQHtaemTK6jZZQs1NO%2FJL9P1bnTW0ZZul%2F4XEU9Dig5diGve583iG0pFUVrNGIsdn6ejyokowrPUfp%2FnoUde5ieJndKR4TWjRATNmC9kapsOGqnstZp0P5JyJp6%2FJpRZnDK%2FPc3nXktQ5jf3gX5wK2JRrgKuj%2BeQraKm2xVwgXc72EA2e%2B36WpS%2BcKffmXvDEs9UA1SQaC%2BuMTvSbxp9fJl05ejJHt9WsZo9ozc5pmVc6sXcY54B7tHCgLIq2aNV2%2BWSsYclSUADKnaG4T3LOSwgwxeXqwwY6pgFVFjpiqj%2BewFtsVNOBuFW%2FhPWeMpl3zNX4DmYipgQ8MJwUpfOgIOSjnVtUckA5gxyI92KdBHFx5qDzYd2jqwkvuZ4ZM2UhMyjvroAIbjMgRcCGI%2FB5AF7xhh1IT5ih1N5q6GnV%2B5OBmT0AjuGB5CggOn7gH3UcFMP2bKI%2B4XDE611IJ07Hu8nlR5yMpw4IBbdK8aZm4RAznGImd3oKotdoO6QlTL%2BP&X-Amz-Signature=4666f0429d17bb2afb7fcd5bbc1f4c23cf1d236c171821851c4847f355ec8dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
