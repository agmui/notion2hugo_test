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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHGZIZ6R%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxRMpWKLKj4Y0iLlqa6wzrv3qBn8q9Z1Jxj5h14%2BKLtwIhANKt96BFBKkLBwwSvxcMrXLY2aokw3gKlyT4G%2BmFxvRGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeThvEXnsbrumoW68q3AP4kLqNz0bSbqWEEvzH2qwjdxdcII0ilQN4Aum0dutNodAyKVuiOA2mu%2Fv5ocAm1EmPAkYzLKSH6s%2BNUYLUN8%2BAJrUvVxplryEG%2FgOyrZF1%2Fvjsgg4RCTUBxdTFmpkvjFByZ%2Brf0EgRFXxPKBoVHUxGS7KKKX5tvVXE1rNWUSN%2BDEwv8Q0fBqPyT79rab2V4HnFjIpm4lPRswEkOnk2XxVFtT0%2FJBNFlyQ9sGq6ZJCjkckRvRkKUBRcOcO18siQjhhR%2FjNQATYSuTFnEVmH3yICI89kWGXICD1Ujwgjy%2B69bXnhVbfbJG8kD1dHGDZBEhhmgUcY5d1OjS42JKgZKteixfPrOjibzOQrV%2FDtQdSVZdSxA%2FlIiQx3uwKmrwMq4MaGdFSIg4GQDJgNZv0CYduqtz%2F9%2BO0LHu8dRZGSyT%2FfP9wzFSp4NIFB6YQODjFuqk4lHda3cJL4%2FXo34yXXDatYL4oet1qS%2Fe2ZOLfHk%2BJEo54nUgPKUrkfc2nd04noH2%2FB%2FfF4dlWxx9x7hs0IFhuKQx3IgJjo40zkY%2F%2FWIiDKF30Pj%2F9OlJ5SYz8qZst8iV%2BUo1BzEwnOv1n0bmhAQD3TUHn5KxfQ9riEkd%2Fx%2FzF7H%2Biwbv%2BidgQlMKO1VTCdn5DABjqkATWN0dIEmVsPBu2vFZhArG19e48SI4alUyOguwMakpCrQu2Z0fs1zD9nQsVJpAlzjp8fbKbGySjnqpgLracvpTnTjYhVpi0JhCFWh8h3bZfLVZNOA5iUzSKEwd07F6V1epQRdF6KHh5n6aWUkE8xZ%2BI7dECbK%2F9p2Cg4m6CJrCWpD3chQJSeHV6LbceyXdkcrt8PCEQtoE7QfexdKcmgcYAnYXpP&X-Amz-Signature=8f011c937fedc9bcc2f9a1e1064709573c3ff2441a43d115c9c9f5afab980c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHGZIZ6R%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxRMpWKLKj4Y0iLlqa6wzrv3qBn8q9Z1Jxj5h14%2BKLtwIhANKt96BFBKkLBwwSvxcMrXLY2aokw3gKlyT4G%2BmFxvRGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeThvEXnsbrumoW68q3AP4kLqNz0bSbqWEEvzH2qwjdxdcII0ilQN4Aum0dutNodAyKVuiOA2mu%2Fv5ocAm1EmPAkYzLKSH6s%2BNUYLUN8%2BAJrUvVxplryEG%2FgOyrZF1%2Fvjsgg4RCTUBxdTFmpkvjFByZ%2Brf0EgRFXxPKBoVHUxGS7KKKX5tvVXE1rNWUSN%2BDEwv8Q0fBqPyT79rab2V4HnFjIpm4lPRswEkOnk2XxVFtT0%2FJBNFlyQ9sGq6ZJCjkckRvRkKUBRcOcO18siQjhhR%2FjNQATYSuTFnEVmH3yICI89kWGXICD1Ujwgjy%2B69bXnhVbfbJG8kD1dHGDZBEhhmgUcY5d1OjS42JKgZKteixfPrOjibzOQrV%2FDtQdSVZdSxA%2FlIiQx3uwKmrwMq4MaGdFSIg4GQDJgNZv0CYduqtz%2F9%2BO0LHu8dRZGSyT%2FfP9wzFSp4NIFB6YQODjFuqk4lHda3cJL4%2FXo34yXXDatYL4oet1qS%2Fe2ZOLfHk%2BJEo54nUgPKUrkfc2nd04noH2%2FB%2FfF4dlWxx9x7hs0IFhuKQx3IgJjo40zkY%2F%2FWIiDKF30Pj%2F9OlJ5SYz8qZst8iV%2BUo1BzEwnOv1n0bmhAQD3TUHn5KxfQ9riEkd%2Fx%2FzF7H%2Biwbv%2BidgQlMKO1VTCdn5DABjqkATWN0dIEmVsPBu2vFZhArG19e48SI4alUyOguwMakpCrQu2Z0fs1zD9nQsVJpAlzjp8fbKbGySjnqpgLracvpTnTjYhVpi0JhCFWh8h3bZfLVZNOA5iUzSKEwd07F6V1epQRdF6KHh5n6aWUkE8xZ%2BI7dECbK%2F9p2Cg4m6CJrCWpD3chQJSeHV6LbceyXdkcrt8PCEQtoE7QfexdKcmgcYAnYXpP&X-Amz-Signature=ba2e39614b1d57f572a100bd46fab1115624c10e9e52e64bb5aad2c0ea0d85b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
