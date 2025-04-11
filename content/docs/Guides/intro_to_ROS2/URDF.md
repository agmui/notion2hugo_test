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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWRBHHA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFplKTGUdXNaWQyCNto6lrhY1uzBHanzjc8oAzVxrxUgAiA6SAzATXAWUlfkLRWAwMhpaGhs9M0%2BI97m1I36i%2FBqCSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2s7gSnE8klEm25dPKtwDEWZExipQp%2FQZRfG0AqdMEOMF5vw14euRgZr08ZKnxpO04c9mBvd%2F2bYAtgDqzkuSVO940JDlukrzpoxR6BwXDU4EKd6zm2cJG7Fxodym1v7ESggiF%2BdZikIitj316N3F2n9eTdF85ZhCbmSUU%2BcDq1OERKPkE92znBLVhUUfUGNq9tK9JoKOh7K24TkB3RbWzPh2z4GB35ZBbaq1wV9pgiHoO1IebfB9nuEpKJ0Mi%2ByFZBSsAfCTXx5irm%2BtksBjH7ijdyfZa3Nr%2B70Oq9dLfSJt9KETGsoop53hWS9Np%2BtJBqAkIFASPoLcm7SeKu3Lam6kd5YvVOcnFSX8tdPNUxTsJfuHvKjcCBn8uFmZ72gdJY0LGg4ph9wUev2kfgbwWTYmfEd4ofwihAX2jKJfP%2B9YMq8R1h8jeARrsTzwdLysGGCNGZkbgS0%2FnEeqJzplmHeBIrvRx26IpX4PlFBHO6Y2xJBU0CWioKXFNw%2FE56QevvPrfv4lL%2F%2BKA6y9bwmxNxIJkX%2B308QBsig%2Fa4aku5QskSKSUJH0pinCrqJLSEvxQaY2Rqa33DvBlL1pcE0rBP%2Fj2DrLx3Xz4MT9kC28RWxHFbRT8XhiGMazi%2BjJf62HeIsqQungSEj4rhswuavivwY6pgGPsrmVGBeiU6%2B1X4i%2BtUgH%2FUEpDPxkllNkr%2BMsLAxHN%2FUlbX7ccKU%2FX3GonmyTun4d92upxgIuPs7mzsfUCCd%2Fq0EVsIb0UrQV3lnrqqNIWCRZWvYRJZvRmd499%2FpYH5q2f4UkYx507HXIJ1CdqbJrwZNQy01HJYR4j8BHgUj1PjKrhjlWgmWFc55GXnz%2B8cEFdHflIgTV%2Be6UMKQeqlbLbmAeB7zu&X-Amz-Signature=466f95608dc399da7c0c121189a4b067e9d608a69f154c305b9b00d3bf6569cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWRBHHA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFplKTGUdXNaWQyCNto6lrhY1uzBHanzjc8oAzVxrxUgAiA6SAzATXAWUlfkLRWAwMhpaGhs9M0%2BI97m1I36i%2FBqCSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2s7gSnE8klEm25dPKtwDEWZExipQp%2FQZRfG0AqdMEOMF5vw14euRgZr08ZKnxpO04c9mBvd%2F2bYAtgDqzkuSVO940JDlukrzpoxR6BwXDU4EKd6zm2cJG7Fxodym1v7ESggiF%2BdZikIitj316N3F2n9eTdF85ZhCbmSUU%2BcDq1OERKPkE92znBLVhUUfUGNq9tK9JoKOh7K24TkB3RbWzPh2z4GB35ZBbaq1wV9pgiHoO1IebfB9nuEpKJ0Mi%2ByFZBSsAfCTXx5irm%2BtksBjH7ijdyfZa3Nr%2B70Oq9dLfSJt9KETGsoop53hWS9Np%2BtJBqAkIFASPoLcm7SeKu3Lam6kd5YvVOcnFSX8tdPNUxTsJfuHvKjcCBn8uFmZ72gdJY0LGg4ph9wUev2kfgbwWTYmfEd4ofwihAX2jKJfP%2B9YMq8R1h8jeARrsTzwdLysGGCNGZkbgS0%2FnEeqJzplmHeBIrvRx26IpX4PlFBHO6Y2xJBU0CWioKXFNw%2FE56QevvPrfv4lL%2F%2BKA6y9bwmxNxIJkX%2B308QBsig%2Fa4aku5QskSKSUJH0pinCrqJLSEvxQaY2Rqa33DvBlL1pcE0rBP%2Fj2DrLx3Xz4MT9kC28RWxHFbRT8XhiGMazi%2BjJf62HeIsqQungSEj4rhswuavivwY6pgGPsrmVGBeiU6%2B1X4i%2BtUgH%2FUEpDPxkllNkr%2BMsLAxHN%2FUlbX7ccKU%2FX3GonmyTun4d92upxgIuPs7mzsfUCCd%2Fq0EVsIb0UrQV3lnrqqNIWCRZWvYRJZvRmd499%2FpYH5q2f4UkYx507HXIJ1CdqbJrwZNQy01HJYR4j8BHgUj1PjKrhjlWgmWFc55GXnz%2B8cEFdHflIgTV%2Be6UMKQeqlbLbmAeB7zu&X-Amz-Signature=b93b81496314a78b2c33d47bf852a26841e03cbc2e331c162a9dc3bdffac7436&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
