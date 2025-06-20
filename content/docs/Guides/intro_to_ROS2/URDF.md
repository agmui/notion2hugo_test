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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMR655T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8sDkQxDl7q0sLWsb8UQPswYDoI4GqmzaZOGWeJZ9j9gIhAOJcmQlabW%2BsuH4MHKevSOlWFe2G83WRB37Lp18FDBE2KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdAxEty6W3Kyi1zwq3AM0f6DtYOvaWUkXIWoDed6%2FCKrN7FNOv9KiDOco4vxWHjyYmpGYaR4V8cygj0KOsuKz9UEEHMEjkACIM4chVhT9YXkgAVrWV773TWBiJoLWMRFN2uZGNXfaULfGHj60dN9CaF5vPj3WtEgQJqn7r6pCnB2gzBdw6CM3hSmNC%2BaNG4LUU%2BT6kG7G6FZSKWAUT%2BQJNijLkoXc0Lk8HYPOhpCGsEJ8zufP4N7PzqdrWx5%2FXPH16tDS6F5vmiE4VCBDiT%2FdVNf4%2Bovbd7MMDQ9BxLwyNcI6e9rjdugHAOJtMnOIzXO97p0%2FxM1Z8JqZAW5xU4HjFcvK4ssX7SIM0zE2z6lc%2FFrJxdllGyvsfQUEnqxbNoOyciCQPwYquAgUSTM25%2F5wbXpLNJQUaBGoUDFFDftuVvTq3EW0yQeCwDklrn7lu88UqvknhsmS1alIXewTToiuCXlvH3YmynTalRNT%2Fn2QWh%2BcTpSCEGh1X0gw2hyLge3tCpW4C9bjoxbmNEc7%2B9aYILmBPc2MoHg8pAP6pjVh16CkMeuXKrrI%2BfmVGKU9tNizko7MpXDWxKjQYqQa7dTgmGcFuct6qI2V8Kz8wbmeccXKtK%2Bj4AcX%2FdYmotG0oTqCvA%2FhoKLvt7ppHDCMs9bCBjqkAb5tU%2Be9p3GsLvzwMII60d%2FNACN0LnHtM4FAtUxKCPgW3DYlYjn6dLR5BdZmmJZVvZ9MJgIQNtUFcaE43lf5zx9C%2BSql7rg5Ya3xBFagqcfnwECx6Kkyly2LxXBw%2B3Bb%2F5gCD%2B6sx7goY%2BuxjqjPxoc3luvYvJPUFUwHQc74HLRuy%2B4dcrptZLOzoDkYXl0HHChVeqcuqCGH1szldQIjgJDcd6GR&X-Amz-Signature=4fc2a51b1aaf9630881f3f0823db87acde1ddb2eec46202878f64ff4ff24cba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMR655T%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8sDkQxDl7q0sLWsb8UQPswYDoI4GqmzaZOGWeJZ9j9gIhAOJcmQlabW%2BsuH4MHKevSOlWFe2G83WRB37Lp18FDBE2KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxdAxEty6W3Kyi1zwq3AM0f6DtYOvaWUkXIWoDed6%2FCKrN7FNOv9KiDOco4vxWHjyYmpGYaR4V8cygj0KOsuKz9UEEHMEjkACIM4chVhT9YXkgAVrWV773TWBiJoLWMRFN2uZGNXfaULfGHj60dN9CaF5vPj3WtEgQJqn7r6pCnB2gzBdw6CM3hSmNC%2BaNG4LUU%2BT6kG7G6FZSKWAUT%2BQJNijLkoXc0Lk8HYPOhpCGsEJ8zufP4N7PzqdrWx5%2FXPH16tDS6F5vmiE4VCBDiT%2FdVNf4%2Bovbd7MMDQ9BxLwyNcI6e9rjdugHAOJtMnOIzXO97p0%2FxM1Z8JqZAW5xU4HjFcvK4ssX7SIM0zE2z6lc%2FFrJxdllGyvsfQUEnqxbNoOyciCQPwYquAgUSTM25%2F5wbXpLNJQUaBGoUDFFDftuVvTq3EW0yQeCwDklrn7lu88UqvknhsmS1alIXewTToiuCXlvH3YmynTalRNT%2Fn2QWh%2BcTpSCEGh1X0gw2hyLge3tCpW4C9bjoxbmNEc7%2B9aYILmBPc2MoHg8pAP6pjVh16CkMeuXKrrI%2BfmVGKU9tNizko7MpXDWxKjQYqQa7dTgmGcFuct6qI2V8Kz8wbmeccXKtK%2Bj4AcX%2FdYmotG0oTqCvA%2FhoKLvt7ppHDCMs9bCBjqkAb5tU%2Be9p3GsLvzwMII60d%2FNACN0LnHtM4FAtUxKCPgW3DYlYjn6dLR5BdZmmJZVvZ9MJgIQNtUFcaE43lf5zx9C%2BSql7rg5Ya3xBFagqcfnwECx6Kkyly2LxXBw%2B3Bb%2F5gCD%2B6sx7goY%2BuxjqjPxoc3luvYvJPUFUwHQc74HLRuy%2B4dcrptZLOzoDkYXl0HHChVeqcuqCGH1szldQIjgJDcd6GR&X-Amz-Signature=66848ece1977225a086c79c725e5cd81a4284cf7ad5ac7fde6ae16d07dffdda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
