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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VT2HUBD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonaJckPTIkUqV67w5RU7R4j1LkJTcx%2FStnT4AybzuiwIgetIRYySfpoWRecf7T7ACkDqZlUbBIb3yZTYt8riwbfQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFjsCMzz33ytiXxmjSrcA3KD%2B5%2FKpuLcJ12JL87HgTcHgY2uWtLkS5MV31EbtI5fp5Tx5zvtGT%2FDT9rsxPUBRISJ9KpUF7mGEJJeEwQRxMmCqy1ni8qf4LBeZMwDTyCq%2BhDSQAYkzAprTdLf4MeAEr%2BcZ4t5Re2GSoARjlC%2BJ8IMrh7TJ0OvL%2BKLWHB%2F6rK87P4ZNMH3Uhga338Mw%2FAjwH%2BqLRndUR56TshpNzuDljrOeO%2B0ao8JEdJ82eS0nK9%2FeEKYZzh1L9%2FGfehCQbsraOdlXogjnmaUlbB7o70avXlwPSyZwiKcvmeoKIcb3MRVkQ6fhefVcP1KdIXWdKrk99KQY8YtsIPBBveRBRc87vLm6ElEH8qSZgOTOVqmIM4EvVle2Qct32P%2BawcwmVOA5lAtkzw0nWX65hf0RC3U4tphAIy%2F94l3jjQbhohvLaxovTlyQMFDxFUjOy3Q0Wsah%2Bcj1f2GYzu9uLj%2BXwwAbHqppoKpfVD3%2FspKGK9y7UEWZD67XuxfI04a%2F20TLMtFO4MdwKeiDRvWJ2lUY3qWDnWxgKd5OtfGzijUpo9E%2FJc%2ByLec5nrqkvejFBQNZYhawS8STSZ33kZHnmuAzwFs%2FaNxtHMXX25I3AwI72OEcX7Uf2EA5k6RcT7uw%2FeWMOvAyL8GOqUBaXtLOdyACNgXT5HeCoqUkr81ERczXngFUPGT7Hc9taP0Hqe04Ahff8WNzNreKebB1y%2FrH%2FxNrps9HrvnXwTz7%2FWIeJKALygX4QqTHZlt3c3Cpwc075UQ%2BONMXyp4m3Xshpx0btoi%2BqIXUj7AIB7kk9kMt3ZSSwUS19vau69Lg6tfP3Bbkdq4bKFnCcZayQAE6BASJyCQQ08Ju0dMCc0gGCeY3b1b&X-Amz-Signature=96edaa3d43077d38793ade8e357b8bd299e8d2a162b760dad02e5ef076fd4fac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VT2HUBD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonaJckPTIkUqV67w5RU7R4j1LkJTcx%2FStnT4AybzuiwIgetIRYySfpoWRecf7T7ACkDqZlUbBIb3yZTYt8riwbfQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFjsCMzz33ytiXxmjSrcA3KD%2B5%2FKpuLcJ12JL87HgTcHgY2uWtLkS5MV31EbtI5fp5Tx5zvtGT%2FDT9rsxPUBRISJ9KpUF7mGEJJeEwQRxMmCqy1ni8qf4LBeZMwDTyCq%2BhDSQAYkzAprTdLf4MeAEr%2BcZ4t5Re2GSoARjlC%2BJ8IMrh7TJ0OvL%2BKLWHB%2F6rK87P4ZNMH3Uhga338Mw%2FAjwH%2BqLRndUR56TshpNzuDljrOeO%2B0ao8JEdJ82eS0nK9%2FeEKYZzh1L9%2FGfehCQbsraOdlXogjnmaUlbB7o70avXlwPSyZwiKcvmeoKIcb3MRVkQ6fhefVcP1KdIXWdKrk99KQY8YtsIPBBveRBRc87vLm6ElEH8qSZgOTOVqmIM4EvVle2Qct32P%2BawcwmVOA5lAtkzw0nWX65hf0RC3U4tphAIy%2F94l3jjQbhohvLaxovTlyQMFDxFUjOy3Q0Wsah%2Bcj1f2GYzu9uLj%2BXwwAbHqppoKpfVD3%2FspKGK9y7UEWZD67XuxfI04a%2F20TLMtFO4MdwKeiDRvWJ2lUY3qWDnWxgKd5OtfGzijUpo9E%2FJc%2ByLec5nrqkvejFBQNZYhawS8STSZ33kZHnmuAzwFs%2FaNxtHMXX25I3AwI72OEcX7Uf2EA5k6RcT7uw%2FeWMOvAyL8GOqUBaXtLOdyACNgXT5HeCoqUkr81ERczXngFUPGT7Hc9taP0Hqe04Ahff8WNzNreKebB1y%2FrH%2FxNrps9HrvnXwTz7%2FWIeJKALygX4QqTHZlt3c3Cpwc075UQ%2BONMXyp4m3Xshpx0btoi%2BqIXUj7AIB7kk9kMt3ZSSwUS19vau69Lg6tfP3Bbkdq4bKFnCcZayQAE6BASJyCQQ08Ju0dMCc0gGCeY3b1b&X-Amz-Signature=bf0ed61acfa1f8875d2e1857a7540666c69cd712e880d3960e098fe91cfb4e70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
