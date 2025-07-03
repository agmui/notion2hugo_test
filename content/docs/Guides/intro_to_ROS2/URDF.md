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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZTYRL5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCMeQHnk910JtSyImU%2F4PZZ4OikrF09vacuvz79nipiEAIhAMQW60agFDnS44bNTruYw0Snhes7MG38zgQ7Cy%2FcqlwAKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCxwART3lqf2hDAGwq3APX4ucUzPvwGss5P2iBxfQwmK0dOufa2%2Fr3c6kHdWSY1Znwy78c%2FYFS%2Btd%2BV%2FIsRKZ0azV0h7bHpx0kgazQ5HLpZWkK95V7zGgHAdRbCRybm6%2Fou4UFnPOA75vQMnWNJH8AslLDmQaYDB%2BJBL2QHtw6OVv8aK%2BTl4q83i87gy%2FVJtBtwT32xl5GhK%2BQlQrbzR57P%2BTGrxBCSVnlSgztzJxap%2Fcb8%2BaH19rLzvrnaSq5TwUu4fjM16j0%2FFvxYSGSbAvmPFpBGl6Id0Uo9cJHNz3IpJ1LgGI016xt3wKfT5Whg5bfc6pafWsyMfKY2cI7Dri5fR6V%2F%2B5Ux9A5FuDzwDHdztCQj4g%2F3Ou3g5o17nzAgXj8lAjO64xvuNK3jpTnB9lyx8VBk80XDR7tCOLew9qEl0v1eLZKazKNLm2SakyBlybZTgVo0FVgsV1sm7GBeLv1dM0aTaMQo%2FM3wKDZotIFa86HyHc8fMRk%2FuTB0%2BhdY73QW8%2FL3iZwzQsRCnruTKtz2hyqLK9%2BKj4mdcnV5fBjqQ6j4zlAJW%2FzLO9xoNKBlnCo%2BHoMFQITOiSYY5z6%2B9B7ipFoxfxOfwER23CrYxKvYFelx69P0VZkpnMWbA5PLKeQm5UMZEEQyyZhQDDmr5jDBjqkATHvJeQkvP24fl3TQG8tC4InQ7d%2Bec0USCB0tlAm9ktlc75d2em8LDc6R2w8If7qaWR9MUeRLCLI3KtgRuDnGLUfRN9XGfWwJQqM9kEIQyOZrXTQsi20jo9PQq%2BgVo7yJIC9QJFP11Dsqxl5Metap4olvEZSpVJGCuVxncxdwjzKsR3tiZcACXgluN1auTTz41rT7G2juNvAjZlcQlLnj9ghB4og&X-Amz-Signature=edbbf7a2327c0225a2dbbd377287dcc4295aa4286b60f90e0000b37d4653074a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZTYRL5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCMeQHnk910JtSyImU%2F4PZZ4OikrF09vacuvz79nipiEAIhAMQW60agFDnS44bNTruYw0Snhes7MG38zgQ7Cy%2FcqlwAKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCxwART3lqf2hDAGwq3APX4ucUzPvwGss5P2iBxfQwmK0dOufa2%2Fr3c6kHdWSY1Znwy78c%2FYFS%2Btd%2BV%2FIsRKZ0azV0h7bHpx0kgazQ5HLpZWkK95V7zGgHAdRbCRybm6%2Fou4UFnPOA75vQMnWNJH8AslLDmQaYDB%2BJBL2QHtw6OVv8aK%2BTl4q83i87gy%2FVJtBtwT32xl5GhK%2BQlQrbzR57P%2BTGrxBCSVnlSgztzJxap%2Fcb8%2BaH19rLzvrnaSq5TwUu4fjM16j0%2FFvxYSGSbAvmPFpBGl6Id0Uo9cJHNz3IpJ1LgGI016xt3wKfT5Whg5bfc6pafWsyMfKY2cI7Dri5fR6V%2F%2B5Ux9A5FuDzwDHdztCQj4g%2F3Ou3g5o17nzAgXj8lAjO64xvuNK3jpTnB9lyx8VBk80XDR7tCOLew9qEl0v1eLZKazKNLm2SakyBlybZTgVo0FVgsV1sm7GBeLv1dM0aTaMQo%2FM3wKDZotIFa86HyHc8fMRk%2FuTB0%2BhdY73QW8%2FL3iZwzQsRCnruTKtz2hyqLK9%2BKj4mdcnV5fBjqQ6j4zlAJW%2FzLO9xoNKBlnCo%2BHoMFQITOiSYY5z6%2B9B7ipFoxfxOfwER23CrYxKvYFelx69P0VZkpnMWbA5PLKeQm5UMZEEQyyZhQDDmr5jDBjqkATHvJeQkvP24fl3TQG8tC4InQ7d%2Bec0USCB0tlAm9ktlc75d2em8LDc6R2w8If7qaWR9MUeRLCLI3KtgRuDnGLUfRN9XGfWwJQqM9kEIQyOZrXTQsi20jo9PQq%2BgVo7yJIC9QJFP11Dsqxl5Metap4olvEZSpVJGCuVxncxdwjzKsR3tiZcACXgluN1auTTz41rT7G2juNvAjZlcQlLnj9ghB4og&X-Amz-Signature=555dbcb4791074f8c6dcd6fc808ac76387d6aa3b58d021eede7c614051a50811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
