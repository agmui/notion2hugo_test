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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQOSN3O%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDawdf5Gg2BnwRbpWgByGrA3ou8GNmZ5v6mrfhlvS08LAIgNfb%2ByGuPxGsdJUWtRunMEw8oe%2BHsLpMpdgj7IndXdSMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOkyRXi7WpD6RGh%2FSrcA5YUnVqZEVN5B92W9xXPRAkfud32CTNZEgXaXNZIOsUE1s9oSpD97Ipp%2FNiJw%2FlpnyRhZQTaGHbWWwwt1TOMdzrib5aiq61TzAJ1x%2BG%2FBWHNfKFkjBsV%2Bn%2FhvYk%2F8UCkMPoyQFY8T4cYvAvJpF8zI9Tvdfkc0MBELRzVkO7ed90UvBRCppqQD0YAxamSv6nSVKoJXW3D8miXno01kHX3cGIsU3aP16yKiHDqColkoZriAMgdAMomqbHhD9hsfN%2FpBs%2BJ8IWwB3oxQDKMoyvcY91jh%2B34EOu5sDbk%2Bjkw867QJZJUqY05gTh7BsxPOyxNwn51%2F7CuV6Pr1QqM4wU%2FQU1kptzD1QO6%2FEuLcCq5nMcTh%2BlZ42Zn3XztiBcmoW1BIMf660ST41o8sQxEcmgxZWoYOJqXfTMIuBQrOPg6unF55pJwF0Smc5Ga4w1lGe2pwPngfe5XZPKWvCV%2B0lTKCfpEw0Z38LXF8XOTie7TzGJk22XAtdC%2BSZAHBR6VE7YYkUJeDSHUNo0P4r1XB%2FD%2FBSjyUrkxnGjQAg7jMelMZi2yYArqSHTCnAuGSKNcHanmqQ12eZ55HRVHS5yWRwY1SRMW%2BgxKJPHZB4HLMqhlWX8ghi7PMZnr58UD%2FHitMJfy178GOqUBPqMn5P0KNEVE5xbA0dtU%2F%2F5MPo7eEL7SNbgK6yzo8C1z8GQMX0TvFTvPCMJdyJkEBvmUMeb0a%2FfeohFf5GgayO%2Bj5yl6FYqIeTzbeMN8B5YEI8JNCiXLLn5wT9na7OuMTXwZPI13hxDX7cCz0LZs9mf1hLzwlVs0gBbjp18E1zYoBVabjYaQ%2BhLb5XYuViVjkCAQVMHc3pVQ1lvZ0PfhYMQxhwTW&X-Amz-Signature=7a65bb495a690b5ea5146f81b1417af36b02f8212967bab98df24f9f60e791f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQOSN3O%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDawdf5Gg2BnwRbpWgByGrA3ou8GNmZ5v6mrfhlvS08LAIgNfb%2ByGuPxGsdJUWtRunMEw8oe%2BHsLpMpdgj7IndXdSMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOkyRXi7WpD6RGh%2FSrcA5YUnVqZEVN5B92W9xXPRAkfud32CTNZEgXaXNZIOsUE1s9oSpD97Ipp%2FNiJw%2FlpnyRhZQTaGHbWWwwt1TOMdzrib5aiq61TzAJ1x%2BG%2FBWHNfKFkjBsV%2Bn%2FhvYk%2F8UCkMPoyQFY8T4cYvAvJpF8zI9Tvdfkc0MBELRzVkO7ed90UvBRCppqQD0YAxamSv6nSVKoJXW3D8miXno01kHX3cGIsU3aP16yKiHDqColkoZriAMgdAMomqbHhD9hsfN%2FpBs%2BJ8IWwB3oxQDKMoyvcY91jh%2B34EOu5sDbk%2Bjkw867QJZJUqY05gTh7BsxPOyxNwn51%2F7CuV6Pr1QqM4wU%2FQU1kptzD1QO6%2FEuLcCq5nMcTh%2BlZ42Zn3XztiBcmoW1BIMf660ST41o8sQxEcmgxZWoYOJqXfTMIuBQrOPg6unF55pJwF0Smc5Ga4w1lGe2pwPngfe5XZPKWvCV%2B0lTKCfpEw0Z38LXF8XOTie7TzGJk22XAtdC%2BSZAHBR6VE7YYkUJeDSHUNo0P4r1XB%2FD%2FBSjyUrkxnGjQAg7jMelMZi2yYArqSHTCnAuGSKNcHanmqQ12eZ55HRVHS5yWRwY1SRMW%2BgxKJPHZB4HLMqhlWX8ghi7PMZnr58UD%2FHitMJfy178GOqUBPqMn5P0KNEVE5xbA0dtU%2F%2F5MPo7eEL7SNbgK6yzo8C1z8GQMX0TvFTvPCMJdyJkEBvmUMeb0a%2FfeohFf5GgayO%2Bj5yl6FYqIeTzbeMN8B5YEI8JNCiXLLn5wT9na7OuMTXwZPI13hxDX7cCz0LZs9mf1hLzwlVs0gBbjp18E1zYoBVabjYaQ%2BhLb5XYuViVjkCAQVMHc3pVQ1lvZ0PfhYMQxhwTW&X-Amz-Signature=d4fd564761697d3f61242432f5243052f1783515871fb7c307022faba3190b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQOSN3O%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDawdf5Gg2BnwRbpWgByGrA3ou8GNmZ5v6mrfhlvS08LAIgNfb%2ByGuPxGsdJUWtRunMEw8oe%2BHsLpMpdgj7IndXdSMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOkyRXi7WpD6RGh%2FSrcA5YUnVqZEVN5B92W9xXPRAkfud32CTNZEgXaXNZIOsUE1s9oSpD97Ipp%2FNiJw%2FlpnyRhZQTaGHbWWwwt1TOMdzrib5aiq61TzAJ1x%2BG%2FBWHNfKFkjBsV%2Bn%2FhvYk%2F8UCkMPoyQFY8T4cYvAvJpF8zI9Tvdfkc0MBELRzVkO7ed90UvBRCppqQD0YAxamSv6nSVKoJXW3D8miXno01kHX3cGIsU3aP16yKiHDqColkoZriAMgdAMomqbHhD9hsfN%2FpBs%2BJ8IWwB3oxQDKMoyvcY91jh%2B34EOu5sDbk%2Bjkw867QJZJUqY05gTh7BsxPOyxNwn51%2F7CuV6Pr1QqM4wU%2FQU1kptzD1QO6%2FEuLcCq5nMcTh%2BlZ42Zn3XztiBcmoW1BIMf660ST41o8sQxEcmgxZWoYOJqXfTMIuBQrOPg6unF55pJwF0Smc5Ga4w1lGe2pwPngfe5XZPKWvCV%2B0lTKCfpEw0Z38LXF8XOTie7TzGJk22XAtdC%2BSZAHBR6VE7YYkUJeDSHUNo0P4r1XB%2FD%2FBSjyUrkxnGjQAg7jMelMZi2yYArqSHTCnAuGSKNcHanmqQ12eZ55HRVHS5yWRwY1SRMW%2BgxKJPHZB4HLMqhlWX8ghi7PMZnr58UD%2FHitMJfy178GOqUBPqMn5P0KNEVE5xbA0dtU%2F%2F5MPo7eEL7SNbgK6yzo8C1z8GQMX0TvFTvPCMJdyJkEBvmUMeb0a%2FfeohFf5GgayO%2Bj5yl6FYqIeTzbeMN8B5YEI8JNCiXLLn5wT9na7OuMTXwZPI13hxDX7cCz0LZs9mf1hLzwlVs0gBbjp18E1zYoBVabjYaQ%2BhLb5XYuViVjkCAQVMHc3pVQ1lvZ0PfhYMQxhwTW&X-Amz-Signature=b1c2adb9c71182c29340d2d1822559e86fdf0baa833255678ac56cdf7552d2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
