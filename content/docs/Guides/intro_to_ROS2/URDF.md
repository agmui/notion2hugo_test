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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUD4YAIF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEFHLCNqbUT0B8thfnsSuWHQ7icc4x8Mw%2FvWQhr8r2BQAiEAhKYlbwPjSm4vrFcD7dcVyj328IetA4p5mkO7Rfv4uvkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGTpKHB7WRhVaGeD7CrcA6AOAQumrbtMVcYNDICQOSAPiRCUdA%2FUHOCgaoNt32kMOcRnpz7SlYhY6cUNY9cXJFJq2UTd6rvrhXCS58nH7We%2BafiavYzBdBEyLm0QnPa%2BHQtlwOhHutO9ZmxCNi4r5Lg%2B5aJQ0UG8WpO9hEMiWxap%2Fv3zZAXDoR0msb%2FE6KtF9Ai08wNL3mZrmDAIn6vKEWq8ub96H%2Fi2Y27uvxaXls0iM1b5C0pmKjwWcUslmO0gJyGvu3r4f%2FnShIHSU16oHJ4MQjxonu6WInuUXmKOga7RC%2FhWvQJQBk6%2F%2FnRd0NDI4jM5YxImOuuo1suXdE77H8YUCUpizi1A5jVk1%2FyJZcPlnrBfl5O2NEq7dfg8%2BjGA8YYF0AQ1fNS9uQCMJZxpZtBooIf47D3uflSEiX89scskfjAWPHUH7XzqGarvaCf4qSaHf6OUELeEqz%2BJ%2BqJMXMXNVNzxF1mweIbVgATBaEvrrZVTVNs9tJx4k7EjQdp%2BcyQo9z8AfnGb%2B%2BtK2n2cskbi3ez%2FocgchSaMZiQkeKBjEfJS2o8JgbCNqWJYsHEoD0wyF8l%2B6rQFvjVwaxNoQ8SxDjYtMRjTnTDgsAI%2BwKedbJGDUB6amgSE87EvHgEwkWwZ9BwZa3PItGvwMO%2F%2BlL0GOqUBC1ntJpowFP%2B2zt%2Fw1n%2BpkvdaHa8OQWVyDx0s4bXELwI%2FI7uTyERecf8RFEWNQ8Aa96wFIhbGDccGnQ0I79wo6z4b4JI2pqYiQoo1aaMO3LiXGpmQCNvImYWP4XploH%2FiivjqbpllzxidCyvkXc4Wyb3l%2F4foT83PvR4%2F27aManL1D63XmGzlSx%2F8dpAYuabTDymx1LDJIRKHjttQ6%2F65PSyXrK2C&X-Amz-Signature=f51cfc282d9195f36d615610b250d0fbef0d64b6675236fc0b44097bb8fe7a77&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUD4YAIF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEFHLCNqbUT0B8thfnsSuWHQ7icc4x8Mw%2FvWQhr8r2BQAiEAhKYlbwPjSm4vrFcD7dcVyj328IetA4p5mkO7Rfv4uvkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGTpKHB7WRhVaGeD7CrcA6AOAQumrbtMVcYNDICQOSAPiRCUdA%2FUHOCgaoNt32kMOcRnpz7SlYhY6cUNY9cXJFJq2UTd6rvrhXCS58nH7We%2BafiavYzBdBEyLm0QnPa%2BHQtlwOhHutO9ZmxCNi4r5Lg%2B5aJQ0UG8WpO9hEMiWxap%2Fv3zZAXDoR0msb%2FE6KtF9Ai08wNL3mZrmDAIn6vKEWq8ub96H%2Fi2Y27uvxaXls0iM1b5C0pmKjwWcUslmO0gJyGvu3r4f%2FnShIHSU16oHJ4MQjxonu6WInuUXmKOga7RC%2FhWvQJQBk6%2F%2FnRd0NDI4jM5YxImOuuo1suXdE77H8YUCUpizi1A5jVk1%2FyJZcPlnrBfl5O2NEq7dfg8%2BjGA8YYF0AQ1fNS9uQCMJZxpZtBooIf47D3uflSEiX89scskfjAWPHUH7XzqGarvaCf4qSaHf6OUELeEqz%2BJ%2BqJMXMXNVNzxF1mweIbVgATBaEvrrZVTVNs9tJx4k7EjQdp%2BcyQo9z8AfnGb%2B%2BtK2n2cskbi3ez%2FocgchSaMZiQkeKBjEfJS2o8JgbCNqWJYsHEoD0wyF8l%2B6rQFvjVwaxNoQ8SxDjYtMRjTnTDgsAI%2BwKedbJGDUB6amgSE87EvHgEwkWwZ9BwZa3PItGvwMO%2F%2BlL0GOqUBC1ntJpowFP%2B2zt%2Fw1n%2BpkvdaHa8OQWVyDx0s4bXELwI%2FI7uTyERecf8RFEWNQ8Aa96wFIhbGDccGnQ0I79wo6z4b4JI2pqYiQoo1aaMO3LiXGpmQCNvImYWP4XploH%2FiivjqbpllzxidCyvkXc4Wyb3l%2F4foT83PvR4%2F27aManL1D63XmGzlSx%2F8dpAYuabTDymx1LDJIRKHjttQ6%2F65PSyXrK2C&X-Amz-Signature=2356375e7d500c5288189c3f60cf80c5018fecc45295411877c715c822ef8835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
