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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJQC7RR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCIccUskGjSJ96JqwBixb7ViP%2B%2FS%2FOwvSjMew2Uku%2BK9wIgMdAR7NX1GTF1VBvo9qqCxnDI6fiU3mL2nJDheceG2SoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxOZpJwlpz2wKl23SrcA7KSb37wAjgaz2C9Xi%2BCu7YFGtwPaK2nJJG%2Bdxn6vb2GjotUg4%2BaW1UMhJTLRQEZ0uN5SVpraT%2BZPc%2Fzn3RF10siqYntj7Y2Kv3KMuLhByiAoQM%2BSFzJwGdQ7SR%2FXjQizbWID%2BsSPgy77f2t7thGqU58hn9N9gBGYCuqCsLqkH%2F1RqKu4jrqmSH03iYW%2Ff5R6pwM0kqeIqYqfIfigWI1OV7NhqP47o%2BGnJw8QNti7k2c7PuaHGkYRcvFsXD3ATJwiQK1eLsqmJIhYVWB6LKIecIBnSH2Tj7ZuxLuTXoD4VkCUrynJ1bf7LlRnxPmf3QtRe3tleIL%2FpAmBlMKV9eJSgRH5bGerrAH1hl0jJfxtQTC9N6iRst1mbzBerv5CSQDKiViLeyNOt6ErNsCw6xah9xd4ezx88zldSVghN7SGYQDhUfTUfF73usffhoWN6SmoEnYXvD6R017m%2FH9JY2IupOY7d6DlvyqNtIMcHg619Jb1qKRhoIuKz%2Be%2FYNRMX4g6D6hVzHeRz%2BEj56toKlRaQI5%2FcpuCNW1q16OisKkoI61g3MSxHBtkwH1NJpoIEIz6qbHI6%2BGoq2%2BXtPeF%2BVrkSop1zf2y1r5HncjiPs%2FRvpeaMfutGutxMFg0D%2BYMPGpvsEGOqUBLVzgb1w0p553wBUoYfl8tydIpPcZx7PUV6cqoo7iMqekTyMk2oJyaMdlddwR04y8OEWwDsUQwAXH4gA03MENjNfE0eVv32rrcWaS9%2FwwQDn3BDuu9HsvycQ0UVynW5S2BHmKazEvurgjN%2FZYi2w4LyNKfho6e9IWG5Lrzxz61cnByZqlVFVl%2F%2Fe7gWlsmBjn8kNbkCreUIkGmpM%2Bi%2BmoSmpVEcMH&X-Amz-Signature=9791cebccf0fa2473a4ed0a41412fc9f3021d8ede7636d3486264f6589efec89&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJQC7RR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCIccUskGjSJ96JqwBixb7ViP%2B%2FS%2FOwvSjMew2Uku%2BK9wIgMdAR7NX1GTF1VBvo9qqCxnDI6fiU3mL2nJDheceG2SoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxOZpJwlpz2wKl23SrcA7KSb37wAjgaz2C9Xi%2BCu7YFGtwPaK2nJJG%2Bdxn6vb2GjotUg4%2BaW1UMhJTLRQEZ0uN5SVpraT%2BZPc%2Fzn3RF10siqYntj7Y2Kv3KMuLhByiAoQM%2BSFzJwGdQ7SR%2FXjQizbWID%2BsSPgy77f2t7thGqU58hn9N9gBGYCuqCsLqkH%2F1RqKu4jrqmSH03iYW%2Ff5R6pwM0kqeIqYqfIfigWI1OV7NhqP47o%2BGnJw8QNti7k2c7PuaHGkYRcvFsXD3ATJwiQK1eLsqmJIhYVWB6LKIecIBnSH2Tj7ZuxLuTXoD4VkCUrynJ1bf7LlRnxPmf3QtRe3tleIL%2FpAmBlMKV9eJSgRH5bGerrAH1hl0jJfxtQTC9N6iRst1mbzBerv5CSQDKiViLeyNOt6ErNsCw6xah9xd4ezx88zldSVghN7SGYQDhUfTUfF73usffhoWN6SmoEnYXvD6R017m%2FH9JY2IupOY7d6DlvyqNtIMcHg619Jb1qKRhoIuKz%2Be%2FYNRMX4g6D6hVzHeRz%2BEj56toKlRaQI5%2FcpuCNW1q16OisKkoI61g3MSxHBtkwH1NJpoIEIz6qbHI6%2BGoq2%2BXtPeF%2BVrkSop1zf2y1r5HncjiPs%2FRvpeaMfutGutxMFg0D%2BYMPGpvsEGOqUBLVzgb1w0p553wBUoYfl8tydIpPcZx7PUV6cqoo7iMqekTyMk2oJyaMdlddwR04y8OEWwDsUQwAXH4gA03MENjNfE0eVv32rrcWaS9%2FwwQDn3BDuu9HsvycQ0UVynW5S2BHmKazEvurgjN%2FZYi2w4LyNKfho6e9IWG5Lrzxz61cnByZqlVFVl%2F%2Fe7gWlsmBjn8kNbkCreUIkGmpM%2Bi%2BmoSmpVEcMH&X-Amz-Signature=529ed6f92f510d23e03fee487f13b8012296d06f5d7be8fdb9c52ca894eb3c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJQC7RR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCIccUskGjSJ96JqwBixb7ViP%2B%2FS%2FOwvSjMew2Uku%2BK9wIgMdAR7NX1GTF1VBvo9qqCxnDI6fiU3mL2nJDheceG2SoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxOZpJwlpz2wKl23SrcA7KSb37wAjgaz2C9Xi%2BCu7YFGtwPaK2nJJG%2Bdxn6vb2GjotUg4%2BaW1UMhJTLRQEZ0uN5SVpraT%2BZPc%2Fzn3RF10siqYntj7Y2Kv3KMuLhByiAoQM%2BSFzJwGdQ7SR%2FXjQizbWID%2BsSPgy77f2t7thGqU58hn9N9gBGYCuqCsLqkH%2F1RqKu4jrqmSH03iYW%2Ff5R6pwM0kqeIqYqfIfigWI1OV7NhqP47o%2BGnJw8QNti7k2c7PuaHGkYRcvFsXD3ATJwiQK1eLsqmJIhYVWB6LKIecIBnSH2Tj7ZuxLuTXoD4VkCUrynJ1bf7LlRnxPmf3QtRe3tleIL%2FpAmBlMKV9eJSgRH5bGerrAH1hl0jJfxtQTC9N6iRst1mbzBerv5CSQDKiViLeyNOt6ErNsCw6xah9xd4ezx88zldSVghN7SGYQDhUfTUfF73usffhoWN6SmoEnYXvD6R017m%2FH9JY2IupOY7d6DlvyqNtIMcHg619Jb1qKRhoIuKz%2Be%2FYNRMX4g6D6hVzHeRz%2BEj56toKlRaQI5%2FcpuCNW1q16OisKkoI61g3MSxHBtkwH1NJpoIEIz6qbHI6%2BGoq2%2BXtPeF%2BVrkSop1zf2y1r5HncjiPs%2FRvpeaMfutGutxMFg0D%2BYMPGpvsEGOqUBLVzgb1w0p553wBUoYfl8tydIpPcZx7PUV6cqoo7iMqekTyMk2oJyaMdlddwR04y8OEWwDsUQwAXH4gA03MENjNfE0eVv32rrcWaS9%2FwwQDn3BDuu9HsvycQ0UVynW5S2BHmKazEvurgjN%2FZYi2w4LyNKfho6e9IWG5Lrzxz61cnByZqlVFVl%2F%2Fe7gWlsmBjn8kNbkCreUIkGmpM%2Bi%2BmoSmpVEcMH&X-Amz-Signature=646b5623f747969c4eafaad8dfe815f19cfd771d0b7f3b232578698cac396fff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
