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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5IUHAX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6bvj%2FZVqNSFX2zRuro187a7lO6X5MAJDxMU9dOBIGlAiEAxcku3vEtPkdA%2B50y6G3hJWt1k7IJ3IE1%2FXTQtNUVkbkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGjev7l5CwZ2X4RDaCrcA7a7i1oSIqcxv0H4rs1aHTL%2F0O9FlxknNr0THpndVwHHGEVT1LfTZUsAB1beVLrLuZYre5RX%2BGWE6BewwCXGlFBL%2BtaE9QDcRT36dnPuw%2FSfPr6xgqFkac9%2BFkW43wLFTbOJ8GBTj1DcM5A1EqwHxqM0soJH19%2BX2YqEUbSXtUC7%2FpKTJ5xFB5gmUGdtZlyYYmC2fGnMIWR7%2B3GP6%2BaolHrBFQ7XcoPaXqy7wV7shRi3XxcpgzvlrVZnTE9YjJlncpj7zo%2FAqTCmdwd9NNR%2BB2ohxRKl9qh85UtMJFZrPJwbjVEt00hpicdbOZJBk7ICWTZROpBh9JH%2BsaCQd37U62FwiRcwOjRFxbMHJpUro9GKLGTLMWw13lhOaY7lzjUOpnFBJX9dnPwSiu3N9Sg8ZwirQVGWUO48brdA9Pdd1ZuUwSbG8s6e4Zg3KD2kDSjxoBGH%2FWOR7tWfbUdrpUkkCXCkTNMINmT%2BAFH%2FBkA%2FuzuZ6d%2FIXfaN8OWhXFTE6x9a5om6Q5G3qY%2Bow8FziKVX5Y7TVXPdbNp6ZrF%2Fzih2VAfd7ncRQejDfDJU1rxvwnpF1Pv%2BcXIyBMrC%2F3a2RBgROvlLdhPQl5YqXZFCncpoFq4VtSzdADB6Ks2Uv3qRMJexmr8GOqUBxXO7KAqBmg6xGuAZHhSNvuqhrEhILjA6dcnSFIsVysbXIS1muVrxLfiE26FE42R5tp7A4fubmo%2FEFrCQz4UBQEBqJGJTyDU7tVsYel9Dfss22s9Y81j0reKrAwmGq1SEJrcBKegMSu5Rw98IXJmjpIGxKgc%2FasnYnd%2FAq%2FpO27LOsqOYYG7vOW3fLSyRA5UcY3poRY3dP80B4g%2BdmCOoM9IIX0nq&X-Amz-Signature=0cd1babdd313410db882464e31436fc2020f606132503f133d3a2cec1257d706&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5IUHAX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6bvj%2FZVqNSFX2zRuro187a7lO6X5MAJDxMU9dOBIGlAiEAxcku3vEtPkdA%2B50y6G3hJWt1k7IJ3IE1%2FXTQtNUVkbkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGjev7l5CwZ2X4RDaCrcA7a7i1oSIqcxv0H4rs1aHTL%2F0O9FlxknNr0THpndVwHHGEVT1LfTZUsAB1beVLrLuZYre5RX%2BGWE6BewwCXGlFBL%2BtaE9QDcRT36dnPuw%2FSfPr6xgqFkac9%2BFkW43wLFTbOJ8GBTj1DcM5A1EqwHxqM0soJH19%2BX2YqEUbSXtUC7%2FpKTJ5xFB5gmUGdtZlyYYmC2fGnMIWR7%2B3GP6%2BaolHrBFQ7XcoPaXqy7wV7shRi3XxcpgzvlrVZnTE9YjJlncpj7zo%2FAqTCmdwd9NNR%2BB2ohxRKl9qh85UtMJFZrPJwbjVEt00hpicdbOZJBk7ICWTZROpBh9JH%2BsaCQd37U62FwiRcwOjRFxbMHJpUro9GKLGTLMWw13lhOaY7lzjUOpnFBJX9dnPwSiu3N9Sg8ZwirQVGWUO48brdA9Pdd1ZuUwSbG8s6e4Zg3KD2kDSjxoBGH%2FWOR7tWfbUdrpUkkCXCkTNMINmT%2BAFH%2FBkA%2FuzuZ6d%2FIXfaN8OWhXFTE6x9a5om6Q5G3qY%2Bow8FziKVX5Y7TVXPdbNp6ZrF%2Fzih2VAfd7ncRQejDfDJU1rxvwnpF1Pv%2BcXIyBMrC%2F3a2RBgROvlLdhPQl5YqXZFCncpoFq4VtSzdADB6Ks2Uv3qRMJexmr8GOqUBxXO7KAqBmg6xGuAZHhSNvuqhrEhILjA6dcnSFIsVysbXIS1muVrxLfiE26FE42R5tp7A4fubmo%2FEFrCQz4UBQEBqJGJTyDU7tVsYel9Dfss22s9Y81j0reKrAwmGq1SEJrcBKegMSu5Rw98IXJmjpIGxKgc%2FasnYnd%2FAq%2FpO27LOsqOYYG7vOW3fLSyRA5UcY3poRY3dP80B4g%2BdmCOoM9IIX0nq&X-Amz-Signature=7a9b0a18282780e7178ec94c3a02cd3b9b0bccc3b500da36a377ec98e65e5440&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
