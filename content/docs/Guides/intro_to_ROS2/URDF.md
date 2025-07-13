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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCAXXFT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCh%2BDx8QfybgQzhMSZH79elhwOq82Bqq%2FykwLtE8uGxTQIgay0n73HhXGN8esM5d3y1HwPKjtJL%2FoQ26zW2%2BFX96Okq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAMsDR6qgOuhjf0GjCrcA%2Bj6PvgZblj4fsgNYHz%2FZE6Tjfm73FnMmYnDxxobo1NYfuTAMUBISj8DxvMavTTDjZTaMShka0UzAngG%2F32h%2BUNJ5okzdRST2SnCzBy4lRERKYp2Q882Rpc9DLdfpwbsteP0k6BltYAQHcUSf%2BSZsnjQsmdqzK%2BARUcsuzlJ4YuwcpWi%2FQU7rZ4HA2zgkhu9b%2BDmC6JnGXcvXriimmLo4g8LIq7kNg%2BBBdZpWhgzWpFVRD6lNfbPw%2FLx5GUZ3tZV%2FH7tHI0ZzGvuBDVDCq7uNnftXsFg2TvxRBFpRMXumo27zzbh3v70mA4Q%2FXj7qyvXeyCO005iXBWiqs7sDQSswq%2BDUHrkqsmM6QIsXFV4jntH%2BS8XZsh0ygRDp3zfV66%2Fay3%2FJnOj7jyI6pSMs2M%2F%2FSV9Ci0G7iYVjtypIBo4HRZ3KmyjZ44bWONT%2FeJVbXE9qSBo3wuRaSYkR%2FunVoIa5uyzq%2BbbADou3zhwCWg%2FgqvUeoNKfS7G%2BwBCHP0xxypKZ4O7zUSNMc8O9MU6gujTJgi6pzS6I73ZXfB92ZeRjhLfWRVkTIRH8YLKWvhjJv7vEk2vb1wHGMfnw7Khe4zGWsj1%2BIEhFnFrrxeUfQHWBWJwdhGWwbkPfk%2B1YFXDMMeQ0MMGOqUBTt%2B720mSJPrBOANCvvTiv3%2BUury%2BjNBbtbDiwYLNiJ8YwNDkfypTFoRJUXfEXbOYjkEAXeFMiNdH4DXVICf632KB%2F730S%2BME6lXDa1GWHhqdXPg%2FMB%2B%2F43YejbrFvPFm%2FYc6KG9bsoy3UbDI3KXsrBY8zCGP8tXE5n8%2FVynPcXhbWX8YyBSrUZGCphyeX3D7wE21h%2BVPr0xMXhBnqJWp9DKHmCX9&X-Amz-Signature=4b1fe422af2e518d35874abff9ce6f0c85c1cf37950e375f89082a19940ffa6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCAXXFT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCh%2BDx8QfybgQzhMSZH79elhwOq82Bqq%2FykwLtE8uGxTQIgay0n73HhXGN8esM5d3y1HwPKjtJL%2FoQ26zW2%2BFX96Okq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAMsDR6qgOuhjf0GjCrcA%2Bj6PvgZblj4fsgNYHz%2FZE6Tjfm73FnMmYnDxxobo1NYfuTAMUBISj8DxvMavTTDjZTaMShka0UzAngG%2F32h%2BUNJ5okzdRST2SnCzBy4lRERKYp2Q882Rpc9DLdfpwbsteP0k6BltYAQHcUSf%2BSZsnjQsmdqzK%2BARUcsuzlJ4YuwcpWi%2FQU7rZ4HA2zgkhu9b%2BDmC6JnGXcvXriimmLo4g8LIq7kNg%2BBBdZpWhgzWpFVRD6lNfbPw%2FLx5GUZ3tZV%2FH7tHI0ZzGvuBDVDCq7uNnftXsFg2TvxRBFpRMXumo27zzbh3v70mA4Q%2FXj7qyvXeyCO005iXBWiqs7sDQSswq%2BDUHrkqsmM6QIsXFV4jntH%2BS8XZsh0ygRDp3zfV66%2Fay3%2FJnOj7jyI6pSMs2M%2F%2FSV9Ci0G7iYVjtypIBo4HRZ3KmyjZ44bWONT%2FeJVbXE9qSBo3wuRaSYkR%2FunVoIa5uyzq%2BbbADou3zhwCWg%2FgqvUeoNKfS7G%2BwBCHP0xxypKZ4O7zUSNMc8O9MU6gujTJgi6pzS6I73ZXfB92ZeRjhLfWRVkTIRH8YLKWvhjJv7vEk2vb1wHGMfnw7Khe4zGWsj1%2BIEhFnFrrxeUfQHWBWJwdhGWwbkPfk%2B1YFXDMMeQ0MMGOqUBTt%2B720mSJPrBOANCvvTiv3%2BUury%2BjNBbtbDiwYLNiJ8YwNDkfypTFoRJUXfEXbOYjkEAXeFMiNdH4DXVICf632KB%2F730S%2BME6lXDa1GWHhqdXPg%2FMB%2B%2F43YejbrFvPFm%2FYc6KG9bsoy3UbDI3KXsrBY8zCGP8tXE5n8%2FVynPcXhbWX8YyBSrUZGCphyeX3D7wE21h%2BVPr0xMXhBnqJWp9DKHmCX9&X-Amz-Signature=473385ee81edf81af201bdb1c982bf2b81afbac4a87320482c84aa646ed18f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
