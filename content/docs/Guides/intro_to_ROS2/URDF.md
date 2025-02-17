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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466472FZ435%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC5QjOfs6bv9o5AWeAZ47pgxl%2FutMl8FVUkfTJVTyK01gIgDG8CKhtMqs3%2FtxhyngHnWB1BA8w4Octxbm54JtsolSMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJG0uQxyDd7yLDTBqyrcA%2B6ImVv4NdB5dw7CwBEC7uq6gLkJXOnrWfHPSNk2qpN38SO9xc1gUCBXAW6p9zXHNZAJorNzg12JeDWBF11f4%2B56kVUhKOa9TrDfPSfOZaV8YDuiwdH4SqA44HgzbK%2FUTbK%2BoCQEql2SpSXohNkxFSnx%2FU3GaK%2BJlxAkXTlIpeHIOjbb05wC75UBLVM81vLjgTpxFWegPupEavNz5RW36tUSfvwjKhjueCt%2B0TQ5Z%2BDb2lQNbgWnSYQMwrw9qsUJ2Gn%2BYE%2FMwN7ZlQUbxdEM1tRwJtWoAwDNXaBaTsytDPnkSIenggd1OZ2cNH3%2Bj8d7VAYG9auIN5B8Y1Oh5O0AKbb%2FvicuWUwhMqLkzZDOb7gP8xQ7FcZXJW8LBAimH%2BCkDFs%2BrHMITRU1HfnrQ6hb125KJBgXROZJDjQ6CLTc71FsmL9v3ZSvAdyCymrLBnrGVGOuj2UMfnGQurPIaSXziPZ5s5qSdUo%2FAWTkacsjexIkmrvlOXPEF4Lp0C6ZftVHXA3%2B0mdB9qDeUX%2FDprlH6XFlNQzGrGy28m%2BqZlkC4hlDV2HYb6c8hOJ0%2F%2Fu3mmL23D1B%2BdbmdvhQwPdH4ToO23SyRPNKU9FiWZGTXyv6N1NQgEdUxibwT%2BjRD%2BowMLLpy70GOqUBKjg7R5oAXIuEqt56OA7vLt66nIp%2FZcNdiO2iG3LoycHoaRfndYAXFjwPffUlBGQ33MztsjF1OlE%2BWSfd%2FuYywe6eZdbH4cZcPCuMnQ8%2BJ0PwCS3D9xb7Hhmstlb804ocRUpb5skrkk641nU7gppqffTILnkUO4Jq3LFCEzzZ6IuBO%2BGdtWf7f%2BKB%2BR3M7E2BFng5J3%2B%2F9RyF%2F9oYDYWoNvySn4cS&X-Amz-Signature=45ec12a5bcf71ba71c7ef9bc4771d3b870d7a941f8637c937f8979ac3a219e42&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466472FZ435%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC5QjOfs6bv9o5AWeAZ47pgxl%2FutMl8FVUkfTJVTyK01gIgDG8CKhtMqs3%2FtxhyngHnWB1BA8w4Octxbm54JtsolSMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJG0uQxyDd7yLDTBqyrcA%2B6ImVv4NdB5dw7CwBEC7uq6gLkJXOnrWfHPSNk2qpN38SO9xc1gUCBXAW6p9zXHNZAJorNzg12JeDWBF11f4%2B56kVUhKOa9TrDfPSfOZaV8YDuiwdH4SqA44HgzbK%2FUTbK%2BoCQEql2SpSXohNkxFSnx%2FU3GaK%2BJlxAkXTlIpeHIOjbb05wC75UBLVM81vLjgTpxFWegPupEavNz5RW36tUSfvwjKhjueCt%2B0TQ5Z%2BDb2lQNbgWnSYQMwrw9qsUJ2Gn%2BYE%2FMwN7ZlQUbxdEM1tRwJtWoAwDNXaBaTsytDPnkSIenggd1OZ2cNH3%2Bj8d7VAYG9auIN5B8Y1Oh5O0AKbb%2FvicuWUwhMqLkzZDOb7gP8xQ7FcZXJW8LBAimH%2BCkDFs%2BrHMITRU1HfnrQ6hb125KJBgXROZJDjQ6CLTc71FsmL9v3ZSvAdyCymrLBnrGVGOuj2UMfnGQurPIaSXziPZ5s5qSdUo%2FAWTkacsjexIkmrvlOXPEF4Lp0C6ZftVHXA3%2B0mdB9qDeUX%2FDprlH6XFlNQzGrGy28m%2BqZlkC4hlDV2HYb6c8hOJ0%2F%2Fu3mmL23D1B%2BdbmdvhQwPdH4ToO23SyRPNKU9FiWZGTXyv6N1NQgEdUxibwT%2BjRD%2BowMLLpy70GOqUBKjg7R5oAXIuEqt56OA7vLt66nIp%2FZcNdiO2iG3LoycHoaRfndYAXFjwPffUlBGQ33MztsjF1OlE%2BWSfd%2FuYywe6eZdbH4cZcPCuMnQ8%2BJ0PwCS3D9xb7Hhmstlb804ocRUpb5skrkk641nU7gppqffTILnkUO4Jq3LFCEzzZ6IuBO%2BGdtWf7f%2BKB%2BR3M7E2BFng5J3%2B%2F9RyF%2F9oYDYWoNvySn4cS&X-Amz-Signature=8be706c0c9c48f64cc0f79601ff5ecb4638e81d43be7cb012fa69507b509b9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
