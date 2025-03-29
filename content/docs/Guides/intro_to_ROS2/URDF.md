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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2WJ4GR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDRhzbG3xSDBi1gUVfuooGJHOlj3eN%2B%2FVyEXPkjXYegwwIgR9LQt1axDx%2BqRyb%2Fm2eGSRlggAPy%2B9RtX9u%2B5VvUM0cq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKkLwA3jCoE2z84gfCrcA5DhavimuUih8PDOfv0qpAJCsUdfG3%2B2rp6OikXVm0lZorj7taM5%2FbNGZtF68q4aWRfFwX15jRX%2FgEbf4dSmreq9GuW%2FLQK2%2BHfNIiBLaSvDXKBBGJL1pWOU4hPJsLOgbZAWQJyMSPz28q%2BPy6IIVev3F5uqGkCKn1Qsbo9nBVCqFgCxlDsjKrhG1STd1OW83MPNI8QA10gNn2bU2yHoItJZakPaMWvURHyfX4f67M6bwncjnEonAMiUZfj1ORMsdJtOUHwkRPpFEATMwVnY17xYm042G9FBAlr4EfikmZ9iVYPV6rFkXIKyFvDPZXoI8oIF1HqjjYQUj0IT0j0S3qIE8uMwmm6utkckukfHh6WzoTkVA811ut4ee8ZthKWJag3d4K7O2h2KH5k2Xttwqwu1WCFG%2FBEkRA3OpRNML7cVQMeyGJ%2F57zrCg%2Fl2hi0lLiuTP37Nc%2BhfBnU4gGgr0Yfej8MzaKuVm5Utt5HHAv8V9vfWGE%2Ff2BI4JAzQ9KTRdipVAl8K8HxqHEeIkgLp9IjYuzxRcMmf%2Bpz6H%2F5JYGkR%2BlOpScejreymAhrcP1qnUtnFFFSexJaGDJBNFdd6ru3C1GIsoxjf%2BYMmWIoCh5D%2FnsD%2B8FhN5ZLI4wejMOGfoL8GOqUBrQjYykXFLtnhK6Ur7gKNzf7F4yMVgOdH2Bh8reCUYF0MSxYYafabGQBNydmedu%2FGnHOG8NMTQ0RshIle7G92oWQTGwwYdmcdWwdkRzOCcVgu5CVcx0lsI05Sn45g2AFxKxW8RcJORH%2BJazXon0RQqr%2BCjeaQ6QJ5hNoRLuUBXUhQFHONc%2FXxtn8W98yn9eCWNsLRU1GJUj7f4f6lwT1bWJEpsFiC&X-Amz-Signature=720522ebe3ae27df6b51be67aac6ecd19e8547208ca9163f327311c369174634&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2WJ4GR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDRhzbG3xSDBi1gUVfuooGJHOlj3eN%2B%2FVyEXPkjXYegwwIgR9LQt1axDx%2BqRyb%2Fm2eGSRlggAPy%2B9RtX9u%2B5VvUM0cq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKkLwA3jCoE2z84gfCrcA5DhavimuUih8PDOfv0qpAJCsUdfG3%2B2rp6OikXVm0lZorj7taM5%2FbNGZtF68q4aWRfFwX15jRX%2FgEbf4dSmreq9GuW%2FLQK2%2BHfNIiBLaSvDXKBBGJL1pWOU4hPJsLOgbZAWQJyMSPz28q%2BPy6IIVev3F5uqGkCKn1Qsbo9nBVCqFgCxlDsjKrhG1STd1OW83MPNI8QA10gNn2bU2yHoItJZakPaMWvURHyfX4f67M6bwncjnEonAMiUZfj1ORMsdJtOUHwkRPpFEATMwVnY17xYm042G9FBAlr4EfikmZ9iVYPV6rFkXIKyFvDPZXoI8oIF1HqjjYQUj0IT0j0S3qIE8uMwmm6utkckukfHh6WzoTkVA811ut4ee8ZthKWJag3d4K7O2h2KH5k2Xttwqwu1WCFG%2FBEkRA3OpRNML7cVQMeyGJ%2F57zrCg%2Fl2hi0lLiuTP37Nc%2BhfBnU4gGgr0Yfej8MzaKuVm5Utt5HHAv8V9vfWGE%2Ff2BI4JAzQ9KTRdipVAl8K8HxqHEeIkgLp9IjYuzxRcMmf%2Bpz6H%2F5JYGkR%2BlOpScejreymAhrcP1qnUtnFFFSexJaGDJBNFdd6ru3C1GIsoxjf%2BYMmWIoCh5D%2FnsD%2B8FhN5ZLI4wejMOGfoL8GOqUBrQjYykXFLtnhK6Ur7gKNzf7F4yMVgOdH2Bh8reCUYF0MSxYYafabGQBNydmedu%2FGnHOG8NMTQ0RshIle7G92oWQTGwwYdmcdWwdkRzOCcVgu5CVcx0lsI05Sn45g2AFxKxW8RcJORH%2BJazXon0RQqr%2BCjeaQ6QJ5hNoRLuUBXUhQFHONc%2FXxtn8W98yn9eCWNsLRU1GJUj7f4f6lwT1bWJEpsFiC&X-Amz-Signature=7ee7c3e28b8d43ac6496b450b6fe8ff6924d3d756e1675607824178a1d31dbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
