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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QML4NJB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB4blXJ%2FHG%2BN6EuMxmEovJtQt2MB9NKw%2BjReLlbndxnwIhAL5dd2Uj1AbgvLnp3JC4WarsbjQgGBXxvGpMBoaD0YtTKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOek0H1butSUCOCu0q3AN0VlrwlQLQ7oiQmaxY7zKqWKlBW7ogmQJ4draH1ViLzMPDgSezITYdPysM8H5xsKImLvj%2F3oCOSgqdZMTgVlOa8a1%2FjcZpmj%2BYUqBthLPgqvu7xJjruAU%2FDtTHqXqWfl5Y3AwOl3YIefDRZ%2FRHalfyx8pq8dwKU2MIq9nv3u2iigizAKw5zNqvkV0ap9YYXCGF358zUoLEizVTDyp%2FCEmUMfm0j2suwGg6BCDP4xN2wQ6uRnckUDMrlvZ5kB0sjaXIyALZuLr7Xy%2Bnf8RmKRIVPdjTZDikaNo63CkEj9hVkezmfftiKcpXZ3r7wgsCMc%2BjF7Wr8VT%2Fr11DjJznKVhwc5wCDrP%2F593cSzDe2Hyot%2BKzLieP%2BHUCt2mN2OgA6MFnbq6Cmlkrpo4LjO8mAbddeHJOZXFNtIgjGUuUmvbsP8BneiDDXVCsZW%2FGkFK27hxXwF91jdq0Y2MGxUMId3eYS3Xej9RT4fzwqPQHF8C21QYMqz12Pw%2F%2Be5l6YgoM3u1fBc21wabBnEt0uHuWMXZHo5nzHiWnbw8VaA07bHDBXcFNj5p0iY2OPFv4nOm50VwR4cp4QDWGgQXv%2BuIYk3LRw2LuahPGFoMAA%2BDPkDbsp5t8U7ZZhTJA7cW8fTDrxuq8BjqkAf2bR0JQ101dOYkSq%2F4bgfDwyU7gihZhTWKR5KHEMqvxEJJVjwzBfJIoE3lZ5KynHg5cfqtOZ4AHTw7N5m4QFl38W%2BjeIdb6S6iyGPsmSGv2DMuOJ9MWqE2qqTdpLT4RIc27M%2FzjZ3oLj%2FHInqmk6yMvVe2FzbsFxBzQI8ygE9XOf3ywOZBh9U6DivCfN5eOrsvOIY31zMNrUw5OH4RVgNywlYpB&X-Amz-Signature=c4bbf9f5e9de338f8064d85d8f8962ea6beaa3ff2ab7e638bcac6c4522f17e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QML4NJB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB4blXJ%2FHG%2BN6EuMxmEovJtQt2MB9NKw%2BjReLlbndxnwIhAL5dd2Uj1AbgvLnp3JC4WarsbjQgGBXxvGpMBoaD0YtTKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOek0H1butSUCOCu0q3AN0VlrwlQLQ7oiQmaxY7zKqWKlBW7ogmQJ4draH1ViLzMPDgSezITYdPysM8H5xsKImLvj%2F3oCOSgqdZMTgVlOa8a1%2FjcZpmj%2BYUqBthLPgqvu7xJjruAU%2FDtTHqXqWfl5Y3AwOl3YIefDRZ%2FRHalfyx8pq8dwKU2MIq9nv3u2iigizAKw5zNqvkV0ap9YYXCGF358zUoLEizVTDyp%2FCEmUMfm0j2suwGg6BCDP4xN2wQ6uRnckUDMrlvZ5kB0sjaXIyALZuLr7Xy%2Bnf8RmKRIVPdjTZDikaNo63CkEj9hVkezmfftiKcpXZ3r7wgsCMc%2BjF7Wr8VT%2Fr11DjJznKVhwc5wCDrP%2F593cSzDe2Hyot%2BKzLieP%2BHUCt2mN2OgA6MFnbq6Cmlkrpo4LjO8mAbddeHJOZXFNtIgjGUuUmvbsP8BneiDDXVCsZW%2FGkFK27hxXwF91jdq0Y2MGxUMId3eYS3Xej9RT4fzwqPQHF8C21QYMqz12Pw%2F%2Be5l6YgoM3u1fBc21wabBnEt0uHuWMXZHo5nzHiWnbw8VaA07bHDBXcFNj5p0iY2OPFv4nOm50VwR4cp4QDWGgQXv%2BuIYk3LRw2LuahPGFoMAA%2BDPkDbsp5t8U7ZZhTJA7cW8fTDrxuq8BjqkAf2bR0JQ101dOYkSq%2F4bgfDwyU7gihZhTWKR5KHEMqvxEJJVjwzBfJIoE3lZ5KynHg5cfqtOZ4AHTw7N5m4QFl38W%2BjeIdb6S6iyGPsmSGv2DMuOJ9MWqE2qqTdpLT4RIc27M%2FzjZ3oLj%2FHInqmk6yMvVe2FzbsFxBzQI8ygE9XOf3ywOZBh9U6DivCfN5eOrsvOIY31zMNrUw5OH4RVgNywlYpB&X-Amz-Signature=238ac54e1310c55786bf6f4e1f6dcb4ec1722864af49dac3429db8e8c1654de6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
