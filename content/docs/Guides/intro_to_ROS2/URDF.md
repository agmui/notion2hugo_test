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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFBPD2A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDbKQ4CupEnKW1Vm%2BcWaUYwIDDvSO%2BN8cIsPCH7gYVPtgIfY0tGRqU7e%2BtmwMmSiGeaE3NWinHDa2jA1VllnF7PDiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfqfb%2FRxqW6wo9aNCKtwD1%2FtAGuCR2YX80k0yW5lBoTQz2cqHayrpBYSeGHTQnhZ8LZ3v%2FarAWMgRvZvr61hGSVD5tEYYzp4x5urLQ9CLZCbdsArFoeLd5R1wAzRIbKx0uz0BPzEjDfXUIPGpfS7uXJ2euliTsY40rJL1jgZDz43fKehFSjPgbgq%2BoIQXcnkmVUj11y2FI3BDdbGaraj7O8Z27nNmXSdEEKXECNzs9A17Y8vaWR%2F%2BYcsVXGBiGwCoWHIpjmrDz%2BYvHyTMwiJh16O2EIjR1N6QDPF60n6PtNu1lbti9HJaxfD6c5eUF%2Bp%2FVcFv7sWIS2ffjULjg%2B3QEuJ8jxMtkzrJK81qES5BHMBRjr2f6a9HMUIqxgFRq%2BbmZPlfg8HLntJItTgfVgHiIhm48JCA2dTHMEUJ5jIWFuBH2elaNejt4nPGwgG0s9vTThhwUHshEF34sDq6cfP%2BVkvh6ZfjHVqAO3SbZYHHzFmHbgZJ5QfCm1mfbfwOuMjEHy8GdxlLBQCAzaV7wNn9j26p2HWqWjwJWlsrMSl8KbPj2F9923wINfWy2Y4s7HtHk8QxKpSaOYCU9HQuGb%2F0cXkMEjV%2Bjq6%2BkFhT%2BaPq0Cm9%2Bx1MEKhprv6TlwnydG4fGR0g9Vwl8nHKnuwws77CwQY6pgFhryK3%2BOgRPOXKhoYRcPjI9Y3hCNHJ7r%2BL09AVpD675z2bQbLwyZY2R16XoKD3PP%2BnYmsAip5oelSzsBmA0HuHO0Hq%2FOeMn6lvBnSPeczOWEtTCQO5X9soTn2if5jsgV60D1oZ9CBAmXlZIVSVtvSSAeVeiCx7MTaGP2SA11P2JHq%2ByT5fKHoxtyPthsYD1eMQYbxlWdZ67zplCwB2hjNCe0xfe5YZ&X-Amz-Signature=34eb232c4223a1f0a021dc99b162b5de0ea076c2eae179590aedfe509bbc7bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFBPD2A%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDbKQ4CupEnKW1Vm%2BcWaUYwIDDvSO%2BN8cIsPCH7gYVPtgIfY0tGRqU7e%2BtmwMmSiGeaE3NWinHDa2jA1VllnF7PDiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfqfb%2FRxqW6wo9aNCKtwD1%2FtAGuCR2YX80k0yW5lBoTQz2cqHayrpBYSeGHTQnhZ8LZ3v%2FarAWMgRvZvr61hGSVD5tEYYzp4x5urLQ9CLZCbdsArFoeLd5R1wAzRIbKx0uz0BPzEjDfXUIPGpfS7uXJ2euliTsY40rJL1jgZDz43fKehFSjPgbgq%2BoIQXcnkmVUj11y2FI3BDdbGaraj7O8Z27nNmXSdEEKXECNzs9A17Y8vaWR%2F%2BYcsVXGBiGwCoWHIpjmrDz%2BYvHyTMwiJh16O2EIjR1N6QDPF60n6PtNu1lbti9HJaxfD6c5eUF%2Bp%2FVcFv7sWIS2ffjULjg%2B3QEuJ8jxMtkzrJK81qES5BHMBRjr2f6a9HMUIqxgFRq%2BbmZPlfg8HLntJItTgfVgHiIhm48JCA2dTHMEUJ5jIWFuBH2elaNejt4nPGwgG0s9vTThhwUHshEF34sDq6cfP%2BVkvh6ZfjHVqAO3SbZYHHzFmHbgZJ5QfCm1mfbfwOuMjEHy8GdxlLBQCAzaV7wNn9j26p2HWqWjwJWlsrMSl8KbPj2F9923wINfWy2Y4s7HtHk8QxKpSaOYCU9HQuGb%2F0cXkMEjV%2Bjq6%2BkFhT%2BaPq0Cm9%2Bx1MEKhprv6TlwnydG4fGR0g9Vwl8nHKnuwws77CwQY6pgFhryK3%2BOgRPOXKhoYRcPjI9Y3hCNHJ7r%2BL09AVpD675z2bQbLwyZY2R16XoKD3PP%2BnYmsAip5oelSzsBmA0HuHO0Hq%2FOeMn6lvBnSPeczOWEtTCQO5X9soTn2if5jsgV60D1oZ9CBAmXlZIVSVtvSSAeVeiCx7MTaGP2SA11P2JHq%2ByT5fKHoxtyPthsYD1eMQYbxlWdZ67zplCwB2hjNCe0xfe5YZ&X-Amz-Signature=9a35f339b2b1d0a673aef41bac0fef9123021aa8f35075e110fc3d97c5f3659c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
