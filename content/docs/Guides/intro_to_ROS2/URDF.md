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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GPDDMV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQTZZcvZ2CC2d9JFNcOzvDghwAtMPfwuN8RsKtxv4JmwIhAJFntCpwj3wdizDBSlrgLcU04L9MRz6JeRG%2BvygbYaSaKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt0Q%2FrVuvFV6ZPFhsq3AO3pmJZqH4qIAo7BwKy0bA%2BdgYxglQYftq6aZDUSBi80DFCs0thCBGryLpsy1WVJbNIoidH9fcASOZ8WS7VbAwvwlMuDUZnXwauoOF9hTD9WNS9j%2FpeoINkwEConlVK8KxrcFkXDMug%2BExytvALkix%2B4l1n47th2Pad9l%2BGYw8fNQBjlMgOULvV0g5LyJTnKn5uFvOSzHr1ju%2BAH4EVfVUq9D3tS7yCVgEAQc%2BXcD03r16MQCw0AdmyBu7Fmi03sW6gwSQpbRrc%2Fi6jUIzdzrlgJJHumDyI1g7OYBrISoQiELO0huCxiq7RxnGh%2BhhfSRYaIz3mQgTgSV2tFOrlcoxZe6mbt4XXx87Xnn7IJWcjI%2BpevZqEMb4IjTFgE5pIPR8Z55zQsJoLIsCFb6SKPZe5113DrlZYP2FrpvA%2BdDHXjOkqnALzhra7hOBgF61%2BrA61W5zE8wkZCrdQ4zfD%2BTfO6t4DLEDjCS2TyCeUEgt6bsCh7lA4tbMADg%2BPyd%2BL2QqjLYKH9TS2bmQUUPCSAnyku5SKNlFV0cuk1jkwZgWZOcQxjm%2FvZvcZ%2FGsoU%2Btq75phVJ6c0bU1eFJGZ3SJbb25C7qdamUiA0VZb%2BrDMS7EVZT112LIVHbMhqEtmjCfr9u%2FBjqkAUfQMZ2y%2BvIqnTqtv3qjzv1G2yrGcyGH71112i74%2B7QLZgSG6y4Hzu5DzCyz2bZLDtZ8t59h0sB0i%2BJz%2BFXow7CVFrEFQdmgjEwtj4Aln4BL3nVGkwH0bB6AxYCEDBBrmlqA28uJV8tU2FRKTncEy%2FI%2BRUP7uB%2Ff2Xm%2Bb3mnC2ARx6TuPmcHq3JbxGI1PGXNC4n34GcJJaUMbsdCmuGxxAK%2FSK4%2B&X-Amz-Signature=ebc91bb00ceb92721ea797e60acb23967cd0d68eaa37450aa094c021aebff5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GPDDMV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCQTZZcvZ2CC2d9JFNcOzvDghwAtMPfwuN8RsKtxv4JmwIhAJFntCpwj3wdizDBSlrgLcU04L9MRz6JeRG%2BvygbYaSaKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt0Q%2FrVuvFV6ZPFhsq3AO3pmJZqH4qIAo7BwKy0bA%2BdgYxglQYftq6aZDUSBi80DFCs0thCBGryLpsy1WVJbNIoidH9fcASOZ8WS7VbAwvwlMuDUZnXwauoOF9hTD9WNS9j%2FpeoINkwEConlVK8KxrcFkXDMug%2BExytvALkix%2B4l1n47th2Pad9l%2BGYw8fNQBjlMgOULvV0g5LyJTnKn5uFvOSzHr1ju%2BAH4EVfVUq9D3tS7yCVgEAQc%2BXcD03r16MQCw0AdmyBu7Fmi03sW6gwSQpbRrc%2Fi6jUIzdzrlgJJHumDyI1g7OYBrISoQiELO0huCxiq7RxnGh%2BhhfSRYaIz3mQgTgSV2tFOrlcoxZe6mbt4XXx87Xnn7IJWcjI%2BpevZqEMb4IjTFgE5pIPR8Z55zQsJoLIsCFb6SKPZe5113DrlZYP2FrpvA%2BdDHXjOkqnALzhra7hOBgF61%2BrA61W5zE8wkZCrdQ4zfD%2BTfO6t4DLEDjCS2TyCeUEgt6bsCh7lA4tbMADg%2BPyd%2BL2QqjLYKH9TS2bmQUUPCSAnyku5SKNlFV0cuk1jkwZgWZOcQxjm%2FvZvcZ%2FGsoU%2Btq75phVJ6c0bU1eFJGZ3SJbb25C7qdamUiA0VZb%2BrDMS7EVZT112LIVHbMhqEtmjCfr9u%2FBjqkAUfQMZ2y%2BvIqnTqtv3qjzv1G2yrGcyGH71112i74%2B7QLZgSG6y4Hzu5DzCyz2bZLDtZ8t59h0sB0i%2BJz%2BFXow7CVFrEFQdmgjEwtj4Aln4BL3nVGkwH0bB6AxYCEDBBrmlqA28uJV8tU2FRKTncEy%2FI%2BRUP7uB%2Ff2Xm%2Bb3mnC2ARx6TuPmcHq3JbxGI1PGXNC4n34GcJJaUMbsdCmuGxxAK%2FSK4%2B&X-Amz-Signature=eae74b69afc87fd6d5fa65b2df600205f27e037f8a3eedcdbac411b324897726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
