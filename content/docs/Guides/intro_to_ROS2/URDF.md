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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SZX5G5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC0bhZpmYpxK0VaxZ90fYHYIaz6b74q28FcfyR%2F4QF5hAIhAJZ5RXLtm%2Fo%2Ffk8DFpWcvFTZLpOz0hSPSAqM5YeeXRzHKv8DCFgQABoMNjM3NDIzMTgzODA1Igwaa62LIL9k%2BfHmLe4q3ANvOrtymnR4FRGyqptje8lY46jau3ugcGXYU0JOmWP2E0Sm4uc7en1xeHiqGfZUzfDI3NSyKmtKmGjWpifjs5JPNiNOzNRlK9MLdT6T%2B4yVk6H7AR5bCSeyFavkb0o3IpipfnbUDoZO5tjGprvtp%2Bf0u5NX7eQIfirq15dKJT3OPQsq9l1Y7JQV04FhY4K6E69pDbWW8x%2BAvYCFivK2yX6WchvGOtchtK7ihI4ULOfLZDPOAFejaL3mXCEOnvlvchp5b%2Bbvzu375IKPwPu5BWasoM%2B3YaALCm2J64sLtxxvKILttvaIFF02bfqz4cabTjFNC3UXupe5AIIrYxvu1cJXUvNcG0Cyd%2BNR64Ur1KpThOR%2BfKuvBkcDAKyUone6fVThS6A6uhQ3Yp0dHhimwb7E7nv8clMeCAjnyoQ6sT7ZwoanPGFu2%2FGSMiGUtTFBAtHvxM48VZPnyYXD9Fa7KAOyJwJmf8cHa38H%2FpPj22GVscl9jbWCa3io5bbA79Hmu8Xw1%2BZN%2FPqMO9HcepHftK3WfuT1EhtqqqQAyl9W7e5iwUvtsvPk%2Bt6HGs4VHPcs8s5GnFJX3zIMUQNu%2FOj40lh27GXqSfnbUsFeSM94tSBc4ZCR5yQqMw5Nftd8XTCVib%2FCBjqkAWzrhZfhLiHI%2B2GeN8sUfhqQZuIUl0913fpXm4Z6hNfUSmOHI9vh%2BuiL%2FgF4E9oGNw22VKST9s70aY8G2qoVkJkXb9L35TfsuyJPHad%2B4%2B4X%2BlS5HCZsWlObC5DEhMCvaGlxP6WuFAI1H1LRgo40kHHnDU2KzIGOPBA5wi4DMtvKp0nKpVBJOOfU3AzY9nVjDe2NJnHOp0AIX8R9ueMmWnuIE4f3&X-Amz-Signature=8b738bf400d9054e60993de7de9fe6ac3a9be2f7e825b1a63e1fed4cf716ebd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SZX5G5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC0bhZpmYpxK0VaxZ90fYHYIaz6b74q28FcfyR%2F4QF5hAIhAJZ5RXLtm%2Fo%2Ffk8DFpWcvFTZLpOz0hSPSAqM5YeeXRzHKv8DCFgQABoMNjM3NDIzMTgzODA1Igwaa62LIL9k%2BfHmLe4q3ANvOrtymnR4FRGyqptje8lY46jau3ugcGXYU0JOmWP2E0Sm4uc7en1xeHiqGfZUzfDI3NSyKmtKmGjWpifjs5JPNiNOzNRlK9MLdT6T%2B4yVk6H7AR5bCSeyFavkb0o3IpipfnbUDoZO5tjGprvtp%2Bf0u5NX7eQIfirq15dKJT3OPQsq9l1Y7JQV04FhY4K6E69pDbWW8x%2BAvYCFivK2yX6WchvGOtchtK7ihI4ULOfLZDPOAFejaL3mXCEOnvlvchp5b%2Bbvzu375IKPwPu5BWasoM%2B3YaALCm2J64sLtxxvKILttvaIFF02bfqz4cabTjFNC3UXupe5AIIrYxvu1cJXUvNcG0Cyd%2BNR64Ur1KpThOR%2BfKuvBkcDAKyUone6fVThS6A6uhQ3Yp0dHhimwb7E7nv8clMeCAjnyoQ6sT7ZwoanPGFu2%2FGSMiGUtTFBAtHvxM48VZPnyYXD9Fa7KAOyJwJmf8cHa38H%2FpPj22GVscl9jbWCa3io5bbA79Hmu8Xw1%2BZN%2FPqMO9HcepHftK3WfuT1EhtqqqQAyl9W7e5iwUvtsvPk%2Bt6HGs4VHPcs8s5GnFJX3zIMUQNu%2FOj40lh27GXqSfnbUsFeSM94tSBc4ZCR5yQqMw5Nftd8XTCVib%2FCBjqkAWzrhZfhLiHI%2B2GeN8sUfhqQZuIUl0913fpXm4Z6hNfUSmOHI9vh%2BuiL%2FgF4E9oGNw22VKST9s70aY8G2qoVkJkXb9L35TfsuyJPHad%2B4%2B4X%2BlS5HCZsWlObC5DEhMCvaGlxP6WuFAI1H1LRgo40kHHnDU2KzIGOPBA5wi4DMtvKp0nKpVBJOOfU3AzY9nVjDe2NJnHOp0AIX8R9ueMmWnuIE4f3&X-Amz-Signature=868810128b1ee44de39447c87e75eb435d1ce7276a7503cff6ead084e0e5a64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
