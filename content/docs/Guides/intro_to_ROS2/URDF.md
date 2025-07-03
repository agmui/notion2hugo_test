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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNA2WC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIETddlATgV%2Bj0WQB9ueunwMGfSArUS2Hy62cbKvmJfKvAiEArVlrUzvDPmGqZwH2XndqqgvWRUmT37JcELaMfczDPs8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpMs4nXxNWAlDaVsyrcA84cr92a598DHAxc0p6n5ZrLSvwDjwmY4SpqJSqjrWNEsHxgnGe%2F%2Fdg7ChClKqvEhEp0auxGRc3B8hLsdTQvtj9MrYkYtOuotNgwVfCGDkBFHc3r7wj2n%2BklpQKZWcXu%2FYV%2Be21AzsujrkF3IReRwiPKeMcSyIv0SLXXFVA3jrgonxf2Z5lLJFiXgnOLpU2w3xrgqbJQiKHcXEHO7uveXZ4gXyHklFI4X%2Fq6ui6rnCvDhjvuAbPDTSx4AduB3TLVRwWyN1I40YKYHAC891J6vwytuJgg4XJxOC1Y8XAXvUXeJOlcMgT2CrCvvOhhI1FfAECJl3TjprU5zCtAcuPv2nTkggqqyR2ERwRxGo%2FrfBDBp%2BpC4hG3EAYyw7sV1BqNWDFEeVJPV8kYML%2F9yx05FI0Cr%2FbXXVd6puiQl9ZR69lBNGttbkQzooE0q7xQ7OFyC3CHmYZfv2%2Fiuh5qSTum%2FEJ0QT30LYvh%2BhAEbAbk7PAmXWnqCtYZywmOfLjndDQVpU1dYZQFCsq3%2BKSfh1TFuXBngzlCnKPzV1vTDjVstlmzsR11tg5LiRdHmnqKS%2FlOIgReee1cZRbbMNLTY5xIRnoBXTPOwycor1O8nhnX7rjuJ7IhhOm3iYVlZTohMKWHmMMGOqUBFAvWqEFiYHHofgdN8ZYcl4s8wqFcfzH0so0pCdFDTcfgO2X%2BbB472Dt7D5Rr4Vh7sr%2BYUOQu4M8TDpg9B2UUIrdTnDL2EsNvQLcfhYGp9UdH0c4AYWmZWvBFw5khhRpPQFIZlZSbZ%2F6TMYmyUCdPKbGfr1uE2Up1DTQG2XQXmh0R0w2G6w85JhhL55QSDEDjFSXRdPZNPahIPDeo0Z%2FPp%2B9AHQzz&X-Amz-Signature=2249d593109938459996bec87c2a28165143af93a14bc4a3dc28ec0933b91b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZNA2WC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIETddlATgV%2Bj0WQB9ueunwMGfSArUS2Hy62cbKvmJfKvAiEArVlrUzvDPmGqZwH2XndqqgvWRUmT37JcELaMfczDPs8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpMs4nXxNWAlDaVsyrcA84cr92a598DHAxc0p6n5ZrLSvwDjwmY4SpqJSqjrWNEsHxgnGe%2F%2Fdg7ChClKqvEhEp0auxGRc3B8hLsdTQvtj9MrYkYtOuotNgwVfCGDkBFHc3r7wj2n%2BklpQKZWcXu%2FYV%2Be21AzsujrkF3IReRwiPKeMcSyIv0SLXXFVA3jrgonxf2Z5lLJFiXgnOLpU2w3xrgqbJQiKHcXEHO7uveXZ4gXyHklFI4X%2Fq6ui6rnCvDhjvuAbPDTSx4AduB3TLVRwWyN1I40YKYHAC891J6vwytuJgg4XJxOC1Y8XAXvUXeJOlcMgT2CrCvvOhhI1FfAECJl3TjprU5zCtAcuPv2nTkggqqyR2ERwRxGo%2FrfBDBp%2BpC4hG3EAYyw7sV1BqNWDFEeVJPV8kYML%2F9yx05FI0Cr%2FbXXVd6puiQl9ZR69lBNGttbkQzooE0q7xQ7OFyC3CHmYZfv2%2Fiuh5qSTum%2FEJ0QT30LYvh%2BhAEbAbk7PAmXWnqCtYZywmOfLjndDQVpU1dYZQFCsq3%2BKSfh1TFuXBngzlCnKPzV1vTDjVstlmzsR11tg5LiRdHmnqKS%2FlOIgReee1cZRbbMNLTY5xIRnoBXTPOwycor1O8nhnX7rjuJ7IhhOm3iYVlZTohMKWHmMMGOqUBFAvWqEFiYHHofgdN8ZYcl4s8wqFcfzH0so0pCdFDTcfgO2X%2BbB472Dt7D5Rr4Vh7sr%2BYUOQu4M8TDpg9B2UUIrdTnDL2EsNvQLcfhYGp9UdH0c4AYWmZWvBFw5khhRpPQFIZlZSbZ%2F6TMYmyUCdPKbGfr1uE2Up1DTQG2XQXmh0R0w2G6w85JhhL55QSDEDjFSXRdPZNPahIPDeo0Z%2FPp%2B9AHQzz&X-Amz-Signature=12a858a84faf2c2605ef40ba114855b048f37f6f092d81dfc915f8c494433f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
