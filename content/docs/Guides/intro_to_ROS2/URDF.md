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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCXIUJ3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCARYYTaLCLfdVfFB8yU2JjnMn2GLLZ50%2FBHpXFk23pmwIhAKbO3seNoTrqP4jrHRJYELiTrnUFQfluZsxgt4ED%2F0AcKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FIHnrpAyH158h6JAq3ANs9wnNVbzSn%2BT%2BFkjt6gTim1aJUq8RTlgshxjiVGiv2UsdVX9rJ7vcg2d7qajHlBQaHTI4rHtIwoCGdcYhGvnHIHf60tL6BpiOwPrLm%2BONPG9eGQ5dlyDB7e2uMp5l2md55uTBlmA61SL4CMqaiPQTDqyFBhLlVUyEyFDFPR1ib2HtoI1Xp1Qj4RHLtNaSKtrpMRs%2FiSWHZuenjbRx8me6IwUemmio3wejOyF8kX%2FsEwsV5mHiGFwENjnHwAqkQM%2FBPfUFc3Hn5vtIvVhU8VjEzWTi5P4YXL3oD0MQkHp3dPay10sYbJ2t%2BtnQcgehfE3hOPHqq5usnSON98%2BRhP79ScNRM69mcIrShoPrk3DkVULYiRAd5OzvFIRrcOH6M5foWtL294KgcuVIO0w%2B53F7LRGmT8VdQohpdfWpea9eVJmiDVcW9O2zeyyX7Q0nJwsl3YJwJoVbzfEYOUtlEqevyeystYkLYga2cD%2Bd7UYKJbst4sWGoTGRwNZ%2BSHZ2PyOSf97iDIChgYBC4zab8NLOlVq1ecO3L8LRrEZ6Id0th%2BEpSAwiPzZUY7LQmImwuputy2BwZBQTBzXKb3150CqBnfUV3pfo3m3jGN%2BZXIvIE8%2B7Ot%2FR%2BPG8V49s5DCPmJK%2BBjqkATv4zHyQvo%2FgKsxYE7dKF%2BVroBlOjUmyE%2BCH79i6u%2FTpyW%2B02wwzQVNiWhwCmzlIDyRj4vlMml3SRiSfhVeV%2FJxTXWlYAN7xngavJ2MhOY1Ay87z1ViAkUhwWRw%2F%2BMeLjZ58ThFcXyTvSsdSyd8nrgaei9%2F6r1h280iYPhs7F%2BJXi%2FbtJ4MBiixezH0DyHUysMCl%2Fr7pri4yzBnmLnJMF5YGbWxL&X-Amz-Signature=8e144783e9c95061f307fd169eb0b1f9b3f66617c24016199436936ea183ff33&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCXIUJ3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCARYYTaLCLfdVfFB8yU2JjnMn2GLLZ50%2FBHpXFk23pmwIhAKbO3seNoTrqP4jrHRJYELiTrnUFQfluZsxgt4ED%2F0AcKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FIHnrpAyH158h6JAq3ANs9wnNVbzSn%2BT%2BFkjt6gTim1aJUq8RTlgshxjiVGiv2UsdVX9rJ7vcg2d7qajHlBQaHTI4rHtIwoCGdcYhGvnHIHf60tL6BpiOwPrLm%2BONPG9eGQ5dlyDB7e2uMp5l2md55uTBlmA61SL4CMqaiPQTDqyFBhLlVUyEyFDFPR1ib2HtoI1Xp1Qj4RHLtNaSKtrpMRs%2FiSWHZuenjbRx8me6IwUemmio3wejOyF8kX%2FsEwsV5mHiGFwENjnHwAqkQM%2FBPfUFc3Hn5vtIvVhU8VjEzWTi5P4YXL3oD0MQkHp3dPay10sYbJ2t%2BtnQcgehfE3hOPHqq5usnSON98%2BRhP79ScNRM69mcIrShoPrk3DkVULYiRAd5OzvFIRrcOH6M5foWtL294KgcuVIO0w%2B53F7LRGmT8VdQohpdfWpea9eVJmiDVcW9O2zeyyX7Q0nJwsl3YJwJoVbzfEYOUtlEqevyeystYkLYga2cD%2Bd7UYKJbst4sWGoTGRwNZ%2BSHZ2PyOSf97iDIChgYBC4zab8NLOlVq1ecO3L8LRrEZ6Id0th%2BEpSAwiPzZUY7LQmImwuputy2BwZBQTBzXKb3150CqBnfUV3pfo3m3jGN%2BZXIvIE8%2B7Ot%2FR%2BPG8V49s5DCPmJK%2BBjqkATv4zHyQvo%2FgKsxYE7dKF%2BVroBlOjUmyE%2BCH79i6u%2FTpyW%2B02wwzQVNiWhwCmzlIDyRj4vlMml3SRiSfhVeV%2FJxTXWlYAN7xngavJ2MhOY1Ay87z1ViAkUhwWRw%2F%2BMeLjZ58ThFcXyTvSsdSyd8nrgaei9%2F6r1h280iYPhs7F%2BJXi%2FbtJ4MBiixezH0DyHUysMCl%2Fr7pri4yzBnmLnJMF5YGbWxL&X-Amz-Signature=550ab2df189e399974ce948b5c1ba04c7b2a28c55648ea7d466dc833b85b9270&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
