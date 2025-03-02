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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZL2E36R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4H0ZaZ2LHnEu9UorqzqMesHN56MBUBklUlHAS4VKH4AiEAsdza7mc7PqJWTZzjLUlGs%2BLAQhM38p%2Bjqca15TS%2FXWAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgu7dvPxBRiDQe0dircA5CqiBoRq4jKOpPQ74els0Sk8awuEkCM%2Bq47%2BFtVbNiCJCwaWt0J8P087%2BbclYpoLb6XwRu5C0IwvD8B0yolbThP4TS1nv9BfrFT5%2FXtKnOgXIQwbcAvA5sDLfoGh7mUefne631ISd8PQpl5xVF%2FrEbrht2tb7GtCoGUxlQ4GoD0q47e00dNpShuOVp0hl%2FF7mfc2%2BreoJsY02IN8uJXHqUWRX9fEuwqqxnhZp%2BvQoMQlqgc0IZBNfILaW25L9s5%2FQEwarvmhiuOSlYCuyt6sMllz3%2FzXnI%2FtwUHuVTpTFYovDWuPU68jFaWi0JMM%2FlWpE37Ti2GdJAp%2BC1UitSDmYNnF1p0h%2FsSt7ba3FfwBhhObc1rIhCio%2BopVIvINbf%2FKKOO7i1LkLZku9ymso06M3TLjwqBXZJsVFzuqR5U5m%2FMvewxexxS6fmN8K%2B1FCYfTyqh4uSdL%2FMQHafMqgTxCi8kOFNs4coAPUUAjcTKZAAzJRFUMTSwB73keQfRVWbKtNg6XdvnW56I8a1Fd7bmpEsIP6M5RG7n50tEA5TGu5ZebZNpBh3DfIlRNJ6gqZ4ILo9i8X0FYaRQcaRmUiZOJESKc2Kj0Us%2FMQ01%2B%2Bbv5Z7rQCWOw41enJZ5OoqHMO%2F6kL4GOqUBHga7ijicc0W4PdGQPJWD5i1JpOz5zkQfWP%2BYD5mglAABufobrW%2B%2BLQ72SJF79CET5SYBtQoqVl9xHIW2MSHTK9kqXe55epDaM8fZGFpRNQ4Bu5PXb49Va%2Fm8e6l%2Fd07ETns%2BHV%2BC1C33kpd8%2Bhqq1A2qFRWuBVlf4Zsycn8p68gjaItcA2r62dwHZ%2FXTeA8Ewm16j2%2Bby2joMCO0UP7iv%2FufohfC&X-Amz-Signature=e14bccd025907a56d2df201024d49c061de491b1ee6b1d8d637295032ccb817c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZL2E36R%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4H0ZaZ2LHnEu9UorqzqMesHN56MBUBklUlHAS4VKH4AiEAsdza7mc7PqJWTZzjLUlGs%2BLAQhM38p%2Bjqca15TS%2FXWAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgu7dvPxBRiDQe0dircA5CqiBoRq4jKOpPQ74els0Sk8awuEkCM%2Bq47%2BFtVbNiCJCwaWt0J8P087%2BbclYpoLb6XwRu5C0IwvD8B0yolbThP4TS1nv9BfrFT5%2FXtKnOgXIQwbcAvA5sDLfoGh7mUefne631ISd8PQpl5xVF%2FrEbrht2tb7GtCoGUxlQ4GoD0q47e00dNpShuOVp0hl%2FF7mfc2%2BreoJsY02IN8uJXHqUWRX9fEuwqqxnhZp%2BvQoMQlqgc0IZBNfILaW25L9s5%2FQEwarvmhiuOSlYCuyt6sMllz3%2FzXnI%2FtwUHuVTpTFYovDWuPU68jFaWi0JMM%2FlWpE37Ti2GdJAp%2BC1UitSDmYNnF1p0h%2FsSt7ba3FfwBhhObc1rIhCio%2BopVIvINbf%2FKKOO7i1LkLZku9ymso06M3TLjwqBXZJsVFzuqR5U5m%2FMvewxexxS6fmN8K%2B1FCYfTyqh4uSdL%2FMQHafMqgTxCi8kOFNs4coAPUUAjcTKZAAzJRFUMTSwB73keQfRVWbKtNg6XdvnW56I8a1Fd7bmpEsIP6M5RG7n50tEA5TGu5ZebZNpBh3DfIlRNJ6gqZ4ILo9i8X0FYaRQcaRmUiZOJESKc2Kj0Us%2FMQ01%2B%2Bbv5Z7rQCWOw41enJZ5OoqHMO%2F6kL4GOqUBHga7ijicc0W4PdGQPJWD5i1JpOz5zkQfWP%2BYD5mglAABufobrW%2B%2BLQ72SJF79CET5SYBtQoqVl9xHIW2MSHTK9kqXe55epDaM8fZGFpRNQ4Bu5PXb49Va%2Fm8e6l%2Fd07ETns%2BHV%2BC1C33kpd8%2Bhqq1A2qFRWuBVlf4Zsycn8p68gjaItcA2r62dwHZ%2FXTeA8Ewm16j2%2Bby2joMCO0UP7iv%2FufohfC&X-Amz-Signature=2689b0545bde99beb87d949f2786666a3ff4c58e18a44d4a3ea0603fdb3398c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
