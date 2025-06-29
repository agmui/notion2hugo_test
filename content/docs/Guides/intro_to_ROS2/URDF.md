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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHTZ7SF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkSVME74TW5bCNqYqRuyEXTiQ0StdzXsjXxU7o6WBhgIhAJcH%2BDGVrsFC%2BAL%2FdpMlCK2BovwF8VkIMGHZUbiOjMyRKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF1I649G7IRkpns0q3ANOEiCVdJQhI%2FS8qyNAmF8%2B8cllOxobGoqQ8Uj87KOVHh4tdhfWdeR0sZSRGnpgWECU%2Bf9YDtllAprQp7LZ%2BL1dHYWDZf1Qxq3U7fjhPBs2r2OcPE1gb0%2Bt8gaRH2a3ukYLOKDMEjcQPdzVLJgPma4XPGk9a8Y9GY1FN%2FN%2BMmU9XxWZkJuxO1bTAr%2BGboUAugstrAuXTe15YifQIT1UbPhnAtXSXiIkIO%2BdwHNTIzj%2BRjck4pkCNqxhjnOeoRjmGr0T94vOAoSU%2BCgyya%2FSudwl1SfFWL0nubA1u6MsCEE9w5EIAhn5KHo1CnnWUaHXlnL6BXtK4Yb%2BC2fRl80Mds1%2BAUe4yuZBCDYJmeNyC6ugNhipMP3a5hl71n%2B0W7vldUP2LdZvywo1d4i0HwRGmbyWGdZj7rwUCWwOrn752kbaobKA54Eh27xhUgO8d1kwg%2Frobzgt0n40dTppuo0k7d5fDE2skD%2BKBTCdi7%2BEPkWSqeTc%2B7e9k1PwhnTt2Cr3HBAtkgoXaU84JZGCJZCHBmYWmwJHQnXL7%2FQpKa6yG4qIQJ5gxHHyAo2sWwSb6h9%2BCBOOBHwAP8bD5PoreVbV43XWkeaKnY%2B07VPZdtHiABrzotHRQoNna45Sdgy17TCZtYPDBjqkAZWyCn5L82%2BxLDJcqoCBi8RghA7gFmuq1ZdfmWHOoQTbzgELPbGsC4o%2Bj8Ll%2Bt32t9m5HgMfLL1t7fY3wUACbG3RY5QgZn0Kn4KnDNgzKza9spTiIHdLJov%2B8xVCEjhUKkRRTqIlfuvzlP38EBfiDUzhjpihhgCwJedxkgSJoxEEfG3rIvqCvi%2BlOy0VCdpETmkEkdyUecTmQPxULhhBxPcA%2BTLp&X-Amz-Signature=080034ff48e14529337db602bddeff15858ea75a2de4364b6108ae3c68b2126c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHTZ7SF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkSVME74TW5bCNqYqRuyEXTiQ0StdzXsjXxU7o6WBhgIhAJcH%2BDGVrsFC%2BAL%2FdpMlCK2BovwF8VkIMGHZUbiOjMyRKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySF1I649G7IRkpns0q3ANOEiCVdJQhI%2FS8qyNAmF8%2B8cllOxobGoqQ8Uj87KOVHh4tdhfWdeR0sZSRGnpgWECU%2Bf9YDtllAprQp7LZ%2BL1dHYWDZf1Qxq3U7fjhPBs2r2OcPE1gb0%2Bt8gaRH2a3ukYLOKDMEjcQPdzVLJgPma4XPGk9a8Y9GY1FN%2FN%2BMmU9XxWZkJuxO1bTAr%2BGboUAugstrAuXTe15YifQIT1UbPhnAtXSXiIkIO%2BdwHNTIzj%2BRjck4pkCNqxhjnOeoRjmGr0T94vOAoSU%2BCgyya%2FSudwl1SfFWL0nubA1u6MsCEE9w5EIAhn5KHo1CnnWUaHXlnL6BXtK4Yb%2BC2fRl80Mds1%2BAUe4yuZBCDYJmeNyC6ugNhipMP3a5hl71n%2B0W7vldUP2LdZvywo1d4i0HwRGmbyWGdZj7rwUCWwOrn752kbaobKA54Eh27xhUgO8d1kwg%2Frobzgt0n40dTppuo0k7d5fDE2skD%2BKBTCdi7%2BEPkWSqeTc%2B7e9k1PwhnTt2Cr3HBAtkgoXaU84JZGCJZCHBmYWmwJHQnXL7%2FQpKa6yG4qIQJ5gxHHyAo2sWwSb6h9%2BCBOOBHwAP8bD5PoreVbV43XWkeaKnY%2B07VPZdtHiABrzotHRQoNna45Sdgy17TCZtYPDBjqkAZWyCn5L82%2BxLDJcqoCBi8RghA7gFmuq1ZdfmWHOoQTbzgELPbGsC4o%2Bj8Ll%2Bt32t9m5HgMfLL1t7fY3wUACbG3RY5QgZn0Kn4KnDNgzKza9spTiIHdLJov%2B8xVCEjhUKkRRTqIlfuvzlP38EBfiDUzhjpihhgCwJedxkgSJoxEEfG3rIvqCvi%2BlOy0VCdpETmkEkdyUecTmQPxULhhBxPcA%2BTLp&X-Amz-Signature=5d20a9c500504f18b998c123b6fc3f4330ca94259c9c43b917e002cd884c7ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
