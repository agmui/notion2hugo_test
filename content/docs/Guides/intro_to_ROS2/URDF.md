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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3OJJCF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCGx7hgcwrBeICFCiTx2ZCBRFtV6wm8H%2Bixu14LyvzNdwIgBNwSs%2B7Owu1MqKjimnkz6j0KrMATa%2BfpAi5zTT0f2hoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nflmr3WKr1mccKircA3s0ryudaMsZ%2FSKPj%2BP4pnx8r3sGhFPL81Mb3Rubt%2BvcMEbiqApwXc7CP83W5OUW94%2FFzQnQN46HB8PpnHKNl5skeGnOfBO4pAHJ7BV8DC0kr8DwbkvqcgxBumKkYg1n15VQhUBbJD4XwqpA2mymjO9qzDinBqtvnkpWyZnz7alq8SVkvmWrWl5Y3sQVOpAcu4RmZPAS4rfBfQTT1gEVM5NlmyiZH62SoLhUw4TwRtGqzLRFT1w4MXO9oNscxHiIBwqAK0hyXTh1ph9heGtu9snHNHiRPrU7Z%2FPPQPrqyzri6ftV6IaQBRSoekc88%2ByEqN%2BY3Nbw9cBAdmI%2F3e%2BRBXmucxPP5y8IRWqbszrAyu8eswC%2Bx3%2F7FDIapzDqFEjwTNljWsxIzljqmlloVTO9tOvAfIicbYfImqvOCkDSWbJQrZRw0B9uQvgQO5WQT7MhUOVVwtbqmEwCip6HHN43nVJ8DRiLKh7GcBcWHCI1Vhuk0zViBoCuAovLAu%2BXD93T4K7LKj9IbERMcMfB4kJvNSb%2BBR5Rner5sB4Me6Rtb8LwnLBN85%2F6BCRL8p6tY8L8lBdvBZcXIcLeZdu63Htg%2BEsV9HiiI6FInIs4X%2F7FjLRfU4SJJDdE465XwEZMMPa2%2FL4GOqUB09K%2BW4SNQfOd6hzJPWcbAR17kioHLUxSCzEmMfh8iUSQ0%2FG9ORP02Uxutn7AiS7IFxHysHBX9MYFWgYDlF%2BcsGuRuxuahn9VJm0xcGqAQT4c4r%2BplN6BvTa7ny4hFQXopfJakeCVtuAagFtqXKP2BjQcQjcJY%2F1A%2BY8pwc7rv6jKC8GmY%2FuGQIJiBSfYfBYxDxjhq6mbQQR1tygov0b5B5QOrOcT&X-Amz-Signature=ca3ad403bdb4a54b418949552eea2aaeee7d812fb20e47b3cfbe1db4db8a9646&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI3OJJCF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCGx7hgcwrBeICFCiTx2ZCBRFtV6wm8H%2Bixu14LyvzNdwIgBNwSs%2B7Owu1MqKjimnkz6j0KrMATa%2BfpAi5zTT0f2hoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nflmr3WKr1mccKircA3s0ryudaMsZ%2FSKPj%2BP4pnx8r3sGhFPL81Mb3Rubt%2BvcMEbiqApwXc7CP83W5OUW94%2FFzQnQN46HB8PpnHKNl5skeGnOfBO4pAHJ7BV8DC0kr8DwbkvqcgxBumKkYg1n15VQhUBbJD4XwqpA2mymjO9qzDinBqtvnkpWyZnz7alq8SVkvmWrWl5Y3sQVOpAcu4RmZPAS4rfBfQTT1gEVM5NlmyiZH62SoLhUw4TwRtGqzLRFT1w4MXO9oNscxHiIBwqAK0hyXTh1ph9heGtu9snHNHiRPrU7Z%2FPPQPrqyzri6ftV6IaQBRSoekc88%2ByEqN%2BY3Nbw9cBAdmI%2F3e%2BRBXmucxPP5y8IRWqbszrAyu8eswC%2Bx3%2F7FDIapzDqFEjwTNljWsxIzljqmlloVTO9tOvAfIicbYfImqvOCkDSWbJQrZRw0B9uQvgQO5WQT7MhUOVVwtbqmEwCip6HHN43nVJ8DRiLKh7GcBcWHCI1Vhuk0zViBoCuAovLAu%2BXD93T4K7LKj9IbERMcMfB4kJvNSb%2BBR5Rner5sB4Me6Rtb8LwnLBN85%2F6BCRL8p6tY8L8lBdvBZcXIcLeZdu63Htg%2BEsV9HiiI6FInIs4X%2F7FjLRfU4SJJDdE465XwEZMMPa2%2FL4GOqUB09K%2BW4SNQfOd6hzJPWcbAR17kioHLUxSCzEmMfh8iUSQ0%2FG9ORP02Uxutn7AiS7IFxHysHBX9MYFWgYDlF%2BcsGuRuxuahn9VJm0xcGqAQT4c4r%2BplN6BvTa7ny4hFQXopfJakeCVtuAagFtqXKP2BjQcQjcJY%2F1A%2BY8pwc7rv6jKC8GmY%2FuGQIJiBSfYfBYxDxjhq6mbQQR1tygov0b5B5QOrOcT&X-Amz-Signature=5bac57cfd73bb4ac7cb4aa21e3814b2aa7b57dbe5a3a97d000012a9e7c33b10a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
