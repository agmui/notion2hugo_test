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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCICEPX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEX%2FUVSqRe1RJEVxrZQTRrBSwrzTYP9ye7XLr4kIe5dhAiABFwQ1uO4tEdX1W45m3uHiM8nC2%2Fjo8E%2Bpn9IJR0fjFCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMR799PJTipFo0DXB1KtwDAip7uQfJ%2BsnLlIPZbcsycWuoV%2FA4A4DLSIP0i8VVDKwTWXn5TAv5DI6ePBgsNRbJ%2FE3ued2rOmOEPa5GS6VCx%2FnBP6ZZzYGTXLveQorWL6gZzfip25zw3sG7XMAVqB4AgXz3fsuedra%2BwIfgVhpY86grcQjFwfH71PwNmTumOKLNyvTNJtUfU150bPhn%2BotufEDXABS1eisZmN066xJ%2FDjSc5PE5FoHzV3IAofD8IFCpI4JH1EbeXgvjrGxD1Lq%2BvbyhfIx59XNMISvQ1nWrJfOjzoaL3JgzrMuKBnbwMp2LktK4dsb7SQjY0qqufNk7551N0bOfYOsLdNU2VgWebNfdVjGUu1nApJSZ4VMmagchzC8SzmtA3ZNmBZd2sTQ0GeaTZ13FmnGSH%2B44eqympXk334R81iyNP8aDJAlPcI1MRDFXCq3b0yJlngBNzTDAWrsA4yJIpA1aqYO926rcaC13ldlY6xfSX1prJi5e2HIIrxk2Y7zKwAm4jzROgjy8cnbmsHUcmU3PeGoFT2rLQNjbfj1%2FjmM2T6tGx%2FuZBlIee5xGv7iI9SogePiOs5zF6VZhHcLtjhD5ZQMnSV7%2B14DoFccHg6iwCsAtqIuco8Brre9KsN0LKw8pmn0wg7WfvwY6pgHV0WlC7Qi%2FxIgiNCv7%2FgaJ7fVC8wqEs%2Fq2O602bSC8pdHlbpf6Ag34p7pjD86Nw3v0JysYiO7EBm8GJXhoZIJ%2FyyAco%2F6pF487%2BtWtHSgVx%2F8f2TGqrWwURZWWsezIuZGoi9TVFYziSfOTMXzx0FgEzBH0XXwCKLHvXj2VchhVwwphBW6Tp8WOM6h7oQbbGBGaBXm17kYGxdk208kId0nKTHQGeQHl&X-Amz-Signature=2b15586f696e2d610077efd76a24044b013aa014e090b472d0e2a06e9155d897&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCICEPX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEX%2FUVSqRe1RJEVxrZQTRrBSwrzTYP9ye7XLr4kIe5dhAiABFwQ1uO4tEdX1W45m3uHiM8nC2%2Fjo8E%2Bpn9IJR0fjFCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMR799PJTipFo0DXB1KtwDAip7uQfJ%2BsnLlIPZbcsycWuoV%2FA4A4DLSIP0i8VVDKwTWXn5TAv5DI6ePBgsNRbJ%2FE3ued2rOmOEPa5GS6VCx%2FnBP6ZZzYGTXLveQorWL6gZzfip25zw3sG7XMAVqB4AgXz3fsuedra%2BwIfgVhpY86grcQjFwfH71PwNmTumOKLNyvTNJtUfU150bPhn%2BotufEDXABS1eisZmN066xJ%2FDjSc5PE5FoHzV3IAofD8IFCpI4JH1EbeXgvjrGxD1Lq%2BvbyhfIx59XNMISvQ1nWrJfOjzoaL3JgzrMuKBnbwMp2LktK4dsb7SQjY0qqufNk7551N0bOfYOsLdNU2VgWebNfdVjGUu1nApJSZ4VMmagchzC8SzmtA3ZNmBZd2sTQ0GeaTZ13FmnGSH%2B44eqympXk334R81iyNP8aDJAlPcI1MRDFXCq3b0yJlngBNzTDAWrsA4yJIpA1aqYO926rcaC13ldlY6xfSX1prJi5e2HIIrxk2Y7zKwAm4jzROgjy8cnbmsHUcmU3PeGoFT2rLQNjbfj1%2FjmM2T6tGx%2FuZBlIee5xGv7iI9SogePiOs5zF6VZhHcLtjhD5ZQMnSV7%2B14DoFccHg6iwCsAtqIuco8Brre9KsN0LKw8pmn0wg7WfvwY6pgHV0WlC7Qi%2FxIgiNCv7%2FgaJ7fVC8wqEs%2Fq2O602bSC8pdHlbpf6Ag34p7pjD86Nw3v0JysYiO7EBm8GJXhoZIJ%2FyyAco%2F6pF487%2BtWtHSgVx%2F8f2TGqrWwURZWWsezIuZGoi9TVFYziSfOTMXzx0FgEzBH0XXwCKLHvXj2VchhVwwphBW6Tp8WOM6h7oQbbGBGaBXm17kYGxdk208kId0nKTHQGeQHl&X-Amz-Signature=6996f56a7c6eb3ebe134b0cde4fc16fb3493159adba44360ba3590a5f2389a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
