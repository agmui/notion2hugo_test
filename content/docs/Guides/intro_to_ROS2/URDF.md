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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXCR4HL%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCD%2BS2Wc0FcNqCZxcGvN%2FHHgjPcLZ%2BUfSDQJFmusBkC3gIhANusN2KSWW6%2FXAhdNowJoALk51Ak5ZQsZJ4wYvf40PGkKv8DCH8QABoMNjM3NDIzMTgzODA1IgywePVo8JTV6F02PXQq3AMp6VNMwdJlH5fnCf8LmtXhOOccQJewZ4LLd3BE1FpEW6eHwXrirT50D%2FVIZ8R0jqe64WF5RdXVYn1wMO7m6OfCk9ya55KdAI6HOvprOfV48yoxUY1II8mw0uhy%2FmVoonUnZdnqdDJM%2BGymvC9%2FJwub8zmODgvEeeLGpoNGwnuRgPUo6mtNQB9AAolTBe3QfVZgjVosuvyX4f0kkYm8zaMwyd2rW5AmrmzQKHulCOwU1ZxO5HOWt9pEhSFDuxV1rF5UjskvyGKDP%2Bjufj%2FODllozGB8abDmAwAiaQL6NCT71aUwxzvZt2sj%2B7aM3oNbN%2FfMBu%2FWzQ0zWjk%2FIJ8kQkHIPM11rkmemYQ53a2N%2FSp5HHH%2BvOHw5T%2B4PyR57aN7ndA76OllU04uIL8eBPRHGnl%2BP2Ejzwi4Ak%2BE751iA3tmVg5oZ7SaJYSv27sCOuXTg4c8qntKjJ%2FEESxM2eFjgonmGmE8%2FRfZmG0FxBU4M2EdwCQnBjutPK9lFauj6PfINiuQG%2FcLNt2rT7ev%2FHuCFah0LCpDBdFtFmIPQE7W59nu13%2BLgQFjo0UWglEoJg4%2FddN7j8%2FqSKZKOuneGtakj0mjb%2ByF9%2FA7GSTuDtJhhFqUg84gzrKfpzdc3GayITCrgJq9BjqkATMQ1%2BgWELG1cJum9MQ1Ta6Chk2Q5Mf32UAT3nRUehNbuFuVvLCtX79%2BhE0I8Xk2A4%2FrNE9%2FsFtl4vXwyMH10liPtd8La5ba6Fk%2Bz10cyVNeXXn2Nkriaol0uCPyonP6mMZBene13kaqNNzCiuN5mMFpJrVLiO34oXsa67AT0uNDtdd58F7oXMHDiQaYsUSiAtgNIyxLof95VB1cTJHEIsKf6UXd&X-Amz-Signature=737eaf89369c452957bac0c3b17a724e84e0eb2169a8d8350d926df0d3b0eefd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXCR4HL%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCD%2BS2Wc0FcNqCZxcGvN%2FHHgjPcLZ%2BUfSDQJFmusBkC3gIhANusN2KSWW6%2FXAhdNowJoALk51Ak5ZQsZJ4wYvf40PGkKv8DCH8QABoMNjM3NDIzMTgzODA1IgywePVo8JTV6F02PXQq3AMp6VNMwdJlH5fnCf8LmtXhOOccQJewZ4LLd3BE1FpEW6eHwXrirT50D%2FVIZ8R0jqe64WF5RdXVYn1wMO7m6OfCk9ya55KdAI6HOvprOfV48yoxUY1II8mw0uhy%2FmVoonUnZdnqdDJM%2BGymvC9%2FJwub8zmODgvEeeLGpoNGwnuRgPUo6mtNQB9AAolTBe3QfVZgjVosuvyX4f0kkYm8zaMwyd2rW5AmrmzQKHulCOwU1ZxO5HOWt9pEhSFDuxV1rF5UjskvyGKDP%2Bjufj%2FODllozGB8abDmAwAiaQL6NCT71aUwxzvZt2sj%2B7aM3oNbN%2FfMBu%2FWzQ0zWjk%2FIJ8kQkHIPM11rkmemYQ53a2N%2FSp5HHH%2BvOHw5T%2B4PyR57aN7ndA76OllU04uIL8eBPRHGnl%2BP2Ejzwi4Ak%2BE751iA3tmVg5oZ7SaJYSv27sCOuXTg4c8qntKjJ%2FEESxM2eFjgonmGmE8%2FRfZmG0FxBU4M2EdwCQnBjutPK9lFauj6PfINiuQG%2FcLNt2rT7ev%2FHuCFah0LCpDBdFtFmIPQE7W59nu13%2BLgQFjo0UWglEoJg4%2FddN7j8%2FqSKZKOuneGtakj0mjb%2ByF9%2FA7GSTuDtJhhFqUg84gzrKfpzdc3GayITCrgJq9BjqkATMQ1%2BgWELG1cJum9MQ1Ta6Chk2Q5Mf32UAT3nRUehNbuFuVvLCtX79%2BhE0I8Xk2A4%2FrNE9%2FsFtl4vXwyMH10liPtd8La5ba6Fk%2Bz10cyVNeXXn2Nkriaol0uCPyonP6mMZBene13kaqNNzCiuN5mMFpJrVLiO34oXsa67AT0uNDtdd58F7oXMHDiQaYsUSiAtgNIyxLof95VB1cTJHEIsKf6UXd&X-Amz-Signature=b7b8405b73b4a0ca1819cfc37f09708240a8830e5998d8523d3ea775715670f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
