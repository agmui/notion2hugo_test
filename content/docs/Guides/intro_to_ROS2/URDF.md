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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2CJNMD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHYrZSe3AY39Lq2P7xMDYvnhL2d3RUXqMKVfMLLstRV6AiB1qkfIJnbV6fVsTA1tIUlmDqbMoRKdTky9p6rmo%2BYrYCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMtmiUTIMXBekifquHKtwDjWjiY03ihuAzvl0txEIFW%2F2IbResj4Y%2F1%2BX91KCueQQQo9Z%2BKL7jsbx6Yngmj890ojYnVty2JYl0RBszTMmGHX68XVjFITMBEJxxqc9bqJEiRlufLRzbL1jnXxBd%2Bzkgve1lJJIvOC5%2F7A1ZQYYuea0dEGiulvLrzG%2Fb9Ifw2PsxKokJYwGZnn2vB1NU2nwWxJEuOwRVHm3bFHPs%2F2xMPpiVie380%2BFHvT3TXgl0B7C%2Fr9qdfQpbo9bgpmHvggpbY6jn8IWX4MH1RnL1kCTO4URNWwbUVE2op4%2FLzYOIx4DR%2B5mDHGYfUjJPHuu1Efs6KuNbGlLaf%2Fl0gbwfYA1G2HfXa4Rxq%2BSCp3U4sfQ90QUuuaykKUlnHXr0CR4PJs9ySyw4ZUwUA6rOArdn%2ButJlNGYEVFtbVkgve4BeyWXoF0oSsjxT9GMoofNN0UfIQCbg%2FReLGt8hlxMuLRGp7UeqgFxLZ8h8vhiT08q6jN%2FXqxmjhtn7XGe73kGk7UdM%2BuhBHXSxnfch9nAJbocn1TD2UI3Nn2s3siyeskAAsPD55%2FyJmQIAJwtSRDEttyCF60bYsZD9m0AiH3pEL2wez287l%2B8gs%2Fi3QvyksEXqJbkzyMNVf467Mmcp7D2by4w552vvgY6pgFX8H52MSscHPAqXqfKQjbY2a0VVB33TujjZo1oI93a5mRjZ3KppaiGaYp2%2F67uUpFeYVmjZvoI23cAJ6GtaVqe7uIQ3Xv9qy%2FFw7l2dHhv4b5xObUqPUA%2BTSt%2BSN5gQvV3DghN7lVKhcbkCx2e%2FKia58WzSVeU%2BVWHdAMw0Zhw5%2BtoaiFGedWmXmwatDtuzEd6pIAHreXxcrrgCbhiJwsRNOl%2BneEN&X-Amz-Signature=d2d4d2a1b7e3946778f1bc98d579903ef32e822c5cd6c8d108f70e8b82dd2cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2CJNMD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHYrZSe3AY39Lq2P7xMDYvnhL2d3RUXqMKVfMLLstRV6AiB1qkfIJnbV6fVsTA1tIUlmDqbMoRKdTky9p6rmo%2BYrYCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMtmiUTIMXBekifquHKtwDjWjiY03ihuAzvl0txEIFW%2F2IbResj4Y%2F1%2BX91KCueQQQo9Z%2BKL7jsbx6Yngmj890ojYnVty2JYl0RBszTMmGHX68XVjFITMBEJxxqc9bqJEiRlufLRzbL1jnXxBd%2Bzkgve1lJJIvOC5%2F7A1ZQYYuea0dEGiulvLrzG%2Fb9Ifw2PsxKokJYwGZnn2vB1NU2nwWxJEuOwRVHm3bFHPs%2F2xMPpiVie380%2BFHvT3TXgl0B7C%2Fr9qdfQpbo9bgpmHvggpbY6jn8IWX4MH1RnL1kCTO4URNWwbUVE2op4%2FLzYOIx4DR%2B5mDHGYfUjJPHuu1Efs6KuNbGlLaf%2Fl0gbwfYA1G2HfXa4Rxq%2BSCp3U4sfQ90QUuuaykKUlnHXr0CR4PJs9ySyw4ZUwUA6rOArdn%2ButJlNGYEVFtbVkgve4BeyWXoF0oSsjxT9GMoofNN0UfIQCbg%2FReLGt8hlxMuLRGp7UeqgFxLZ8h8vhiT08q6jN%2FXqxmjhtn7XGe73kGk7UdM%2BuhBHXSxnfch9nAJbocn1TD2UI3Nn2s3siyeskAAsPD55%2FyJmQIAJwtSRDEttyCF60bYsZD9m0AiH3pEL2wez287l%2B8gs%2Fi3QvyksEXqJbkzyMNVf467Mmcp7D2by4w552vvgY6pgFX8H52MSscHPAqXqfKQjbY2a0VVB33TujjZo1oI93a5mRjZ3KppaiGaYp2%2F67uUpFeYVmjZvoI23cAJ6GtaVqe7uIQ3Xv9qy%2FFw7l2dHhv4b5xObUqPUA%2BTSt%2BSN5gQvV3DghN7lVKhcbkCx2e%2FKia58WzSVeU%2BVWHdAMw0Zhw5%2BtoaiFGedWmXmwatDtuzEd6pIAHreXxcrrgCbhiJwsRNOl%2BneEN&X-Amz-Signature=17d0b02fbe894c94144e0106e4f536071ae0471c5bbda4a22673f9f7b1586cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
