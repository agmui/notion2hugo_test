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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUZVLK2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblDsr4GECBzK73101x%2BXeTMBtTBDhphZYtRg2rjuZTwIgLsKxwqgIrRK4SgJySWe6YSagtbGPMtnct4PXQTxOD9Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDBaMY6PN83yyzzvZircA1QCLqLjT3DiW%2FvyUUUt%2Fd%2FLG62PH4lTvA%2Bz4hbqs2BF4lQPQsWeq%2F0Qe5Fb4yb4pwxamns4y3CFfx4QldG5GjLdPwB3Z5M8odalno56hb9A1vG3YTrmC2pv%2BQFG7ekUo4IIW98g3AGi%2BD%2BymCKu%2FHsRPM7wQmRQkxR96FVkk2rQKtkJL5XG6ZT0px0TArLbRXc%2FvIjwkmXkSlY14tg7iXJPRC1zSflyheZ8ydXqvR1IaUa0f%2FoVF8iSJnBYXJVTK3B8eBG3un7f5hCEdj82SfL2T0b%2BK25jouiJj%2F7%2BJ0%2B7J5U69lbsEDBXftSFcmuNPOxRJu41VGjB4fw9S3Y%2FBuOP1fXX1BV1Se3H%2B7R32YjFA19bWyzEgy7FrqrX0PMosquyuQg1OCIAxXM7LQPrVabU%2BgTgwa76kQdvpitGECZZ6bOvXmVPLPGShuH0KitdrnmXIAO33xRVCXnX7D8JlEiI75cJFrKK%2B8IVosRHQXxh6Bh%2FpqmqVywmfVJxVjaQVelNwsXIriCSNLJ1zkDlah82v7j4f59IhuWtVXdqbMdCVxVoirlj4wHJqEGA7PE45rEBYwUE%2FZWBB5YmbqhCnWYJAh5LyEgvPHx6fr%2FIO5RyHpAfY07u%2F4PtHq0GMISU9b8GOqUBWvP9x6UNI7l8op8E0l5TAkygONGwu4Q5O8nBBmMY2rFk5jmsOmdpAVgvhBLxjHUbWc5e4W4IzSRBWmlvlPLYz7K50tP2xegOcIDUD%2BCtaLcEXhaLAP06qXJX%2FLOaHrjg0kYHtVnf9Z92MBnUzifIn1Ny%2BgU7%2Fdq2K8b4bWKNWdmF8Tvokq50xb7nCZULXHBmzfIsoVTLFG9FtM6p8Bq3dqGrzjhl&X-Amz-Signature=575bb8704c2fbf2b7bfb40d43aafb3cc81e52a63bc3cb98d10ac691502ab7da0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUZVLK2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDblDsr4GECBzK73101x%2BXeTMBtTBDhphZYtRg2rjuZTwIgLsKxwqgIrRK4SgJySWe6YSagtbGPMtnct4PXQTxOD9Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDBaMY6PN83yyzzvZircA1QCLqLjT3DiW%2FvyUUUt%2Fd%2FLG62PH4lTvA%2Bz4hbqs2BF4lQPQsWeq%2F0Qe5Fb4yb4pwxamns4y3CFfx4QldG5GjLdPwB3Z5M8odalno56hb9A1vG3YTrmC2pv%2BQFG7ekUo4IIW98g3AGi%2BD%2BymCKu%2FHsRPM7wQmRQkxR96FVkk2rQKtkJL5XG6ZT0px0TArLbRXc%2FvIjwkmXkSlY14tg7iXJPRC1zSflyheZ8ydXqvR1IaUa0f%2FoVF8iSJnBYXJVTK3B8eBG3un7f5hCEdj82SfL2T0b%2BK25jouiJj%2F7%2BJ0%2B7J5U69lbsEDBXftSFcmuNPOxRJu41VGjB4fw9S3Y%2FBuOP1fXX1BV1Se3H%2B7R32YjFA19bWyzEgy7FrqrX0PMosquyuQg1OCIAxXM7LQPrVabU%2BgTgwa76kQdvpitGECZZ6bOvXmVPLPGShuH0KitdrnmXIAO33xRVCXnX7D8JlEiI75cJFrKK%2B8IVosRHQXxh6Bh%2FpqmqVywmfVJxVjaQVelNwsXIriCSNLJ1zkDlah82v7j4f59IhuWtVXdqbMdCVxVoirlj4wHJqEGA7PE45rEBYwUE%2FZWBB5YmbqhCnWYJAh5LyEgvPHx6fr%2FIO5RyHpAfY07u%2F4PtHq0GMISU9b8GOqUBWvP9x6UNI7l8op8E0l5TAkygONGwu4Q5O8nBBmMY2rFk5jmsOmdpAVgvhBLxjHUbWc5e4W4IzSRBWmlvlPLYz7K50tP2xegOcIDUD%2BCtaLcEXhaLAP06qXJX%2FLOaHrjg0kYHtVnf9Z92MBnUzifIn1Ny%2BgU7%2Fdq2K8b4bWKNWdmF8Tvokq50xb7nCZULXHBmzfIsoVTLFG9FtM6p8Bq3dqGrzjhl&X-Amz-Signature=5ff6632997170127c98554a09852205bc21aba1c6a51910a837b0114c550258f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
