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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4JPCFK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGi4BYf3dbOVEzI4yxAX2JljWo5ELmhzY%2BQPMse9syS6AiEAlcgZbPLjzNhIfSNBIznT300FOhs3PZrUwN2Sc7fUZsUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNFsJOVrnhcx3juLSrcAyvyD8ilL8ZmnJxWmJepbnGh%2ByBC1YDRU8Psp5NRExi4PMfziDGOevDHJZ0VfDAKoWQnv6VHuGcoHjr%2FVKV28G2240CaIsNwtAsGrUpVoLhLOCoieRIQxMSKquJ6kk0C43wyj8YRQZG1Zli%2BTW5ycMKHkYx7zpfAh1d%2FFgg9YEetfuuigmJXvilFC6e%2FAjwHLYPookz1wS9K0hrb9P3xLhK1NBEJozvtJPXrOQ%2BqhlgERqm6sFpSfZ5npqX5A%2BS0e%2FH0U6fMmzTCc3eAOl%2Fkt5t6KYGcys62rKXV1FemQm%2FZpwYMhU3Z9FUSiSkw2Q65sH%2FGPunUE7hWy4xgp9mgm%2B6DkrPOOnF0kYqCDVMdLvc5gg%2BI8MLGGUhp%2FX2Er0G%2F%2B%2FNNGcrJltj%2B82GZbEi4DlObQ1c0FZFEPV0RuL3UcMn%2B32o1HkNFgBx7vgfQz7U4NbXtsQpr8jcYXKAEGSGZAvkCOCqIkRc105XTOrSyzEVqB4%2BpfF660o%2FA9iSsbSlC0Rl3PVEUf5OOku6mvEUL54MqiYC05ySoE1Sd%2F6PmHxenydn8iH6DARCk%2F6QuX0GgsqchzzMYXze6Ye3p254qHCM%2F8myZdWtG4G39xpRaqZS5XJ%2F8uQ9sal6XyHRvMP2Sm8QGOqUBHL2MmT9%2BlB3qPgYoLAaOD6y7Jcud6m5z8P3Sx3yBlfdYtu%2BaZNshGveaJVSBpCMDQmXsHUmWh3lRksDL%2FZSxjdibgTv3FTMw15ZFsBxsAMnILK9u4%2FI%2FSXmf2pwqVCsI02%2FZySrrsGTc2tOygoy4020b%2B%2BgkLQUMQlB6CClBXzLrs3KFzEFo1bzTcgG6v5eS8in3S3%2BL%2FtybQ0NZiwwhlXGQBgrw&X-Amz-Signature=cfdf49233828bc53c1c802caa8de2cf5a6facf714fac22750d87573a3ed6ee48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4JPCFK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGi4BYf3dbOVEzI4yxAX2JljWo5ELmhzY%2BQPMse9syS6AiEAlcgZbPLjzNhIfSNBIznT300FOhs3PZrUwN2Sc7fUZsUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNFsJOVrnhcx3juLSrcAyvyD8ilL8ZmnJxWmJepbnGh%2ByBC1YDRU8Psp5NRExi4PMfziDGOevDHJZ0VfDAKoWQnv6VHuGcoHjr%2FVKV28G2240CaIsNwtAsGrUpVoLhLOCoieRIQxMSKquJ6kk0C43wyj8YRQZG1Zli%2BTW5ycMKHkYx7zpfAh1d%2FFgg9YEetfuuigmJXvilFC6e%2FAjwHLYPookz1wS9K0hrb9P3xLhK1NBEJozvtJPXrOQ%2BqhlgERqm6sFpSfZ5npqX5A%2BS0e%2FH0U6fMmzTCc3eAOl%2Fkt5t6KYGcys62rKXV1FemQm%2FZpwYMhU3Z9FUSiSkw2Q65sH%2FGPunUE7hWy4xgp9mgm%2B6DkrPOOnF0kYqCDVMdLvc5gg%2BI8MLGGUhp%2FX2Er0G%2F%2B%2FNNGcrJltj%2B82GZbEi4DlObQ1c0FZFEPV0RuL3UcMn%2B32o1HkNFgBx7vgfQz7U4NbXtsQpr8jcYXKAEGSGZAvkCOCqIkRc105XTOrSyzEVqB4%2BpfF660o%2FA9iSsbSlC0Rl3PVEUf5OOku6mvEUL54MqiYC05ySoE1Sd%2F6PmHxenydn8iH6DARCk%2F6QuX0GgsqchzzMYXze6Ye3p254qHCM%2F8myZdWtG4G39xpRaqZS5XJ%2F8uQ9sal6XyHRvMP2Sm8QGOqUBHL2MmT9%2BlB3qPgYoLAaOD6y7Jcud6m5z8P3Sx3yBlfdYtu%2BaZNshGveaJVSBpCMDQmXsHUmWh3lRksDL%2FZSxjdibgTv3FTMw15ZFsBxsAMnILK9u4%2FI%2FSXmf2pwqVCsI02%2FZySrrsGTc2tOygoy4020b%2B%2BgkLQUMQlB6CClBXzLrs3KFzEFo1bzTcgG6v5eS8in3S3%2BL%2FtybQ0NZiwwhlXGQBgrw&X-Amz-Signature=da314a9f620652177372c1f6c69a2e8ab5aa8522a220b09de70f4cb66012c4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
