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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAL7OLI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDacEwrmKBJwV71FcDfztY8ubk74zYy6pLCawv33rqcsgIhAJ3nn89vMgqja9oT25aZblxJNgcSJPdzrT3S%2FpZnRVDMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIVz9UtHTZpPokL04q3AOwhQms89Aci6pH55xAStOJWKs3yqNyC2EJhni3k%2FT3lfgv0gwE0F8uUZB%2BsqO%2BxVoWi18p%2FmogRrpomq64Mfjbe0didapAKv6xQNT7%2B9SlMQc2jzYbzix%2BPF%2Bz9ZUuUY4ndA1sC7oldD%2FM%2Bb2PqPiTi%2BNIEyeJ5X1o9zlgL8KKSlzwDxEb0EhviBjOTl%2FkLf2%2B5o0R8Ia%2FMoL51e7BQh8q2SVvLcAFQM4HwspUbM%2F%2BJpaeanh5zxal%2FlJmS4TbHS5KgZ9PabEnkrK1SSH7%2BBmL44l2zXRgyrNsMqDebepYtlzta6FP7rAq09bGwJhqqQc%2FQAPRwS%2BVVjDGNaXd5p4MayTlK9BLuDXTKZW6DRGVUwEl9HMeLx5HWB1DQ4hpMvfM6KyIDg%2FvtcRfKaf0GmdzMoH0OPJLhAxSrxKdSlCGDqTi02aL4gntr%2FPS84QunJfwq9Zsk3d%2FBpf1jZLaxtDNN38lEsQnWG9ZkL81vYfltRX4p8SLxHLt7qAh1J24xzRd4Vv0v1hVWZS%2BjiLNuaJEQ2d1qEC1W4VzHxMQFI0%2Fqp7Pxed7Yt2EXUHAKAqzz2tJINpjcsFwpJiXGAPFRQI0OU0uxbfeUPTD17kVvgCiXMkpEPDxsEmCtMcyXzCJjrG9BjqkAZ%2Bc5ibbg0vWiiT7sLPxwrjrLqRYeaymOV8pw3jSTA1lkTvWTpko6BqNsDqTn9v%2FUjfZVlGROag%2BVfZrP3EsYPHz8Md%2FSxg9OFMfOkW7xp02TkUTHMwaCNYp6toKxrB2yttrGYyIYXXoBfhhiCY%2F5496aP9s0GDbKuqRpOUdnE2ubsLh6PLYRKw4Hk1h70IU4dRqdb0yHwEoP0UoXVCyhgeCQN21&X-Amz-Signature=ed27e44c758ceeb15b160954020e7b3074213e7eba7f398db259232c965d01bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAL7OLI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDacEwrmKBJwV71FcDfztY8ubk74zYy6pLCawv33rqcsgIhAJ3nn89vMgqja9oT25aZblxJNgcSJPdzrT3S%2FpZnRVDMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIVz9UtHTZpPokL04q3AOwhQms89Aci6pH55xAStOJWKs3yqNyC2EJhni3k%2FT3lfgv0gwE0F8uUZB%2BsqO%2BxVoWi18p%2FmogRrpomq64Mfjbe0didapAKv6xQNT7%2B9SlMQc2jzYbzix%2BPF%2Bz9ZUuUY4ndA1sC7oldD%2FM%2Bb2PqPiTi%2BNIEyeJ5X1o9zlgL8KKSlzwDxEb0EhviBjOTl%2FkLf2%2B5o0R8Ia%2FMoL51e7BQh8q2SVvLcAFQM4HwspUbM%2F%2BJpaeanh5zxal%2FlJmS4TbHS5KgZ9PabEnkrK1SSH7%2BBmL44l2zXRgyrNsMqDebepYtlzta6FP7rAq09bGwJhqqQc%2FQAPRwS%2BVVjDGNaXd5p4MayTlK9BLuDXTKZW6DRGVUwEl9HMeLx5HWB1DQ4hpMvfM6KyIDg%2FvtcRfKaf0GmdzMoH0OPJLhAxSrxKdSlCGDqTi02aL4gntr%2FPS84QunJfwq9Zsk3d%2FBpf1jZLaxtDNN38lEsQnWG9ZkL81vYfltRX4p8SLxHLt7qAh1J24xzRd4Vv0v1hVWZS%2BjiLNuaJEQ2d1qEC1W4VzHxMQFI0%2Fqp7Pxed7Yt2EXUHAKAqzz2tJINpjcsFwpJiXGAPFRQI0OU0uxbfeUPTD17kVvgCiXMkpEPDxsEmCtMcyXzCJjrG9BjqkAZ%2Bc5ibbg0vWiiT7sLPxwrjrLqRYeaymOV8pw3jSTA1lkTvWTpko6BqNsDqTn9v%2FUjfZVlGROag%2BVfZrP3EsYPHz8Md%2FSxg9OFMfOkW7xp02TkUTHMwaCNYp6toKxrB2yttrGYyIYXXoBfhhiCY%2F5496aP9s0GDbKuqRpOUdnE2ubsLh6PLYRKw4Hk1h70IU4dRqdb0yHwEoP0UoXVCyhgeCQN21&X-Amz-Signature=fa67d31331f987231a654955c177e3061a2bf2d506168097dc7e1e931524deb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
