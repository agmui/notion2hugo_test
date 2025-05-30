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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AUDZ6L%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDOQDIGDpsi0c1ZG%2B%2B1uGZIeWKETG03Hu93YySQOhyhAiA5EKrPl3SfZra6eJWEIOQ3uroxnZHE2%2F0%2FwYQwFs57fiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0AYWN1TCl1O%2BD8vKtwDTyKvHa8ggXsAgAnFTI6TQpuvdKLU7E5UPxDRVDAwyT7fcBHSyaZh4M7ZYJ2uOB2kChDPy4MQ68XlamxcODty%2BkFlqlKNeFSVeXP2SOct2D6z0K8HC4fczS4eJkgQbHha2JJKaL5vgfGsFkK3gy1948L78g5BUqVf9m2L%2Fa6%2BwLDfrkYHLFVQPvniwmVXQIkMY72ZX%2Flf2kvCaE8qUNibFvlIuqEGrP1t%2BjwhWTRpp04psVvlYDC%2FMSOLrtR6OIY7DnuHW9LsGWdxJAr4hWFsAUlnOuFPFSCitIHls5CekBwJuHLxqmWk5CI39z6%2FEZdT5S6jCVlaX0W5ES1ghghNOTVEQUre5B%2FcRa2phUFpB18W%2FKKc4PFKXLbQqHNa%2BuHEzRTw9DU7aYvUanfpD1Ja6ZmWzUC1spK1yOgipzrchdpiJnVMqguXMld9EWRssdV%2FAPuaxwQlIcbKqYXAxw33r%2FCBqT%2FAuMUKvPG5p61ThAN1WoKdPlCr714UjckfNVTy9yaaPrPkAZnGtrFs5yteaECNf8WTDSuioOzvzXn5Lq7tJgSzSaux3HiooDr8FZBkbMrqV3iZ1WNmjCFs5y9aR%2BPOVhd5mmFZxT1D7%2Bn1lGJjc1bWNF2KFzrH8powmMzlwQY6pgGDB1BHldNY4wJrEdR7thjqJaPu4wFOOJeqxpicpB%2FCDTVXQ%2FczVaNskCzlprZ0nxjnYg3b9l%2FZ07cXLbd1Jd8rXaEpGkVLlWJ%2B13gtwyN18%2FsZd2RAzwFoVt7iNTrQIhG0UFwp4lKlaXrWahHckGu4drv3rTNLIu6BgD7ABMa5jAl9Mex91zbM3HLQo72zASYEAPuxDJ5rfnEIUKJIGZY8o%2Bv514DK&X-Amz-Signature=8cbc3b8fe1c643740f1470f2c60f70b04c5b2cbbba7db497852e7939570a871e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AUDZ6L%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDOQDIGDpsi0c1ZG%2B%2B1uGZIeWKETG03Hu93YySQOhyhAiA5EKrPl3SfZra6eJWEIOQ3uroxnZHE2%2F0%2FwYQwFs57fiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0AYWN1TCl1O%2BD8vKtwDTyKvHa8ggXsAgAnFTI6TQpuvdKLU7E5UPxDRVDAwyT7fcBHSyaZh4M7ZYJ2uOB2kChDPy4MQ68XlamxcODty%2BkFlqlKNeFSVeXP2SOct2D6z0K8HC4fczS4eJkgQbHha2JJKaL5vgfGsFkK3gy1948L78g5BUqVf9m2L%2Fa6%2BwLDfrkYHLFVQPvniwmVXQIkMY72ZX%2Flf2kvCaE8qUNibFvlIuqEGrP1t%2BjwhWTRpp04psVvlYDC%2FMSOLrtR6OIY7DnuHW9LsGWdxJAr4hWFsAUlnOuFPFSCitIHls5CekBwJuHLxqmWk5CI39z6%2FEZdT5S6jCVlaX0W5ES1ghghNOTVEQUre5B%2FcRa2phUFpB18W%2FKKc4PFKXLbQqHNa%2BuHEzRTw9DU7aYvUanfpD1Ja6ZmWzUC1spK1yOgipzrchdpiJnVMqguXMld9EWRssdV%2FAPuaxwQlIcbKqYXAxw33r%2FCBqT%2FAuMUKvPG5p61ThAN1WoKdPlCr714UjckfNVTy9yaaPrPkAZnGtrFs5yteaECNf8WTDSuioOzvzXn5Lq7tJgSzSaux3HiooDr8FZBkbMrqV3iZ1WNmjCFs5y9aR%2BPOVhd5mmFZxT1D7%2Bn1lGJjc1bWNF2KFzrH8powmMzlwQY6pgGDB1BHldNY4wJrEdR7thjqJaPu4wFOOJeqxpicpB%2FCDTVXQ%2FczVaNskCzlprZ0nxjnYg3b9l%2FZ07cXLbd1Jd8rXaEpGkVLlWJ%2B13gtwyN18%2FsZd2RAzwFoVt7iNTrQIhG0UFwp4lKlaXrWahHckGu4drv3rTNLIu6BgD7ABMa5jAl9Mex91zbM3HLQo72zASYEAPuxDJ5rfnEIUKJIGZY8o%2Bv514DK&X-Amz-Signature=482b19dcdd03cf42e461435251343e42be534caaba5fdfa3a189218ba322cf52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
