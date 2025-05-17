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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEVRLB4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsrEofH9bW8wU6I7lWtwfWH8HP1BQBAe%2FkTetUAIDkZAiEA2HBpqr2U5Gxd%2F6EmjS0cXqINBwFf%2BCKgCl6pRoKDxYEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDD3HRRwRzItBTh%2FfyCrcA04armbr3XnZVpBViMt%2F7u6QlcQ9JAKxHnbe2nDF5srgiZgSoUK9k5RlbhU9z1pRq%2BVEKLGFHBvUGp9CAeVJOKdNDkO%2B3OnifTWP9reJ%2F4B9u3EdT%2BTvPigvw9wScJuROEpfCZV8GSfvUueiBORDa1CzVvd2O2LwoMyIBmhhtCGsg6kkI6TO94TrfHJ9kBZ5p3dPnTpmTZj1EQr4Z%2BSlC3aESw3GhxuxzVbhRobQxQCg%2Bu8u%2FTiqctBrDos%2FWq1i9bJE2iNq3i%2BGVm9wC%2FifzQvw5LRbUdyGdM46OC7AsCbVjvy8BaBIuEE7KXpAT4Qa4vWqbHIjkZ%2Bqnm5ln9CUHRMh5rEFyKtMQNCW%2FxxqNPRRaXQbTwLQI2E7MJInyEjEQsrheBd97WA52GQkrsxpmHTZijkRl3LBO88UBvxVJzxIfxxFLeQNQ2CH5SpmZPtRE%2BSLUsDHFdX1%2FmMxGc7xez8oBOPpY%2BxJfxAj4s%2F7aKlewPRmiZXGkvNMe79q2cs7LUoYk1UXyXaCpUyfM%2BN5ydGg%2BlaPhvEw4XUydEtzXjR1YiK4Rd9M76AoIKhHs6RtQogm9oXcC%2BSJDVXqQG4vfPfh6Dy1JI21b%2BxkgrGokFfpnh0usxSRq%2BTwqJcnMN%2B1osEGOqUBI6%2B5LtVCyL%2B%2F79mirbC2OEx7E1RXa3GKO57DCaomLvWzjfItaSPRsOAI%2F7e49jhzSamkyqjxxWa7MXBIz5HFHU1P7KK5yk7jkFNXNLzb2Db%2BuoCOEqkwhoPuZ6H9qcMZJ8B%2BXq0OmdQuILP1FpsTzbwgPB91W8AMoyI0pJ20vSQGmqamETMAR%2BBfcpRQI%2BFRWGIhNeE0j27TDMq6BrHzAsauteOk&X-Amz-Signature=59ba868ae42c331f9fe98dd949f460943778a8f629d014a776b3df374ec88669&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEVRLB4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsrEofH9bW8wU6I7lWtwfWH8HP1BQBAe%2FkTetUAIDkZAiEA2HBpqr2U5Gxd%2F6EmjS0cXqINBwFf%2BCKgCl6pRoKDxYEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDD3HRRwRzItBTh%2FfyCrcA04armbr3XnZVpBViMt%2F7u6QlcQ9JAKxHnbe2nDF5srgiZgSoUK9k5RlbhU9z1pRq%2BVEKLGFHBvUGp9CAeVJOKdNDkO%2B3OnifTWP9reJ%2F4B9u3EdT%2BTvPigvw9wScJuROEpfCZV8GSfvUueiBORDa1CzVvd2O2LwoMyIBmhhtCGsg6kkI6TO94TrfHJ9kBZ5p3dPnTpmTZj1EQr4Z%2BSlC3aESw3GhxuxzVbhRobQxQCg%2Bu8u%2FTiqctBrDos%2FWq1i9bJE2iNq3i%2BGVm9wC%2FifzQvw5LRbUdyGdM46OC7AsCbVjvy8BaBIuEE7KXpAT4Qa4vWqbHIjkZ%2Bqnm5ln9CUHRMh5rEFyKtMQNCW%2FxxqNPRRaXQbTwLQI2E7MJInyEjEQsrheBd97WA52GQkrsxpmHTZijkRl3LBO88UBvxVJzxIfxxFLeQNQ2CH5SpmZPtRE%2BSLUsDHFdX1%2FmMxGc7xez8oBOPpY%2BxJfxAj4s%2F7aKlewPRmiZXGkvNMe79q2cs7LUoYk1UXyXaCpUyfM%2BN5ydGg%2BlaPhvEw4XUydEtzXjR1YiK4Rd9M76AoIKhHs6RtQogm9oXcC%2BSJDVXqQG4vfPfh6Dy1JI21b%2BxkgrGokFfpnh0usxSRq%2BTwqJcnMN%2B1osEGOqUBI6%2B5LtVCyL%2B%2F79mirbC2OEx7E1RXa3GKO57DCaomLvWzjfItaSPRsOAI%2F7e49jhzSamkyqjxxWa7MXBIz5HFHU1P7KK5yk7jkFNXNLzb2Db%2BuoCOEqkwhoPuZ6H9qcMZJ8B%2BXq0OmdQuILP1FpsTzbwgPB91W8AMoyI0pJ20vSQGmqamETMAR%2BBfcpRQI%2BFRWGIhNeE0j27TDMq6BrHzAsauteOk&X-Amz-Signature=a4e2cdc1cc7a7c778a62258546119ff9b2b3e1cab7323fc5824bae71ca362992&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
