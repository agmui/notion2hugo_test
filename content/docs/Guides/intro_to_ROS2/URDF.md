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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZRVREY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE95N%2BW0pkOQhJ7WDgh%2F2NKo0IA%2Bc7vZNw%2Fhr%2BrYajO4AiEA6Epsnws4hImPfvPInJFUWqr%2BZHPTfWRNZ64cUpOawBgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFxNN6FcYmoA4BEcPCrcA5XANORjdxFA%2B6ixoqOoVvFodwx4S25J%2FHBfgnoJQvBJnFsKj6Tv3Ca5%2FnkvdtQ7Bvw9QHAd58krUT%2FDm6F%2FepLbh6ZJN3mzLEyBXK1RG4H1Iq9Kad7W7xK8FPSR%2FLM0npGNVGWV2gF7JnNvrJwlQCMK8h49eR0PMH2syjUNQ4zzIQ4OvDq0W9%2FL5%2BCka4c1DRLpQGakthpB1ma4Hoa61F970x9jHNDU%2FqcyvYLM2OULAhkhApJfA%2FRfRGZuVu8zeP2Tu3wBfiHMEXp6c1eyvPcBxqnIJxriY0q9CrR0pkARa50%2FAHu7kijDqrvojhQKtxpj2Ub2fn5hE6jpH0LA6I2BHZ5oOcCf1m0YQo1UYcC1b08JpSAEFOhxabJv%2B%2BgPkHbJpAh1F5gg7Tps%2Fr7ee1BKQpjcTTGjldQEmOOqoWURhxovgbgAHwPYwNx7qIaiuFXmCGSESFJyg74t4DczP49QFAjkTd4IiYByTCV4Q95uRN624D7l%2FJpwLHjdvXl2txu3MRoYxKazS7pd9XEmiYLbPM403Hnmq3UwdIHitz%2BZhK4tMZslKchaNW19oyUiC5WeP%2B8sPRMKj7pnlnBsgYtAYncknhHCnf4nHxQXZjdPUvmpl58j3uYWiU0aMKSNkr8GOqUBRDbSqrkgFfYSV7gbDR1%2FTmEXVO%2BGKg%2Fo5dMBrmQ1XdZDSM%2BPndOfXDn4P3BXBLsVlgkM3pdizy6%2Bf7XFzBGrQWRcD5wr1aJJyRadKLfRkbbx7wdtccE5nTCYxhTPR6wp%2Fr8%2FLfZ4FwA9khCRBjKSOXqwilV6nJRQ7VDt24cIabUQKvuQs%2Fw%2FddIQkyf4pF2rXfy56PiJrMNYSPLKcOFVKcPvohIM&X-Amz-Signature=b3cf24883bb52720c1c6f299c65c0f169a78c5b08a1e2abef2a1294b2febda2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZRVREY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE95N%2BW0pkOQhJ7WDgh%2F2NKo0IA%2Bc7vZNw%2Fhr%2BrYajO4AiEA6Epsnws4hImPfvPInJFUWqr%2BZHPTfWRNZ64cUpOawBgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFxNN6FcYmoA4BEcPCrcA5XANORjdxFA%2B6ixoqOoVvFodwx4S25J%2FHBfgnoJQvBJnFsKj6Tv3Ca5%2FnkvdtQ7Bvw9QHAd58krUT%2FDm6F%2FepLbh6ZJN3mzLEyBXK1RG4H1Iq9Kad7W7xK8FPSR%2FLM0npGNVGWV2gF7JnNvrJwlQCMK8h49eR0PMH2syjUNQ4zzIQ4OvDq0W9%2FL5%2BCka4c1DRLpQGakthpB1ma4Hoa61F970x9jHNDU%2FqcyvYLM2OULAhkhApJfA%2FRfRGZuVu8zeP2Tu3wBfiHMEXp6c1eyvPcBxqnIJxriY0q9CrR0pkARa50%2FAHu7kijDqrvojhQKtxpj2Ub2fn5hE6jpH0LA6I2BHZ5oOcCf1m0YQo1UYcC1b08JpSAEFOhxabJv%2B%2BgPkHbJpAh1F5gg7Tps%2Fr7ee1BKQpjcTTGjldQEmOOqoWURhxovgbgAHwPYwNx7qIaiuFXmCGSESFJyg74t4DczP49QFAjkTd4IiYByTCV4Q95uRN624D7l%2FJpwLHjdvXl2txu3MRoYxKazS7pd9XEmiYLbPM403Hnmq3UwdIHitz%2BZhK4tMZslKchaNW19oyUiC5WeP%2B8sPRMKj7pnlnBsgYtAYncknhHCnf4nHxQXZjdPUvmpl58j3uYWiU0aMKSNkr8GOqUBRDbSqrkgFfYSV7gbDR1%2FTmEXVO%2BGKg%2Fo5dMBrmQ1XdZDSM%2BPndOfXDn4P3BXBLsVlgkM3pdizy6%2Bf7XFzBGrQWRcD5wr1aJJyRadKLfRkbbx7wdtccE5nTCYxhTPR6wp%2Fr8%2FLfZ4FwA9khCRBjKSOXqwilV6nJRQ7VDt24cIabUQKvuQs%2Fw%2FddIQkyf4pF2rXfy56PiJrMNYSPLKcOFVKcPvohIM&X-Amz-Signature=cf01685f7608638beb433635f602702f928079d073f83b32379ce74acf4b68f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
