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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPEE4JR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1RrXMxPdo62HT0YQ%2BZldtQEiksZCKSL6%2BWssO7foKFAiB1TtXhhyUfJtk%2BQ7jHrbz%2BXAkugd2pNPLCbwciqfMFwCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2jZTlx5UukEwBsAAKtwD%2BJqBG%2Bvt9FkjkuCOTYAOwL5RClb4MKnAhwvP0iCxsP%2FXGlJ2TmA%2FQkVggrJC%2BeJcsUEn3t9t1pY7RrqFtAwTCwdhIeFyVYVp8x8eqk%2BbGKpMN3D3tVO4MLKanL9aHzA0ynM8DegTbgRJ11XwWoj7VyiQsgLs%2BQ6O5aTeOhTSkY7GKSN1LY%2Bx5c7BxWIt8UMg1qMq%2BPqvxFqKD08c7FGc%2FDAUXskGr%2FRCMsPRPGmhwIJ5pw8nPybz%2Ffaq9spS3Iz6xFLobioC2CmD%2FWVzyuedVYvVJooUBQNhqTBlA0uJqtzI0Q1J5Mlx1jPsW05z98KEaqWgZx1NbQ0SzfNj21tTTJqse25W3S8oZuWKR04jvi8neNIGRLvPvNRnGENX7%2FnsRT%2BBA%2FxoAgAf1gvMb6xk59dKlneGgbiAIw912WSRxsxtGk%2BQs%2FkAbCtUxXG22x5cYw2Fbh8KWh%2B1HdPFPexG%2BHBE1sF%2FEa3Qevp9Cg%2BeV7qSDGwq5ROQn89IOxp42XRJ0brFhRPLAM2Tvn2%2BtKnPAZjq8T0WPmt42k5pQscrVyq%2BESIfFdkATpce2oXfHKXoTDWGMpGZyQp%2F9rvYl2QYJt1HH%2FGijLitTcXQSXZxM0JXF%2FpJA3qxVZrLnSUw5Ji6wwY6pgGKi%2FwgVCx4pzXxaB3O%2B10ub3e5aBZdr5oPefwLIG1%2BDo4YlOseAsD74CSZUXagT7kbFaZIbKvocO7Gyq90YSnMGb3pTrxsjAbb0j6vrGaOnXr4Lhu7Ir9q9S1dOUGhFC9Lrg8Xv9kXCV1WsP5EExMYKqGkgxZCTagS7qDNpHk6p5UbmLo%2Bqkj8oWKHIzDB3EYz9FIDc%2FT%2FSsJbNdj2GF%2FtGoaU0UkX&X-Amz-Signature=90da71ed49c0be8a9b964452ab6caf28c9cece670088bf956ad0c5ea38b5499c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPEE4JR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1RrXMxPdo62HT0YQ%2BZldtQEiksZCKSL6%2BWssO7foKFAiB1TtXhhyUfJtk%2BQ7jHrbz%2BXAkugd2pNPLCbwciqfMFwCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2jZTlx5UukEwBsAAKtwD%2BJqBG%2Bvt9FkjkuCOTYAOwL5RClb4MKnAhwvP0iCxsP%2FXGlJ2TmA%2FQkVggrJC%2BeJcsUEn3t9t1pY7RrqFtAwTCwdhIeFyVYVp8x8eqk%2BbGKpMN3D3tVO4MLKanL9aHzA0ynM8DegTbgRJ11XwWoj7VyiQsgLs%2BQ6O5aTeOhTSkY7GKSN1LY%2Bx5c7BxWIt8UMg1qMq%2BPqvxFqKD08c7FGc%2FDAUXskGr%2FRCMsPRPGmhwIJ5pw8nPybz%2Ffaq9spS3Iz6xFLobioC2CmD%2FWVzyuedVYvVJooUBQNhqTBlA0uJqtzI0Q1J5Mlx1jPsW05z98KEaqWgZx1NbQ0SzfNj21tTTJqse25W3S8oZuWKR04jvi8neNIGRLvPvNRnGENX7%2FnsRT%2BBA%2FxoAgAf1gvMb6xk59dKlneGgbiAIw912WSRxsxtGk%2BQs%2FkAbCtUxXG22x5cYw2Fbh8KWh%2B1HdPFPexG%2BHBE1sF%2FEa3Qevp9Cg%2BeV7qSDGwq5ROQn89IOxp42XRJ0brFhRPLAM2Tvn2%2BtKnPAZjq8T0WPmt42k5pQscrVyq%2BESIfFdkATpce2oXfHKXoTDWGMpGZyQp%2F9rvYl2QYJt1HH%2FGijLitTcXQSXZxM0JXF%2FpJA3qxVZrLnSUw5Ji6wwY6pgGKi%2FwgVCx4pzXxaB3O%2B10ub3e5aBZdr5oPefwLIG1%2BDo4YlOseAsD74CSZUXagT7kbFaZIbKvocO7Gyq90YSnMGb3pTrxsjAbb0j6vrGaOnXr4Lhu7Ir9q9S1dOUGhFC9Lrg8Xv9kXCV1WsP5EExMYKqGkgxZCTagS7qDNpHk6p5UbmLo%2Bqkj8oWKHIzDB3EYz9FIDc%2FT%2FSsJbNdj2GF%2FtGoaU0UkX&X-Amz-Signature=c1aad27b769e1f1a1d0cb30acada0db5b316588063440dff90b232ac4f6214d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
