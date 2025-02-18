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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKXJJT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDGzgx%2FASGpOqPCRNrUBbO6%2FFPtQgDlus8zO1ja8xMOeQIhAIpwS0zDr%2FTDV3w7b6DYYL0do4dXtUtk6vCL4%2FncRX5TKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiELdF54oQIk0VHpYq3AOmcBk4HwpS%2BCz3FD8J0OD%2Bq729ZFYZcnhChAHw8iJjr1WJdV7RL3v1YJOAzMnwAwYIvUQD97yoYA2uG6BTTjWp14EqcIIBNqg5WMprK0TCFtLAmtzB7PyHnSKpIr2rRd6HrjbexT9R7KdVeL34Dt7obt%2FW6fvj3jFmiJ2yIoAkqBqC6qLL11IUyjQMKc1GkFLABhEnfTIOMZ%2FWND%2BOW%2FOMdcHU5VNFwdReuYXzF6KLqFu2GOwU3stLw5vNNUEdNWzjF0eA0%2BvJCi1WTuHyw4eDvUUVO21Ek5AEIzHqR3WXNrLjllcJgZbEDijtimw9Q6zpivPupl7bEGhhavlNTI%2BgT82wzcD%2F1iG1QmuJlrT3duOawW0fHehp4h1LzfohQNENCa2sFa0qUn06%2BMoTWhtpDdchNDaX%2Fh9EI3H2kCwiMtq%2FlXFRaCLuGgKYzSyk%2BtKNNKtARRco4oMoureKRVFLCjHkKqQldcGyb8BwlU0%2BtyI4GV89Bv9V8ExK%2Ff0o5RI1zqP1erRTduktihjKYQ%2FtXsFgMPJqItya3XWcXr85%2Fb4JdJIKS3i0XWigWsIaDogsJKyW1DYNJ9MGX9axSaQ7tMYDknYDF8xmNEVZEYUbGV0TvTjzT%2BMtRxVayjDXv9G9BjqkAdZvF2aPEM%2FrsPBK3KYWfSbwDIikzuMP6UIe2FDV%2F7Oke0w5fQZ9gV65rRIsmAYIXDT0L8HmN7hvgzbtrRGavy%2FwkcCcQ8lE1Vj06le%2FmfMgQn4jX91%2F5mhBoslkwp%2FxjV%2BprImBiWucEvXP8YhPVfNQQl%2FXGNsGEQOs3APQBlsCAcDCxr27bUhRAZke0jvgLl0moX28YWSnPHzml6AEeTGxH3td&X-Amz-Signature=7491af02cec4b91b205dcc2f33c69962080f9cc8c1259e3e520e8d8661a81810&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKXJJT4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDGzgx%2FASGpOqPCRNrUBbO6%2FFPtQgDlus8zO1ja8xMOeQIhAIpwS0zDr%2FTDV3w7b6DYYL0do4dXtUtk6vCL4%2FncRX5TKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiELdF54oQIk0VHpYq3AOmcBk4HwpS%2BCz3FD8J0OD%2Bq729ZFYZcnhChAHw8iJjr1WJdV7RL3v1YJOAzMnwAwYIvUQD97yoYA2uG6BTTjWp14EqcIIBNqg5WMprK0TCFtLAmtzB7PyHnSKpIr2rRd6HrjbexT9R7KdVeL34Dt7obt%2FW6fvj3jFmiJ2yIoAkqBqC6qLL11IUyjQMKc1GkFLABhEnfTIOMZ%2FWND%2BOW%2FOMdcHU5VNFwdReuYXzF6KLqFu2GOwU3stLw5vNNUEdNWzjF0eA0%2BvJCi1WTuHyw4eDvUUVO21Ek5AEIzHqR3WXNrLjllcJgZbEDijtimw9Q6zpivPupl7bEGhhavlNTI%2BgT82wzcD%2F1iG1QmuJlrT3duOawW0fHehp4h1LzfohQNENCa2sFa0qUn06%2BMoTWhtpDdchNDaX%2Fh9EI3H2kCwiMtq%2FlXFRaCLuGgKYzSyk%2BtKNNKtARRco4oMoureKRVFLCjHkKqQldcGyb8BwlU0%2BtyI4GV89Bv9V8ExK%2Ff0o5RI1zqP1erRTduktihjKYQ%2FtXsFgMPJqItya3XWcXr85%2Fb4JdJIKS3i0XWigWsIaDogsJKyW1DYNJ9MGX9axSaQ7tMYDknYDF8xmNEVZEYUbGV0TvTjzT%2BMtRxVayjDXv9G9BjqkAdZvF2aPEM%2FrsPBK3KYWfSbwDIikzuMP6UIe2FDV%2F7Oke0w5fQZ9gV65rRIsmAYIXDT0L8HmN7hvgzbtrRGavy%2FwkcCcQ8lE1Vj06le%2FmfMgQn4jX91%2F5mhBoslkwp%2FxjV%2BprImBiWucEvXP8YhPVfNQQl%2FXGNsGEQOs3APQBlsCAcDCxr27bUhRAZke0jvgLl0moX28YWSnPHzml6AEeTGxH3td&X-Amz-Signature=8df958998611acb358e01390b3e1725542113fa23129ba0d671273afbf1dc4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
