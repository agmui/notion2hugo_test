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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67P5LKR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDS3lb31JHrHJsAMOV3YE7wtNpKgpRUP0v8aLQgs%2FnHOgIgaVDl1vj5ncgUSjKjfAEOS58mPOX0YB9qHO7gHY6r24Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDP57j%2FhaR8Xcc%2F5TaSrcA4FdJpsX8sRD9BYZReSf5S4K3WB1Iv0FZj0rt%2BXdAKPY%2FP3bOEw35Yak95dud%2B3Es23e5vnYIE4SCZac2Hs58q2TL0s5Zbt7SvsPhPp%2BbZ2P%2FzZT%2BitfLneyqmF8LxoGw2J%2BFs3fa9U3v3JxREKHg3l%2BKr%2FNFn%2FB2%2Fc%2FlF4awLeY%2FV5xsTxCBala9qaV7%2F1q9K7xvC3%2F6u3JJyy3p9MNffI9lEypnhPLRCcgjVano5vQKFhDLqf05qgrLLCLbPVnOb0JKvIbKPttHBx1kjqpEmHVwK%2BCQBRQoaTPK3K4i8tcpilKQ872SLlxgwuPIMifcMj8VLnBydghvO8g0o67UBNZWFI0HkncJhOnuaeX2mMvZo8SSpgNka5nVHpOMGVYWiUu%2FPPPDnIOdTU0UQ%2F3qkjj4vGrbo09RHbq3eAsyd1Q7ale4m%2Bbq2VHo8Rb9C1cBIW6AAzlO09ru3lDufKb3HKVGeRYKzJcpW5dl0WbFTl4MJyxTjWyTYlpK2fUvtGZllicUsvc0U7LaU%2BOneiWQt6f%2FNV064dMTDAMMJrQHJF8i1OV4UqlZy8wPnMWcqYbwsbJXWf5q%2BtOVZToAvuzdNrU2vEBxpbzbuhQsiy5FdtuDMSm040uEFUVMsyVMPfYw70GOqUBXvOwt9Be8L3ENl3H62JKcbQoMK22BiRpWCPhxhC1A7DF8myMdwaFKeSNGsUtMkEzGh6Ey89mTHdMGRqOA%2BTlygVBnpXGDHqIrnpZ7YVnQulzio%2F3X%2FrGTzA5dedSqbmZBSrs1QRAd94uJfslgISmni6WtyxcCKsVIsdA3mLA72VeyimzuFQyT82eFwKNiD0sW5aRk%2BNWxeuaMmpaIx0bc8Wb1oEW&X-Amz-Signature=b58d1d42f6b6e8c8cfbceb73137bdc64b5b6cee49ca9f41161422532b624dadf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67P5LKR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDS3lb31JHrHJsAMOV3YE7wtNpKgpRUP0v8aLQgs%2FnHOgIgaVDl1vj5ncgUSjKjfAEOS58mPOX0YB9qHO7gHY6r24Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDP57j%2FhaR8Xcc%2F5TaSrcA4FdJpsX8sRD9BYZReSf5S4K3WB1Iv0FZj0rt%2BXdAKPY%2FP3bOEw35Yak95dud%2B3Es23e5vnYIE4SCZac2Hs58q2TL0s5Zbt7SvsPhPp%2BbZ2P%2FzZT%2BitfLneyqmF8LxoGw2J%2BFs3fa9U3v3JxREKHg3l%2BKr%2FNFn%2FB2%2Fc%2FlF4awLeY%2FV5xsTxCBala9qaV7%2F1q9K7xvC3%2F6u3JJyy3p9MNffI9lEypnhPLRCcgjVano5vQKFhDLqf05qgrLLCLbPVnOb0JKvIbKPttHBx1kjqpEmHVwK%2BCQBRQoaTPK3K4i8tcpilKQ872SLlxgwuPIMifcMj8VLnBydghvO8g0o67UBNZWFI0HkncJhOnuaeX2mMvZo8SSpgNka5nVHpOMGVYWiUu%2FPPPDnIOdTU0UQ%2F3qkjj4vGrbo09RHbq3eAsyd1Q7ale4m%2Bbq2VHo8Rb9C1cBIW6AAzlO09ru3lDufKb3HKVGeRYKzJcpW5dl0WbFTl4MJyxTjWyTYlpK2fUvtGZllicUsvc0U7LaU%2BOneiWQt6f%2FNV064dMTDAMMJrQHJF8i1OV4UqlZy8wPnMWcqYbwsbJXWf5q%2BtOVZToAvuzdNrU2vEBxpbzbuhQsiy5FdtuDMSm040uEFUVMsyVMPfYw70GOqUBXvOwt9Be8L3ENl3H62JKcbQoMK22BiRpWCPhxhC1A7DF8myMdwaFKeSNGsUtMkEzGh6Ey89mTHdMGRqOA%2BTlygVBnpXGDHqIrnpZ7YVnQulzio%2F3X%2FrGTzA5dedSqbmZBSrs1QRAd94uJfslgISmni6WtyxcCKsVIsdA3mLA72VeyimzuFQyT82eFwKNiD0sW5aRk%2BNWxeuaMmpaIx0bc8Wb1oEW&X-Amz-Signature=d863fcf70dfef30d2295cb4cfca2ee1075a04558725165e79bf60f3648336c56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
