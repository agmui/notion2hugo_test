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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHYXTUN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC6Yu4RjU0Lg19UcnH2pSjBDqy1vQQv1R4PIvde35RgmwIgGtDOihT8mfLnyzJ97j3jvdeDlK5PpOU9eW2Zc9ub4g0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDWHw7SoMRm3RV6P7yrcA2i5JwfouY5jG3NT3oAlwOiMgkTwf73HnGbzwxDxxgweMh6%2B01JwTf7B0cEupH22GS8TFIcQ0wR5Yj7BfmJ4r1b7vNjryZNxCjz8pT8TPOmkidkLA9UnpDMqDCoZ2g75OP06HXPf1IEOWW%2B6D3p9nWd5eKASvEfoQWZienPS4XvPPQ8074rkhodgfskliMenwjX6g8PRxkG1OuIQNBn%2FYNRuAoI2q0oxQLox3GrhKSEHWO3mVYru2J0wXKAcjA1Hi5CDzBI0iKtfcYCLDJpHJogCuQDGBK9%2Fb4Un6n3wzImuLxFNgYQee85nJzfOCPEtkxfF0eNGHT2d5gIlvTO9wjDWctX%2BzmcE23pQi1xjVBEbvFFI18sPv3EFalPWceLkDjNZNBekk%2Bi%2BuAcCfXnDrRP3HtFMUzUxZdPBG2S5OsyAiBEQ9kiwZuaCW1ttPhU2%2FToXEGRHCXbFs1jVZghSC8NHLUGo7AYEpPWv94OWMsN5WEuClZ9NczCQmnSCf14n7RxEMzgwS%2BMGKVoGouz1GhNda3lSK%2FkH%2Fxn1llCTGlJKfb7c9vevDf%2B%2FrbE5iyPguGqxULVsyZbwfL%2FEc%2BfpNTDN7sntj7x2EVPOKoZaQyFfpAtyDNRSZq1QiocaMOidx70GOqUBHycCmO2RLST7wAudMZESMkBs1za%2FWbe%2FcYByx%2By2lORJFYcQ1kuHWAB6bxRR%2FFNZ0wBZJUSpH8K5X%2BC%2BMI7kzt482PC%2B%2Bynpmw8BoXFg%2FlKNgvoZCWGQ7%2FXqsruABt72ULgw2tczPOabOY3xuk41c%2BdGJK3rU%2Bq80nMB1qiTAh75Sj7Rdx0D00FGBvoJ8%2B%2Bs0vGpFV6CBV5BweiskyOK38Ro1uVp&X-Amz-Signature=3361fb4ec63d56657dff5b3aaa7e8e2f9d371279a2d9602078dcdeece92218dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHYXTUN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC6Yu4RjU0Lg19UcnH2pSjBDqy1vQQv1R4PIvde35RgmwIgGtDOihT8mfLnyzJ97j3jvdeDlK5PpOU9eW2Zc9ub4g0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDWHw7SoMRm3RV6P7yrcA2i5JwfouY5jG3NT3oAlwOiMgkTwf73HnGbzwxDxxgweMh6%2B01JwTf7B0cEupH22GS8TFIcQ0wR5Yj7BfmJ4r1b7vNjryZNxCjz8pT8TPOmkidkLA9UnpDMqDCoZ2g75OP06HXPf1IEOWW%2B6D3p9nWd5eKASvEfoQWZienPS4XvPPQ8074rkhodgfskliMenwjX6g8PRxkG1OuIQNBn%2FYNRuAoI2q0oxQLox3GrhKSEHWO3mVYru2J0wXKAcjA1Hi5CDzBI0iKtfcYCLDJpHJogCuQDGBK9%2Fb4Un6n3wzImuLxFNgYQee85nJzfOCPEtkxfF0eNGHT2d5gIlvTO9wjDWctX%2BzmcE23pQi1xjVBEbvFFI18sPv3EFalPWceLkDjNZNBekk%2Bi%2BuAcCfXnDrRP3HtFMUzUxZdPBG2S5OsyAiBEQ9kiwZuaCW1ttPhU2%2FToXEGRHCXbFs1jVZghSC8NHLUGo7AYEpPWv94OWMsN5WEuClZ9NczCQmnSCf14n7RxEMzgwS%2BMGKVoGouz1GhNda3lSK%2FkH%2Fxn1llCTGlJKfb7c9vevDf%2B%2FrbE5iyPguGqxULVsyZbwfL%2FEc%2BfpNTDN7sntj7x2EVPOKoZaQyFfpAtyDNRSZq1QiocaMOidx70GOqUBHycCmO2RLST7wAudMZESMkBs1za%2FWbe%2FcYByx%2By2lORJFYcQ1kuHWAB6bxRR%2FFNZ0wBZJUSpH8K5X%2BC%2BMI7kzt482PC%2B%2Bynpmw8BoXFg%2FlKNgvoZCWGQ7%2FXqsruABt72ULgw2tczPOabOY3xuk41c%2BdGJK3rU%2Bq80nMB1qiTAh75Sj7Rdx0D00FGBvoJ8%2B%2Bs0vGpFV6CBV5BweiskyOK38Ro1uVp&X-Amz-Signature=37ee2f64724149ba69e79e7b059c18ce0c9375974883d4877911160f3aa6369d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
