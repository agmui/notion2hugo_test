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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7W3R4R5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPGNgGcLra0GJOizHEs4tnqmRn6DUAYPx7d6Cfq5X6WAiBbIdpTXYTde59%2FgiE7ibuI%2FGgy74Kbq8j3amC3k4WRIir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMl%2F2PfNBR3imhF%2FrMKtwD%2BH1sYAh3eU4DzuZXzFZG68cQ2B63ti4v9upWi1VgYFhKEi1jR3eX%2BSflRH1d5P9On7GULtmpmwRUHDfTlNhlkpCIsvOBcM5iYzTsOZhKIPUzPO2ZrJHluug3aqF%2BzlLxM33SCBknDn11eVsjK%2BVHhct6K0EWCx0mKXjRTF8kHJ6H8%2BTnBB7D28M6Ky4DU%2FuQMaxvwHUeLklvlo7maHYKMCM3i1u8aZgLnolP50LTyuVHAHH0Ylu%2BubMOu3mSCc4nRzAZLdSIzWO7AI1mYofN80Lz8JXkw2e43ZPKvxT6qhYa4CZf4xv0PoAKyWZFStVNc6icmXYFVevmpcmGGMDYOXDr17opSQRDJMp3tWiNxR%2F7cRGLUEuj0Bma7WU0RBsMaFss4yBe57ljOabNqbteudxgt7YRPeUxXFuXZOATNBIuZn3pJn0dcOg1sksDf8XBVI8mKSqtl5aaefhqkrI1%2Bfe6yMFNHxY%2F0SweLw6TiZpetsTrxKNYFOViKOd5SzMvT8XSYSGY8%2BVKTF1YiPFIPiqp2w4e5JoOeEfzA8gU8yx9fTy6YE19z93%2BAi630VP5KYmhPaeiNANc%2FDosuH7MRTG9TAhtDP3Ui3lDAecJF%2B%2Fl9r41aPBQ9GQS6kgw%2Bby8wAY6pgH8QQdC3OToDJ6krk08lkL6D0%2F9yHb0Jer0K9Lwvqx4BYNYtzb4pukeUVZSAYtxOG7Bzg3%2BPw1OjiY9%2FMgwD7hQa8H6HJqUSc97kkSRinYiIbZ7HV7qX2lAfvy0eZjI98poCGUGDGIsGIcdPmccGShtXlSuG8EPkpv62LYomfp%2FSnuFXlCaU6ZBPptPT7cGKflxcRlxoAjITxubBRQOVn9vxw3ZxUlf&X-Amz-Signature=67adde0546e7bbb492b790fc7f6476daa1f234364858211dd2f623984f1bd4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7W3R4R5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPGNgGcLra0GJOizHEs4tnqmRn6DUAYPx7d6Cfq5X6WAiBbIdpTXYTde59%2FgiE7ibuI%2FGgy74Kbq8j3amC3k4WRIir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMl%2F2PfNBR3imhF%2FrMKtwD%2BH1sYAh3eU4DzuZXzFZG68cQ2B63ti4v9upWi1VgYFhKEi1jR3eX%2BSflRH1d5P9On7GULtmpmwRUHDfTlNhlkpCIsvOBcM5iYzTsOZhKIPUzPO2ZrJHluug3aqF%2BzlLxM33SCBknDn11eVsjK%2BVHhct6K0EWCx0mKXjRTF8kHJ6H8%2BTnBB7D28M6Ky4DU%2FuQMaxvwHUeLklvlo7maHYKMCM3i1u8aZgLnolP50LTyuVHAHH0Ylu%2BubMOu3mSCc4nRzAZLdSIzWO7AI1mYofN80Lz8JXkw2e43ZPKvxT6qhYa4CZf4xv0PoAKyWZFStVNc6icmXYFVevmpcmGGMDYOXDr17opSQRDJMp3tWiNxR%2F7cRGLUEuj0Bma7WU0RBsMaFss4yBe57ljOabNqbteudxgt7YRPeUxXFuXZOATNBIuZn3pJn0dcOg1sksDf8XBVI8mKSqtl5aaefhqkrI1%2Bfe6yMFNHxY%2F0SweLw6TiZpetsTrxKNYFOViKOd5SzMvT8XSYSGY8%2BVKTF1YiPFIPiqp2w4e5JoOeEfzA8gU8yx9fTy6YE19z93%2BAi630VP5KYmhPaeiNANc%2FDosuH7MRTG9TAhtDP3Ui3lDAecJF%2B%2Fl9r41aPBQ9GQS6kgw%2Bby8wAY6pgH8QQdC3OToDJ6krk08lkL6D0%2F9yHb0Jer0K9Lwvqx4BYNYtzb4pukeUVZSAYtxOG7Bzg3%2BPw1OjiY9%2FMgwD7hQa8H6HJqUSc97kkSRinYiIbZ7HV7qX2lAfvy0eZjI98poCGUGDGIsGIcdPmccGShtXlSuG8EPkpv62LYomfp%2FSnuFXlCaU6ZBPptPT7cGKflxcRlxoAjITxubBRQOVn9vxw3ZxUlf&X-Amz-Signature=69caffd950154818cd6a1ac715f0abb10d9f30cd5db6013536f28ddec409d694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
