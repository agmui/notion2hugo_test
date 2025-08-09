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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXSTCMW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLXtibNSY1967bRtr6DXFADGB7jtWeL4mTw7RL%2B5%2BUlwIgKket7tze8TseKYYAsD8OCtB2JzYxbXUXGo8lnZXAoBUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkbus5D1%2F2skj9x8CrcA%2BdjCr5QZR9T8XEfWSltsar5ZE77HSx2m5r0qk8cyOT742x0bIYlIXDFzHDNLBHA2Ls%2FBZQRgT7mRB8aoORv5%2Bvm8dh0oe5bW6tVGlQrDqbZHOoUqo3qedYDFEjjiyfdwTiBDDXy3IhxRYgOFRCyjp4qrGmBqRJS2XuqbMUUVvhHpk%2FZw0k%2Bdl9%2BNU5PYSrCqmP9GRzWkVVPONSAxFiDsJukgCckkWsdhV%2F6sO17MyJ58xU7VLqvr%2F8qSuXm%2FSQhW1WosS%2B2GvOLJW6h3Q5eQm2cgy%2FnGN%2BTWvxxecSPrfOuOLcS8Z14p7AQ87JSQrwSxE8cd09zP5MUxFqGFQ2URWAFw7uddX%2FMSQJWixkhC0ITCHdm92mdWenPWvGzjXKqtvx%2FFR1IcHHpRvquhWNBAZExOTq%2FuXCjVbSr%2BQKUJDxCespEV94SKEtJOunriuOFpR5IKf5J7mWxrbCKqvwyvrvBziVc6f2VIOW9u1H%2Bd%2BQQhoCxASGJwaYEWdBqIgIYEI6%2FPzIXH4hIADjHZw9kHla2g0pjKfc%2FmQHj7fTRHo6KVnBAZqH5luZmloPzZKvl%2BYr%2B2JPKPqUPnKEENEmSzkuzbeM6rg5PQvjLAYcLOKwuftQVaCtPSBSHkH0%2FMOuL3sQGOqUBwn8hubDZig97eWX4bR5vCccSxNht%2BAask0TR5PZoJPS%2FdOzkY4q2YYA8gfuOVLqilvfVqAd%2F5d9gp0I4yynEnZoYV7vm5WCdZcvZUrNPiMCUg6e6KHj%2FtAhGPLfW3a34OjGXLzFmAE20wukECfZt2gBQ3FGJVfOor28qNF9verNKZitNpfyBj%2FDNllZ5JVfUwrKaB7EC%2BA1gUkhVsEzxfIJupZyj&X-Amz-Signature=f4b13a0417edef841c760a6db8957e9fb7498c3e6ed37931567d29fb9bca0674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXSTCMW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLXtibNSY1967bRtr6DXFADGB7jtWeL4mTw7RL%2B5%2BUlwIgKket7tze8TseKYYAsD8OCtB2JzYxbXUXGo8lnZXAoBUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkbus5D1%2F2skj9x8CrcA%2BdjCr5QZR9T8XEfWSltsar5ZE77HSx2m5r0qk8cyOT742x0bIYlIXDFzHDNLBHA2Ls%2FBZQRgT7mRB8aoORv5%2Bvm8dh0oe5bW6tVGlQrDqbZHOoUqo3qedYDFEjjiyfdwTiBDDXy3IhxRYgOFRCyjp4qrGmBqRJS2XuqbMUUVvhHpk%2FZw0k%2Bdl9%2BNU5PYSrCqmP9GRzWkVVPONSAxFiDsJukgCckkWsdhV%2F6sO17MyJ58xU7VLqvr%2F8qSuXm%2FSQhW1WosS%2B2GvOLJW6h3Q5eQm2cgy%2FnGN%2BTWvxxecSPrfOuOLcS8Z14p7AQ87JSQrwSxE8cd09zP5MUxFqGFQ2URWAFw7uddX%2FMSQJWixkhC0ITCHdm92mdWenPWvGzjXKqtvx%2FFR1IcHHpRvquhWNBAZExOTq%2FuXCjVbSr%2BQKUJDxCespEV94SKEtJOunriuOFpR5IKf5J7mWxrbCKqvwyvrvBziVc6f2VIOW9u1H%2Bd%2BQQhoCxASGJwaYEWdBqIgIYEI6%2FPzIXH4hIADjHZw9kHla2g0pjKfc%2FmQHj7fTRHo6KVnBAZqH5luZmloPzZKvl%2BYr%2B2JPKPqUPnKEENEmSzkuzbeM6rg5PQvjLAYcLOKwuftQVaCtPSBSHkH0%2FMOuL3sQGOqUBwn8hubDZig97eWX4bR5vCccSxNht%2BAask0TR5PZoJPS%2FdOzkY4q2YYA8gfuOVLqilvfVqAd%2F5d9gp0I4yynEnZoYV7vm5WCdZcvZUrNPiMCUg6e6KHj%2FtAhGPLfW3a34OjGXLzFmAE20wukECfZt2gBQ3FGJVfOor28qNF9verNKZitNpfyBj%2FDNllZ5JVfUwrKaB7EC%2BA1gUkhVsEzxfIJupZyj&X-Amz-Signature=24e02a6002e8509f2fa69296867b6058994f86ce0085dd7d0277ef32c1288992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
