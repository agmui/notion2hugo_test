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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7TLSW5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHqVN88gHnra8PWSf51qyrvE%2FeWex8bbvWT6HMWe%2FCjwIhAOSgDEOClDL3U%2FLqpKkqsa%2FqIoz6DYWjs0ex06p%2F9erCKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEOaGmE6YDzI8GsL8q3ANLaiyFHGErrTMZ1GzCmNjFGmC90KcPI65LBbKPUE0Z%2BbSzPefrAJikbtCTm3vlxDqF9X09d9I%2FcnzsTT3hWimF6Ui8oIOMih6CGSmdwXB2LXJouq2hiZVK%2FImnIbhgF5DLNaSBqqgUHBLGHHzykq%2FEs8glZ0DWhzv6gNOljMD5fq2Var4rlXEViesJOMiLKRjosQdbXKh4O8TPfwZwNt8ugw7LftiuaWXrGzA0lobP8yHxnwBNm%2BAeHURXLJZd6KuTggREtVZPXNco%2BKhooJ%2B1XnSKzNBP1qv%2F5nMv8JCSGeTxW36hQPmNEfCt58KMlucG2PLGD50xKMiywAmHsah2psJ2hdM4TPA6tna0LBNT5XuC%2FSPcUMLIsnWmyuYgR4FmK58oZbmBjciOhTbh0qu34hxExY6Kwa8bPZQJkeJWPfaWscCsMp5oh2MkEEoZqY0hWEXCKgcOr7rA3a0wPCEc2WLJkiO6nGxAZRq%2BHDxO2oAWzwkn4oEZbMPOSVlrJOGcIiahEw2xEmWLm%2FmYE%2BtPEwCN71LnqQEV90ihFZxHhwX2DAHm4%2FBpnuvLvlPQogRfd0Ot9ADYkaZwpHShcIbZm4rkvJM7wF9zoYLXlNpuwg6jw2shwHlgMmePrjCA5Ku9BjqkAbagTNWxixTYxK4%2BIECzq0%2BxisObnxV7E9Fjpj0z0TY9FTCa2NrRjRE4fWOvlXIq%2FWs4anARYq2GL6H1EHWB5LPzhJxWjyfpi9cUQswEtiy8t1gfurQBAZcO2PUKq3vcvuXMT3VEnI6PgX4AOLWPP3u%2BYerbsjHRvRPbRz1a9SDl%2FqdVa4bKppF28VZx5VxU7JY%2BGif0jXG4AuyueZObgDZ34CsD&X-Amz-Signature=acceeb50892eb5d219b24fe69c458b9036ac41f27b819622cb6f60f3df52b664&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7TLSW5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHqVN88gHnra8PWSf51qyrvE%2FeWex8bbvWT6HMWe%2FCjwIhAOSgDEOClDL3U%2FLqpKkqsa%2FqIoz6DYWjs0ex06p%2F9erCKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEOaGmE6YDzI8GsL8q3ANLaiyFHGErrTMZ1GzCmNjFGmC90KcPI65LBbKPUE0Z%2BbSzPefrAJikbtCTm3vlxDqF9X09d9I%2FcnzsTT3hWimF6Ui8oIOMih6CGSmdwXB2LXJouq2hiZVK%2FImnIbhgF5DLNaSBqqgUHBLGHHzykq%2FEs8glZ0DWhzv6gNOljMD5fq2Var4rlXEViesJOMiLKRjosQdbXKh4O8TPfwZwNt8ugw7LftiuaWXrGzA0lobP8yHxnwBNm%2BAeHURXLJZd6KuTggREtVZPXNco%2BKhooJ%2B1XnSKzNBP1qv%2F5nMv8JCSGeTxW36hQPmNEfCt58KMlucG2PLGD50xKMiywAmHsah2psJ2hdM4TPA6tna0LBNT5XuC%2FSPcUMLIsnWmyuYgR4FmK58oZbmBjciOhTbh0qu34hxExY6Kwa8bPZQJkeJWPfaWscCsMp5oh2MkEEoZqY0hWEXCKgcOr7rA3a0wPCEc2WLJkiO6nGxAZRq%2BHDxO2oAWzwkn4oEZbMPOSVlrJOGcIiahEw2xEmWLm%2FmYE%2BtPEwCN71LnqQEV90ihFZxHhwX2DAHm4%2FBpnuvLvlPQogRfd0Ot9ADYkaZwpHShcIbZm4rkvJM7wF9zoYLXlNpuwg6jw2shwHlgMmePrjCA5Ku9BjqkAbagTNWxixTYxK4%2BIECzq0%2BxisObnxV7E9Fjpj0z0TY9FTCa2NrRjRE4fWOvlXIq%2FWs4anARYq2GL6H1EHWB5LPzhJxWjyfpi9cUQswEtiy8t1gfurQBAZcO2PUKq3vcvuXMT3VEnI6PgX4AOLWPP3u%2BYerbsjHRvRPbRz1a9SDl%2FqdVa4bKppF28VZx5VxU7JY%2BGif0jXG4AuyueZObgDZ34CsD&X-Amz-Signature=42ec4aaaa975b32fc7c3a39bddfccb7756f25a0a3d6ce5043bf8ae3b52a7971b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
