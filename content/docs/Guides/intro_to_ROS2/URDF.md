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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEF7GUXC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3t7mcvltoNZQAIS3%2BsUQ6ftHX%2BG8omHPgO5cDTKOGUAiBjUCk2t3R7H3rzeGuz2Vj%2Ft68jbdQ%2FUrjbCDsFaVY8NiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHk57Q42Ruy3HXQZKtwDFKfAQuyJ2g9%2B7E8aq4dpo6TvHIAWB7tnfUKvgy%2FGyMeLc3DBCjIsvB5DSYc1D8S53DQVO3FRwjyp8fDuGxMqsKm4shMaqvAk5uhv%2BiEKivCQp5m8xSdoIlDAncMGZt6Yjbeo9lNLIMXvYa0r74nVx4LhIk3oeOx6xsNTnHn8O3R3SDqV8LBrPZWG%2F2klGUbTJRV2s3I4KHzbhUOOBYGPr%2Burln%2FB2HDdcPUjeEHgIMtWee8D9sP%2Fk%2FoCFVfvezC4Fg9Wroum1ZLCOYe6oKMj9C5V0NYF3kEkogqxQpPkLS2PTqKyjfw8lTim17yqjpg3HMccfgOAkJscAuAriFDI%2BILgn0JoO2FSaySsNWwM6Zbtaxs0JnWrAwQDSrTP5K62TMbMqhAHt5Pnt0h4vcUSik1NWOd4Dartw2X%2B%2FQz8NTc4m5puezbRTjWeaY5bBagjNXGaHr2%2B4dYV2gdDtC67An%2FGaimfu9OWlitJ01ZBM9Wgj%2BL3%2BNJm9XUXYOE%2BkbWKSTMn99n0N3ngY3z3b7dYhEpvV7ILo4ysxz6xLXY39CrVhmGba%2FFg47mMK5DNshGNhoGxlFeVGrnPhy0YFVdiqMDhNKRqoq%2FBnwskfnhwdY25RmqcV%2FYRqPaI6Nkw59yuxAY6pgGmkmVhqZqQatUoSGSOxOFUUTQI79EBxXSpG48uHYZgM2nSWNSWQtKFwRLjkSwEAp7vuPalQTLSGB1uPp0G7dV3naHtPEjeDU8IMsuomDREzkfIBk0OzNwHKtWVfTUmC9kvP0AQGwD3bFHfqruZwMD8aXNbkUXPcwDedpFX6wYGbLIoWV6LJuv3u3uCUAvqWpDuPgbPo%2BFp49%2BGnMG4wBWbO9rQw1v6&X-Amz-Signature=d8e9dcfe4b3730e796d66e6e3cbe2c134fa11a5cf441f06ea610beafbb93add4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEF7GUXC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3t7mcvltoNZQAIS3%2BsUQ6ftHX%2BG8omHPgO5cDTKOGUAiBjUCk2t3R7H3rzeGuz2Vj%2Ft68jbdQ%2FUrjbCDsFaVY8NiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHk57Q42Ruy3HXQZKtwDFKfAQuyJ2g9%2B7E8aq4dpo6TvHIAWB7tnfUKvgy%2FGyMeLc3DBCjIsvB5DSYc1D8S53DQVO3FRwjyp8fDuGxMqsKm4shMaqvAk5uhv%2BiEKivCQp5m8xSdoIlDAncMGZt6Yjbeo9lNLIMXvYa0r74nVx4LhIk3oeOx6xsNTnHn8O3R3SDqV8LBrPZWG%2F2klGUbTJRV2s3I4KHzbhUOOBYGPr%2Burln%2FB2HDdcPUjeEHgIMtWee8D9sP%2Fk%2FoCFVfvezC4Fg9Wroum1ZLCOYe6oKMj9C5V0NYF3kEkogqxQpPkLS2PTqKyjfw8lTim17yqjpg3HMccfgOAkJscAuAriFDI%2BILgn0JoO2FSaySsNWwM6Zbtaxs0JnWrAwQDSrTP5K62TMbMqhAHt5Pnt0h4vcUSik1NWOd4Dartw2X%2B%2FQz8NTc4m5puezbRTjWeaY5bBagjNXGaHr2%2B4dYV2gdDtC67An%2FGaimfu9OWlitJ01ZBM9Wgj%2BL3%2BNJm9XUXYOE%2BkbWKSTMn99n0N3ngY3z3b7dYhEpvV7ILo4ysxz6xLXY39CrVhmGba%2FFg47mMK5DNshGNhoGxlFeVGrnPhy0YFVdiqMDhNKRqoq%2FBnwskfnhwdY25RmqcV%2FYRqPaI6Nkw59yuxAY6pgGmkmVhqZqQatUoSGSOxOFUUTQI79EBxXSpG48uHYZgM2nSWNSWQtKFwRLjkSwEAp7vuPalQTLSGB1uPp0G7dV3naHtPEjeDU8IMsuomDREzkfIBk0OzNwHKtWVfTUmC9kvP0AQGwD3bFHfqruZwMD8aXNbkUXPcwDedpFX6wYGbLIoWV6LJuv3u3uCUAvqWpDuPgbPo%2BFp49%2BGnMG4wBWbO9rQw1v6&X-Amz-Signature=661e1d3fc6cc5e7530bc7136bad4874f9b59708627de35802c7b98085a6edfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
