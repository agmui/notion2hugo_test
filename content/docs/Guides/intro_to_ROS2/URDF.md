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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGW5W66%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCoXxnuwy9ac%2FT0zIQfwJAp6BaFs1hxS6PXdCKmwiCBJAIgGbQn9rr4%2FKUtF6DlbWApP4BW4ST4f%2F4VjyVeqTkCW0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhqx88k59oiokGi9SrcAz0upIEPEkGMtmaGDvS8z1Nb2At1kqHoxS%2B6CyAZVorzYrCyoJC4u%2Fg42EEjWNUBjgptSzD73UxvRSUlMalR%2FJK5v9Yqtix%2Fi9l%2FBnmrzLKuXTBLxWweN2RZOCVUzPc6Lm%2FfDJwAC83UJT7UyFi28UmUbC3nHor02gB0Cuwnf%2FIPCq7giGwlhtuLcZBOrVSHgUIEAm4RT8ZUDSDJCHQycxnqY%2B1tYJLyCbz6ASkc%2Bv3p6tWbKV4X7uTG2tV6b2gqkpmSg3p670vyvoCTtuVqo0BYdkMEzlCBhS4%2B5psZb%2BRC8QaPcFZgul6MfCf0uBSJ7T7QrumC%2FqIMJ3DXzed20fv5651%2FGUqFj0o%2FRtzQl2gCR2ara6j9fYiKIrwVBzObX%2BQxKa%2B7vrhYKd8fk6mQhuH9PUYj9MQX2%2FRQt2TBxqsyC%2FKabhpQo9Wh6eMeL0%2BKpEapXWhCs9mbwQ7Pc6Qu3nTro1X%2BhdFojEnep%2BQs%2BE2Fekc99Uzk3ye6sai3iGi7eWPVczVeDw%2FaDx9WK5AJ2qFeaHjOc73PgBYxugge13QVEcI4j5YeYfQB1EOGS0OIO1oo1FTxT%2Bg%2FVzEiaaz3sjh2zfhGZWwoy3LKscIB8X%2BuRJHJAHeJKrzB15aaMO%2Bxwr4GOqUBwnHxXawnvfDwotie8G7glf%2BErLC2Nbhfy3bzCE7CtV%2Bmps0rEu%2Fc8aqEV9EwrVlOMzucQFHOOaapqQ2cwTvSDu3kus1eg3nQn2u6TWpy7Ccrys0V6voSgcFplVD%2BzHF%2FjCrV6JYupgj2guYNiOLMhRaDF2mJfQR88GOsjYaZi4ZMTCk1U3auuLm3STiyWH5lPw3qkjG4Gh8Uj7qb%2Bacq90xSvbxv&X-Amz-Signature=2edb64c2681d0b45215428ea2bf50e2fd38c7e9ea66026a8339cf6cb583a04fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGW5W66%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCoXxnuwy9ac%2FT0zIQfwJAp6BaFs1hxS6PXdCKmwiCBJAIgGbQn9rr4%2FKUtF6DlbWApP4BW4ST4f%2F4VjyVeqTkCW0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhqx88k59oiokGi9SrcAz0upIEPEkGMtmaGDvS8z1Nb2At1kqHoxS%2B6CyAZVorzYrCyoJC4u%2Fg42EEjWNUBjgptSzD73UxvRSUlMalR%2FJK5v9Yqtix%2Fi9l%2FBnmrzLKuXTBLxWweN2RZOCVUzPc6Lm%2FfDJwAC83UJT7UyFi28UmUbC3nHor02gB0Cuwnf%2FIPCq7giGwlhtuLcZBOrVSHgUIEAm4RT8ZUDSDJCHQycxnqY%2B1tYJLyCbz6ASkc%2Bv3p6tWbKV4X7uTG2tV6b2gqkpmSg3p670vyvoCTtuVqo0BYdkMEzlCBhS4%2B5psZb%2BRC8QaPcFZgul6MfCf0uBSJ7T7QrumC%2FqIMJ3DXzed20fv5651%2FGUqFj0o%2FRtzQl2gCR2ara6j9fYiKIrwVBzObX%2BQxKa%2B7vrhYKd8fk6mQhuH9PUYj9MQX2%2FRQt2TBxqsyC%2FKabhpQo9Wh6eMeL0%2BKpEapXWhCs9mbwQ7Pc6Qu3nTro1X%2BhdFojEnep%2BQs%2BE2Fekc99Uzk3ye6sai3iGi7eWPVczVeDw%2FaDx9WK5AJ2qFeaHjOc73PgBYxugge13QVEcI4j5YeYfQB1EOGS0OIO1oo1FTxT%2Bg%2FVzEiaaz3sjh2zfhGZWwoy3LKscIB8X%2BuRJHJAHeJKrzB15aaMO%2Bxwr4GOqUBwnHxXawnvfDwotie8G7glf%2BErLC2Nbhfy3bzCE7CtV%2Bmps0rEu%2Fc8aqEV9EwrVlOMzucQFHOOaapqQ2cwTvSDu3kus1eg3nQn2u6TWpy7Ccrys0V6voSgcFplVD%2BzHF%2FjCrV6JYupgj2guYNiOLMhRaDF2mJfQR88GOsjYaZi4ZMTCk1U3auuLm3STiyWH5lPw3qkjG4Gh8Uj7qb%2Bacq90xSvbxv&X-Amz-Signature=cd473726afdbc1f51d7d4531771c6eb1729d84b220a5cbf9958c18261e328956&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
