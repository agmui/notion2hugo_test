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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMVLW5CB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV0o%2B6xReUf4V6xiSpn21qf43aZSTLgLWtRX3ViArfIAiEAvCife50XyhEfNUqgsNp%2BYoa93gNUOJt8Jw%2Fi8K6%2BnsQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKDXj5grvLPvEOO1wCrcAyJCJi%2FlPSMmcmEOmRbXr5fkLo4P347Ouy3PgQU6t%2B%2BLfukfssAHMpcFKDG23wQGH2w5o3wS6VEkN4f%2Fvx2h%2BCY2TQka%2BCMCysjZAMm%2B3NS1lecwzpraB1hEYK1VMAmSUzWBgxS73Dto8w2PPWOFoC%2FjXh3N9%2BaVMZf7Ioo2zqGuDlmzX3dIs2Vfz4qYlsFCR7WCsbI41T9zveSbf3nMLXhCir1ztKC%2FFbdYgSOg4Ois9gKa0HZuSZ4%2F42GPiY%2F%2BUuihBbfxid3g97MTFSGTj1lSpSMO3Q%2Ba2qEtRnfmso6wl3uh4VB4WpFX%2Btp3Wzq%2FeSSTWDnPuCt7C7lzMuILQ%2BXTeATacvXqRadF2Ab8DSJmzk5HQC1zmH%2FUztDGi%2B%2FjqI7weNF9HsLt3qZEoTvz2Pu8P8WvRUAjs4WXJTvtAWUermVMY3iRFzYVh3X7XwewKj5q8azkdHUjpl3WB1kHwL0ZrYCEzXYqMUstv95GO6mVmaPn93aScEYme2MjgbReSAPgGcYuEGw5cqYsY2M3TBM2RphcMBcxYFDgi84N1KgAqsMP4PB%2FqiAHwgMUJS1bydeM583WP5zAtuNG2cYEpsnhEVoGUDYjJDfViZ%2FB0LUFbU0dCOB2ct7E2k3fMK%2FZvsQGOqUBDOrCUYb98H1BKOz38ICDYkaQBaZgyr1fwgTub4ybhQH4mlP4DI4zcWsSKnot14ZJgHYJLzgsiglHTiLK%2BedJKumMAxZrV%2FnLBEZcQyAQTkfZ%2BS0YCzuuSp0FPbajccrRYiKQa9z7S9%2FAf7E%2F8J5pCjvh9GVZTNdpSKKMzfCC%2Fq3leJIPKjOfUqa7DKWr%2B12GE17yVL0VDUekYsvDDe7e3FhWzwyG&X-Amz-Signature=1cbebdf4bb37e80e11d5c6597658535ae5f242a0f9778b375280a4015857484c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMVLW5CB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGV0o%2B6xReUf4V6xiSpn21qf43aZSTLgLWtRX3ViArfIAiEAvCife50XyhEfNUqgsNp%2BYoa93gNUOJt8Jw%2Fi8K6%2BnsQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKDXj5grvLPvEOO1wCrcAyJCJi%2FlPSMmcmEOmRbXr5fkLo4P347Ouy3PgQU6t%2B%2BLfukfssAHMpcFKDG23wQGH2w5o3wS6VEkN4f%2Fvx2h%2BCY2TQka%2BCMCysjZAMm%2B3NS1lecwzpraB1hEYK1VMAmSUzWBgxS73Dto8w2PPWOFoC%2FjXh3N9%2BaVMZf7Ioo2zqGuDlmzX3dIs2Vfz4qYlsFCR7WCsbI41T9zveSbf3nMLXhCir1ztKC%2FFbdYgSOg4Ois9gKa0HZuSZ4%2F42GPiY%2F%2BUuihBbfxid3g97MTFSGTj1lSpSMO3Q%2Ba2qEtRnfmso6wl3uh4VB4WpFX%2Btp3Wzq%2FeSSTWDnPuCt7C7lzMuILQ%2BXTeATacvXqRadF2Ab8DSJmzk5HQC1zmH%2FUztDGi%2B%2FjqI7weNF9HsLt3qZEoTvz2Pu8P8WvRUAjs4WXJTvtAWUermVMY3iRFzYVh3X7XwewKj5q8azkdHUjpl3WB1kHwL0ZrYCEzXYqMUstv95GO6mVmaPn93aScEYme2MjgbReSAPgGcYuEGw5cqYsY2M3TBM2RphcMBcxYFDgi84N1KgAqsMP4PB%2FqiAHwgMUJS1bydeM583WP5zAtuNG2cYEpsnhEVoGUDYjJDfViZ%2FB0LUFbU0dCOB2ct7E2k3fMK%2FZvsQGOqUBDOrCUYb98H1BKOz38ICDYkaQBaZgyr1fwgTub4ybhQH4mlP4DI4zcWsSKnot14ZJgHYJLzgsiglHTiLK%2BedJKumMAxZrV%2FnLBEZcQyAQTkfZ%2BS0YCzuuSp0FPbajccrRYiKQa9z7S9%2FAf7E%2F8J5pCjvh9GVZTNdpSKKMzfCC%2Fq3leJIPKjOfUqa7DKWr%2B12GE17yVL0VDUekYsvDDe7e3FhWzwyG&X-Amz-Signature=7ed7c23b7f0c0d2c280ec41fe0d3d969366a5c62985c80aa83a8a57de7be8244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
