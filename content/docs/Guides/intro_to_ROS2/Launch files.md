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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F5SK5B%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrNjOivpT0uwJlBLPApJDbI8DZlzl6TtwwdKr4GzNPTAiAnvhV1ZE5m0x%2F9dC9MViEx9EcR8LFCW%2B6pnrSTlQRYRir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMK3H5qDBIY1J5tAutKtwDP2NjASElDuNlZ9kK%2FsgP2uJk0UhYNLGACXxfbaNTmsOZWS1lGNjWF%2BHwbmvI27oqNkx%2FTh7sSNZ96Xw0EI8DRrLz4hcwxKX7woi0%2BBOuAE0kvspsR%2B8IURa9MQrdSssGGGhDws1JooZlV9A3OO8BNTSk0TCG4Ob5TMMG0J9pc8v6ztTyyitjJealKHjpEn1%2Bl1S9mXYvCm%2FuCoQjRs%2BfK3SasYwcAVa9bwDNGHA7Qmb12K3pLGCANJYSj92MZiA2H%2FOYZx8f%2F9kY5vFTckepscZqda%2FGY3xLr9zZiSIwB2KIx1FnRhk5kmL2RyQBjb3D898KxWkhjeuS54NGuU%2B63NKQAf1zlYp02a36dfcdvRtMR79MlCK65%2FpLPCX%2Bst2yugXY5RDN26VoU0RiHP0urlfqrXfOFUMC2Ffz5umDT9IKx7iR2h%2FW9hYfwFxGWFzGJHQ7kELfXhUSLmrcROFMOTqrCN2f0qirR%2FQGwUjgGJFf5Rqtv6MswsemiFQJNVsfjwlT%2Fms8819y%2FMxHg%2FLI0wCjhdQxtRXZ3MMCLl0t%2FOye%2Fnj8EOOjjmwQid9jotG5ppSAngLYQdHaYjaIbzuiOBkKuOdKIDP4fBzTYawPwiIbFzrctanGHdF%2FpCIwrITSvwY6pgE0ufOmbsck%2FkOR%2FKQr9kFn4%2FIIjA%2BtIUfT%2FCAFjBROqjNHZewpN4chaOiryWTJ%2FD32i%2BZnAsBYMG%2B6PP61EZYqp0xcCwYSNO1xdqRZEbHpuTp7dzgr%2BfTNb4wAUA7wBrcasAvIgvHChlR1ll656PULnBGTiRLav3KUNv2Arbhu7ZsYHMfabkKDhHG28lcZABd%2B75wHuobWE0L6rpoo4N%2BUbFjERocU&X-Amz-Signature=b341468fff6ce0c97090f8ba65de712301403effb40673ba0c3d42b9ede07ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F5SK5B%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrNjOivpT0uwJlBLPApJDbI8DZlzl6TtwwdKr4GzNPTAiAnvhV1ZE5m0x%2F9dC9MViEx9EcR8LFCW%2B6pnrSTlQRYRir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMK3H5qDBIY1J5tAutKtwDP2NjASElDuNlZ9kK%2FsgP2uJk0UhYNLGACXxfbaNTmsOZWS1lGNjWF%2BHwbmvI27oqNkx%2FTh7sSNZ96Xw0EI8DRrLz4hcwxKX7woi0%2BBOuAE0kvspsR%2B8IURa9MQrdSssGGGhDws1JooZlV9A3OO8BNTSk0TCG4Ob5TMMG0J9pc8v6ztTyyitjJealKHjpEn1%2Bl1S9mXYvCm%2FuCoQjRs%2BfK3SasYwcAVa9bwDNGHA7Qmb12K3pLGCANJYSj92MZiA2H%2FOYZx8f%2F9kY5vFTckepscZqda%2FGY3xLr9zZiSIwB2KIx1FnRhk5kmL2RyQBjb3D898KxWkhjeuS54NGuU%2B63NKQAf1zlYp02a36dfcdvRtMR79MlCK65%2FpLPCX%2Bst2yugXY5RDN26VoU0RiHP0urlfqrXfOFUMC2Ffz5umDT9IKx7iR2h%2FW9hYfwFxGWFzGJHQ7kELfXhUSLmrcROFMOTqrCN2f0qirR%2FQGwUjgGJFf5Rqtv6MswsemiFQJNVsfjwlT%2Fms8819y%2FMxHg%2FLI0wCjhdQxtRXZ3MMCLl0t%2FOye%2Fnj8EOOjjmwQid9jotG5ppSAngLYQdHaYjaIbzuiOBkKuOdKIDP4fBzTYawPwiIbFzrctanGHdF%2FpCIwrITSvwY6pgE0ufOmbsck%2FkOR%2FKQr9kFn4%2FIIjA%2BtIUfT%2FCAFjBROqjNHZewpN4chaOiryWTJ%2FD32i%2BZnAsBYMG%2B6PP61EZYqp0xcCwYSNO1xdqRZEbHpuTp7dzgr%2BfTNb4wAUA7wBrcasAvIgvHChlR1ll656PULnBGTiRLav3KUNv2Arbhu7ZsYHMfabkKDhHG28lcZABd%2B75wHuobWE0L6rpoo4N%2BUbFjERocU&X-Amz-Signature=346d18c9c2d21a5c8d14b9b1f2efed5d5541ac83fe1f14be1cbf6213982029ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F5SK5B%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrNjOivpT0uwJlBLPApJDbI8DZlzl6TtwwdKr4GzNPTAiAnvhV1ZE5m0x%2F9dC9MViEx9EcR8LFCW%2B6pnrSTlQRYRir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMK3H5qDBIY1J5tAutKtwDP2NjASElDuNlZ9kK%2FsgP2uJk0UhYNLGACXxfbaNTmsOZWS1lGNjWF%2BHwbmvI27oqNkx%2FTh7sSNZ96Xw0EI8DRrLz4hcwxKX7woi0%2BBOuAE0kvspsR%2B8IURa9MQrdSssGGGhDws1JooZlV9A3OO8BNTSk0TCG4Ob5TMMG0J9pc8v6ztTyyitjJealKHjpEn1%2Bl1S9mXYvCm%2FuCoQjRs%2BfK3SasYwcAVa9bwDNGHA7Qmb12K3pLGCANJYSj92MZiA2H%2FOYZx8f%2F9kY5vFTckepscZqda%2FGY3xLr9zZiSIwB2KIx1FnRhk5kmL2RyQBjb3D898KxWkhjeuS54NGuU%2B63NKQAf1zlYp02a36dfcdvRtMR79MlCK65%2FpLPCX%2Bst2yugXY5RDN26VoU0RiHP0urlfqrXfOFUMC2Ffz5umDT9IKx7iR2h%2FW9hYfwFxGWFzGJHQ7kELfXhUSLmrcROFMOTqrCN2f0qirR%2FQGwUjgGJFf5Rqtv6MswsemiFQJNVsfjwlT%2Fms8819y%2FMxHg%2FLI0wCjhdQxtRXZ3MMCLl0t%2FOye%2Fnj8EOOjjmwQid9jotG5ppSAngLYQdHaYjaIbzuiOBkKuOdKIDP4fBzTYawPwiIbFzrctanGHdF%2FpCIwrITSvwY6pgE0ufOmbsck%2FkOR%2FKQr9kFn4%2FIIjA%2BtIUfT%2FCAFjBROqjNHZewpN4chaOiryWTJ%2FD32i%2BZnAsBYMG%2B6PP61EZYqp0xcCwYSNO1xdqRZEbHpuTp7dzgr%2BfTNb4wAUA7wBrcasAvIgvHChlR1ll656PULnBGTiRLav3KUNv2Arbhu7ZsYHMfabkKDhHG28lcZABd%2B75wHuobWE0L6rpoo4N%2BUbFjERocU&X-Amz-Signature=0808b59dffa4a7a018988bca2313feec8a3feb787e51ee31251c528190546916&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
