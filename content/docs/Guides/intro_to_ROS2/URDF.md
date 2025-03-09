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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRAE2KM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGjvnp5MHyUa4KUQ6Ik7zHra6kROqzP6iQCa8XHej42JAiABnkyTLQBixJ1Ry7445dqSOV3dZsf9Y4o%2BVaDjD6Z9Vyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjP%2BOadzZGCMsp3YLKtwDczOZXM9%2B6A9Ne35%2FIT1hEQyVXc%2BwxmrmTNDHhgijVn0zjadjbD%2FLSE3njHous8HI4guz%2Fk%2BbiGQZa3aTxe2k9qlnq%2B2Uah87oHQZQgf8UAvfWG0WpZ5BE8AxbRxT2jq2M3N5USQEm9%2FvT68dN2g2dOrFZhInRW4OeBKMhtMqezkRFkjM2kvXbn%2FsBAPMjr3D2gJM4yDJnvcZRxPk7mgh2PJ7NShW4iLAw8uUJl4n42MPYg2U5MP2pMxxbt3Kav9%2BwVIYxRCtUEn5HqeLHLw4hiwTcBAVRDHZykPzKCLQXE6A3FbysG%2BkFkX0jrnWwSvje%2FV1it97GMbFXGzaqfT0JqHQ7k%2Fu74tNJ3Sj5tT0%2BmuIHJXalIXAEa63JN6BsG%2BYpGwsremLYvUm8RYqGJHuZi4vJfrQTGSwTh6kLJM%2FVL%2FOGahHhmhMr0hUuOW%2FQgNQw86MhEgGgdKNCrEbO255IlfcDPCHa3EaCkxTNHEan9C8GbwbbK0NPIOFups%2BWrQI%2FOHRY%2BuFxRSF1OnoiyDjWxswktoq39dBkwSDF1GhVb%2BnZr8llDKDNJqpGnwWzHiNhO1ntTXNbOYKCM4uWBMnPwd1x%2B0mT3XeXu1C1vo%2BxD686%2BNZTHoBBMi%2BprIw5eC3vgY6pgEJ4Btwhl8HSHJtoATyyAH12wVWJFNTF2BtwbNQG4WMbTDojCxVUk%2BbJJLwvkPV9iA0azw63rnwiEn%2FxjndVJ7FiRaqi3fRgrIfcubWDjhE1QD16mLxyyA1hpVDsGxKyR0QsNLyBP6PvR9RMiVwA4ZC5IEOTgD%2FW%2FuMI0JlMVovDoxafvJo8ZEXGwMtMYipEk9dqo348W%2BH3HFx2GRVQ1pja0flqx9D&X-Amz-Signature=55c7e2d10e3319967322c4c9f0d302fbed07859c7b61f0a44dba8181dfcd925c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRAE2KM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGjvnp5MHyUa4KUQ6Ik7zHra6kROqzP6iQCa8XHej42JAiABnkyTLQBixJ1Ry7445dqSOV3dZsf9Y4o%2BVaDjD6Z9Vyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjP%2BOadzZGCMsp3YLKtwDczOZXM9%2B6A9Ne35%2FIT1hEQyVXc%2BwxmrmTNDHhgijVn0zjadjbD%2FLSE3njHous8HI4guz%2Fk%2BbiGQZa3aTxe2k9qlnq%2B2Uah87oHQZQgf8UAvfWG0WpZ5BE8AxbRxT2jq2M3N5USQEm9%2FvT68dN2g2dOrFZhInRW4OeBKMhtMqezkRFkjM2kvXbn%2FsBAPMjr3D2gJM4yDJnvcZRxPk7mgh2PJ7NShW4iLAw8uUJl4n42MPYg2U5MP2pMxxbt3Kav9%2BwVIYxRCtUEn5HqeLHLw4hiwTcBAVRDHZykPzKCLQXE6A3FbysG%2BkFkX0jrnWwSvje%2FV1it97GMbFXGzaqfT0JqHQ7k%2Fu74tNJ3Sj5tT0%2BmuIHJXalIXAEa63JN6BsG%2BYpGwsremLYvUm8RYqGJHuZi4vJfrQTGSwTh6kLJM%2FVL%2FOGahHhmhMr0hUuOW%2FQgNQw86MhEgGgdKNCrEbO255IlfcDPCHa3EaCkxTNHEan9C8GbwbbK0NPIOFups%2BWrQI%2FOHRY%2BuFxRSF1OnoiyDjWxswktoq39dBkwSDF1GhVb%2BnZr8llDKDNJqpGnwWzHiNhO1ntTXNbOYKCM4uWBMnPwd1x%2B0mT3XeXu1C1vo%2BxD686%2BNZTHoBBMi%2BprIw5eC3vgY6pgEJ4Btwhl8HSHJtoATyyAH12wVWJFNTF2BtwbNQG4WMbTDojCxVUk%2BbJJLwvkPV9iA0azw63rnwiEn%2FxjndVJ7FiRaqi3fRgrIfcubWDjhE1QD16mLxyyA1hpVDsGxKyR0QsNLyBP6PvR9RMiVwA4ZC5IEOTgD%2FW%2FuMI0JlMVovDoxafvJo8ZEXGwMtMYipEk9dqo348W%2BH3HFx2GRVQ1pja0flqx9D&X-Amz-Signature=5245ce0fe92fdcc47fc11fc8f24b727072d64442c481b3a5ad5abe2c7bd8c092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
