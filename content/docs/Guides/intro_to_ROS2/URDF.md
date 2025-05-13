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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTGRQIWR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICgidW1xglVUS90E51riHIt%2BlZUH2szDOcUx11NeY%2B1%2BAiBHJY0CQAXQDyb6C2qUxp5JxIFshew3oDhV3Lr%2FaADP4CqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28usTbPvHRnBqLXzKtwDmX%2BTVyCUXMfxq6prkjM82cZ1E68lpLIUHjlOLGLhjX4YRCXdt8ixd8oisEuijRWpOe5ODGld36%2F3rK%2BaDwV0AEwOoucDB4HMLSAESMBEMgMe%2BPD7OnEgrXZIh%2B7LSnmfLSW3EZnVupIIw0xTTMVuIn9i5dozLCKzEq8%2B13Xq667ha6q%2BVUNyYR7tL5ZmtIUIycJDSe9dEPheITlYGPHMzmM2FghIv11EhSlwkIfmSG68j9GRkYtWpohAZnDvq0kVwh0m6XsdSCEpoLN%2BpAd9GcU26XZ9om5BX0w6mhITmmTdG9Qq8H%2FrEsYjG6lRTJWqPpj0anh7mXEwgXncyPwId399lpoenloyVo9j2Lf4kC8l02VJ9krIIGmsD4Uq9GgcHyAEegD4nRrfyR%2F1rbT%2F5mkgUg8skiT3yn9hzBagShKqRVb4kpotFp0S2dJEPIr0oeM9xpMx60h4nadxMTuFpcegtkKYQ%2FL13FD5RVHjs2EmD79chAWjnCiSsqsLgfGkC3rUvNJtHnOf7RcEZZ2MlS%2BQN2UGBK7aYI9C8CWePgDsFZz5zvB7OMT5kTOK4eLHlcTmGNOCLuvOjsvGgA3CmR7ajk62nG1cYdugwl%2B1p0IdKVe9uGuNOQHOkdwwmsaOwQY6pgH0QdyJ1oIPZ1Y6Zctk36Y7mjrIig3tgqO4Hfab0lbZqMEmnVt14na%2BasY7MDLCn7YQSsdJ2ui6FB45uxEbLbYB2pGEVtczw45gbKpinuEHMn8l8g2%2F6aWMzkZVxNZDAvCs3ghW0bu3DXq5k9BDheRYp5%2B1GR%2B92vC98YoZm20rYEQLH4i1eV3ne6KJOEd1m0EuDeX%2B327zqCV4lvs%2BlEz3w%2B9seo6h&X-Amz-Signature=df3599ebbb45132150dd68fffcf1264ed4dca76298f8e74808bf99ec2bdc8df9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTGRQIWR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICgidW1xglVUS90E51riHIt%2BlZUH2szDOcUx11NeY%2B1%2BAiBHJY0CQAXQDyb6C2qUxp5JxIFshew3oDhV3Lr%2FaADP4CqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28usTbPvHRnBqLXzKtwDmX%2BTVyCUXMfxq6prkjM82cZ1E68lpLIUHjlOLGLhjX4YRCXdt8ixd8oisEuijRWpOe5ODGld36%2F3rK%2BaDwV0AEwOoucDB4HMLSAESMBEMgMe%2BPD7OnEgrXZIh%2B7LSnmfLSW3EZnVupIIw0xTTMVuIn9i5dozLCKzEq8%2B13Xq667ha6q%2BVUNyYR7tL5ZmtIUIycJDSe9dEPheITlYGPHMzmM2FghIv11EhSlwkIfmSG68j9GRkYtWpohAZnDvq0kVwh0m6XsdSCEpoLN%2BpAd9GcU26XZ9om5BX0w6mhITmmTdG9Qq8H%2FrEsYjG6lRTJWqPpj0anh7mXEwgXncyPwId399lpoenloyVo9j2Lf4kC8l02VJ9krIIGmsD4Uq9GgcHyAEegD4nRrfyR%2F1rbT%2F5mkgUg8skiT3yn9hzBagShKqRVb4kpotFp0S2dJEPIr0oeM9xpMx60h4nadxMTuFpcegtkKYQ%2FL13FD5RVHjs2EmD79chAWjnCiSsqsLgfGkC3rUvNJtHnOf7RcEZZ2MlS%2BQN2UGBK7aYI9C8CWePgDsFZz5zvB7OMT5kTOK4eLHlcTmGNOCLuvOjsvGgA3CmR7ajk62nG1cYdugwl%2B1p0IdKVe9uGuNOQHOkdwwmsaOwQY6pgH0QdyJ1oIPZ1Y6Zctk36Y7mjrIig3tgqO4Hfab0lbZqMEmnVt14na%2BasY7MDLCn7YQSsdJ2ui6FB45uxEbLbYB2pGEVtczw45gbKpinuEHMn8l8g2%2F6aWMzkZVxNZDAvCs3ghW0bu3DXq5k9BDheRYp5%2B1GR%2B92vC98YoZm20rYEQLH4i1eV3ne6KJOEd1m0EuDeX%2B327zqCV4lvs%2BlEz3w%2B9seo6h&X-Amz-Signature=cca3432694dd6b841a653fe557d8cb856597e5f54e5d1c7a2cc1599c61352b07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
