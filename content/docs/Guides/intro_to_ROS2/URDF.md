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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V2HTDJR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9HcrkIog4fFuLC%2Ff4bdMFAzPpsbeiXLRbD40ngYzw4AIhAMCJcl9Cr%2BFG0xij%2BL4DMyUEMQ7gQKdsb5hOQV9ffOyVKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKlLEvTWkjfPn0zBoq3AM%2FZtiX%2F1LN52ycVb1yGYpMj478NNtR2kBCiYPUTANB8Mcbk5RaZumdaBnyr29xWVdgpojdiEgKh3yd1wH8MXXuJ7Gon3B1JJukZynL9nSaje%2FwFUedoluomX0%2B2DjiRGGmb0beBio1KXfdEcNSc%2BRx9FGzZ4TXnWhAiMEVQe0rp8%2FoETtvZW5eCZRBE4IvEBonYyzQeaEtDKvizThLre7%2B5%2FOsTHVa42mX%2FwnLggmtPveq5PNcAboSwqX%2BCUaq4K3xtEPX%2BGBRch0qKBuCC%2FmRSjJ4pdC7DX0M5%2F1MwA2l1FwvasZ77zfTE%2BUw7eCAVKGSAIpVvEfvvThh3zV3eHoRLEG4M%2FmmlR%2BfUV%2FXbDiAVoAEelFP0M7YlybRZT%2BUzdslkSZ66pmARs7bnST2udWTeN4GqiVhsrSGIp7Bq9N%2FLSixJzieHiIueePcQUYaQnnAtlwaql9J7IELkyogaTkflFgBAE%2Fu0vq1SAdUbPwWDPXVefGBbtbgWTkrxwmh22%2FEBaPmMb4Xh5t9FbVnD27W89GQ%2B0Kk4IwVJlPl4m%2FFlQO%2BNeHa4n%2BYIlpMk46zkvLZrhFnMWOCWe4n%2FSBW4dX0UBFcxhFctCyYeTXHElGxh66b1PPfTiDU1vfvBzCVsLPEBjqkAUmUBkxqxqkdpXsjgCAxazy0XR9Oz%2Bw8cQuXKO6eDflfFxP9mmEvZnQypUmneWm6cTMplODO7e%2BwQbtjvROhUl821znaVzXc6ZyAcQBiZx%2B6apvizpdSVynwEpBP4IfSewteFiyVJV8WT5huNggXc3Km3O8eeMi5%2BovX63hIVk9yoXHitI0Qq2ahfxOexjLjeLVYW77K0RVGzjcIlOBxb2fjW%2BrN&X-Amz-Signature=802e0a69c63ea23a50d8c5a201bef7ebb63d6195cc5cac8a3a9c49494d1705f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V2HTDJR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9HcrkIog4fFuLC%2Ff4bdMFAzPpsbeiXLRbD40ngYzw4AIhAMCJcl9Cr%2BFG0xij%2BL4DMyUEMQ7gQKdsb5hOQV9ffOyVKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKlLEvTWkjfPn0zBoq3AM%2FZtiX%2F1LN52ycVb1yGYpMj478NNtR2kBCiYPUTANB8Mcbk5RaZumdaBnyr29xWVdgpojdiEgKh3yd1wH8MXXuJ7Gon3B1JJukZynL9nSaje%2FwFUedoluomX0%2B2DjiRGGmb0beBio1KXfdEcNSc%2BRx9FGzZ4TXnWhAiMEVQe0rp8%2FoETtvZW5eCZRBE4IvEBonYyzQeaEtDKvizThLre7%2B5%2FOsTHVa42mX%2FwnLggmtPveq5PNcAboSwqX%2BCUaq4K3xtEPX%2BGBRch0qKBuCC%2FmRSjJ4pdC7DX0M5%2F1MwA2l1FwvasZ77zfTE%2BUw7eCAVKGSAIpVvEfvvThh3zV3eHoRLEG4M%2FmmlR%2BfUV%2FXbDiAVoAEelFP0M7YlybRZT%2BUzdslkSZ66pmARs7bnST2udWTeN4GqiVhsrSGIp7Bq9N%2FLSixJzieHiIueePcQUYaQnnAtlwaql9J7IELkyogaTkflFgBAE%2Fu0vq1SAdUbPwWDPXVefGBbtbgWTkrxwmh22%2FEBaPmMb4Xh5t9FbVnD27W89GQ%2B0Kk4IwVJlPl4m%2FFlQO%2BNeHa4n%2BYIlpMk46zkvLZrhFnMWOCWe4n%2FSBW4dX0UBFcxhFctCyYeTXHElGxh66b1PPfTiDU1vfvBzCVsLPEBjqkAUmUBkxqxqkdpXsjgCAxazy0XR9Oz%2Bw8cQuXKO6eDflfFxP9mmEvZnQypUmneWm6cTMplODO7e%2BwQbtjvROhUl821znaVzXc6ZyAcQBiZx%2B6apvizpdSVynwEpBP4IfSewteFiyVJV8WT5huNggXc3Km3O8eeMi5%2BovX63hIVk9yoXHitI0Qq2ahfxOexjLjeLVYW77K0RVGzjcIlOBxb2fjW%2BrN&X-Amz-Signature=919f45ccf6b7e6c8c05627a3147a89f108f6d0302b9cba9e0b373d6b604c3c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
