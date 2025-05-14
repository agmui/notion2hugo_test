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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKST5KI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHAyHgBgeb7cPy6VOzSHuMI3w6cc17yAkjDrAwK5Li2UAiEAzBoEV1NcbL3L1yBuMEQO6%2BWffs1O3Tj2goLsQ6vnR9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxKA1JsGZYSK%2FuuyircAxZj5w1EseN7VDEzdXZ%2BRHalzm%2Bw%2FRF5dMhOGjGyKhUft8q0%2FOBCdRdiUFCeAhyGizciqdyM%2FFJYdUzmdtFNyXRw6LS41abpleVDbQmtIbZtOpdz4%2BILBhSHZfF%2FV9LsTLX0XgUHuok%2FKWH6%2B98BtpptR2JkyvXQbFHq80YmXUpsEWDaM7DErszbCQKuWFa4QtIrwejOVvyTZczPJjKZMULcVEXmfr0eJ8HFH1tI6vA6d2LeprkGWuVz15ET5JsQtYVePXIILnSWQj82G4c51sEOrAvD1WT6ykonlRH9W%2BFeKhRZmHdCIseP3GHraREXUJVguAHHfguCPSsq0GYRG7Cbnr1VHVGfW9KmVBp8ieSeRaHEgX6dQQhz7mMyUNnXbDUoxByj1UkXjg%2BV9WJ3KPO2KY8V0E7PV3oFGZ6sTPJhvstuJnS5v0xB7G35UN5Y6AvWqHBWaseJGpV7agyyB%2B1KAch2d4vAbjcaShJIPafUklnEl4QbEtoEQLdkQPFjy3BFXKzSgC%2BjubjdT%2BlpVGnT0wLsiN1q1Pj72rPF01kltr9s8I7ShmaNE39WdwLqeYskaGO2cqDG0r%2BOjIbAYfDEz19fecuvPEDm86nySh%2FyJg0eP6FlEe8VZZO6MI25kMEGOqUB1a3rL5agROGmjGDztb55yFt%2Blp7BNh%2B4Ny%2FqL0cM0o6bstfeN1W7DFJXHcWvYBgTHwukQV126lSkSkpah%2BIXig1h72IQDpzBNdyKsURMjBW3eKoxIVP1zN4SQFtjni61MxeSDpSjO7ZBAslV%2FZ0htSaRhbhjY2CW2qzxaKHUJ05dtjDJaVY1t13VjxGckN2GUvxgu3S8XoIfczUNZ68WGhPzYbZG&X-Amz-Signature=292ed529419e6ec85bcf438e20907c6e0bb55dd7d39008c58a03cea698d8bc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKST5KI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHAyHgBgeb7cPy6VOzSHuMI3w6cc17yAkjDrAwK5Li2UAiEAzBoEV1NcbL3L1yBuMEQO6%2BWffs1O3Tj2goLsQ6vnR9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxKA1JsGZYSK%2FuuyircAxZj5w1EseN7VDEzdXZ%2BRHalzm%2Bw%2FRF5dMhOGjGyKhUft8q0%2FOBCdRdiUFCeAhyGizciqdyM%2FFJYdUzmdtFNyXRw6LS41abpleVDbQmtIbZtOpdz4%2BILBhSHZfF%2FV9LsTLX0XgUHuok%2FKWH6%2B98BtpptR2JkyvXQbFHq80YmXUpsEWDaM7DErszbCQKuWFa4QtIrwejOVvyTZczPJjKZMULcVEXmfr0eJ8HFH1tI6vA6d2LeprkGWuVz15ET5JsQtYVePXIILnSWQj82G4c51sEOrAvD1WT6ykonlRH9W%2BFeKhRZmHdCIseP3GHraREXUJVguAHHfguCPSsq0GYRG7Cbnr1VHVGfW9KmVBp8ieSeRaHEgX6dQQhz7mMyUNnXbDUoxByj1UkXjg%2BV9WJ3KPO2KY8V0E7PV3oFGZ6sTPJhvstuJnS5v0xB7G35UN5Y6AvWqHBWaseJGpV7agyyB%2B1KAch2d4vAbjcaShJIPafUklnEl4QbEtoEQLdkQPFjy3BFXKzSgC%2BjubjdT%2BlpVGnT0wLsiN1q1Pj72rPF01kltr9s8I7ShmaNE39WdwLqeYskaGO2cqDG0r%2BOjIbAYfDEz19fecuvPEDm86nySh%2FyJg0eP6FlEe8VZZO6MI25kMEGOqUB1a3rL5agROGmjGDztb55yFt%2Blp7BNh%2B4Ny%2FqL0cM0o6bstfeN1W7DFJXHcWvYBgTHwukQV126lSkSkpah%2BIXig1h72IQDpzBNdyKsURMjBW3eKoxIVP1zN4SQFtjni61MxeSDpSjO7ZBAslV%2FZ0htSaRhbhjY2CW2qzxaKHUJ05dtjDJaVY1t13VjxGckN2GUvxgu3S8XoIfczUNZ68WGhPzYbZG&X-Amz-Signature=f9f9d56ff7936021bab3a2cb5970de351d90394340f56f9cd5d92e6927224bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
