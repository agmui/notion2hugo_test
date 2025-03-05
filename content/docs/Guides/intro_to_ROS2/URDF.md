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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF7ZNYT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgoWfVA%2FroWE%2BG2QbiQI1%2FMtx7kSGd0M2Zw%2FG0jHRA%2FAiASaDwk0yH41q7sWjIGqeSB9%2BUvPl8%2FF42PvTUlKUGk6yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ks4gvfVaEUbcVFxKtwDNchy5NAqCh%2BihBQvif0bsv50XNKpkwDOpNY9pqQ90Vc6TGRUcRG5mrr9vNFcTnLGhy8z9Vvu2nJ8nwQJMoIz0tSyAA3GZiwNJOtLxLrsFCjxBDHJrBtAAWaByiIZem5GDJQNxAZ0DuQ7ilW0aj6g5L6r%2BqW0Z%2BOJ2du5pIO7VGf16h5uo1nxDJ0OwAPXYfO9fls4xQaD300Sctn8CBGidVT9ksfHHY9CnjC3k0IiA%2FU0%2Bv6BkxLHcamTsqQUBwZi8NtaIhFij9d9%2FOik%2FzGrrjxQvCsrQVFIN7dLO12XpflUw7H%2BF1vxUm%2FK9aMC6saigUnILDaBp%2BBhd07Frb07WckEgtn7tPk8o%2FJklnrLoMyHS9up0nI1U%2FD8x4SuoeZoFXFkG%2Fa2jL7xquu7b%2BbXB2Cm38iIub3GXBkWRvxsFpg51m%2Fm74cGPCxlEE1VhwVJ1nP0UymppHPGUN8OmwHwd5%2FIfWmIvPVQAfjNznFPvd6vFXrX83LtF5ZIOgV%2BI7XFcodjUmh6K1sDZaLLJVHMWiR05C7b8SJTvhlX75493JTHayXgAnTmAeDNAoeAD8fLqtU4m%2BX5mpVVJpr0hHf5ZTdPOrbHOKg6c83h7ijuxih25zJih%2BCyLb3ISegw5eaevgY6pgFDGzsiw7LIDeDM55WaWqCRzRN39fTwO1MMo5vP9mlO1l82Iqlspvb4wC3R3P%2BanPMd%2BEF2lKl99Uf2581vEo8VhxgFgCQ1If6Ha%2BF7Tm%2FAZiSRfl7S0dt9ej41Xd7It4wL3Tiyrjag%2B%2BKf8F782wM9blDAsm4Aa%2F6T0LSWGmcEASvpNKta8J5p6eo9PGyen%2FDnzl%2BIn6cyYhR5VsmciOCc0yxDYTB0&X-Amz-Signature=f91529238102096369cc2c7356a1e64ebac9a8b73000cf85dac83cd976b66b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPF7ZNYT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgoWfVA%2FroWE%2BG2QbiQI1%2FMtx7kSGd0M2Zw%2FG0jHRA%2FAiASaDwk0yH41q7sWjIGqeSB9%2BUvPl8%2FF42PvTUlKUGk6yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ks4gvfVaEUbcVFxKtwDNchy5NAqCh%2BihBQvif0bsv50XNKpkwDOpNY9pqQ90Vc6TGRUcRG5mrr9vNFcTnLGhy8z9Vvu2nJ8nwQJMoIz0tSyAA3GZiwNJOtLxLrsFCjxBDHJrBtAAWaByiIZem5GDJQNxAZ0DuQ7ilW0aj6g5L6r%2BqW0Z%2BOJ2du5pIO7VGf16h5uo1nxDJ0OwAPXYfO9fls4xQaD300Sctn8CBGidVT9ksfHHY9CnjC3k0IiA%2FU0%2Bv6BkxLHcamTsqQUBwZi8NtaIhFij9d9%2FOik%2FzGrrjxQvCsrQVFIN7dLO12XpflUw7H%2BF1vxUm%2FK9aMC6saigUnILDaBp%2BBhd07Frb07WckEgtn7tPk8o%2FJklnrLoMyHS9up0nI1U%2FD8x4SuoeZoFXFkG%2Fa2jL7xquu7b%2BbXB2Cm38iIub3GXBkWRvxsFpg51m%2Fm74cGPCxlEE1VhwVJ1nP0UymppHPGUN8OmwHwd5%2FIfWmIvPVQAfjNznFPvd6vFXrX83LtF5ZIOgV%2BI7XFcodjUmh6K1sDZaLLJVHMWiR05C7b8SJTvhlX75493JTHayXgAnTmAeDNAoeAD8fLqtU4m%2BX5mpVVJpr0hHf5ZTdPOrbHOKg6c83h7ijuxih25zJih%2BCyLb3ISegw5eaevgY6pgFDGzsiw7LIDeDM55WaWqCRzRN39fTwO1MMo5vP9mlO1l82Iqlspvb4wC3R3P%2BanPMd%2BEF2lKl99Uf2581vEo8VhxgFgCQ1If6Ha%2BF7Tm%2FAZiSRfl7S0dt9ej41Xd7It4wL3Tiyrjag%2B%2BKf8F782wM9blDAsm4Aa%2F6T0LSWGmcEASvpNKta8J5p6eo9PGyen%2FDnzl%2BIn6cyYhR5VsmciOCc0yxDYTB0&X-Amz-Signature=5ab0f37b8cb4dfc1172ad8f73729a39e58c0a2cdd6a07cd3a00d9bcb9d374c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
