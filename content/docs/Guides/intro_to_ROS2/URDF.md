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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJCIUO5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBJaY2%2FQsSPWY%2FlVqVCNTqLpyRVYSPcy%2Fb1I8zm6A9p8AiEA%2FxcXUnoIGm28Zab%2BCsvmjiHT5zfZB1jo5TXXfn63KKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUfrDJ3j4or%2Ft0XFSrcAy0dFNGO5R9Ca8HVpoooCrGTBqWCyko0xJXOe71CFTE%2Fb7xX7F1fxnuGMFmPhu1Oe105DNavyqb%2Bu9JHyibd3ZKx0OTwWWTq19V%2FmJqBAwkWfygox49Ktw%2B2vCdkq%2Fybc4lSlvxjKECzhuHg7vlo9bf0jjYuCyFyorAG2CQEgzFWnPjw0y6Tyr6bEb6ipZ11ujGxGHuR%2FvjwioFcVAS1hnbeMj8O7a4dCSKqXL4lf%2FPrLIgNet28MpeEmigAD3XjbRSrGxkwQaeuzrVW5WmuRn9J4uQliTBI3Cb1k8qBrY0nEawvORIbx2MJ1on6jna1SDcotCLGJ9K2pTRbnPVqkK7txMVi1YjT3akJAnliO%2Fx%2BIkRO8ap18a7K42Sua0x5n5FAVRBahmV3er1WLoAenNHcSk0E9%2FqbPeZg%2Btk6OPw2ulJ8SUvD6RYzrYTyW0riiocm43Llxg6ACOE0Z4pQYkkEt2JqvjyNecRGQbriVHUKQfYRl5VlBkLdW1xvHjrUu4CJh7uXaXDSLeev9y7fYWOCLvtV4ja64k49LiFE3BW4WIssembki61xn5OR8llrsdM87pFFMd0P0sX1NzvHHbzq%2BkEDU3iTi%2FBwMwuHGiCt386JSrW%2FYWU8urv%2FMLTJvsEGOqUBLeJY4bQgknwDCOoKWJ3MXbrbvyYGKgC1s52djNfGrzyMn6BT1skchxBmhNHY%2FxpJmwH0nvBeYcXhVTDl6uxX8kXTdx7CGsr7PK2LsaW1Vvkkxwhex7NO22lF2TUtlO2Iq%2BLwW1sUO%2F1Q%2BqfvhQESDBeqNuQVgHifjSvrAQtMl4NIvj7TeojV1wYFgfldRv8AI4GUQOVaiVuxs8wrJ9ZesUlT%2BZSW&X-Amz-Signature=afca5ceeca5004d8eefb19c6d274f8a174e3f67d9180762c867003e33fdb6cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJCIUO5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBJaY2%2FQsSPWY%2FlVqVCNTqLpyRVYSPcy%2Fb1I8zm6A9p8AiEA%2FxcXUnoIGm28Zab%2BCsvmjiHT5zfZB1jo5TXXfn63KKQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUfrDJ3j4or%2Ft0XFSrcAy0dFNGO5R9Ca8HVpoooCrGTBqWCyko0xJXOe71CFTE%2Fb7xX7F1fxnuGMFmPhu1Oe105DNavyqb%2Bu9JHyibd3ZKx0OTwWWTq19V%2FmJqBAwkWfygox49Ktw%2B2vCdkq%2Fybc4lSlvxjKECzhuHg7vlo9bf0jjYuCyFyorAG2CQEgzFWnPjw0y6Tyr6bEb6ipZ11ujGxGHuR%2FvjwioFcVAS1hnbeMj8O7a4dCSKqXL4lf%2FPrLIgNet28MpeEmigAD3XjbRSrGxkwQaeuzrVW5WmuRn9J4uQliTBI3Cb1k8qBrY0nEawvORIbx2MJ1on6jna1SDcotCLGJ9K2pTRbnPVqkK7txMVi1YjT3akJAnliO%2Fx%2BIkRO8ap18a7K42Sua0x5n5FAVRBahmV3er1WLoAenNHcSk0E9%2FqbPeZg%2Btk6OPw2ulJ8SUvD6RYzrYTyW0riiocm43Llxg6ACOE0Z4pQYkkEt2JqvjyNecRGQbriVHUKQfYRl5VlBkLdW1xvHjrUu4CJh7uXaXDSLeev9y7fYWOCLvtV4ja64k49LiFE3BW4WIssembki61xn5OR8llrsdM87pFFMd0P0sX1NzvHHbzq%2BkEDU3iTi%2FBwMwuHGiCt386JSrW%2FYWU8urv%2FMLTJvsEGOqUBLeJY4bQgknwDCOoKWJ3MXbrbvyYGKgC1s52djNfGrzyMn6BT1skchxBmhNHY%2FxpJmwH0nvBeYcXhVTDl6uxX8kXTdx7CGsr7PK2LsaW1Vvkkxwhex7NO22lF2TUtlO2Iq%2BLwW1sUO%2F1Q%2BqfvhQESDBeqNuQVgHifjSvrAQtMl4NIvj7TeojV1wYFgfldRv8AI4GUQOVaiVuxs8wrJ9ZesUlT%2BZSW&X-Amz-Signature=080c94e74684713ce977f13865229f359b9e824eda4e6ad624cd1cd3ed06048c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
