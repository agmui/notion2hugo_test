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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y377YW2M%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAXSf555nSRWXFZCFeQQBQU2ho9ezQLpoq90foypiqnMAiBxFHp6S8ZEVB5Pe4XP1SSSAe80GCW1VuAMHN7VnmTJryr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM0le5O2b72v9HR9EEKtwDwmAF52Bp4r%2BaOdFxsXqkr610sxC6Vdm2v0rqhp64vgw8aCeAz1oTdBhVOJ8bJJ3y52IZE7roPabhNzv6Uw9kVz6ZF87UFKkxgP1o%2FRWWh7%2Fj5TyqlYVvP%2FwqeLdorVYKmiqWhHwTxIV0NSFWfnXVwxv27DrKIMwau3KtJ2kfjdEsnOCIGhh1SN3q8mpvU4Oic0PKC1Zm0K390bWXOLSMzvKB22J2eecsdM%2FcPagoS0OTEdiip1jyUIhX3f3JFD9FdQ9Oui59R%2FnII93twY4yOBms4YaGVl7pQvQRaS0WyCGvVEnRosRlR2INDhHCvt%2BLBMSxVDhaL7LebBBoxZDguUsCGNu%2Bv3ji1rjEx3uWge6c4iBSGrb7GY1%2BCw3h9OP84RDpLgkMKbZkBJ0Ui9pPIJOJMfe1rvLRvl9Zi%2FX3W5Qqd61sqAGkrCuKQ8rxyNlKP4iBw8OkaFf%2B3aiaIAuGD%2FiR6xijLdB%2BaDMLGRP9NFGn8zYdOdN43%2FAet4nkTf43iHfojR6RNRRcdJ4UldPhsb7ZfjZxR8x0f4nBr38LOLWZ%2FWT%2BXas4kSufUyrzPXrcOrVIoimbWl%2B3QXdWjzXwmcZ%2FLZ4Of%2Bl41SISWu%2BrpwfOydgyD3KzneU9FNkwldSZvQY6pgHw7DUsjpyxaH5QePZDG6fTZKoJ1myppJD2rkcp2cTAN%2FHIVf1xwo%2Fpf8pM7UEK8ihDvNyH91UEsa5szafEbCcTfaClqc6D8c2mIkhNwldDrTxArUfZarPA%2BxMXW6Ge%2FXyryZtWTZohbs%2FsnJDVZWcth4SrxA8VAkkrbW7XtNww2M2EaZObyWy%2FFb4XLCVYH02YNTEm0FvC94ZsqkC9ohGPFZi299D0&X-Amz-Signature=e27136840c048a83e6107c9986898b8cd3a8a717172e40ef8bb9a3dcbabe5794&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y377YW2M%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAXSf555nSRWXFZCFeQQBQU2ho9ezQLpoq90foypiqnMAiBxFHp6S8ZEVB5Pe4XP1SSSAe80GCW1VuAMHN7VnmTJryr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM0le5O2b72v9HR9EEKtwDwmAF52Bp4r%2BaOdFxsXqkr610sxC6Vdm2v0rqhp64vgw8aCeAz1oTdBhVOJ8bJJ3y52IZE7roPabhNzv6Uw9kVz6ZF87UFKkxgP1o%2FRWWh7%2Fj5TyqlYVvP%2FwqeLdorVYKmiqWhHwTxIV0NSFWfnXVwxv27DrKIMwau3KtJ2kfjdEsnOCIGhh1SN3q8mpvU4Oic0PKC1Zm0K390bWXOLSMzvKB22J2eecsdM%2FcPagoS0OTEdiip1jyUIhX3f3JFD9FdQ9Oui59R%2FnII93twY4yOBms4YaGVl7pQvQRaS0WyCGvVEnRosRlR2INDhHCvt%2BLBMSxVDhaL7LebBBoxZDguUsCGNu%2Bv3ji1rjEx3uWge6c4iBSGrb7GY1%2BCw3h9OP84RDpLgkMKbZkBJ0Ui9pPIJOJMfe1rvLRvl9Zi%2FX3W5Qqd61sqAGkrCuKQ8rxyNlKP4iBw8OkaFf%2B3aiaIAuGD%2FiR6xijLdB%2BaDMLGRP9NFGn8zYdOdN43%2FAet4nkTf43iHfojR6RNRRcdJ4UldPhsb7ZfjZxR8x0f4nBr38LOLWZ%2FWT%2BXas4kSufUyrzPXrcOrVIoimbWl%2B3QXdWjzXwmcZ%2FLZ4Of%2Bl41SISWu%2BrpwfOydgyD3KzneU9FNkwldSZvQY6pgHw7DUsjpyxaH5QePZDG6fTZKoJ1myppJD2rkcp2cTAN%2FHIVf1xwo%2Fpf8pM7UEK8ihDvNyH91UEsa5szafEbCcTfaClqc6D8c2mIkhNwldDrTxArUfZarPA%2BxMXW6Ge%2FXyryZtWTZohbs%2FsnJDVZWcth4SrxA8VAkkrbW7XtNww2M2EaZObyWy%2FFb4XLCVYH02YNTEm0FvC94ZsqkC9ohGPFZi299D0&X-Amz-Signature=3584d7ac923d94bce4f3965ac83b24d8af5f6e405643dfb4cfd3c1a024bac09e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
