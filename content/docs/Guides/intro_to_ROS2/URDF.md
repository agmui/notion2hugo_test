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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTXIN57%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmmscqZTx7doD7J4G7eG%2Be25emTMxvgjm0JqiSK7YLtAiBkD9cq2plHZMt8i7bV6PvdCHXP1vlWPsMcVDREPfeEACr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM23ZXQpDuMPuQfpWAKtwD9lNJSh%2Bk8zgkycR1VP4XBkB3TVMTPXamPWWjqpCBSnLYQCuQSKTH18ZDR%2Boh6ARxKrhEaFeN7hveX0OmiRXoEum64dQDViG6KMSq2WJ%2FMPT4YwCYGNpC%2FNMk%2Bb8aGupSKMHRqXWFSHRBzpsCyauTF%2FFlfLXHn1juVHttwjRICjiAw0ORV2NHqoEKFhu9zbATiM1WSB%2FwzhYfXDkw61lR8ERu7A6LLGTF5K3xmbBRB0KcWuVbri6UVQdU1jkY%2BveMFFdi43h30t2pj1OWZw%2B7885kGPJiMQR4Vuga4CELCfJ05xaPXwI8KBWRo963vMOEEg2iuaFEPCfBT6FKRXccW6r6pQlCPCtPhAPG96oIph2J%2F0YaQzvu2IG5EDeh6oat7C21jeVG1PukmQNlP46kSs3YXEOWoGt3y%2BE9ToF89W2YIHC0auMDe%2FcEzWrgPW8OWICdfdYYQ4OB4wMOCs1%2FPCjJZwF0zxzIzKRWR2w%2FVRTf8RDGI4o0ir9D3ZT7%2BbTq4HyYcfjj5jMnmKtuw1Wqrg55sFun6NdcpFYg%2BVse4iHAmfhxEOLi4m2rUC41VUc2LjW8s28IcCGtcZ3aeEJ81uLMYlSvH8jJBqPQ%2BsbS2DJ3I%2B4%2BYmDtb6skBdEwg573vwY6pgFEbskM%2Bj%2F3Yz1ubYYr1MJe8ERemmZBKBw4MIVXndUNfGCuPtM7%2B1KR76Cve2muL6aZwT08YSTjt%2FrX2K7aIv6j8fjT%2Fkkak5nXSwFzJ7R1HkTNvSC9Y81Ny7RCzsQCP3DsRTnSY9Mf%2BwNmVD71GtvWD6L%2B5JUFrGyiun2S3ovNQbMjlegixqW6epqu3%2FfA3E2rQVpR3GakqfyWLtvFuM7wzLBNXoJ1&X-Amz-Signature=de2f741ce8f5a72efc718192ad19071dbf976731c0df820f4bad4f4a74b9e545&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTXIN57%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmmscqZTx7doD7J4G7eG%2Be25emTMxvgjm0JqiSK7YLtAiBkD9cq2plHZMt8i7bV6PvdCHXP1vlWPsMcVDREPfeEACr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM23ZXQpDuMPuQfpWAKtwD9lNJSh%2Bk8zgkycR1VP4XBkB3TVMTPXamPWWjqpCBSnLYQCuQSKTH18ZDR%2Boh6ARxKrhEaFeN7hveX0OmiRXoEum64dQDViG6KMSq2WJ%2FMPT4YwCYGNpC%2FNMk%2Bb8aGupSKMHRqXWFSHRBzpsCyauTF%2FFlfLXHn1juVHttwjRICjiAw0ORV2NHqoEKFhu9zbATiM1WSB%2FwzhYfXDkw61lR8ERu7A6LLGTF5K3xmbBRB0KcWuVbri6UVQdU1jkY%2BveMFFdi43h30t2pj1OWZw%2B7885kGPJiMQR4Vuga4CELCfJ05xaPXwI8KBWRo963vMOEEg2iuaFEPCfBT6FKRXccW6r6pQlCPCtPhAPG96oIph2J%2F0YaQzvu2IG5EDeh6oat7C21jeVG1PukmQNlP46kSs3YXEOWoGt3y%2BE9ToF89W2YIHC0auMDe%2FcEzWrgPW8OWICdfdYYQ4OB4wMOCs1%2FPCjJZwF0zxzIzKRWR2w%2FVRTf8RDGI4o0ir9D3ZT7%2BbTq4HyYcfjj5jMnmKtuw1Wqrg55sFun6NdcpFYg%2BVse4iHAmfhxEOLi4m2rUC41VUc2LjW8s28IcCGtcZ3aeEJ81uLMYlSvH8jJBqPQ%2BsbS2DJ3I%2B4%2BYmDtb6skBdEwg573vwY6pgFEbskM%2Bj%2F3Yz1ubYYr1MJe8ERemmZBKBw4MIVXndUNfGCuPtM7%2B1KR76Cve2muL6aZwT08YSTjt%2FrX2K7aIv6j8fjT%2Fkkak5nXSwFzJ7R1HkTNvSC9Y81Ny7RCzsQCP3DsRTnSY9Mf%2BwNmVD71GtvWD6L%2B5JUFrGyiun2S3ovNQbMjlegixqW6epqu3%2FfA3E2rQVpR3GakqfyWLtvFuM7wzLBNXoJ1&X-Amz-Signature=cc6e1ac08fc1bcc5024c81a81c9b18da5ea3d49b28485d561212902c472aeaae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
