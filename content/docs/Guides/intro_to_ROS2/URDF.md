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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFRG473%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIC4DUqFAdItwIr2eUC9iXf%2BUzk57eVMXAtzB72BRYXRiAiA1qbKgR0TfEtE8PdfmuYBqV6KidwAXz5WkDkv5rvOPHSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2BNYY8GrwblQ1VcRKtwD%2FkA29ZHukrXg0id8AfTviIk3GnrsVZTX1KCsETpx18TFRwDNIUtAHgszUCi6Ep8%2BEFJS0KegGDRjyRsewI1gHpbe0wqp8PC0nxYhvUiVyB6mVNHNZd8UYoQAABu07KAwxe192hkGwl2dKvnALZTb6UyMWGoagUcKMQVQtpFY10Fk6S92sHPqaBMfC4Ws3zzU3GrAp7FtFcjRhtbkphCmxssQIC67xDlWh0fR574BB9CxMZyYn57l1%2BApnKcGQ13N7JRrNTXPQ%2BXsOB%2FHY8osL4mjMsQKkYYovF61RYWcaES1H7T1NTcWCDYYJo%2BKS8MUAZeJ4sTqReG6rQ6oIXVIYgn10CJhNL2iHrRfccI1705QlkiP6Ow0w3DPwE8QhldZteC3mpnwF7DBvbsJTGMAQN1CjGPzJfA8bG3BC4MDR6X7vOv0oi8UO7G0zz8ZsaAb47meDA0UzjBpj1TG3dO5rVcrviR9VVs%2FSoWFHqo7Dps8c8ARoJsrQJSnGq6OoL6A%2BBDEXfatxkOp2lXgvdjpiUoe6a4ZjkANuc%2B6Ed%2FrYDqBHdaNE4OwfET69JRYnY72LoNt22FLAgsBz8K9b9G5KIDaYZ1jBYyCtwIkJlSxlkJ1RlzEGb0NK6lM1Kswm%2B35wQY6pgEZ4atieHp8l%2BMfKnckIoi6Mghca9FG0YIyChq7kduGUDr%2FaZ3ztkWbsdmBdU%2Fxdiy%2BaFnwlKam8A78VQGL6ZQQOYH2dbYTpJtzxkX3vov%2FRXePsuol3NCs%2FEe6FrDgufABVRmen15R3OghGnp0%2F4pg3uhIvmZiybZKgYw2AuqtEnew5d3chz2CCZ4MkJ0RXWFOHd%2BCfUqnihuBQdwt3%2F6Fa36WCge3&X-Amz-Signature=8fb15c28628550d5e742c840537105a558fafb6d62fe488e0dd172a4a087869e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFRG473%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIC4DUqFAdItwIr2eUC9iXf%2BUzk57eVMXAtzB72BRYXRiAiA1qbKgR0TfEtE8PdfmuYBqV6KidwAXz5WkDkv5rvOPHSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI%2BNYY8GrwblQ1VcRKtwD%2FkA29ZHukrXg0id8AfTviIk3GnrsVZTX1KCsETpx18TFRwDNIUtAHgszUCi6Ep8%2BEFJS0KegGDRjyRsewI1gHpbe0wqp8PC0nxYhvUiVyB6mVNHNZd8UYoQAABu07KAwxe192hkGwl2dKvnALZTb6UyMWGoagUcKMQVQtpFY10Fk6S92sHPqaBMfC4Ws3zzU3GrAp7FtFcjRhtbkphCmxssQIC67xDlWh0fR574BB9CxMZyYn57l1%2BApnKcGQ13N7JRrNTXPQ%2BXsOB%2FHY8osL4mjMsQKkYYovF61RYWcaES1H7T1NTcWCDYYJo%2BKS8MUAZeJ4sTqReG6rQ6oIXVIYgn10CJhNL2iHrRfccI1705QlkiP6Ow0w3DPwE8QhldZteC3mpnwF7DBvbsJTGMAQN1CjGPzJfA8bG3BC4MDR6X7vOv0oi8UO7G0zz8ZsaAb47meDA0UzjBpj1TG3dO5rVcrviR9VVs%2FSoWFHqo7Dps8c8ARoJsrQJSnGq6OoL6A%2BBDEXfatxkOp2lXgvdjpiUoe6a4ZjkANuc%2B6Ed%2FrYDqBHdaNE4OwfET69JRYnY72LoNt22FLAgsBz8K9b9G5KIDaYZ1jBYyCtwIkJlSxlkJ1RlzEGb0NK6lM1Kswm%2B35wQY6pgEZ4atieHp8l%2BMfKnckIoi6Mghca9FG0YIyChq7kduGUDr%2FaZ3ztkWbsdmBdU%2Fxdiy%2BaFnwlKam8A78VQGL6ZQQOYH2dbYTpJtzxkX3vov%2FRXePsuol3NCs%2FEe6FrDgufABVRmen15R3OghGnp0%2F4pg3uhIvmZiybZKgYw2AuqtEnew5d3chz2CCZ4MkJ0RXWFOHd%2BCfUqnihuBQdwt3%2F6Fa36WCge3&X-Amz-Signature=1cd83e54233184a4ed3c2b5f6a3c48f615002a01f406cf1d49e5c96b3f1700f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
