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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3V5HBLO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe%2BTSW1JMTugD1eqhC3pwiZN2hZ0u0uPFcJaqyrDZ%2BLAiAhKMDgK2%2BX8NNKuAK5y6%2B3KNwOqsCvco%2FDJRIKsBXS4ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM2YpkOmIdfwQRTLx9KtwDw17y7NJ7gb8J8Dxzx27y4HUCrn856U%2BtpWWj0I6RYhEzddn8sLg5t3LyguAEE1QAJqKvVqzmG8X0hHNz811w1RF9Lb3TxExceZvc1S4xGcUYBBJr14wZReRXWGDnV7NJwoMob3blaHY%2FQlejP0H03UYlRM%2FUprqrCkWA4lCIiKd6%2FcFHNgSjx%2BMtgiZhYNoE7FfwcatM8MoWsM%2FwTpqq9DZaEBrxtcexlyvsHypn%2FYLtgU0Hsx9i3HjQwP9kpJD0vKkMK5vRf4EZS1rQ4sjzfLpYA965w41Id8rKMWDzM%2F1%2B9prTBCz0Y6HUL3vcn1FYmoeR%2BNB8HJzlB3EHS49aVcYMSdVdHl4jeAKNKFuOT3dFi%2BScTXucLbnCIcN0rIILTw%2FAYDmQ0aoNxxEm5e8p47yb1K4XHINAVWoJPcN04vujfueoovNYKMuTYvrslUSGJsGoGLcUB65p%2Fjmu%2F%2F5cZaLQf%2Fb9FIply7X9lYuApUGtgl3VeaFqNF4O7Nn4fq40WB6KnVM9Bnwp%2BPT9xfwLXDhXUh8l2HAgvmO8tP98mKeyyP4VyfhQ%2FITa0kkno1i1cXidApqOMP3UjeKAkGHMykn7eAJdCmjzQ4LKjPfkKfLkpWD9F8NqeAeN7UIw64q6wAY6pgGbRlWclAsUlkghlWsCo16Cd2mw6qybIOJvQbxZGw2TpJonYnEesCAqVlUo%2BA7ntp3cppJoASMTHjKO8ajAz%2BxbinoLTvVAFnIcPCI4VC8253eX0ZqLR0WcCqEairLevU9A1j2lpdjeBA9E7iSq5b2R4dNckwYsJXzWMQUU0%2F36ZNgtXi69nTEfDGZJwxWMb8E8wJmpceitFuMrlH%2FvMI%2FNnublfDYu&X-Amz-Signature=a3f9f38cd0ed15f92af7ed7fe0bfc8ac8f80bdf190492ca500a743195a567c40&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3V5HBLO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe%2BTSW1JMTugD1eqhC3pwiZN2hZ0u0uPFcJaqyrDZ%2BLAiAhKMDgK2%2BX8NNKuAK5y6%2B3KNwOqsCvco%2FDJRIKsBXS4ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM2YpkOmIdfwQRTLx9KtwDw17y7NJ7gb8J8Dxzx27y4HUCrn856U%2BtpWWj0I6RYhEzddn8sLg5t3LyguAEE1QAJqKvVqzmG8X0hHNz811w1RF9Lb3TxExceZvc1S4xGcUYBBJr14wZReRXWGDnV7NJwoMob3blaHY%2FQlejP0H03UYlRM%2FUprqrCkWA4lCIiKd6%2FcFHNgSjx%2BMtgiZhYNoE7FfwcatM8MoWsM%2FwTpqq9DZaEBrxtcexlyvsHypn%2FYLtgU0Hsx9i3HjQwP9kpJD0vKkMK5vRf4EZS1rQ4sjzfLpYA965w41Id8rKMWDzM%2F1%2B9prTBCz0Y6HUL3vcn1FYmoeR%2BNB8HJzlB3EHS49aVcYMSdVdHl4jeAKNKFuOT3dFi%2BScTXucLbnCIcN0rIILTw%2FAYDmQ0aoNxxEm5e8p47yb1K4XHINAVWoJPcN04vujfueoovNYKMuTYvrslUSGJsGoGLcUB65p%2Fjmu%2F%2F5cZaLQf%2Fb9FIply7X9lYuApUGtgl3VeaFqNF4O7Nn4fq40WB6KnVM9Bnwp%2BPT9xfwLXDhXUh8l2HAgvmO8tP98mKeyyP4VyfhQ%2FITa0kkno1i1cXidApqOMP3UjeKAkGHMykn7eAJdCmjzQ4LKjPfkKfLkpWD9F8NqeAeN7UIw64q6wAY6pgGbRlWclAsUlkghlWsCo16Cd2mw6qybIOJvQbxZGw2TpJonYnEesCAqVlUo%2BA7ntp3cppJoASMTHjKO8ajAz%2BxbinoLTvVAFnIcPCI4VC8253eX0ZqLR0WcCqEairLevU9A1j2lpdjeBA9E7iSq5b2R4dNckwYsJXzWMQUU0%2F36ZNgtXi69nTEfDGZJwxWMb8E8wJmpceitFuMrlH%2FvMI%2FNnublfDYu&X-Amz-Signature=01d85401d7e856dbaabb15199241c5f590bf7266ae3a066596021c3c9180b601&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
