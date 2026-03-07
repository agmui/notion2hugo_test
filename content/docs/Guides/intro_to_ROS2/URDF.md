---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFD7GOCP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDKjveHsZ80o4RSRoAXtItc8tS%2FLw54ThW4J3OFOHrN9gIhAOoxOgPvHYx15arqTFGXS%2Bk2OJKloxbucPAHW8tYFbUFKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpzHUt7EzqqQoxOQIq3AP2M0owMczM6uFDQrKgu%2Bh7adkcozEzrhxAKcbqQwS3D8aD72fs%2BUPrq2uDvvSUH45BVCXUEsThZqElcgD%2BpI%2BPrhl9H%2BegZ2Y8VmWa9qO1ICgBkyTLe2UDEA6bO%2B2S94h9HsG7ePasL2QJ3oMT9usGX8UDb8PHeSbrQRu2T9ekIgYtW3yXpT8ephFbIxfurPZxBbGPR6aP5myS15AYi4Yim674DDu0X7r5YAzKAhxyDjNIEGFPtKkZo9WYxvel9xozq0cr4WRXgukdlMGkJO2FM%2F5w6gK9uSrUObyPLGWS6cZDmUpXx7Yt76DbD%2FLMERcH89WOBayTQMG%2Fm2%2Fd%2F%2FiJAcGXRI9VXVpgqqtej0JYBYHmptdXi6u9xwiFhKufoSH73KCwiNY9pgI79tko%2BDFCcNKdESxUsHth%2FvapkaFdJB%2Fqc%2F%2FUtK%2B4rmhTzS3l2UGO7815orRh8vp3OoWtR9p%2FkNQJxp0Oiino%2Fglf55k0Syrr%2FUdrXwtGK2%2B8PeRP%2Fo19WGoas7FdJyV0bVa570slIyzvM3kICoxWKHqlauFleCvc%2Fp4AKRkqY88nMxWWaPapyYC1AkWT9V4R6OZVnyd%2BOnIKG6I2jGoVIhhMT9Js9nU4jFGHsW%2FKgS%2BwMTC86a3NBjqkAeIdBbhycHjkk7RNTXtNml8J6Zxmag%2FkJrytKDREegN%2BzrVpuJFKJFSJhNZBHB0ExTVSlIurezeNSKSZSJ88lETQoxf%2FFhiLuJoOjwSfeacMim0yfSwgJwXD4AAKeJDHu0IsUPCw9PW62XIUr0o%2F01NhD%2BHwIZwzxJaoa4joJSRh%2B7p9w2eoIHDjwWQQd%2Fja8IelXM0E7htEIUvKl7ACF5jGdjiz&X-Amz-Signature=7da22cd7bbdda62a223ead4627edb96a9d5566f0252273006660ff633544ed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFD7GOCP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDKjveHsZ80o4RSRoAXtItc8tS%2FLw54ThW4J3OFOHrN9gIhAOoxOgPvHYx15arqTFGXS%2Bk2OJKloxbucPAHW8tYFbUFKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpzHUt7EzqqQoxOQIq3AP2M0owMczM6uFDQrKgu%2Bh7adkcozEzrhxAKcbqQwS3D8aD72fs%2BUPrq2uDvvSUH45BVCXUEsThZqElcgD%2BpI%2BPrhl9H%2BegZ2Y8VmWa9qO1ICgBkyTLe2UDEA6bO%2B2S94h9HsG7ePasL2QJ3oMT9usGX8UDb8PHeSbrQRu2T9ekIgYtW3yXpT8ephFbIxfurPZxBbGPR6aP5myS15AYi4Yim674DDu0X7r5YAzKAhxyDjNIEGFPtKkZo9WYxvel9xozq0cr4WRXgukdlMGkJO2FM%2F5w6gK9uSrUObyPLGWS6cZDmUpXx7Yt76DbD%2FLMERcH89WOBayTQMG%2Fm2%2Fd%2F%2FiJAcGXRI9VXVpgqqtej0JYBYHmptdXi6u9xwiFhKufoSH73KCwiNY9pgI79tko%2BDFCcNKdESxUsHth%2FvapkaFdJB%2Fqc%2F%2FUtK%2B4rmhTzS3l2UGO7815orRh8vp3OoWtR9p%2FkNQJxp0Oiino%2Fglf55k0Syrr%2FUdrXwtGK2%2B8PeRP%2Fo19WGoas7FdJyV0bVa570slIyzvM3kICoxWKHqlauFleCvc%2Fp4AKRkqY88nMxWWaPapyYC1AkWT9V4R6OZVnyd%2BOnIKG6I2jGoVIhhMT9Js9nU4jFGHsW%2FKgS%2BwMTC86a3NBjqkAeIdBbhycHjkk7RNTXtNml8J6Zxmag%2FkJrytKDREegN%2BzrVpuJFKJFSJhNZBHB0ExTVSlIurezeNSKSZSJ88lETQoxf%2FFhiLuJoOjwSfeacMim0yfSwgJwXD4AAKeJDHu0IsUPCw9PW62XIUr0o%2F01NhD%2BHwIZwzxJaoa4joJSRh%2B7p9w2eoIHDjwWQQd%2Fja8IelXM0E7htEIUvKl7ACF5jGdjiz&X-Amz-Signature=cb7ec64ea6fc477b52ce1f1662d3e80420bb2665f6c0850310ed47f7c4bdfaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
