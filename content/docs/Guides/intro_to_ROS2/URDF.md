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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X7F7LM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDq0BrlTbnWQteC4Yo6oNC0w0Ncd9b8iN2Hy57Q3hT%2FzQIhAKBv%2FViXo5YfCU90%2FH1aL4CSOemmLhARD2Yt9J7kj4MHKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZFmHy%2BC8zmrgBlKAq3AMaHg1PkGnc599pC1I8S1Tw5pljJwnHWKUyaQEmKj%2FanHmtZjtM1ZqJmc4a3Ini8WcFiAVtvES7aTvYbwW5YhsH4AGt8FQzPSiVTX%2BAAEyeq7mIwlfu%2BQ%2Bke%2BMvtUdl3V8LzsaJBICaABRKJmCpIbzw2njkEZ9j0MvJI5gQy5a5HD7Go%2BafAvcnj7hmTfDfSDWcvFqp6QXS5nvUuk1VV%2FfS0FgAVZcby27EsTgmdeJSXogyuvijxflFk%2BAvx8MMQT%2FUtcN7DX%2FvWm2ZX3E6xFSlww8uZfmWJ18gHlJqjeZD5yosadGVwM1GN418LifK4rfEke2de3W8gPvjZTeclbegoHb0JxBQRrRkpkYERfrfeedpkz%2Bgtb4aORnJbOTETleqb7PiUDN%2FFshnrOIU1qWTlRfkv9cwY744dbc7Jd%2FLeP0bsseskSSKjnwxOJqT6uwYubJl0kcu4LxxIfMaCM8sLp66zHC40wtMUaINGV2zQ3eCEOcVZUgQe%2F%2BZIqEk%2BfI06OOUH5L1lTVLQ00jxyHypBwyBD4kUGYI2hUbuxgliEsh8hV28yspLsNAmHzL940iBIKxSA3PVln6AdVqCzi4%2B9Z7xLIzxL%2B0uqoZ71V%2Blv%2BzUuJYdKN6EVSO5jDS7aW%2FBjqkAbv0TkMHYTWlcZjnGXhjSWwI7%2FNQyUWot5xcCuB7FKkGFK5h07%2ByXenCkxO45Cj9qiGdaxpmUMVixv0TMH89bGpskoGzvVkLAgdR9jBbH29SI1gOTqcuoyN4p0Fuf9xumdt%2FYh9fpEsyfH3Vm3bAYbDR3iiB1tx8jLOxjwtgUOBW1wOGZyKikNzJ4I3L3z5yPXHM6KX7xoFeOXlHDizmjXNs9wN7&X-Amz-Signature=f4de2cd3866df66a4deedc78234757e1222381a7c60c12c9de465834b5a0cb94&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X7F7LM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDq0BrlTbnWQteC4Yo6oNC0w0Ncd9b8iN2Hy57Q3hT%2FzQIhAKBv%2FViXo5YfCU90%2FH1aL4CSOemmLhARD2Yt9J7kj4MHKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZFmHy%2BC8zmrgBlKAq3AMaHg1PkGnc599pC1I8S1Tw5pljJwnHWKUyaQEmKj%2FanHmtZjtM1ZqJmc4a3Ini8WcFiAVtvES7aTvYbwW5YhsH4AGt8FQzPSiVTX%2BAAEyeq7mIwlfu%2BQ%2Bke%2BMvtUdl3V8LzsaJBICaABRKJmCpIbzw2njkEZ9j0MvJI5gQy5a5HD7Go%2BafAvcnj7hmTfDfSDWcvFqp6QXS5nvUuk1VV%2FfS0FgAVZcby27EsTgmdeJSXogyuvijxflFk%2BAvx8MMQT%2FUtcN7DX%2FvWm2ZX3E6xFSlww8uZfmWJ18gHlJqjeZD5yosadGVwM1GN418LifK4rfEke2de3W8gPvjZTeclbegoHb0JxBQRrRkpkYERfrfeedpkz%2Bgtb4aORnJbOTETleqb7PiUDN%2FFshnrOIU1qWTlRfkv9cwY744dbc7Jd%2FLeP0bsseskSSKjnwxOJqT6uwYubJl0kcu4LxxIfMaCM8sLp66zHC40wtMUaINGV2zQ3eCEOcVZUgQe%2F%2BZIqEk%2BfI06OOUH5L1lTVLQ00jxyHypBwyBD4kUGYI2hUbuxgliEsh8hV28yspLsNAmHzL940iBIKxSA3PVln6AdVqCzi4%2B9Z7xLIzxL%2B0uqoZ71V%2Blv%2BzUuJYdKN6EVSO5jDS7aW%2FBjqkAbv0TkMHYTWlcZjnGXhjSWwI7%2FNQyUWot5xcCuB7FKkGFK5h07%2ByXenCkxO45Cj9qiGdaxpmUMVixv0TMH89bGpskoGzvVkLAgdR9jBbH29SI1gOTqcuoyN4p0Fuf9xumdt%2FYh9fpEsyfH3Vm3bAYbDR3iiB1tx8jLOxjwtgUOBW1wOGZyKikNzJ4I3L3z5yPXHM6KX7xoFeOXlHDizmjXNs9wN7&X-Amz-Signature=96d4f876f746919a13036da50b34351c5c6145946df5599e5faffc4406020847&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
