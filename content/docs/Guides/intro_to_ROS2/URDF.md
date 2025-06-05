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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI7KLEZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCKHw3pUrTXMgEWN0xXCYSXmrcKqxrq4RrULGiCbVdsDgIgK2XcYOSaHYDZIN2v%2FetYd%2FdCBN09q1Qak3r4BaW6nFgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEDOv2AhXE87iv7pFyrcA%2BAq9awtr7zOgp2KZemJc8W%2BgNuE4bJS4LPP%2B%2FhhU4hZJkHsGDny48MQfEZGYbq2Vz8YcsmWLDOVG2gWJbNtR%2BGK%2BaghaeJRR7kxNk3kJNspF5qsyuAab4gnjV3I%2BdAJZRrLuPblmZxzlF5ctHaYSbJfn9pwW704g83wr3zRX0TSUyEMHsLSn8rUcs2B1QeZ06xpvEF6qE52AVVTLnYwWcghUVc5hawuZ5Jqv6Rg2ZhNoyjGaI5ArIaPM1fS5n5FJ0cSHk1aZ8WmaS8p1H2vQZCl3QU4LoaD%2FKOfS1m0HGrsnA3L9y47MwkzyIKC8pos2NBAhyLfSCMKoIffcn0XAWeVbv9%2BojmTy%2FiIgXlfZvxGZHUfE5fBkDTm6yhP%2BZ4laLguhWOF65JEiomSWESfDsurxNthgic96%2BCTAimzNjJ0DeudrN40iukUG%2F2C0KRr00j6IP5AEfp9WlGI1dXIMG2C6BEbhWB9tNv8kY0QHyU%2B%2B9Ujf6e2jCtzXSaEFkoG2y3%2F%2FV2KtqTxamSkXP%2FBKk8n0b%2BpAfOlo42MFKItK3aK6faWNLoMAECFlDGw8Xldm8RG8JQZqES5bnjLzBYTThNjOrcg7lf24zc%2FBYA97ktrsdsVIr6zC5%2F%2BO2XGMIrnhsIGOqUBKFE0joH1cM2568PDpz5sTFfj2hHEorKfPpyU%2BnZv9UmwfooCVY%2FBvrEYHJ5V4DFJ%2FZVHdpdpA%2BeKdritkKQ%2B7dQtaEn0SfXFB2ZOHOSBBXQ0KEZPDPHrajJjTuo1pd0svalhyGMe7c%2FHpZfRPWH7G%2Fmtjhs8RNRN1Mmv3%2FzoNGXfdVX5RuNyKQcJE5o%2FTq6XTPZ1KaYXl6fBQ49omMgBfUS040D5&X-Amz-Signature=da8d52ec3851ac4233822cd1655a87d3ee542383548af22c5e3b92f384ebd358&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI7KLEZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCKHw3pUrTXMgEWN0xXCYSXmrcKqxrq4RrULGiCbVdsDgIgK2XcYOSaHYDZIN2v%2FetYd%2FdCBN09q1Qak3r4BaW6nFgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEDOv2AhXE87iv7pFyrcA%2BAq9awtr7zOgp2KZemJc8W%2BgNuE4bJS4LPP%2B%2FhhU4hZJkHsGDny48MQfEZGYbq2Vz8YcsmWLDOVG2gWJbNtR%2BGK%2BaghaeJRR7kxNk3kJNspF5qsyuAab4gnjV3I%2BdAJZRrLuPblmZxzlF5ctHaYSbJfn9pwW704g83wr3zRX0TSUyEMHsLSn8rUcs2B1QeZ06xpvEF6qE52AVVTLnYwWcghUVc5hawuZ5Jqv6Rg2ZhNoyjGaI5ArIaPM1fS5n5FJ0cSHk1aZ8WmaS8p1H2vQZCl3QU4LoaD%2FKOfS1m0HGrsnA3L9y47MwkzyIKC8pos2NBAhyLfSCMKoIffcn0XAWeVbv9%2BojmTy%2FiIgXlfZvxGZHUfE5fBkDTm6yhP%2BZ4laLguhWOF65JEiomSWESfDsurxNthgic96%2BCTAimzNjJ0DeudrN40iukUG%2F2C0KRr00j6IP5AEfp9WlGI1dXIMG2C6BEbhWB9tNv8kY0QHyU%2B%2B9Ujf6e2jCtzXSaEFkoG2y3%2F%2FV2KtqTxamSkXP%2FBKk8n0b%2BpAfOlo42MFKItK3aK6faWNLoMAECFlDGw8Xldm8RG8JQZqES5bnjLzBYTThNjOrcg7lf24zc%2FBYA97ktrsdsVIr6zC5%2F%2BO2XGMIrnhsIGOqUBKFE0joH1cM2568PDpz5sTFfj2hHEorKfPpyU%2BnZv9UmwfooCVY%2FBvrEYHJ5V4DFJ%2FZVHdpdpA%2BeKdritkKQ%2B7dQtaEn0SfXFB2ZOHOSBBXQ0KEZPDPHrajJjTuo1pd0svalhyGMe7c%2FHpZfRPWH7G%2Fmtjhs8RNRN1Mmv3%2FzoNGXfdVX5RuNyKQcJE5o%2FTq6XTPZ1KaYXl6fBQ49omMgBfUS040D5&X-Amz-Signature=e0e6d0cca53a63b27f9ee961a63c75bf239b4bcf39c0b9097a869c11daf8426c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
