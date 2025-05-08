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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWA7D3W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl%2BH%2F2ImKl8gwT6JW%2BRFLZw8znXKQPHQQMbecRu8PI3AiEAjxdOr5QwG0QUm5DMeWoaUGRbjr6BKT6c0qIlEn6jkxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDCvV4DIHVf2UhYfrSrcA5c4YeKsjWSzsy%2FxfX2o4chayKSmBi8XSI0tYiG80Z%2BJ%2BdmxzX3Wxbhu6dzUswaJjy8kKh1dRhoUeX%2FtTB8dUHFGUIMueUCnaDaGqyNKjnICgmjYp7%2BZyioUY5kVNh9PRHRXcRRka5wA8u%2FjBdz0FuBM1ya4JGoQvL%2FHM3TF0XcBWKKST1DP3ITnUI%2FkkmK8HWpKf5WVICWFejP0HpV1b4Zo4OYV77zf9zSktDpxS1SkoNR%2BsyaI%2F%2FNcTGn7fj6EzE5BrwVuxkxMydrjGhHKOH3Gv9rIHqngqScQJXCZ1uw0TZ86hODKi%2FjSZIgz5oigtuOkdo9d%2BI6Op0hxMZdY2F%2Brm7j6zrqPTyGP%2B%2BtC%2BpYWt5NWybr8S5Dwx6mNgggHxEC7jgoXH3ZmXJtQ2%2BcNTN34DKfBSzM6xPkunOiOqbYSzsgt%2BgYyocxu9sh6CcP5qx6ohu778DUfT4SWlcrrkoqa1bS9hDkT2LRyoN9jrBdshdK9yDcvKF%2FQWKFvDewXLays8vb2v2m%2BgQ84oLEMBLN8DxUyZvEPV%2BUI2BEE0U5WPswVxOa2uxZ5sCgvfd8Vsztl13UP9AAiuCIRIYiERPhE6IJ%2F6DIWUmiS06akusooC2O62Hjg8Eo4pV1oMOao8MAGOqUBVtn92EmgIvTl9qnse5J4eaUjZWwKwMHuoPhNkzLDLiwB6N7eM0TYM0Tmf3%2Bc53aiTFqKkV1WPlbHIcGfziKUrwhIq8B4Yt4H4t2AaRpWVtPoriAU9trSCy6kqkNf3aq%2BSeG3ZphKJaO3uGHuz09LqN6XSGhNJgG38VoCNaxuU6mpg4vUWaKwHHuO0LX3r9hfWHD15QPFVIPq0r7bsKp%2B25lf%2FwKp&X-Amz-Signature=3757bf8d2d44fb0e87c80035ba03eea5bbab4d80105d63bddb4139f5d15a685b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWA7D3W%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEl%2BH%2F2ImKl8gwT6JW%2BRFLZw8znXKQPHQQMbecRu8PI3AiEAjxdOr5QwG0QUm5DMeWoaUGRbjr6BKT6c0qIlEn6jkxYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDCvV4DIHVf2UhYfrSrcA5c4YeKsjWSzsy%2FxfX2o4chayKSmBi8XSI0tYiG80Z%2BJ%2BdmxzX3Wxbhu6dzUswaJjy8kKh1dRhoUeX%2FtTB8dUHFGUIMueUCnaDaGqyNKjnICgmjYp7%2BZyioUY5kVNh9PRHRXcRRka5wA8u%2FjBdz0FuBM1ya4JGoQvL%2FHM3TF0XcBWKKST1DP3ITnUI%2FkkmK8HWpKf5WVICWFejP0HpV1b4Zo4OYV77zf9zSktDpxS1SkoNR%2BsyaI%2F%2FNcTGn7fj6EzE5BrwVuxkxMydrjGhHKOH3Gv9rIHqngqScQJXCZ1uw0TZ86hODKi%2FjSZIgz5oigtuOkdo9d%2BI6Op0hxMZdY2F%2Brm7j6zrqPTyGP%2B%2BtC%2BpYWt5NWybr8S5Dwx6mNgggHxEC7jgoXH3ZmXJtQ2%2BcNTN34DKfBSzM6xPkunOiOqbYSzsgt%2BgYyocxu9sh6CcP5qx6ohu778DUfT4SWlcrrkoqa1bS9hDkT2LRyoN9jrBdshdK9yDcvKF%2FQWKFvDewXLays8vb2v2m%2BgQ84oLEMBLN8DxUyZvEPV%2BUI2BEE0U5WPswVxOa2uxZ5sCgvfd8Vsztl13UP9AAiuCIRIYiERPhE6IJ%2F6DIWUmiS06akusooC2O62Hjg8Eo4pV1oMOao8MAGOqUBVtn92EmgIvTl9qnse5J4eaUjZWwKwMHuoPhNkzLDLiwB6N7eM0TYM0Tmf3%2Bc53aiTFqKkV1WPlbHIcGfziKUrwhIq8B4Yt4H4t2AaRpWVtPoriAU9trSCy6kqkNf3aq%2BSeG3ZphKJaO3uGHuz09LqN6XSGhNJgG38VoCNaxuU6mpg4vUWaKwHHuO0LX3r9hfWHD15QPFVIPq0r7bsKp%2B25lf%2FwKp&X-Amz-Signature=53b7c5baa1203ae6f47d45ad63e801fce054705644d23cfd8b42f4eed665fb19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
