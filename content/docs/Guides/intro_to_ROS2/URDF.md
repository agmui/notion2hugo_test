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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PL6BHKZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB8TXJBLtX7ND2ruw6UJtgla3T6X6XfvLlcovN0pUa0IAiBPw9aPY5sf0I1lFsKMocjfNaIwhppdAHRq%2Bafurcso5yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM7xCYGe6CMGzhlfkdKtwDz1%2FrEaV5RJhIOYoX3%2FP6iePsGYLW2Ko7gMznlCawf%2BwXGN7lzoNxKT12%2B6K2C2xtvEODppqoS5MqAoZtHQ0Q2L99wKGpLdoYhlKEMvlN%2F7xi1f3pF%2FuId%2FjMMLpVErRwa5Y%2B9VxAJNcHNFsJY6dzEe9RlhkHEC5unncRAU36RPV0iznrr0n9GtOzVy6XTpnS4DdhugyZwSLRh9Woi%2FvZvjKGAVh%2F2xXAuv1ybsr%2BwYD4joiJUM4D5fhdt%2F1wUWpbNEV5D9vQz17lKoNuSxd7F38kakm0kUgUi1dmXEXsiGR8BxXpUJ2UHAJbiSnzvamkYeaHPhJrAnBo2bbsALRzChiZH1Gkk4mna25miemiT%2Bq6WYr6vn9Eyo6RqVhcgtkKYXIZu%2BebEDZfPzqWTWMZdoEb43tXBKC%2FqtCokBtET95nxa8T36dGlTR%2BCB%2BRBMua%2Bk4MWqmh8KWMcAkw08cNR58gggnDk%2Fdf5B8tenr37WuxQwsk2lmPoieVqp0nbhZsRyFbszacAeJFyHG5wiFRUhmImZhq%2Faz0Y0GEJJj4TtHbamCL66K11ttVyEwFpRXJdY7XVQkFw1Ovj0w1G2BXvb4oPCNTH%2BKVDaeWxSWyYkP8cCgYHMxareDN%2Ftowr7yewwY6pgERmWds7b7AdxL00CJYVdIlp%2FBlyv1fRH9MONfKEGXOoI4uUObVL%2BsIMOHWkQACMzW%2BD2PaZZjsAZgrH63ha2aPQ%2F3iwiMPrLop%2BXLUJSuF43s7Cn0axZY32CQzpmTu3E5o8Tzpabl0xuCPubLExLV6%2FFFWDNcJ1cP9lXTYlPsoX%2Fl7D1PQjILlz833N%2BS%2BjYfnks9h6rh1QBfW7D1Yy3NMyy68HVKj&X-Amz-Signature=6b916a44c3cfc66aa47532ce2e20382eb92be69d2d114090b28425f2745a2bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PL6BHKZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB8TXJBLtX7ND2ruw6UJtgla3T6X6XfvLlcovN0pUa0IAiBPw9aPY5sf0I1lFsKMocjfNaIwhppdAHRq%2Bafurcso5yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM7xCYGe6CMGzhlfkdKtwDz1%2FrEaV5RJhIOYoX3%2FP6iePsGYLW2Ko7gMznlCawf%2BwXGN7lzoNxKT12%2B6K2C2xtvEODppqoS5MqAoZtHQ0Q2L99wKGpLdoYhlKEMvlN%2F7xi1f3pF%2FuId%2FjMMLpVErRwa5Y%2B9VxAJNcHNFsJY6dzEe9RlhkHEC5unncRAU36RPV0iznrr0n9GtOzVy6XTpnS4DdhugyZwSLRh9Woi%2FvZvjKGAVh%2F2xXAuv1ybsr%2BwYD4joiJUM4D5fhdt%2F1wUWpbNEV5D9vQz17lKoNuSxd7F38kakm0kUgUi1dmXEXsiGR8BxXpUJ2UHAJbiSnzvamkYeaHPhJrAnBo2bbsALRzChiZH1Gkk4mna25miemiT%2Bq6WYr6vn9Eyo6RqVhcgtkKYXIZu%2BebEDZfPzqWTWMZdoEb43tXBKC%2FqtCokBtET95nxa8T36dGlTR%2BCB%2BRBMua%2Bk4MWqmh8KWMcAkw08cNR58gggnDk%2Fdf5B8tenr37WuxQwsk2lmPoieVqp0nbhZsRyFbszacAeJFyHG5wiFRUhmImZhq%2Faz0Y0GEJJj4TtHbamCL66K11ttVyEwFpRXJdY7XVQkFw1Ovj0w1G2BXvb4oPCNTH%2BKVDaeWxSWyYkP8cCgYHMxareDN%2Ftowr7yewwY6pgERmWds7b7AdxL00CJYVdIlp%2FBlyv1fRH9MONfKEGXOoI4uUObVL%2BsIMOHWkQACMzW%2BD2PaZZjsAZgrH63ha2aPQ%2F3iwiMPrLop%2BXLUJSuF43s7Cn0axZY32CQzpmTu3E5o8Tzpabl0xuCPubLExLV6%2FFFWDNcJ1cP9lXTYlPsoX%2Fl7D1PQjILlz833N%2BS%2BjYfnks9h6rh1QBfW7D1Yy3NMyy68HVKj&X-Amz-Signature=cd3e0aa4729a7855504ef168f433f757b7941c5cbdb549d93c8a2328b06721a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
