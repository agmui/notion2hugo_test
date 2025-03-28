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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGG4XRQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRXjK36rCXZ%2FNxup7ZqZqxaCW%2B2v5PRTJkZzst%2FDdpxAiB0It5f%2BVC%2F%2F9i067v4PSMgYr3TCbBods0xsaO4IT7ETCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcU47XMdArBisrL3OKtwDxmtuLyRJIw92yXs86ie2j1ps1aMm4Ak15WPySlhWpcnnwRqr1ulzY0KeQhNG0d3%2BoVKWtgRFaTLvbh3X2adK3csA%2FZ36ckB17ofdRW6V%2FDykeoJ19MOXlf%2F5dDbvfaZL36wbRJMo0rIpDtpo22OgqiGDQdNyR2QtUOgMy8tyrWi2GJlDmu85E8Cc91%2BaYTrfi7bq03NHfNFZ3bNE25zsbO0NKFXMqQCcuVe7P7UkS7WP%2BocfTdtfyMkZ4DBzROlo4qPAQ2%2F0o5mvhH719YQTSpFfrKm4fD693fec4cD86NcOsSfCCVkieTYvKpceypc7Wix5aoZKyJXRlYo6UfNk8bobRpzBUE2m8FVRD%2BR%2F6biRv%2FxSbd9%2FPoSL%2BJuuAFCNhz20D4DwdDjJzk2zcYgOgIVANYzVM5HeQiAwV8bNDlZ3WJbOTT6v7%2FOO55f%2BEzkeYGqMY49ssyVzVGC3Fd77Zto0x6gV32tyWG32HWX2cAb6qW0%2FLY%2FOPKpQp428iNEcgW%2Fu7RdI%2FSwYfdDnn1UPa9vpKklo79EXcyWk2If%2BVSPThCtOBr2QEUnl6ZQPWxQjpchfRSlcmZzaJEK1pr0rl4jw4zKZfzDGjigy%2F9Tzd0zTBDDUf6b3IbItb7Aw0NuXvwY6pgFP%2BdlQQgZv8XniAX6eE6CM2Th6V02Ihmu3eY73NrJvRisoZHnnVpnn4aSKDCMszsGXewy5vy9is08RVJueO9i%2Bz%2FEnTVXh5Z%2FVMq76PMM%2B0H8oQzZtysYwgiqEzjWXrNlEgci%2BxPRJdW851QMYUi%2FdlasiK6cB2KsjW9CkV4lNuAdBgpAg7JMbSEiVZpRVftJf5y4jlkI%2FHqY1IcRYf5utvUWAZCkc&X-Amz-Signature=79e1d0bed2b752b1d3a2a195a68b6e0d177aa38a551a7ebf496c21d5889b0df8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGG4XRQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRXjK36rCXZ%2FNxup7ZqZqxaCW%2B2v5PRTJkZzst%2FDdpxAiB0It5f%2BVC%2F%2F9i067v4PSMgYr3TCbBods0xsaO4IT7ETCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcU47XMdArBisrL3OKtwDxmtuLyRJIw92yXs86ie2j1ps1aMm4Ak15WPySlhWpcnnwRqr1ulzY0KeQhNG0d3%2BoVKWtgRFaTLvbh3X2adK3csA%2FZ36ckB17ofdRW6V%2FDykeoJ19MOXlf%2F5dDbvfaZL36wbRJMo0rIpDtpo22OgqiGDQdNyR2QtUOgMy8tyrWi2GJlDmu85E8Cc91%2BaYTrfi7bq03NHfNFZ3bNE25zsbO0NKFXMqQCcuVe7P7UkS7WP%2BocfTdtfyMkZ4DBzROlo4qPAQ2%2F0o5mvhH719YQTSpFfrKm4fD693fec4cD86NcOsSfCCVkieTYvKpceypc7Wix5aoZKyJXRlYo6UfNk8bobRpzBUE2m8FVRD%2BR%2F6biRv%2FxSbd9%2FPoSL%2BJuuAFCNhz20D4DwdDjJzk2zcYgOgIVANYzVM5HeQiAwV8bNDlZ3WJbOTT6v7%2FOO55f%2BEzkeYGqMY49ssyVzVGC3Fd77Zto0x6gV32tyWG32HWX2cAb6qW0%2FLY%2FOPKpQp428iNEcgW%2Fu7RdI%2FSwYfdDnn1UPa9vpKklo79EXcyWk2If%2BVSPThCtOBr2QEUnl6ZQPWxQjpchfRSlcmZzaJEK1pr0rl4jw4zKZfzDGjigy%2F9Tzd0zTBDDUf6b3IbItb7Aw0NuXvwY6pgFP%2BdlQQgZv8XniAX6eE6CM2Th6V02Ihmu3eY73NrJvRisoZHnnVpnn4aSKDCMszsGXewy5vy9is08RVJueO9i%2Bz%2FEnTVXh5Z%2FVMq76PMM%2B0H8oQzZtysYwgiqEzjWXrNlEgci%2BxPRJdW851QMYUi%2FdlasiK6cB2KsjW9CkV4lNuAdBgpAg7JMbSEiVZpRVftJf5y4jlkI%2FHqY1IcRYf5utvUWAZCkc&X-Amz-Signature=a73ec20eb127f214749691c913a185caa408988bce6344c122e720ad23a188d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGG4XRQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRXjK36rCXZ%2FNxup7ZqZqxaCW%2B2v5PRTJkZzst%2FDdpxAiB0It5f%2BVC%2F%2F9i067v4PSMgYr3TCbBods0xsaO4IT7ETCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcU47XMdArBisrL3OKtwDxmtuLyRJIw92yXs86ie2j1ps1aMm4Ak15WPySlhWpcnnwRqr1ulzY0KeQhNG0d3%2BoVKWtgRFaTLvbh3X2adK3csA%2FZ36ckB17ofdRW6V%2FDykeoJ19MOXlf%2F5dDbvfaZL36wbRJMo0rIpDtpo22OgqiGDQdNyR2QtUOgMy8tyrWi2GJlDmu85E8Cc91%2BaYTrfi7bq03NHfNFZ3bNE25zsbO0NKFXMqQCcuVe7P7UkS7WP%2BocfTdtfyMkZ4DBzROlo4qPAQ2%2F0o5mvhH719YQTSpFfrKm4fD693fec4cD86NcOsSfCCVkieTYvKpceypc7Wix5aoZKyJXRlYo6UfNk8bobRpzBUE2m8FVRD%2BR%2F6biRv%2FxSbd9%2FPoSL%2BJuuAFCNhz20D4DwdDjJzk2zcYgOgIVANYzVM5HeQiAwV8bNDlZ3WJbOTT6v7%2FOO55f%2BEzkeYGqMY49ssyVzVGC3Fd77Zto0x6gV32tyWG32HWX2cAb6qW0%2FLY%2FOPKpQp428iNEcgW%2Fu7RdI%2FSwYfdDnn1UPa9vpKklo79EXcyWk2If%2BVSPThCtOBr2QEUnl6ZQPWxQjpchfRSlcmZzaJEK1pr0rl4jw4zKZfzDGjigy%2F9Tzd0zTBDDUf6b3IbItb7Aw0NuXvwY6pgFP%2BdlQQgZv8XniAX6eE6CM2Th6V02Ihmu3eY73NrJvRisoZHnnVpnn4aSKDCMszsGXewy5vy9is08RVJueO9i%2Bz%2FEnTVXh5Z%2FVMq76PMM%2B0H8oQzZtysYwgiqEzjWXrNlEgci%2BxPRJdW851QMYUi%2FdlasiK6cB2KsjW9CkV4lNuAdBgpAg7JMbSEiVZpRVftJf5y4jlkI%2FHqY1IcRYf5utvUWAZCkc&X-Amz-Signature=32244d8d28471566b62a0aac750a2c7c5ddd795cc2fbcf14af20472c81081478&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
