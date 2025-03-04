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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YPJCNH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGD3Yg5Xl79TXQlY0svmTv8m275sTUWqKC9rFVf6B9YdAiBe8aIBwiNAnYfrnHNguFvuTuWfaMMAyie93l8ZDzLVFCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZuusUANjTniSknqKtwDLx6fYOj7OB1gDC66C70WEyEV3ShTYnd4kJBrGVNBUyv6ygY17jTW7lfkgTM0PkByOspkrWLdCI7EXFalw30axu8eWVlJu11v14qhA5ke9EnIUwDAsCbuKa6jicCYtvjLftf3CC672BFCvWMba3SmkYg3BdSI3syTmjIbSJsOsuPPdL251KYUNtMz%2BJwfw8W7wRzbJ%2Fu5uGtPo%2FktQ13n2DbygSaI1h1oneWUZtmCU7Se%2B5%2F6EPiER1DMCnTU1%2Fr8r2DemxMI81OVcDC5H65oQ8ZFywt4mzaFV9RHtsY3hxRm49qQBpjwOCYG5mPXIYi4IbvHRVS9oGNx3pk9D6LC1If2O7e45n0TvNqErK2JEHJnuc5xS9HYDM625bID4ef11fSq8tzYY6J5WPsTZWJXXPNnbcWXIZy2Lf1pjzlfGueRgdrbCrzxLarf%2FfuhhFNeKAfaTRSj6mPPxQWwUusNkmrekqxQNdf7gRIn3Q1lkHIUfXM5Qtkl%2FOpzJZg2eBTsRjQlnhsbR4w1qgDPxXxNW4nSXxy62PAiqDZsykdyx%2B5lhhesJniKTQ0xo1bOJF%2Fu50vHBpJdeRytHAecVNeYGISOA9EwkoVomsR%2FFVOPljY%2B6cC9sVsMhYLSxhMwl%2BKavgY6pgEFQKpxa7KUlhQL0AF1HFLeOl6QSY1FOiJdanNoMGp25RhIuCNTrFfKGNsYbv1DO%2FzCM3OavIyNUXazaUg%2FFuvW8hKxcQxLspcpkJ3bRsRvwKb6OFKa0LU2cRoSaaXV7NpNH2u0z96Ri93R%2FUVBkqS0Lue9EJ6mAWg6xuCM%2BObrYomBXhISrpYx5mMYNABhqc5w2Vuf2i2uXNqd2NoScj%2BKNwiTpSQq&X-Amz-Signature=2d5c69d9943976f97be0441859197452c525f33ba2a7b5cacb3b72e39d3f82dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YPJCNH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGD3Yg5Xl79TXQlY0svmTv8m275sTUWqKC9rFVf6B9YdAiBe8aIBwiNAnYfrnHNguFvuTuWfaMMAyie93l8ZDzLVFCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZuusUANjTniSknqKtwDLx6fYOj7OB1gDC66C70WEyEV3ShTYnd4kJBrGVNBUyv6ygY17jTW7lfkgTM0PkByOspkrWLdCI7EXFalw30axu8eWVlJu11v14qhA5ke9EnIUwDAsCbuKa6jicCYtvjLftf3CC672BFCvWMba3SmkYg3BdSI3syTmjIbSJsOsuPPdL251KYUNtMz%2BJwfw8W7wRzbJ%2Fu5uGtPo%2FktQ13n2DbygSaI1h1oneWUZtmCU7Se%2B5%2F6EPiER1DMCnTU1%2Fr8r2DemxMI81OVcDC5H65oQ8ZFywt4mzaFV9RHtsY3hxRm49qQBpjwOCYG5mPXIYi4IbvHRVS9oGNx3pk9D6LC1If2O7e45n0TvNqErK2JEHJnuc5xS9HYDM625bID4ef11fSq8tzYY6J5WPsTZWJXXPNnbcWXIZy2Lf1pjzlfGueRgdrbCrzxLarf%2FfuhhFNeKAfaTRSj6mPPxQWwUusNkmrekqxQNdf7gRIn3Q1lkHIUfXM5Qtkl%2FOpzJZg2eBTsRjQlnhsbR4w1qgDPxXxNW4nSXxy62PAiqDZsykdyx%2B5lhhesJniKTQ0xo1bOJF%2Fu50vHBpJdeRytHAecVNeYGISOA9EwkoVomsR%2FFVOPljY%2B6cC9sVsMhYLSxhMwl%2BKavgY6pgEFQKpxa7KUlhQL0AF1HFLeOl6QSY1FOiJdanNoMGp25RhIuCNTrFfKGNsYbv1DO%2FzCM3OavIyNUXazaUg%2FFuvW8hKxcQxLspcpkJ3bRsRvwKb6OFKa0LU2cRoSaaXV7NpNH2u0z96Ri93R%2FUVBkqS0Lue9EJ6mAWg6xuCM%2BObrYomBXhISrpYx5mMYNABhqc5w2Vuf2i2uXNqd2NoScj%2BKNwiTpSQq&X-Amz-Signature=a0708aa1b6d42f10ad7ffcda85b194b53a7d2d3e1e3faf0422fcdb9dc2c0d564&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YPJCNH%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGD3Yg5Xl79TXQlY0svmTv8m275sTUWqKC9rFVf6B9YdAiBe8aIBwiNAnYfrnHNguFvuTuWfaMMAyie93l8ZDzLVFCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZuusUANjTniSknqKtwDLx6fYOj7OB1gDC66C70WEyEV3ShTYnd4kJBrGVNBUyv6ygY17jTW7lfkgTM0PkByOspkrWLdCI7EXFalw30axu8eWVlJu11v14qhA5ke9EnIUwDAsCbuKa6jicCYtvjLftf3CC672BFCvWMba3SmkYg3BdSI3syTmjIbSJsOsuPPdL251KYUNtMz%2BJwfw8W7wRzbJ%2Fu5uGtPo%2FktQ13n2DbygSaI1h1oneWUZtmCU7Se%2B5%2F6EPiER1DMCnTU1%2Fr8r2DemxMI81OVcDC5H65oQ8ZFywt4mzaFV9RHtsY3hxRm49qQBpjwOCYG5mPXIYi4IbvHRVS9oGNx3pk9D6LC1If2O7e45n0TvNqErK2JEHJnuc5xS9HYDM625bID4ef11fSq8tzYY6J5WPsTZWJXXPNnbcWXIZy2Lf1pjzlfGueRgdrbCrzxLarf%2FfuhhFNeKAfaTRSj6mPPxQWwUusNkmrekqxQNdf7gRIn3Q1lkHIUfXM5Qtkl%2FOpzJZg2eBTsRjQlnhsbR4w1qgDPxXxNW4nSXxy62PAiqDZsykdyx%2B5lhhesJniKTQ0xo1bOJF%2Fu50vHBpJdeRytHAecVNeYGISOA9EwkoVomsR%2FFVOPljY%2B6cC9sVsMhYLSxhMwl%2BKavgY6pgEFQKpxa7KUlhQL0AF1HFLeOl6QSY1FOiJdanNoMGp25RhIuCNTrFfKGNsYbv1DO%2FzCM3OavIyNUXazaUg%2FFuvW8hKxcQxLspcpkJ3bRsRvwKb6OFKa0LU2cRoSaaXV7NpNH2u0z96Ri93R%2FUVBkqS0Lue9EJ6mAWg6xuCM%2BObrYomBXhISrpYx5mMYNABhqc5w2Vuf2i2uXNqd2NoScj%2BKNwiTpSQq&X-Amz-Signature=aeeb00737a1c5d337f36d2070ded6e9297051973ea6ef1c993dabb1dd2ee5ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
