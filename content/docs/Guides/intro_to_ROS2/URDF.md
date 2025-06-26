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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAJEBFU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDR2mk9GDIJ1UhYhl9i94gKgEkajzHtgnOVibmGcAVD%2BAiBpJ2Cz%2BdtNqRnePTbvNzCM1xIADwuTPDIGE4IkNV8Joir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMZbvXVr0bDRXKVm8uKtwDE%2BAntcX7FmaI3hkelmeHGC1B8TJ1%2B4wPuBuTJ9Ory35XUU%2FP3yo3Wq78KRGuGSr2%2FavUgEZINuvIaq5%2Fp%2F5WRoqn2oxde0m8jEIB0u6b5SfAuqMfiBY0D8BH%2BbZi2cGCsJn6uV8PQRVw3dZofG8UYISpLXaC%2Bv%2Br%2FgzxqO3jeZlimVWTF2KSXARc2La57Oo5M%2Fd7rj3AsyetMT7Va9e%2BiEtjG49vkbUhd2dIIgWBQBmkwo%2FmngjkXc199%2F5TmVRY54mzReA7AVHb%2Fpq7Gyv1f5wTqIKa7wki5Alr3D65x3%2FY8tg70dYw91TaV%2Bf6a4gpuWBM5FU02n2OkmR5MSXe1HcIA0dFe4Ipg9qo9hOqDwEJVKy9TLokO8K6yrdrdj0Wc%2Fo%2BdQAdSGbjGRcaJhBztxKFGWATa6M2O%2BNC7AWZIABs0duWTvbyu9g5j%2FRIjF3UZy56Faq0YYnSa6%2BJIJwnZQUXQJIGM%2BudyWwA87aIkqQxygg%2BFsfjeNy3GYf3YCl%2B4w14Zkvwew4%2FXTvj4eENb%2BDB2B4f7Cnc0XS%2BRwzSkzsWcXf7RfA%2BsiejTatU2g24B6U0CFtRFLELrPv1JIRwgDwB9G6nFhZEryHSZLwAyNEq6Q6a9MShBn8dfccw3t7ywgY6pgGJPA8EaNw14rrS2Br%2BnUIZGPcQNV3dzqQ0vvyl49trDUn%2BKHdAVe4fYqbXbfnfjRbrP4%2F21qjk7a%2FIV6GghTO3LE0%2B2Ag%2BGD1PARQ%2FakN1A2KI6zA7BwkCrgcyXIL0zS%2FGFMWTM6ypZhNfA4Mo8vpfqTQvzf86rm6QY0J%2F2yKFYFYtleeEkvDw5Sa68vJlKlF%2Bv0v4vD226GXiFgyksOZXC%2FcBhD%2Fd&X-Amz-Signature=9d0ccb93c0f9fb382076c0906f3c1a4099d168091d56fdfec7d0766aaa165045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAJEBFU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDR2mk9GDIJ1UhYhl9i94gKgEkajzHtgnOVibmGcAVD%2BAiBpJ2Cz%2BdtNqRnePTbvNzCM1xIADwuTPDIGE4IkNV8Joir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMZbvXVr0bDRXKVm8uKtwDE%2BAntcX7FmaI3hkelmeHGC1B8TJ1%2B4wPuBuTJ9Ory35XUU%2FP3yo3Wq78KRGuGSr2%2FavUgEZINuvIaq5%2Fp%2F5WRoqn2oxde0m8jEIB0u6b5SfAuqMfiBY0D8BH%2BbZi2cGCsJn6uV8PQRVw3dZofG8UYISpLXaC%2Bv%2Br%2FgzxqO3jeZlimVWTF2KSXARc2La57Oo5M%2Fd7rj3AsyetMT7Va9e%2BiEtjG49vkbUhd2dIIgWBQBmkwo%2FmngjkXc199%2F5TmVRY54mzReA7AVHb%2Fpq7Gyv1f5wTqIKa7wki5Alr3D65x3%2FY8tg70dYw91TaV%2Bf6a4gpuWBM5FU02n2OkmR5MSXe1HcIA0dFe4Ipg9qo9hOqDwEJVKy9TLokO8K6yrdrdj0Wc%2Fo%2BdQAdSGbjGRcaJhBztxKFGWATa6M2O%2BNC7AWZIABs0duWTvbyu9g5j%2FRIjF3UZy56Faq0YYnSa6%2BJIJwnZQUXQJIGM%2BudyWwA87aIkqQxygg%2BFsfjeNy3GYf3YCl%2B4w14Zkvwew4%2FXTvj4eENb%2BDB2B4f7Cnc0XS%2BRwzSkzsWcXf7RfA%2BsiejTatU2g24B6U0CFtRFLELrPv1JIRwgDwB9G6nFhZEryHSZLwAyNEq6Q6a9MShBn8dfccw3t7ywgY6pgGJPA8EaNw14rrS2Br%2BnUIZGPcQNV3dzqQ0vvyl49trDUn%2BKHdAVe4fYqbXbfnfjRbrP4%2F21qjk7a%2FIV6GghTO3LE0%2B2Ag%2BGD1PARQ%2FakN1A2KI6zA7BwkCrgcyXIL0zS%2FGFMWTM6ypZhNfA4Mo8vpfqTQvzf86rm6QY0J%2F2yKFYFYtleeEkvDw5Sa68vJlKlF%2Bv0v4vD226GXiFgyksOZXC%2FcBhD%2Fd&X-Amz-Signature=3d0cd3075fb20bf973e8816fb2c221ad4cc679857d87a9b33c4de234b3b1fa74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
