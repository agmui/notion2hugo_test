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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KV4QCT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIE2ruWoLF3z600pFJLD9Ke7q81FOKcyGrN2SyZCQoVSIAiA%2BiKvbZkM0uDlwPaJtVVS7m2br5OEiQzUEoK8JnYBibyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2B5i2AIkS%2BQu5bDTKtwDER%2FAC450BGBXINARnjdD9t0A6cY%2FxHPKAvuLUCbkc4x8zIBUBWyIpxWVQDmGbNkSUBdufF1PzhLMA117H%2BLOeN3E7MpbmcjeMw1i917MjEECzgH3FZhcm2%2FhVsuLob0X2YwqfLOMykxfyrJZSlvDs0ZlD%2ByUf2YZLxDs%2Fwo23qvCsPJ0HjvUliP7eJihPge9whlxNqmsq9Mj9s0KbLVRVfuSqkELBoCuuytlmIM9EQ04GFWT50oaZyyeptPdxe2ibC1M5rRqOJ9BN6vllvK189jFuXgiZ8UcHuM%2BYUxurWxDHvXbab0b5CVSn0Ul6Prr1NBZMYNU%2FaHP%2FhXsUjIKB2j9QEvGjezBS9VD9IYNiw1twDobg8f%2Fl8pZS4TfKlsqHjD9VpKDR%2FuVWfE4c%2BaGw2jxNAbOT%2B433yJadzCraMD1rOaQ%2F5pa4mOaEUKPS4pl2Kap3POIC%2Bg1qHkApu3Yaspb7qOm9nKgS6IAnfwR4GmxFR50%2BjS00hr12C05QuVrhJ2xuqGzJ0C5%2B7nSyQdKA8otrIM36CoVh78zUxW49cNVl5PAcTXuTB%2F%2BGjihb0lbaqlfexF3pv3FV3bo1xt9nGkJAz70pXQWS42JQq%2BDkVp%2Frn0r7eJTTl4EO6Uw7PbawwY6pgERWay4AH2ImagfuD7ADZF2HusD7dI2mwEvc2aHyqEy%2FIq13SjK%2FxK9NyCgg9LQWulRcnCSaEkQ8hCPWadVGx082MOamPQg5Zg4ZgktxUi7GD%2BqNViXkHWfAY%2F5rTrI7%2FLRbYBsw3NJZmbF%2BFzefJkF6ED3nBaZdBw5%2BtiCAW456wKw311ZeHjJTZG4MIf8QStGodW8wX9krgq%2FDsE4HUUXLBEkumVX&X-Amz-Signature=532f316fb7b8c17978ad3f826afd8036fba0701bea6196514ee02077fe9734ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KV4QCT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIE2ruWoLF3z600pFJLD9Ke7q81FOKcyGrN2SyZCQoVSIAiA%2BiKvbZkM0uDlwPaJtVVS7m2br5OEiQzUEoK8JnYBibyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl%2B5i2AIkS%2BQu5bDTKtwDER%2FAC450BGBXINARnjdD9t0A6cY%2FxHPKAvuLUCbkc4x8zIBUBWyIpxWVQDmGbNkSUBdufF1PzhLMA117H%2BLOeN3E7MpbmcjeMw1i917MjEECzgH3FZhcm2%2FhVsuLob0X2YwqfLOMykxfyrJZSlvDs0ZlD%2ByUf2YZLxDs%2Fwo23qvCsPJ0HjvUliP7eJihPge9whlxNqmsq9Mj9s0KbLVRVfuSqkELBoCuuytlmIM9EQ04GFWT50oaZyyeptPdxe2ibC1M5rRqOJ9BN6vllvK189jFuXgiZ8UcHuM%2BYUxurWxDHvXbab0b5CVSn0Ul6Prr1NBZMYNU%2FaHP%2FhXsUjIKB2j9QEvGjezBS9VD9IYNiw1twDobg8f%2Fl8pZS4TfKlsqHjD9VpKDR%2FuVWfE4c%2BaGw2jxNAbOT%2B433yJadzCraMD1rOaQ%2F5pa4mOaEUKPS4pl2Kap3POIC%2Bg1qHkApu3Yaspb7qOm9nKgS6IAnfwR4GmxFR50%2BjS00hr12C05QuVrhJ2xuqGzJ0C5%2B7nSyQdKA8otrIM36CoVh78zUxW49cNVl5PAcTXuTB%2F%2BGjihb0lbaqlfexF3pv3FV3bo1xt9nGkJAz70pXQWS42JQq%2BDkVp%2Frn0r7eJTTl4EO6Uw7PbawwY6pgERWay4AH2ImagfuD7ADZF2HusD7dI2mwEvc2aHyqEy%2FIq13SjK%2FxK9NyCgg9LQWulRcnCSaEkQ8hCPWadVGx082MOamPQg5Zg4ZgktxUi7GD%2BqNViXkHWfAY%2F5rTrI7%2FLRbYBsw3NJZmbF%2BFzefJkF6ED3nBaZdBw5%2BtiCAW456wKw311ZeHjJTZG4MIf8QStGodW8wX9krgq%2FDsE4HUUXLBEkumVX&X-Amz-Signature=fa5e6f752bde19f9c0a416e1874b6fea24a99454e908425e4097ea09041fa497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
