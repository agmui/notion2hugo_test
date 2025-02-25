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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KG5CHLY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCbD2T9NbcTYKzRX%2B19ubH0p9iXSl%2FjBa3TCHF4WFGJPwIhANuWKkMIpyxFv5h%2F%2FjcuklXSndKakiC0Gzk7EQLBUVCkKv8DCE4QABoMNjM3NDIzMTgzODA1IgzPYla9hIk0edKUXVkq3APP82UXIqB03AM3kIUEVgu5zmH6d0HIg6lZKeuFSEsE4ow9NNOcNKiyHcjfNFowJTfjK6QDzBIfpH4DVDOf5yekZMuTKm1UJKSgA%2B17wTXnV550hmGtEIzxaUfzdEbJckvY9GjpKpUKPiRi%2BCvCWANs3mA%2BeGw5evPI36GRi%2FGwVLZF4WMi4f9y1Fg7g%2BagUs98OFjio76lP6vDjyqx7NBw1UzEmNfD3YSWPN5c39SytU6R1D%2B9eVUZCTJDl%2BN%2Ft7TMO31hH6IJsLl6l8PbtYbJdFgj0aBxx6wCsMgt4tr5TIbI1QII3W5qy0cVnPl7b0xPAjbrxTh9S95XaKaCEHCkadJYJYEgK5ToMFkHGCZW5z4R9TXojBAmdqbtb6bB7mkq8h7aUQWgu68XkXK%2F%2B081xGwXo3ocuGlOXUIg8i3KwcLKjLvdchChLWj9t14SRL2tTC0TchiaZFlHzYQ0HQuIqJ7zNsIrii8cp1omhcaS2xpBEgE4gUDahIRbW4WJ53bIurESUAcyqxTgYNdEl39%2FjkchTko5qlfAhO1%2B45mvFwX8pfHyBFN2Cfne5JE53kc%2B4SC04PcJkiGNdPqkGqDNFn8aSnTe2Jmz6WRaWeYQbucTAhLs%2FRstES9auTCR5Pi9BjqkAVKru23FXkYtBrpUtgZ5%2FwdRNDBk%2BDijQFPWmoTqE%2FeB6%2BjaKQDgU4fnvQrl31EZHsO8Z55MAv3EYMuSGEsD6I%2F%2FTA3oh8oYj%2BGIpn4WSOhGFq9ywIRVkjMMDfj9Pqxb96BRI6QKCWs6NDYD3sDHDDe%2FsjVeNIwzBIOMV%2FPtLSHqmZm3oCHkDe7Jsh0Q3zhrAjBavqKrLihLIjByormZYRcHSrnY&X-Amz-Signature=324e8b8f26c5a4295128eaf56f40ff7326d4e47b7da53812fe10d4cca3f461f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KG5CHLY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCbD2T9NbcTYKzRX%2B19ubH0p9iXSl%2FjBa3TCHF4WFGJPwIhANuWKkMIpyxFv5h%2F%2FjcuklXSndKakiC0Gzk7EQLBUVCkKv8DCE4QABoMNjM3NDIzMTgzODA1IgzPYla9hIk0edKUXVkq3APP82UXIqB03AM3kIUEVgu5zmH6d0HIg6lZKeuFSEsE4ow9NNOcNKiyHcjfNFowJTfjK6QDzBIfpH4DVDOf5yekZMuTKm1UJKSgA%2B17wTXnV550hmGtEIzxaUfzdEbJckvY9GjpKpUKPiRi%2BCvCWANs3mA%2BeGw5evPI36GRi%2FGwVLZF4WMi4f9y1Fg7g%2BagUs98OFjio76lP6vDjyqx7NBw1UzEmNfD3YSWPN5c39SytU6R1D%2B9eVUZCTJDl%2BN%2Ft7TMO31hH6IJsLl6l8PbtYbJdFgj0aBxx6wCsMgt4tr5TIbI1QII3W5qy0cVnPl7b0xPAjbrxTh9S95XaKaCEHCkadJYJYEgK5ToMFkHGCZW5z4R9TXojBAmdqbtb6bB7mkq8h7aUQWgu68XkXK%2F%2B081xGwXo3ocuGlOXUIg8i3KwcLKjLvdchChLWj9t14SRL2tTC0TchiaZFlHzYQ0HQuIqJ7zNsIrii8cp1omhcaS2xpBEgE4gUDahIRbW4WJ53bIurESUAcyqxTgYNdEl39%2FjkchTko5qlfAhO1%2B45mvFwX8pfHyBFN2Cfne5JE53kc%2B4SC04PcJkiGNdPqkGqDNFn8aSnTe2Jmz6WRaWeYQbucTAhLs%2FRstES9auTCR5Pi9BjqkAVKru23FXkYtBrpUtgZ5%2FwdRNDBk%2BDijQFPWmoTqE%2FeB6%2BjaKQDgU4fnvQrl31EZHsO8Z55MAv3EYMuSGEsD6I%2F%2FTA3oh8oYj%2BGIpn4WSOhGFq9ywIRVkjMMDfj9Pqxb96BRI6QKCWs6NDYD3sDHDDe%2FsjVeNIwzBIOMV%2FPtLSHqmZm3oCHkDe7Jsh0Q3zhrAjBavqKrLihLIjByormZYRcHSrnY&X-Amz-Signature=8acb9235bad326bccfaed64e80261953ab1d4163f1e50d2f50688a6a41c6a026&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KG5CHLY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCbD2T9NbcTYKzRX%2B19ubH0p9iXSl%2FjBa3TCHF4WFGJPwIhANuWKkMIpyxFv5h%2F%2FjcuklXSndKakiC0Gzk7EQLBUVCkKv8DCE4QABoMNjM3NDIzMTgzODA1IgzPYla9hIk0edKUXVkq3APP82UXIqB03AM3kIUEVgu5zmH6d0HIg6lZKeuFSEsE4ow9NNOcNKiyHcjfNFowJTfjK6QDzBIfpH4DVDOf5yekZMuTKm1UJKSgA%2B17wTXnV550hmGtEIzxaUfzdEbJckvY9GjpKpUKPiRi%2BCvCWANs3mA%2BeGw5evPI36GRi%2FGwVLZF4WMi4f9y1Fg7g%2BagUs98OFjio76lP6vDjyqx7NBw1UzEmNfD3YSWPN5c39SytU6R1D%2B9eVUZCTJDl%2BN%2Ft7TMO31hH6IJsLl6l8PbtYbJdFgj0aBxx6wCsMgt4tr5TIbI1QII3W5qy0cVnPl7b0xPAjbrxTh9S95XaKaCEHCkadJYJYEgK5ToMFkHGCZW5z4R9TXojBAmdqbtb6bB7mkq8h7aUQWgu68XkXK%2F%2B081xGwXo3ocuGlOXUIg8i3KwcLKjLvdchChLWj9t14SRL2tTC0TchiaZFlHzYQ0HQuIqJ7zNsIrii8cp1omhcaS2xpBEgE4gUDahIRbW4WJ53bIurESUAcyqxTgYNdEl39%2FjkchTko5qlfAhO1%2B45mvFwX8pfHyBFN2Cfne5JE53kc%2B4SC04PcJkiGNdPqkGqDNFn8aSnTe2Jmz6WRaWeYQbucTAhLs%2FRstES9auTCR5Pi9BjqkAVKru23FXkYtBrpUtgZ5%2FwdRNDBk%2BDijQFPWmoTqE%2FeB6%2BjaKQDgU4fnvQrl31EZHsO8Z55MAv3EYMuSGEsD6I%2F%2FTA3oh8oYj%2BGIpn4WSOhGFq9ywIRVkjMMDfj9Pqxb96BRI6QKCWs6NDYD3sDHDDe%2FsjVeNIwzBIOMV%2FPtLSHqmZm3oCHkDe7Jsh0Q3zhrAjBavqKrLihLIjByormZYRcHSrnY&X-Amz-Signature=efc811ae54b7a0f956c4e5af1d367a75fced104d70271ae5bc26f147c280905c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
