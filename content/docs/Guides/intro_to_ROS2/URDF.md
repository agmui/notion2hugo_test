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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCN6RDV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVgjquGRvyh%2FE2N1K6nKU9NZg450VnLy8ptvMiAZK8ngIgDe1ovddPTBYHOlRAbjxdWGkdJawYgoCdSsfEyj2nOjgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfjWzNHUUm2%2FqEC7CrcA6YRKz%2FK2%2Bh3CwBsOqYtvGDJ%2FYeYKxnOCpvtZrZIx2zmJpNThCoTh4s84IP29%2F8YQKickpcvexhYmEzIZZs%2FisxsR3M8lco7i3GvyEUEfExOCBlTQ7lCQ3spCs2m%2F7OPbj8a0lYjw4YXXbOpnLDgVUMCJeNAV9xULlSMEdIWu5jnFgD8qwnuQnIRiLQ6Aytb9E6s08gy7RTx4eqcZSAQBBy%2BAcT5bZO44QbGuDQAeUiMr%2Bsdkto9hZ4wCJ5TkZY8u2Q%2BnsO%2Be0eBHHpQkdzzcrDX0Z45C1LiJVQMqFG%2BGxYYlOWqN5M5uAn3PfTrrXB0RzQhj0XeSDALJjAtKt7boMjos0hU5QWuLSKme2DGLvfnDoTKDXDPkiJNQjVkFO3Npt5JACPKto%2Fom9ZLZFXS5GaGalyDXcvxu%2BdWkFJEbW0f%2BCFKJqXtFL2q7N5LX%2BNj%2BjrgV1EItmawnlajHz6ASbAAfOqaJ%2BcN2oAo9G0VQ3dJ%2Bc%2Bg4iWch%2FkbK2zJ7GDDuhmWUtC%2Bg06tVztQ83egsYrMYA77AzxGyrJwkwbNTY%2B%2FIxWVfeQAHmfxz5CDSsQf7AvY%2B%2FLLnSCpv%2FaQAF6z%2BLMyjy%2Bowj3elCJTlfsFj2yG9XI2nIEO6b%2FEbS8kMNjV2cIGOqUB7jkyZ8D8SMvX3uyoroCd4%2FrYr3JdINF%2Bm6tiCRbv8TkSOirch45dxh8QQLPqRPORA8tNOieiamJ8B4jjAG1wXV%2FcNvvKXDvgf6lJe%2FRZGQo0CS3bWHUfnM7nFvQ5CO8ALU8BB39ZBYEuRZgUcNtWIP93W0DYcmsh%2B34CIfXFtgEbK6q418yehWj1%2FEg68UX5atOaO9BxYanpQgnD6UAIp%2BJUe4Uv&X-Amz-Signature=b01bd62dd3aef8bfae0322fb759aa1188a7be2073d49970c0ad8f5ff63ab0f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCN6RDV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVgjquGRvyh%2FE2N1K6nKU9NZg450VnLy8ptvMiAZK8ngIgDe1ovddPTBYHOlRAbjxdWGkdJawYgoCdSsfEyj2nOjgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfjWzNHUUm2%2FqEC7CrcA6YRKz%2FK2%2Bh3CwBsOqYtvGDJ%2FYeYKxnOCpvtZrZIx2zmJpNThCoTh4s84IP29%2F8YQKickpcvexhYmEzIZZs%2FisxsR3M8lco7i3GvyEUEfExOCBlTQ7lCQ3spCs2m%2F7OPbj8a0lYjw4YXXbOpnLDgVUMCJeNAV9xULlSMEdIWu5jnFgD8qwnuQnIRiLQ6Aytb9E6s08gy7RTx4eqcZSAQBBy%2BAcT5bZO44QbGuDQAeUiMr%2Bsdkto9hZ4wCJ5TkZY8u2Q%2BnsO%2Be0eBHHpQkdzzcrDX0Z45C1LiJVQMqFG%2BGxYYlOWqN5M5uAn3PfTrrXB0RzQhj0XeSDALJjAtKt7boMjos0hU5QWuLSKme2DGLvfnDoTKDXDPkiJNQjVkFO3Npt5JACPKto%2Fom9ZLZFXS5GaGalyDXcvxu%2BdWkFJEbW0f%2BCFKJqXtFL2q7N5LX%2BNj%2BjrgV1EItmawnlajHz6ASbAAfOqaJ%2BcN2oAo9G0VQ3dJ%2Bc%2Bg4iWch%2FkbK2zJ7GDDuhmWUtC%2Bg06tVztQ83egsYrMYA77AzxGyrJwkwbNTY%2B%2FIxWVfeQAHmfxz5CDSsQf7AvY%2B%2FLLnSCpv%2FaQAF6z%2BLMyjy%2Bowj3elCJTlfsFj2yG9XI2nIEO6b%2FEbS8kMNjV2cIGOqUB7jkyZ8D8SMvX3uyoroCd4%2FrYr3JdINF%2Bm6tiCRbv8TkSOirch45dxh8QQLPqRPORA8tNOieiamJ8B4jjAG1wXV%2FcNvvKXDvgf6lJe%2FRZGQo0CS3bWHUfnM7nFvQ5CO8ALU8BB39ZBYEuRZgUcNtWIP93W0DYcmsh%2B34CIfXFtgEbK6q418yehWj1%2FEg68UX5atOaO9BxYanpQgnD6UAIp%2BJUe4Uv&X-Amz-Signature=04b6ac60c4b24263ff49b601c84505f803f39a4b1336dc3efdada2baf4265bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
