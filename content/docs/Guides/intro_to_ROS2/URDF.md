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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDT3PBQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTu4GPLK7C%2FWdiZwmzEpCefcNyooNDffMeuafhxHHPbgIhAOqmEEIhu%2FKqdMKOF5rCJaV9fWHJG33Us5ukxKjCy1VlKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx71ol0FEOT%2BQkLSEYq3AP6b0TuS1CBLdGCZSSpIubBq5lVH37b0%2B3pPRyQn6rClLIN6bC%2FEs5NA60oD3zrXDYkLbg2a02p8I%2BkD4S%2FqzTCkgdz0RA0LbMrvL678YLEmtAgJMw7Y9Lx6OKAfmHMW84lipVZx3yrOqoHZn1v8bXvkdyU5dqGvJJJ%2BkBTE0CBf6JPBFRjO3RCwfWWOqTXy7hGOd0VYRedl5UEGlGvhB1%2FNPAhej6VHNwVioN%2BigyL3pRbMKNBhGWCJi6Ey2ESM3SwScjLt4R%2FWmz5jzugwOqB6wZlZMcjPyliL3jYqmnWkg%2BJHyRgFR%2FDoEVyWOURmKmENYxYob0QDs3l%2BbsTrxEx5AFeWxW1Z56Efuaib6lwO%2FQgDwICkFg7Xg7KyvpgsA9PFneRLfNtNAlQAlkNCnVI0wI86PucG4J4txXJgXCqDuxSCGn%2BWr%2FhCzjTii8%2FRPLyYbF8jaUmw5GMseZirB3v1G0ua6rU93XIbUHKiuxvUhwO3WcrSFzx%2Fpe9z99QIY%2FEIme%2B8rDaBh8iY0ymIxh6nCswYcYpvemU8FINVqMkpWmrURZIJHhRKKULLiRSgCIxMXWHWXP5N3vaABLfifJlYhI03sz7mOulMwJkMbWwSoGyZ8Kt2yWjW%2BP%2BJzCgmazEBjqkAYNWZJCMU17fanSQ1%2BHZIwbx06fuwUIKXPcChK29eL%2BPDvBFfQPqJSqXzYltwUd3qL6%2FyZ%2FMgoYdfCGXZrCaSv5OuVd0XZwY1yMucgbRs948uhOEKKQ4drp86k%2FczE0wTMHwMEaqzWY3UveXIicHSAQSf%2BQ57Tip8K9rvDxmrPIqVBAVic8E6Xs%2BapgnuweJr74IMdof0OBTJZz7rXsJ7tLqqfJK&X-Amz-Signature=aef518efa414b710cb532939c26948903e0ab792380c48b5b1bc464a8ccd5c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDT3PBQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTu4GPLK7C%2FWdiZwmzEpCefcNyooNDffMeuafhxHHPbgIhAOqmEEIhu%2FKqdMKOF5rCJaV9fWHJG33Us5ukxKjCy1VlKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx71ol0FEOT%2BQkLSEYq3AP6b0TuS1CBLdGCZSSpIubBq5lVH37b0%2B3pPRyQn6rClLIN6bC%2FEs5NA60oD3zrXDYkLbg2a02p8I%2BkD4S%2FqzTCkgdz0RA0LbMrvL678YLEmtAgJMw7Y9Lx6OKAfmHMW84lipVZx3yrOqoHZn1v8bXvkdyU5dqGvJJJ%2BkBTE0CBf6JPBFRjO3RCwfWWOqTXy7hGOd0VYRedl5UEGlGvhB1%2FNPAhej6VHNwVioN%2BigyL3pRbMKNBhGWCJi6Ey2ESM3SwScjLt4R%2FWmz5jzugwOqB6wZlZMcjPyliL3jYqmnWkg%2BJHyRgFR%2FDoEVyWOURmKmENYxYob0QDs3l%2BbsTrxEx5AFeWxW1Z56Efuaib6lwO%2FQgDwICkFg7Xg7KyvpgsA9PFneRLfNtNAlQAlkNCnVI0wI86PucG4J4txXJgXCqDuxSCGn%2BWr%2FhCzjTii8%2FRPLyYbF8jaUmw5GMseZirB3v1G0ua6rU93XIbUHKiuxvUhwO3WcrSFzx%2Fpe9z99QIY%2FEIme%2B8rDaBh8iY0ymIxh6nCswYcYpvemU8FINVqMkpWmrURZIJHhRKKULLiRSgCIxMXWHWXP5N3vaABLfifJlYhI03sz7mOulMwJkMbWwSoGyZ8Kt2yWjW%2BP%2BJzCgmazEBjqkAYNWZJCMU17fanSQ1%2BHZIwbx06fuwUIKXPcChK29eL%2BPDvBFfQPqJSqXzYltwUd3qL6%2FyZ%2FMgoYdfCGXZrCaSv5OuVd0XZwY1yMucgbRs948uhOEKKQ4drp86k%2FczE0wTMHwMEaqzWY3UveXIicHSAQSf%2BQ57Tip8K9rvDxmrPIqVBAVic8E6Xs%2BapgnuweJr74IMdof0OBTJZz7rXsJ7tLqqfJK&X-Amz-Signature=114bd39410d2aa878f650531052c215d449d541d15a6e9711a22b8b03177ac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
