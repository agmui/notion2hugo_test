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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SZ3FF2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC8I4rMOJ8aPdMq8en1CaSW%2FLby%2BWn%2FCEZqIWHUGWPoVgIhAMZ7xK4hbRJdXzPOCi%2FleTWftztaTLgvfPHq4ggPoxDMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKTLPGAuhV9%2Bt4tmAq3AOcZ%2FWbQRPmPKqhsU%2B%2FfkLeKuBUNX6n5FASUbYb%2FOu25WEad%2BCZrTPzFD4v0E9I97jNDvArti8sLdKKqHL46WiG6tEjv0trNdQOIzdoQHxW2IKVuJ%2FqYuSrZlBWxZTrXj7plX1uAc%2Bz9GXwbSGVpix8N8UKV0yo7iP7%2F%2Fp8gVTGm7jM%2BvBjeLmG9egnf3%2FqPTm1cTD%2F73IE2Hyh%2BCAJ2Im9a6b505AzzOw3QX%2B5OZihSHmX0nZWu2VABIFYRKBGXuEsrM1UK2kqzGcDbVOsqEft4kzlRwu%2B7rGZJJcT5rOyx6GETk92twOeyHZYHCzMvOEhOlQXs9U%2B0vxXEkQG7jVYttry%2BnrnKoeWg9j05EZKz4dHTWZd2yc35VwVrfe3qsK3KW75sot7%2FpjflSwYQ45EF8z5N6kJyVc%2Bm2GXKMbvPRuc2KwrP4QSaejSRoJlq18EVkHE%2F3zUbtC%2BDpILPSpetkMMAjD63T03fBayQtMi%2FuLBwX4QFvBtCE6foCFYsgHyoGPJhlXlM5to39eVB%2FiBVbI6kjNGrfu9tFxC%2BXuj8VJWg%2Bzof93%2BVbCxEp%2Bh9qTpDPQVwBs8L7EbRmu2Bu66upqhMvE4F4eLDbfonFTWxgYg4dstOvzh9VJfITDMu9a9BjqkARJgdgawfO%2Buj9%2BYRuQeJ2Sqc0GW2gsjj%2FsVRLqD7WI%2BKaR28ZKKK%2BnPV%2B8m1Pwd1NtHUoRNMIjHV3P7IGkz15PQDaAUpUtghGE37fygVwWTwwgPhls9enJwVihfG6a4OV5MGYP7776oFylzyknlZL%2Bneg5ZDB7QY7lmKH0cS51QDAcYobXw1b6IpDoH5LRndN92tOi8Ahyon2zxOrboReOBG9rM&X-Amz-Signature=995142714275279e99b7dd2635b32f9f9e2f89248b7185f351f1b7ffc1004c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SZ3FF2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC8I4rMOJ8aPdMq8en1CaSW%2FLby%2BWn%2FCEZqIWHUGWPoVgIhAMZ7xK4hbRJdXzPOCi%2FleTWftztaTLgvfPHq4ggPoxDMKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKTLPGAuhV9%2Bt4tmAq3AOcZ%2FWbQRPmPKqhsU%2B%2FfkLeKuBUNX6n5FASUbYb%2FOu25WEad%2BCZrTPzFD4v0E9I97jNDvArti8sLdKKqHL46WiG6tEjv0trNdQOIzdoQHxW2IKVuJ%2FqYuSrZlBWxZTrXj7plX1uAc%2Bz9GXwbSGVpix8N8UKV0yo7iP7%2F%2Fp8gVTGm7jM%2BvBjeLmG9egnf3%2FqPTm1cTD%2F73IE2Hyh%2BCAJ2Im9a6b505AzzOw3QX%2B5OZihSHmX0nZWu2VABIFYRKBGXuEsrM1UK2kqzGcDbVOsqEft4kzlRwu%2B7rGZJJcT5rOyx6GETk92twOeyHZYHCzMvOEhOlQXs9U%2B0vxXEkQG7jVYttry%2BnrnKoeWg9j05EZKz4dHTWZd2yc35VwVrfe3qsK3KW75sot7%2FpjflSwYQ45EF8z5N6kJyVc%2Bm2GXKMbvPRuc2KwrP4QSaejSRoJlq18EVkHE%2F3zUbtC%2BDpILPSpetkMMAjD63T03fBayQtMi%2FuLBwX4QFvBtCE6foCFYsgHyoGPJhlXlM5to39eVB%2FiBVbI6kjNGrfu9tFxC%2BXuj8VJWg%2Bzof93%2BVbCxEp%2Bh9qTpDPQVwBs8L7EbRmu2Bu66upqhMvE4F4eLDbfonFTWxgYg4dstOvzh9VJfITDMu9a9BjqkARJgdgawfO%2Buj9%2BYRuQeJ2Sqc0GW2gsjj%2FsVRLqD7WI%2BKaR28ZKKK%2BnPV%2B8m1Pwd1NtHUoRNMIjHV3P7IGkz15PQDaAUpUtghGE37fygVwWTwwgPhls9enJwVihfG6a4OV5MGYP7776oFylzyknlZL%2Bneg5ZDB7QY7lmKH0cS51QDAcYobXw1b6IpDoH5LRndN92tOi8Ahyon2zxOrboReOBG9rM&X-Amz-Signature=a5e69a6a5dade7190233dc0aa2df3f315cfb59d307be85c5f0fb2316242fdb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
