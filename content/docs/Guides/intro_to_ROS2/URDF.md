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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27C2ULL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2FDEV4N0eejgk8F8hU9tMvNRpXynIDEq%2Fkh90HiMeOgIhANfJOdfgzs%2FIbpMeywOHZgXB17%2B1XN1azpo3Te8MxufJKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXm4m11re51tI1iDQq3ANlc%2FgOEZNqV%2B5nql3VUtb6mPoAvphD9gzBHLNgoA4mXjEAb4Df5yHLsbcMS5O9lYJ5vnTm%2Fk42HAQ1NIbhfPlkegpWkqgEw8XgRRjfkoCZ5h%2BDRAllycYf6azsvvwy9affmMS3KbHvBtZ4cFBKqAMLYHICr8XzTHa25vEpxgCvVR9E5LoJrtp4KT3ALDutKVEoEnHXeN6xyrr6DW38a6KUcAnMKbVo0ms3W7vRutIJQSx7VkBXAFdWJNEiXQBZCKGt4kAFNEhTyvg5ac6w%2FsSfKgHJimPz0cA41Nb86b882jSXdtuHfAwy2%2FV4nQs9GsU5bEiNqk6nHuqsGj9qGAt2U%2FZxPb2kPCoqzS56u7DqnLWGEfgnGf0yxZVINcMiVPeLpJKaAzjitWmdBJZCsab0amq21Kme411wy1GxNFxRZFkz5gj%2FRGTt1rZak2%2FKjd6RtHuCbD6AuE1gygWTUrT6PARYdzA08vB9aHc8hHdXQ4Xa%2BvGkZ8mzjnq52pUO6%2BXeLf5Mo6KBkt6Gje4kiQcltuWHBCh2hgFCxFHVA6jkQDEJw3Zyw1diATS%2B0zJHb6%2FmpjGLz%2FJjWOZKi9VlUk5S0TForyp%2FIoPDRMdUp%2Bj5ZbT3VcyybCsABqqWEzCZs9bCBjqkARoktDpfapfCu6sFa%2BCy9txDJRI5Sxsy4w1xXdTF9cEU0jJ4ovfKTf9E7GxC2ZSkk0L2LU35AwundCNoXU%2B9qjHo0S8PqM9mIgrb3XIkb3NsToCEF02aOOww63iYJJBRanuEeHyx5u6oDkYQtYXEsyWZexGbqF5BSMCbSeLJlcPMKH8md%2BgJ8qRObYuhj6eb%2B%2BU2V0CBFrkDVjbL0wReHrkrooYA&X-Amz-Signature=354c6e9c8ffc3251224667f2fa3ff1aa097c5fbc606201a844dfa24b946c47f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27C2ULL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2FDEV4N0eejgk8F8hU9tMvNRpXynIDEq%2Fkh90HiMeOgIhANfJOdfgzs%2FIbpMeywOHZgXB17%2B1XN1azpo3Te8MxufJKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXm4m11re51tI1iDQq3ANlc%2FgOEZNqV%2B5nql3VUtb6mPoAvphD9gzBHLNgoA4mXjEAb4Df5yHLsbcMS5O9lYJ5vnTm%2Fk42HAQ1NIbhfPlkegpWkqgEw8XgRRjfkoCZ5h%2BDRAllycYf6azsvvwy9affmMS3KbHvBtZ4cFBKqAMLYHICr8XzTHa25vEpxgCvVR9E5LoJrtp4KT3ALDutKVEoEnHXeN6xyrr6DW38a6KUcAnMKbVo0ms3W7vRutIJQSx7VkBXAFdWJNEiXQBZCKGt4kAFNEhTyvg5ac6w%2FsSfKgHJimPz0cA41Nb86b882jSXdtuHfAwy2%2FV4nQs9GsU5bEiNqk6nHuqsGj9qGAt2U%2FZxPb2kPCoqzS56u7DqnLWGEfgnGf0yxZVINcMiVPeLpJKaAzjitWmdBJZCsab0amq21Kme411wy1GxNFxRZFkz5gj%2FRGTt1rZak2%2FKjd6RtHuCbD6AuE1gygWTUrT6PARYdzA08vB9aHc8hHdXQ4Xa%2BvGkZ8mzjnq52pUO6%2BXeLf5Mo6KBkt6Gje4kiQcltuWHBCh2hgFCxFHVA6jkQDEJw3Zyw1diATS%2B0zJHb6%2FmpjGLz%2FJjWOZKi9VlUk5S0TForyp%2FIoPDRMdUp%2Bj5ZbT3VcyybCsABqqWEzCZs9bCBjqkARoktDpfapfCu6sFa%2BCy9txDJRI5Sxsy4w1xXdTF9cEU0jJ4ovfKTf9E7GxC2ZSkk0L2LU35AwundCNoXU%2B9qjHo0S8PqM9mIgrb3XIkb3NsToCEF02aOOww63iYJJBRanuEeHyx5u6oDkYQtYXEsyWZexGbqF5BSMCbSeLJlcPMKH8md%2BgJ8qRObYuhj6eb%2B%2BU2V0CBFrkDVjbL0wReHrkrooYA&X-Amz-Signature=d459e6a58ac4d4c74a832e7bc6f2051bc46d77523621386798058a04e867a254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
