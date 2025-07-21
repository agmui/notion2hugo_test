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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7TI6OE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5gZGeRm4hkEgffP%2F0IwrtQTIcypJRbQFEUBuIczgejAiEA5ZDNoVSbaGQGqgU9HLLaKmy3IgcIU%2FFUs1jaxhkOu5cqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8zKDf4NJtZ4LS8CircA6cUrquPKGACKoSQlJWWaL6wIFZnX7V%2Be1JwEkGoVzE9xBRfYtur4SdJWe6HfmDgj7PvFmasFFeZjt%2B5eGZR3Tm4ifdpSnXFr54adcfhEVQBn3KzOylJoLCTgJjihT1zekUXVsuvyAUgE%2Fr6T7uWhAzBCRi%2F55tMOLKo3%2B%2F04rkoQyFhEnQLzTYGopi6U073EV0AGoWx2RVid5%2Byvokh8CS57VrYNE7o9RGivUNJShcrwHhGESIodMDK56%2FPpIxHdrhefz2qMq9fpW2OTXwcv6UYzRzwQXI1jhoVO2oyPhGF%2BslUxTJcpj4yAaWkTUFWSWzzeNZw%2FTpScATGbKXDasVrM2cbLZbNDYlzzdZhJGFgCB5XACkpKm5iZGMI4JtxDSGOu8k5rbRUacGbrNuAmqc%2F9Y6QJ9iVlfQ%2FaA%2FfYn04ZvvSIbCKT0tzwegpx5i6l%2B2tFrr%2B2uu3s2iAIj5or2KWIM6hWOu%2F4NscAkFBpJlyZliAts%2BvT0liEmOw%2Bs6ymEl6DNW6cepyqyXKoMamCmd7L36aHHm9bSOt9htqzqaTFuq0lBInS%2BsTEUnhKLN%2FivInHjnUWLZKsdmemR64p6u%2FpffdowWXnSpe8SdfNdnZcLViAPEv%2FqQtnMbiMJmP%2BsMGOqUBwmd0G%2BY93S0BYBp7%2Botmghvc%2Bm%2BduJSDIXpaLMjX4QESYohC2R5tSXYiY61frG16pXqfOTO%2BrVl3RnAD9f31EAH%2FAz27t7DUCrZzwpaQdhZMqcyaq3ouqhW%2BRt3fLwKxOh8HnbktXVFjCIa8WYPNxMrY7xb6aEPuuznmC82BYEj6YkKbK1u6cgzEc0YXzrG%2FHIj7hQflp85okBWy6zPRU%2FCJ%2FjFd&X-Amz-Signature=ed27f83e973c7e1986b92b695a806068c07cf24d271ee5a41f8dadb16582d18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7TI6OE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5gZGeRm4hkEgffP%2F0IwrtQTIcypJRbQFEUBuIczgejAiEA5ZDNoVSbaGQGqgU9HLLaKmy3IgcIU%2FFUs1jaxhkOu5cqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8zKDf4NJtZ4LS8CircA6cUrquPKGACKoSQlJWWaL6wIFZnX7V%2Be1JwEkGoVzE9xBRfYtur4SdJWe6HfmDgj7PvFmasFFeZjt%2B5eGZR3Tm4ifdpSnXFr54adcfhEVQBn3KzOylJoLCTgJjihT1zekUXVsuvyAUgE%2Fr6T7uWhAzBCRi%2F55tMOLKo3%2B%2F04rkoQyFhEnQLzTYGopi6U073EV0AGoWx2RVid5%2Byvokh8CS57VrYNE7o9RGivUNJShcrwHhGESIodMDK56%2FPpIxHdrhefz2qMq9fpW2OTXwcv6UYzRzwQXI1jhoVO2oyPhGF%2BslUxTJcpj4yAaWkTUFWSWzzeNZw%2FTpScATGbKXDasVrM2cbLZbNDYlzzdZhJGFgCB5XACkpKm5iZGMI4JtxDSGOu8k5rbRUacGbrNuAmqc%2F9Y6QJ9iVlfQ%2FaA%2FfYn04ZvvSIbCKT0tzwegpx5i6l%2B2tFrr%2B2uu3s2iAIj5or2KWIM6hWOu%2F4NscAkFBpJlyZliAts%2BvT0liEmOw%2Bs6ymEl6DNW6cepyqyXKoMamCmd7L36aHHm9bSOt9htqzqaTFuq0lBInS%2BsTEUnhKLN%2FivInHjnUWLZKsdmemR64p6u%2FpffdowWXnSpe8SdfNdnZcLViAPEv%2FqQtnMbiMJmP%2BsMGOqUBwmd0G%2BY93S0BYBp7%2Botmghvc%2Bm%2BduJSDIXpaLMjX4QESYohC2R5tSXYiY61frG16pXqfOTO%2BrVl3RnAD9f31EAH%2FAz27t7DUCrZzwpaQdhZMqcyaq3ouqhW%2BRt3fLwKxOh8HnbktXVFjCIa8WYPNxMrY7xb6aEPuuznmC82BYEj6YkKbK1u6cgzEc0YXzrG%2FHIj7hQflp85okBWy6zPRU%2FCJ%2FjFd&X-Amz-Signature=c4cd1453bd0591f70a7700f5951483025962961b5f40dea77e99e002218c1ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
