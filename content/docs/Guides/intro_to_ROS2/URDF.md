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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBLL7WR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDEw1ULGcDB9pNidyB90dcrLtcgd%2FCgQgzxaFwBEmNO3AIhALAOCpra8v2jM6KZK0lewmaqatW6Eslp0SBF%2FAGY6VAKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxRfvcfFTQFX15Tw00q3AMQEsYRtSzXrPJChdBl1BLzZDH4PybazD1B9L2xLM3Af3XinVvZwj7MHq%2Bl7R6dw3XAlz0gCHEcYhnvVN33t4625WxXu08lBB8w3gJkSgLMpiONeMvqur3La0uzT5hojuyfkT10W0OHgchzMCgvAXwgfLlsik6HNWkK%2FICeXME2RBh1ZvdoO%2FJ4%2F7hgSp%2FsYVONtHyQ64fzTO3QqKdfBWEuGDdhSQB1yQXq6gobzqaEnkuGkWLATFN9Aj9lSr%2BVA4J0UHIbowSOzp3tytAmj55TCS4je36YzyMMiPrI%2BSKP5k55wkze%2FQTtkyMXYY0PyNLJVlkZI7Ue%2BMaMi8XkIW0BWlwaLsS0%2BMKNnNxvEyDTHEvDP%2B5efnuRdTSIKt8R5eei5Q8KBMXiNBEE8VSjoDNg18UbRzDeZhImXhfasIfL%2F0MtaC%2F8mgh%2FxTEpNrKamo9O0uz%2FoeIrFlcqN4vdK%2BXpAg4xb7z%2Fin6IRLetrQKBwG%2BRPsthfYk7%2Fb91nw0uHh2wWAvN8IGpd98%2BXFpMfA6rNhvPPRamfjNTyM0JBY2hB75yf2qHwx9izafWDQo4ONq0p1XNbM0XDTOYOF2mCG1KP6LyhD5iBAmUAGD08OwJY%2FaPVNVbiClEkeS0mzD26ofEBjqkAT0r1YcJHTmmIkCOKsCRc9DQnPIIA%2B5kXE0TB1Y8EsXmwt6ayilr514%2Fj6C%2FSAWuLjOhSNENwrhDhr8rdUh7ot%2Bi1%2BrMPjuDdrSl%2BWVlCtkwNM01p5d8ZUfKCx9l8Dp%2FzdbUjqbv%2BuF5wuBHimTz3xHqoylyuthRHafOx%2F%2BVe5869yAiluP8MeQENgA08SRaIt1PY94v01SUPEGaLdZ0bNw0j8iP&X-Amz-Signature=d612d3372190398f41ca94e0534ddd2295397e9a73cac1cca358cf6eb0f942e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBLL7WR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDEw1ULGcDB9pNidyB90dcrLtcgd%2FCgQgzxaFwBEmNO3AIhALAOCpra8v2jM6KZK0lewmaqatW6Eslp0SBF%2FAGY6VAKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxRfvcfFTQFX15Tw00q3AMQEsYRtSzXrPJChdBl1BLzZDH4PybazD1B9L2xLM3Af3XinVvZwj7MHq%2Bl7R6dw3XAlz0gCHEcYhnvVN33t4625WxXu08lBB8w3gJkSgLMpiONeMvqur3La0uzT5hojuyfkT10W0OHgchzMCgvAXwgfLlsik6HNWkK%2FICeXME2RBh1ZvdoO%2FJ4%2F7hgSp%2FsYVONtHyQ64fzTO3QqKdfBWEuGDdhSQB1yQXq6gobzqaEnkuGkWLATFN9Aj9lSr%2BVA4J0UHIbowSOzp3tytAmj55TCS4je36YzyMMiPrI%2BSKP5k55wkze%2FQTtkyMXYY0PyNLJVlkZI7Ue%2BMaMi8XkIW0BWlwaLsS0%2BMKNnNxvEyDTHEvDP%2B5efnuRdTSIKt8R5eei5Q8KBMXiNBEE8VSjoDNg18UbRzDeZhImXhfasIfL%2F0MtaC%2F8mgh%2FxTEpNrKamo9O0uz%2FoeIrFlcqN4vdK%2BXpAg4xb7z%2Fin6IRLetrQKBwG%2BRPsthfYk7%2Fb91nw0uHh2wWAvN8IGpd98%2BXFpMfA6rNhvPPRamfjNTyM0JBY2hB75yf2qHwx9izafWDQo4ONq0p1XNbM0XDTOYOF2mCG1KP6LyhD5iBAmUAGD08OwJY%2FaPVNVbiClEkeS0mzD26ofEBjqkAT0r1YcJHTmmIkCOKsCRc9DQnPIIA%2B5kXE0TB1Y8EsXmwt6ayilr514%2Fj6C%2FSAWuLjOhSNENwrhDhr8rdUh7ot%2Bi1%2BrMPjuDdrSl%2BWVlCtkwNM01p5d8ZUfKCx9l8Dp%2FzdbUjqbv%2BuF5wuBHimTz3xHqoylyuthRHafOx%2F%2BVe5869yAiluP8MeQENgA08SRaIt1PY94v01SUPEGaLdZ0bNw0j8iP&X-Amz-Signature=97e04876d624d42d68143c0349daf8a148a9aa9b8b91640a9ed89a3393c6406b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
