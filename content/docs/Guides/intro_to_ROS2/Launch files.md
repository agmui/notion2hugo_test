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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTGKLQD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOMTIWgg9zEM70NAgnxGrqaHdd09eShkOOQjNEP2VorAiAqiKyBJHOVSeGshEqFdmoxmj2WXFOly7BE01fpE9msLSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QqJpE0Q6vQ6gwarKtwD1ruBiaTdsanyghVKrcT7JTxjxWZUlD31qrH5GByr0YB1st%2FMd827vi02PTXpsSezuvwg%2BEguYtTUA%2FZHyT03sBRE6bnI%2FHExZJ3Owh%2BniAh7Ftkabp4CETJhhx36pJDdmGSB7QgkTJnI%2FhFJhu3%2BI%2BudP1GPV0oz99N6p7xjuY38VdP4Iu4%2FFnmVSZZRlHD62FT%2FHTQKjWYpejuUWku34GbzV0c0SDErllDa%2FZMHbje7Sx2YvHB7Jp%2FQgrnnAlTIjnDhA6YNqK9J98no5Z1NULCOc6a8xV66c8yonhnLADDSYHuW8CgYR%2FvTxpBlAQb2b0qvn9oe58EYul9uJTGxlEDgT3dPmTE%2FOiChBzkZV59z5N7T%2B44kaWPQoOe%2FfNnz%2F8LcR8Buu648sl1M%2BQbep6xVhV8kPl%2FXpHJALmxuBFcAVQBVm4f83ike%2BMIPN%2FPL%2Fomz5J4XGYcHikt1DOWnfVuQRx99%2F%2BZRT9X14R37R16xLOkHGyrJ9Hi0V47TU9rCqRSQE%2FtwQaH5TV0DhInO7Hl2Iov5%2BIlUDkF%2Bbp99ix1KC3ADsifOXkNHmZTlaC1cdxWPmVKxw7W5w4vI33BJV%2F0zVDOikF365TAjDxKd1ZTP5jUDU1YNH%2FOoYMswh%2FarxAY6pgFzPEf7vhRHNAuOJ%2FKZmaHDnGqmZIY7rQKZ%2B6d4iZ0TCxsRb41VpWNxu5miXzRirmsj%2B9XS9JYxI308VJI2WeZah9fTEokJPbI6r69IzPHXfFaVlJpodawwCDWVJ0A6jt2%2BFE5RhmoxMBFeGUm%2Fq6NsFX6l5wHQawvlNUFQhkkMAodwHDpoHBaPMfDg0OsN6fbgXU50cjy0F%2Fupxas33D8l90qnxrji&X-Amz-Signature=361cca3c02f2ffc30872355b3cdce61ccb957ebbe1a618ce82ea20eb98bc14dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTGKLQD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOMTIWgg9zEM70NAgnxGrqaHdd09eShkOOQjNEP2VorAiAqiKyBJHOVSeGshEqFdmoxmj2WXFOly7BE01fpE9msLSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QqJpE0Q6vQ6gwarKtwD1ruBiaTdsanyghVKrcT7JTxjxWZUlD31qrH5GByr0YB1st%2FMd827vi02PTXpsSezuvwg%2BEguYtTUA%2FZHyT03sBRE6bnI%2FHExZJ3Owh%2BniAh7Ftkabp4CETJhhx36pJDdmGSB7QgkTJnI%2FhFJhu3%2BI%2BudP1GPV0oz99N6p7xjuY38VdP4Iu4%2FFnmVSZZRlHD62FT%2FHTQKjWYpejuUWku34GbzV0c0SDErllDa%2FZMHbje7Sx2YvHB7Jp%2FQgrnnAlTIjnDhA6YNqK9J98no5Z1NULCOc6a8xV66c8yonhnLADDSYHuW8CgYR%2FvTxpBlAQb2b0qvn9oe58EYul9uJTGxlEDgT3dPmTE%2FOiChBzkZV59z5N7T%2B44kaWPQoOe%2FfNnz%2F8LcR8Buu648sl1M%2BQbep6xVhV8kPl%2FXpHJALmxuBFcAVQBVm4f83ike%2BMIPN%2FPL%2Fomz5J4XGYcHikt1DOWnfVuQRx99%2F%2BZRT9X14R37R16xLOkHGyrJ9Hi0V47TU9rCqRSQE%2FtwQaH5TV0DhInO7Hl2Iov5%2BIlUDkF%2Bbp99ix1KC3ADsifOXkNHmZTlaC1cdxWPmVKxw7W5w4vI33BJV%2F0zVDOikF365TAjDxKd1ZTP5jUDU1YNH%2FOoYMswh%2FarxAY6pgFzPEf7vhRHNAuOJ%2FKZmaHDnGqmZIY7rQKZ%2B6d4iZ0TCxsRb41VpWNxu5miXzRirmsj%2B9XS9JYxI308VJI2WeZah9fTEokJPbI6r69IzPHXfFaVlJpodawwCDWVJ0A6jt2%2BFE5RhmoxMBFeGUm%2Fq6NsFX6l5wHQawvlNUFQhkkMAodwHDpoHBaPMfDg0OsN6fbgXU50cjy0F%2Fupxas33D8l90qnxrji&X-Amz-Signature=e010810cfe94f18d31b3913b84fdf88474f3086adfee304fc73dfadc86fe5ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTTGKLQD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOMTIWgg9zEM70NAgnxGrqaHdd09eShkOOQjNEP2VorAiAqiKyBJHOVSeGshEqFdmoxmj2WXFOly7BE01fpE9msLSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5QqJpE0Q6vQ6gwarKtwD1ruBiaTdsanyghVKrcT7JTxjxWZUlD31qrH5GByr0YB1st%2FMd827vi02PTXpsSezuvwg%2BEguYtTUA%2FZHyT03sBRE6bnI%2FHExZJ3Owh%2BniAh7Ftkabp4CETJhhx36pJDdmGSB7QgkTJnI%2FhFJhu3%2BI%2BudP1GPV0oz99N6p7xjuY38VdP4Iu4%2FFnmVSZZRlHD62FT%2FHTQKjWYpejuUWku34GbzV0c0SDErllDa%2FZMHbje7Sx2YvHB7Jp%2FQgrnnAlTIjnDhA6YNqK9J98no5Z1NULCOc6a8xV66c8yonhnLADDSYHuW8CgYR%2FvTxpBlAQb2b0qvn9oe58EYul9uJTGxlEDgT3dPmTE%2FOiChBzkZV59z5N7T%2B44kaWPQoOe%2FfNnz%2F8LcR8Buu648sl1M%2BQbep6xVhV8kPl%2FXpHJALmxuBFcAVQBVm4f83ike%2BMIPN%2FPL%2Fomz5J4XGYcHikt1DOWnfVuQRx99%2F%2BZRT9X14R37R16xLOkHGyrJ9Hi0V47TU9rCqRSQE%2FtwQaH5TV0DhInO7Hl2Iov5%2BIlUDkF%2Bbp99ix1KC3ADsifOXkNHmZTlaC1cdxWPmVKxw7W5w4vI33BJV%2F0zVDOikF365TAjDxKd1ZTP5jUDU1YNH%2FOoYMswh%2FarxAY6pgFzPEf7vhRHNAuOJ%2FKZmaHDnGqmZIY7rQKZ%2B6d4iZ0TCxsRb41VpWNxu5miXzRirmsj%2B9XS9JYxI308VJI2WeZah9fTEokJPbI6r69IzPHXfFaVlJpodawwCDWVJ0A6jt2%2BFE5RhmoxMBFeGUm%2Fq6NsFX6l5wHQawvlNUFQhkkMAodwHDpoHBaPMfDg0OsN6fbgXU50cjy0F%2Fupxas33D8l90qnxrji&X-Amz-Signature=914ffa1b4ab6ede13bebe020509e8605c7536fed784b16da73f5b02e6f28fe93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
