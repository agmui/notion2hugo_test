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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOP53Y6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHciN167otdiORz77UCx7Bc77eHPAzGgTRF0BnmlEkSQIhANRL5IuVSRbf4j0kxMWVhkeMRCzLXaUAzv26Qv1fECsCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDqaOfuB6QWoxIEY4q3ANLysmLvBYz7zb%2BBhv2rlRnCaPs%2BRogBD3%2BG2JMFR1ORgRVZwaosnouEmGkH%2FT%2B6OaXqv8LpMZDT%2F1RSNjdMPPVzR22CWiq%2BCNfZOJjQImzYVhpv1LdK8HCYHybXYPSY0q4UAafE2RYQZYQeIifBPtOwumkBXQQkua5eGoCzSjmrJLmjpdVxCswJ9AJ87IUD2nU3mzmiSOaOmnkzEodvHvy8XsZ1UCPkr5MFcc4mvSHfEsFjlASoAp%2BYwaxcV4oRybAvuFudUTw%2BHt%2FrsFKDrP0ugL6OtY2vWvR3xLG3jPIM16hZLTRNL7Y9ZCeY7P8qnYmzcKQt08CPaUcA56GtsWtC%2FgJ4VZYlIMBgV89tICdOj00RZ6%2B%2FCNRRuY1HLVVtiie%2Fodl0ePjGchBS%2BKlNjgsysRRibFIl2fSJ%2FRVqQlqShiwOCOfmcdXQxCzNHHrU0A%2FuzF9emekUQ2eFgRHQje5VuZbkAkFkqJ5LRyyRMtQwUFK7RjTzapuMaorOt6mG2XBN68vTwFlPPuUcvMooJqgjU0WdH%2FHfln7f9A1NRXh0GeE62yHxQW925VxHXn2dT2Y5WTI2d19Cr1qademLpLB%2B2COQgOWKs0q3WbHpwzui8K7VtJjGjOAv8zN1zCLsczABjqkAV2a8I2%2BHlJD%2BbfzxqGWsKUkNUrGnkKPPsDMfJymNwSqaJBK%2FcxUxLGt%2FIpmKnSwGQuSd%2FVt4BTxyvWbIXsnQ49BHkDjD863fu%2FLrJkX6GPi8OuR5AEGbMG14P0T7mfnr45md%2Fap5LvOrhS5deasqBq3yiWac0t2cPgQxX8Z%2F005%2BE2%2B7JvcWnHtwPv4z%2Fjlikvb0C0PBMkdrUtv1rhQ3F0CiLrN&X-Amz-Signature=2cadf048525e4eca507bc7ab6d5844a9792f81215babd0846ee982389f935236&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOP53Y6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHciN167otdiORz77UCx7Bc77eHPAzGgTRF0BnmlEkSQIhANRL5IuVSRbf4j0kxMWVhkeMRCzLXaUAzv26Qv1fECsCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDqaOfuB6QWoxIEY4q3ANLysmLvBYz7zb%2BBhv2rlRnCaPs%2BRogBD3%2BG2JMFR1ORgRVZwaosnouEmGkH%2FT%2B6OaXqv8LpMZDT%2F1RSNjdMPPVzR22CWiq%2BCNfZOJjQImzYVhpv1LdK8HCYHybXYPSY0q4UAafE2RYQZYQeIifBPtOwumkBXQQkua5eGoCzSjmrJLmjpdVxCswJ9AJ87IUD2nU3mzmiSOaOmnkzEodvHvy8XsZ1UCPkr5MFcc4mvSHfEsFjlASoAp%2BYwaxcV4oRybAvuFudUTw%2BHt%2FrsFKDrP0ugL6OtY2vWvR3xLG3jPIM16hZLTRNL7Y9ZCeY7P8qnYmzcKQt08CPaUcA56GtsWtC%2FgJ4VZYlIMBgV89tICdOj00RZ6%2B%2FCNRRuY1HLVVtiie%2Fodl0ePjGchBS%2BKlNjgsysRRibFIl2fSJ%2FRVqQlqShiwOCOfmcdXQxCzNHHrU0A%2FuzF9emekUQ2eFgRHQje5VuZbkAkFkqJ5LRyyRMtQwUFK7RjTzapuMaorOt6mG2XBN68vTwFlPPuUcvMooJqgjU0WdH%2FHfln7f9A1NRXh0GeE62yHxQW925VxHXn2dT2Y5WTI2d19Cr1qademLpLB%2B2COQgOWKs0q3WbHpwzui8K7VtJjGjOAv8zN1zCLsczABjqkAV2a8I2%2BHlJD%2BbfzxqGWsKUkNUrGnkKPPsDMfJymNwSqaJBK%2FcxUxLGt%2FIpmKnSwGQuSd%2FVt4BTxyvWbIXsnQ49BHkDjD863fu%2FLrJkX6GPi8OuR5AEGbMG14P0T7mfnr45md%2Fap5LvOrhS5deasqBq3yiWac0t2cPgQxX8Z%2F005%2BE2%2B7JvcWnHtwPv4z%2Fjlikvb0C0PBMkdrUtv1rhQ3F0CiLrN&X-Amz-Signature=102f201134b3a49c1476277760e62a71b83e8801408b428ada2ef09cf5bff5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
