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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SED7F7CL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSM%2B1cEUl5t0Z7gYGgMJYUDOmCKPupxf%2B7CdzAlDURLAiBHL%2B3s7I9ACht%2BjeOJLV4ymqw4mW%2BmQQFX6FVNR4ZKLSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMDam6R%2BiFczdeuqFaKtwD5eDLAeLGa3t2u7kIoNjTOhpci4eexoWbLbhMaZddYNJX6nbvkbCCyUc4J8Xy%2F92Z0zOJ9vZ3AG6Smj4wjXgFxe34RZsUZEfDYFR0oIsX2eQBXbTTrNXVJvlXP6D5wHTn%2BS3JTqlBpiAY1lukr3slOYof%2BG%2FklZxGaeDSKAosFcFBXcmbph1x8PoVdA9Mwa1Ydh7aTO6Cw1lL66gSgJ5hnR56Se3jraPZoguhxX4E7zVpxyQpb278%2BHavQvJPgDzgLlgQseierrGGq4t%2BR1ecG63RJ5nUGZy%2B4rmmldoPzEGaiceiwDR3bEdiEOVPyha3Xcz1C%2FuTkqKP5rgMwV4emdWDg67iGIiRRBHwP3IUuyXwuZ9LOBf0flo7hCdJG97L4kIErptLlq1LwIH67jAgeMxNGzS4Y8zctF4K5oV9F16f4YEPrzHCsgQteASehBDVjTFYuTBQo1wiPyIGT6r7aHIVHp6Cu5gLLTRgFM1sA2wgo0Nl8k4BavYindfsVCL6io1ve%2FBsGrfxVhENUw9QjdxRCFFfePKy7V3UBS%2BkDne3Jrwykrb0Z9IRq%2FZpCe5a%2Bfrspf3QL5YKWCtg%2BTZfjGSInU6R7NjxrslmgTCp1npgbs94RKNtlHrkxEYwzJ3PvwY6pgGA2%2F4kkSyFSvNCHt8SHGDW1uq%2BktJG1MY8nNlIC3idPhdPvBthVqfJ%2FmCgwc6DB83wC%2Fo087xXYtTr9iL%2FxmYzoC81%2Bm86YVSTB6QFNa17OXwBBRtknhJrDbPpgMfDz2zFPXhGOMY1ZrGSm6n%2F8JuRxA9eeYyiEWifQi%2FxbjqTBzX1d0ohnYGcsb1XfQ0bYDHHca3%2FZZpE5w2AIJqfqgC%2BWk0D8JbL&X-Amz-Signature=5ed3c43c2c825a9cfe7b3c14adc40568dc90faeeb32d591cf154df205cf4f563&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SED7F7CL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSM%2B1cEUl5t0Z7gYGgMJYUDOmCKPupxf%2B7CdzAlDURLAiBHL%2B3s7I9ACht%2BjeOJLV4ymqw4mW%2BmQQFX6FVNR4ZKLSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMDam6R%2BiFczdeuqFaKtwD5eDLAeLGa3t2u7kIoNjTOhpci4eexoWbLbhMaZddYNJX6nbvkbCCyUc4J8Xy%2F92Z0zOJ9vZ3AG6Smj4wjXgFxe34RZsUZEfDYFR0oIsX2eQBXbTTrNXVJvlXP6D5wHTn%2BS3JTqlBpiAY1lukr3slOYof%2BG%2FklZxGaeDSKAosFcFBXcmbph1x8PoVdA9Mwa1Ydh7aTO6Cw1lL66gSgJ5hnR56Se3jraPZoguhxX4E7zVpxyQpb278%2BHavQvJPgDzgLlgQseierrGGq4t%2BR1ecG63RJ5nUGZy%2B4rmmldoPzEGaiceiwDR3bEdiEOVPyha3Xcz1C%2FuTkqKP5rgMwV4emdWDg67iGIiRRBHwP3IUuyXwuZ9LOBf0flo7hCdJG97L4kIErptLlq1LwIH67jAgeMxNGzS4Y8zctF4K5oV9F16f4YEPrzHCsgQteASehBDVjTFYuTBQo1wiPyIGT6r7aHIVHp6Cu5gLLTRgFM1sA2wgo0Nl8k4BavYindfsVCL6io1ve%2FBsGrfxVhENUw9QjdxRCFFfePKy7V3UBS%2BkDne3Jrwykrb0Z9IRq%2FZpCe5a%2Bfrspf3QL5YKWCtg%2BTZfjGSInU6R7NjxrslmgTCp1npgbs94RKNtlHrkxEYwzJ3PvwY6pgGA2%2F4kkSyFSvNCHt8SHGDW1uq%2BktJG1MY8nNlIC3idPhdPvBthVqfJ%2FmCgwc6DB83wC%2Fo087xXYtTr9iL%2FxmYzoC81%2Bm86YVSTB6QFNa17OXwBBRtknhJrDbPpgMfDz2zFPXhGOMY1ZrGSm6n%2F8JuRxA9eeYyiEWifQi%2FxbjqTBzX1d0ohnYGcsb1XfQ0bYDHHca3%2FZZpE5w2AIJqfqgC%2BWk0D8JbL&X-Amz-Signature=440b11620ae30314f8b18cfaa99fd21308b0035a3a0b958814519fd09dc9da15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
