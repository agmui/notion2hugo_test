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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZF7GNT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF1au%2BxXZ%2FRXyZ4vqaAMxRovixY%2BfKRtK%2F1XZWfvuO9AiABq2yzHEGNAsAD30a1At3SHNo65tOLraI7miLyWVPqgiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjefyaQFI%2BYri8AdZKtwDALKMBbA7NS%2F01rcTFAjoI3WRlyp6J9Y70Vcld3GyUok1yToo1i9eUJDzp5fgsKcQuVI1ZXiHTMNb9q7Doyjr81tz8DqJyGV7KLkrbA7BJf6a1i5qLvD%2FvDsryGy%2BXx8Xq4Xckx0JJEYYBmlQV9SbM8fbCZ8bogxYUk4uas0rMvC0Mpq%2BFRHId0lgjns8veWU6Mhg%2F8340yroCSdCJCN4T5TG6VYXgSnnxDVeTBywKtep8WWJl5uuYykLdoLw7P7kJjIxDrHvPMPeTBQv8b%2FqzlBpMSVvmI%2B0nxK1%2FHgsqRbqJ9wgPd06%2BK6%2FWtaPOpCEyGJ4E%2F907%2Ft2URwX6M1XaldExLr6xI5zCYZBiOuWOJnliC6tsJT3saNqVEUmUnQvPWOFcWPaiO%2BRztGaF1IaVsHeIM1ufGrXnucDbIszLS1MtCiK7r7noobBRqGE%2Bgc6QOcQ3D7syCYJb9H9v%2BLgNDitfNaoZ3YXWY6BLGoSfCEmqZZtexHe0LKhLTdbjDWu%2BBPYipwNcWzF0TYO2AO1zXKi3%2BfCZZzAYTCVyVZrIXYDeJj%2BnaMgSRUGvhBDVwwxdiIuznb0aVVIWIBjF0P6VYavAbSLWwJaOQt%2FaeTkSx%2FXqM8W8wt3Ll6hBd4wsO%2FYvQY6pgGXaL886V97Y0i0OyZ2qofwtlkebX3%2F895NEtGjc%2F4p25WWjSahDGga86YQDa1y6pcKueGqa5q9Y%2FqPByMwvQNbtSZUVHFGjk5rsNKvGsFRJc9Eb2Hx4R2bJwVAOcJDBRk9v3BvxCzb6WNz5yLm3uu7KQmuFdLnKwGkExeYLM8VBAbNaOGbXpz3RQKlIXHqCaqFH7eQJVRNA3I6ZUhBAhI3it3UHT6C&X-Amz-Signature=598dffccd09437753cdbc4c0e520cd591fe5f8ad3611cb572f18c77aad11523b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZF7GNT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF1au%2BxXZ%2FRXyZ4vqaAMxRovixY%2BfKRtK%2F1XZWfvuO9AiABq2yzHEGNAsAD30a1At3SHNo65tOLraI7miLyWVPqgiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjefyaQFI%2BYri8AdZKtwDALKMBbA7NS%2F01rcTFAjoI3WRlyp6J9Y70Vcld3GyUok1yToo1i9eUJDzp5fgsKcQuVI1ZXiHTMNb9q7Doyjr81tz8DqJyGV7KLkrbA7BJf6a1i5qLvD%2FvDsryGy%2BXx8Xq4Xckx0JJEYYBmlQV9SbM8fbCZ8bogxYUk4uas0rMvC0Mpq%2BFRHId0lgjns8veWU6Mhg%2F8340yroCSdCJCN4T5TG6VYXgSnnxDVeTBywKtep8WWJl5uuYykLdoLw7P7kJjIxDrHvPMPeTBQv8b%2FqzlBpMSVvmI%2B0nxK1%2FHgsqRbqJ9wgPd06%2BK6%2FWtaPOpCEyGJ4E%2F907%2Ft2URwX6M1XaldExLr6xI5zCYZBiOuWOJnliC6tsJT3saNqVEUmUnQvPWOFcWPaiO%2BRztGaF1IaVsHeIM1ufGrXnucDbIszLS1MtCiK7r7noobBRqGE%2Bgc6QOcQ3D7syCYJb9H9v%2BLgNDitfNaoZ3YXWY6BLGoSfCEmqZZtexHe0LKhLTdbjDWu%2BBPYipwNcWzF0TYO2AO1zXKi3%2BfCZZzAYTCVyVZrIXYDeJj%2BnaMgSRUGvhBDVwwxdiIuznb0aVVIWIBjF0P6VYavAbSLWwJaOQt%2FaeTkSx%2FXqM8W8wt3Ll6hBd4wsO%2FYvQY6pgGXaL886V97Y0i0OyZ2qofwtlkebX3%2F895NEtGjc%2F4p25WWjSahDGga86YQDa1y6pcKueGqa5q9Y%2FqPByMwvQNbtSZUVHFGjk5rsNKvGsFRJc9Eb2Hx4R2bJwVAOcJDBRk9v3BvxCzb6WNz5yLm3uu7KQmuFdLnKwGkExeYLM8VBAbNaOGbXpz3RQKlIXHqCaqFH7eQJVRNA3I6ZUhBAhI3it3UHT6C&X-Amz-Signature=449cc4915bf8f3092db51c6d7ae139ea79b993ce96dac4a4d9c718bf556812d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZF7GNT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF1au%2BxXZ%2FRXyZ4vqaAMxRovixY%2BfKRtK%2F1XZWfvuO9AiABq2yzHEGNAsAD30a1At3SHNo65tOLraI7miLyWVPqgiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjefyaQFI%2BYri8AdZKtwDALKMBbA7NS%2F01rcTFAjoI3WRlyp6J9Y70Vcld3GyUok1yToo1i9eUJDzp5fgsKcQuVI1ZXiHTMNb9q7Doyjr81tz8DqJyGV7KLkrbA7BJf6a1i5qLvD%2FvDsryGy%2BXx8Xq4Xckx0JJEYYBmlQV9SbM8fbCZ8bogxYUk4uas0rMvC0Mpq%2BFRHId0lgjns8veWU6Mhg%2F8340yroCSdCJCN4T5TG6VYXgSnnxDVeTBywKtep8WWJl5uuYykLdoLw7P7kJjIxDrHvPMPeTBQv8b%2FqzlBpMSVvmI%2B0nxK1%2FHgsqRbqJ9wgPd06%2BK6%2FWtaPOpCEyGJ4E%2F907%2Ft2URwX6M1XaldExLr6xI5zCYZBiOuWOJnliC6tsJT3saNqVEUmUnQvPWOFcWPaiO%2BRztGaF1IaVsHeIM1ufGrXnucDbIszLS1MtCiK7r7noobBRqGE%2Bgc6QOcQ3D7syCYJb9H9v%2BLgNDitfNaoZ3YXWY6BLGoSfCEmqZZtexHe0LKhLTdbjDWu%2BBPYipwNcWzF0TYO2AO1zXKi3%2BfCZZzAYTCVyVZrIXYDeJj%2BnaMgSRUGvhBDVwwxdiIuznb0aVVIWIBjF0P6VYavAbSLWwJaOQt%2FaeTkSx%2FXqM8W8wt3Ll6hBd4wsO%2FYvQY6pgGXaL886V97Y0i0OyZ2qofwtlkebX3%2F895NEtGjc%2F4p25WWjSahDGga86YQDa1y6pcKueGqa5q9Y%2FqPByMwvQNbtSZUVHFGjk5rsNKvGsFRJc9Eb2Hx4R2bJwVAOcJDBRk9v3BvxCzb6WNz5yLm3uu7KQmuFdLnKwGkExeYLM8VBAbNaOGbXpz3RQKlIXHqCaqFH7eQJVRNA3I6ZUhBAhI3it3UHT6C&X-Amz-Signature=c270d7a18b17750bba0d1270462e3cfc5b7bb6bb531854daa623959c37fc54f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
