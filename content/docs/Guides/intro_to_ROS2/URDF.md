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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYXNBCW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFd9XtmAUAZGQrMcWcFxOUfMnLBKu1Tkqry1b3naq7tSAiBTiLgU3vB5T%2Fh91ZueOV6NCHYpl7Z3uEqHQkc8nWPGSyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9VAKmqGabjSsoIdKtwDteC6uGVToseUlq1yopFTARI%2Fhha0jBqrAUws1Zo2n1FsYFD1EvtkhTlVjsEygbYiojMn5arX0qjX4gQ6VC6AsdY%2B3bWK5NpDgLUrhyB%2FLqPDkB7fzvKTzOixg1uOVoQDQEl7T06CX2%2BWRDjHpBmpzzaomgJCK0ut6lPdXbknH8BdbRwUNJ7golHwET36Zu5eG4nhGlvQJbcAZ7Gi5WRUqe9wHIohBiU6zx8RGwjz%2BiBiehY5pb7OKogIhJWCrHTXrJgtYCOvOTHIKvoCafBpppu1iHWezy1FTEmgMtaM2K%2BJ%2FsLYWCJZfwevdb8rFjqmz9%2BFQ2i%2Br%2F%2BoQKoUZSmjwnrm2RieH9Dfwveq%2F%2BkbHu5t9y6SHK6cPsfJJurpLYCA7HEtQlfeB7wyHYuDVOlId3g3%2Bj8SEBi%2B0QQULHtImoKWFz77EOaIMjdFUqxS8VrXR22jLULgKl8RhVn6GmVYoB3HvGtPXyDO3Rq5F3%2FS%2F92EXJwGM4xtUPiuHey5Owy5Ogto9CCqR0WsCNT%2F7HNdInA0DeYLbMQsDQh0imIVMD6vkIlcJJ9aU0JlStltkpKu%2Bdt0KMMrB0190G3zfoXSpWymGaYOVspGiNicNj3Slmx867DCS1bNL5iENVkwvvravwY6pgHhe9WnJAl3MG9ncLiyf%2BW%2FMUzxvBegdY3aUn%2FSUrmPIeQSuShYrw10Go06ykPpGrFIIJBy4TvnCuhLCbAZf8D8aU3nyLtgEpgWv9S1w6jetFkhiD9awL4qxrIRfI5Mn%2BUXaViIEW37IY2RKA3eTZZhKAK%2BJqjAm9Udw0VU%2BFR6m%2B3gJFSrB14q54fUy9N7biJ93X96G5bxB6Il9FW7all6%2BIsnbkRH&X-Amz-Signature=d611fc5da05d3d355205f485b7125602543094fc491c21342d35182bdbae201a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYXNBCW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFd9XtmAUAZGQrMcWcFxOUfMnLBKu1Tkqry1b3naq7tSAiBTiLgU3vB5T%2Fh91ZueOV6NCHYpl7Z3uEqHQkc8nWPGSyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn9VAKmqGabjSsoIdKtwDteC6uGVToseUlq1yopFTARI%2Fhha0jBqrAUws1Zo2n1FsYFD1EvtkhTlVjsEygbYiojMn5arX0qjX4gQ6VC6AsdY%2B3bWK5NpDgLUrhyB%2FLqPDkB7fzvKTzOixg1uOVoQDQEl7T06CX2%2BWRDjHpBmpzzaomgJCK0ut6lPdXbknH8BdbRwUNJ7golHwET36Zu5eG4nhGlvQJbcAZ7Gi5WRUqe9wHIohBiU6zx8RGwjz%2BiBiehY5pb7OKogIhJWCrHTXrJgtYCOvOTHIKvoCafBpppu1iHWezy1FTEmgMtaM2K%2BJ%2FsLYWCJZfwevdb8rFjqmz9%2BFQ2i%2Br%2F%2BoQKoUZSmjwnrm2RieH9Dfwveq%2F%2BkbHu5t9y6SHK6cPsfJJurpLYCA7HEtQlfeB7wyHYuDVOlId3g3%2Bj8SEBi%2B0QQULHtImoKWFz77EOaIMjdFUqxS8VrXR22jLULgKl8RhVn6GmVYoB3HvGtPXyDO3Rq5F3%2FS%2F92EXJwGM4xtUPiuHey5Owy5Ogto9CCqR0WsCNT%2F7HNdInA0DeYLbMQsDQh0imIVMD6vkIlcJJ9aU0JlStltkpKu%2Bdt0KMMrB0190G3zfoXSpWymGaYOVspGiNicNj3Slmx867DCS1bNL5iENVkwvvravwY6pgHhe9WnJAl3MG9ncLiyf%2BW%2FMUzxvBegdY3aUn%2FSUrmPIeQSuShYrw10Go06ykPpGrFIIJBy4TvnCuhLCbAZf8D8aU3nyLtgEpgWv9S1w6jetFkhiD9awL4qxrIRfI5Mn%2BUXaViIEW37IY2RKA3eTZZhKAK%2BJqjAm9Udw0VU%2BFR6m%2B3gJFSrB14q54fUy9N7biJ93X96G5bxB6Il9FW7all6%2BIsnbkRH&X-Amz-Signature=0fa42bf1c4dc82f9c2394fdd7fe4196ef35b990e904d5488483851a0599efc25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
