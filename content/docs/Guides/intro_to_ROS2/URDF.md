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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Q24J3L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC011fl5ENH6caO%2B%2B7kr9jmrtNQeFBWQexU0ua1AaFdrQIgC%2FjHJGej6M26kwBRHhXdgxF8jsQ6IbAxDUwGvMA0tt8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNG7cclfEE6KiDT5NircA0lo8EOkpnEgMsuOFwLB6SGutRCvKmaDOncJ%2FB8WQ1me%2FC8INtp%2FutjKGMQWwJgrYVhoFbD8pYiXcFJX2%2BsvCnl5AHcD6mCZs87u59SeSey8L%2Bs3BbcIPjvetnRcCf%2FNVbOlPooBjPTw5Ug3D9MGs5RiVxhSY0tuuFCV3QzHBMPPzwOF3suvEDV37mRkmiWqdEDAhuwGzTtUdxqb5eSDgKPC8G%2BM8Y%2FYIY0brDXbVengxqEUZ%2FDpkHeHVKjIcg7Y5063PRMQLGaeehcMrPwdpR3OHYQvwicPUCNiYXFtYSFPMK1%2FanY3wkU8qBY9ND47jir4LpVASAtxgtctoaltbPywU5rwBBe17gH2LwGp3%2F9HR46KWDWfrrrOhvcRTwHh%2BxMU7tl9qmR1LuwzGfh3rCpObgbEBfdeNjK8sA7h2xbRFTdCgiU3FXxVsGZyCnTVwpre%2BnoqDs5XKmfne4CN%2B3MGUvqVodwylqAci87wtdJ4sloIrBVP%2BKKpQR8rlhecPSLv6gwfvvvpoUyEv3V90BvtRE1fd05IBdEmO7OigzSNCWpTTT8bfc51bqpztUV6vHd2Fqbh7fOBHmuyLSxbCl6Iewekc6HQXM2DCSJtIyHozwrsQEkFdFPSgvnAMJmD9r8GOqUBBogaUjZHga8Hm6NCLmeWgyAd43TJwkNcSZhVY0nYDBtapGAoTziKR9uj6iKQWAsmBUGgB59txpioxQD5z4xS84iyan4FS6gQnkW%2F6jTynOOijejrpLCG4XiDEPzcsaYks1O3eFYKB7aqEtGNr1MSUM0jtIt2m62shndS7He6WN58dzL8a0%2Bb5hO1Z54wvGSUCYny%2FMpZSDZE9iGMgThKn%2BlW0v5D&X-Amz-Signature=1cee53c4461fbe2e25a084e2cef03069cb279e66642b63dfe8bac61ddcccf238&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Q24J3L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC011fl5ENH6caO%2B%2B7kr9jmrtNQeFBWQexU0ua1AaFdrQIgC%2FjHJGej6M26kwBRHhXdgxF8jsQ6IbAxDUwGvMA0tt8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNG7cclfEE6KiDT5NircA0lo8EOkpnEgMsuOFwLB6SGutRCvKmaDOncJ%2FB8WQ1me%2FC8INtp%2FutjKGMQWwJgrYVhoFbD8pYiXcFJX2%2BsvCnl5AHcD6mCZs87u59SeSey8L%2Bs3BbcIPjvetnRcCf%2FNVbOlPooBjPTw5Ug3D9MGs5RiVxhSY0tuuFCV3QzHBMPPzwOF3suvEDV37mRkmiWqdEDAhuwGzTtUdxqb5eSDgKPC8G%2BM8Y%2FYIY0brDXbVengxqEUZ%2FDpkHeHVKjIcg7Y5063PRMQLGaeehcMrPwdpR3OHYQvwicPUCNiYXFtYSFPMK1%2FanY3wkU8qBY9ND47jir4LpVASAtxgtctoaltbPywU5rwBBe17gH2LwGp3%2F9HR46KWDWfrrrOhvcRTwHh%2BxMU7tl9qmR1LuwzGfh3rCpObgbEBfdeNjK8sA7h2xbRFTdCgiU3FXxVsGZyCnTVwpre%2BnoqDs5XKmfne4CN%2B3MGUvqVodwylqAci87wtdJ4sloIrBVP%2BKKpQR8rlhecPSLv6gwfvvvpoUyEv3V90BvtRE1fd05IBdEmO7OigzSNCWpTTT8bfc51bqpztUV6vHd2Fqbh7fOBHmuyLSxbCl6Iewekc6HQXM2DCSJtIyHozwrsQEkFdFPSgvnAMJmD9r8GOqUBBogaUjZHga8Hm6NCLmeWgyAd43TJwkNcSZhVY0nYDBtapGAoTziKR9uj6iKQWAsmBUGgB59txpioxQD5z4xS84iyan4FS6gQnkW%2F6jTynOOijejrpLCG4XiDEPzcsaYks1O3eFYKB7aqEtGNr1MSUM0jtIt2m62shndS7He6WN58dzL8a0%2Bb5hO1Z54wvGSUCYny%2FMpZSDZE9iGMgThKn%2BlW0v5D&X-Amz-Signature=5fc7f29e1529d2e17a8593a028d3582d5e5e996e228a51a33bf49d055ae102a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
