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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TPXR3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDhoGyGPh%2Fs9t1W42iYzC4XtfrcVNWdCdMSH3EYe%2FpanAIgcyRGta6OUJXiSQFzA0ZgDDgCQMPrqDJGHzt8K87cXMwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiXS%2FkfM3izSj4jVircA8Fp6NisduDDpIEcAqtc4Lm%2B2h0znt7Y6gs59r%2Fm4EoDpk8J%2F5WPeoauotCoWwg7VgIHkql26wYnm3Wn7va2rAwXmhH8pn1ybwg1SZT2UCjT5JqlLfunTImsXM%2FSTgvvO1uIdTUB5qoJY42Y2cfBfn4GNjmOXPJ3eOPQBINyUrz9zC2MIzENcCu8hq0OTiXdsHuMU5Hf%2BGJWeD5aj2NESciwPhWoVBTQJ2u3xggSEHW5KTajK7X7EEsWXlCCaNTgK9JAQX0saaSvRoak4oYIqDa6htDpO1JlWADGYAn6uXc2Kyi4GMdGlfZdP9ErUqmnjcRXnTcXQ0q8TKTd2VlXYvIqGHFubtu1QNiYGei7Oai55dxKoZNWMChYZzb%2B4Zwodl5hAW9O3ikrLMv6flZAf%2Bjjt9tyPQcnwQgYBU13Arh%2FHc4Imu3Mfvmx0nKYiHUfoZRHtI4IdkI5w%2FknkjbhXevLu9tK%2BybWJb%2F%2FnStBMcgCc967mScj5VXGc7TXgv0X0EZq2ZyUvMF9t7dF%2FoM9moi65%2FgykS1YMHWrG0sjQL5aFM3TODlDktq8AXwhvlRRDFuLilWHjCR80GVXNMx1P5EK0lEV7vVHm%2BX0nGHfpVhLcHRuVqbegyrMayc6MNCF774GOqUB592Lz8juw00tlHjcK4kaEC%2FMrV1KsoihvuXOYXikdNp2HB5zOQuMTLBIi%2BzxsvlXf%2FLzkdtoOkt%2FjTK36NqL1lh9P3Z8Dv62oaM1sGiPsDV5kLMj4oNWXNOyXGuohDBefOcGiE%2BMTQSEWyvsxBcuDsc58oyczVilaVP0SS6RkzzYEqZflxklq1Dc3gdpIazplmboAumkpg1kRH4T08JaYBGJwiH2&X-Amz-Signature=36d655eae6bf93cb412d3a0c374f35cf15424adb5b05466bb1ad4277473bb469&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TPXR3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDhoGyGPh%2Fs9t1W42iYzC4XtfrcVNWdCdMSH3EYe%2FpanAIgcyRGta6OUJXiSQFzA0ZgDDgCQMPrqDJGHzt8K87cXMwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiXS%2FkfM3izSj4jVircA8Fp6NisduDDpIEcAqtc4Lm%2B2h0znt7Y6gs59r%2Fm4EoDpk8J%2F5WPeoauotCoWwg7VgIHkql26wYnm3Wn7va2rAwXmhH8pn1ybwg1SZT2UCjT5JqlLfunTImsXM%2FSTgvvO1uIdTUB5qoJY42Y2cfBfn4GNjmOXPJ3eOPQBINyUrz9zC2MIzENcCu8hq0OTiXdsHuMU5Hf%2BGJWeD5aj2NESciwPhWoVBTQJ2u3xggSEHW5KTajK7X7EEsWXlCCaNTgK9JAQX0saaSvRoak4oYIqDa6htDpO1JlWADGYAn6uXc2Kyi4GMdGlfZdP9ErUqmnjcRXnTcXQ0q8TKTd2VlXYvIqGHFubtu1QNiYGei7Oai55dxKoZNWMChYZzb%2B4Zwodl5hAW9O3ikrLMv6flZAf%2Bjjt9tyPQcnwQgYBU13Arh%2FHc4Imu3Mfvmx0nKYiHUfoZRHtI4IdkI5w%2FknkjbhXevLu9tK%2BybWJb%2F%2FnStBMcgCc967mScj5VXGc7TXgv0X0EZq2ZyUvMF9t7dF%2FoM9moi65%2FgykS1YMHWrG0sjQL5aFM3TODlDktq8AXwhvlRRDFuLilWHjCR80GVXNMx1P5EK0lEV7vVHm%2BX0nGHfpVhLcHRuVqbegyrMayc6MNCF774GOqUB592Lz8juw00tlHjcK4kaEC%2FMrV1KsoihvuXOYXikdNp2HB5zOQuMTLBIi%2BzxsvlXf%2FLzkdtoOkt%2FjTK36NqL1lh9P3Z8Dv62oaM1sGiPsDV5kLMj4oNWXNOyXGuohDBefOcGiE%2BMTQSEWyvsxBcuDsc58oyczVilaVP0SS6RkzzYEqZflxklq1Dc3gdpIazplmboAumkpg1kRH4T08JaYBGJwiH2&X-Amz-Signature=31fce2e9b5a35698ffbbd8eb0db22a25b10e14646106d52bc3ca343bb78c27f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
