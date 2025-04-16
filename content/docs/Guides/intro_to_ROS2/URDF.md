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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW7T4OF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiCQidGy7ndOognwQnuzSDfDsEC1cVzFYRqJSIcFj0wIgZxpsQuRDeHWH7S2%2FaBKE1BYMQj2VAciJ60LwzL20cfMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLfDMJsiVaJ0CDzerCrcA1xzwlh7y1CaNHxpaX16wI%2FH0jwr2Cil6BVO06O3QfvrcX%2FplmvdBbsLp6YvtOFEYSgUpcTnDnk%2F84YmuuiFrwxCwdRBeIGa8ih%2FaulhGwn85Cq2DihE66oU0Q7%2FRgNwxFqgigWe3DmhTIdmsoUEuqj6t4XR7lpk6KB%2B3Z0DckeLw%2FX%2F6KsDZLcA2qO0WCMX7p03V8J8CypdkHWCTxrTAq5lpigWj7yPD4qklMTfVZPkHZmJPLeJYE%2BWXmz1iBVZ%2FghC2WgHoUcutXfD71wKBwiczzwcmkTjr%2BNqwIkjdffKPV3JwiELq395ShosVvMJdSc12vh8jTDPGkV22tpdni%2FzurVVp9Iztqz9iZVKLIoc%2BLNs%2F18p5aOb2hpbrSv0ujSbK7TsOzIHnHxVgdZwrkD2izIKm7NEpG4hQ5lTeV3zAIt91hlRVZKPSIVAAggvFRBh7%2BQ1S%2BsVR6GxDoZEOMT9lPG2HuIhM6FqUBU%2BJHMQBEcmXUfvLms4oku04iFwKZrqdz5XX9ejScnXEX1uNEzuKwtzLW9xBXI2mpQzNktkjl0YG%2FtsyeDP6IS4PMimq80Yi5wnREH7%2FudLw%2FQFoAeigHdvXnlXI8tkUgvT3ZRRALfwZXbUf%2FFpE86gMOiSgMAGOqUBPGIuJk4qGfkDj5jG5LlWljUvGGGrsGaBgNQ6NAZ0VGyXuibj49qQJ6vy3OGlAnDrf51AQ2CM8cSGDFVIe7BtM%2FFXFMClD4VgCtr5WRNYHbXrop%2Bmf%2FCfYWLJRZu2WKLdP%2Bs2f2PNhMBq8tnglPGLoVESJKyjhy6rFZJTAlrjJzAWLyOsXBvjV7qZejZ%2FnhkOTNN3HO2afpy0meS2nqNW7Zo6kAO8&X-Amz-Signature=cdda43d46d583e837482fd575d0b0a9f8204dd2f8a8290ac2e31ecea30373fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW7T4OF%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiCQidGy7ndOognwQnuzSDfDsEC1cVzFYRqJSIcFj0wIgZxpsQuRDeHWH7S2%2FaBKE1BYMQj2VAciJ60LwzL20cfMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLfDMJsiVaJ0CDzerCrcA1xzwlh7y1CaNHxpaX16wI%2FH0jwr2Cil6BVO06O3QfvrcX%2FplmvdBbsLp6YvtOFEYSgUpcTnDnk%2F84YmuuiFrwxCwdRBeIGa8ih%2FaulhGwn85Cq2DihE66oU0Q7%2FRgNwxFqgigWe3DmhTIdmsoUEuqj6t4XR7lpk6KB%2B3Z0DckeLw%2FX%2F6KsDZLcA2qO0WCMX7p03V8J8CypdkHWCTxrTAq5lpigWj7yPD4qklMTfVZPkHZmJPLeJYE%2BWXmz1iBVZ%2FghC2WgHoUcutXfD71wKBwiczzwcmkTjr%2BNqwIkjdffKPV3JwiELq395ShosVvMJdSc12vh8jTDPGkV22tpdni%2FzurVVp9Iztqz9iZVKLIoc%2BLNs%2F18p5aOb2hpbrSv0ujSbK7TsOzIHnHxVgdZwrkD2izIKm7NEpG4hQ5lTeV3zAIt91hlRVZKPSIVAAggvFRBh7%2BQ1S%2BsVR6GxDoZEOMT9lPG2HuIhM6FqUBU%2BJHMQBEcmXUfvLms4oku04iFwKZrqdz5XX9ejScnXEX1uNEzuKwtzLW9xBXI2mpQzNktkjl0YG%2FtsyeDP6IS4PMimq80Yi5wnREH7%2FudLw%2FQFoAeigHdvXnlXI8tkUgvT3ZRRALfwZXbUf%2FFpE86gMOiSgMAGOqUBPGIuJk4qGfkDj5jG5LlWljUvGGGrsGaBgNQ6NAZ0VGyXuibj49qQJ6vy3OGlAnDrf51AQ2CM8cSGDFVIe7BtM%2FFXFMClD4VgCtr5WRNYHbXrop%2Bmf%2FCfYWLJRZu2WKLdP%2Bs2f2PNhMBq8tnglPGLoVESJKyjhy6rFZJTAlrjJzAWLyOsXBvjV7qZejZ%2FnhkOTNN3HO2afpy0meS2nqNW7Zo6kAO8&X-Amz-Signature=a8ff27e7fc5e54ff47e34ceda1ff2b0343f0e26aaf01a042e9e26eb621b3e1ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
