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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKNXQVI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCioqiOxYPNreAiFL7hCpBeQxtTeMXBq8zRN%2FnHmHNGggIgWnLN5TredLetmNkmMaVs2JiTWaGT3Vy6HaUiEbMSHq4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2FnaWScdk202fYWyrcAyu5EtRK%2B6mCTRGX71jmSSLUd9cqJMlLOx4PWD7EHOAxvSG4ig7%2B7Y3ilhou63Pwp7DK2uXDmhqMB8J5zU8qzNqAuwSFV0lqwa%2FFsL3p0pbmR%2FZh4QS1pp%2BZOmOP9rOMB2dzJ92dexg7ZAtum%2BMBKIjOrWe%2FvfJawFnMi%2BzRTorpBdSS4MejZ3Brbo8vNa3sep0pT85YzEFdGbJ7%2BR7GEoG0Yg15fIuLSr5dJgvzUdN5eMmiFzulodMH7OiGj69CFeGNHzaLcLQdh0t6Bvq6NOdRjDdz0EIleuZI6f6IFmLFPD%2BP7rIciKGMQv48zrcwY7l1R%2Bg3GpwTxozFKqs7hRhAGnKhvfVakBJfcTLcGnqqsoENudVhyna3XZehdRlO%2BvTay48F0G9Av7CSkv2aAniWMJfb0ShwZJlCDhhuYRunfmylI45S4Z6%2Fr9CM9PXWz2qLvm7lhVVwtYvHNvrRtXju6h8QlU%2Ftcexp%2Fr2U%2Blbu44bp2GlmH%2BgSZxwJU9qlJ3sthmyjfr1zpiEs0txl%2B3UTnKPFyW96hj0I6R%2B5Xo3Cs9Fbent0kgELicKkfw0759opECMyg5GxeM7i29UEJkJU4ujn8C887c5kJwbOXibMBAt9I1dxgcEK%2FHluMOCd%2FLwGOqUBQDW1DWV0KchWECC%2Bj504wOBXAEJ0yyBbSNLjdovfIttEEZDnSZka5RtpaP4VB9CTuC2%2FEqh0GBOC%2FCFnBsT57FJIb1nuRZ3MupJQjxnB0bOZLeNrNlVImkpizBWdEeqUUyjT7ce3CgyaC0MoHFsDzvSWhEW0NGEkmbL7RXGV8Z2AZqyBWoMU27ZjmjJeXt5Pg8LzOnA5QdfkJw%2BtHWkX57ZzQ1gW&X-Amz-Signature=329a831272688078d189c22026cd62a5dd32806d68947c6801d2c7296cd5c1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKNXQVI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCioqiOxYPNreAiFL7hCpBeQxtTeMXBq8zRN%2FnHmHNGggIgWnLN5TredLetmNkmMaVs2JiTWaGT3Vy6HaUiEbMSHq4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2FnaWScdk202fYWyrcAyu5EtRK%2B6mCTRGX71jmSSLUd9cqJMlLOx4PWD7EHOAxvSG4ig7%2B7Y3ilhou63Pwp7DK2uXDmhqMB8J5zU8qzNqAuwSFV0lqwa%2FFsL3p0pbmR%2FZh4QS1pp%2BZOmOP9rOMB2dzJ92dexg7ZAtum%2BMBKIjOrWe%2FvfJawFnMi%2BzRTorpBdSS4MejZ3Brbo8vNa3sep0pT85YzEFdGbJ7%2BR7GEoG0Yg15fIuLSr5dJgvzUdN5eMmiFzulodMH7OiGj69CFeGNHzaLcLQdh0t6Bvq6NOdRjDdz0EIleuZI6f6IFmLFPD%2BP7rIciKGMQv48zrcwY7l1R%2Bg3GpwTxozFKqs7hRhAGnKhvfVakBJfcTLcGnqqsoENudVhyna3XZehdRlO%2BvTay48F0G9Av7CSkv2aAniWMJfb0ShwZJlCDhhuYRunfmylI45S4Z6%2Fr9CM9PXWz2qLvm7lhVVwtYvHNvrRtXju6h8QlU%2Ftcexp%2Fr2U%2Blbu44bp2GlmH%2BgSZxwJU9qlJ3sthmyjfr1zpiEs0txl%2B3UTnKPFyW96hj0I6R%2B5Xo3Cs9Fbent0kgELicKkfw0759opECMyg5GxeM7i29UEJkJU4ujn8C887c5kJwbOXibMBAt9I1dxgcEK%2FHluMOCd%2FLwGOqUBQDW1DWV0KchWECC%2Bj504wOBXAEJ0yyBbSNLjdovfIttEEZDnSZka5RtpaP4VB9CTuC2%2FEqh0GBOC%2FCFnBsT57FJIb1nuRZ3MupJQjxnB0bOZLeNrNlVImkpizBWdEeqUUyjT7ce3CgyaC0MoHFsDzvSWhEW0NGEkmbL7RXGV8Z2AZqyBWoMU27ZjmjJeXt5Pg8LzOnA5QdfkJw%2BtHWkX57ZzQ1gW&X-Amz-Signature=b53b45eed22053e10baab2fab490917e9a4ca794306d50adfb4cafe7593a5d31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
