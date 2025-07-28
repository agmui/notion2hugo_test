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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWD2FK5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC01i53deMNpGKV05RVmkfkdTXKitn0oVlWm6YKKotfGAiBHFXF8Ni08s5lbA4Z2Yf0r%2Be3dydnjdSFQWAF%2Bef%2BPASqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0lLPHGwm%2FNoxQjCKtwD%2B%2BS9sGgVM%2Fd8VgrzhtJ7ThiqxRxGDBV%2FyrwbFXWd7mJpkcQcYkBs6wBMaWIDkMiIreHcEAMw1AeZKIH6WnP2tsNKksjy%2Fw9vwN6qwbMpLskuh%2BOajPZ%2FmNFR0HRsLjZ5L0oD2f9bGg%2BiljUEv4J5JnaXX0aZ2PvAlo4OeZKa5oGPn%2BpAGyPv%2FCsmJPf19fHEpYI24OsNabXnUOGAc5chvwyVi40gEoCKoOgN1rA2RWquTYTHcDMWWe8zRK5%2BNnTVhUlHd04feXIyZkQdBog4w%2F03veA256TeNZNMfjek7aSw9zbW9J%2FQ4lgxx8Qd3O4cGBm4zcup0dgxUj%2FcCtXhTiJ3%2F6siO63WnMPxgJwTFkYD5ni6T9qhiw8rEE4Va%2B3V1uySDmEj%2F4tomX8QJzZoLOGrvsy%2FE1herqOAfmSC8GuO6S4hsFHEFGtwLRJKylWuZQ4wcm4k63%2FsegKX%2BCVuhibh0tRU%2FKCZbkUUH%2BanHENDqpUESBuH680rNCnYwbv6UZQrduywgzuCB%2B5fgYviUToRIpH2EqV1bwjXQlr8kRHOJ2t2xt%2BHatP1BHj2ksEv%2BHfE136K7H54QIhNV0BPyn0TLb7%2BOkOh0qV2JBoRH4caOUpTBn%2Bwx3EbzwIwitedxAY6pgE9zZNEo1zM8%2BNBdEIwBlAGPbr%2FNV7MUKVh0Spik5F%2BeREWEcuWfaM4myorYFlFaQXqzlGh40IqX%2BU1gk4asCwjpzNVuHUQZxs3mqwNbSoFVCdQa4YSYNBIUg1vi66GHgTNOJlBsZ8KhuFRiH5mt0XHULlVjC5I4JFZkpHc8wXUW4A3gARLq09SgD7UQtnZ6hXK7%2FYrsJmcCA3ezZ4225Bxy9J1Xdi4&X-Amz-Signature=e3fb70133ffcda8a198de6c900217d893aebc7b622ae82d12dfa1dae94ade94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWD2FK5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIC01i53deMNpGKV05RVmkfkdTXKitn0oVlWm6YKKotfGAiBHFXF8Ni08s5lbA4Z2Yf0r%2Be3dydnjdSFQWAF%2Bef%2BPASqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0lLPHGwm%2FNoxQjCKtwD%2B%2BS9sGgVM%2Fd8VgrzhtJ7ThiqxRxGDBV%2FyrwbFXWd7mJpkcQcYkBs6wBMaWIDkMiIreHcEAMw1AeZKIH6WnP2tsNKksjy%2Fw9vwN6qwbMpLskuh%2BOajPZ%2FmNFR0HRsLjZ5L0oD2f9bGg%2BiljUEv4J5JnaXX0aZ2PvAlo4OeZKa5oGPn%2BpAGyPv%2FCsmJPf19fHEpYI24OsNabXnUOGAc5chvwyVi40gEoCKoOgN1rA2RWquTYTHcDMWWe8zRK5%2BNnTVhUlHd04feXIyZkQdBog4w%2F03veA256TeNZNMfjek7aSw9zbW9J%2FQ4lgxx8Qd3O4cGBm4zcup0dgxUj%2FcCtXhTiJ3%2F6siO63WnMPxgJwTFkYD5ni6T9qhiw8rEE4Va%2B3V1uySDmEj%2F4tomX8QJzZoLOGrvsy%2FE1herqOAfmSC8GuO6S4hsFHEFGtwLRJKylWuZQ4wcm4k63%2FsegKX%2BCVuhibh0tRU%2FKCZbkUUH%2BanHENDqpUESBuH680rNCnYwbv6UZQrduywgzuCB%2B5fgYviUToRIpH2EqV1bwjXQlr8kRHOJ2t2xt%2BHatP1BHj2ksEv%2BHfE136K7H54QIhNV0BPyn0TLb7%2BOkOh0qV2JBoRH4caOUpTBn%2Bwx3EbzwIwitedxAY6pgE9zZNEo1zM8%2BNBdEIwBlAGPbr%2FNV7MUKVh0Spik5F%2BeREWEcuWfaM4myorYFlFaQXqzlGh40IqX%2BU1gk4asCwjpzNVuHUQZxs3mqwNbSoFVCdQa4YSYNBIUg1vi66GHgTNOJlBsZ8KhuFRiH5mt0XHULlVjC5I4JFZkpHc8wXUW4A3gARLq09SgD7UQtnZ6hXK7%2FYrsJmcCA3ezZ4225Bxy9J1Xdi4&X-Amz-Signature=9ba1d7c3cd7ce5b6794edbfa14acbc8cae52934bb5a46c7f646ce18ce7c76edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
