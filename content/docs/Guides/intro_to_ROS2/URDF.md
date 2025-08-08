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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CKJUYFL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGMsTGP5ZCdytVur2qzYt%2BoTRSocHRKRPDAoKyshm%2BYwAiEA4MinG4dWc8XrEz4Vy0h6IA75OEl7z%2FWf1Xwt%2BMGfgRkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfMif1VSSXvsa56ircAzAKo4Pxe8uNCK9%2F19RcXbZdUkPtYH8mGqvYoZT4Clf0fXO5IUkbbWKqAyg9xdgSdVwWZqwIxrUA6j8Mcf2rORwVgbOiBLjTYOyKC49RJbTz1Yyws8AehwLmcZIfVc70WehjPeUNnAzzpVqyePNte%2FO3WvwEHiZag%2BGWJCdk3jjnEG2DATOe2Ry76i1j78GRJwI5TBTDOoLeLF5FlbmLwLpd7S%2Bjx%2BWFoLcqBzPtrRvCfiQYtUxYbBxYru5q2kwacoOcou72OjYY9f2EEX%2FLaREUWz4XzOWiU9boPldgOiKkydquweJ9XYqz7m1%2FmTi29ktZpZ%2Bmr5onKQ8EAT1xvpKM%2Fnimn0SSVwqQDqDnI9OfMUB35psJMpd3WbRriRHTq9jryXhQ40O8irZjNcRPeehycetm2IicJC8NM0N10bmIWNE98Lt8N%2Bmk%2BazUg%2Fyh0Mewf16K%2FDR6Bpqk7n2qL6N9B45Qyu70rFkBZatD8roDrdf6%2FRVtzy80FQupX%2BRqo%2FovP7JxK1KHABlOA4FDegH0wVQUYMP6xwrGxWGjt%2BjZKUetS3Ocuwo3K5pZXnh36Y%2B2moaW2z4E2CgMOWO9sEZcBVewKyrjyK%2FLE3ZhYwpBKWNe%2Bqx41zHtzYecMIi72cQGOqUBeenbGmRxNuv35f25khgbfNOQEEK%2BFUpi4wARW0acNMeOE0VKPaAkK4p9U5ZaMWXHA0MJB0DtlQ%2Fzp%2F2VarpxPQI7bIbic%2FUBQJtgLGFyeNWMCOp1DeTYXnnknP80zvHReWm05AyS9YUylmEeYUIVxS23HXGSeEfMnrWxCMFZezB2i9jK%2BWIE1xURRxXWAuOJfmwPRr%2B6EifoYR%2BMbjRlpzXiABy4&X-Amz-Signature=90e6ec6ff8d108b3541de36b5ec8e4b524fb6c9885b7f215c37b6849cec669b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CKJUYFL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGMsTGP5ZCdytVur2qzYt%2BoTRSocHRKRPDAoKyshm%2BYwAiEA4MinG4dWc8XrEz4Vy0h6IA75OEl7z%2FWf1Xwt%2BMGfgRkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtfMif1VSSXvsa56ircAzAKo4Pxe8uNCK9%2F19RcXbZdUkPtYH8mGqvYoZT4Clf0fXO5IUkbbWKqAyg9xdgSdVwWZqwIxrUA6j8Mcf2rORwVgbOiBLjTYOyKC49RJbTz1Yyws8AehwLmcZIfVc70WehjPeUNnAzzpVqyePNte%2FO3WvwEHiZag%2BGWJCdk3jjnEG2DATOe2Ry76i1j78GRJwI5TBTDOoLeLF5FlbmLwLpd7S%2Bjx%2BWFoLcqBzPtrRvCfiQYtUxYbBxYru5q2kwacoOcou72OjYY9f2EEX%2FLaREUWz4XzOWiU9boPldgOiKkydquweJ9XYqz7m1%2FmTi29ktZpZ%2Bmr5onKQ8EAT1xvpKM%2Fnimn0SSVwqQDqDnI9OfMUB35psJMpd3WbRriRHTq9jryXhQ40O8irZjNcRPeehycetm2IicJC8NM0N10bmIWNE98Lt8N%2Bmk%2BazUg%2Fyh0Mewf16K%2FDR6Bpqk7n2qL6N9B45Qyu70rFkBZatD8roDrdf6%2FRVtzy80FQupX%2BRqo%2FovP7JxK1KHABlOA4FDegH0wVQUYMP6xwrGxWGjt%2BjZKUetS3Ocuwo3K5pZXnh36Y%2B2moaW2z4E2CgMOWO9sEZcBVewKyrjyK%2FLE3ZhYwpBKWNe%2Bqx41zHtzYecMIi72cQGOqUBeenbGmRxNuv35f25khgbfNOQEEK%2BFUpi4wARW0acNMeOE0VKPaAkK4p9U5ZaMWXHA0MJB0DtlQ%2Fzp%2F2VarpxPQI7bIbic%2FUBQJtgLGFyeNWMCOp1DeTYXnnknP80zvHReWm05AyS9YUylmEeYUIVxS23HXGSeEfMnrWxCMFZezB2i9jK%2BWIE1xURRxXWAuOJfmwPRr%2B6EifoYR%2BMbjRlpzXiABy4&X-Amz-Signature=c30fbf38f2e042a87628e0750a980192beaf03befc4ebd329d2704b83877b485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
