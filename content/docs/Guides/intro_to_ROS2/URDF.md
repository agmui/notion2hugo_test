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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OK6CGE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFStbW5Km%2BV7FA4c%2B8JjzpkD6GZDybZhObZSN3jx%2Fr9qAiA6dw%2Fk32RwPObyigQ4As0RT6CTf1kJX4owPL22iYHE4yqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6t2c2%2BZtalJXDs0KtwDh0cPqJCe%2FN%2B7XqaUf%2FVjCPER2xtM7nNONdmBGS0Nk1Osam0otqZLOhTmdlcVm19l%2BXXHtUUXgROk1eVv6ASmWotOXOfXh6ZeBeuwM%2F6KPEs%2Fsx4VOagzl2gKhMSGC2tSxWIi%2FjbvjFGHSF7ePc8KRuBkz%2F562kljCQdmWqSZDS3Z4%2FMGAwVfWjjDhlo1Sq6IF20iiw6KD%2BV3KkgGA4ngk2cjg69rsy3XAuhusVhnkVJrfyEira5XIu7cfA2y33ABfAfFOqqkVgur6%2Fts30iglgz19pOTsK6rhhqfAB98vYQL0mAk%2F83g7expigalrRL4uz9NNyhQLDuW3TvtpTacTHDEUUWMhQ282HaqoO1nP%2FU6%2Be4aL1dWU8aUtp1cNB75tAVpA4vQzdR1goTR86D6GLNHTnkajNRZhgMDVK2l9sG5Oykx4FpYUY%2FMzZXrpXdkAzlJXCrCSmUNfYI7GGG78T30Sp9nssZ6LEdNxisv2%2BiXj979BVcqCkIfhYcFeKy95sIHhLB4gV82%2BTZSQ%2Fq4PGBnCiYu9cLdfXLXkVA7aHq7VdTY5uCHdomU6X2TusKvR6XvHbK7G8CTEHeXYGu11m5qn56CbkoUSJoifr8aKKILULhBVU0GiZs%2F4KIw0PT1wQY6pgH6Q64xtEc2XElMFYryIpsDgqhGLWnn9nMcJZW2UJeP0hcq6DS%2BlDC9BsvvGy%2F%2BuMxczQ06%2B8ZbTRgH8asrLIPjCq3s3WrTB92XYPfDSJlP%2BRn2D4%2Fznixww9JAVVA1iJmmgUNmlXS1XORDttuTNwB4QPtuKcHTdSTSfUPnhouiEU7h4LPOyuf8pGyJ5clxUhoqZR9T43sxgJFFHl2%2BIcv1Q5SUcIR2&X-Amz-Signature=be84c627ef8a8b85f46b6adcf38953f8c3a57c50ca5186e4897e6d8a5ebce9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635OK6CGE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFStbW5Km%2BV7FA4c%2B8JjzpkD6GZDybZhObZSN3jx%2Fr9qAiA6dw%2Fk32RwPObyigQ4As0RT6CTf1kJX4owPL22iYHE4yqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6t2c2%2BZtalJXDs0KtwDh0cPqJCe%2FN%2B7XqaUf%2FVjCPER2xtM7nNONdmBGS0Nk1Osam0otqZLOhTmdlcVm19l%2BXXHtUUXgROk1eVv6ASmWotOXOfXh6ZeBeuwM%2F6KPEs%2Fsx4VOagzl2gKhMSGC2tSxWIi%2FjbvjFGHSF7ePc8KRuBkz%2F562kljCQdmWqSZDS3Z4%2FMGAwVfWjjDhlo1Sq6IF20iiw6KD%2BV3KkgGA4ngk2cjg69rsy3XAuhusVhnkVJrfyEira5XIu7cfA2y33ABfAfFOqqkVgur6%2Fts30iglgz19pOTsK6rhhqfAB98vYQL0mAk%2F83g7expigalrRL4uz9NNyhQLDuW3TvtpTacTHDEUUWMhQ282HaqoO1nP%2FU6%2Be4aL1dWU8aUtp1cNB75tAVpA4vQzdR1goTR86D6GLNHTnkajNRZhgMDVK2l9sG5Oykx4FpYUY%2FMzZXrpXdkAzlJXCrCSmUNfYI7GGG78T30Sp9nssZ6LEdNxisv2%2BiXj979BVcqCkIfhYcFeKy95sIHhLB4gV82%2BTZSQ%2Fq4PGBnCiYu9cLdfXLXkVA7aHq7VdTY5uCHdomU6X2TusKvR6XvHbK7G8CTEHeXYGu11m5qn56CbkoUSJoifr8aKKILULhBVU0GiZs%2F4KIw0PT1wQY6pgH6Q64xtEc2XElMFYryIpsDgqhGLWnn9nMcJZW2UJeP0hcq6DS%2BlDC9BsvvGy%2F%2BuMxczQ06%2B8ZbTRgH8asrLIPjCq3s3WrTB92XYPfDSJlP%2BRn2D4%2Fznixww9JAVVA1iJmmgUNmlXS1XORDttuTNwB4QPtuKcHTdSTSfUPnhouiEU7h4LPOyuf8pGyJ5clxUhoqZR9T43sxgJFFHl2%2BIcv1Q5SUcIR2&X-Amz-Signature=d4a203ccb1c2dcae62f7cd41994038ee7ccc3d352f17f8b58e0e9bc4239bac1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
