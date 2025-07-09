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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCH4KB64%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13sVL7B%2FUAX%2BuezVftH33A3fzrImjaKMwsH9JNJEiSgIgGHR2vWHgZC2S7iq%2BhoSihRbWR2aCSE3WNR6wDp7t5DEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0GyEu7EZOFfrT7CircA92OhSAtgSAwtpATHAfr8jY7rp02X4y2PvL4cnCdu3RJF3b%2B0LDSXFit%2BWcgaSuDmU3l8f3HP68kMSMRYmkm5EzUgFMH8Z4ycuUYrlboBQuvfqZn8gI6u5nY639blnsV1hyXP3EEt5aEHlfSDQnEy2wCFQWaJ8FWlJ%2FUEr3I48sZxjlh2sGHKFVycQKYh0Sft2YB%2F%2FdL8dvF%2F7FcqPFfwMjxY3qTXgtgW1L1RIjIPNeAr8nRzYyTXjecCoedX1iuloJ84Vgk5LgVSNifjF3q4MTO9xTJjvFl3Igxr0wz67vQmoiF0TYDyfSpRg7rO2PI4sFGeItXA4TUJDMsoO51S6W4d73Zd4WSff2K4dCYZRxGw7ougdooUJUFIsAy980z3RIoWD4Ib1pkMHHhwI6ix9e2W2pzZ2TU9dbwEfCqfdufzx%2BLem0Dn0Faj1VMTkEi1Qw48Z8bsW81%2Fxl2IK7%2FQqJEKNfV4XraRScDy%2FnagBGQXR9DRwTBpr%2Bph41MnwDlassUE1yAwEyszB5O1curopfi6mQMpZLYsvzIzg47%2F1%2BwLNTVY%2Bsu%2FeW7xsRBfq0PoxpjaF75ikn3WIDwdweHIdfDfdS5SLJwvdUwU2hc1za3ORiD5dvCK4EsEy27MJfvusMGOqUBdclxOtvupjVIAxlx3yI6WLNeQOXShKaMULDs9pUZu8PTqM82dRfQWG%2Fw6tXbBxFDkSqqGNX9v8%2BCSgruikXT5PNZPp01ihd2yPRGExa%2Foww38aHRcvxqFSn6k4LukTWTljvTjeK6fYovVgc8Eo6JxfnY2zoBZml1na126Efc0N7EiwK4h9WalSllyVbDIlmCut9WrN2VUTIVAcXeGfYHnPhkZKx2&X-Amz-Signature=6000270d0b328bc00ce6dae13a7db31070f6e16e701fbb2d4d3b953e3dc0180f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCH4KB64%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD13sVL7B%2FUAX%2BuezVftH33A3fzrImjaKMwsH9JNJEiSgIgGHR2vWHgZC2S7iq%2BhoSihRbWR2aCSE3WNR6wDp7t5DEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0GyEu7EZOFfrT7CircA92OhSAtgSAwtpATHAfr8jY7rp02X4y2PvL4cnCdu3RJF3b%2B0LDSXFit%2BWcgaSuDmU3l8f3HP68kMSMRYmkm5EzUgFMH8Z4ycuUYrlboBQuvfqZn8gI6u5nY639blnsV1hyXP3EEt5aEHlfSDQnEy2wCFQWaJ8FWlJ%2FUEr3I48sZxjlh2sGHKFVycQKYh0Sft2YB%2F%2FdL8dvF%2F7FcqPFfwMjxY3qTXgtgW1L1RIjIPNeAr8nRzYyTXjecCoedX1iuloJ84Vgk5LgVSNifjF3q4MTO9xTJjvFl3Igxr0wz67vQmoiF0TYDyfSpRg7rO2PI4sFGeItXA4TUJDMsoO51S6W4d73Zd4WSff2K4dCYZRxGw7ougdooUJUFIsAy980z3RIoWD4Ib1pkMHHhwI6ix9e2W2pzZ2TU9dbwEfCqfdufzx%2BLem0Dn0Faj1VMTkEi1Qw48Z8bsW81%2Fxl2IK7%2FQqJEKNfV4XraRScDy%2FnagBGQXR9DRwTBpr%2Bph41MnwDlassUE1yAwEyszB5O1curopfi6mQMpZLYsvzIzg47%2F1%2BwLNTVY%2Bsu%2FeW7xsRBfq0PoxpjaF75ikn3WIDwdweHIdfDfdS5SLJwvdUwU2hc1za3ORiD5dvCK4EsEy27MJfvusMGOqUBdclxOtvupjVIAxlx3yI6WLNeQOXShKaMULDs9pUZu8PTqM82dRfQWG%2Fw6tXbBxFDkSqqGNX9v8%2BCSgruikXT5PNZPp01ihd2yPRGExa%2Foww38aHRcvxqFSn6k4LukTWTljvTjeK6fYovVgc8Eo6JxfnY2zoBZml1na126Efc0N7EiwK4h9WalSllyVbDIlmCut9WrN2VUTIVAcXeGfYHnPhkZKx2&X-Amz-Signature=f4280c5a68ca14bc31f9565f604b1311f7621e9c484281dcfdc763d7ad51d161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
