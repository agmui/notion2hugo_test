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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZSRO5Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnwDDJcNQnOSSI6u%2FNyqI3R8o3LHAeay8hyxNSl2yRZgIhAJrSi%2BfBbzoDa%2FcbbKQiZ5hoMr2LkoZCr5qdgOwWPFZyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77cOEOn81nxgDZ%2BAq3AMiu6Jcs%2BkG4x%2BBdX8OpBklSD6%2BDfEFV%2BlgzlUgbWoQ0nssRmmgnqbQtA0I64NSaVbJ26AroegvkcqefVrbgJnzATixlGlwyRfiWu6d1PpcZiyEexFMpAUTOwA1QPXky86wQtj3gkml7e6Db0%2BdrsK6nCOzy3lbN%2Fb7MTFoPONgea5NdPc9Qrw%2FfigJ8csq7MQdmnLF52AyABVc7R1Zusa8L0BZPwhnReLBMijHLF63uZlgb30BU3H8s848%2BJ%2BzIAXSfFL%2FQKvfVMi2b3vWofwCSKx9fQ%2FS4ZLyqowKc9%2B9I%2FgVOhUeO71IaAAZVLGsoo3eyCjRhvomomngdpd%2BxJv5rbzVD%2FsNzilh5%2B6RC3AaCEVl8G1DogtSHLov%2B3Dow3vXS0u0rJweoHdN6BCpXejYbTkhAJs5mfcTb8L%2BfH2%2BXjYDR99LQXHc%2FfINnvF32I%2B7%2Fn%2Br7b%2BQx%2F1HYSbIIYT%2BkvPj9IlEBNMqdXJchlJwQd1tfw2Sdx4OcrNgTlzkPS8m7AeBfFrbV33xUIYe13DReK%2Bkbr9OVhZuoaiB8AckWIgXiHvGbmPWkm0Iklrf4sE%2B5hMcrxEE2nVeH6bq8G9PVOHZtPgHonhDr75MrTkHDRtnASNixDmt4rD24TD%2Bh93CBjqkATqhELnlihT5mTGSQK13ufFMPASKVJdc9ywWBlYpkQywINbDGRPvnDw70TnbUxcNYT%2FYhRo4WI%2BS5OHvIiA34guJg3cuCtPTpE7ykofS4I%2FfBjdU1Phj5unRWVxs0HcStLS2Mu8VzVe3NU8BmPRzmsska%2BrYX7LzAqBky3S1iK7RmY71B1PM7pfw9gFxn29YBnXVvCqRUBrw6vNQqmkWU9GveTnO&X-Amz-Signature=b6de7d5875a343fdfe7034daaa9fed4207627d43027dbf634d09d555c98a85a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZSRO5Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnwDDJcNQnOSSI6u%2FNyqI3R8o3LHAeay8hyxNSl2yRZgIhAJrSi%2BfBbzoDa%2FcbbKQiZ5hoMr2LkoZCr5qdgOwWPFZyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77cOEOn81nxgDZ%2BAq3AMiu6Jcs%2BkG4x%2BBdX8OpBklSD6%2BDfEFV%2BlgzlUgbWoQ0nssRmmgnqbQtA0I64NSaVbJ26AroegvkcqefVrbgJnzATixlGlwyRfiWu6d1PpcZiyEexFMpAUTOwA1QPXky86wQtj3gkml7e6Db0%2BdrsK6nCOzy3lbN%2Fb7MTFoPONgea5NdPc9Qrw%2FfigJ8csq7MQdmnLF52AyABVc7R1Zusa8L0BZPwhnReLBMijHLF63uZlgb30BU3H8s848%2BJ%2BzIAXSfFL%2FQKvfVMi2b3vWofwCSKx9fQ%2FS4ZLyqowKc9%2B9I%2FgVOhUeO71IaAAZVLGsoo3eyCjRhvomomngdpd%2BxJv5rbzVD%2FsNzilh5%2B6RC3AaCEVl8G1DogtSHLov%2B3Dow3vXS0u0rJweoHdN6BCpXejYbTkhAJs5mfcTb8L%2BfH2%2BXjYDR99LQXHc%2FfINnvF32I%2B7%2Fn%2Br7b%2BQx%2F1HYSbIIYT%2BkvPj9IlEBNMqdXJchlJwQd1tfw2Sdx4OcrNgTlzkPS8m7AeBfFrbV33xUIYe13DReK%2Bkbr9OVhZuoaiB8AckWIgXiHvGbmPWkm0Iklrf4sE%2B5hMcrxEE2nVeH6bq8G9PVOHZtPgHonhDr75MrTkHDRtnASNixDmt4rD24TD%2Bh93CBjqkATqhELnlihT5mTGSQK13ufFMPASKVJdc9ywWBlYpkQywINbDGRPvnDw70TnbUxcNYT%2FYhRo4WI%2BS5OHvIiA34guJg3cuCtPTpE7ykofS4I%2FfBjdU1Phj5unRWVxs0HcStLS2Mu8VzVe3NU8BmPRzmsska%2BrYX7LzAqBky3S1iK7RmY71B1PM7pfw9gFxn29YBnXVvCqRUBrw6vNQqmkWU9GveTnO&X-Amz-Signature=14d6a5842136b3b7991f43d3a95a4cdbaec3b9baf7845325ed9a79e8d22ee6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
