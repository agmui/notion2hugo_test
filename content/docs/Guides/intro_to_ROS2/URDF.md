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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHUPXAC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpDSfMbm%2BO4Mnpe0Ty4U0Uo4uFZmSiEL7531WauX2HPAiAKGbC8Co67ge42sZ7nz4qX5BK7gPJ0KAeAUsVAoZi9nCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBBQrj6kJOE63AB0KtwD%2Bbq%2FfXMFZHEWMIEvSOYoiUK1oNeY3TzLmPBlS31fRAEJWWVLioC3o7n0Hd9DXCzjq63A%2Fc2yAtnf2wr7pxPTrRzTOnlTHizyXTR8GiIUfeRcckhAr%2FpSfcM2vNdBkvUkq0747LyiaOQhBkU7i31PwKELZrX9oXCNgpgf58BiN6BvSFJkeIWC9%2BRywqo7L7GuyzhWjQyNdsw34o2LEgj%2F81UARGy8krpH0BBj9miQcMjS%2FOQNEKUzHZeS9bdk3e%2BMG2xl2WqOrzkO9THU3HmJiR7NyYn2kBQmHegNe8tQLaKYjVw6Cd%2BKTst63qLDqL4QcGl0%2F4rfdCd2TT8%2BgxzErWdBAx%2B6OVmskvxIopymRF1mZkBogurtDsOSzvFBsCgKVkQzZWqbC2ChEgB5MIIdpri8TYiHZw6EQYsTM97Ep0b9l5bhkODbxdh464m7aONkybAIXLD83J2qDEHt0ONKEVr3duo3MuSjvGTny0e3PijoW8hl4HpB7pP61CxnzihzUgtiA28ZF6k1fvrtr0d4f2MLoW5s2xEDTm2Ut3GecmK7XnUWtOaeTT5xl2dGYTxj%2Fb3h6j7ccR7P41cz0BqpKmGvXJlMO%2BE%2BkkZY3JeCYJgfO6UgFO0Gx0YtK2Uw%2FofdwgY6pgEERI%2FflkDnGWysAqO%2FhyBsiiMeob8vvuLayXVAaP6ELbyEg1zXfv9SJM1Holy7SQ8Az6s4sOgdJi5O%2BqmwTh7QhfWzVwlugTA68HGpbSIMk%2F9Ob61VqTbk4sDPrd8nz%2F84Q7obexpcrSfLJiF2IpYYuLuDZ8sBo5qkTeSQq9aP8V2gHyseZjC0ZwQvjwBo9U88rOyO7fY3XPck8ApxRMznphQnuyLV&X-Amz-Signature=640d117a14886b3c53a225202d021256d6c80a5d8ef59ddc33dd6f6da38b7f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHUPXAC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpDSfMbm%2BO4Mnpe0Ty4U0Uo4uFZmSiEL7531WauX2HPAiAKGbC8Co67ge42sZ7nz4qX5BK7gPJ0KAeAUsVAoZi9nCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBBQrj6kJOE63AB0KtwD%2Bbq%2FfXMFZHEWMIEvSOYoiUK1oNeY3TzLmPBlS31fRAEJWWVLioC3o7n0Hd9DXCzjq63A%2Fc2yAtnf2wr7pxPTrRzTOnlTHizyXTR8GiIUfeRcckhAr%2FpSfcM2vNdBkvUkq0747LyiaOQhBkU7i31PwKELZrX9oXCNgpgf58BiN6BvSFJkeIWC9%2BRywqo7L7GuyzhWjQyNdsw34o2LEgj%2F81UARGy8krpH0BBj9miQcMjS%2FOQNEKUzHZeS9bdk3e%2BMG2xl2WqOrzkO9THU3HmJiR7NyYn2kBQmHegNe8tQLaKYjVw6Cd%2BKTst63qLDqL4QcGl0%2F4rfdCd2TT8%2BgxzErWdBAx%2B6OVmskvxIopymRF1mZkBogurtDsOSzvFBsCgKVkQzZWqbC2ChEgB5MIIdpri8TYiHZw6EQYsTM97Ep0b9l5bhkODbxdh464m7aONkybAIXLD83J2qDEHt0ONKEVr3duo3MuSjvGTny0e3PijoW8hl4HpB7pP61CxnzihzUgtiA28ZF6k1fvrtr0d4f2MLoW5s2xEDTm2Ut3GecmK7XnUWtOaeTT5xl2dGYTxj%2Fb3h6j7ccR7P41cz0BqpKmGvXJlMO%2BE%2BkkZY3JeCYJgfO6UgFO0Gx0YtK2Uw%2FofdwgY6pgEERI%2FflkDnGWysAqO%2FhyBsiiMeob8vvuLayXVAaP6ELbyEg1zXfv9SJM1Holy7SQ8Az6s4sOgdJi5O%2BqmwTh7QhfWzVwlugTA68HGpbSIMk%2F9Ob61VqTbk4sDPrd8nz%2F84Q7obexpcrSfLJiF2IpYYuLuDZ8sBo5qkTeSQq9aP8V2gHyseZjC0ZwQvjwBo9U88rOyO7fY3XPck8ApxRMznphQnuyLV&X-Amz-Signature=2a2b9c02bd7b4f32ae103c73ab01cb9abf81b173d50333442ff7755dc20e5c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
