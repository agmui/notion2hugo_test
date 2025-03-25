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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ISE37F%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmpw2KIMb5U8sM0YvUsajY5JTPOZMNNBDi89XnxlCXOAiEAnrszr9jK8Lfzoq9ZbLLXBbGidY9oInCmv5S0kx2peyMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGck4s%2BDvRRZSqJy1SrcA64IkLI4oIDfO0Iy6zDqTVUNIHQ%2BY938kV61iSIRYQ5L6yFHnki6hZXYKPUzewClWrSvU21LEEF9AlemFHdFpGagj2jdHVnbRzLjGNYUZ%2ButllTr0beUWwy7uhwyv5lCbvkjkF2MqYbEMeUIrHpMDHtSxYlH97%2BAh%2BFjBePBHQJ8nqFgTcdwdSVzaz%2Fx6MY1HLWbbzsXHiwpQG3WUAxItN66f92Ev9UCFibX4O9ZoXlPCXHFpLJaSP2Ze2vc1K%2BWP5xPcAe9R1lCIw%2B9qhIP9vl0SkEKCoT%2BGYPrl0Gswf0PiWcEWmtp4C6IW4N0qLtCsRLoro7ieBq9dfDogjdmL3MkxGuRRgVo8xMIYdfGFe69gQn6SAd4XPvjryJ6g7akt%2BKxlA6sUZSzLb96siktCab3ru0XYsTDKaEggq4vmUfj4XBXtlvLiHEn3m7IjPLuujrNpWKqZalkCiPv%2F6tDIt2gJ9kkPunggjqCdLJKtgGrLKcsZT2932VQE0DpIrYAWAIwNofW7STKRTHaj7sGwGJz5PfWr9ZnYMpnmwwOcuMtsQif0hZMCfXA7Z8thxeRMibeQ7Et1BBtAWZgwPHc7koiykOn83lyODeRHOZ6otlYX0T6W9QpC72JAiuwMPTwiL8GOqUBbl9hY5MJe6ZRhfqtqd4q1SkmmsoQA9H5AbURMVMVxtmLGJuPOGFbBNZzRDVOyg2vHtmgSlYpD5LC%2BQKFFdtlrDFGkFFhAZLhP0hOutwmnUdGNXf7ABObus7wAlkQ9ohNFZ4IH7jPTxHUfHyDXW%2B9ammYVTNjZbFcT4%2ByvhMs2KqofYQcbY6ZKbA4HqWEHsKs6VbnpR0ddy%2FjqyHsnt8DnhfIWwkr&X-Amz-Signature=3f412615a5cac939eeff9266ee90d93fb5ba637bfe876091e9a75a5fa7b0ff67&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ISE37F%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmpw2KIMb5U8sM0YvUsajY5JTPOZMNNBDi89XnxlCXOAiEAnrszr9jK8Lfzoq9ZbLLXBbGidY9oInCmv5S0kx2peyMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGck4s%2BDvRRZSqJy1SrcA64IkLI4oIDfO0Iy6zDqTVUNIHQ%2BY938kV61iSIRYQ5L6yFHnki6hZXYKPUzewClWrSvU21LEEF9AlemFHdFpGagj2jdHVnbRzLjGNYUZ%2ButllTr0beUWwy7uhwyv5lCbvkjkF2MqYbEMeUIrHpMDHtSxYlH97%2BAh%2BFjBePBHQJ8nqFgTcdwdSVzaz%2Fx6MY1HLWbbzsXHiwpQG3WUAxItN66f92Ev9UCFibX4O9ZoXlPCXHFpLJaSP2Ze2vc1K%2BWP5xPcAe9R1lCIw%2B9qhIP9vl0SkEKCoT%2BGYPrl0Gswf0PiWcEWmtp4C6IW4N0qLtCsRLoro7ieBq9dfDogjdmL3MkxGuRRgVo8xMIYdfGFe69gQn6SAd4XPvjryJ6g7akt%2BKxlA6sUZSzLb96siktCab3ru0XYsTDKaEggq4vmUfj4XBXtlvLiHEn3m7IjPLuujrNpWKqZalkCiPv%2F6tDIt2gJ9kkPunggjqCdLJKtgGrLKcsZT2932VQE0DpIrYAWAIwNofW7STKRTHaj7sGwGJz5PfWr9ZnYMpnmwwOcuMtsQif0hZMCfXA7Z8thxeRMibeQ7Et1BBtAWZgwPHc7koiykOn83lyODeRHOZ6otlYX0T6W9QpC72JAiuwMPTwiL8GOqUBbl9hY5MJe6ZRhfqtqd4q1SkmmsoQA9H5AbURMVMVxtmLGJuPOGFbBNZzRDVOyg2vHtmgSlYpD5LC%2BQKFFdtlrDFGkFFhAZLhP0hOutwmnUdGNXf7ABObus7wAlkQ9ohNFZ4IH7jPTxHUfHyDXW%2B9ammYVTNjZbFcT4%2ByvhMs2KqofYQcbY6ZKbA4HqWEHsKs6VbnpR0ddy%2FjqyHsnt8DnhfIWwkr&X-Amz-Signature=e6bb6e3f4a8bcf0c16d57ec33adba56ce3d89df4cfdca6818ed82aec2f33cefb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ISE37F%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmpw2KIMb5U8sM0YvUsajY5JTPOZMNNBDi89XnxlCXOAiEAnrszr9jK8Lfzoq9ZbLLXBbGidY9oInCmv5S0kx2peyMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGck4s%2BDvRRZSqJy1SrcA64IkLI4oIDfO0Iy6zDqTVUNIHQ%2BY938kV61iSIRYQ5L6yFHnki6hZXYKPUzewClWrSvU21LEEF9AlemFHdFpGagj2jdHVnbRzLjGNYUZ%2ButllTr0beUWwy7uhwyv5lCbvkjkF2MqYbEMeUIrHpMDHtSxYlH97%2BAh%2BFjBePBHQJ8nqFgTcdwdSVzaz%2Fx6MY1HLWbbzsXHiwpQG3WUAxItN66f92Ev9UCFibX4O9ZoXlPCXHFpLJaSP2Ze2vc1K%2BWP5xPcAe9R1lCIw%2B9qhIP9vl0SkEKCoT%2BGYPrl0Gswf0PiWcEWmtp4C6IW4N0qLtCsRLoro7ieBq9dfDogjdmL3MkxGuRRgVo8xMIYdfGFe69gQn6SAd4XPvjryJ6g7akt%2BKxlA6sUZSzLb96siktCab3ru0XYsTDKaEggq4vmUfj4XBXtlvLiHEn3m7IjPLuujrNpWKqZalkCiPv%2F6tDIt2gJ9kkPunggjqCdLJKtgGrLKcsZT2932VQE0DpIrYAWAIwNofW7STKRTHaj7sGwGJz5PfWr9ZnYMpnmwwOcuMtsQif0hZMCfXA7Z8thxeRMibeQ7Et1BBtAWZgwPHc7koiykOn83lyODeRHOZ6otlYX0T6W9QpC72JAiuwMPTwiL8GOqUBbl9hY5MJe6ZRhfqtqd4q1SkmmsoQA9H5AbURMVMVxtmLGJuPOGFbBNZzRDVOyg2vHtmgSlYpD5LC%2BQKFFdtlrDFGkFFhAZLhP0hOutwmnUdGNXf7ABObus7wAlkQ9ohNFZ4IH7jPTxHUfHyDXW%2B9ammYVTNjZbFcT4%2ByvhMs2KqofYQcbY6ZKbA4HqWEHsKs6VbnpR0ddy%2FjqyHsnt8DnhfIWwkr&X-Amz-Signature=7ceee3958b4e82a5d167fb5f4ee8488dccf05a0f38da7e00682e755217e2ec8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
