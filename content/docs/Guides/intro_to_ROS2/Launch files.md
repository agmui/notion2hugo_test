---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K3TIHK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9JL7zQUgWbRtYe4Pz7UomFqdcM6HBKxL7mMKMklKEuQIgXgkECpDI2p01BSw2D6cYQ8zL8Ppbe4UEkB%2FaWGhiQMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BDOlPZL4OaXHcEnyrcA1X2Z0ux2otoeovV%2BK02A8FMEBoeMMJI2%2BgGSlFYjvX5K3%2BVYn2hxC0GI%2BH%2FQdg6sXx0O4og0Rt%2Fw1q27dG%2FexQkjesYKl4KcSQaW81C9byuWKBwQj5ub11LQJXuweIvpbABNPmR%2BC%2FkgxBJZKASbZqDazpzQhKI7woo7VkoGaohoZmKXckq0cKQ2ASV3PvuaFmyiulBR0wS4R8DKYbCYGwdeXamVnSqFWxnRS9KYyUjWgV5zK2OwDG%2BOyoCwl%2BK6lFD1ibYU1gYgbTHmat81K2HU%2FcxDsDDaZTfhk49cmld8Pv8vdm01WOhH%2BGv8eG1bJUj%2Bc738yRzm%2BEHFmmsekn0f%2FqrENa1BKE%2Fypyk%2F1%2BeKYTPadt5TZ9g5m8yrqLmvUFG77h2iAQnFGzf62tJfJUbd02QWyi2eGvhLvWa7GGs8cOlEicgkkCGG3Q34wRg6RDIk%2BJsG0srHrUEcUoNkGz6%2B4JzNkHma6LoStFIcr90L0k6SuVoGyCurnCz8cKX9h9xOfmss6JCgswZxJpvVHlcu4juXv8wwJ0xaAocy8Ishps4ItBadV%2BpIVnHvt7SU2U1VY6r6%2BpyvqoJFUTv5Pe7wOvFjNdrymchMvGlkSSpWQmUoFJruzWcsbVxMJL%2Bo8QGOqUBR9poya08zC2J1t4oNrg7AjnKxIE2Z9wrNQCw6yyJEKUXafJ2Y2ONsvc%2FZbuVEaGlRL0ib59YG9ehCsC%2FStJO9JbBvEUU2DsMKqcoVv0PB3PQ9Q5JXZIqN1rO9H40rHSzPekU3pDlhJ4SBBCTa%2BElI%2FQrD0n%2B15Eguh6DiwhJ%2BKIhqz0tCm%2FDwMz004OFO3Uq0BuTCViULcEa7fM9VUqlIo0yhC57&X-Amz-Signature=6d79e9d28e1d960039ab70fa5c330d2563d988a69a155aefc5d84304da28d307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K3TIHK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9JL7zQUgWbRtYe4Pz7UomFqdcM6HBKxL7mMKMklKEuQIgXgkECpDI2p01BSw2D6cYQ8zL8Ppbe4UEkB%2FaWGhiQMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BDOlPZL4OaXHcEnyrcA1X2Z0ux2otoeovV%2BK02A8FMEBoeMMJI2%2BgGSlFYjvX5K3%2BVYn2hxC0GI%2BH%2FQdg6sXx0O4og0Rt%2Fw1q27dG%2FexQkjesYKl4KcSQaW81C9byuWKBwQj5ub11LQJXuweIvpbABNPmR%2BC%2FkgxBJZKASbZqDazpzQhKI7woo7VkoGaohoZmKXckq0cKQ2ASV3PvuaFmyiulBR0wS4R8DKYbCYGwdeXamVnSqFWxnRS9KYyUjWgV5zK2OwDG%2BOyoCwl%2BK6lFD1ibYU1gYgbTHmat81K2HU%2FcxDsDDaZTfhk49cmld8Pv8vdm01WOhH%2BGv8eG1bJUj%2Bc738yRzm%2BEHFmmsekn0f%2FqrENa1BKE%2Fypyk%2F1%2BeKYTPadt5TZ9g5m8yrqLmvUFG77h2iAQnFGzf62tJfJUbd02QWyi2eGvhLvWa7GGs8cOlEicgkkCGG3Q34wRg6RDIk%2BJsG0srHrUEcUoNkGz6%2B4JzNkHma6LoStFIcr90L0k6SuVoGyCurnCz8cKX9h9xOfmss6JCgswZxJpvVHlcu4juXv8wwJ0xaAocy8Ishps4ItBadV%2BpIVnHvt7SU2U1VY6r6%2BpyvqoJFUTv5Pe7wOvFjNdrymchMvGlkSSpWQmUoFJruzWcsbVxMJL%2Bo8QGOqUBR9poya08zC2J1t4oNrg7AjnKxIE2Z9wrNQCw6yyJEKUXafJ2Y2ONsvc%2FZbuVEaGlRL0ib59YG9ehCsC%2FStJO9JbBvEUU2DsMKqcoVv0PB3PQ9Q5JXZIqN1rO9H40rHSzPekU3pDlhJ4SBBCTa%2BElI%2FQrD0n%2B15Eguh6DiwhJ%2BKIhqz0tCm%2FDwMz004OFO3Uq0BuTCViULcEa7fM9VUqlIo0yhC57&X-Amz-Signature=5797fe0b88ba003ba8df81dedd5c60a310635c0357a36ac85eb49a40ff968137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4K3TIHK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9JL7zQUgWbRtYe4Pz7UomFqdcM6HBKxL7mMKMklKEuQIgXgkECpDI2p01BSw2D6cYQ8zL8Ppbe4UEkB%2FaWGhiQMYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BDOlPZL4OaXHcEnyrcA1X2Z0ux2otoeovV%2BK02A8FMEBoeMMJI2%2BgGSlFYjvX5K3%2BVYn2hxC0GI%2BH%2FQdg6sXx0O4og0Rt%2Fw1q27dG%2FexQkjesYKl4KcSQaW81C9byuWKBwQj5ub11LQJXuweIvpbABNPmR%2BC%2FkgxBJZKASbZqDazpzQhKI7woo7VkoGaohoZmKXckq0cKQ2ASV3PvuaFmyiulBR0wS4R8DKYbCYGwdeXamVnSqFWxnRS9KYyUjWgV5zK2OwDG%2BOyoCwl%2BK6lFD1ibYU1gYgbTHmat81K2HU%2FcxDsDDaZTfhk49cmld8Pv8vdm01WOhH%2BGv8eG1bJUj%2Bc738yRzm%2BEHFmmsekn0f%2FqrENa1BKE%2Fypyk%2F1%2BeKYTPadt5TZ9g5m8yrqLmvUFG77h2iAQnFGzf62tJfJUbd02QWyi2eGvhLvWa7GGs8cOlEicgkkCGG3Q34wRg6RDIk%2BJsG0srHrUEcUoNkGz6%2B4JzNkHma6LoStFIcr90L0k6SuVoGyCurnCz8cKX9h9xOfmss6JCgswZxJpvVHlcu4juXv8wwJ0xaAocy8Ishps4ItBadV%2BpIVnHvt7SU2U1VY6r6%2BpyvqoJFUTv5Pe7wOvFjNdrymchMvGlkSSpWQmUoFJruzWcsbVxMJL%2Bo8QGOqUBR9poya08zC2J1t4oNrg7AjnKxIE2Z9wrNQCw6yyJEKUXafJ2Y2ONsvc%2FZbuVEaGlRL0ib59YG9ehCsC%2FStJO9JbBvEUU2DsMKqcoVv0PB3PQ9Q5JXZIqN1rO9H40rHSzPekU3pDlhJ4SBBCTa%2BElI%2FQrD0n%2B15Eguh6DiwhJ%2BKIhqz0tCm%2FDwMz004OFO3Uq0BuTCViULcEa7fM9VUqlIo0yhC57&X-Amz-Signature=52b23216963090d08fb709490fff9ef1cbdb15f8b735e43c18d84adaa56d45aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
