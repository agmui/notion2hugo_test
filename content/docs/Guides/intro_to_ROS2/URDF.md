---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3426DE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeAaw46xnpGiEhGZbmMotslnLi%2FyRLoNnTTcdq%2BCGkJwIhAKan%2BU4zEwkkoLsJDdlfP4XMUqwJm3mqe6qch80WbKjPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBQuA6DkPdoqpxBcq3APqWiQGnm411%2FuHz69Yhd9XdAQ3c6IQeOGsB1IDIUgslLfhttWASH8Lmw%2FqUrIGncd3HrE235EeRyHucKQHjlEe3%2FBOdxw9FRWFb4wOx2Dtfht%2BOgTq5vZVnp3kfJJ0QzK83jJyckBkVsQjTlJj1a4cXdM0IOmcGoIAE76Q7MZWDqbt5tCiLbGkZljqrq0GHylpf9fqO16PZw9C73ZkmDGmXCvZZU9hN1lXv%2BAvTPQlQ0AVC9bvwnyxgvn3SKHDmrHx3X6%2BKwK8TAbJ52%2FyBsQ18kKTY75VeFehYei7%2BTMDnkZcIIB0x8Z9IQmcy0q5OzUf3FiIvmdWrHOtFT7s7rNepXDX74hsF4Rw6FhxlS26%2BCze%2F1BB7J7UJo23kxk8Ebxrxo4K16ziQJrV3qOv6NZSyBWf2%2FRSX%2B%2BAvVHzB7J8MApqUZU1Uk62cp1yqsVNH0vQBkTboT%2BATDJb3%2BYoAoj6CyVGMB2bNRLQn4Rgwfw2AEQSdVYkqRTFuV%2B%2B6VlTJW3031C6kYfsiDBMO5zhLBNKOIty1mpU95x4NAt15sD662gL2LEtS9KfwvaydEUDtRIucr8jBXqOjsIEo5O19YvfuDOwxZy%2Bnbk2QGU4z4TyqXlgRqMzC5CdUSYAJzDfvuLEBjqkAUUqYHvZ2zCFKDZ2cE0920svmC%2FJO6baPjBufiWm%2FY7BgGlfK1NyNr431CZq2I63y2%2FJW1q4Gq1DvEPmAIE%2FDRjFtsOddPoG1R5PG%2BHBu4puSK9J%2BCILa9fI1H1CXIKBloVHJKJUbjtgkDMIqwEWp5wYtZhRAc6ja1fV%2BicfalrF24MO%2BlFBnRQfN12nkzovJBCT5jtSE5RRZO9sgQOWnf2R8Miv&X-Amz-Signature=0d46f17f37886c771c817236ff54b77aef97f78a67ec4924e7a64d62c797f08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3426DE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeAaw46xnpGiEhGZbmMotslnLi%2FyRLoNnTTcdq%2BCGkJwIhAKan%2BU4zEwkkoLsJDdlfP4XMUqwJm3mqe6qch80WbKjPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBQuA6DkPdoqpxBcq3APqWiQGnm411%2FuHz69Yhd9XdAQ3c6IQeOGsB1IDIUgslLfhttWASH8Lmw%2FqUrIGncd3HrE235EeRyHucKQHjlEe3%2FBOdxw9FRWFb4wOx2Dtfht%2BOgTq5vZVnp3kfJJ0QzK83jJyckBkVsQjTlJj1a4cXdM0IOmcGoIAE76Q7MZWDqbt5tCiLbGkZljqrq0GHylpf9fqO16PZw9C73ZkmDGmXCvZZU9hN1lXv%2BAvTPQlQ0AVC9bvwnyxgvn3SKHDmrHx3X6%2BKwK8TAbJ52%2FyBsQ18kKTY75VeFehYei7%2BTMDnkZcIIB0x8Z9IQmcy0q5OzUf3FiIvmdWrHOtFT7s7rNepXDX74hsF4Rw6FhxlS26%2BCze%2F1BB7J7UJo23kxk8Ebxrxo4K16ziQJrV3qOv6NZSyBWf2%2FRSX%2B%2BAvVHzB7J8MApqUZU1Uk62cp1yqsVNH0vQBkTboT%2BATDJb3%2BYoAoj6CyVGMB2bNRLQn4Rgwfw2AEQSdVYkqRTFuV%2B%2B6VlTJW3031C6kYfsiDBMO5zhLBNKOIty1mpU95x4NAt15sD662gL2LEtS9KfwvaydEUDtRIucr8jBXqOjsIEo5O19YvfuDOwxZy%2Bnbk2QGU4z4TyqXlgRqMzC5CdUSYAJzDfvuLEBjqkAUUqYHvZ2zCFKDZ2cE0920svmC%2FJO6baPjBufiWm%2FY7BgGlfK1NyNr431CZq2I63y2%2FJW1q4Gq1DvEPmAIE%2FDRjFtsOddPoG1R5PG%2BHBu4puSK9J%2BCILa9fI1H1CXIKBloVHJKJUbjtgkDMIqwEWp5wYtZhRAc6ja1fV%2BicfalrF24MO%2BlFBnRQfN12nkzovJBCT5jtSE5RRZO9sgQOWnf2R8Miv&X-Amz-Signature=4dd2d19b5a4d52efb38a18f09097ae26baa8011167fb54c9f7da9fddd498c61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
