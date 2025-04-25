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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BTCVHE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkIzv1WPzyWTiRUwtaB0muXx9%2FTbtpvJ%2B6OkScXTZuUAiA0mZae70yysbfrCaRioi9Om8bSMecOFc0ixn1DZDnOBSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMs9j%2FVIR3svMwlchHKtwDTd17Enln11%2FPEtsMZsLHoIMBf0zlC7dIDLNVj3no25AVNZhd77iWLAdeRyBfhZHSwLSjX58RnCfkj77nZhdvFRz2SkwtRaUVZ8RJ8NvHdTLvlBiSfGV7F0JWWlIUhu4RRJTugFRSkNkA%2BGuCVUqi1WPiyoH6iQJ%2Fizhn5sVHxBNX5K80nbwAI%2F%2FaiMyGUpYkS1WQdzf1FyJpjLI1RQVxY5l63IrGJa1TO58zULzgPvG01I%2Fk%2FzRC3pZzbCGHkzJwWaQD0PpgGSwUr8Af3ZxNCRerVCmcRTictdliWxG5W1WonmsSp2aza24GVmqZNvPV%2F2%2FBZJ1YScRD6XK%2FjNTjprpIfrXt2hjb8elkP7ksimks1ID352RBNjqnbuR%2BdnDn9SDjC2aPvj1Uvuwpu2Ak32NvRDtOeY9nBGYezvNKA8I5GanIRf%2BB7k6PnMRMP04BC3NpTAu1vxbQoNWaYlpVUdEQwRyzbWtF4opigoPvgTZ4e%2BXX77GKdcI50kRKW7I2g1c%2FWNkn32nlKcd9Y3dI0e5mx6UDaiw%2Fsh0ZBCNjtvWtNEB5YjZ8e65gMUDf%2FMMpK0BzFCt6pKDjjtopwn%2B6FLceHg0vFVHlAnLXtqKw%2FRyGMchTfbnVKtp%2FOy8wwbSuwAY6pgHp5JEBi1U4z6tK1rukL7WR49WgXgDCkqUr02AGFlm3JYzikTqts2%2FdxEnoL9ED60Wm0NNip7GzdkHgB7vZ9ZwGKJO4Rwi9aObuJhQc11X0A%2F6ynkms9fBDSIGFtmLBFbssqF85JCbsB1VArbHAre4pXHTVVjQYktBHPnk6prQC0F%2B3fVye2oTFJcOh2K0NAgTil0OJO3esBiGd3Lvro%2F5BLSfyTnCu&X-Amz-Signature=293a0fa8a3946218f42f050ec01c710cd80ba7bf2401421012667247772dddd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BTCVHE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkIzv1WPzyWTiRUwtaB0muXx9%2FTbtpvJ%2B6OkScXTZuUAiA0mZae70yysbfrCaRioi9Om8bSMecOFc0ixn1DZDnOBSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMs9j%2FVIR3svMwlchHKtwDTd17Enln11%2FPEtsMZsLHoIMBf0zlC7dIDLNVj3no25AVNZhd77iWLAdeRyBfhZHSwLSjX58RnCfkj77nZhdvFRz2SkwtRaUVZ8RJ8NvHdTLvlBiSfGV7F0JWWlIUhu4RRJTugFRSkNkA%2BGuCVUqi1WPiyoH6iQJ%2Fizhn5sVHxBNX5K80nbwAI%2F%2FaiMyGUpYkS1WQdzf1FyJpjLI1RQVxY5l63IrGJa1TO58zULzgPvG01I%2Fk%2FzRC3pZzbCGHkzJwWaQD0PpgGSwUr8Af3ZxNCRerVCmcRTictdliWxG5W1WonmsSp2aza24GVmqZNvPV%2F2%2FBZJ1YScRD6XK%2FjNTjprpIfrXt2hjb8elkP7ksimks1ID352RBNjqnbuR%2BdnDn9SDjC2aPvj1Uvuwpu2Ak32NvRDtOeY9nBGYezvNKA8I5GanIRf%2BB7k6PnMRMP04BC3NpTAu1vxbQoNWaYlpVUdEQwRyzbWtF4opigoPvgTZ4e%2BXX77GKdcI50kRKW7I2g1c%2FWNkn32nlKcd9Y3dI0e5mx6UDaiw%2Fsh0ZBCNjtvWtNEB5YjZ8e65gMUDf%2FMMpK0BzFCt6pKDjjtopwn%2B6FLceHg0vFVHlAnLXtqKw%2FRyGMchTfbnVKtp%2FOy8wwbSuwAY6pgHp5JEBi1U4z6tK1rukL7WR49WgXgDCkqUr02AGFlm3JYzikTqts2%2FdxEnoL9ED60Wm0NNip7GzdkHgB7vZ9ZwGKJO4Rwi9aObuJhQc11X0A%2F6ynkms9fBDSIGFtmLBFbssqF85JCbsB1VArbHAre4pXHTVVjQYktBHPnk6prQC0F%2B3fVye2oTFJcOh2K0NAgTil0OJO3esBiGd3Lvro%2F5BLSfyTnCu&X-Amz-Signature=5a99f5ab7e9045c72ddac9de16e73b371bebc261bd37811d3af27447de7e0bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
