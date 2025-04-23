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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26AYQX5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDbmdn4wqUsBMK%2FHLGV8jQy6CNFgm8roYqnpT3ANoG0WQIhAJJceauOBpPU3I%2Fvp5UvHCmfAms5avsh%2FzXvQ8sES%2Fu2KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2Bgh%2FCylSW0OgEJ8q3AMjQKoQfvFkQ0pxG2mLcOuvOT5XHfsf%2FAv%2BTrvzu749EzbJgsUIjfW3b1Ay005hpUOs3eyaqd%2BJksMoUo8wc8GBh4Aq7BATMJJSBd4sMwyDkkEJTbJobUOmnB644e6N51tJWk1URmq1oGYWMiYtr8ONCTJVdD46Okk3yLW5aC%2BWWV2Sx2U9Pu%2BUGXfcJ%2FTaZQVpyKfBzwrCQkoBvc%2FKVBc9ABTB0az1wbwmKEF7D4qJzmAy8WzKwr4YqRSsftdWx1MY6AxA0dod7EFGOWsUSNiW3VW6Q%2Bvq%2BLnuynkqQmLdIjwBOehqyA3KHD9OINOI1rTKJATOyYkascfoY5%2FkkCrUH1edFVwZcEp6izBKBdjkmoLOL4DddQcvq%2BPxXKkO8mfp%2BPSKkUm5yBKjUrIVmmwLmd%2BBsxefH067XK%2BaC36p4PlwI8a0rjSfY%2B%2F1aiTChEIHRzAxdiRVQE0s7edNQYGf72wdL9NI3mg%2BKgmXXvCAmmdwVJHkJ2JTdJwBduPLgE6axy3jOc7M6IcpOws4XyJVb16rUckepTY8E8XonPRtIbuUe2Y0vd3jX5j%2F4xhcPD3OU920Ihnb9NQ0j%2BlVpH4xzLsnC8Voq1KMOWq07TmNA%2B5wwGi2CS7hqN%2FSOTDR8qDABjqkARqTFOHNauiKMZL1KUGSloU2Eh5ZOMemikznlxuyysREpaGyZ4jKvlimL1IL4eFm6xrbOz8MIhLOXUSkQlZRe%2BqFkwf0vTOtjdU6dtS1Uzf3NSyG26%2B9vFmJLC2ga5lMUjNc%2BC5UF%2FA7%2BaLJrWhWkL%2FXOOeiRUlzYxLTOYdcA2JLmw%2BNlu66uRDdanhkGrgv8%2B0bTBjExjJxLiuV98QS7yWVyM5f&X-Amz-Signature=8eb1a7817a8e7bcefc98ff890555f9d5921f856131acf3984b3c98f09a03e0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26AYQX5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDbmdn4wqUsBMK%2FHLGV8jQy6CNFgm8roYqnpT3ANoG0WQIhAJJceauOBpPU3I%2Fvp5UvHCmfAms5avsh%2FzXvQ8sES%2Fu2KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2Bgh%2FCylSW0OgEJ8q3AMjQKoQfvFkQ0pxG2mLcOuvOT5XHfsf%2FAv%2BTrvzu749EzbJgsUIjfW3b1Ay005hpUOs3eyaqd%2BJksMoUo8wc8GBh4Aq7BATMJJSBd4sMwyDkkEJTbJobUOmnB644e6N51tJWk1URmq1oGYWMiYtr8ONCTJVdD46Okk3yLW5aC%2BWWV2Sx2U9Pu%2BUGXfcJ%2FTaZQVpyKfBzwrCQkoBvc%2FKVBc9ABTB0az1wbwmKEF7D4qJzmAy8WzKwr4YqRSsftdWx1MY6AxA0dod7EFGOWsUSNiW3VW6Q%2Bvq%2BLnuynkqQmLdIjwBOehqyA3KHD9OINOI1rTKJATOyYkascfoY5%2FkkCrUH1edFVwZcEp6izBKBdjkmoLOL4DddQcvq%2BPxXKkO8mfp%2BPSKkUm5yBKjUrIVmmwLmd%2BBsxefH067XK%2BaC36p4PlwI8a0rjSfY%2B%2F1aiTChEIHRzAxdiRVQE0s7edNQYGf72wdL9NI3mg%2BKgmXXvCAmmdwVJHkJ2JTdJwBduPLgE6axy3jOc7M6IcpOws4XyJVb16rUckepTY8E8XonPRtIbuUe2Y0vd3jX5j%2F4xhcPD3OU920Ihnb9NQ0j%2BlVpH4xzLsnC8Voq1KMOWq07TmNA%2B5wwGi2CS7hqN%2FSOTDR8qDABjqkARqTFOHNauiKMZL1KUGSloU2Eh5ZOMemikznlxuyysREpaGyZ4jKvlimL1IL4eFm6xrbOz8MIhLOXUSkQlZRe%2BqFkwf0vTOtjdU6dtS1Uzf3NSyG26%2B9vFmJLC2ga5lMUjNc%2BC5UF%2FA7%2BaLJrWhWkL%2FXOOeiRUlzYxLTOYdcA2JLmw%2BNlu66uRDdanhkGrgv8%2B0bTBjExjJxLiuV98QS7yWVyM5f&X-Amz-Signature=505d2ec29287eb33fd718607d543f6a68e871d214072cdadcd9df308be91b60c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
