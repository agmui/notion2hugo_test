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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FPTLK7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPHoYBjTDSGNZWs1HPC5oQz%2BiMPa63h0G%2FoNL3icj7RAiBFt0pcqYWnUhiZeQf%2FVVZz0gshd8BRr%2B%2BhadJfn%2BKGFCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMqzjxqJWh5JjnoqC7KtwDiVk4oRDfqjh5i%2B%2FVAQMg5se4BF7ji9BC0K9hLyCRnQJrZgdwEiKed6PrQrGOcXJU8q6KrJyKFXEXgJ76a0wNwG8h3ShfDHfqONAffwQrEyBg7ucHmMkI%2FNVOVuwGMJABLxj%2FNsOdWAwbKpDcFFoFcvWcqGqHUEXr4TNtcvP7S68gZSQl%2Byhq4fC9NI9y932RBZoX1o6QXNYECE%2F08QZRCdrr3ibztVsVEGqvGrLjl5Xd09jZtCz1GymmNbH2psphClo8b9hB7%2BaKtnTEewknSVb%2FO%2BmA0F2JV1qzGpjepeBgAvjrEHdajSbHWJfDmbQK5qAv5W9hWeqNbNQ8uzs%2BowkcQlwCZ%2F%2B2D5Cl34h1oHFh2pbuXs%2FZJ6I1F1O8U%2Bk0JjmyFTvlv0oWWw5CAk6oc%2FyTeM07OyaOGbf%2F0KuyPoT%2BX3FYmjl%2FVcC8mIQyxMJYHszY5IuzFzEOs3xIgGt0atFuYH7062cJE%2FidrSk%2FbdG8pRAzUPvsgJv69jEhMQZTLJTq4g77Yn4mbHXjn44CIlwwMJ0YFKKoumNVP%2BKuLl3eK1u90sqc9H44Hw3x6mtARoltAU5d49UdJ93pJKgcPdrYi%2BinMOa56IH9xFmBcOd0xQuKLTP3UQzabyMwjObdwQY6pgEumwNE5zbrckOp8jgzYdALJEiDLm11pOMztvjygC7rxI0W5GA5dn%2FjxUC2MwV4ToammsPaJSCUoQm%2BsQ5W0y8LSff7Vo5KnLC3E20Xb5IpzzRtLMO%2B12urap8QmIQ33vlU3qCjJysQmwS2RXlcTTpazIsTAZv5vSSOtdIc88y4qPXHIbT%2FcNO5WgEyn0mUkM3TnctUNFCajJVIaJdvBXfWAVQromVl&X-Amz-Signature=f80f7d2adb3b37208d490e43ce9a60ccaad419759d0d264ff8e0b707a50bbf86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FPTLK7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPHoYBjTDSGNZWs1HPC5oQz%2BiMPa63h0G%2FoNL3icj7RAiBFt0pcqYWnUhiZeQf%2FVVZz0gshd8BRr%2B%2BhadJfn%2BKGFCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMqzjxqJWh5JjnoqC7KtwDiVk4oRDfqjh5i%2B%2FVAQMg5se4BF7ji9BC0K9hLyCRnQJrZgdwEiKed6PrQrGOcXJU8q6KrJyKFXEXgJ76a0wNwG8h3ShfDHfqONAffwQrEyBg7ucHmMkI%2FNVOVuwGMJABLxj%2FNsOdWAwbKpDcFFoFcvWcqGqHUEXr4TNtcvP7S68gZSQl%2Byhq4fC9NI9y932RBZoX1o6QXNYECE%2F08QZRCdrr3ibztVsVEGqvGrLjl5Xd09jZtCz1GymmNbH2psphClo8b9hB7%2BaKtnTEewknSVb%2FO%2BmA0F2JV1qzGpjepeBgAvjrEHdajSbHWJfDmbQK5qAv5W9hWeqNbNQ8uzs%2BowkcQlwCZ%2F%2B2D5Cl34h1oHFh2pbuXs%2FZJ6I1F1O8U%2Bk0JjmyFTvlv0oWWw5CAk6oc%2FyTeM07OyaOGbf%2F0KuyPoT%2BX3FYmjl%2FVcC8mIQyxMJYHszY5IuzFzEOs3xIgGt0atFuYH7062cJE%2FidrSk%2FbdG8pRAzUPvsgJv69jEhMQZTLJTq4g77Yn4mbHXjn44CIlwwMJ0YFKKoumNVP%2BKuLl3eK1u90sqc9H44Hw3x6mtARoltAU5d49UdJ93pJKgcPdrYi%2BinMOa56IH9xFmBcOd0xQuKLTP3UQzabyMwjObdwQY6pgEumwNE5zbrckOp8jgzYdALJEiDLm11pOMztvjygC7rxI0W5GA5dn%2FjxUC2MwV4ToammsPaJSCUoQm%2BsQ5W0y8LSff7Vo5KnLC3E20Xb5IpzzRtLMO%2B12urap8QmIQ33vlU3qCjJysQmwS2RXlcTTpazIsTAZv5vSSOtdIc88y4qPXHIbT%2FcNO5WgEyn0mUkM3TnctUNFCajJVIaJdvBXfWAVQromVl&X-Amz-Signature=7bfc0e5817c66c7a22cac4fde692c056398684bc6048f5d0c597bf9f518d6c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
