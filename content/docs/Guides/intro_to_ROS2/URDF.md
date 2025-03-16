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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTMO2PO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMz22wD6EGaslzFJw63%2Fes%2BHrrj7jkTrfNqHBwJ%2BLmwAiBnzpReDYyVum9BlAGbdGnZ80LV7JMPvxsTgNiDKTzgAir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM2ls92ofXjdSMXJkxKtwD8K2h2WzC6kUjIIS%2F50C7GbAZMXSvP4pHv1hephCfNNfpEW59VXP%2BW53yJsKHQQQSkdvhOEhAcv7e%2BUtWq%2BESsvpTRXYAuu5d%2Fds4OtttQp6FizhQ7YJJbzjLgHCSxe3N6yNxL2CrvsxfvkvGMK%2Bljv4ZDY4LZxtvTkNuocLebaryK%2FjHBBfTJhMBCSprMuLnydTuRfIBrzxezHBu6VKoPJLVMg1Rxm5oCfDea1gxJNUn04Y6pBmY2ZazeQ4RIAQxlm%2BUA2fpf0YcDCgq5SLzOz0nQLeu8PX2D2jv5zZL2U0UpgqF5zgLOCVsILC3tdgyHSZZvBnVokB3hUk5hukoM%2BGF%2BJrBSKbJ0NEpbCbqqxlQt54jdoTVGH4zJ6kk%2FnMm%2BGpSgx9ohrvWeBxik%2BqV3f6pekJLch3tHJwwCZQikLacU0vCNENGE96RnpVdzHZ79h8y9MgFclzYI30NJ1%2Bs%2FmUubq7jM9NUsdaAl%2Bh5RR6wm%2FdtAUf7pZYlVQ8d%2BxvmpV7SRF3vQxisCKGHqmtvWMVcrGudm5W1N3PxJTuI9c5QnIXOrEK%2FWj30orO6GcCdQ4Obz61X3XapcGkNlT1SU6dPUPLwuT6WUa4VmYCFVsOLsS5IuzcwvzeHiRYw5tjavgY6pgFVd1nioHk2%2BrTaMoq4fJiLPYGRgwxWNULpQAjQpFay1aAF4tNZVXKxWdCl38oS1vXTB60%2F%2BIyROpiKGQzDsurbnaF9OYP3eozErtvp2EGdZ%2B6UCAetwRWSsQoRkHGB8CuYsRoF8E277XWn8z5EE%2BKIFKGdpwSLDD6MiHiLduJpn8ni3ugYxuMXbNYRtbfHoTZcMj3AjENaTucEVL5dNcAfPRVl28Fp&X-Amz-Signature=f110467d90f471676a030168ba48f793c4b81205354db89b46396f5968932aba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTMO2PO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMz22wD6EGaslzFJw63%2Fes%2BHrrj7jkTrfNqHBwJ%2BLmwAiBnzpReDYyVum9BlAGbdGnZ80LV7JMPvxsTgNiDKTzgAir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM2ls92ofXjdSMXJkxKtwD8K2h2WzC6kUjIIS%2F50C7GbAZMXSvP4pHv1hephCfNNfpEW59VXP%2BW53yJsKHQQQSkdvhOEhAcv7e%2BUtWq%2BESsvpTRXYAuu5d%2Fds4OtttQp6FizhQ7YJJbzjLgHCSxe3N6yNxL2CrvsxfvkvGMK%2Bljv4ZDY4LZxtvTkNuocLebaryK%2FjHBBfTJhMBCSprMuLnydTuRfIBrzxezHBu6VKoPJLVMg1Rxm5oCfDea1gxJNUn04Y6pBmY2ZazeQ4RIAQxlm%2BUA2fpf0YcDCgq5SLzOz0nQLeu8PX2D2jv5zZL2U0UpgqF5zgLOCVsILC3tdgyHSZZvBnVokB3hUk5hukoM%2BGF%2BJrBSKbJ0NEpbCbqqxlQt54jdoTVGH4zJ6kk%2FnMm%2BGpSgx9ohrvWeBxik%2BqV3f6pekJLch3tHJwwCZQikLacU0vCNENGE96RnpVdzHZ79h8y9MgFclzYI30NJ1%2Bs%2FmUubq7jM9NUsdaAl%2Bh5RR6wm%2FdtAUf7pZYlVQ8d%2BxvmpV7SRF3vQxisCKGHqmtvWMVcrGudm5W1N3PxJTuI9c5QnIXOrEK%2FWj30orO6GcCdQ4Obz61X3XapcGkNlT1SU6dPUPLwuT6WUa4VmYCFVsOLsS5IuzcwvzeHiRYw5tjavgY6pgFVd1nioHk2%2BrTaMoq4fJiLPYGRgwxWNULpQAjQpFay1aAF4tNZVXKxWdCl38oS1vXTB60%2F%2BIyROpiKGQzDsurbnaF9OYP3eozErtvp2EGdZ%2B6UCAetwRWSsQoRkHGB8CuYsRoF8E277XWn8z5EE%2BKIFKGdpwSLDD6MiHiLduJpn8ni3ugYxuMXbNYRtbfHoTZcMj3AjENaTucEVL5dNcAfPRVl28Fp&X-Amz-Signature=230a3d74faab139d826ec0b335a8a71019ab7a776acda338599c3584b4671a45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
