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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4UUHSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Hyr2%2BputTUUR2bL5bP%2FetPM7YL75z9kJQKZONbno6wIgbEdbcTJzlCrVpKbdr7e94FYnewKYb400840jS9g1AbAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDP4t4SKBIhtKbb9V5yrcA%2BzDPJ1XGQ315vsWkGmKH8be5SQ9Cp%2BCkgs1YEdQbQOl0dqkwaReABXskPLeuOkJ1nKXd0NnhwddGWeEn9cFuwhDUTRXQAHlmE4vgUB4Mo5KRfL0ffSFWCOaVaABJo3p%2FBsgynHa6U3qdE6KOHlFoFo%2BEDXy0jwhVDptvlmVbCOf6%2FTkinXWUhVEdCWvNlUJWCOi8lcus1%2Fgc13AVWQla8ANV%2BGeBuSF2FuBQxw1bwiiwNJS6Pjp3Cs%2FNfv4yDY%2F%2BRoukdzP9La1vNMwReGtsJ0aXjjOk%2BZM6xeEh8AEx7UPd9%2FBsWkblGwSj2iXg6Rs59r0yd9kNoFMC5I%2B967TbIAlIndtZrhkc7YubP0B7jwBMeoqGsCF9gw1%2FGDqhgTDkt3ylNxVD1rLcCq%2BAvPP9XG9WBxtb0j9pyWvUayT2QL2S03zSWOWys%2Fjg55CSBMd9xdtwQqF5TXut9234yVl8lfKtsnAPRhABaBmZD2fE%2BLpCwEWfGIVj9PE7iG%2BV7w9DmrAiTNIY36dGGBXk4iy7F0wnIo3VYDa9pj86yJ4zWNQzaS5wa9S8Hjm2ru4WT243JuFCtZBt9VF35rQ0kglt6d7fQY%2Bj4LFjUh%2FX%2BOFG5Ualh%2FPlHVHgcaQLaVDMMKE98QGOqUBsAvuhmYeWKvon8u5jjAO4C%2FWDXffez0yVS5wDL4LDfIWijHeexvq7j%2BuQNoigjZ4SpG3sszViZu%2FByYmsdq5CiS6u4HplOn7hAKVvOMFFw3QL1MqT2sRCPx7ztEEOkhN6leicmtVh7wVF8jKIMO4gV5QQ68jIspYlPmDheTc5yqYYF89M6gvMUp%2FtHupTpzOWqhdWnTY%2BuT4YYfKPnwS%2BqB5RtRX&X-Amz-Signature=9892d64f3a897674e1e73aa9f92b8d13c6710982116d51abd2423bda9648db58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4UUHSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Hyr2%2BputTUUR2bL5bP%2FetPM7YL75z9kJQKZONbno6wIgbEdbcTJzlCrVpKbdr7e94FYnewKYb400840jS9g1AbAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDP4t4SKBIhtKbb9V5yrcA%2BzDPJ1XGQ315vsWkGmKH8be5SQ9Cp%2BCkgs1YEdQbQOl0dqkwaReABXskPLeuOkJ1nKXd0NnhwddGWeEn9cFuwhDUTRXQAHlmE4vgUB4Mo5KRfL0ffSFWCOaVaABJo3p%2FBsgynHa6U3qdE6KOHlFoFo%2BEDXy0jwhVDptvlmVbCOf6%2FTkinXWUhVEdCWvNlUJWCOi8lcus1%2Fgc13AVWQla8ANV%2BGeBuSF2FuBQxw1bwiiwNJS6Pjp3Cs%2FNfv4yDY%2F%2BRoukdzP9La1vNMwReGtsJ0aXjjOk%2BZM6xeEh8AEx7UPd9%2FBsWkblGwSj2iXg6Rs59r0yd9kNoFMC5I%2B967TbIAlIndtZrhkc7YubP0B7jwBMeoqGsCF9gw1%2FGDqhgTDkt3ylNxVD1rLcCq%2BAvPP9XG9WBxtb0j9pyWvUayT2QL2S03zSWOWys%2Fjg55CSBMd9xdtwQqF5TXut9234yVl8lfKtsnAPRhABaBmZD2fE%2BLpCwEWfGIVj9PE7iG%2BV7w9DmrAiTNIY36dGGBXk4iy7F0wnIo3VYDa9pj86yJ4zWNQzaS5wa9S8Hjm2ru4WT243JuFCtZBt9VF35rQ0kglt6d7fQY%2Bj4LFjUh%2FX%2BOFG5Ualh%2FPlHVHgcaQLaVDMMKE98QGOqUBsAvuhmYeWKvon8u5jjAO4C%2FWDXffez0yVS5wDL4LDfIWijHeexvq7j%2BuQNoigjZ4SpG3sszViZu%2FByYmsdq5CiS6u4HplOn7hAKVvOMFFw3QL1MqT2sRCPx7ztEEOkhN6leicmtVh7wVF8jKIMO4gV5QQ68jIspYlPmDheTc5yqYYF89M6gvMUp%2FtHupTpzOWqhdWnTY%2BuT4YYfKPnwS%2BqB5RtRX&X-Amz-Signature=854473ecea97dfc68994f5731ec4987090275ab0c19db0d748a589164c63201c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
