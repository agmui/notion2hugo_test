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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SPHTVO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG5ek7x%2FUBiKYx32mARUDC8QHJ4NSeqMi%2BYL6RUk5GCuAiA6WSHIB%2F%2BqwhwHzi78BiAAacjDbQPmtvQaZyCrBItn3yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaxKpskLNoz7JrTXKtwDjBvRjqtacrPwREzP9wMfxltKMhJjOW4R%2FN8WEOsjhwCHCxSCepYoGU%2FtJt0YADqehdDO91VjFUTPDWZQ3t7TiLM0j97xPs%2BnB82i2dmkPJCyvhP0kaDRtt3OGRVfkOw1qoG0EpDHqN8STG%2BpIIEwpxpwfSnJVD5B2nXLeh9FPfM1SD5m9r9tf979revGjdY9fuPO45Vaujd0QmJ4Ntg7vf47KoowFFquOXwQfiOO2RghhxvkjtMt3nHCWszcrYgo6jT00OMgpML3GWT9z0yvV7HuVlM6TD1a9BFsMxpUwvR7%2FmCAXmIHOS3XASDHh3B5SDp2n%2FIXBbBXa%2BlaH0km8rG5oyJud00ThexRmjOU%2FzKTs4pQWkdCcN6H%2BfJ7FOnHJ%2FStWxNFG%2F2bLuQWOmue%2B%2B1b5JvISjVchJdvycWbrKo3aDniQV9rWG2WX1hb4l4zZWWtDtSmHW72PHNjms9PPvyToKL0qb6%2FBqqFMZhqcef%2Fz4vHLgS9AZyK6wLZKN6BP3e4B0Lz4MSOwi83PAOdAof6YMYVtIbn3fykkxT9oCBn4tF7iabrAOVqmlHrZM9wbJvuiHms4hByVwhERdwaM%2Bnu1ZymklusrioDtr%2F3AigCDr8SLrDkkvC0qq4wmq%2BovwY6pgHFo39o8MTLPRTTevmg9TgmaS%2Fo2TxVe%2B5kIcGmumc8APR%2BPtPoPVDS66Q66t%2FJom%2B9QdyN9heOCjzkRKxW%2FPBnbfRQ3QnAzg9L%2BSqyA8YUJ3IWAxhtXihC3aCn0WsvubqAuu%2BetXBNetiV%2F2r0nrEjkf1HhsS3%2BKUKUpDnemDQ0SgIiw2f1b9TblqhVAJLMWkXgkf6wnbyEhc91jKu08seZ8Ij8mtZ&X-Amz-Signature=de21d8bb5e74f2fc08db65f20c1172b6b2c4f7b48c13ab29b724dea9d0d5af0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SPHTVO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG5ek7x%2FUBiKYx32mARUDC8QHJ4NSeqMi%2BYL6RUk5GCuAiA6WSHIB%2F%2BqwhwHzi78BiAAacjDbQPmtvQaZyCrBItn3yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaxKpskLNoz7JrTXKtwDjBvRjqtacrPwREzP9wMfxltKMhJjOW4R%2FN8WEOsjhwCHCxSCepYoGU%2FtJt0YADqehdDO91VjFUTPDWZQ3t7TiLM0j97xPs%2BnB82i2dmkPJCyvhP0kaDRtt3OGRVfkOw1qoG0EpDHqN8STG%2BpIIEwpxpwfSnJVD5B2nXLeh9FPfM1SD5m9r9tf979revGjdY9fuPO45Vaujd0QmJ4Ntg7vf47KoowFFquOXwQfiOO2RghhxvkjtMt3nHCWszcrYgo6jT00OMgpML3GWT9z0yvV7HuVlM6TD1a9BFsMxpUwvR7%2FmCAXmIHOS3XASDHh3B5SDp2n%2FIXBbBXa%2BlaH0km8rG5oyJud00ThexRmjOU%2FzKTs4pQWkdCcN6H%2BfJ7FOnHJ%2FStWxNFG%2F2bLuQWOmue%2B%2B1b5JvISjVchJdvycWbrKo3aDniQV9rWG2WX1hb4l4zZWWtDtSmHW72PHNjms9PPvyToKL0qb6%2FBqqFMZhqcef%2Fz4vHLgS9AZyK6wLZKN6BP3e4B0Lz4MSOwi83PAOdAof6YMYVtIbn3fykkxT9oCBn4tF7iabrAOVqmlHrZM9wbJvuiHms4hByVwhERdwaM%2Bnu1ZymklusrioDtr%2F3AigCDr8SLrDkkvC0qq4wmq%2BovwY6pgHFo39o8MTLPRTTevmg9TgmaS%2Fo2TxVe%2B5kIcGmumc8APR%2BPtPoPVDS66Q66t%2FJom%2B9QdyN9heOCjzkRKxW%2FPBnbfRQ3QnAzg9L%2BSqyA8YUJ3IWAxhtXihC3aCn0WsvubqAuu%2BetXBNetiV%2F2r0nrEjkf1HhsS3%2BKUKUpDnemDQ0SgIiw2f1b9TblqhVAJLMWkXgkf6wnbyEhc91jKu08seZ8Ij8mtZ&X-Amz-Signature=ac56e53cb2c7b62833242e47dfdd8d66a467cd8552cda805e5b0666a73bcb514&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
