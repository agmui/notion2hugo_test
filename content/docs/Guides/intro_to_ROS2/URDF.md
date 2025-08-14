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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNWPJGQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWYHvCsZhfs63IenMfAC%2FQAbJrgpDJ7qo5iT6sz3XBQIhAPpbpP8TX4oOHBbgDCVE8cDTPC247C77ZjN%2F1n7lMKUcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzanCHmZt91HlAvHSgq3AODprcqtbiAUd2gQKJ518ZPfV%2Bm8AQCHLAKr3%2BdlEituXBKx%2FFq71ZAC%2BMrTd3U1WZ78gN0WeZqUHqpEcbEEGZPBJC5XqxJonlElOdzn9TR%2BpOuTG%2FeKOue4bnuAaFg%2FTWcJQQ173xW4sFQgn33KZhNArl0Om0EQc8Wb08fvssNTY29WU08zVUnvL0RR1QU%2FuiIx4kEPJII8fSiZ9pWdvOKaINkV%2FP7FZRtjI7NFqTY40Yfu7%2F24AeCbxMPl8myEKBb2qLde4jUrYOSl6oIrnLuDRdop%2FVkqTaYSwbaxGhkippvzUz%2FkGwdHjPv2DUH5XAerxMJFGflSdjNwtiqw9XJab42sgq4740LTmlYMF0jRUn0gomwWTDTyFT2LGa2LA58mbd3P2ULrNnektVFsKFOfiZYmFaAhDPDlW2jCGb9jqCuqlV8NUA2s4jFTgeJldocW11l5LfOXdpM1RgQwR9ROMUnkn%2BipIdLsNkAea9ukH0NSbxBuqblbyxc8gSzZfvyzdp9WLaawaPyfKSjR%2F694KkG1UCNEbmyO6XCMN%2F8s4YkuLjG5zbonCLPhvE%2F86Qbb5tITJ8%2BdwhdLqn5EqkQBxx3trBeQ%2F0bq9zHl9NUgaJvjxhNs2N%2B2rWqNzCEr%2FbEBjqkAbfH4lo3mlukZdF0PyGL6ZXOxNNwWYLaxN1Z1jelEQJoOGJkCfpBiax4qw%2F6JB1Ca%2FyeYpEUM1JcZfX1dXytxrDjjee7rSRQPHpR7jEali5ZtEmLhz6A5zfpoE1msHc6OHpnZOJv0vX4FGZ8cHrYdGUOkwnNmVzAvUm1mK3Tc%2Fqnm2Xza9VlaHSDda4NrmzEHuxWbyB9qPtm0m9Qh18%2BLkoX3xAZ&X-Amz-Signature=0b80efac2be435c539c897179e78b2b73e23c1a130460f96b68216b936a19631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNWPJGQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPWYHvCsZhfs63IenMfAC%2FQAbJrgpDJ7qo5iT6sz3XBQIhAPpbpP8TX4oOHBbgDCVE8cDTPC247C77ZjN%2F1n7lMKUcKv8DCEEQABoMNjM3NDIzMTgzODA1IgzanCHmZt91HlAvHSgq3AODprcqtbiAUd2gQKJ518ZPfV%2Bm8AQCHLAKr3%2BdlEituXBKx%2FFq71ZAC%2BMrTd3U1WZ78gN0WeZqUHqpEcbEEGZPBJC5XqxJonlElOdzn9TR%2BpOuTG%2FeKOue4bnuAaFg%2FTWcJQQ173xW4sFQgn33KZhNArl0Om0EQc8Wb08fvssNTY29WU08zVUnvL0RR1QU%2FuiIx4kEPJII8fSiZ9pWdvOKaINkV%2FP7FZRtjI7NFqTY40Yfu7%2F24AeCbxMPl8myEKBb2qLde4jUrYOSl6oIrnLuDRdop%2FVkqTaYSwbaxGhkippvzUz%2FkGwdHjPv2DUH5XAerxMJFGflSdjNwtiqw9XJab42sgq4740LTmlYMF0jRUn0gomwWTDTyFT2LGa2LA58mbd3P2ULrNnektVFsKFOfiZYmFaAhDPDlW2jCGb9jqCuqlV8NUA2s4jFTgeJldocW11l5LfOXdpM1RgQwR9ROMUnkn%2BipIdLsNkAea9ukH0NSbxBuqblbyxc8gSzZfvyzdp9WLaawaPyfKSjR%2F694KkG1UCNEbmyO6XCMN%2F8s4YkuLjG5zbonCLPhvE%2F86Qbb5tITJ8%2BdwhdLqn5EqkQBxx3trBeQ%2F0bq9zHl9NUgaJvjxhNs2N%2B2rWqNzCEr%2FbEBjqkAbfH4lo3mlukZdF0PyGL6ZXOxNNwWYLaxN1Z1jelEQJoOGJkCfpBiax4qw%2F6JB1Ca%2FyeYpEUM1JcZfX1dXytxrDjjee7rSRQPHpR7jEali5ZtEmLhz6A5zfpoE1msHc6OHpnZOJv0vX4FGZ8cHrYdGUOkwnNmVzAvUm1mK3Tc%2Fqnm2Xza9VlaHSDda4NrmzEHuxWbyB9qPtm0m9Qh18%2BLkoX3xAZ&X-Amz-Signature=e6039be31ff582c9436bd15501850f3fdd4d84d5b8a6359b7001f9cb9c815e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
