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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LD6H5X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FhhhMzyRe%2FQI5sNZsNeR%2BwB%2Fv5zgjvVbIgq1Yyny4gIgdVkW8%2BqfcV7fAzz7uOT7WSvlHxj1RJhQHGQkorPx4RAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhwDMlpM8ACBD4FnSrcA8cevmHh2lRD3EigDAY94mgOpH%2F7m40m6LaW3VuR3YZUX%2FWPLA5B0kwBNbV19guMCisu3ysbLKB0i1w%2FMQZ4bd3JU0W%2BP1ojISjjH8JxufhwNbeX1z78upabuTeiQD46MUx1jTbjHQO8DVgR2lDTMDMExpuj47K43%2FVNPKOyDsaIwtJsI68KidUjNRFWGP3EAHi8yI%2FJ6lk7Azsw1miRuYS0X5Lte73VUDFzo4lKr2qmHFc0li%2FO%2FKu6XBrx%2BxCazzjIKWvPWybaiF9obSHSnuzqdpfrQv8YeClpEwyn7txikV76FGi9qWEvjVbqXVHbLg%2FD0y3Xpjz55bbhDYluXFzq9Irs4xYt%2FXBejBzzh1Q0ALUoaVVLUAYX1WXbyn7S7wlJI4vYQHgi2YAdn2DDG2CCtO5OEVG8H60ILW8PMJz17A8tsguIrOs3l4wYph9tkwG%2FY4MjVJWINj6JARHxmTTwrIr2bSoFhYGFR1k8aCmKpO%2BpO0OJh6mjnK6Nv%2BFtX2i0zHP2qmszG3xEyp9kGcnnA%2BV5eQEXqefYW4m1a4suUZf3jgTJ3WX2AGUTu4BUm6N4z4y%2BaRIDdx4KjqwW9hlqetKU2o%2F5Wq8M%2BQkCONSu2nFUDARhaO252g8dMPOotL0GOqUBojj0e4Td1xb5cEbcIxo2AmpTB5zKXvLKCjQwRs5jZuTnRyqhWBkSCvNFltB5fzWE2wxPuRsV93nnZm4AiZ4%2FWmMazTCAhG2zHs9n2udkq9KzG9swJZoCHjibojzO8YvJjoEVVPcX3RS9RQ4STUpzcRZWPDaRruIOLTCND9cdVKCNiz94GLhgfwP2blxm0TAKTy0NqHGW%2FF1yVw6z%2FcscmHLSZcYk&X-Amz-Signature=2051f2d8c54a18096ee3f939858ff06d54e2f5717bc45654510b6a04b8236c61&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LD6H5X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FhhhMzyRe%2FQI5sNZsNeR%2BwB%2Fv5zgjvVbIgq1Yyny4gIgdVkW8%2BqfcV7fAzz7uOT7WSvlHxj1RJhQHGQkorPx4RAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhwDMlpM8ACBD4FnSrcA8cevmHh2lRD3EigDAY94mgOpH%2F7m40m6LaW3VuR3YZUX%2FWPLA5B0kwBNbV19guMCisu3ysbLKB0i1w%2FMQZ4bd3JU0W%2BP1ojISjjH8JxufhwNbeX1z78upabuTeiQD46MUx1jTbjHQO8DVgR2lDTMDMExpuj47K43%2FVNPKOyDsaIwtJsI68KidUjNRFWGP3EAHi8yI%2FJ6lk7Azsw1miRuYS0X5Lte73VUDFzo4lKr2qmHFc0li%2FO%2FKu6XBrx%2BxCazzjIKWvPWybaiF9obSHSnuzqdpfrQv8YeClpEwyn7txikV76FGi9qWEvjVbqXVHbLg%2FD0y3Xpjz55bbhDYluXFzq9Irs4xYt%2FXBejBzzh1Q0ALUoaVVLUAYX1WXbyn7S7wlJI4vYQHgi2YAdn2DDG2CCtO5OEVG8H60ILW8PMJz17A8tsguIrOs3l4wYph9tkwG%2FY4MjVJWINj6JARHxmTTwrIr2bSoFhYGFR1k8aCmKpO%2BpO0OJh6mjnK6Nv%2BFtX2i0zHP2qmszG3xEyp9kGcnnA%2BV5eQEXqefYW4m1a4suUZf3jgTJ3WX2AGUTu4BUm6N4z4y%2BaRIDdx4KjqwW9hlqetKU2o%2F5Wq8M%2BQkCONSu2nFUDARhaO252g8dMPOotL0GOqUBojj0e4Td1xb5cEbcIxo2AmpTB5zKXvLKCjQwRs5jZuTnRyqhWBkSCvNFltB5fzWE2wxPuRsV93nnZm4AiZ4%2FWmMazTCAhG2zHs9n2udkq9KzG9swJZoCHjibojzO8YvJjoEVVPcX3RS9RQ4STUpzcRZWPDaRruIOLTCND9cdVKCNiz94GLhgfwP2blxm0TAKTy0NqHGW%2FF1yVw6z%2FcscmHLSZcYk&X-Amz-Signature=1236db0342c935a9ef3f4e07b6ca35073d57f61fe428b7b16bb94367fbdcc578&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
