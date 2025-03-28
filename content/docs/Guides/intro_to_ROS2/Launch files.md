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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESJWL45%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qZ00RfLY7FAoEJVwE1HGa%2FSNG4UKLuJFCZDLetgC4AiEAykp3j%2FnlG%2BUpZ0IVnfK5sQStkDVr9trbNVDyIgMYeXwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBMkYY9dZi81EH0R2ircA0wVedz9tVBaRL2SeUimfSc7OdYJn3yoaqnH57REw2WO8Fm4MnC4wrBPr4a%2F4IqDLOH4KQY12Vz8w%2FZkMAsC0wNIy%2Be5QN7UmihO3IEPgf2%2Bs8EBAay2otD0AMObhIy9tWGXLQxRkO13t5tCZH5rNs3RutqKW0eTWBX1ZYPUY5ywJBZ06zpivAbdkB%2F1pCM6pEo2b609Gf64lInVxgFnLwfPpSVFXv2DASaGWeW2HjpfvJ49jHqIAQ852KsZAzepUei1EnTfmEPyCFTNtdfojHp1muYJV0A603O05PL%2F1yEvEHQempyi7FmZbCaYvGscCh%2BF34t9mkCvXHDKYI5O5rA4wz8tzO%2FYeFi%2BqFku%2BCMOmr3ayjYNiIUf0ShL%2FC9YTMjmLWwKrgAjsS2ntHX3gzFXzmb2I5xmGPf3vwSipH3UPVE%2FV6xjviPIixqpZIuvONhGMohp67mdfZDDacYLhQNURpwn7Cs8Z50uxDeir5KMdLJ6i3nN%2Bv20ShuA16pi3dY7wHZ081%2FhGEubJDX%2FDs%2B9Vdpazl8XkD9ujg1SZVFF3p6VKn7JaR6fkYW%2BL%2BiQ0%2BisYR2rHKV4AL899PYeVhPZ3u7Vl8WYw11LsOR8i1pmS7Cdo83kBz162hzEMMb0m78GOqUBLWi930CWO3zFdb5jSC4sDqhjobqrxmsBsXArGmOZYnNrxzaVJY8Y63sY7CqFB20TZYWMjqdhRy7m9ukoeVbOPsUGjaMCrsaBGyQXLZDIjclTnMJToIr9OxWR6F9yZeGmBq5C1od9ZTqCAscpxjWTW5O6HVAZf8%2B7OREah8bNgz1w3eWenvenXOezUibo8Fn7RXYlxuvm7ghcPrBZXy4vsQsj0kCy&X-Amz-Signature=6b66dd680b61bdd17a4e661df53f180f661a8f6ea97c39a805f2b24c18749f78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESJWL45%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qZ00RfLY7FAoEJVwE1HGa%2FSNG4UKLuJFCZDLetgC4AiEAykp3j%2FnlG%2BUpZ0IVnfK5sQStkDVr9trbNVDyIgMYeXwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBMkYY9dZi81EH0R2ircA0wVedz9tVBaRL2SeUimfSc7OdYJn3yoaqnH57REw2WO8Fm4MnC4wrBPr4a%2F4IqDLOH4KQY12Vz8w%2FZkMAsC0wNIy%2Be5QN7UmihO3IEPgf2%2Bs8EBAay2otD0AMObhIy9tWGXLQxRkO13t5tCZH5rNs3RutqKW0eTWBX1ZYPUY5ywJBZ06zpivAbdkB%2F1pCM6pEo2b609Gf64lInVxgFnLwfPpSVFXv2DASaGWeW2HjpfvJ49jHqIAQ852KsZAzepUei1EnTfmEPyCFTNtdfojHp1muYJV0A603O05PL%2F1yEvEHQempyi7FmZbCaYvGscCh%2BF34t9mkCvXHDKYI5O5rA4wz8tzO%2FYeFi%2BqFku%2BCMOmr3ayjYNiIUf0ShL%2FC9YTMjmLWwKrgAjsS2ntHX3gzFXzmb2I5xmGPf3vwSipH3UPVE%2FV6xjviPIixqpZIuvONhGMohp67mdfZDDacYLhQNURpwn7Cs8Z50uxDeir5KMdLJ6i3nN%2Bv20ShuA16pi3dY7wHZ081%2FhGEubJDX%2FDs%2B9Vdpazl8XkD9ujg1SZVFF3p6VKn7JaR6fkYW%2BL%2BiQ0%2BisYR2rHKV4AL899PYeVhPZ3u7Vl8WYw11LsOR8i1pmS7Cdo83kBz162hzEMMb0m78GOqUBLWi930CWO3zFdb5jSC4sDqhjobqrxmsBsXArGmOZYnNrxzaVJY8Y63sY7CqFB20TZYWMjqdhRy7m9ukoeVbOPsUGjaMCrsaBGyQXLZDIjclTnMJToIr9OxWR6F9yZeGmBq5C1od9ZTqCAscpxjWTW5O6HVAZf8%2B7OREah8bNgz1w3eWenvenXOezUibo8Fn7RXYlxuvm7ghcPrBZXy4vsQsj0kCy&X-Amz-Signature=fd47b53083d782461ca9f0b910ab596962f7d3bab7d93c093ad415cffebfeead&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESJWL45%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1qZ00RfLY7FAoEJVwE1HGa%2FSNG4UKLuJFCZDLetgC4AiEAykp3j%2FnlG%2BUpZ0IVnfK5sQStkDVr9trbNVDyIgMYeXwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBMkYY9dZi81EH0R2ircA0wVedz9tVBaRL2SeUimfSc7OdYJn3yoaqnH57REw2WO8Fm4MnC4wrBPr4a%2F4IqDLOH4KQY12Vz8w%2FZkMAsC0wNIy%2Be5QN7UmihO3IEPgf2%2Bs8EBAay2otD0AMObhIy9tWGXLQxRkO13t5tCZH5rNs3RutqKW0eTWBX1ZYPUY5ywJBZ06zpivAbdkB%2F1pCM6pEo2b609Gf64lInVxgFnLwfPpSVFXv2DASaGWeW2HjpfvJ49jHqIAQ852KsZAzepUei1EnTfmEPyCFTNtdfojHp1muYJV0A603O05PL%2F1yEvEHQempyi7FmZbCaYvGscCh%2BF34t9mkCvXHDKYI5O5rA4wz8tzO%2FYeFi%2BqFku%2BCMOmr3ayjYNiIUf0ShL%2FC9YTMjmLWwKrgAjsS2ntHX3gzFXzmb2I5xmGPf3vwSipH3UPVE%2FV6xjviPIixqpZIuvONhGMohp67mdfZDDacYLhQNURpwn7Cs8Z50uxDeir5KMdLJ6i3nN%2Bv20ShuA16pi3dY7wHZ081%2FhGEubJDX%2FDs%2B9Vdpazl8XkD9ujg1SZVFF3p6VKn7JaR6fkYW%2BL%2BiQ0%2BisYR2rHKV4AL899PYeVhPZ3u7Vl8WYw11LsOR8i1pmS7Cdo83kBz162hzEMMb0m78GOqUBLWi930CWO3zFdb5jSC4sDqhjobqrxmsBsXArGmOZYnNrxzaVJY8Y63sY7CqFB20TZYWMjqdhRy7m9ukoeVbOPsUGjaMCrsaBGyQXLZDIjclTnMJToIr9OxWR6F9yZeGmBq5C1od9ZTqCAscpxjWTW5O6HVAZf8%2B7OREah8bNgz1w3eWenvenXOezUibo8Fn7RXYlxuvm7ghcPrBZXy4vsQsj0kCy&X-Amz-Signature=48da2099b74accde1f599ca194e918d7c19dc5dffda6ddecaaad98461be1fd48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
