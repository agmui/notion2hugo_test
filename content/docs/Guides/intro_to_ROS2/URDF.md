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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGF4C55%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0qVBjk%2BDG3NHRg0xVP%2FtXacj3xCH1eLLDr0ogRbrY%2FgIhAIYfw7vRA%2FT1PcKFgaaRbX6e%2BejXP9YdbfLHAwiAnaKkKv8DCF0QABoMNjM3NDIzMTgzODA1Igypn9OhkpDSBGdoWUAq3AMzuFphDIrNFl7ZyTmcMRNP2TSEgT8wdfI3wXR9j4Y%2F2IAIt9KtxY6yqZZxDMdl3kt%2FApsj1iLI5JSsSIx2dIUdSBcdp8uwjQSF3BAPJMquwq%2BUqgcJBOCHoR181jiTNGogXhnlUE9Uc3y06kNxrH9IAXy%2Fv2VTQYUwI%2BaWYPFV%2BawmUWTipnU2tDTS57fEw4%2FokjbHnl6T1NfsP%2BmHpW22UB3JxicOv9cvMHOVpBQcyphwDtqlxUcgr850zEKEWfiuhXik4m1lqVuNopVrn%2Bw4gAbF3lr4Tp0LQ2oBfq4R64DcLzQpuxGhQuFMDQeh7Ohvd3FRKFp%2Fcm60EOAFhcRJyjB0VE42qzAoAq%2BOg7De2rSWegFygYJOeGoUbMdTSSlBCXF0rV5XrbROW4OANmHR8LGwvWrX48MLwugm6MMif9VAJMVo2O2o0rcFFblqdhnYgAbOq0z0tBECvAkQAIyeRaT7ZxgG%2BJK2LyI6dmZM13JOVKGjC7M%2Bz%2FCId7Fc7%2BlsG1NyNGVMSgMZkFG53n2kfm%2For%2BGQaTLmqVtLw6hMLLyRbUIes8SwKbL1G8zRXViZ89q2vsBCi02sIqYtgxtMOadPJE5w92E9ajLjkcOQA4kGRzrNFDow7wADljCDiPy9BjqkAZ1rRZDPVqWVdzTtOT4tE7vp%2FoORxdB9oV0hNrbjfea9aQdADL5Y5tclFKnE6eSCQ9KVr%2FSYAdvlOUxhIwh9pIUIcuPK3lDtSCdDICDAiHJ8z66YN7wjzmgC5Mx1a%2FK0yVdZTOYtlMZHBflsZGPlYKvUd1zDWoNc2PUx4pS0Zbe3fPPeQfbp58MfGV8nmbrDQgiX%2Bzg2eQadxV9C%2BC%2F%2B2L1kaZGa&X-Amz-Signature=0f9cb92a483dbb509a03dcaf01a07db385cf1236cdc2d12e4806ef0dd11841bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGF4C55%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0qVBjk%2BDG3NHRg0xVP%2FtXacj3xCH1eLLDr0ogRbrY%2FgIhAIYfw7vRA%2FT1PcKFgaaRbX6e%2BejXP9YdbfLHAwiAnaKkKv8DCF0QABoMNjM3NDIzMTgzODA1Igypn9OhkpDSBGdoWUAq3AMzuFphDIrNFl7ZyTmcMRNP2TSEgT8wdfI3wXR9j4Y%2F2IAIt9KtxY6yqZZxDMdl3kt%2FApsj1iLI5JSsSIx2dIUdSBcdp8uwjQSF3BAPJMquwq%2BUqgcJBOCHoR181jiTNGogXhnlUE9Uc3y06kNxrH9IAXy%2Fv2VTQYUwI%2BaWYPFV%2BawmUWTipnU2tDTS57fEw4%2FokjbHnl6T1NfsP%2BmHpW22UB3JxicOv9cvMHOVpBQcyphwDtqlxUcgr850zEKEWfiuhXik4m1lqVuNopVrn%2Bw4gAbF3lr4Tp0LQ2oBfq4R64DcLzQpuxGhQuFMDQeh7Ohvd3FRKFp%2Fcm60EOAFhcRJyjB0VE42qzAoAq%2BOg7De2rSWegFygYJOeGoUbMdTSSlBCXF0rV5XrbROW4OANmHR8LGwvWrX48MLwugm6MMif9VAJMVo2O2o0rcFFblqdhnYgAbOq0z0tBECvAkQAIyeRaT7ZxgG%2BJK2LyI6dmZM13JOVKGjC7M%2Bz%2FCId7Fc7%2BlsG1NyNGVMSgMZkFG53n2kfm%2For%2BGQaTLmqVtLw6hMLLyRbUIes8SwKbL1G8zRXViZ89q2vsBCi02sIqYtgxtMOadPJE5w92E9ajLjkcOQA4kGRzrNFDow7wADljCDiPy9BjqkAZ1rRZDPVqWVdzTtOT4tE7vp%2FoORxdB9oV0hNrbjfea9aQdADL5Y5tclFKnE6eSCQ9KVr%2FSYAdvlOUxhIwh9pIUIcuPK3lDtSCdDICDAiHJ8z66YN7wjzmgC5Mx1a%2FK0yVdZTOYtlMZHBflsZGPlYKvUd1zDWoNc2PUx4pS0Zbe3fPPeQfbp58MfGV8nmbrDQgiX%2Bzg2eQadxV9C%2BC%2F%2B2L1kaZGa&X-Amz-Signature=c6acb50a5c24509836ec2829beca9a8f59a174870f02c45ed3b08b7e455a10d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
