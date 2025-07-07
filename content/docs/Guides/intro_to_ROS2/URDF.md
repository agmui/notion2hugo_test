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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMCEB6Q%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBSoilS%2BFefsJxcMODRQNs%2FekzLKp5PaXDcWZ7AN6cWdAiEAyDnwXchQzUKLi2LH%2BxoACY9Gv8uziLgqd%2BNxvpJ35uMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDL3Qs40zP%2F20NNuVRircA6piH%2Fc8W%2FqE2obgAiGJkcwo%2FS%2BnxlQa6UK8tt%2FL0uSMqrdZfztbPW9ICgm4qg5SpAL5MXoQ1YbatGhnqOPdkmVsklWmFlLHa74nRSGKAAXXC0vSvr6fxT17zXYqa3s1BtGrZ1uJRMiIpLkt7fQ6yu6%2BFppuYYHrjCqVHNDdUBiKCYzORqqpc31uHAYTPTwLLgDO3IGG4jgSSRtdjVhOZVskoixPal2nq5Brm3hqLHr2hhqDSlF5ysMmZolfgKXA0%2FuBOpKV1Vi9oqoRdSgbFB%2B58%2BFSqSW1jZ4nySoez74WJOSgAh3sq%2FSs2wY%2BaW%2BSDFuwZT7zSDS7hvmtuqvlPww165UgfzQW1iKQ3lt2V9swS%2BnDzdU%2BHi92Zms1u6PQ22tdLDiX1A3sbT8t0R8ycMsbfqelOyu%2BcSfLp2Fb6rwrIaRXA92qFt1w321RkP23WBI8CHKyj340JeiVINcR1XK7QvEfS%2FQiSbh%2Bs4tELEUGJkKwBpOoXC%2FBjY6EmTMRoU2NF0fxCzyUhnkEjGAV4%2BXDxiMN6uZpocxBzVQQz0WJ%2BZawqgGgNSGTNeTHH6EmAzc27PgkSvcJ1VrdyOSqu4ymZaH7T96gmpEaERtZHJx5Df59epCOf714jTlHMISXsMMGOqUB5hDNJL%2FjW8xKA6t89uAfc3nxTji6uI5KEt4iw4Htlu3v9ONSZhg3wIbjm%2F7Vcp3Cn8eYmZrpNXkB0Puc52ivM9PnNUcVJeDxjlhuqk7XhNnAQ94WtfhYwDUDAuvn0t9RRudvv7reHvNLbSYb3o%2BTduOs7dzanO6sB9TNLGYIx%2FdTek1v8zfJ3sWwo9%2B8%2BNvKOG%2Bp0W7r7Hm3V3EJRgiNA%2B3sGKve&X-Amz-Signature=a5fb5837b663ed1adbfc5279a115d073b74cb485a85236418a185a45a3676ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMCEB6Q%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBSoilS%2BFefsJxcMODRQNs%2FekzLKp5PaXDcWZ7AN6cWdAiEAyDnwXchQzUKLi2LH%2BxoACY9Gv8uziLgqd%2BNxvpJ35uMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDL3Qs40zP%2F20NNuVRircA6piH%2Fc8W%2FqE2obgAiGJkcwo%2FS%2BnxlQa6UK8tt%2FL0uSMqrdZfztbPW9ICgm4qg5SpAL5MXoQ1YbatGhnqOPdkmVsklWmFlLHa74nRSGKAAXXC0vSvr6fxT17zXYqa3s1BtGrZ1uJRMiIpLkt7fQ6yu6%2BFppuYYHrjCqVHNDdUBiKCYzORqqpc31uHAYTPTwLLgDO3IGG4jgSSRtdjVhOZVskoixPal2nq5Brm3hqLHr2hhqDSlF5ysMmZolfgKXA0%2FuBOpKV1Vi9oqoRdSgbFB%2B58%2BFSqSW1jZ4nySoez74WJOSgAh3sq%2FSs2wY%2BaW%2BSDFuwZT7zSDS7hvmtuqvlPww165UgfzQW1iKQ3lt2V9swS%2BnDzdU%2BHi92Zms1u6PQ22tdLDiX1A3sbT8t0R8ycMsbfqelOyu%2BcSfLp2Fb6rwrIaRXA92qFt1w321RkP23WBI8CHKyj340JeiVINcR1XK7QvEfS%2FQiSbh%2Bs4tELEUGJkKwBpOoXC%2FBjY6EmTMRoU2NF0fxCzyUhnkEjGAV4%2BXDxiMN6uZpocxBzVQQz0WJ%2BZawqgGgNSGTNeTHH6EmAzc27PgkSvcJ1VrdyOSqu4ymZaH7T96gmpEaERtZHJx5Df59epCOf714jTlHMISXsMMGOqUB5hDNJL%2FjW8xKA6t89uAfc3nxTji6uI5KEt4iw4Htlu3v9ONSZhg3wIbjm%2F7Vcp3Cn8eYmZrpNXkB0Puc52ivM9PnNUcVJeDxjlhuqk7XhNnAQ94WtfhYwDUDAuvn0t9RRudvv7reHvNLbSYb3o%2BTduOs7dzanO6sB9TNLGYIx%2FdTek1v8zfJ3sWwo9%2B8%2BNvKOG%2Bp0W7r7Hm3V3EJRgiNA%2B3sGKve&X-Amz-Signature=d7f35f3f10b23bde6458cb4ac0a53e74f0ecca39c4815d5b8aa687ed128efc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
