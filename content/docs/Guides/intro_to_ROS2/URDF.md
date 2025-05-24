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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL54HXLO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGXxJX7sssZwHJUUDcIMbWHDalXNXg09Wa%2BeA1Z0rlgLAiEA%2BDQrTBHX9ARy8ka9uWDfkW6DCzcu4Z6H0iC0zWDdPzAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDHlrdNiCOydZwd8JircA87t857%2B3c3594ciBLrF5Hf%2BclFlRFwzi7KDCisKkuI7Vp8iexH6SHTLU9D2%2BEV1x%2BsP3cjJ1zIKzGFzrnB4it%2F1dCope3eRBatDI6gVXzVgAwAADykuPkfP37PNg0BqupaOwq5a0XA0eO8sVasqamVJfA3lxZru%2FiYZiUkRDbX7YTBexnuI8QvhJMzxdL89FRStD1L%2F4FTbD5pXwACgYNnwzNLFWebDiOUi4iI%2FVRhnI6b1tshnPvjX5FjzSypjKIILUh1MvJQThuUKYAW8UnX4woGGH261%2Fb09reCHiJvHdfsREBTe3XAWMKXblEtIahn1Pfs2UmIGpE62zc5JxNK5AAj16RBqOc878Ge32jczrWJI1%2FGGdHk63nT5uWBZcVbyFXTPFpGJ15xVotVBkiDwZkrZJyozqTfdjxg5le4UedjfhpV%2FbztBOh9HbaImFbNwfEgnehtUvUfywZlNp5nC3G6fWKTlkSgj0phaJRGR3AAJ54rBBJ70dIroipPHZNE4VHQDcsmXP68lSDi8gQxzTHthsCynAC79o7ZikUjkCseJOCgQWUSKFpCnVAyWW0b5QbjgepwfteUSeEox%2BEOWF5W7tuIfilv0YtvOh2Br7%2FBQLIhvsun4kzusMIWWyMEGOqUBbcJM7o2TLE%2BntLyJdD0ciDaZhk%2FE8jK4q45%2BD4iLXEct5%2F%2Bpn6jOMKhp%2BdQ6VuZDzuTmBxbo%2BP4Iy5CLwHtdnFAAQgPjPxbtvY2FHzvAlrOiiMW1XLpES3CgKzFcpSS4wStOTX78tgLUw2FDBzLRp1eXBa2F9FsoXyVO%2FUjBq1R8mDHvb354PyAd20hjqXtmrM%2BlhNHchs5tdi4fTeDI6MyHRJ5x&X-Amz-Signature=efc63d3fac3d22f7095dfcf25b502695db6bcaf3a37fe584763b470fd8b62c48&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL54HXLO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGXxJX7sssZwHJUUDcIMbWHDalXNXg09Wa%2BeA1Z0rlgLAiEA%2BDQrTBHX9ARy8ka9uWDfkW6DCzcu4Z6H0iC0zWDdPzAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDHlrdNiCOydZwd8JircA87t857%2B3c3594ciBLrF5Hf%2BclFlRFwzi7KDCisKkuI7Vp8iexH6SHTLU9D2%2BEV1x%2BsP3cjJ1zIKzGFzrnB4it%2F1dCope3eRBatDI6gVXzVgAwAADykuPkfP37PNg0BqupaOwq5a0XA0eO8sVasqamVJfA3lxZru%2FiYZiUkRDbX7YTBexnuI8QvhJMzxdL89FRStD1L%2F4FTbD5pXwACgYNnwzNLFWebDiOUi4iI%2FVRhnI6b1tshnPvjX5FjzSypjKIILUh1MvJQThuUKYAW8UnX4woGGH261%2Fb09reCHiJvHdfsREBTe3XAWMKXblEtIahn1Pfs2UmIGpE62zc5JxNK5AAj16RBqOc878Ge32jczrWJI1%2FGGdHk63nT5uWBZcVbyFXTPFpGJ15xVotVBkiDwZkrZJyozqTfdjxg5le4UedjfhpV%2FbztBOh9HbaImFbNwfEgnehtUvUfywZlNp5nC3G6fWKTlkSgj0phaJRGR3AAJ54rBBJ70dIroipPHZNE4VHQDcsmXP68lSDi8gQxzTHthsCynAC79o7ZikUjkCseJOCgQWUSKFpCnVAyWW0b5QbjgepwfteUSeEox%2BEOWF5W7tuIfilv0YtvOh2Br7%2FBQLIhvsun4kzusMIWWyMEGOqUBbcJM7o2TLE%2BntLyJdD0ciDaZhk%2FE8jK4q45%2BD4iLXEct5%2F%2Bpn6jOMKhp%2BdQ6VuZDzuTmBxbo%2BP4Iy5CLwHtdnFAAQgPjPxbtvY2FHzvAlrOiiMW1XLpES3CgKzFcpSS4wStOTX78tgLUw2FDBzLRp1eXBa2F9FsoXyVO%2FUjBq1R8mDHvb354PyAd20hjqXtmrM%2BlhNHchs5tdi4fTeDI6MyHRJ5x&X-Amz-Signature=e8c00a82b8acf8cb251745674a0c4f681abf201447c160c092f5de3ad3bda6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
