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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNQYFF4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFdGSdL2PO3YWeuiDfppdf9JoNOKDDdBFKrz2zvIV8HAIgK7%2B9H6zWMkuNRgz3DDRfq2yFnyuuxanBtw1lIF1ukvoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ%2F%2BLFO9kA61JE7LircA1yFPcpk69NZ5ocshd0KrKOMX4BwPMH%2FYYXVjSgl2PWaoUotEfir2uEIzK10GcX%2ByNYpe0%2FNY64QLnTSSkMFKeD%2BG0O4P7O5eXGqXt0I%2B2q2K4Mzf3sDjkjugHh%2B%2FuBESLcHdwItYflCixsGjv%2FJ5P3epdOUb%2B5373o%2FjB9ameJjCg2wkoJJYUXIcZ%2FDgafnUkj1lI9XoNuLJ6WZUQyN8z1P1YxsJSgvFYZpUVguV%2FfUN2O9MfM5bOC%2FyVoagwICImDzjrUAOM9j%2BtoiRG6bNDuLaZAyGvp7TAlBTshIF%2FHm9uiuDTULOJvdQyBK8pmJqL28LHtb%2FXZL4SL13TJQcztad8FS%2FO5Ugti358u0tEfRpV9FUtdV8wC%2B7IZ6IVPDebRQS0usWjFVdfglm7zB9nX%2ByKc7CASfdVWKb%2F82hN2Wg0SRPFEyqXdFLNYN6ogpvictPxvcJbyUsiLHRxZFlAXddM40pxaWqa76DUDTUXv%2Fg%2BFzwxBv0fAdqw9i%2FHXZvMrY2U2lvsX%2FcElJexqdPFl1Mkx14edLZhhBScgvgqvjAAmZqLQeISsicAqqyp0mDDaniIzjL6FmTSOGuXZ5VKy2qRB5rQ8nK7wlhoC8KH16yuEkk5k%2F6xtNh0JnMI%2Biyr4GOqUB89DGk%2FtnwlvN5KFc9U%2FHmCFDx7e7O44d3z%2FH%2BWaFO2anPuP8kYYMNLHKSC3zZVokfXVBKg9RMR86OPK7JneT1w9qNfIJU27kxntTV0i0ER1RrkPQ3bLzg%2FzSCY88GedVrq0kEyYNk0V5VVHDPqLJ7uXunWa2ybh8ShiDfGsVKI%2BfEHseHm41ODFGE7BvKiAa9WyvxbBYGY2IPhVAkJATghtgmp23&X-Amz-Signature=147556e8bfb4d68371cb66a796aa45ee5369bf3abe6d2a6a3f3430bf46c8999a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNQYFF4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFdGSdL2PO3YWeuiDfppdf9JoNOKDDdBFKrz2zvIV8HAIgK7%2B9H6zWMkuNRgz3DDRfq2yFnyuuxanBtw1lIF1ukvoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJ%2F%2BLFO9kA61JE7LircA1yFPcpk69NZ5ocshd0KrKOMX4BwPMH%2FYYXVjSgl2PWaoUotEfir2uEIzK10GcX%2ByNYpe0%2FNY64QLnTSSkMFKeD%2BG0O4P7O5eXGqXt0I%2B2q2K4Mzf3sDjkjugHh%2B%2FuBESLcHdwItYflCixsGjv%2FJ5P3epdOUb%2B5373o%2FjB9ameJjCg2wkoJJYUXIcZ%2FDgafnUkj1lI9XoNuLJ6WZUQyN8z1P1YxsJSgvFYZpUVguV%2FfUN2O9MfM5bOC%2FyVoagwICImDzjrUAOM9j%2BtoiRG6bNDuLaZAyGvp7TAlBTshIF%2FHm9uiuDTULOJvdQyBK8pmJqL28LHtb%2FXZL4SL13TJQcztad8FS%2FO5Ugti358u0tEfRpV9FUtdV8wC%2B7IZ6IVPDebRQS0usWjFVdfglm7zB9nX%2ByKc7CASfdVWKb%2F82hN2Wg0SRPFEyqXdFLNYN6ogpvictPxvcJbyUsiLHRxZFlAXddM40pxaWqa76DUDTUXv%2Fg%2BFzwxBv0fAdqw9i%2FHXZvMrY2U2lvsX%2FcElJexqdPFl1Mkx14edLZhhBScgvgqvjAAmZqLQeISsicAqqyp0mDDaniIzjL6FmTSOGuXZ5VKy2qRB5rQ8nK7wlhoC8KH16yuEkk5k%2F6xtNh0JnMI%2Biyr4GOqUB89DGk%2FtnwlvN5KFc9U%2FHmCFDx7e7O44d3z%2FH%2BWaFO2anPuP8kYYMNLHKSC3zZVokfXVBKg9RMR86OPK7JneT1w9qNfIJU27kxntTV0i0ER1RrkPQ3bLzg%2FzSCY88GedVrq0kEyYNk0V5VVHDPqLJ7uXunWa2ybh8ShiDfGsVKI%2BfEHseHm41ODFGE7BvKiAa9WyvxbBYGY2IPhVAkJATghtgmp23&X-Amz-Signature=8671f1e6b218ae59aafc0d66a371fa21a1c49bf39cc30294c08fca52767286b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
