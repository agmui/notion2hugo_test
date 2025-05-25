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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJKJO5X%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC%2Ff7T9mqX7FeCZciqHlWzqE04rwr0PEdrh%2BN%2FDD%2BewxAIgXxQkOW0Dcswc5%2Bf79DQjUh4h1mnaFgxFkWb7bZim2FEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCOV8NZx5hW6HE5M%2FircAzhx0qtGz%2Bk2cm8qXRRHPhjGft8968ozbNNcCrUgDMUbXC43ppBpyS9NSuGmxRyI07DqVCt5mBmsOMlhaRdvFzOAGHwXfO%2Fh5x1yLb49pYjmkRPfaFk5Ch4h7JDx649fZdo6pyfkAdFLi%2BAkXg9lh7DPJxK19eA9rsVFi3pnrufUjzH%2BI0HVz8Kgt89WeamQ7gN%2FjAX%2BE0vCsNOUbYWIRmVVhpycFjDYJ4h0VYY%2BiexLxPNtwdKxM0lYU%2BVSqbB4EguJfDUyhLGbnHNSKDV6vWwmE7iS8FqbbTpEt7HLRgUed0RgrlDk9W5K8vvNC%2Bq7KmK14bc40p6dGyTjYHXDiFpQk2Sup9858YKtjwvCV3JSZNVV%2FVOosM4IssnvwGEnH7YMyJa4UrJ4WhWr3jJMopgWqNr%2BA%2F%2FmM%2BiuJfymJEVp3wLCwXtLO7K4yJ236Yvw2J%2FES%2F646KVVBokqXUf%2F7HB2QVS7Z0lUiv%2Fxj4mT8vB%2BwpokyflF94tli7URXpHAQxhrqMHYJtB5BrHWKA2JprXxZOxwJUtQobIjAykE3IxIwgLODW%2BVVSgvucvZTIiPrBVrLlIodlzMfj5QiE6F1yIBxFkMRXlk%2BMwBMtP3HONIYUt2%2FA946FtVKdSaMKXby8EGOqUBgcjiuqonoXGOPv%2FAOvU4c8kTgg6HVMC6cbdRbF%2Bgc8%2F1Nz1EKOcNzqYpehmTVRFdLrfZnvw4ZjL021hRwc5gKjC9li0y56AEQgNHk5%2BxYHQfgjAYwbBh6wNZyfuYQZfYBZbpimwEoj%2Bs0IpQS4btLKW%2B4xyNWlyj0Odetvc9DPv58LZWZiNmwyBay85gkhcszE4mElEoufoZRvB0SCvyNbpL6BL6&X-Amz-Signature=13e876f4387cfa13900de82173248dfe6e20ba3b6870e5aa26cedd0f554d1687&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJKJO5X%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC%2Ff7T9mqX7FeCZciqHlWzqE04rwr0PEdrh%2BN%2FDD%2BewxAIgXxQkOW0Dcswc5%2Bf79DQjUh4h1mnaFgxFkWb7bZim2FEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCOV8NZx5hW6HE5M%2FircAzhx0qtGz%2Bk2cm8qXRRHPhjGft8968ozbNNcCrUgDMUbXC43ppBpyS9NSuGmxRyI07DqVCt5mBmsOMlhaRdvFzOAGHwXfO%2Fh5x1yLb49pYjmkRPfaFk5Ch4h7JDx649fZdo6pyfkAdFLi%2BAkXg9lh7DPJxK19eA9rsVFi3pnrufUjzH%2BI0HVz8Kgt89WeamQ7gN%2FjAX%2BE0vCsNOUbYWIRmVVhpycFjDYJ4h0VYY%2BiexLxPNtwdKxM0lYU%2BVSqbB4EguJfDUyhLGbnHNSKDV6vWwmE7iS8FqbbTpEt7HLRgUed0RgrlDk9W5K8vvNC%2Bq7KmK14bc40p6dGyTjYHXDiFpQk2Sup9858YKtjwvCV3JSZNVV%2FVOosM4IssnvwGEnH7YMyJa4UrJ4WhWr3jJMopgWqNr%2BA%2F%2FmM%2BiuJfymJEVp3wLCwXtLO7K4yJ236Yvw2J%2FES%2F646KVVBokqXUf%2F7HB2QVS7Z0lUiv%2Fxj4mT8vB%2BwpokyflF94tli7URXpHAQxhrqMHYJtB5BrHWKA2JprXxZOxwJUtQobIjAykE3IxIwgLODW%2BVVSgvucvZTIiPrBVrLlIodlzMfj5QiE6F1yIBxFkMRXlk%2BMwBMtP3HONIYUt2%2FA946FtVKdSaMKXby8EGOqUBgcjiuqonoXGOPv%2FAOvU4c8kTgg6HVMC6cbdRbF%2Bgc8%2F1Nz1EKOcNzqYpehmTVRFdLrfZnvw4ZjL021hRwc5gKjC9li0y56AEQgNHk5%2BxYHQfgjAYwbBh6wNZyfuYQZfYBZbpimwEoj%2Bs0IpQS4btLKW%2B4xyNWlyj0Odetvc9DPv58LZWZiNmwyBay85gkhcszE4mElEoufoZRvB0SCvyNbpL6BL6&X-Amz-Signature=8a9fd87c3c18b3d077da7b06775fef6f994acd40e2ac02503c6faa47d841f7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
