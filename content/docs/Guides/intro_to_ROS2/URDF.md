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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEN535H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyI17tjOBMoWtcsU8ThC8H2SbXrKqhK8fTJWPto9f1RQIhAIsA66%2Frgmthn1H9MM1kxOHOBaruVC%2BbaxhN9WlGzri%2BKv8DCDEQABoMNjM3NDIzMTgzODA1Igwl542TttEl3y9Wd0gq3ANVDkLCYZVxFvuFlGtvr%2BKOFF7NDTuPVG21LqWIWuGt3ipfTk4WMTvKZ0wnz96Q0rFSEIq%2BVsWpSer9Tg85KuXnDDSSTMAB4p%2BquKV25sB0xOyf%2BkA1VHMOp9pE7qfK%2FbEWK2XvXmO9Ojd8yk6tA3syxLmExongQdLnVLDPmcPul%2B9GKgXOeVerrNM1qnKoqSR%2FrPlFciUxL6qeWF0Hy3MAjRXRcwqgQG7jFSVsDDlCMg7P8kKSyDdtZZ2Xshrxbw%2B8pT0ONiBdUkjLW5OkpgvPknQAKN9YHfBKEkySJQF02vpLrWyhrCiYc8UiaSzkFSCxNHoqkmX86p%2FLZV%2BLpsMchsdnuEff%2FyLftvCo0QmZk%2BceSqhN%2FCvAhMqAS4K9mG7yTcRM%2Bd86pjJds%2Fly8ERCoe%2F3yDlskAAXoz1VPw%2BVZ2nm0wV0zWoyhB14ZZhEx%2FEYIlGnTbrqFtSFCJeUf6UWWUM425K05AATb87TS%2BQzq4PIxMPZZzmHBDdCHN1ChqJYllKPkn1Roq4weCMWFWsZHhpLwnoLC2Ta6qubWpZhvLVZANn6E2MpgNuFYGQLEWZnmCWr2XNdjZFP8ddcsWfGkmSjTEcBmU5tOGhah1XMD9%2BIcmfFRcu8xpZytDDco8W%2FBjqkAUtFjoBvYRCEeAJSXEp%2FL3TktMMicchUDGLOL%2BJ1cFLeYs1CagjW6wSlF3KJB%2B6vWJDMYfAp47GVZYghMoOZ4SW%2FM%2Bib4OY7XE63QOsjCHSFIAMs4Yrywn7HqBsd0KoRTXs%2FZXuj2qTUKkCQGhuwD1I8yOqn5OnjnVsSOVPeDOOFYMwQV72F4Wo%2FnEfGEq66m%2Fa3eRd7%2FlauGR58rClEHUUcA5pl&X-Amz-Signature=8e0ea177e3849cdf002bab04479156c67b170a6079dfb7ec53dd47839c5b2d07&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEN535H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyI17tjOBMoWtcsU8ThC8H2SbXrKqhK8fTJWPto9f1RQIhAIsA66%2Frgmthn1H9MM1kxOHOBaruVC%2BbaxhN9WlGzri%2BKv8DCDEQABoMNjM3NDIzMTgzODA1Igwl542TttEl3y9Wd0gq3ANVDkLCYZVxFvuFlGtvr%2BKOFF7NDTuPVG21LqWIWuGt3ipfTk4WMTvKZ0wnz96Q0rFSEIq%2BVsWpSer9Tg85KuXnDDSSTMAB4p%2BquKV25sB0xOyf%2BkA1VHMOp9pE7qfK%2FbEWK2XvXmO9Ojd8yk6tA3syxLmExongQdLnVLDPmcPul%2B9GKgXOeVerrNM1qnKoqSR%2FrPlFciUxL6qeWF0Hy3MAjRXRcwqgQG7jFSVsDDlCMg7P8kKSyDdtZZ2Xshrxbw%2B8pT0ONiBdUkjLW5OkpgvPknQAKN9YHfBKEkySJQF02vpLrWyhrCiYc8UiaSzkFSCxNHoqkmX86p%2FLZV%2BLpsMchsdnuEff%2FyLftvCo0QmZk%2BceSqhN%2FCvAhMqAS4K9mG7yTcRM%2Bd86pjJds%2Fly8ERCoe%2F3yDlskAAXoz1VPw%2BVZ2nm0wV0zWoyhB14ZZhEx%2FEYIlGnTbrqFtSFCJeUf6UWWUM425K05AATb87TS%2BQzq4PIxMPZZzmHBDdCHN1ChqJYllKPkn1Roq4weCMWFWsZHhpLwnoLC2Ta6qubWpZhvLVZANn6E2MpgNuFYGQLEWZnmCWr2XNdjZFP8ddcsWfGkmSjTEcBmU5tOGhah1XMD9%2BIcmfFRcu8xpZytDDco8W%2FBjqkAUtFjoBvYRCEeAJSXEp%2FL3TktMMicchUDGLOL%2BJ1cFLeYs1CagjW6wSlF3KJB%2B6vWJDMYfAp47GVZYghMoOZ4SW%2FM%2Bib4OY7XE63QOsjCHSFIAMs4Yrywn7HqBsd0KoRTXs%2FZXuj2qTUKkCQGhuwD1I8yOqn5OnjnVsSOVPeDOOFYMwQV72F4Wo%2FnEfGEq66m%2Fa3eRd7%2FlauGR58rClEHUUcA5pl&X-Amz-Signature=3f06e47ebb4bef679155cda278f71cd985503d99315a1863094f30f17b0362f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
