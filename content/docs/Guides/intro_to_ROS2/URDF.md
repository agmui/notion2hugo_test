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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3ZRWJJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD5OT98iat4L2AaYS2zeJy7poAD5%2BJWj5Y7GUOJSdzLyQIhAM5jgB4pSwsS2TTBxXfi%2F5DnL6IGTWhptFa1WJpS863EKv8DCHYQABoMNjM3NDIzMTgzODA1IgyjYTpDCxw%2FBUl28LUq3APgtSA%2BnOi00Zyj7qlVPhbKXU%2BXPvd26SnQ%2FHAlTnEcAM5rBbaJBa%2B%2F1DBTF30UGX0DO98D4Uiw6G3bNirTqy7T%2FM%2FTyJH9gN79vpp%2FL81zkZOeITtE2GTCUa8Evrrqhv7zu7t6kORFS11L9xRxixlP1AzkI3JW57a2o%2Fp4Sx7FeMDufSCpf7p529u5ynyW8ol1HrD%2BM9DTob7f%2Bij%2BvYVFaj12hM%2FJSGdtWNheYLbnK8FVrlAemP0oDBOscXTIwZJYmz3LG9N4KT08SWYF9fYNU8DqEdcqZyPpEo9Cyl984ybvHtr08%2BpWf5DrY0YYy3xblZPaqQvEd%2Bgw%2BAn4sOzOP3xFNWnPZM1BiKZaEKY4X9Eq%2B%2F9phZcXXkvwThbNZ3x8hA87887OnNX6uvGqRqjWeBgHOMWQ%2BpRSyzavebgU%2B35NTF4obWRNtllMZ3nLMoncngfV%2BsSm0pW%2FPeO7YUjr%2FYUXttld3LKrfxMAC7J4aTSadTY2Et3b6UjCxt%2FSyriX5rXU%2FbhDd62y6bbHtl6Uf%2Bt3EqaUoubLgt4%2BlNiVnV1hEl8AC3CRPj40ZOGSDxXz7bUObnm0T7q68QDd3BujUEFJ4KiafH2BmPZr0Wge9RAlDKwJjQ%2FzcV6tvjCvjJi9BjqkAT14MOWrgtLAGnOdJiXpP8NiEgcm%2B7ACQspfjBsNNiDSpcmr6CfO634DDP1FQLd8xM7kq%2BAsLTb0w05YOFcliWWmQTZftSTgSFF8juQTTk9NPVsA5qA7NWJdHOB53JrQYGYASb%2Fy1XNWY6VAJqa7ZYWwjzqBJwM1ZiqHhcj3FhdUcRJvR9cY9BGqKiGmF0jhhNsLSmXD0owzVBvW88E1V4RPOtQS&X-Amz-Signature=f334c25f4f1d34b92e84bf610525ac40cc4d931c892739ec92284ba90596cd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3ZRWJJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD5OT98iat4L2AaYS2zeJy7poAD5%2BJWj5Y7GUOJSdzLyQIhAM5jgB4pSwsS2TTBxXfi%2F5DnL6IGTWhptFa1WJpS863EKv8DCHYQABoMNjM3NDIzMTgzODA1IgyjYTpDCxw%2FBUl28LUq3APgtSA%2BnOi00Zyj7qlVPhbKXU%2BXPvd26SnQ%2FHAlTnEcAM5rBbaJBa%2B%2F1DBTF30UGX0DO98D4Uiw6G3bNirTqy7T%2FM%2FTyJH9gN79vpp%2FL81zkZOeITtE2GTCUa8Evrrqhv7zu7t6kORFS11L9xRxixlP1AzkI3JW57a2o%2Fp4Sx7FeMDufSCpf7p529u5ynyW8ol1HrD%2BM9DTob7f%2Bij%2BvYVFaj12hM%2FJSGdtWNheYLbnK8FVrlAemP0oDBOscXTIwZJYmz3LG9N4KT08SWYF9fYNU8DqEdcqZyPpEo9Cyl984ybvHtr08%2BpWf5DrY0YYy3xblZPaqQvEd%2Bgw%2BAn4sOzOP3xFNWnPZM1BiKZaEKY4X9Eq%2B%2F9phZcXXkvwThbNZ3x8hA87887OnNX6uvGqRqjWeBgHOMWQ%2BpRSyzavebgU%2B35NTF4obWRNtllMZ3nLMoncngfV%2BsSm0pW%2FPeO7YUjr%2FYUXttld3LKrfxMAC7J4aTSadTY2Et3b6UjCxt%2FSyriX5rXU%2FbhDd62y6bbHtl6Uf%2Bt3EqaUoubLgt4%2BlNiVnV1hEl8AC3CRPj40ZOGSDxXz7bUObnm0T7q68QDd3BujUEFJ4KiafH2BmPZr0Wge9RAlDKwJjQ%2FzcV6tvjCvjJi9BjqkAT14MOWrgtLAGnOdJiXpP8NiEgcm%2B7ACQspfjBsNNiDSpcmr6CfO634DDP1FQLd8xM7kq%2BAsLTb0w05YOFcliWWmQTZftSTgSFF8juQTTk9NPVsA5qA7NWJdHOB53JrQYGYASb%2Fy1XNWY6VAJqa7ZYWwjzqBJwM1ZiqHhcj3FhdUcRJvR9cY9BGqKiGmF0jhhNsLSmXD0owzVBvW88E1V4RPOtQS&X-Amz-Signature=10c9d71e404c0635db4eb59d93f57072529111c22ca788f9b30384a1a7da4772&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
