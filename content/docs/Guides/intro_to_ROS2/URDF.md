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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP572YAE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC92LAQG7ZfHQaSw%2BTjgTpcJ345%2FyLusGTfDAOWJxfjEAIgPElL66DSm%2BhLBHQOdonE%2Byzv31pyrVmbscGRKG6dvA8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAVlmcuxAhkWB%2FC%2FQircAzL5JG%2FUTUfS8jIMvPzgra7K%2BoDjh7YUK7myWj18bJUcNPBbhKIbPov%2B2yxm3aLKdAPFk92t9zmEJR0O3zo4756MxC%2BdAoQLCvUB093iTuxXXzhprBcYP03PapUn8VRzR4Nfuv12XGFIaQMr1%2B34GCromaBcVxbXCBzYid%2BFEHF4vQTFwGEG6JE9N0O%2BwT4%2FE%2BCdSP3O%2F%2B4z31CSWLC3ndjHoq6ckid%2FmXwfDNI5Vdm8TZ3Ke70XhrvfaIVF7Khmafeq9V%2FH6jjl35AhrVsD53wXMnKCKUvJ7uVC5ONQZH1TbatRcJy7bpAWCvcNK1owZw3JWoxhX8qnr1ok2Rk5jF8nPwUwlj0vS82LozQlH0GdEMjrEzUER%2B2MU81w8qv%2FeFMMt6nxJDWox2DcWZFYyF8%2B6g9Jy%2F1Bzdp%2BvyoR%2Bz7xiQrbnIgKiA69EOxKjQcAV1sH%2BxKWARa%2BRWHr5YtyJfJzPHWrdKk9iJ1jZfoIQADp9xAkzTNsENHP4McVhL0TVu%2Bf4CTDDfN5dGHMGRFXC6TUBqlG0AnOcXYoVrnJdCbVulnXSgLEXlO9XW24r9K%2FBRzf5L12BsfjEGoIa5pjepgylISFyGnK246%2F7fKH%2FY66C%2BBIgCogzwz5YK56MOmCsr4GOqUBLhBU2fP1lGFaF158RztI1e%2FK0wDEhB1tN1K4uNqnj%2BnuAf1BixuYq%2BG3SrZ2nX31hWd%2BKbIMPpgBI70%2FyowmVqPr4124xvDSAQZlqcVqCsu5LuN3iL%2B2cWVE4eaB6TxI%2FwzQZmvRP70LpWjtarbmIwNfuWDyIYIYSTLM86e8VmvF7w8SUfaOygF0KZoZosrDAJcQtygjT0n2U4dcWhCMh%2BD6fSKt&X-Amz-Signature=c900ba60c9ff954aa70d495f5cedef02ec76ae89e4289bd6ba3a22e69571dd32&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP572YAE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC92LAQG7ZfHQaSw%2BTjgTpcJ345%2FyLusGTfDAOWJxfjEAIgPElL66DSm%2BhLBHQOdonE%2Byzv31pyrVmbscGRKG6dvA8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAVlmcuxAhkWB%2FC%2FQircAzL5JG%2FUTUfS8jIMvPzgra7K%2BoDjh7YUK7myWj18bJUcNPBbhKIbPov%2B2yxm3aLKdAPFk92t9zmEJR0O3zo4756MxC%2BdAoQLCvUB093iTuxXXzhprBcYP03PapUn8VRzR4Nfuv12XGFIaQMr1%2B34GCromaBcVxbXCBzYid%2BFEHF4vQTFwGEG6JE9N0O%2BwT4%2FE%2BCdSP3O%2F%2B4z31CSWLC3ndjHoq6ckid%2FmXwfDNI5Vdm8TZ3Ke70XhrvfaIVF7Khmafeq9V%2FH6jjl35AhrVsD53wXMnKCKUvJ7uVC5ONQZH1TbatRcJy7bpAWCvcNK1owZw3JWoxhX8qnr1ok2Rk5jF8nPwUwlj0vS82LozQlH0GdEMjrEzUER%2B2MU81w8qv%2FeFMMt6nxJDWox2DcWZFYyF8%2B6g9Jy%2F1Bzdp%2BvyoR%2Bz7xiQrbnIgKiA69EOxKjQcAV1sH%2BxKWARa%2BRWHr5YtyJfJzPHWrdKk9iJ1jZfoIQADp9xAkzTNsENHP4McVhL0TVu%2Bf4CTDDfN5dGHMGRFXC6TUBqlG0AnOcXYoVrnJdCbVulnXSgLEXlO9XW24r9K%2FBRzf5L12BsfjEGoIa5pjepgylISFyGnK246%2F7fKH%2FY66C%2BBIgCogzwz5YK56MOmCsr4GOqUBLhBU2fP1lGFaF158RztI1e%2FK0wDEhB1tN1K4uNqnj%2BnuAf1BixuYq%2BG3SrZ2nX31hWd%2BKbIMPpgBI70%2FyowmVqPr4124xvDSAQZlqcVqCsu5LuN3iL%2B2cWVE4eaB6TxI%2FwzQZmvRP70LpWjtarbmIwNfuWDyIYIYSTLM86e8VmvF7w8SUfaOygF0KZoZosrDAJcQtygjT0n2U4dcWhCMh%2BD6fSKt&X-Amz-Signature=dc603b92266dcf9e1b126916e078f646019d05c1a3eed0efb819f777dd63a639&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
