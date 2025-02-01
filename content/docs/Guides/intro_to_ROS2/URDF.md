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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KKV56KE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJchOtX1VUa8dwOuZM9OWkAUMwlo0KHBGBjPXXzDbUfgIhALiHWCGzyEQmEQGAHJ92EoqN3jRd2u5DhgrnShS20y5OKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxra9ZaHORymHwoWb0q3AMKh%2BNslLDLf2RKI7VKkRvR2Y3j9QkppYVyH3ysGgnSJhdsVnxst2ogxQkvP8OldaKIwUOS2Yq%2BcYcOQWFzgoVhR6vyzkvsrS%2BXf2Ftg4icSgEQbhU%2FCAJMjnq7A6Yl10m1j70fxJO1oGCazm1LO%2FmGHdARDgH0COVCDBsd8Sgy%2B2f2IwCOrmzEctcHIPSXGbXetUNLAdvyhQPSVKpIulS%2F%2Bue6hrxDnD6OSsjcYa1UxxbiZWdBZ%2BbAIl5MmkqJPRiljlUPQygTjlGMduMFVroPw7cILsV%2B3VucyZAMlJ9Yi4GbIzQ4eKO1gkVxRbSgTl75YIy7hKxLNS1shG6K5kR7vWKQNwCKQLMcX%2BHx%2FOWT96Yv3ihDQ8Vf3CAUP%2FmT%2FWuqIIe37mTNnU%2BbgE8JEo3TEmjKb1Sf4ZVZ1qlEXp3Z4K520uT%2BrV7qfxWGnIN2xwO3GDA%2B0TDI2yqeHeRWZ%2FnQe47k1rUqmJqdrvVm%2B7xSaPWwQKTw5zhrJro0Ocdvc4bH1CtOozfZp2DV%2Fb6wd%2BOzYXApq3ksDj7qJVO%2BQkHSMS9XutOmKpqTq5I7CeSzW3C5f0FlDOel8vayum6GYAHwRXgDyZNVG6sgOEmWB4MSLDU4PGKfzV8tZ2jSvDDFpve8BjqkAY1LpCdaw%2FhaIpbDPcsP710g4XpevIJ4JtBzAGZFwEBy2fC98o%2BtPhbpv8biRiTRC75vx3YquTWrKfo%2Fw3LFAjDEixfjM8vEMwOJgemhSlty9Ug5Ey42FQl8vfpARsHzXifsYVo3k72TJ5kmnOeyO2cHzeGt23KOg0%2FYfZCzafZQAYAmEtXUA7QLL9ZjBlZaeQWm1dY86PTv%2BDyMs0z5BZw6c9s1&X-Amz-Signature=1a4c85ce8d7b940074796d6674c414d77d794a901256bc2a9685ddd10389e7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KKV56KE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJchOtX1VUa8dwOuZM9OWkAUMwlo0KHBGBjPXXzDbUfgIhALiHWCGzyEQmEQGAHJ92EoqN3jRd2u5DhgrnShS20y5OKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxra9ZaHORymHwoWb0q3AMKh%2BNslLDLf2RKI7VKkRvR2Y3j9QkppYVyH3ysGgnSJhdsVnxst2ogxQkvP8OldaKIwUOS2Yq%2BcYcOQWFzgoVhR6vyzkvsrS%2BXf2Ftg4icSgEQbhU%2FCAJMjnq7A6Yl10m1j70fxJO1oGCazm1LO%2FmGHdARDgH0COVCDBsd8Sgy%2B2f2IwCOrmzEctcHIPSXGbXetUNLAdvyhQPSVKpIulS%2F%2Bue6hrxDnD6OSsjcYa1UxxbiZWdBZ%2BbAIl5MmkqJPRiljlUPQygTjlGMduMFVroPw7cILsV%2B3VucyZAMlJ9Yi4GbIzQ4eKO1gkVxRbSgTl75YIy7hKxLNS1shG6K5kR7vWKQNwCKQLMcX%2BHx%2FOWT96Yv3ihDQ8Vf3CAUP%2FmT%2FWuqIIe37mTNnU%2BbgE8JEo3TEmjKb1Sf4ZVZ1qlEXp3Z4K520uT%2BrV7qfxWGnIN2xwO3GDA%2B0TDI2yqeHeRWZ%2FnQe47k1rUqmJqdrvVm%2B7xSaPWwQKTw5zhrJro0Ocdvc4bH1CtOozfZp2DV%2Fb6wd%2BOzYXApq3ksDj7qJVO%2BQkHSMS9XutOmKpqTq5I7CeSzW3C5f0FlDOel8vayum6GYAHwRXgDyZNVG6sgOEmWB4MSLDU4PGKfzV8tZ2jSvDDFpve8BjqkAY1LpCdaw%2FhaIpbDPcsP710g4XpevIJ4JtBzAGZFwEBy2fC98o%2BtPhbpv8biRiTRC75vx3YquTWrKfo%2Fw3LFAjDEixfjM8vEMwOJgemhSlty9Ug5Ey42FQl8vfpARsHzXifsYVo3k72TJ5kmnOeyO2cHzeGt23KOg0%2FYfZCzafZQAYAmEtXUA7QLL9ZjBlZaeQWm1dY86PTv%2BDyMs0z5BZw6c9s1&X-Amz-Signature=5839cf5a508dddb43b9f9bd1f4c78b2976d23fa77dd77c77c4f8c90cf8348045&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
