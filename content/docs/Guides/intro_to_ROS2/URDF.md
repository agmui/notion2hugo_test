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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657M47LHE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFSe%2FKAAucj561qI1%2BpTvj532ez5XUz%2FIWU5bPQwUeXyAiAVpfJ394kxcl3Vf%2B2GHVHcyAbGVTOB2HPtTGhsixijgyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7g0SgBLa0Mu5rixKtwDc3kXjXmhd%2BxHdnEljU4eqsxy2DTbSBwdryZDwwcHucbu5Yt42RN5dpObyJDQrrinInrA15%2BNbEowk5p2obpMEaUIQiRFoMhkSxoHAiMAjnzYFm8996kYw2VTQbU3qb%2BX4YbHOGjYi0nrJMKUSpEf9RijEb81x%2Fjw8dwUqSXiTPx2vhmA5QsZ0OU6Os5xEEjf6A5lDO5NeRJjQ4p2Y7KBoBGvQqHJoaBSH0sKvaBlnE%2B0GXTobkMrCAzMrwOniv1GtUHJKATXy7pUEkqk4OSVcJqaCpsOCHoEEgZ61n82YkCvQFyyKkV5EIYiQQa9CYqjAZHObcmVFzNlVKTQYe5RjkLFGfXvU%2BcTm9190dOdCskEhF9FN5SHhFx%2FVxf7mUnOMSXON%2FX2xcCytt9rsWxatAoOo95Q18PBX7PYoqG%2FAoLIYXnwpC7mo7QNMHQ5Jdnx%2FpeopqqQDOG5izFZTX8aiON3tpH0GjIa3L0dhhn7Kh1%2BUw%2BiJtxE9%2F%2B1e63PXwqWx0r7dGbAAABF7xDqpTvgt6vqGCXcdWsu2bPsDanOnaFN4be52pxTLfsBApa%2FvnjUv%2BAltRQzIiA8TU6pn2NLqI0aGqevzcsYee9mNoklkZPxJkIboZfckNa4w6Yw2aGYwAY6pgF0DpsbFxLY8J1XY7YGIATKvnV5foGkj08ElTfNLoAQA3oqz9qw6EufRx%2F7R3CpEDg8SLcMEAvrtALaBT5Rq3Vcts%2FQ%2BINbJE13gw%2F3DkvIHpatuRj6FomURbGjz5T0iV3stQuaNShyYbStUUO2J4PjswXDAmBgbNNlYwrlJRpjM9Kfv0wVlSuPA6sdQcP1Pde9JUwjI7fUiah%2B5yxGpdD8NJwQ0sWh&X-Amz-Signature=488916a4600d6d15d13fe576cf221debcadaafbd88536ddaa9c2648b8a8591fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657M47LHE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFSe%2FKAAucj561qI1%2BpTvj532ez5XUz%2FIWU5bPQwUeXyAiAVpfJ394kxcl3Vf%2B2GHVHcyAbGVTOB2HPtTGhsixijgyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7g0SgBLa0Mu5rixKtwDc3kXjXmhd%2BxHdnEljU4eqsxy2DTbSBwdryZDwwcHucbu5Yt42RN5dpObyJDQrrinInrA15%2BNbEowk5p2obpMEaUIQiRFoMhkSxoHAiMAjnzYFm8996kYw2VTQbU3qb%2BX4YbHOGjYi0nrJMKUSpEf9RijEb81x%2Fjw8dwUqSXiTPx2vhmA5QsZ0OU6Os5xEEjf6A5lDO5NeRJjQ4p2Y7KBoBGvQqHJoaBSH0sKvaBlnE%2B0GXTobkMrCAzMrwOniv1GtUHJKATXy7pUEkqk4OSVcJqaCpsOCHoEEgZ61n82YkCvQFyyKkV5EIYiQQa9CYqjAZHObcmVFzNlVKTQYe5RjkLFGfXvU%2BcTm9190dOdCskEhF9FN5SHhFx%2FVxf7mUnOMSXON%2FX2xcCytt9rsWxatAoOo95Q18PBX7PYoqG%2FAoLIYXnwpC7mo7QNMHQ5Jdnx%2FpeopqqQDOG5izFZTX8aiON3tpH0GjIa3L0dhhn7Kh1%2BUw%2BiJtxE9%2F%2B1e63PXwqWx0r7dGbAAABF7xDqpTvgt6vqGCXcdWsu2bPsDanOnaFN4be52pxTLfsBApa%2FvnjUv%2BAltRQzIiA8TU6pn2NLqI0aGqevzcsYee9mNoklkZPxJkIboZfckNa4w6Yw2aGYwAY6pgF0DpsbFxLY8J1XY7YGIATKvnV5foGkj08ElTfNLoAQA3oqz9qw6EufRx%2F7R3CpEDg8SLcMEAvrtALaBT5Rq3Vcts%2FQ%2BINbJE13gw%2F3DkvIHpatuRj6FomURbGjz5T0iV3stQuaNShyYbStUUO2J4PjswXDAmBgbNNlYwrlJRpjM9Kfv0wVlSuPA6sdQcP1Pde9JUwjI7fUiah%2B5yxGpdD8NJwQ0sWh&X-Amz-Signature=267dda00c04c9bb33601788059729eaf84b6dbb992dd6a247130945c952c3385&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
