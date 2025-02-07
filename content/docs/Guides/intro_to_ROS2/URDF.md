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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBE7S6FZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCx%2BZCz7NusAIKvHQNAhRuAHgF%2FK%2Fg0IjiTQK0lh5rXqgIgTihdduy46wc7NyO5wmlKj2natMTKKWa8sQ%2FYW4hw9ioq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDO6y%2F484CuP1oLyVBircA54qqC6cFtLJaubbDyr6XrXvBaOToLXAmV%2FH82Mi6XeOEpANs14iS1MKlfPc5VBzQoVnp9zVqWNdjw2nyRghz1OJRd4Z9mUxekunko1Z9V0PVI3ps45GM2xDCdhJS4843La4iQlHfL1JoijMZ6UJU8%2Bk06UgluSGxrdgTH0a7vpctZ0LfADG%2Fak9NvkX7M2%2Fkf9ZlYxzEAXo2yt0cngCe%2FZooX8rrkfu%2BNa5uBtebkNeM7Wf8sln0OQVpWeV8lM3m1i2FNiuaa8ITn1jdJYA2f3vY9KO50BZOx0AAOMAnyWR5vXJJKN0p2%2BMlTIQcGFcVlqWCDkWhf7tqYyHRDtnUN30rS58YG%2BTTcpJb55WMigFWAAcJF5O4PhHnBSabZ3ywlUvZ6WRIUEonaW6UcDaPm0t0d1%2ByVXn9TyPm0VzISeXV3H4piHp9LoN2%2FyDTOhYj8iy2OckrCwtuoLrVHHAAbcDHKzhNQc2Q%2FXHeap49voWMZETioL31U%2FsmUZqinFkGw80zc%2BmAsvW86JgMYtJ%2FC7cWwwqw4bEz4ohCwc74msLXwJjUzURsK4YKOSbJtB0RW65gWDTABQl6bj4O%2FhXBT6h2KLfOg1YANXPLtjqwtda7mxcndEDcDlBvO5WMPablb0GOqUBmWty7YdGdaAZlyYS25s9oY4FwlnhULQHkMeOa%2B1qrou8eol4gOPastFmRoXNdyLOgUozqMNaoLorb%2FauippfVY7kK4Uu%2FT%2FNg1XR%2FpTIWzehzLEJG0niquHA5m1J6VwOeyIR8wsUw%2FQ%2FsI1uL%2FdcdWdq9oNExtDDPPVTIetecDLmsMbpdmkBYP9g3lyBvpbZJC%2F97hIQm16CIj6JCAvg29P0cKPn&X-Amz-Signature=91b474a2bf34ce614e2e57ee6cb7b512b8fff0631117c08a8e4901c0a9022aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBE7S6FZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCx%2BZCz7NusAIKvHQNAhRuAHgF%2FK%2Fg0IjiTQK0lh5rXqgIgTihdduy46wc7NyO5wmlKj2natMTKKWa8sQ%2FYW4hw9ioq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDO6y%2F484CuP1oLyVBircA54qqC6cFtLJaubbDyr6XrXvBaOToLXAmV%2FH82Mi6XeOEpANs14iS1MKlfPc5VBzQoVnp9zVqWNdjw2nyRghz1OJRd4Z9mUxekunko1Z9V0PVI3ps45GM2xDCdhJS4843La4iQlHfL1JoijMZ6UJU8%2Bk06UgluSGxrdgTH0a7vpctZ0LfADG%2Fak9NvkX7M2%2Fkf9ZlYxzEAXo2yt0cngCe%2FZooX8rrkfu%2BNa5uBtebkNeM7Wf8sln0OQVpWeV8lM3m1i2FNiuaa8ITn1jdJYA2f3vY9KO50BZOx0AAOMAnyWR5vXJJKN0p2%2BMlTIQcGFcVlqWCDkWhf7tqYyHRDtnUN30rS58YG%2BTTcpJb55WMigFWAAcJF5O4PhHnBSabZ3ywlUvZ6WRIUEonaW6UcDaPm0t0d1%2ByVXn9TyPm0VzISeXV3H4piHp9LoN2%2FyDTOhYj8iy2OckrCwtuoLrVHHAAbcDHKzhNQc2Q%2FXHeap49voWMZETioL31U%2FsmUZqinFkGw80zc%2BmAsvW86JgMYtJ%2FC7cWwwqw4bEz4ohCwc74msLXwJjUzURsK4YKOSbJtB0RW65gWDTABQl6bj4O%2FhXBT6h2KLfOg1YANXPLtjqwtda7mxcndEDcDlBvO5WMPablb0GOqUBmWty7YdGdaAZlyYS25s9oY4FwlnhULQHkMeOa%2B1qrou8eol4gOPastFmRoXNdyLOgUozqMNaoLorb%2FauippfVY7kK4Uu%2FT%2FNg1XR%2FpTIWzehzLEJG0niquHA5m1J6VwOeyIR8wsUw%2FQ%2FsI1uL%2FdcdWdq9oNExtDDPPVTIetecDLmsMbpdmkBYP9g3lyBvpbZJC%2F97hIQm16CIj6JCAvg29P0cKPn&X-Amz-Signature=1b34ecbf80b318bbe725e295301c86ed12d03620994cde299ed6a37aa4f561ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
