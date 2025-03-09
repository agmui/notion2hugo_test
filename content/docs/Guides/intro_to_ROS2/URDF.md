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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BCYIGU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDiQzaOiAui4ihtGWbcDxW9SAPTtfsnzrfds1lA4NZ47gIhAOC8YsqG5Nvnn4F0Uh0J%2Bdpa2eTNsAMokW6TDi0UnO0MKv8DCHAQABoMNjM3NDIzMTgzODA1IgzC3insZCFdotAXT%2B0q3APWiIfQDeGW3vbp5Rtupd5C%2FaNHiMYBHtmBq%2FCa9tTBPlp0qmOnqxsZvuwL%2FMfFABUSJ6NcqbL4vsNaJO6pvhnR120fadd1jvGel56myUzsjkPHMCRfYWrP%2BoODuZXq79tHZBnCrslJC%2F2jdt6kjAB%2BAYeDJAitNYp%2F10zQiKEDfUV7Mt3d8PsKydhZne1gRZ2KyEU09KjQqthaAHgNwCBUlgXXfzudn30DgB78luvS2XbWNxkFmfL6xgyNi%2Fgf3wodb5QZrAOspFgICsGwhgOU8NK6%2BZcb0YPNdteZn1VCnYPTgMnN1T4QZ%2BeOPgqocA0CC3AHIELUxM5mhCMZNU4%2BVAvzpAGjdIr4IFKdbE0VwwaJzwm%2BEVB5JguYtwCRZLE%2BtgHT8bmLxUAbnHnv%2FDpkVObVFQb0wRbJNb4N0kOBBpP%2F8msH%2Fr4%2FhIb7jYPy4Y3NQ7ifTEGAv%2Fc7afYGzZezvlc%2BZY09THWisURxSqtCRNgBA2rQGjN2O0Qbl3a3U196yQfBi4z1UooN3WNHOPYVJPhymXoBh3nJe2xwRz4fMEZvs0vvzOc4RYDa7U2HUG%2BKCbb%2Ft1Q9BQKr%2BgHezgCSrGnxYOoCE6Hhwmi%2FzDjJMpe6P6UTH2M6%2FM3W6zCz67S%2BBjqkAdd7xCE38gfYS%2F%2BMnJUdIVNYK1ZUVXPrDeYiFU7ZF4aXehoxUw3n75QbIplSxwkFpqv0CExAT4SOhV7%2BCboJUjLFtxyK4RmNucxDMOs9izz9K8PRdK1vE3UK5gwiGNwd7uAMvgMGu%2F0z%2Bkf0pbG4uGw0W%2Fd43OZmd3EhGWZudodIi1mQ%2Ff9UDbekhYa8jVTH%2Bslr86nC8MGMBYZOyJkQA6%2BsTqrz&X-Amz-Signature=2c12909811d97e7f65da5a1bd45ab8cbae16a366d1d67f75450ae3f581792639&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BCYIGU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDiQzaOiAui4ihtGWbcDxW9SAPTtfsnzrfds1lA4NZ47gIhAOC8YsqG5Nvnn4F0Uh0J%2Bdpa2eTNsAMokW6TDi0UnO0MKv8DCHAQABoMNjM3NDIzMTgzODA1IgzC3insZCFdotAXT%2B0q3APWiIfQDeGW3vbp5Rtupd5C%2FaNHiMYBHtmBq%2FCa9tTBPlp0qmOnqxsZvuwL%2FMfFABUSJ6NcqbL4vsNaJO6pvhnR120fadd1jvGel56myUzsjkPHMCRfYWrP%2BoODuZXq79tHZBnCrslJC%2F2jdt6kjAB%2BAYeDJAitNYp%2F10zQiKEDfUV7Mt3d8PsKydhZne1gRZ2KyEU09KjQqthaAHgNwCBUlgXXfzudn30DgB78luvS2XbWNxkFmfL6xgyNi%2Fgf3wodb5QZrAOspFgICsGwhgOU8NK6%2BZcb0YPNdteZn1VCnYPTgMnN1T4QZ%2BeOPgqocA0CC3AHIELUxM5mhCMZNU4%2BVAvzpAGjdIr4IFKdbE0VwwaJzwm%2BEVB5JguYtwCRZLE%2BtgHT8bmLxUAbnHnv%2FDpkVObVFQb0wRbJNb4N0kOBBpP%2F8msH%2Fr4%2FhIb7jYPy4Y3NQ7ifTEGAv%2Fc7afYGzZezvlc%2BZY09THWisURxSqtCRNgBA2rQGjN2O0Qbl3a3U196yQfBi4z1UooN3WNHOPYVJPhymXoBh3nJe2xwRz4fMEZvs0vvzOc4RYDa7U2HUG%2BKCbb%2Ft1Q9BQKr%2BgHezgCSrGnxYOoCE6Hhwmi%2FzDjJMpe6P6UTH2M6%2FM3W6zCz67S%2BBjqkAdd7xCE38gfYS%2F%2BMnJUdIVNYK1ZUVXPrDeYiFU7ZF4aXehoxUw3n75QbIplSxwkFpqv0CExAT4SOhV7%2BCboJUjLFtxyK4RmNucxDMOs9izz9K8PRdK1vE3UK5gwiGNwd7uAMvgMGu%2F0z%2Bkf0pbG4uGw0W%2Fd43OZmd3EhGWZudodIi1mQ%2Ff9UDbekhYa8jVTH%2Bslr86nC8MGMBYZOyJkQA6%2BsTqrz&X-Amz-Signature=b343b9d60c6b7a284257e3a28fb06bda9366119d5d655377f05d2ef8528ef062&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
