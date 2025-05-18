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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOC4BI6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzs5IU9S60xIdNzDRyHfFhWJPDdjQHUadRVIBPwRz3pAiBZ2E3qpPe8%2B3RI%2FvfVG5RPNKA%2FllhrS3uxxY9EQWSw5yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMovktCpP46cYV7vxwKtwDSL5%2BKHbYWPSRvSkaSREhGJTFwj%2FhNy%2BU8K4KvZCIyJzkP3BX1xWg7foS7mPIu9DCh1RdawjSlun02xziwKXFt4YPbj%2F6ZDunleQekx6pVxHMQAQWVdzKbV9LO1rt66nUWL24EOmSyli%2BS9MdWDBzsKptK3IFJdTu4AaEu3LfsH8CsDMDwh5gMHPcaW%2FU3n6wokSefu8HhMPGubyhFPEXmGoytITF7svIQI3nAPzZuQYvzQEE%2B9ZnAs5aRm%2BRDMEwdmLK%2BCtF2x8C8MYQmayg3%2BCvaaZJrqCGxLaGerc4zO8V58uD000uh5go18suP3B9ULzUfYSj2bvO%2BPqGU4XyhaVO6r2axLiW2ezLO9PgzH1Sk1a1IRsoCLVwKqT8iBehkpikxxjrDEYp%2BtEy8Cttns%2Flf6M%2FCIrpPW7Myb%2BDPF1cpcuRYI8b70gQ9TXYPRIQFcNFCkweUIN3lM6BfKhVcDPIMhMHKFaF2dD45C9vDgQjxagd2gRj5mIrBQ0z%2Bf%2B0ykwCyCvLOOEOeuFYeSN8LKxBmH%2FdLMjRVqTStJCH4OXzIoYcBW8Dk3niM25q32fxGO%2BljUT4Ff7hxErYH07rAyyCAFE2JwSMo%2F83zc%2FYLmDErGuy8ipR9yYGLeYwhbWmwQY6pgFzNKtyZ1KAJMgu4HeNDvUGaTZTS5IsSG3WqygXdA9Yd%2BCpoFZW1LZsXP9gWyOMI2LHa1Rf2cxCJDGDyt4PQxddsGvJK4lFbhCV5KP755Z1VmmSIQX6%2FNZXxU31B7mF7qwSWa96hzZNs6Q0vJ3hVhyDrtjKXFJNL%2BLCawHZMVaPzp5GbvQzzl9XyZ5osgit3%2B7B%2F0mIGymODyxHx%2BwGG%2BoU%2BK3N44th&X-Amz-Signature=56ccf8ede1a88c665ecae4935ac7a5a5c731c32fa7728b22ef1deb5e4a5544ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOC4BI6C%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzs5IU9S60xIdNzDRyHfFhWJPDdjQHUadRVIBPwRz3pAiBZ2E3qpPe8%2B3RI%2FvfVG5RPNKA%2FllhrS3uxxY9EQWSw5yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMovktCpP46cYV7vxwKtwDSL5%2BKHbYWPSRvSkaSREhGJTFwj%2FhNy%2BU8K4KvZCIyJzkP3BX1xWg7foS7mPIu9DCh1RdawjSlun02xziwKXFt4YPbj%2F6ZDunleQekx6pVxHMQAQWVdzKbV9LO1rt66nUWL24EOmSyli%2BS9MdWDBzsKptK3IFJdTu4AaEu3LfsH8CsDMDwh5gMHPcaW%2FU3n6wokSefu8HhMPGubyhFPEXmGoytITF7svIQI3nAPzZuQYvzQEE%2B9ZnAs5aRm%2BRDMEwdmLK%2BCtF2x8C8MYQmayg3%2BCvaaZJrqCGxLaGerc4zO8V58uD000uh5go18suP3B9ULzUfYSj2bvO%2BPqGU4XyhaVO6r2axLiW2ezLO9PgzH1Sk1a1IRsoCLVwKqT8iBehkpikxxjrDEYp%2BtEy8Cttns%2Flf6M%2FCIrpPW7Myb%2BDPF1cpcuRYI8b70gQ9TXYPRIQFcNFCkweUIN3lM6BfKhVcDPIMhMHKFaF2dD45C9vDgQjxagd2gRj5mIrBQ0z%2Bf%2B0ykwCyCvLOOEOeuFYeSN8LKxBmH%2FdLMjRVqTStJCH4OXzIoYcBW8Dk3niM25q32fxGO%2BljUT4Ff7hxErYH07rAyyCAFE2JwSMo%2F83zc%2FYLmDErGuy8ipR9yYGLeYwhbWmwQY6pgFzNKtyZ1KAJMgu4HeNDvUGaTZTS5IsSG3WqygXdA9Yd%2BCpoFZW1LZsXP9gWyOMI2LHa1Rf2cxCJDGDyt4PQxddsGvJK4lFbhCV5KP755Z1VmmSIQX6%2FNZXxU31B7mF7qwSWa96hzZNs6Q0vJ3hVhyDrtjKXFJNL%2BLCawHZMVaPzp5GbvQzzl9XyZ5osgit3%2B7B%2F0mIGymODyxHx%2BwGG%2BoU%2BK3N44th&X-Amz-Signature=4dde675eb6f5fd502386df62fa513abd1bb187b5cb8ff91b729df0c5ae5b84bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
