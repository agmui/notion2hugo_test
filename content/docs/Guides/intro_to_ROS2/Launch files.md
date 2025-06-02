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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7YECYC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEiIk32W4V40WdaofRlvBhFMBTnhfLxKjuKKujTFnEOsAiEAv7sq214y%2FgfLo54Xx974bPvcUpzU8B7O%2BHgmF%2BAtBB0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqt5kwb4plKEs8YKyrcAyE3ca%2Bb0CVcabFhbcqmiIw1lxsktHlllpadbiFjouhnnbrAIFGSAPvHFnDZHryOOoDtD%2BhS4eICRiNiQlCmCa9AEd6hWonTq10y97ED0aBkH%2FKhy22o7%2BE52%2Bh4XZbVF3vI6Sbg0iYjyVMz%2Bj%2FeGjkI4%2Fhw%2FuUeQA2264mdRggBQHcDTbk46isrmbaRPCLw%2F2iPUZGOC0bD3W%2FkbSVYmOtqh6Jh1lG6mL4p6%2F%2BAHVFsrnrX1NiCQw8purX6CGBlPiALYxrAlCDIoyJfD5pnR4cu12wVlrWeLAaB%2Fg2QcVGd67arIwix%2B6w2YljL4knJN8TuDh2391q9qf7W36IAl0nazyposZNHUFz6Z6H7KyrwOUcHcRBDe7Bo%2B2RlQ%2FHz0qUQgGgdnLNj%2BRqQ6QE5S3ppq3ubNOQ7MIhQCagU4hqCccANAFpSGdmBuU5shFp0B5uWvHAJdW51cOFmLmd1t3FheFmVIipxGtSRRE%2BgQsBsB5Ifeq54MEodYyECLv8l0kaIx%2BPjGyX34EJn8UUEY%2Bt9YpStZQ%2FFQN4XPJS7XnYW5Ql9mzNLGcXcgDAO9tjaahOKZBk1WXGhN%2ByxbttplK2PM4DGNQae3PTbth31ugFiKakbW4MVcyHvWqbVMNnX9MEGOqUBxzihtP2oVEL8aFnY%2BbqBLTHvZ7HM%2BzqMXzazo%2BmPCjuVRRcsRa8OHZYER7UeHByZib8pB937WQkGUdS0t5Ty%2FMR0paCe1Vma27xoY5Ps8ufkZgv6JlgvzPKTseUoRRXYB%2FiZ%2Fj3nZBcvEGTGwxcnpHrJFWpvNN0%2B2pANbEWtK5HivaTn1WsgzWgJ0c%2Bc9mTtioEFH2s4kpdBO%2F3ZX3RdGCI3YBEM&X-Amz-Signature=f91df18a83d0484dabbe52551002ecb65481a45c04d38d36c17151ef54c963d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7YECYC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEiIk32W4V40WdaofRlvBhFMBTnhfLxKjuKKujTFnEOsAiEAv7sq214y%2FgfLo54Xx974bPvcUpzU8B7O%2BHgmF%2BAtBB0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqt5kwb4plKEs8YKyrcAyE3ca%2Bb0CVcabFhbcqmiIw1lxsktHlllpadbiFjouhnnbrAIFGSAPvHFnDZHryOOoDtD%2BhS4eICRiNiQlCmCa9AEd6hWonTq10y97ED0aBkH%2FKhy22o7%2BE52%2Bh4XZbVF3vI6Sbg0iYjyVMz%2Bj%2FeGjkI4%2Fhw%2FuUeQA2264mdRggBQHcDTbk46isrmbaRPCLw%2F2iPUZGOC0bD3W%2FkbSVYmOtqh6Jh1lG6mL4p6%2F%2BAHVFsrnrX1NiCQw8purX6CGBlPiALYxrAlCDIoyJfD5pnR4cu12wVlrWeLAaB%2Fg2QcVGd67arIwix%2B6w2YljL4knJN8TuDh2391q9qf7W36IAl0nazyposZNHUFz6Z6H7KyrwOUcHcRBDe7Bo%2B2RlQ%2FHz0qUQgGgdnLNj%2BRqQ6QE5S3ppq3ubNOQ7MIhQCagU4hqCccANAFpSGdmBuU5shFp0B5uWvHAJdW51cOFmLmd1t3FheFmVIipxGtSRRE%2BgQsBsB5Ifeq54MEodYyECLv8l0kaIx%2BPjGyX34EJn8UUEY%2Bt9YpStZQ%2FFQN4XPJS7XnYW5Ql9mzNLGcXcgDAO9tjaahOKZBk1WXGhN%2ByxbttplK2PM4DGNQae3PTbth31ugFiKakbW4MVcyHvWqbVMNnX9MEGOqUBxzihtP2oVEL8aFnY%2BbqBLTHvZ7HM%2BzqMXzazo%2BmPCjuVRRcsRa8OHZYER7UeHByZib8pB937WQkGUdS0t5Ty%2FMR0paCe1Vma27xoY5Ps8ufkZgv6JlgvzPKTseUoRRXYB%2FiZ%2Fj3nZBcvEGTGwxcnpHrJFWpvNN0%2B2pANbEWtK5HivaTn1WsgzWgJ0c%2Bc9mTtioEFH2s4kpdBO%2F3ZX3RdGCI3YBEM&X-Amz-Signature=53cfc2023121a24d3f6224e3af8cce1f95a1737ba0eeaf71ad4670da709cb3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7YECYC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEiIk32W4V40WdaofRlvBhFMBTnhfLxKjuKKujTFnEOsAiEAv7sq214y%2FgfLo54Xx974bPvcUpzU8B7O%2BHgmF%2BAtBB0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqt5kwb4plKEs8YKyrcAyE3ca%2Bb0CVcabFhbcqmiIw1lxsktHlllpadbiFjouhnnbrAIFGSAPvHFnDZHryOOoDtD%2BhS4eICRiNiQlCmCa9AEd6hWonTq10y97ED0aBkH%2FKhy22o7%2BE52%2Bh4XZbVF3vI6Sbg0iYjyVMz%2Bj%2FeGjkI4%2Fhw%2FuUeQA2264mdRggBQHcDTbk46isrmbaRPCLw%2F2iPUZGOC0bD3W%2FkbSVYmOtqh6Jh1lG6mL4p6%2F%2BAHVFsrnrX1NiCQw8purX6CGBlPiALYxrAlCDIoyJfD5pnR4cu12wVlrWeLAaB%2Fg2QcVGd67arIwix%2B6w2YljL4knJN8TuDh2391q9qf7W36IAl0nazyposZNHUFz6Z6H7KyrwOUcHcRBDe7Bo%2B2RlQ%2FHz0qUQgGgdnLNj%2BRqQ6QE5S3ppq3ubNOQ7MIhQCagU4hqCccANAFpSGdmBuU5shFp0B5uWvHAJdW51cOFmLmd1t3FheFmVIipxGtSRRE%2BgQsBsB5Ifeq54MEodYyECLv8l0kaIx%2BPjGyX34EJn8UUEY%2Bt9YpStZQ%2FFQN4XPJS7XnYW5Ql9mzNLGcXcgDAO9tjaahOKZBk1WXGhN%2ByxbttplK2PM4DGNQae3PTbth31ugFiKakbW4MVcyHvWqbVMNnX9MEGOqUBxzihtP2oVEL8aFnY%2BbqBLTHvZ7HM%2BzqMXzazo%2BmPCjuVRRcsRa8OHZYER7UeHByZib8pB937WQkGUdS0t5Ty%2FMR0paCe1Vma27xoY5Ps8ufkZgv6JlgvzPKTseUoRRXYB%2FiZ%2Fj3nZBcvEGTGwxcnpHrJFWpvNN0%2B2pANbEWtK5HivaTn1WsgzWgJ0c%2Bc9mTtioEFH2s4kpdBO%2F3ZX3RdGCI3YBEM&X-Amz-Signature=0baf3ce079161d740ce5333c3580e16fd99842e264839bc9624086528cf94c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
