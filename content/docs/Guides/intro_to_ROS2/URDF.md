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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5KDR2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANxePWzdFgHshDaDe37fAoZvnUGxsjMhixMqeR6kNpNAiBaOShbVQO%2Fzm4ItQscTSotCASOi3fRkmhfNgv1mcfNpyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxOWUMl%2BbzQUE9MBKtwD3ao1JmKlvXEdezYIzqhs4%2FKNxR%2FYrafnz3yFnBgwu6%2FQxQE64DO%2B2HIpza02a0g7z%2F5g3k666sDhAFgljFXeogPDo9Hr6Y7VsvEG8Tvr7%2Fr5KlmasumeAQC3u0M0W93JsrTC4PfqQnJ8M3qiHCwqQm%2FHgjAXqiTQN0Dp2aciREeRsiHw4%2B14TRZNF4E5PM75uF2OpExPbtJlwL6nW%2FDhSoDhueZmUvjw1XOTRH4ku%2Bz8P%2Fh0f%2Bx%2FTvdHkCUPikjZYRFbxBjgZmOBVsASfZ2%2FXbJvOTxPCEXRmp2xgXIiE84D6DbTNnV35cjdBs9Pki%2F2E72VXeDkaWtW4vbT1LU9qVhU9zu%2FVP%2ByN3AjM3eZUC9UZ%2FNtKebDolcORs6QvTXiZaeCbGLQvSfCGMxnhfa%2BMCmo2EgWrrWqYPJK7r%2BHcqme2hj9DazURh2kBoi%2BOkDGALpmKjw344oVRhZtUv3GIFLHtcvZUv6f%2FSwaMbSD0PNbq3Nq0JGdqXq1JzS3kgEeiGaJemCsR700KcU3qR2X54L9yZU0kt12t9pL4d76wmGlXCxVebqdWoR%2FIKV05lRyMIuE8yFb4gPa1YZLqpF6SygVm2jOdHy80dcjg8qggBFRm9ksKxEAkz87NBYwt7GHvwY6pgHo8V04yX%2FOc1Kdhg2l1hFHN1qMX7m%2Fh1vLJjGyiqgt3egn1o2QCREs3r323LomF2Vo9Kw4%2BuiU8RaPKFvu43fAHkV1%2B%2BE4s5VyOWjXwZby7SRX%2BsSfdzx%2BYmrWZ85x%2FuTOESxCT6lQyEHPpJUHsudv1x%2B8hOkWns967xtMhPzPM5z%2BYYD5T9ykfszZEGyD6mw2oOBLIrYGySFKkSiULG2Gh8ImiD6T&X-Amz-Signature=496fd375bd1f9ff74ef929ca31fc9ab9ae6d6accdc06f3ac6e56ec09c4b50986&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5KDR2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANxePWzdFgHshDaDe37fAoZvnUGxsjMhixMqeR6kNpNAiBaOShbVQO%2Fzm4ItQscTSotCASOi3fRkmhfNgv1mcfNpyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxOWUMl%2BbzQUE9MBKtwD3ao1JmKlvXEdezYIzqhs4%2FKNxR%2FYrafnz3yFnBgwu6%2FQxQE64DO%2B2HIpza02a0g7z%2F5g3k666sDhAFgljFXeogPDo9Hr6Y7VsvEG8Tvr7%2Fr5KlmasumeAQC3u0M0W93JsrTC4PfqQnJ8M3qiHCwqQm%2FHgjAXqiTQN0Dp2aciREeRsiHw4%2B14TRZNF4E5PM75uF2OpExPbtJlwL6nW%2FDhSoDhueZmUvjw1XOTRH4ku%2Bz8P%2Fh0f%2Bx%2FTvdHkCUPikjZYRFbxBjgZmOBVsASfZ2%2FXbJvOTxPCEXRmp2xgXIiE84D6DbTNnV35cjdBs9Pki%2F2E72VXeDkaWtW4vbT1LU9qVhU9zu%2FVP%2ByN3AjM3eZUC9UZ%2FNtKebDolcORs6QvTXiZaeCbGLQvSfCGMxnhfa%2BMCmo2EgWrrWqYPJK7r%2BHcqme2hj9DazURh2kBoi%2BOkDGALpmKjw344oVRhZtUv3GIFLHtcvZUv6f%2FSwaMbSD0PNbq3Nq0JGdqXq1JzS3kgEeiGaJemCsR700KcU3qR2X54L9yZU0kt12t9pL4d76wmGlXCxVebqdWoR%2FIKV05lRyMIuE8yFb4gPa1YZLqpF6SygVm2jOdHy80dcjg8qggBFRm9ksKxEAkz87NBYwt7GHvwY6pgHo8V04yX%2FOc1Kdhg2l1hFHN1qMX7m%2Fh1vLJjGyiqgt3egn1o2QCREs3r323LomF2Vo9Kw4%2BuiU8RaPKFvu43fAHkV1%2B%2BE4s5VyOWjXwZby7SRX%2BsSfdzx%2BYmrWZ85x%2FuTOESxCT6lQyEHPpJUHsudv1x%2B8hOkWns967xtMhPzPM5z%2BYYD5T9ykfszZEGyD6mw2oOBLIrYGySFKkSiULG2Gh8ImiD6T&X-Amz-Signature=d431ac331688f93b1b7406acf203de594370a5987c9d71fe4eb8e8a83f9f303f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
