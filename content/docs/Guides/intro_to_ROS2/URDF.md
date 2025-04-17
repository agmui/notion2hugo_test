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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKYDZLM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0Y1pdnrlNnpPwxXSZ8WJMocJyWUGpH%2BNPoPLMOdHQwIhAIhgouQQEjD%2FTL3dYIwEq2g9LPaVyilNUn5BFh%2FLL1ZtKv8DCFEQABoMNjM3NDIzMTgzODA1Igx437k9w%2F3DKz%2F87wkq3ANAYmiZ%2FdzP1cYOEZ%2Fyuy99RXDCg1YSzEf8J3R%2BLwjrLtxrfzxEVEz0rAFXmcsOHCBq%2FCCGCmNpLJEDK5xb17GRrSFh0aeXxPQfdmjbeU%2F4vO2Vde0taQwHIIraX1oEcqJdpBtu92Oqt4M1kqlbfUCC8z%2FwKvYPJyZmY4sNBAFzwkMtswMpn921zhmFjTuqVctN0HligqYovDZeyx2wOdaEgM3v73%2Fg1xELyu40KZlPAVwrvGQ3pZAuc1m0DbGQPtvoTqJ6gTsF3FQ9zPhk%2B6lX9CstSZGP9ET%2Fdn9R3Qimfz2pTyzFD%2BqRjYnp1Dp38JrKJpVrPSmc1R1fznog%2FMzSLqWznQvNC75TUcahAt0e6UWtr2Y2wlpMofNH71zriHmQiXiq3xM59KGcrTmVR48l%2FKCjVdQABJMUFOTRWRqoC%2FigdUrZgG5Qk6W5COQCWz6yPL%2FKx01SXfBqV2L2WEqxq0IJRzgccTNTWVUJqjlvpf3xkYBFoziCvXyErjaON0RSXvPdcf8KgTwl%2B%2BVOkN1nLPZ5GqxOM6T4uUbjL1u0aeGEDm194vqjPGWktgYpe2GxPd%2BqJ7pyEt18Gmj7xjKg8d2fxf0envp8O8INgf9Vw8kNsWTwuWjTTWXvejDTkoHABjqkAR24q39CPlSUTmuGoOd6JjrhlMqYTyqH1g3Z8gyTGEYkqWdF1Oq7tpBDTstdCWQk8nGkOAD95XeatNfUPVQXlQ50C4Ei6bYx3UeIWyqUyjNB5K0K3AoSHyOf75993xAXURobAl3I%2FL%2FNGwq2wpmK4%2FVHbWU8fu7fJKvnC%2BjeA2SolmV5mTWM08pWNr65jhcC2aMXmjU2Cs64TNXFNI64C84GPmvd&X-Amz-Signature=28ec98c1bc8e38763ae732df7dbae6808990375b53bc58d6370a1416d848fd8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SKYDZLM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0Y1pdnrlNnpPwxXSZ8WJMocJyWUGpH%2BNPoPLMOdHQwIhAIhgouQQEjD%2FTL3dYIwEq2g9LPaVyilNUn5BFh%2FLL1ZtKv8DCFEQABoMNjM3NDIzMTgzODA1Igx437k9w%2F3DKz%2F87wkq3ANAYmiZ%2FdzP1cYOEZ%2Fyuy99RXDCg1YSzEf8J3R%2BLwjrLtxrfzxEVEz0rAFXmcsOHCBq%2FCCGCmNpLJEDK5xb17GRrSFh0aeXxPQfdmjbeU%2F4vO2Vde0taQwHIIraX1oEcqJdpBtu92Oqt4M1kqlbfUCC8z%2FwKvYPJyZmY4sNBAFzwkMtswMpn921zhmFjTuqVctN0HligqYovDZeyx2wOdaEgM3v73%2Fg1xELyu40KZlPAVwrvGQ3pZAuc1m0DbGQPtvoTqJ6gTsF3FQ9zPhk%2B6lX9CstSZGP9ET%2Fdn9R3Qimfz2pTyzFD%2BqRjYnp1Dp38JrKJpVrPSmc1R1fznog%2FMzSLqWznQvNC75TUcahAt0e6UWtr2Y2wlpMofNH71zriHmQiXiq3xM59KGcrTmVR48l%2FKCjVdQABJMUFOTRWRqoC%2FigdUrZgG5Qk6W5COQCWz6yPL%2FKx01SXfBqV2L2WEqxq0IJRzgccTNTWVUJqjlvpf3xkYBFoziCvXyErjaON0RSXvPdcf8KgTwl%2B%2BVOkN1nLPZ5GqxOM6T4uUbjL1u0aeGEDm194vqjPGWktgYpe2GxPd%2BqJ7pyEt18Gmj7xjKg8d2fxf0envp8O8INgf9Vw8kNsWTwuWjTTWXvejDTkoHABjqkAR24q39CPlSUTmuGoOd6JjrhlMqYTyqH1g3Z8gyTGEYkqWdF1Oq7tpBDTstdCWQk8nGkOAD95XeatNfUPVQXlQ50C4Ei6bYx3UeIWyqUyjNB5K0K3AoSHyOf75993xAXURobAl3I%2FL%2FNGwq2wpmK4%2FVHbWU8fu7fJKvnC%2BjeA2SolmV5mTWM08pWNr65jhcC2aMXmjU2Cs64TNXFNI64C84GPmvd&X-Amz-Signature=05e993493dcada7a36ed0f7a7eb059522801f1e8ba6e4c664f4c532aab9d69b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
