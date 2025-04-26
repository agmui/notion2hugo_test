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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXJQP6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi%2BvdyEH7Y8XnkasBXM%2FPDOysw93N1jvWhMpt43TtZ%2FAiEApROwug7WXH9vY2SOe44CpZnYzZd9%2BnKo4ClFby5afMkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIALcxCcMay1xV4IbSrcAyHGsFDGHOxO5N9qbWZuMDM7IwaOHxcoLEuayp%2BDt2XipduXmnb7fmqbzcbG9%2FVrYRhKVBAjuk7MeiDmOjq%2BFfa46EkqjQQjPtmA%2B12p4TrC%2B8Xq9TWks2xIS7R4hTWBpbxNKSsGZALrRYkaeMAAZXeZnQn9VUjbaS%2BqiOWNSzJsBTDgSPTTH7IM79udLu4RwbczDv6DQp2BxqvXzCPpEu2X4eeO1baMNo2DtdUW7NQTMYz5xXzyFfObHVtAoGYUhaU9UE8EfbdmoHsoiQmYYkpEUfvtifnDsJxauT6u7k7RqtKT9zP%2FoKqVMFJNjOuzcnP6Cz1FDrlHbGw6AF5G5%2FqZPK2eBmObGeVHWfMTih9WFOquYIVEECG7LrXFFuwd1YegQsoWxhlaQ%2FIjS%2F1pMQ1st1%2FummpljEPzaxMsBrHV%2FB46ZdhFNaRtkEKnStQrSh5w7x9%2BNyHrea%2B7UDJJK0WHYyZpDF94D%2F6CgV8OyV9DcuU16pHRPktY7D0S6iN2hJ8U6DqCH6dxsvabScqSi8wN60Ep3GQR9LbigzgnbHXrjxbqeSJ0WVGYc%2BeQKWLQdq2sPzCyckTHZJFXtPegOUPBVR1vRhqJdr3f6N7yrMEznLzzFyBiqINYFStcMKOptMAGOqUBFwUFljKBxCrbrvSoWrWKHJTS7%2Bw3NoQz%2F%2FbRGIrbnu0hNd8sFnCkKX50mUe%2FPk%2B40gVPk9izfDz9nfLQd%2FCcrApj%2BDfXeHVvfk13w%2FInmbLlnsLIEyCsiEfJLCrg3AJZ%2Fla8tFkB9KDoN8IdmdTdyeJZjJ6qj3oldAgJGrVrq%2FZwEBIgo%2BuHXCBfVBTcFADpPM4O1%2BANRYGldhm%2FZXzmP9nABZvA&X-Amz-Signature=4740f8f123f0592a34ce1ac42a007524659555a2a79d0ee15b90313a63357410&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXJQP6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi%2BvdyEH7Y8XnkasBXM%2FPDOysw93N1jvWhMpt43TtZ%2FAiEApROwug7WXH9vY2SOe44CpZnYzZd9%2BnKo4ClFby5afMkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIALcxCcMay1xV4IbSrcAyHGsFDGHOxO5N9qbWZuMDM7IwaOHxcoLEuayp%2BDt2XipduXmnb7fmqbzcbG9%2FVrYRhKVBAjuk7MeiDmOjq%2BFfa46EkqjQQjPtmA%2B12p4TrC%2B8Xq9TWks2xIS7R4hTWBpbxNKSsGZALrRYkaeMAAZXeZnQn9VUjbaS%2BqiOWNSzJsBTDgSPTTH7IM79udLu4RwbczDv6DQp2BxqvXzCPpEu2X4eeO1baMNo2DtdUW7NQTMYz5xXzyFfObHVtAoGYUhaU9UE8EfbdmoHsoiQmYYkpEUfvtifnDsJxauT6u7k7RqtKT9zP%2FoKqVMFJNjOuzcnP6Cz1FDrlHbGw6AF5G5%2FqZPK2eBmObGeVHWfMTih9WFOquYIVEECG7LrXFFuwd1YegQsoWxhlaQ%2FIjS%2F1pMQ1st1%2FummpljEPzaxMsBrHV%2FB46ZdhFNaRtkEKnStQrSh5w7x9%2BNyHrea%2B7UDJJK0WHYyZpDF94D%2F6CgV8OyV9DcuU16pHRPktY7D0S6iN2hJ8U6DqCH6dxsvabScqSi8wN60Ep3GQR9LbigzgnbHXrjxbqeSJ0WVGYc%2BeQKWLQdq2sPzCyckTHZJFXtPegOUPBVR1vRhqJdr3f6N7yrMEznLzzFyBiqINYFStcMKOptMAGOqUBFwUFljKBxCrbrvSoWrWKHJTS7%2Bw3NoQz%2F%2FbRGIrbnu0hNd8sFnCkKX50mUe%2FPk%2B40gVPk9izfDz9nfLQd%2FCcrApj%2BDfXeHVvfk13w%2FInmbLlnsLIEyCsiEfJLCrg3AJZ%2Fla8tFkB9KDoN8IdmdTdyeJZjJ6qj3oldAgJGrVrq%2FZwEBIgo%2BuHXCBfVBTcFADpPM4O1%2BANRYGldhm%2FZXzmP9nABZvA&X-Amz-Signature=462053903a002c60a264efc98680cd77bbb5c9bb80ecc5bfa004f7a8e2c0e3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXJQP6S%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi%2BvdyEH7Y8XnkasBXM%2FPDOysw93N1jvWhMpt43TtZ%2FAiEApROwug7WXH9vY2SOe44CpZnYzZd9%2BnKo4ClFby5afMkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIALcxCcMay1xV4IbSrcAyHGsFDGHOxO5N9qbWZuMDM7IwaOHxcoLEuayp%2BDt2XipduXmnb7fmqbzcbG9%2FVrYRhKVBAjuk7MeiDmOjq%2BFfa46EkqjQQjPtmA%2B12p4TrC%2B8Xq9TWks2xIS7R4hTWBpbxNKSsGZALrRYkaeMAAZXeZnQn9VUjbaS%2BqiOWNSzJsBTDgSPTTH7IM79udLu4RwbczDv6DQp2BxqvXzCPpEu2X4eeO1baMNo2DtdUW7NQTMYz5xXzyFfObHVtAoGYUhaU9UE8EfbdmoHsoiQmYYkpEUfvtifnDsJxauT6u7k7RqtKT9zP%2FoKqVMFJNjOuzcnP6Cz1FDrlHbGw6AF5G5%2FqZPK2eBmObGeVHWfMTih9WFOquYIVEECG7LrXFFuwd1YegQsoWxhlaQ%2FIjS%2F1pMQ1st1%2FummpljEPzaxMsBrHV%2FB46ZdhFNaRtkEKnStQrSh5w7x9%2BNyHrea%2B7UDJJK0WHYyZpDF94D%2F6CgV8OyV9DcuU16pHRPktY7D0S6iN2hJ8U6DqCH6dxsvabScqSi8wN60Ep3GQR9LbigzgnbHXrjxbqeSJ0WVGYc%2BeQKWLQdq2sPzCyckTHZJFXtPegOUPBVR1vRhqJdr3f6N7yrMEznLzzFyBiqINYFStcMKOptMAGOqUBFwUFljKBxCrbrvSoWrWKHJTS7%2Bw3NoQz%2F%2FbRGIrbnu0hNd8sFnCkKX50mUe%2FPk%2B40gVPk9izfDz9nfLQd%2FCcrApj%2BDfXeHVvfk13w%2FInmbLlnsLIEyCsiEfJLCrg3AJZ%2Fla8tFkB9KDoN8IdmdTdyeJZjJ6qj3oldAgJGrVrq%2FZwEBIgo%2BuHXCBfVBTcFADpPM4O1%2BANRYGldhm%2FZXzmP9nABZvA&X-Amz-Signature=2ec2bc623aef3386a829d9230324013b1a9189396cd56a049a37076693652ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
