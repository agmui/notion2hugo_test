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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHN67VR2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAKx09VxkrBX3Pp6%2Ffju5dDnGZCnZI8B4Jgwq5UKCz9JAiBGB5YnDpN2keLaAItCfJ9hV5hNImROCFinIqO9mh4kvyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHCArHSb3Rjgh1wPeKtwDESxMgjRwi4D7J2mHpnrqBw86utc2ulDcw%2F5Ey8wcMo%2F1oMMx4wRioD6zSIkFVr3vWVEB4imOyf8vi0e07LZycy7VsGvjzaR%2FQN6fHv%2Bi1NvehbAT%2Bve01968ALdwT9qh6sdRSl4B3hwxrRcA0VLAEXpZ8HOmzwv%2B%2FResW%2Br8l%2FRDhwz3s8CrSiodOL5kQWIDDOZaAZRMYaOP%2FkYA1ToYJr0o5XwJPFPpEPCoEujbRTd7SYFRRnOZfijqzeSRbrS%2BcbEVvhij2A7AUYDSEpGxYVcR19fcF5m0EkEGOT6XOhV4jV%2FI4s8iyaa0sMEYWoUU9bC%2B4%2FXbGdqoQvM%2FOa20tG9HFf0FptUE0I7DaSY7zYkssq3N7hI6huemVEZ5a%2FNphc4eP9ApJSW2knVwAlFhPUAvnN3rrZANSnQ8HrxC4xZ78zvOIIIO%2FlM8tTJgrxGDYcCrPOygMXNE3kI0pPcM3N4XQ8ZAUuQ3iyPLH63aJJLVMaLeVXNK%2F8PInH9zuBfaAu%2FYXKAjPwpTsrJLnWVdPWZnk28uoi2PEcEW4rWB2lRMRYHcGl6shbvXSyevfnSZ6qLo3pgpxzEqXdDiG2Tfiyr5gZ9JwS3S6QsrkVZZ2wrjHtXZ5bL1BCEFJvYwxraZvQY6pgF1o%2Bp8VSEnjH1%2BQx6nZLFP%2F0NUEkZs9h%2F%2FiBjJxaJpC5RqusIOtLlNyZ3uI4BE4L6cdGkbAxYyxT9ew9O4ZgMXAuWgEUklVypBAezkHHTtYecVJPpteoIUxp9xS0PoT%2BORcY66olMroO%2FszjBqqWTUSKSJoFIuVl2k6%2BvLJxVwUFwDzaCKiuZLvit17v2WcHLUKx25zBpAWJPs9gbFX7n39OOSuFvJ&X-Amz-Signature=c6b8cf8a5e49188d9ebcdd1c7b69d4eb35ff5c18aa727a0772c2991be970018d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHN67VR2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAKx09VxkrBX3Pp6%2Ffju5dDnGZCnZI8B4Jgwq5UKCz9JAiBGB5YnDpN2keLaAItCfJ9hV5hNImROCFinIqO9mh4kvyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHCArHSb3Rjgh1wPeKtwDESxMgjRwi4D7J2mHpnrqBw86utc2ulDcw%2F5Ey8wcMo%2F1oMMx4wRioD6zSIkFVr3vWVEB4imOyf8vi0e07LZycy7VsGvjzaR%2FQN6fHv%2Bi1NvehbAT%2Bve01968ALdwT9qh6sdRSl4B3hwxrRcA0VLAEXpZ8HOmzwv%2B%2FResW%2Br8l%2FRDhwz3s8CrSiodOL5kQWIDDOZaAZRMYaOP%2FkYA1ToYJr0o5XwJPFPpEPCoEujbRTd7SYFRRnOZfijqzeSRbrS%2BcbEVvhij2A7AUYDSEpGxYVcR19fcF5m0EkEGOT6XOhV4jV%2FI4s8iyaa0sMEYWoUU9bC%2B4%2FXbGdqoQvM%2FOa20tG9HFf0FptUE0I7DaSY7zYkssq3N7hI6huemVEZ5a%2FNphc4eP9ApJSW2knVwAlFhPUAvnN3rrZANSnQ8HrxC4xZ78zvOIIIO%2FlM8tTJgrxGDYcCrPOygMXNE3kI0pPcM3N4XQ8ZAUuQ3iyPLH63aJJLVMaLeVXNK%2F8PInH9zuBfaAu%2FYXKAjPwpTsrJLnWVdPWZnk28uoi2PEcEW4rWB2lRMRYHcGl6shbvXSyevfnSZ6qLo3pgpxzEqXdDiG2Tfiyr5gZ9JwS3S6QsrkVZZ2wrjHtXZ5bL1BCEFJvYwxraZvQY6pgF1o%2Bp8VSEnjH1%2BQx6nZLFP%2F0NUEkZs9h%2F%2FiBjJxaJpC5RqusIOtLlNyZ3uI4BE4L6cdGkbAxYyxT9ew9O4ZgMXAuWgEUklVypBAezkHHTtYecVJPpteoIUxp9xS0PoT%2BORcY66olMroO%2FszjBqqWTUSKSJoFIuVl2k6%2BvLJxVwUFwDzaCKiuZLvit17v2WcHLUKx25zBpAWJPs9gbFX7n39OOSuFvJ&X-Amz-Signature=183106ac1c9fe2df9a7edcb782c27727b4659d9d3f8ab53f0e318219eb8b9771&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
