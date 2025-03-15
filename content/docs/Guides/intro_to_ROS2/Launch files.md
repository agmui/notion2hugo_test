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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ65XS6A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzPX61yOoyECL5O0K1A40UxUUuhllUXvN%2B8PxVp3sCFAiBiSLl2J4rlMEOXeODFbkj27vPAZZRSj68tClVOeQTKhSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5pn5HPBNlf%2BAHIBNKtwDm2fR%2BYmmTjP8BeCyOmvTu1tgj4HMoCmL1WnSF%2BEQ%2B7XWe0ebW3RT0OFfCJHCi8a3pQ4LZVC%2ByQ8fK9g6PKpCMC9ilCPCskd4eHbjsVJTJibRYJ2lJ28NwH8c%2FKXRk%2FQvQSZ%2BIZWY9BQNbFBnDhvywNb%2FCfzgdyLdkuul4%2BxScXr2fSYmf52kklGkB1BuFSEbb5o%2F%2FkkmXAOcYpgr2l4kR7EatZVC5bUnyb4y6yXeXN2TFapgq03%2F4n7tMK2ewXfftb588y23mI%2BPn4DRNfe3kAjjgkmjrD%2F9UTU6AiMu0G5pE%2BjyQ%2BbRz0%2FmTqer%2BS3fkEPOiUnAUuycN0qPyeac4JIIk%2FpYZHu3n9Pq3Lc9Jvqi%2BPql9m8Z8567znLvj12%2Fla%2FNEmDFSL5xNKcA6blfNuvORIiRk4Wfx2LpppgVCAIwvvorDbr8YJl%2FxH2SgPd9p%2BC0V%2F%2BSzbUag7vjC7RTsEBC8W1Y%2BHuec%2FZ2D6nzUECTYhUBxCdb96Q1x2RLZeXtolaqS%2FpdSwJBs1HA7uIJIHV56XKnxQqfuff2SDJAVbaDVuSink4sYAFUXaJTPlUuSI7WPRhfAc0yeJ5Z93B15EVPvt9dkRxyrnBoKDTsNVHLh%2FRkYWVHFHd4M1YwiY7XvgY6pgGpXwjkkfK1yOYt5qOgAcmT0qWM%2BjSY%2BXMtGVmB7vz%2FwYr6DN3I3gFhMMhEFzmnofTj670v%2BS4z9SPzwgP9k7zB53uhWTRp4qwNInwuePOHXDCsuq5rXsq8lCHWZgUQQeCC26tCtL5UXbIfz0NbuiuCJzyXV6I2GrEBxeU86FqhiuiGrT3su4T4Vs5dzlSpXdFCLPQMzEcOwSC6yVTSxEevLYetINTn&X-Amz-Signature=9b8c84e01da1b9fcf3507ef4731eb39bbe0badd91fe9afc868e6f6289ff67d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ65XS6A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzPX61yOoyECL5O0K1A40UxUUuhllUXvN%2B8PxVp3sCFAiBiSLl2J4rlMEOXeODFbkj27vPAZZRSj68tClVOeQTKhSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5pn5HPBNlf%2BAHIBNKtwDm2fR%2BYmmTjP8BeCyOmvTu1tgj4HMoCmL1WnSF%2BEQ%2B7XWe0ebW3RT0OFfCJHCi8a3pQ4LZVC%2ByQ8fK9g6PKpCMC9ilCPCskd4eHbjsVJTJibRYJ2lJ28NwH8c%2FKXRk%2FQvQSZ%2BIZWY9BQNbFBnDhvywNb%2FCfzgdyLdkuul4%2BxScXr2fSYmf52kklGkB1BuFSEbb5o%2F%2FkkmXAOcYpgr2l4kR7EatZVC5bUnyb4y6yXeXN2TFapgq03%2F4n7tMK2ewXfftb588y23mI%2BPn4DRNfe3kAjjgkmjrD%2F9UTU6AiMu0G5pE%2BjyQ%2BbRz0%2FmTqer%2BS3fkEPOiUnAUuycN0qPyeac4JIIk%2FpYZHu3n9Pq3Lc9Jvqi%2BPql9m8Z8567znLvj12%2Fla%2FNEmDFSL5xNKcA6blfNuvORIiRk4Wfx2LpppgVCAIwvvorDbr8YJl%2FxH2SgPd9p%2BC0V%2F%2BSzbUag7vjC7RTsEBC8W1Y%2BHuec%2FZ2D6nzUECTYhUBxCdb96Q1x2RLZeXtolaqS%2FpdSwJBs1HA7uIJIHV56XKnxQqfuff2SDJAVbaDVuSink4sYAFUXaJTPlUuSI7WPRhfAc0yeJ5Z93B15EVPvt9dkRxyrnBoKDTsNVHLh%2FRkYWVHFHd4M1YwiY7XvgY6pgGpXwjkkfK1yOYt5qOgAcmT0qWM%2BjSY%2BXMtGVmB7vz%2FwYr6DN3I3gFhMMhEFzmnofTj670v%2BS4z9SPzwgP9k7zB53uhWTRp4qwNInwuePOHXDCsuq5rXsq8lCHWZgUQQeCC26tCtL5UXbIfz0NbuiuCJzyXV6I2GrEBxeU86FqhiuiGrT3su4T4Vs5dzlSpXdFCLPQMzEcOwSC6yVTSxEevLYetINTn&X-Amz-Signature=fbd64c821cfa030a30c6ba815542a8fd62a0d2f9e015e8e5f71885d546492b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ65XS6A%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzPX61yOoyECL5O0K1A40UxUUuhllUXvN%2B8PxVp3sCFAiBiSLl2J4rlMEOXeODFbkj27vPAZZRSj68tClVOeQTKhSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5pn5HPBNlf%2BAHIBNKtwDm2fR%2BYmmTjP8BeCyOmvTu1tgj4HMoCmL1WnSF%2BEQ%2B7XWe0ebW3RT0OFfCJHCi8a3pQ4LZVC%2ByQ8fK9g6PKpCMC9ilCPCskd4eHbjsVJTJibRYJ2lJ28NwH8c%2FKXRk%2FQvQSZ%2BIZWY9BQNbFBnDhvywNb%2FCfzgdyLdkuul4%2BxScXr2fSYmf52kklGkB1BuFSEbb5o%2F%2FkkmXAOcYpgr2l4kR7EatZVC5bUnyb4y6yXeXN2TFapgq03%2F4n7tMK2ewXfftb588y23mI%2BPn4DRNfe3kAjjgkmjrD%2F9UTU6AiMu0G5pE%2BjyQ%2BbRz0%2FmTqer%2BS3fkEPOiUnAUuycN0qPyeac4JIIk%2FpYZHu3n9Pq3Lc9Jvqi%2BPql9m8Z8567znLvj12%2Fla%2FNEmDFSL5xNKcA6blfNuvORIiRk4Wfx2LpppgVCAIwvvorDbr8YJl%2FxH2SgPd9p%2BC0V%2F%2BSzbUag7vjC7RTsEBC8W1Y%2BHuec%2FZ2D6nzUECTYhUBxCdb96Q1x2RLZeXtolaqS%2FpdSwJBs1HA7uIJIHV56XKnxQqfuff2SDJAVbaDVuSink4sYAFUXaJTPlUuSI7WPRhfAc0yeJ5Z93B15EVPvt9dkRxyrnBoKDTsNVHLh%2FRkYWVHFHd4M1YwiY7XvgY6pgGpXwjkkfK1yOYt5qOgAcmT0qWM%2BjSY%2BXMtGVmB7vz%2FwYr6DN3I3gFhMMhEFzmnofTj670v%2BS4z9SPzwgP9k7zB53uhWTRp4qwNInwuePOHXDCsuq5rXsq8lCHWZgUQQeCC26tCtL5UXbIfz0NbuiuCJzyXV6I2GrEBxeU86FqhiuiGrT3su4T4Vs5dzlSpXdFCLPQMzEcOwSC6yVTSxEevLYetINTn&X-Amz-Signature=ed94ed45749ecf3af70bd80c491a0862587bf382661552dc7e6f9497726b48c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
