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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWYQ4OJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAHQdHKCXcb1HaJ7QKbnvFAXNcIN1IG6xUr8OaUYAGAiEA0PuNE1dZaFhRNckxtMJWdvoAIArL4mZXGl6O9F43ff0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFYaVZhu50Fi0sH7mSrcA4d8ZkGvDdrrbO0urMwgNJ0aNc9AnslOVA1JgP0Ib1YnEkbrb2kxf9XmevL5OPhKnZq3ERy5hvs6RhtFjIPhWp%2BYe%2FC9KvIN6p8pYBxPvTiRj5zWGpa%2FLLnuqPhJK1NEJkKsZJ2oDjQjY3yNNqqAyp51DXW9l36ywLozaN1xkXCDBrMPoE7%2B4gOnNZVaFtJGb4NqYi2ryGISMazRi6gDF3XG%2FLMOK4sl3JT7HNO1glvgCS1Cu0qGbnwy1xNrcNiFxK7obIUCH%2FTLCgUtGYEp8goD%2FG9rpCUNL0PGc3vGMC8y8%2B6oO3%2Bn9OCRMaKFb34Em1THW9yRC0odf7pcrnifB3LxvUxHEoNfF72dEnTd9P1d1zMljKKo5ubXOae0oJ4bp%2FEeEX4nf744qR%2B30O6fXDlFnGuInVdSl1HXBiv5IjkDkmd9tnV%2FcDU64Xpm4zAatwjv2Z80S0Fe%2FUL3tZbn6HfjImA8uOJYO1u3nDvS03p6QNolTSnhwb%2BKq04md%2BrUgAZljAhff2EYMmS2U3IWhSKVBo6NW4IqiqgHA5CH3Q32DBKnFTY8vg1wyFqxaMuQEztoQWoWagyq60ncXju2jAPG8EM26GRwBZFRRRe2anQyj2BS0oYf1SCcQPExMJO57MIGOqUBLUrFM2La98mj9xOl1zQR8VXny6r%2FirwXOmM7wgjYq9H3CmuqHW09g5KFSmWnnXcuT562AEFcgwJ4UEw4C3WGqegrq5fOdTa%2BRw5%2FEhiNqRwnlT%2Fu5BYAcJjGSlfaJdgPgmh4kx%2B8bTUsGg45Bj%2Bi4Gw7xSzzFXJV1pedSVLh6Msh1qUL1gWcsCVaFF3VsBNqN01QtT%2BhQaLfpXHjio%2BSsBp0UTGB&X-Amz-Signature=d2520eb6ab1c79fbe759c5519545d131a15e7b8bedee928cfed652993641f036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWYQ4OJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFxAHQdHKCXcb1HaJ7QKbnvFAXNcIN1IG6xUr8OaUYAGAiEA0PuNE1dZaFhRNckxtMJWdvoAIArL4mZXGl6O9F43ff0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFYaVZhu50Fi0sH7mSrcA4d8ZkGvDdrrbO0urMwgNJ0aNc9AnslOVA1JgP0Ib1YnEkbrb2kxf9XmevL5OPhKnZq3ERy5hvs6RhtFjIPhWp%2BYe%2FC9KvIN6p8pYBxPvTiRj5zWGpa%2FLLnuqPhJK1NEJkKsZJ2oDjQjY3yNNqqAyp51DXW9l36ywLozaN1xkXCDBrMPoE7%2B4gOnNZVaFtJGb4NqYi2ryGISMazRi6gDF3XG%2FLMOK4sl3JT7HNO1glvgCS1Cu0qGbnwy1xNrcNiFxK7obIUCH%2FTLCgUtGYEp8goD%2FG9rpCUNL0PGc3vGMC8y8%2B6oO3%2Bn9OCRMaKFb34Em1THW9yRC0odf7pcrnifB3LxvUxHEoNfF72dEnTd9P1d1zMljKKo5ubXOae0oJ4bp%2FEeEX4nf744qR%2B30O6fXDlFnGuInVdSl1HXBiv5IjkDkmd9tnV%2FcDU64Xpm4zAatwjv2Z80S0Fe%2FUL3tZbn6HfjImA8uOJYO1u3nDvS03p6QNolTSnhwb%2BKq04md%2BrUgAZljAhff2EYMmS2U3IWhSKVBo6NW4IqiqgHA5CH3Q32DBKnFTY8vg1wyFqxaMuQEztoQWoWagyq60ncXju2jAPG8EM26GRwBZFRRRe2anQyj2BS0oYf1SCcQPExMJO57MIGOqUBLUrFM2La98mj9xOl1zQR8VXny6r%2FirwXOmM7wgjYq9H3CmuqHW09g5KFSmWnnXcuT562AEFcgwJ4UEw4C3WGqegrq5fOdTa%2BRw5%2FEhiNqRwnlT%2Fu5BYAcJjGSlfaJdgPgmh4kx%2B8bTUsGg45Bj%2Bi4Gw7xSzzFXJV1pedSVLh6Msh1qUL1gWcsCVaFF3VsBNqN01QtT%2BhQaLfpXHjio%2BSsBp0UTGB&X-Amz-Signature=bd9e36ac9dd4e72b8b5823f99c552ad3045e36fc0e0265499df224e2ea7bb6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
