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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DSSLYH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4GLyAg%2Fr3BpO74JQDiUczLhVWLAHy0ruAn%2BUCTBYYhAiA6i7spjzFwvW1I6Jo0rASa0ki2MGfosQe0EHruxSihJiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6irmSP5KdrM5HnFKtwDipbrxbCVpq7Az%2FfGOT23cpDPuqPBIFrYbKE7ULueK39DDCVHPnzqpzMojq3iddMYjqBdQzyO4mee6HGB9ssmcvqFLQVADLpJLOdy75OVGrSYtQDQWbzARxmrsHY6VZQoPIqObvEAHaP6d11mvtSLIKTyJR5zXdQtg%2Fc4sIibWcWsrsv6IInRjKE77B1Et6YAcMhkL6CSbkrQ3L4jUB32cqiw4BQYwJSSjx1X78XRYgMFsrr1pG%2BA5WmYlRxTo2Baf40ifDXyYnq4ZZUar2kQuQFpc%2FNWKMjFR8TtflargBbDGk3MIv5tP7nd4qEBeInoKv63q75aQdjHOz%2B%2B%2B9cbkZz%2BjC%2Bc2df3dtCc1KHXii6pvnzZCGWWCU0%2BGY3pnlXAO8kzgdEbHzXCeBqOb6PBjoC29Z4Cqlj%2FtjP%2BoyggCoYY3UoosjeYmLx5n4CoCciA2oiuvzXWtDpWLn3BWgkD%2BHsxnTw6cp0H22ArQ5eIT%2F%2BhlI%2BKPaojy30gSE3rgqePFPj8dPBdyvXUk3aXC5ng8gBfOZIcGNDu0gEJG63PZRCyXNoz9LYOpE00kljfVrsJctOkiDgnVlNTqeaJZGD5PP8c42oogixoqshLVrQ9vvwAsFnbJ3yjbB2nZJMwhtnuvAY6pgHqIQDH8jzRTuCuBRI%2BcYmeqCY69oq%2ByYuMDN1oWRORV7Lo13DhDUcbmF0EhQGof6owh6To8y3Wx9Ue88%2Bqsp%2BToQmSFxuJbyCLAhu8FeRp9eG%2B25YcAdOWEa%2FKJYLO8sWMLhaiufoqSgTniuK1BE5%2F7gPw%2BxtQvfD4dTQJ9QIG4zSE8RaQXLDAYLNpIRFq1uY5NOx7S%2FQ7RPfNXZaPmN9y%2B%2FzaVE1Y&X-Amz-Signature=b8771d97ca0de8577c1d17747b127abf67992b014c709bc3d9eaa8f2845681d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DSSLYH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4GLyAg%2Fr3BpO74JQDiUczLhVWLAHy0ruAn%2BUCTBYYhAiA6i7spjzFwvW1I6Jo0rASa0ki2MGfosQe0EHruxSihJiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6irmSP5KdrM5HnFKtwDipbrxbCVpq7Az%2FfGOT23cpDPuqPBIFrYbKE7ULueK39DDCVHPnzqpzMojq3iddMYjqBdQzyO4mee6HGB9ssmcvqFLQVADLpJLOdy75OVGrSYtQDQWbzARxmrsHY6VZQoPIqObvEAHaP6d11mvtSLIKTyJR5zXdQtg%2Fc4sIibWcWsrsv6IInRjKE77B1Et6YAcMhkL6CSbkrQ3L4jUB32cqiw4BQYwJSSjx1X78XRYgMFsrr1pG%2BA5WmYlRxTo2Baf40ifDXyYnq4ZZUar2kQuQFpc%2FNWKMjFR8TtflargBbDGk3MIv5tP7nd4qEBeInoKv63q75aQdjHOz%2B%2B%2B9cbkZz%2BjC%2Bc2df3dtCc1KHXii6pvnzZCGWWCU0%2BGY3pnlXAO8kzgdEbHzXCeBqOb6PBjoC29Z4Cqlj%2FtjP%2BoyggCoYY3UoosjeYmLx5n4CoCciA2oiuvzXWtDpWLn3BWgkD%2BHsxnTw6cp0H22ArQ5eIT%2F%2BhlI%2BKPaojy30gSE3rgqePFPj8dPBdyvXUk3aXC5ng8gBfOZIcGNDu0gEJG63PZRCyXNoz9LYOpE00kljfVrsJctOkiDgnVlNTqeaJZGD5PP8c42oogixoqshLVrQ9vvwAsFnbJ3yjbB2nZJMwhtnuvAY6pgHqIQDH8jzRTuCuBRI%2BcYmeqCY69oq%2ByYuMDN1oWRORV7Lo13DhDUcbmF0EhQGof6owh6To8y3Wx9Ue88%2Bqsp%2BToQmSFxuJbyCLAhu8FeRp9eG%2B25YcAdOWEa%2FKJYLO8sWMLhaiufoqSgTniuK1BE5%2F7gPw%2BxtQvfD4dTQJ9QIG4zSE8RaQXLDAYLNpIRFq1uY5NOx7S%2FQ7RPfNXZaPmN9y%2B%2FzaVE1Y&X-Amz-Signature=130b3c2fe0f5219fdd96ed222ef54c24834835d234af6cd4b3fa47e2032d214e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
