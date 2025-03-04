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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6IMPEB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Feqyo5k2rSz8%2B5QBxPR7sFMaRuLWkFdH0w%2BuL%2FRmSDAIgEFqRke36M%2FlmITFRKIzSXeKabjYfwWpBUgbjzG2ZunMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZkms%2Byb%2BU5tmsrBCrcA4Zwt0UWEgCOkx0X4usY0xjiBaQ9UNZEsj%2BbVslwLX2wEV8u%2BLhvIePONC52YKa%2B0MnxL4M5m8z6UBpQshygiujWD3tpkZ1Q%2BzJVmA6Egtf%2FftxG5cmnj0WYkCbYCETpTe1JAhmlizaeGlX6URNbEKCRllo4rkrGm3P%2FKii%2BD72y0ZpK%2F21In5lr2CFw7997UkIrFIYn8kjaeo9tNCIh9zwnTwbjY1dajEnAChD4rSAVQa1zIvnQAn1PyLyQ9v8xtvTu0MIsS7VZM83tWj%2Fag5W6mvESHx1V8IboRAMireZtPsZE48NT1OK9JMD3TTEZFh4M7DoPkOmRfP8p5sq4%2BjHi3t37u%2Fl8moFpTtp9MVgSD%2Fqk%2FPl%2BaD5oqSPq7rSWrljgSfD%2F244zk%2BpmDEFi1oRvyLwnybkEpK%2BYEmHXU8E9%2BSOQAUQcytUf5OQeN4IHfqMbhJIwIpNclIXAxC1xZyxHtk%2FEbpPkkMkAwr4OLl9s1mh6ZGRE88OJsqHe8mIoo5dm46IbD7Bo%2FLW3vOiIg6Mlent4WaiWdNYLipKqbWFsdgpYMgZRY5e%2BMDWuC9GcGitnzPP31gI2Z6tdRqOds0ZieNI5un2okiNIzBtoGd3wMXRV7dJgIHl39qG0MJfpm74GOqUBvK0FenQwTtDG7MeUrzPYLQa8AW1xlzpwD7xJTI%2BsyVpBWhFBb85SocVaVc7a45MNs%2FqFtKeEuH7iiR6hvA8fahQrDRuB28UWp6YM7cyGtgVOcP1qpMdjwXN0gnE6sCCP8kg%2BAGhPWgygSNhX6sVJegSf05CDK1OG1TVFIq0%2FvunlpLiMoE4qO8K5ByErgaOZ43ChTLkdzWE%2FIiq6QU1a8bkiaGDY&X-Amz-Signature=451aa65d63d39ac7a403f6ecb504d2ce6ecad73441a772e1b7d1eb425ff63d17&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6IMPEB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Feqyo5k2rSz8%2B5QBxPR7sFMaRuLWkFdH0w%2BuL%2FRmSDAIgEFqRke36M%2FlmITFRKIzSXeKabjYfwWpBUgbjzG2ZunMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZkms%2Byb%2BU5tmsrBCrcA4Zwt0UWEgCOkx0X4usY0xjiBaQ9UNZEsj%2BbVslwLX2wEV8u%2BLhvIePONC52YKa%2B0MnxL4M5m8z6UBpQshygiujWD3tpkZ1Q%2BzJVmA6Egtf%2FftxG5cmnj0WYkCbYCETpTe1JAhmlizaeGlX6URNbEKCRllo4rkrGm3P%2FKii%2BD72y0ZpK%2F21In5lr2CFw7997UkIrFIYn8kjaeo9tNCIh9zwnTwbjY1dajEnAChD4rSAVQa1zIvnQAn1PyLyQ9v8xtvTu0MIsS7VZM83tWj%2Fag5W6mvESHx1V8IboRAMireZtPsZE48NT1OK9JMD3TTEZFh4M7DoPkOmRfP8p5sq4%2BjHi3t37u%2Fl8moFpTtp9MVgSD%2Fqk%2FPl%2BaD5oqSPq7rSWrljgSfD%2F244zk%2BpmDEFi1oRvyLwnybkEpK%2BYEmHXU8E9%2BSOQAUQcytUf5OQeN4IHfqMbhJIwIpNclIXAxC1xZyxHtk%2FEbpPkkMkAwr4OLl9s1mh6ZGRE88OJsqHe8mIoo5dm46IbD7Bo%2FLW3vOiIg6Mlent4WaiWdNYLipKqbWFsdgpYMgZRY5e%2BMDWuC9GcGitnzPP31gI2Z6tdRqOds0ZieNI5un2okiNIzBtoGd3wMXRV7dJgIHl39qG0MJfpm74GOqUBvK0FenQwTtDG7MeUrzPYLQa8AW1xlzpwD7xJTI%2BsyVpBWhFBb85SocVaVc7a45MNs%2FqFtKeEuH7iiR6hvA8fahQrDRuB28UWp6YM7cyGtgVOcP1qpMdjwXN0gnE6sCCP8kg%2BAGhPWgygSNhX6sVJegSf05CDK1OG1TVFIq0%2FvunlpLiMoE4qO8K5ByErgaOZ43ChTLkdzWE%2FIiq6QU1a8bkiaGDY&X-Amz-Signature=dde8224ebc462d9773b6d004ad2b8199390305652ac6a06b357a921180bf6c92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
