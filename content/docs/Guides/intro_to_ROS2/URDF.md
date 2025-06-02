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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DLCZFMA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGucPddd7FWWtme1isRIVa2UM%2ByH49MLSsSuLD784Tx9AiEApQrDg4fYXgG4r%2BX27tz54%2Bdbx%2Fh0zdegaG%2FeE2SvLgEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvSPuHZMqKDn25vpSrcA4SIf7iE%2FDREYP9%2FvMki3wBsXcEWpGcldMIKaqpk1Hai3hD0FC6pMVNoxBTNSuJvZmztSrpj7rv6TM%2F5OhfLiX23GOE7bE9UbkxW4loXy%2FJWgrIceVD8XlW5rVJwfnyxqAOvr76pZqPOn1MPD6lXTxKhmEdH3IVsdEIZ%2FcTVXzmR0QJgtbrEErPxqO7fkzP1%2FCgDvxBsJc5a1kda4FCEctmTNZuu1dXrkcYoZY4v9zXk8JBHjcHVp4ZBwLbNfgNAK6USHXjwUO0L4gqywnShy7eTmNPG80sUUAsV77jPJ%2FawRZfmIyg4JMIZSNaFAy32m%2F27OmjJPYY8Dzyyyb%2FRiPYZgiXDtVrb5vAXfPrXSMa3KgvMnycaYyMmS7cbB4BRYOoLCEjRLFC%2BBHZYIqLLy6PoWzwozN2%2FUVZT91s%2BYCw2YIJs0lDz%2FTE4fACsicnbI%2FsY%2BbdBZ5lVuBts61zcikCtSUCJVOM8PBP44iTAUghnLCx9sq4qiln5IuwqCrETYRtR7NP4qLiReykS7hf9Yl0rwz8%2BAZdwLB8HNDuRmD51ZCutHngkWqxwOIj51PWIleE%2BqxyMHTkJVnwChSP2CY6WU2k9U%2BB8yB7igOf07e3hLAXtbzrmjp5lO4%2BxMJPi98EGOqUBjHHTJgUCYtyleUyuiMzqjN35SqdJEssDl2ZNJD%2F%2B382YO9qQmxJiWFdLhqQNfCKtXeJ1AcRGVzus0AJ1DMjrD5BDDapI6Q0r3OF5myhFo85RqpxtiYXlmhL9Gayk8W%2BcpS%2FhASskygfaKJUhXakcXta1z2Be%2BVnUKgYeCpv2cXr3BWCSnpt0%2BKI3ik3Oyc%2BvsIRsw3yxGhE3Sx8G5%2Fy2AwG4bm5i&X-Amz-Signature=160ac5b423b82151e16887dcf5128b57ddfe8598476c8ce0cc891bab624527cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DLCZFMA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGucPddd7FWWtme1isRIVa2UM%2ByH49MLSsSuLD784Tx9AiEApQrDg4fYXgG4r%2BX27tz54%2Bdbx%2Fh0zdegaG%2FeE2SvLgEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvSPuHZMqKDn25vpSrcA4SIf7iE%2FDREYP9%2FvMki3wBsXcEWpGcldMIKaqpk1Hai3hD0FC6pMVNoxBTNSuJvZmztSrpj7rv6TM%2F5OhfLiX23GOE7bE9UbkxW4loXy%2FJWgrIceVD8XlW5rVJwfnyxqAOvr76pZqPOn1MPD6lXTxKhmEdH3IVsdEIZ%2FcTVXzmR0QJgtbrEErPxqO7fkzP1%2FCgDvxBsJc5a1kda4FCEctmTNZuu1dXrkcYoZY4v9zXk8JBHjcHVp4ZBwLbNfgNAK6USHXjwUO0L4gqywnShy7eTmNPG80sUUAsV77jPJ%2FawRZfmIyg4JMIZSNaFAy32m%2F27OmjJPYY8Dzyyyb%2FRiPYZgiXDtVrb5vAXfPrXSMa3KgvMnycaYyMmS7cbB4BRYOoLCEjRLFC%2BBHZYIqLLy6PoWzwozN2%2FUVZT91s%2BYCw2YIJs0lDz%2FTE4fACsicnbI%2FsY%2BbdBZ5lVuBts61zcikCtSUCJVOM8PBP44iTAUghnLCx9sq4qiln5IuwqCrETYRtR7NP4qLiReykS7hf9Yl0rwz8%2BAZdwLB8HNDuRmD51ZCutHngkWqxwOIj51PWIleE%2BqxyMHTkJVnwChSP2CY6WU2k9U%2BB8yB7igOf07e3hLAXtbzrmjp5lO4%2BxMJPi98EGOqUBjHHTJgUCYtyleUyuiMzqjN35SqdJEssDl2ZNJD%2F%2B382YO9qQmxJiWFdLhqQNfCKtXeJ1AcRGVzus0AJ1DMjrD5BDDapI6Q0r3OF5myhFo85RqpxtiYXlmhL9Gayk8W%2BcpS%2FhASskygfaKJUhXakcXta1z2Be%2BVnUKgYeCpv2cXr3BWCSnpt0%2BKI3ik3Oyc%2BvsIRsw3yxGhE3Sx8G5%2Fy2AwG4bm5i&X-Amz-Signature=c7a75214ca58297cdcf3a2c0803031b7f98faba6a51b97c2db91250efc766679&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
