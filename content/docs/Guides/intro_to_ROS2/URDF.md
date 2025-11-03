---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAVP53G%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqZiDMspBr282OjXKdt2RRnL%2B0y1erI69WRx4x3kIYUAIgDluYUIqTwacTQHVMAzI69hCoY%2B7xG5Tuh204Zt01ON8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIYGRRgWMJw5jKkjCrcA6M0ozF14wltZwGvFgph2yg9T4fXo1Ljlvfyknf58jX0oejMM4tuxSQP0ctciIwkEffrjWpN4u%2FZ0TQBxY6RCdmQTIma0DaoLQNCwDroIRRomlIMFAp4uJ8Fj1Zlcrc5l%2Bten65gt4tBZWrlrdAWEm%2BiIf69abt92wYPd7v%2BdcyE0MKYZZ93%2BSXlhBcpXdI06qZ%2BTF%2BwILn7rIMMfpx0nNb9VSUcTtIzD6ZtXRoF%2F8A3XmnFuKUni4YaUW3PfhYyvvbVFGupJCwN9lbNc%2FNJwO7x%2FzC1WAM0Zq9ZrrHKZTqNmvtYXbnTU2VlehQRnY4Mokq2mXe62uE0rEBocgTDuYT%2FW2yIdqEl5hlaav4bg1JGd6tV0H8HoRiObMkXxc77C75F%2BwsGDCRjuZbkJImVfh1Yhhgr8P6wT7SXKeRj7siiBc4fwPtK6EktLa9lLVgsRBOsUwoEOtHBCPImEjIL5V1OP00YQuZ8cZSyUpuxL0nnLUVvhNE0BTacN7EseqKp4wkWLThSTUcrIZiRsW3Z96YxXiUmECltppZWhyq2ICtlDyKsyz%2FkUDNvrBepU81XERkvJQgJoNbuhKvc1N5e6H1m%2B0YFq8KURhoaQKyGoo9kTLye8ROnUt77l9rrMIGKoMgGOqUBH%2FQi5TAcSkLsv4fDH1HKQTDY%2BJuVSrf5AR%2F%2BWQBSNHGZRgxvzvkgs6mYc4qjRjAdX9JPTxg%2BcZJnAR%2B7m26tTE0rmG9Biyhpl4i9u055ismrLM7DScpGuocZ6KGuxHHkfUFTtkoPs4Vqfy64yA36GemE%2BH4BBCznIOYmcyFgx1w72xg%2F6i8zPaKXj6dVO0VLT40mPQg6kIYHIODpLQqQZ0nMg6sw&X-Amz-Signature=f69584af4a0d460638a49dc11adf89b84d2f6aa94a4f8703ed1f2a8b9c184c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAVP53G%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqZiDMspBr282OjXKdt2RRnL%2B0y1erI69WRx4x3kIYUAIgDluYUIqTwacTQHVMAzI69hCoY%2B7xG5Tuh204Zt01ON8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJIYGRRgWMJw5jKkjCrcA6M0ozF14wltZwGvFgph2yg9T4fXo1Ljlvfyknf58jX0oejMM4tuxSQP0ctciIwkEffrjWpN4u%2FZ0TQBxY6RCdmQTIma0DaoLQNCwDroIRRomlIMFAp4uJ8Fj1Zlcrc5l%2Bten65gt4tBZWrlrdAWEm%2BiIf69abt92wYPd7v%2BdcyE0MKYZZ93%2BSXlhBcpXdI06qZ%2BTF%2BwILn7rIMMfpx0nNb9VSUcTtIzD6ZtXRoF%2F8A3XmnFuKUni4YaUW3PfhYyvvbVFGupJCwN9lbNc%2FNJwO7x%2FzC1WAM0Zq9ZrrHKZTqNmvtYXbnTU2VlehQRnY4Mokq2mXe62uE0rEBocgTDuYT%2FW2yIdqEl5hlaav4bg1JGd6tV0H8HoRiObMkXxc77C75F%2BwsGDCRjuZbkJImVfh1Yhhgr8P6wT7SXKeRj7siiBc4fwPtK6EktLa9lLVgsRBOsUwoEOtHBCPImEjIL5V1OP00YQuZ8cZSyUpuxL0nnLUVvhNE0BTacN7EseqKp4wkWLThSTUcrIZiRsW3Z96YxXiUmECltppZWhyq2ICtlDyKsyz%2FkUDNvrBepU81XERkvJQgJoNbuhKvc1N5e6H1m%2B0YFq8KURhoaQKyGoo9kTLye8ROnUt77l9rrMIGKoMgGOqUBH%2FQi5TAcSkLsv4fDH1HKQTDY%2BJuVSrf5AR%2F%2BWQBSNHGZRgxvzvkgs6mYc4qjRjAdX9JPTxg%2BcZJnAR%2B7m26tTE0rmG9Biyhpl4i9u055ismrLM7DScpGuocZ6KGuxHHkfUFTtkoPs4Vqfy64yA36GemE%2BH4BBCznIOYmcyFgx1w72xg%2F6i8zPaKXj6dVO0VLT40mPQg6kIYHIODpLQqQZ0nMg6sw&X-Amz-Signature=7acfaf70e072ab1f69846392c19bf489faddbac5904bc85fb1492eca4fc868f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
