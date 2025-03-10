---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GQCDIX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDqG0syQD2yBl9Mksjq9zsLZD%2F2ZgwPRLHReqyuVjNBbwIgONKSMhZYHYQNrJhLx1xAtaEYAkisA6JstIISWttCK%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIavNzrQA31JszUsuircA2IhU6RHr1IAcLckJA6qmSAsimxu5LIdik5hVq6358mtd%2BxFNmaPRXnr99iNyklGZsVlhY4wHUUAPehDSLDKid%2BefLmUYihK5wis9TKmnFeDWniAqGal2FxrpTSghavWNmQO7M1yWaVlXTAItt0%2F%2Bw8%2BFvA%2BR5Hyy0QHBdeuR3BWDBdXbBbyZhoihpGWGLstyPhmwqK9zrs3sUBAK1mP3gVljUr2avihjRZmBJrnQS%2BcLSOrvodC1j6nGmPEe0zyOJeXFkBXFxiKpMzPrlP7PIcy%2FiU2RRpNxNP%2FIU%2BRWOvgLSDPlZNuMS1evyw2lEyXHKf5wRtZ9JE%2FgQzO5sTQTQIYd5T9Hzh6nntMxm93MpzV9kJIXd8v%2Fsp2GN6geixoFAg1KJYMCjwMVb1BtRLh3aF8enufXM0l4cI07IAskgSf6X%2BR0vmFeaE7FIx%2F3bXvsJ9%2Bq0fLYAKQ49ijj7sQoYfXATK8MEaVY49r%2B6VuCqMMj%2BLG4QD01GLiMMIJavMpqG4xhPtKJr%2BZvpi0VM8V4fRk%2BUU2QylGBjGYpQzxaddKpT%2B1iH3WngKcoIQhliMN6OTLx%2B5rz0w2thxDvUppDnfguBbsJBXplwmAHwIEjKMNNk5QjNeyY2k0VGczMI%2FIur4GOqUBmMtD66ELXLvPetCvBhfQx0Z3f5zWnXpTkbw6S2wFm%2F%2B8LKl8RMvqqU5Vi%2F4LIQ%2FwDffCjygwUCd%2F%2FSiTsATWAN8LYsMT00oYhDGMmb%2B%2B7Tn%2F9u%2BnwBC6gQy24SnJFKCuULTv%2Bu5I0woo5YGmUMH5lERgPTlR5gSlpMz0XSi5RveXqgw5edvqtF3ccqO7RerNxDRu4JeBlpsLN%2F1BiADF1e1F8UX8&X-Amz-Signature=3bcac7647f9b74f936e7c7f88a05272bc3c75878bfa85a3a9805df4508fb2fee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GQCDIX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDqG0syQD2yBl9Mksjq9zsLZD%2F2ZgwPRLHReqyuVjNBbwIgONKSMhZYHYQNrJhLx1xAtaEYAkisA6JstIISWttCK%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIavNzrQA31JszUsuircA2IhU6RHr1IAcLckJA6qmSAsimxu5LIdik5hVq6358mtd%2BxFNmaPRXnr99iNyklGZsVlhY4wHUUAPehDSLDKid%2BefLmUYihK5wis9TKmnFeDWniAqGal2FxrpTSghavWNmQO7M1yWaVlXTAItt0%2F%2Bw8%2BFvA%2BR5Hyy0QHBdeuR3BWDBdXbBbyZhoihpGWGLstyPhmwqK9zrs3sUBAK1mP3gVljUr2avihjRZmBJrnQS%2BcLSOrvodC1j6nGmPEe0zyOJeXFkBXFxiKpMzPrlP7PIcy%2FiU2RRpNxNP%2FIU%2BRWOvgLSDPlZNuMS1evyw2lEyXHKf5wRtZ9JE%2FgQzO5sTQTQIYd5T9Hzh6nntMxm93MpzV9kJIXd8v%2Fsp2GN6geixoFAg1KJYMCjwMVb1BtRLh3aF8enufXM0l4cI07IAskgSf6X%2BR0vmFeaE7FIx%2F3bXvsJ9%2Bq0fLYAKQ49ijj7sQoYfXATK8MEaVY49r%2B6VuCqMMj%2BLG4QD01GLiMMIJavMpqG4xhPtKJr%2BZvpi0VM8V4fRk%2BUU2QylGBjGYpQzxaddKpT%2B1iH3WngKcoIQhliMN6OTLx%2B5rz0w2thxDvUppDnfguBbsJBXplwmAHwIEjKMNNk5QjNeyY2k0VGczMI%2FIur4GOqUBmMtD66ELXLvPetCvBhfQx0Z3f5zWnXpTkbw6S2wFm%2F%2B8LKl8RMvqqU5Vi%2F4LIQ%2FwDffCjygwUCd%2F%2FSiTsATWAN8LYsMT00oYhDGMmb%2B%2B7Tn%2F9u%2BnwBC6gQy24SnJFKCuULTv%2Bu5I0woo5YGmUMH5lERgPTlR5gSlpMz0XSi5RveXqgw5edvqtF3ccqO7RerNxDRu4JeBlpsLN%2F1BiADF1e1F8UX8&X-Amz-Signature=649eb6cb90cd5da271deceb84e9727a4203fc1089847f708eb955233e5dc33e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GQCDIX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDqG0syQD2yBl9Mksjq9zsLZD%2F2ZgwPRLHReqyuVjNBbwIgONKSMhZYHYQNrJhLx1xAtaEYAkisA6JstIISWttCK%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIavNzrQA31JszUsuircA2IhU6RHr1IAcLckJA6qmSAsimxu5LIdik5hVq6358mtd%2BxFNmaPRXnr99iNyklGZsVlhY4wHUUAPehDSLDKid%2BefLmUYihK5wis9TKmnFeDWniAqGal2FxrpTSghavWNmQO7M1yWaVlXTAItt0%2F%2Bw8%2BFvA%2BR5Hyy0QHBdeuR3BWDBdXbBbyZhoihpGWGLstyPhmwqK9zrs3sUBAK1mP3gVljUr2avihjRZmBJrnQS%2BcLSOrvodC1j6nGmPEe0zyOJeXFkBXFxiKpMzPrlP7PIcy%2FiU2RRpNxNP%2FIU%2BRWOvgLSDPlZNuMS1evyw2lEyXHKf5wRtZ9JE%2FgQzO5sTQTQIYd5T9Hzh6nntMxm93MpzV9kJIXd8v%2Fsp2GN6geixoFAg1KJYMCjwMVb1BtRLh3aF8enufXM0l4cI07IAskgSf6X%2BR0vmFeaE7FIx%2F3bXvsJ9%2Bq0fLYAKQ49ijj7sQoYfXATK8MEaVY49r%2B6VuCqMMj%2BLG4QD01GLiMMIJavMpqG4xhPtKJr%2BZvpi0VM8V4fRk%2BUU2QylGBjGYpQzxaddKpT%2B1iH3WngKcoIQhliMN6OTLx%2B5rz0w2thxDvUppDnfguBbsJBXplwmAHwIEjKMNNk5QjNeyY2k0VGczMI%2FIur4GOqUBmMtD66ELXLvPetCvBhfQx0Z3f5zWnXpTkbw6S2wFm%2F%2B8LKl8RMvqqU5Vi%2F4LIQ%2FwDffCjygwUCd%2F%2FSiTsATWAN8LYsMT00oYhDGMmb%2B%2B7Tn%2F9u%2BnwBC6gQy24SnJFKCuULTv%2Bu5I0woo5YGmUMH5lERgPTlR5gSlpMz0XSi5RveXqgw5edvqtF3ccqO7RerNxDRu4JeBlpsLN%2F1BiADF1e1F8UX8&X-Amz-Signature=6568b2c8ea80bb7fe594e365a15c7a1f949bf2eff4b8e128d5adaeccdc84b261&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
