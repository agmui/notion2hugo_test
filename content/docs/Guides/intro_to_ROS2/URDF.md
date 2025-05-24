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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6ZBXW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHL4bgsm6r3E4k%2FzNDvE4XCdc4GuH1DEa5fq5WhJ00JnAiBk%2Biudw0pgzkFAapdd4BsfMkD0Sj5XJQ1X%2B%2Fa7BNyGmSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDDqUvnSUIxSO2d5LKtwDWWKNYNV8M%2F1JA7X50ofaSxFKcJEMtqpY1hVLf70L%2BxVRB1l%2BWzSQHa2EkpGpxk5LdN4Tiv3YJRjqWPAMX6sy8LBmxd3Dn%2FNdJAQWGXJq5Ud79fpxvbCjrbtLfGnZUJzNnhKfbVtnq4RTrGg2bSSApWgaUxGwolbqC3JFVxs3CddagZFARirHSPYRvPlkaN2qbinyAPM3wVhhcuAFc8a48a89KgabOvEiF%2Bz3nsG1oez08kNGtsTowtxJ63cX8HgM19bItku3kKW4JMfpIaijK6Fk4YdBBoLLkJTZGXB4MmrTaDAxy6mC%2BCH361JMW1GCrqDCxjV9lRB7PvbxmBsttSMriakF7ks9CtRrIwGtGaAqVUYE6T%2BD%2BeRMwNEmwXlkAXpDGFo%2FlBTnI5ppkwP56R6NdLVUYxX0EsMqmqGEalXrJAsWtTqwclk9VhStYt6YobB3q6IUI4xJglr%2BrHq4TueJbXUqYpgM%2FzpJZGYAXmGUu3gReGKarEIxOnouTu%2FrXX9MyIu4WTPTRH3nj4K2aaM7xD6K1yL3jwKt4eKv%2BngjXuUzaeAmquqxfhYnmMU3kRhUDB81ys2Nmlg935hmTGhIGNvkdugv7qutNbZu6zNv8SvXPnO5YMzBYEQwlJDEwQY6pgFPcuH9Bl1EFox6O5RohClZ93WAy8jbgcsmkJ37NbngioBVVCEUiR3qRiPbharefQ42%2FXlkPOtkV8ysEqXkMZe0Lk9cYi7TJ5kFeEfo51QMTdfVgx1GRP9u3tXc3VSThYY7yzEiHTpyCzXR7WaVU4EVpJTOi%2BmrdBO9P5BqPA1Vg6iX9ORowSueOjX%2B3PMzjxFdEGY9tmwydiTXcK8zpoVXKtpL92je&X-Amz-Signature=b715b3ddafcc6968db34753c018a1972a9b217d2a5d14f5bd14e39e135f9dd64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZH6ZBXW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHL4bgsm6r3E4k%2FzNDvE4XCdc4GuH1DEa5fq5WhJ00JnAiBk%2Biudw0pgzkFAapdd4BsfMkD0Sj5XJQ1X%2B%2Fa7BNyGmSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDDqUvnSUIxSO2d5LKtwDWWKNYNV8M%2F1JA7X50ofaSxFKcJEMtqpY1hVLf70L%2BxVRB1l%2BWzSQHa2EkpGpxk5LdN4Tiv3YJRjqWPAMX6sy8LBmxd3Dn%2FNdJAQWGXJq5Ud79fpxvbCjrbtLfGnZUJzNnhKfbVtnq4RTrGg2bSSApWgaUxGwolbqC3JFVxs3CddagZFARirHSPYRvPlkaN2qbinyAPM3wVhhcuAFc8a48a89KgabOvEiF%2Bz3nsG1oez08kNGtsTowtxJ63cX8HgM19bItku3kKW4JMfpIaijK6Fk4YdBBoLLkJTZGXB4MmrTaDAxy6mC%2BCH361JMW1GCrqDCxjV9lRB7PvbxmBsttSMriakF7ks9CtRrIwGtGaAqVUYE6T%2BD%2BeRMwNEmwXlkAXpDGFo%2FlBTnI5ppkwP56R6NdLVUYxX0EsMqmqGEalXrJAsWtTqwclk9VhStYt6YobB3q6IUI4xJglr%2BrHq4TueJbXUqYpgM%2FzpJZGYAXmGUu3gReGKarEIxOnouTu%2FrXX9MyIu4WTPTRH3nj4K2aaM7xD6K1yL3jwKt4eKv%2BngjXuUzaeAmquqxfhYnmMU3kRhUDB81ys2Nmlg935hmTGhIGNvkdugv7qutNbZu6zNv8SvXPnO5YMzBYEQwlJDEwQY6pgFPcuH9Bl1EFox6O5RohClZ93WAy8jbgcsmkJ37NbngioBVVCEUiR3qRiPbharefQ42%2FXlkPOtkV8ysEqXkMZe0Lk9cYi7TJ5kFeEfo51QMTdfVgx1GRP9u3tXc3VSThYY7yzEiHTpyCzXR7WaVU4EVpJTOi%2BmrdBO9P5BqPA1Vg6iX9ORowSueOjX%2B3PMzjxFdEGY9tmwydiTXcK8zpoVXKtpL92je&X-Amz-Signature=1081167f1f8af7c97b95a9c082243ee8e8608f3faa01dae0fe3ab85fc6150758&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
