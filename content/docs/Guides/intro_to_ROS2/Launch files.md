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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IF34WCQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAU8mgzs%2BXe6QVh89euHe5Cx%2FeIewYkV3hkOrMbB5Ae0AiBAMYqCw3MrgP6jVe91xo1HGgmOGBR2oEeztecNe0zahCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7qnHipgK%2Bd%2BByAdKtwDlYfpxidjToTKl2UPseei4BAyEF0QE0iFEUJDYhorDcYFIT%2FHlT45TTqE0XOqoIHFnoiAZax8yqLZfHYQNz7Zub0EamscPCiFw8EyK1hySj6xF9vxzFfXpqi37ZSCzHGVkQZjeRSoY%2BVN8yW0NB0P%2FnvLoWImtkhAO3AQDkxaw0IJO1euxJozzMNyUrNW56bg6T6b2A2D%2FL%2Fa13P6q%2FQThyr45nh0fGNqF5z0ktEFFThfPRdiomrNGbrCbXLaUWj91NQUmOf0TOa7ib6ENaImlEGDRHNJ92vl8O5%2FXhovg03qUX8Kn%2Bwzfgx0wZXOI9O62fqaE6e2YoOfJSDX%2B2eKJZMMAnP17ozFfwTD9a0RBUSZN4RrYtG9MQeGQbLpoHMJVuxaKpEMkHHdKFMNvj1s6wZygvcIYI8%2FuLXq%2BoiLduLxqwKq%2FdROlmLFFeF7%2FFxQR9Qpr%2Bmp40FLJ17Rif2PZTENQQ6RQSJKBC6NdlzgEOD0riRsrRbdGF%2FIJ%2B5BhezaD78bIsQfHkJhzpUJpKvDiCN9Qn90p%2BSRDzpZ7y7QrKefoAxhwPfqWJfXKy9eT1G8X8vfr0Uinbvf7ONVwDYaWghbCBeGJgxG2hMCjwb1%2BAb2ya1KYLKMaKx7hz0w6KS2vwY6pgEbNlZ7lvF%2FSTjw%2FHkWWzjKGkF4jGa6CRqQ3FTUfm%2FdDKciiiKinEhqyqV2xVUyhGL5gzbrMz7%2FFm4%2FSmzGjOwCMGU%2F%2BwNegIo2jYztO%2BSg%2FA8IwRBSalnUR3GjbKx8YdM2gmgf40XvhGswLjCCOotc7q2tVyncGaNwcyd6%2ByLYqoJHWdljghwvc0sO%2F0S1Mtdqfhlm8fCpdC4LXWiO3LLP3AKyYqjL&X-Amz-Signature=94d67194aa96a3c0c4eba3340fc146bc5237af12f5cddcd6d1cc78076da5a76f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IF34WCQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAU8mgzs%2BXe6QVh89euHe5Cx%2FeIewYkV3hkOrMbB5Ae0AiBAMYqCw3MrgP6jVe91xo1HGgmOGBR2oEeztecNe0zahCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7qnHipgK%2Bd%2BByAdKtwDlYfpxidjToTKl2UPseei4BAyEF0QE0iFEUJDYhorDcYFIT%2FHlT45TTqE0XOqoIHFnoiAZax8yqLZfHYQNz7Zub0EamscPCiFw8EyK1hySj6xF9vxzFfXpqi37ZSCzHGVkQZjeRSoY%2BVN8yW0NB0P%2FnvLoWImtkhAO3AQDkxaw0IJO1euxJozzMNyUrNW56bg6T6b2A2D%2FL%2Fa13P6q%2FQThyr45nh0fGNqF5z0ktEFFThfPRdiomrNGbrCbXLaUWj91NQUmOf0TOa7ib6ENaImlEGDRHNJ92vl8O5%2FXhovg03qUX8Kn%2Bwzfgx0wZXOI9O62fqaE6e2YoOfJSDX%2B2eKJZMMAnP17ozFfwTD9a0RBUSZN4RrYtG9MQeGQbLpoHMJVuxaKpEMkHHdKFMNvj1s6wZygvcIYI8%2FuLXq%2BoiLduLxqwKq%2FdROlmLFFeF7%2FFxQR9Qpr%2Bmp40FLJ17Rif2PZTENQQ6RQSJKBC6NdlzgEOD0riRsrRbdGF%2FIJ%2B5BhezaD78bIsQfHkJhzpUJpKvDiCN9Qn90p%2BSRDzpZ7y7QrKefoAxhwPfqWJfXKy9eT1G8X8vfr0Uinbvf7ONVwDYaWghbCBeGJgxG2hMCjwb1%2BAb2ya1KYLKMaKx7hz0w6KS2vwY6pgEbNlZ7lvF%2FSTjw%2FHkWWzjKGkF4jGa6CRqQ3FTUfm%2FdDKciiiKinEhqyqV2xVUyhGL5gzbrMz7%2FFm4%2FSmzGjOwCMGU%2F%2BwNegIo2jYztO%2BSg%2FA8IwRBSalnUR3GjbKx8YdM2gmgf40XvhGswLjCCOotc7q2tVyncGaNwcyd6%2ByLYqoJHWdljghwvc0sO%2F0S1Mtdqfhlm8fCpdC4LXWiO3LLP3AKyYqjL&X-Amz-Signature=0ccdd90605b7e2ebf01c04baba1b8c57d2c2c7f1903d4c30f6edf1aef46d8b85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IF34WCQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAU8mgzs%2BXe6QVh89euHe5Cx%2FeIewYkV3hkOrMbB5Ae0AiBAMYqCw3MrgP6jVe91xo1HGgmOGBR2oEeztecNe0zahCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7qnHipgK%2Bd%2BByAdKtwDlYfpxidjToTKl2UPseei4BAyEF0QE0iFEUJDYhorDcYFIT%2FHlT45TTqE0XOqoIHFnoiAZax8yqLZfHYQNz7Zub0EamscPCiFw8EyK1hySj6xF9vxzFfXpqi37ZSCzHGVkQZjeRSoY%2BVN8yW0NB0P%2FnvLoWImtkhAO3AQDkxaw0IJO1euxJozzMNyUrNW56bg6T6b2A2D%2FL%2Fa13P6q%2FQThyr45nh0fGNqF5z0ktEFFThfPRdiomrNGbrCbXLaUWj91NQUmOf0TOa7ib6ENaImlEGDRHNJ92vl8O5%2FXhovg03qUX8Kn%2Bwzfgx0wZXOI9O62fqaE6e2YoOfJSDX%2B2eKJZMMAnP17ozFfwTD9a0RBUSZN4RrYtG9MQeGQbLpoHMJVuxaKpEMkHHdKFMNvj1s6wZygvcIYI8%2FuLXq%2BoiLduLxqwKq%2FdROlmLFFeF7%2FFxQR9Qpr%2Bmp40FLJ17Rif2PZTENQQ6RQSJKBC6NdlzgEOD0riRsrRbdGF%2FIJ%2B5BhezaD78bIsQfHkJhzpUJpKvDiCN9Qn90p%2BSRDzpZ7y7QrKefoAxhwPfqWJfXKy9eT1G8X8vfr0Uinbvf7ONVwDYaWghbCBeGJgxG2hMCjwb1%2BAb2ya1KYLKMaKx7hz0w6KS2vwY6pgEbNlZ7lvF%2FSTjw%2FHkWWzjKGkF4jGa6CRqQ3FTUfm%2FdDKciiiKinEhqyqV2xVUyhGL5gzbrMz7%2FFm4%2FSmzGjOwCMGU%2F%2BwNegIo2jYztO%2BSg%2FA8IwRBSalnUR3GjbKx8YdM2gmgf40XvhGswLjCCOotc7q2tVyncGaNwcyd6%2ByLYqoJHWdljghwvc0sO%2F0S1Mtdqfhlm8fCpdC4LXWiO3LLP3AKyYqjL&X-Amz-Signature=52879da7851b6272773fbe354904999ec85084890e7f60c48fc2032b96e93915&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
