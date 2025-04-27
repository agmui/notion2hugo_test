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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWSJZ4VJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIj64nCq7rAmJ5vX79K2l0avALxHQ5V7CIxuLdtOxT2AiAhL%2BianmH1oFvYZjPumn98KOkx1yDD2IYn8c1lOUI10Sr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMdgUTHsQvSxEvHgzJKtwDQ1PqjX%2FkkPr3Y9vFCntrEs7WTNFXjVX9ULYy4LrW4tej%2BLD342qwpQkIukbyQaumS0S8la3RohsjE0l8RPUCLUPd8o7iFdaAE2qFekdwm3GNuVXh%2BSIB1FZxXykqbKpPOLxwdz%2FKOuHKIEcz6qde4vGX8BfiiWIwttBt1aJGiaNTgzCnAs67pS1irhGCRDvrHbUx6IbCFoMk%2BCWw7zbNaImYx764HNz9gNZxWW8BxRNLKQCh2PoqJJZT8QSJWHehYOgDrogdlK9E3ho7WVaiwm0rlPjsEkhoNN%2FZsXZ%2FWON5FmDxH9bByI2f1VaN8NdNZCdGjuKBMY3ORc3jfPOL8VWBJ%2F3nJGrNx%2F9lZNjVsgTa2A08Ri%2BRRdhVp9ULDmAWLvNqrOnAPM25w%2Fx7nzXSsb50cyz718jvNOArKXb6A34MCUnI0gnCDzEmrhlRcZ6sGxF6o8vrJPJfwAShQW8F9Q%2F%2FEnw5ymNify4QZLPpGpZZa6IZt%2FHvJz9EwdRsxeZcdIMMudWxBS9J7Qrck603f6mLwqUopGyXENP44Dmz0LKdFjSdj156nZxLV0D3mjYTruFbQWdU3h%2BXtlPMGu%2BvHqi0SRPxamC2vxiOFfRsgvuwpSaR6UADoEF9lzYwpe22wAY6pgGxYVEmamaY1gJlzBbwL3JW786I6UZUXgkQC4JPvehfi5RuGFfKda2DBVoNs4pbdWngL45K%2FxGx2%2Bh7H%2FtmyzbUVidTSuqMWrAa7J3y5GD5qGb%2FZBb2KKW9vvto9J7g4GeMD5ch9f%2Bx%2BcvTXEuRR395c7HQJe1jbxniW5li9Hm6NcHANvCF5yB3btDWVDF74Itd7YHA3YMuyKkDEIlSYv%2FkX3CX0g3P&X-Amz-Signature=f44e6a8b5d48ff6dfa7c1b49e8860db778999f09f28873677a63a8550ebde2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWSJZ4VJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIj64nCq7rAmJ5vX79K2l0avALxHQ5V7CIxuLdtOxT2AiAhL%2BianmH1oFvYZjPumn98KOkx1yDD2IYn8c1lOUI10Sr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMdgUTHsQvSxEvHgzJKtwDQ1PqjX%2FkkPr3Y9vFCntrEs7WTNFXjVX9ULYy4LrW4tej%2BLD342qwpQkIukbyQaumS0S8la3RohsjE0l8RPUCLUPd8o7iFdaAE2qFekdwm3GNuVXh%2BSIB1FZxXykqbKpPOLxwdz%2FKOuHKIEcz6qde4vGX8BfiiWIwttBt1aJGiaNTgzCnAs67pS1irhGCRDvrHbUx6IbCFoMk%2BCWw7zbNaImYx764HNz9gNZxWW8BxRNLKQCh2PoqJJZT8QSJWHehYOgDrogdlK9E3ho7WVaiwm0rlPjsEkhoNN%2FZsXZ%2FWON5FmDxH9bByI2f1VaN8NdNZCdGjuKBMY3ORc3jfPOL8VWBJ%2F3nJGrNx%2F9lZNjVsgTa2A08Ri%2BRRdhVp9ULDmAWLvNqrOnAPM25w%2Fx7nzXSsb50cyz718jvNOArKXb6A34MCUnI0gnCDzEmrhlRcZ6sGxF6o8vrJPJfwAShQW8F9Q%2F%2FEnw5ymNify4QZLPpGpZZa6IZt%2FHvJz9EwdRsxeZcdIMMudWxBS9J7Qrck603f6mLwqUopGyXENP44Dmz0LKdFjSdj156nZxLV0D3mjYTruFbQWdU3h%2BXtlPMGu%2BvHqi0SRPxamC2vxiOFfRsgvuwpSaR6UADoEF9lzYwpe22wAY6pgGxYVEmamaY1gJlzBbwL3JW786I6UZUXgkQC4JPvehfi5RuGFfKda2DBVoNs4pbdWngL45K%2FxGx2%2Bh7H%2FtmyzbUVidTSuqMWrAa7J3y5GD5qGb%2FZBb2KKW9vvto9J7g4GeMD5ch9f%2Bx%2BcvTXEuRR395c7HQJe1jbxniW5li9Hm6NcHANvCF5yB3btDWVDF74Itd7YHA3YMuyKkDEIlSYv%2FkX3CX0g3P&X-Amz-Signature=4873b908217f033601e732c8d9db16562ceab8ecb4df17edb7ab25b221eddf40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
