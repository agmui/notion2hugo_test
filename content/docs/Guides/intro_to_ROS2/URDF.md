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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=21db9eb85510caf28f648656803b4929c486e926e028168f21965760910ce332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=dad2ed61fdd186df6e65b6f73ae6f5011e09400f3770a374e7817236f88c9c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
