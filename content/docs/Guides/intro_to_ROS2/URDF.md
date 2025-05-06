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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRR3K56%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTdiNgkHLoNiZ2Eg%2FQaI%2Bra%2BSqxclDLkILT4028SnuxAiEAkEa%2Fd4c%2Fl1J6NI8q4m8BeXyJ7T72k0MJQFT6X%2FwFRwoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM7CK66OdbK9PqDkXSrcA975P4Qec9ZyKGdNxUzj%2B0E7hOKlrMAHYHt%2B4aCcjUbcqBTLybhsKYJqEjXIHgBx64OoInrBBpt3l0CdOsqN6GMmEwrh8f18hPYwtQZltELTe2ICVotGTFNvVY8DGhXGNChVsm29OR5RkJZe0lFKMMAKd%2FQ3qc2eN6mVZlgyHqpGNc2CNq8bV3DOQ2o7%2Ba9AG0Kp9evIr0GVODqka3yvamN9Y7WOVVpfmKiz4xdO84hBQob6q7IbmFL4WnB0Z%2Bcw5UQ2wDU93OP3i0ub4KLisoEUKtO%2BX%2FrAULujET%2BYp3JfDhcNCZLDLeHwQDNe8UxyjADzd9DmQc8%2FvM92Z%2BFnKf3%2BUwOVJsz12%2FTGM9ppNB41lE0lAfqBA%2BP2Bgjq0oEP32GyzLpv%2BRo3lAmbEWNQ1Yu2bcomMqTT4oYZDgFMACRqjkfAnmk7JSHJYfQosQfoDRu%2Fe4Wbd1gckaiy0YntZFW5rhyFL7khmuK3Jqfvm%2FV6P1c%2F%2BtnxFM1gvMTFetT0YHBYcpeAwJ5r40bdw9Gv%2BSeMWdsIjix2%2FZMYYQX%2FXbOf4aibmZrluD83F08fECF4qis0QkNdEFzDFNtzNijVlKYnYO3QH4wYyEZneHnFBcBpP1gGxP73KCtTJoyXMOWz6cAGOqUB%2BoMtNd7FmLicI8uIzGKJJdcGEaIAaYB3y3vG61L5cXcoaLVKxqsBByyJm9YlkH8wZhUWQjTUXF5ywzdoCbjTDETWc0aKoAlFYIc6SHoUtAVZn5KkjTquU6uVHYYFPH6ftBp%2FhX%2BqcMBJNPFnlAm5VSlt69EgaCgbNFiiiVL6EbvbaQ6U%2FyEJstaAyTSuANScMTHhTISS5F%2FZNEG4rDtFBNsFCW9%2B&X-Amz-Signature=8780d0ba8f96b277965bf4297c1ebe0cc01ac985beb64f6e5678748dcc2d850b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRR3K56%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTdiNgkHLoNiZ2Eg%2FQaI%2Bra%2BSqxclDLkILT4028SnuxAiEAkEa%2Fd4c%2Fl1J6NI8q4m8BeXyJ7T72k0MJQFT6X%2FwFRwoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM7CK66OdbK9PqDkXSrcA975P4Qec9ZyKGdNxUzj%2B0E7hOKlrMAHYHt%2B4aCcjUbcqBTLybhsKYJqEjXIHgBx64OoInrBBpt3l0CdOsqN6GMmEwrh8f18hPYwtQZltELTe2ICVotGTFNvVY8DGhXGNChVsm29OR5RkJZe0lFKMMAKd%2FQ3qc2eN6mVZlgyHqpGNc2CNq8bV3DOQ2o7%2Ba9AG0Kp9evIr0GVODqka3yvamN9Y7WOVVpfmKiz4xdO84hBQob6q7IbmFL4WnB0Z%2Bcw5UQ2wDU93OP3i0ub4KLisoEUKtO%2BX%2FrAULujET%2BYp3JfDhcNCZLDLeHwQDNe8UxyjADzd9DmQc8%2FvM92Z%2BFnKf3%2BUwOVJsz12%2FTGM9ppNB41lE0lAfqBA%2BP2Bgjq0oEP32GyzLpv%2BRo3lAmbEWNQ1Yu2bcomMqTT4oYZDgFMACRqjkfAnmk7JSHJYfQosQfoDRu%2Fe4Wbd1gckaiy0YntZFW5rhyFL7khmuK3Jqfvm%2FV6P1c%2F%2BtnxFM1gvMTFetT0YHBYcpeAwJ5r40bdw9Gv%2BSeMWdsIjix2%2FZMYYQX%2FXbOf4aibmZrluD83F08fECF4qis0QkNdEFzDFNtzNijVlKYnYO3QH4wYyEZneHnFBcBpP1gGxP73KCtTJoyXMOWz6cAGOqUB%2BoMtNd7FmLicI8uIzGKJJdcGEaIAaYB3y3vG61L5cXcoaLVKxqsBByyJm9YlkH8wZhUWQjTUXF5ywzdoCbjTDETWc0aKoAlFYIc6SHoUtAVZn5KkjTquU6uVHYYFPH6ftBp%2FhX%2BqcMBJNPFnlAm5VSlt69EgaCgbNFiiiVL6EbvbaQ6U%2FyEJstaAyTSuANScMTHhTISS5F%2FZNEG4rDtFBNsFCW9%2B&X-Amz-Signature=1c0e9495276ac881e53a51f2617a2c3b9e745b6fbc281674743b1f7b43d360da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
