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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3BJOW7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChqD7LkQbSwrglRO8arhqwhbPfia1%2FIOmY%2FJT5rTzM6QIgcgBRN0ZPnzIckmUA3wlV5iU5%2FuQ888vvhrXCKoEhoBMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPcTjHYW6MnFrmK3LyrcA2lbL82QvFfq1JGQnmKVHCT4IBRlUVA7%2FVXNxtnHJJxRrX0z2Z3Nym%2BltFRqFmxWf0Xg1tHq4Tlxsaas%2FTjxzCCCel96yRCufu1gH4T2cKlNPv%2BYOA9oR3Xt6g0qn2X7xnb6HRUjES9sd5XuFyBurWyoC4kvcJ1gbDl3svLVEdZZbPJnj9QjemnCvSU0hdRIIbf5xtCXEvZ4wf7Ywh%2BDeVdXIJGmQIS5YZghKstI9uJpact%2FeU1%2BS9eWccopOIE%2FXQRmmK%2BDKRfpGtoPBvEVO7uvPk7SkbyxXqNbvZYrxMARL6f0xvTUjfCKNUwsVkGaouTYj8A5yZEfqBMc%2BXExUIEPHxcid443mc8Y2I%2FPZ%2FeoQkiazUmkQ5eszdt%2FVyhTec0CFSDwkaKQCFA5U%2BRWLrzdwA9Wfb53yyWmrWL6rx5JYrk6YYd4t%2BY3ihZFI8gc3eCddjm7PpB2ZthWNgV1Op8voLtzH7mxjaUCHK5bIMUdvccEPHQmmYdG3tNF%2BmY1eR0f%2F7AaMW5xERh9DejSvqu8dPJ0O0llnmCL0l%2B9b0p%2BncVTJR7nVxSilrTjKa4Gwo1QvPa4XKanx5d2uvzmLaKmJlk4s99gaqD4gKidrLAoQCfNUjFDu2jPYEKyMJWRiMAGOqUBeFFmupSV4s7HAS5fJbPpSUu%2BLk1TDVFZmTq6qGZWX%2Fpx05OUu6LlwYLRHhvoiMx50LZ7cedQGXUXYKaxDIIotpEGuWRg9d8VknsWMs6BA8sGxQD4JM0Kcbjg88iap9dXtV0l9NGYNGqEWsimj1EuU937ptXnuWIioqeMhbtaNiuBxVnyoB3gkrQzdSzdh1z9S%2BPDl27MUTvtxR1CtXKFo0NgF5b7&X-Amz-Signature=f2f4fe7baff6e69e4b1f1777dbe1207ee8600cb708b4fcd73aabec44838095d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3BJOW7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChqD7LkQbSwrglRO8arhqwhbPfia1%2FIOmY%2FJT5rTzM6QIgcgBRN0ZPnzIckmUA3wlV5iU5%2FuQ888vvhrXCKoEhoBMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPcTjHYW6MnFrmK3LyrcA2lbL82QvFfq1JGQnmKVHCT4IBRlUVA7%2FVXNxtnHJJxRrX0z2Z3Nym%2BltFRqFmxWf0Xg1tHq4Tlxsaas%2FTjxzCCCel96yRCufu1gH4T2cKlNPv%2BYOA9oR3Xt6g0qn2X7xnb6HRUjES9sd5XuFyBurWyoC4kvcJ1gbDl3svLVEdZZbPJnj9QjemnCvSU0hdRIIbf5xtCXEvZ4wf7Ywh%2BDeVdXIJGmQIS5YZghKstI9uJpact%2FeU1%2BS9eWccopOIE%2FXQRmmK%2BDKRfpGtoPBvEVO7uvPk7SkbyxXqNbvZYrxMARL6f0xvTUjfCKNUwsVkGaouTYj8A5yZEfqBMc%2BXExUIEPHxcid443mc8Y2I%2FPZ%2FeoQkiazUmkQ5eszdt%2FVyhTec0CFSDwkaKQCFA5U%2BRWLrzdwA9Wfb53yyWmrWL6rx5JYrk6YYd4t%2BY3ihZFI8gc3eCddjm7PpB2ZthWNgV1Op8voLtzH7mxjaUCHK5bIMUdvccEPHQmmYdG3tNF%2BmY1eR0f%2F7AaMW5xERh9DejSvqu8dPJ0O0llnmCL0l%2B9b0p%2BncVTJR7nVxSilrTjKa4Gwo1QvPa4XKanx5d2uvzmLaKmJlk4s99gaqD4gKidrLAoQCfNUjFDu2jPYEKyMJWRiMAGOqUBeFFmupSV4s7HAS5fJbPpSUu%2BLk1TDVFZmTq6qGZWX%2Fpx05OUu6LlwYLRHhvoiMx50LZ7cedQGXUXYKaxDIIotpEGuWRg9d8VknsWMs6BA8sGxQD4JM0Kcbjg88iap9dXtV0l9NGYNGqEWsimj1EuU937ptXnuWIioqeMhbtaNiuBxVnyoB3gkrQzdSzdh1z9S%2BPDl27MUTvtxR1CtXKFo0NgF5b7&X-Amz-Signature=54d706752d9ff4e9d1175d4adc90b41532af6473940eb8ad2d1befd61d817387&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
