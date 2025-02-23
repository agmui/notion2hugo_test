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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHXXAEP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNhDhWiztNjXzg4g41xjsmhGsfSACOkAQLdX4oVA032gIhALUDWKu1m0TunQwyxnkw6a8xnz78QmPzHjDth1f18rs4KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW0igi7k%2BkZgp%2BLaEq3APXs70x9jontbyVNbDx4C9irWVD3qFPhFYpXx8Vqb3M268t64aLIWDWpDfpyf9vmuzihLAHRkweiDOn6ME7jhUlGkBCMU8ybUmvRqzi2r73YTsjbGnywbcEREdFzxoKzpMLQtUbHGZzIf5RYqhUjAFnuToc9h9yhWcsFSwrfXu2Bh4D4qdZA%2BsRUwtWNkvuoZtunauvVgJ7NcSWBVmbevJqqwAMof7iPyJ8ARx18zODNHvIkpJJnvL7ZWQJMTUE%2BVUzR02J9kRZb1mzxTL6X44s563g8UceHqWZte0tusSAhZTeNVSABB079udpjRUVOz3tt%2Bbs4fj5IU7lpcnj4BIVb60DJ60%2BKgDa64wav1rAI3%2FcoA2eYvRb%2B9HbFtcBRw9L9oh9%2FMSdEiqbXEL4Smlg%2FgPeKMxC13w8h96rSAPE1h%2Be2glE2tUunQYHGgLOd53nIPSt1LXOFlDWjPpu6UuxSoTTbK41vbtvhaf%2B5aAdTC2TdVR6GG3LuYO7ZNe4O%2F8UgNtk5Xr8uRLGjOFwAis5alVPmqpZDs%2BNXajrOaLi7MRkeFCWpezt0EX2aEZpaloEBHLfStTY2jsgexlThFBR3LG29Ol1%2Fu4q7B5QO0jGhTfb55ov6cu0iJJIOjCKo%2Bm9BjqkAX%2BH0xHgrTa3NioYGgTn7XPiwgfRd2kmBZait5YoD2L8me%2BAQri26YE84r3Cb2e0fbexkrM6UgD%2BO4jtuZnVk9wsE4FccQDvI9TwHsA3ES7vfPtN13Y4tjuqATKX6kOCh6KMiED8qvK5bPTS1y7qFUMWr8ruFqmpJGRfs1dPfSiPxIRv59V89md4Dq7WdprbO8EFPahMn7wMYuHovxbSUKf%2BghX%2B&X-Amz-Signature=9670bd0485e7e58ee28d731d133577fefc12e4ff89310e9a6627ae25715fc8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHXXAEP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNhDhWiztNjXzg4g41xjsmhGsfSACOkAQLdX4oVA032gIhALUDWKu1m0TunQwyxnkw6a8xnz78QmPzHjDth1f18rs4KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW0igi7k%2BkZgp%2BLaEq3APXs70x9jontbyVNbDx4C9irWVD3qFPhFYpXx8Vqb3M268t64aLIWDWpDfpyf9vmuzihLAHRkweiDOn6ME7jhUlGkBCMU8ybUmvRqzi2r73YTsjbGnywbcEREdFzxoKzpMLQtUbHGZzIf5RYqhUjAFnuToc9h9yhWcsFSwrfXu2Bh4D4qdZA%2BsRUwtWNkvuoZtunauvVgJ7NcSWBVmbevJqqwAMof7iPyJ8ARx18zODNHvIkpJJnvL7ZWQJMTUE%2BVUzR02J9kRZb1mzxTL6X44s563g8UceHqWZte0tusSAhZTeNVSABB079udpjRUVOz3tt%2Bbs4fj5IU7lpcnj4BIVb60DJ60%2BKgDa64wav1rAI3%2FcoA2eYvRb%2B9HbFtcBRw9L9oh9%2FMSdEiqbXEL4Smlg%2FgPeKMxC13w8h96rSAPE1h%2Be2glE2tUunQYHGgLOd53nIPSt1LXOFlDWjPpu6UuxSoTTbK41vbtvhaf%2B5aAdTC2TdVR6GG3LuYO7ZNe4O%2F8UgNtk5Xr8uRLGjOFwAis5alVPmqpZDs%2BNXajrOaLi7MRkeFCWpezt0EX2aEZpaloEBHLfStTY2jsgexlThFBR3LG29Ol1%2Fu4q7B5QO0jGhTfb55ov6cu0iJJIOjCKo%2Bm9BjqkAX%2BH0xHgrTa3NioYGgTn7XPiwgfRd2kmBZait5YoD2L8me%2BAQri26YE84r3Cb2e0fbexkrM6UgD%2BO4jtuZnVk9wsE4FccQDvI9TwHsA3ES7vfPtN13Y4tjuqATKX6kOCh6KMiED8qvK5bPTS1y7qFUMWr8ruFqmpJGRfs1dPfSiPxIRv59V89md4Dq7WdprbO8EFPahMn7wMYuHovxbSUKf%2BghX%2B&X-Amz-Signature=3fb07662abc537e5aea3fb49e1729061a6a2f3f61f06039deaddd1b4e808a951&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHXXAEP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNhDhWiztNjXzg4g41xjsmhGsfSACOkAQLdX4oVA032gIhALUDWKu1m0TunQwyxnkw6a8xnz78QmPzHjDth1f18rs4KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW0igi7k%2BkZgp%2BLaEq3APXs70x9jontbyVNbDx4C9irWVD3qFPhFYpXx8Vqb3M268t64aLIWDWpDfpyf9vmuzihLAHRkweiDOn6ME7jhUlGkBCMU8ybUmvRqzi2r73YTsjbGnywbcEREdFzxoKzpMLQtUbHGZzIf5RYqhUjAFnuToc9h9yhWcsFSwrfXu2Bh4D4qdZA%2BsRUwtWNkvuoZtunauvVgJ7NcSWBVmbevJqqwAMof7iPyJ8ARx18zODNHvIkpJJnvL7ZWQJMTUE%2BVUzR02J9kRZb1mzxTL6X44s563g8UceHqWZte0tusSAhZTeNVSABB079udpjRUVOz3tt%2Bbs4fj5IU7lpcnj4BIVb60DJ60%2BKgDa64wav1rAI3%2FcoA2eYvRb%2B9HbFtcBRw9L9oh9%2FMSdEiqbXEL4Smlg%2FgPeKMxC13w8h96rSAPE1h%2Be2glE2tUunQYHGgLOd53nIPSt1LXOFlDWjPpu6UuxSoTTbK41vbtvhaf%2B5aAdTC2TdVR6GG3LuYO7ZNe4O%2F8UgNtk5Xr8uRLGjOFwAis5alVPmqpZDs%2BNXajrOaLi7MRkeFCWpezt0EX2aEZpaloEBHLfStTY2jsgexlThFBR3LG29Ol1%2Fu4q7B5QO0jGhTfb55ov6cu0iJJIOjCKo%2Bm9BjqkAX%2BH0xHgrTa3NioYGgTn7XPiwgfRd2kmBZait5YoD2L8me%2BAQri26YE84r3Cb2e0fbexkrM6UgD%2BO4jtuZnVk9wsE4FccQDvI9TwHsA3ES7vfPtN13Y4tjuqATKX6kOCh6KMiED8qvK5bPTS1y7qFUMWr8ruFqmpJGRfs1dPfSiPxIRv59V89md4Dq7WdprbO8EFPahMn7wMYuHovxbSUKf%2BghX%2B&X-Amz-Signature=d93376f8b023a95b23c1a129e9534d533fdc7aa791eeffa79a7de9aafdbf2255&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
