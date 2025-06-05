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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGXRYJF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDLubyF3aA1cEKEgrZ7PQgi1%2BOM4Ay25s%2BL2y9HX3NKdgIhAJBzibhngLaucgtiZf%2FR2LQfrj1NkikFxcmjaybO01zeKv8DCEwQABoMNjM3NDIzMTgzODA1IgxYG%2BZYrhLeklSfJY4q3AOPYlamsmp%2FNWUYr9LeD2Fr3jP3Hz63GRNPlzm636OIzzEJ9TuzAKS6BarukPMH0nCfhSxoM9RpUIAjta6P2mvTO6Kn7c4klm1Fr4FiJGubZWVxapcQjTU5HWd24bHP5TzJq18f7%2BDkf7qXTDMndlVFP2Wb6rqTPOKuLtswWNJFVj7GE2TrIjJBCLEiF14nw2%2BBE5TkoApu%2FeJ2h3ehWMte7OMBmk4BMTEeFJ9dGd5twHsOsA4oOgZ8i9uBfM0EgcrU90LAWiaI2yWDEpi4zlD0R24q6jiMMyRGiV%2B2i%2FnLiSK8Ftwg%2B6P5DZMzb5O0KVpMkrRc9DRAQa%2F3R6NiLVCjWB0AcFPmcVBs6MYhvzoKjHHnLB85U32ANfBNh6CR8J015qxlyDA%2BC2jooIK11gOHc%2FupwV8rKxFii2WP4iM7V9npYsCeWh8eGKH56kcPkP6W76cFrgF%2FuveS9jTWBkYljvAKKfY4CJx5f9EDve9MyAwcraE715aGhIo41b%2FDz6DYhbefDKoyuVNZzX5YA%2FupBKNXdcESBRo7jSAQwoo1R51MPduEyfzJtF3yxu6OJWiKywIzjUV91fa34Wyoehc9%2BlFMPAG5ii0lH0Hp1BiKY%2FGbugZ9S4hiatxjuTDA2IfCBjqkAT%2BLFiwF3eLHMZEDDWygL1K2v1pKZrux7Z8RIKRTngAgno1Pe12eMpQKMmINtxF5FGgh%2BvsYOaNFhPhP4OOnDzLV2%2B5UIXvxFCVrQZpJG2%2Ff3To5Ke%2B4lSzdKlwFfCkBzOWNryx6pbto54imhUC1E64T0ya8KC2%2BvksMIxDbJHcGej4xbR1i4F23J54QsJZrxAX%2FKSO1953TmA%2F7PGA2KfCgmcNm&X-Amz-Signature=7f3a638bbcaa98c3ad06f3233e97d5b2f36efde6790792702518ecfc43ecf6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGXRYJF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDLubyF3aA1cEKEgrZ7PQgi1%2BOM4Ay25s%2BL2y9HX3NKdgIhAJBzibhngLaucgtiZf%2FR2LQfrj1NkikFxcmjaybO01zeKv8DCEwQABoMNjM3NDIzMTgzODA1IgxYG%2BZYrhLeklSfJY4q3AOPYlamsmp%2FNWUYr9LeD2Fr3jP3Hz63GRNPlzm636OIzzEJ9TuzAKS6BarukPMH0nCfhSxoM9RpUIAjta6P2mvTO6Kn7c4klm1Fr4FiJGubZWVxapcQjTU5HWd24bHP5TzJq18f7%2BDkf7qXTDMndlVFP2Wb6rqTPOKuLtswWNJFVj7GE2TrIjJBCLEiF14nw2%2BBE5TkoApu%2FeJ2h3ehWMte7OMBmk4BMTEeFJ9dGd5twHsOsA4oOgZ8i9uBfM0EgcrU90LAWiaI2yWDEpi4zlD0R24q6jiMMyRGiV%2B2i%2FnLiSK8Ftwg%2B6P5DZMzb5O0KVpMkrRc9DRAQa%2F3R6NiLVCjWB0AcFPmcVBs6MYhvzoKjHHnLB85U32ANfBNh6CR8J015qxlyDA%2BC2jooIK11gOHc%2FupwV8rKxFii2WP4iM7V9npYsCeWh8eGKH56kcPkP6W76cFrgF%2FuveS9jTWBkYljvAKKfY4CJx5f9EDve9MyAwcraE715aGhIo41b%2FDz6DYhbefDKoyuVNZzX5YA%2FupBKNXdcESBRo7jSAQwoo1R51MPduEyfzJtF3yxu6OJWiKywIzjUV91fa34Wyoehc9%2BlFMPAG5ii0lH0Hp1BiKY%2FGbugZ9S4hiatxjuTDA2IfCBjqkAT%2BLFiwF3eLHMZEDDWygL1K2v1pKZrux7Z8RIKRTngAgno1Pe12eMpQKMmINtxF5FGgh%2BvsYOaNFhPhP4OOnDzLV2%2B5UIXvxFCVrQZpJG2%2Ff3To5Ke%2B4lSzdKlwFfCkBzOWNryx6pbto54imhUC1E64T0ya8KC2%2BvksMIxDbJHcGej4xbR1i4F23J54QsJZrxAX%2FKSO1953TmA%2F7PGA2KfCgmcNm&X-Amz-Signature=75f762e2c68bc07bbd6fe5936ba52e4a937c2d2f8cc088f6635b64d09ae4031c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
