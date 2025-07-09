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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQU7ZVN2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwabbnBFuddkqnERMEr92lCKLzCN2C5Bwk9bP88uT39wIhAKkSdAvEKi4Jb69LRz%2BrnzrXvVh853hymzukLFmXNvcVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2BunrVYiLGOmDqKwq3APErEsvLigvW%2BoYiF9q4GAr85qY46pma7CZQrWVp7uo8wNNDRKT1Gh5VTqrr3vcU0d3yV0l2PvJjCl2y36kucKVuEL8erSbAEZprCAhTo0E4%2BGKheMff0eNvMZGZhswLi7ukuIEkN6yxySSsH8e47goD8tShMUGVnOIptkvAN2Et%2F35dYEqaPy5o4G%2F9mkhkf3jC%2FSlAuH1fWJFGHlAPRJ0VsVOFbyFtISceUVyr3qOlmhVO4KIXkjqBMECgvExwmKhE8JrB2DafT1mv0YNwlkGhRtHPk8L6k88MYoxqPSuND2StVKKDwoFIdcywn67XKong%2FUkWLowA%2FTK4N3dED05U5eth%2FtvSLLcYBsKF0eidgCHyRSs3jTIa1LvFcLnftco5dkDs2BJYWVV9oxhuJZmC33opLfkgMkn9aCnlnTNAj%2B0gtnIfJpQ6Z%2BnU1xg8tiEs8b%2FgMqXwBrcLdseV4Howvi5FWDtSdf10Gi4ZuZEkhnzL%2B8Ml183ZpgCPBylPMbVi7fFNu3UB1vcbcloAFJgiyYBwzY28JUxN68%2F7OadKGtpjlZ44jaumLRL2FZ72SLVt2OCmpWm8JpSgCHqKHCqx9sGlHePAgymGNx5j9T%2BKvdRk%2FxGfdx9zFFpuzCv67nDBjqkAcl88uEbNd%2BZovZJQSu9ikZVFJkchLnbEhERPoTaqUgmBFGrZrmNUyu1UF29AjnfGSwkr80XcRmj69nfH%2FpfB26GD2KZJ4pO6KBfOoL0dTTGHnTK9Ug%2B%2FtCs%2BCTDtHJe6p9pupw1Q5P4PGhZKbFJ4AcACaNtc8rysw%2FhwA6RePtOynC3D6TlFVu%2FYpv%2F4He%2FZK147REfWPFXbKttRHRVDEOwgEaw&X-Amz-Signature=fecda4e502f4c44fa5295b7d6e8e722308f7eadf0b7100ae82ec025c01c95ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQU7ZVN2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwabbnBFuddkqnERMEr92lCKLzCN2C5Bwk9bP88uT39wIhAKkSdAvEKi4Jb69LRz%2BrnzrXvVh853hymzukLFmXNvcVKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2BunrVYiLGOmDqKwq3APErEsvLigvW%2BoYiF9q4GAr85qY46pma7CZQrWVp7uo8wNNDRKT1Gh5VTqrr3vcU0d3yV0l2PvJjCl2y36kucKVuEL8erSbAEZprCAhTo0E4%2BGKheMff0eNvMZGZhswLi7ukuIEkN6yxySSsH8e47goD8tShMUGVnOIptkvAN2Et%2F35dYEqaPy5o4G%2F9mkhkf3jC%2FSlAuH1fWJFGHlAPRJ0VsVOFbyFtISceUVyr3qOlmhVO4KIXkjqBMECgvExwmKhE8JrB2DafT1mv0YNwlkGhRtHPk8L6k88MYoxqPSuND2StVKKDwoFIdcywn67XKong%2FUkWLowA%2FTK4N3dED05U5eth%2FtvSLLcYBsKF0eidgCHyRSs3jTIa1LvFcLnftco5dkDs2BJYWVV9oxhuJZmC33opLfkgMkn9aCnlnTNAj%2B0gtnIfJpQ6Z%2BnU1xg8tiEs8b%2FgMqXwBrcLdseV4Howvi5FWDtSdf10Gi4ZuZEkhnzL%2B8Ml183ZpgCPBylPMbVi7fFNu3UB1vcbcloAFJgiyYBwzY28JUxN68%2F7OadKGtpjlZ44jaumLRL2FZ72SLVt2OCmpWm8JpSgCHqKHCqx9sGlHePAgymGNx5j9T%2BKvdRk%2FxGfdx9zFFpuzCv67nDBjqkAcl88uEbNd%2BZovZJQSu9ikZVFJkchLnbEhERPoTaqUgmBFGrZrmNUyu1UF29AjnfGSwkr80XcRmj69nfH%2FpfB26GD2KZJ4pO6KBfOoL0dTTGHnTK9Ug%2B%2FtCs%2BCTDtHJe6p9pupw1Q5P4PGhZKbFJ4AcACaNtc8rysw%2FhwA6RePtOynC3D6TlFVu%2FYpv%2F4He%2FZK147REfWPFXbKttRHRVDEOwgEaw&X-Amz-Signature=85346d4db505ae6a5c4d83b8e7c9595aea3f3aaadc7c7f06237063670cfe09df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
