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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWF56WKY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCmxZ%2BeKE64%2BQtbPmy31UK%2Bv4b3VUqwpwDonYm9v%2FXNHAIhAI%2BDjp%2FioMaRcMVjqiISR4vMQva%2B%2BwEJ%2FCbfCt0P8C1MKv8DCC0QABoMNjM3NDIzMTgzODA1IgyYrqPD4I5lgxbRfTgq3AMsrhBuZsuNkUxNU9faQx4pT3ixMOc0J0HVihW4ZN97pqzL%2B3DWMhJUN1JxaFpz3oIbWDlTU4pCdIHkj8uq3mchwohBt6%2BlPXDgTaSx15SUKT9YQH2%2BTBgPbF1zj64mcKZ6c0DGHsx5BUlPrqotqMk0TXXQDECIF5c6TpK45DZwmJD8h3TZZAxzdb0qs7D9zZq8ZuDHJOKOlV9%2FgI5VJyzBsre%2F7JALA3p2HQmpYbU3X0sC2l79GBI8uTIZwKw%2BlT31Vj6QL%2BjuH8IvP7o%2B9736iT8J%2BSoAGOTlXaxukzR0DZ7iU4rSv5%2FRD3z%2FegpC9n%2BVCYl0wGzzgbGpdVz8XGee7WesAqsPAknLmzHCwboz10%2BbBsx0rYIPKnQ34pO4%2BSYNIfJDt72S2B5O5ta6bA8d4kyYLnmxUpznapzuwjF9RJrXkS%2Bg39K1n7gDiSRVfyaT2rm8NeU1JbiTfBXrAOoCIQ%2FrQaUMqWlQ%2B0JJO%2FAbI5AXTKnKjtcPlE5lAcZcySxvBVSy298pfhFGYEdGI%2FEltT0UtPsFmTT2ivW79br4mDV%2BjstZonC2iwE2IvRHG%2FuWoMbKv2Bisj7tF%2Fmsxk4%2BVX8yyLv89Tc0%2FzgTuXn1jdCFndiu3asoNuC3tjDrtYjEBjqkAQ4lMBNSw%2F8nP2KLUhH9dXsENrb7NxpJdw%2FReEoRB72RX%2FyDUZplisTDuh22gSrGLM%2BT%2BT7gYEp7mP16FUA3n5nD8TMk7IxdQhQdHB4l25TWF%2FyWGS%2Bpt%2FsZ5kIwsIGT4Y0qlI%2B1ROsFtwNW0Z%2F5VLhzWb1h%2BEM19tpbZFZkjON3I1K1KjJ39UREsKHmYgpDXGYSeQxKaOOt9l9ouDbcx6dkQz2O&X-Amz-Signature=4093a2164af9102b1faba2cf99c49517ef8ef631dae00d9253345a05bce994c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWF56WKY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCmxZ%2BeKE64%2BQtbPmy31UK%2Bv4b3VUqwpwDonYm9v%2FXNHAIhAI%2BDjp%2FioMaRcMVjqiISR4vMQva%2B%2BwEJ%2FCbfCt0P8C1MKv8DCC0QABoMNjM3NDIzMTgzODA1IgyYrqPD4I5lgxbRfTgq3AMsrhBuZsuNkUxNU9faQx4pT3ixMOc0J0HVihW4ZN97pqzL%2B3DWMhJUN1JxaFpz3oIbWDlTU4pCdIHkj8uq3mchwohBt6%2BlPXDgTaSx15SUKT9YQH2%2BTBgPbF1zj64mcKZ6c0DGHsx5BUlPrqotqMk0TXXQDECIF5c6TpK45DZwmJD8h3TZZAxzdb0qs7D9zZq8ZuDHJOKOlV9%2FgI5VJyzBsre%2F7JALA3p2HQmpYbU3X0sC2l79GBI8uTIZwKw%2BlT31Vj6QL%2BjuH8IvP7o%2B9736iT8J%2BSoAGOTlXaxukzR0DZ7iU4rSv5%2FRD3z%2FegpC9n%2BVCYl0wGzzgbGpdVz8XGee7WesAqsPAknLmzHCwboz10%2BbBsx0rYIPKnQ34pO4%2BSYNIfJDt72S2B5O5ta6bA8d4kyYLnmxUpznapzuwjF9RJrXkS%2Bg39K1n7gDiSRVfyaT2rm8NeU1JbiTfBXrAOoCIQ%2FrQaUMqWlQ%2B0JJO%2FAbI5AXTKnKjtcPlE5lAcZcySxvBVSy298pfhFGYEdGI%2FEltT0UtPsFmTT2ivW79br4mDV%2BjstZonC2iwE2IvRHG%2FuWoMbKv2Bisj7tF%2Fmsxk4%2BVX8yyLv89Tc0%2FzgTuXn1jdCFndiu3asoNuC3tjDrtYjEBjqkAQ4lMBNSw%2F8nP2KLUhH9dXsENrb7NxpJdw%2FReEoRB72RX%2FyDUZplisTDuh22gSrGLM%2BT%2BT7gYEp7mP16FUA3n5nD8TMk7IxdQhQdHB4l25TWF%2FyWGS%2Bpt%2FsZ5kIwsIGT4Y0qlI%2B1ROsFtwNW0Z%2F5VLhzWb1h%2BEM19tpbZFZkjON3I1K1KjJ39UREsKHmYgpDXGYSeQxKaOOt9l9ouDbcx6dkQz2O&X-Amz-Signature=b8c4c3bf2444cae2d04dd630f7da1ccfaad2a6075d92369c59e3eecbc3963cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWF56WKY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCmxZ%2BeKE64%2BQtbPmy31UK%2Bv4b3VUqwpwDonYm9v%2FXNHAIhAI%2BDjp%2FioMaRcMVjqiISR4vMQva%2B%2BwEJ%2FCbfCt0P8C1MKv8DCC0QABoMNjM3NDIzMTgzODA1IgyYrqPD4I5lgxbRfTgq3AMsrhBuZsuNkUxNU9faQx4pT3ixMOc0J0HVihW4ZN97pqzL%2B3DWMhJUN1JxaFpz3oIbWDlTU4pCdIHkj8uq3mchwohBt6%2BlPXDgTaSx15SUKT9YQH2%2BTBgPbF1zj64mcKZ6c0DGHsx5BUlPrqotqMk0TXXQDECIF5c6TpK45DZwmJD8h3TZZAxzdb0qs7D9zZq8ZuDHJOKOlV9%2FgI5VJyzBsre%2F7JALA3p2HQmpYbU3X0sC2l79GBI8uTIZwKw%2BlT31Vj6QL%2BjuH8IvP7o%2B9736iT8J%2BSoAGOTlXaxukzR0DZ7iU4rSv5%2FRD3z%2FegpC9n%2BVCYl0wGzzgbGpdVz8XGee7WesAqsPAknLmzHCwboz10%2BbBsx0rYIPKnQ34pO4%2BSYNIfJDt72S2B5O5ta6bA8d4kyYLnmxUpznapzuwjF9RJrXkS%2Bg39K1n7gDiSRVfyaT2rm8NeU1JbiTfBXrAOoCIQ%2FrQaUMqWlQ%2B0JJO%2FAbI5AXTKnKjtcPlE5lAcZcySxvBVSy298pfhFGYEdGI%2FEltT0UtPsFmTT2ivW79br4mDV%2BjstZonC2iwE2IvRHG%2FuWoMbKv2Bisj7tF%2Fmsxk4%2BVX8yyLv89Tc0%2FzgTuXn1jdCFndiu3asoNuC3tjDrtYjEBjqkAQ4lMBNSw%2F8nP2KLUhH9dXsENrb7NxpJdw%2FReEoRB72RX%2FyDUZplisTDuh22gSrGLM%2BT%2BT7gYEp7mP16FUA3n5nD8TMk7IxdQhQdHB4l25TWF%2FyWGS%2Bpt%2FsZ5kIwsIGT4Y0qlI%2B1ROsFtwNW0Z%2F5VLhzWb1h%2BEM19tpbZFZkjON3I1K1KjJ39UREsKHmYgpDXGYSeQxKaOOt9l9ouDbcx6dkQz2O&X-Amz-Signature=c1859af69922f203870f36bc27ccaf56e1f3c192583f24e858c0d8f8d49cf179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
