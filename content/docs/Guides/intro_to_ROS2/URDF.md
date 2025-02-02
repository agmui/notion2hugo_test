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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJWHRZ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQeorTcms1SxrAlxuaV4DDKA31mQZzflWSxOMPBW3%2BYAIgW31TbUy%2FU7mfsisquZPmwRB2olY9id8ujBubgalLXiYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFJVdEpE%2B8HxIPSSircA%2BkPJ%2FPRJ%2FRqAAtuzuv7OPRPwmTKGqh2o31vYqTqIuPYoIV6tUpzNk6bOHkBawfSjgKEQ%2FrV1F4d6CCG6wsAeyqlGUw79%2BI9ye3c8v5vo3rhgnDD3QAiluI1NUkgF6GiTB10xfSUlPmerAAHBtPtODMRfn1V%2FeZzy25hsvPzO8iEtrM%2BeTQ6hPdcUGoRl%2FqbBtOptd%2B1dCbOdNnbsduPJ0juHYCAu8XMOv0L35efNRpNqtbgXlqRjp3ETjkwMJaqp6LcxZnAgCMNm0t%2FCH9IAB1V1nMUqSJSgxiUcxVxqatvGxhnd8lh5FRCGcJQVghiLcBonEsOqGrUUfcLUE4EA41yRmLLJ3LjX9iQVmnz%2Fia4%2Fvzfv7kII2E2bNU580zMSBgHdUjs1rLlewn686ntihxQLTYDSIzU7kddVuC3aWQgjOYIL%2B2R%2B0IQntxoW4ahGLvv9I3Gfbd4tQ97y6ilIfsPZFkZvmZqIjFYMq7xn%2Fg3x%2B%2FrUyTATPIZIhrl9P%2BcosRvwBPvSRFTTadF3lEIzHtXxNQ6iW59Ww7qn5lXP1kRKE85LjIXmPEsRsmcHLoSXAlXzVZ8ErOnN%2BfGN%2BQ2Q7YxtT150WDQpPccQgeyq5eFB5C5CkEIpSdLdqeMMPKd%2FLwGOqUBboGFHSkVuRr6uonI7J0QHVAHd69Lg4TIQH%2B1JYkb6l%2Fo9kV7jI4%2BMHJ8dYoKWf3j6bB%2F3JGA12A9yzKzs2TfACo%2Fo41dHvT6p3HcrzTJRSHtZgghoG3X4vWsR9eKRSz%2B0E6QQf9pSgyopsRikbmAxk2aQTr4TV8pdfTRJYqVRlnzoYlB7ex2cDXY0gR6xBBlgpfAXjoyw%2BDKG%2BJgMl6YMZpjL7vC&X-Amz-Signature=af7fe0dc092ba7a8c4a23cdaabb3e59db7b76274d7378a6e67f8fa5006e49e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJWHRZ3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQeorTcms1SxrAlxuaV4DDKA31mQZzflWSxOMPBW3%2BYAIgW31TbUy%2FU7mfsisquZPmwRB2olY9id8ujBubgalLXiYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFJVdEpE%2B8HxIPSSircA%2BkPJ%2FPRJ%2FRqAAtuzuv7OPRPwmTKGqh2o31vYqTqIuPYoIV6tUpzNk6bOHkBawfSjgKEQ%2FrV1F4d6CCG6wsAeyqlGUw79%2BI9ye3c8v5vo3rhgnDD3QAiluI1NUkgF6GiTB10xfSUlPmerAAHBtPtODMRfn1V%2FeZzy25hsvPzO8iEtrM%2BeTQ6hPdcUGoRl%2FqbBtOptd%2B1dCbOdNnbsduPJ0juHYCAu8XMOv0L35efNRpNqtbgXlqRjp3ETjkwMJaqp6LcxZnAgCMNm0t%2FCH9IAB1V1nMUqSJSgxiUcxVxqatvGxhnd8lh5FRCGcJQVghiLcBonEsOqGrUUfcLUE4EA41yRmLLJ3LjX9iQVmnz%2Fia4%2Fvzfv7kII2E2bNU580zMSBgHdUjs1rLlewn686ntihxQLTYDSIzU7kddVuC3aWQgjOYIL%2B2R%2B0IQntxoW4ahGLvv9I3Gfbd4tQ97y6ilIfsPZFkZvmZqIjFYMq7xn%2Fg3x%2B%2FrUyTATPIZIhrl9P%2BcosRvwBPvSRFTTadF3lEIzHtXxNQ6iW59Ww7qn5lXP1kRKE85LjIXmPEsRsmcHLoSXAlXzVZ8ErOnN%2BfGN%2BQ2Q7YxtT150WDQpPccQgeyq5eFB5C5CkEIpSdLdqeMMPKd%2FLwGOqUBboGFHSkVuRr6uonI7J0QHVAHd69Lg4TIQH%2B1JYkb6l%2Fo9kV7jI4%2BMHJ8dYoKWf3j6bB%2F3JGA12A9yzKzs2TfACo%2Fo41dHvT6p3HcrzTJRSHtZgghoG3X4vWsR9eKRSz%2B0E6QQf9pSgyopsRikbmAxk2aQTr4TV8pdfTRJYqVRlnzoYlB7ex2cDXY0gR6xBBlgpfAXjoyw%2BDKG%2BJgMl6YMZpjL7vC&X-Amz-Signature=83e2d7b263fd165ca234f09c8befd58f81548410766a3a39d82356c2ddca115c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
