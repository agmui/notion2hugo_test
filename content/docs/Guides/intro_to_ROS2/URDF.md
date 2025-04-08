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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYZTRU4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9wnI2Uf1jWtD83kn83oIszWVaSnk6YCkadK%2BNMc3BYAiEAn8jJ21y6wuo%2FjohwrnqbaSF0eX5uQfOzIkvbsOSxtRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDtrnkLUMpLca7Qm0yrcA3Ewg0xu8iXrkgsYkM%2F0zj6tLF9xWjbbWXk1jCxlCs6k%2FHfL%2F9vSTUglwl0z%2B18mxA6nINFgBGan9ghJ4zSDt6mpmJ8ffEoiY4QKQ2e6hc7ns%2FY9MSLAKVEs%2BlHYhjI9oUB4RAh1eooOLfdHFa5r40cm9omas68rO%2B8JGWbDERCQuWttJkj9LJ4C6yI7m5ErgEhNny10O5Q9dIAPkB7FNsu%2FirKXQQ9CIRWNgFOfqOdb5YRM2JjYh5s0yTG2mtQPsWr6T2RndJ%2FxGjfjbTlSEsucxafzYtnCmnglPjSFLRZbHFGJ7ELHqN6%2F9yXz3Jsxqewpq6PT9rWZWrj5mUyeDLIy4dBcBvuM3Vra65JKqh%2BdlceXCRj7zsGeFv5XYM7kQOZN1vmrZFKEGS%2B7oiYOGvdZqQeQd3O%2F6GGv6M4qm9iTLJGmM5%2BtzdUvIjbPc2CCRklDypaYcxwOKMSD0QqXjKjdSfvCdFfFJHk73DhnoQkcXiiXOT60Y12bdlvtUY%2BxgM5TYcUjkyXfP0n%2Fb2TpnzNaukZtwXl9Txz3FLmDEUfFUNyI5DpNllnpHhhkzauXnnJ8XIHtNdtGu5MHefA9lIOzCzsrq3FW2X9gz%2FsXV0CfBe4pIWUKtvRQ0A3%2BMNHU078GOqUBCsUPqWDaIXJHSG7P4Qt7GdVlzLYAJjUbG%2B%2F3JC8d1rZVPGVCtTFU3iPipfmfXPML9HXSkFD3feAb5NhKIFZm9ZplO9nM8JqzoseCiyYEB3IEz9Q8cLZXOR%2BUmzwQCcgtnxyJzKKfafFuYPGQNu5SbIfWenXnxQ24s4zrGxdrLYrcKFCGg7XC6xVrI0OuL8piUotYKauxkr%2BA3%2Fc5XCOUuYyKEGFE&X-Amz-Signature=7672374eb8a03de0a88bd646dc8d85350baaa1e8604ab287c6fd0290e4070a99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYZTRU4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9wnI2Uf1jWtD83kn83oIszWVaSnk6YCkadK%2BNMc3BYAiEAn8jJ21y6wuo%2FjohwrnqbaSF0eX5uQfOzIkvbsOSxtRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDtrnkLUMpLca7Qm0yrcA3Ewg0xu8iXrkgsYkM%2F0zj6tLF9xWjbbWXk1jCxlCs6k%2FHfL%2F9vSTUglwl0z%2B18mxA6nINFgBGan9ghJ4zSDt6mpmJ8ffEoiY4QKQ2e6hc7ns%2FY9MSLAKVEs%2BlHYhjI9oUB4RAh1eooOLfdHFa5r40cm9omas68rO%2B8JGWbDERCQuWttJkj9LJ4C6yI7m5ErgEhNny10O5Q9dIAPkB7FNsu%2FirKXQQ9CIRWNgFOfqOdb5YRM2JjYh5s0yTG2mtQPsWr6T2RndJ%2FxGjfjbTlSEsucxafzYtnCmnglPjSFLRZbHFGJ7ELHqN6%2F9yXz3Jsxqewpq6PT9rWZWrj5mUyeDLIy4dBcBvuM3Vra65JKqh%2BdlceXCRj7zsGeFv5XYM7kQOZN1vmrZFKEGS%2B7oiYOGvdZqQeQd3O%2F6GGv6M4qm9iTLJGmM5%2BtzdUvIjbPc2CCRklDypaYcxwOKMSD0QqXjKjdSfvCdFfFJHk73DhnoQkcXiiXOT60Y12bdlvtUY%2BxgM5TYcUjkyXfP0n%2Fb2TpnzNaukZtwXl9Txz3FLmDEUfFUNyI5DpNllnpHhhkzauXnnJ8XIHtNdtGu5MHefA9lIOzCzsrq3FW2X9gz%2FsXV0CfBe4pIWUKtvRQ0A3%2BMNHU078GOqUBCsUPqWDaIXJHSG7P4Qt7GdVlzLYAJjUbG%2B%2F3JC8d1rZVPGVCtTFU3iPipfmfXPML9HXSkFD3feAb5NhKIFZm9ZplO9nM8JqzoseCiyYEB3IEz9Q8cLZXOR%2BUmzwQCcgtnxyJzKKfafFuYPGQNu5SbIfWenXnxQ24s4zrGxdrLYrcKFCGg7XC6xVrI0OuL8piUotYKauxkr%2BA3%2Fc5XCOUuYyKEGFE&X-Amz-Signature=1fcad8e133c75d76fe3ddd569abf168c4e01115fbec3df0dfa82c61eec5d6a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
