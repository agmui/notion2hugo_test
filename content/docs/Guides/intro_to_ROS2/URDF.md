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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3NIQ6I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzowQlJQugWVF9ud5Z5litzKblcpUO5QdzJfVFnwkbAIhALhrM9KZikx1k85squ1bZnsxXT1aGuLflHL8QYLzv3KFKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAO2fFCDsBuXAZQYq3AMZTNgpa4c81%2FJR8kx0twemZCH8DjvxyzMDDfpuiF%2BzR16%2FZdpMHbPWvUvxwPct0wc5ooFfU9roeZ%2F5WvubxDtgoOr6VQ3DUDjrb%2FoQqbZK%2FLSsphVlphYy2bMhRddGypoQNNh9DqsKmxFO3uglBvJG6UDi6hshftEI%2FNGpH%2B5QDbMNAb9%2FO7HAalLIeE9jhsqlmGEHTrNZ%2BJX17XovJBhJj6lJTnc7YWkzKfzVbU7aNkcy7QUyzUF4AZ4%2BT9SBC%2BuV%2FcnFOtsBlM2v%2Bt5yS%2BMO7wJMhoWOia5JeJaW%2F17tln1nQcfZ29HhoM%2FxYBezSai1NXmRJDElc9wVvrSJZ1VPfJPiIS%2BMQF5vPVzRKsb75eIf8aHurmSyCZ5Iudyx3K6ITB2y%2BHBOsyvEizM%2BoZ9jzwEN2xwcWMTqe4uC91ZAjJedeLNYa7058xYx6HTWCD5yqR8o0lQwozNzxe7pzpZGTT11VADiugHEAn7T%2BF1AmwFhM8ND9WRE8PdWMjFnQb0xi707%2BQQ5Y38xJOfgUhwqNmo1p1Qcwwje15f1bbj7lfSI82fGKjwW%2FY45x0rAh7QlezvMpT3k2VrNQgSS9pMSAhFJJtsyJ9yTunk0ekt3bWOlud7vFOLygHGeFDCV7pjCBjqkAfqQO0pYF0gfKNttqXmbW35vTY%2F51FvgQjWst%2FiV1UF5SQoyzBvq0Zgus6ffDq2yXF3PK7fO0uXOsJSPJMQe0g%2BVUWIzOWAeaSwmYM3ljNQDXVFMGdkrQKwR8Sinb4o72tfmizwVs1svRaJVMJ5qcFCEC6tKP8NFNmkbWcz3R%2F5AExC3MF3NEsbzX91q99pZarWLFjPhA9JcwvPEemgZri6wxXRC&X-Amz-Signature=bf2ae2524efb77db0b03ece2c9428a306ae982e9f0cb05abe7b0d0c617787302&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3NIQ6I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzowQlJQugWVF9ud5Z5litzKblcpUO5QdzJfVFnwkbAIhALhrM9KZikx1k85squ1bZnsxXT1aGuLflHL8QYLzv3KFKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjAO2fFCDsBuXAZQYq3AMZTNgpa4c81%2FJR8kx0twemZCH8DjvxyzMDDfpuiF%2BzR16%2FZdpMHbPWvUvxwPct0wc5ooFfU9roeZ%2F5WvubxDtgoOr6VQ3DUDjrb%2FoQqbZK%2FLSsphVlphYy2bMhRddGypoQNNh9DqsKmxFO3uglBvJG6UDi6hshftEI%2FNGpH%2B5QDbMNAb9%2FO7HAalLIeE9jhsqlmGEHTrNZ%2BJX17XovJBhJj6lJTnc7YWkzKfzVbU7aNkcy7QUyzUF4AZ4%2BT9SBC%2BuV%2FcnFOtsBlM2v%2Bt5yS%2BMO7wJMhoWOia5JeJaW%2F17tln1nQcfZ29HhoM%2FxYBezSai1NXmRJDElc9wVvrSJZ1VPfJPiIS%2BMQF5vPVzRKsb75eIf8aHurmSyCZ5Iudyx3K6ITB2y%2BHBOsyvEizM%2BoZ9jzwEN2xwcWMTqe4uC91ZAjJedeLNYa7058xYx6HTWCD5yqR8o0lQwozNzxe7pzpZGTT11VADiugHEAn7T%2BF1AmwFhM8ND9WRE8PdWMjFnQb0xi707%2BQQ5Y38xJOfgUhwqNmo1p1Qcwwje15f1bbj7lfSI82fGKjwW%2FY45x0rAh7QlezvMpT3k2VrNQgSS9pMSAhFJJtsyJ9yTunk0ekt3bWOlud7vFOLygHGeFDCV7pjCBjqkAfqQO0pYF0gfKNttqXmbW35vTY%2F51FvgQjWst%2FiV1UF5SQoyzBvq0Zgus6ffDq2yXF3PK7fO0uXOsJSPJMQe0g%2BVUWIzOWAeaSwmYM3ljNQDXVFMGdkrQKwR8Sinb4o72tfmizwVs1svRaJVMJ5qcFCEC6tKP8NFNmkbWcz3R%2F5AExC3MF3NEsbzX91q99pZarWLFjPhA9JcwvPEemgZri6wxXRC&X-Amz-Signature=b14f4409484b1639067c2546a8dad933b46abda62965db450f1765098fcf1ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
