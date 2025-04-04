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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7WGA6B%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC0mnk%2FZW62O6ZqUnwjCxGakUJZyAe4OccPvUI9wxmlAiAnFuT2ohCcrMIj9lFUVOfAItL2oG%2B1KY1LXjulrYOmSCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHAMypwx7mbow0DSZKtwDJh9Vo%2FJFU29vaHSV5bzdltraI0ty0rxne8OcGwY9sLUv%2B9DlRbp3ih4FthZSpaY2422LbWH6ijMfserH68zf0YeEfCozQJf4M53x67zPapUR69Y%2BTPkRMwSatVSZefl8eKMOxdNKF%2FmxXKtTcEWwoJYLNX9Wn9i48lMAM5N1RiDeRfi7OCUSc1JLg1VFinULVIWGy57%2F7HvpkZR7X%2B%2BIMg8ClEwRB8KoC3BmYue79sj7nr5NgZlyty1fBzBDItjjDKZQ47%2FX3SVX7Cf%2F8lg9PYIQjY1SrrvadnIT4JhmYT8LRMabOUz%2F29jlXXg%2BwR%2FAYd2W3uo1JuQGTgTJjR%2FKd2b%2FPUcb9I5%2Fzkhc5dd30HfB%2FVXI4xYc6UNbcjINmRbaSt4gg4pGYbMVSLYHoWFgUph%2BlnhuOsU7%2FAULyPfo%2B%2Frtca33h4yKHsxLOgu99V9PAGzrgbuWNwXbcUnona9x710UQkq3iMTFYeso%2Fs0ljHaKQK%2FqBw8Ie0%2F60SrSb6dkTEUQFFwkoB1WgG8ajWIcHd8n2mYlvCSWgl7%2ByAUSCTjTvj%2FIWpzjhgN%2BZ8oe%2FkKqoCv%2BckCeEaDeS0WDRDwk5YpAfwTteb31OGC7eyQ1PjENz1KlEhso1qKhZwkw766%2BvwY6pgHAfiVFWD7lO9UEKkMqjuALi7HrAjQnC9FHIRZ%2BKixlao0e2S168yeJqVnTf6p%2F1CFioWyq3pZfXvwXjr35WrwRVUwKDJAz%2Bcj9d4lrZkmbNqZwrpnERJnjRC5oukuEhQ0tqaw8R0%2F23ck3tQduGEg%2FZc8e18bv8fY97Jz9kwMRq8pcPIjNSo9hE1B88BYz1HFTRg0VG%2FpRxe9wNd%2Bmq7xJh47ol3LM&X-Amz-Signature=625574bdf5ece6314748f9be83cb2a7bfd5d7a4ff3aac4d23ebbf8d74c6cdd85&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7WGA6B%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC0mnk%2FZW62O6ZqUnwjCxGakUJZyAe4OccPvUI9wxmlAiAnFuT2ohCcrMIj9lFUVOfAItL2oG%2B1KY1LXjulrYOmSCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMHAMypwx7mbow0DSZKtwDJh9Vo%2FJFU29vaHSV5bzdltraI0ty0rxne8OcGwY9sLUv%2B9DlRbp3ih4FthZSpaY2422LbWH6ijMfserH68zf0YeEfCozQJf4M53x67zPapUR69Y%2BTPkRMwSatVSZefl8eKMOxdNKF%2FmxXKtTcEWwoJYLNX9Wn9i48lMAM5N1RiDeRfi7OCUSc1JLg1VFinULVIWGy57%2F7HvpkZR7X%2B%2BIMg8ClEwRB8KoC3BmYue79sj7nr5NgZlyty1fBzBDItjjDKZQ47%2FX3SVX7Cf%2F8lg9PYIQjY1SrrvadnIT4JhmYT8LRMabOUz%2F29jlXXg%2BwR%2FAYd2W3uo1JuQGTgTJjR%2FKd2b%2FPUcb9I5%2Fzkhc5dd30HfB%2FVXI4xYc6UNbcjINmRbaSt4gg4pGYbMVSLYHoWFgUph%2BlnhuOsU7%2FAULyPfo%2B%2Frtca33h4yKHsxLOgu99V9PAGzrgbuWNwXbcUnona9x710UQkq3iMTFYeso%2Fs0ljHaKQK%2FqBw8Ie0%2F60SrSb6dkTEUQFFwkoB1WgG8ajWIcHd8n2mYlvCSWgl7%2ByAUSCTjTvj%2FIWpzjhgN%2BZ8oe%2FkKqoCv%2BckCeEaDeS0WDRDwk5YpAfwTteb31OGC7eyQ1PjENz1KlEhso1qKhZwkw766%2BvwY6pgHAfiVFWD7lO9UEKkMqjuALi7HrAjQnC9FHIRZ%2BKixlao0e2S168yeJqVnTf6p%2F1CFioWyq3pZfXvwXjr35WrwRVUwKDJAz%2Bcj9d4lrZkmbNqZwrpnERJnjRC5oukuEhQ0tqaw8R0%2F23ck3tQduGEg%2FZc8e18bv8fY97Jz9kwMRq8pcPIjNSo9hE1B88BYz1HFTRg0VG%2FpRxe9wNd%2Bmq7xJh47ol3LM&X-Amz-Signature=dda897cae2a632bd139ea9d58c3ac1e94c811e7534959eef1c3d74f728498a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
