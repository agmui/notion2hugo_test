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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT76SG2A%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2qBjOOopiUfVQweIz8Z8%2BYGdfVCU6LSTcH1UOik%2BrRgIhAP7QSc9%2F1fem8ROhqhEFeYts%2BhA1F5NlZvRVCfFVXdQAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4BAxZqchBDWX1aJoq3AP%2BEhZTJK1wDDMBaefaeoPGDu%2BAlboxAM2L9POcKzeVSfvSCRZ73Se00KpzdwvGL%2Btdds99mLDSVe2W28RBLIzcPI5Uia%2BZvfLro0fdC9KiXvI2LElHIUXnZ8QlSNEZjogugc94gt4tfM78VilgIpS4G9oHTqI9MMzSqFCcdHTzNeQCrTK4aqQz1kRL3xcvcn3Xu1DuNRRSbZXRKFOqhQRFxWCSSb1C%2FOrKtj7lOmctCS8NF3woN3T3rTr2UxU5axT80Re%2Bs6T8p%2F%2Fg3BhmVuyigl0Kq5P5zoYwx8kZNFDyZHeQKKfEMEPfThZSsEq3eZMYmOietVPFvsp2i4zBmvr%2FPBkQfHQVjFUGxieR9N2AqB0V6lMTDd0ao3FpcqbdS3uBUEknkqIGBd%2Bjj3FJt0dQRmXHJD2Hy85bdVhDQMD5hxMFgmd3p%2FR43%2BnSU8xWE9XxAfsRr96Ly9k3xhTqf6WL12TeUEL0cIqG9s6JEMZ6eMovxexvBy%2FN6bFc2rt%2Fw0sXB%2FjpEsJj5sz6D4dGlOERlcsYNG7R0XDyI6g172O02Kwzx4zROpcRSett8yPfLFR%2BCrAKM1FHIXxCTBn3%2FS7YFJliH0tIIJCs02eaUxN%2Ff5ivEG6AOVOCmmR0wDCItJbCBjqkATgVB7SgfO%2BwjrU1rHnbnLWR5GZ0gdvWZJbRb1ZOCauAiG8P2wv%2B2LvwftP%2Bqj9k2gLZaIQwFoH1HBWOBlUlmhmrSXfDSbMEUCP3X2whBYOgpkSPxYLErl%2BuU9q7XBgcsuNBse5xHmoLE6GPoPGgej%2FilQqI%2F3GxJ%2BjBi1EpYcS5HJ9Hm01Q2FN33421%2B5RxRmcSSmlAVGx1H5F9cWAtkuDzsXj3&X-Amz-Signature=09f0bee053ed0d11af491af016b8c3b569d9639a696bd321ce598c124263da75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT76SG2A%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2qBjOOopiUfVQweIz8Z8%2BYGdfVCU6LSTcH1UOik%2BrRgIhAP7QSc9%2F1fem8ROhqhEFeYts%2BhA1F5NlZvRVCfFVXdQAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4BAxZqchBDWX1aJoq3AP%2BEhZTJK1wDDMBaefaeoPGDu%2BAlboxAM2L9POcKzeVSfvSCRZ73Se00KpzdwvGL%2Btdds99mLDSVe2W28RBLIzcPI5Uia%2BZvfLro0fdC9KiXvI2LElHIUXnZ8QlSNEZjogugc94gt4tfM78VilgIpS4G9oHTqI9MMzSqFCcdHTzNeQCrTK4aqQz1kRL3xcvcn3Xu1DuNRRSbZXRKFOqhQRFxWCSSb1C%2FOrKtj7lOmctCS8NF3woN3T3rTr2UxU5axT80Re%2Bs6T8p%2F%2Fg3BhmVuyigl0Kq5P5zoYwx8kZNFDyZHeQKKfEMEPfThZSsEq3eZMYmOietVPFvsp2i4zBmvr%2FPBkQfHQVjFUGxieR9N2AqB0V6lMTDd0ao3FpcqbdS3uBUEknkqIGBd%2Bjj3FJt0dQRmXHJD2Hy85bdVhDQMD5hxMFgmd3p%2FR43%2BnSU8xWE9XxAfsRr96Ly9k3xhTqf6WL12TeUEL0cIqG9s6JEMZ6eMovxexvBy%2FN6bFc2rt%2Fw0sXB%2FjpEsJj5sz6D4dGlOERlcsYNG7R0XDyI6g172O02Kwzx4zROpcRSett8yPfLFR%2BCrAKM1FHIXxCTBn3%2FS7YFJliH0tIIJCs02eaUxN%2Ff5ivEG6AOVOCmmR0wDCItJbCBjqkATgVB7SgfO%2BwjrU1rHnbnLWR5GZ0gdvWZJbRb1ZOCauAiG8P2wv%2B2LvwftP%2Bqj9k2gLZaIQwFoH1HBWOBlUlmhmrSXfDSbMEUCP3X2whBYOgpkSPxYLErl%2BuU9q7XBgcsuNBse5xHmoLE6GPoPGgej%2FilQqI%2F3GxJ%2BjBi1EpYcS5HJ9Hm01Q2FN33421%2B5RxRmcSSmlAVGx1H5F9cWAtkuDzsXj3&X-Amz-Signature=704ac17f53b1bf21b139c2048d93dfebd96102284049df7bb7870c3e1954aa50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
