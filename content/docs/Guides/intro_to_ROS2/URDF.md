---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIAZWMX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvUKjtqAnWVdmrGRUueVfkVA2mawpooQMX6GbdA1mS1AiEAu0%2B4%2FxTLsnzfJ0k%2FrkX2oK9uP19Ir7gAp%2BwVb0bl%2BEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7WdOjefFRMJl8bnyrcA1qVOqvhyOaudX01Wg9V3lWd6HvNnmjp00QnjBxTcyytua6YmrJ%2BZeVB62MdMPh7mkL35Hpr500hD76CrErE2es%2BjXThN12SwW0eFMH4y9odYJzwx65yzvuzPdaOEQhL1EHfsy1YLmw2t1n6XwIR757irm%2BendAvVDkFOiNz54u%2FkhhypSkFtL%2Bw56XT8ivuf%2FMCoeRNOgdQlw8kraKKPwOT99AGORFAznRp5YzinjKhjZRWpgmplIkWya6gU8ubrC2860WI0pr%2Bp%2FJxY7f77kMy3dvUn91UgOWGsYJgFJo6CiGDoPO90PiOt0ZWhGojO8EEN6yhgiXwLaCIzjAdLZbmud33DQpCZQhdE6t2D7P6NhVDXaa96xsd4uSsLPoc3xe5%2BLj6XndggiPxO7kIbJzsU91YrmBj8QMZkBnItDdPlG6Iw3lI3OF%2FRG%2BSsttPaMb9pGdiyBJ6jnkfeSUpNBAeQ%2FaF0MSZLpALKOcuNs0Y0FMp7KODdfUh5%2FduN5eCYhoPhic9Ave3OsY3%2BrqH76pKlEWv2aKUyQQ0fqMblEgNDvRbZeAmD7Q38MNtEMoQPGOJ1e4QqlOzy9Dfso%2B4ceT7oo73RP2mXM381gUEKWyFClhUXGsyU6JI%2BkZWMLWB8MsGOqUB%2BdGgwi1m8JEhF%2FM0TfdaWiviGN%2FeV7bUK5Ivqu%2Bazi7wryWOApexiWXKkthMpJClbkVWeIKIL%2FN%2BijNzTdDw7hSKFuZ8%2B%2BS1PIbWqppl9GqgpqPSN4tsuk3BucRMi1GoISqcupMaw6Rh1gL4PMv%2BTQ%2FcdDeLlaW572TKlfAJl%2BpmVEkvMaQ7QdWVlyDzaPlpg1CcsYqpj54%2BeyZXq%2F2uK6YfOdTV&X-Amz-Signature=84fe6b685b107473fce4764c3973099c052dd4afc1e99e296bc609a4da655447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIAZWMX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvUKjtqAnWVdmrGRUueVfkVA2mawpooQMX6GbdA1mS1AiEAu0%2B4%2FxTLsnzfJ0k%2FrkX2oK9uP19Ir7gAp%2BwVb0bl%2BEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7WdOjefFRMJl8bnyrcA1qVOqvhyOaudX01Wg9V3lWd6HvNnmjp00QnjBxTcyytua6YmrJ%2BZeVB62MdMPh7mkL35Hpr500hD76CrErE2es%2BjXThN12SwW0eFMH4y9odYJzwx65yzvuzPdaOEQhL1EHfsy1YLmw2t1n6XwIR757irm%2BendAvVDkFOiNz54u%2FkhhypSkFtL%2Bw56XT8ivuf%2FMCoeRNOgdQlw8kraKKPwOT99AGORFAznRp5YzinjKhjZRWpgmplIkWya6gU8ubrC2860WI0pr%2Bp%2FJxY7f77kMy3dvUn91UgOWGsYJgFJo6CiGDoPO90PiOt0ZWhGojO8EEN6yhgiXwLaCIzjAdLZbmud33DQpCZQhdE6t2D7P6NhVDXaa96xsd4uSsLPoc3xe5%2BLj6XndggiPxO7kIbJzsU91YrmBj8QMZkBnItDdPlG6Iw3lI3OF%2FRG%2BSsttPaMb9pGdiyBJ6jnkfeSUpNBAeQ%2FaF0MSZLpALKOcuNs0Y0FMp7KODdfUh5%2FduN5eCYhoPhic9Ave3OsY3%2BrqH76pKlEWv2aKUyQQ0fqMblEgNDvRbZeAmD7Q38MNtEMoQPGOJ1e4QqlOzy9Dfso%2B4ceT7oo73RP2mXM381gUEKWyFClhUXGsyU6JI%2BkZWMLWB8MsGOqUB%2BdGgwi1m8JEhF%2FM0TfdaWiviGN%2FeV7bUK5Ivqu%2Bazi7wryWOApexiWXKkthMpJClbkVWeIKIL%2FN%2BijNzTdDw7hSKFuZ8%2B%2BS1PIbWqppl9GqgpqPSN4tsuk3BucRMi1GoISqcupMaw6Rh1gL4PMv%2BTQ%2FcdDeLlaW572TKlfAJl%2BpmVEkvMaQ7QdWVlyDzaPlpg1CcsYqpj54%2BeyZXq%2F2uK6YfOdTV&X-Amz-Signature=2c2ed46d32170f76f268979ee91c1a6f9e74efb01adb6dc681ee20682d9bb074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
