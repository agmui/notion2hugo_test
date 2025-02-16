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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFXLCAN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC%2FMrUmRh2CX%2FXqFPXvZXxLy6jSUqdAXrkoiHDsv4qpcwIgIjFvaBaT0Z4nSMnHrw%2BNgavsundPHiFuyDiBYCj5CIgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNvD9%2BSF5hbnvZe%2FsircA6BX7nIVXHFsz%2BcZRigqpvY00tezYirTn%2FFpjeB6DHiTk5%2BNbCXFgfLi3%2FY8CbFkTcwn4Apr5olCbFnYoDKGxrHdre%2BW86Em8gVUeMm%2Ffwi2Lgj4vum3MXPmfAVaIL%2FODrdmsJu44tVlWah6rGJB1MkqVBRk%2B37xWoZjKin2pYkFStQbZ1AagY7sjEC1l87kyeo3fEUx4WI3DYpSPFhp6%2FJP07wLgLvxltXewb%2FU8kSu2i28VnedBA8I8sDRfTryp9LZFLfbInZ0W6Qt6YR7TAARP477mk2B92B%2FX8wETYqAZtsEsg4sIScxq0hXHPPSMxvLDrw5aL1P0Xr8BnQtAMKO5b7uRft%2FRa7xSST5YAjMS%2ByOiR2owutBVTSymUAj4eiuVRLmFvpyGB%2F8fEzhJR%2B%2BVLRSdR%2B8CI7TAXz4xRpZmFm4qtTINej08W8eYaAr7JIrxIKZkvCw3cG2HjerK1Y5UF00ZzGZYqfR7CmFObV3M0W2YWJZ4Vipet5O91FW603CfTUIjhcGsKR5U5bVt%2FPlDlqvqtwYoDJvdSzWu7JEDuFbjouSgDYeQg3f5%2Ff%2F5MOze3cxwvFZXicjCmdGmbw57t9T5uZQ6mz%2FifLhS3FQPXmVufqHDeo03C3zMK%2BIyb0GOqUBkFCCkTtHs53VPu0LAROUmrSjjKAM3hiAnxqzAUlrNTSdYwMaCR7yBvaWAHJkgLe7rWHyZZZJU5bZFCP7P4bMvpmVtHA7i9stcxUiErcxNKqYkZHfjbTi8ow%2BynvIVNvCVIUUTSTvjxTDQe5pw2yknuxfD5NDP57Fepj%2FIopmrdEUd0AZ8rmouTGXIHor9dDS2r4oKo2H6QO4X2ko4UHivCfEvEiS&X-Amz-Signature=70da1f0396453920469e1947028a48886ac47eb1013207f1a75ee73d3314b8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFXLCAN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC%2FMrUmRh2CX%2FXqFPXvZXxLy6jSUqdAXrkoiHDsv4qpcwIgIjFvaBaT0Z4nSMnHrw%2BNgavsundPHiFuyDiBYCj5CIgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNvD9%2BSF5hbnvZe%2FsircA6BX7nIVXHFsz%2BcZRigqpvY00tezYirTn%2FFpjeB6DHiTk5%2BNbCXFgfLi3%2FY8CbFkTcwn4Apr5olCbFnYoDKGxrHdre%2BW86Em8gVUeMm%2Ffwi2Lgj4vum3MXPmfAVaIL%2FODrdmsJu44tVlWah6rGJB1MkqVBRk%2B37xWoZjKin2pYkFStQbZ1AagY7sjEC1l87kyeo3fEUx4WI3DYpSPFhp6%2FJP07wLgLvxltXewb%2FU8kSu2i28VnedBA8I8sDRfTryp9LZFLfbInZ0W6Qt6YR7TAARP477mk2B92B%2FX8wETYqAZtsEsg4sIScxq0hXHPPSMxvLDrw5aL1P0Xr8BnQtAMKO5b7uRft%2FRa7xSST5YAjMS%2ByOiR2owutBVTSymUAj4eiuVRLmFvpyGB%2F8fEzhJR%2B%2BVLRSdR%2B8CI7TAXz4xRpZmFm4qtTINej08W8eYaAr7JIrxIKZkvCw3cG2HjerK1Y5UF00ZzGZYqfR7CmFObV3M0W2YWJZ4Vipet5O91FW603CfTUIjhcGsKR5U5bVt%2FPlDlqvqtwYoDJvdSzWu7JEDuFbjouSgDYeQg3f5%2Ff%2F5MOze3cxwvFZXicjCmdGmbw57t9T5uZQ6mz%2FifLhS3FQPXmVufqHDeo03C3zMK%2BIyb0GOqUBkFCCkTtHs53VPu0LAROUmrSjjKAM3hiAnxqzAUlrNTSdYwMaCR7yBvaWAHJkgLe7rWHyZZZJU5bZFCP7P4bMvpmVtHA7i9stcxUiErcxNKqYkZHfjbTi8ow%2BynvIVNvCVIUUTSTvjxTDQe5pw2yknuxfD5NDP57Fepj%2FIopmrdEUd0AZ8rmouTGXIHor9dDS2r4oKo2H6QO4X2ko4UHivCfEvEiS&X-Amz-Signature=45cb0cc0560c7ce39f332f4603f800537fc7958509c60c5712957bb305d6b858&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
