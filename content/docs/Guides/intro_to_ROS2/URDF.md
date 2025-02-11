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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSVXTNT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2Bn7mSuI4aFsPkJtgGLgLu%2F%2BX3lI1Zl8Tr3iYqjQZDAiEA6bNPFDF7Y7B1jLG%2FCoK7o3R8le6AHV58%2FBsf1CedxsUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoE2YGC%2BYZir5Ua8yrcAxGz%2BcDP%2FfSUq44JneinGLBkn6a9ct9Okj28U1O6Knv%2Fi%2Fy89MRLY6vLK5mn5U%2FKd7Z6I4bYPfwRRUsKc%2BWZhAwi7P%2FYi%2FeAMfWA%2BcmHxjMwdQ1bP3m5Q7CcxAiA%2F7Vu%2BevyqjzWyhWgTQSIgk0Z5P9nT%2Bgy0Ca5NYoor5XVyxv9MQvs2fK2%2FEZX6JCMoqQXbyDG42%2BC7WRVOz2vq%2FSOVxpPVP4jBGee9Vw%2F4qSkoTLHyObPr1SRJlXy5GesnH8NwayUnnh6E%2BaQEOxMF2yxsc%2FmLWh23IehHeJgEHtWO8mHq4gaxPR6qplhWyP7vsLdXLf3qnmddD6aPFLuCKPRIGwfyjJP%2FjtbnmzDASvHXkuPhEls92xu4RQbMWYPrwpatBvXpLrQ7mYDda1YLiyzS7dVtietAYk5zORnriiWwKoK%2FZl36mnkarf4qEB%2Bw2vbAWrozHUzidseADqzBeMXSoZotO4BbFta%2BPhtg6P0P%2FJkCmO4RpxUpUWyK%2B4mgGSEapzhs8G4oBdB3ZFulk87JIlijI66Jjlu9LeAVqnwnUVxRuqxPg3AaKTswaRJNMjcHpYwZi7dWXrX5vWiRcDc%2Be11t6RpiTNyvyKKvXG%2BtAoV4zAeBYHU%2Bkfr3KQmMKmTq70GOqUBZQr31NMeWxlGbfa6vyYhVF05nFuxZFn8j5W3tIZgpRlmXEqavTGTatQE25vJRovVqf%2BKW0syJs2mWJIre64sFS8na6hE72vo2iYwCdKCT8qgO8G4KODfkYnfqBDytipCWJJYeabmKbUfagauVO%2FytvS7apNENXnWY5sivBKFDib9UNAknN0RtC%2BaQLQuXN141YlYdKeuMeUUxbKl3hs%2FUam2t25E&X-Amz-Signature=a493ba71cd552a386b9ecd532d70ab490aba6b791cb9a51b1ddffe3d5cbdfb62&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSVXTNT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2Bn7mSuI4aFsPkJtgGLgLu%2F%2BX3lI1Zl8Tr3iYqjQZDAiEA6bNPFDF7Y7B1jLG%2FCoK7o3R8le6AHV58%2FBsf1CedxsUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoE2YGC%2BYZir5Ua8yrcAxGz%2BcDP%2FfSUq44JneinGLBkn6a9ct9Okj28U1O6Knv%2Fi%2Fy89MRLY6vLK5mn5U%2FKd7Z6I4bYPfwRRUsKc%2BWZhAwi7P%2FYi%2FeAMfWA%2BcmHxjMwdQ1bP3m5Q7CcxAiA%2F7Vu%2BevyqjzWyhWgTQSIgk0Z5P9nT%2Bgy0Ca5NYoor5XVyxv9MQvs2fK2%2FEZX6JCMoqQXbyDG42%2BC7WRVOz2vq%2FSOVxpPVP4jBGee9Vw%2F4qSkoTLHyObPr1SRJlXy5GesnH8NwayUnnh6E%2BaQEOxMF2yxsc%2FmLWh23IehHeJgEHtWO8mHq4gaxPR6qplhWyP7vsLdXLf3qnmddD6aPFLuCKPRIGwfyjJP%2FjtbnmzDASvHXkuPhEls92xu4RQbMWYPrwpatBvXpLrQ7mYDda1YLiyzS7dVtietAYk5zORnriiWwKoK%2FZl36mnkarf4qEB%2Bw2vbAWrozHUzidseADqzBeMXSoZotO4BbFta%2BPhtg6P0P%2FJkCmO4RpxUpUWyK%2B4mgGSEapzhs8G4oBdB3ZFulk87JIlijI66Jjlu9LeAVqnwnUVxRuqxPg3AaKTswaRJNMjcHpYwZi7dWXrX5vWiRcDc%2Be11t6RpiTNyvyKKvXG%2BtAoV4zAeBYHU%2Bkfr3KQmMKmTq70GOqUBZQr31NMeWxlGbfa6vyYhVF05nFuxZFn8j5W3tIZgpRlmXEqavTGTatQE25vJRovVqf%2BKW0syJs2mWJIre64sFS8na6hE72vo2iYwCdKCT8qgO8G4KODfkYnfqBDytipCWJJYeabmKbUfagauVO%2FytvS7apNENXnWY5sivBKFDib9UNAknN0RtC%2BaQLQuXN141YlYdKeuMeUUxbKl3hs%2FUam2t25E&X-Amz-Signature=21254d3624b1feb226359a1e243f9371acc8acbcc2ed446270b1e42bf467e659&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
