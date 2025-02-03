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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIPCYOQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID06SBKC92pCwro7TKwUXyNNUbDpvU5C8YfDE5AdBZ3BAiEArZdtidEZ8N8lFaNXNpY4vmrhZ%2F7%2BtnbYPOOH0ldSQs4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDK3YWG7zWHfRi0SO1CrcA2RCIT2m58n5Z%2F8CidXO6j%2BpdprM7JiD4wpUcf2ZDgEhtDjfX%2Fb5BiRTW46gKilqmuzt4QvMzOxpt9JipPeG1Zgw4PPWtQ%2BR7%2Fo8cTYF%2BOs4aF5b9ya8wDXDS1gnmhlEFDwvAgYkyTrKLPaBlCjMFeJZE%2BcO0zATRV7WYZkquqq3RzqNzwBqatu8c8QcQ9zKDP65L7Lej%2F1gX6o1f6tDnYvObUSj7jNonGUCgL3weeyu7Wd5QLUOv4Md7rjvYwDwvafaMunqXakRQ3Mcozdv2GwCD8Nf1sP08KDAoWNXQMOuaoqVe7XcSdVdDoZorQgaG8Z20zDqCRQf6mfED16RuHHpDVBbLzctfyM6Soh0n%2B%2BX9I5FMgT9sXhUwmyFeoLL4vNujrbdKWcN7Pil1EtqVmMG2l41J%2Bi5A0TxWACTt4y2Y6oGOaVfR0Cj8lL%2B8rbSnyViAPMG1WGHy9l289lm1XW4Syg7VnRvLwCtjN48te1SstRDhWCJ9MGmzBKw1f%2BQy4ZwtRuAQpx6njEaI1SzJofzVGiXR1SG8mEYZnDzlswwxkxonzV0snW4ew70fS2YsLtgJ6Ml8v2ltc6XfbSqWYkhfTYgZdf2Jq0IkhoAENpn2eDQSjrtD6EsCPrBMKn5hL0GOqUBKD7bnK0id1%2B4xpCwveIZOg7LfgbLtgTDMzHSXJksb%2FMGjEIy4cY5gk1IWyI2soIdybcxJRVGyNN56lG6cnZ5sAHrMjEsEUF%2BbkdpgUK%2BkF0xVJ9ZxCnp1ATIkNZtedsqZjTihqEVPqEyMON0%2FnCF1bFxCac%2FkKvetTbmX6AnRd9GRPCJXDHDODbfTttnxj6ToL%2BzLgo0TogNeasZXs54nVeqVIq%2B&X-Amz-Signature=5d66e48f0fb8ade9661d15c5670217242e4fbf659f70324a9413a8c08f70cabe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIPCYOQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID06SBKC92pCwro7TKwUXyNNUbDpvU5C8YfDE5AdBZ3BAiEArZdtidEZ8N8lFaNXNpY4vmrhZ%2F7%2BtnbYPOOH0ldSQs4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDK3YWG7zWHfRi0SO1CrcA2RCIT2m58n5Z%2F8CidXO6j%2BpdprM7JiD4wpUcf2ZDgEhtDjfX%2Fb5BiRTW46gKilqmuzt4QvMzOxpt9JipPeG1Zgw4PPWtQ%2BR7%2Fo8cTYF%2BOs4aF5b9ya8wDXDS1gnmhlEFDwvAgYkyTrKLPaBlCjMFeJZE%2BcO0zATRV7WYZkquqq3RzqNzwBqatu8c8QcQ9zKDP65L7Lej%2F1gX6o1f6tDnYvObUSj7jNonGUCgL3weeyu7Wd5QLUOv4Md7rjvYwDwvafaMunqXakRQ3Mcozdv2GwCD8Nf1sP08KDAoWNXQMOuaoqVe7XcSdVdDoZorQgaG8Z20zDqCRQf6mfED16RuHHpDVBbLzctfyM6Soh0n%2B%2BX9I5FMgT9sXhUwmyFeoLL4vNujrbdKWcN7Pil1EtqVmMG2l41J%2Bi5A0TxWACTt4y2Y6oGOaVfR0Cj8lL%2B8rbSnyViAPMG1WGHy9l289lm1XW4Syg7VnRvLwCtjN48te1SstRDhWCJ9MGmzBKw1f%2BQy4ZwtRuAQpx6njEaI1SzJofzVGiXR1SG8mEYZnDzlswwxkxonzV0snW4ew70fS2YsLtgJ6Ml8v2ltc6XfbSqWYkhfTYgZdf2Jq0IkhoAENpn2eDQSjrtD6EsCPrBMKn5hL0GOqUBKD7bnK0id1%2B4xpCwveIZOg7LfgbLtgTDMzHSXJksb%2FMGjEIy4cY5gk1IWyI2soIdybcxJRVGyNN56lG6cnZ5sAHrMjEsEUF%2BbkdpgUK%2BkF0xVJ9ZxCnp1ATIkNZtedsqZjTihqEVPqEyMON0%2FnCF1bFxCac%2FkKvetTbmX6AnRd9GRPCJXDHDODbfTttnxj6ToL%2BzLgo0TogNeasZXs54nVeqVIq%2B&X-Amz-Signature=0f96ed8317a419f6eebee2a2978580d48fca3b1736ebaf7ad315254bae24ab32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
