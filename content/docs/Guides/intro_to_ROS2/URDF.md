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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZY5F3F%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOm%2BmU5b83J0x5C10rJS%2FSmPvQaqlBmU1xupO6KXT%2BLAiAKSSjmw8zZS9zV8dhSKKdq38HcJj8Y0iWXiDDjmZpajSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0YC1RZVFBfemLY00KtwDjDGMaZu5K6resj0PMyOZbitGH%2FG%2F2waf4smT0kWD3iYlqNjP%2FghzhLYwHOzfz%2Bj5Ik8o4oJBd7bYQ%2FXPtpnYohuwstm72KShpTYVQ8UHzTGZWh93PzAXGe8ENsMfQ3C3WVsYa6UhDavcoGRjWW3ufH9goY6yna6LsZCcDqutGUzL8gQFFtVpaGsAw5w9OWiT84IOqRFYnVVgnXExpOSwA98G6EfWGg%2FOlNBVajIH0cBuwzcUDS8KXkt%2FAgBVA1Z25SC0t0ubgrBpfnLuriihGAusdeApi819oD88E%2BnbCC98rnt2snsIdzWwEdf98p7aMZC%2FH78fVomwgmnnRdafKKm6mDdjNXpyQxuNpk6yEKV8Di7vsNsM6%2BpS8l5FXflmpzOq20eM8LyXQfKbSX4Jd0nrKqNdKEtSwZJix9R8HTisK6kF1YyKJWgxp4YsB7brfqBWE1QJNNk0LYSkJuwouzE5sM7xHqGdBTD9Pno7F6iPe3bW4hwDHFZpc1NqXHmpxHnagTy68VFNo2nc94shk%2Bg9ToWzRS2ycfCx5dchJ8oTkBTWMnSzyqUOu%2BuZgNC%2F2YrnpJ8%2BpIOJsXe37%2Bly%2Fc9rmjb6uIjcYD4ZaQgvcofztak7%2BF6od0g7ypQw99GTyQY6pgEyndPzqO9KmToaMIw0zKPWBZ8mowS57l3%2Fp6SLOV4vrGjffVo7Jg%2Bgl6QnxsYzL9O8Vj%2FauZeoCZ1s1DEhyY9DNkx0wF9LehAL2C%2F7cjbcqtq%2BtVaK%2FswcocWZvOlGjX8whmro9k1w%2FgskN0FYTAbKy0uOlUH%2BUziaw2KZl%2BNms8Qjx%2BsLUtDi%2FOhisqiS91%2FhzfWZMrIXkHT29pohKQS9RyEaXjXf&X-Amz-Signature=9bddf9cafa26cf5cd1241c90ea20af1253c6d3a99ad4524f5b6d6692f83e537d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZY5F3F%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOm%2BmU5b83J0x5C10rJS%2FSmPvQaqlBmU1xupO6KXT%2BLAiAKSSjmw8zZS9zV8dhSKKdq38HcJj8Y0iWXiDDjmZpajSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0YC1RZVFBfemLY00KtwDjDGMaZu5K6resj0PMyOZbitGH%2FG%2F2waf4smT0kWD3iYlqNjP%2FghzhLYwHOzfz%2Bj5Ik8o4oJBd7bYQ%2FXPtpnYohuwstm72KShpTYVQ8UHzTGZWh93PzAXGe8ENsMfQ3C3WVsYa6UhDavcoGRjWW3ufH9goY6yna6LsZCcDqutGUzL8gQFFtVpaGsAw5w9OWiT84IOqRFYnVVgnXExpOSwA98G6EfWGg%2FOlNBVajIH0cBuwzcUDS8KXkt%2FAgBVA1Z25SC0t0ubgrBpfnLuriihGAusdeApi819oD88E%2BnbCC98rnt2snsIdzWwEdf98p7aMZC%2FH78fVomwgmnnRdafKKm6mDdjNXpyQxuNpk6yEKV8Di7vsNsM6%2BpS8l5FXflmpzOq20eM8LyXQfKbSX4Jd0nrKqNdKEtSwZJix9R8HTisK6kF1YyKJWgxp4YsB7brfqBWE1QJNNk0LYSkJuwouzE5sM7xHqGdBTD9Pno7F6iPe3bW4hwDHFZpc1NqXHmpxHnagTy68VFNo2nc94shk%2Bg9ToWzRS2ycfCx5dchJ8oTkBTWMnSzyqUOu%2BuZgNC%2F2YrnpJ8%2BpIOJsXe37%2Bly%2Fc9rmjb6uIjcYD4ZaQgvcofztak7%2BF6od0g7ypQw99GTyQY6pgEyndPzqO9KmToaMIw0zKPWBZ8mowS57l3%2Fp6SLOV4vrGjffVo7Jg%2Bgl6QnxsYzL9O8Vj%2FauZeoCZ1s1DEhyY9DNkx0wF9LehAL2C%2F7cjbcqtq%2BtVaK%2FswcocWZvOlGjX8whmro9k1w%2FgskN0FYTAbKy0uOlUH%2BUziaw2KZl%2BNms8Qjx%2BsLUtDi%2FOhisqiS91%2FhzfWZMrIXkHT29pohKQS9RyEaXjXf&X-Amz-Signature=fd8b570e13071989e2eb700c70029f2e8f896185d16dc8fa5f4dd6b7ed3a12c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
