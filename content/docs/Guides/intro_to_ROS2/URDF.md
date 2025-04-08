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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYDCCH6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkfcQbgKqeE9K0UCsQngdHPwlV4nRWiX%2BQ%2BRbKrHoeKwIgbg8w6RelIUazw8BXNhh8oDQDQb%2FzUSEfral%2FT08zUkUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOrFva4HPiY0fkBqYircA43DLoWgpAGjYR2mHTU9LuorJnWa6fNq9QQpR%2FRIf4MJBvqCkIWnywLhLVkYNtC1gvOnRIBjWN8Bjb%2FEoVRWuxyHZvmQOnQk8Q1a8HwvP00iIwbaM6ztz8QGFRwcDSI%2F5jLxo%2BPKsRmNuRZUmoXH%2BRCTUF5UWLfT4H1iKmKsIWhTU8TN7j2vPoyJ5cNrrMoO0cU%2Br%2BIqLhK0QNbvZ26NMt8VoGi4j5OIomRoqjgmwMWOZlvYlwUW1sbPt807LOkVYfIwTPdaME2Mwi2okfCMggI8lQQMawFzzNq%2BVSxPQPvUBerlVifMlcWawJf7xG8mzT6l9rI0cj0gm1c7baDCChPKTimX3A48sAKv8Rs%2BuQoxiDD9Fyf3vhVKZzNp4hpXMyc4DhB54OjYYoFwxUbDH1yUxzgffX9eCdgUbQr0zq8J0shKgN1C%2FQlLJLIEPTWYSbsOtiZrmykHu%2FEVjG8QbaLEPIr8XCvqxeQxafxnRDnQerd%2F3Cbzb%2Fpy9yIz22yHPTmKEdSfdu%2FMZtHLx0xPwnRQBvYaAPOf2xL4ye32QBARAVdkfGNaSNhBcrQSylA1CG1vsyS3CBmU3XL8g0SHh6RppPiV0F%2B0UpWtFA%2FOpqC9AAGkvB%2FjUdDZbt12MMjX1L8GOqUBKWznMrUlujLSnvFivglw2Suc%2F%2FH8fhwFcPmHjAVKsIfEKvOqHrOiZsZ7Ebv8RZUO7%2FbQcPZdLvxzm6VtkStM39rHuwH0qFvlTFQsaMIjEAwcwlikcgMi8awWRkq1n46JET%2F2isqkWMaeI8hakWuhSv0a1P5xwJZHl8YGTlpWNduUS4A8TJaOErox3ejo6KlSxBbliRXxQ%2FW7ZgC0d3m%2BTNCFM6Q1&X-Amz-Signature=14e3974a9eb0897b4c96f810a8fb674f1965ebca34ce097d282f8cff39903597&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYDCCH6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkfcQbgKqeE9K0UCsQngdHPwlV4nRWiX%2BQ%2BRbKrHoeKwIgbg8w6RelIUazw8BXNhh8oDQDQb%2FzUSEfral%2FT08zUkUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOrFva4HPiY0fkBqYircA43DLoWgpAGjYR2mHTU9LuorJnWa6fNq9QQpR%2FRIf4MJBvqCkIWnywLhLVkYNtC1gvOnRIBjWN8Bjb%2FEoVRWuxyHZvmQOnQk8Q1a8HwvP00iIwbaM6ztz8QGFRwcDSI%2F5jLxo%2BPKsRmNuRZUmoXH%2BRCTUF5UWLfT4H1iKmKsIWhTU8TN7j2vPoyJ5cNrrMoO0cU%2Br%2BIqLhK0QNbvZ26NMt8VoGi4j5OIomRoqjgmwMWOZlvYlwUW1sbPt807LOkVYfIwTPdaME2Mwi2okfCMggI8lQQMawFzzNq%2BVSxPQPvUBerlVifMlcWawJf7xG8mzT6l9rI0cj0gm1c7baDCChPKTimX3A48sAKv8Rs%2BuQoxiDD9Fyf3vhVKZzNp4hpXMyc4DhB54OjYYoFwxUbDH1yUxzgffX9eCdgUbQr0zq8J0shKgN1C%2FQlLJLIEPTWYSbsOtiZrmykHu%2FEVjG8QbaLEPIr8XCvqxeQxafxnRDnQerd%2F3Cbzb%2Fpy9yIz22yHPTmKEdSfdu%2FMZtHLx0xPwnRQBvYaAPOf2xL4ye32QBARAVdkfGNaSNhBcrQSylA1CG1vsyS3CBmU3XL8g0SHh6RppPiV0F%2B0UpWtFA%2FOpqC9AAGkvB%2FjUdDZbt12MMjX1L8GOqUBKWznMrUlujLSnvFivglw2Suc%2F%2FH8fhwFcPmHjAVKsIfEKvOqHrOiZsZ7Ebv8RZUO7%2FbQcPZdLvxzm6VtkStM39rHuwH0qFvlTFQsaMIjEAwcwlikcgMi8awWRkq1n46JET%2F2isqkWMaeI8hakWuhSv0a1P5xwJZHl8YGTlpWNduUS4A8TJaOErox3ejo6KlSxBbliRXxQ%2FW7ZgC0d3m%2BTNCFM6Q1&X-Amz-Signature=8854e24c693387df4c85dbbc96e696b4619b7f6bed8a271fcecc33ead1f7b697&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
