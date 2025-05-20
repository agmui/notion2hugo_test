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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHELVEF6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpu5QTkThPPcxrSQ3XpqONZ721WDjMpopWsvWAjhg4FAiEAyM6%2Fh%2B3%2FjcyWFg9lywkUmM5eTZnb4Pw0u9%2BKHdyMVkMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzBd84cvEZmVHrodircA4dFA5QDYqgH%2B4GWgT00%2F%2FLAUm1fgDRX21mSH23rK%2BzvZLwc1tD83x3G64nQnSXN3DE8prqQY0yNdT%2B2XZaGYLBc68EbxXIEqih%2F3sHVjbL7Vk5L7o%2BwyXeqlZR9kZX4Ea%2FuH7e3rCOdaHfSR%2BDtAGd3cym353G3hSiuah1FAWNOvdaT%2FrKdvfJQjHTMCFyg2Y8MF2vrobm4tI2%2Fd%2ByHX7b8SFS5Ofut4kZBuL1lTBAxIWlY24ju6yjR%2F8EqeArpvuOBytX3hI%2Fm10xw5zgmHLJupN5%2BRB5c4RkLEXly9C%2BjlS7Ma5L0%2BfNoDxZwSJk5d6%2BqSGuA9%2FHNGWM78m4aOboHTdmwOHVXSD%2BAYfH5ayjS72bBjidatHGogCGzt5VHXtXj8DdVbqD9NnK2%2BtaiL9P%2BFYtP%2F7N0pjdbkfxUKueegBEhS0QY5YlsYiYQ7nCdv4BabsFNh8d9wjqwyy%2F4RipVi6XekMIu%2Fozt3GFDeLtt950qIBS0g2zX3Xsa65Ze2uWq9fw4b2wlurcpRtrYjFXSjuK4b24XVW5MgGpDKMAJ%2Bw8Lvt6p26KfAIX5U%2BjK%2BEGNdBHPD3NFCfSoKP3upxrKnog%2B0VEEXvRd3hEM1OMPJgJByziIjoMIG0TaMN%2Bar8EGOqUB37xNPeMVvVP6jUtv6tutcwDBzqyeCh3%2BayMHJQtV3Uq2k8YprOMEq%2BsTK51uNI6bEJyygspb%2Bz5QNY%2BtFpBNgT8vhj0k2ujygxi7lvr2G2bhKdaTFKUm0gahhqdG8UuvoaBHjWNpEFsgxrLxf%2FM2mONuYSQLvhfOSmTbHf6jj4wAb%2Fhqoqlx0H8s%2BMoEAIfCRQg1Yb843ci2ScJjqGLwyT0%2BAQI9&X-Amz-Signature=eff2c7d36b71ae3ee27fa0147fe3313566f45994eed9457d113d60086d58befa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHELVEF6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpu5QTkThPPcxrSQ3XpqONZ721WDjMpopWsvWAjhg4FAiEAyM6%2Fh%2B3%2FjcyWFg9lywkUmM5eTZnb4Pw0u9%2BKHdyMVkMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzBd84cvEZmVHrodircA4dFA5QDYqgH%2B4GWgT00%2F%2FLAUm1fgDRX21mSH23rK%2BzvZLwc1tD83x3G64nQnSXN3DE8prqQY0yNdT%2B2XZaGYLBc68EbxXIEqih%2F3sHVjbL7Vk5L7o%2BwyXeqlZR9kZX4Ea%2FuH7e3rCOdaHfSR%2BDtAGd3cym353G3hSiuah1FAWNOvdaT%2FrKdvfJQjHTMCFyg2Y8MF2vrobm4tI2%2Fd%2ByHX7b8SFS5Ofut4kZBuL1lTBAxIWlY24ju6yjR%2F8EqeArpvuOBytX3hI%2Fm10xw5zgmHLJupN5%2BRB5c4RkLEXly9C%2BjlS7Ma5L0%2BfNoDxZwSJk5d6%2BqSGuA9%2FHNGWM78m4aOboHTdmwOHVXSD%2BAYfH5ayjS72bBjidatHGogCGzt5VHXtXj8DdVbqD9NnK2%2BtaiL9P%2BFYtP%2F7N0pjdbkfxUKueegBEhS0QY5YlsYiYQ7nCdv4BabsFNh8d9wjqwyy%2F4RipVi6XekMIu%2Fozt3GFDeLtt950qIBS0g2zX3Xsa65Ze2uWq9fw4b2wlurcpRtrYjFXSjuK4b24XVW5MgGpDKMAJ%2Bw8Lvt6p26KfAIX5U%2BjK%2BEGNdBHPD3NFCfSoKP3upxrKnog%2B0VEEXvRd3hEM1OMPJgJByziIjoMIG0TaMN%2Bar8EGOqUB37xNPeMVvVP6jUtv6tutcwDBzqyeCh3%2BayMHJQtV3Uq2k8YprOMEq%2BsTK51uNI6bEJyygspb%2Bz5QNY%2BtFpBNgT8vhj0k2ujygxi7lvr2G2bhKdaTFKUm0gahhqdG8UuvoaBHjWNpEFsgxrLxf%2FM2mONuYSQLvhfOSmTbHf6jj4wAb%2Fhqoqlx0H8s%2BMoEAIfCRQg1Yb843ci2ScJjqGLwyT0%2BAQI9&X-Amz-Signature=ba63cb4c90600b6ed36f193778f61aa006bff15054107807c6623da34fbfdc98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHELVEF6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpu5QTkThPPcxrSQ3XpqONZ721WDjMpopWsvWAjhg4FAiEAyM6%2Fh%2B3%2FjcyWFg9lywkUmM5eTZnb4Pw0u9%2BKHdyMVkMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzBd84cvEZmVHrodircA4dFA5QDYqgH%2B4GWgT00%2F%2FLAUm1fgDRX21mSH23rK%2BzvZLwc1tD83x3G64nQnSXN3DE8prqQY0yNdT%2B2XZaGYLBc68EbxXIEqih%2F3sHVjbL7Vk5L7o%2BwyXeqlZR9kZX4Ea%2FuH7e3rCOdaHfSR%2BDtAGd3cym353G3hSiuah1FAWNOvdaT%2FrKdvfJQjHTMCFyg2Y8MF2vrobm4tI2%2Fd%2ByHX7b8SFS5Ofut4kZBuL1lTBAxIWlY24ju6yjR%2F8EqeArpvuOBytX3hI%2Fm10xw5zgmHLJupN5%2BRB5c4RkLEXly9C%2BjlS7Ma5L0%2BfNoDxZwSJk5d6%2BqSGuA9%2FHNGWM78m4aOboHTdmwOHVXSD%2BAYfH5ayjS72bBjidatHGogCGzt5VHXtXj8DdVbqD9NnK2%2BtaiL9P%2BFYtP%2F7N0pjdbkfxUKueegBEhS0QY5YlsYiYQ7nCdv4BabsFNh8d9wjqwyy%2F4RipVi6XekMIu%2Fozt3GFDeLtt950qIBS0g2zX3Xsa65Ze2uWq9fw4b2wlurcpRtrYjFXSjuK4b24XVW5MgGpDKMAJ%2Bw8Lvt6p26KfAIX5U%2BjK%2BEGNdBHPD3NFCfSoKP3upxrKnog%2B0VEEXvRd3hEM1OMPJgJByziIjoMIG0TaMN%2Bar8EGOqUB37xNPeMVvVP6jUtv6tutcwDBzqyeCh3%2BayMHJQtV3Uq2k8YprOMEq%2BsTK51uNI6bEJyygspb%2Bz5QNY%2BtFpBNgT8vhj0k2ujygxi7lvr2G2bhKdaTFKUm0gahhqdG8UuvoaBHjWNpEFsgxrLxf%2FM2mONuYSQLvhfOSmTbHf6jj4wAb%2Fhqoqlx0H8s%2BMoEAIfCRQg1Yb843ci2ScJjqGLwyT0%2BAQI9&X-Amz-Signature=2984caca18a1951f41b17e05f8a16783db4b1184e702c12f6a0f410bb2f11bed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
