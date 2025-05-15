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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIRBMHT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFPFBGdoOWTruo4Xs%2BWAr%2FT6m%2FgtIUF6Arjz7GALHgryAiEAjBlAmw530KHKxkG5ErpNh0Hac%2FkeNebP%2FSRCsAbWJnQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLeU8nd1abD9o7H09CrcA9BAFrc8PSCfCGFEoYbY7TjWpyQij6D%2FOlHPQqvyIDZLWan3bBtrei%2F1HLkNAvTy4%2FwR2mO%2BL6C42v8EdXbEA94ypcEY%2Fr65yfD90jGvglhJ9TOcqfAVov2aYXZGyrF3r2U7IrnFHcjo%2FiIFTV1jw7tTRyXm3oJ2DAnDCHFC6BGDz2PZy%2F%2BMgVRtiudWkux6RHCTyHZpP6SVcUU86tVuq%2FW651ZE5IyWNFOI2rDml5QDr3EcCOlCDaSNen5DA9jLVvrjRnIYgn7UwgUArqNBVIvUVFqFqRtdm7DVNIobTp%2BF8p%2BE1XPZ5avMJdRYCQXDsH3vo5EsBFyOsNf8vFzSKCso%2FFum3iCqGSKubc2ENjHH8PWQHf7dpaTPyJkWJmq4BXczedmn%2F6nn%2B2nnI%2BXcGbhglLm4YXyd4uFX6kLBLQ9YEksw6CPbGDFkaPGwkojPIS3xtXy71XkXUHDkBuSp%2FCi4h5%2FGBBfGjG9iRgWZ2HJT0yku19yebuPgGg4B7LdRXVIAE%2BIbIu6xSBYDJljvk%2FYNOtCGyVRBj9%2BQXDG22Ethf5E7SXoZEgIMt4YLq9VL7CQvbTwNIAhkej3MBWOSrs%2BzZ7EzhnQW5NetHGQKg3Wau0Hj03V2dffPcDW%2FMNj7mMEGOqUB6FXu9v6T%2BBZ3TEP8ejFKpXew4wRbc9A5%2F4hRFNZF3U6nQJtjo640UqcQkQiV%2FKwJwXxEG4i5l%2BgNFcg%2BrgRK%2FXzqOd%2BgM32GwAizEpwuDPcVNVANkD9FOzkoePmeqXidEC9kmbeThHwphtJ5Gv8ik7Cyb5%2BpG6Lp9Od7e4D81iHMCR3sLKyQSVgZuvj%2FCGtyeK3v14dPYD4uliXubdr60ecV%2FV4f&X-Amz-Signature=38cfce0d999fe81a7611036f0ce3c45a96ee328e65bd6821bd37116710e9bb38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIRBMHT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFPFBGdoOWTruo4Xs%2BWAr%2FT6m%2FgtIUF6Arjz7GALHgryAiEAjBlAmw530KHKxkG5ErpNh0Hac%2FkeNebP%2FSRCsAbWJnQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLeU8nd1abD9o7H09CrcA9BAFrc8PSCfCGFEoYbY7TjWpyQij6D%2FOlHPQqvyIDZLWan3bBtrei%2F1HLkNAvTy4%2FwR2mO%2BL6C42v8EdXbEA94ypcEY%2Fr65yfD90jGvglhJ9TOcqfAVov2aYXZGyrF3r2U7IrnFHcjo%2FiIFTV1jw7tTRyXm3oJ2DAnDCHFC6BGDz2PZy%2F%2BMgVRtiudWkux6RHCTyHZpP6SVcUU86tVuq%2FW651ZE5IyWNFOI2rDml5QDr3EcCOlCDaSNen5DA9jLVvrjRnIYgn7UwgUArqNBVIvUVFqFqRtdm7DVNIobTp%2BF8p%2BE1XPZ5avMJdRYCQXDsH3vo5EsBFyOsNf8vFzSKCso%2FFum3iCqGSKubc2ENjHH8PWQHf7dpaTPyJkWJmq4BXczedmn%2F6nn%2B2nnI%2BXcGbhglLm4YXyd4uFX6kLBLQ9YEksw6CPbGDFkaPGwkojPIS3xtXy71XkXUHDkBuSp%2FCi4h5%2FGBBfGjG9iRgWZ2HJT0yku19yebuPgGg4B7LdRXVIAE%2BIbIu6xSBYDJljvk%2FYNOtCGyVRBj9%2BQXDG22Ethf5E7SXoZEgIMt4YLq9VL7CQvbTwNIAhkej3MBWOSrs%2BzZ7EzhnQW5NetHGQKg3Wau0Hj03V2dffPcDW%2FMNj7mMEGOqUB6FXu9v6T%2BBZ3TEP8ejFKpXew4wRbc9A5%2F4hRFNZF3U6nQJtjo640UqcQkQiV%2FKwJwXxEG4i5l%2BgNFcg%2BrgRK%2FXzqOd%2BgM32GwAizEpwuDPcVNVANkD9FOzkoePmeqXidEC9kmbeThHwphtJ5Gv8ik7Cyb5%2BpG6Lp9Od7e4D81iHMCR3sLKyQSVgZuvj%2FCGtyeK3v14dPYD4uliXubdr60ecV%2FV4f&X-Amz-Signature=5b7eb042e9a5cdc7428558deefb6209016bed3298c73a74a628715b580f905ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
