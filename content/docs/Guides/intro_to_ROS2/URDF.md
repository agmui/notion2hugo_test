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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3NZPJF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAELPsvIF2YAs3Bm0jI9K9mD9966yFo9dYE4jaSuoMXuAiEA3kaDipJY%2B1ohKtijyIFXk9Ua09CWDzchAeGT0ubkDzcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKDxJXCjcGzGbXPfSrcA16wO7zGrMEuOeag4JAUrp76kx1%2F0vu17VSzWuhxK%2BQfnsSuR3MndZHbs755aufawLSwCYVJQ28vlgGkvMvLmfRK8ljRyNt%2BPsH%2B2%2F09z65QIFMFCHvjO3jXOmNAzDEhd6jjygJ3fPYfzOm%2BShZokFZsM3zBgcWd9xvbXhnIAjTK9gu3ZQQRKWlASBbvd6KS9Skpp1qFzhvzrQX73PorzTqa6DiXpinV%2BKvQG5JNizxFMfzGi4Ss1HMyE%2FAt0JiAi1OIkoZe5nHD%2B4oHL35kpeDq9sVQ7FEZ964cRUPWmaVfAQqRpj6bERiRdsfM41nK6oCy6tJbPwZchKnupIhCc4Ga9qtF5YwUjPkpu5on%2B3dYwJyW7dyDPJ3FSOujizLHXAzsKEjUhF9TwwcjNvBbtaspHCsNRz3%2BgSp9R6ej%2FPh2DUFsyB5q629%2F4Vwr2dMta9T6y3dzlPYqtSQpKAkd9FXRCjjGYN7utNuqblENm%2FIHzEbVh0HNCs8zr0sJCqtK0t9pcHsT9UJyKbwiaKXOUGzvCFnRE34wQY37PzjAbh8VGKxiW0n5Zy61vulPqadvtjuPFLEaE2CV2RtQTGu0IgLpBhq3WFL%2FEt1XdT4qymm2PyH88OSU3mpE9ErMMNrh38IGOqUBbTsP4rVPXiAqP5%2F1l%2F7%2BlHX6t9peUKToJoILsYqGXf9AFaVrDmLlPAf4NE4T0%2FDs7CBWbsVIJcWzpKkmbAIGkWhmHojUE%2BO5V0GCeTS3K8%2Fn8zgrFpW80ZBm7Otv%2BUy%2FhheOh1XKViKlfwziZRhRTIdR6g7UXA594ihElHm8sI4UdFoI%2BgU2aIqSrJvsqknqiM6ZCSFX9BQ4pG4dvaJ1eVDmIGpT&X-Amz-Signature=df630de6b988e79aeaf9964700a2224e35372dd2750372cb1ceee1e096aa92a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3NZPJF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAELPsvIF2YAs3Bm0jI9K9mD9966yFo9dYE4jaSuoMXuAiEA3kaDipJY%2B1ohKtijyIFXk9Ua09CWDzchAeGT0ubkDzcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKDxJXCjcGzGbXPfSrcA16wO7zGrMEuOeag4JAUrp76kx1%2F0vu17VSzWuhxK%2BQfnsSuR3MndZHbs755aufawLSwCYVJQ28vlgGkvMvLmfRK8ljRyNt%2BPsH%2B2%2F09z65QIFMFCHvjO3jXOmNAzDEhd6jjygJ3fPYfzOm%2BShZokFZsM3zBgcWd9xvbXhnIAjTK9gu3ZQQRKWlASBbvd6KS9Skpp1qFzhvzrQX73PorzTqa6DiXpinV%2BKvQG5JNizxFMfzGi4Ss1HMyE%2FAt0JiAi1OIkoZe5nHD%2B4oHL35kpeDq9sVQ7FEZ964cRUPWmaVfAQqRpj6bERiRdsfM41nK6oCy6tJbPwZchKnupIhCc4Ga9qtF5YwUjPkpu5on%2B3dYwJyW7dyDPJ3FSOujizLHXAzsKEjUhF9TwwcjNvBbtaspHCsNRz3%2BgSp9R6ej%2FPh2DUFsyB5q629%2F4Vwr2dMta9T6y3dzlPYqtSQpKAkd9FXRCjjGYN7utNuqblENm%2FIHzEbVh0HNCs8zr0sJCqtK0t9pcHsT9UJyKbwiaKXOUGzvCFnRE34wQY37PzjAbh8VGKxiW0n5Zy61vulPqadvtjuPFLEaE2CV2RtQTGu0IgLpBhq3WFL%2FEt1XdT4qymm2PyH88OSU3mpE9ErMMNrh38IGOqUBbTsP4rVPXiAqP5%2F1l%2F7%2BlHX6t9peUKToJoILsYqGXf9AFaVrDmLlPAf4NE4T0%2FDs7CBWbsVIJcWzpKkmbAIGkWhmHojUE%2BO5V0GCeTS3K8%2Fn8zgrFpW80ZBm7Otv%2BUy%2FhheOh1XKViKlfwziZRhRTIdR6g7UXA594ihElHm8sI4UdFoI%2BgU2aIqSrJvsqknqiM6ZCSFX9BQ4pG4dvaJ1eVDmIGpT&X-Amz-Signature=0cdd77b7dc05636c5472616cf397a5df81aae03a37c5ffff691eab0264cfc3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
