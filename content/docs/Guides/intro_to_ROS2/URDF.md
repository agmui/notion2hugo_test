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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5YQO7V%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiGPLlkxg5O66rhG%2BDnjQIpGWsyWFCzLgKDLFyICFWQQIgFkJFZMdz2MDalqWtLGwz05aOhLY7CYErgtDIl6Bbc5cqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC10XCqhKHq3bhzRMCrcA5cMvh96iwQIxnv%2BzEMjpvxYwCoeWw%2B6xuax5%2BJEI09sIjYRlQgDFt9BRKB7oKtSqwc1HzShRIwkDQKIHglskWIpcCozW7nIwGNrf9PzTg96c4f4%2FZqMooSv81UK8%2Bw3%2FEJt7iV6JKSkCn3AWMwpI8cx5GtFXnpNMkpLbMGS4Pq6EkFvFJIvnGlognTI4W%2Bk2I0D38bEdO5akdUzzDSBmuxsevoFlewx5i%2BeW%2FVptELk72bV6NSbCyq0szx4W0rY%2FFPpVg3PdJd2Ys6qeAaVqHoMAOiiq6LRECvT8sD8kksEqsrxs1MpoN7z%2FjwD7ZTcr4hGZ1RDdUiRgHcsZdbC3gleq1qN7YxgM6RIn0eQ1s8k0TfufMQAde5W8TWoysnim%2F0ZLhHiVQHDRLl5CWCMFmPZNTKEBIFQNRMYiEXUafwDQMJYccgmvjHAbZ%2FXP0aflCnrKxwogHL3cRuvVlCSDNfqzAoPaHuV%2BkMAsohnkxE40LzoA8yfI1pfnxk7Rvq425A3sPA19y9tBoIe5KXg5mNza54fszsIEUwe55Yg9hgQv4TQFGS%2Bm%2FP4lW9kdob0mdWmgQIqS3HimlFcj7d55kPf1P8pPdrhZTw8YPpiuybFW9mc%2FC5FtWwsFfFPMOKbpb0GOqUBY8jMHxC9QC2drJIQB0mRcIwqJnm6LJEu6fHVfk7ugj1xNPA%2BofXna%2F3AIFLRyAfmqFvpqET2TqkwjB5zxyYXJ10BuEgIuTAZiyiPLkTmhU8lTBLTIa4fyy8Pw2HmPJccxmaHEUnLbbSzO2lLzVn9yRkvdj6hxZwPAp4BvkY83LN3bG2cFl4C16JRGuWxZSQ4VNofc6jEyeCj2Aizfbh8xGBxuqv%2B&X-Amz-Signature=06c220d535f15871d21691f2f6b20871f9a3f079c5e1a427271eb09858cc338c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5YQO7V%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiGPLlkxg5O66rhG%2BDnjQIpGWsyWFCzLgKDLFyICFWQQIgFkJFZMdz2MDalqWtLGwz05aOhLY7CYErgtDIl6Bbc5cqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC10XCqhKHq3bhzRMCrcA5cMvh96iwQIxnv%2BzEMjpvxYwCoeWw%2B6xuax5%2BJEI09sIjYRlQgDFt9BRKB7oKtSqwc1HzShRIwkDQKIHglskWIpcCozW7nIwGNrf9PzTg96c4f4%2FZqMooSv81UK8%2Bw3%2FEJt7iV6JKSkCn3AWMwpI8cx5GtFXnpNMkpLbMGS4Pq6EkFvFJIvnGlognTI4W%2Bk2I0D38bEdO5akdUzzDSBmuxsevoFlewx5i%2BeW%2FVptELk72bV6NSbCyq0szx4W0rY%2FFPpVg3PdJd2Ys6qeAaVqHoMAOiiq6LRECvT8sD8kksEqsrxs1MpoN7z%2FjwD7ZTcr4hGZ1RDdUiRgHcsZdbC3gleq1qN7YxgM6RIn0eQ1s8k0TfufMQAde5W8TWoysnim%2F0ZLhHiVQHDRLl5CWCMFmPZNTKEBIFQNRMYiEXUafwDQMJYccgmvjHAbZ%2FXP0aflCnrKxwogHL3cRuvVlCSDNfqzAoPaHuV%2BkMAsohnkxE40LzoA8yfI1pfnxk7Rvq425A3sPA19y9tBoIe5KXg5mNza54fszsIEUwe55Yg9hgQv4TQFGS%2Bm%2FP4lW9kdob0mdWmgQIqS3HimlFcj7d55kPf1P8pPdrhZTw8YPpiuybFW9mc%2FC5FtWwsFfFPMOKbpb0GOqUBY8jMHxC9QC2drJIQB0mRcIwqJnm6LJEu6fHVfk7ugj1xNPA%2BofXna%2F3AIFLRyAfmqFvpqET2TqkwjB5zxyYXJ10BuEgIuTAZiyiPLkTmhU8lTBLTIa4fyy8Pw2HmPJccxmaHEUnLbbSzO2lLzVn9yRkvdj6hxZwPAp4BvkY83LN3bG2cFl4C16JRGuWxZSQ4VNofc6jEyeCj2Aizfbh8xGBxuqv%2B&X-Amz-Signature=f5cd020d0ed3a411d8d9f2ef8974dd79d9428575605bedc9b1b1d5d111f79e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
