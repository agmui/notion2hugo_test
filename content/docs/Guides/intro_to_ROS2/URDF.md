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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Q4EBUE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTl2wZ4aPQFobZOfJYMmdu7eoOo92pYlXO1UUtm2qkmAiBpImN0gqnDdaMzByEKSWTljZLUHSIK8AkvvCQ8si6zxSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKYJd6%2Bi%2BipD4bydtKtwDsqh4QjREdN8Uu0Y6twtopdTeGJD7QyHShX8hUQbEVfh7OpBoupmLJFG5CRtzfB3tmFrDNs9fmjgDGIlZuM%2FzzCxh4M92L40gLxHBIoWBsvpvkXDYk6YAqYeK4%2Bol11FLSASy0xqOAZIP9dOSqezpZg6xM1BuL5GykCM%2FT85xM06sVLX5yhbLigGFyqIFifiTbd2BhOiXx6cEPC70Jqkk410bSXHDSTk49s0tpAxrizPOO5SM6VfHHIrThkJEsHPq4w533rhXDp97kM7ZjYxC3MGWxVLxRRntUldP3CHy4Jm8gvCqZ18aUlNjRcdr%2BcrHcHJRS62X9%2FBMGUAMgHTVU%2F625n435tMbT1vMcQFKxjf0LBbeIRyVedHFESh9thSjn4T7ooCtKHW%2BQaiSsl2cK0JcDDKb4fflgPIQXAak96uTcUoddpKY4mX%2Fnxnae%2BlTUbwmB9EVhIFy%2FeBOJc5e3Y83agF47uQ09Hz6FnmHCecHNs0rOPmIDHP9aM0oo5MlgzOqtzD5TCQl6JvEaeVd68AOZ%2BnjxnWTcUypIfvNvPG5WXfpH2i%2BSSV8uSjl9buclFUNAacouTBtaRwjfNNRZdLtY08E1xDfrKotKNC9cB40lkW%2BG6k3wB1EwWQwk5X1vwY6pgEZrhZqBw3PnZOTiRlRYYr1IoFTSSHZb5gvT4aTrA%2BEJoXihafHmhEVPh2z2nw64Tp%2FaZVytABzohu7JxXK3K1aqOZFvDI5sTfLbBQATiZiCdAxX3vW3dpEVTiBVvL0ElJOu3Jz9JWmqVBWb0scYHTsghhLILakz63nq7c5ACY4r3ImZ3umx7MSxbtA%2FvmeCyul1yR3jnRBiO51%2FHmCqL8%2BUVi5a%2FR2&X-Amz-Signature=5c4e00779865db461f0dbfa9b4f018beb7302cbf35975f2481ae5999ac92bd4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Q4EBUE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTl2wZ4aPQFobZOfJYMmdu7eoOo92pYlXO1UUtm2qkmAiBpImN0gqnDdaMzByEKSWTljZLUHSIK8AkvvCQ8si6zxSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKYJd6%2Bi%2BipD4bydtKtwDsqh4QjREdN8Uu0Y6twtopdTeGJD7QyHShX8hUQbEVfh7OpBoupmLJFG5CRtzfB3tmFrDNs9fmjgDGIlZuM%2FzzCxh4M92L40gLxHBIoWBsvpvkXDYk6YAqYeK4%2Bol11FLSASy0xqOAZIP9dOSqezpZg6xM1BuL5GykCM%2FT85xM06sVLX5yhbLigGFyqIFifiTbd2BhOiXx6cEPC70Jqkk410bSXHDSTk49s0tpAxrizPOO5SM6VfHHIrThkJEsHPq4w533rhXDp97kM7ZjYxC3MGWxVLxRRntUldP3CHy4Jm8gvCqZ18aUlNjRcdr%2BcrHcHJRS62X9%2FBMGUAMgHTVU%2F625n435tMbT1vMcQFKxjf0LBbeIRyVedHFESh9thSjn4T7ooCtKHW%2BQaiSsl2cK0JcDDKb4fflgPIQXAak96uTcUoddpKY4mX%2Fnxnae%2BlTUbwmB9EVhIFy%2FeBOJc5e3Y83agF47uQ09Hz6FnmHCecHNs0rOPmIDHP9aM0oo5MlgzOqtzD5TCQl6JvEaeVd68AOZ%2BnjxnWTcUypIfvNvPG5WXfpH2i%2BSSV8uSjl9buclFUNAacouTBtaRwjfNNRZdLtY08E1xDfrKotKNC9cB40lkW%2BG6k3wB1EwWQwk5X1vwY6pgEZrhZqBw3PnZOTiRlRYYr1IoFTSSHZb5gvT4aTrA%2BEJoXihafHmhEVPh2z2nw64Tp%2FaZVytABzohu7JxXK3K1aqOZFvDI5sTfLbBQATiZiCdAxX3vW3dpEVTiBVvL0ElJOu3Jz9JWmqVBWb0scYHTsghhLILakz63nq7c5ACY4r3ImZ3umx7MSxbtA%2FvmeCyul1yR3jnRBiO51%2FHmCqL8%2BUVi5a%2FR2&X-Amz-Signature=b9d99159ee6166674e8ee6ce3ce65caef5ec61acc06bc973bd80511c1771b19b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
