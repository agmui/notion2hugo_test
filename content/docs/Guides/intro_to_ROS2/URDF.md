---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LBBHH2%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxFcT6qSOogZqbzIB%2FnlvfYd5bj%2BwUYLZkdKtRFiYlBQIgP97CTqOXTkiuzc%2Fp8A6RSzhYHgJH8qrb45foP41mwOQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAm9C3Tz7i%2BY9Ogk%2FSrcA0tzw2is8ygqgdA%2FzNscsq9xCqdMGUY%2BeyXnvchp5%2Bte3K%2Bm1CRz3a%2Bq%2F3WSa3bgDA0KveYlNfr%2BHLNu9DRXwx920zTtk3Bh5ae3NCISIV0rcYDGAk9GlSTBjrvyPqZIReGRW9NeviBjkEPeCcycZFI%2BJ0xYDsJSU24RQEdgopzo2YgXb5dqV4e96u7ZUGKFV3IQzqswfC38TnfATqs60054nq7k%2F2SmRQWrQKWJUd6jo2Y5qFSXHooPCmda3P%2B2YJHkD8NsJAjiDFX1xK3kNTuAoRahsIfPD6yc8H0LQ4W4OaW02%2FkcyplKi%2BYyc3a7rc4ltCWmsoHZyA9i0mPYvRqtf9%2FwYfWxL7uWl0FvETfDmK85OfqfQgCn0BUBteyFU4o%2BgFHnecFgjTS3z6GxWaVyqzN4INZOeNYLNT2oP3AhUVCZWh%2FvVmdEiNrulBVbt1Y7vamqNT%2BWvm8d0itdUs7e0I9jyw5Ai%2BSWPATPYZssxfW%2B0xes230abL92HUhVnehVbCjd3T2d5v4Gmz8%2FRZI%2Bti9uKwZbiAI5lYNosfj2%2FM6VgZPOHx60b5FX%2Fg8rC0qn0pX9Sou1R8Q7ffEs%2Bito%2FNqVzMjdgLZTlHw1UAPutQVPbrlWM1L0tUmFMM2l5c8GOqUBuexvxCIwCaCTFwb2v9ysPGJfIG8O4X1vwdMBDxqYsmIsxsQOYERXvAQPQ5kKSy4wI3rGuFWCuRieeAzvOzAwRI57qZLEhhfBVEjXxyx894kOffQ8nWP5yD%2B1aauwddSgkI%2BXe7%2BKvAJVFmZ7K7QpRghF2%2FkrgaCoxU0OPgZY0SwWirhIHlH7QqQ%2FCVy6MQidKInCdOZZxZMsOpGpXOx%2B%2BRFBT742&X-Amz-Signature=9acdde7b6ab87f279133eef43c61b5a3478efb0b34a8cfa7a883c4deaaa32013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LBBHH2%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxFcT6qSOogZqbzIB%2FnlvfYd5bj%2BwUYLZkdKtRFiYlBQIgP97CTqOXTkiuzc%2Fp8A6RSzhYHgJH8qrb45foP41mwOQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAm9C3Tz7i%2BY9Ogk%2FSrcA0tzw2is8ygqgdA%2FzNscsq9xCqdMGUY%2BeyXnvchp5%2Bte3K%2Bm1CRz3a%2Bq%2F3WSa3bgDA0KveYlNfr%2BHLNu9DRXwx920zTtk3Bh5ae3NCISIV0rcYDGAk9GlSTBjrvyPqZIReGRW9NeviBjkEPeCcycZFI%2BJ0xYDsJSU24RQEdgopzo2YgXb5dqV4e96u7ZUGKFV3IQzqswfC38TnfATqs60054nq7k%2F2SmRQWrQKWJUd6jo2Y5qFSXHooPCmda3P%2B2YJHkD8NsJAjiDFX1xK3kNTuAoRahsIfPD6yc8H0LQ4W4OaW02%2FkcyplKi%2BYyc3a7rc4ltCWmsoHZyA9i0mPYvRqtf9%2FwYfWxL7uWl0FvETfDmK85OfqfQgCn0BUBteyFU4o%2BgFHnecFgjTS3z6GxWaVyqzN4INZOeNYLNT2oP3AhUVCZWh%2FvVmdEiNrulBVbt1Y7vamqNT%2BWvm8d0itdUs7e0I9jyw5Ai%2BSWPATPYZssxfW%2B0xes230abL92HUhVnehVbCjd3T2d5v4Gmz8%2FRZI%2Bti9uKwZbiAI5lYNosfj2%2FM6VgZPOHx60b5FX%2Fg8rC0qn0pX9Sou1R8Q7ffEs%2Bito%2FNqVzMjdgLZTlHw1UAPutQVPbrlWM1L0tUmFMM2l5c8GOqUBuexvxCIwCaCTFwb2v9ysPGJfIG8O4X1vwdMBDxqYsmIsxsQOYERXvAQPQ5kKSy4wI3rGuFWCuRieeAzvOzAwRI57qZLEhhfBVEjXxyx894kOffQ8nWP5yD%2B1aauwddSgkI%2BXe7%2BKvAJVFmZ7K7QpRghF2%2FkrgaCoxU0OPgZY0SwWirhIHlH7QqQ%2FCVy6MQidKInCdOZZxZMsOpGpXOx%2B%2BRFBT742&X-Amz-Signature=7d3be84cf34aa7c70943edccafdc6b2751edbb2484dff361adda6ab9b62f6f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
