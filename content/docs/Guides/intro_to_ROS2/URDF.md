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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMZTHBG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFRtLgo%2FxvEyLRE5Qn0bhwMOD8VokEgu8bFxnWMhV8dQAiEAkmeUeBFJ9VJNJo8UaxsidPOx8ReWIOTNWQOwCMvJxloq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKoEyG1oRcuKm1yqRyrcA39eCc3hSgjcmC%2F6E13fUOGSWrXXzHWTvR5FxUbC3YMZEHNPzj3SL6MV3piX9j75Ig%2F14h1PL7qQ4kFEhqur%2BbNIscEkqvzegCoS3kSf28hgVaWYhRxsN2GhNlHRPnOseBMHkbmUKpUMB%2FVEqCLJsHTsNmykNzO1UqQJBj%2B6GFXZaz3X3WMBsiytcUWP05Ptfd8SFNEm3rit8sFLP0tpaXpcb3KHMGmMZFmuhdtF0uvKasua%2BwEnc3G6sKqSWae4U6hF1BQGlWhTkjIypdn%2FWAt2nu9ueRXH97o8txOIHVRxNKu%2B%2FIwOB81F6C8ISedtgh27eK4TAXy5Xf9rmxDq6c517liQnjF8mqilK%2Bw%2BKrMLIzz%2BvKQ636dVRVSyjYN5amEZw%2FjAhIWuPrhieEJ1xp3GdxZuMBYCUVQEEwfy0sTCcajzcHxsLxFhm5JwZYoUQAcHZZNzkKmtNtarnp5RwlrcD1I3lutgpnMe9z%2FfnfUQqYVGF%2Fd%2BDHfefcoAhptSjQBm8QFH2A6XxlsrSvk3tnFtd%2BMaCjZ9o4cT15nwPnOAVToKz8Kcha4jh3DT9ffnLvYr9NYYpmezY0Sd3SVp4dHpVM%2F%2Fc9efJSeb4CWH7HnpPZsaR24iYJCQma2XMOr%2FrL4GOqUBBpy7L6w4hrPwAkQdbUhg0pOXMch6m35EUxRDACTy5chwtgISzAQLv%2FqPPNWymYVESDzJpUO5%2FW7yb9a3dEy8Pjy1VWE9LJQi%2FnNlg8nwRTuIVgtfQgM8E4fd1Ch26vY7DX5Cz5q9cvQ1AkdIB69JNkUOpmyPOMoK7VJg6mVhPVx6ugIrpdiFr1%2FRZEdKbiDjJpYvqtd7aNF1E1wWb9qHNBIONoXG&X-Amz-Signature=c3911fb36a90f32a1d43ee7296f808862f0fe886399f23357813eb7293385510&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMZTHBG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFRtLgo%2FxvEyLRE5Qn0bhwMOD8VokEgu8bFxnWMhV8dQAiEAkmeUeBFJ9VJNJo8UaxsidPOx8ReWIOTNWQOwCMvJxloq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKoEyG1oRcuKm1yqRyrcA39eCc3hSgjcmC%2F6E13fUOGSWrXXzHWTvR5FxUbC3YMZEHNPzj3SL6MV3piX9j75Ig%2F14h1PL7qQ4kFEhqur%2BbNIscEkqvzegCoS3kSf28hgVaWYhRxsN2GhNlHRPnOseBMHkbmUKpUMB%2FVEqCLJsHTsNmykNzO1UqQJBj%2B6GFXZaz3X3WMBsiytcUWP05Ptfd8SFNEm3rit8sFLP0tpaXpcb3KHMGmMZFmuhdtF0uvKasua%2BwEnc3G6sKqSWae4U6hF1BQGlWhTkjIypdn%2FWAt2nu9ueRXH97o8txOIHVRxNKu%2B%2FIwOB81F6C8ISedtgh27eK4TAXy5Xf9rmxDq6c517liQnjF8mqilK%2Bw%2BKrMLIzz%2BvKQ636dVRVSyjYN5amEZw%2FjAhIWuPrhieEJ1xp3GdxZuMBYCUVQEEwfy0sTCcajzcHxsLxFhm5JwZYoUQAcHZZNzkKmtNtarnp5RwlrcD1I3lutgpnMe9z%2FfnfUQqYVGF%2Fd%2BDHfefcoAhptSjQBm8QFH2A6XxlsrSvk3tnFtd%2BMaCjZ9o4cT15nwPnOAVToKz8Kcha4jh3DT9ffnLvYr9NYYpmezY0Sd3SVp4dHpVM%2F%2Fc9efJSeb4CWH7HnpPZsaR24iYJCQma2XMOr%2FrL4GOqUBBpy7L6w4hrPwAkQdbUhg0pOXMch6m35EUxRDACTy5chwtgISzAQLv%2FqPPNWymYVESDzJpUO5%2FW7yb9a3dEy8Pjy1VWE9LJQi%2FnNlg8nwRTuIVgtfQgM8E4fd1Ch26vY7DX5Cz5q9cvQ1AkdIB69JNkUOpmyPOMoK7VJg6mVhPVx6ugIrpdiFr1%2FRZEdKbiDjJpYvqtd7aNF1E1wWb9qHNBIONoXG&X-Amz-Signature=2c61c3bd0058e31ab142d8d63a9f86ba8d8dd56038f966aba36c1ad6c521f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
