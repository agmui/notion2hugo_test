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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32HQL3P%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCur0%2FPvMiBKNNMYqNcBog35NDn2t%2Bjg%2Bi68WsDdd1QtgIgFryqlDydo4byGDe1AH0IvMnh7EAut7t9S8uRW%2Bu2S%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSAOyENbF%2Bkq10u4yrcA7PE8KlFZNznIhw9DHgX2nBH1JW94tLEwqyoEORv4Sx4T06q%2BFoOFlaYWG4BH6TZRUBh4EcM33H5QAJSrm6mWVY9yTFhX2eovNHvNJQO7OkdIDRiJBBpCAthHfZw1EZdB6xR75%2BUs9yOHEpIFCLszGzbPwqPJkYI0inONI%2BCUpU18YRVak2YO8%2FQs4uLkVZbkTjDaYNyxA7ABmH0do7oCFFt%2FQ5MJBptuJmFusbjUwc43Lv6nRXo684WX0HZqiEuVtTBqfJwx6%2BxH0xDswZCecX%2FRy9ImcrCeyocUX%2Be2L15rgK%2FLSZinNeMNMzcQoY%2FAFfj2PTC2lRYM%2Fn0Yv%2FxxhUbxEbhaJiwGs%2FBj6ERMb5btvmhg85ByvlXn4mv89BZMkWV2A4kpg3etwpULVbZfigGOK9cxeN%2BY91nX6%2BJhxBkhZiJ7BDvPz4nynBAr%2B1v5%2BlBKcniJa%2Bnd%2FXdUv3fIUAPZZuHk%2BF%2BCVe1fwE8l8y5aCegOr46FuPDzrKUmJ5iu30cY3laDXisxVRGcoVkVHqO9MPOqDv45K0N4RMMrwnpr1bqz5tNkxFfJ1prZnBqIv2B3W2tMlvc9mbKlhHqZhO07BFA6TvHanwhmyYXZugTgWnUJhc1RShDSUMYMOf1hb4GOqUB71%2BlzFMnGrQsd6P32931bxhb8uBwcH7prZliDgLySWl%2FK7relfD3YnqkR4j%2FcrPNL1AoUfjtjFcJXym39apM55SAhGrzEtjQvTO4W1Y7IBUYUUQ9YHJtn5bCza%2BgAwgpcgY3l%2BQ7A89wi9jYpuwOS%2B%2FKCEXcPTC8Ewp6YX0tKKAFo%2BHgG1uFthtZIkihTYZ7mRnzPHfKouGng1lOw7DbNbmM1sn%2F&X-Amz-Signature=903ebfae43c6b5fc8cfe6cb47881de51a3923e651f075487411ca272a922534c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32HQL3P%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCur0%2FPvMiBKNNMYqNcBog35NDn2t%2Bjg%2Bi68WsDdd1QtgIgFryqlDydo4byGDe1AH0IvMnh7EAut7t9S8uRW%2Bu2S%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSAOyENbF%2Bkq10u4yrcA7PE8KlFZNznIhw9DHgX2nBH1JW94tLEwqyoEORv4Sx4T06q%2BFoOFlaYWG4BH6TZRUBh4EcM33H5QAJSrm6mWVY9yTFhX2eovNHvNJQO7OkdIDRiJBBpCAthHfZw1EZdB6xR75%2BUs9yOHEpIFCLszGzbPwqPJkYI0inONI%2BCUpU18YRVak2YO8%2FQs4uLkVZbkTjDaYNyxA7ABmH0do7oCFFt%2FQ5MJBptuJmFusbjUwc43Lv6nRXo684WX0HZqiEuVtTBqfJwx6%2BxH0xDswZCecX%2FRy9ImcrCeyocUX%2Be2L15rgK%2FLSZinNeMNMzcQoY%2FAFfj2PTC2lRYM%2Fn0Yv%2FxxhUbxEbhaJiwGs%2FBj6ERMb5btvmhg85ByvlXn4mv89BZMkWV2A4kpg3etwpULVbZfigGOK9cxeN%2BY91nX6%2BJhxBkhZiJ7BDvPz4nynBAr%2B1v5%2BlBKcniJa%2Bnd%2FXdUv3fIUAPZZuHk%2BF%2BCVe1fwE8l8y5aCegOr46FuPDzrKUmJ5iu30cY3laDXisxVRGcoVkVHqO9MPOqDv45K0N4RMMrwnpr1bqz5tNkxFfJ1prZnBqIv2B3W2tMlvc9mbKlhHqZhO07BFA6TvHanwhmyYXZugTgWnUJhc1RShDSUMYMOf1hb4GOqUB71%2BlzFMnGrQsd6P32931bxhb8uBwcH7prZliDgLySWl%2FK7relfD3YnqkR4j%2FcrPNL1AoUfjtjFcJXym39apM55SAhGrzEtjQvTO4W1Y7IBUYUUQ9YHJtn5bCza%2BgAwgpcgY3l%2BQ7A89wi9jYpuwOS%2B%2FKCEXcPTC8Ewp6YX0tKKAFo%2BHgG1uFthtZIkihTYZ7mRnzPHfKouGng1lOw7DbNbmM1sn%2F&X-Amz-Signature=87824be9387a5af69d1719883333ede2b9bd07fe30470fb10e1475c37797dabb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
