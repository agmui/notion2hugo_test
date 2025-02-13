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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2IMF6U%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4K5F8EROywBbt6QuhNMAHRI9QxuvvbfEupnJuuxXRQIhAIAj86n8wCxRwXiJyxFRR9CosIYayqbqe91WoW4UeClEKv8DCB8QABoMNjM3NDIzMTgzODA1IgwjmrJkvh%2FXWoRdOuoq3AOoKTJss%2FqTZhGE4ZWmqBMq%2FVsXU08fEbkbdPPcUbJNqk6fD6DKAQXTVJanM1nNjKm7VDVUfXST1QgG9dz6Fh63zMS7Co2c%2B%2FMXhK804ioBW95Jx%2FzaAu0Y2hF5bMBexpJbN6VXmes11Jad93wKcIWaB3iTp7vxVMlBVHTgS0zZAknE0o9lgDVyLlovekOLwaE%2FlkjnJFD2WUsAopmyA24p%2FCnmxAKOiGOHrCZn0j1Iexi1%2BUiJTqQYKhV7KqC1mxmkv1UGaWstdCdo8bEPH8EsZwmrs9iXgpaCK0Ly8zWyNmbd0Bb6RE49Vf8sCCmoGMvR9AQW0hdLayrR5hCDPOAvDB2CtP39mxRx36p6nXR7BEUj41hdxwB4bS8Yk2VbcNH6ZdzpdtkZMo%2B%2Bw49KGZR7PoxxiMIL%2FhjPEJskMdtYyQw858VneI3KvaXapaIB9gpxE52kL5w5DR1G%2F89xLeEmA7T4ywHeFb5r2q4YS1CcXt4qSVf9ymmgSL0bGzw0VFthfEEYy7lYQtxPar0E8NyqAuKw%2BRsgUUWFy0bN05khk1OClPa8NXNKEH%2F9AUeAvqlpwQYfbppwpAbEKaeFjgQz4HpAtdk%2B0IRImyoWE1gVcUSYmnRa3nogqY%2FE3jDq2bm9BjqkAdbNT93frFiAbml6gwVmaf2NRx9U5oWpSk2eTKMCugfEuBx5NEKzh2C2RZUFtijZfd3Kx62VIO4L2vDO5Vh4DG2T2PQiq78%2FXeJizILOqJL3MrebO9%2BZB1BRupVSXHiAHoTitQgFh51KtG2TOWmMsPplhSCC5QYQr7aqHD1euJ7e1GslR3pP5SutPTree2qoaxI3wYgl8YeYOMfnhxb39Qq4kvCP&X-Amz-Signature=82f5129e7620385c8385544e0bdab1fd7d912bc2a65e0f0e97881d266be58a35&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2IMF6U%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4K5F8EROywBbt6QuhNMAHRI9QxuvvbfEupnJuuxXRQIhAIAj86n8wCxRwXiJyxFRR9CosIYayqbqe91WoW4UeClEKv8DCB8QABoMNjM3NDIzMTgzODA1IgwjmrJkvh%2FXWoRdOuoq3AOoKTJss%2FqTZhGE4ZWmqBMq%2FVsXU08fEbkbdPPcUbJNqk6fD6DKAQXTVJanM1nNjKm7VDVUfXST1QgG9dz6Fh63zMS7Co2c%2B%2FMXhK804ioBW95Jx%2FzaAu0Y2hF5bMBexpJbN6VXmes11Jad93wKcIWaB3iTp7vxVMlBVHTgS0zZAknE0o9lgDVyLlovekOLwaE%2FlkjnJFD2WUsAopmyA24p%2FCnmxAKOiGOHrCZn0j1Iexi1%2BUiJTqQYKhV7KqC1mxmkv1UGaWstdCdo8bEPH8EsZwmrs9iXgpaCK0Ly8zWyNmbd0Bb6RE49Vf8sCCmoGMvR9AQW0hdLayrR5hCDPOAvDB2CtP39mxRx36p6nXR7BEUj41hdxwB4bS8Yk2VbcNH6ZdzpdtkZMo%2B%2Bw49KGZR7PoxxiMIL%2FhjPEJskMdtYyQw858VneI3KvaXapaIB9gpxE52kL5w5DR1G%2F89xLeEmA7T4ywHeFb5r2q4YS1CcXt4qSVf9ymmgSL0bGzw0VFthfEEYy7lYQtxPar0E8NyqAuKw%2BRsgUUWFy0bN05khk1OClPa8NXNKEH%2F9AUeAvqlpwQYfbppwpAbEKaeFjgQz4HpAtdk%2B0IRImyoWE1gVcUSYmnRa3nogqY%2FE3jDq2bm9BjqkAdbNT93frFiAbml6gwVmaf2NRx9U5oWpSk2eTKMCugfEuBx5NEKzh2C2RZUFtijZfd3Kx62VIO4L2vDO5Vh4DG2T2PQiq78%2FXeJizILOqJL3MrebO9%2BZB1BRupVSXHiAHoTitQgFh51KtG2TOWmMsPplhSCC5QYQr7aqHD1euJ7e1GslR3pP5SutPTree2qoaxI3wYgl8YeYOMfnhxb39Qq4kvCP&X-Amz-Signature=6185733525e0783c53dbc9c8fb60b9b884769d7608302f3449dc009182649e16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2IMF6U%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4K5F8EROywBbt6QuhNMAHRI9QxuvvbfEupnJuuxXRQIhAIAj86n8wCxRwXiJyxFRR9CosIYayqbqe91WoW4UeClEKv8DCB8QABoMNjM3NDIzMTgzODA1IgwjmrJkvh%2FXWoRdOuoq3AOoKTJss%2FqTZhGE4ZWmqBMq%2FVsXU08fEbkbdPPcUbJNqk6fD6DKAQXTVJanM1nNjKm7VDVUfXST1QgG9dz6Fh63zMS7Co2c%2B%2FMXhK804ioBW95Jx%2FzaAu0Y2hF5bMBexpJbN6VXmes11Jad93wKcIWaB3iTp7vxVMlBVHTgS0zZAknE0o9lgDVyLlovekOLwaE%2FlkjnJFD2WUsAopmyA24p%2FCnmxAKOiGOHrCZn0j1Iexi1%2BUiJTqQYKhV7KqC1mxmkv1UGaWstdCdo8bEPH8EsZwmrs9iXgpaCK0Ly8zWyNmbd0Bb6RE49Vf8sCCmoGMvR9AQW0hdLayrR5hCDPOAvDB2CtP39mxRx36p6nXR7BEUj41hdxwB4bS8Yk2VbcNH6ZdzpdtkZMo%2B%2Bw49KGZR7PoxxiMIL%2FhjPEJskMdtYyQw858VneI3KvaXapaIB9gpxE52kL5w5DR1G%2F89xLeEmA7T4ywHeFb5r2q4YS1CcXt4qSVf9ymmgSL0bGzw0VFthfEEYy7lYQtxPar0E8NyqAuKw%2BRsgUUWFy0bN05khk1OClPa8NXNKEH%2F9AUeAvqlpwQYfbppwpAbEKaeFjgQz4HpAtdk%2B0IRImyoWE1gVcUSYmnRa3nogqY%2FE3jDq2bm9BjqkAdbNT93frFiAbml6gwVmaf2NRx9U5oWpSk2eTKMCugfEuBx5NEKzh2C2RZUFtijZfd3Kx62VIO4L2vDO5Vh4DG2T2PQiq78%2FXeJizILOqJL3MrebO9%2BZB1BRupVSXHiAHoTitQgFh51KtG2TOWmMsPplhSCC5QYQr7aqHD1euJ7e1GslR3pP5SutPTree2qoaxI3wYgl8YeYOMfnhxb39Qq4kvCP&X-Amz-Signature=7dedfb0ae45fea03ea186d891a6a60f618da4cc4bcf9fb0b9e031f171aa112f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
