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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNAWBWS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBuLaacqiAxm87enj%2BsHK4Ng6wwYE0Wqdm%2FnIrNg0E4kAiEAhNNnCgq%2BsrP27%2FGG2xeYZbXJIM%2BylR6i2OdPa28LeTEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2Bjk%2B7UAtjZ%2Bv65CrcA7Sn8WO9HVEXvcSiNhC7NW3n0Gdjwo6e3RCt01eivZeV%2FRvgawcjeTNdj8sEJ5qTxE5Xc8pICFLNU6L%2FOBO0boTtBTnyWVZ1M%2Bjsm2f8C9WFgnDnaLD5VMDRvLrr8DGw2syc6mThoe%2BMTzXHoWhIDeLC36JDRhfepCtGa7psGj75gGKkI78iGo791ZCk2E4momjjChkDYp%2FsSzEFqlBSKvXSb8m3DCpiuCECvxwy2TafmkSuaydkZKWwhmDsDycqSmo9QsH4y50qTEK8mjzfR%2ByGQ9J%2BNJe0yzGExSBktOoB0X24t39W1AvDt4Bs3534dWvs%2FHDLMUOHQoXdi00dT725LgpIykG1JUBQRadiZPGbb4ooL8xs0aowONsRJZ94W8%2BYnupBqcc9%2BCkrU%2F8S%2FV5Qglj808fWUo0bMU3NzEBIIH3R61OOR1rH%2FPwxfaKEeJIyImWzbpNb12nc0pQJO8fh0JXXw2LNTff5jOds2C%2BPeoSAHnPEMTRKfBbdtR74gN1fpxkz5YnwGvHSCmLZuLnuID%2Brh%2BRpvM6DKjBlDEOwO%2FgDg1c07%2BEHbi8h6DCZI1cHU31TgAL5eXI6EqrU6JI7fEecMne7i5%2BFIRqyoAHLHICNKh2SIgY0CLIEMOfXj74GOqUBOANV%2F%2B%2B2N6zSoP9NRPKJwRGO79JlP05iOy2Ww0zcRJBwNTuJpMUv5ljP7UqziThRIqZl7velwddlZLuado0ug5dL4usWDWGi8gRKOaOmTjqlVgnk9w%2F6x10mMTvT541cq5CuXeSIx66fZrxQgXR%2BO9uADwpP6T83p2UuL8%2FSUiL%2Fp8snC6IIRgPp7WwVp6TkYc2qahk5SH1KftsPagh7KHvEMS8g&X-Amz-Signature=56039f8d2b99159a981619d277244aa0892a1bd24b177937fcedf58cc17be6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJNAWBWS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBuLaacqiAxm87enj%2BsHK4Ng6wwYE0Wqdm%2FnIrNg0E4kAiEAhNNnCgq%2BsrP27%2FGG2xeYZbXJIM%2BylR6i2OdPa28LeTEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2Bjk%2B7UAtjZ%2Bv65CrcA7Sn8WO9HVEXvcSiNhC7NW3n0Gdjwo6e3RCt01eivZeV%2FRvgawcjeTNdj8sEJ5qTxE5Xc8pICFLNU6L%2FOBO0boTtBTnyWVZ1M%2Bjsm2f8C9WFgnDnaLD5VMDRvLrr8DGw2syc6mThoe%2BMTzXHoWhIDeLC36JDRhfepCtGa7psGj75gGKkI78iGo791ZCk2E4momjjChkDYp%2FsSzEFqlBSKvXSb8m3DCpiuCECvxwy2TafmkSuaydkZKWwhmDsDycqSmo9QsH4y50qTEK8mjzfR%2ByGQ9J%2BNJe0yzGExSBktOoB0X24t39W1AvDt4Bs3534dWvs%2FHDLMUOHQoXdi00dT725LgpIykG1JUBQRadiZPGbb4ooL8xs0aowONsRJZ94W8%2BYnupBqcc9%2BCkrU%2F8S%2FV5Qglj808fWUo0bMU3NzEBIIH3R61OOR1rH%2FPwxfaKEeJIyImWzbpNb12nc0pQJO8fh0JXXw2LNTff5jOds2C%2BPeoSAHnPEMTRKfBbdtR74gN1fpxkz5YnwGvHSCmLZuLnuID%2Brh%2BRpvM6DKjBlDEOwO%2FgDg1c07%2BEHbi8h6DCZI1cHU31TgAL5eXI6EqrU6JI7fEecMne7i5%2BFIRqyoAHLHICNKh2SIgY0CLIEMOfXj74GOqUBOANV%2F%2B%2B2N6zSoP9NRPKJwRGO79JlP05iOy2Ww0zcRJBwNTuJpMUv5ljP7UqziThRIqZl7velwddlZLuado0ug5dL4usWDWGi8gRKOaOmTjqlVgnk9w%2F6x10mMTvT541cq5CuXeSIx66fZrxQgXR%2BO9uADwpP6T83p2UuL8%2FSUiL%2Fp8snC6IIRgPp7WwVp6TkYc2qahk5SH1KftsPagh7KHvEMS8g&X-Amz-Signature=65c33e2455d3de8f676a1127139566a9364fb0b154e3e10931252e03bb1be7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
