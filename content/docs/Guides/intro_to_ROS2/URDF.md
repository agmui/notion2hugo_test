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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLU2HZX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0gIZ%2FaDMSnSr7dkQjE4xDxuzpgjqebn933DLSgHj1IAiA5E7e66AdXwbwHpMfrn4VM7gQW0Zmwl1Qzv1bpdAzzYCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqY44TtwylVFeKZD2KtwDVJwlZgXS49X%2FSxQ%2FcqwP8ppATfZoBMao9uXD0xAPthljU%2F%2Bi7d0UzV6Ri%2Fvdq%2BYcAoRSP7aXpO28%2FJihuzyQRAmiqI0C1sABUeM3bp3aFfyJsRhdW7s%2FOxQmx334imEUHdapJfWQmN1cX2RBzmj8jojWryaYgGEqP%2BVT97pTyffFI37LQB0Pe4xvSQ4vVira4IhU59VNc5E1vYfNzKfmvHRUP6MsUVoq8yaoeX0Z%2FvEsSDvoknYiGMdqEqLwGfPKYsd3ift0NnOoQ4wg%2FPAH0%2FqNxwKbNbejhhah2nVJAElys%2FWgpnoRk9vlP4Q02LSnVb21v9xgsEhxzXxgD7VHWikLbN6HBMYjAvV4evzqqIua6NSJTL1ZJStyVosmoxo%2BOtV0ERykrcbZdjp8cf6FoiaVbce82W7d%2FBbphkaXf8XmKkYpCvFqgaHdVKEqdistwdsEoAn7KWi4%2BDGEOJuii59yeC%2BiEvhMizcpifNGxmERjmZOWIm0sIar6GdNZuGnRLRHczS%2FStVZU96keGIw%2Far8RCsPN%2FVM%2Bbj0rAiKzsvn1YLIVJ6FxN%2BbvdCr%2FHRSo2oDhtJdqg80KDpMDj%2FWCFgcIMfVhN%2BumwU5QJ65FMchge1MzMxPpkXv3Kow8snzvAY6pgHy977134P4aMeyXOeBG1ox2ZJ666iBLBAezeJTel0JNB02dXp4k8jfNIzLehXc%2FLvY3YDXcwlIGkEnmu0uB0hB3HLRYrCwgl2CSHb6ynmFcSC31GsAKwrXQ5UhSPvIeJU5NzBLQay1S6BtL72WOkyLRBU%2B8871HY1U0CUFszdFncTdTtvwhvBOM5X9IEQaiLjFWhIh16o9CSKgiw4jtcHRVEfg337x&X-Amz-Signature=4f79f89526b2231cc77da3ce884e7c174380d58cbfa837717d3f7cb7e0246a53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USLU2HZX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0gIZ%2FaDMSnSr7dkQjE4xDxuzpgjqebn933DLSgHj1IAiA5E7e66AdXwbwHpMfrn4VM7gQW0Zmwl1Qzv1bpdAzzYCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqY44TtwylVFeKZD2KtwDVJwlZgXS49X%2FSxQ%2FcqwP8ppATfZoBMao9uXD0xAPthljU%2F%2Bi7d0UzV6Ri%2Fvdq%2BYcAoRSP7aXpO28%2FJihuzyQRAmiqI0C1sABUeM3bp3aFfyJsRhdW7s%2FOxQmx334imEUHdapJfWQmN1cX2RBzmj8jojWryaYgGEqP%2BVT97pTyffFI37LQB0Pe4xvSQ4vVira4IhU59VNc5E1vYfNzKfmvHRUP6MsUVoq8yaoeX0Z%2FvEsSDvoknYiGMdqEqLwGfPKYsd3ift0NnOoQ4wg%2FPAH0%2FqNxwKbNbejhhah2nVJAElys%2FWgpnoRk9vlP4Q02LSnVb21v9xgsEhxzXxgD7VHWikLbN6HBMYjAvV4evzqqIua6NSJTL1ZJStyVosmoxo%2BOtV0ERykrcbZdjp8cf6FoiaVbce82W7d%2FBbphkaXf8XmKkYpCvFqgaHdVKEqdistwdsEoAn7KWi4%2BDGEOJuii59yeC%2BiEvhMizcpifNGxmERjmZOWIm0sIar6GdNZuGnRLRHczS%2FStVZU96keGIw%2Far8RCsPN%2FVM%2Bbj0rAiKzsvn1YLIVJ6FxN%2BbvdCr%2FHRSo2oDhtJdqg80KDpMDj%2FWCFgcIMfVhN%2BumwU5QJ65FMchge1MzMxPpkXv3Kow8snzvAY6pgHy977134P4aMeyXOeBG1ox2ZJ666iBLBAezeJTel0JNB02dXp4k8jfNIzLehXc%2FLvY3YDXcwlIGkEnmu0uB0hB3HLRYrCwgl2CSHb6ynmFcSC31GsAKwrXQ5UhSPvIeJU5NzBLQay1S6BtL72WOkyLRBU%2B8871HY1U0CUFszdFncTdTtvwhvBOM5X9IEQaiLjFWhIh16o9CSKgiw4jtcHRVEfg337x&X-Amz-Signature=3fc46b5dd848f82c251ac8e660896ed68f432e33251f5ec44f7f54d710d571f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
