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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOM27Z2D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyt1mGuuH2%2FxUCojTVPiX08jVcqak96QYjb2mAY7aVcAIgREVS1Pti7tg7Z38POEsn7PlA0T1L7lB3JK3N%2BCyseDEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeWctgWKOB0hUSfVyrcA0SOYaBsOWxIIt6IMssrQeuVcLd38gZDnUBguP9%2BI%2B0UnveLBUr%2FbXebKTaQNerOdG0h%2B7w65ofxkD1ZqddCXr1DgbsKP9Q71sLynpjQEYSJwfovxagQIUV0DYqgTzCs8I%2Be3cjK%2BpwESdWEvb5GVyUinDp%2BVfekPd3fKCBd2FKGTzVVIEb80aCa0TO%2B9qJmHf7InU%2BhVmr3fId35QOiiULOqiAyziz7I2isaG6Ulq2GACJNVwyR%2Bc%2FMUOyBsXwuhVnrAP9sc%2FKpTAeeeDHzPzHFNRgShbM8XhF47A3szg2044xjW0MJQdMDCRhJxdTQW%2FUehrDGeRkFzz%2Bt7v1ii7UPBEaA61VVihlFBPsh1jg1jcr5InLk0v%2Bc3uYVl9O2KGWRpNs1JnlpAIWKunyInt5RnR3O3fLUefGMNmH1n6%2FRpYw8%2F3QN1lzCotQVYyAn9ByYQwwXvZZ9ommTXkERAp09rjlKoiFr7mMHxNm25eO51h8fiAnJWHragYjKTu%2FFykf3JsHNf8zGGgU3BrKYbX2mzfP9svaV3D0ZnH2363adUlpNL3eDtXhbgz3AorqCMtApb6e1Awz4E6jh5gJxvWOMaj41Hkp9lalYaGfJTMMtnoWBiR1L6%2BN4yGloMPf6rcEGOqUB%2BOWFLsdzMW6h68qUjHrU6KrV8309pt45taR75N7tRgne12XzoCSqXaibT99UPNdYTjeRC2MPrp9NLSqS6vNWgUunbTl5KGK70n6ORKyqdu0EeTeN0UslY37Z0dJj37bGYJCyeWjCgoOfRckE0EAnCzPxlFbH3DEbvwyaq%2FkMtVtJR5H%2BviJmPmmP7O7TsH%2B%2FIxuAtpqM80Vl9zOgVQs0uZwEfD1X&X-Amz-Signature=98efb6310f0a841f8edf62f815feffcd831ad78c31c2d1f8a80c9671127444ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOM27Z2D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyt1mGuuH2%2FxUCojTVPiX08jVcqak96QYjb2mAY7aVcAIgREVS1Pti7tg7Z38POEsn7PlA0T1L7lB3JK3N%2BCyseDEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeWctgWKOB0hUSfVyrcA0SOYaBsOWxIIt6IMssrQeuVcLd38gZDnUBguP9%2BI%2B0UnveLBUr%2FbXebKTaQNerOdG0h%2B7w65ofxkD1ZqddCXr1DgbsKP9Q71sLynpjQEYSJwfovxagQIUV0DYqgTzCs8I%2Be3cjK%2BpwESdWEvb5GVyUinDp%2BVfekPd3fKCBd2FKGTzVVIEb80aCa0TO%2B9qJmHf7InU%2BhVmr3fId35QOiiULOqiAyziz7I2isaG6Ulq2GACJNVwyR%2Bc%2FMUOyBsXwuhVnrAP9sc%2FKpTAeeeDHzPzHFNRgShbM8XhF47A3szg2044xjW0MJQdMDCRhJxdTQW%2FUehrDGeRkFzz%2Bt7v1ii7UPBEaA61VVihlFBPsh1jg1jcr5InLk0v%2Bc3uYVl9O2KGWRpNs1JnlpAIWKunyInt5RnR3O3fLUefGMNmH1n6%2FRpYw8%2F3QN1lzCotQVYyAn9ByYQwwXvZZ9ommTXkERAp09rjlKoiFr7mMHxNm25eO51h8fiAnJWHragYjKTu%2FFykf3JsHNf8zGGgU3BrKYbX2mzfP9svaV3D0ZnH2363adUlpNL3eDtXhbgz3AorqCMtApb6e1Awz4E6jh5gJxvWOMaj41Hkp9lalYaGfJTMMtnoWBiR1L6%2BN4yGloMPf6rcEGOqUB%2BOWFLsdzMW6h68qUjHrU6KrV8309pt45taR75N7tRgne12XzoCSqXaibT99UPNdYTjeRC2MPrp9NLSqS6vNWgUunbTl5KGK70n6ORKyqdu0EeTeN0UslY37Z0dJj37bGYJCyeWjCgoOfRckE0EAnCzPxlFbH3DEbvwyaq%2FkMtVtJR5H%2BviJmPmmP7O7TsH%2B%2FIxuAtpqM80Vl9zOgVQs0uZwEfD1X&X-Amz-Signature=f1ec0a7aba695b54fed4cdc57bb026a6a6870d4793c7ccac43539fe03d804ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
