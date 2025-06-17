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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTCLVN4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs%2FX6ZTbJQIMFlSyi0NtrEPiGYg%2FCp%2FHKO9GFPKEzuowIhAIo8yzOI%2BAKr1OcHOLVPTNU8cvNDfj7cfAhTRnsNIAM8Kv8DCHoQABoMNjM3NDIzMTgzODA1Igwclooufc3ePTzFjRoq3AOBPP8FkcOkcnKaXihAQ%2FujBfoOPTNSNK70JRF8ZOkdTgacTz81ch6Wf9Vng66XtyM17P%2FAYL6bj2LX1TWGIOl2Xvv2R8S%2BLGpUSj%2Ftzt7OHbkgv7PgDj1klTyjK8gSnu2p32WzMliBTZb6muLlI7gVA7RkJWA4O7H6%2BMvjxv0WUY6QXw94%2FTzOdwhp%2FUM9GvmBHyODLF5chY7LUZ9NJkc26AQskQeHay4TmPyPtXVWkOm53eMZ0D0F33gugya03ZRnjVhw4Aco%2FPz%2FttnTAFy%2F8NoQ1GF%2BrlIvJmnrKqWfDUhnXCgitqzoElRpLSHMeopgdtUli9yW4o4iNi%2FdvGITWiytP%2BPHss5L%2BerabPVp%2FY1WTP7zepr3mcws%2F3MbtKzUIjLneYJ9tcL5CowDYeI%2FDchBaRPObfC%2FAlUwxOIeg13WsjP6GQ1CwL2AgwUx9uTXwJjVr0vD5tuXnC6Ah2Wtbc0%2F3E245G9UD%2Frtpv0okugX2UYN6CwI11bdhRQjzSrm9OxSYc5mcTPC8Ai99Chji8VzpLBeXc6TbWjHzUzwuINP9A5KHCVdJJQpc2zpwVN2rwL%2F20SuHnwbzx5BvLpolXDa86NBF8XaYBa7APmYQCsynTByCBk8BcnQxDCbtMbCBjqkAckw4Pem4f8401S6jh0vFF6L7N1IsqKQD%2BCEj%2BmthOnRJjKiflKPVN42698iY2zVg46DFYFgS5BH6AtHLLlkUwufv%2BTsbcjkgLsXnk%2FzzqKLZNMZbeeiXElyfXXbRlwgwqt28vWzzpIehu7oq1GUSMa77cZ0AbquRlKzRCVicLAekFbeLAs2MavD0GRD5tUyDkcIqrAlNdoPPJnk3%2B4jBopsN0nu&X-Amz-Signature=51d8dede6fd0b30c47e3c050fb8a5c66012a029a1492382350da772fe575ffe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTCLVN4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs%2FX6ZTbJQIMFlSyi0NtrEPiGYg%2FCp%2FHKO9GFPKEzuowIhAIo8yzOI%2BAKr1OcHOLVPTNU8cvNDfj7cfAhTRnsNIAM8Kv8DCHoQABoMNjM3NDIzMTgzODA1Igwclooufc3ePTzFjRoq3AOBPP8FkcOkcnKaXihAQ%2FujBfoOPTNSNK70JRF8ZOkdTgacTz81ch6Wf9Vng66XtyM17P%2FAYL6bj2LX1TWGIOl2Xvv2R8S%2BLGpUSj%2Ftzt7OHbkgv7PgDj1klTyjK8gSnu2p32WzMliBTZb6muLlI7gVA7RkJWA4O7H6%2BMvjxv0WUY6QXw94%2FTzOdwhp%2FUM9GvmBHyODLF5chY7LUZ9NJkc26AQskQeHay4TmPyPtXVWkOm53eMZ0D0F33gugya03ZRnjVhw4Aco%2FPz%2FttnTAFy%2F8NoQ1GF%2BrlIvJmnrKqWfDUhnXCgitqzoElRpLSHMeopgdtUli9yW4o4iNi%2FdvGITWiytP%2BPHss5L%2BerabPVp%2FY1WTP7zepr3mcws%2F3MbtKzUIjLneYJ9tcL5CowDYeI%2FDchBaRPObfC%2FAlUwxOIeg13WsjP6GQ1CwL2AgwUx9uTXwJjVr0vD5tuXnC6Ah2Wtbc0%2F3E245G9UD%2Frtpv0okugX2UYN6CwI11bdhRQjzSrm9OxSYc5mcTPC8Ai99Chji8VzpLBeXc6TbWjHzUzwuINP9A5KHCVdJJQpc2zpwVN2rwL%2F20SuHnwbzx5BvLpolXDa86NBF8XaYBa7APmYQCsynTByCBk8BcnQxDCbtMbCBjqkAckw4Pem4f8401S6jh0vFF6L7N1IsqKQD%2BCEj%2BmthOnRJjKiflKPVN42698iY2zVg46DFYFgS5BH6AtHLLlkUwufv%2BTsbcjkgLsXnk%2FzzqKLZNMZbeeiXElyfXXbRlwgwqt28vWzzpIehu7oq1GUSMa77cZ0AbquRlKzRCVicLAekFbeLAs2MavD0GRD5tUyDkcIqrAlNdoPPJnk3%2B4jBopsN0nu&X-Amz-Signature=7e73c509635742186f0876f51e378cdb7f2ee0b921599bf1353a08e1395fac7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
