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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSJULVQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH2IF1OdrtzrrfBzFhxv5to35g2S58KtdTLPUcdYvDLnAiB5c871L2FiUEjzvaXZWLbWTQltADCUwNIjwvQlj2K0Syr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbW780Au%2BXtZjoSe8KtwDIs%2Bw9f7TR8%2FyiksyXbd%2FPdybFNoayTEXnsK%2FOYYeqqH%2B3JxoeMAN03uuNqqcrsW%2B9uGgSjGJW7HOV9kTFefk2ejNOvsrMoPSKo%2B2aO4aHKNwDKkc19DO%2Btix%2BFeX6K0Rn3lZfBPQAbTSGzSSnqo0U1kp3xKcisS2MZXk7QHpxgNNMfSVTZGVptMa%2FSai8uOudzDW%2Fdn2jN5std5ZgjNEzd9rWLi%2B52buz5Yvaq77x4X7AT9vDIdMHLGbE8O%2B45AQo%2BevQQwYSkIkr2WNvMIr6Snsg7xQmXb7BxjWslLjkqWvD0BujvBJ39XCmKjy3cF3DL0HfVtibDBzKefvoL59rF%2BXvAkFQ9b%2FieQDuwnwCUVh1EP7L63rRdMKpdwluLP3OzFaxv5rlEo41eQddTlBPldGN8%2B%2BHURgtaZajAz96Yoo6mhrjxXKQzom1WgvBGKWTL4tdVmNOaQndGYA0xs85iYP0M45JtgA89wby0qrfe0IeaJNlg5B2USLUgO5INulQ5FvzhDCKECj2F4HJ9i5LsOUTBbZ8pAodpdHQFXcdUyj3eS9vjBq%2FGLrsxCrI17cRh%2B5c97WrkyFdq6tPPrKMjX08d2Fg13ivhpQxz5fUKcwVWUJV051kttPBXYw8eT4vQY6pgGd6HOOC%2F1HmZly%2FRjaHf3C%2BI1l%2F3i4hjlpX4dGsQk1GHQqUUVGRlo0njuIto1wsFIDqvAVhSm2bMmKna%2FvdXRtc6xutWFRu5ai4L6xP1NmwxZhFJfxEr0h7CtvXJFbEB6WVtx4bfNqJ9QlxAgU1sqHatch10%2FsQa5sC9IgPfyiiFJ%2FYcWj5JyxBNeX9rPYHUMQ%2B5nisWXC2%2FXMaZov3PaDEc%2FiKVsu&X-Amz-Signature=d20799c1e83a23099c93fb08b0993119d1bc47a61825f80d59f846282452c9db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSJULVQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH2IF1OdrtzrrfBzFhxv5to35g2S58KtdTLPUcdYvDLnAiB5c871L2FiUEjzvaXZWLbWTQltADCUwNIjwvQlj2K0Syr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbW780Au%2BXtZjoSe8KtwDIs%2Bw9f7TR8%2FyiksyXbd%2FPdybFNoayTEXnsK%2FOYYeqqH%2B3JxoeMAN03uuNqqcrsW%2B9uGgSjGJW7HOV9kTFefk2ejNOvsrMoPSKo%2B2aO4aHKNwDKkc19DO%2Btix%2BFeX6K0Rn3lZfBPQAbTSGzSSnqo0U1kp3xKcisS2MZXk7QHpxgNNMfSVTZGVptMa%2FSai8uOudzDW%2Fdn2jN5std5ZgjNEzd9rWLi%2B52buz5Yvaq77x4X7AT9vDIdMHLGbE8O%2B45AQo%2BevQQwYSkIkr2WNvMIr6Snsg7xQmXb7BxjWslLjkqWvD0BujvBJ39XCmKjy3cF3DL0HfVtibDBzKefvoL59rF%2BXvAkFQ9b%2FieQDuwnwCUVh1EP7L63rRdMKpdwluLP3OzFaxv5rlEo41eQddTlBPldGN8%2B%2BHURgtaZajAz96Yoo6mhrjxXKQzom1WgvBGKWTL4tdVmNOaQndGYA0xs85iYP0M45JtgA89wby0qrfe0IeaJNlg5B2USLUgO5INulQ5FvzhDCKECj2F4HJ9i5LsOUTBbZ8pAodpdHQFXcdUyj3eS9vjBq%2FGLrsxCrI17cRh%2B5c97WrkyFdq6tPPrKMjX08d2Fg13ivhpQxz5fUKcwVWUJV051kttPBXYw8eT4vQY6pgGd6HOOC%2F1HmZly%2FRjaHf3C%2BI1l%2F3i4hjlpX4dGsQk1GHQqUUVGRlo0njuIto1wsFIDqvAVhSm2bMmKna%2FvdXRtc6xutWFRu5ai4L6xP1NmwxZhFJfxEr0h7CtvXJFbEB6WVtx4bfNqJ9QlxAgU1sqHatch10%2FsQa5sC9IgPfyiiFJ%2FYcWj5JyxBNeX9rPYHUMQ%2B5nisWXC2%2FXMaZov3PaDEc%2FiKVsu&X-Amz-Signature=d7503d529ac538d69a4259a28bd5f4a79deb8104cb7e09a62fd1dd2ce40151bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
