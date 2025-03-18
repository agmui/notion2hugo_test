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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5RXDRO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQnDfpmOCYaRS9m4Hg05%2Bl3cxjQH8SA3Vqcy2IAbmoUAiBdU8YsZQIYCHp7J8d6CbR3hjF9ZOgBXVvBP2NMwE177yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaJH1sZJAjb1hlzxdKtwDLWT7hJT7yI8y%2ByDzcyywH4w8OkX4n42bPvRilfooLqHboEpCfDv2xvdh1f9c%2BxFftD5WOVEJx5xoCPQ9QwqHf3HZxRUPHku98ha9MsSzWaeddnrZ82Blar%2FaQkbfBdbi38%2FAo91rg%2BaRHqn9pFLHE12jCUzoKrUdzGU5WM%2FdZcK%2F2ERFUTnYlN96kf9GDP9yjybtmMhSNZkPr47noTAVTfgNePuonfApOYToZVFBomr2x9Cri9ejMIuatqRBqE%2Fi9UdB3%2FgAguhYEppedz3mQqmKEZCm9sAjUZcjYiB3Dg6T4neb1eQqYCw6lP6vrsnRHY%2BI%2F85Sn%2FKcVDdI6GhIDG5JenpiXaZdsX%2Bx%2FhFUx1ycybl8f4cb7Pn%2BHdQj1Zy8%2F61SfYaPdgejU6XY6QU%2FLa4NHXX5m3azIhYEwZDcQamOd5uaz%2FO7bK0wxqA3%2B7Ih7H%2FXXEe8Xwwja9MIfezWJT5gx1J0zOp7lDlNogTIidzo6%2F0M5B5WZN3VyznNPQijE2raoOPLuqMyfTerKqsJ8Ubeos2AlrLVlpqs3EKotNAu6WDXL4csIMoH7pxvG86FHjvyElFSptTiXYXKNuNwqJrCaRT1cSyxVpZFHrF5gIUYFV161gpSqFQrvXwwlIfkvgY6pgE7qXCIN8SSQ%2FjXqV6Q%2Bj0Nj8IjeVly2%2Fgfkii52L8a9S%2BciSKwW5gTtTsd7JzyrL0jJVonf5ya%2BUKBuuRKIkz3dXemuak9CJq0KLOfpYJ2pwSpC0NqvR6%2BMwNDxbWrCkjtBMZWo3oRqVsW18GyLec7cyOUH25noN7CLJvGjEU2hMVvyrDOQKAXMZHt1g3NiHx4RMIRIb93bIbG53t3HHoM3WYY7LFs&X-Amz-Signature=9e801d63fe6ef4b6c4b064ed32616f81fca2265d92cc45b468309e1033644993&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5RXDRO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQnDfpmOCYaRS9m4Hg05%2Bl3cxjQH8SA3Vqcy2IAbmoUAiBdU8YsZQIYCHp7J8d6CbR3hjF9ZOgBXVvBP2NMwE177yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaJH1sZJAjb1hlzxdKtwDLWT7hJT7yI8y%2ByDzcyywH4w8OkX4n42bPvRilfooLqHboEpCfDv2xvdh1f9c%2BxFftD5WOVEJx5xoCPQ9QwqHf3HZxRUPHku98ha9MsSzWaeddnrZ82Blar%2FaQkbfBdbi38%2FAo91rg%2BaRHqn9pFLHE12jCUzoKrUdzGU5WM%2FdZcK%2F2ERFUTnYlN96kf9GDP9yjybtmMhSNZkPr47noTAVTfgNePuonfApOYToZVFBomr2x9Cri9ejMIuatqRBqE%2Fi9UdB3%2FgAguhYEppedz3mQqmKEZCm9sAjUZcjYiB3Dg6T4neb1eQqYCw6lP6vrsnRHY%2BI%2F85Sn%2FKcVDdI6GhIDG5JenpiXaZdsX%2Bx%2FhFUx1ycybl8f4cb7Pn%2BHdQj1Zy8%2F61SfYaPdgejU6XY6QU%2FLa4NHXX5m3azIhYEwZDcQamOd5uaz%2FO7bK0wxqA3%2B7Ih7H%2FXXEe8Xwwja9MIfezWJT5gx1J0zOp7lDlNogTIidzo6%2F0M5B5WZN3VyznNPQijE2raoOPLuqMyfTerKqsJ8Ubeos2AlrLVlpqs3EKotNAu6WDXL4csIMoH7pxvG86FHjvyElFSptTiXYXKNuNwqJrCaRT1cSyxVpZFHrF5gIUYFV161gpSqFQrvXwwlIfkvgY6pgE7qXCIN8SSQ%2FjXqV6Q%2Bj0Nj8IjeVly2%2Fgfkii52L8a9S%2BciSKwW5gTtTsd7JzyrL0jJVonf5ya%2BUKBuuRKIkz3dXemuak9CJq0KLOfpYJ2pwSpC0NqvR6%2BMwNDxbWrCkjtBMZWo3oRqVsW18GyLec7cyOUH25noN7CLJvGjEU2hMVvyrDOQKAXMZHt1g3NiHx4RMIRIb93bIbG53t3HHoM3WYY7LFs&X-Amz-Signature=2e2ca2129347fce08980c8529ad7398006edae99eaa6ce9faea92d76cafed42c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5RXDRO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQnDfpmOCYaRS9m4Hg05%2Bl3cxjQH8SA3Vqcy2IAbmoUAiBdU8YsZQIYCHp7J8d6CbR3hjF9ZOgBXVvBP2NMwE177yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaJH1sZJAjb1hlzxdKtwDLWT7hJT7yI8y%2ByDzcyywH4w8OkX4n42bPvRilfooLqHboEpCfDv2xvdh1f9c%2BxFftD5WOVEJx5xoCPQ9QwqHf3HZxRUPHku98ha9MsSzWaeddnrZ82Blar%2FaQkbfBdbi38%2FAo91rg%2BaRHqn9pFLHE12jCUzoKrUdzGU5WM%2FdZcK%2F2ERFUTnYlN96kf9GDP9yjybtmMhSNZkPr47noTAVTfgNePuonfApOYToZVFBomr2x9Cri9ejMIuatqRBqE%2Fi9UdB3%2FgAguhYEppedz3mQqmKEZCm9sAjUZcjYiB3Dg6T4neb1eQqYCw6lP6vrsnRHY%2BI%2F85Sn%2FKcVDdI6GhIDG5JenpiXaZdsX%2Bx%2FhFUx1ycybl8f4cb7Pn%2BHdQj1Zy8%2F61SfYaPdgejU6XY6QU%2FLa4NHXX5m3azIhYEwZDcQamOd5uaz%2FO7bK0wxqA3%2B7Ih7H%2FXXEe8Xwwja9MIfezWJT5gx1J0zOp7lDlNogTIidzo6%2F0M5B5WZN3VyznNPQijE2raoOPLuqMyfTerKqsJ8Ubeos2AlrLVlpqs3EKotNAu6WDXL4csIMoH7pxvG86FHjvyElFSptTiXYXKNuNwqJrCaRT1cSyxVpZFHrF5gIUYFV161gpSqFQrvXwwlIfkvgY6pgE7qXCIN8SSQ%2FjXqV6Q%2Bj0Nj8IjeVly2%2Fgfkii52L8a9S%2BciSKwW5gTtTsd7JzyrL0jJVonf5ya%2BUKBuuRKIkz3dXemuak9CJq0KLOfpYJ2pwSpC0NqvR6%2BMwNDxbWrCkjtBMZWo3oRqVsW18GyLec7cyOUH25noN7CLJvGjEU2hMVvyrDOQKAXMZHt1g3NiHx4RMIRIb93bIbG53t3HHoM3WYY7LFs&X-Amz-Signature=ca07b06a894892270d7b126bdb1b02fdd6f21d097306b28fbfc3dba58c390ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
