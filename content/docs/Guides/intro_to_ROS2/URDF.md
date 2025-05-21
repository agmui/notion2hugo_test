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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FC3KIE3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCopxRwIoVmyGhloD%2FIyp%2FTuQtSnobZWdZtqY2%2FiNcVhQIgH1kf7vJAe5Gk5gtzfyrfPWwziTdufpo5SnBWPIYzp5UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzt0UKPp%2FihF9iQoircAxAbTj5vIzmY9oNYKVfBtnyUzImG7a8ZYKnCsN%2BXUlTFEMRPTtpIleQ4fKV0lJ9awJvUoLmD5yjEq7naH7UsdHdMonIBYtTV0rWF9s%2FHujQjentFJZCtMP0PiQiRxmb6C3UUdTIB4%2BhsdikoOZsf1zU4si5Xc4no%2F0pXn0ktp5fdVIbXzhgqiUffBXrLhujBHvjn%2BbIuDTG58dm3DisikL%2B%2Fw1MXD8cAIM5bAzYcUMWUT8WKfGlxs0NcN3ueaqkRCl058zCOKDwiHG3J0k%2FQOEgAN7m2X3d0Blx7Rw5zgT%2BLsKuwDFq8SVL%2BUwicH7%2BM4g8fXolfMcXCWfvU%2F4rHJ5kBvgRMY99EgFXkNPfS3%2B0NkgyZcAadGJENaKOJ0fbT74703W4b0zLUCcRDwBcbFgWPEv%2FROGaEPbP8F0OkPoNqzm6G1jILhmI15jt8jrMIfeMC4D3Kjr4WBZT5eFkiY%2B%2BSt6QvjIcnfBQ6GUNfGV2SVMjS8xtoo1%2Fxf3VLaFraxBl3feKnSwrn%2BD4V0plBWCquHMJaUCyR6uGZB7eMJS4oLLl0pY71q4DCAt%2B3%2FJ6BlN%2FQuN6bz2%2BFsPl0qNWOF8XLABJHvJ8FpTWKPIa3st%2BAVJWK%2BcrAPbCL%2B1tXMMXstcEGOqUBa%2F5kng%2FjDdFl8ftjgIO3bLfHn392sBZHtYB5FFMIvVhUYBjbo6tDrV0glq9X4kCchDoBPXDKm5hXO84y%2FnyQLIoFOWE1qkla%2FV7SoqbgJCUnpcwcmTI3q4zm3LWmsFjkfAeLzlILUlpuB34E8dbiExzz1zLuGyNkLGpWuLibC0cuwpO1mdEfK3UtbVQUI8M%2F20d2v5iXU3mq9JRBJMRDGoQ3xpTz&X-Amz-Signature=299e860ade4b58bf44b8cd520546d7fc03c1adcd6d53210d00f5a0b5534bcda5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FC3KIE3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCopxRwIoVmyGhloD%2FIyp%2FTuQtSnobZWdZtqY2%2FiNcVhQIgH1kf7vJAe5Gk5gtzfyrfPWwziTdufpo5SnBWPIYzp5UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzt0UKPp%2FihF9iQoircAxAbTj5vIzmY9oNYKVfBtnyUzImG7a8ZYKnCsN%2BXUlTFEMRPTtpIleQ4fKV0lJ9awJvUoLmD5yjEq7naH7UsdHdMonIBYtTV0rWF9s%2FHujQjentFJZCtMP0PiQiRxmb6C3UUdTIB4%2BhsdikoOZsf1zU4si5Xc4no%2F0pXn0ktp5fdVIbXzhgqiUffBXrLhujBHvjn%2BbIuDTG58dm3DisikL%2B%2Fw1MXD8cAIM5bAzYcUMWUT8WKfGlxs0NcN3ueaqkRCl058zCOKDwiHG3J0k%2FQOEgAN7m2X3d0Blx7Rw5zgT%2BLsKuwDFq8SVL%2BUwicH7%2BM4g8fXolfMcXCWfvU%2F4rHJ5kBvgRMY99EgFXkNPfS3%2B0NkgyZcAadGJENaKOJ0fbT74703W4b0zLUCcRDwBcbFgWPEv%2FROGaEPbP8F0OkPoNqzm6G1jILhmI15jt8jrMIfeMC4D3Kjr4WBZT5eFkiY%2B%2BSt6QvjIcnfBQ6GUNfGV2SVMjS8xtoo1%2Fxf3VLaFraxBl3feKnSwrn%2BD4V0plBWCquHMJaUCyR6uGZB7eMJS4oLLl0pY71q4DCAt%2B3%2FJ6BlN%2FQuN6bz2%2BFsPl0qNWOF8XLABJHvJ8FpTWKPIa3st%2BAVJWK%2BcrAPbCL%2B1tXMMXstcEGOqUBa%2F5kng%2FjDdFl8ftjgIO3bLfHn392sBZHtYB5FFMIvVhUYBjbo6tDrV0glq9X4kCchDoBPXDKm5hXO84y%2FnyQLIoFOWE1qkla%2FV7SoqbgJCUnpcwcmTI3q4zm3LWmsFjkfAeLzlILUlpuB34E8dbiExzz1zLuGyNkLGpWuLibC0cuwpO1mdEfK3UtbVQUI8M%2F20d2v5iXU3mq9JRBJMRDGoQ3xpTz&X-Amz-Signature=865a805bb2cb3379bf1d263719634abfc39a20d28f23f7f6ebd071a9ed4d4890&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
