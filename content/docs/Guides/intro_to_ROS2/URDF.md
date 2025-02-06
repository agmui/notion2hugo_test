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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTHYPF7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD%2BsppTWHRLXihbkzuPxvF4LiQhDLEt%2Ffsc1%2BLVpu6kEgIhAMrL4kw07J4BVZm0rCVPDA8ybKYh3EbdhiR9ov26cy1AKv8DCFYQABoMNjM3NDIzMTgzODA1Igzik48tCOy5tRYW25Mq3ANqaHk6BsjXkxxOvrW6qg8EBcz3IsEMRFIS0c%2B8qU9CJigs31ARoIxZxyzbaFSt%2BAJtpFXidtHJ3eQldoefaXrJRL8md9aZZ8%2BA%2FiJnnuBY0IOJ1eosvJWGlCu9W%2F181y6Xubc6Tl%2BpwBuWSR%2BluBhPRBoAuvFq3C7Z%2BJriPi17%2FQteZjbG3FBBEt2Nd9EQ1sgGsxWyjvXZ6nyr5pl9cfIA4W54FKfRQ0vIobVWclMqgRb5F3NIQ3Eod4MLz2g5CmPblFvaORQewSfP7d2QWO98KI1z7bwcfIIiQTDnAG%2FdKl16b364Gw3%2F0MVVRwb36QfKFp1zFcG%2BJmBuyLK9iqo4kjOzUTEIxFCO803ruNUkZS1qLDnuDe57XN%2B8b6INm4flFejvREqxNsTDw%2B3p1mKhdBUu6caM74961PS1wt2y8RZ%2FtUk%2BUUq9M3dQRWyOOTsQYqnyMFNxxqXFdEY0M7NnC0mk2AxdY0BeGBBR5Y5U57lX2TOMBPiM%2FMrdYr5cYJf5wPPkkQGUO8EsgM3ThYLZBP0kVhQWu1v0Yk31J3gGOzB0Nbiwdo1r4hLme3ikchixNZtbHEPlMd2xaNG5nBhQ0ovFHhq4%2B%2BN2e75HB3svB2%2Fq8gCIVIBMyTZU8TCO%2FZC9BjqkATvJwQX0MB8SQFaCLwh%2BuZWT87QkuyNCByh2cX%2FtoRMok9IjR%2FfWaMCDFWfUMnuLQ8hnzh0UUWRnSuZD5HZINpoVOxF7anE2eTi8%2FBimrDHNF4SScOOj8HVOmNOhp8Ue5bYLKTLgftIaD8dltZ7hfcqeRWqH%2B3XtRmtAQ9ruGXZzTtNY6bMG9LabYO6g%2BSV4%2BnLh%2F8e21ygo31pSd5MKzCXcdgrh&X-Amz-Signature=d6a20ad5d91200f8ff5ea9c0d8c06fcbfcf6d2819bd75c5249ceaf88c54e0a80&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTHYPF7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD%2BsppTWHRLXihbkzuPxvF4LiQhDLEt%2Ffsc1%2BLVpu6kEgIhAMrL4kw07J4BVZm0rCVPDA8ybKYh3EbdhiR9ov26cy1AKv8DCFYQABoMNjM3NDIzMTgzODA1Igzik48tCOy5tRYW25Mq3ANqaHk6BsjXkxxOvrW6qg8EBcz3IsEMRFIS0c%2B8qU9CJigs31ARoIxZxyzbaFSt%2BAJtpFXidtHJ3eQldoefaXrJRL8md9aZZ8%2BA%2FiJnnuBY0IOJ1eosvJWGlCu9W%2F181y6Xubc6Tl%2BpwBuWSR%2BluBhPRBoAuvFq3C7Z%2BJriPi17%2FQteZjbG3FBBEt2Nd9EQ1sgGsxWyjvXZ6nyr5pl9cfIA4W54FKfRQ0vIobVWclMqgRb5F3NIQ3Eod4MLz2g5CmPblFvaORQewSfP7d2QWO98KI1z7bwcfIIiQTDnAG%2FdKl16b364Gw3%2F0MVVRwb36QfKFp1zFcG%2BJmBuyLK9iqo4kjOzUTEIxFCO803ruNUkZS1qLDnuDe57XN%2B8b6INm4flFejvREqxNsTDw%2B3p1mKhdBUu6caM74961PS1wt2y8RZ%2FtUk%2BUUq9M3dQRWyOOTsQYqnyMFNxxqXFdEY0M7NnC0mk2AxdY0BeGBBR5Y5U57lX2TOMBPiM%2FMrdYr5cYJf5wPPkkQGUO8EsgM3ThYLZBP0kVhQWu1v0Yk31J3gGOzB0Nbiwdo1r4hLme3ikchixNZtbHEPlMd2xaNG5nBhQ0ovFHhq4%2B%2BN2e75HB3svB2%2Fq8gCIVIBMyTZU8TCO%2FZC9BjqkATvJwQX0MB8SQFaCLwh%2BuZWT87QkuyNCByh2cX%2FtoRMok9IjR%2FfWaMCDFWfUMnuLQ8hnzh0UUWRnSuZD5HZINpoVOxF7anE2eTi8%2FBimrDHNF4SScOOj8HVOmNOhp8Ue5bYLKTLgftIaD8dltZ7hfcqeRWqH%2B3XtRmtAQ9ruGXZzTtNY6bMG9LabYO6g%2BSV4%2BnLh%2F8e21ygo31pSd5MKzCXcdgrh&X-Amz-Signature=45ef7a1d961dfca499782494a27773f1c474f39c6946fde1f121aea528b783a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
