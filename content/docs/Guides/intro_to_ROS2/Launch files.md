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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQAPCLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EfZx3Kr8M9iVEFjMKi6x8QU6tjayQ%2B6IRu6uYzbVDAiBowzYQ72CIpIiJXFUFC7ciwf55vF2yrC7vLsYfAt%2B2TCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkcaGIneIFmb2b1vKtwDL3LL8HJ5S%2B7q9XnQmeT1t5Qgx3M%2FF2gn8up15KHVT2a8xbcG2xH4eFx3dlk%2BK7jOD0RXSyRomBhEiAsJc4%2F91IpSeDBM%2BCQbvAOg5BQPR9e4zK5GqBlnABFCoIhf7v7i3UPCYQhcKtxZoSqep9nQZsKX0MiR2MSkJ8QRWSaLYueIOT%2BmnOyayrTd3j%2BCLk1Fzeq2tlfEvXhS5BQ0oInUdDUTPknOWM0k%2BlLDHynmbIyRUjO8hdy9PHWLzGwTk8sfeJg%2B4hu0vPdb%2F7NODEfunZ%2BR2iSzRcQ7TA5EV6vUeNWi6uBYEw7w5cQ2PfeRVMMsjByZi5FCsV1DFQRsv6BJGHyIrjVTdcmcLRYTv0Zdg7ABJoTvdYdojYb2COYztUaGRAAdhkzfIicQzVHZTvJJrtc4vs5cOkf4ZSuszArLLojojOi%2FMF%2FgPQfvvSb8X%2Fio0AACHqqjG4B6tJ%2FQSmYN5a%2FdXQMOCqUKtPac6gSIqBaVG%2FGXlzXIjA5YXs5lJlfC6k6f1iGoc6aGacJUt7koJjJaxF8TBIUS9mpTmcKPofKxvR4lAFeKKmGRG0vgZXBBJqfm1m1ABqNvZqZQP75Sb1DcgRWgX4YSlpfSJnZ8%2FnQTb8rbND5fa%2FxeqlMwmLLhwQY6pgFaAAMWqP7fIPokwdX39mpwPja12yNXxULIP6mNMvUOIpfVhTOf071W5yn78M0Cncthe8gcnC6A5WgdrJVR8KXt6HtsUjegcR%2FaNEUpXHJQ6FAKAWRVL6z%2Bas2CQIAt6DfoZ0EqionyBmT65e8YEU6o4Xui3ZEHG9L2W9O%2FBLIxKWiM9d77arMUGRdvvbAqhYx99qo4h%2B9FXMKeUeFjmcTH8cLlfKY0&X-Amz-Signature=a7a763ebe074e166d6951c1fa9e07bc32dd34a6c0c30a23d7d743432b68e51f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQAPCLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EfZx3Kr8M9iVEFjMKi6x8QU6tjayQ%2B6IRu6uYzbVDAiBowzYQ72CIpIiJXFUFC7ciwf55vF2yrC7vLsYfAt%2B2TCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkcaGIneIFmb2b1vKtwDL3LL8HJ5S%2B7q9XnQmeT1t5Qgx3M%2FF2gn8up15KHVT2a8xbcG2xH4eFx3dlk%2BK7jOD0RXSyRomBhEiAsJc4%2F91IpSeDBM%2BCQbvAOg5BQPR9e4zK5GqBlnABFCoIhf7v7i3UPCYQhcKtxZoSqep9nQZsKX0MiR2MSkJ8QRWSaLYueIOT%2BmnOyayrTd3j%2BCLk1Fzeq2tlfEvXhS5BQ0oInUdDUTPknOWM0k%2BlLDHynmbIyRUjO8hdy9PHWLzGwTk8sfeJg%2B4hu0vPdb%2F7NODEfunZ%2BR2iSzRcQ7TA5EV6vUeNWi6uBYEw7w5cQ2PfeRVMMsjByZi5FCsV1DFQRsv6BJGHyIrjVTdcmcLRYTv0Zdg7ABJoTvdYdojYb2COYztUaGRAAdhkzfIicQzVHZTvJJrtc4vs5cOkf4ZSuszArLLojojOi%2FMF%2FgPQfvvSb8X%2Fio0AACHqqjG4B6tJ%2FQSmYN5a%2FdXQMOCqUKtPac6gSIqBaVG%2FGXlzXIjA5YXs5lJlfC6k6f1iGoc6aGacJUt7koJjJaxF8TBIUS9mpTmcKPofKxvR4lAFeKKmGRG0vgZXBBJqfm1m1ABqNvZqZQP75Sb1DcgRWgX4YSlpfSJnZ8%2FnQTb8rbND5fa%2FxeqlMwmLLhwQY6pgFaAAMWqP7fIPokwdX39mpwPja12yNXxULIP6mNMvUOIpfVhTOf071W5yn78M0Cncthe8gcnC6A5WgdrJVR8KXt6HtsUjegcR%2FaNEUpXHJQ6FAKAWRVL6z%2Bas2CQIAt6DfoZ0EqionyBmT65e8YEU6o4Xui3ZEHG9L2W9O%2FBLIxKWiM9d77arMUGRdvvbAqhYx99qo4h%2B9FXMKeUeFjmcTH8cLlfKY0&X-Amz-Signature=7c73f2b6be0d2e183eca4daca745de8642bd8c68bd24a0ef63eb4e9b294c0c92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQAPCLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0EfZx3Kr8M9iVEFjMKi6x8QU6tjayQ%2B6IRu6uYzbVDAiBowzYQ72CIpIiJXFUFC7ciwf55vF2yrC7vLsYfAt%2B2TCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkcaGIneIFmb2b1vKtwDL3LL8HJ5S%2B7q9XnQmeT1t5Qgx3M%2FF2gn8up15KHVT2a8xbcG2xH4eFx3dlk%2BK7jOD0RXSyRomBhEiAsJc4%2F91IpSeDBM%2BCQbvAOg5BQPR9e4zK5GqBlnABFCoIhf7v7i3UPCYQhcKtxZoSqep9nQZsKX0MiR2MSkJ8QRWSaLYueIOT%2BmnOyayrTd3j%2BCLk1Fzeq2tlfEvXhS5BQ0oInUdDUTPknOWM0k%2BlLDHynmbIyRUjO8hdy9PHWLzGwTk8sfeJg%2B4hu0vPdb%2F7NODEfunZ%2BR2iSzRcQ7TA5EV6vUeNWi6uBYEw7w5cQ2PfeRVMMsjByZi5FCsV1DFQRsv6BJGHyIrjVTdcmcLRYTv0Zdg7ABJoTvdYdojYb2COYztUaGRAAdhkzfIicQzVHZTvJJrtc4vs5cOkf4ZSuszArLLojojOi%2FMF%2FgPQfvvSb8X%2Fio0AACHqqjG4B6tJ%2FQSmYN5a%2FdXQMOCqUKtPac6gSIqBaVG%2FGXlzXIjA5YXs5lJlfC6k6f1iGoc6aGacJUt7koJjJaxF8TBIUS9mpTmcKPofKxvR4lAFeKKmGRG0vgZXBBJqfm1m1ABqNvZqZQP75Sb1DcgRWgX4YSlpfSJnZ8%2FnQTb8rbND5fa%2FxeqlMwmLLhwQY6pgFaAAMWqP7fIPokwdX39mpwPja12yNXxULIP6mNMvUOIpfVhTOf071W5yn78M0Cncthe8gcnC6A5WgdrJVR8KXt6HtsUjegcR%2FaNEUpXHJQ6FAKAWRVL6z%2Bas2CQIAt6DfoZ0EqionyBmT65e8YEU6o4Xui3ZEHG9L2W9O%2FBLIxKWiM9d77arMUGRdvvbAqhYx99qo4h%2B9FXMKeUeFjmcTH8cLlfKY0&X-Amz-Signature=c3812012b0a9f27fa097bd1b7841e797c0a2198d6c7ed9b942e06b7eec82cfba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
