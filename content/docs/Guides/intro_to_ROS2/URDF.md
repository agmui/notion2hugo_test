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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCX2I4PA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2B32pcVMvFHYqeYYr580J2l%2BrE0b6ZdkNJBY2nSYmBagIgYNLWkG57ltNCW5943b6p4hNP1bCNSrYWbE1oFAq8ILoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKOQVMTrk5FVouVzzSrcA9gtVl0dYh9OnMladslQYKeVeRTFcSdku2s1IoaJksJH%2F7KpQAkQrPnQer92Olv2M973IzM45ZRgbHatKpttGtGiJ85yQGI7ivvr4ka0w8suD%2FMpYc6hdOEhtK1BsQegZQeNhdBZG8gPV11tCEBRg7pkI2PYOvtAa1bqmLkGnEWgFjoE%2BDEh9aI3wJVVb94kFmpBTjHj1BQxb2kRD9TFHfdMI0CclpyCFS%2FraW00GdC3Z52nQCExNQ4uN8TwutRlczrd5bqox8Hk9oSREHyM2MtiCjjkgYH65FxsofwJePqLcWQE5pjtYZ5B2paL6ProBTlbKtGVsas4Z15on3oXmQNt1eXJ2KviyjSzesnAZDeqnLqhkEzwwG9lej9faftH%2B9R8dXrLTyekjgOsNg3JptpAXkqAgLD3cXNGWergBaeqkfo935ayGQHT2JE5gMJcWm8C5BnkuG1DALBijcEl75YbR2c6wcj73koT%2FUIlikiDknywLrv6nkjgALKH%2Fkkr0tLuorhR4bx9aYTHpMQUsM9r5ZHcAca8dwIl9e5%2F3avxmp32458SHtMoSUx84T4B2svuXbiWNCb8sZL8PV%2BsB94YhXAX14oQ15cAtqJN5Yt%2BejuswhNo4bkQ4vTkMI%2FooMMGOqUB8l2QhOmMjUqH0ATxocRkqOO%2F0LW9A0cD7jp2xoPdxVTr51Z0X3ygxyxjhJ0KA3q%2BF8oU7EIfmgjFgza4xPmxaKdYam4F87bq9TtcBu9AxdHZpPsJRam4ecwhG9neuGCWRwMVBiTp22iBkPHxh2EGep6imn6BDxdqb8LpKxOE2oeYL41fq%2FhyGTHXKswCnRM6CbjY2kjbpRgWmzomf4DqcX2%2FQ6U3&X-Amz-Signature=e33e370c9b096ff3388c9da7b086607eb97871ccbca9f9eb55f720d2d5e18c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCX2I4PA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD%2B32pcVMvFHYqeYYr580J2l%2BrE0b6ZdkNJBY2nSYmBagIgYNLWkG57ltNCW5943b6p4hNP1bCNSrYWbE1oFAq8ILoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKOQVMTrk5FVouVzzSrcA9gtVl0dYh9OnMladslQYKeVeRTFcSdku2s1IoaJksJH%2F7KpQAkQrPnQer92Olv2M973IzM45ZRgbHatKpttGtGiJ85yQGI7ivvr4ka0w8suD%2FMpYc6hdOEhtK1BsQegZQeNhdBZG8gPV11tCEBRg7pkI2PYOvtAa1bqmLkGnEWgFjoE%2BDEh9aI3wJVVb94kFmpBTjHj1BQxb2kRD9TFHfdMI0CclpyCFS%2FraW00GdC3Z52nQCExNQ4uN8TwutRlczrd5bqox8Hk9oSREHyM2MtiCjjkgYH65FxsofwJePqLcWQE5pjtYZ5B2paL6ProBTlbKtGVsas4Z15on3oXmQNt1eXJ2KviyjSzesnAZDeqnLqhkEzwwG9lej9faftH%2B9R8dXrLTyekjgOsNg3JptpAXkqAgLD3cXNGWergBaeqkfo935ayGQHT2JE5gMJcWm8C5BnkuG1DALBijcEl75YbR2c6wcj73koT%2FUIlikiDknywLrv6nkjgALKH%2Fkkr0tLuorhR4bx9aYTHpMQUsM9r5ZHcAca8dwIl9e5%2F3avxmp32458SHtMoSUx84T4B2svuXbiWNCb8sZL8PV%2BsB94YhXAX14oQ15cAtqJN5Yt%2BejuswhNo4bkQ4vTkMI%2FooMMGOqUB8l2QhOmMjUqH0ATxocRkqOO%2F0LW9A0cD7jp2xoPdxVTr51Z0X3ygxyxjhJ0KA3q%2BF8oU7EIfmgjFgza4xPmxaKdYam4F87bq9TtcBu9AxdHZpPsJRam4ecwhG9neuGCWRwMVBiTp22iBkPHxh2EGep6imn6BDxdqb8LpKxOE2oeYL41fq%2FhyGTHXKswCnRM6CbjY2kjbpRgWmzomf4DqcX2%2FQ6U3&X-Amz-Signature=1d2077d733fce8c13e9d61cc67e96ccae1b1c0fabc0bf2ace04bbef93d0bc6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
