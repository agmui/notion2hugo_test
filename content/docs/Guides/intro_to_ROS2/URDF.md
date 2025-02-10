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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAE2XBW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmpj%2FRzqzgxwsarmPVWsbFHWBOSqAKPRW2SMnsj%2B6DhgIgLQI5Y8Tf7RI1OFyiX%2BFoVqT5wuWc5%2BQxH1iyH6ue8fQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONK%2FDbviIVZA8i68SrcA%2FWE2CdULWa1i1IOPknf%2F4kNsXW6fGbddwCmDWLyo1tJTpfpg%2BmrM5XPesw%2F3Q%2B1GYbEFGQ7GhaEtEaeiWkmLnIYpkS9%2Fpb1XCD2dJCqlfAA05URikQwxl6Q%2FpgF2sXG7BWtSZGKeLZZgOlbFS2gmIbMpeHdb4lS2b1xjPai9183IZwh4ybV54fTFr3MT98dp6XcrP5FcWmT%2FPlP%2BRvFQk3C7IGU3w87xwoHp6bbpHJIpDk5f%2FxUpvkR7J%2BX9VD8tIWMPWtLRWas3B4tuAETaiHwJt6XpQYia1JET8%2B%2BWnlx%2FNlfF%2FBdVVwo4dksfkO%2BdJokgujQ%2FRblgLj%2BudNNDPAgV29D5E68EoWuQ%2B2k%2BWYccjKUvnWZheU0ozmbdO8gurGPOLWOPKZ6Iu2HXgNX%2FSTPwLQsUD9JfQAOjx61lIO224NE%2Fvee%2B7zMioVoMtbasIxV6FV%2F%2BJiQ10Jf%2Bq7spUrPa4zYrBGl1OpWI0DYYkmlJpxb32dGyUhwjJ5%2BR88tbL9Kk9EUsyoyxeUwyMwM26xgChszyu8Me68DLbTTpAachvwWAvJ%2Fowj6%2BtyjEq%2FxhP8lzVF1nYzynENJoRN%2Bmyc4FthEQeCL8qm9csDNXbiWSmEvziC9axC4c3UfMLiup70GOqUBBS8CRoQW8c02tblyTIc4uD6fA0aqJwmLZbpaD9fplHFPRqzS%2B1QYtu57fHiEGh9nI2NWbYVNbN1m3rZPwHtu7ClZKTF42LG0h6FT5hiJqUVHuhqH59PB7xtKUw9jz78vY063xnWwhVTrlCj0doClyTo%2FeNJmbKBpk0kLhJTiHxRiPm23gsEboNpv5Rf6NjuBTV%2FaAN1H%2FZgd8VxegtxV5dE4dZ8O&X-Amz-Signature=307758d7f19a7b9677ec9242c197d77d5990317298115ebb3efd257eb0d38667&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAE2XBW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmpj%2FRzqzgxwsarmPVWsbFHWBOSqAKPRW2SMnsj%2B6DhgIgLQI5Y8Tf7RI1OFyiX%2BFoVqT5wuWc5%2BQxH1iyH6ue8fQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONK%2FDbviIVZA8i68SrcA%2FWE2CdULWa1i1IOPknf%2F4kNsXW6fGbddwCmDWLyo1tJTpfpg%2BmrM5XPesw%2F3Q%2B1GYbEFGQ7GhaEtEaeiWkmLnIYpkS9%2Fpb1XCD2dJCqlfAA05URikQwxl6Q%2FpgF2sXG7BWtSZGKeLZZgOlbFS2gmIbMpeHdb4lS2b1xjPai9183IZwh4ybV54fTFr3MT98dp6XcrP5FcWmT%2FPlP%2BRvFQk3C7IGU3w87xwoHp6bbpHJIpDk5f%2FxUpvkR7J%2BX9VD8tIWMPWtLRWas3B4tuAETaiHwJt6XpQYia1JET8%2B%2BWnlx%2FNlfF%2FBdVVwo4dksfkO%2BdJokgujQ%2FRblgLj%2BudNNDPAgV29D5E68EoWuQ%2B2k%2BWYccjKUvnWZheU0ozmbdO8gurGPOLWOPKZ6Iu2HXgNX%2FSTPwLQsUD9JfQAOjx61lIO224NE%2Fvee%2B7zMioVoMtbasIxV6FV%2F%2BJiQ10Jf%2Bq7spUrPa4zYrBGl1OpWI0DYYkmlJpxb32dGyUhwjJ5%2BR88tbL9Kk9EUsyoyxeUwyMwM26xgChszyu8Me68DLbTTpAachvwWAvJ%2Fowj6%2BtyjEq%2FxhP8lzVF1nYzynENJoRN%2Bmyc4FthEQeCL8qm9csDNXbiWSmEvziC9axC4c3UfMLiup70GOqUBBS8CRoQW8c02tblyTIc4uD6fA0aqJwmLZbpaD9fplHFPRqzS%2B1QYtu57fHiEGh9nI2NWbYVNbN1m3rZPwHtu7ClZKTF42LG0h6FT5hiJqUVHuhqH59PB7xtKUw9jz78vY063xnWwhVTrlCj0doClyTo%2FeNJmbKBpk0kLhJTiHxRiPm23gsEboNpv5Rf6NjuBTV%2FaAN1H%2FZgd8VxegtxV5dE4dZ8O&X-Amz-Signature=04d9398825d7451ba87cb1c96517791c08c5570ba4ce62167c1569f485a12f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
