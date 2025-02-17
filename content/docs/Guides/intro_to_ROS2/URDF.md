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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMN4SEC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIC21QShErm2GBkP4%2FEFnlC7MAHeBcRyeof8W93AH4uKXAiEA60iXZndJjgUZmo9jFOa10PoRGFwLiZUhVqqDUZq6po0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXyu2Al0PcgoPjV4SrcAzZ%2FPnNcJ9KPsI1KU184hCejjuJgaAl6a33sElEaiWPH5vXM1z5fcPVUDPtf%2FxUJfGNmqxI8uud9gql5EoCqNOOCnrkcAubh2LL5ctEgv7H9FljQ2FY4WuD%2BmJaVMcqvl%2Frv33xKjDhjjsLAKvqXYaW7nPFM0OLd1Eq%2F5dbt5P2Fyy2qEOjfFERKHTZlqwCIy8BWHIjxIiZLFWzgl5khsbYUfgnJjpj1hZ0%2Fe3Jy1p0tqPjBKGQ8kuhSo77oZ1P0pQg3FPVjq8Wd3yQf4BEBmQgA8jjQgwxICOL80hNRAAy%2FrXCJAlHErqpxuQdCVLo61VS8ivZFTcu3S%2BcuDwK%2FIWV46KWjSRZIFW4d0rihet%2BCB87akiGpAhytrEU%2FZFnEPwJdpmmIHFnSSbSFgsXgySrGGv6d1t1ZDo8Y%2Fue8b0cnkfh9ljtVWi5CGHKGpjDMtLUzCjph5i%2FPksxv0FLAtP%2FGAx4rm1vy9cgVtnHhxQa32mCFDTEmdeRqGy6Lkf1gz07xbB3zVar0YxxwFLl5Gn6VKXGp7mCCEIWBHTFdUINFYGdSfn04kx2jwV1oc1ZUAbtbGqueym7MoSzo6u4DaK1CYclBcKqkwX%2Fz1a1WvYVSWzmabqiXOLMI2GSiMMKWzb0GOqUBMcqQoFKDTsnjtpTnQzPNkBRW8sn2bk8jUehUo2NJh1RvnROA6OlzjFfAqn%2B4xMs%2Fe8EYX%2F6Xi%2BOCAj%2FJ47uDr8%2B1EHo8yNMvhLunR%2FT%2BDAdbZ3eyr5Qclle8bK20QZGwCZqi%2Bd%2F%2BVPr7w3yzUjPsWmMkwtkV0FvxJep2tsIzMLJ8Y4wjUyKwJQdkoOoMF8icAkJn%2FJ23qh5wL3mKyxYK9kwRI1tr&X-Amz-Signature=c26bc7a70b76ec2682237c6d0035bd1be685b955a291826524999e7296161180&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMN4SEC%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIC21QShErm2GBkP4%2FEFnlC7MAHeBcRyeof8W93AH4uKXAiEA60iXZndJjgUZmo9jFOa10PoRGFwLiZUhVqqDUZq6po0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXyu2Al0PcgoPjV4SrcAzZ%2FPnNcJ9KPsI1KU184hCejjuJgaAl6a33sElEaiWPH5vXM1z5fcPVUDPtf%2FxUJfGNmqxI8uud9gql5EoCqNOOCnrkcAubh2LL5ctEgv7H9FljQ2FY4WuD%2BmJaVMcqvl%2Frv33xKjDhjjsLAKvqXYaW7nPFM0OLd1Eq%2F5dbt5P2Fyy2qEOjfFERKHTZlqwCIy8BWHIjxIiZLFWzgl5khsbYUfgnJjpj1hZ0%2Fe3Jy1p0tqPjBKGQ8kuhSo77oZ1P0pQg3FPVjq8Wd3yQf4BEBmQgA8jjQgwxICOL80hNRAAy%2FrXCJAlHErqpxuQdCVLo61VS8ivZFTcu3S%2BcuDwK%2FIWV46KWjSRZIFW4d0rihet%2BCB87akiGpAhytrEU%2FZFnEPwJdpmmIHFnSSbSFgsXgySrGGv6d1t1ZDo8Y%2Fue8b0cnkfh9ljtVWi5CGHKGpjDMtLUzCjph5i%2FPksxv0FLAtP%2FGAx4rm1vy9cgVtnHhxQa32mCFDTEmdeRqGy6Lkf1gz07xbB3zVar0YxxwFLl5Gn6VKXGp7mCCEIWBHTFdUINFYGdSfn04kx2jwV1oc1ZUAbtbGqueym7MoSzo6u4DaK1CYclBcKqkwX%2Fz1a1WvYVSWzmabqiXOLMI2GSiMMKWzb0GOqUBMcqQoFKDTsnjtpTnQzPNkBRW8sn2bk8jUehUo2NJh1RvnROA6OlzjFfAqn%2B4xMs%2Fe8EYX%2F6Xi%2BOCAj%2FJ47uDr8%2B1EHo8yNMvhLunR%2FT%2BDAdbZ3eyr5Qclle8bK20QZGwCZqi%2Bd%2F%2BVPr7w3yzUjPsWmMkwtkV0FvxJep2tsIzMLJ8Y4wjUyKwJQdkoOoMF8icAkJn%2FJ23qh5wL3mKyxYK9kwRI1tr&X-Amz-Signature=af22671d40f37940998d5e5b1402b8736ca79fd4270130c649565c49b8223ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
