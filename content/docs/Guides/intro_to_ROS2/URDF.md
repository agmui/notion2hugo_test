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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RD3IHA%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICHdunv3s7aoSc3R8Y4Ijp9Z1JxEW%2F41VU4%2B2LSJw0cgAiEA02mb0WsRXbNumKzw40fNJ10KtbEtxruvB4gkS3Dgxw4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9SFVKY4i9HnrXYyCrcAw71MXY6PmHzL1Zp7DuJm7vZgIWiMSOijZglk8YMLyxgNzgWvkVoDhc1WPsht%2BcXuS5BRioNVo1iBhh%2BbAMbMDm5pQ94s6FFXd4%2BpX1XspQZ90Z6n994A8s7UNOhOUq770s7IpJ3lT%2B3nCx5PX8DoLP%2BAZiekGoAEbPYABJ0MUKGnRQn182LDPkTDTbgwVfa9cvISQDZFXy4%2BCxJtrdxeW4n66dJ6YOMewNmQ6xjnS2qV%2FgNiKyu3rvcwqZYGfHgNAqVeflMk%2BeatxgEOGPU5%2BzizGRHNHfRDZ7mN8Xknv6ay%2BV7vy4ol494%2F%2B8MQUGe96IvlvoDmJHe8phsshegXv40vhOhjvGE5uW%2BLLiIgnAeq5M%2FZEatJugKsuc004HzQF2now4wyIzpY31oJ9Qa0qFqbB4JKV3e8NoSuMbkVY9qwJ1eq6x%2F50N%2FmlDaXeutMUNwHeO9cIawy5hKJtuws1kB8PaqGd4KOoYyCcGGsjcuJODvp9WLvZZf0jpGsltzjWKq8Ee8raT4w680eZHdVIhXFTtfVQvTHm8UwmtpuW31Kh5Es5frCTpdGI%2BBArKdOf3IgEat66cSv34JBgWkw4bQsM%2BnCea4mFckvNyhFQUy2D3%2FV%2BT%2BFffu1QByMN7V7ckGOqUBOmXTxXf4GGF4PD0SrFYkCvdVe9N5iJHo0zkSZm0RfwAINUERui74bo6h2VzlYlUq4A4VQuZZWVG5OSTnNYziTMKu%2BhpCRbYQeF8amLpKNMPT%2BHM3ZNgssNsX%2FhwBb1Ow%2BT8aalbtoELNSJI64BIJSPQqWQ8lAfgzrVMjeNd%2FUI7dPzKtNmp8KtR9tPc9exEoWEU0prf6hnge7253lP7nIb9x4WrQ&X-Amz-Signature=237a4526094aed8599cf64b740be3fd15db2af7689b7af79d0d2e9a365513cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RD3IHA%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICHdunv3s7aoSc3R8Y4Ijp9Z1JxEW%2F41VU4%2B2LSJw0cgAiEA02mb0WsRXbNumKzw40fNJ10KtbEtxruvB4gkS3Dgxw4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9SFVKY4i9HnrXYyCrcAw71MXY6PmHzL1Zp7DuJm7vZgIWiMSOijZglk8YMLyxgNzgWvkVoDhc1WPsht%2BcXuS5BRioNVo1iBhh%2BbAMbMDm5pQ94s6FFXd4%2BpX1XspQZ90Z6n994A8s7UNOhOUq770s7IpJ3lT%2B3nCx5PX8DoLP%2BAZiekGoAEbPYABJ0MUKGnRQn182LDPkTDTbgwVfa9cvISQDZFXy4%2BCxJtrdxeW4n66dJ6YOMewNmQ6xjnS2qV%2FgNiKyu3rvcwqZYGfHgNAqVeflMk%2BeatxgEOGPU5%2BzizGRHNHfRDZ7mN8Xknv6ay%2BV7vy4ol494%2F%2B8MQUGe96IvlvoDmJHe8phsshegXv40vhOhjvGE5uW%2BLLiIgnAeq5M%2FZEatJugKsuc004HzQF2now4wyIzpY31oJ9Qa0qFqbB4JKV3e8NoSuMbkVY9qwJ1eq6x%2F50N%2FmlDaXeutMUNwHeO9cIawy5hKJtuws1kB8PaqGd4KOoYyCcGGsjcuJODvp9WLvZZf0jpGsltzjWKq8Ee8raT4w680eZHdVIhXFTtfVQvTHm8UwmtpuW31Kh5Es5frCTpdGI%2BBArKdOf3IgEat66cSv34JBgWkw4bQsM%2BnCea4mFckvNyhFQUy2D3%2FV%2BT%2BFffu1QByMN7V7ckGOqUBOmXTxXf4GGF4PD0SrFYkCvdVe9N5iJHo0zkSZm0RfwAINUERui74bo6h2VzlYlUq4A4VQuZZWVG5OSTnNYziTMKu%2BhpCRbYQeF8amLpKNMPT%2BHM3ZNgssNsX%2FhwBb1Ow%2BT8aalbtoELNSJI64BIJSPQqWQ8lAfgzrVMjeNd%2FUI7dPzKtNmp8KtR9tPc9exEoWEU0prf6hnge7253lP7nIb9x4WrQ&X-Amz-Signature=ff96a3ca2126daa9d3fce69c23f3f341dc8a60da5be5ae1054b5e0e866703370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
