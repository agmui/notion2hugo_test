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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5VVGJD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICrNw0Pfe1aG6d%2FQIJdOJbFBnwuloFgRhRzUBquSVaAQAiEA4MUAPXExU2F4K7XuDUEQ7ijqSA3vH5NESBtvflHB3hMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL0knpz8V%2BUOlN60ircA7eXVQ5q1PHLh8vATwUFKS7v5UA%2BSttMpTgcCaBCLJ6HTqCgnX%2FiKtXDhhvxm6znywaAXXmONki8rJohOLHf5rrjAWH4wYpWXUSRdbqks2t74PRv8FyAv4kjnoIe3MWz7Y1zXNFmbbO50YK%2Ffab49AYUvqnzlc0Otl6cYvea8FQRs2iQ5eapz%2BiCKwYPx17o7wCA9Mexc%2BZuzE9sb0p6IvB5%2BYjiH3Gp1oRBT1UwybjeGEjsNxAyyLnh7FTJeTMaz08h8OOL9b6dsMdp0Foq0cWO%2FsMed27R3jTZPVTesBT3NniMnKMbGJdL32cJke%2BQ163JcWMwTSn5%2BOIvwVyUsOahEZIMXUXyj2%2B5r3L30VqYiLxqlYmTOiLobchtYE040SeL0ApsApx6KtWVRsqm5apqmL7n9U%2Bw3xgFP0GgtFu%2F9KJk7P51o4EZJIww%2Fl4SWEhJf0923ntv1hqKyV7x08Scoi80lloK7K5kzR64kExxc2ST0g1wCVQJ%2FYrSumx4kZRZ9o6HrgrxAQ1jTf9FXi0PtO9Oo2j1V1F8sAN5TOIQRwjo%2B5dyC74WdYPL3dv0k38eU22UQ2Fv5TApp9u9eiLoIsrb00ELMgw9W%2F%2FPkpHy0H9SAPruNAR5lg%2F6MOGinMAGOqUBxMXVtKX%2BNSRvltc%2FQSR3sCy7Us2kJUPgljlF7cIsbpB5SuDWhhyyubxz3E4R3%2BfyD7S6FsE4f11WIhYCN7PP%2FjVK73P660IrcOu4LSdeGbqKjCAGBh6S%2F93kCHyYM6eBptiSzR0BJwPwci0tIUZ7KXNkdKMLE65yQ%2BdLk%2BEOqoadCrv8eDd8uqeMQAyvqWEHuj11vqK9mK8xTxSey4iKM45TJZvs&X-Amz-Signature=44224cf4f48e364cb56dce36c81658c82553d8a38986dbb5703dc678a4890e64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5VVGJD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICrNw0Pfe1aG6d%2FQIJdOJbFBnwuloFgRhRzUBquSVaAQAiEA4MUAPXExU2F4K7XuDUEQ7ijqSA3vH5NESBtvflHB3hMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL0knpz8V%2BUOlN60ircA7eXVQ5q1PHLh8vATwUFKS7v5UA%2BSttMpTgcCaBCLJ6HTqCgnX%2FiKtXDhhvxm6znywaAXXmONki8rJohOLHf5rrjAWH4wYpWXUSRdbqks2t74PRv8FyAv4kjnoIe3MWz7Y1zXNFmbbO50YK%2Ffab49AYUvqnzlc0Otl6cYvea8FQRs2iQ5eapz%2BiCKwYPx17o7wCA9Mexc%2BZuzE9sb0p6IvB5%2BYjiH3Gp1oRBT1UwybjeGEjsNxAyyLnh7FTJeTMaz08h8OOL9b6dsMdp0Foq0cWO%2FsMed27R3jTZPVTesBT3NniMnKMbGJdL32cJke%2BQ163JcWMwTSn5%2BOIvwVyUsOahEZIMXUXyj2%2B5r3L30VqYiLxqlYmTOiLobchtYE040SeL0ApsApx6KtWVRsqm5apqmL7n9U%2Bw3xgFP0GgtFu%2F9KJk7P51o4EZJIww%2Fl4SWEhJf0923ntv1hqKyV7x08Scoi80lloK7K5kzR64kExxc2ST0g1wCVQJ%2FYrSumx4kZRZ9o6HrgrxAQ1jTf9FXi0PtO9Oo2j1V1F8sAN5TOIQRwjo%2B5dyC74WdYPL3dv0k38eU22UQ2Fv5TApp9u9eiLoIsrb00ELMgw9W%2F%2FPkpHy0H9SAPruNAR5lg%2F6MOGinMAGOqUBxMXVtKX%2BNSRvltc%2FQSR3sCy7Us2kJUPgljlF7cIsbpB5SuDWhhyyubxz3E4R3%2BfyD7S6FsE4f11WIhYCN7PP%2FjVK73P660IrcOu4LSdeGbqKjCAGBh6S%2F93kCHyYM6eBptiSzR0BJwPwci0tIUZ7KXNkdKMLE65yQ%2BdLk%2BEOqoadCrv8eDd8uqeMQAyvqWEHuj11vqK9mK8xTxSey4iKM45TJZvs&X-Amz-Signature=ea10583a1818eb0f70c1989411ae5bbd7fa49061914a704deb3628ad80b54726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
