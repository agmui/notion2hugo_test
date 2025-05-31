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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3CTJUQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRohg3yhiF0J63M%2Frg3bMK0L2IVJo4ltHtAUlSD%2BlPAiBLkaoLqg2bnOAbgCEmdpuyQxhoHzOuTK7sjrDciO3reiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhr%2BFFzBENMOR%2Fq8hKtwD5qAFKRqjCUBocPkXUTeTqBd0DHs%2F2Myns2ipo9SHZZcz55PVWZYsCbhGw4PcgfzYMiThlEv9zjNLCRpOcsAnwKwxBbLAirIGhMnWetOSyQFTTApvDSB%2FuaD0BswwA0eJm7t6gK27JMyCXGPWEXGIVVLduPMHvQLiUCZaVbDXb2UfZRgTsgTDwrv4cEptF%2FFrs3IXb5iMnMMNKn9hf4NpB7lONB9qOSYahkmX7Q8ELDIko5ukLI%2BEJQNAJHz2F1gS5%2BOZdRISrLLO%2BGsm0tzO0JaB5OXrnd42zWCPKmQ1WZ30z2qfA2iICSBEWDe7TYH9Edp8%2Bkr40czGzlZrKh57xgHZLfTg38WV7OfFpe0Dp9JpwNepofvV0J9z8yAjpy1F75h5fvf%2BOIjd3g8mbtZRbRmuqJbt7TDuSvBxkKz77e%2BZlbUJwOUn%2FPD95SbXwA8ujHFISRH7YBdbLWYbNAdf3wdXYuFIsf7iQXuxxQGagVBs2fMNjX4TReHOEzf1x3%2Bfhz9IruJhCwsHPv7Cq0Lvx3mJ2qXl2NRdhlG66SOqVivRW6mPfuuGnC4QZKVvENkmhU7MyX7nCUynQFFOFJGXryprrDs6Pd0N%2Fi8oL5uUmw15Vrf2O7elssPlWsgwgLPqwQY6pgFmfcIE0hE3xnQAmXvua46zQe0U%2F0Y8k7C5VFshMQ%2FRcoEJzTjjjPLPX0F6IrYs%2BvJENpMqw9DGeOi3ZxwQEo8PonZe9zIMyoecO%2BoR7vGAMctA3vNikYxEvXNdcwRmXiDXzCvxK5fkgf3V0CqdYW2j9PBLjzN%2FVVJeNsYIoIJhLqeTk6rrTH2pGq2E%2BWS5PoG2OG906AFQfXt40tWfstMtX%2BcyK5kl&X-Amz-Signature=f131e71b0137dd3d55ce3392f31e0664f5731def8c6d9a198029bc43f6702683&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3CTJUQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRohg3yhiF0J63M%2Frg3bMK0L2IVJo4ltHtAUlSD%2BlPAiBLkaoLqg2bnOAbgCEmdpuyQxhoHzOuTK7sjrDciO3reiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhr%2BFFzBENMOR%2Fq8hKtwD5qAFKRqjCUBocPkXUTeTqBd0DHs%2F2Myns2ipo9SHZZcz55PVWZYsCbhGw4PcgfzYMiThlEv9zjNLCRpOcsAnwKwxBbLAirIGhMnWetOSyQFTTApvDSB%2FuaD0BswwA0eJm7t6gK27JMyCXGPWEXGIVVLduPMHvQLiUCZaVbDXb2UfZRgTsgTDwrv4cEptF%2FFrs3IXb5iMnMMNKn9hf4NpB7lONB9qOSYahkmX7Q8ELDIko5ukLI%2BEJQNAJHz2F1gS5%2BOZdRISrLLO%2BGsm0tzO0JaB5OXrnd42zWCPKmQ1WZ30z2qfA2iICSBEWDe7TYH9Edp8%2Bkr40czGzlZrKh57xgHZLfTg38WV7OfFpe0Dp9JpwNepofvV0J9z8yAjpy1F75h5fvf%2BOIjd3g8mbtZRbRmuqJbt7TDuSvBxkKz77e%2BZlbUJwOUn%2FPD95SbXwA8ujHFISRH7YBdbLWYbNAdf3wdXYuFIsf7iQXuxxQGagVBs2fMNjX4TReHOEzf1x3%2Bfhz9IruJhCwsHPv7Cq0Lvx3mJ2qXl2NRdhlG66SOqVivRW6mPfuuGnC4QZKVvENkmhU7MyX7nCUynQFFOFJGXryprrDs6Pd0N%2Fi8oL5uUmw15Vrf2O7elssPlWsgwgLPqwQY6pgFmfcIE0hE3xnQAmXvua46zQe0U%2F0Y8k7C5VFshMQ%2FRcoEJzTjjjPLPX0F6IrYs%2BvJENpMqw9DGeOi3ZxwQEo8PonZe9zIMyoecO%2BoR7vGAMctA3vNikYxEvXNdcwRmXiDXzCvxK5fkgf3V0CqdYW2j9PBLjzN%2FVVJeNsYIoIJhLqeTk6rrTH2pGq2E%2BWS5PoG2OG906AFQfXt40tWfstMtX%2BcyK5kl&X-Amz-Signature=527b058a8455a2ce37c576937c0f3dafbd981157efcde4d845b6b8c9ee81e78f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
