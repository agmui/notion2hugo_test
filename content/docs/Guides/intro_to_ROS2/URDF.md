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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDYC3ZF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICuJbVHZPyBoxsbxoUlXeHSEz7xsS%2FTzLUboqvgoZoxKAiEAxeCeUD8%2B4VcP5e9nYc2HGOTDFJwO%2FNI22gCX1cSghLEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJZa0PPHOU8aOxMiLCrcA3eTDePiAr1MLxYLwOPhMWf7qrDPLf4rPBV158JNXq0QvQI0FBTN8B30KXsZmjfHjAmOpN3ryIHTLpnVPNZwE23TqHimFrb3qvKpQJ2iBhgEDe3Knv5YfTaRw8gdxE3Afz%2Bld2v9Of8iJEUEO9OogKzFbZ8cRegykRYqnrgxOHGOB39xI1NiWne2H411NWiWlsTRsTI0PMTwBw8F66Trvi12k18XlWuS7Ne7wgvW8L66pqi279Igt6PGRF10Fp2Qt0PYr0wioxVfO4wyGIgL%2BdbL8aFno51UmesOsnXbbHQtcHsJ2sQWua%2B6ZAGGfmhF8%2FuLWmXEr6lnaODTOWuHJz5dVg7RIMBqEG3aW6kXWJTBMFBKbDynKdf0i6uoH56NRAcC6IOXd0W7xO4Kl3h3fX6edSz24pyoDPgZ7N0FlKUzexi%2FYCV0S317i0NzmSFVxtJa0HutRBo7hg6tTaG1aveKN%2F29NSlzWW2eQSYoXn678bYVwDryHpJrm4wIqVi7BvkiBVMHewnveVEIINVMNylnY6%2B5cY16gubvlz4wVHPWDTK3jN7Pjf1wSmfLU2ZCZTcXVL%2B2lI93YdUPH%2BpqdNsfl7DNey0GaBvC6xCFogksHf3I039mpfPef%2BytMM6ekcEGOqUBECHPS8e0GHt%2FJ%2BvIGesn2IXt4K6CB4W2YVAp4NsQ6JspVSmbspNqtWp1uaXXUqCxDpLzbSpFwBjTml5A6cRU8W%2FWrpJAKx%2FI9qWC%2BophQvp%2FkVA4LANB5UJtTaqRuQYwyVkBtdw4YixK5M3rD3Lesgo0ucMFx9RsyopHS%2FIHeYIrBa2VpjQqPdnl0Z9c1mFBOqmbuM%2Bm%2FVou%2FBm8%2FfV9fmFTLIHC&X-Amz-Signature=d358e8f40eca2034de0fe88a7587df3ebabe9d4d0358bc1816b4f0dff346a1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDYC3ZF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICuJbVHZPyBoxsbxoUlXeHSEz7xsS%2FTzLUboqvgoZoxKAiEAxeCeUD8%2B4VcP5e9nYc2HGOTDFJwO%2FNI22gCX1cSghLEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJZa0PPHOU8aOxMiLCrcA3eTDePiAr1MLxYLwOPhMWf7qrDPLf4rPBV158JNXq0QvQI0FBTN8B30KXsZmjfHjAmOpN3ryIHTLpnVPNZwE23TqHimFrb3qvKpQJ2iBhgEDe3Knv5YfTaRw8gdxE3Afz%2Bld2v9Of8iJEUEO9OogKzFbZ8cRegykRYqnrgxOHGOB39xI1NiWne2H411NWiWlsTRsTI0PMTwBw8F66Trvi12k18XlWuS7Ne7wgvW8L66pqi279Igt6PGRF10Fp2Qt0PYr0wioxVfO4wyGIgL%2BdbL8aFno51UmesOsnXbbHQtcHsJ2sQWua%2B6ZAGGfmhF8%2FuLWmXEr6lnaODTOWuHJz5dVg7RIMBqEG3aW6kXWJTBMFBKbDynKdf0i6uoH56NRAcC6IOXd0W7xO4Kl3h3fX6edSz24pyoDPgZ7N0FlKUzexi%2FYCV0S317i0NzmSFVxtJa0HutRBo7hg6tTaG1aveKN%2F29NSlzWW2eQSYoXn678bYVwDryHpJrm4wIqVi7BvkiBVMHewnveVEIINVMNylnY6%2B5cY16gubvlz4wVHPWDTK3jN7Pjf1wSmfLU2ZCZTcXVL%2B2lI93YdUPH%2BpqdNsfl7DNey0GaBvC6xCFogksHf3I039mpfPef%2BytMM6ekcEGOqUBECHPS8e0GHt%2FJ%2BvIGesn2IXt4K6CB4W2YVAp4NsQ6JspVSmbspNqtWp1uaXXUqCxDpLzbSpFwBjTml5A6cRU8W%2FWrpJAKx%2FI9qWC%2BophQvp%2FkVA4LANB5UJtTaqRuQYwyVkBtdw4YixK5M3rD3Lesgo0ucMFx9RsyopHS%2FIHeYIrBa2VpjQqPdnl0Z9c1mFBOqmbuM%2Bm%2FVou%2FBm8%2FfV9fmFTLIHC&X-Amz-Signature=907d333e32a3143d1241d498b1f0a88d1ca1b431fa2c831931791bb1a33c0b95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
