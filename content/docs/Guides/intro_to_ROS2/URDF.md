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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERRSIRK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hJ5BATW%2BETxY2HdilkgAZJqfLr1nuD6Lrnc7E1oOQIgKyuYYuYmczufH5XmgSEI1wlblnC4H1rPXZ9Tb5LsfZoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGLUhx5G5o%2FEYXuVircAxhNsDvsJpx%2BbNL1prMessaGu3cRPRw0DNxW5lFcymjyrRxYYV0Z3eIbHw5HYOGch8aQUWxSnS2C2KnHkVdAaSxpB3%2FFH%2Fy71bvQlVyfnbEUj5I9BR3nFcYStEEoAW%2FRIDdRG0VBBpGzAh8584N9IKCvjaoRP1Z%2BNo4Qyo1YUVgvHQJD3u0%2FZySOY42DJPBjBBz2Pf9McaotT8c5J3Uac0x5Y8QWpDHZJDU1miXD7Sxfpg5upaf85OrT1%2FzX3UvIs%2F4Nu2ZHvGyLYmbCxZY%2FZksCFMmSiFQlRamxw1rvkOxjO6viTSkzS7%2BFfLsWYao8Ks42XjU8g%2B0gBQFjV2yDIMtx12uZC%2F49qPlNo3LfTiXwk11P9HpLi1%2F91ko6%2BSAZnITtG%2FpYzPkKp%2B%2FCIU0FKKOHv5goMZQtzOFKGeUcV11Oh405Neh%2BhUJT7%2FqfRpq4cYCnuMBMPcQQhbGS2dtXoBYYz84dP9AikzZ3yijlqTm0y2nMuPzOiiJu1D7%2FFt6zkTGhDBOCKhdAqwco9Pe9k7gA%2BR8NmHU9VYrH4o4NHZq9RFTRnONQXaxmuMQP%2BucCo8iGdcHTXzL%2B6cS309%2BjmCm42%2BvI9fS4TkS2GWL0T5Z541WuD%2BMdiVSve0dvMMTU88MGOqUBb8MnG3rOhDZQBaK6RQTtcyvC7b4x8C9ik85QD%2BE7rbFV4%2FOvPJGbr3DaWFhnVA4hBC2PL%2BtzDqCDZU0NXwZNK7wQKDv4sKhgqQ8Qi1lmQjNhPCNBetIYexQozzIxUFMBqr6bJgwQ8JMofWgM%2FsPexKB6wyglf3SAuBItgPdKRrpKb1r2qdj9ocDS79lNm14slNL5470J9kA9hAvRYMSq3y41ooO%2B&X-Amz-Signature=2486dbdfa372cff7ea8c754b1f3798124a7a2bcfc0009fe0f4c219aefbaca5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERRSIRK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84hJ5BATW%2BETxY2HdilkgAZJqfLr1nuD6Lrnc7E1oOQIgKyuYYuYmczufH5XmgSEI1wlblnC4H1rPXZ9Tb5LsfZoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGLUhx5G5o%2FEYXuVircAxhNsDvsJpx%2BbNL1prMessaGu3cRPRw0DNxW5lFcymjyrRxYYV0Z3eIbHw5HYOGch8aQUWxSnS2C2KnHkVdAaSxpB3%2FFH%2Fy71bvQlVyfnbEUj5I9BR3nFcYStEEoAW%2FRIDdRG0VBBpGzAh8584N9IKCvjaoRP1Z%2BNo4Qyo1YUVgvHQJD3u0%2FZySOY42DJPBjBBz2Pf9McaotT8c5J3Uac0x5Y8QWpDHZJDU1miXD7Sxfpg5upaf85OrT1%2FzX3UvIs%2F4Nu2ZHvGyLYmbCxZY%2FZksCFMmSiFQlRamxw1rvkOxjO6viTSkzS7%2BFfLsWYao8Ks42XjU8g%2B0gBQFjV2yDIMtx12uZC%2F49qPlNo3LfTiXwk11P9HpLi1%2F91ko6%2BSAZnITtG%2FpYzPkKp%2B%2FCIU0FKKOHv5goMZQtzOFKGeUcV11Oh405Neh%2BhUJT7%2FqfRpq4cYCnuMBMPcQQhbGS2dtXoBYYz84dP9AikzZ3yijlqTm0y2nMuPzOiiJu1D7%2FFt6zkTGhDBOCKhdAqwco9Pe9k7gA%2BR8NmHU9VYrH4o4NHZq9RFTRnONQXaxmuMQP%2BucCo8iGdcHTXzL%2B6cS309%2BjmCm42%2BvI9fS4TkS2GWL0T5Z541WuD%2BMdiVSve0dvMMTU88MGOqUBb8MnG3rOhDZQBaK6RQTtcyvC7b4x8C9ik85QD%2BE7rbFV4%2FOvPJGbr3DaWFhnVA4hBC2PL%2BtzDqCDZU0NXwZNK7wQKDv4sKhgqQ8Qi1lmQjNhPCNBetIYexQozzIxUFMBqr6bJgwQ8JMofWgM%2FsPexKB6wyglf3SAuBItgPdKRrpKb1r2qdj9ocDS79lNm14slNL5470J9kA9hAvRYMSq3y41ooO%2B&X-Amz-Signature=e7da87c0447bfc60c57949ed8bfbdc593480e60bd3b08e4ee91db1412e68c390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
