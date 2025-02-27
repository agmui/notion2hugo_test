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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O22VCFP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAMZuiD5AqTKs04TTlFx1QO73oVUgjVD3%2FbHFqMaiMqnAiAL903tVdpBRI8KSY62fPilSbmWAf9ajKWLZAZydGpQ6ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIgl1I29uIwSTXaynKtwD8BXHQ8a75CqN7gSrSfiSZlfEsETeNzVaXs2h%2FD90WVtAJr3%2B%2FSGQh7sqbA8eb8dQrr%2F6%2FY5wbafS%2FOpYKpw9i9DuzqidcKy7S7Fp8eUbtD9HzX%2F%2F9TIoCw6eMt8biGDAt9CEE%2BWJ6bJZuzzCXSnYn6FOl6Gezb5FOSW88Fwye80%2FO5dA0pmpaFn9lARl34cqycgyyYYgc0Irqp4w1rcOthQ%2Buz%2FHa2x0JUtlJphA%2Fz6Pj%2FR%2FafzOafHdYD5kVb9GL9Q7WPTSEm4DH5airHI8p2icfuE9z17VVmhKG8tOKjvnJCsH1mXz1jTrrAFqeH%2BTwHEA94V77hbDK%2Bvi3Wd3DyBjAE6bcQfUiEaRIiTcRY6xvqRWkZBGydycrGGFk5%2Fy1yW5f9uZZmkDEMgOwY6%2Fd%2Bjhk60EL9S9W479qORU413RyxpKRdITsgALXrD5ZI9%2BAsktjeOJHhLgK6GAJR3Y4DbITWzUjpaFi3lFBox0uLNF65yyufRUZ2WdVj0OD%2BMSPpR2%2Bi5hTBqEe2lM%2FhBR0dH%2BPoHB9G5xM7rOX%2FYS0LCoVeHE55%2FaNru%2FHRviM0SU7H7tWwo%2F5UbqEtttPIqJZORgw7b4drESgFy2zDAZ7Bo0crbx8ZxDuVciQI0wpM2BvgY6pgE7gwSoXZUD2oxN9yloSQs%2FvbFk5LSggO9YFX8nfx5XxxNmWczYguJEC2RWrHNvnFO1YE6cu7WgN2jZy3tacNjoULizJ5HF%2FETwjRt5UdPauurbEtqZVXRxt6o266eyzmvauV%2FDJ39WDkO1fIdGyMZG%2BrbbACUQLivY5jQz1h9VUhbXM97TAmtkfXAcPBx2cia3HheoQnTx2nIoQkbcQYxaoODWzSZ%2B&X-Amz-Signature=1e4a1c8c3dc7bb26e017b7fa10b65bb09e0228a1be24ac255ec377b4eb298606&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O22VCFP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAMZuiD5AqTKs04TTlFx1QO73oVUgjVD3%2FbHFqMaiMqnAiAL903tVdpBRI8KSY62fPilSbmWAf9ajKWLZAZydGpQ6ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIgl1I29uIwSTXaynKtwD8BXHQ8a75CqN7gSrSfiSZlfEsETeNzVaXs2h%2FD90WVtAJr3%2B%2FSGQh7sqbA8eb8dQrr%2F6%2FY5wbafS%2FOpYKpw9i9DuzqidcKy7S7Fp8eUbtD9HzX%2F%2F9TIoCw6eMt8biGDAt9CEE%2BWJ6bJZuzzCXSnYn6FOl6Gezb5FOSW88Fwye80%2FO5dA0pmpaFn9lARl34cqycgyyYYgc0Irqp4w1rcOthQ%2Buz%2FHa2x0JUtlJphA%2Fz6Pj%2FR%2FafzOafHdYD5kVb9GL9Q7WPTSEm4DH5airHI8p2icfuE9z17VVmhKG8tOKjvnJCsH1mXz1jTrrAFqeH%2BTwHEA94V77hbDK%2Bvi3Wd3DyBjAE6bcQfUiEaRIiTcRY6xvqRWkZBGydycrGGFk5%2Fy1yW5f9uZZmkDEMgOwY6%2Fd%2Bjhk60EL9S9W479qORU413RyxpKRdITsgALXrD5ZI9%2BAsktjeOJHhLgK6GAJR3Y4DbITWzUjpaFi3lFBox0uLNF65yyufRUZ2WdVj0OD%2BMSPpR2%2Bi5hTBqEe2lM%2FhBR0dH%2BPoHB9G5xM7rOX%2FYS0LCoVeHE55%2FaNru%2FHRviM0SU7H7tWwo%2F5UbqEtttPIqJZORgw7b4drESgFy2zDAZ7Bo0crbx8ZxDuVciQI0wpM2BvgY6pgE7gwSoXZUD2oxN9yloSQs%2FvbFk5LSggO9YFX8nfx5XxxNmWczYguJEC2RWrHNvnFO1YE6cu7WgN2jZy3tacNjoULizJ5HF%2FETwjRt5UdPauurbEtqZVXRxt6o266eyzmvauV%2FDJ39WDkO1fIdGyMZG%2BrbbACUQLivY5jQz1h9VUhbXM97TAmtkfXAcPBx2cia3HheoQnTx2nIoQkbcQYxaoODWzSZ%2B&X-Amz-Signature=11d7394ff2237f98aceea1929797677754dedefaab8daba7f8bbaa5e2dbf3921&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
