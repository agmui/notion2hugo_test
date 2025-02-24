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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTYVHSX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEerXu8QYaki2F2zniR5x5WWj7YOgVYxafGpzlzSfh19AiEA4nKcH%2FGbvCkud9VrR2VsjUrY2euhtLnPc4EsVQX1p5gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF84K1b61IpZX%2BMpmCrcA1Z0hyPMyAKKE8ZANWOUd7M4zZ5KrOAKGA%2BE4xlyL%2BHUBNysdHtkk%2F5p5uEUv4R1R%2FyX2TAbjD9wGRqfIbVkZzY2vKAEkQAPToba4EXx4NItzdNrGvUs7bqFQ2UGM%2FiALGL24CSf%2BSwk3i6ElfGoOgwS8h2%2BNNKvYix2ncy7kp%2Bxh3WL42vMxZ1Aipqvd6s4JtoQhtkETb2JGZUejwPrpm2xAeBDYK57YN0%2FGzZSoz3429S1o5FqjIipc1uwQS4ufhSgQ%2Fyh%2F%2F8ZX5UdB5Xt1p5AkRNOJ8eaZzOLGrwdyRCFW6uRzn5mlKk2w0akRIq1Cq0sfwCCeMSB60JGC5SmT%2Bs58eG6oPuS7iHQEKTy3HqNggklF2yG8SnfQN5%2B0nbzlqcFPDhExLT8zt6rtZMVhcwJBas%2FMiRdLPvJovhZqbecnw%2BcKjx%2BSlswBqN4DY9UPZfkDI7uzdWM6I1ZQre8buWu9dvZvn4M8pRALmQNigq%2FGvUuk8FOi%2BzGxLCnTKczArYYXiprJR14OVAyg6Fac57NIn4VnDqCJo4OuBqfQt0I4c53wTFSalN9VLdJUq5Z7Pty7AzW4PoA%2FdlQAaV5MXGPhssgMccB5y9KsPfuoKG%2F2uXIThuhzIxmBRBHMKK98r0GOqUBa%2BhyLDmMNE5XbnJyWFFMZGqjonclapTQaWE47sJG3%2BW49DkdjorqKTPGe%2FEwYiYIwB57Kqo%2B0LOHQskINHHKqa1uhKQKfQTlHwI%2FJGaO5xDJ%2FOy6FZusxg6WYxrDk6f7mtR1IFF2DrJ5PLx9df97%2BwRPY4BRk4vgux%2F%2BzZ65s38nnZxOlktgxAMH6ZKD7Q4AO2%2BkoDmXKcYy7sF7%2Fg4eGG3m9NR4&X-Amz-Signature=2c40b903f79619520488bee243ef918738f65fc3329fa968dc1885965f3c10ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTYVHSX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEerXu8QYaki2F2zniR5x5WWj7YOgVYxafGpzlzSfh19AiEA4nKcH%2FGbvCkud9VrR2VsjUrY2euhtLnPc4EsVQX1p5gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF84K1b61IpZX%2BMpmCrcA1Z0hyPMyAKKE8ZANWOUd7M4zZ5KrOAKGA%2BE4xlyL%2BHUBNysdHtkk%2F5p5uEUv4R1R%2FyX2TAbjD9wGRqfIbVkZzY2vKAEkQAPToba4EXx4NItzdNrGvUs7bqFQ2UGM%2FiALGL24CSf%2BSwk3i6ElfGoOgwS8h2%2BNNKvYix2ncy7kp%2Bxh3WL42vMxZ1Aipqvd6s4JtoQhtkETb2JGZUejwPrpm2xAeBDYK57YN0%2FGzZSoz3429S1o5FqjIipc1uwQS4ufhSgQ%2Fyh%2F%2F8ZX5UdB5Xt1p5AkRNOJ8eaZzOLGrwdyRCFW6uRzn5mlKk2w0akRIq1Cq0sfwCCeMSB60JGC5SmT%2Bs58eG6oPuS7iHQEKTy3HqNggklF2yG8SnfQN5%2B0nbzlqcFPDhExLT8zt6rtZMVhcwJBas%2FMiRdLPvJovhZqbecnw%2BcKjx%2BSlswBqN4DY9UPZfkDI7uzdWM6I1ZQre8buWu9dvZvn4M8pRALmQNigq%2FGvUuk8FOi%2BzGxLCnTKczArYYXiprJR14OVAyg6Fac57NIn4VnDqCJo4OuBqfQt0I4c53wTFSalN9VLdJUq5Z7Pty7AzW4PoA%2FdlQAaV5MXGPhssgMccB5y9KsPfuoKG%2F2uXIThuhzIxmBRBHMKK98r0GOqUBa%2BhyLDmMNE5XbnJyWFFMZGqjonclapTQaWE47sJG3%2BW49DkdjorqKTPGe%2FEwYiYIwB57Kqo%2B0LOHQskINHHKqa1uhKQKfQTlHwI%2FJGaO5xDJ%2FOy6FZusxg6WYxrDk6f7mtR1IFF2DrJ5PLx9df97%2BwRPY4BRk4vgux%2F%2BzZ65s38nnZxOlktgxAMH6ZKD7Q4AO2%2BkoDmXKcYy7sF7%2Fg4eGG3m9NR4&X-Amz-Signature=19c37705fe8896ed8b0f5e41441e974f37f772ba0ce450d1240b78cdc5afb18c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
