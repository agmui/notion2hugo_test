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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3LSEFJW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEtSZ65UD%2FfhZGpr13j9xRQqjarBH7q%2FSpMRuajLWiDCAiAmR%2BFAxKW6a8Pcd%2Fa34VMSLaXw4p3VYo3NHK66DVfyGyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2FhyoMdmQqvP4vSIdKtwD9oY6cd7e21JLNOYnI%2BVLz2Ter0fI3i5wv4w0%2FeMnA2PbfsFFic11eD72l2XhtnsgD3NTOARpB74kxx1vXzPnc%2FW%2FXGcV3P1f3bfm6bLFBvpf31CY%2BK7PreOQF1yPdrzS1uWDiM3Q8CLjNpBveSn%2FtdJ13FO5D3NZ8tHaQ37S7Kd0Y6w0spMwQpKdI%2BxdM6An3oTtKdx2K8E46kohTGDePwdVzrtBbPXKAtxesD2%2B6CieUDqGEQmnWMg7Qsh5I9dmBLsiy%2BmGAiz4Nwakgm08T3U4KBy2bkwOaDX1YkW7v2b7Mb0tl8vI9ZPR6ke5dTj1kE%2BR6y%2BEtsHR6EEXZW%2BWEBluhob6%2B9i55lfris2buJ1Imoa2Qo5seQ%2FIx%2FVP2N2ZMuHlXlNpIRCJa06m4ds0NTxTSaCxIqrWtdrffNTIRJR3an5Z%2BW3ub7GpA2FEl64%2Bxu%2F2%2BvR6eJCeBAgFva2UjVFj%2FwU3QlIMujE2NL1ue7XkPwCd06Hwqd25BYpUmcASY5Br5hGwDYGwa50mqWcBnMgehts4s%2BEs9jcFfNOwY3%2Blenjm4TV4MeIMX%2FKdeoLtnuBv%2B%2Bdfx%2B5N2Yuao2l5iQsgtHne3NhpejYEhh%2F%2FxGHXZfYduUEJFDX3rR0wobS%2FvQY6pgFDsSxpF3CgWup55Tt6hAlARQBY4g%2FdSgva739VXsGEzTaB29KMEdP5Rtzo4sa7XcZAdcHc0Q2bSrjJkVwbofHtIcCJq3c%2BtmhaXtyVktgKnk9YxnLZg4vn4oVhTh%2FfUF7wz7NLobnih0fYJva0VtoOmclR9WoYrRcrcwanOlLJvmHsoMSyFJyxcGNK%2FucqgXC1AIrHgSokF2bwc7cRNkXHUtCzkxu9&X-Amz-Signature=4443f77ea2bc36fa233fa0cb02faf7971ff0192fc5dc4b9a9adf95686a236e30&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3LSEFJW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEtSZ65UD%2FfhZGpr13j9xRQqjarBH7q%2FSpMRuajLWiDCAiAmR%2BFAxKW6a8Pcd%2Fa34VMSLaXw4p3VYo3NHK66DVfyGyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2FhyoMdmQqvP4vSIdKtwD9oY6cd7e21JLNOYnI%2BVLz2Ter0fI3i5wv4w0%2FeMnA2PbfsFFic11eD72l2XhtnsgD3NTOARpB74kxx1vXzPnc%2FW%2FXGcV3P1f3bfm6bLFBvpf31CY%2BK7PreOQF1yPdrzS1uWDiM3Q8CLjNpBveSn%2FtdJ13FO5D3NZ8tHaQ37S7Kd0Y6w0spMwQpKdI%2BxdM6An3oTtKdx2K8E46kohTGDePwdVzrtBbPXKAtxesD2%2B6CieUDqGEQmnWMg7Qsh5I9dmBLsiy%2BmGAiz4Nwakgm08T3U4KBy2bkwOaDX1YkW7v2b7Mb0tl8vI9ZPR6ke5dTj1kE%2BR6y%2BEtsHR6EEXZW%2BWEBluhob6%2B9i55lfris2buJ1Imoa2Qo5seQ%2FIx%2FVP2N2ZMuHlXlNpIRCJa06m4ds0NTxTSaCxIqrWtdrffNTIRJR3an5Z%2BW3ub7GpA2FEl64%2Bxu%2F2%2BvR6eJCeBAgFva2UjVFj%2FwU3QlIMujE2NL1ue7XkPwCd06Hwqd25BYpUmcASY5Br5hGwDYGwa50mqWcBnMgehts4s%2BEs9jcFfNOwY3%2Blenjm4TV4MeIMX%2FKdeoLtnuBv%2B%2Bdfx%2B5N2Yuao2l5iQsgtHne3NhpejYEhh%2F%2FxGHXZfYduUEJFDX3rR0wobS%2FvQY6pgFDsSxpF3CgWup55Tt6hAlARQBY4g%2FdSgva739VXsGEzTaB29KMEdP5Rtzo4sa7XcZAdcHc0Q2bSrjJkVwbofHtIcCJq3c%2BtmhaXtyVktgKnk9YxnLZg4vn4oVhTh%2FfUF7wz7NLobnih0fYJva0VtoOmclR9WoYrRcrcwanOlLJvmHsoMSyFJyxcGNK%2FucqgXC1AIrHgSokF2bwc7cRNkXHUtCzkxu9&X-Amz-Signature=b39f8460d2da2c39b95dc328f3d5b44db24f7f5ff88cb2c96b930dd7ec0933ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3LSEFJW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEtSZ65UD%2FfhZGpr13j9xRQqjarBH7q%2FSpMRuajLWiDCAiAmR%2BFAxKW6a8Pcd%2Fa34VMSLaXw4p3VYo3NHK66DVfyGyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2FhyoMdmQqvP4vSIdKtwD9oY6cd7e21JLNOYnI%2BVLz2Ter0fI3i5wv4w0%2FeMnA2PbfsFFic11eD72l2XhtnsgD3NTOARpB74kxx1vXzPnc%2FW%2FXGcV3P1f3bfm6bLFBvpf31CY%2BK7PreOQF1yPdrzS1uWDiM3Q8CLjNpBveSn%2FtdJ13FO5D3NZ8tHaQ37S7Kd0Y6w0spMwQpKdI%2BxdM6An3oTtKdx2K8E46kohTGDePwdVzrtBbPXKAtxesD2%2B6CieUDqGEQmnWMg7Qsh5I9dmBLsiy%2BmGAiz4Nwakgm08T3U4KBy2bkwOaDX1YkW7v2b7Mb0tl8vI9ZPR6ke5dTj1kE%2BR6y%2BEtsHR6EEXZW%2BWEBluhob6%2B9i55lfris2buJ1Imoa2Qo5seQ%2FIx%2FVP2N2ZMuHlXlNpIRCJa06m4ds0NTxTSaCxIqrWtdrffNTIRJR3an5Z%2BW3ub7GpA2FEl64%2Bxu%2F2%2BvR6eJCeBAgFva2UjVFj%2FwU3QlIMujE2NL1ue7XkPwCd06Hwqd25BYpUmcASY5Br5hGwDYGwa50mqWcBnMgehts4s%2BEs9jcFfNOwY3%2Blenjm4TV4MeIMX%2FKdeoLtnuBv%2B%2Bdfx%2B5N2Yuao2l5iQsgtHne3NhpejYEhh%2F%2FxGHXZfYduUEJFDX3rR0wobS%2FvQY6pgFDsSxpF3CgWup55Tt6hAlARQBY4g%2FdSgva739VXsGEzTaB29KMEdP5Rtzo4sa7XcZAdcHc0Q2bSrjJkVwbofHtIcCJq3c%2BtmhaXtyVktgKnk9YxnLZg4vn4oVhTh%2FfUF7wz7NLobnih0fYJva0VtoOmclR9WoYrRcrcwanOlLJvmHsoMSyFJyxcGNK%2FucqgXC1AIrHgSokF2bwc7cRNkXHUtCzkxu9&X-Amz-Signature=98479803eb40c51105fa4fc3609085dc63c6a33ac5b279ec0f0a5c1ec53b5795&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
