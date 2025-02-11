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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK3TWES%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpxYlFLiWMJQWve%2Fu%2BVOHjBr0kkBtWRjgzIKjmkqI%2FdAiEApnfLKheyJ52qLX8BNK2M82RUdeU0KW2EH%2F0txRdqra4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKssGB4IBwgSEXeCrcA3dxHh9zWTlGHWy%2Fa1ZtwLZ6vnypUzgmMcejse49VQRic1YUBn86MnKLWboPTNvO1PVJz8yEGIsxPuRR%2BInvbamg54TX2i%2BsDrPekYbWTrGW%2FcHhB%2FKmxXAxBH1tpOuoDnN4UiCDUqUyF0%2FzqzweLRvJCV5Mtey6P7q3YZTUOe6hKJ%2B%2FUwDC3zIeDFJku%2BdOwTVpIZVkt79%2B2HNFJ0H7qXQGsq8nrDqFzSJ8eAE2ZNwVzviFR3eze%2FJWhEJpCkY3Hs7ApjVHtnU%2FCWrydglhbz1zmpMWkdfuP6D3H2688d8H%2BG0m85T7fF9YZSRhQxCWjtLSLGASYMlkS%2FHghw%2Bt5FzJZWPijFYh4rF4FeAXTQ7OaB8o618sLO%2FH6AIdpHxr8%2BeU6LwxjaAJCgSia%2BOBqwkY9%2FPe6dz2joF9FziS%2FKtL4KFHRTs4SdGzfrr6eZN8iyTICgVsIVpADclSGOXPTBkUF3YD60Qpi1uzAgMAtacq2HTRTtzQFeE%2F4BOW2x%2BTvE8oJ8plsOlzfvdL77irV7DSf4o0UiZwNmgaKFaLMZOAkGf6bWhEb8%2FpN8u8JRm31tnHrA1XdEYBRe6DELkjReA5VmmZ%2BqnsWS1T1SXYie04fk0YQO2MM10PQKHjMK2tq70GOqUBff2U6aOhtGqvFOWJwof2B4smCO71S63lB9YBGq%2FQpVA4wehSdqWrwUYh41I8lhh2ZL2yxKVDg%2FGDbUd9x2PcYex9Yz%2B4DeX7HZDUnU87vZNUMcEkYj3%2F%2FYYa%2Bgvb%2FdZrZqRNh9HCGK1WLgV14SlexEsCPpwyLA8m46Yr3%2BTRbhjjGb39BCPVeTk0dTd2rO5Pye51X3i08dj%2F6B5Uw7poTg5Mc5KJ&X-Amz-Signature=ec480e13fa428c7066a3cd2e45057083473bc1017730ed0d262a6ecdb7ab167d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSK3TWES%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpxYlFLiWMJQWve%2Fu%2BVOHjBr0kkBtWRjgzIKjmkqI%2FdAiEApnfLKheyJ52qLX8BNK2M82RUdeU0KW2EH%2F0txRdqra4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKssGB4IBwgSEXeCrcA3dxHh9zWTlGHWy%2Fa1ZtwLZ6vnypUzgmMcejse49VQRic1YUBn86MnKLWboPTNvO1PVJz8yEGIsxPuRR%2BInvbamg54TX2i%2BsDrPekYbWTrGW%2FcHhB%2FKmxXAxBH1tpOuoDnN4UiCDUqUyF0%2FzqzweLRvJCV5Mtey6P7q3YZTUOe6hKJ%2B%2FUwDC3zIeDFJku%2BdOwTVpIZVkt79%2B2HNFJ0H7qXQGsq8nrDqFzSJ8eAE2ZNwVzviFR3eze%2FJWhEJpCkY3Hs7ApjVHtnU%2FCWrydglhbz1zmpMWkdfuP6D3H2688d8H%2BG0m85T7fF9YZSRhQxCWjtLSLGASYMlkS%2FHghw%2Bt5FzJZWPijFYh4rF4FeAXTQ7OaB8o618sLO%2FH6AIdpHxr8%2BeU6LwxjaAJCgSia%2BOBqwkY9%2FPe6dz2joF9FziS%2FKtL4KFHRTs4SdGzfrr6eZN8iyTICgVsIVpADclSGOXPTBkUF3YD60Qpi1uzAgMAtacq2HTRTtzQFeE%2F4BOW2x%2BTvE8oJ8plsOlzfvdL77irV7DSf4o0UiZwNmgaKFaLMZOAkGf6bWhEb8%2FpN8u8JRm31tnHrA1XdEYBRe6DELkjReA5VmmZ%2BqnsWS1T1SXYie04fk0YQO2MM10PQKHjMK2tq70GOqUBff2U6aOhtGqvFOWJwof2B4smCO71S63lB9YBGq%2FQpVA4wehSdqWrwUYh41I8lhh2ZL2yxKVDg%2FGDbUd9x2PcYex9Yz%2B4DeX7HZDUnU87vZNUMcEkYj3%2F%2FYYa%2Bgvb%2FdZrZqRNh9HCGK1WLgV14SlexEsCPpwyLA8m46Yr3%2BTRbhjjGb39BCPVeTk0dTd2rO5Pye51X3i08dj%2F6B5Uw7poTg5Mc5KJ&X-Amz-Signature=ea375249778cf43a5d4efab30bc49a25a56282a873424ba3c950fd77792f89ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
