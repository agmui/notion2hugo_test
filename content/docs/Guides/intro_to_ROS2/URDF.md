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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574OXIYJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDi0LpcD4febAPApwNBQmpJD2DHjT81KEgJaJ936SDieAIgerKR6l%2BABmlk5h5u5GaOdtLJR3OWOV9QG%2FMduw0j4dcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlhMTITzWsSq1nmzCrcA4IGdKjqhr2Nh8Ptc1mEjAJKJpVZkHwlkiizm3juF8jwENFF26l3KOC5EvA4gVxmLih1DqPDyKkRrM9xnAibDZFD4EKbtzscGpM9l0QmHr4GEvIUPu8zZyao5UbGa0b21CveymZkuLwGtk%2BvVF7suSYT8cSbAzeny8Le2HOmvZ%2BcBy1jZAJmQwifaZTEji58Q%2F5rKKneHxbCXkAOlQ0GWpu2hymgC96XWolrpYdMu%2FfBIETs0YEtyEKISyNgCul9tvz5lWxqNN30rASmrdhcLVufwaP7UIIcj0pcXRKvJdYxFpYgXW9BSCdc2P5EthDkXD2IRUD7YACSsPL8Opj3miEDmmfc2buzq5jpIih8CTBg6bZQAJRcDbqCzm752Iw9b9fSfOp%2BMjDgRL54lPkZlDtjjcmZM4bhbEhNH85UYGdb7sG%2BXUyxV7l4BzDUCmAibCSxtNlv%2F%2BjffyEbcOdymuAuvz9HzKnWbLbrb5CBmljJ9b4%2BIbhBG3l8IVugILTUj%2F1bWEQP5XqLh%2Bc7Rh%2BqD04ujCbI%2F2tpdZtvFLXGXb1BBzbMWktNCwucQ5NPCiwRKE9Itvobb7xMZzpPKyftwHWsjiaS576jkv5R%2F4DJxK61ytzThQZ2UImyZDXXMNWiuMEGOqUB1g96XBK2I1zrH7y6bo5nstuT3oUrG5qzUS3JWY5XCHb0pxxu%2F6CkvBoO17zFiwAvOkGFi3kIq8dA5bBa2GF0jRLXcye4rjHcx9V6Gz8p6ajZXhyurSkYog8nRUfXYZQqxXbCb6RCAldNrntwtQhJ70fTu%2B4hKqk8jwJeaR%2FhwU2wdQ11NmnDip6CO%2BVbHYAZQTt0GK%2F2zWJtrDd4BEHq4oFuJ19m&X-Amz-Signature=346aa668ce45541fb83d5f9b712c21cda989de48b605f49444b7ba18340774e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574OXIYJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDi0LpcD4febAPApwNBQmpJD2DHjT81KEgJaJ936SDieAIgerKR6l%2BABmlk5h5u5GaOdtLJR3OWOV9QG%2FMduw0j4dcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlhMTITzWsSq1nmzCrcA4IGdKjqhr2Nh8Ptc1mEjAJKJpVZkHwlkiizm3juF8jwENFF26l3KOC5EvA4gVxmLih1DqPDyKkRrM9xnAibDZFD4EKbtzscGpM9l0QmHr4GEvIUPu8zZyao5UbGa0b21CveymZkuLwGtk%2BvVF7suSYT8cSbAzeny8Le2HOmvZ%2BcBy1jZAJmQwifaZTEji58Q%2F5rKKneHxbCXkAOlQ0GWpu2hymgC96XWolrpYdMu%2FfBIETs0YEtyEKISyNgCul9tvz5lWxqNN30rASmrdhcLVufwaP7UIIcj0pcXRKvJdYxFpYgXW9BSCdc2P5EthDkXD2IRUD7YACSsPL8Opj3miEDmmfc2buzq5jpIih8CTBg6bZQAJRcDbqCzm752Iw9b9fSfOp%2BMjDgRL54lPkZlDtjjcmZM4bhbEhNH85UYGdb7sG%2BXUyxV7l4BzDUCmAibCSxtNlv%2F%2BjffyEbcOdymuAuvz9HzKnWbLbrb5CBmljJ9b4%2BIbhBG3l8IVugILTUj%2F1bWEQP5XqLh%2Bc7Rh%2BqD04ujCbI%2F2tpdZtvFLXGXb1BBzbMWktNCwucQ5NPCiwRKE9Itvobb7xMZzpPKyftwHWsjiaS576jkv5R%2F4DJxK61ytzThQZ2UImyZDXXMNWiuMEGOqUB1g96XBK2I1zrH7y6bo5nstuT3oUrG5qzUS3JWY5XCHb0pxxu%2F6CkvBoO17zFiwAvOkGFi3kIq8dA5bBa2GF0jRLXcye4rjHcx9V6Gz8p6ajZXhyurSkYog8nRUfXYZQqxXbCb6RCAldNrntwtQhJ70fTu%2B4hKqk8jwJeaR%2FhwU2wdQ11NmnDip6CO%2BVbHYAZQTt0GK%2F2zWJtrDd4BEHq4oFuJ19m&X-Amz-Signature=bbd15f463c8dd6b71ca9d8e2a0784c046a7230d6afe51708d145e006413e6821&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
