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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NEFK2Y%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGMVbpAFu%2FpZhpIrEkNuiYDBEvMauytjW5pUZJE4E1mlAiEAyRiXUhH53FuRwOnnxKHocCSsja4CeY%2Bo7S8elg8CcTsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGsNobFyKVN1oG3KyrcA0TksdDFSAl6fg03SXpemfxPZ0SzFl619KXMHdhkePBu9CnKDezjTk24ViHqcRH521kpuiJeMpQLijwz7tZPip46bZZhMKJg0pJkVf0rpti%2Fcfdhe6FVq1JyTndJMvUyTLI8niY3%2Bjj%2BDp29ya1m5w9rJUu0NbGqiOenrDYjE%2Fm%2BbrhyDWQ3bByf7V61Rio31aEXlfHxdVp50Z3%2BvEQZWYLvAQS%2BUgLfPjTVh7D71S%2Bx6ir1kjgZhmyI9FOQ9xvNHA17DVHwuJEuTg7ELigi3599xAgWcyOo%2Bzs3F2DUZV5N12qXCYeQpWKPIHOTBpu8eUg5Y7qxtvIICuiGkv1PDyRlZy%2F6WKyENiogmykjAqxF2OOdqZFjcAHwmJfxzmnZQi8PaJze7Ci%2FO70gTDl9DFeARTVuQZn33cIV5srJ%2B5GAoeIezDOeHH2phNG5N1qy3n%2Bq%2FRAi4kfSHOTUn2YdfovnA5zOib9tpSkeUoENi1PLWpXCC72309TMe4beLvcwjEZjK%2BMNrUAM3yFDEl8IR7gwz1S5112pWdS5jwRfrFr1gF4LE49Ghnk9G1BfcDAV0h0Rl7uMWYJdb6s0bDnGEthMUgZP7b1cMF3YCIkJ92daVI3wh57j31RKkhI0MI7x5b8GOqUBqCNCstCIq0hOPVmeDVXkEqOREcpJ2%2BqLwSf7hnZAvvae37QDETWqVuJllqaWrEKtQjTvff2i5Et%2FcopLJSrcizUGtOyJluHxgW6RTxIg1fYc3ruUzkAqVA%2FnVc62QA9CoXkbinxI1GaJk5x2q8av2RgoL4Qk5NYHymLoGZu9dmdOZ6uY4etXCBAlKZ1tx%2FyY5aGS1Fq7l2pWWqK7lXBhvTJer%2BAL&X-Amz-Signature=4d2bbc7228bfd2498fbe5cc3ac05de1bf626abf473919311ef19fe30c814283c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NEFK2Y%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGMVbpAFu%2FpZhpIrEkNuiYDBEvMauytjW5pUZJE4E1mlAiEAyRiXUhH53FuRwOnnxKHocCSsja4CeY%2Bo7S8elg8CcTsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGsNobFyKVN1oG3KyrcA0TksdDFSAl6fg03SXpemfxPZ0SzFl619KXMHdhkePBu9CnKDezjTk24ViHqcRH521kpuiJeMpQLijwz7tZPip46bZZhMKJg0pJkVf0rpti%2Fcfdhe6FVq1JyTndJMvUyTLI8niY3%2Bjj%2BDp29ya1m5w9rJUu0NbGqiOenrDYjE%2Fm%2BbrhyDWQ3bByf7V61Rio31aEXlfHxdVp50Z3%2BvEQZWYLvAQS%2BUgLfPjTVh7D71S%2Bx6ir1kjgZhmyI9FOQ9xvNHA17DVHwuJEuTg7ELigi3599xAgWcyOo%2Bzs3F2DUZV5N12qXCYeQpWKPIHOTBpu8eUg5Y7qxtvIICuiGkv1PDyRlZy%2F6WKyENiogmykjAqxF2OOdqZFjcAHwmJfxzmnZQi8PaJze7Ci%2FO70gTDl9DFeARTVuQZn33cIV5srJ%2B5GAoeIezDOeHH2phNG5N1qy3n%2Bq%2FRAi4kfSHOTUn2YdfovnA5zOib9tpSkeUoENi1PLWpXCC72309TMe4beLvcwjEZjK%2BMNrUAM3yFDEl8IR7gwz1S5112pWdS5jwRfrFr1gF4LE49Ghnk9G1BfcDAV0h0Rl7uMWYJdb6s0bDnGEthMUgZP7b1cMF3YCIkJ92daVI3wh57j31RKkhI0MI7x5b8GOqUBqCNCstCIq0hOPVmeDVXkEqOREcpJ2%2BqLwSf7hnZAvvae37QDETWqVuJllqaWrEKtQjTvff2i5Et%2FcopLJSrcizUGtOyJluHxgW6RTxIg1fYc3ruUzkAqVA%2FnVc62QA9CoXkbinxI1GaJk5x2q8av2RgoL4Qk5NYHymLoGZu9dmdOZ6uY4etXCBAlKZ1tx%2FyY5aGS1Fq7l2pWWqK7lXBhvTJer%2BAL&X-Amz-Signature=5c169ddf8ab0367e85455588a037a476fb013d044e9dae59c2c99c2e45439d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
