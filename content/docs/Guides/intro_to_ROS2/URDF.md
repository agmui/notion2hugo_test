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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633QMITN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBql5t7hF28RQigUB6hmpq1CjIDgRQAgQiG%2FIFGgJ3B7AiEA%2F4sywgHoj3EC3Bz6vuYkl6q14WAYUgRe%2BP7ibe0lOgkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB90vYf43U1fEvng3yrcA870ulu7vygPnrhQZRKdEwutEeSf5Huumq1Z7L5vBOaF8xoQPBdz%2BLDg77c6NPhomoyTpaXS2yafWXHlPmpvdic4fH43A8Dqr3CtYaaj%2FBDMZEdEoWz4dK0ErcuHj0gehsB6z8dn5pPEoyjHghWiIsktKAWnT6Nm8hOjnTZ2HZr7Nmqj7t%2BU0wIALl13cwabidqRkc%2BJ9%2BXku1oM2Wf8k996gLKKAFrwlPD%2BlP0dHdt37oU4WLtI9hbiSOkZrPchy%2FJOMk4GDAfVU0y2TDtoJm2rIpOYLohklBfRu29BesSdglYxa5dF%2BXxB%2Bci5FIgZ7pV73ojNKsVzyEAFi4pmkrGnVwyXcOjJay71AsJfTELATpFydR%2FNhnSup19z9X%2FfFhX7pW%2BsZi6AD63b9NJQNpFgmBfv%2FEbILFPrF6pJ%2BkH8R57g3qMuJCoju3gdtIjx4BhdfQNOIPQOCrWgsTxXTR1ir45S99wD6WuAmqsgIpnebfT%2Ftf7UCVKNO1VqKYtUBgPfLyYk5pUglbFIJ36XZnis8iOaf9k0o%2F1UQK3DJIjDJoNVHKALnrLIrFEtZfc%2Fsg7l327LRZ9wJ05ive%2F1L9JKGb5%2F35rMWZrQmeItQ%2BzEwiq4e%2B3dWzLyY4fzMMzo3MQGOqUBtmRtZrMSHEKAbNYBQ4Kp5GdmuwSj7tXo%2Bkfjf4OtxkNDXHhs7sqXYZOE69TM6Xhv3K4VFdWCp9lUqQh%2FqyjSQN%2Bk6DWipHxUuSRDfg93KoyXZEcVjIl6AvQGrLm6%2FUH3R%2F%2FE7onQgKh8dLvt%2FmcKZ6xg4oOaWZez2ddMXQIHYl1v32icvpUa0koC%2BVYKU%2FCjWr%2BkGdN4xGCiPZ24Rjm%2BeWgU4UHI&X-Amz-Signature=35a54579cf76187833c4499d2b1937fe2d36ca010eb803fcc66718a0821d006f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633QMITN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBql5t7hF28RQigUB6hmpq1CjIDgRQAgQiG%2FIFGgJ3B7AiEA%2F4sywgHoj3EC3Bz6vuYkl6q14WAYUgRe%2BP7ibe0lOgkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB90vYf43U1fEvng3yrcA870ulu7vygPnrhQZRKdEwutEeSf5Huumq1Z7L5vBOaF8xoQPBdz%2BLDg77c6NPhomoyTpaXS2yafWXHlPmpvdic4fH43A8Dqr3CtYaaj%2FBDMZEdEoWz4dK0ErcuHj0gehsB6z8dn5pPEoyjHghWiIsktKAWnT6Nm8hOjnTZ2HZr7Nmqj7t%2BU0wIALl13cwabidqRkc%2BJ9%2BXku1oM2Wf8k996gLKKAFrwlPD%2BlP0dHdt37oU4WLtI9hbiSOkZrPchy%2FJOMk4GDAfVU0y2TDtoJm2rIpOYLohklBfRu29BesSdglYxa5dF%2BXxB%2Bci5FIgZ7pV73ojNKsVzyEAFi4pmkrGnVwyXcOjJay71AsJfTELATpFydR%2FNhnSup19z9X%2FfFhX7pW%2BsZi6AD63b9NJQNpFgmBfv%2FEbILFPrF6pJ%2BkH8R57g3qMuJCoju3gdtIjx4BhdfQNOIPQOCrWgsTxXTR1ir45S99wD6WuAmqsgIpnebfT%2Ftf7UCVKNO1VqKYtUBgPfLyYk5pUglbFIJ36XZnis8iOaf9k0o%2F1UQK3DJIjDJoNVHKALnrLIrFEtZfc%2Fsg7l327LRZ9wJ05ive%2F1L9JKGb5%2F35rMWZrQmeItQ%2BzEwiq4e%2B3dWzLyY4fzMMzo3MQGOqUBtmRtZrMSHEKAbNYBQ4Kp5GdmuwSj7tXo%2Bkfjf4OtxkNDXHhs7sqXYZOE69TM6Xhv3K4VFdWCp9lUqQh%2FqyjSQN%2Bk6DWipHxUuSRDfg93KoyXZEcVjIl6AvQGrLm6%2FUH3R%2F%2FE7onQgKh8dLvt%2FmcKZ6xg4oOaWZez2ddMXQIHYl1v32icvpUa0koC%2BVYKU%2FCjWr%2BkGdN4xGCiPZ24Rjm%2BeWgU4UHI&X-Amz-Signature=3cbcd76a74683cde1335491bf326f86776508f7e9ff72e3be7fc19266a983a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
