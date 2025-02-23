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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VZMDOZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BeRTpXuHHWbkc4dRTe2y%2BDQ4%2BVUt73oxftX7lGOY8GAiBsNRPSNj0Dp8iCiRfAwg1u8O7FKol%2Bd2Vsi%2BqdSDxyaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn4c3hrINkrB7yXFKtwD78OHF0KhR0srJMMq4%2BrbIC3l13qVyUglIbgoSwX09ZCbIKy%2BxSuR66DrzX2lCMykYbE%2BPjAxtdKiltYWcPAyKrHBTKqg6904U%2F73Z661eaQlUrFbJtXZfw2jOjVKmvNfD3bgRguRImwtFv4fjQFJoYuVEsP7A7mfxITA3uTcrkCLqhfS0pRvmbHQkSOW3lyeFAFZ4CblMmTfLs0Fk1XLa4NGe1Zy2JbaXBM%2BEBTIkleWh1g2oQVKXSLylor9SUKuJo%2FhofTDCIKgoo1K%2FL2iSEGwmwB71HLmrnCGVrpTeLghXSKc6jzbH5VXjYEAd1Snx9mWmMXGkzONIb5hgsSX2O07uFLGjDOnlD4jQotylNx7AJjMVJD9Zl6QNHqymXsqHin00pfsbseYcYVFeS4fOvZrbnaaNWTzLPmoWacZIkuGQ%2FiPPcg%2BjI%2B9UXbv3C%2B%2Fdzm8SDS561G4yziJUc9ymzOkndyCA%2BOFEAWOgCMbg%2F3RnKA1ZboXobrh3h0VcVboESq0%2FMnfiRGTnGMbQGPwg1duJULgPCUAcZkIiw%2BpRWaEOcK5Av91186m47X%2BQdggx4mInRuly1B62dzwuKXaPhJ1v2hijRgfkTeued%2FvzVWpE9QzNFCKYfEibW8wysnqvQY6pgEmDn8t82MRRXpigcwb9ne91wpn59%2F2buwXZFRH688LeB%2BQ2m1FcqOeD8ky9BL4YopRlr847CAr2qtPpMmqWkXv50tMswayzKPXbdnqlelsYoiklQxfSmnuFJZn7CDLJr73AqjVyO4UfuhlqcMJL49ygWNbRufrrKbkC74Y1nW8RTm%2FECOUh9S57Pd%2B2xrKDzs6vEpky88I8e4xdOFXlimFSVAlnJu6&X-Amz-Signature=6015d71fbc25a5e933876054aa108d478c8610d9a4d1671acaab9fbfeacb1b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VZMDOZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BeRTpXuHHWbkc4dRTe2y%2BDQ4%2BVUt73oxftX7lGOY8GAiBsNRPSNj0Dp8iCiRfAwg1u8O7FKol%2Bd2Vsi%2BqdSDxyaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fn4c3hrINkrB7yXFKtwD78OHF0KhR0srJMMq4%2BrbIC3l13qVyUglIbgoSwX09ZCbIKy%2BxSuR66DrzX2lCMykYbE%2BPjAxtdKiltYWcPAyKrHBTKqg6904U%2F73Z661eaQlUrFbJtXZfw2jOjVKmvNfD3bgRguRImwtFv4fjQFJoYuVEsP7A7mfxITA3uTcrkCLqhfS0pRvmbHQkSOW3lyeFAFZ4CblMmTfLs0Fk1XLa4NGe1Zy2JbaXBM%2BEBTIkleWh1g2oQVKXSLylor9SUKuJo%2FhofTDCIKgoo1K%2FL2iSEGwmwB71HLmrnCGVrpTeLghXSKc6jzbH5VXjYEAd1Snx9mWmMXGkzONIb5hgsSX2O07uFLGjDOnlD4jQotylNx7AJjMVJD9Zl6QNHqymXsqHin00pfsbseYcYVFeS4fOvZrbnaaNWTzLPmoWacZIkuGQ%2FiPPcg%2BjI%2B9UXbv3C%2B%2Fdzm8SDS561G4yziJUc9ymzOkndyCA%2BOFEAWOgCMbg%2F3RnKA1ZboXobrh3h0VcVboESq0%2FMnfiRGTnGMbQGPwg1duJULgPCUAcZkIiw%2BpRWaEOcK5Av91186m47X%2BQdggx4mInRuly1B62dzwuKXaPhJ1v2hijRgfkTeued%2FvzVWpE9QzNFCKYfEibW8wysnqvQY6pgEmDn8t82MRRXpigcwb9ne91wpn59%2F2buwXZFRH688LeB%2BQ2m1FcqOeD8ky9BL4YopRlr847CAr2qtPpMmqWkXv50tMswayzKPXbdnqlelsYoiklQxfSmnuFJZn7CDLJr73AqjVyO4UfuhlqcMJL49ygWNbRufrrKbkC74Y1nW8RTm%2FECOUh9S57Pd%2B2xrKDzs6vEpky88I8e4xdOFXlimFSVAlnJu6&X-Amz-Signature=52c429ac343a737364713a1e601d0d17dec6aa1715c7de22180ed8d7c200f65f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
