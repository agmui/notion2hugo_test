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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KRPHJB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDC6Zeh%2BxIFk%2BTR0DOcuLiMX33cAct8dB0aEuspWToOWwIhAIMortc2N0Ey%2FLKFgvKA06gA5nn5yU%2F%2FGYXnLobNEiEnKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8PEurEQJBXbMnwiYq3APwMXgKipHulZ9DF3LmGjNxhruQ8HwI9WTqNj4cZed8BPPN1U7NA2CrlTp5ubr3FBsgcjR49fp8Y07Q7IEZ8hnAJA76ALO6l8flBvcogl1ihe57baZ3C7LwA%2B6MTk%2BpsINNqGCPxJ%2BI8Wt0gu6b9TfxidNSPTN8QEtHy%2Brwjz4JWxtn8WLHplk7wGugGFF6f5ic9eVedJDh32mVyC%2FNn23XyZDsrF0hNmyltlcbdMPlxo5zBnxby%2FJTHpZXj2Rh%2FKnqxqHcd%2Fje52nQGLlxz%2BT00XAADc57fXbdLr2hoAupLZYY8TDdBhRbi2gN%2BVDCkRRhXzrQz%2B3WQfKA%2F8CfANg4hg6ahAf16qdqGp8dTIAZNeoYYerv%2BCKswY12nFPEDSi%2FlyD0Q7SW5KzgipQrE%2BDvtKtqjhxZ%2FPncM2frfu09aaAsqFehzSoQnkPyQKN6Gt4M%2BOYg1NOye6TfM8xI3zlsWtKgpOIULt0mVp98v2urXiXNW1XKoGLDUJxLedp%2B7Lfmeyjb%2BCbD3ZfL9fQVnfKzPlKUXK7O%2BkygbvwrWz%2F4jQ2SFOiC%2BNZZ2yHmKXhrhfG3wnDDgBW2UvA1ysRDceVke8IfrEeNY2%2FIQYH9ekNioI1JLexZ3K1D4lIdLzDiqIvBBjqkAUPZVCzymtIv0UKWyhHxpxkxKqQb9P7AJejIHMCCB07ceJYtzuPUgqF8t5QbxaWrjLut24KxQjrqT4Geg%2Bigr4y0x%2Bm37CMbNRzvasG6tpfoDOoGux4noS3oehZB1z88qKWhWEbzt8uhK1Ywr%2FB6gCswMQNdjkHWpL3aIKeGkpKfjHAlMYcEXozkgLkGQ%2F7Y%2FLb%2BmB8gg2omJM5JeIjEGmpgzXKC&X-Amz-Signature=a1353bf9026bf70424b7e3c118998527b892ac5fc268c663a8f85492ad1f5289&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KRPHJB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDC6Zeh%2BxIFk%2BTR0DOcuLiMX33cAct8dB0aEuspWToOWwIhAIMortc2N0Ey%2FLKFgvKA06gA5nn5yU%2F%2FGYXnLobNEiEnKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8PEurEQJBXbMnwiYq3APwMXgKipHulZ9DF3LmGjNxhruQ8HwI9WTqNj4cZed8BPPN1U7NA2CrlTp5ubr3FBsgcjR49fp8Y07Q7IEZ8hnAJA76ALO6l8flBvcogl1ihe57baZ3C7LwA%2B6MTk%2BpsINNqGCPxJ%2BI8Wt0gu6b9TfxidNSPTN8QEtHy%2Brwjz4JWxtn8WLHplk7wGugGFF6f5ic9eVedJDh32mVyC%2FNn23XyZDsrF0hNmyltlcbdMPlxo5zBnxby%2FJTHpZXj2Rh%2FKnqxqHcd%2Fje52nQGLlxz%2BT00XAADc57fXbdLr2hoAupLZYY8TDdBhRbi2gN%2BVDCkRRhXzrQz%2B3WQfKA%2F8CfANg4hg6ahAf16qdqGp8dTIAZNeoYYerv%2BCKswY12nFPEDSi%2FlyD0Q7SW5KzgipQrE%2BDvtKtqjhxZ%2FPncM2frfu09aaAsqFehzSoQnkPyQKN6Gt4M%2BOYg1NOye6TfM8xI3zlsWtKgpOIULt0mVp98v2urXiXNW1XKoGLDUJxLedp%2B7Lfmeyjb%2BCbD3ZfL9fQVnfKzPlKUXK7O%2BkygbvwrWz%2F4jQ2SFOiC%2BNZZ2yHmKXhrhfG3wnDDgBW2UvA1ysRDceVke8IfrEeNY2%2FIQYH9ekNioI1JLexZ3K1D4lIdLzDiqIvBBjqkAUPZVCzymtIv0UKWyhHxpxkxKqQb9P7AJejIHMCCB07ceJYtzuPUgqF8t5QbxaWrjLut24KxQjrqT4Geg%2Bigr4y0x%2Bm37CMbNRzvasG6tpfoDOoGux4noS3oehZB1z88qKWhWEbzt8uhK1Ywr%2FB6gCswMQNdjkHWpL3aIKeGkpKfjHAlMYcEXozkgLkGQ%2F7Y%2FLb%2BmB8gg2omJM5JeIjEGmpgzXKC&X-Amz-Signature=aceb998062562b6066ddc0785f228232af8bc3d7dce8058e3ca02bb147583039&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
