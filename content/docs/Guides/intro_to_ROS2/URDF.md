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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XECYYBI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEU2lca8zLk3VH4a0howahchwTDg2CeagFRTM6onAT%2B%2BAiEAurm%2Fzp%2B7GfH3d%2B50N1%2Bf3N%2F0fw0Ni6NfkjboiH7fed0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH71JSsTAfqITlwkQSrcA%2BPSqRc23BNMEQ2vIXp%2FEH3EcE1UzNUO3XMsWK1gf7HZHwrvnMcbu6fsGTvyFCD5h2GnRyrrInwOXZojimYrr6gU9a%2BVJCymnI7P19EBN17BWUL%2BG%2FkBprS7aeYsUbRGJpF7W8JyA07mqaXnm93oqj4GXWD9taVRGKJ10ZPr5FzFa5WJ%2Brx9Pdu80nHXtYyeoBFEzsbuRzoZNPWILmjyc90GfRL%2F4kETHHoix5LNGqFb6tbk8tDBUZC5tTJk7wzrWGwgvqtDZi5PZjY7BiYlxwOXh6UHcc%2FxrgEqt9peOwGoxt%2B%2BxIzoXBkQlbOPhvToVz6o9igbehga84GGaVmzXhO8FRcrsrIpy26K8pAkXLgB9ZqAE2UO9n16CWfWT%2B43K4eOZb3gLH81EEc%2FU3nuB0zoZQYdfiv6bRj7DeDJTs7he4345RPcw%2Br9PpdTTdwMJrGHw91PPP%2B4QD3SWLaIo4Na92LP0AlFVmkOR3ZG3r1EPyvCq27XuWRcNVVw8Gdl3qXxBsX7AhKBpsixI9o20kjAoUSEDSRo5EkleXMceCEZ1BnbIDkJ%2FPtXWPMmPhT%2BT9tTR5tJTXSXjV9mtCVlPl858qBO2aeHdr3z1bLqfo38jw9eXZWlXpdwhWpAMO344MMGOqUBlMlyZdpgajozc2%2Fq5O5jvPGoem1PN7dZcuu2ndQKphgymFJSX8p8wbz7%2BNmzauiAGvYQE9XTMc848bcgWeo%2B9c9ugF%2BfIENsX%2Fi02Y46uyJhcW9WJFrGbeXqhW%2Be4E%2FihGzFc7Ew5pO1lNYjMdSSoxrupe9WUCBZYUXa%2FeDP6lVitDGE2gONDuTzwGVhfbkyXWbvYs2XJQULpV05yfjsaBZgxnNz&X-Amz-Signature=db461614e934c59be4c13daf78d3ec586fb2e5c537d8e00f5422ab776e42f7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XECYYBI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEU2lca8zLk3VH4a0howahchwTDg2CeagFRTM6onAT%2B%2BAiEAurm%2Fzp%2B7GfH3d%2B50N1%2Bf3N%2F0fw0Ni6NfkjboiH7fed0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH71JSsTAfqITlwkQSrcA%2BPSqRc23BNMEQ2vIXp%2FEH3EcE1UzNUO3XMsWK1gf7HZHwrvnMcbu6fsGTvyFCD5h2GnRyrrInwOXZojimYrr6gU9a%2BVJCymnI7P19EBN17BWUL%2BG%2FkBprS7aeYsUbRGJpF7W8JyA07mqaXnm93oqj4GXWD9taVRGKJ10ZPr5FzFa5WJ%2Brx9Pdu80nHXtYyeoBFEzsbuRzoZNPWILmjyc90GfRL%2F4kETHHoix5LNGqFb6tbk8tDBUZC5tTJk7wzrWGwgvqtDZi5PZjY7BiYlxwOXh6UHcc%2FxrgEqt9peOwGoxt%2B%2BxIzoXBkQlbOPhvToVz6o9igbehga84GGaVmzXhO8FRcrsrIpy26K8pAkXLgB9ZqAE2UO9n16CWfWT%2B43K4eOZb3gLH81EEc%2FU3nuB0zoZQYdfiv6bRj7DeDJTs7he4345RPcw%2Br9PpdTTdwMJrGHw91PPP%2B4QD3SWLaIo4Na92LP0AlFVmkOR3ZG3r1EPyvCq27XuWRcNVVw8Gdl3qXxBsX7AhKBpsixI9o20kjAoUSEDSRo5EkleXMceCEZ1BnbIDkJ%2FPtXWPMmPhT%2BT9tTR5tJTXSXjV9mtCVlPl858qBO2aeHdr3z1bLqfo38jw9eXZWlXpdwhWpAMO344MMGOqUBlMlyZdpgajozc2%2Fq5O5jvPGoem1PN7dZcuu2ndQKphgymFJSX8p8wbz7%2BNmzauiAGvYQE9XTMc848bcgWeo%2B9c9ugF%2BfIENsX%2Fi02Y46uyJhcW9WJFrGbeXqhW%2Be4E%2FihGzFc7Ew5pO1lNYjMdSSoxrupe9WUCBZYUXa%2FeDP6lVitDGE2gONDuTzwGVhfbkyXWbvYs2XJQULpV05yfjsaBZgxnNz&X-Amz-Signature=659b0248c5c9b8522040adc50509c592f2ef88e4710de9544109457af5d2a40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
