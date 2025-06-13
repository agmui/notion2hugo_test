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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQPQP7V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCDm8fHxlXzNzTORkEa8tSJmGwYJJHKHqGwXoXMywzKggIgCfItE9VAqmTSjy6GYIRWJ1so9MTDJZ%2Blif%2F4GWwNiG0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFMBFVPkcIsLIeCBPyrcA%2BzfZ1RMFUD0ug0rmBYCM%2Fmvt6wJsqoAJ6UUq2FVKJdfxsbjjjxh5j5ZudtTXr7oqKuL7jrNVmGW2KXsBXKapVQWQ1sUFOYt336yRint0T7HXpmvxXKuIiVx%2BdDqGlBp%2BTjGDB6ZQDCu%2FSIx3SQ5bboYbBNIyn7jqvQQ5IqDxY%2F4Z9e%2BuwED71%2Ba2NOgMU7QbeSnH9%2BLK04ah3BIMaQi9QT48Zhp0Sx7o0q0MzIk1JZeIY22BUcNYb86Ur4PLTjHwHKp%2FnEv6wwiNlUTv0pxQaEn8HYmi9sql34wh36WDP3BdchmBfs44PtECXs8J6GsN7mHs6ZSBXIYM0Opc%2F3%2Bu0JJ1qYZjTXGHa%2FrYhOlIMSkdxkERuM1%2FbqwqBLk4gXJCeW%2F68HKrYZUQgOHDHrEpJlhne2nibZW42I0QdxryPAxqtPWdlNIuPAzb9h8pwXaWowQQ2%2BYEvFeHbU7hb7NPk7q%2B6YbjjT%2F8HrKAu75YFB4GFPMNxiA0Njn6wSFGPLZWTXxPzIDguZ1R19rIogt2ngBpLBTDgbwnZSWKtpQxIzT83khPX2qWMNdZ0Qt%2BUI61fQIev4QFbjVQKLPC6cvs8OvWCBa3wgSvSdjFxXGSSA5keeKM3HFmmEqT4HpMN6XscIGOqUBR4Bq82Re3Uiae9LVupouQUt3Y7ueZYEgtmUjsauCsx4EMofj40FE0KvKeDQbq8mBcAgwWlrUnHItbw17nP%2Bv1Z0q1ptrnD6g2auQDRwzzoeeTR8in3el5Wsz2SXHYILpLEYXZMEA%2B7u5Ju4V4ffOiGFSsFYQ4lRPcrJemZu2CnKOUpyS26NHmVe%2FIUDCYqSNslVeeg%2BfWpJ7MHdL9AXDElr%2FJGwf&X-Amz-Signature=85dffff6ee312cc4c4f6b27efd918c97cdee423ff28c592d98068f1913289488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQPQP7V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCDm8fHxlXzNzTORkEa8tSJmGwYJJHKHqGwXoXMywzKggIgCfItE9VAqmTSjy6GYIRWJ1so9MTDJZ%2Blif%2F4GWwNiG0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFMBFVPkcIsLIeCBPyrcA%2BzfZ1RMFUD0ug0rmBYCM%2Fmvt6wJsqoAJ6UUq2FVKJdfxsbjjjxh5j5ZudtTXr7oqKuL7jrNVmGW2KXsBXKapVQWQ1sUFOYt336yRint0T7HXpmvxXKuIiVx%2BdDqGlBp%2BTjGDB6ZQDCu%2FSIx3SQ5bboYbBNIyn7jqvQQ5IqDxY%2F4Z9e%2BuwED71%2Ba2NOgMU7QbeSnH9%2BLK04ah3BIMaQi9QT48Zhp0Sx7o0q0MzIk1JZeIY22BUcNYb86Ur4PLTjHwHKp%2FnEv6wwiNlUTv0pxQaEn8HYmi9sql34wh36WDP3BdchmBfs44PtECXs8J6GsN7mHs6ZSBXIYM0Opc%2F3%2Bu0JJ1qYZjTXGHa%2FrYhOlIMSkdxkERuM1%2FbqwqBLk4gXJCeW%2F68HKrYZUQgOHDHrEpJlhne2nibZW42I0QdxryPAxqtPWdlNIuPAzb9h8pwXaWowQQ2%2BYEvFeHbU7hb7NPk7q%2B6YbjjT%2F8HrKAu75YFB4GFPMNxiA0Njn6wSFGPLZWTXxPzIDguZ1R19rIogt2ngBpLBTDgbwnZSWKtpQxIzT83khPX2qWMNdZ0Qt%2BUI61fQIev4QFbjVQKLPC6cvs8OvWCBa3wgSvSdjFxXGSSA5keeKM3HFmmEqT4HpMN6XscIGOqUBR4Bq82Re3Uiae9LVupouQUt3Y7ueZYEgtmUjsauCsx4EMofj40FE0KvKeDQbq8mBcAgwWlrUnHItbw17nP%2Bv1Z0q1ptrnD6g2auQDRwzzoeeTR8in3el5Wsz2SXHYILpLEYXZMEA%2B7u5Ju4V4ffOiGFSsFYQ4lRPcrJemZu2CnKOUpyS26NHmVe%2FIUDCYqSNslVeeg%2BfWpJ7MHdL9AXDElr%2FJGwf&X-Amz-Signature=e8055a00cb6e6f66013a81ddfbe19d57517e6bfbc8d08ecf27289f9b351ad807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQPQP7V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCDm8fHxlXzNzTORkEa8tSJmGwYJJHKHqGwXoXMywzKggIgCfItE9VAqmTSjy6GYIRWJ1so9MTDJZ%2Blif%2F4GWwNiG0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFMBFVPkcIsLIeCBPyrcA%2BzfZ1RMFUD0ug0rmBYCM%2Fmvt6wJsqoAJ6UUq2FVKJdfxsbjjjxh5j5ZudtTXr7oqKuL7jrNVmGW2KXsBXKapVQWQ1sUFOYt336yRint0T7HXpmvxXKuIiVx%2BdDqGlBp%2BTjGDB6ZQDCu%2FSIx3SQ5bboYbBNIyn7jqvQQ5IqDxY%2F4Z9e%2BuwED71%2Ba2NOgMU7QbeSnH9%2BLK04ah3BIMaQi9QT48Zhp0Sx7o0q0MzIk1JZeIY22BUcNYb86Ur4PLTjHwHKp%2FnEv6wwiNlUTv0pxQaEn8HYmi9sql34wh36WDP3BdchmBfs44PtECXs8J6GsN7mHs6ZSBXIYM0Opc%2F3%2Bu0JJ1qYZjTXGHa%2FrYhOlIMSkdxkERuM1%2FbqwqBLk4gXJCeW%2F68HKrYZUQgOHDHrEpJlhne2nibZW42I0QdxryPAxqtPWdlNIuPAzb9h8pwXaWowQQ2%2BYEvFeHbU7hb7NPk7q%2B6YbjjT%2F8HrKAu75YFB4GFPMNxiA0Njn6wSFGPLZWTXxPzIDguZ1R19rIogt2ngBpLBTDgbwnZSWKtpQxIzT83khPX2qWMNdZ0Qt%2BUI61fQIev4QFbjVQKLPC6cvs8OvWCBa3wgSvSdjFxXGSSA5keeKM3HFmmEqT4HpMN6XscIGOqUBR4Bq82Re3Uiae9LVupouQUt3Y7ueZYEgtmUjsauCsx4EMofj40FE0KvKeDQbq8mBcAgwWlrUnHItbw17nP%2Bv1Z0q1ptrnD6g2auQDRwzzoeeTR8in3el5Wsz2SXHYILpLEYXZMEA%2B7u5Ju4V4ffOiGFSsFYQ4lRPcrJemZu2CnKOUpyS26NHmVe%2FIUDCYqSNslVeeg%2BfWpJ7MHdL9AXDElr%2FJGwf&X-Amz-Signature=8272ba5637b135ac7b0491c5d394b6dcecfdfc03e57f4cb3a51eb937db91543f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
