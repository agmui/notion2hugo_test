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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJOE2ZFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBdd2EAC81wN7l3vlZ7p6%2FgXEfnC5NhNsrI%2BOpRwthMMAiAh9tYwCCOgFpCeHOXJz2Xk1XOA6qpNDV7jhluhWcHt5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVw8vqU7G4zJg8LQAKtwD%2FRXz2BQy7%2B4XricENK9CGnMJ8d504TSDK6eV2bpiCrx02z%2BXLsjLM79fQMr%2FDp1MS6LuRM0iX0GUbVGq8rYe9uc5vGRQxcTSbCMLGRLexuZZDB4LyxNw79wbqIl4ArbFnZ%2BxYmiZx1rmPKJ8YHag%2BSeksiBFdLgzPaDJlXcy%2FQmlGBKKKgsStLE4KiUfVPEAsEWlJDM%2FHa5NqHNl74sJm71jF37S2h3D3ruvHzEGn6fGSVCDty3s44%2BGqBg6w6rEXnXv%2F0scNhVq%2BHaRsu28azOXdEllZCZR2WHveYWwhwkct1F1NnEXcGfpJ0gKgWw0I%2B0z3xjVnfj6r9Dthg8H2ful%2FThJLk3uHx5IgICd5f6VSzAuP90wuFYKNF0s934xX8aGk51vLNwctFNdQwwQZMAF8aS7hNxDhvQVj7jTTojDll2kxbowxOoVG31ccLLK2A2I2sl5w0YUqvzBwp2JBm3t7tkUei8rz8%2FWi8KyPWv%2B43meG8csvAliRrrlgH81%2BcUGkXSf38%2FTlfn7NevoVdAsXOcaScnokyb42gVDHToq%2BEP7o5gnsWGHXstX2fGTwQ%2B1uEpR6CNKjq8Nl9vF%2FnFxVhNq4d7TYtJIjaTa0wPkKAXw36PdivbfDiIwr7amvwY6pgEnc5d6YuhEDpYM1HaCEYxyID%2BNNEiaCfHYg6GSd0P%2FAE7syeGNphdKpm%2FfQbt1FDX1VnBKqIsc4poYl%2B7n%2FC8R8Oxabk1T3pIwI3KD8W3Ix3oNhkpdFwXyGOecv7h9xkb97c3Wib7%2BikE1PbLMPuwDyUZHmpOLCZWyYeXRNB2PNe%2FCdJM6CthnTvPKaGN1qibEJ4rgNV7e88maIebC2GJUqrCEdsn1&X-Amz-Signature=9a95dddf895250a68f636a947f6bb545e0f01fec9f71ce439d833b13b8dbe257&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJOE2ZFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBdd2EAC81wN7l3vlZ7p6%2FgXEfnC5NhNsrI%2BOpRwthMMAiAh9tYwCCOgFpCeHOXJz2Xk1XOA6qpNDV7jhluhWcHt5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVw8vqU7G4zJg8LQAKtwD%2FRXz2BQy7%2B4XricENK9CGnMJ8d504TSDK6eV2bpiCrx02z%2BXLsjLM79fQMr%2FDp1MS6LuRM0iX0GUbVGq8rYe9uc5vGRQxcTSbCMLGRLexuZZDB4LyxNw79wbqIl4ArbFnZ%2BxYmiZx1rmPKJ8YHag%2BSeksiBFdLgzPaDJlXcy%2FQmlGBKKKgsStLE4KiUfVPEAsEWlJDM%2FHa5NqHNl74sJm71jF37S2h3D3ruvHzEGn6fGSVCDty3s44%2BGqBg6w6rEXnXv%2F0scNhVq%2BHaRsu28azOXdEllZCZR2WHveYWwhwkct1F1NnEXcGfpJ0gKgWw0I%2B0z3xjVnfj6r9Dthg8H2ful%2FThJLk3uHx5IgICd5f6VSzAuP90wuFYKNF0s934xX8aGk51vLNwctFNdQwwQZMAF8aS7hNxDhvQVj7jTTojDll2kxbowxOoVG31ccLLK2A2I2sl5w0YUqvzBwp2JBm3t7tkUei8rz8%2FWi8KyPWv%2B43meG8csvAliRrrlgH81%2BcUGkXSf38%2FTlfn7NevoVdAsXOcaScnokyb42gVDHToq%2BEP7o5gnsWGHXstX2fGTwQ%2B1uEpR6CNKjq8Nl9vF%2FnFxVhNq4d7TYtJIjaTa0wPkKAXw36PdivbfDiIwr7amvwY6pgEnc5d6YuhEDpYM1HaCEYxyID%2BNNEiaCfHYg6GSd0P%2FAE7syeGNphdKpm%2FfQbt1FDX1VnBKqIsc4poYl%2B7n%2FC8R8Oxabk1T3pIwI3KD8W3Ix3oNhkpdFwXyGOecv7h9xkb97c3Wib7%2BikE1PbLMPuwDyUZHmpOLCZWyYeXRNB2PNe%2FCdJM6CthnTvPKaGN1qibEJ4rgNV7e88maIebC2GJUqrCEdsn1&X-Amz-Signature=c564a22359ee59be2fe3cd077cc9ebf643f5204bf1a5043ce4059836a822a0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJOE2ZFA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBdd2EAC81wN7l3vlZ7p6%2FgXEfnC5NhNsrI%2BOpRwthMMAiAh9tYwCCOgFpCeHOXJz2Xk1XOA6qpNDV7jhluhWcHt5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVw8vqU7G4zJg8LQAKtwD%2FRXz2BQy7%2B4XricENK9CGnMJ8d504TSDK6eV2bpiCrx02z%2BXLsjLM79fQMr%2FDp1MS6LuRM0iX0GUbVGq8rYe9uc5vGRQxcTSbCMLGRLexuZZDB4LyxNw79wbqIl4ArbFnZ%2BxYmiZx1rmPKJ8YHag%2BSeksiBFdLgzPaDJlXcy%2FQmlGBKKKgsStLE4KiUfVPEAsEWlJDM%2FHa5NqHNl74sJm71jF37S2h3D3ruvHzEGn6fGSVCDty3s44%2BGqBg6w6rEXnXv%2F0scNhVq%2BHaRsu28azOXdEllZCZR2WHveYWwhwkct1F1NnEXcGfpJ0gKgWw0I%2B0z3xjVnfj6r9Dthg8H2ful%2FThJLk3uHx5IgICd5f6VSzAuP90wuFYKNF0s934xX8aGk51vLNwctFNdQwwQZMAF8aS7hNxDhvQVj7jTTojDll2kxbowxOoVG31ccLLK2A2I2sl5w0YUqvzBwp2JBm3t7tkUei8rz8%2FWi8KyPWv%2B43meG8csvAliRrrlgH81%2BcUGkXSf38%2FTlfn7NevoVdAsXOcaScnokyb42gVDHToq%2BEP7o5gnsWGHXstX2fGTwQ%2B1uEpR6CNKjq8Nl9vF%2FnFxVhNq4d7TYtJIjaTa0wPkKAXw36PdivbfDiIwr7amvwY6pgEnc5d6YuhEDpYM1HaCEYxyID%2BNNEiaCfHYg6GSd0P%2FAE7syeGNphdKpm%2FfQbt1FDX1VnBKqIsc4poYl%2B7n%2FC8R8Oxabk1T3pIwI3KD8W3Ix3oNhkpdFwXyGOecv7h9xkb97c3Wib7%2BikE1PbLMPuwDyUZHmpOLCZWyYeXRNB2PNe%2FCdJM6CthnTvPKaGN1qibEJ4rgNV7e88maIebC2GJUqrCEdsn1&X-Amz-Signature=edbcf94752f72d59d74a3ea627618873fa7f7ed7493e8d7349ce0f1eec1dae13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
