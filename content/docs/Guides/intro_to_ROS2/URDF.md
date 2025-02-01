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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2KDRJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuGxfv1G8BsXhJmhCEYvdZJqu4G1xxaMy2Fc9RHyKgAIhAPxEnw3W480wF68%2Fx1tsqmKwJIex7d%2Bu6%2FueGH66d2puKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmO5QIgO2DC0gjRSoq3AMgYEm4DCbJmMUaHpk3XB6tObA0REEIH1qH2UuS94s%2FxkdEjX1RYOAX1b8dKLKRoOKtTgavr3HlfIlhwdhM3%2FbaY%2BVCRF0nW1KEjP4dPTbWYdUiXeNqZaJRfXv3GLBC2PkMz0UpB%2BqAoLClIqCu1qHs%2B4%2BbPwcjrYPks9FiuZ1qs9SPckHKYvfLBovTPjLTyRR8CaSwt5A%2BWV0d6RXJzEOe50vUIoShCt08Qo9cb7BALH%2BJ%2BLd4os%2F5vYXhclPnj1NdF%2BS6120hhRTnakmR72v1X9jmB77oP%2BdCCYKknYeW7aFfiYSEHAXBBd8ZS6rJJwUNmMYlM83CTQbrhMs0zUutAYUe91Z5epFTx9kTen9Xxs9QGZEnVGpEjuVtmLu5p8STXZO7r2UI4QhW6pnkXi0DPbH4IdMMnRT4npUtfdaogc4TTElkzXrk8d8UjfluKRZe2YJeBprvO0AQjjz4T%2FJvPjdB8m%2F4EKcYghMowF1yfzhvQgi188QIo4rCdql%2B51iFQuy10oFR3uP96v17bkslbbRfyi31hn3iw0ld9hCg%2BzNn%2BJ2zKrecc61%2Bn%2FxnqkgkOwRdQ0hQE09wks6OaKNMCx128oN7zBBOz7bJbnnQslXLcS3oCE88Fb3apjCSxPi8BjqkAdBZ7%2FcLy7S81W6xTmuElouVFBff3MPBsX0nkoRbumnqvkQKTN4sTAA%2F2NqrkcyqiEz0k1U93YkhGOy4Cc7znYqB10HmamvwGoI%2FqyDAFEVV50lCBIFTSnRweRz09Wq%2FlwMX3G486XX3ztNBqnOdjrmz2j9%2FJ7g4%2FyCr2ZGJ2PGpcs7x19s%2BBIDkjHaUNQkTWVJQUbrJ8oCvTi1wtDIcRo4hs4tr&X-Amz-Signature=187dacd275d9ec948e87ba7bed4c9c06693850eccb4ac52b4268005f20b78fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2KDRJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuGxfv1G8BsXhJmhCEYvdZJqu4G1xxaMy2Fc9RHyKgAIhAPxEnw3W480wF68%2Fx1tsqmKwJIex7d%2Bu6%2FueGH66d2puKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmO5QIgO2DC0gjRSoq3AMgYEm4DCbJmMUaHpk3XB6tObA0REEIH1qH2UuS94s%2FxkdEjX1RYOAX1b8dKLKRoOKtTgavr3HlfIlhwdhM3%2FbaY%2BVCRF0nW1KEjP4dPTbWYdUiXeNqZaJRfXv3GLBC2PkMz0UpB%2BqAoLClIqCu1qHs%2B4%2BbPwcjrYPks9FiuZ1qs9SPckHKYvfLBovTPjLTyRR8CaSwt5A%2BWV0d6RXJzEOe50vUIoShCt08Qo9cb7BALH%2BJ%2BLd4os%2F5vYXhclPnj1NdF%2BS6120hhRTnakmR72v1X9jmB77oP%2BdCCYKknYeW7aFfiYSEHAXBBd8ZS6rJJwUNmMYlM83CTQbrhMs0zUutAYUe91Z5epFTx9kTen9Xxs9QGZEnVGpEjuVtmLu5p8STXZO7r2UI4QhW6pnkXi0DPbH4IdMMnRT4npUtfdaogc4TTElkzXrk8d8UjfluKRZe2YJeBprvO0AQjjz4T%2FJvPjdB8m%2F4EKcYghMowF1yfzhvQgi188QIo4rCdql%2B51iFQuy10oFR3uP96v17bkslbbRfyi31hn3iw0ld9hCg%2BzNn%2BJ2zKrecc61%2Bn%2FxnqkgkOwRdQ0hQE09wks6OaKNMCx128oN7zBBOz7bJbnnQslXLcS3oCE88Fb3apjCSxPi8BjqkAdBZ7%2FcLy7S81W6xTmuElouVFBff3MPBsX0nkoRbumnqvkQKTN4sTAA%2F2NqrkcyqiEz0k1U93YkhGOy4Cc7znYqB10HmamvwGoI%2FqyDAFEVV50lCBIFTSnRweRz09Wq%2FlwMX3G486XX3ztNBqnOdjrmz2j9%2FJ7g4%2FyCr2ZGJ2PGpcs7x19s%2BBIDkjHaUNQkTWVJQUbrJ8oCvTi1wtDIcRo4hs4tr&X-Amz-Signature=3a0e99d0a3ad0f92d65f2fe9ba742b18e552f44e9c2118b9a0f639179c62639d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
