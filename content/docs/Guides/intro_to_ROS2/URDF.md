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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIXDQW2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHVZI8enW0%2BthaJzkiRcqbG7qaM%2B5c9AEevu%2BY4s8TdYAiAleP79ljl%2FMKXq7iYgeK%2BbvDKUThikCdgczLinGOtUuir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMSQ29apCxrUhJJ8ywKtwD72ivqYxQZ6eoRV4qnC4PpGhl08WuTklV8WIisJCOtkPI%2FIW6%2BclVssNq9y0arciiG6cNUPsqixaZGhMNTyWfIbyvsIw4Csur1XHyF2lQ%2BdLdjeOSnMpOO7ZvGgnsdsAYypqb1R8G%2B5Vd%2BjC%2BcGEMYYyvlWQWjCESBIrgRCucFqHzNKUY%2B%2BOBtLMuuF%2F1uCQ8d3GGFzDPwnjSNYckeMNvDyWWoROUSKWaUWJVWjkD87is7SvJYSA9fdclg4%2Fg16eOBUzZ9LsPsS6hAwyJqmoJlhestGJ6%2BhYKB1EuhkkxaHAuhhszjXRyGrfDihWTKEPk2e6x9gGDh4xeonwUe2SZpquS4l%2BIV6435BCscqfjGhO03PiyW2IEvawq%2Bal4eOKbQW3X8Q9Q1JYKjVU1GFpMLlT0XLYwoyF0oE0I%2FVV3Tv%2FL51BHEoIkzpUfkP8fS59gqhPPuT5IJPTCoFtEgPOdY13qIG2cKBKhs7U2C1%2FV2G98tneFIt9PL1wp7IQyZJlpdGgnfMg3SyiOwsGpfUxHjpWfgGUK6ueYTj5LjspcrV8tv5%2FFD54MC6B7E6X3p3CMmpWBuvHDVGhaEh5MSkbFfFKWfB5QOa356tes0QiWUELg7WlT3L9P6woRorgwluyvwgY6pgGgQrrFXsisd9aUyUHZsMphhmt0SSAwDb76H9h2N4c8lluJTEJuhETMl27yd5JKE%2F7A9zY2jgCkrFyNcAoM%2FrCmpCg334wJduD9QUCiX6D%2BS97EfxXhJhiawe%2B3dZDB3fQnrqB02pZe8qCOaiuOuBCxp4%2Bk8Zf%2FEFKWKImIY4aPaLUxCT608htR2DVz2Ge3eKV5q2IvE8SY5N4G28kFFTFPRzQDXPOD&X-Amz-Signature=a86baaf19872828f543ea943c1b5ba0adf5927836412111a1f73bf2bcc673d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVIXDQW2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHVZI8enW0%2BthaJzkiRcqbG7qaM%2B5c9AEevu%2BY4s8TdYAiAleP79ljl%2FMKXq7iYgeK%2BbvDKUThikCdgczLinGOtUuir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMSQ29apCxrUhJJ8ywKtwD72ivqYxQZ6eoRV4qnC4PpGhl08WuTklV8WIisJCOtkPI%2FIW6%2BclVssNq9y0arciiG6cNUPsqixaZGhMNTyWfIbyvsIw4Csur1XHyF2lQ%2BdLdjeOSnMpOO7ZvGgnsdsAYypqb1R8G%2B5Vd%2BjC%2BcGEMYYyvlWQWjCESBIrgRCucFqHzNKUY%2B%2BOBtLMuuF%2F1uCQ8d3GGFzDPwnjSNYckeMNvDyWWoROUSKWaUWJVWjkD87is7SvJYSA9fdclg4%2Fg16eOBUzZ9LsPsS6hAwyJqmoJlhestGJ6%2BhYKB1EuhkkxaHAuhhszjXRyGrfDihWTKEPk2e6x9gGDh4xeonwUe2SZpquS4l%2BIV6435BCscqfjGhO03PiyW2IEvawq%2Bal4eOKbQW3X8Q9Q1JYKjVU1GFpMLlT0XLYwoyF0oE0I%2FVV3Tv%2FL51BHEoIkzpUfkP8fS59gqhPPuT5IJPTCoFtEgPOdY13qIG2cKBKhs7U2C1%2FV2G98tneFIt9PL1wp7IQyZJlpdGgnfMg3SyiOwsGpfUxHjpWfgGUK6ueYTj5LjspcrV8tv5%2FFD54MC6B7E6X3p3CMmpWBuvHDVGhaEh5MSkbFfFKWfB5QOa356tes0QiWUELg7WlT3L9P6woRorgwluyvwgY6pgGgQrrFXsisd9aUyUHZsMphhmt0SSAwDb76H9h2N4c8lluJTEJuhETMl27yd5JKE%2F7A9zY2jgCkrFyNcAoM%2FrCmpCg334wJduD9QUCiX6D%2BS97EfxXhJhiawe%2B3dZDB3fQnrqB02pZe8qCOaiuOuBCxp4%2Bk8Zf%2FEFKWKImIY4aPaLUxCT608htR2DVz2Ge3eKV5q2IvE8SY5N4G28kFFTFPRzQDXPOD&X-Amz-Signature=bb05b470c5b12b4996064dd7d2bd62c9c7c898cf495c02f374d4e1545b05de8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
