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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQGA4WR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC59LNV2kLrUQb%2FGGPOzuDq%2FxzT0JkcpEM0UhYSvHtl2AiBv8p9sxUxA9SLhYM2N%2F4XJtU5%2BGThRqACQr8EKx2dGIiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDmyrjabSQ9Lk7YNZKtwD9bY0YcIDz20W6BKcxtMwnuhFO0prkKPSbsA65p%2F5aIjP8vmpoRd0nnXI0BR5JF4wYYe%2FDXdBt6EkJcIwOZsRRNXnZK6%2Fd5pIYBXHjWIMbdiJP4djlwn41FXAZs8Cwf%2BiFxTAwQEQIivsDyHI1fBSqq0VvX4bfTfvJOqB3k0sW9lB30iqxNXEXZayBNabH6Tqcb68nXFz6pAF3NgAOLBp1WtKHO%2BoSaa9Xa5DwuWs0vUBaUZEEs6I34sb1gHJILmc0YvSzhResliO%2BnDimggIcRSwullNouc1jJutwL7Nk%2F9SZZDPUN%2Bqidk94RY2Z37njMY89icFiubMRthBhtz0bZCCSV1fhIpadlbJOV5qLKrvukJVC0Nn9KwSdDqcuZY96LMN5AUO%2BJTdaYUeR8y0ye4Cvw%2BqtYRBlFVKGVt%2F%2BAqaM5gWypL3MUFOH9Xu5QRO8ev9RwQwieVMfLcQW%2B3694jGdKYF7K4egaBGqvxGPlKD8gg5nirvyKUzTfWnAzusVoH7xeSymSIiaIhSMJYHPFZ3V59KP2kLVPXwAxeBVrlWwsOx4FAvxybYFBw%2BFn37m7dqUwzyD47IULmnSVtCnbxxew0uIFqXdPBWEpZRvlb27dZKCsKcXZn1ByEw%2BqfovwY6pgFa3vUeyCgiKRhuN33G1b7N%2FNP1XYEw8CSrjhkTydoPezzkaDGrzdgL5zOWfAQbqC6dw0QXXLQpGIY1vAL5TwcWLmrjpZup1HwR%2FsX66I9fQSaH3170WGxV8uBmYlHeQDptaDov8i3YV%2FuSZtJS%2FzzRBao4%2BMK44eGWJTXbQzFz7b9pngo%2Fears%2FI8xdAmOp2kHFq6%2FGyWvcXHvLOWDln9YZoqni3eB&X-Amz-Signature=b91d4b892aedc7a979b91c52f8aee7e06135e6278fa287871f9ca8761c65451c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQGA4WR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC59LNV2kLrUQb%2FGGPOzuDq%2FxzT0JkcpEM0UhYSvHtl2AiBv8p9sxUxA9SLhYM2N%2F4XJtU5%2BGThRqACQr8EKx2dGIiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDmyrjabSQ9Lk7YNZKtwD9bY0YcIDz20W6BKcxtMwnuhFO0prkKPSbsA65p%2F5aIjP8vmpoRd0nnXI0BR5JF4wYYe%2FDXdBt6EkJcIwOZsRRNXnZK6%2Fd5pIYBXHjWIMbdiJP4djlwn41FXAZs8Cwf%2BiFxTAwQEQIivsDyHI1fBSqq0VvX4bfTfvJOqB3k0sW9lB30iqxNXEXZayBNabH6Tqcb68nXFz6pAF3NgAOLBp1WtKHO%2BoSaa9Xa5DwuWs0vUBaUZEEs6I34sb1gHJILmc0YvSzhResliO%2BnDimggIcRSwullNouc1jJutwL7Nk%2F9SZZDPUN%2Bqidk94RY2Z37njMY89icFiubMRthBhtz0bZCCSV1fhIpadlbJOV5qLKrvukJVC0Nn9KwSdDqcuZY96LMN5AUO%2BJTdaYUeR8y0ye4Cvw%2BqtYRBlFVKGVt%2F%2BAqaM5gWypL3MUFOH9Xu5QRO8ev9RwQwieVMfLcQW%2B3694jGdKYF7K4egaBGqvxGPlKD8gg5nirvyKUzTfWnAzusVoH7xeSymSIiaIhSMJYHPFZ3V59KP2kLVPXwAxeBVrlWwsOx4FAvxybYFBw%2BFn37m7dqUwzyD47IULmnSVtCnbxxew0uIFqXdPBWEpZRvlb27dZKCsKcXZn1ByEw%2BqfovwY6pgFa3vUeyCgiKRhuN33G1b7N%2FNP1XYEw8CSrjhkTydoPezzkaDGrzdgL5zOWfAQbqC6dw0QXXLQpGIY1vAL5TwcWLmrjpZup1HwR%2FsX66I9fQSaH3170WGxV8uBmYlHeQDptaDov8i3YV%2FuSZtJS%2FzzRBao4%2BMK44eGWJTXbQzFz7b9pngo%2Fears%2FI8xdAmOp2kHFq6%2FGyWvcXHvLOWDln9YZoqni3eB&X-Amz-Signature=0821b39d0ac214486c40aed0de30eb0c32ecfde10d3e5f0e04cbd6a35e3b6f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
