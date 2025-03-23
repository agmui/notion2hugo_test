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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6LXLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGQ1zxC44yEc3lHkAhpgDjVSaEU0CXnotOW8Psf5lMQ7AiAZnqMyeqb7G10OyTT3LlrsWCRS79APaoVzVZHyvdqU1CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbgEquCcocTBhewzwKtwDgHTq%2BPM9G2%2FUoJjT7yVJBMhg4Uf4WwjZH%2Fqesyf%2BxiwZngVQTvBuPEpXzlSz6kaoxjdInyYQjeoWrlYDwaDxB%2Bi7nYd8I26tkyiaRGxwPyJER6gXH4zY1YnF6BVszdrow8r7UQxq5iiQKjdfqR4gwPhJ1AUGJI4gU3wtXDAqTlMj93o3pTc%2FZ%2FPjdgffDW7SKa8xsH%2FWqQTQL3U6GVO9QhrWUwI0gatcDcjRe7G2dU3KlNV8V1ujxDqJGqPjitwdHbNT%2BPgKXTbKQ1vn7Zz9%2FEuo3pUH5gtJtlkjiKvpKUROlvLvKPCdVXkeX0xb8qpW6qlSXQxkILRWfSvYxWoSQMs5bf6r1tZMjTTvm9S6NHwsZwsxrsukffoeSi8jkbeuwsJK6aCEcumFBZ1WiACxz88Dd48n8OqnOBGhIEDmNbvLfNsnTGRi5vD%2B3fFsB5YxmVS31DI5KqxxXdGJcz2D48FWzMlbjB4x8i74o1NBGNUsdycDCtZ9PzBL0B2ZrjFKXE5TGgwiVuZCA8zRQkM3H2Nkj3vGdRCxTecofbSngsVTzb%2Ba9%2FYPF8c7a19bXDnVmGBwU0p9knHgVoRjOIMm4%2BBlBzglpxkSJYm90BKZjf1WNmS58LujSK%2FYaEAw%2BOL9vgY6pgHMIiUGqBqf59jjDYmqraofxjiravLqT1oPnWJk9lI%2B3DYi92v0Xi4cguHUSd5cNLSDeWUl0ZfS0TQ1ntdsxuiqp04P7C6idMwKkYKhb58kLHAIVB1wOVRcScnbrCRcbYaJpRB72z3VV1oN9VnvnRzSyRA7mPOu7%2BYIRj%2BF845a1yqZ8Q3rJYrxJMB%2BJq2tE6je16CP7JvGw6pJFcW8ESUMz8ltQvLA&X-Amz-Signature=a7e48fa3d369b5bc515d23331b65d89f5444765d953f0bf437a3b9c6e373e491&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6LXLZJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGQ1zxC44yEc3lHkAhpgDjVSaEU0CXnotOW8Psf5lMQ7AiAZnqMyeqb7G10OyTT3LlrsWCRS79APaoVzVZHyvdqU1CqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbgEquCcocTBhewzwKtwDgHTq%2BPM9G2%2FUoJjT7yVJBMhg4Uf4WwjZH%2Fqesyf%2BxiwZngVQTvBuPEpXzlSz6kaoxjdInyYQjeoWrlYDwaDxB%2Bi7nYd8I26tkyiaRGxwPyJER6gXH4zY1YnF6BVszdrow8r7UQxq5iiQKjdfqR4gwPhJ1AUGJI4gU3wtXDAqTlMj93o3pTc%2FZ%2FPjdgffDW7SKa8xsH%2FWqQTQL3U6GVO9QhrWUwI0gatcDcjRe7G2dU3KlNV8V1ujxDqJGqPjitwdHbNT%2BPgKXTbKQ1vn7Zz9%2FEuo3pUH5gtJtlkjiKvpKUROlvLvKPCdVXkeX0xb8qpW6qlSXQxkILRWfSvYxWoSQMs5bf6r1tZMjTTvm9S6NHwsZwsxrsukffoeSi8jkbeuwsJK6aCEcumFBZ1WiACxz88Dd48n8OqnOBGhIEDmNbvLfNsnTGRi5vD%2B3fFsB5YxmVS31DI5KqxxXdGJcz2D48FWzMlbjB4x8i74o1NBGNUsdycDCtZ9PzBL0B2ZrjFKXE5TGgwiVuZCA8zRQkM3H2Nkj3vGdRCxTecofbSngsVTzb%2Ba9%2FYPF8c7a19bXDnVmGBwU0p9knHgVoRjOIMm4%2BBlBzglpxkSJYm90BKZjf1WNmS58LujSK%2FYaEAw%2BOL9vgY6pgHMIiUGqBqf59jjDYmqraofxjiravLqT1oPnWJk9lI%2B3DYi92v0Xi4cguHUSd5cNLSDeWUl0ZfS0TQ1ntdsxuiqp04P7C6idMwKkYKhb58kLHAIVB1wOVRcScnbrCRcbYaJpRB72z3VV1oN9VnvnRzSyRA7mPOu7%2BYIRj%2BF845a1yqZ8Q3rJYrxJMB%2BJq2tE6je16CP7JvGw6pJFcW8ESUMz8ltQvLA&X-Amz-Signature=ce831d4ac4c3543becbe15df53b1970a41cca8aecde04bfbb608a714f7983325&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
