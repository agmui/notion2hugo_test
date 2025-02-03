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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZNKBJW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAw8SRcNOjfKCkJTJhyNLm6JfPdhNdr%2BXr5u44oT4fFAAiBWs4BfpXQxfGNPgJiBSa3ea7aCZFzI5b8tVFcMtHtmOSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMicRDLOiHE5pmKgtrKtwDZ%2FOiTrdHwJmAat%2Fbk53IUhNzEsxxMtVou1ew%2BMa5DNbMJ8doh2fx0YlJZbNe4q7zds4MmDMqHMZmmnI24G0Q5u4LVD9y3o8R5trB1edrDlYVeh9puQU4wziqmE%2BjNuydiv9R2YYrYplCwrbmsrt4UdKImcN8%2FedpupVz6jrZW%2FAowaiDsd7tMxNurQKFhr5YVEtx38aOH9Uaxzw%2F4gMRXckCQj0q%2BHlD1R3uSxvVlliKnJmh26u16JSpkLR8pUsZFRsMA2Pueu%2FtzQJe%2B%2FEbFvUOtyzXuFvGlNriyxc0mBQIQJMRFUJz7ZzAYLHqRW4rq0vb2xpCiX8l24%2Fp899fE5mEdrX1cEKZXXUIw5FU1NJptoPBB4UJv4O6VP1HZ7JEsd6HanfC0hIW38vQH6947I5qRv%2BB974Iox9bVweUvmMMaJv7Dl2xzv4HeYCiRZgmEpdii5kHqzCYbxNAxgwn5PWTca8AAMXont6GMslBa0Me9qmQqaqKnFdHdNeW9P5JLFM2XUTC%2FfuPHJVhBpnbvWm7wm2gij4NAcOp%2Fl2gtvJhPSWCq2INKTDAHNyZSXkpra6250jX9akuC2f%2FXYeyX59FXn4e3uY2gYQxfNAdWK9VRTqhRdd7zCpy27EwgueDvQY6pgHY%2FTheFnIYYD5UPVG0Mdq44p5JM8OJ%2FFzhl1nUuYJhI35jYLUVpBZ2AtNIsVVQtu0aAtJQjLCQ%2BJ6M%2F%2Br5SOCmcZQ%2F0M1G%2BOdvVMn0VyDXQg8akjdrCSOCswJnnNsWdp0eAriT7c%2BQd8CDlwo3HJ6%2FWQsb7R9Fosqz%2B6Et4YT8pGXcI%2BDq%2FCpftdimUAVJLqL9F%2BN4n10myCi00jvJroJpfhsosTXv&X-Amz-Signature=76f9d1598de4c7464ded42a4bfa29e630210c93c2dbd5318f80c775dd7a1f6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZNKBJW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAw8SRcNOjfKCkJTJhyNLm6JfPdhNdr%2BXr5u44oT4fFAAiBWs4BfpXQxfGNPgJiBSa3ea7aCZFzI5b8tVFcMtHtmOSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMicRDLOiHE5pmKgtrKtwDZ%2FOiTrdHwJmAat%2Fbk53IUhNzEsxxMtVou1ew%2BMa5DNbMJ8doh2fx0YlJZbNe4q7zds4MmDMqHMZmmnI24G0Q5u4LVD9y3o8R5trB1edrDlYVeh9puQU4wziqmE%2BjNuydiv9R2YYrYplCwrbmsrt4UdKImcN8%2FedpupVz6jrZW%2FAowaiDsd7tMxNurQKFhr5YVEtx38aOH9Uaxzw%2F4gMRXckCQj0q%2BHlD1R3uSxvVlliKnJmh26u16JSpkLR8pUsZFRsMA2Pueu%2FtzQJe%2B%2FEbFvUOtyzXuFvGlNriyxc0mBQIQJMRFUJz7ZzAYLHqRW4rq0vb2xpCiX8l24%2Fp899fE5mEdrX1cEKZXXUIw5FU1NJptoPBB4UJv4O6VP1HZ7JEsd6HanfC0hIW38vQH6947I5qRv%2BB974Iox9bVweUvmMMaJv7Dl2xzv4HeYCiRZgmEpdii5kHqzCYbxNAxgwn5PWTca8AAMXont6GMslBa0Me9qmQqaqKnFdHdNeW9P5JLFM2XUTC%2FfuPHJVhBpnbvWm7wm2gij4NAcOp%2Fl2gtvJhPSWCq2INKTDAHNyZSXkpra6250jX9akuC2f%2FXYeyX59FXn4e3uY2gYQxfNAdWK9VRTqhRdd7zCpy27EwgueDvQY6pgHY%2FTheFnIYYD5UPVG0Mdq44p5JM8OJ%2FFzhl1nUuYJhI35jYLUVpBZ2AtNIsVVQtu0aAtJQjLCQ%2BJ6M%2F%2Br5SOCmcZQ%2F0M1G%2BOdvVMn0VyDXQg8akjdrCSOCswJnnNsWdp0eAriT7c%2BQd8CDlwo3HJ6%2FWQsb7R9Fosqz%2B6Et4YT8pGXcI%2BDq%2FCpftdimUAVJLqL9F%2BN4n10myCi00jvJroJpfhsosTXv&X-Amz-Signature=d66b3d199880dfccef0fef2fc6f33edafd995b6f1b3b2ebf78106a23701d18ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
