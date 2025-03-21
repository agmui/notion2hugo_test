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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PPKPQK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFDIrmrQB0ggJuv5jhYuKzCQi6PVMdzCcM9mSrWfWgVVAiEAq5NzJAQqLV1b1lHmRcjqF1%2FV6%2Bk820pqSBnHlwL609MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLMjX%2BWVkUbpb8WxyrcA5HMonmUZkXVY2U9xMUr0PW70Xu7P6w4Bp1jEjv3EQ5Njyin%2FEIhbE3HTFxasheBZi9jPbmm7OBVOiAf7TygfmMnbpeqhWO0PPjcf1zLX1iJqHPft8rN5BxVF5jC1cqTOHKYP8%2BDGvxcK4qRdJH%2Fjup9pDtSRQt2nSqkzrxBAuEWS0DppJcE5xvGCGAm3FNifhzqBR0zU1AI4Cpf9aN8buiovNCmfq53z3dRDEUwuQIN216wsfSdcFYC1xLq6A7cfPe%2B0aWM2KD7mlB9e7hw%2BjIc0Asf2vQd4hNnUKc8akEf8OrkWAni7UB6z5jDPLAaR2ZMipHGuQinpJ7ViFCNB0S7rcXLbqJVjPr2vKjseDuiTfW5xSLztoRF35uIwzzgVoOl6IbmoAPKWAjVCCTQxitKxhsHURCnoyFalRaALVqr1RqxnQhkp9ncCW1MN%2FbFEx5ynxPloljGahkdp5YeSOzq5JXAYZ9dO4nANMdoQfDQP01R7fWRkrEqwK6uZJwXZr2jhVw8rS8HhvKPiw9AWqxQQG%2FrsKuW8bHMwaCjiNFq2p7ix0xIUzt5IuQSm09JAQFEn5VP9vPkRZDcVhbPn2AQAefDYEe1laC2gSEbl2QvsOmIQQd42pI5rpuSMPXX974GOqUBaDk8zHeVBfOBcp3S3%2FUkXD3NbAvfq0KlOA%2FJaGBbZu6lDUaVpZ9jUDqPCELUiZ98TGUOsyMmQjpUfIBqsJJQOqjXuRl9Y5ELtjFTipNsFtCKCkCmeM9Rezl%2FiTcWVUxr4C%2Fxh1WS2yYVYu1C6CVAwEkGnWMpR%2BW5%2FF2G0IumavF8WqzOWPkwKOgmLGdt1SgwRrIYu%2FKssOsAS%2BjWiuZyOraBNWGL&X-Amz-Signature=b0eaf01cb3ec068b839e6a4b6890b937b360bbd534c8067a94e62d9b698aec8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3PPKPQK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFDIrmrQB0ggJuv5jhYuKzCQi6PVMdzCcM9mSrWfWgVVAiEAq5NzJAQqLV1b1lHmRcjqF1%2FV6%2Bk820pqSBnHlwL609MqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLMjX%2BWVkUbpb8WxyrcA5HMonmUZkXVY2U9xMUr0PW70Xu7P6w4Bp1jEjv3EQ5Njyin%2FEIhbE3HTFxasheBZi9jPbmm7OBVOiAf7TygfmMnbpeqhWO0PPjcf1zLX1iJqHPft8rN5BxVF5jC1cqTOHKYP8%2BDGvxcK4qRdJH%2Fjup9pDtSRQt2nSqkzrxBAuEWS0DppJcE5xvGCGAm3FNifhzqBR0zU1AI4Cpf9aN8buiovNCmfq53z3dRDEUwuQIN216wsfSdcFYC1xLq6A7cfPe%2B0aWM2KD7mlB9e7hw%2BjIc0Asf2vQd4hNnUKc8akEf8OrkWAni7UB6z5jDPLAaR2ZMipHGuQinpJ7ViFCNB0S7rcXLbqJVjPr2vKjseDuiTfW5xSLztoRF35uIwzzgVoOl6IbmoAPKWAjVCCTQxitKxhsHURCnoyFalRaALVqr1RqxnQhkp9ncCW1MN%2FbFEx5ynxPloljGahkdp5YeSOzq5JXAYZ9dO4nANMdoQfDQP01R7fWRkrEqwK6uZJwXZr2jhVw8rS8HhvKPiw9AWqxQQG%2FrsKuW8bHMwaCjiNFq2p7ix0xIUzt5IuQSm09JAQFEn5VP9vPkRZDcVhbPn2AQAefDYEe1laC2gSEbl2QvsOmIQQd42pI5rpuSMPXX974GOqUBaDk8zHeVBfOBcp3S3%2FUkXD3NbAvfq0KlOA%2FJaGBbZu6lDUaVpZ9jUDqPCELUiZ98TGUOsyMmQjpUfIBqsJJQOqjXuRl9Y5ELtjFTipNsFtCKCkCmeM9Rezl%2FiTcWVUxr4C%2Fxh1WS2yYVYu1C6CVAwEkGnWMpR%2BW5%2FF2G0IumavF8WqzOWPkwKOgmLGdt1SgwRrIYu%2FKssOsAS%2BjWiuZyOraBNWGL&X-Amz-Signature=4f66ac41d28b0be350f963bc11a8e73c1c193e0ff9253b5e7baaa24319af532d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
