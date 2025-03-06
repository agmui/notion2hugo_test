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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42KHWNU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGqfDRp3ikv3HJ8utTNnereEx00JX7Bl9oTPDhGJWpgAiEAsufgvyDLMZYYU1kPzORw2CIOWup%2FWmNv4RJ0H47tBwUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCAYOFOhN2wJf5XMTSrcAzraWTUf4xpxZ8w66Xmb%2F%2FWB9YyI%2FNNMP5WfkRl2%2F1Fl2dDAh4RAtIbBS76jJWren2cw%2BczRM6ReyJpvVm3FmSkrrB0kn3Fr2gjOuF5B2HPnXM%2BblSGJe%2F8x9Jyb77IbTb2HfFiwnIC9PUrzUj7ioQ10R6cAwSRzczxM9RVdZaqpeJCcpZcCPOKo1SuVRADM1c8IBHbMfsUTkBU4cBblxFTGstYrcNIS6CveIbesBUDCQfwG0%2BAuB4GUGCLY7Cw%2BJy0lUBHs45AdX0StmDgqljJXI0NpaA0jzWz9fE6SQPyjPlmSL7np7FNrveD6Fy4OkeHWnsmJyXgru9ldYec8G3ByhDuFj3ygDYl8Psc%2FfOaA1c2YDuuUumXKiQrXZg1iiROqvAFTonyfXFH8D%2FPbiHuLKLYnVnytzgiBzA%2F17ANWgWrPBuKVtpnO4jRC4264J0earWWoTEAGkwy0gE2hc7hantU5jnyl0WN9oSjaV68tmgCaarNR0FgAEjvD5QSIH5JGtZBx9znIv1mXH33z2WRXkDPNPWp7U%2FsyS4BrsNlKeQiEBIJ0SHlKq94uXuy0zhz%2BJ%2FOzciNeGVGhgmSBmYxms3gJnAcJOKy9WikrUcs5SMpMKbKsu5YK2vebMKzJqL4GOqUB9qPPoGMwvZ3aMc5FxRO5UhrQAcf0G6%2BYyHwfomZbf02i7PmEx5s6O7BOu0bB69x0mouJPbrNrkQpG66%2FmkNLUX9qPD3ZNtQ%2FUHA6Q2ffB0RjxwxiYkFolqSeiSdx5iAjJDvjBXZTas%2B6VDdAt8%2FMu1J%2BRgFcMMVBeKk0ZsnW40qWQ%2FzQk6pAuhO14UPi6SN9EExFhWCmpd6qDaYOFIWJYkJ%2FLZyU&X-Amz-Signature=be3f93022e1fc0b10216800f01aed7b568ae3ee5b4fe0335303c0a26d0afe0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42KHWNU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGqfDRp3ikv3HJ8utTNnereEx00JX7Bl9oTPDhGJWpgAiEAsufgvyDLMZYYU1kPzORw2CIOWup%2FWmNv4RJ0H47tBwUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCAYOFOhN2wJf5XMTSrcAzraWTUf4xpxZ8w66Xmb%2F%2FWB9YyI%2FNNMP5WfkRl2%2F1Fl2dDAh4RAtIbBS76jJWren2cw%2BczRM6ReyJpvVm3FmSkrrB0kn3Fr2gjOuF5B2HPnXM%2BblSGJe%2F8x9Jyb77IbTb2HfFiwnIC9PUrzUj7ioQ10R6cAwSRzczxM9RVdZaqpeJCcpZcCPOKo1SuVRADM1c8IBHbMfsUTkBU4cBblxFTGstYrcNIS6CveIbesBUDCQfwG0%2BAuB4GUGCLY7Cw%2BJy0lUBHs45AdX0StmDgqljJXI0NpaA0jzWz9fE6SQPyjPlmSL7np7FNrveD6Fy4OkeHWnsmJyXgru9ldYec8G3ByhDuFj3ygDYl8Psc%2FfOaA1c2YDuuUumXKiQrXZg1iiROqvAFTonyfXFH8D%2FPbiHuLKLYnVnytzgiBzA%2F17ANWgWrPBuKVtpnO4jRC4264J0earWWoTEAGkwy0gE2hc7hantU5jnyl0WN9oSjaV68tmgCaarNR0FgAEjvD5QSIH5JGtZBx9znIv1mXH33z2WRXkDPNPWp7U%2FsyS4BrsNlKeQiEBIJ0SHlKq94uXuy0zhz%2BJ%2FOzciNeGVGhgmSBmYxms3gJnAcJOKy9WikrUcs5SMpMKbKsu5YK2vebMKzJqL4GOqUB9qPPoGMwvZ3aMc5FxRO5UhrQAcf0G6%2BYyHwfomZbf02i7PmEx5s6O7BOu0bB69x0mouJPbrNrkQpG66%2FmkNLUX9qPD3ZNtQ%2FUHA6Q2ffB0RjxwxiYkFolqSeiSdx5iAjJDvjBXZTas%2B6VDdAt8%2FMu1J%2BRgFcMMVBeKk0ZsnW40qWQ%2FzQk6pAuhO14UPi6SN9EExFhWCmpd6qDaYOFIWJYkJ%2FLZyU&X-Amz-Signature=7ce0342cb1bf6efbec11fd272ce6841fdf10176b1a97324ba144b3271a245983&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
