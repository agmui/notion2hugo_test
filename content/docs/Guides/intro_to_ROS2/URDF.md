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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENAS2ZI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLYfyfUMIV8QkQ0e4juwuZ8ZECd7PWhefm%2BFWBeLSOCAiEAgwpwfxrMV9u3HmKrd2atRPZO3mOLVIVUni3XHtwNCYwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLSsEeOyhAzVKtZXqircA0zG2Eq5b7IomWhwjzsWuzfGpllmW7MBskoKiuKByQTkhhkYYjDuGDy%2FFPAb57V4N38XAXB7Otw%2Bc6ud%2FcmVxP%2FOQrkwmLs6P5E0WiqnXh8kZm5M5pBszOMtjALz1ZnpE2bTmzQBloQLDNr%2BsT9KML9IVazEJwpxh1GrLbdzC6ik9r26gct4XYtIJBzApNANPvEmyujy3AeeVGoH1Ki91z080itC7GtFzL5oUzNlszLukPXavVblLiGunuaZzII%2FEyZ4CKOsGHJXhg2iYW6Z9pvesdQgxANiGDgYdqejca7prKpYwfJ0335YPgLCAUVBRpJmGAvcQWJCDQzRqRxnpMA4dF8%2BpDkoD%2BcSi5LhIDjltg7R%2BV1C1iPAReJx%2BmQxkhIPRV%2BogyJyqu2bOPiioqCnuHqR24VpxTCpnOY6j6wVUyeLAVl74JzLjKynbX25ari7az%2BA80t0snfNcKePP7gOsqWc3rFqqwdyp%2FhGyuxdDdRwCVI8ZV3w9tL4C%2BvHtxkDUYGq3tEYJwZqWoXrNBMCy6Lb8hysoREAaPSCkfiYRIAkWMcE09mvqBEPgMTGVd%2BvmrNPtgmUuWGf%2FQ99eX5NeLp%2BfBXCgJFcxjee6IvpJjwjhaqN17avXPL9MLmSxr8GOqUB%2BoU%2BGQHUTsdOAp%2FCIB7Q%2Bj%2FqAbK6FbinD1WbRpV%2FEiEektUUnorjJRW7AjtwdCOM6bMv%2B5P8x0t4ZR4fenRKdo1GRtnJgnJVoQD4eFwdv6PJclPkuxxqD6e2uYbY7OUph%2B9Dlj%2BwNDz%2BszVPxTw5xsWVjaiEeMiWgIPuSoRmLbBLf%2FsrmGEqjbYvNCSUJniO8aws7OI%2B6BXH40piE8iGlZ7PZuh6&X-Amz-Signature=ed3a1bf4a56a44aec3e93fc9a2114c6fe2e8fa8d50ad4865d3b170b7da37e99b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENAS2ZI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLYfyfUMIV8QkQ0e4juwuZ8ZECd7PWhefm%2BFWBeLSOCAiEAgwpwfxrMV9u3HmKrd2atRPZO3mOLVIVUni3XHtwNCYwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLSsEeOyhAzVKtZXqircA0zG2Eq5b7IomWhwjzsWuzfGpllmW7MBskoKiuKByQTkhhkYYjDuGDy%2FFPAb57V4N38XAXB7Otw%2Bc6ud%2FcmVxP%2FOQrkwmLs6P5E0WiqnXh8kZm5M5pBszOMtjALz1ZnpE2bTmzQBloQLDNr%2BsT9KML9IVazEJwpxh1GrLbdzC6ik9r26gct4XYtIJBzApNANPvEmyujy3AeeVGoH1Ki91z080itC7GtFzL5oUzNlszLukPXavVblLiGunuaZzII%2FEyZ4CKOsGHJXhg2iYW6Z9pvesdQgxANiGDgYdqejca7prKpYwfJ0335YPgLCAUVBRpJmGAvcQWJCDQzRqRxnpMA4dF8%2BpDkoD%2BcSi5LhIDjltg7R%2BV1C1iPAReJx%2BmQxkhIPRV%2BogyJyqu2bOPiioqCnuHqR24VpxTCpnOY6j6wVUyeLAVl74JzLjKynbX25ari7az%2BA80t0snfNcKePP7gOsqWc3rFqqwdyp%2FhGyuxdDdRwCVI8ZV3w9tL4C%2BvHtxkDUYGq3tEYJwZqWoXrNBMCy6Lb8hysoREAaPSCkfiYRIAkWMcE09mvqBEPgMTGVd%2BvmrNPtgmUuWGf%2FQ99eX5NeLp%2BfBXCgJFcxjee6IvpJjwjhaqN17avXPL9MLmSxr8GOqUB%2BoU%2BGQHUTsdOAp%2FCIB7Q%2Bj%2FqAbK6FbinD1WbRpV%2FEiEektUUnorjJRW7AjtwdCOM6bMv%2B5P8x0t4ZR4fenRKdo1GRtnJgnJVoQD4eFwdv6PJclPkuxxqD6e2uYbY7OUph%2B9Dlj%2BwNDz%2BszVPxTw5xsWVjaiEeMiWgIPuSoRmLbBLf%2FsrmGEqjbYvNCSUJniO8aws7OI%2B6BXH40piE8iGlZ7PZuh6&X-Amz-Signature=d564d060cf075c3be69eb0665e76702416c33460fe1e62f9c7e5286ab9500b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
