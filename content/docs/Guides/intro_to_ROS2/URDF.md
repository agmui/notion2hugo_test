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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGS4YOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRmhpHMZ%2B5lmnl2lRBl6UAO1D2dRE8o6AswzAfYtJKKAIhAOoTUPVUPBd02f1TMwmbD9mAN6ODBP30aCg4cg7qtGwsKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0UTkFnoOMoN1MKwUq3AM%2BJVB5BHfys%2Bj5uEOLPpQPYkMpOV1U3uz6kPmjtJ1mEKjdSI3wqAl9FvaWIgjNC8qp%2FSMCOV9G4vxmpLnsvX%2F3k6%2B%2Fkp8oT7HGQNYnAlJqIZ75oth6z7vj6vaXGqZoIe8IUoU%2F5sosz9%2FbUNO%2FsZj2J2cIWtQz4DTUfmOpzBU7%2Fut0qXaMxGRx1FTTDo1ttXw8lALSqMD5NDsqKikuXkUyiEmyRoKruReaMReFRn10p0qXhv%2Fftp%2BjA4GxARVgtbf2T6nokciEZf5zZ9AWQ45PnrFzmGjX2l%2F3eU3Ax1s7lKL3ErLxHI9ZrWS3%2FMnrncqgl1HhCjsLsX8eWU9I68r1S5ucCAKxZ5TvlR9J1Gl3hngSNWuE%2FMQ37VxA9X%2FMhjS5mT6uuEd%2B8%2BntO7CRUqI2lr7GkX5JwFFtKULDEBht1Wg97yZmfTwJwhvOV%2FPTqEn7q4K3XfLB%2F7CLCC8YfdgGaGnCN1zh6NUEsRONcOX6MM6ZtxhlriqwV%2B%2FR%2FruHLw0HRNeUZhoiLY1YHcJ18Q9pOeT6ua%2FvN1lXT%2BXfAYD7EQn2kU4ywR8fgCsLQdU19Yw%2ByiscUmN1ml2aClYLUQPuYZu%2BVwm2aXoGhoN%2BoZJlQwr%2Bj3tFaLNNbJm6tTDu7%2FjABjqkATe%2BzhTaZUUNhr%2BoAhaQgIZ031AbyA7xMhA8%2F%2FJV3iBvOridmJqFUpOqqTpSVx%2B2ftMDHW4rO2azDD69FbJb8%2FojKJ5gGaB%2F8ET6yH1tEp%2BE8ze21i%2F%2Bs9%2BCSO2bWkA3im0MhDWGx1f3XoQqZcgp%2BaEduiH61rNprXMQjLFV0UWke5O%2FmNqDi7%2BTtoeFco1VeY5IsucsvpniHr%2FqEDHQcfrRK%2B6W&X-Amz-Signature=7a82355ec94972243c10d38894fea876c9df5c73c418590a37749cdfecf3eb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGS4YOR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRmhpHMZ%2B5lmnl2lRBl6UAO1D2dRE8o6AswzAfYtJKKAIhAOoTUPVUPBd02f1TMwmbD9mAN6ODBP30aCg4cg7qtGwsKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0UTkFnoOMoN1MKwUq3AM%2BJVB5BHfys%2Bj5uEOLPpQPYkMpOV1U3uz6kPmjtJ1mEKjdSI3wqAl9FvaWIgjNC8qp%2FSMCOV9G4vxmpLnsvX%2F3k6%2B%2Fkp8oT7HGQNYnAlJqIZ75oth6z7vj6vaXGqZoIe8IUoU%2F5sosz9%2FbUNO%2FsZj2J2cIWtQz4DTUfmOpzBU7%2Fut0qXaMxGRx1FTTDo1ttXw8lALSqMD5NDsqKikuXkUyiEmyRoKruReaMReFRn10p0qXhv%2Fftp%2BjA4GxARVgtbf2T6nokciEZf5zZ9AWQ45PnrFzmGjX2l%2F3eU3Ax1s7lKL3ErLxHI9ZrWS3%2FMnrncqgl1HhCjsLsX8eWU9I68r1S5ucCAKxZ5TvlR9J1Gl3hngSNWuE%2FMQ37VxA9X%2FMhjS5mT6uuEd%2B8%2BntO7CRUqI2lr7GkX5JwFFtKULDEBht1Wg97yZmfTwJwhvOV%2FPTqEn7q4K3XfLB%2F7CLCC8YfdgGaGnCN1zh6NUEsRONcOX6MM6ZtxhlriqwV%2B%2FR%2FruHLw0HRNeUZhoiLY1YHcJ18Q9pOeT6ua%2FvN1lXT%2BXfAYD7EQn2kU4ywR8fgCsLQdU19Yw%2ByiscUmN1ml2aClYLUQPuYZu%2BVwm2aXoGhoN%2BoZJlQwr%2Bj3tFaLNNbJm6tTDu7%2FjABjqkATe%2BzhTaZUUNhr%2BoAhaQgIZ031AbyA7xMhA8%2F%2FJV3iBvOridmJqFUpOqqTpSVx%2B2ftMDHW4rO2azDD69FbJb8%2FojKJ5gGaB%2F8ET6yH1tEp%2BE8ze21i%2F%2Bs9%2BCSO2bWkA3im0MhDWGx1f3XoQqZcgp%2BaEduiH61rNprXMQjLFV0UWke5O%2FmNqDi7%2BTtoeFco1VeY5IsucsvpniHr%2FqEDHQcfrRK%2B6W&X-Amz-Signature=1709dafe9f1214aab132c9257f4a357b2687e58d4f1b0451fe6fd43718d9ea5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
