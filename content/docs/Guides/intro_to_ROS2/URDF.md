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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC4NTDX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2QP4RPxoisLFBLlB62gOLxpEVQ9U5tn9oGGZLgvWpEAIhALRKmj1RXY%2ByA%2BrXhCAVh%2BeZTIoVanXFHX8AVD0MMZmaKv8DCEMQABoMNjM3NDIzMTgzODA1IgylCkYqJlv7UkcQm4wq3APK5rXqn76531tim2rvpbFcKnMe4861wUtqm2t%2FTfHnHyoNBspadeT%2FxcGIMTRZe1qI7yOZswZbgaNxXNZCUe0w5jZOdyhS0ksIY6%2FM%2F3Ja0ehvCh3iV6uTX2pchznFUOXKzZalQ8IaA7salSJ%2FBknMC%2BdPi9bI2Bw35Jo%2F%2B9nHJ0Onoz5fnnZBPc28SRd9Nn12xVoB37Ajo91Ip1cVqQ6E1MPPje3ARhPrWtfcvY9SU5CnwlhHBTneiq%2B8RkCJl6SNKhdi5VxsbVlG11ci%2B8wNmk6%2BQTjLvbD88Fwva8cpOqHXG6L2Eq4iz8X5e5pLOsAaheP3KHZUWW9i1WSFm3IsVv1BheB8I8AnM0u7vZ5v6Se7Ig%2Fen%2BJXL7Sm90a2zAWBmLK3J2afi96Wx2FsIelwvxHms7Wg%2FvWJwP%2FQGv6HJ4Rhh1nRdYIbUB12xR4qW%2F164iDJTEERYiBZ1catiKYYSZfMrlNSNWv%2BUHfN8nZQaSJXoFnCQEYrVZMPqqK8LPJ18heNStyuK6YB5NBUNvjKiborwNRoYd%2Be%2FHtj8joRJvj80m%2F2Gf2oWiwidoWOq897uVBtDXS7wTrS%2BKHmjx4RO%2FQA6W1oRXqNaqwF27oMUkIXZ%2B959%2BqaRPDeQTD99P2%2FBjqkAer8seeCmzzuKThMU%2B%2FnXcFptUmbWI2iomeTR964zp4nWew61iXgvFRBK83dq1b%2F3TgjU0Mtdjki3hI4pTUqp21vnCwaN5mqogJDES7xSYeRsLLeUeqakSh8Ftt7CNgrKK1BPrcNYQZuSkfXZKYcmVm3MDUpd9FN%2BIE7Cb7ZY1EKbHL%2BaBdRJJn3M8XCSnWpWrycT8GYLcWTKyw4B46hSQSxJSeR&X-Amz-Signature=722fc2c754a13a53e31661910b88c2d4f1205dfb3b048c4b10b6bfe060fbaf70&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TC4NTDX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2QP4RPxoisLFBLlB62gOLxpEVQ9U5tn9oGGZLgvWpEAIhALRKmj1RXY%2ByA%2BrXhCAVh%2BeZTIoVanXFHX8AVD0MMZmaKv8DCEMQABoMNjM3NDIzMTgzODA1IgylCkYqJlv7UkcQm4wq3APK5rXqn76531tim2rvpbFcKnMe4861wUtqm2t%2FTfHnHyoNBspadeT%2FxcGIMTRZe1qI7yOZswZbgaNxXNZCUe0w5jZOdyhS0ksIY6%2FM%2F3Ja0ehvCh3iV6uTX2pchznFUOXKzZalQ8IaA7salSJ%2FBknMC%2BdPi9bI2Bw35Jo%2F%2B9nHJ0Onoz5fnnZBPc28SRd9Nn12xVoB37Ajo91Ip1cVqQ6E1MPPje3ARhPrWtfcvY9SU5CnwlhHBTneiq%2B8RkCJl6SNKhdi5VxsbVlG11ci%2B8wNmk6%2BQTjLvbD88Fwva8cpOqHXG6L2Eq4iz8X5e5pLOsAaheP3KHZUWW9i1WSFm3IsVv1BheB8I8AnM0u7vZ5v6Se7Ig%2Fen%2BJXL7Sm90a2zAWBmLK3J2afi96Wx2FsIelwvxHms7Wg%2FvWJwP%2FQGv6HJ4Rhh1nRdYIbUB12xR4qW%2F164iDJTEERYiBZ1catiKYYSZfMrlNSNWv%2BUHfN8nZQaSJXoFnCQEYrVZMPqqK8LPJ18heNStyuK6YB5NBUNvjKiborwNRoYd%2Be%2FHtj8joRJvj80m%2F2Gf2oWiwidoWOq897uVBtDXS7wTrS%2BKHmjx4RO%2FQA6W1oRXqNaqwF27oMUkIXZ%2B959%2BqaRPDeQTD99P2%2FBjqkAer8seeCmzzuKThMU%2B%2FnXcFptUmbWI2iomeTR964zp4nWew61iXgvFRBK83dq1b%2F3TgjU0Mtdjki3hI4pTUqp21vnCwaN5mqogJDES7xSYeRsLLeUeqakSh8Ftt7CNgrKK1BPrcNYQZuSkfXZKYcmVm3MDUpd9FN%2BIE7Cb7ZY1EKbHL%2BaBdRJJn3M8XCSnWpWrycT8GYLcWTKyw4B46hSQSxJSeR&X-Amz-Signature=c3dccd8ca4ef7d7e4e3edb02e2298c5e7d314177cf76ed6ecc41cb689be38cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
