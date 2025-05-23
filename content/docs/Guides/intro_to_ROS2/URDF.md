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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DV54MGY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFDvTxBKlR8bY9qH3nbmy3B%2BfBQpFYjhlUut%2FG%2FvgusSAiBIURtqI%2FCHXe3uE3OAVUaQUMKecDUKBfrbZClgm6XdEiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOsvQE3qem5IIVN3KtwDFk6dSv7bFWJn3HpT9ETlR%2FrSFVFAplOYRln1ezTEnLlxF95IB8mLJ%2BDsGqvTHS%2FhcwDML8hyAcEqK%2B5DeKJM5JTaLBToH3PK4NnhZUD3Lpw5QtxTi%2FHeNaMhobT7Kw%2Bcsm5rBhXloVkT0k7kytZP7N%2BkI64sAv1WbmZxjUoyC%2B9sSstt9yLMtZ4OO0aw8qKmvuJYj7xEdXxEmWaRE3NoFNwsLx5LT745j3yhBLkkN1P%2B%2FDcSUoZJLV7SZ8NoLA3QB14y9mm9H%2BxfeNPWuZayaepBasmZIGM5T3YjsfX0FMl%2F3%2BvA%2BMXRP0Lq7gOIC6mbFMKLl13zMQs0PWus%2B6bczrYTPzGfYS%2BzHlOW9MCiQkz5SQP%2BuYcopmopSEKVBonoKRf4QF0PhnN88WImOV%2BUSIavrfAh%2Bcz9kc7lcFJBztoavqOKO4baaY34reURz6um828tZ7qP3XNovsOxzE4TTqhJ0xFsHLkEOfqg9y2S0qWvfsGcmzbVDd%2B%2BbaCcrB8ZG77TTgoXZaeAiV9a7synhD4ivtuXcJupck8DqI8y4VJM%2BstQkDi1KEM3wCNqFUDXg2carPBkVSMIlB%2BmmrN6TBTz1p6yDOJEgRSn%2BpXmkkSC4D4qsn2sZa9CFz4wsfO%2FwQY6pgEWmU7LIaGXeHoX%2BXyELbhdOXpBbS77MLs0i37jp1Dgsjut5UG%2FGDlSZyXNHalw5K0TLMFN76l5qFL7U6XQEG71%2BnmV14nePztrrvDIxElrhCeKed1gySUku2qTTORJRWeX4nLawvDEYVs58t1WuOxLAmF6OAuo6%2BqRrA0hdmSsABuWhTEhjCKAOQ5JElWj1xMh9pLa7TvX7WEvB8CXheUEBqg3h1dE&X-Amz-Signature=b56e19a0208879a89f5d0ae5665dfbf65c9ea80dcb12a1e90d55512bd063989a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DV54MGY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFDvTxBKlR8bY9qH3nbmy3B%2BfBQpFYjhlUut%2FG%2FvgusSAiBIURtqI%2FCHXe3uE3OAVUaQUMKecDUKBfrbZClgm6XdEiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOsvQE3qem5IIVN3KtwDFk6dSv7bFWJn3HpT9ETlR%2FrSFVFAplOYRln1ezTEnLlxF95IB8mLJ%2BDsGqvTHS%2FhcwDML8hyAcEqK%2B5DeKJM5JTaLBToH3PK4NnhZUD3Lpw5QtxTi%2FHeNaMhobT7Kw%2Bcsm5rBhXloVkT0k7kytZP7N%2BkI64sAv1WbmZxjUoyC%2B9sSstt9yLMtZ4OO0aw8qKmvuJYj7xEdXxEmWaRE3NoFNwsLx5LT745j3yhBLkkN1P%2B%2FDcSUoZJLV7SZ8NoLA3QB14y9mm9H%2BxfeNPWuZayaepBasmZIGM5T3YjsfX0FMl%2F3%2BvA%2BMXRP0Lq7gOIC6mbFMKLl13zMQs0PWus%2B6bczrYTPzGfYS%2BzHlOW9MCiQkz5SQP%2BuYcopmopSEKVBonoKRf4QF0PhnN88WImOV%2BUSIavrfAh%2Bcz9kc7lcFJBztoavqOKO4baaY34reURz6um828tZ7qP3XNovsOxzE4TTqhJ0xFsHLkEOfqg9y2S0qWvfsGcmzbVDd%2B%2BbaCcrB8ZG77TTgoXZaeAiV9a7synhD4ivtuXcJupck8DqI8y4VJM%2BstQkDi1KEM3wCNqFUDXg2carPBkVSMIlB%2BmmrN6TBTz1p6yDOJEgRSn%2BpXmkkSC4D4qsn2sZa9CFz4wsfO%2FwQY6pgEWmU7LIaGXeHoX%2BXyELbhdOXpBbS77MLs0i37jp1Dgsjut5UG%2FGDlSZyXNHalw5K0TLMFN76l5qFL7U6XQEG71%2BnmV14nePztrrvDIxElrhCeKed1gySUku2qTTORJRWeX4nLawvDEYVs58t1WuOxLAmF6OAuo6%2BqRrA0hdmSsABuWhTEhjCKAOQ5JElWj1xMh9pLa7TvX7WEvB8CXheUEBqg3h1dE&X-Amz-Signature=139466eb509a565410fd5d04a6fed11210460607c80323068834ab39ed1267ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
