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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GV4NQV5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3adHEYtSB1WAUQBqRB1%2F2n71ZWOdQTNkKlqsDsenlpAiA2zzjK2iRt2gnLxCZIZanovGhBzUbWHg8qGMNWGbtE8CqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6u7YGacwmci570jeKtwDrL2NF01LeiTzX69gJy2lgti9e9A0co5ZNnVtEHOVQWDx48EdrUOsmfmnSuzLC%2FhApdcwz8maiA3M3E7N5bUxFecyzyH7iwOVPq8wb8uhdcUtKQE0eJzojouplP14%2BdnsutuwgbJYnDQ%2B8QxyI8Vqt%2BN%2FtwDYZNHBWQOE3jOEtQU7vfw2%2FWpebgA%2F2KmdBmtnFpw4SaKbytp0b30wjg%2FKWXiQvp5sg7S4x2CBr1KOvuBsmU8TbEgD5g2E3hrTc23QPlg7UvV3PCAYYIML4TUFc4g5W1OoXQS%2FAxMPDOKRJdB%2BsxIlZdKNOOiiOTplerKVbcrPgnjSN7Cg8vlJfYItvtGVk2RA%2FAEBY%2Bcj0ls8%2BbqJE5XSf1o0KmtkE%2FboZJWOOMDlURnMhiPsQpz9OkddbKOi04P7gdP4NND71tstWp1tTw6yHthj60XK6jW%2FDfAilENyVFzdW6ZqU%2F4nOckHliXvdywYrUQKC4lA7MAOV311l69u4ykqO%2B8nnu%2FdMDBeUEnUsmo%2F12p2s4ia4jM2Zyz9PweGLmhRYbtRURw9%2FDAVUqI9JL5qF%2BEdn7rq4nLxg4DYVkQ90uYBPzQdCGyVQous2XeT%2BAT4ieUqt0X2WORWv6ROqxfe8GAN1L4w9v2jxAY6pgGIZOtl%2BfJwp7LSAwsVefAjDb6Xr7LAYCuTBgmAnxUoA5%2B%2Fs5RzuNtzInYK6PlI%2FJwnPnh0%2BuYL2m6%2F5antqK1dK548ldECUDEQ56wFwSQpSsg02Tw4lDDijyzbCMEEnBum13UvbprldEwplWIreMO9I7s6Lq4a0DK4GczP%2BcMgCtKjkbYT%2BEJjufY%2FhjzV4Pu40Fcz7CjhBcnI3ZlgTi60eR5RxU7o&X-Amz-Signature=eee120a0fd3f252b3d3370e17b97f20d26ddda9b2522da33fba9f149972b27cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GV4NQV5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3adHEYtSB1WAUQBqRB1%2F2n71ZWOdQTNkKlqsDsenlpAiA2zzjK2iRt2gnLxCZIZanovGhBzUbWHg8qGMNWGbtE8CqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6u7YGacwmci570jeKtwDrL2NF01LeiTzX69gJy2lgti9e9A0co5ZNnVtEHOVQWDx48EdrUOsmfmnSuzLC%2FhApdcwz8maiA3M3E7N5bUxFecyzyH7iwOVPq8wb8uhdcUtKQE0eJzojouplP14%2BdnsutuwgbJYnDQ%2B8QxyI8Vqt%2BN%2FtwDYZNHBWQOE3jOEtQU7vfw2%2FWpebgA%2F2KmdBmtnFpw4SaKbytp0b30wjg%2FKWXiQvp5sg7S4x2CBr1KOvuBsmU8TbEgD5g2E3hrTc23QPlg7UvV3PCAYYIML4TUFc4g5W1OoXQS%2FAxMPDOKRJdB%2BsxIlZdKNOOiiOTplerKVbcrPgnjSN7Cg8vlJfYItvtGVk2RA%2FAEBY%2Bcj0ls8%2BbqJE5XSf1o0KmtkE%2FboZJWOOMDlURnMhiPsQpz9OkddbKOi04P7gdP4NND71tstWp1tTw6yHthj60XK6jW%2FDfAilENyVFzdW6ZqU%2F4nOckHliXvdywYrUQKC4lA7MAOV311l69u4ykqO%2B8nnu%2FdMDBeUEnUsmo%2F12p2s4ia4jM2Zyz9PweGLmhRYbtRURw9%2FDAVUqI9JL5qF%2BEdn7rq4nLxg4DYVkQ90uYBPzQdCGyVQous2XeT%2BAT4ieUqt0X2WORWv6ROqxfe8GAN1L4w9v2jxAY6pgGIZOtl%2BfJwp7LSAwsVefAjDb6Xr7LAYCuTBgmAnxUoA5%2B%2Fs5RzuNtzInYK6PlI%2FJwnPnh0%2BuYL2m6%2F5antqK1dK548ldECUDEQ56wFwSQpSsg02Tw4lDDijyzbCMEEnBum13UvbprldEwplWIreMO9I7s6Lq4a0DK4GczP%2BcMgCtKjkbYT%2BEJjufY%2FhjzV4Pu40Fcz7CjhBcnI3ZlgTi60eR5RxU7o&X-Amz-Signature=8d79ca0cda2d6d76dc141b2574a15662077f63840e9ca9f5bf5429343c1c67d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
