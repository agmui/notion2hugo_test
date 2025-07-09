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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUNEIMF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3WI6vuB9%2BlvLnXelceYtqyTpBTlS8R3jSdFxSfcXS9gIgIvn5hYlWugba8I6FtSe5w3Q5yHTVQAbMT3US1RUhRFAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENcFBjwE2xKaV%2BCASrcAxwfnOP5haMBP%2FOSuyx1mLJd2c9TIDpxqgufnhAnekdH%2Bfhl5Nea9gYJyOURWBnK8taKssLgCxv%2BJK0H3oU%2BhAJUo1R0D4Pr6CBexwYJdk24k%2F7rBoHKGIGBPaeK6pa61dD8H9lYXNNjI%2F%2FIbkyPknG7q1tOEGz1dzTn%2F3NwmJgBYvE0NybuORVqeA%2F0TXL6SgU3lziuNt6yMAodfAgMl8gAgaZo0EczBECwyCFZhT%2BUPzutXq%2BEOjY8nPKjcDzta4SoS01br%2BK2h1Ev5JcusHb0xsqg22bnMAfakkAMmJYsoC%2Fi4Sl4nkTRjt5v8PcoA%2B4dGe0Qa%2B6r8GSrnEVr%2BlFF01EmjOhw%2FIJPCsNfRcxsoYKoHipkU5yz%2FFDqp0z7jMbRGBNjtFfbMyEGF3t%2BTQ5EAFa%2B2n666YQj%2FopUCc7JHC8BPuQ06LeduYBoHh11D%2BoyiWZCBCXaB7lwSR8ZCZItMlL05xtWojIaYoXKTf1Io1x82FgJK0h1UmsZ0zJ2D9Mowy5hww7Ph%2BbHDFR%2BIZVpfYiK3zhyWTHjbXD4l%2Bro77pJHWvmcohg1sOaefzElmAM6er9Gv7sV0HHvqSP7r1WlsOcD0gy9ytwBZZpd%2BVdNHeWtDKnIOXjSiybMNOiuMMGOqUB49Y5QWNKJrDT0MKvQIdWcU0fV8bS6bRSRNIyaeUHotnfUtKPf%2BhqZLZM6rD3ry2GHhmB%2FVUEUxLIh%2FHH5LnuYu9W83xxNbIUID6weyyiCoH4C1TklgbCgsVJ6zD2e2DjcytkvI7yFljUK9B6LvYHpwvFQ2%2BdsXfb%2FqEv53%2B7MUo7aVSOMMU6v6K1J3QyxYj1SUuZ5Qrak9CILkQzWalpNfvLLB3X&X-Amz-Signature=c72badd4100512f8761eb7b72488a8dac11b518fe306815964f7c494b50c8df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUNEIMF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3WI6vuB9%2BlvLnXelceYtqyTpBTlS8R3jSdFxSfcXS9gIgIvn5hYlWugba8I6FtSe5w3Q5yHTVQAbMT3US1RUhRFAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENcFBjwE2xKaV%2BCASrcAxwfnOP5haMBP%2FOSuyx1mLJd2c9TIDpxqgufnhAnekdH%2Bfhl5Nea9gYJyOURWBnK8taKssLgCxv%2BJK0H3oU%2BhAJUo1R0D4Pr6CBexwYJdk24k%2F7rBoHKGIGBPaeK6pa61dD8H9lYXNNjI%2F%2FIbkyPknG7q1tOEGz1dzTn%2F3NwmJgBYvE0NybuORVqeA%2F0TXL6SgU3lziuNt6yMAodfAgMl8gAgaZo0EczBECwyCFZhT%2BUPzutXq%2BEOjY8nPKjcDzta4SoS01br%2BK2h1Ev5JcusHb0xsqg22bnMAfakkAMmJYsoC%2Fi4Sl4nkTRjt5v8PcoA%2B4dGe0Qa%2B6r8GSrnEVr%2BlFF01EmjOhw%2FIJPCsNfRcxsoYKoHipkU5yz%2FFDqp0z7jMbRGBNjtFfbMyEGF3t%2BTQ5EAFa%2B2n666YQj%2FopUCc7JHC8BPuQ06LeduYBoHh11D%2BoyiWZCBCXaB7lwSR8ZCZItMlL05xtWojIaYoXKTf1Io1x82FgJK0h1UmsZ0zJ2D9Mowy5hww7Ph%2BbHDFR%2BIZVpfYiK3zhyWTHjbXD4l%2Bro77pJHWvmcohg1sOaefzElmAM6er9Gv7sV0HHvqSP7r1WlsOcD0gy9ytwBZZpd%2BVdNHeWtDKnIOXjSiybMNOiuMMGOqUB49Y5QWNKJrDT0MKvQIdWcU0fV8bS6bRSRNIyaeUHotnfUtKPf%2BhqZLZM6rD3ry2GHhmB%2FVUEUxLIh%2FHH5LnuYu9W83xxNbIUID6weyyiCoH4C1TklgbCgsVJ6zD2e2DjcytkvI7yFljUK9B6LvYHpwvFQ2%2BdsXfb%2FqEv53%2B7MUo7aVSOMMU6v6K1J3QyxYj1SUuZ5Qrak9CILkQzWalpNfvLLB3X&X-Amz-Signature=e106c8a5b534d087d7112c8b690d21fd36fc1141ce5387a8d1af55bb5c9a2e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
