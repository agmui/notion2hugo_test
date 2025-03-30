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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLUAYD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDvZT0Gd0ERMQ3hXI1zAoZjN3qf67q91ZihItnvyAjG6AiEA5a%2BUl%2B6TpJyKDzTOlb0XGvZM14uFpt2jYDb0CcwNd%2FMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISPo8HeLscPF1T73ircA8HZOukY0Dejn81Lw8sEc29kckEZG%2FW74uf4vkNDbICiF0nXr%2BvVRVsF4RdpN2mDUkhO2ntr%2BbPucOw0orKnKXApc0XDJwIt1KW2IXIYFXeP1KBzhvbgDdqV2EZlcoC7BIbdWFwWwh%2FT8moxk2nOizi3PVXGHD%2BDTZAdypzIsEk9fqXwLjFg1B%2BgE%2BuD1QPGiETTuZr5x0DPWyEwqbvs9vj%2BpSISpEOKtxOThbIliMyqgohV9eZkyZ%2Bfnv%2FF7WAMeeyO3TzUE%2FX9D0T3biqqvvYz%2FVbAzpQH1VwQW5RHfz7CxWYxF1OUIA9kXP3npXovgTfs8ATCMPkt7c%2BeMemmDnCt8oW1kUHa8BuHa0686BJAVbc2pE9t0nzXNUDZJYLGc5ABBAPjBlkyrzZLUbLAUGA3gW479zUVrNGwFlDZhC8SIlxPyHrgiPywHrTTddFj5zbakbS3mVXT%2BYSXn7%2Fk6j%2BYXL6j1vYMwWoDEEGlYfwn76WGqJERroON4cNQxWInegJAR92ATPCRxqW05fi5O5GwtjN8QDmZ%2FPAedDvTInDgtRjuciIptI3crPfUONSTJtPvdpsDbUQCylH2CV%2FraSZ52R6TL0dvvV8bnRBFbvj8t0G48R1Ju5zo7WQaMIPwo78GOqUBkE9emCqgUxp1C7%2B4wMgp0GbhG2WDaRBHGKIFjoeMFYVPN6afz2KrbGKf%2F1NFgkn%2BBjb%2FAnzP32HeHHbD9MnOud4PrJq15%2BXi3Ch1za56P7z%2BJ7mSRNNUrk9RjtvSAuFlWJx6dVju8QBk10JXLhq9laxgnPSIzr1EKzmH%2BvZ%2FL0nEDtBnTYxAikaM3QRI7hBLZhAtnwrSecnewGGemhauabeOgRnH&X-Amz-Signature=eb956dd868033893a3f10d488583304eaa81bc73659ece4a4e30ee97503d9888&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLUAYD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDvZT0Gd0ERMQ3hXI1zAoZjN3qf67q91ZihItnvyAjG6AiEA5a%2BUl%2B6TpJyKDzTOlb0XGvZM14uFpt2jYDb0CcwNd%2FMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISPo8HeLscPF1T73ircA8HZOukY0Dejn81Lw8sEc29kckEZG%2FW74uf4vkNDbICiF0nXr%2BvVRVsF4RdpN2mDUkhO2ntr%2BbPucOw0orKnKXApc0XDJwIt1KW2IXIYFXeP1KBzhvbgDdqV2EZlcoC7BIbdWFwWwh%2FT8moxk2nOizi3PVXGHD%2BDTZAdypzIsEk9fqXwLjFg1B%2BgE%2BuD1QPGiETTuZr5x0DPWyEwqbvs9vj%2BpSISpEOKtxOThbIliMyqgohV9eZkyZ%2Bfnv%2FF7WAMeeyO3TzUE%2FX9D0T3biqqvvYz%2FVbAzpQH1VwQW5RHfz7CxWYxF1OUIA9kXP3npXovgTfs8ATCMPkt7c%2BeMemmDnCt8oW1kUHa8BuHa0686BJAVbc2pE9t0nzXNUDZJYLGc5ABBAPjBlkyrzZLUbLAUGA3gW479zUVrNGwFlDZhC8SIlxPyHrgiPywHrTTddFj5zbakbS3mVXT%2BYSXn7%2Fk6j%2BYXL6j1vYMwWoDEEGlYfwn76WGqJERroON4cNQxWInegJAR92ATPCRxqW05fi5O5GwtjN8QDmZ%2FPAedDvTInDgtRjuciIptI3crPfUONSTJtPvdpsDbUQCylH2CV%2FraSZ52R6TL0dvvV8bnRBFbvj8t0G48R1Ju5zo7WQaMIPwo78GOqUBkE9emCqgUxp1C7%2B4wMgp0GbhG2WDaRBHGKIFjoeMFYVPN6afz2KrbGKf%2F1NFgkn%2BBjb%2FAnzP32HeHHbD9MnOud4PrJq15%2BXi3Ch1za56P7z%2BJ7mSRNNUrk9RjtvSAuFlWJx6dVju8QBk10JXLhq9laxgnPSIzr1EKzmH%2BvZ%2FL0nEDtBnTYxAikaM3QRI7hBLZhAtnwrSecnewGGemhauabeOgRnH&X-Amz-Signature=7bef1849427a34eebbeb72c11261bd84ac03d769de5f754f9cf96049e1a1096c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
