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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMN2WEU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMM6Fz%2Fww5p689Aex%2F3lp0kJLL0zgAaEakov6VPRAYPAiBDxBxVZv%2BJQYHs4oZ0K7eQeJUEvwZMMtJDlVDa%2F1%2BPwCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMHGpI2ijtCW4V0%2FrwKtwDRZhX%2FKQWauZJN2Vtbo8uGGYidr3QY%2FEINSR7rHI6rvQBcjzv4IChLnJstL%2F1YmIsxcWAo%2B4kHod1hxvBpR31smqhxfXuE6sAKOShj6GLHC8aDRwEqvpyXUAckY3F96FVRBI8NfCBVPX8CXBrBbM2kDveKKbV8pmpHB91a8q2DEPpCIecZhEmbCmJXe4Cr2heWhZrmf2bOuYBJoi2n5hALB0WZHbuAX8Hl5THtLT8yMKcJ7mO%2FOAAtmWeT2Y%2Fr%2BQ80gLsnGNgBfyShVLuK0uf4UcSNCSQPVzKlqNUsTj36UOnZ9r8lQa%2Fj%2FNU3uAEJGM0d%2B%2BhRu5QN2xa5cG%2BuUWnGMPOGhOYEVSAmVoou4vR7%2BGsIHyWLxhkWfkO26yGO5WPgByele1PYHLffradiZB5MTTpJe%2BgDT32V%2FYhwq0F5RW9qsziNkVtFB0tPpRHZ44uFsUzJl7jk5hKAdCYxXUH%2FXMStKa4Hqj7AlitAmGgUMZcn%2BuvWvnawUavk9C%2FDoBYY7eLJQIo2CjR2HJetqxO59lwIwyUYlMvYoaNbfasTZB8E8dwr%2FH5El0Jzwk428TXVgr9jGA3vH6pPiBV26qwjY4SQo%2BH7qw3y%2FaiVCNQKsNg8PQa8WSUjIew8QYwmdSmwQY6pgGda6jtc%2BTqYM3zN4niWonyRRZorjvHANR1Oizt2cwstB9MQ5cS8ayew7QSmN17hPkOGv7EERjX%2BIIEz7D494G9XyoXRPbUWuxsk9CTBdIaTOAGyntahe6XbaD4ec1yVYY06y0H8n5LbHS3ZcqnkbU716vEdwgz07yyS47rTvzXqHmbKn5gJZqOTohrF7VWlQYSLfRPzCylIMhowBz5I3Qijt8zs4R2&X-Amz-Signature=8fefec58ea82ec419deae7d947e68e65b6add98ac6f3916346b6a14ce909d0da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMN2WEU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMM6Fz%2Fww5p689Aex%2F3lp0kJLL0zgAaEakov6VPRAYPAiBDxBxVZv%2BJQYHs4oZ0K7eQeJUEvwZMMtJDlVDa%2F1%2BPwCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMHGpI2ijtCW4V0%2FrwKtwDRZhX%2FKQWauZJN2Vtbo8uGGYidr3QY%2FEINSR7rHI6rvQBcjzv4IChLnJstL%2F1YmIsxcWAo%2B4kHod1hxvBpR31smqhxfXuE6sAKOShj6GLHC8aDRwEqvpyXUAckY3F96FVRBI8NfCBVPX8CXBrBbM2kDveKKbV8pmpHB91a8q2DEPpCIecZhEmbCmJXe4Cr2heWhZrmf2bOuYBJoi2n5hALB0WZHbuAX8Hl5THtLT8yMKcJ7mO%2FOAAtmWeT2Y%2Fr%2BQ80gLsnGNgBfyShVLuK0uf4UcSNCSQPVzKlqNUsTj36UOnZ9r8lQa%2Fj%2FNU3uAEJGM0d%2B%2BhRu5QN2xa5cG%2BuUWnGMPOGhOYEVSAmVoou4vR7%2BGsIHyWLxhkWfkO26yGO5WPgByele1PYHLffradiZB5MTTpJe%2BgDT32V%2FYhwq0F5RW9qsziNkVtFB0tPpRHZ44uFsUzJl7jk5hKAdCYxXUH%2FXMStKa4Hqj7AlitAmGgUMZcn%2BuvWvnawUavk9C%2FDoBYY7eLJQIo2CjR2HJetqxO59lwIwyUYlMvYoaNbfasTZB8E8dwr%2FH5El0Jzwk428TXVgr9jGA3vH6pPiBV26qwjY4SQo%2BH7qw3y%2FaiVCNQKsNg8PQa8WSUjIew8QYwmdSmwQY6pgGda6jtc%2BTqYM3zN4niWonyRRZorjvHANR1Oizt2cwstB9MQ5cS8ayew7QSmN17hPkOGv7EERjX%2BIIEz7D494G9XyoXRPbUWuxsk9CTBdIaTOAGyntahe6XbaD4ec1yVYY06y0H8n5LbHS3ZcqnkbU716vEdwgz07yyS47rTvzXqHmbKn5gJZqOTohrF7VWlQYSLfRPzCylIMhowBz5I3Qijt8zs4R2&X-Amz-Signature=976303a32e214503cfd8bdc07528a8b9c8db1252febe58ccd57b73b1169d9652&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
