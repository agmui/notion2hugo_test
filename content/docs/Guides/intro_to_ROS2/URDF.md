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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSDISJK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxrKcfMIRcNH%2BOCPoXPxb5c7M0DRJO%2FNZOwQPGoPxbwIge6%2FWllAPpmHjMUDN%2Fw%2Fa5TkH2Ke3Yp%2BGj%2FrL7WteXgoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHOG9WCa1p2D%2B2FoyrcA7%2Bhg8Z9xbgteX0zaPJzQeFnkffBwEdq5IrWAhUrVE7OwBrxhtZwhsTZ%2FlzQgHADIMDSzSmU%2B8iLO0J9RqZ6E9FH38iZrJfnKTgJ%2Fk0r4BkFc9KEUsHF0v38fwX9trS6OPM7jeOB%2BryXUcD7bTAc07DF6y4NUHbWG9I8DzkHxOcAs%2BzrwG1KSuUeEW6lLRCdCgY76K%2BwGb8xcOIP4uclDgZFSVPaf4UJmxVIPlLQNHRQy9Dg%2FxE5m61uPUQl7LD9O59QESVRKmVF8s6jYff%2FGOVV3SxpMfH%2B4wve%2FrghbKUP9wNuSstRP17N7biLUqoX6aIng60y7UNVv9nSG8ut0Z3wGmuF7tkhrGk%2FqoA6fCzIytBX4%2BnHkijYfHIUrExFiXdCVVT0Ug7H7PeW1G%2FxWVTJMt79%2F0cPgN3gZfWSLDI6KA1SI2GT7YMmIyT2ZyV2YTXx%2BZ%2FSYNjvyqo1hxIWl2cnsv8iuWfLXdQ757DZJlsuCpe%2BgFPaJR0%2FRw5KU4o4zi0Xso48rwdwbLxtMXpCWolG1zttqmyBsjis9CQ11xagjcZwMrY6p4vRbIr1yB%2BumjOWnw2GJavJqejVFnuU3Dk0GKFO2ezO8Z9APeWkGyRdL6SrPnpYinkYkqxoMJzfn8IGOqUBgnj1uxGHXsw9eIe84jCgZrFoRJDt%2FMj01sWgwah6MaHyn1TMqVczII0q9wLWT1qXwAEE%2BxD%2FYq1pzGagJGEQtwz28TpvNBKsOw%2FyRhBLJlRbDNfV1Gdihkj3lzmbuvOnRn3rq2rHJsGxSDHk1m2TAL3n0mP3ZvMbtjb3ASD%2BMwcE7HPNYKnySd%2FGkRtGvoQsifFfP5TTU5MhJsPmG4w%2Bb%2BULsInY&X-Amz-Signature=f672665aec56456d541c9a36b078d2d73e9b10082791a99bb624ede3e23cedb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSDISJK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxrKcfMIRcNH%2BOCPoXPxb5c7M0DRJO%2FNZOwQPGoPxbwIge6%2FWllAPpmHjMUDN%2Fw%2Fa5TkH2Ke3Yp%2BGj%2FrL7WteXgoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHOG9WCa1p2D%2B2FoyrcA7%2Bhg8Z9xbgteX0zaPJzQeFnkffBwEdq5IrWAhUrVE7OwBrxhtZwhsTZ%2FlzQgHADIMDSzSmU%2B8iLO0J9RqZ6E9FH38iZrJfnKTgJ%2Fk0r4BkFc9KEUsHF0v38fwX9trS6OPM7jeOB%2BryXUcD7bTAc07DF6y4NUHbWG9I8DzkHxOcAs%2BzrwG1KSuUeEW6lLRCdCgY76K%2BwGb8xcOIP4uclDgZFSVPaf4UJmxVIPlLQNHRQy9Dg%2FxE5m61uPUQl7LD9O59QESVRKmVF8s6jYff%2FGOVV3SxpMfH%2B4wve%2FrghbKUP9wNuSstRP17N7biLUqoX6aIng60y7UNVv9nSG8ut0Z3wGmuF7tkhrGk%2FqoA6fCzIytBX4%2BnHkijYfHIUrExFiXdCVVT0Ug7H7PeW1G%2FxWVTJMt79%2F0cPgN3gZfWSLDI6KA1SI2GT7YMmIyT2ZyV2YTXx%2BZ%2FSYNjvyqo1hxIWl2cnsv8iuWfLXdQ757DZJlsuCpe%2BgFPaJR0%2FRw5KU4o4zi0Xso48rwdwbLxtMXpCWolG1zttqmyBsjis9CQ11xagjcZwMrY6p4vRbIr1yB%2BumjOWnw2GJavJqejVFnuU3Dk0GKFO2ezO8Z9APeWkGyRdL6SrPnpYinkYkqxoMJzfn8IGOqUBgnj1uxGHXsw9eIe84jCgZrFoRJDt%2FMj01sWgwah6MaHyn1TMqVczII0q9wLWT1qXwAEE%2BxD%2FYq1pzGagJGEQtwz28TpvNBKsOw%2FyRhBLJlRbDNfV1Gdihkj3lzmbuvOnRn3rq2rHJsGxSDHk1m2TAL3n0mP3ZvMbtjb3ASD%2BMwcE7HPNYKnySd%2FGkRtGvoQsifFfP5TTU5MhJsPmG4w%2Bb%2BULsInY&X-Amz-Signature=0269c34209391e8863318acef071538d0c07e0275c5dffd12da8aa5aaca25271&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
