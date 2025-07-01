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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZB2E257%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzPKTFGMc%2BQWtDv%2Bp%2BKcaKi5S%2BjqOoOFbfrTsF0R48eAiEA%2B35AVvNSj3hjz8vmVwbCSHMrbpJlc8WCXowrFDYXhQQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFc8p%2BZMA6f8SdPWircA2Hh9X2wGNuChY85Zs4KSeotDdu20IiO42fx30SVAzJRd0jvujjFSJ%2BUVJM%2FpAOWAWSjKngsS2yKxtfiqg%2BHA8pbdcYe1fx9ttkyOs%2B8insqd1h0P9M4lhCg1IudFHerABnTXzUvEHXuna8EryOf4B0xxx4J6THafh5r1ylEs7kxdLpEOzL0CzEN9zrJIKwgJuTK%2BLgYZqZfX4UikAThzhNQ89W%2Bi1Svb%2FJQOXkJtahcWzQj%2FGMO9bR%2B9OzOwDfmRgS9Sg7woizowU%2BuHNo%2FtMFINVC4G0ZagT%2BkyFRj%2FryA%2BZf5Y2n3vb2esXKs8v4LT8L%2FLdu6GE7%2FvS0AGlUPgHYJNE2U66aoS9JfwTkOFYxslPsdsj77lyaQIMfZFoZmk6AynUxAbgkRcRKOHUgDGht3schVXYIVdjMHi2R6Jms%2Fd%2BEGUWcOWIi9tocFRdP6TVmxDvCeiI4YPdO6GRTgijNUTuCtmiojdJXurnA8HNey7ess0iKXgnNeIkl4hSoS2SSb8ZM%2Bw7QCwUlWBWljz3oSp937zTUQUq5%2B1gPHATDBaAqPxVJDFeGeZ306qFuzsVcCKVrw%2BHl3Ef4GU%2B9E64DPYnLn1pEpBDMfI5qmwwLTkVF3O0qqsE6zH7gQMNTLjcMGOqUBlVx2sj%2FtaFDCxaghEoa9SWIcV6xXdaC6TgGCPJuCbszaFmWkomL6Bhkj%2FxKEkPXRN5vfUYT%2FQ%2ByBWAYC9URCXfAwW2AQQZgpUCsz1gAofXaNemwGrninbpjyDcelNWFb1worrix3BdDZGL0%2FM%2FgoqkOpwjTmU0ElZ6wKHbpNUsL9qcwoffJe6ulYkhr8KVoLvSPJW5C7xs%2FsufjplS0lx9%2Fnfus%2B&X-Amz-Signature=3798c3f72a36be3f9a09dcf80a524fdcaab70434086b27d5a1749ac90aecce88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZB2E257%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzPKTFGMc%2BQWtDv%2Bp%2BKcaKi5S%2BjqOoOFbfrTsF0R48eAiEA%2B35AVvNSj3hjz8vmVwbCSHMrbpJlc8WCXowrFDYXhQQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFc8p%2BZMA6f8SdPWircA2Hh9X2wGNuChY85Zs4KSeotDdu20IiO42fx30SVAzJRd0jvujjFSJ%2BUVJM%2FpAOWAWSjKngsS2yKxtfiqg%2BHA8pbdcYe1fx9ttkyOs%2B8insqd1h0P9M4lhCg1IudFHerABnTXzUvEHXuna8EryOf4B0xxx4J6THafh5r1ylEs7kxdLpEOzL0CzEN9zrJIKwgJuTK%2BLgYZqZfX4UikAThzhNQ89W%2Bi1Svb%2FJQOXkJtahcWzQj%2FGMO9bR%2B9OzOwDfmRgS9Sg7woizowU%2BuHNo%2FtMFINVC4G0ZagT%2BkyFRj%2FryA%2BZf5Y2n3vb2esXKs8v4LT8L%2FLdu6GE7%2FvS0AGlUPgHYJNE2U66aoS9JfwTkOFYxslPsdsj77lyaQIMfZFoZmk6AynUxAbgkRcRKOHUgDGht3schVXYIVdjMHi2R6Jms%2Fd%2BEGUWcOWIi9tocFRdP6TVmxDvCeiI4YPdO6GRTgijNUTuCtmiojdJXurnA8HNey7ess0iKXgnNeIkl4hSoS2SSb8ZM%2Bw7QCwUlWBWljz3oSp937zTUQUq5%2B1gPHATDBaAqPxVJDFeGeZ306qFuzsVcCKVrw%2BHl3Ef4GU%2B9E64DPYnLn1pEpBDMfI5qmwwLTkVF3O0qqsE6zH7gQMNTLjcMGOqUBlVx2sj%2FtaFDCxaghEoa9SWIcV6xXdaC6TgGCPJuCbszaFmWkomL6Bhkj%2FxKEkPXRN5vfUYT%2FQ%2ByBWAYC9URCXfAwW2AQQZgpUCsz1gAofXaNemwGrninbpjyDcelNWFb1worrix3BdDZGL0%2FM%2FgoqkOpwjTmU0ElZ6wKHbpNUsL9qcwoffJe6ulYkhr8KVoLvSPJW5C7xs%2FsufjplS0lx9%2Fnfus%2B&X-Amz-Signature=34cd1f02d9e631b563743c567629eb696f3204c6281e566ed3a5b736db008ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
