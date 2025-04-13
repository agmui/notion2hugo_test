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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKNFXYO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIH4GZVzuv8BOtHxm9qWwHY17lDeEo0Yd8DbLP2PbUXJeAiAMLukitu94Ckyf6zDxKwVh6YiUXz6lkY0edUbE6ryFayqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvtGwEggF7pwagKHKtwDuzxMM9MOmwwG7DBh6Fu9kPQ7DlFRLj5zRuvFCHL9kX7ay9sxmnKKVc0z7nPpTcXallrUwC10%2BWl9ZV0l3ochagPWScbTUIkh6f3YYNfOSRdnnFodG0Sb2PpsgOaxzCP1zwUiZsW4Tk6N4Tv2phw0PLB1P3e0HcpDpeVKrO1FIh861GP7mAu%2FeCFW05ijRiOLZTN3vZwzLpWEkBooUecyyk1pDV%2B7wkUv8eFlv7gT9KxPWGzjF%2BYe1Knz7a2zFV6jHmR4vFLnnlrBZy3arvYZdPG9FsRP%2FIWG1D%2Fz%2FEgqfo%2FTS2L7UzfEkta03T9DVxPxl4zqqdUZm7e5dhTc878rTHAmiqy7OBmKM8LdnFyqhAqUklUKaa4tcA05lYH1O7m3hXYhFr4k2GiO30cpzfWVJWYkaJ2gu0GlJDXpssv32b3VcIYvnT5%2FiVY4nxCPZhdC0zkJ0nASuNaYLbiojb0hlKTVgBMtRi9eY%2B41ixX5r27wWRVzDw98tgCswfBmwi%2BXyQ3vsdX2DHQ3dy4b5X8oH9Dw514ZwPn3g%2B1aLW7SUjC7eVDcuUFnz0beZayekwJAA978TV5XTKIe72cTYYf7sVJd1yt2GR%2Bd1bdRWcxIsdW9jDoa%2FiDvKdYmyEMwleHtvwY6pgEcDYnEk1U%2FAe2wMMVYhbpZbcBApISPWcxoKY3JxAfZw8ORDQgeRqkUWvKsT2SbjyIwUXB6OpD%2FxzUNG7OwXKka1RzO8F61Vqe0tNRlBCKmKvNjga1dO7brEAfWXRHPskQmsshJLgOY5YVYAAxCgpwijKq13KuPoytdfCAyLqgm8tGXD3cHsWNg5ZDEeuo%2BUj8tgQWB%2BlsYg49SvCG1IDbIcR5hHApI&X-Amz-Signature=32d39afaf05ff99fc8e8db77a976f94d568d75fca552483b5f80c88326498c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKNFXYO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIH4GZVzuv8BOtHxm9qWwHY17lDeEo0Yd8DbLP2PbUXJeAiAMLukitu94Ckyf6zDxKwVh6YiUXz6lkY0edUbE6ryFayqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvtGwEggF7pwagKHKtwDuzxMM9MOmwwG7DBh6Fu9kPQ7DlFRLj5zRuvFCHL9kX7ay9sxmnKKVc0z7nPpTcXallrUwC10%2BWl9ZV0l3ochagPWScbTUIkh6f3YYNfOSRdnnFodG0Sb2PpsgOaxzCP1zwUiZsW4Tk6N4Tv2phw0PLB1P3e0HcpDpeVKrO1FIh861GP7mAu%2FeCFW05ijRiOLZTN3vZwzLpWEkBooUecyyk1pDV%2B7wkUv8eFlv7gT9KxPWGzjF%2BYe1Knz7a2zFV6jHmR4vFLnnlrBZy3arvYZdPG9FsRP%2FIWG1D%2Fz%2FEgqfo%2FTS2L7UzfEkta03T9DVxPxl4zqqdUZm7e5dhTc878rTHAmiqy7OBmKM8LdnFyqhAqUklUKaa4tcA05lYH1O7m3hXYhFr4k2GiO30cpzfWVJWYkaJ2gu0GlJDXpssv32b3VcIYvnT5%2FiVY4nxCPZhdC0zkJ0nASuNaYLbiojb0hlKTVgBMtRi9eY%2B41ixX5r27wWRVzDw98tgCswfBmwi%2BXyQ3vsdX2DHQ3dy4b5X8oH9Dw514ZwPn3g%2B1aLW7SUjC7eVDcuUFnz0beZayekwJAA978TV5XTKIe72cTYYf7sVJd1yt2GR%2Bd1bdRWcxIsdW9jDoa%2FiDvKdYmyEMwleHtvwY6pgEcDYnEk1U%2FAe2wMMVYhbpZbcBApISPWcxoKY3JxAfZw8ORDQgeRqkUWvKsT2SbjyIwUXB6OpD%2FxzUNG7OwXKka1RzO8F61Vqe0tNRlBCKmKvNjga1dO7brEAfWXRHPskQmsshJLgOY5YVYAAxCgpwijKq13KuPoytdfCAyLqgm8tGXD3cHsWNg5ZDEeuo%2BUj8tgQWB%2BlsYg49SvCG1IDbIcR5hHApI&X-Amz-Signature=e52c6aca02a4164597cdc75c0e405beb6018271cd20cbeea80bca86bfdc88b07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
