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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7OYAJK%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiQMvAfVteZQMcR8h3IU5T4QkJPdLvbzCl8p4jORJoMgIgMJf4eINBHqc%2BAQgk%2BLdZxl7YPvLLioQlCkE2ZqfZfrEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBy40oqtlFYRf%2FFVircA%2FWj79wLpMNpI2DXWiag9GwutwoWDLJ3Ts0VJDaQxuw8e%2BIa%2B79RHPAaYmLYESzsmwtDRG1uM6jp3oqzwYm4LCZ%2FzZGDcsO%2BhaxBQywpmjEukMkI026hpt3WNTZuP00g7V%2FMPOSegwRZV4WPHAFBm4SktaOkn2FrRq8rVP2X42Rj%2F4z6L%2BqSv3tCXZTbjwf1%2FaUScB%2Ffx%2FibwUBShFUZj5qQGe6IASZ4l2MIKGlaGzdSfc5V1j9MAxrCAEZz4T%2FRj%2B%2BpbUFvbUlRtq5kDjtfKHToHqZo9CAFfEi4DBJq1QK2UVvwtb12lokYL09LcKwTifV7ErbuqH6PMT%2BT2Y53PtzKiDu8gOpxOyd6hsAkgC2kxZINIzLLwXBDseOJpgpsyX46L1dKQcHGyT%2BJF9VjGM51Xp71azfm%2FsYUXj9ot6tlBZTQNkQ3r4QrFtSH3rF%2BeWAiZf3ejc5s9nTSjT3vs5O5bK%2BzeVYlvFW4gLapqJY9Rv8PXV43AQfweqOL9dDm7LRjj5z2o6fEeyQ8F8QtJ4UCAbzYVsIXV0rqS%2BpVXoAsyRqXh09rzRw7QdBRdqVu%2FobKwNQh8qAlwBtYkgzz%2BQDaXYpudji2iEbqUN%2FXk5ucnXjffolQwE9MlDyKMOWWjMcGOqUBesyz6Ti3cV3K5GXN0pkxS4jnMH4z4d9YDAh9nUzHgh02oJOYo8EEiEPNXMVCdnELRwRVFb3H87xqlWfTjxAV1IP5n%2Fu1zfj%2BTMjqjh6j%2Fkhgp1hGYjhxrzBxm3c6dpfbbICPQpk%2FI1YY1bTsz3pE3Yc0bORwohWj6kJ1Fnsjfs2a97uUZ4K4uzrAuMGrHei0YrM%2FFVvOTMgtFTWgKJoy5NxSRJ8c&X-Amz-Signature=492088285174b32a15a3f707ca6564d5ba05fd2cb8edaac65de303f935de3eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7OYAJK%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiQMvAfVteZQMcR8h3IU5T4QkJPdLvbzCl8p4jORJoMgIgMJf4eINBHqc%2BAQgk%2BLdZxl7YPvLLioQlCkE2ZqfZfrEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBy40oqtlFYRf%2FFVircA%2FWj79wLpMNpI2DXWiag9GwutwoWDLJ3Ts0VJDaQxuw8e%2BIa%2B79RHPAaYmLYESzsmwtDRG1uM6jp3oqzwYm4LCZ%2FzZGDcsO%2BhaxBQywpmjEukMkI026hpt3WNTZuP00g7V%2FMPOSegwRZV4WPHAFBm4SktaOkn2FrRq8rVP2X42Rj%2F4z6L%2BqSv3tCXZTbjwf1%2FaUScB%2Ffx%2FibwUBShFUZj5qQGe6IASZ4l2MIKGlaGzdSfc5V1j9MAxrCAEZz4T%2FRj%2B%2BpbUFvbUlRtq5kDjtfKHToHqZo9CAFfEi4DBJq1QK2UVvwtb12lokYL09LcKwTifV7ErbuqH6PMT%2BT2Y53PtzKiDu8gOpxOyd6hsAkgC2kxZINIzLLwXBDseOJpgpsyX46L1dKQcHGyT%2BJF9VjGM51Xp71azfm%2FsYUXj9ot6tlBZTQNkQ3r4QrFtSH3rF%2BeWAiZf3ejc5s9nTSjT3vs5O5bK%2BzeVYlvFW4gLapqJY9Rv8PXV43AQfweqOL9dDm7LRjj5z2o6fEeyQ8F8QtJ4UCAbzYVsIXV0rqS%2BpVXoAsyRqXh09rzRw7QdBRdqVu%2FobKwNQh8qAlwBtYkgzz%2BQDaXYpudji2iEbqUN%2FXk5ucnXjffolQwE9MlDyKMOWWjMcGOqUBesyz6Ti3cV3K5GXN0pkxS4jnMH4z4d9YDAh9nUzHgh02oJOYo8EEiEPNXMVCdnELRwRVFb3H87xqlWfTjxAV1IP5n%2Fu1zfj%2BTMjqjh6j%2Fkhgp1hGYjhxrzBxm3c6dpfbbICPQpk%2FI1YY1bTsz3pE3Yc0bORwohWj6kJ1Fnsjfs2a97uUZ4K4uzrAuMGrHei0YrM%2FFVvOTMgtFTWgKJoy5NxSRJ8c&X-Amz-Signature=b5690b6c1689359a70f798405dbc013e9e09933011e79e25669e7a9dabc2adbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
