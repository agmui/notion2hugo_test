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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI2ND3T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmOh%2BPjjC8LXA4riITp4KyT0%2B%2BwzP%2BWs87P41FPdGReAIhAJKyNuOFuvZYVY8tXMJTjgRfOHoBJ1cVAvBRu7zpaoKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgyzIn%2FfJzLVNSJOkP0q3ANsxZik0T4kTNaWkr%2F8GLjZzfPuTIokh4TOoYCogVsMAuXOM6ISPzg2Nd1Dhqt45DXF5nY9WPJNHlYY1NNpkv60TSDXiZWTeul6RreC3xRVLxWmi%2BFicCMAhZ3QcB2xmZdJo%2FHX5aBHws8BrslqmY3ueQ2VwGO%2FqDQivycobXgH8UJyIDxR3B6tGAkLk4LtYAsPmAm06270wyPN7dSat%2Bi0aMCF1wvJjZAVYMVvXzB9SxM5SWz0HwepI9MtZxaXqYyoHZYs79Ih1FLKnl9JR8GGWnFxO1NI7DAy1Z5jZ2Q414KPinDGI3kLoDS59i%2FRGwglOP1OHBnCCT0HlLHzo0jzddodwVIRA22Gdj4iNjlDfvrcV2id%2B6gIIA6OkzWDme1cSNkX9Sron%2BoFSEEDzRksJ4wQOrmoRVZMtUXViEFkjBwso4L0TXABnWcXe8CZYQRsw9O5PiFXtyTJDcUA1ZV1djPAgpqwLF7aL%2FmQ65taieEXJ0wV%2BRvEM97vF%2FsH6xhXY6TNWprqh85vk1In7lxEmxmDv8QrbWnp1uN60mdUa8d2zacS5SxjFeAV3Yu6BgqnB%2BQpsEfVn78mFus%2F02qDC1faGeINoD8dGeUQA37DIEkBVx7Qxba2TN0%2B1zCsgLrEBjqkAdvxJFGpWi%2BS9CGvRMKk7hBs8oKcb9fqEj4nXsAuBhM3nVO4IF%2BIBS9zHCc7hRASBzt4z%2BCPblZHu%2Bx3xbfAS8zRzIx%2F9snWQWTHiHszDeMTyUiBmosp5Km6CA8YrOEez09BdfNke5bXjFJW723POVViwjZDgueDOGAMps8p2yx7cqLnqPbsbS4B3skbsjKLaRCmHaTMH5Cx6Opq9HNOVaWLWWQ%2B&X-Amz-Signature=dfda18094f05e48c00e977593ac7e4131ad77235395886755586ccf34cf70c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DI2ND3T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmOh%2BPjjC8LXA4riITp4KyT0%2B%2BwzP%2BWs87P41FPdGReAIhAJKyNuOFuvZYVY8tXMJTjgRfOHoBJ1cVAvBRu7zpaoKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgyzIn%2FfJzLVNSJOkP0q3ANsxZik0T4kTNaWkr%2F8GLjZzfPuTIokh4TOoYCogVsMAuXOM6ISPzg2Nd1Dhqt45DXF5nY9WPJNHlYY1NNpkv60TSDXiZWTeul6RreC3xRVLxWmi%2BFicCMAhZ3QcB2xmZdJo%2FHX5aBHws8BrslqmY3ueQ2VwGO%2FqDQivycobXgH8UJyIDxR3B6tGAkLk4LtYAsPmAm06270wyPN7dSat%2Bi0aMCF1wvJjZAVYMVvXzB9SxM5SWz0HwepI9MtZxaXqYyoHZYs79Ih1FLKnl9JR8GGWnFxO1NI7DAy1Z5jZ2Q414KPinDGI3kLoDS59i%2FRGwglOP1OHBnCCT0HlLHzo0jzddodwVIRA22Gdj4iNjlDfvrcV2id%2B6gIIA6OkzWDme1cSNkX9Sron%2BoFSEEDzRksJ4wQOrmoRVZMtUXViEFkjBwso4L0TXABnWcXe8CZYQRsw9O5PiFXtyTJDcUA1ZV1djPAgpqwLF7aL%2FmQ65taieEXJ0wV%2BRvEM97vF%2FsH6xhXY6TNWprqh85vk1In7lxEmxmDv8QrbWnp1uN60mdUa8d2zacS5SxjFeAV3Yu6BgqnB%2BQpsEfVn78mFus%2F02qDC1faGeINoD8dGeUQA37DIEkBVx7Qxba2TN0%2B1zCsgLrEBjqkAdvxJFGpWi%2BS9CGvRMKk7hBs8oKcb9fqEj4nXsAuBhM3nVO4IF%2BIBS9zHCc7hRASBzt4z%2BCPblZHu%2Bx3xbfAS8zRzIx%2F9snWQWTHiHszDeMTyUiBmosp5Km6CA8YrOEez09BdfNke5bXjFJW723POVViwjZDgueDOGAMps8p2yx7cqLnqPbsbS4B3skbsjKLaRCmHaTMH5Cx6Opq9HNOVaWLWWQ%2B&X-Amz-Signature=0cb292fe7bdf827e90acd2257975c29f555621db34c72e27ed1a42cad6501e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
