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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KYE5T5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBi%2B2pbuZ2gEUd9%2FuD%2BYzRe17sZXhy09raSIK0IRyiBwAiBOWeazbtUuTVEJDA%2BLD2CUuWVMCPYHCGS0kkGPB0dwIir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8j5LwHkN%2Bhb8fBSzKtwDx0T9t%2Fl19SL4UhZ7kV%2BzyiEGBSfbaWIK%2FL%2F1DTMhfWwIHuVbBA4GSkakdXTEzc2OXOlNnXmZxsn54qbftzZtMv6pFC3%2FkHBcQ5gaekhFYLSt%2BJIqt7kpnX5jHi27UUFZR%2Bmvo%2FfJddwGbuBPTXScVUDwXnGFx78%2BtISOGDyADntHvPv9QySud87b2GUC28q9wTDSOX9ZnqSd6oYSVFPI1QDgDa36qzTcLKm%2FlU3zrFUTCoZogUZV3Bk%2FcOTQmfa4I1wJ55Rqhnyynuviay4RQjSoV4kVUr9kWKfqbMW%2F4Wln4ex0Qwyam0FL8IPsaMDsT0q7gGHDe2QHZR9kqRhxnJTITL%2FMwI1AKzZIHnglUInAx0vGfYWnKofPRf513BB4ZaJ6WbwH7hnBISZPfZ0DHRnA0jbRAj2ywUFRaKr%2Bst69pZ0rK4kp1%2FhBMocn5dAP2092SyoBowWdZJGajfp6oPTFwZmhH1TcHI20QVkqiatksPfDC2%2FEZinTftNZRw7pFTqBm5erUgu49YWR6WpFEbIfATy2aasPxk3Q8C32gfUby9ZQxm7aLt5oxop7rWHOUuBoU8v%2FBWzcZIQKjq7afEPSvqp6XSAxbTlBmZdnszF3ly8CpSnEd71LDeEwoZWVvwY6pgFvrYGcw1xfpfnvyjxoT329UE%2BS89vtqpmYB1tYscZLW8bl7K4VGGIkq%2FZHaDx9jLEHaZqgimePdGv5LT8S31agr932NKoKs50e1v3R0RrKm0jeT8IJFZVgM9%2FbVgd0Fp16NMTsDlpjm3oJ1S9wGPZocylPyTYB67X3KtIfaqQ2Dy03U0lWYDK3k8yl6E3FbgOdGtB2TaGc6SRo9TSEQAXeJbeoQWzC&X-Amz-Signature=e5eff4415e069be6c7afe9c0ffc69bf6cd427901dab42fe9a14f946a91d19018&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KYE5T5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBi%2B2pbuZ2gEUd9%2FuD%2BYzRe17sZXhy09raSIK0IRyiBwAiBOWeazbtUuTVEJDA%2BLD2CUuWVMCPYHCGS0kkGPB0dwIir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8j5LwHkN%2Bhb8fBSzKtwDx0T9t%2Fl19SL4UhZ7kV%2BzyiEGBSfbaWIK%2FL%2F1DTMhfWwIHuVbBA4GSkakdXTEzc2OXOlNnXmZxsn54qbftzZtMv6pFC3%2FkHBcQ5gaekhFYLSt%2BJIqt7kpnX5jHi27UUFZR%2Bmvo%2FfJddwGbuBPTXScVUDwXnGFx78%2BtISOGDyADntHvPv9QySud87b2GUC28q9wTDSOX9ZnqSd6oYSVFPI1QDgDa36qzTcLKm%2FlU3zrFUTCoZogUZV3Bk%2FcOTQmfa4I1wJ55Rqhnyynuviay4RQjSoV4kVUr9kWKfqbMW%2F4Wln4ex0Qwyam0FL8IPsaMDsT0q7gGHDe2QHZR9kqRhxnJTITL%2FMwI1AKzZIHnglUInAx0vGfYWnKofPRf513BB4ZaJ6WbwH7hnBISZPfZ0DHRnA0jbRAj2ywUFRaKr%2Bst69pZ0rK4kp1%2FhBMocn5dAP2092SyoBowWdZJGajfp6oPTFwZmhH1TcHI20QVkqiatksPfDC2%2FEZinTftNZRw7pFTqBm5erUgu49YWR6WpFEbIfATy2aasPxk3Q8C32gfUby9ZQxm7aLt5oxop7rWHOUuBoU8v%2FBWzcZIQKjq7afEPSvqp6XSAxbTlBmZdnszF3ly8CpSnEd71LDeEwoZWVvwY6pgFvrYGcw1xfpfnvyjxoT329UE%2BS89vtqpmYB1tYscZLW8bl7K4VGGIkq%2FZHaDx9jLEHaZqgimePdGv5LT8S31agr932NKoKs50e1v3R0RrKm0jeT8IJFZVgM9%2FbVgd0Fp16NMTsDlpjm3oJ1S9wGPZocylPyTYB67X3KtIfaqQ2Dy03U0lWYDK3k8yl6E3FbgOdGtB2TaGc6SRo9TSEQAXeJbeoQWzC&X-Amz-Signature=2d220a81c1b84adcc8600bc2035ca0894d91a70762a907ee83c9a181fe391cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
