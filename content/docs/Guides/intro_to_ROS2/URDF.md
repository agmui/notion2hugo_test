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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6CSBZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAx%2B5WTyWd28FFYYVeklHW%2B3nodhZWJKkoJOsnLeOjIoAiEAwEJRwoje%2FtHE9NuYUriZgfOYGqXF7uJEvTE83pujkicqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYyjj5XPT5a%2F2VPnyrcAz03yDk2iYXB3uSKwsuch6hwik5wXMCMmB%2FKLv%2Fb589bt31Vng08PW8U%2BATPq3UF%2BZD6bt2zHFuDHuxOeXHZQRBK1CevLF5brrGLUsZn5TpTxYj60Sf9GnOHrvoA82EOlaIZT2OJ8lNm9L62eZj1uSTsNy7WJRLLEKoOlWj%2BL1X%2FIBEDS7RCnl4swDXMb%2Bgm3tHnJvmUDFUOfr17KeNCFHKeKo0Bc3fKlYkD4MTIhdYvaHG6kWmjWNJbZUuHmKAv8JPmvNC3DCJ%2BpdLUlvo%2BUe8nzxtb83yuW9nTSRBXL3jItluBwZfWzjWUogXwO8lEUYE88qxLGpcKxAdj6zICsdk5mejOIfhD6ywfg47W%2Bv5A8TUDTHge11nwwe3%2FSj09g8c13CU4u4i6PmZT48hOgWWxmyiO4k6ip8KZKcZCEWWwAUQdkzI2JGiTJugdypueZTArQma%2FqPgXduwG3lMkz5b37%2BFKrUhFPkWffodMcjCvXWVAwoAahZ6CghQFHuuaKdOvhLLIC5qkuS%2FTESAdRfHtaJqK9U7uhAkPdCR2GlV5sXa40P%2FBIVvkQy4YKDLDFata%2FS5Izh3HfCFN0kh3R0KWeR%2FChmt4UHoepA53IYfAP02yzqeeHHXUnV%2BHMOOgrsIGOqUBv2t6fW9jduo5OkWezoTCSV7BdWKkAUZ7rydSDOl3estFNfIR3ZxsMoQJaf0pnUSRGRjHxA1LC3U%2FPBjFj6slmdV7vdz8vwfS5msvo0qiPTKowdDYxgUvwzhdxLQl75T3ZxboSJ%2Br77DNItnLxYBFnvOrVn6aNCepcDJQsDchpDekyYJ6Su5QhZVT2bPDylacxUNWHv9g1VJ1IpDHUurt5GpdJF%2Fx&X-Amz-Signature=29ee65554a04ff8f3c4ccba0dbf0fc537bf70ab5b443e700fdff4f812389be48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6CSBZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAx%2B5WTyWd28FFYYVeklHW%2B3nodhZWJKkoJOsnLeOjIoAiEAwEJRwoje%2FtHE9NuYUriZgfOYGqXF7uJEvTE83pujkicqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYyjj5XPT5a%2F2VPnyrcAz03yDk2iYXB3uSKwsuch6hwik5wXMCMmB%2FKLv%2Fb589bt31Vng08PW8U%2BATPq3UF%2BZD6bt2zHFuDHuxOeXHZQRBK1CevLF5brrGLUsZn5TpTxYj60Sf9GnOHrvoA82EOlaIZT2OJ8lNm9L62eZj1uSTsNy7WJRLLEKoOlWj%2BL1X%2FIBEDS7RCnl4swDXMb%2Bgm3tHnJvmUDFUOfr17KeNCFHKeKo0Bc3fKlYkD4MTIhdYvaHG6kWmjWNJbZUuHmKAv8JPmvNC3DCJ%2BpdLUlvo%2BUe8nzxtb83yuW9nTSRBXL3jItluBwZfWzjWUogXwO8lEUYE88qxLGpcKxAdj6zICsdk5mejOIfhD6ywfg47W%2Bv5A8TUDTHge11nwwe3%2FSj09g8c13CU4u4i6PmZT48hOgWWxmyiO4k6ip8KZKcZCEWWwAUQdkzI2JGiTJugdypueZTArQma%2FqPgXduwG3lMkz5b37%2BFKrUhFPkWffodMcjCvXWVAwoAahZ6CghQFHuuaKdOvhLLIC5qkuS%2FTESAdRfHtaJqK9U7uhAkPdCR2GlV5sXa40P%2FBIVvkQy4YKDLDFata%2FS5Izh3HfCFN0kh3R0KWeR%2FChmt4UHoepA53IYfAP02yzqeeHHXUnV%2BHMOOgrsIGOqUBv2t6fW9jduo5OkWezoTCSV7BdWKkAUZ7rydSDOl3estFNfIR3ZxsMoQJaf0pnUSRGRjHxA1LC3U%2FPBjFj6slmdV7vdz8vwfS5msvo0qiPTKowdDYxgUvwzhdxLQl75T3ZxboSJ%2Br77DNItnLxYBFnvOrVn6aNCepcDJQsDchpDekyYJ6Su5QhZVT2bPDylacxUNWHv9g1VJ1IpDHUurt5GpdJF%2Fx&X-Amz-Signature=11cffac75f3c67528aba88daf6045a1941eb8aeff4243f08054b9cb533565538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
