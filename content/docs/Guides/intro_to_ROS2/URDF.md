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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHZ43L4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZoKbGtoDh9bGvIM41zqQzvsHkEuMbZCJZ0TPyEUEeQIgfnWdafl5p0Cf%2BXckIAv5ywqFjXgmI%2B6SAQXdG0ULyjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaQzzPsawYxYHsXgircA0w5G7mpxhDTdOHKrWrJnG0c9IyPmuyd9jxrgfbBuPGKelYVQDee%2Fp1v2V9EjLT6PqNbc88vpjZwUScwBn7ISfQDM4whvqruy03IzHVVT9R16KCjI2AG3asiSawzy7ZBpQ639aBfMve5GX73NpGVfbiW5dtH7UZOJhfhGG6ga5bKNnHkc5ia8ySNOmQhhmRmt81GTehku0V08etRzPm3wn16WI6n%2FCc%2Fc6QSG2XBNJUUExkVz%2FOK2QSQmuAMXF0CtcztOgUVaoVgZBS4axLyUJhUesTZnD0LCwIDvACIf%2Fu4WhGr21T%2FT8N6ZBjSBk6mPrk%2B7j5B%2FWZNkgTrU3EzLbzxZSJhN3nvXVJz1jTxV4pifwT2LmnoycJAJqTRSF2R9FuZFqizYEDfmdt5Zl4eHY94MeAR8uwLFwcADmZsjqkRv3yKmJXqCCMPvSBTjX5CfR9nkbYZeSlzNFFzqw0D3%2FD9q%2B9H76sgjaHKAdo4b7qLrDmrmtPgEwJbmlhmWunV1y9evpILU5HV1%2FBJ1OFJZYc0UZOoeC2WWHzsqlMO9o%2B8rOYgMqM60czHm1zQa7iWUSLPqOXcArVPPvH%2BYFu03Ps53xqjF0fSmd4sET4QBDCcNHvQs%2FD9RojbDoYnMIremsIGOqUBypc0kN8GXqhvROYE2%2Ff7JSAi9UmoHSp5XBQRgdYEZKRcltXtAUDtDa2Jooqtxe6fOslGehjQYKXIqFUYy%2Bj2w4n9fCUAxT5o107nktz7Qyl1E%2FqCFX5Ilt3OT4m3%2BSUpRaQBPS%2FW8aLpK3LUV4%2BF3qgl2BBWF4bg75PxDH%2B2uO5L0BLg%2Fgt7eNiji6Hj1sHN6kWMoicZ7qHTaUZqpNs1yxp0WNBe&X-Amz-Signature=51a6b7e23724924dd5233647af48285d159d2647c6fa5d5e7377b525e29fc13c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHZ43L4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZoKbGtoDh9bGvIM41zqQzvsHkEuMbZCJZ0TPyEUEeQIgfnWdafl5p0Cf%2BXckIAv5ywqFjXgmI%2B6SAQXdG0ULyjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaQzzPsawYxYHsXgircA0w5G7mpxhDTdOHKrWrJnG0c9IyPmuyd9jxrgfbBuPGKelYVQDee%2Fp1v2V9EjLT6PqNbc88vpjZwUScwBn7ISfQDM4whvqruy03IzHVVT9R16KCjI2AG3asiSawzy7ZBpQ639aBfMve5GX73NpGVfbiW5dtH7UZOJhfhGG6ga5bKNnHkc5ia8ySNOmQhhmRmt81GTehku0V08etRzPm3wn16WI6n%2FCc%2Fc6QSG2XBNJUUExkVz%2FOK2QSQmuAMXF0CtcztOgUVaoVgZBS4axLyUJhUesTZnD0LCwIDvACIf%2Fu4WhGr21T%2FT8N6ZBjSBk6mPrk%2B7j5B%2FWZNkgTrU3EzLbzxZSJhN3nvXVJz1jTxV4pifwT2LmnoycJAJqTRSF2R9FuZFqizYEDfmdt5Zl4eHY94MeAR8uwLFwcADmZsjqkRv3yKmJXqCCMPvSBTjX5CfR9nkbYZeSlzNFFzqw0D3%2FD9q%2B9H76sgjaHKAdo4b7qLrDmrmtPgEwJbmlhmWunV1y9evpILU5HV1%2FBJ1OFJZYc0UZOoeC2WWHzsqlMO9o%2B8rOYgMqM60czHm1zQa7iWUSLPqOXcArVPPvH%2BYFu03Ps53xqjF0fSmd4sET4QBDCcNHvQs%2FD9RojbDoYnMIremsIGOqUBypc0kN8GXqhvROYE2%2Ff7JSAi9UmoHSp5XBQRgdYEZKRcltXtAUDtDa2Jooqtxe6fOslGehjQYKXIqFUYy%2Bj2w4n9fCUAxT5o107nktz7Qyl1E%2FqCFX5Ilt3OT4m3%2BSUpRaQBPS%2FW8aLpK3LUV4%2BF3qgl2BBWF4bg75PxDH%2B2uO5L0BLg%2Fgt7eNiji6Hj1sHN6kWMoicZ7qHTaUZqpNs1yxp0WNBe&X-Amz-Signature=94f90da04fcdcf8ac0c93c1125d51b4b84dd9d65689caafef91d1e0adcf67f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
