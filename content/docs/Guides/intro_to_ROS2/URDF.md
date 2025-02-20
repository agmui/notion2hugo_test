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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLAFJXE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmXxLhuD76YbX%2FTb8g%2BkXIdO2nVXPOBMjmEHq08ukk4AiBsIbS6hgPh0krqEUESDYOydlrVHgYfbVi5a27ZtLGp9yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5h79ffIIcma%2B7WWaKtwDGVrwMi1JFKKzmYrU1fJwvpoyyCcZqL05Je1nqXX4WzcdDqbSYrfAye5u4IS58OOfdNfEshfd8XPhBa42Bte092jUF10IBBM%2FGB09AF9riwMY%2BcU2zmIREyZI3Ns%2B%2BnnUnfbSkMa%2BA5AaiGNgmyoIzBCqCticGMTWNZ7rTF1rfVypZoYHhhrpf%2FY5qYmqhPou9%2FXpaFu3EtR70wvleHMLi45enXgmbaaEjFqGGO1Is7TFPKJhjn%2B1Km7jFnSmCp9LdLGRpQUAjyXRSgyyXcz6cEmNJEPEPlH%2FwMmOc8LfZlXlInH7uhMIn6lYTE%2B87brWrmhvGr0OSTYJLZiKWsZm2CisZj%2BOarxfZgq08%2BL8XvU%2F6Oo0IR3p7TCwNxl9%2FfTrtIvfr%2FbeHoFdQd9scBOhydRSBmGXl7x%2Bt2CpCq%2FspGvJQcc13HeAJ4rzpQOwnblXrCSCb8aATP4u1UJMW5wYrYv8fikuVBex8HhPnKkhMekAcoRrCsWdCHRsX6WRSA08a1Dha1JbSDx7cwS77zDlLiYTWuZL0UCv9gK6x20YYclTmi9icQ%2BC%2FeLGtDx6kUhOhvqA2mOmUWu7GoCk1XmHyRMzJzlT1GUXFyaO8eyNreQxG%2F8%2B4qtZQPhFf6YwwdfbvQY6pgFt2isSeJvDsaZcYAjhL95eYLqGoeLqn7HbNsgfonWfcLkKjiHi2lfvXYubedTHz16y7KC20Mz7OloQV5eUlyQL9TrQFSkxuPub5GYEx40CoDmyPn3fR%2FZs5jP0kZ8vSRarbSKajPauYR3V0hPq3RTmS%2Ft2Nf%2F7KibDAmkh0Dy1%2BnrN4TskYrxVZFp5gh1Yl7fo6LuEvwQnJsXjYsfdU9BH61GECymu&X-Amz-Signature=352d7129323a20493941adde6c6b75e32b526c502dbb0c774fca32e22eae4785&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLAFJXE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmXxLhuD76YbX%2FTb8g%2BkXIdO2nVXPOBMjmEHq08ukk4AiBsIbS6hgPh0krqEUESDYOydlrVHgYfbVi5a27ZtLGp9yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5h79ffIIcma%2B7WWaKtwDGVrwMi1JFKKzmYrU1fJwvpoyyCcZqL05Je1nqXX4WzcdDqbSYrfAye5u4IS58OOfdNfEshfd8XPhBa42Bte092jUF10IBBM%2FGB09AF9riwMY%2BcU2zmIREyZI3Ns%2B%2BnnUnfbSkMa%2BA5AaiGNgmyoIzBCqCticGMTWNZ7rTF1rfVypZoYHhhrpf%2FY5qYmqhPou9%2FXpaFu3EtR70wvleHMLi45enXgmbaaEjFqGGO1Is7TFPKJhjn%2B1Km7jFnSmCp9LdLGRpQUAjyXRSgyyXcz6cEmNJEPEPlH%2FwMmOc8LfZlXlInH7uhMIn6lYTE%2B87brWrmhvGr0OSTYJLZiKWsZm2CisZj%2BOarxfZgq08%2BL8XvU%2F6Oo0IR3p7TCwNxl9%2FfTrtIvfr%2FbeHoFdQd9scBOhydRSBmGXl7x%2Bt2CpCq%2FspGvJQcc13HeAJ4rzpQOwnblXrCSCb8aATP4u1UJMW5wYrYv8fikuVBex8HhPnKkhMekAcoRrCsWdCHRsX6WRSA08a1Dha1JbSDx7cwS77zDlLiYTWuZL0UCv9gK6x20YYclTmi9icQ%2BC%2FeLGtDx6kUhOhvqA2mOmUWu7GoCk1XmHyRMzJzlT1GUXFyaO8eyNreQxG%2F8%2B4qtZQPhFf6YwwdfbvQY6pgFt2isSeJvDsaZcYAjhL95eYLqGoeLqn7HbNsgfonWfcLkKjiHi2lfvXYubedTHz16y7KC20Mz7OloQV5eUlyQL9TrQFSkxuPub5GYEx40CoDmyPn3fR%2FZs5jP0kZ8vSRarbSKajPauYR3V0hPq3RTmS%2Ft2Nf%2F7KibDAmkh0Dy1%2BnrN4TskYrxVZFp5gh1Yl7fo6LuEvwQnJsXjYsfdU9BH61GECymu&X-Amz-Signature=a6dadf275d8cd537df68151ea24924ef90bb6de7803cbf7ccfb0f7a33ba82ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
