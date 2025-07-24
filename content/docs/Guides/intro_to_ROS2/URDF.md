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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEEKPHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC6BXL3KBCG810nJN5zgP64UuOlTvQjuQy963fiFPAtGAiEAxqKeCoKFwqtRQkshi7GrV2Yx1Au8SlYRwMKUMW1EY0Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAwmYdYPWkgUpCKL%2FCrcA%2F2HrydlWIgI2xKMMKfhAQ8rk11SFncNwW2kCfWR3dLpsnVBlxQfidhHb4%2F9UvHK0IsLzJsHLaSRmurV8KRdCeEqNk3O%2FWqzTX8dbGToTPB79Vy%2BPWHLZs2ZQCxMoFoqyFqnXpbxmY9C1jnEux9REX98vxB9XsOe7UnvPWdUaRs8WAfCf0oL6bIQ8lH%2Fc86hhlQQ5GSHnuMqWwZumADHVhHz1Lf7jF%2FGo46r%2BdkjzDedWul6W9p%2F%2B3IfWWKVJlNyZPuxU4OEE3lqK4Rj3axboptnqddcQf3r1OM%2BAFrZN1d36B4vb1QqBD0Fq3bBVL%2BxfehCX1XHCMBco3JKJNzEC2XtC46u3CmyYsGLzQ%2BsYoTd6vxFZLqvXBUfM3IRkk0wEjqqLxN7QLed8Ycr1qBjnN%2B2ESBmTeJyf64h0cx93KtrXTfZZBilq32lEiKn4Vj7HmOSaeMF6Ce%2FuHmVdM0Ctf4ZigLmsXHtjauBZH1I5drkpjtdiEXYylfY4j9F3YX%2BsZLyPPqJrjbwCLZLNBoOc2AEp9oZKvryWODbSVArtUuUbeuTJWe6ISzTpZYQgdytI08V4Y%2Bqr2YN1%2BUfvFGaSh%2BFGbcVvZnQR%2Fvoj5gcXBWFFLNLqOdrLh0d6zaCMOGPiMQGOqUBuG7daZdrNPOiYTq507YagsE5nhFQFnu0QlEDPRZP3ttlY3EUH8IpJ4XB8AGzU5XKxQeWmxRHJyDtLwdRjZr1a5FLLTcMc%2FxQiU3KKhydZSCvVKA7he0TENKK02QFRTnNEcLk5Febl%2FS68Vh94MMlIQaFdMFyhj%2Fu1wiiQQCQiu96owJhud%2BArJNsJEt62csaxfosKk35HFAFqBt6Vy9gxaNRb%2FO4&X-Amz-Signature=6c310c6a8229413cda40e37d83f4a77313be49374352576c60a14946e6003e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEEKPHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC6BXL3KBCG810nJN5zgP64UuOlTvQjuQy963fiFPAtGAiEAxqKeCoKFwqtRQkshi7GrV2Yx1Au8SlYRwMKUMW1EY0Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAwmYdYPWkgUpCKL%2FCrcA%2F2HrydlWIgI2xKMMKfhAQ8rk11SFncNwW2kCfWR3dLpsnVBlxQfidhHb4%2F9UvHK0IsLzJsHLaSRmurV8KRdCeEqNk3O%2FWqzTX8dbGToTPB79Vy%2BPWHLZs2ZQCxMoFoqyFqnXpbxmY9C1jnEux9REX98vxB9XsOe7UnvPWdUaRs8WAfCf0oL6bIQ8lH%2Fc86hhlQQ5GSHnuMqWwZumADHVhHz1Lf7jF%2FGo46r%2BdkjzDedWul6W9p%2F%2B3IfWWKVJlNyZPuxU4OEE3lqK4Rj3axboptnqddcQf3r1OM%2BAFrZN1d36B4vb1QqBD0Fq3bBVL%2BxfehCX1XHCMBco3JKJNzEC2XtC46u3CmyYsGLzQ%2BsYoTd6vxFZLqvXBUfM3IRkk0wEjqqLxN7QLed8Ycr1qBjnN%2B2ESBmTeJyf64h0cx93KtrXTfZZBilq32lEiKn4Vj7HmOSaeMF6Ce%2FuHmVdM0Ctf4ZigLmsXHtjauBZH1I5drkpjtdiEXYylfY4j9F3YX%2BsZLyPPqJrjbwCLZLNBoOc2AEp9oZKvryWODbSVArtUuUbeuTJWe6ISzTpZYQgdytI08V4Y%2Bqr2YN1%2BUfvFGaSh%2BFGbcVvZnQR%2Fvoj5gcXBWFFLNLqOdrLh0d6zaCMOGPiMQGOqUBuG7daZdrNPOiYTq507YagsE5nhFQFnu0QlEDPRZP3ttlY3EUH8IpJ4XB8AGzU5XKxQeWmxRHJyDtLwdRjZr1a5FLLTcMc%2FxQiU3KKhydZSCvVKA7he0TENKK02QFRTnNEcLk5Febl%2FS68Vh94MMlIQaFdMFyhj%2Fu1wiiQQCQiu96owJhud%2BArJNsJEt62csaxfosKk35HFAFqBt6Vy9gxaNRb%2FO4&X-Amz-Signature=4f250379727c4a76968f3292bb2f88badb4a6fb28202b0813fb155e9abc09bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
