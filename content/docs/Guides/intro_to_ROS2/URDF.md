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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZOKRBH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCx15tD6JxwilA6wwcntNUK8AmAeDBC6Zl01rbxynefywIhAJxRvTMg2kt00yL6IKrq4nm2uW2Edb6qPm2UGUH%2BCMnxKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFTEvk%2Bseh0K0%2Fs0wq3AOA6LatUyqSIONeQX8pdJuT%2FFUeF7mK5sjW090nRFRSMjcfrtf%2BJZwmFZzgus6yTbYge9YEjl8WAvWVM0d4ZB1ACsX%2Bln1R8zvCbFry2Won5cggcdw%2ByIerHrKBVCTADERUkadiyuag%2FGqccQ9CaTwYLJjKmDA8gG%2FbqBB10iR052tL0%2B%2BxzRujhD4zcNXY58SiRW9xFw4uGbPrbOzyXmtsABlmzY5j5CIvoWgS4RzykYgaXlUGfVSian1af06QZZLSZiXtUXc7PpFoaJm3mT2%2B1cIy6M81Sx6KTMxY%2F1l6eyABEctTAVqu%2FUjhoEhlR8LydNOXLIHc6ivOgeNsFbBECmnxqZi8PP7W5DG8vCZEYz6%2BDlNqlaqSKOaG%2BF%2BSZdtH5e7ja8Lty5fJZpiYd79aVYL%2FgYuaFHxSUE7OayVbHpYvr2d4LWU%2FLchTHu680a%2BuGz6cs5uzKreH2c6q%2BgrQPYHXNeSavrgVwZq3DbL6bv5rYak8lirSMlJ4YhBy5I0sANGM6e6UhXSplOSSt22TtyAk2IplXkKdQVsxehpkp0%2Bhnn%2F%2BqthbA6HJQ4Q2Rwb%2BoJllqVu%2BADRv27ZKwjqSy6YNzG60qfxIFgppPaYHegnKEC4%2BlkUPOdBqNzDB5abABjqkATVej36jIL1JcLCTIWYv6uoMwDgURGIiCt7%2BbiI9FZnnQklYRTwvXZOAprEbcOlrCLRVFeZm1Xe8MChyhfG920jbwzlhlZjtzAdmcsXIrCCA9nctyx6TKMSCqSAAKhUzSkktNc9nW812LCAEVHmWwlPJhwZtDAUR6atxH1kZXc%2BG1NUvKLudbiXAg4eLeeL2UTH6rVVipR%2B4cTyDvcZNz%2BR2gBZb&X-Amz-Signature=ee415b10b52d76c6f6db64a0f13185ed3f4385f4fd8c6ced6ccbd9232e1b8ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZOKRBH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCx15tD6JxwilA6wwcntNUK8AmAeDBC6Zl01rbxynefywIhAJxRvTMg2kt00yL6IKrq4nm2uW2Edb6qPm2UGUH%2BCMnxKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFTEvk%2Bseh0K0%2Fs0wq3AOA6LatUyqSIONeQX8pdJuT%2FFUeF7mK5sjW090nRFRSMjcfrtf%2BJZwmFZzgus6yTbYge9YEjl8WAvWVM0d4ZB1ACsX%2Bln1R8zvCbFry2Won5cggcdw%2ByIerHrKBVCTADERUkadiyuag%2FGqccQ9CaTwYLJjKmDA8gG%2FbqBB10iR052tL0%2B%2BxzRujhD4zcNXY58SiRW9xFw4uGbPrbOzyXmtsABlmzY5j5CIvoWgS4RzykYgaXlUGfVSian1af06QZZLSZiXtUXc7PpFoaJm3mT2%2B1cIy6M81Sx6KTMxY%2F1l6eyABEctTAVqu%2FUjhoEhlR8LydNOXLIHc6ivOgeNsFbBECmnxqZi8PP7W5DG8vCZEYz6%2BDlNqlaqSKOaG%2BF%2BSZdtH5e7ja8Lty5fJZpiYd79aVYL%2FgYuaFHxSUE7OayVbHpYvr2d4LWU%2FLchTHu680a%2BuGz6cs5uzKreH2c6q%2BgrQPYHXNeSavrgVwZq3DbL6bv5rYak8lirSMlJ4YhBy5I0sANGM6e6UhXSplOSSt22TtyAk2IplXkKdQVsxehpkp0%2Bhnn%2F%2BqthbA6HJQ4Q2Rwb%2BoJllqVu%2BADRv27ZKwjqSy6YNzG60qfxIFgppPaYHegnKEC4%2BlkUPOdBqNzDB5abABjqkATVej36jIL1JcLCTIWYv6uoMwDgURGIiCt7%2BbiI9FZnnQklYRTwvXZOAprEbcOlrCLRVFeZm1Xe8MChyhfG920jbwzlhlZjtzAdmcsXIrCCA9nctyx6TKMSCqSAAKhUzSkktNc9nW812LCAEVHmWwlPJhwZtDAUR6atxH1kZXc%2BG1NUvKLudbiXAg4eLeeL2UTH6rVVipR%2B4cTyDvcZNz%2BR2gBZb&X-Amz-Signature=a5702702fd34694b4fe89bd823203fd9ad91bda8754a9358f2ffacdadfbb9d82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
