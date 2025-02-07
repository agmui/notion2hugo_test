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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LGTNOS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBDPZ8CeVkT7Gy56oDmkoqw5jm%2F7yjYTAk45YM0UuWeCAiByg%2B6SZHPZ1OL7ewsUl%2FBp2YoRLcfntkqeIbxelqnmqyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe4qKMy96PqwXXTSCKtwDlgCRWQtJDnBby97H97Lxg43i2EksvfzO%2BcDEUHuvVnI1rn%2BPuiXqHmfwFU4fTGHBOgaS4qzR8Tb36MjopbO33%2BR78D4TOLiulB0aNLDyYfCWFE7Dx9yDChX1Fq3hkkxkQD9fsnqdfYJJQzK7KX4y4Hevx%2BABJu3PHiDhTCrkWWsAofT75WTJ1fdg6%2FukyNcWi7LfZtXAcTeLQZd9s7VN7x8o%2F9YI43PMHwIYSztEloDNX%2FYAWJ30W499BY4Jdh7CJHhglEakdHmcZ9KBTw6HO%2FyM9Bz1P5HmZZBYFJo5fE5Wng%2BNFjS7YFpU1UcCNP3Gckkh3EtnPItlGmW0dg5krwqR0POi3APY5R8B8NozdWAdHODB%2BkaLZHkOtskomNZ7eetLOcp%2FFrQffZRBfHZQKXql6Del2%2FMq1mEg9YKLd7oqsu9H7PI7XgXCejeaiEo9kPIIwvFBbt7rqTqw8H2eIy2JlCGjxITQpN6pshxBFENnulsV2WpEs8DUuoIHvDKPKG6vyMPNLGewvxZxO1NfwcOxgpAY9KAI482E%2BiHSbqWm0XWCAS5DNRcoDilMG1oGOdQeEzHb72GaHp0Qr7pMCo71A%2BPIUNG%2BEExU9TwInDUMmxnweN03F8HeGywwwfuWvQY6pgEKbvFtrFilbcrb29BgXwHP7%2FGA1lVNRquhPJZB0kACRO5NP1gsYiZ8EV643hbFc%2BOOuIgd%2FghMPmWT6B2gdswUx14c4fxyCfO21Z7oXAlHdHj5v0ZIT1kszMEHWG34v%2FSiBYRLddkC8S4PLAnq3UxaaNJ8XBXoIIMyInkeE%2Fph%2FNoaHi4mWGgaIOXQO%2Bd6hiAJ2m4YfYNz%2B4g9mXi5VC6Q3zvVrnOK&X-Amz-Signature=6e166aa5b3255cba42ebfaf7611db27a50a3cdfc415198ae9f3dec0ee185b784&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LGTNOS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBDPZ8CeVkT7Gy56oDmkoqw5jm%2F7yjYTAk45YM0UuWeCAiByg%2B6SZHPZ1OL7ewsUl%2FBp2YoRLcfntkqeIbxelqnmqyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe4qKMy96PqwXXTSCKtwDlgCRWQtJDnBby97H97Lxg43i2EksvfzO%2BcDEUHuvVnI1rn%2BPuiXqHmfwFU4fTGHBOgaS4qzR8Tb36MjopbO33%2BR78D4TOLiulB0aNLDyYfCWFE7Dx9yDChX1Fq3hkkxkQD9fsnqdfYJJQzK7KX4y4Hevx%2BABJu3PHiDhTCrkWWsAofT75WTJ1fdg6%2FukyNcWi7LfZtXAcTeLQZd9s7VN7x8o%2F9YI43PMHwIYSztEloDNX%2FYAWJ30W499BY4Jdh7CJHhglEakdHmcZ9KBTw6HO%2FyM9Bz1P5HmZZBYFJo5fE5Wng%2BNFjS7YFpU1UcCNP3Gckkh3EtnPItlGmW0dg5krwqR0POi3APY5R8B8NozdWAdHODB%2BkaLZHkOtskomNZ7eetLOcp%2FFrQffZRBfHZQKXql6Del2%2FMq1mEg9YKLd7oqsu9H7PI7XgXCejeaiEo9kPIIwvFBbt7rqTqw8H2eIy2JlCGjxITQpN6pshxBFENnulsV2WpEs8DUuoIHvDKPKG6vyMPNLGewvxZxO1NfwcOxgpAY9KAI482E%2BiHSbqWm0XWCAS5DNRcoDilMG1oGOdQeEzHb72GaHp0Qr7pMCo71A%2BPIUNG%2BEExU9TwInDUMmxnweN03F8HeGywwwfuWvQY6pgEKbvFtrFilbcrb29BgXwHP7%2FGA1lVNRquhPJZB0kACRO5NP1gsYiZ8EV643hbFc%2BOOuIgd%2FghMPmWT6B2gdswUx14c4fxyCfO21Z7oXAlHdHj5v0ZIT1kszMEHWG34v%2FSiBYRLddkC8S4PLAnq3UxaaNJ8XBXoIIMyInkeE%2Fph%2FNoaHi4mWGgaIOXQO%2Bd6hiAJ2m4YfYNz%2B4g9mXi5VC6Q3zvVrnOK&X-Amz-Signature=825af54c1f05eb8cf415fbc0883487845094a5cfa81ef3fa61ec96f947866978&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LGTNOS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBDPZ8CeVkT7Gy56oDmkoqw5jm%2F7yjYTAk45YM0UuWeCAiByg%2B6SZHPZ1OL7ewsUl%2FBp2YoRLcfntkqeIbxelqnmqyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe4qKMy96PqwXXTSCKtwDlgCRWQtJDnBby97H97Lxg43i2EksvfzO%2BcDEUHuvVnI1rn%2BPuiXqHmfwFU4fTGHBOgaS4qzR8Tb36MjopbO33%2BR78D4TOLiulB0aNLDyYfCWFE7Dx9yDChX1Fq3hkkxkQD9fsnqdfYJJQzK7KX4y4Hevx%2BABJu3PHiDhTCrkWWsAofT75WTJ1fdg6%2FukyNcWi7LfZtXAcTeLQZd9s7VN7x8o%2F9YI43PMHwIYSztEloDNX%2FYAWJ30W499BY4Jdh7CJHhglEakdHmcZ9KBTw6HO%2FyM9Bz1P5HmZZBYFJo5fE5Wng%2BNFjS7YFpU1UcCNP3Gckkh3EtnPItlGmW0dg5krwqR0POi3APY5R8B8NozdWAdHODB%2BkaLZHkOtskomNZ7eetLOcp%2FFrQffZRBfHZQKXql6Del2%2FMq1mEg9YKLd7oqsu9H7PI7XgXCejeaiEo9kPIIwvFBbt7rqTqw8H2eIy2JlCGjxITQpN6pshxBFENnulsV2WpEs8DUuoIHvDKPKG6vyMPNLGewvxZxO1NfwcOxgpAY9KAI482E%2BiHSbqWm0XWCAS5DNRcoDilMG1oGOdQeEzHb72GaHp0Qr7pMCo71A%2BPIUNG%2BEExU9TwInDUMmxnweN03F8HeGywwwfuWvQY6pgEKbvFtrFilbcrb29BgXwHP7%2FGA1lVNRquhPJZB0kACRO5NP1gsYiZ8EV643hbFc%2BOOuIgd%2FghMPmWT6B2gdswUx14c4fxyCfO21Z7oXAlHdHj5v0ZIT1kszMEHWG34v%2FSiBYRLddkC8S4PLAnq3UxaaNJ8XBXoIIMyInkeE%2Fph%2FNoaHi4mWGgaIOXQO%2Bd6hiAJ2m4YfYNz%2B4g9mXi5VC6Q3zvVrnOK&X-Amz-Signature=91b9d0c9a6f0157574c71a0acdfa6d4672121c9979b40833d2ca756140bf7bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
