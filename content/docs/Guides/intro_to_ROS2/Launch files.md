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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEM46MJI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDPQuEebb6V03mOMSxPtv2lQKgzSas%2FOcllBl5Ojp6E9gIgZogVaotgK7REYx4%2Fvc0lDo6PbGaOnIbaiJtasax1WzQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPYuw%2FJHHu8stSJsSircA6trdO%2FI9Y%2FQg%2FeNGAwcjx5LoaIgc78Zb9S8TWBtQwkaTxGYXBYMR7%2FeR3%2Fw0fToIDBYYZ4QaKqosxcbPRGPIGl62mVabgZGzBJ3GlGIYG5bmaozJScF83StM4yuvXae9dwdtJt0GK1BJ7gbsh2bLR87vJ%2FPFn4LQAUdx4j%2F5JuyEgk3%2BxHjZsPorvrOxR4hp2PHq2lt%2B%2BIcPho0HnBqt8uDyHzsOnzi2B6NHxlfVafbHTWB3a%2FS2GM0JhKaOqUxj7aTeekvcSg%2BsDNHa4ReVrB5IrldNbDbg4AmIIxd7b6HpJkxPR3l5N%2FkKP2tmnIp6qUl7jVmB6O4PQiSOJtimWgBst4w%2BSeacpROMAEAjsa45TFsUKfdu5fhY5DFHHZMWprLoZMBvogbQECmzAHcxCjuMZQbxCpeaPz06J1PboD8J7MjhBeKn3VpHZcYWN%2FuqNALQXmlt6ddNTwvi5mddlaDMHOnseydnMtrXxkwBLb7GlCaWSKH4V6tLHwadibiVSCLBg2SSvl0pspLEMIDOezcIVXpsZGfAWi3VcL9O%2F%2Fpn7KuzgmweVmzJz0kpde7EMnjeYjjhBq97LtOH5caA29LmGLECflXT5Ndit7hKCJmyfh3KnAvAzsHxuA0MOPog70GOqUByDLHwPFREtxoqw1QWNwoGlfGKyLZE3Nv52EnM7IP5W8b%2FbZpBDvLOXuN77Q93ujQzUlA2NGtPYafd2ezafZZHkCq8kPdGoWaRZalz5URHgdmGveJzm261ax68F1lV3HGATsgDJDNTdPMLIpnlU2FRUoWjcKlgZzQYYcdRe2J0dgfGp0yPuTbRXCGwoUdBVykZkJ9FflWpfX22LSLEkE6bWHzX4Ax&X-Amz-Signature=ec201633298581a3b4df763522d16b6ab7e11e6196ad4293c8051ddc914ee04b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEM46MJI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDPQuEebb6V03mOMSxPtv2lQKgzSas%2FOcllBl5Ojp6E9gIgZogVaotgK7REYx4%2Fvc0lDo6PbGaOnIbaiJtasax1WzQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPYuw%2FJHHu8stSJsSircA6trdO%2FI9Y%2FQg%2FeNGAwcjx5LoaIgc78Zb9S8TWBtQwkaTxGYXBYMR7%2FeR3%2Fw0fToIDBYYZ4QaKqosxcbPRGPIGl62mVabgZGzBJ3GlGIYG5bmaozJScF83StM4yuvXae9dwdtJt0GK1BJ7gbsh2bLR87vJ%2FPFn4LQAUdx4j%2F5JuyEgk3%2BxHjZsPorvrOxR4hp2PHq2lt%2B%2BIcPho0HnBqt8uDyHzsOnzi2B6NHxlfVafbHTWB3a%2FS2GM0JhKaOqUxj7aTeekvcSg%2BsDNHa4ReVrB5IrldNbDbg4AmIIxd7b6HpJkxPR3l5N%2FkKP2tmnIp6qUl7jVmB6O4PQiSOJtimWgBst4w%2BSeacpROMAEAjsa45TFsUKfdu5fhY5DFHHZMWprLoZMBvogbQECmzAHcxCjuMZQbxCpeaPz06J1PboD8J7MjhBeKn3VpHZcYWN%2FuqNALQXmlt6ddNTwvi5mddlaDMHOnseydnMtrXxkwBLb7GlCaWSKH4V6tLHwadibiVSCLBg2SSvl0pspLEMIDOezcIVXpsZGfAWi3VcL9O%2F%2Fpn7KuzgmweVmzJz0kpde7EMnjeYjjhBq97LtOH5caA29LmGLECflXT5Ndit7hKCJmyfh3KnAvAzsHxuA0MOPog70GOqUByDLHwPFREtxoqw1QWNwoGlfGKyLZE3Nv52EnM7IP5W8b%2FbZpBDvLOXuN77Q93ujQzUlA2NGtPYafd2ezafZZHkCq8kPdGoWaRZalz5URHgdmGveJzm261ax68F1lV3HGATsgDJDNTdPMLIpnlU2FRUoWjcKlgZzQYYcdRe2J0dgfGp0yPuTbRXCGwoUdBVykZkJ9FflWpfX22LSLEkE6bWHzX4Ax&X-Amz-Signature=617c661e6e9b1b38dae7273f1ae94a2b494a37114a6119f182795b71167ba39d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEM46MJI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDPQuEebb6V03mOMSxPtv2lQKgzSas%2FOcllBl5Ojp6E9gIgZogVaotgK7REYx4%2Fvc0lDo6PbGaOnIbaiJtasax1WzQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPYuw%2FJHHu8stSJsSircA6trdO%2FI9Y%2FQg%2FeNGAwcjx5LoaIgc78Zb9S8TWBtQwkaTxGYXBYMR7%2FeR3%2Fw0fToIDBYYZ4QaKqosxcbPRGPIGl62mVabgZGzBJ3GlGIYG5bmaozJScF83StM4yuvXae9dwdtJt0GK1BJ7gbsh2bLR87vJ%2FPFn4LQAUdx4j%2F5JuyEgk3%2BxHjZsPorvrOxR4hp2PHq2lt%2B%2BIcPho0HnBqt8uDyHzsOnzi2B6NHxlfVafbHTWB3a%2FS2GM0JhKaOqUxj7aTeekvcSg%2BsDNHa4ReVrB5IrldNbDbg4AmIIxd7b6HpJkxPR3l5N%2FkKP2tmnIp6qUl7jVmB6O4PQiSOJtimWgBst4w%2BSeacpROMAEAjsa45TFsUKfdu5fhY5DFHHZMWprLoZMBvogbQECmzAHcxCjuMZQbxCpeaPz06J1PboD8J7MjhBeKn3VpHZcYWN%2FuqNALQXmlt6ddNTwvi5mddlaDMHOnseydnMtrXxkwBLb7GlCaWSKH4V6tLHwadibiVSCLBg2SSvl0pspLEMIDOezcIVXpsZGfAWi3VcL9O%2F%2Fpn7KuzgmweVmzJz0kpde7EMnjeYjjhBq97LtOH5caA29LmGLECflXT5Ndit7hKCJmyfh3KnAvAzsHxuA0MOPog70GOqUByDLHwPFREtxoqw1QWNwoGlfGKyLZE3Nv52EnM7IP5W8b%2FbZpBDvLOXuN77Q93ujQzUlA2NGtPYafd2ezafZZHkCq8kPdGoWaRZalz5URHgdmGveJzm261ax68F1lV3HGATsgDJDNTdPMLIpnlU2FRUoWjcKlgZzQYYcdRe2J0dgfGp0yPuTbRXCGwoUdBVykZkJ9FflWpfX22LSLEkE6bWHzX4Ax&X-Amz-Signature=e19cce1857f4fbcc4e636eb3db4b00e38a2885f4e77bb7c5976d385f822d09f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
