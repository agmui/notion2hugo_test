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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJJPL4T%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIA4dFYeXBg8Y45ng9f%2FkmDz%2FzvqO9zbuYC3CM65YZXZFAiEA2TzG6maciO7YWj1HkakkKiZU0%2BiAuba37U2sXepz5UQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLE3MUhwciSDFKavryrcA%2FhPjS%2FSY2AjIT8uNuUR%2FTXaJ2e6GKwKXXNbYJtzYlcwMzO8eQlJ%2FjdMioCWasgAyOF%2FN3FZhHUZ0vBjzAd6wqwk9X7Yv1Z8HUtmUUwVR7sD%2FFWSiXJo5pJrsVcbAj6vosFLvDFsoAQkHVoVo%2BfAnOPE1KzGOGff4MW30zKwE9pTjT%2FOpJ2riacWXwiqPz53K%2BQ1dBW9zKngg4PoCJ8g0HIb8k%2FZJFxwwVdjTSUDLLbQqy5ggzd0cgKro6yC5v3DpjG%2B3UkdEkPzUfFcMTyQqHWNveEwxxBOSnd30%2FrJn75dMtyQeUSN6SaDi3WvGhPh0gjoucao9rS8yMkBJWjFN6p4hnPuN52ZzzLCVjc%2BsQnMo9K1F3u5lS1HxaycifY%2Bz5ZeE9dnj9e8Ko282l41tEnR9JkZ1SLxD7pt3ApN1aPkEpQaz1OkdxvjKeP3TCebCaJegW4XeleSolDd00LhwuUFJlIearvpWGv6IVzOck30ua5aGJoqKKfqThUvstyz%2BTO3nTmzV8tciqqZgC1kZ5e8YsFtUZdcjgq53Apr1w5GDLaQZG%2FWXsES3TEqzjlegWkV8mM9pk%2FGnVrsIfEGof9abW%2BCSQgGokWn6x6y7lANZmqs7fLdphGxRdvPMIfSlcEGOqUB8gXs9qdC39IWlXWelThNNu78ncOyIU43C2JGw7POegtUxDxWSlxz4SHuPeozQiGP95dU6XPGLynyCZU35nqrhFDBk0uuiFGki2ll17m3r5cXLFHmEUgRgQLxtEdMJJ1zNtL%2B5sdrNglzz0SAdpMSbR5Vvgnc3aHVRV3cnFBlOYmJKc2Cnr%2Bs3oDEDPRceFGa%2FbWxOKWAvk7mNMaN5YEm2BWOca9b&X-Amz-Signature=74e210abd9789b4f2c71a7a8574d8758828e60e136cb7a5d9beb88d36f54d1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJJPL4T%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIA4dFYeXBg8Y45ng9f%2FkmDz%2FzvqO9zbuYC3CM65YZXZFAiEA2TzG6maciO7YWj1HkakkKiZU0%2BiAuba37U2sXepz5UQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLE3MUhwciSDFKavryrcA%2FhPjS%2FSY2AjIT8uNuUR%2FTXaJ2e6GKwKXXNbYJtzYlcwMzO8eQlJ%2FjdMioCWasgAyOF%2FN3FZhHUZ0vBjzAd6wqwk9X7Yv1Z8HUtmUUwVR7sD%2FFWSiXJo5pJrsVcbAj6vosFLvDFsoAQkHVoVo%2BfAnOPE1KzGOGff4MW30zKwE9pTjT%2FOpJ2riacWXwiqPz53K%2BQ1dBW9zKngg4PoCJ8g0HIb8k%2FZJFxwwVdjTSUDLLbQqy5ggzd0cgKro6yC5v3DpjG%2B3UkdEkPzUfFcMTyQqHWNveEwxxBOSnd30%2FrJn75dMtyQeUSN6SaDi3WvGhPh0gjoucao9rS8yMkBJWjFN6p4hnPuN52ZzzLCVjc%2BsQnMo9K1F3u5lS1HxaycifY%2Bz5ZeE9dnj9e8Ko282l41tEnR9JkZ1SLxD7pt3ApN1aPkEpQaz1OkdxvjKeP3TCebCaJegW4XeleSolDd00LhwuUFJlIearvpWGv6IVzOck30ua5aGJoqKKfqThUvstyz%2BTO3nTmzV8tciqqZgC1kZ5e8YsFtUZdcjgq53Apr1w5GDLaQZG%2FWXsES3TEqzjlegWkV8mM9pk%2FGnVrsIfEGof9abW%2BCSQgGokWn6x6y7lANZmqs7fLdphGxRdvPMIfSlcEGOqUB8gXs9qdC39IWlXWelThNNu78ncOyIU43C2JGw7POegtUxDxWSlxz4SHuPeozQiGP95dU6XPGLynyCZU35nqrhFDBk0uuiFGki2ll17m3r5cXLFHmEUgRgQLxtEdMJJ1zNtL%2B5sdrNglzz0SAdpMSbR5Vvgnc3aHVRV3cnFBlOYmJKc2Cnr%2Bs3oDEDPRceFGa%2FbWxOKWAvk7mNMaN5YEm2BWOca9b&X-Amz-Signature=1420fa7fa013233ba4e5b58151a7c5a2a1487a533a72f38f92906b44e7521e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
