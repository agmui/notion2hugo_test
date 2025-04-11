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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYKJIJ5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDsVhJ0TGm4QiPT5d7Trs7o8D0UrYKZZctodDZ6AXFm%2FgIgS0RtmWp45FdTxHsV9hPDln3yCyttJWbikNyanbYczWYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCXRvfIw%2Bj7q%2BDkWircAzcOAebrmg9AZvF3BiMah59VDERe3YnS03pMQjJqHlLdNtiG9eyhOBAQsL9avMpiAnw5lSI7TA6aOCy1ywDiMTTrHYt5kPoz8HIEbrt%2FPSxmnhlJu5gOvw%2FUEOeDkWSPjKDj7bZz8oRQf2MRL%2Bwx4kVQ0JqauNKFQ2fzLKrkYeqnIx%2BGmw%2BasmIDTxHASa%2FnKOiVY%2FOVDEeAO64bLPZOiHmPvyFdD3TamvMcL945Dg57qw3NeVwm1PtGZ2a6s9c12lCE7q5YzcPb3ZxzvfZvD78CSnc4ZTz%2FkjZTOr2dWrvEMYRrX2h46kgxCSP%2B7cRgtm3QLCC663g7f7rlWscMSDJtr3m7fviCQHsS%2FEq9oXn2ZzUbW7Qd6kNYD5QcESrrizMLUs5ucvLqjk7WTT%2F8%2BHFQ5n8FAVdC%2BgifSkVdkxKCJLVF8UX3OnHDJZ9ndXXPFMWBsSLzHF0BJCg3sJXmA1c0LQzZQvTMw70w3j0I33Eg5qFUa2xeBvzK1McFTkkrK%2Be6Ww9IFHkh9WcONIUElQyjWzxJgkyPkiDYlx8MuWt29t%2BSDjhDeorhSmdxb1L98hrV9CmiPtayiaPNSie2b0deZBTUPxdUVkMmxXvwJ%2FlZSskdNj4VECRpjOoUMIWz478GOqUBeIqiMvV6IkoOoYp5te4fq8AQwzDrb01mk8P%2Fg1uA5XJ42T%2FZ%2BrJMUlXJsJs48RIuFimQW%2FCK2Y1IXMZ5HZvV3fgyaNQhifa8vZP9E0fmFyE%2B5RKZr%2BTbi8AO00%2FQ6G5Bq987WJxALf6bVvwOwzc83I8iZDrYdkwV7btrxJZPPmYD%2Fa2dwSDQ%2FAVMzD%2BOC1Zcmt0tzA%2FwHlHlGjOxxBpRI2uYZx5I&X-Amz-Signature=a942cec616907382a360061bee1059d0146171d8c7e8ab0c0973e02dd53469a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYKJIJ5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDsVhJ0TGm4QiPT5d7Trs7o8D0UrYKZZctodDZ6AXFm%2FgIgS0RtmWp45FdTxHsV9hPDln3yCyttJWbikNyanbYczWYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCXRvfIw%2Bj7q%2BDkWircAzcOAebrmg9AZvF3BiMah59VDERe3YnS03pMQjJqHlLdNtiG9eyhOBAQsL9avMpiAnw5lSI7TA6aOCy1ywDiMTTrHYt5kPoz8HIEbrt%2FPSxmnhlJu5gOvw%2FUEOeDkWSPjKDj7bZz8oRQf2MRL%2Bwx4kVQ0JqauNKFQ2fzLKrkYeqnIx%2BGmw%2BasmIDTxHASa%2FnKOiVY%2FOVDEeAO64bLPZOiHmPvyFdD3TamvMcL945Dg57qw3NeVwm1PtGZ2a6s9c12lCE7q5YzcPb3ZxzvfZvD78CSnc4ZTz%2FkjZTOr2dWrvEMYRrX2h46kgxCSP%2B7cRgtm3QLCC663g7f7rlWscMSDJtr3m7fviCQHsS%2FEq9oXn2ZzUbW7Qd6kNYD5QcESrrizMLUs5ucvLqjk7WTT%2F8%2BHFQ5n8FAVdC%2BgifSkVdkxKCJLVF8UX3OnHDJZ9ndXXPFMWBsSLzHF0BJCg3sJXmA1c0LQzZQvTMw70w3j0I33Eg5qFUa2xeBvzK1McFTkkrK%2Be6Ww9IFHkh9WcONIUElQyjWzxJgkyPkiDYlx8MuWt29t%2BSDjhDeorhSmdxb1L98hrV9CmiPtayiaPNSie2b0deZBTUPxdUVkMmxXvwJ%2FlZSskdNj4VECRpjOoUMIWz478GOqUBeIqiMvV6IkoOoYp5te4fq8AQwzDrb01mk8P%2Fg1uA5XJ42T%2FZ%2BrJMUlXJsJs48RIuFimQW%2FCK2Y1IXMZ5HZvV3fgyaNQhifa8vZP9E0fmFyE%2B5RKZr%2BTbi8AO00%2FQ6G5Bq987WJxALf6bVvwOwzc83I8iZDrYdkwV7btrxJZPPmYD%2Fa2dwSDQ%2FAVMzD%2BOC1Zcmt0tzA%2FwHlHlGjOxxBpRI2uYZx5I&X-Amz-Signature=b871a324dbdf59b161b97bc84fa4e428c32dd4696e8894d9e920d2ed4096d5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
