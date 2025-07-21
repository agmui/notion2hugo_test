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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PV6FKI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArK%2B1%2F0vZLuhi5jdzwOgD5K8eOVus4DUID88mdpMYaDAiEAshlV%2BRQ1uv03UeO2ZTR%2FZJDUzg1vbYN4enQagpc8fgQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRNAwpO9NabLjTTSyrcA2tylwKAcWaiZkBTZl%2FmqOCsadTFsuMF3P9BtvY0RQQ7Hws0FfWdXP42CqJZBnTs9ly3543Qq2s9pJauZ4%2FokQHjZHj2jSU7iKB%2FdrjDODcL8529bXP8WJKgDDsRQNtLzFTgBURMlw6cc8GcgRiX8Cb7elMJRZMFP0tD5tfz8pjNGj0sOvjv5Mgp8OSgEZYY%2ByjB7uwjZgi40iosZlczikG1IZh4s9iHIS2ZHDBdnEo1sMrvmOuG3l2Y5QG2bm41TvnUnWU8%2BcV2IJH15cduhiOtX9k8Hh3jMICAFyFAqJLipcq2edy5WnYp%2BdhVwNDs2V3K%2FuhJusgtROBZGp0iLbvzeq3svQyEE1B7geOYQDxTt91DKWo86Re1sGURfh2NuFX2kw0IrhEgrMDxPkweZdaadruzXtF8DOkLTH6cSuS%2B0nbyuHfDG%2B6FA2yuvgj8o8%2FHTu5BppPfQxLUrish%2FupfRHLs%2Fn%2BMdTsrQ8ixbycvAIOeiJRavzDFs1U%2BjsEsdWwhkdGuNSwAH9wt1IzUIf5B7RQBoP5rAVEOq%2BwakfKSBIhePb1LVLjyXP4J1nmJJZFRg8rw6cVV3P3%2BtznyfxE%2FHEOoWpcx0MrI9Z%2BnHurM%2FbTvxU3kni4NqGtoMLWT98MGOqUB3pcAMNT8CHRkRL3xnuEONZunPGf4nYaMrx1SiXX%2FzjmZj%2Bcw0b%2BiwMolkB6RPFm8FjhvvmmFaNdXK7Wssi2Jd2s7eMoaDPWO%2BNwJu8EO6yz6NWzVNq5NFTEJlBoBhH9MHcgmjQilh2xC4WlnDREi0MvyyRy8nvjFVIEhW8DnN%2FEe67fuqu6EBsVB%2FpvEGFN%2BMXKmFuBAukWfQ5ytY736Az90%2ByMT&X-Amz-Signature=b4f3031b4d302ee78957a9a7b2358ce06f5b4ad81136027d8782de9bdd754aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PV6FKI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArK%2B1%2F0vZLuhi5jdzwOgD5K8eOVus4DUID88mdpMYaDAiEAshlV%2BRQ1uv03UeO2ZTR%2FZJDUzg1vbYN4enQagpc8fgQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRNAwpO9NabLjTTSyrcA2tylwKAcWaiZkBTZl%2FmqOCsadTFsuMF3P9BtvY0RQQ7Hws0FfWdXP42CqJZBnTs9ly3543Qq2s9pJauZ4%2FokQHjZHj2jSU7iKB%2FdrjDODcL8529bXP8WJKgDDsRQNtLzFTgBURMlw6cc8GcgRiX8Cb7elMJRZMFP0tD5tfz8pjNGj0sOvjv5Mgp8OSgEZYY%2ByjB7uwjZgi40iosZlczikG1IZh4s9iHIS2ZHDBdnEo1sMrvmOuG3l2Y5QG2bm41TvnUnWU8%2BcV2IJH15cduhiOtX9k8Hh3jMICAFyFAqJLipcq2edy5WnYp%2BdhVwNDs2V3K%2FuhJusgtROBZGp0iLbvzeq3svQyEE1B7geOYQDxTt91DKWo86Re1sGURfh2NuFX2kw0IrhEgrMDxPkweZdaadruzXtF8DOkLTH6cSuS%2B0nbyuHfDG%2B6FA2yuvgj8o8%2FHTu5BppPfQxLUrish%2FupfRHLs%2Fn%2BMdTsrQ8ixbycvAIOeiJRavzDFs1U%2BjsEsdWwhkdGuNSwAH9wt1IzUIf5B7RQBoP5rAVEOq%2BwakfKSBIhePb1LVLjyXP4J1nmJJZFRg8rw6cVV3P3%2BtznyfxE%2FHEOoWpcx0MrI9Z%2BnHurM%2FbTvxU3kni4NqGtoMLWT98MGOqUB3pcAMNT8CHRkRL3xnuEONZunPGf4nYaMrx1SiXX%2FzjmZj%2Bcw0b%2BiwMolkB6RPFm8FjhvvmmFaNdXK7Wssi2Jd2s7eMoaDPWO%2BNwJu8EO6yz6NWzVNq5NFTEJlBoBhH9MHcgmjQilh2xC4WlnDREi0MvyyRy8nvjFVIEhW8DnN%2FEe67fuqu6EBsVB%2FpvEGFN%2BMXKmFuBAukWfQ5ytY736Az90%2ByMT&X-Amz-Signature=dc27444ce376cacf4d2057273cd7b1e088176ef174d4acd6108e0eadbd1ab7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
