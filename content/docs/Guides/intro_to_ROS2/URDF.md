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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7W4RV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGISoM3l%2FGzcm17qSZJmAKmU4%2BXofm8ZCTNShtlULIoAiEAomp9i3wnpn%2BX6tq3newS9y%2Fi8q0AWzcfZWvEN071BGcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ISbdOTal0kB3XECrcA4tKMVu9%2FcgD5xFFXcOQAQ3rbihn8eB%2B67fffd6dtASWetXucasGdwRSoZcvjRqDyCq1B7CNl5oDN19rp%2F0WdwV0RESiP1bQrQOUB%2Bz5d2RSbjDyP%2FztnQMwISc16Pg%2BhwPTXXKONSZhpiTEseMM1HGOVC6dElpu51lcPZzpE8y6B%2BUdo5S0LIG25r8Ntw%2BzAOLnzfm59SHIK698MGBeiR2cIs5oevCZUZD%2FhPF7ML3MeSkEsCWBviHEma3QdZQkJvRw8Pj9uiqRO3ixtcgJ8TZyKH%2FG3MdNCRrQC2NzDdwt5pMLbP8gKmD912I4nkG6KPVkuya4eR1dlK8gfFEvuXL8pHn6SJ2NcQ0lG6USwliwnxcuFJ7otpywue%2BIZkg8GJT701UjTZN8ngU%2FldqhkiOT%2BHJcu%2B4JUJiLv9IU0BcBwZ9bHj9634LTTpNuaVetQE%2F%2F0DuDRWJmeDWxxbBhwTs1S4I0rAPBu7d2Ct0fukSq70lDvrpgaSASePgKJN2D49uRi2d1S0M3gxV83zWWZINakBdtgwYN1kZb8pj7zkWJQE1qi1zHZPXqQ5VfTZiY8XcZ%2Fh7z06XMYMR4BmpRru%2BVpe576PxZUeZla36sSo12b3WQRkJakweTvOjEMOGTrsEGOqUBcPeV%2BK2UDr6j6aOmLFZ2xpikYbmX%2By7JWFVSZc9tunWue4701sNtWOPQQBzEqScagpqH%2FUyAhM%2FRQONMu%2FyhwgEeXr0kAj9MkEjKEFtXCAwIlbXQS34j4usnzZf4dA%2B0gmztyHRHjnyyUjHFHSqIHEGBsopfao8Ky4rpZQ4KSgnjHvXYHm6y5ahQTVx5HO4A0Yg46le%2FV4%2FESHVYkK3%2FEfH4znoC&X-Amz-Signature=0ab69abe634bab0626add489d48975e9a976d97ebad85d31892b82a75c548514&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7W4RV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGISoM3l%2FGzcm17qSZJmAKmU4%2BXofm8ZCTNShtlULIoAiEAomp9i3wnpn%2BX6tq3newS9y%2Fi8q0AWzcfZWvEN071BGcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ISbdOTal0kB3XECrcA4tKMVu9%2FcgD5xFFXcOQAQ3rbihn8eB%2B67fffd6dtASWetXucasGdwRSoZcvjRqDyCq1B7CNl5oDN19rp%2F0WdwV0RESiP1bQrQOUB%2Bz5d2RSbjDyP%2FztnQMwISc16Pg%2BhwPTXXKONSZhpiTEseMM1HGOVC6dElpu51lcPZzpE8y6B%2BUdo5S0LIG25r8Ntw%2BzAOLnzfm59SHIK698MGBeiR2cIs5oevCZUZD%2FhPF7ML3MeSkEsCWBviHEma3QdZQkJvRw8Pj9uiqRO3ixtcgJ8TZyKH%2FG3MdNCRrQC2NzDdwt5pMLbP8gKmD912I4nkG6KPVkuya4eR1dlK8gfFEvuXL8pHn6SJ2NcQ0lG6USwliwnxcuFJ7otpywue%2BIZkg8GJT701UjTZN8ngU%2FldqhkiOT%2BHJcu%2B4JUJiLv9IU0BcBwZ9bHj9634LTTpNuaVetQE%2F%2F0DuDRWJmeDWxxbBhwTs1S4I0rAPBu7d2Ct0fukSq70lDvrpgaSASePgKJN2D49uRi2d1S0M3gxV83zWWZINakBdtgwYN1kZb8pj7zkWJQE1qi1zHZPXqQ5VfTZiY8XcZ%2Fh7z06XMYMR4BmpRru%2BVpe576PxZUeZla36sSo12b3WQRkJakweTvOjEMOGTrsEGOqUBcPeV%2BK2UDr6j6aOmLFZ2xpikYbmX%2By7JWFVSZc9tunWue4701sNtWOPQQBzEqScagpqH%2FUyAhM%2FRQONMu%2FyhwgEeXr0kAj9MkEjKEFtXCAwIlbXQS34j4usnzZf4dA%2B0gmztyHRHjnyyUjHFHSqIHEGBsopfao8Ky4rpZQ4KSgnjHvXYHm6y5ahQTVx5HO4A0Yg46le%2FV4%2FESHVYkK3%2FEfH4znoC&X-Amz-Signature=d640890f868076c30c5f6870eedcda983bab065cae0b23a3383b3de21b4af193&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
