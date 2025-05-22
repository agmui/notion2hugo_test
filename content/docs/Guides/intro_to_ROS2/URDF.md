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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GOMLAM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2PDu6t77%2FLFcupcwxf6VINBxGFYV%2FDtzqTnqG%2B7kvbQIhAK7uGrxF6XjuFAe%2FYuMHnDq67F3j2vaswc36ptdIZjA9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkIaYEk9OFHE88np4q3AM8DE5dDrz525IuTfgQiuq9vb6VZCLSl2uVibdjZzH0dZ9RXTJH%2BVFxPgMEjx3SNgmHbsIUyvfLOFflgt%2B9JG0YbCowPCYmU3kyuYFxLcVs7%2FV1Rth6E%2BoX1p1%2Bv520%2FFkfqaZ7KvrumXKRTlst2%2FwT1wLN3Us3Nr%2BQHl4NvHnIbKEj4Jr5W%2B2TpIZPqYlESiiw%2F9JWL9xuxASt%2Bvnpan7%2F8KtdQfX0g1xsEuGuAx2Hxq2LFmRZXX%2FLMLUmLXGmJ6Ou%2FSDn1uGfyqEQW5DUjp2WRB1flgQMlPf04vcENjbAd4hjTcN%2B%2FzTVm58RFT%2FUplM0DKv%2B0mxqaj5tMIxv0V466P3YK4FnZhNC53ixQOnwqzhtmdeAZLxg9xPrUO6ACPindK6IlJt8WrU8UpY8kb6X5Px0bGqT4GQF8Z0WKDachMeRQwxBgPryu0bnxbjvXe2QdPXjVsjboU1GWlJJIOJwNCqkarsUCOI7jLVtrcnsKzz2ifsK%2FdRPzJtojLfZaYycfBToYmFrPC973vR17ruj25TuGGio0FusL2tTZIsMI%2BLEJsSl2WzgLGSsK54Y681V3NYBNwOSu245Eqn1GZHD8UzLlZ5h19pGLuLy3NJhZ51JSnry4DyM4dOvMzC92r3BBjqkAa1j3JCeO6qpPWJu%2B3Jjw11Hor5d1bKwLJWbO0z57DYhXZrCeEd083%2FHDXUL2rdDrCzuZJqU6oI%2BJeTaTWozm7g%2B%2FLdzChzlF1irLS0kF0jVfl2on31i%2F5Qd5cHy0Pk7MBpDQo4Hkpz7llyzUGjw3a04g84A0fzF50g7E3MsKWLaBhTYqM2vh7nNAQY9BHOEFYd%2FNt0kRajHx6l6oH0Em6f5qF1I&X-Amz-Signature=dfd40465eb126128fe03323c41bac76bd47b6a96f22dc6c68496ddd7057fdf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GOMLAM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC2PDu6t77%2FLFcupcwxf6VINBxGFYV%2FDtzqTnqG%2B7kvbQIhAK7uGrxF6XjuFAe%2FYuMHnDq67F3j2vaswc36ptdIZjA9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkIaYEk9OFHE88np4q3AM8DE5dDrz525IuTfgQiuq9vb6VZCLSl2uVibdjZzH0dZ9RXTJH%2BVFxPgMEjx3SNgmHbsIUyvfLOFflgt%2B9JG0YbCowPCYmU3kyuYFxLcVs7%2FV1Rth6E%2BoX1p1%2Bv520%2FFkfqaZ7KvrumXKRTlst2%2FwT1wLN3Us3Nr%2BQHl4NvHnIbKEj4Jr5W%2B2TpIZPqYlESiiw%2F9JWL9xuxASt%2Bvnpan7%2F8KtdQfX0g1xsEuGuAx2Hxq2LFmRZXX%2FLMLUmLXGmJ6Ou%2FSDn1uGfyqEQW5DUjp2WRB1flgQMlPf04vcENjbAd4hjTcN%2B%2FzTVm58RFT%2FUplM0DKv%2B0mxqaj5tMIxv0V466P3YK4FnZhNC53ixQOnwqzhtmdeAZLxg9xPrUO6ACPindK6IlJt8WrU8UpY8kb6X5Px0bGqT4GQF8Z0WKDachMeRQwxBgPryu0bnxbjvXe2QdPXjVsjboU1GWlJJIOJwNCqkarsUCOI7jLVtrcnsKzz2ifsK%2FdRPzJtojLfZaYycfBToYmFrPC973vR17ruj25TuGGio0FusL2tTZIsMI%2BLEJsSl2WzgLGSsK54Y681V3NYBNwOSu245Eqn1GZHD8UzLlZ5h19pGLuLy3NJhZ51JSnry4DyM4dOvMzC92r3BBjqkAa1j3JCeO6qpPWJu%2B3Jjw11Hor5d1bKwLJWbO0z57DYhXZrCeEd083%2FHDXUL2rdDrCzuZJqU6oI%2BJeTaTWozm7g%2B%2FLdzChzlF1irLS0kF0jVfl2on31i%2F5Qd5cHy0Pk7MBpDQo4Hkpz7llyzUGjw3a04g84A0fzF50g7E3MsKWLaBhTYqM2vh7nNAQY9BHOEFYd%2FNt0kRajHx6l6oH0Em6f5qF1I&X-Amz-Signature=39606aabcf8c26718930a8f214d40d1a3b2e541a5879d6300deb1b3d65f5e413&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
