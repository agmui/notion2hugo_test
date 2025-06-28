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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTNDDLU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v07TVy%2B9oipFPRC6FUeAt6uYpLGVej%2FjkrK9YBHScgIhANxj5lYfpUub7I9Io%2F24BKYH4DlC5%2FS3lR22rMmv0aS7KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybqEcthtvHyU3VIGoq3ANVMkMF00HbbLkSMf6P99II%2FBtdIUnweTp9a5Tbq1ZIz6kq95zDYf%2FlcVPMPO26FLBsriVB4097w2x8a4JpmHcB4HTWJ5tGVg9vqayaYTl9K%2B2e3Bv%2FxbjRKX%2BkKJRuZ60EresESVgkCC7fcD8Dfaqd9qYZKKcD6NzwHi%2FuXS7mlFhtRF%2FKDUjVA9iAZdeCgTJGsUvYsZBJriMKL862lL5%2BNv9ejMMxXUYp3HcSfn8OXBM4XZ6knNxm3bzy0Oqtqg3LtR5t%2BZ2j4j3Kl9s558nybC3uC5T3sRwGn5tUAW1ShU4lVGlviPhddCoMdf1SxdWbanb%2BD%2FFgx30ifHgE4FWLbyLLs7IS2NzWmkn44z3h2l0w2wHgmeN06IA15Sw5RQB%2BG9SQc4jdgyiQjT5AIyYzFryvmbNKOok804kwILpYcAVeeyJa7YlFmn1hD%2Bb6goFelysz9efCgN39wTb25r%2FTyFKDoHe3hWFhcAvtCil8Cu15Ej7%2FXekNhBg%2BLUBGijOiq129wVKCzdw6SGIQ4yOaB%2FLn4BwraQIC9qAI79VYXf6FsZo811gVL39oO3CRLyCjwPb707VR5y75i%2BGsRxoGFERHn8BvEmwAjFk7%2BxebnM%2B6z7NYArtgR3zm7DDT9IDDBjqkAU1ZVsgJn41PDgp5FqPp1tOOOKoY5cTmN7WgpBIl6G6Ourjp467%2FUHi2yPiuz3En2ivtX9ybUKzqAJTaQrelevwboXCpIQOb4Pd3eBNIkfz7rLkUyoUGGj%2FY7OOD2RmFYqKjqOfETdYn2mOKj%2FXfoEpTnD4nq6FR6q1kQ870ZMI7Li75zzq%2BCsNAD20iaZW9a2DyZXm8uEei9ffZ%2FZO15VZPHurs&X-Amz-Signature=5fd63a7e24fdc501859b60d20a4a8506c6b711ceff3e164f86cbadb3ffa8007f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTNDDLU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0v07TVy%2B9oipFPRC6FUeAt6uYpLGVej%2FjkrK9YBHScgIhANxj5lYfpUub7I9Io%2F24BKYH4DlC5%2FS3lR22rMmv0aS7KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybqEcthtvHyU3VIGoq3ANVMkMF00HbbLkSMf6P99II%2FBtdIUnweTp9a5Tbq1ZIz6kq95zDYf%2FlcVPMPO26FLBsriVB4097w2x8a4JpmHcB4HTWJ5tGVg9vqayaYTl9K%2B2e3Bv%2FxbjRKX%2BkKJRuZ60EresESVgkCC7fcD8Dfaqd9qYZKKcD6NzwHi%2FuXS7mlFhtRF%2FKDUjVA9iAZdeCgTJGsUvYsZBJriMKL862lL5%2BNv9ejMMxXUYp3HcSfn8OXBM4XZ6knNxm3bzy0Oqtqg3LtR5t%2BZ2j4j3Kl9s558nybC3uC5T3sRwGn5tUAW1ShU4lVGlviPhddCoMdf1SxdWbanb%2BD%2FFgx30ifHgE4FWLbyLLs7IS2NzWmkn44z3h2l0w2wHgmeN06IA15Sw5RQB%2BG9SQc4jdgyiQjT5AIyYzFryvmbNKOok804kwILpYcAVeeyJa7YlFmn1hD%2Bb6goFelysz9efCgN39wTb25r%2FTyFKDoHe3hWFhcAvtCil8Cu15Ej7%2FXekNhBg%2BLUBGijOiq129wVKCzdw6SGIQ4yOaB%2FLn4BwraQIC9qAI79VYXf6FsZo811gVL39oO3CRLyCjwPb707VR5y75i%2BGsRxoGFERHn8BvEmwAjFk7%2BxebnM%2B6z7NYArtgR3zm7DDT9IDDBjqkAU1ZVsgJn41PDgp5FqPp1tOOOKoY5cTmN7WgpBIl6G6Ourjp467%2FUHi2yPiuz3En2ivtX9ybUKzqAJTaQrelevwboXCpIQOb4Pd3eBNIkfz7rLkUyoUGGj%2FY7OOD2RmFYqKjqOfETdYn2mOKj%2FXfoEpTnD4nq6FR6q1kQ870ZMI7Li75zzq%2BCsNAD20iaZW9a2DyZXm8uEei9ffZ%2FZO15VZPHurs&X-Amz-Signature=ad9c222d9be76422bceac49462bec60666bbfb18cb3244299468aa3ffd18ed5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
