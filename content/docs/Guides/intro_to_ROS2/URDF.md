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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5HFCCV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcUNi9LivduCrhw97NDdOPrjI8JU1FxutbdrRzURVqiAiBO2U8KK2oMJ3N2CZDP8Je2yeYrLT0dtZrkFva%2FRzHD5ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMBrsEiYtmUzT9IK%2BZKtwDhqDAhZD%2B6fnyi7fvGHtLgt%2Bm1EXTkjx07LWdBTh%2BQMopj82d%2FqAjho2npof9y9LiCc1rHmZe5QK25Hq5kj8qozplT4%2FuJdWC%2FsyBpx3NJaai0yNjU1WDwATcc4MrrKHpqfOv8YOBiIKhP590j3r5x680VY0eqFvV1OZemG7rKbWUnEJ45KMkk8STIWp8Xk5xJGBQxwEwUilgYSa5QcJ8LQ9kb9DQFrB6L2jz95WfasWK6zig6S4BNrf9R%2FaaQiiZyJ1lzd%2F0tIxGms7vfh05eAAjgXMW4SAQmiqNYzyZMfZ3qsDvdidnk4iAwK7VuDJXXJqZQWeuDDNVE07LxPyojVKd9oi3nT9cBZkIvt0YZXFc7Sx0YJALUVVCdsb8rbSWzQR0r6R4o1U2xU7wEDvou8IJ9JVjnjd5voTMRx%2FLWs4Kx65B3qOWjn%2FsPRsVUMBfkldRzKGmAe05sBUDFW%2BZIn67loTJbH4nZLOh0QO0w%2FjXC71hCQGeh0KHGjyVLhHOh9PV7v%2BfRgwuRe%2BoJ7S20wRuw9Ue9%2FG57ABNJ2e%2BibPFogn2JU1CAWpfEGLaMQeuFtHSitEdafVoKIDFxNXBtJyNEM78xxhGnNRS4dA2NZP4Mi%2BwZBvEJbRPcaAwytekwQY6pgF39BjNta2jhVZasJEf%2FT1v6v6qJxy45QaQv%2Bn8qI5zs5g4ylbCoKlrZzK%2BuEAMLxXXHj6lQ7JWJTDet1OEYjf0i41JidQ4SwUlv98UDiDfsjIb3fVdMO%2FHIDZFHJ9OZz8UcpKdZaX%2BAu0PsSBY0uKRDwjd4hbfLviYlkN6fxADYxM9w%2BG2s%2Bc%2FluIh8DeQayrnBzwrMBaBzao2PUbEv4P%2FO7lFrqVU&X-Amz-Signature=0f304815ce7a5a472fd6041b74a835c5f545901b3a8a61d5eddba0923fe25d19&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5HFCCV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcUNi9LivduCrhw97NDdOPrjI8JU1FxutbdrRzURVqiAiBO2U8KK2oMJ3N2CZDP8Je2yeYrLT0dtZrkFva%2FRzHD5ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMBrsEiYtmUzT9IK%2BZKtwDhqDAhZD%2B6fnyi7fvGHtLgt%2Bm1EXTkjx07LWdBTh%2BQMopj82d%2FqAjho2npof9y9LiCc1rHmZe5QK25Hq5kj8qozplT4%2FuJdWC%2FsyBpx3NJaai0yNjU1WDwATcc4MrrKHpqfOv8YOBiIKhP590j3r5x680VY0eqFvV1OZemG7rKbWUnEJ45KMkk8STIWp8Xk5xJGBQxwEwUilgYSa5QcJ8LQ9kb9DQFrB6L2jz95WfasWK6zig6S4BNrf9R%2FaaQiiZyJ1lzd%2F0tIxGms7vfh05eAAjgXMW4SAQmiqNYzyZMfZ3qsDvdidnk4iAwK7VuDJXXJqZQWeuDDNVE07LxPyojVKd9oi3nT9cBZkIvt0YZXFc7Sx0YJALUVVCdsb8rbSWzQR0r6R4o1U2xU7wEDvou8IJ9JVjnjd5voTMRx%2FLWs4Kx65B3qOWjn%2FsPRsVUMBfkldRzKGmAe05sBUDFW%2BZIn67loTJbH4nZLOh0QO0w%2FjXC71hCQGeh0KHGjyVLhHOh9PV7v%2BfRgwuRe%2BoJ7S20wRuw9Ue9%2FG57ABNJ2e%2BibPFogn2JU1CAWpfEGLaMQeuFtHSitEdafVoKIDFxNXBtJyNEM78xxhGnNRS4dA2NZP4Mi%2BwZBvEJbRPcaAwytekwQY6pgF39BjNta2jhVZasJEf%2FT1v6v6qJxy45QaQv%2Bn8qI5zs5g4ylbCoKlrZzK%2BuEAMLxXXHj6lQ7JWJTDet1OEYjf0i41JidQ4SwUlv98UDiDfsjIb3fVdMO%2FHIDZFHJ9OZz8UcpKdZaX%2BAu0PsSBY0uKRDwjd4hbfLviYlkN6fxADYxM9w%2BG2s%2Bc%2FluIh8DeQayrnBzwrMBaBzao2PUbEv4P%2FO7lFrqVU&X-Amz-Signature=5e29770e7e0f982b7b46435ea1b7fd76cb907b3f23e940eaa0835e168317ea5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
