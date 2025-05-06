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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTARYMR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgdpYc90KMuI5nC05w%2B%2BbDDo3%2FmHbRPGXq5dfwsoAzigIgBUbZKUbKwTcfaZi85IqqMYnBTc37KnNURL%2FN8Jrq%2B%2BYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPjlMJIEjXwb%2Fe8NVircA5u8kRFx7poKfpjcsQ7o7A9UqT5%2FBCAhFQ1XBnoInGr4xhcgNvWX97sOzoTxH96kYAWeaj2uctx1BD%2BMVdP95ppV6YGPl%2B32Tj4nYkamKHRBvEsfxcM1Y1V%2Bo7eJ865XplkwPCyNHfqvopcnFMOYJfJiYy0DlEAQ4dKyioP61rbHwByBq8d%2By5I5mMum8RKAy%2BGhMkwAlMtFS%2Fe2afoXYTxBAUJiU0sLePi6hVGg2OZWGnvIMhzsy%2Ft5xoTKqfxNOyIFRvdljHDmvv8Dd9xskvhCE%2FONGBoZQoWGjZyd82r4hLLP7JG54KP%2F451AmPB7d78fOXeg1MzgvUqUMZw7qkNwHZk0XGsGXKjh9r1dfxquQdvbzXYCgj1DoMwrl1%2BkIcIAcu9zGKNeTFacK6Li9aWRJ7iJWNZEezgPgJOVgbUHYg3l8c%2FVuG6PxCA7Wd6P4CUMByydP6OulxBGoto6a%2BmFDXA7IsMjyJ9XfKor8zUSUHh2%2BAFTnzof7mKLTyfSgpTkZCw5MZxzOEG0sZogR9%2BIDwD19iLTtMbL9%2BcRuIh83nP%2FotcWKHjjRGsgp3jq9hvkPjMOkHxIOV7OMTtB4cyr7kNBwVownY82IPSsejYzHUe1Wkopv8G1jmjIMIbM6MAGOqUBRWJxpGfKUeJd%2FglzJM%2BLtAWMfkJ4UjqygPNV5OxdCUatmOHKpBtCFk%2BgCP8I7zc8mPTXH4XFm4DiN5uvmwMeNs8L%2BcsgyQEj7TWFQees48JRjYCvFhC3WnDYQjsqjqB2RnkNWmjTksk1L6PBlB%2Bo7S1LY%2FgiffG4OvGXz8XU9Tj9oyeNxll8cWPOyPgSjSwqoeMvl8tuiQbpczNRZpst3IzZcQy8&X-Amz-Signature=dec78dcce6d996cde146ebe9b85a80ab2b981edf540834028768a64aaa7a7362&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTARYMR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgdpYc90KMuI5nC05w%2B%2BbDDo3%2FmHbRPGXq5dfwsoAzigIgBUbZKUbKwTcfaZi85IqqMYnBTc37KnNURL%2FN8Jrq%2B%2BYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPjlMJIEjXwb%2Fe8NVircA5u8kRFx7poKfpjcsQ7o7A9UqT5%2FBCAhFQ1XBnoInGr4xhcgNvWX97sOzoTxH96kYAWeaj2uctx1BD%2BMVdP95ppV6YGPl%2B32Tj4nYkamKHRBvEsfxcM1Y1V%2Bo7eJ865XplkwPCyNHfqvopcnFMOYJfJiYy0DlEAQ4dKyioP61rbHwByBq8d%2By5I5mMum8RKAy%2BGhMkwAlMtFS%2Fe2afoXYTxBAUJiU0sLePi6hVGg2OZWGnvIMhzsy%2Ft5xoTKqfxNOyIFRvdljHDmvv8Dd9xskvhCE%2FONGBoZQoWGjZyd82r4hLLP7JG54KP%2F451AmPB7d78fOXeg1MzgvUqUMZw7qkNwHZk0XGsGXKjh9r1dfxquQdvbzXYCgj1DoMwrl1%2BkIcIAcu9zGKNeTFacK6Li9aWRJ7iJWNZEezgPgJOVgbUHYg3l8c%2FVuG6PxCA7Wd6P4CUMByydP6OulxBGoto6a%2BmFDXA7IsMjyJ9XfKor8zUSUHh2%2BAFTnzof7mKLTyfSgpTkZCw5MZxzOEG0sZogR9%2BIDwD19iLTtMbL9%2BcRuIh83nP%2FotcWKHjjRGsgp3jq9hvkPjMOkHxIOV7OMTtB4cyr7kNBwVownY82IPSsejYzHUe1Wkopv8G1jmjIMIbM6MAGOqUBRWJxpGfKUeJd%2FglzJM%2BLtAWMfkJ4UjqygPNV5OxdCUatmOHKpBtCFk%2BgCP8I7zc8mPTXH4XFm4DiN5uvmwMeNs8L%2BcsgyQEj7TWFQees48JRjYCvFhC3WnDYQjsqjqB2RnkNWmjTksk1L6PBlB%2Bo7S1LY%2FgiffG4OvGXz8XU9Tj9oyeNxll8cWPOyPgSjSwqoeMvl8tuiQbpczNRZpst3IzZcQy8&X-Amz-Signature=6ad8f4faae728136fd30d228c7e503a6de8a6e3f02bf28f37239373a620a65ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
