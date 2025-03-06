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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GG4PYAM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOK5tYxo9t4P8YdHZtEBQRuVhHgvTsZctbtSDxgTQ%2F3AIhAORxtlCpqPgi6ijrktcqUN7MumAwM6iFNJ%2B%2B3nGK6CI%2BKv8DCCgQABoMNjM3NDIzMTgzODA1IgxFuH7JA4Ak1vvSq0Iq3APRF2ARolQaznf1S4UvE%2B3Uq5k6ZIvVt4LmHJKl25i%2FSOUhpjqky9lkXNJmpOUA4neNVCgQXGVnGvLCgxGEQcJnjTi%2FM4X0G0Iy1EM8S7Ni9m9r2rS9YyGTJS3oKPvulH3yCf72D1E5NPSH%2B2md5%2FS22oaXw34umnitHwuL9czOLmlS7GER%2FE4bRG1Fqz8Nwa%2BBXPTC9FNFNdJaEBakC98e%2FUAQF7oEV4eXVO%2FVhfAVfDYT4YIydKEDL6TtuothdMKKoCQfrNEY5eWA6xMRRA9PBSB%2FaTDgTBYmG209C2MUMweyUaR8GZ6kRJ3VjMF9CWqL%2BzWv2F0GZedu2Cg0DGg%2FvV6Mmka8HfnlKHPHvzSb01AcwTMPVjvPxkA3ARlySEmFlEyoW9YqnQbS%2FnHzKXkhu8zLFueqd1Iw4u5QyIb3ZnW6OEZj9peTKCz30GJeVnRmxuna0LueatjwA0V9eP20CyyVXejGtYT5VoGm9VwvMkTFU5%2B4QYvZsSasqeTHnb95%2Fv8%2F0HFlQNJrpEwX3dh2MiRnugJgI7eUbEoy0Za8mTxCRs2fKQdwww8WGobbjoLtmhFs5vKP%2F0LKL95Ao5VfQxzVQfNMmXsdcCNidgh4NgfQf6o1kFrYoiArwzCll6W%2BBjqkAQzifBdParMNlsmD8d5uB0Sc5ZCm3gVckmNkuIBdm9AJEScPWtGwoD2vfF17EOchHtY3DUPjegcSl9QHZOR6TC9Mq4f2k4mP0SeyL%2BFbigq7GM%2Fsu2tk5zzKKzo7IrdhOSYXs779tAsWOm4tiAOGs2ToseD0MS2uzU8HAs1tGnAcNFLukjiRR9DfEYrrAcubEpxZ4p8fHmvF5faMjP0VfB8gSWbc&X-Amz-Signature=36f459778c8fae5216ba760e23590cb9f707c75df62d4d354e5b452558f99dab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GG4PYAM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOK5tYxo9t4P8YdHZtEBQRuVhHgvTsZctbtSDxgTQ%2F3AIhAORxtlCpqPgi6ijrktcqUN7MumAwM6iFNJ%2B%2B3nGK6CI%2BKv8DCCgQABoMNjM3NDIzMTgzODA1IgxFuH7JA4Ak1vvSq0Iq3APRF2ARolQaznf1S4UvE%2B3Uq5k6ZIvVt4LmHJKl25i%2FSOUhpjqky9lkXNJmpOUA4neNVCgQXGVnGvLCgxGEQcJnjTi%2FM4X0G0Iy1EM8S7Ni9m9r2rS9YyGTJS3oKPvulH3yCf72D1E5NPSH%2B2md5%2FS22oaXw34umnitHwuL9czOLmlS7GER%2FE4bRG1Fqz8Nwa%2BBXPTC9FNFNdJaEBakC98e%2FUAQF7oEV4eXVO%2FVhfAVfDYT4YIydKEDL6TtuothdMKKoCQfrNEY5eWA6xMRRA9PBSB%2FaTDgTBYmG209C2MUMweyUaR8GZ6kRJ3VjMF9CWqL%2BzWv2F0GZedu2Cg0DGg%2FvV6Mmka8HfnlKHPHvzSb01AcwTMPVjvPxkA3ARlySEmFlEyoW9YqnQbS%2FnHzKXkhu8zLFueqd1Iw4u5QyIb3ZnW6OEZj9peTKCz30GJeVnRmxuna0LueatjwA0V9eP20CyyVXejGtYT5VoGm9VwvMkTFU5%2B4QYvZsSasqeTHnb95%2Fv8%2F0HFlQNJrpEwX3dh2MiRnugJgI7eUbEoy0Za8mTxCRs2fKQdwww8WGobbjoLtmhFs5vKP%2F0LKL95Ao5VfQxzVQfNMmXsdcCNidgh4NgfQf6o1kFrYoiArwzCll6W%2BBjqkAQzifBdParMNlsmD8d5uB0Sc5ZCm3gVckmNkuIBdm9AJEScPWtGwoD2vfF17EOchHtY3DUPjegcSl9QHZOR6TC9Mq4f2k4mP0SeyL%2BFbigq7GM%2Fsu2tk5zzKKzo7IrdhOSYXs779tAsWOm4tiAOGs2ToseD0MS2uzU8HAs1tGnAcNFLukjiRR9DfEYrrAcubEpxZ4p8fHmvF5faMjP0VfB8gSWbc&X-Amz-Signature=d24d21cd002bbee7015383e2727ec3fba6ec1d2da3d834003d6f0b82f8797694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
