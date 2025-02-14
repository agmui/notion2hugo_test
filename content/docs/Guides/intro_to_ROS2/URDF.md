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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USASJR3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDqNa7vRNu24YJCI2ekCYMzq2oo3C3g2thVMv6oH0DRHAIhAMlh7%2B5Zl5lzCXOEe0QV3UpkE0I%2FEK6192YJn5bZrUmvKv8DCDYQABoMNjM3NDIzMTgzODA1IgxMXD9aiHmOQnUYH3cq3ANOhQ1PS3FvgJjFemxR8c0Ya%2Fvy%2F7VriTwvVmbRH9Q0qL6ervS0kQXz7LMr1KbzfhU7gcaevFYEsjtnw6hAQm83v7ssjultOwlKOMXV1%2FHvZHnbNiztF1neUHygxG3JsO6e%2FeC12kLx3FEd90H7umbYo4V%2Bzb4lrwZNRQd1fSEDu%2FasHa4A6Ac2h9Aiiq7Dq0A9Zh2GYyFvR3QbDXEVSqj1iWyP1ej5qEmXZ5e%2FWRxAzm8EQdTYYXWAwBHVpZme7XTtrAXHV6y0FiP%2Bt0XNclmx2BG9Kn51WILsPVLwAozCYQVOlRMzFoLzZeF5c3QZHVYp7nSAzobybESJTJ2rs%2BO1bOdy8UB7%2BgF9pw0jTvAQ7tOLADY6kZWsDQKSWK%2B11vFPLtmDzL1c8UWUutT97%2Fw1ZCOBHrHQzCDF%2Fg7YoG%2FGxHQK5HcNv2fQmyxWMIqxUODjq3UO5y52UlGLMWv4FSGDcQGmd1bQzbhnAxYCSdprqm3OOdp3u6nzJPku6VJLzOwGoDw3KXLZ8ZJjXAiuetkVccfNZwGG%2BMhCugUoXaJYPWQvvt3JVFeI0KfSRD5fRupLTl1NzE%2B0xysbFipMjcGgLV8WWDvP08VsIMJVeDG5zL0DoXK%2FFapHSa96rzCC0r69BjqkAadNF66XyMxfPv1AEFuDEzNIlYifQCjI0fLkn2MlrsOETsVb93V9H7kRdtVNzxho%2Fxodgl7KdFQ4r5cUo7iTCHMKTFmVzJQ8oj1q9aVSVINFvvjyA1QiyyyAQfLhqlWB8kXt16D%2B61ck8RF6e2C9cNUXq9CqAEWYs6GHDQ99qj2MvHvWrEmwH0kwdWUASddGSnd6PG%2B3RyDg5SB2V4Fa6X9C%2FaHM&X-Amz-Signature=5545368b5f3cd6f68bf4d27bfd4c8fa153f469e72c4a57ad4901b546631d4851&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USASJR3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDqNa7vRNu24YJCI2ekCYMzq2oo3C3g2thVMv6oH0DRHAIhAMlh7%2B5Zl5lzCXOEe0QV3UpkE0I%2FEK6192YJn5bZrUmvKv8DCDYQABoMNjM3NDIzMTgzODA1IgxMXD9aiHmOQnUYH3cq3ANOhQ1PS3FvgJjFemxR8c0Ya%2Fvy%2F7VriTwvVmbRH9Q0qL6ervS0kQXz7LMr1KbzfhU7gcaevFYEsjtnw6hAQm83v7ssjultOwlKOMXV1%2FHvZHnbNiztF1neUHygxG3JsO6e%2FeC12kLx3FEd90H7umbYo4V%2Bzb4lrwZNRQd1fSEDu%2FasHa4A6Ac2h9Aiiq7Dq0A9Zh2GYyFvR3QbDXEVSqj1iWyP1ej5qEmXZ5e%2FWRxAzm8EQdTYYXWAwBHVpZme7XTtrAXHV6y0FiP%2Bt0XNclmx2BG9Kn51WILsPVLwAozCYQVOlRMzFoLzZeF5c3QZHVYp7nSAzobybESJTJ2rs%2BO1bOdy8UB7%2BgF9pw0jTvAQ7tOLADY6kZWsDQKSWK%2B11vFPLtmDzL1c8UWUutT97%2Fw1ZCOBHrHQzCDF%2Fg7YoG%2FGxHQK5HcNv2fQmyxWMIqxUODjq3UO5y52UlGLMWv4FSGDcQGmd1bQzbhnAxYCSdprqm3OOdp3u6nzJPku6VJLzOwGoDw3KXLZ8ZJjXAiuetkVccfNZwGG%2BMhCugUoXaJYPWQvvt3JVFeI0KfSRD5fRupLTl1NzE%2B0xysbFipMjcGgLV8WWDvP08VsIMJVeDG5zL0DoXK%2FFapHSa96rzCC0r69BjqkAadNF66XyMxfPv1AEFuDEzNIlYifQCjI0fLkn2MlrsOETsVb93V9H7kRdtVNzxho%2Fxodgl7KdFQ4r5cUo7iTCHMKTFmVzJQ8oj1q9aVSVINFvvjyA1QiyyyAQfLhqlWB8kXt16D%2B61ck8RF6e2C9cNUXq9CqAEWYs6GHDQ99qj2MvHvWrEmwH0kwdWUASddGSnd6PG%2B3RyDg5SB2V4Fa6X9C%2FaHM&X-Amz-Signature=88de4f8289ca8c5ce171807d8c80b1d51081839ccb72439011da279b03a7fc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
