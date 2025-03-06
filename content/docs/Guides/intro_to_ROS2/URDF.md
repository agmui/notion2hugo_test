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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663V2TIR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn82WLIqMMrjycTdfPY3YN%2BkDv6yDFUJmH8H7QPwGE4AiBAy8YbYmGYkGI06EWhDkwdtfNDWeLi%2BcA4X0bu9Q3tBCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBsrsRzjxhh0DjmtrKtwDXBMLVEIleOcCWCsH3lEHh6AVHcCBWmypdsBGjMUl9a9UkPxmisgk1SiseGHJVf0bxA9brs6kV4K4bdNytyzFUvo2Lxd43OdBicSSaJiZ8XvU%2BuuxVAr8u3cLiLc5fcmhn6UmxM9hCOMer2V0ckoYRdUkm1xH0Yi6WKYAq49fIgPjb9G%2FivdaPK0W%2B1fCmBt6vc0CmS46kQ2%2Fk%2BD91371B%2BN%2F3gG86VQoORt8DjLQEuOVr4BMDjAvJE6NjQmAVpypZQXIWwC4fy5JF0G2L6Ct02TKFjZ5bw1HWeLnfzv2NysZDW12OwCT2XggTvuqn6%2F8MGeFpb8N0ns0HZZagE6s%2BK%2FEYp0rcv18xrJ2fRSr%2BW00GNUFeW2CsklJPjfWNZndhX4KWJ%2FewHQHq8EG22jQTPrQRAqzH00a45WxWL5gwnS3d0C07W%2FBz5P8LYQB9PhCQqwmvFT9J91DjfCVEhxqJhiLaJDeIjc%2BBTP56V8qB8q%2FYWF26zVoQBoHf%2FYHFZ7mG%2FJg9uF3zzvp4LC8cSB%2BlUtJKI850jHDohYUAhXhsBrC%2B4i3k7ih1isSxUhzxzSSQURzLw4spIgnaatfkD7whkYusVoEjwsf7F2czNU69pCOHC3dKdsmqd3vOBAw9pWkvgY6pgHyTW0viYyPB0nLPPiLPU2D8IqitkBg2elD5Ur2UPt0wApnWFZEcipGZX8285RaCtOYzqUnMmhTf6Sc1rrAVzSm0VCqGjUgsPTv436%2ByAkHbctWsgd%2FK7dlvaYVSx8cUn1kQdUB8qKfWP9gJmH9Zoi0I1yVdJPQqHYVFMYN6iafwIV2rEJLC0afdki6wiQZhZCunRhYkihQucmc%2F4OG7S21Diz7CjlI&X-Amz-Signature=071860dcf727a359712dda8e4768a32a03f1c1d2b1d51cd1938eb3ec8bfaf653&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663V2TIR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn82WLIqMMrjycTdfPY3YN%2BkDv6yDFUJmH8H7QPwGE4AiBAy8YbYmGYkGI06EWhDkwdtfNDWeLi%2BcA4X0bu9Q3tBCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBsrsRzjxhh0DjmtrKtwDXBMLVEIleOcCWCsH3lEHh6AVHcCBWmypdsBGjMUl9a9UkPxmisgk1SiseGHJVf0bxA9brs6kV4K4bdNytyzFUvo2Lxd43OdBicSSaJiZ8XvU%2BuuxVAr8u3cLiLc5fcmhn6UmxM9hCOMer2V0ckoYRdUkm1xH0Yi6WKYAq49fIgPjb9G%2FivdaPK0W%2B1fCmBt6vc0CmS46kQ2%2Fk%2BD91371B%2BN%2F3gG86VQoORt8DjLQEuOVr4BMDjAvJE6NjQmAVpypZQXIWwC4fy5JF0G2L6Ct02TKFjZ5bw1HWeLnfzv2NysZDW12OwCT2XggTvuqn6%2F8MGeFpb8N0ns0HZZagE6s%2BK%2FEYp0rcv18xrJ2fRSr%2BW00GNUFeW2CsklJPjfWNZndhX4KWJ%2FewHQHq8EG22jQTPrQRAqzH00a45WxWL5gwnS3d0C07W%2FBz5P8LYQB9PhCQqwmvFT9J91DjfCVEhxqJhiLaJDeIjc%2BBTP56V8qB8q%2FYWF26zVoQBoHf%2FYHFZ7mG%2FJg9uF3zzvp4LC8cSB%2BlUtJKI850jHDohYUAhXhsBrC%2B4i3k7ih1isSxUhzxzSSQURzLw4spIgnaatfkD7whkYusVoEjwsf7F2czNU69pCOHC3dKdsmqd3vOBAw9pWkvgY6pgHyTW0viYyPB0nLPPiLPU2D8IqitkBg2elD5Ur2UPt0wApnWFZEcipGZX8285RaCtOYzqUnMmhTf6Sc1rrAVzSm0VCqGjUgsPTv436%2ByAkHbctWsgd%2FK7dlvaYVSx8cUn1kQdUB8qKfWP9gJmH9Zoi0I1yVdJPQqHYVFMYN6iafwIV2rEJLC0afdki6wiQZhZCunRhYkihQucmc%2F4OG7S21Diz7CjlI&X-Amz-Signature=94c5df69e9d8024e8231cd5965788ce859f06a7bca1bb69a11514e7051d6414f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
