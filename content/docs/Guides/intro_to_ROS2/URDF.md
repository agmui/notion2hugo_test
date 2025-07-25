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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPQA2F3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFYDESHCfwMRdn%2F5pySbKoPEwxt4eOlFz%2F%2FBcDdiRXdhAiBc4U3GTS3yPzRoGd93czxkCOpsF16L7Wx6PSnqu%2FzXyyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMzmzOGVQ34JGY04zgKtwDR3R6gLgeJWigqRJ%2BYF4DeH59gkPG2hYdVKfaIT74XvtgLz2L2eRkEeezWA5DB84UZA7JVGts%2FL5RW8ed0vdupji74AKjS3g9FLL9cmHUzxT1Pg28qHIle8L6u4fHVENxWn8fOKO4IQevhRDjZXv97gcSptRCPtWhco9Bk55LO5r5KbN2iEvJDs52K7vHld%2B3fphGEiOX6ajwBgBnmN%2Bf%2FPBalg7sP91Vwbep3Ygr6df4ySsDoMrJC5VLqBY%2FpcKwNvjKAKQlv2MwVvczSQGQp35sLGs2BtxnMl6RkyT3R6L4Zo8xUMkyoA2OW7AfnTalTO1dqOC1vimNHY0OQcYpkXSph4spQpWYn%2FXVE0VPfc4Z4xY4Ucag%2FGKlIxiGdL1FFo80nL%2FGQqQHSZ8FlmTHrUXTyo%2BjyW%2BkftqhUGaBnug%2Fx4HXN1qeK4C0hjRcxE2E%2BeIpzE%2By%2FI9UBcpyc6G8hxV8SYmrF6%2F8aDZ5%2FgSp8QBes6mAqeNa1GxkwDNUmCiuRTSgF59RsScaNQXZUafPnEdAz9VywVmVeIsmK1UI8wAlDCxtoTADxfowJ9Qh6Jdqij8TIz61%2BYNJ%2Fx%2FRyUjCP%2Fl%2Bv9KKLaHPOSQ%2FFV4TjF6pbLY%2BOOeYIiFAI%2Fgw0oaOxAY6pgFIQOw1wNx0%2Fy%2BhE14bs3OgIVppiOcbFxqLQl4jwKX7sdvZ1WprnKjwmKJaqCAaiDbA4c9YNSeuvePXaAilab8N7dAG4jLEG9lPgpKLlk7NqS1%2FZnSrlDUip1r86tGOE9s1X3Z2wg%2FL1w3WG%2BcJRNzZEiYGY6PGZT6%2FEtKZuAOmxsebwPNFMP%2FFcnD0BGtqO%2FNSliDPadmy31q%2BDPQiSvoBa2IqGI7s&X-Amz-Signature=24dba0f652e25d9ecff8d509fd7adc3b9ab8171f00f8ca84c725292aa8c8226a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPQA2F3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFYDESHCfwMRdn%2F5pySbKoPEwxt4eOlFz%2F%2FBcDdiRXdhAiBc4U3GTS3yPzRoGd93czxkCOpsF16L7Wx6PSnqu%2FzXyyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMzmzOGVQ34JGY04zgKtwDR3R6gLgeJWigqRJ%2BYF4DeH59gkPG2hYdVKfaIT74XvtgLz2L2eRkEeezWA5DB84UZA7JVGts%2FL5RW8ed0vdupji74AKjS3g9FLL9cmHUzxT1Pg28qHIle8L6u4fHVENxWn8fOKO4IQevhRDjZXv97gcSptRCPtWhco9Bk55LO5r5KbN2iEvJDs52K7vHld%2B3fphGEiOX6ajwBgBnmN%2Bf%2FPBalg7sP91Vwbep3Ygr6df4ySsDoMrJC5VLqBY%2FpcKwNvjKAKQlv2MwVvczSQGQp35sLGs2BtxnMl6RkyT3R6L4Zo8xUMkyoA2OW7AfnTalTO1dqOC1vimNHY0OQcYpkXSph4spQpWYn%2FXVE0VPfc4Z4xY4Ucag%2FGKlIxiGdL1FFo80nL%2FGQqQHSZ8FlmTHrUXTyo%2BjyW%2BkftqhUGaBnug%2Fx4HXN1qeK4C0hjRcxE2E%2BeIpzE%2By%2FI9UBcpyc6G8hxV8SYmrF6%2F8aDZ5%2FgSp8QBes6mAqeNa1GxkwDNUmCiuRTSgF59RsScaNQXZUafPnEdAz9VywVmVeIsmK1UI8wAlDCxtoTADxfowJ9Qh6Jdqij8TIz61%2BYNJ%2Fx%2FRyUjCP%2Fl%2Bv9KKLaHPOSQ%2FFV4TjF6pbLY%2BOOeYIiFAI%2Fgw0oaOxAY6pgFIQOw1wNx0%2Fy%2BhE14bs3OgIVppiOcbFxqLQl4jwKX7sdvZ1WprnKjwmKJaqCAaiDbA4c9YNSeuvePXaAilab8N7dAG4jLEG9lPgpKLlk7NqS1%2FZnSrlDUip1r86tGOE9s1X3Z2wg%2FL1w3WG%2BcJRNzZEiYGY6PGZT6%2FEtKZuAOmxsebwPNFMP%2FFcnD0BGtqO%2FNSliDPadmy31q%2BDPQiSvoBa2IqGI7s&X-Amz-Signature=15d2a190f12b60995f02b41dc4818af1f7426c20524bfc50f4a8816238c38428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
