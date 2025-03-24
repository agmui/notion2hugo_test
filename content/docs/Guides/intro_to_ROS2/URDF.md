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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BQOKUV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmSMZfwZh5DNpIVKBKI0ya189KcCFirZs4pwPlFZDhnAiBnmsMvKk6wLieWA4VbYJCNcf2DrarZ6H4dekylH3C9WCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsCLLw1m0%2FBjAGnLKKtwDQgo5VoGDOwWkKUVFf1q4RqPFnt%2F3hTh2vhHFMB0VCXTbN3HMPWPJkOjknRlIBlYNY%2FY0FKbIqFSATOxXIsDWlbCgeCHkWTcWUAiyLw0CzRdaCwhmjO2%2BYW1hXXVent1LrQuT3d5Pu3jSVFDi5A%2BcM359GDaFocEtJsBI4y2X1I3Dzzje5JlIu%2BXGNdUXaImHX8TxSNfRe36BIvvCV8Lr0CEyZLBoxjXRclqt6skfsiRwmpwdc43HdZIS8g%2B5orSXf9hdnTXSxpPiFlPPXPwlzL2MUpdN64ulAakczoewfdhuGymnAlBOTQrZckeyQARb%2BHbMlHyKwfFFLQl6K%2Bh2r%2BA%2Ft6YyHXkNGoPUt%2B6YrjJZpqgHF5hkXqcsFsMdw1bprNeC3cEFDktNj0ljzxsolu6lfQpwQWCGw3L%2FZzbIDmRrgHRKFzfyHUdlacl9q4hN8kKV6Y%2BSh7kvw78nc3IL6zeGOnrQfLnr5TscT4tWG%2FEccM2%2FARjy4N0T6Sz%2BqLVaMwUOcDtJCXFFo6CxAuOhY2119PKP2LEPQFGSLRVkVZyH4%2FbsmgtXPV6iyCoX2FOpvkDwNLWLhWiucvlB7OMzGnoXoxC36yCu6cMTepTV8NF7eGEAWguZUqpiVwQwzp6EvwY6pgGb4KofgoCMdrBu%2FHnu8jeJwVze2B83nOoXJKS%2B%2BT7vdDm6qFaGPnZ5OPvCKn1PZyqY28dDK6aNr5cOisOJn2blWCEj14BtzPY7BNjc9ElAQGFdGdprheiO4kfntjJh10Bk6dM78VVwKlx6RSjX7tZmE1SYyhgKT85JmWZlIOwHQtVAOOZkIKMGICF%2F6egPNkv7AR2QWSKAT6kvL%2Bb8zfX%2B0qN2m3Cx&X-Amz-Signature=a75ec0a29a1c2f25aea3b50d9120ef4c9370fb5c2c144a6ba609075eed492cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BQOKUV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmSMZfwZh5DNpIVKBKI0ya189KcCFirZs4pwPlFZDhnAiBnmsMvKk6wLieWA4VbYJCNcf2DrarZ6H4dekylH3C9WCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsCLLw1m0%2FBjAGnLKKtwDQgo5VoGDOwWkKUVFf1q4RqPFnt%2F3hTh2vhHFMB0VCXTbN3HMPWPJkOjknRlIBlYNY%2FY0FKbIqFSATOxXIsDWlbCgeCHkWTcWUAiyLw0CzRdaCwhmjO2%2BYW1hXXVent1LrQuT3d5Pu3jSVFDi5A%2BcM359GDaFocEtJsBI4y2X1I3Dzzje5JlIu%2BXGNdUXaImHX8TxSNfRe36BIvvCV8Lr0CEyZLBoxjXRclqt6skfsiRwmpwdc43HdZIS8g%2B5orSXf9hdnTXSxpPiFlPPXPwlzL2MUpdN64ulAakczoewfdhuGymnAlBOTQrZckeyQARb%2BHbMlHyKwfFFLQl6K%2Bh2r%2BA%2Ft6YyHXkNGoPUt%2B6YrjJZpqgHF5hkXqcsFsMdw1bprNeC3cEFDktNj0ljzxsolu6lfQpwQWCGw3L%2FZzbIDmRrgHRKFzfyHUdlacl9q4hN8kKV6Y%2BSh7kvw78nc3IL6zeGOnrQfLnr5TscT4tWG%2FEccM2%2FARjy4N0T6Sz%2BqLVaMwUOcDtJCXFFo6CxAuOhY2119PKP2LEPQFGSLRVkVZyH4%2FbsmgtXPV6iyCoX2FOpvkDwNLWLhWiucvlB7OMzGnoXoxC36yCu6cMTepTV8NF7eGEAWguZUqpiVwQwzp6EvwY6pgGb4KofgoCMdrBu%2FHnu8jeJwVze2B83nOoXJKS%2B%2BT7vdDm6qFaGPnZ5OPvCKn1PZyqY28dDK6aNr5cOisOJn2blWCEj14BtzPY7BNjc9ElAQGFdGdprheiO4kfntjJh10Bk6dM78VVwKlx6RSjX7tZmE1SYyhgKT85JmWZlIOwHQtVAOOZkIKMGICF%2F6egPNkv7AR2QWSKAT6kvL%2Bb8zfX%2B0qN2m3Cx&X-Amz-Signature=0077b989fe67b9289ac083b558a6c2d7afa911969a04e327800b12476aaaccb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
