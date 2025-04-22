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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHNBNMM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAr0I3SUoO0Tg4dojyjYYw4V2HilC0%2B7mw%2FTdZC0jIMjAiEAyR0UH4NR%2FF0lZjYCxU3uDotgoFj8DhGUNjgAY98fL3wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDXWEjBCYtPr2N0GCrcAyoRDiAXl%2FNZewDYUxFkFg%2BOK954vqrhaExpZTc5YoKJ8TIj8RqdejpOtUNlPoxFcGY8KFJSQFK1LMsXsOMM0YFuYt8sbJu0pYyKzZ3HO09uYFy5zBs6G%2FdNzajvCHDKC5YM6oJ%2BJVfoEbI8zk%2Bw7KUwuGeYKHqFC5HlSmWPFatM4VoyH22vFkVrXEUYgZzYdRX%2FHNV6OzpKTEXrdITbJBdRBuYH5jrHw%2FD8XxwMKuHzgRdbCDi5ihBNGTlbI9glF0y75iqREkV4FUE5pOvAACRpCGp3gk2lpAYrHiMBWCGShCSVHlqSBKqVH3D0N6KyKdWzqvQ%2BNVeYIWkMWKIjBX2duI9MJpgm4bhxQZWg6imHN3lPtc%2BQ5irngaU1UUa6juFldP9jAo9K5Qc4YAGkVuQZIeSQ0Bbc0%2FkNNKZ%2FDSfCw9BJt6q8Fem58NRcpvv8dL7L05JpmW9dUGeRBeJTWtaPIpkn7ducxpAQ6kzwXRix%2BEkqqvyDfMvZoYsBNVJAFQaRDDFnL6vrsNEx14pAqqMpS6ZDRIz8z69vuGEO9CvhbtkWJcdOc9CwZeEV8OvmOrWFLXzGtOk%2Ft4dQWud11h0Wsh08rwwXbHO17JWQkdE46yQXT%2FilU5XUBqcrMIrvn8AGOqUBiLIYmtyGDDCk1uM47F%2FpGbzDrWb%2BPzJK52LY%2BGfEIsUomqHFCZ5MPTsCxEP%2B8mncCYVlI039CoH0BXIyP%2F7ycI6aKMZrYBWS5La9nxwQEsDuixtjqQPCq9Ul73FxXyMA7fz4Pq0N8mSM2cywcDHs9%2BWPnFXAk6j4RjDiGJtBvo5p59CbjKxHcJ7KwFdk%2BcYTvqt3mXhOTXZYAH7eSfldmkTEOwdV&X-Amz-Signature=4e36f746253ae1a30960d6a523ec15524147601acfc2751f86b3d274049f11f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHNBNMM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAr0I3SUoO0Tg4dojyjYYw4V2HilC0%2B7mw%2FTdZC0jIMjAiEAyR0UH4NR%2FF0lZjYCxU3uDotgoFj8DhGUNjgAY98fL3wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDXWEjBCYtPr2N0GCrcAyoRDiAXl%2FNZewDYUxFkFg%2BOK954vqrhaExpZTc5YoKJ8TIj8RqdejpOtUNlPoxFcGY8KFJSQFK1LMsXsOMM0YFuYt8sbJu0pYyKzZ3HO09uYFy5zBs6G%2FdNzajvCHDKC5YM6oJ%2BJVfoEbI8zk%2Bw7KUwuGeYKHqFC5HlSmWPFatM4VoyH22vFkVrXEUYgZzYdRX%2FHNV6OzpKTEXrdITbJBdRBuYH5jrHw%2FD8XxwMKuHzgRdbCDi5ihBNGTlbI9glF0y75iqREkV4FUE5pOvAACRpCGp3gk2lpAYrHiMBWCGShCSVHlqSBKqVH3D0N6KyKdWzqvQ%2BNVeYIWkMWKIjBX2duI9MJpgm4bhxQZWg6imHN3lPtc%2BQ5irngaU1UUa6juFldP9jAo9K5Qc4YAGkVuQZIeSQ0Bbc0%2FkNNKZ%2FDSfCw9BJt6q8Fem58NRcpvv8dL7L05JpmW9dUGeRBeJTWtaPIpkn7ducxpAQ6kzwXRix%2BEkqqvyDfMvZoYsBNVJAFQaRDDFnL6vrsNEx14pAqqMpS6ZDRIz8z69vuGEO9CvhbtkWJcdOc9CwZeEV8OvmOrWFLXzGtOk%2Ft4dQWud11h0Wsh08rwwXbHO17JWQkdE46yQXT%2FilU5XUBqcrMIrvn8AGOqUBiLIYmtyGDDCk1uM47F%2FpGbzDrWb%2BPzJK52LY%2BGfEIsUomqHFCZ5MPTsCxEP%2B8mncCYVlI039CoH0BXIyP%2F7ycI6aKMZrYBWS5La9nxwQEsDuixtjqQPCq9Ul73FxXyMA7fz4Pq0N8mSM2cywcDHs9%2BWPnFXAk6j4RjDiGJtBvo5p59CbjKxHcJ7KwFdk%2BcYTvqt3mXhOTXZYAH7eSfldmkTEOwdV&X-Amz-Signature=7d6103324451f2bd5e3bd6c0a105f49593c2761898dbb7fb807a4b82ed6643b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
