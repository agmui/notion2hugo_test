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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5X6MZF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQUtD7n6g5%2B0%2BIAaHme7GFsEIoklN52pa0j16gDhvBWAiBfFv1Z26h4KDDCEkz%2FVi8KC3r6w5ykcCMGbl7I0SOFuyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPFxQKsYZdBvUigy5KtwDu8IuRhZKNfO%2FkiclK6JUAqnGK92noET%2FV5p6tRto6TPtsUTuacnfkBBh17eYVFpRaLQQgMBnDGygWZLwUfPwHB1CvqKe%2BfXOQntiw6XsIRgbZze0m9IIS1nxtrc7aSmenKiFNVC4RGSulZEcuToinf%2BuCVZpa8HD5euWWlUOE2ZRCXMmrHV3UkiN04JtlnerekJWOEu4vejeOQMaKmJE%2BBPckTf61L1UY7MGfadXnkfcJMl8e3hrVj4TTOxuO8nzAdXaTWrOyIQl0wjTtckO2qThxA0gcc3tlhBFN3PObTSIdTYf8WHdeoVuaknjmXbcaL1LGsmrPmFp8VTAO26EO2VrLQg60PaZBNfCQuMGZ9ty3IgSHwkTpYgMLPpZ9HDD01hZPKE5mDdbuQR%2FxU7jB3a2gcI%2B2JR1Yv3QbhzwS5kLwuCOmfk%2BTMr8HdHjK7%2B77y6zS3xQrE3ts%2FAk2gJuxQ8YZgAonRuH8Lq8%2FoMK9PzkzBSeWMUvWqaZNuEijMMhrYe04u%2BVhd6tAx23WNATO1JGiaa%2FnmDIZqyM1TztwmABIfv99I2yE4xwZpNEy%2FZryIA%2ByFRGXbLYRblIwmS3FAzTQcPKpMlRts6QNkgMpUZ3ozRKd8Y1bASV7XYwxMn4vAY6pgHhwps%2BPfAmt7oSAf%2BoaccHF1l2SeibsPoYkhoaDOw49sxOIhmBsu4CzVgRVFh%2Fqlx9GNfpCDCLV71fyRtK0Go5RVvCJjIVrb%2BiqbjGXoRmMRmmKf447gcAPN0DUxUZ3b1N79MKizCklF9ycsAEZZ7t2I89ZGEpi%2BLglceW28ZrHaORMw1t44YiHxtPx0cjGkE71M9%2F0PRyTwuOLylHJF0vFgawu4mC&X-Amz-Signature=401b5e228bd3cf8c1d90982176d04d4e73b906982b4cb26aa5d4961570fc79b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5X6MZF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQUtD7n6g5%2B0%2BIAaHme7GFsEIoklN52pa0j16gDhvBWAiBfFv1Z26h4KDDCEkz%2FVi8KC3r6w5ykcCMGbl7I0SOFuyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPFxQKsYZdBvUigy5KtwDu8IuRhZKNfO%2FkiclK6JUAqnGK92noET%2FV5p6tRto6TPtsUTuacnfkBBh17eYVFpRaLQQgMBnDGygWZLwUfPwHB1CvqKe%2BfXOQntiw6XsIRgbZze0m9IIS1nxtrc7aSmenKiFNVC4RGSulZEcuToinf%2BuCVZpa8HD5euWWlUOE2ZRCXMmrHV3UkiN04JtlnerekJWOEu4vejeOQMaKmJE%2BBPckTf61L1UY7MGfadXnkfcJMl8e3hrVj4TTOxuO8nzAdXaTWrOyIQl0wjTtckO2qThxA0gcc3tlhBFN3PObTSIdTYf8WHdeoVuaknjmXbcaL1LGsmrPmFp8VTAO26EO2VrLQg60PaZBNfCQuMGZ9ty3IgSHwkTpYgMLPpZ9HDD01hZPKE5mDdbuQR%2FxU7jB3a2gcI%2B2JR1Yv3QbhzwS5kLwuCOmfk%2BTMr8HdHjK7%2B77y6zS3xQrE3ts%2FAk2gJuxQ8YZgAonRuH8Lq8%2FoMK9PzkzBSeWMUvWqaZNuEijMMhrYe04u%2BVhd6tAx23WNATO1JGiaa%2FnmDIZqyM1TztwmABIfv99I2yE4xwZpNEy%2FZryIA%2ByFRGXbLYRblIwmS3FAzTQcPKpMlRts6QNkgMpUZ3ozRKd8Y1bASV7XYwxMn4vAY6pgHhwps%2BPfAmt7oSAf%2BoaccHF1l2SeibsPoYkhoaDOw49sxOIhmBsu4CzVgRVFh%2Fqlx9GNfpCDCLV71fyRtK0Go5RVvCJjIVrb%2BiqbjGXoRmMRmmKf447gcAPN0DUxUZ3b1N79MKizCklF9ycsAEZZ7t2I89ZGEpi%2BLglceW28ZrHaORMw1t44YiHxtPx0cjGkE71M9%2F0PRyTwuOLylHJF0vFgawu4mC&X-Amz-Signature=6136418b8e7fe004a2ad89bce4c3dddc9de18f8a038919a4e1877ac96586fd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
