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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPG26JKT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9qr7upQmpAybCQmSGPngvB40x9ivUblGp2I%2FNcabwzAiBEvZ2XC02snQFEBFqqeEaV9hzojUJGSv44Z%2FexR33rhCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLGM0v7w5N1YoEOpKtwDQ%2BZ%2BYYeAGIhrkp7L4wQ2xQ2l6XRqlKo4QX%2F25uepM2C2eyj3Wih984C5Rrfp31y9E9uPkyOZ75y2we1DXkch22Xq5oV%2FSKM55k0OfbJV%2BzWoKkyVoDTRV0WCohJbLouW4KdSANJGYOpTOzn7k6xQqap75dntS%2Bm5uruLET6Y1%2BGcDQxqwTxBYkTG57%2FktxMBXfOVoK7evOMdQmFrguqPMNLvjaYe3PlPUn5h8DfeI9NvmgQbu16LqSn%2FMJN%2BST0IYNWb81Fu9q10irbBbUWR1WODSCf%2Bc1TySoGe9%2BCAmfDztarnQGF8xG2Eqc2tQk3kiJN35Ep0yX6ldQDyZNJGi%2FBJgebQBbr9Zv732JwtOQbGaS2uEUTVLr9JhUeVWpt5Fgg2PTGIRmweDOUtMJYwQSlvBr62RN%2Fmex3flhbTvriu%2F5VN7N2o0CemHWKUvlBaKgO3M638VZ9bkWx1dpbJyuOUzSitmr3Sd6MbOtv5gCivPZudVvZSwXKk4leal0C95kmfXJwSOAhQXN3tVQlB9Ba5kzQN0T%2FoH6dMFXn9a8JcSM2pL1dOcfuR7SFRMycCAI28apxC0JD2CxlMBVsBihtu1C0w%2B8lCn2NPcMhcCBp2SdbxaGBjJajj22wwwP2%2BwwY6pgE2ARVAs%2Buhb5h2GEecrHG8Qjp3S7Ta26tgIVrXuV6JDhku5LFtM3szfDnzn1YxBqB4WQswsKGwluzlofqDFcYTIS3o%2BbAyNucXDkR8qL%2FQyfoSPDw%2BLJhcxmmMdUgOoMSUwT6lic%2FoqcMVXmksUPYh2WYSDhXL0l6uSYbCGWhwRhXIZVxC%2FMAk1S%2Fi0ya7IIFmId1r8EYqKygh38wycYIjvfKAk9is&X-Amz-Signature=44ea946a0561deca1682836ae32d43b9e5d4a0faebeca99d2d145514d6003e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPG26JKT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9qr7upQmpAybCQmSGPngvB40x9ivUblGp2I%2FNcabwzAiBEvZ2XC02snQFEBFqqeEaV9hzojUJGSv44Z%2FexR33rhCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLGM0v7w5N1YoEOpKtwDQ%2BZ%2BYYeAGIhrkp7L4wQ2xQ2l6XRqlKo4QX%2F25uepM2C2eyj3Wih984C5Rrfp31y9E9uPkyOZ75y2we1DXkch22Xq5oV%2FSKM55k0OfbJV%2BzWoKkyVoDTRV0WCohJbLouW4KdSANJGYOpTOzn7k6xQqap75dntS%2Bm5uruLET6Y1%2BGcDQxqwTxBYkTG57%2FktxMBXfOVoK7evOMdQmFrguqPMNLvjaYe3PlPUn5h8DfeI9NvmgQbu16LqSn%2FMJN%2BST0IYNWb81Fu9q10irbBbUWR1WODSCf%2Bc1TySoGe9%2BCAmfDztarnQGF8xG2Eqc2tQk3kiJN35Ep0yX6ldQDyZNJGi%2FBJgebQBbr9Zv732JwtOQbGaS2uEUTVLr9JhUeVWpt5Fgg2PTGIRmweDOUtMJYwQSlvBr62RN%2Fmex3flhbTvriu%2F5VN7N2o0CemHWKUvlBaKgO3M638VZ9bkWx1dpbJyuOUzSitmr3Sd6MbOtv5gCivPZudVvZSwXKk4leal0C95kmfXJwSOAhQXN3tVQlB9Ba5kzQN0T%2FoH6dMFXn9a8JcSM2pL1dOcfuR7SFRMycCAI28apxC0JD2CxlMBVsBihtu1C0w%2B8lCn2NPcMhcCBp2SdbxaGBjJajj22wwwP2%2BwwY6pgE2ARVAs%2Buhb5h2GEecrHG8Qjp3S7Ta26tgIVrXuV6JDhku5LFtM3szfDnzn1YxBqB4WQswsKGwluzlofqDFcYTIS3o%2BbAyNucXDkR8qL%2FQyfoSPDw%2BLJhcxmmMdUgOoMSUwT6lic%2FoqcMVXmksUPYh2WYSDhXL0l6uSYbCGWhwRhXIZVxC%2FMAk1S%2Fi0ya7IIFmId1r8EYqKygh38wycYIjvfKAk9is&X-Amz-Signature=620546233757a58c0b54630d5bb0ac06770ed54f16549c99b5f4b166030685e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
