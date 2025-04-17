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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZDHBNU4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzL%2BD3YQbHKE1AQWnyzMnpUhhbSpib5L5sjs7epgBlBwIhAJj%2BAvY0jEZPh%2F8u6ny2Fk1VsCBEaXHVhJETIp3IXsS0Kv8DCGMQABoMNjM3NDIzMTgzODA1IgzzJy%2BhHZ%2FUSJLYoU0q3AMtrch7iyidlAOy%2FPzwaDDMvjH%2B%2Fqw3rFhUtGumkP7yfTm1S2cGFnX2wfjT8IKhjJ9h8BhxyvdoN21qIvqwpjOSeKQDuagS74Yr%2BhcDiBg5XUBgBSl%2FZv%2FviDLRksiGhqAFpSvB68E0Mmc61rjurtcnVMkuuNBrUnKUdOerxJ1gAEZXJrFBxMUt2xWIzOYFSZ5H0%2BeBqghKOGtpEX88eUSmAhYwisdd7U%2BDPO%2FUz6HQctm0l%2Ba%2BO2AuV%2FkdjHgbCiVUpU1zn%2BForGly7X%2FTqOkfduG1ru8t8ckuldJanRwt2%2F8UsKizxXDDqhlVzR%2Bas9Pf6qVRhQmtiDSaTbDIX7xh4%2F6VYgyTRCf1IJ%2F%2FdMwse%2BwN%2FiZqeZuHlaLPt%2FfOGbQRKvIbkrCZpnEBmNLPaKptby0rUSPFglfOt5IVVD8uLeYdxbmJgZn0QeSK3vE6bei5ORhzi4qOfs0dhE8vFT4vTvImwN7UPOpgwRPfIvBLZuyMCj8%2BMxwNbUqLiZI6URWOZH77OBEEpWUohzfa8Un7hPUNTRnHvSnd6d70ntL9NvxJB74GmNABo%2FNg8Zr3jx805NIE2Chyepp3iUXzRV14%2FFHElCGbsfW4Qvpd%2F1dDh0j95O7aJ%2B3utivy1zCTg4XABjqkAU6tLRqh8ijnNioVg6hQ5KoHBFA1CiiQns1a%2BuXIX%2BetPAt92aSIGMtmQ1UAVJgjowDVhWDvMwXxXYin%2BsfBEM0lUwkxSAi3B%2FYk4PQRbCucset41YgFKsCwzg0Q9HahunYtT2yX1OMf5vNAZj83VsKFCnr4nhzUyz959k97HuEldjlKGXiGaty9%2B69jPg9Wo8%2B49q8SpB1UEaE2s%2B%2B85SJOnUuq&X-Amz-Signature=e24d6d2cbc719e56bf22d4d0b91e8db6ef81e2160afdf1fb059676f2e7c8da46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZDHBNU4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzL%2BD3YQbHKE1AQWnyzMnpUhhbSpib5L5sjs7epgBlBwIhAJj%2BAvY0jEZPh%2F8u6ny2Fk1VsCBEaXHVhJETIp3IXsS0Kv8DCGMQABoMNjM3NDIzMTgzODA1IgzzJy%2BhHZ%2FUSJLYoU0q3AMtrch7iyidlAOy%2FPzwaDDMvjH%2B%2Fqw3rFhUtGumkP7yfTm1S2cGFnX2wfjT8IKhjJ9h8BhxyvdoN21qIvqwpjOSeKQDuagS74Yr%2BhcDiBg5XUBgBSl%2FZv%2FviDLRksiGhqAFpSvB68E0Mmc61rjurtcnVMkuuNBrUnKUdOerxJ1gAEZXJrFBxMUt2xWIzOYFSZ5H0%2BeBqghKOGtpEX88eUSmAhYwisdd7U%2BDPO%2FUz6HQctm0l%2Ba%2BO2AuV%2FkdjHgbCiVUpU1zn%2BForGly7X%2FTqOkfduG1ru8t8ckuldJanRwt2%2F8UsKizxXDDqhlVzR%2Bas9Pf6qVRhQmtiDSaTbDIX7xh4%2F6VYgyTRCf1IJ%2F%2FdMwse%2BwN%2FiZqeZuHlaLPt%2FfOGbQRKvIbkrCZpnEBmNLPaKptby0rUSPFglfOt5IVVD8uLeYdxbmJgZn0QeSK3vE6bei5ORhzi4qOfs0dhE8vFT4vTvImwN7UPOpgwRPfIvBLZuyMCj8%2BMxwNbUqLiZI6URWOZH77OBEEpWUohzfa8Un7hPUNTRnHvSnd6d70ntL9NvxJB74GmNABo%2FNg8Zr3jx805NIE2Chyepp3iUXzRV14%2FFHElCGbsfW4Qvpd%2F1dDh0j95O7aJ%2B3utivy1zCTg4XABjqkAU6tLRqh8ijnNioVg6hQ5KoHBFA1CiiQns1a%2BuXIX%2BetPAt92aSIGMtmQ1UAVJgjowDVhWDvMwXxXYin%2BsfBEM0lUwkxSAi3B%2FYk4PQRbCucset41YgFKsCwzg0Q9HahunYtT2yX1OMf5vNAZj83VsKFCnr4nhzUyz959k97HuEldjlKGXiGaty9%2B69jPg9Wo8%2B49q8SpB1UEaE2s%2B%2B85SJOnUuq&X-Amz-Signature=d9765f429e143d1a3b277b6e632f4eda74a2c5286cc92171a4f682487e7ba217&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
