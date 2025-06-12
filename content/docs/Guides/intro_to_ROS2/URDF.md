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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ULDY7X%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDR6FlNucge5jJB0Pbsl3UehJUpVvWMga5YyY5JQ71nSwIgU0qqzd3QdVTQ2zaqKuh059d93tQuRbzhflyzKs2F8SUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy1zrD8Qt2FAPnwbircA6hX%2FaiIUU3rwQSPJf9JVSwaaac2ER8rs3JGXyKWpczsWwA76qJkOttdaaSTKZ%2FHKxpPei7lrq9ZEe9V9MFhEeHfh%2FEpo1dMyxvZYTaZ%2FPmmh2SDkUgqIDdWeCxL5yoTdIyR6n7Yvjf2sthlGRghEEQpPBmhPGThtfJNskryJPgeU%2BdV4riMt9Jh3DqSwVu6Pz%2BSZDBQv855sCMuA%2F9xo4%2B97Sc4awoWHj1tiwkoRU8wWCFEME6sHvyUqiw%2FNvIxIzcXDxw5deHQOJCrx9gHB97hfW2b5%2FO9zMIBiN5gMkFZvKn7ZPCx63%2BMK3g8vtVP9fxHmC9RvgZvKLUQ7kfzOzhJ7Dr4OIe9hoBYmWGSDsAu0s77ijr%2F5yZjK0SJ%2BHgSfeteDqFHlpLcDhpWknSGEdj3SrCEIHSHcZYKhOXk8yFK8cgYzaZH5JH0tp86g0D3b6RHlkOkUPpXtdCoy1uwQmCSxyE6cO%2F5lnkk3Q5I83SByypoQn3cFPbEgFUk%2Fr4kng8Tv%2BDNFyGPzGztC7FbjbpqTmMTcwOI%2FTtYMtqUHJuk%2BUb623bwpMJod7GqxtUV7YWHIe%2FuF90RDAi2CVGCDqgwmP%2BMGO56JLaKHjRE12hJv%2FEV5N8WuTG7mAxPMJahqsIGOqUBe6hR49jdzlLXAIAn0Z04S4UWSLTcPYro88PrrYa3OOV4H8QMHN5lVoS4ignOjsfaeUjO%2FLGqZW1F0%2B4AivkwZ3n2y8n0BORnVXFdVUnlirLk1f6hekg8aPFUsg1tG5Wm11BjOvBAt68k999Tcpaac%2FC8apt82kz5k%2Bb3VeRXOLd4kC9LA79OtTNRKJNV3zjM7QFn4%2FWrA9Fn5%2B%2FSO0XvKj9VhnFZ&X-Amz-Signature=250cd049b907d6552bb1194656dd7cf1e8222af8dfcf2809934c6a6526762373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ULDY7X%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDR6FlNucge5jJB0Pbsl3UehJUpVvWMga5YyY5JQ71nSwIgU0qqzd3QdVTQ2zaqKuh059d93tQuRbzhflyzKs2F8SUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy1zrD8Qt2FAPnwbircA6hX%2FaiIUU3rwQSPJf9JVSwaaac2ER8rs3JGXyKWpczsWwA76qJkOttdaaSTKZ%2FHKxpPei7lrq9ZEe9V9MFhEeHfh%2FEpo1dMyxvZYTaZ%2FPmmh2SDkUgqIDdWeCxL5yoTdIyR6n7Yvjf2sthlGRghEEQpPBmhPGThtfJNskryJPgeU%2BdV4riMt9Jh3DqSwVu6Pz%2BSZDBQv855sCMuA%2F9xo4%2B97Sc4awoWHj1tiwkoRU8wWCFEME6sHvyUqiw%2FNvIxIzcXDxw5deHQOJCrx9gHB97hfW2b5%2FO9zMIBiN5gMkFZvKn7ZPCx63%2BMK3g8vtVP9fxHmC9RvgZvKLUQ7kfzOzhJ7Dr4OIe9hoBYmWGSDsAu0s77ijr%2F5yZjK0SJ%2BHgSfeteDqFHlpLcDhpWknSGEdj3SrCEIHSHcZYKhOXk8yFK8cgYzaZH5JH0tp86g0D3b6RHlkOkUPpXtdCoy1uwQmCSxyE6cO%2F5lnkk3Q5I83SByypoQn3cFPbEgFUk%2Fr4kng8Tv%2BDNFyGPzGztC7FbjbpqTmMTcwOI%2FTtYMtqUHJuk%2BUb623bwpMJod7GqxtUV7YWHIe%2FuF90RDAi2CVGCDqgwmP%2BMGO56JLaKHjRE12hJv%2FEV5N8WuTG7mAxPMJahqsIGOqUBe6hR49jdzlLXAIAn0Z04S4UWSLTcPYro88PrrYa3OOV4H8QMHN5lVoS4ignOjsfaeUjO%2FLGqZW1F0%2B4AivkwZ3n2y8n0BORnVXFdVUnlirLk1f6hekg8aPFUsg1tG5Wm11BjOvBAt68k999Tcpaac%2FC8apt82kz5k%2Bb3VeRXOLd4kC9LA79OtTNRKJNV3zjM7QFn4%2FWrA9Fn5%2B%2FSO0XvKj9VhnFZ&X-Amz-Signature=8d54acd503b3e3f9602e9a295b93bd5af4d8edcca265c68ce607110d52041a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
