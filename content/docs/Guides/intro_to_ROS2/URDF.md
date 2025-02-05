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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDB43UJ4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDd0WS8htDWUO2BGObe%2Fi4o0HGgtt%2Fhk3QYD0BgYPhKFAIgcgXb0rKsf%2ByxkBSEpfKElJxeX2emVWwz0eiI%2Ba5iXHAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK0v2CPFY8VdGax31SrcAxjTs2P0DsEbPbO8Qgnf9RvfX65ugXnMRUhTwuTf7v%2BFPvq7fh9Den%2BCEtwTyo4LWmLDrAj4TPBh9GzujBLMgsy5vFaGGkmuP60FlUCp9ktUXze0Kwk6hDm%2FWit78spV%2F9ioLrfK0%2FuGP5836S7vmHyxTgdf5VxBqXEZp58irp%2Bc%2Bx%2BTSJbJTk4GsQLwt3MiCLuYM%2FN6JyxKpM2DvavVCyBWYo9DROZP3eCi2DoPqvnd2vw%2BIYZCqq%2FLAGCGLQbl5HLuINN7y7UafzKA6EiiCxEPcDGHMLgUdoaj8vLgL6KdrfXHb3MmuAjDg5g4GNp7NZyVuqrZuyWNWLSPwfzT7WNtQy%2Bbkkv4jhkodxEKAZ39NZVQdhil%2BfmmDhgKUcGXM0giM1W4wouiQRHKj6i9b1WpDgPie50Kl4tTm0kQ%2B6DcrrFzqgRRTlGpzMUjBSEQTTDKhAidNfnW4lMiTQvCQtgIQ9JQKIOQg%2BVByQKL%2BiKFj2KLQPJfpuNEf2A819LpH0wE4eX9QgnOszb7JtRGOkRxEW%2BL4Qnio1n7z1RR0XfffXcqy6siEnl3eEe3xHrQz16XJah2sW%2BIJQBZkL68qAynnZcwN2oAN%2B6wqXpItDpCo0DkfhJyaSdyY6mDMNfRjL0GOqUByyb6iVGYZHirskNdDO2ukDwgu%2BqH74fcKbQXaQvKKpNYV0vdJNHnWq9PBMI9aKpU8Qwyu1mF%2B0o2UuJ7in2d%2FGzBPnJHPL%2BNfVyDzNj4yvZPMUUD5rtgM7eZLLXGnjZLo%2F5m%2BKvtH8%2F0NmIMCe4HfQWzG941LGuHldT%2B4v94yuxRuqnEjIbspXmu7Cv%2Fb9sc%2FikVIIH20psoyl3kjgHRDOmDGNxn&X-Amz-Signature=cccd533d349ec8829afe7081f3e4287cfc76bfce26c6d143f739d9980de946f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDB43UJ4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDd0WS8htDWUO2BGObe%2Fi4o0HGgtt%2Fhk3QYD0BgYPhKFAIgcgXb0rKsf%2ByxkBSEpfKElJxeX2emVWwz0eiI%2Ba5iXHAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDK0v2CPFY8VdGax31SrcAxjTs2P0DsEbPbO8Qgnf9RvfX65ugXnMRUhTwuTf7v%2BFPvq7fh9Den%2BCEtwTyo4LWmLDrAj4TPBh9GzujBLMgsy5vFaGGkmuP60FlUCp9ktUXze0Kwk6hDm%2FWit78spV%2F9ioLrfK0%2FuGP5836S7vmHyxTgdf5VxBqXEZp58irp%2Bc%2Bx%2BTSJbJTk4GsQLwt3MiCLuYM%2FN6JyxKpM2DvavVCyBWYo9DROZP3eCi2DoPqvnd2vw%2BIYZCqq%2FLAGCGLQbl5HLuINN7y7UafzKA6EiiCxEPcDGHMLgUdoaj8vLgL6KdrfXHb3MmuAjDg5g4GNp7NZyVuqrZuyWNWLSPwfzT7WNtQy%2Bbkkv4jhkodxEKAZ39NZVQdhil%2BfmmDhgKUcGXM0giM1W4wouiQRHKj6i9b1WpDgPie50Kl4tTm0kQ%2B6DcrrFzqgRRTlGpzMUjBSEQTTDKhAidNfnW4lMiTQvCQtgIQ9JQKIOQg%2BVByQKL%2BiKFj2KLQPJfpuNEf2A819LpH0wE4eX9QgnOszb7JtRGOkRxEW%2BL4Qnio1n7z1RR0XfffXcqy6siEnl3eEe3xHrQz16XJah2sW%2BIJQBZkL68qAynnZcwN2oAN%2B6wqXpItDpCo0DkfhJyaSdyY6mDMNfRjL0GOqUByyb6iVGYZHirskNdDO2ukDwgu%2BqH74fcKbQXaQvKKpNYV0vdJNHnWq9PBMI9aKpU8Qwyu1mF%2B0o2UuJ7in2d%2FGzBPnJHPL%2BNfVyDzNj4yvZPMUUD5rtgM7eZLLXGnjZLo%2F5m%2BKvtH8%2F0NmIMCe4HfQWzG941LGuHldT%2B4v94yuxRuqnEjIbspXmu7Cv%2Fb9sc%2FikVIIH20psoyl3kjgHRDOmDGNxn&X-Amz-Signature=fc36088369cd695de8be409e197a9e68332689622afc470134de4d344c915e54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
