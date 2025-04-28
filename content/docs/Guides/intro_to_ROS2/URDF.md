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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7G3JNFS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESR%2FnpvEEw8cLwenryBZp%2By0AjfW318AZYLBuwvH0jwIgeybeqJQPT8Yot%2FcSV2DgbrmkOvQIra2Kag%2B3jOlcEiEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK8Wa0yxADuAFayIaCrcA96HVVBysr%2FEXNXAUXMP2eeT3cPi3CbLERSD%2BCjgH509H9Xx64tXQj%2F%2BBTutPpM%2FWsqpbOBU0CJTfK7NssxQWj3OlkkEf4cvPMACY1fWF4keHQS42RzrY8I8T%2BT42x4rAJFYfYwExDzqiGZcMbobaCp%2FHICqkITPVBewLswdZXW7fyc59%2BE%2FS6Af4n7M3KJjiRMp47rB6CwaaCrPvVS5AqPMFqjw96kb0phIXCGVkRo3N0UdHDQheIH0SghZ0kx7TCJLC3xSlM929aT1DtBc5hS8o%2BXvyW7%2FwL7kytbGe%2F13O944FsaW4JOZmf5ULvFCqYT6s7QJKBqfFx3ZkKwY4kNFsYBn0zcFu0xEsm2r7EdQFScqrF%2BdAavfhexEy9eK8UYlsMdpq3jcxeXoOZuRMNhjBKyq4B76xx3gzqRbn4R%2BpPR0scYmBxeokhVBu4xzuuSp784FUm6dk0dlm8QWYKAOD0VGglYck28S5XYNe3pYYM%2Fu%2B9LwYPkQxAzZUBeNy%2FtLvfq%2Fal3Gkdqh0U3%2FD7hTPKUnS7%2BK4gh7OM9wOVD17ANu5dLpCBvgTDQdKLU%2F3z%2FKzyJxvH0HPBlciSvQ6idjPG9GM0ItiTr4QWqbgwXcujIAR5vmhETZHk0cMPvWvsAGOqUBQifEcYSnrlQzGTBBmlq43SqzqApM9TmeaOE0UbQQrrjspD7YMpcpPmJ4tR%2B0KGhgh8PDp%2FTKD0niqY0km4LTaXTyOW2A3uKclDv%2FHFIZBCEHpDE9Mgkuumcz4rdje%2BAowfDjX3tK6ymKtUSRYW8uRr6sgv1Tj0tjvGV4wF4r1kJh9ZuFbvVFdwsCimOAu6HqSzIegxQmp%2Bt9RpObUUBu4e%2FQDYEA&X-Amz-Signature=d4a19234651645ae81cb9d706358a6bd67e960c4b4abd64780e2a0e51234fe9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7G3JNFS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESR%2FnpvEEw8cLwenryBZp%2By0AjfW318AZYLBuwvH0jwIgeybeqJQPT8Yot%2FcSV2DgbrmkOvQIra2Kag%2B3jOlcEiEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK8Wa0yxADuAFayIaCrcA96HVVBysr%2FEXNXAUXMP2eeT3cPi3CbLERSD%2BCjgH509H9Xx64tXQj%2F%2BBTutPpM%2FWsqpbOBU0CJTfK7NssxQWj3OlkkEf4cvPMACY1fWF4keHQS42RzrY8I8T%2BT42x4rAJFYfYwExDzqiGZcMbobaCp%2FHICqkITPVBewLswdZXW7fyc59%2BE%2FS6Af4n7M3KJjiRMp47rB6CwaaCrPvVS5AqPMFqjw96kb0phIXCGVkRo3N0UdHDQheIH0SghZ0kx7TCJLC3xSlM929aT1DtBc5hS8o%2BXvyW7%2FwL7kytbGe%2F13O944FsaW4JOZmf5ULvFCqYT6s7QJKBqfFx3ZkKwY4kNFsYBn0zcFu0xEsm2r7EdQFScqrF%2BdAavfhexEy9eK8UYlsMdpq3jcxeXoOZuRMNhjBKyq4B76xx3gzqRbn4R%2BpPR0scYmBxeokhVBu4xzuuSp784FUm6dk0dlm8QWYKAOD0VGglYck28S5XYNe3pYYM%2Fu%2B9LwYPkQxAzZUBeNy%2FtLvfq%2Fal3Gkdqh0U3%2FD7hTPKUnS7%2BK4gh7OM9wOVD17ANu5dLpCBvgTDQdKLU%2F3z%2FKzyJxvH0HPBlciSvQ6idjPG9GM0ItiTr4QWqbgwXcujIAR5vmhETZHk0cMPvWvsAGOqUBQifEcYSnrlQzGTBBmlq43SqzqApM9TmeaOE0UbQQrrjspD7YMpcpPmJ4tR%2B0KGhgh8PDp%2FTKD0niqY0km4LTaXTyOW2A3uKclDv%2FHFIZBCEHpDE9Mgkuumcz4rdje%2BAowfDjX3tK6ymKtUSRYW8uRr6sgv1Tj0tjvGV4wF4r1kJh9ZuFbvVFdwsCimOAu6HqSzIegxQmp%2Bt9RpObUUBu4e%2FQDYEA&X-Amz-Signature=b50470661e6aadc54dc026b55a14241c996ecfe59c2b1c0ac806c27d08409260&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
