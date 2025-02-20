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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3N74CQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJCobULTF8YvqR2VbYUTgOTBQOnsp08MXixgNke59HrAiB3yd4FvHktUBWVtdsCO%2F2DUcQw%2FIjyrWdvk%2Fm07C0pCSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRUzOAJhu6QJWh6OnKtwDTkkWbkbmYDo6b8DJ8uQA6k2hDDFM0xoYyUrO8ibMFkzx4Myj%2B5yqfOpqScpH4Aw%2Bzgj14%2Bm%2Fcd4vLrdiPdlGKW%2ByDxxhdjatOBgb3NJlOy80IZmi6UrPRYXYhu7ovFBNvgRqSt%2FuvbnmCA1dhrW1BcWOP8DBwT209TMEIDm9sAoOLWR7h86WRf8os0uiMSl9dSApxNJjoRi3KResmGXZ%2Bk4fCnhjbrhHU%2BIIQpgdza6ceiOl6AhsJXEje6XOcLLwhzHYkygfB468cfVNxkUMqXElgDvuyaEinfHAxrmk5fFo51CezSn%2FzPwgHT7f6q8JvO%2BoYrMO%2Fc9fQ58FX1AkqTy5LXw6LjePDr7Z8Xy%2BEt3kef%2FD7%2B%2FTxV%2FHaWSSrMKZ9YnNhDd59vE54P1UvjYYQTnfLBE388qYgzSNVcxCcIHNYxdzO5MggN0v6IXTYWZCspTiAF7wtv9QeySngsOaeO%2BBngbgb0QSJivYdNwIa56lrqIF5LVaUbCxswr656o3DKCqVutZcLYZKvC29vnSNMit1SVj%2FWTL9wMd8Qsey7ZvusQ6JXz8vkrtRpVPk22kiBpTdM1XKyhqgPtGVg6cgsFDIA6%2FARBXWcwrW9Vu%2BP1oSExwvEQzwQZchHowp5DcvQY6pgGAYEGrfdKhPRjj0KzYLrDVtHf0qqtxOgIuQGgoJQCG%2B9tEF952%2B1SdHJw%2BQcYG7AuGzHMTI5n1xk1v3v%2B9sqmdB%2B%2FxPYOk%2FvTrVvHhG3y%2FgLV0OXj%2FDRVHRXcvhpnjR3O9fQVi5yfpFE1Mz4OEIocOr0bM2GnzLl4ibETZ8O68W6EoICGheT6DSd44pu0FvXFQwDIsWuY%2B9pUKO%2BxOs96r10QZtOtv&X-Amz-Signature=4783f81c5ea79e4af699ef1f893617dde4bd9a425ce88e304d6c6d728f96318d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3N74CQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJCobULTF8YvqR2VbYUTgOTBQOnsp08MXixgNke59HrAiB3yd4FvHktUBWVtdsCO%2F2DUcQw%2FIjyrWdvk%2Fm07C0pCSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRUzOAJhu6QJWh6OnKtwDTkkWbkbmYDo6b8DJ8uQA6k2hDDFM0xoYyUrO8ibMFkzx4Myj%2B5yqfOpqScpH4Aw%2Bzgj14%2Bm%2Fcd4vLrdiPdlGKW%2ByDxxhdjatOBgb3NJlOy80IZmi6UrPRYXYhu7ovFBNvgRqSt%2FuvbnmCA1dhrW1BcWOP8DBwT209TMEIDm9sAoOLWR7h86WRf8os0uiMSl9dSApxNJjoRi3KResmGXZ%2Bk4fCnhjbrhHU%2BIIQpgdza6ceiOl6AhsJXEje6XOcLLwhzHYkygfB468cfVNxkUMqXElgDvuyaEinfHAxrmk5fFo51CezSn%2FzPwgHT7f6q8JvO%2BoYrMO%2Fc9fQ58FX1AkqTy5LXw6LjePDr7Z8Xy%2BEt3kef%2FD7%2B%2FTxV%2FHaWSSrMKZ9YnNhDd59vE54P1UvjYYQTnfLBE388qYgzSNVcxCcIHNYxdzO5MggN0v6IXTYWZCspTiAF7wtv9QeySngsOaeO%2BBngbgb0QSJivYdNwIa56lrqIF5LVaUbCxswr656o3DKCqVutZcLYZKvC29vnSNMit1SVj%2FWTL9wMd8Qsey7ZvusQ6JXz8vkrtRpVPk22kiBpTdM1XKyhqgPtGVg6cgsFDIA6%2FARBXWcwrW9Vu%2BP1oSExwvEQzwQZchHowp5DcvQY6pgGAYEGrfdKhPRjj0KzYLrDVtHf0qqtxOgIuQGgoJQCG%2B9tEF952%2B1SdHJw%2BQcYG7AuGzHMTI5n1xk1v3v%2B9sqmdB%2B%2FxPYOk%2FvTrVvHhG3y%2FgLV0OXj%2FDRVHRXcvhpnjR3O9fQVi5yfpFE1Mz4OEIocOr0bM2GnzLl4ibETZ8O68W6EoICGheT6DSd44pu0FvXFQwDIsWuY%2B9pUKO%2BxOs96r10QZtOtv&X-Amz-Signature=fcf5973c737e415d52f812eaeb3054c705987653ab301b7550e9bff5abfe82ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
