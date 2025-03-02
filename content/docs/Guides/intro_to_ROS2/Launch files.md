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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDS4EKGF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBaFAPMVA30cXkmCi0QrTJBJfVrm4xDDWaWE8CBKDg3dAiBI%2FCgq6DGxoxQoE%2BkqLo%2BX6GTAYP34DEaTKhKpKAs8LiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcLWaRemxZbM3%2BPeAKtwDxdeDHaP8dsfoR2bfSHZn0kdOwJoKjtcOym7vANHFYWD43cs41jCBFlyY55N44bSjr96xUNTbe3OQ03KZt53ta9y5036ECIYdNIYFVC9dL%2FvC0e1fED1Er8KJT2LPBevnb2d%2Bafo9sT7m7KPjEMZKDfz7YBtQBvPi0WURl20p49lmctFl2YdbgBdtAI2nw9etb3Goz3bbcoZNpaY6TeSIOLTDDfZ4bPLCBsliakIrYkeysFyxLLsdqawt2%2FUj1tC3aqG%2FZZ0X%2BWd2VdhZYA0npbT7M8vZ24i61mb3OW5UVx3w0SKd70poDurr68y9jPyIoNmcKw3aWwtNgi9HO%2FYeYWLkCJJa9WB4tIMv%2Fmy4pTQeJXFyZXVJExel8LoGgg4mjXQWmew9PtWFRdq8DFIeGFTX67yLL2d2RCaG6YOeIMHSh7YUyW48lLHgCeeerazUjrSy%2Bh0SV9jauWlNTVCxCf5sB9lh3MiSmz3GRfjIX0A72NMrAIXvqOYdlQLRrGovQFutH0Ic8cAkrmuwGWcok%2Fy0ffT7gqRpjy0h4OydL7xSgkqLn1L3jnSjfwi0gCSAFlftRSz891%2BMMjGkB1970jr82mLSWsIVy98SbsvcPbKrWpYQ8bWJ3kGcgMQwj9iPvgY6pgGGVv3HQGMLF4uOh3GdlcR5qfUh5e9eIMuOi67L45m%2Bt94SwyEK1LJkvOFADKXW4kRSVyrA9hd3x8N1DtDTSz9MynfkpsoCKBgSLxYMBwpsKrev0UgKRtbXRIPIDlWuDTBcT8hcSgHGvnWrn4OdgM9ApGPcwhWZM27kBXRzLiaTuvofUCXTQvrGslRfh1izNMzVYxmt2iwhA3lM2GViLeZJ9g0JlFwA&X-Amz-Signature=974d75485f27881e07e0303c82076416e2fb98908d2993b7d29337030ae8bd70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDS4EKGF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBaFAPMVA30cXkmCi0QrTJBJfVrm4xDDWaWE8CBKDg3dAiBI%2FCgq6DGxoxQoE%2BkqLo%2BX6GTAYP34DEaTKhKpKAs8LiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcLWaRemxZbM3%2BPeAKtwDxdeDHaP8dsfoR2bfSHZn0kdOwJoKjtcOym7vANHFYWD43cs41jCBFlyY55N44bSjr96xUNTbe3OQ03KZt53ta9y5036ECIYdNIYFVC9dL%2FvC0e1fED1Er8KJT2LPBevnb2d%2Bafo9sT7m7KPjEMZKDfz7YBtQBvPi0WURl20p49lmctFl2YdbgBdtAI2nw9etb3Goz3bbcoZNpaY6TeSIOLTDDfZ4bPLCBsliakIrYkeysFyxLLsdqawt2%2FUj1tC3aqG%2FZZ0X%2BWd2VdhZYA0npbT7M8vZ24i61mb3OW5UVx3w0SKd70poDurr68y9jPyIoNmcKw3aWwtNgi9HO%2FYeYWLkCJJa9WB4tIMv%2Fmy4pTQeJXFyZXVJExel8LoGgg4mjXQWmew9PtWFRdq8DFIeGFTX67yLL2d2RCaG6YOeIMHSh7YUyW48lLHgCeeerazUjrSy%2Bh0SV9jauWlNTVCxCf5sB9lh3MiSmz3GRfjIX0A72NMrAIXvqOYdlQLRrGovQFutH0Ic8cAkrmuwGWcok%2Fy0ffT7gqRpjy0h4OydL7xSgkqLn1L3jnSjfwi0gCSAFlftRSz891%2BMMjGkB1970jr82mLSWsIVy98SbsvcPbKrWpYQ8bWJ3kGcgMQwj9iPvgY6pgGGVv3HQGMLF4uOh3GdlcR5qfUh5e9eIMuOi67L45m%2Bt94SwyEK1LJkvOFADKXW4kRSVyrA9hd3x8N1DtDTSz9MynfkpsoCKBgSLxYMBwpsKrev0UgKRtbXRIPIDlWuDTBcT8hcSgHGvnWrn4OdgM9ApGPcwhWZM27kBXRzLiaTuvofUCXTQvrGslRfh1izNMzVYxmt2iwhA3lM2GViLeZJ9g0JlFwA&X-Amz-Signature=9982ad6948c70507ebc0cd8d76111e57a5d007a3e3286638d9279650e02b939b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDS4EKGF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBaFAPMVA30cXkmCi0QrTJBJfVrm4xDDWaWE8CBKDg3dAiBI%2FCgq6DGxoxQoE%2BkqLo%2BX6GTAYP34DEaTKhKpKAs8LiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcLWaRemxZbM3%2BPeAKtwDxdeDHaP8dsfoR2bfSHZn0kdOwJoKjtcOym7vANHFYWD43cs41jCBFlyY55N44bSjr96xUNTbe3OQ03KZt53ta9y5036ECIYdNIYFVC9dL%2FvC0e1fED1Er8KJT2LPBevnb2d%2Bafo9sT7m7KPjEMZKDfz7YBtQBvPi0WURl20p49lmctFl2YdbgBdtAI2nw9etb3Goz3bbcoZNpaY6TeSIOLTDDfZ4bPLCBsliakIrYkeysFyxLLsdqawt2%2FUj1tC3aqG%2FZZ0X%2BWd2VdhZYA0npbT7M8vZ24i61mb3OW5UVx3w0SKd70poDurr68y9jPyIoNmcKw3aWwtNgi9HO%2FYeYWLkCJJa9WB4tIMv%2Fmy4pTQeJXFyZXVJExel8LoGgg4mjXQWmew9PtWFRdq8DFIeGFTX67yLL2d2RCaG6YOeIMHSh7YUyW48lLHgCeeerazUjrSy%2Bh0SV9jauWlNTVCxCf5sB9lh3MiSmz3GRfjIX0A72NMrAIXvqOYdlQLRrGovQFutH0Ic8cAkrmuwGWcok%2Fy0ffT7gqRpjy0h4OydL7xSgkqLn1L3jnSjfwi0gCSAFlftRSz891%2BMMjGkB1970jr82mLSWsIVy98SbsvcPbKrWpYQ8bWJ3kGcgMQwj9iPvgY6pgGGVv3HQGMLF4uOh3GdlcR5qfUh5e9eIMuOi67L45m%2Bt94SwyEK1LJkvOFADKXW4kRSVyrA9hd3x8N1DtDTSz9MynfkpsoCKBgSLxYMBwpsKrev0UgKRtbXRIPIDlWuDTBcT8hcSgHGvnWrn4OdgM9ApGPcwhWZM27kBXRzLiaTuvofUCXTQvrGslRfh1izNMzVYxmt2iwhA3lM2GViLeZJ9g0JlFwA&X-Amz-Signature=60d142a16b511411adf0e48301c9ccd6e7ad6fc69c5bdda1d37cf40e60313fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
