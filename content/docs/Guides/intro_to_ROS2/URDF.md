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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WIQWBD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCGWLsMEEKt5Pc0Ts3CjZAEeqg5VYRqMvTbRrlyL20tNQIgSMWXZPWvN4SJjB63yoty6UCln2MPiTJsWPxJdyxkKUUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMwc4amXIfWCUwMDaCrcA3UEZJkIIJ%2B8O788vJRNuHu9qtg%2BZi4r8wSQI2%2ByhNz1M1Yi2N2BVcgF5%2B%2BBvh7Qh8Y3WrsnVhPLLwrAkPhixzpHkJaZYqPZPo97EWBobLWsfetproyzDBicNn42TLxZsLCAeur6xYhWTjKMWWel0rWNfFfoKKeP4n55xVT2qH%2BKBnASgqGtUFtHd5Rb5HmD8XKwLjEv7%2BwolILKUKemPYyQo20N5GFm1OUzYFe676K%2BcrtCDYvHlAItuPUvfo7zyRkvpIYbJzeOulZZSG5LdTeukmvXpR1F1i84n0fZO%2Bdd5mBIgykxGhcclfE22zNE%2F2IPDW6CX1Ra0AFFaPXDUorkXoS%2Ba%2B3XPWiLzFfj%2FI2oVog4Mi0lAK87AiTKWy19Z1hRZU7p%2BXL1xoSqw%2BIosxnc%2Bm9Gl3h%2B7VTMNSOBHClu%2Bc5pa2zo2%2BQ%2Ff9Rib0lK7VkW9HWOrGFveHdJzFF2zmYCOVV7pzjof%2BQxisNlYrUjEAGdjundgDnzD1XQ%2BXF%2FfQEQDbVprQHVHkIELh6CCB%2FcEaHGmMXhZDvfeqWx8sNHK4%2BI5rG4G%2BhSlX1BcFRQMNKwbzzr0n8KK3iy%2FB5dOR4LR3RT6VV3WwucyTkNoQLn1ybJBHtYbHv7zqKUMLrz5MIGOqUBqCfmPuLprAYPRqYWyvE6Zpv3P0wvstAxo0ilWbNA9Ley6mkory1gtOhM7k2Ci6ByQjkEbQp8UBG9ElovVeWj5kHhqb26MBj1yzqTVKvXrIOJxgqTx3kHTGAX23kKdd%2BvWeRVawCaOBP3qAeYwOs%2B5PRsiGMz68oAtUxN8PVhfxPWk94rLApf6CHfs9irOy0SLDM9nfthBNQc%2Bb0%2BJyphIHK%2B%2BuVf&X-Amz-Signature=fec53bb49466164284888b60eaa9c7ebe3bf759b8694a96b164c46453fb22e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WIQWBD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCGWLsMEEKt5Pc0Ts3CjZAEeqg5VYRqMvTbRrlyL20tNQIgSMWXZPWvN4SJjB63yoty6UCln2MPiTJsWPxJdyxkKUUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMwc4amXIfWCUwMDaCrcA3UEZJkIIJ%2B8O788vJRNuHu9qtg%2BZi4r8wSQI2%2ByhNz1M1Yi2N2BVcgF5%2B%2BBvh7Qh8Y3WrsnVhPLLwrAkPhixzpHkJaZYqPZPo97EWBobLWsfetproyzDBicNn42TLxZsLCAeur6xYhWTjKMWWel0rWNfFfoKKeP4n55xVT2qH%2BKBnASgqGtUFtHd5Rb5HmD8XKwLjEv7%2BwolILKUKemPYyQo20N5GFm1OUzYFe676K%2BcrtCDYvHlAItuPUvfo7zyRkvpIYbJzeOulZZSG5LdTeukmvXpR1F1i84n0fZO%2Bdd5mBIgykxGhcclfE22zNE%2F2IPDW6CX1Ra0AFFaPXDUorkXoS%2Ba%2B3XPWiLzFfj%2FI2oVog4Mi0lAK87AiTKWy19Z1hRZU7p%2BXL1xoSqw%2BIosxnc%2Bm9Gl3h%2B7VTMNSOBHClu%2Bc5pa2zo2%2BQ%2Ff9Rib0lK7VkW9HWOrGFveHdJzFF2zmYCOVV7pzjof%2BQxisNlYrUjEAGdjundgDnzD1XQ%2BXF%2FfQEQDbVprQHVHkIELh6CCB%2FcEaHGmMXhZDvfeqWx8sNHK4%2BI5rG4G%2BhSlX1BcFRQMNKwbzzr0n8KK3iy%2FB5dOR4LR3RT6VV3WwucyTkNoQLn1ybJBHtYbHv7zqKUMLrz5MIGOqUBqCfmPuLprAYPRqYWyvE6Zpv3P0wvstAxo0ilWbNA9Ley6mkory1gtOhM7k2Ci6ByQjkEbQp8UBG9ElovVeWj5kHhqb26MBj1yzqTVKvXrIOJxgqTx3kHTGAX23kKdd%2BvWeRVawCaOBP3qAeYwOs%2B5PRsiGMz68oAtUxN8PVhfxPWk94rLApf6CHfs9irOy0SLDM9nfthBNQc%2Bb0%2BJyphIHK%2B%2BuVf&X-Amz-Signature=cd11623a18a16dfe5f77a8c76af2a613d276cc271983405dedc050bce9cef184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
