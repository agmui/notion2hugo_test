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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4PBE3X%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKSHHnWK53L12cB4HxpEES8KJSXvT6ZTc5VQqewdvtTAIhAJq9UUpXQHhXQeV7lz%2BMOiJ6oR9GI9wnYutFq45Ez%2BjkKv8DCG0QABoMNjM3NDIzMTgzODA1Igyuevtf%2FsnAg3%2FXcwoq3AOhvvrdbbMKHcnAAG8aGjSfNMKhR5GpCdmMm4fozsgngjCELSxnSDR80hYENgdq9WXlfU1VzNBdvI%2Fd46VLL6vsj0Vy6yvlS0SNusaxARelZfMGuSMt2diKWUACMaTwbFqEG4BPiv1R4B7LPGl3yj9hmZaEoMnWLGqtMbltTZhY5p9FMCk6KrBWBlJUHWduM4IIxpLiz3c6PeJt%2BFm8Sl3uv9B7nbkth9GALo%2BzPMpfmRoLb9rZhRlR5MIHNqaRuOlPBEZLzJQyK%2B%2FNGpkC166EJbdEEMiZCNH%2Fc7GnC7tHYNnISYulBK1g1iX9mOdTteSXzk648EWGQIpwFCIwCfFgjhJrxagcWM1TcCdDGguBma%2Flj6leqEi8BFDSnjtorxUWd1F0Fc3BTuazu2GGqI0ncKpctyj8RgeNUpCvr0nSdTpwsQKLZN56zKbvqyFNFg2JZCLfAkfljSUOVN1wRYWwJ33NTs%2B6zG6EO6%2FydqrkwJGqqwGlRoE647Bu6AR3Z9tCpC1gndgq%2BiRNi2X2gzFfp322pb5uIgpdyrfZ7rFj07EtrzJ10Ls1BVSVBjH9oV3nz9PUs4CGiwa2EMhJhVj151s5R%2FKBVjvtHa8AsSfykWzOJqZuffbrsVy8bzDUt6XBBjqkARKzbt2a%2FbYc5iXfWGI2idC9Xg3X79ZgH0QWtoMlRJ8vY77jmmkMt2Yrk3lzVSCU%2FoM9hoJIGAAXFu5%2BbWBajAw8cJvDcA7prPOSLRfVN58xjFMHqFMB003LJUjdFAthJD%2F3xav0feH8vyvFAGACgQxqUk5rlABkd5zZWb6RhEa97%2BaB3BmvbrL%2FNEw4HSUpB0I1BAqvSpspyFRdiFISEoYN6oEm&X-Amz-Signature=b7d9e60a09d91fa67fb08be05ca32229c2a5456ac9535c9c8d3ebc5d60061bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4PBE3X%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKSHHnWK53L12cB4HxpEES8KJSXvT6ZTc5VQqewdvtTAIhAJq9UUpXQHhXQeV7lz%2BMOiJ6oR9GI9wnYutFq45Ez%2BjkKv8DCG0QABoMNjM3NDIzMTgzODA1Igyuevtf%2FsnAg3%2FXcwoq3AOhvvrdbbMKHcnAAG8aGjSfNMKhR5GpCdmMm4fozsgngjCELSxnSDR80hYENgdq9WXlfU1VzNBdvI%2Fd46VLL6vsj0Vy6yvlS0SNusaxARelZfMGuSMt2diKWUACMaTwbFqEG4BPiv1R4B7LPGl3yj9hmZaEoMnWLGqtMbltTZhY5p9FMCk6KrBWBlJUHWduM4IIxpLiz3c6PeJt%2BFm8Sl3uv9B7nbkth9GALo%2BzPMpfmRoLb9rZhRlR5MIHNqaRuOlPBEZLzJQyK%2B%2FNGpkC166EJbdEEMiZCNH%2Fc7GnC7tHYNnISYulBK1g1iX9mOdTteSXzk648EWGQIpwFCIwCfFgjhJrxagcWM1TcCdDGguBma%2Flj6leqEi8BFDSnjtorxUWd1F0Fc3BTuazu2GGqI0ncKpctyj8RgeNUpCvr0nSdTpwsQKLZN56zKbvqyFNFg2JZCLfAkfljSUOVN1wRYWwJ33NTs%2B6zG6EO6%2FydqrkwJGqqwGlRoE647Bu6AR3Z9tCpC1gndgq%2BiRNi2X2gzFfp322pb5uIgpdyrfZ7rFj07EtrzJ10Ls1BVSVBjH9oV3nz9PUs4CGiwa2EMhJhVj151s5R%2FKBVjvtHa8AsSfykWzOJqZuffbrsVy8bzDUt6XBBjqkARKzbt2a%2FbYc5iXfWGI2idC9Xg3X79ZgH0QWtoMlRJ8vY77jmmkMt2Yrk3lzVSCU%2FoM9hoJIGAAXFu5%2BbWBajAw8cJvDcA7prPOSLRfVN58xjFMHqFMB003LJUjdFAthJD%2F3xav0feH8vyvFAGACgQxqUk5rlABkd5zZWb6RhEa97%2BaB3BmvbrL%2FNEw4HSUpB0I1BAqvSpspyFRdiFISEoYN6oEm&X-Amz-Signature=56ed5ea53eb5df242baf465ab71a18b5b3d4a55220e60433a300a5be8d16884c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4PBE3X%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKSHHnWK53L12cB4HxpEES8KJSXvT6ZTc5VQqewdvtTAIhAJq9UUpXQHhXQeV7lz%2BMOiJ6oR9GI9wnYutFq45Ez%2BjkKv8DCG0QABoMNjM3NDIzMTgzODA1Igyuevtf%2FsnAg3%2FXcwoq3AOhvvrdbbMKHcnAAG8aGjSfNMKhR5GpCdmMm4fozsgngjCELSxnSDR80hYENgdq9WXlfU1VzNBdvI%2Fd46VLL6vsj0Vy6yvlS0SNusaxARelZfMGuSMt2diKWUACMaTwbFqEG4BPiv1R4B7LPGl3yj9hmZaEoMnWLGqtMbltTZhY5p9FMCk6KrBWBlJUHWduM4IIxpLiz3c6PeJt%2BFm8Sl3uv9B7nbkth9GALo%2BzPMpfmRoLb9rZhRlR5MIHNqaRuOlPBEZLzJQyK%2B%2FNGpkC166EJbdEEMiZCNH%2Fc7GnC7tHYNnISYulBK1g1iX9mOdTteSXzk648EWGQIpwFCIwCfFgjhJrxagcWM1TcCdDGguBma%2Flj6leqEi8BFDSnjtorxUWd1F0Fc3BTuazu2GGqI0ncKpctyj8RgeNUpCvr0nSdTpwsQKLZN56zKbvqyFNFg2JZCLfAkfljSUOVN1wRYWwJ33NTs%2B6zG6EO6%2FydqrkwJGqqwGlRoE647Bu6AR3Z9tCpC1gndgq%2BiRNi2X2gzFfp322pb5uIgpdyrfZ7rFj07EtrzJ10Ls1BVSVBjH9oV3nz9PUs4CGiwa2EMhJhVj151s5R%2FKBVjvtHa8AsSfykWzOJqZuffbrsVy8bzDUt6XBBjqkARKzbt2a%2FbYc5iXfWGI2idC9Xg3X79ZgH0QWtoMlRJ8vY77jmmkMt2Yrk3lzVSCU%2FoM9hoJIGAAXFu5%2BbWBajAw8cJvDcA7prPOSLRfVN58xjFMHqFMB003LJUjdFAthJD%2F3xav0feH8vyvFAGACgQxqUk5rlABkd5zZWb6RhEa97%2BaB3BmvbrL%2FNEw4HSUpB0I1BAqvSpspyFRdiFISEoYN6oEm&X-Amz-Signature=56fac854ea4b2851a100e3c97fece02ef92e4f363a710908a3a97b9227c568f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
