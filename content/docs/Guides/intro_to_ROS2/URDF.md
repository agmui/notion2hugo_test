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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCVSCW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FRt3LCcfzLJemh2dJIl9ohO%2BzlLCr7nU9NGVrqVCW%2BAIhAKP1BMINNU%2B%2F%2BMdusEUZKfS7MD2kI55%2FtBXtEIcByMM2Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxXiWaIdzitvHNVJAsq3AOZtB9RKz5OLORzIdvMO5n%2BsewP3mxqXkyVsmqFabRvGkjJj%2F3iXrwRP41OefWPqzo7P6Wzn1XDFGYwX5UxYbbRXJuqIHM2d6vmRFBsVgS7TUZ8sUv1josWMw5KdjQEhNeuC%2FXtyGTpj0wjoWSn7h49Hqqk%2FTbr60dW9v2vBgI8x4fyxpLlProwAmvC0m%2FOLxUZB%2FpMo4xyQxIGniJGv4d2aEVJK1oA8td3SJQ9V235kq7tCJmAgAQQFEKsMM6N46Zvf5iwRtuGYDcphXXYUSq6co7z%2F8qgL6fgfni3catZk1JXb9%2B1L5ltYVXTXvq3Tljn%2FT4xciETVpmsWMAiYFdDeQLRblqye8NK0ulQPzmIyGv7MjFmFgnSpf0hgUANPkhw42VMMopwbnOywVH7aOdbA88lOjTeNEJnVhIDNZyVxPZiF2SCSpjVGJO2XZnOS3l4WZkFkMVlyaYk%2Bh%2FcUhG1rl3QDOSb4nROXG9%2BuSzei8sqUiLRV3hvjhneASI8O1WmBJOvpyHqgjd%2BRgLF4KzG%2Bt25atqVYNLOdmXtLni0wTMFeBOGDpgBpSDQFA9sxycm56x7ELSffvu2dQ8TRhcLZxU8gNJNM53ybqyyKZdxWrYWaDexE3hfUAAcsjCz%2BdLBBjqkAb%2B%2FfaiDk4yhI1ZYWe5zVWvhIS0wKZ6r68nnFVOxpwXbtm4QH6Ba%2F9fCrDvj3pm7skS4l9K9nLyLduMNAbLgucBjpELQ2WC9guGECTRnfrAuopKgRxq3nfJ%2BtHruW7SUnIamB44QU1ZNGfm57Y1pAV4v34M0OWxmLnM7Y4ER9p5R%2B9hLta0Tl3kmyY6k3H2gn%2B6l9LhHJbl878tj6ayABSmQ6WxL&X-Amz-Signature=de636483f3188e27a2c52b2d24fc609f7ff1f6875341a2c88ca826278c7e7a28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCVSCW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FRt3LCcfzLJemh2dJIl9ohO%2BzlLCr7nU9NGVrqVCW%2BAIhAKP1BMINNU%2B%2F%2BMdusEUZKfS7MD2kI55%2FtBXtEIcByMM2Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxXiWaIdzitvHNVJAsq3AOZtB9RKz5OLORzIdvMO5n%2BsewP3mxqXkyVsmqFabRvGkjJj%2F3iXrwRP41OefWPqzo7P6Wzn1XDFGYwX5UxYbbRXJuqIHM2d6vmRFBsVgS7TUZ8sUv1josWMw5KdjQEhNeuC%2FXtyGTpj0wjoWSn7h49Hqqk%2FTbr60dW9v2vBgI8x4fyxpLlProwAmvC0m%2FOLxUZB%2FpMo4xyQxIGniJGv4d2aEVJK1oA8td3SJQ9V235kq7tCJmAgAQQFEKsMM6N46Zvf5iwRtuGYDcphXXYUSq6co7z%2F8qgL6fgfni3catZk1JXb9%2B1L5ltYVXTXvq3Tljn%2FT4xciETVpmsWMAiYFdDeQLRblqye8NK0ulQPzmIyGv7MjFmFgnSpf0hgUANPkhw42VMMopwbnOywVH7aOdbA88lOjTeNEJnVhIDNZyVxPZiF2SCSpjVGJO2XZnOS3l4WZkFkMVlyaYk%2Bh%2FcUhG1rl3QDOSb4nROXG9%2BuSzei8sqUiLRV3hvjhneASI8O1WmBJOvpyHqgjd%2BRgLF4KzG%2Bt25atqVYNLOdmXtLni0wTMFeBOGDpgBpSDQFA9sxycm56x7ELSffvu2dQ8TRhcLZxU8gNJNM53ybqyyKZdxWrYWaDexE3hfUAAcsjCz%2BdLBBjqkAb%2B%2FfaiDk4yhI1ZYWe5zVWvhIS0wKZ6r68nnFVOxpwXbtm4QH6Ba%2F9fCrDvj3pm7skS4l9K9nLyLduMNAbLgucBjpELQ2WC9guGECTRnfrAuopKgRxq3nfJ%2BtHruW7SUnIamB44QU1ZNGfm57Y1pAV4v34M0OWxmLnM7Y4ER9p5R%2B9hLta0Tl3kmyY6k3H2gn%2B6l9LhHJbl878tj6ayABSmQ6WxL&X-Amz-Signature=82ba160f6a0deb2220cfa006e74c0666c95ddde8e08630bfdcd0a4969a66af2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
