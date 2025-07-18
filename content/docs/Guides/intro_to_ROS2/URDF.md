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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDISLTH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBkNsMyqZFF7u0SHzD0LNewuQBHKpI2plJQm%2Flmx%2FlMVAiBIqo27EXM6SeH2MlrcbWUTzhrQVMt6puEU0xQsVE6GUCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYOeIj%2FIemtfl2aUKtwDwsBRjQOfIt95gfizcC%2FjbthHqg29T5ZjJTZ0NmAhlqesqRHHs%2B0v3jTW44pWyzvq0maQokvVRnOO%2BQgpORqjDQPoWqfMjWuKvcPbLKQBs0lbROrlj%2BdIBhiF%2Fy5vxR4sVcQ8dgpB67wO8%2BEiM3hxI8hjxSacki5EkFWuQIkVPqG%2FRIHvrhlX42%2BtAwjxIq3DQs37cnxinqRdOE49tb7mc%2FzIOUK7pxn4OyCtTVtn6A%2BfvGAiqTMV4taxh3AJh4nUYTvPWT9%2FcsrdeunyzFjGPxSsMvRZAsEhaqfRUrRKMjC7tU27CubeqILfMKgtnU%2BigFOj5YofjQR1MQLv0ZlG3CZ6ShEYK4Do24cXHrf5gspwURawSlCVP%2FGi9ASFFmGJxO9BjsrePiAwkA4mVDswAuTu72cj86o%2FhvYh125iNwz992wAKDq2tGNgLDn7Wi9VHRmca1nmy8K1ej5%2FIHKi1J7cX06HAjqXmaB5h8zAEcGeK0LcQKqSgruWj%2FLBaG3vqp89%2FTZm1dvwYCs8Xp0okk9qjEzofA6UKnR688HR%2FeLRKXmOEuaVB1J18QuZei922O9TQ9eTFMJcXvaXBEtcLVZs5pg6872Zi9r5XlDhRRdYYmptSzITt7fdbCIwi9DowwY6pgHGSldUwwuQHihBfot6e24W3Kp4vCvnRs8dRrWknif%2FnFAXhrEuGNBP549uPjqCj6MGvlF7m%2FJvKVmpElQ84mDpr1GI4PVqIWZ5F95wiayhUJMSqpQgYp%2F1rI%2BHEqgc8aTHL8V0EfG6kl2OJdO3n%2BZN5KHGqctavslBx1ZQpiLVTD58gFV4YMPSjwRakz8cNOWYK1vBro8lY1JhdHCY6gTtgtG0aZpr&X-Amz-Signature=63075ef59d7bc364f9bb49285c83a665946648473e528ced66094fd52f92b6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDISLTH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBkNsMyqZFF7u0SHzD0LNewuQBHKpI2plJQm%2Flmx%2FlMVAiBIqo27EXM6SeH2MlrcbWUTzhrQVMt6puEU0xQsVE6GUCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYOeIj%2FIemtfl2aUKtwDwsBRjQOfIt95gfizcC%2FjbthHqg29T5ZjJTZ0NmAhlqesqRHHs%2B0v3jTW44pWyzvq0maQokvVRnOO%2BQgpORqjDQPoWqfMjWuKvcPbLKQBs0lbROrlj%2BdIBhiF%2Fy5vxR4sVcQ8dgpB67wO8%2BEiM3hxI8hjxSacki5EkFWuQIkVPqG%2FRIHvrhlX42%2BtAwjxIq3DQs37cnxinqRdOE49tb7mc%2FzIOUK7pxn4OyCtTVtn6A%2BfvGAiqTMV4taxh3AJh4nUYTvPWT9%2FcsrdeunyzFjGPxSsMvRZAsEhaqfRUrRKMjC7tU27CubeqILfMKgtnU%2BigFOj5YofjQR1MQLv0ZlG3CZ6ShEYK4Do24cXHrf5gspwURawSlCVP%2FGi9ASFFmGJxO9BjsrePiAwkA4mVDswAuTu72cj86o%2FhvYh125iNwz992wAKDq2tGNgLDn7Wi9VHRmca1nmy8K1ej5%2FIHKi1J7cX06HAjqXmaB5h8zAEcGeK0LcQKqSgruWj%2FLBaG3vqp89%2FTZm1dvwYCs8Xp0okk9qjEzofA6UKnR688HR%2FeLRKXmOEuaVB1J18QuZei922O9TQ9eTFMJcXvaXBEtcLVZs5pg6872Zi9r5XlDhRRdYYmptSzITt7fdbCIwi9DowwY6pgHGSldUwwuQHihBfot6e24W3Kp4vCvnRs8dRrWknif%2FnFAXhrEuGNBP549uPjqCj6MGvlF7m%2FJvKVmpElQ84mDpr1GI4PVqIWZ5F95wiayhUJMSqpQgYp%2F1rI%2BHEqgc8aTHL8V0EfG6kl2OJdO3n%2BZN5KHGqctavslBx1ZQpiLVTD58gFV4YMPSjwRakz8cNOWYK1vBro8lY1JhdHCY6gTtgtG0aZpr&X-Amz-Signature=c73d3982638e8bd748ee05d019c7ebbedf9354cd4cc9724ee91ef7afd0c8df45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
