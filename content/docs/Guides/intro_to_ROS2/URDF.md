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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FG4AVQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFIT9IN%2BIxeZsP%2FFT6e4qXtEaqsqFxDo0P0GGj4bU4tDAiB50iyz%2FnsQzLkZfv%2Fx0O4pngelWwXjITfM0ZhyPm%2FGdir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMrDefdfPHNi52H4xhKtwDHl6golrz0NAn5Be3KgKHS23DSjmkk6mynTPkV9RdWpe%2Bjm8NOmskIycZTPPSYudBB9Yn1z%2F1vAQa%2B%2BfDANV4T8ZJMETj9GRKKf1%2BlL6u0k9M5OSSuqve%2B3gWVKYN3ydoc%2FN64ubME6gs90BOH8SQx53bqFK0iNEO2wDCrHde6gyU8XPOKgIdSyDAM6c4CXM29%2FYs7eih4AZGa%2BXcXhA4gKF9xCu6SGsw9m0oGUpiB2TwIzCc7TrQVnnigIETT%2FZZCv2KQCd8T38qeYDINJr0sw8BLaRlEGIDPeagesbl%2F1loHABkoXgufpfR6LUSita7BTDmYc0B9%2Bqqt4d99FRAV6D%2FNhbpcrEee%2BDQ6kYSPMeFx11E4C8ygF3JZZK7ZDb8Or7H86wXkusrz8h4h%2FZt%2Fl9ur5oVAG1aErdctBC9yS6Abn646FuWd3ffov9o7szuraAY0qYsG7eLzy9Cai0Yn2DKHttBKaCZLlRTn5tz0Zi5Mvj%2Fx017dlvaZqxm5NoSAoBOIY1Doz%2ByEn6NbmDCmJVRxrglWPcLma%2BXr%2FJD2Leiqy7FAizYCvKx%2B5sF%2Bz%2BAxp5khJEOhUtgo4aS0CmhowmyECLVDOdzeE7CEVZcCNFBin2f099tHgTSSwAw6vXNvQY6pgEqD08vMgBCNOsJOBmcqOm0gcxd0JkI425dR4asOK4pE8Lpg6T1yS5MRuiXImq8wcgRilQGRaR8266YbNrnuRC6Evpbu2B6Pveh22pXgjCRtbg3tsZunN8PdfrzffhwYtbB9d1QYQwqypVZsM4XektmItVAiDLv1hsbkeFWOWJAV0mjsBBeUb%2BR7j6koYvposg1vALhYoh%2B4qXXia3dUrbKY4hN1%2FFu&X-Amz-Signature=31a0749186c2856e7c2019720abb2ab46d31acd1b18c9f61dbff80723de016b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FG4AVQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFIT9IN%2BIxeZsP%2FFT6e4qXtEaqsqFxDo0P0GGj4bU4tDAiB50iyz%2FnsQzLkZfv%2Fx0O4pngelWwXjITfM0ZhyPm%2FGdir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMrDefdfPHNi52H4xhKtwDHl6golrz0NAn5Be3KgKHS23DSjmkk6mynTPkV9RdWpe%2Bjm8NOmskIycZTPPSYudBB9Yn1z%2F1vAQa%2B%2BfDANV4T8ZJMETj9GRKKf1%2BlL6u0k9M5OSSuqve%2B3gWVKYN3ydoc%2FN64ubME6gs90BOH8SQx53bqFK0iNEO2wDCrHde6gyU8XPOKgIdSyDAM6c4CXM29%2FYs7eih4AZGa%2BXcXhA4gKF9xCu6SGsw9m0oGUpiB2TwIzCc7TrQVnnigIETT%2FZZCv2KQCd8T38qeYDINJr0sw8BLaRlEGIDPeagesbl%2F1loHABkoXgufpfR6LUSita7BTDmYc0B9%2Bqqt4d99FRAV6D%2FNhbpcrEee%2BDQ6kYSPMeFx11E4C8ygF3JZZK7ZDb8Or7H86wXkusrz8h4h%2FZt%2Fl9ur5oVAG1aErdctBC9yS6Abn646FuWd3ffov9o7szuraAY0qYsG7eLzy9Cai0Yn2DKHttBKaCZLlRTn5tz0Zi5Mvj%2Fx017dlvaZqxm5NoSAoBOIY1Doz%2ByEn6NbmDCmJVRxrglWPcLma%2BXr%2FJD2Leiqy7FAizYCvKx%2B5sF%2Bz%2BAxp5khJEOhUtgo4aS0CmhowmyECLVDOdzeE7CEVZcCNFBin2f099tHgTSSwAw6vXNvQY6pgEqD08vMgBCNOsJOBmcqOm0gcxd0JkI425dR4asOK4pE8Lpg6T1yS5MRuiXImq8wcgRilQGRaR8266YbNrnuRC6Evpbu2B6Pveh22pXgjCRtbg3tsZunN8PdfrzffhwYtbB9d1QYQwqypVZsM4XektmItVAiDLv1hsbkeFWOWJAV0mjsBBeUb%2BR7j6koYvposg1vALhYoh%2B4qXXia3dUrbKY4hN1%2FFu&X-Amz-Signature=ed4a3031dc3055eb6c41f9f644dd13aad15f0406085644cbed601d38e422c3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
