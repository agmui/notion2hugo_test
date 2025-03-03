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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QWNPJD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT5%2B1h7XT3QOO3QBKnR%2F2XUJJZbIV40gCVDMaYBRtG3AiEAnCGVy0dVVbc1bXfNj3oWQY0hdsxopV22Kx4gOv0pTb4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc85yTFikYjbpWjnSrcA9a6qMtVCU6RCSfgB2Oy7nDPfYrGor3Dj%2F6CqUO%2FzqzMp5eY%2BMpLOjkB%2BQHNHGH9t9nIfHvsYDZRulWH7d2ZwLUXrRKPJ4c915H40a%2BY8T9wfe1m4h6%2F48mywHhYMbm07zfhxtwpJZE%2BOI1A0h%2B3DPRL7JqM7BoaplVFbXoD2ZBx9TnoyiLADFzm2jNqmP2%2BN%2FCpW%2BQ5vRpDkY7VIzuZYYRV5kaA5FFamC4TLECj0U7vEER6YqYKnUvRep0PwihGRsvbFSxsADyeb3dSd0pHcfptR0J%2FOzaEGKj68XH7%2BrGox2UlDdy4iatoeVbnampudV3KLIj6hxjAoTrFqZ%2FEpx%2FsYtFZyTtYDHSAq5ywfyHDqizaFAE%2FOfC%2Bwv5d0%2F33%2FRxwT6p3k8%2FvNGORt7767ZOeb5jAaQ2HsTRIv%2F8nXwWql0DIbP0U9gYJvAYFBPxxz3Gua8OJZxUijaXQRLNSe5t4dJpYyRKRfBagqca98n3xYz3kklXQ3moqg4f8n9bjktTdvT2m7MO%2BF6qPoYzKBZiXKwa4wEZMa1cxUVsmuqsnib6YaA21m%2F8P7u9TTRjqbtLT0itMfXc9qUP0PTjwsHBEGkxT0ofVQKmHnvZg%2FmsThkb0azZigcHemFSKML2glL4GOqUBTAfYQpHs%2FwcwrgR1ix9V1xFow2sjPIb2aB%2BtBnssGyug%2FV6pzhiWXS2ILDXVncp54vqfmP9pNiosloQCUx74GNyd3DPz3WgHKviyen9zYLPrDsPs5mCb1W9W%2B4IJj2wyOfb8Y1IerWAty6g44YvwXwdfzeHPZwKaugK3HZKkEr%2Fd1f8wfXLIkY9kWFHqS2WTUU2i0QEiwRdb80PljCC6wyox4xRq&X-Amz-Signature=e3a0e8917a1305730db731f66b3a045439dcd0bb631b77525dbb3cdc577937f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QWNPJD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT5%2B1h7XT3QOO3QBKnR%2F2XUJJZbIV40gCVDMaYBRtG3AiEAnCGVy0dVVbc1bXfNj3oWQY0hdsxopV22Kx4gOv0pTb4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc85yTFikYjbpWjnSrcA9a6qMtVCU6RCSfgB2Oy7nDPfYrGor3Dj%2F6CqUO%2FzqzMp5eY%2BMpLOjkB%2BQHNHGH9t9nIfHvsYDZRulWH7d2ZwLUXrRKPJ4c915H40a%2BY8T9wfe1m4h6%2F48mywHhYMbm07zfhxtwpJZE%2BOI1A0h%2B3DPRL7JqM7BoaplVFbXoD2ZBx9TnoyiLADFzm2jNqmP2%2BN%2FCpW%2BQ5vRpDkY7VIzuZYYRV5kaA5FFamC4TLECj0U7vEER6YqYKnUvRep0PwihGRsvbFSxsADyeb3dSd0pHcfptR0J%2FOzaEGKj68XH7%2BrGox2UlDdy4iatoeVbnampudV3KLIj6hxjAoTrFqZ%2FEpx%2FsYtFZyTtYDHSAq5ywfyHDqizaFAE%2FOfC%2Bwv5d0%2F33%2FRxwT6p3k8%2FvNGORt7767ZOeb5jAaQ2HsTRIv%2F8nXwWql0DIbP0U9gYJvAYFBPxxz3Gua8OJZxUijaXQRLNSe5t4dJpYyRKRfBagqca98n3xYz3kklXQ3moqg4f8n9bjktTdvT2m7MO%2BF6qPoYzKBZiXKwa4wEZMa1cxUVsmuqsnib6YaA21m%2F8P7u9TTRjqbtLT0itMfXc9qUP0PTjwsHBEGkxT0ofVQKmHnvZg%2FmsThkb0azZigcHemFSKML2glL4GOqUBTAfYQpHs%2FwcwrgR1ix9V1xFow2sjPIb2aB%2BtBnssGyug%2FV6pzhiWXS2ILDXVncp54vqfmP9pNiosloQCUx74GNyd3DPz3WgHKviyen9zYLPrDsPs5mCb1W9W%2B4IJj2wyOfb8Y1IerWAty6g44YvwXwdfzeHPZwKaugK3HZKkEr%2Fd1f8wfXLIkY9kWFHqS2WTUU2i0QEiwRdb80PljCC6wyox4xRq&X-Amz-Signature=d8173170de36be5338f2767d107140a9b3a0fc7f10595f8879d6e0528483dd9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
