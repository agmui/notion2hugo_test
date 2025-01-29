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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EHZSWX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFSwJ%2BUJlHbdBx2Mcm0wFE2hty00kXvfUviUx05W8i7bAiBfv7izbAq9xjXmoE3o%2Bj8MZ0XiZoS%2Byf2AQKchE16qJCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBaDuPwrg1YeS5mQKtwDd9oLtIGfQ0j%2FRiPwfknRIOewDmLpG8TTXdhrTKzQj6JAhh4aIJ0ZZSjcIIP%2FvSsmwW4dQ85j%2FtTYyoinBnV1dPRWHCan8pw%2BPmSE5pcyyQmiWgbxwJ5LtfNa8GkM7Xoua1GW1JVAD%2FgJyUvUacBVCFq7mcQJ7tUDFOnUolQZYqcAxz%2B7BwyTn4OCHH5gMkl6daLQgoAtlHn1NGM0aALHqo3r0axdbIjTyGz8W5QJx3XRGMd%2FYNsNioQ%2Fzmzhg%2FFBWEdrwjdRlRGHHHFsnw8RTpfe2w7bT5HTFSYD1QFeh1j4QNXDQ3fvMygVeCKiivw1sZan5pU4vL%2BoPUL%2BnXAmWc%2B7ri58V2fv348hJ7VtDS9%2FhC9TXeWGlsbvWhZ2ZP8CfubiTlSzIoe%2Fs2UKrw7KO1JFqe6JEpT3zBzxbqFqdyLwrkJtpjPUpJjHksta4kokvuKrdhF3KODn2b0CEH2IM7%2By7AeJ3HyvzPHPL7Pn6J8ralTD0zevwWAvI8yOyWGB8mKuBfiwDNseZ32v2%2FfXcBZkki6zo5nWdTIYKiT1oaNxQZQsdg6GlHYjKUDs2U%2BeiROKjW8Ed4MPkGwaABx2gmaIoZEsXMrY3BqVSDTOdDTM%2Bj0jxcPtMltqrZgwv7zmvAY6pgHtw27balDUXunfEYaeZDyWUwOTinZ8SesmXfrffKkf2o7QFORTB950BbRS8dunfdgriwgZcMJtNQT59%2FB%2Fvo6u9XkOUHuapkozDMWWwlzUFnX%2BceJsXvV57iyhwGYfPbdtOFsAYjG84GwTYopVlyzQEC560syHTTXRDO07qrNX9lq4lu1wNXgecsX4C0rZQAL38vsPOIhxHceGyBUCZY%2FUWtSJtJKv&X-Amz-Signature=accc1f2aba8de783c9a1614f432b67cd669d34f72753e3b7aa4865d073b14fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6EHZSWX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFSwJ%2BUJlHbdBx2Mcm0wFE2hty00kXvfUviUx05W8i7bAiBfv7izbAq9xjXmoE3o%2Bj8MZ0XiZoS%2Byf2AQKchE16qJCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBaDuPwrg1YeS5mQKtwDd9oLtIGfQ0j%2FRiPwfknRIOewDmLpG8TTXdhrTKzQj6JAhh4aIJ0ZZSjcIIP%2FvSsmwW4dQ85j%2FtTYyoinBnV1dPRWHCan8pw%2BPmSE5pcyyQmiWgbxwJ5LtfNa8GkM7Xoua1GW1JVAD%2FgJyUvUacBVCFq7mcQJ7tUDFOnUolQZYqcAxz%2B7BwyTn4OCHH5gMkl6daLQgoAtlHn1NGM0aALHqo3r0axdbIjTyGz8W5QJx3XRGMd%2FYNsNioQ%2Fzmzhg%2FFBWEdrwjdRlRGHHHFsnw8RTpfe2w7bT5HTFSYD1QFeh1j4QNXDQ3fvMygVeCKiivw1sZan5pU4vL%2BoPUL%2BnXAmWc%2B7ri58V2fv348hJ7VtDS9%2FhC9TXeWGlsbvWhZ2ZP8CfubiTlSzIoe%2Fs2UKrw7KO1JFqe6JEpT3zBzxbqFqdyLwrkJtpjPUpJjHksta4kokvuKrdhF3KODn2b0CEH2IM7%2By7AeJ3HyvzPHPL7Pn6J8ralTD0zevwWAvI8yOyWGB8mKuBfiwDNseZ32v2%2FfXcBZkki6zo5nWdTIYKiT1oaNxQZQsdg6GlHYjKUDs2U%2BeiROKjW8Ed4MPkGwaABx2gmaIoZEsXMrY3BqVSDTOdDTM%2Bj0jxcPtMltqrZgwv7zmvAY6pgHtw27balDUXunfEYaeZDyWUwOTinZ8SesmXfrffKkf2o7QFORTB950BbRS8dunfdgriwgZcMJtNQT59%2FB%2Fvo6u9XkOUHuapkozDMWWwlzUFnX%2BceJsXvV57iyhwGYfPbdtOFsAYjG84GwTYopVlyzQEC560syHTTXRDO07qrNX9lq4lu1wNXgecsX4C0rZQAL38vsPOIhxHceGyBUCZY%2FUWtSJtJKv&X-Amz-Signature=d10b016f5b2639d7324a6a5578ffc02679a81e1cbb512f7142e82acdb7711818&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
