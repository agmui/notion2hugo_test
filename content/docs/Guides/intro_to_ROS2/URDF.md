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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKOJEXF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTTF6nh2HPMoVITjUjDktRikIchFr82qeinnwclizXNAiEAirIGVNsvslZBMwTaqA3%2FTLLhbIbgDAEaXDwCxM4CkQcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDIY5uy0QJIXzldf%2BSrcA%2FcLQ9lGhTIwSPtqTgzDC%2FxAEn7cjULoM%2FXSGX0Q87mfGE7BtUD7EUFHfcPNQYrgTQApA9GQA7dQvSTm35qODCqr1LSEmFDOUMXXBSAfuFof%2BhCCrqyviP8ADP9278jpZcqy6a%2BGizVAwu6tm9tN6XRq3ueViAD1sJsPv%2BZPefWYwfNt%2B4%2BrQXa3jNDEkB7gQzIY5eHdV1RyesV1TgMRrEKJdtFCRkeaGyJyvNPNIm3UL4t7Rr34hm8pJh7S67J4YimcEpUl0gM2gSS3rqXw%2FaXmn4ela6zaqLE%2BDU3GtIGosYmY%2BQZhPpNza%2BA2YP8o8ykSquFWgYY1576SMVZG1KT%2B8rpJdvbiMkh9MwFmX0HQXC44MyIfLooVeuWCHrpLsZ1Aosfa9Tk9ho2ao7u953jR8oHVI6DHFzNK6jwJKmD%2F00eGQWj61Hr2uCEkynpFsxW9%2FS1fc5dGqMJt6bcqbL1FUsLsPlbq17DUM7xY%2FjjzqR9FQKHcvAMd%2BP0muJZ16RHe7lQl3qECZFliaIkbxBUapafFJVV7%2BqtAFmIirYD4B%2F%2BQVwk1j1OAlr%2F0NKzOGoiYVz7rNT3sPrdkx1BvS%2FXbHfqyhrluWBQtpnfvpqXtLDi55FmTnubjLYnbMJOF1MMGOqUBnZgi2Pwos%2BjUtU57UNVJb4ekgr2mJPHj%2B%2BdD2f0ptEAsHG6WNyjoKhowHgwxjM5LjYakZDFhZ9NsCnmyeEcpJW7y%2Bm4LwTkf3JFdv9ZUZlP7Hohii4onUmkSaBRzzsk64TD3NKCgNwVFQZaudCRFEfgreNMLdZ4a9Rr%2BYSDFLbBmuOECUk4aCcGzKVrzfajqdIhQp1PrLoRpst4BZayBz9tbYRFU&X-Amz-Signature=464cab00766e90b513b24b2091d86659c3ec16d49ef565486de052af764edb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKOJEXF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTTF6nh2HPMoVITjUjDktRikIchFr82qeinnwclizXNAiEAirIGVNsvslZBMwTaqA3%2FTLLhbIbgDAEaXDwCxM4CkQcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDIY5uy0QJIXzldf%2BSrcA%2FcLQ9lGhTIwSPtqTgzDC%2FxAEn7cjULoM%2FXSGX0Q87mfGE7BtUD7EUFHfcPNQYrgTQApA9GQA7dQvSTm35qODCqr1LSEmFDOUMXXBSAfuFof%2BhCCrqyviP8ADP9278jpZcqy6a%2BGizVAwu6tm9tN6XRq3ueViAD1sJsPv%2BZPefWYwfNt%2B4%2BrQXa3jNDEkB7gQzIY5eHdV1RyesV1TgMRrEKJdtFCRkeaGyJyvNPNIm3UL4t7Rr34hm8pJh7S67J4YimcEpUl0gM2gSS3rqXw%2FaXmn4ela6zaqLE%2BDU3GtIGosYmY%2BQZhPpNza%2BA2YP8o8ykSquFWgYY1576SMVZG1KT%2B8rpJdvbiMkh9MwFmX0HQXC44MyIfLooVeuWCHrpLsZ1Aosfa9Tk9ho2ao7u953jR8oHVI6DHFzNK6jwJKmD%2F00eGQWj61Hr2uCEkynpFsxW9%2FS1fc5dGqMJt6bcqbL1FUsLsPlbq17DUM7xY%2FjjzqR9FQKHcvAMd%2BP0muJZ16RHe7lQl3qECZFliaIkbxBUapafFJVV7%2BqtAFmIirYD4B%2F%2BQVwk1j1OAlr%2F0NKzOGoiYVz7rNT3sPrdkx1BvS%2FXbHfqyhrluWBQtpnfvpqXtLDi55FmTnubjLYnbMJOF1MMGOqUBnZgi2Pwos%2BjUtU57UNVJb4ekgr2mJPHj%2B%2BdD2f0ptEAsHG6WNyjoKhowHgwxjM5LjYakZDFhZ9NsCnmyeEcpJW7y%2Bm4LwTkf3JFdv9ZUZlP7Hohii4onUmkSaBRzzsk64TD3NKCgNwVFQZaudCRFEfgreNMLdZ4a9Rr%2BYSDFLbBmuOECUk4aCcGzKVrzfajqdIhQp1PrLoRpst4BZayBz9tbYRFU&X-Amz-Signature=4e7591d883924b708eb6a05561a0766221800946797fff6d8ca89dd0cd381f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
