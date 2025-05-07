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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7K2PUFF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZm%2Fns6A1ReWxkthzd74ipWeE%2BZQqPFFpe9j7vHPxTRAIhANOaKR%2B%2FdHYSA9QS1s8eT8conAye7T5IFi4Fg%2FQjexf2Kv8DCGUQABoMNjM3NDIzMTgzODA1IgwwaJYEJx%2F%2FR2obWDsq3AM2yD58FlvuLMQDsOiD28qGZ19%2BZ3LMnlnjGcxWrYwBSU78R9wzbNW68DK4pve1DNGfs4%2FIqjLa4xUvMvSS4C%2B8djJhvQ9Pfmyzy%2F2YW%2Fw0pRYflsJjfQ05bnRMGC5abYuE1iqUpm4o609VONnwrovzUCqYr%2BF2pMrgdeibbh%2Fr5JvCbCpqLGtBA7cdxnVKcTFb9Q0u%2B2QPDZejymsyoblDfa4%2FavxuRLSj6Q8SpLtyums%2FLK7eb0KJdEEbsICptu5Hx8lbtnFOabyFFchpct%2FYDK9w4vtJmQ2s1Tk73j8M%2Foeab3%2BAysRpj6JpvF3nWnEsxStSFAQlW9NsUrxnsXqt9SYEgn05OAWePcvtLhKTCN6UmfVnrB78HX68yDEX0sR7sgGfnxE17cuK2L4jCwp2O78%2B5%2B2MFNH8J9hfPBKqcZkr9dmO5mrpGuxjFKBayiwM5xcdLjZvsFLiBiFMlbm4TOlMoVi1MIvldxcsg3Pcjb9CGKgJKzschGl8OwgKjOa664L26if7cutnqnzVshhQ4%2FXoUCcJtDlPuwECcTGep1euoB7%2FjhD7amDVf3l2shonMnyhplmrrb9TcHxndC%2BIrH0JQYMK4SdMs1TFCr%2FEPe1VOoD61BiuZeuFUjDO6e7ABjqkAakzH3kJCG5r6d%2Bb5QF%2BKTl%2FyyHf9QTh5myGUAUVYhbsqS1kC5mAdqvcGzJmQV7yWTbLpOJstmS78YcE%2FzPR3p0aIeNYtgmKolABsBYs3lTG20GfQIDLvKJpafL142Tz53nmDTdcG%2BUe9jHrVF2mNFGQ%2Ff45ARCVEfL%2BEqMGHE%2FTbWEko6a26tsZukOU%2Few1OepLwqxfi8BJUVwSvKVbyQGF2JiT&X-Amz-Signature=c787de16c6da51e1b37c52aeb5fd473d4409cd9afc486c989e56360f9b241bce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7K2PUFF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZm%2Fns6A1ReWxkthzd74ipWeE%2BZQqPFFpe9j7vHPxTRAIhANOaKR%2B%2FdHYSA9QS1s8eT8conAye7T5IFi4Fg%2FQjexf2Kv8DCGUQABoMNjM3NDIzMTgzODA1IgwwaJYEJx%2F%2FR2obWDsq3AM2yD58FlvuLMQDsOiD28qGZ19%2BZ3LMnlnjGcxWrYwBSU78R9wzbNW68DK4pve1DNGfs4%2FIqjLa4xUvMvSS4C%2B8djJhvQ9Pfmyzy%2F2YW%2Fw0pRYflsJjfQ05bnRMGC5abYuE1iqUpm4o609VONnwrovzUCqYr%2BF2pMrgdeibbh%2Fr5JvCbCpqLGtBA7cdxnVKcTFb9Q0u%2B2QPDZejymsyoblDfa4%2FavxuRLSj6Q8SpLtyums%2FLK7eb0KJdEEbsICptu5Hx8lbtnFOabyFFchpct%2FYDK9w4vtJmQ2s1Tk73j8M%2Foeab3%2BAysRpj6JpvF3nWnEsxStSFAQlW9NsUrxnsXqt9SYEgn05OAWePcvtLhKTCN6UmfVnrB78HX68yDEX0sR7sgGfnxE17cuK2L4jCwp2O78%2B5%2B2MFNH8J9hfPBKqcZkr9dmO5mrpGuxjFKBayiwM5xcdLjZvsFLiBiFMlbm4TOlMoVi1MIvldxcsg3Pcjb9CGKgJKzschGl8OwgKjOa664L26if7cutnqnzVshhQ4%2FXoUCcJtDlPuwECcTGep1euoB7%2FjhD7amDVf3l2shonMnyhplmrrb9TcHxndC%2BIrH0JQYMK4SdMs1TFCr%2FEPe1VOoD61BiuZeuFUjDO6e7ABjqkAakzH3kJCG5r6d%2Bb5QF%2BKTl%2FyyHf9QTh5myGUAUVYhbsqS1kC5mAdqvcGzJmQV7yWTbLpOJstmS78YcE%2FzPR3p0aIeNYtgmKolABsBYs3lTG20GfQIDLvKJpafL142Tz53nmDTdcG%2BUe9jHrVF2mNFGQ%2Ff45ARCVEfL%2BEqMGHE%2FTbWEko6a26tsZukOU%2Few1OepLwqxfi8BJUVwSvKVbyQGF2JiT&X-Amz-Signature=ec6bbf7cb6a10a0f0d7c52988360274d13a440d61e342cc29b679bf38da72e67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
