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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2QC6AU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBk4RCjD32w5qPAQlLMw4XljKLOpjoQ5ZpYma7MH3s5AiBoPYkMo8JSLrRG%2B43GgCkEktLxnoD%2BN0q3JpFEzNOl%2FyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMygMWdh9SLNZBs84NKtwDuqnVOO04nSoQwtbugZHqh%2BOmV2%2Byzf2hz1hjSaw4znseiXL%2FRzT6h5YcgJDKh%2BXcjh2D0pEck0rHRiyaKKKnp6pxcso6tB6Mm93UDnCJJfHe8vIo6BhSS%2BtmACjLhNtc5wAP%2Bch3Sh%2BGBWPxPXMVjCszk%2FWM4w3kGRTjNcmEnaktBCLJQdSSDolidlYkMQowFUnoS4VocbuymCtS1d7BJcYasfaVO3mwmUSUMQI8fhi91%2FucT3u9io45Q%2BXg9IswLFt8Hwgiu2WSnY%2FMYWZeKc%2FE5ctsesF14xefE57c0ekGSrkeZiMfOgTggfXO5cxYUF3nvM%2Fp7mY%2FUNcYeFHipv7A1mJPMNWLiUhkIvq6ZV7N0gQjkgfT8OoRnHRL9%2BypY3s8VyNHZZbnArdFZXxnYn9GBRrEPvHxq7wFXsq0EMryksK5bdbqe0pMYh62YX92oiVOxRkHbKrPpj1INeVXpv0YwGeQ0IjoP4vA76aSD3dwTc7nJHNpb6JLQEB0DX1j1S02CQdoUM0B%2BTrd9J2kSeN0f6WKjxUk3hPr1DH0tfhSGLnQ6D9R1vD8RCMrgpWXHBgp4IZx%2BM3z0ZcAByFHzS939ewUSzOZZvDckZJZQGLTptlWOvrR6d%2B5BqwwzMesxAY6pgGGrLLdDeGxocIDKLB6lc2QXBrSyvFEcjEjX7kxfWWVnyFWY8dvYp3x2omCAY7lE%2BJ%2BbeQdxiFYEtJ%2BAIaWdTfvOQdsSzb%2Fv%2FkpNuWpAgc8XIqcCIseNIgfg76kSkmhfNnRYlWlQ8uf7kdKmyeFQLM7ragezcPbPlxvvUE0t1V79t%2FWpaOmyHMIfSTfUPbYs9PHUL8qMUd9uSHFB343MwSu4RzO9%2FbP&X-Amz-Signature=0547e57d47eda1b9efa5e86af348278a513948ce5385dfe6c743b85d147bf065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2QC6AU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBk4RCjD32w5qPAQlLMw4XljKLOpjoQ5ZpYma7MH3s5AiBoPYkMo8JSLrRG%2B43GgCkEktLxnoD%2BN0q3JpFEzNOl%2FyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMygMWdh9SLNZBs84NKtwDuqnVOO04nSoQwtbugZHqh%2BOmV2%2Byzf2hz1hjSaw4znseiXL%2FRzT6h5YcgJDKh%2BXcjh2D0pEck0rHRiyaKKKnp6pxcso6tB6Mm93UDnCJJfHe8vIo6BhSS%2BtmACjLhNtc5wAP%2Bch3Sh%2BGBWPxPXMVjCszk%2FWM4w3kGRTjNcmEnaktBCLJQdSSDolidlYkMQowFUnoS4VocbuymCtS1d7BJcYasfaVO3mwmUSUMQI8fhi91%2FucT3u9io45Q%2BXg9IswLFt8Hwgiu2WSnY%2FMYWZeKc%2FE5ctsesF14xefE57c0ekGSrkeZiMfOgTggfXO5cxYUF3nvM%2Fp7mY%2FUNcYeFHipv7A1mJPMNWLiUhkIvq6ZV7N0gQjkgfT8OoRnHRL9%2BypY3s8VyNHZZbnArdFZXxnYn9GBRrEPvHxq7wFXsq0EMryksK5bdbqe0pMYh62YX92oiVOxRkHbKrPpj1INeVXpv0YwGeQ0IjoP4vA76aSD3dwTc7nJHNpb6JLQEB0DX1j1S02CQdoUM0B%2BTrd9J2kSeN0f6WKjxUk3hPr1DH0tfhSGLnQ6D9R1vD8RCMrgpWXHBgp4IZx%2BM3z0ZcAByFHzS939ewUSzOZZvDckZJZQGLTptlWOvrR6d%2B5BqwwzMesxAY6pgGGrLLdDeGxocIDKLB6lc2QXBrSyvFEcjEjX7kxfWWVnyFWY8dvYp3x2omCAY7lE%2BJ%2BbeQdxiFYEtJ%2BAIaWdTfvOQdsSzb%2Fv%2FkpNuWpAgc8XIqcCIseNIgfg76kSkmhfNnRYlWlQ8uf7kdKmyeFQLM7ragezcPbPlxvvUE0t1V79t%2FWpaOmyHMIfSTfUPbYs9PHUL8qMUd9uSHFB343MwSu4RzO9%2FbP&X-Amz-Signature=6d701622d09ee18ae4181cb0bf7c14a3fb57f9fd538ca61dbdcf4da24394b9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
