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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQBHUUD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPKd3wz7edp%2B3XdWmN8vLk%2Fpowdx92kf%2BcOoAAwxvYAIgWklSt33PJpiLvapffzKcNJ8PEKvMAaMuddxn5WkRMlEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpMBWjHDj%2BGFUsn9yrcA1Fd56YLfFS3vW9HQHNlIaE84Wpgbmu2JlFwfOXYM1Xbk8H63TJUmuzQEXRzHiebUzA1y1ndfASSE1vV8YRjXSOkyeYYt%2B1xHHzV75L7CPsIagGKCp3qc67k6n%2B0k5m%2FGmmIc3IBQ9AvbivAVHSDG3D665brF%2FgULZVaHuqA%2F3d8NOy4TDdIAZrc%2BtKHN%2BP0m13Wpsj8cZMr%2Fss8tJ0kBt52ADiUk85pxPetVHqyPuYgyG6zk%2Bjof3yidSyc5YR9bmn5fw1lhP%2B8RQNARja197yxzX%2Ft1vq%2BtAGBOEXVkAKVHXDCFftoJftasNxOEJYp6yS6r%2BpvmbU9XwWEBTbDC1OlARm%2FHKKf9P20ymcthI5G2VsiQokhp2TAHH1KIsK3f4jZiLqMSsZqNAkF90bD2KcYoKRw9bAx3jkJPtwLYRr5%2Fc2ZCy4XcFWemhUXNrVVnQWxZZmYoqItJj9ARPQHM4RfyjOWBa8fPaSq4ujp1G0IdHVf05HTc20fDLYd7zx0ZF0wPIhs6dbG67M21Ff5J4HBpkdHfIx22Kce0s437P2uubq2IhGt7mUyq2rFj2hY%2BJhpwRgFyGBYzVTfP3mFOyzzjM17PFc9CiDssOUTCYVuiwS1fkfSThg8gAspMPvC9rwGOqUBmI5vEkkzhTFF0tR68L%2Fv3%2BjB0lMZkungpHtUU84455ka2S%2FjH9cJHanx97Jee2APvXzMHa9iK%2BASJDvWwrmrp8M6p8jpPe7DzDw5w%2FuglGYSTQPZDwwLSm%2FGFjRiA9qi6prfnEYw2GQhUon0nCOyTNG%2Fh%2FtuE5xmv2q%2BLCVOZNEz6J8Y9GXVeg%2BKeMrcWd0OyfqhjwS22NNYuG1wnhE%2BO8CbPlRS&X-Amz-Signature=b5a0ea8e8ad5baea2b0a51d9438061a86fd82999375817d85cd6d3e77a92d086&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQBHUUD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPKd3wz7edp%2B3XdWmN8vLk%2Fpowdx92kf%2BcOoAAwxvYAIgWklSt33PJpiLvapffzKcNJ8PEKvMAaMuddxn5WkRMlEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpMBWjHDj%2BGFUsn9yrcA1Fd56YLfFS3vW9HQHNlIaE84Wpgbmu2JlFwfOXYM1Xbk8H63TJUmuzQEXRzHiebUzA1y1ndfASSE1vV8YRjXSOkyeYYt%2B1xHHzV75L7CPsIagGKCp3qc67k6n%2B0k5m%2FGmmIc3IBQ9AvbivAVHSDG3D665brF%2FgULZVaHuqA%2F3d8NOy4TDdIAZrc%2BtKHN%2BP0m13Wpsj8cZMr%2Fss8tJ0kBt52ADiUk85pxPetVHqyPuYgyG6zk%2Bjof3yidSyc5YR9bmn5fw1lhP%2B8RQNARja197yxzX%2Ft1vq%2BtAGBOEXVkAKVHXDCFftoJftasNxOEJYp6yS6r%2BpvmbU9XwWEBTbDC1OlARm%2FHKKf9P20ymcthI5G2VsiQokhp2TAHH1KIsK3f4jZiLqMSsZqNAkF90bD2KcYoKRw9bAx3jkJPtwLYRr5%2Fc2ZCy4XcFWemhUXNrVVnQWxZZmYoqItJj9ARPQHM4RfyjOWBa8fPaSq4ujp1G0IdHVf05HTc20fDLYd7zx0ZF0wPIhs6dbG67M21Ff5J4HBpkdHfIx22Kce0s437P2uubq2IhGt7mUyq2rFj2hY%2BJhpwRgFyGBYzVTfP3mFOyzzjM17PFc9CiDssOUTCYVuiwS1fkfSThg8gAspMPvC9rwGOqUBmI5vEkkzhTFF0tR68L%2Fv3%2BjB0lMZkungpHtUU84455ka2S%2FjH9cJHanx97Jee2APvXzMHa9iK%2BASJDvWwrmrp8M6p8jpPe7DzDw5w%2FuglGYSTQPZDwwLSm%2FGFjRiA9qi6prfnEYw2GQhUon0nCOyTNG%2Fh%2FtuE5xmv2q%2BLCVOZNEz6J8Y9GXVeg%2BKeMrcWd0OyfqhjwS22NNYuG1wnhE%2BO8CbPlRS&X-Amz-Signature=5a3b2868c8dd72f8cf0edb4aa311441a5c4bc6a4e782cdc6b90b85236da6e29c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
