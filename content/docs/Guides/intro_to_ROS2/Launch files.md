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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQCNM5D%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvLzqOPNTgNv0V%2Bkbyy4rLQsMFGBq4ciu1exnfvr07zAiBHxpzQnAEWvDl5uEMJVxLHdaRt7v0xifmc7WTrBF5V6yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQb3xRzX4H7DaFgEqKtwDFkLTJ%2FmYXXIMuI3mi8X4k%2F4h4NtUs%2BBIUnaPiOk6LmKXsOOM0eQxcF8OxUFVGNXX38NJ3ARoxilIsY6i1P%2BCAZwua8TyIdbxym7WjCcH%2FDFttdIL5WnTuem6ySvTIrrMUuxK947C9V6GakpMkja9%2Bdd1y7gywpqi3%2Bo%2FxyYhRqbwOnxCKD2JdS7QASWkZqB%2Buh7nC1OMHAIB8dBK1aTAbamCVQ2E8MDGkUAd1b2G9tk%2BwAS0A%2FzcjbIVFrVlKPtvoimtMCukQkFAjIB3rlfHMWChW1g9hAuPldolL7kJcH1cFWgsMzp%2BdKUH5c6fnJZ2hOhJe%2F%2Be77NyltOoWklVdkQ20BL3gNtcmxh1OFIO5VsqbSxwsVD3yuly9NS5fYSjZ5NDfkOCXmeh5qvvnIU2F3tQejZ4TnIe%2FHPrHjzZjFMRfjkO9MWNSW5FyqoFxXk9wSjuXHWEVmHofbLfcUIzGvUCTmu9ute%2BvEcf6A8tPZyHz0rzZ7vxyTAPVKSaffxymgp%2FUwlE9Jk4AebVCac4y5FrWEAIYysGA32DbuUMoQo7itzdjZTKG2lH0GitryJmi%2FaGHHZnZbueiJm7VTc%2FFqD6wIOm6vIoiX2ym6cJOFnrgvTGKM5tC9hsl6Mw%2BrvJvgY6pgEmJ1objgRvcdZJ%2FEVcTQa3jecXwqJ3bFEY03aZ26ypqjv2OvxepJACCV51hbIkoADwej27Ko%2BFfJnXoRVeN%2BN0TKzc5BocQ4WLG8wPyd%2BN9ky89L25G8PcHJOd3pwfsQ2GJhK0aXsl%2BgTpmAJt3eEgcgtIp4p422PygQzvgE1Md4U43v6FKONYxF6cmtW2GEkMWruNEXS0RRf39Z%2BV7YRDJD1lTZd8&X-Amz-Signature=d4beea7d938cb897ae5be250fce1c2edebd7d2f01049926b641032d7907a1dea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQCNM5D%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvLzqOPNTgNv0V%2Bkbyy4rLQsMFGBq4ciu1exnfvr07zAiBHxpzQnAEWvDl5uEMJVxLHdaRt7v0xifmc7WTrBF5V6yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQb3xRzX4H7DaFgEqKtwDFkLTJ%2FmYXXIMuI3mi8X4k%2F4h4NtUs%2BBIUnaPiOk6LmKXsOOM0eQxcF8OxUFVGNXX38NJ3ARoxilIsY6i1P%2BCAZwua8TyIdbxym7WjCcH%2FDFttdIL5WnTuem6ySvTIrrMUuxK947C9V6GakpMkja9%2Bdd1y7gywpqi3%2Bo%2FxyYhRqbwOnxCKD2JdS7QASWkZqB%2Buh7nC1OMHAIB8dBK1aTAbamCVQ2E8MDGkUAd1b2G9tk%2BwAS0A%2FzcjbIVFrVlKPtvoimtMCukQkFAjIB3rlfHMWChW1g9hAuPldolL7kJcH1cFWgsMzp%2BdKUH5c6fnJZ2hOhJe%2F%2Be77NyltOoWklVdkQ20BL3gNtcmxh1OFIO5VsqbSxwsVD3yuly9NS5fYSjZ5NDfkOCXmeh5qvvnIU2F3tQejZ4TnIe%2FHPrHjzZjFMRfjkO9MWNSW5FyqoFxXk9wSjuXHWEVmHofbLfcUIzGvUCTmu9ute%2BvEcf6A8tPZyHz0rzZ7vxyTAPVKSaffxymgp%2FUwlE9Jk4AebVCac4y5FrWEAIYysGA32DbuUMoQo7itzdjZTKG2lH0GitryJmi%2FaGHHZnZbueiJm7VTc%2FFqD6wIOm6vIoiX2ym6cJOFnrgvTGKM5tC9hsl6Mw%2BrvJvgY6pgEmJ1objgRvcdZJ%2FEVcTQa3jecXwqJ3bFEY03aZ26ypqjv2OvxepJACCV51hbIkoADwej27Ko%2BFfJnXoRVeN%2BN0TKzc5BocQ4WLG8wPyd%2BN9ky89L25G8PcHJOd3pwfsQ2GJhK0aXsl%2BgTpmAJt3eEgcgtIp4p422PygQzvgE1Md4U43v6FKONYxF6cmtW2GEkMWruNEXS0RRf39Z%2BV7YRDJD1lTZd8&X-Amz-Signature=b2c42c9fe0106e3f3b3e258942a33da5ab3476433d7d3fc98d35fa9affd6f183&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQCNM5D%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvLzqOPNTgNv0V%2Bkbyy4rLQsMFGBq4ciu1exnfvr07zAiBHxpzQnAEWvDl5uEMJVxLHdaRt7v0xifmc7WTrBF5V6yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQb3xRzX4H7DaFgEqKtwDFkLTJ%2FmYXXIMuI3mi8X4k%2F4h4NtUs%2BBIUnaPiOk6LmKXsOOM0eQxcF8OxUFVGNXX38NJ3ARoxilIsY6i1P%2BCAZwua8TyIdbxym7WjCcH%2FDFttdIL5WnTuem6ySvTIrrMUuxK947C9V6GakpMkja9%2Bdd1y7gywpqi3%2Bo%2FxyYhRqbwOnxCKD2JdS7QASWkZqB%2Buh7nC1OMHAIB8dBK1aTAbamCVQ2E8MDGkUAd1b2G9tk%2BwAS0A%2FzcjbIVFrVlKPtvoimtMCukQkFAjIB3rlfHMWChW1g9hAuPldolL7kJcH1cFWgsMzp%2BdKUH5c6fnJZ2hOhJe%2F%2Be77NyltOoWklVdkQ20BL3gNtcmxh1OFIO5VsqbSxwsVD3yuly9NS5fYSjZ5NDfkOCXmeh5qvvnIU2F3tQejZ4TnIe%2FHPrHjzZjFMRfjkO9MWNSW5FyqoFxXk9wSjuXHWEVmHofbLfcUIzGvUCTmu9ute%2BvEcf6A8tPZyHz0rzZ7vxyTAPVKSaffxymgp%2FUwlE9Jk4AebVCac4y5FrWEAIYysGA32DbuUMoQo7itzdjZTKG2lH0GitryJmi%2FaGHHZnZbueiJm7VTc%2FFqD6wIOm6vIoiX2ym6cJOFnrgvTGKM5tC9hsl6Mw%2BrvJvgY6pgEmJ1objgRvcdZJ%2FEVcTQa3jecXwqJ3bFEY03aZ26ypqjv2OvxepJACCV51hbIkoADwej27Ko%2BFfJnXoRVeN%2BN0TKzc5BocQ4WLG8wPyd%2BN9ky89L25G8PcHJOd3pwfsQ2GJhK0aXsl%2BgTpmAJt3eEgcgtIp4p422PygQzvgE1Md4U43v6FKONYxF6cmtW2GEkMWruNEXS0RRf39Z%2BV7YRDJD1lTZd8&X-Amz-Signature=f398c269c8599b2beb849382f182864dbd57522d2daa207ee584ff37db3acee9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
