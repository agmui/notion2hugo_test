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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYHA6UI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCzHC2WLsygAnLJd0hcyveG8DHwJGl2zGvvLCSQN6%2BNVQIgQ4nPEUbQ00iBTxZtIH%2BT5qJTgCv2pEbZOCD5MPMCXpQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWzdAaAfWkEl0NuLSrcAwfURrBJowFprbOOBhk6b%2FowLfJXlrL24Jz5GLZNs2Q7%2BXvg5%2FpSnUfYcsbPdinzK%2F5Jyko7oeUdCtW%2BBgYCHsEdqmAv3%2FTYYzJfTMi1e0h3eLbeynT0N05F1sR0osQ%2BmQYpjQHLd7Ogou8ab521KgsLPczgsIaI8%2BdF9FoxLccyjTFWilpwp%2Bypl2soUqJCijnfu74az2nNwstkhP5QmRPa1JXBTL%2BV1Gnf1Ak454H63%2BPsgWjk%2FlLFLjdO%2FmEimbw2Uqk2hi3c1X5BLS5nssZiVJ4DUdcKC4Km7cmfFh2ihp5wsOkEwwdE91Fj106m%2FDtpA%2BX1KDZlP1C9Ct68crZp9ZF%2FV2EOhP5KViG9UR12NG0zxuifbVY6FDSAP7wN0p5PbdcYF0luQIPwyVOPfVkx7kql7vhNZXjwxM5EnNwAdk5jrmaLMM4BNLPuMUG5ryC%2FsuupthSPqU4jFp5DIqcf1G1VZXAbE%2FRxLhkIAFIz3PR3r9CtGkFkOeYKcYWNLgNeDxSQ0iVD1LouPD%2FqKTDpQKNtk%2Bn6QeoYLKlGnuWQbafY8DRS5nTicWeRWeYsW4ztCZCSs1mD6wGbjvxhFoOrYYDVctPF99mVfmpvU4nXv3ok6hVYZ%2FNUcQh0MPSThr4GOqUB9AidfUm7YT9f0sNNbghw7mV4SX8d0JT9JSLP5MS2t26IuOnjfifaYu6VKe03W9zt8rP3TUwOgAj14Tw9YSeVP1Wm7n08PkHXdHuWpJiJ%2B3Uh5QfeCvAHxhAFTJiZDgrRwaYSnoLbiOIhK6jXArLPjTYlviRKQxoR2aw5V2lny6Gmg7vRHojNF%2BYt0yRS%2F%2FF9OStNYh1pHgsQi1nTnspCIWokWP8n&X-Amz-Signature=5331b63519034fd4081f731fe20a997a8930bc7b9b3dd41def4c2a7e49ef165a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYHA6UI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCzHC2WLsygAnLJd0hcyveG8DHwJGl2zGvvLCSQN6%2BNVQIgQ4nPEUbQ00iBTxZtIH%2BT5qJTgCv2pEbZOCD5MPMCXpQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWzdAaAfWkEl0NuLSrcAwfURrBJowFprbOOBhk6b%2FowLfJXlrL24Jz5GLZNs2Q7%2BXvg5%2FpSnUfYcsbPdinzK%2F5Jyko7oeUdCtW%2BBgYCHsEdqmAv3%2FTYYzJfTMi1e0h3eLbeynT0N05F1sR0osQ%2BmQYpjQHLd7Ogou8ab521KgsLPczgsIaI8%2BdF9FoxLccyjTFWilpwp%2Bypl2soUqJCijnfu74az2nNwstkhP5QmRPa1JXBTL%2BV1Gnf1Ak454H63%2BPsgWjk%2FlLFLjdO%2FmEimbw2Uqk2hi3c1X5BLS5nssZiVJ4DUdcKC4Km7cmfFh2ihp5wsOkEwwdE91Fj106m%2FDtpA%2BX1KDZlP1C9Ct68crZp9ZF%2FV2EOhP5KViG9UR12NG0zxuifbVY6FDSAP7wN0p5PbdcYF0luQIPwyVOPfVkx7kql7vhNZXjwxM5EnNwAdk5jrmaLMM4BNLPuMUG5ryC%2FsuupthSPqU4jFp5DIqcf1G1VZXAbE%2FRxLhkIAFIz3PR3r9CtGkFkOeYKcYWNLgNeDxSQ0iVD1LouPD%2FqKTDpQKNtk%2Bn6QeoYLKlGnuWQbafY8DRS5nTicWeRWeYsW4ztCZCSs1mD6wGbjvxhFoOrYYDVctPF99mVfmpvU4nXv3ok6hVYZ%2FNUcQh0MPSThr4GOqUB9AidfUm7YT9f0sNNbghw7mV4SX8d0JT9JSLP5MS2t26IuOnjfifaYu6VKe03W9zt8rP3TUwOgAj14Tw9YSeVP1Wm7n08PkHXdHuWpJiJ%2B3Uh5QfeCvAHxhAFTJiZDgrRwaYSnoLbiOIhK6jXArLPjTYlviRKQxoR2aw5V2lny6Gmg7vRHojNF%2BYt0yRS%2F%2FF9OStNYh1pHgsQi1nTnspCIWokWP8n&X-Amz-Signature=c5dde7d2215be15ffc8cc4bc0e81ea7122f016adebdb90609411f79dd128626c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYHA6UI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCzHC2WLsygAnLJd0hcyveG8DHwJGl2zGvvLCSQN6%2BNVQIgQ4nPEUbQ00iBTxZtIH%2BT5qJTgCv2pEbZOCD5MPMCXpQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWzdAaAfWkEl0NuLSrcAwfURrBJowFprbOOBhk6b%2FowLfJXlrL24Jz5GLZNs2Q7%2BXvg5%2FpSnUfYcsbPdinzK%2F5Jyko7oeUdCtW%2BBgYCHsEdqmAv3%2FTYYzJfTMi1e0h3eLbeynT0N05F1sR0osQ%2BmQYpjQHLd7Ogou8ab521KgsLPczgsIaI8%2BdF9FoxLccyjTFWilpwp%2Bypl2soUqJCijnfu74az2nNwstkhP5QmRPa1JXBTL%2BV1Gnf1Ak454H63%2BPsgWjk%2FlLFLjdO%2FmEimbw2Uqk2hi3c1X5BLS5nssZiVJ4DUdcKC4Km7cmfFh2ihp5wsOkEwwdE91Fj106m%2FDtpA%2BX1KDZlP1C9Ct68crZp9ZF%2FV2EOhP5KViG9UR12NG0zxuifbVY6FDSAP7wN0p5PbdcYF0luQIPwyVOPfVkx7kql7vhNZXjwxM5EnNwAdk5jrmaLMM4BNLPuMUG5ryC%2FsuupthSPqU4jFp5DIqcf1G1VZXAbE%2FRxLhkIAFIz3PR3r9CtGkFkOeYKcYWNLgNeDxSQ0iVD1LouPD%2FqKTDpQKNtk%2Bn6QeoYLKlGnuWQbafY8DRS5nTicWeRWeYsW4ztCZCSs1mD6wGbjvxhFoOrYYDVctPF99mVfmpvU4nXv3ok6hVYZ%2FNUcQh0MPSThr4GOqUB9AidfUm7YT9f0sNNbghw7mV4SX8d0JT9JSLP5MS2t26IuOnjfifaYu6VKe03W9zt8rP3TUwOgAj14Tw9YSeVP1Wm7n08PkHXdHuWpJiJ%2B3Uh5QfeCvAHxhAFTJiZDgrRwaYSnoLbiOIhK6jXArLPjTYlviRKQxoR2aw5V2lny6Gmg7vRHojNF%2BYt0yRS%2F%2FF9OStNYh1pHgsQi1nTnspCIWokWP8n&X-Amz-Signature=73567f4f6e8a1d4db1e345846a0347660dff3cb2dba2c94a18bae89e1fee210f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
