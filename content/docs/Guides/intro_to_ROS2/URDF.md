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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYOSPOKB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIwZQzbAXTRYljW6aGO9OIL4kbsaOY8nwqGsUkhN08ZAiEA80%2FLhBDpBh265PgxR14a6CvaHpQZPJIYEu%2Bn98ZtGhYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPteiH4gk9dln%2BlR4ircA%2BlVUJS%2F5Xf7l85UBSeuN0M2RBU7%2BGFNT7VQaLSJ2VFHLihqdeyPPceHFOmH7CaepVLuy5%2BEdE3UX9FLmMNnreBL8XyhXYPG5X1FVUHp%2F6ly0Lvffrq8jlnFnwVJgVbjQJZuhZggLafNC%2B3skVzf8J8H9j%2Frfru04UuKOdVfDPfAE6xEc6glGrXLuWUPY3paWxQStXcOV4f7iko2LaCjcnt7DseWfqNGYNqsV%2BkvVjPjy98NznvvJ%2FIvnm7ev8HkHv12OQL71EnyRvhYJQQT9gTqEj%2FngcpMhwmFdTH4Z7R%2FrZkKxjmxnHdjzXny0KTRCAwG%2BuvCI0N0QHsVM9xQMIlW2l5hOEYgW1kMtjJcIzr87rKEozFhnTMif6q1PzF30Ejh%2FbyOCV1UbXvmrZ%2B2erNcJU6DRA3BAxFC1oReKKDnG6m%2FocsYzVZeyogf6%2BLeQISuxt56kSICjttaSd%2BycIrmVx2%2Fs4wqhoWKFMtjdzPMqbR3Q4T%2BrN40dNN4s0LnL4%2Bls%2FtO6P8ChtsKJsE7Lp03wQwKCr%2BddiyQqokq3KSsht%2BRCmcWnKm2Od%2BpFeQD8%2FDohudLc4ASOU2rcxAaK3r0jqjNIbpPyaRjhzwc0tUy8VaNSHhTEwEeJhBJMNLJ57wGOqUB0z9uInxrPZsdpvzNr2NBqoaY0tG1XqeRIbxtGWBlETQlC6biX%2FiyW6Ky0GELnJurmfYVSGquOhGMLiS9%2FwjGQR0jCmv6cfEVwnX1teaU2tG4rZXgIRn9Jx%2BCamwCPUQY1E1Ts7fQiz0j3cHOLmZxPUB1v%2FCzOnJJz%2F64mv3iOa03doyXp7IJMg4JDcoDx9AEZqBnqqhMJoZR%2F3T%2FUiQNshYxHWZT&X-Amz-Signature=a6e6a5d6f9a12dbc1dc31fd64567054da908219892d3a44d5085ffdd710f7c31&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYOSPOKB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIwZQzbAXTRYljW6aGO9OIL4kbsaOY8nwqGsUkhN08ZAiEA80%2FLhBDpBh265PgxR14a6CvaHpQZPJIYEu%2Bn98ZtGhYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPteiH4gk9dln%2BlR4ircA%2BlVUJS%2F5Xf7l85UBSeuN0M2RBU7%2BGFNT7VQaLSJ2VFHLihqdeyPPceHFOmH7CaepVLuy5%2BEdE3UX9FLmMNnreBL8XyhXYPG5X1FVUHp%2F6ly0Lvffrq8jlnFnwVJgVbjQJZuhZggLafNC%2B3skVzf8J8H9j%2Frfru04UuKOdVfDPfAE6xEc6glGrXLuWUPY3paWxQStXcOV4f7iko2LaCjcnt7DseWfqNGYNqsV%2BkvVjPjy98NznvvJ%2FIvnm7ev8HkHv12OQL71EnyRvhYJQQT9gTqEj%2FngcpMhwmFdTH4Z7R%2FrZkKxjmxnHdjzXny0KTRCAwG%2BuvCI0N0QHsVM9xQMIlW2l5hOEYgW1kMtjJcIzr87rKEozFhnTMif6q1PzF30Ejh%2FbyOCV1UbXvmrZ%2B2erNcJU6DRA3BAxFC1oReKKDnG6m%2FocsYzVZeyogf6%2BLeQISuxt56kSICjttaSd%2BycIrmVx2%2Fs4wqhoWKFMtjdzPMqbR3Q4T%2BrN40dNN4s0LnL4%2Bls%2FtO6P8ChtsKJsE7Lp03wQwKCr%2BddiyQqokq3KSsht%2BRCmcWnKm2Od%2BpFeQD8%2FDohudLc4ASOU2rcxAaK3r0jqjNIbpPyaRjhzwc0tUy8VaNSHhTEwEeJhBJMNLJ57wGOqUB0z9uInxrPZsdpvzNr2NBqoaY0tG1XqeRIbxtGWBlETQlC6biX%2FiyW6Ky0GELnJurmfYVSGquOhGMLiS9%2FwjGQR0jCmv6cfEVwnX1teaU2tG4rZXgIRn9Jx%2BCamwCPUQY1E1Ts7fQiz0j3cHOLmZxPUB1v%2FCzOnJJz%2F64mv3iOa03doyXp7IJMg4JDcoDx9AEZqBnqqhMJoZR%2F3T%2FUiQNshYxHWZT&X-Amz-Signature=bf0d865855b1df4ed3cdd479fe6696e4ade38dfd55ae3e7fcbac24bbd6939d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
