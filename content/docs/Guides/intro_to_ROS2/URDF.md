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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7X4WHH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhEqpCphIE46WVJvVr17ZGntiVorOctFozA0uL1OqPQAiBgEYLT3XKMN69ksGC2wjTWaWEe13UWWd8cwuo5TSwh3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM9DYq2aJF3zMTXaePKtwDjd4LomwKQ%2FiDFH6fkd15lESv9wd61i0qY0cRkkzpZ1MiiQoF7YX%2BfHGbfXhF5E5u6MfH%2BlSlmqIG1NvRE57meX4WsoAEbugvZCe6PsJNG0vo6HRYFnupczmoZRkTh1o1qaz0mTlznruOGgGRym8EoAzoegvU2TOfTKN3L90NlYn0pDGeeUeYScyGhn84LFXwem5g5psP6NDovH1z03tu2sNQH%2FKihunrsbC%2BMyguK7D5grWbudMGPlRGfoA8wBDnNre2YBAkQw7QhUJahOGV9jRQ%2B3McVZxExaQvJnOHyNo5a0vYbIEea%2B5o65ivA7tk4MFc54JiN6hGiyuXlPSk4EhIFoz4JPc8spcGyWYFjTL5MHguMAkF5FaUbCyoCjc6Ljy78H1CIX1IB0zdQ%2BP8AZc7RDKKC6fenoSfxsqyU2GTyq%2FFMvuGZZralUYFz%2FpbRNdQ4UpuVJSEqkvVuugPh9TJfl%2Fb7VeboFEc3mu4MIRzrK3H8aOYxkxMSG1%2Bbc75gyCsLATGveNZHr84cE%2Btbo5JlMM1DuID9uti%2B7hPagHMPl08ALm%2FvK1maF6%2FF%2FJoCqqAvpJe%2F7RBPX%2BBFM9HIQIbFpWqBRjZibSdX8PK3U%2BG%2FBqQO%2BSKA8LYJkMw9oCRwgY6pgGDk7zmEDRZBIzuUlBPBSJCSqqB2rAfLWUIlYUjph4UGVkv%2FiYZCwidlrT6S6ulswp3ZaXXCGMIRn71uzn3xCEES%2FxinGJZoNd75CEd9QJLB1AbH24OFeiicR6wAD6%2F4xP4WheUj%2FvHKrstjjX1CttchIM33FrZjPxG%2BNcWWEME3Kid5qy9nE8BL7UGuflxPsiIUsHuGJ061bsE1yp0pmJCOfrq9dcl&X-Amz-Signature=eda8ca128f5bbcaa6a44e257cc0c580159abffb1b83b5da77eab3f447109bb15&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7X4WHH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhEqpCphIE46WVJvVr17ZGntiVorOctFozA0uL1OqPQAiBgEYLT3XKMN69ksGC2wjTWaWEe13UWWd8cwuo5TSwh3Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM9DYq2aJF3zMTXaePKtwDjd4LomwKQ%2FiDFH6fkd15lESv9wd61i0qY0cRkkzpZ1MiiQoF7YX%2BfHGbfXhF5E5u6MfH%2BlSlmqIG1NvRE57meX4WsoAEbugvZCe6PsJNG0vo6HRYFnupczmoZRkTh1o1qaz0mTlznruOGgGRym8EoAzoegvU2TOfTKN3L90NlYn0pDGeeUeYScyGhn84LFXwem5g5psP6NDovH1z03tu2sNQH%2FKihunrsbC%2BMyguK7D5grWbudMGPlRGfoA8wBDnNre2YBAkQw7QhUJahOGV9jRQ%2B3McVZxExaQvJnOHyNo5a0vYbIEea%2B5o65ivA7tk4MFc54JiN6hGiyuXlPSk4EhIFoz4JPc8spcGyWYFjTL5MHguMAkF5FaUbCyoCjc6Ljy78H1CIX1IB0zdQ%2BP8AZc7RDKKC6fenoSfxsqyU2GTyq%2FFMvuGZZralUYFz%2FpbRNdQ4UpuVJSEqkvVuugPh9TJfl%2Fb7VeboFEc3mu4MIRzrK3H8aOYxkxMSG1%2Bbc75gyCsLATGveNZHr84cE%2Btbo5JlMM1DuID9uti%2B7hPagHMPl08ALm%2FvK1maF6%2FF%2FJoCqqAvpJe%2F7RBPX%2BBFM9HIQIbFpWqBRjZibSdX8PK3U%2BG%2FBqQO%2BSKA8LYJkMw9oCRwgY6pgGDk7zmEDRZBIzuUlBPBSJCSqqB2rAfLWUIlYUjph4UGVkv%2FiYZCwidlrT6S6ulswp3ZaXXCGMIRn71uzn3xCEES%2FxinGJZoNd75CEd9QJLB1AbH24OFeiicR6wAD6%2F4xP4WheUj%2FvHKrstjjX1CttchIM33FrZjPxG%2BNcWWEME3Kid5qy9nE8BL7UGuflxPsiIUsHuGJ061bsE1yp0pmJCOfrq9dcl&X-Amz-Signature=51dc41b3ffb565b51f3f4e48a4d4d2c18afaa86fa3a9f70cd10e90ac028b999a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
