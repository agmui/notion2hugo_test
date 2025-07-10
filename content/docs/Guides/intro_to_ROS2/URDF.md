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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6D33K5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8H8a2TfmVn4MbHfi2ffEDmjTHR8Xn79dTVfdV3GuMmwIgYR3HraEQ0dyi2ar7KTIpHuuWK8zQlhW%2FIcFNyPXKA48qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmANrJ9aMt94fAsXircA3aPygxLj2DTtEdIX49XQZv0TWbLV3vVdi0pqO3RwbT6E2WLMTeFNehATBa7G55snNp4kdXjQvzSDNyVIBJgaDk%2F7XRABHZQEgiS3zjzeOKzKDQ9BiXoFIcgTVEYs4pXPHn20WTT4igWqa%2BKc3adce1%2BZ62vAd%2BBN%2FNcAdlO15oJ9gIGRI9kgYsee%2BAfQr9Wj%2Fb0bfuVmmBKrqkmmjpyp9PSMBZAQB%2BlEA0lNPRonD8dtqjpKta%2Fj6zgLxcbP7i7UhOoBlyfNpMTBkwF8vzRQxslrIU790NgO8AqYTUC%2FlZJLvOZmqod90kkYnN5zhHQoHIfRwEeFU0qHQYnFIDtr%2Fb7YyKJXszyDb27hO8r18j5QwimjY0%2FvjiTvwZRuya85A4aWPXzytbvXqLkQm2KojHtPrUainEteVC1T3XwKWvmZbwjWY4dcuU4OUkp6xzZiDZHx2M2Mu89YGLL3CHZZIvmpHAPWn91IpfTBTpbxUfG1mnJAb56wYwsly22XtCkH6%2BCkOgnPXccl%2Bn6B%2FX3R%2BT3XIPC%2FoN1jOGCtOF9BNJme5JGYIGb1yB6oGihhXkVS%2FzhQq%2FqThzXJ9bRg8mSG9%2BIgiQTkqx5uymTTLxxdr8KqMHZH2hR1zMIWXRLMMqBvsMGOqUBStWpPOxlBEaDZ98fWTFGA8cwVklTpWc2p9X9My1kKhi8ZUDDRzIX7avh2oxfSlhpLtUdYSWIc2ySFdugJH2sxC2JPtEvu%2BZHRNz25wlH42xGvSgJkp9br%2FQ1ZbNkRMIIQUCpaxuyV2Kz%2F7cOVX%2BpSM5Zcm%2F0UE%2B0FQFhFY0Ls8DMOV1mURfAeqsJInYIKSgjFM4ZfKLty%2Bzc7gvGe%2BmIbUeDkV83&X-Amz-Signature=e72d14399c1a486a701a9f05bcf8e56623cfa9df97350a47c49429e80cdcd0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6D33K5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8H8a2TfmVn4MbHfi2ffEDmjTHR8Xn79dTVfdV3GuMmwIgYR3HraEQ0dyi2ar7KTIpHuuWK8zQlhW%2FIcFNyPXKA48qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmANrJ9aMt94fAsXircA3aPygxLj2DTtEdIX49XQZv0TWbLV3vVdi0pqO3RwbT6E2WLMTeFNehATBa7G55snNp4kdXjQvzSDNyVIBJgaDk%2F7XRABHZQEgiS3zjzeOKzKDQ9BiXoFIcgTVEYs4pXPHn20WTT4igWqa%2BKc3adce1%2BZ62vAd%2BBN%2FNcAdlO15oJ9gIGRI9kgYsee%2BAfQr9Wj%2Fb0bfuVmmBKrqkmmjpyp9PSMBZAQB%2BlEA0lNPRonD8dtqjpKta%2Fj6zgLxcbP7i7UhOoBlyfNpMTBkwF8vzRQxslrIU790NgO8AqYTUC%2FlZJLvOZmqod90kkYnN5zhHQoHIfRwEeFU0qHQYnFIDtr%2Fb7YyKJXszyDb27hO8r18j5QwimjY0%2FvjiTvwZRuya85A4aWPXzytbvXqLkQm2KojHtPrUainEteVC1T3XwKWvmZbwjWY4dcuU4OUkp6xzZiDZHx2M2Mu89YGLL3CHZZIvmpHAPWn91IpfTBTpbxUfG1mnJAb56wYwsly22XtCkH6%2BCkOgnPXccl%2Bn6B%2FX3R%2BT3XIPC%2FoN1jOGCtOF9BNJme5JGYIGb1yB6oGihhXkVS%2FzhQq%2FqThzXJ9bRg8mSG9%2BIgiQTkqx5uymTTLxxdr8KqMHZH2hR1zMIWXRLMMqBvsMGOqUBStWpPOxlBEaDZ98fWTFGA8cwVklTpWc2p9X9My1kKhi8ZUDDRzIX7avh2oxfSlhpLtUdYSWIc2ySFdugJH2sxC2JPtEvu%2BZHRNz25wlH42xGvSgJkp9br%2FQ1ZbNkRMIIQUCpaxuyV2Kz%2F7cOVX%2BpSM5Zcm%2F0UE%2B0FQFhFY0Ls8DMOV1mURfAeqsJInYIKSgjFM4ZfKLty%2Bzc7gvGe%2BmIbUeDkV83&X-Amz-Signature=11e2d086b57c8bde3ce2dcf1c78e27e8bdd26c5f9854080c86ffad483c16d56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
