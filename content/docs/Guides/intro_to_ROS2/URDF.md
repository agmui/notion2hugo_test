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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEOT6FI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCEr2h3IlTE8DMOaSnqUoTfiAcRiMg5MIu8GW1cAXl0EgIgNmXfOLuxhtM2%2BXzQA83nxmASJuL%2BIzQ1Eb4Bf9i0vyIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGKZKnBshTuX1nJdWCrcAzIc%2Fac4ZyJgb%2BISPlmBIjNtNI43aNq4D3OJdckE3UfjZTkBklMxiCJSZIZ4CTq3EWZodKbeYYtdAMEN9cAwGWSHnc7s4KbyT%2FVZcTacuGt2vMdK5XE6HdKLCYd8A%2F4IadAb%2Fu5IZF4FQS4b5ixsBXhEqtfhtlA2VojdR2M7ZWrwffOKfg6NCsSxZtIOjOjW9JXRkK3HhoMo6pMmeEERBK2Qw7jq%2FNXbBv13g7Qv89nAQHS6iLN4lwCvxIBayfSvrS6V5wFzNwQKZ3GhvubeCeP4wAWV9j7wsQ60Z40W%2BW5UgFvtvVzMBMyTSsmN0NTA8lqnNAmY3GN0vx8C1OGqGwcfrRPP6MqEWUJL7PMvnsWVsHrQkcAmjCPX0hf0l57ns1Tg0%2FLYAUS76C5R5n6gDqT5TVS29M7QGas7tFzNZ5uaFzZk2tmbUDOtqjSJthGdvZBvYpU8utncCJ7Ibvuw%2BtfhnX4Vv9ryoCHsAur1fr7yPPVZXt8k8VkPBNocL1eBI1TPQv8AdmG4zYeA2%2Fweny4y%2BjXW9LnheP5K0avY2t2my%2FWj%2FoFjy0KMhh%2BdVKCF0IR6OiTRA%2FpaFYszCHUlBz4UvVeiuiBQIenffjaFfpsS0I%2FgC5%2FRSXWZD6R6MOjXisQGOqUBezayyH%2FrryagI6LhMfAkX9QqjJsm9wkEDYyIqaQ4FI6Wmaih3e%2B6AX638RB8BgiQK64DUfeDxFF6cGYnWFisPFd2DgcTJfHuLapTrn%2FsAjwNKzsLQ%2FZFhBElq8awrJpXLA93MHH6WvJ1RuvGZ2IozWwDbwatz2I%2BVtm4mPLi8uKeJSHOIYpirHBvKm5P3b4fRDG22K59ZQ7p%2B6VP7smcm4AVO0qQ&X-Amz-Signature=0c0707d433a42074d98b92dad3c5c24ae0611e51d32a2dd9e09a01fc7a7f87d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEOT6FI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCEr2h3IlTE8DMOaSnqUoTfiAcRiMg5MIu8GW1cAXl0EgIgNmXfOLuxhtM2%2BXzQA83nxmASJuL%2BIzQ1Eb4Bf9i0vyIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGKZKnBshTuX1nJdWCrcAzIc%2Fac4ZyJgb%2BISPlmBIjNtNI43aNq4D3OJdckE3UfjZTkBklMxiCJSZIZ4CTq3EWZodKbeYYtdAMEN9cAwGWSHnc7s4KbyT%2FVZcTacuGt2vMdK5XE6HdKLCYd8A%2F4IadAb%2Fu5IZF4FQS4b5ixsBXhEqtfhtlA2VojdR2M7ZWrwffOKfg6NCsSxZtIOjOjW9JXRkK3HhoMo6pMmeEERBK2Qw7jq%2FNXbBv13g7Qv89nAQHS6iLN4lwCvxIBayfSvrS6V5wFzNwQKZ3GhvubeCeP4wAWV9j7wsQ60Z40W%2BW5UgFvtvVzMBMyTSsmN0NTA8lqnNAmY3GN0vx8C1OGqGwcfrRPP6MqEWUJL7PMvnsWVsHrQkcAmjCPX0hf0l57ns1Tg0%2FLYAUS76C5R5n6gDqT5TVS29M7QGas7tFzNZ5uaFzZk2tmbUDOtqjSJthGdvZBvYpU8utncCJ7Ibvuw%2BtfhnX4Vv9ryoCHsAur1fr7yPPVZXt8k8VkPBNocL1eBI1TPQv8AdmG4zYeA2%2Fweny4y%2BjXW9LnheP5K0avY2t2my%2FWj%2FoFjy0KMhh%2BdVKCF0IR6OiTRA%2FpaFYszCHUlBz4UvVeiuiBQIenffjaFfpsS0I%2FgC5%2FRSXWZD6R6MOjXisQGOqUBezayyH%2FrryagI6LhMfAkX9QqjJsm9wkEDYyIqaQ4FI6Wmaih3e%2B6AX638RB8BgiQK64DUfeDxFF6cGYnWFisPFd2DgcTJfHuLapTrn%2FsAjwNKzsLQ%2FZFhBElq8awrJpXLA93MHH6WvJ1RuvGZ2IozWwDbwatz2I%2BVtm4mPLi8uKeJSHOIYpirHBvKm5P3b4fRDG22K59ZQ7p%2B6VP7smcm4AVO0qQ&X-Amz-Signature=54e38b7c935d64d018f776cb53b25029b8d0e22162f44896ad2a54668859ec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
