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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSILQTL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDltxYmrjBLDTm5MemhJmdd1Xbon2tI56nvrt2FM%2FUViAiEAqTi5IDh80T8t%2B0iKaXQxI3%2BHOi7TV1NQdhgW5MRgXC4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgMYRxQJuoHEvKehyrcAzgn3vQLPSPkIKBXa82WOwXdI1utg2rvCwMovk3zzQFVdk5NWVC93ofD%2Ffov6aHWOSu3Q30EWC2h4zmWL%2FRahMxi6wZJHb%2BWddkllPqBBSSZ6FZ7nOoPaVqedhff3UQkTsYY50UxAEGqxd07bIZrBMEuuX%2BNqm8SkruAF7i5zXVF8IOxHp5U5W7PbpmCBK716zEnbF7iueXYvVtGDyAgqF68bzXF7XWbZNd9VlC0EWdb0v7lwPYaeumZgVoJlLbe1EHii%2FeCKSFZxtM9p6W245j36Cdn8lW%2FfuQ6jd%2BN%2BXBlvNzg9xtcpvpHlHjfU7tPxRE7XYOTktfBzqNC6lkFsShSiIxXjIpo5e0K9Hxe6xOt3iqYK%2FSkKuZd9vuJaEyVBQpMKlbwFpEyu5b3uDui3cFSrEjAftq9ld83qT%2BSxkLnBbtYVfd2%2FR3ex%2FV%2B1CiTxd8c6TSibUmvCuZhj%2Bv5caMBCQOhBSZqxt5EKoMPKoXme5VeyZP6%2BgoLkxrp%2BgHvTsjLYW3hkUwJCYfLVRlRCU%2FSjAKQUVm5iN2MElLHVluoYJEvnpsn4rf2iqDNNepz0KWy6XW3baFW%2FE9BMK%2BxbbaABZWUGzw6p5V4jIbbZzX8xu9gSZKlIClOBF33MOa9ucMGOqUBz%2B621Kjxn%2B1RzEjFURIPg2J0o5E6cRovdHOrv1o4SfheQhEJbrtjyYcYmMN%2BbonT5JBKxhzbT4eOIhzP%2Fg%2F93tpQ%2BNGk%2B45Zuqlj%2BMDyFYhuGPMI0%2FZM0W3SYvuKvGCOx6kQiBdzQWSt10M4xIRUiMdSrrBz%2BExazFp9sY0h5528Y%2BdG2jH0%2FsNPYgmXvbn3CGPh%2FdGaKqEV39286XjFHCpXVEyv&X-Amz-Signature=073302e63f55f62268c2a6ae6b4f7d56223cb19e46a684b67b70d0c6bb1011ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSILQTL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDltxYmrjBLDTm5MemhJmdd1Xbon2tI56nvrt2FM%2FUViAiEAqTi5IDh80T8t%2B0iKaXQxI3%2BHOi7TV1NQdhgW5MRgXC4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgMYRxQJuoHEvKehyrcAzgn3vQLPSPkIKBXa82WOwXdI1utg2rvCwMovk3zzQFVdk5NWVC93ofD%2Ffov6aHWOSu3Q30EWC2h4zmWL%2FRahMxi6wZJHb%2BWddkllPqBBSSZ6FZ7nOoPaVqedhff3UQkTsYY50UxAEGqxd07bIZrBMEuuX%2BNqm8SkruAF7i5zXVF8IOxHp5U5W7PbpmCBK716zEnbF7iueXYvVtGDyAgqF68bzXF7XWbZNd9VlC0EWdb0v7lwPYaeumZgVoJlLbe1EHii%2FeCKSFZxtM9p6W245j36Cdn8lW%2FfuQ6jd%2BN%2BXBlvNzg9xtcpvpHlHjfU7tPxRE7XYOTktfBzqNC6lkFsShSiIxXjIpo5e0K9Hxe6xOt3iqYK%2FSkKuZd9vuJaEyVBQpMKlbwFpEyu5b3uDui3cFSrEjAftq9ld83qT%2BSxkLnBbtYVfd2%2FR3ex%2FV%2B1CiTxd8c6TSibUmvCuZhj%2Bv5caMBCQOhBSZqxt5EKoMPKoXme5VeyZP6%2BgoLkxrp%2BgHvTsjLYW3hkUwJCYfLVRlRCU%2FSjAKQUVm5iN2MElLHVluoYJEvnpsn4rf2iqDNNepz0KWy6XW3baFW%2FE9BMK%2BxbbaABZWUGzw6p5V4jIbbZzX8xu9gSZKlIClOBF33MOa9ucMGOqUBz%2B621Kjxn%2B1RzEjFURIPg2J0o5E6cRovdHOrv1o4SfheQhEJbrtjyYcYmMN%2BbonT5JBKxhzbT4eOIhzP%2Fg%2F93tpQ%2BNGk%2B45Zuqlj%2BMDyFYhuGPMI0%2FZM0W3SYvuKvGCOx6kQiBdzQWSt10M4xIRUiMdSrrBz%2BExazFp9sY0h5528Y%2BdG2jH0%2FsNPYgmXvbn3CGPh%2FdGaKqEV39286XjFHCpXVEyv&X-Amz-Signature=076104497c98f7654f78df844fc133a463efd8ca25291e935c9fa3a5572f5399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
