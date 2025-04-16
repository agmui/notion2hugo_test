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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GSH53V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXe7Z%2BpMY6lv%2Bh%2F4r3q8MsB5sBmjQmLbKmk4R%2BEW39AiEAxBM1HhtU6dsGZy80LKQRR8fjBQ04orKWIypYcSZz3Qgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI8pZq9NDaykG%2Bqc5ircA98uvmQhLwrLgJwzFI5OjbaFSsQJXANYfvKYv9YRpb7Y3YH5%2FZwU8A0iZ4%2FJnvYanuTCpx9qwLbTOqkh%2FKmQeFswnLud46%2FjPS%2BfIZpBb7LUOasgFjmrl4aVHiGic36RAoNgoi6GTkim3M8bUoINPTx6mQvXxK1KqvJIb6exzAotyzcSwyfUbYVxz3RwU3e7Qwhh47i3xq3R2W9RU5twxM6rG26yL8cdhL3sVR%2FGeK9ypjpscMb050vPFBAaKF1XoBQswMHGn2%2BYar83uC2Pn6TtsuSVuCqMBzNVimfAmHCW98Y0yv0XcpHZSx34KmspHfCqgu4z7c1FAIJRq437GNmmz3VJeb3TFlDBWcbr1%2F3kgv4E4MG0fQNejj7rLdfxDTk3UQLb0%2FjzWFLGjgBTu8s%2BnxmDCk1QUTOhp%2FIOs9HTdD%2BcuJzDiK7yLhPrQ8J8eI5w6SCccZvgbvuoZdsKme7hUkI9TvaTvgQRayh0r2ZuqgpwgTXRagDa4LCt6GzNUprJvH3V1qa5TX0mZwMopuJN0eBck9NkpU521s9OW%2B0O1V%2Bp4jSJmkecXHHg2PjrbPfarx3GKoES0VCMZA92ueMkcI9lRmQnQgqTB9XBFitFB8YQzRGY5kRv3wmyMP2i%2FL8GOqUBrHxqwKSMZn%2B5iDEeztRvT3kuoafH1J7lA93jro%2F3lnWMQw9hBrSVYWLrcw5TpwZBXP4mTfgurzAThkw87u%2FWmlzKAPhHsB2hBP%2Bcc8i6XBQx1zbjcMbl5ZAu3MkEqGKjsFxUxwBgt3K2%2Bbr7KZq3vPj8x9gpBEFe0KHSC%2BHL3bYP5%2FKFVjDBg4ZhVKUU6EhxHZqMHmyfhskUyyR1jxSNjgBOAV3t&X-Amz-Signature=020344c64fd3f0c443cb1561d32282d7b35d2fea7009388ed3f0daa9f56404d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GSH53V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXe7Z%2BpMY6lv%2Bh%2F4r3q8MsB5sBmjQmLbKmk4R%2BEW39AiEAxBM1HhtU6dsGZy80LKQRR8fjBQ04orKWIypYcSZz3Qgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI8pZq9NDaykG%2Bqc5ircA98uvmQhLwrLgJwzFI5OjbaFSsQJXANYfvKYv9YRpb7Y3YH5%2FZwU8A0iZ4%2FJnvYanuTCpx9qwLbTOqkh%2FKmQeFswnLud46%2FjPS%2BfIZpBb7LUOasgFjmrl4aVHiGic36RAoNgoi6GTkim3M8bUoINPTx6mQvXxK1KqvJIb6exzAotyzcSwyfUbYVxz3RwU3e7Qwhh47i3xq3R2W9RU5twxM6rG26yL8cdhL3sVR%2FGeK9ypjpscMb050vPFBAaKF1XoBQswMHGn2%2BYar83uC2Pn6TtsuSVuCqMBzNVimfAmHCW98Y0yv0XcpHZSx34KmspHfCqgu4z7c1FAIJRq437GNmmz3VJeb3TFlDBWcbr1%2F3kgv4E4MG0fQNejj7rLdfxDTk3UQLb0%2FjzWFLGjgBTu8s%2BnxmDCk1QUTOhp%2FIOs9HTdD%2BcuJzDiK7yLhPrQ8J8eI5w6SCccZvgbvuoZdsKme7hUkI9TvaTvgQRayh0r2ZuqgpwgTXRagDa4LCt6GzNUprJvH3V1qa5TX0mZwMopuJN0eBck9NkpU521s9OW%2B0O1V%2Bp4jSJmkecXHHg2PjrbPfarx3GKoES0VCMZA92ueMkcI9lRmQnQgqTB9XBFitFB8YQzRGY5kRv3wmyMP2i%2FL8GOqUBrHxqwKSMZn%2B5iDEeztRvT3kuoafH1J7lA93jro%2F3lnWMQw9hBrSVYWLrcw5TpwZBXP4mTfgurzAThkw87u%2FWmlzKAPhHsB2hBP%2Bcc8i6XBQx1zbjcMbl5ZAu3MkEqGKjsFxUxwBgt3K2%2Bbr7KZq3vPj8x9gpBEFe0KHSC%2BHL3bYP5%2FKFVjDBg4ZhVKUU6EhxHZqMHmyfhskUyyR1jxSNjgBOAV3t&X-Amz-Signature=c0b436694cf1ff9991b575c6cd06013f6465ea35bbe11fc4135a5b861571a27a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
