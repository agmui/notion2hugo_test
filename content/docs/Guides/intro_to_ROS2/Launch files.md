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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZYEQYX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDAYsI121iKfCjMR22XdxAzEl4kUNgOuVEqg5hoomvSWAiAMICHjgHXpCl6iAF74keXePpypP%2BzgLOei6KXd5NfBhyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNLZUIyzFFKk4JyxKtwDU%2BznwXczAd7orHPF3QbPsQu8L%2BSfBbgbQm7DUcp20VgfdvRi%2FSU360ERd%2BgnWYflQlvusiS1dJxUb%2B1c25j8rbXWC1yE2YQ1cZ%2BJQdqQv22FruzTCwUgslXerueelUipdpC1IoWfsbiL2%2FFuN2JPeM5PM0BH%2BRK006jezTK%2FoJNIQvOJKBdub1qe6cOtZ%2BVL1kNJLMeoVJrS1VQCUHTpQbfcoFmtYynCsq0Ql%2FtGA%2Bo7mAdZj3IzZt%2Be8UOAPSZBIepIJsufdAjm%2B2aec0ZPf4lEUQ8qM09gAgv7MpuM1klHvYKP0vLuLtd5j9b95LC0x0jGSvxhNCmIV6ljUYEfYG4SbCrwjV%2B5LkVr8weVv%2FWt9W4YIbAoqehN1NV2vJW9mI5pjv0Xar4s0IhJPopU2zPp4JhJc%2FRDtZ7zIre8MmO9XOv39IksFcmVP%2FTZAJC2cxLuZnXZ4PTWfBvnZlaCaM8o36bdO1d7Kh296ABcel8onqbIlE7nxFjD4WhWwisCB9VOJpFzFZ%2BxX%2F3JLe%2FyO60fHhJKyvbw%2BJyEXhEb3zRYOgtOxRYq1uSnc6r7XNJF9RF%2BgI2piUQFlwdX%2FNG6MozL8jp8NukopbM9UtCEf5n%2BmoLgQ49spo6jLEownMvpvwY6pgG3%2B99m28H2R2vwqF45s9tf2p86RCStDMRFnjY07Oo3Hlhyz69OPkyy4IPBxKRalTeH2DFcMrflVptoLRdddSmz2YuhN6aBV%2B40wRwxlFL0y7jlzZ1Y20VnoyOyU0Ts02HnL4u6GTYQ81wfm4KvNrt3lzcCVnR5248QcpD6UfKQsaLZdsXWBvBv7fkiQhzntuCNHLb0t2oWK2zCrwtNSHGpiPK99Vrm&X-Amz-Signature=646631f424d163dae82c0c414ffcaa515a09c83b4b99782c2dd3d44a18ffd097&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZYEQYX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDAYsI121iKfCjMR22XdxAzEl4kUNgOuVEqg5hoomvSWAiAMICHjgHXpCl6iAF74keXePpypP%2BzgLOei6KXd5NfBhyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNLZUIyzFFKk4JyxKtwDU%2BznwXczAd7orHPF3QbPsQu8L%2BSfBbgbQm7DUcp20VgfdvRi%2FSU360ERd%2BgnWYflQlvusiS1dJxUb%2B1c25j8rbXWC1yE2YQ1cZ%2BJQdqQv22FruzTCwUgslXerueelUipdpC1IoWfsbiL2%2FFuN2JPeM5PM0BH%2BRK006jezTK%2FoJNIQvOJKBdub1qe6cOtZ%2BVL1kNJLMeoVJrS1VQCUHTpQbfcoFmtYynCsq0Ql%2FtGA%2Bo7mAdZj3IzZt%2Be8UOAPSZBIepIJsufdAjm%2B2aec0ZPf4lEUQ8qM09gAgv7MpuM1klHvYKP0vLuLtd5j9b95LC0x0jGSvxhNCmIV6ljUYEfYG4SbCrwjV%2B5LkVr8weVv%2FWt9W4YIbAoqehN1NV2vJW9mI5pjv0Xar4s0IhJPopU2zPp4JhJc%2FRDtZ7zIre8MmO9XOv39IksFcmVP%2FTZAJC2cxLuZnXZ4PTWfBvnZlaCaM8o36bdO1d7Kh296ABcel8onqbIlE7nxFjD4WhWwisCB9VOJpFzFZ%2BxX%2F3JLe%2FyO60fHhJKyvbw%2BJyEXhEb3zRYOgtOxRYq1uSnc6r7XNJF9RF%2BgI2piUQFlwdX%2FNG6MozL8jp8NukopbM9UtCEf5n%2BmoLgQ49spo6jLEownMvpvwY6pgG3%2B99m28H2R2vwqF45s9tf2p86RCStDMRFnjY07Oo3Hlhyz69OPkyy4IPBxKRalTeH2DFcMrflVptoLRdddSmz2YuhN6aBV%2B40wRwxlFL0y7jlzZ1Y20VnoyOyU0Ts02HnL4u6GTYQ81wfm4KvNrt3lzcCVnR5248QcpD6UfKQsaLZdsXWBvBv7fkiQhzntuCNHLb0t2oWK2zCrwtNSHGpiPK99Vrm&X-Amz-Signature=56588c90b5aa14d9ef92078d637cdc36735456ec1b45908e23f6fd992d907be2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZYEQYX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDAYsI121iKfCjMR22XdxAzEl4kUNgOuVEqg5hoomvSWAiAMICHjgHXpCl6iAF74keXePpypP%2BzgLOei6KXd5NfBhyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFNLZUIyzFFKk4JyxKtwDU%2BznwXczAd7orHPF3QbPsQu8L%2BSfBbgbQm7DUcp20VgfdvRi%2FSU360ERd%2BgnWYflQlvusiS1dJxUb%2B1c25j8rbXWC1yE2YQ1cZ%2BJQdqQv22FruzTCwUgslXerueelUipdpC1IoWfsbiL2%2FFuN2JPeM5PM0BH%2BRK006jezTK%2FoJNIQvOJKBdub1qe6cOtZ%2BVL1kNJLMeoVJrS1VQCUHTpQbfcoFmtYynCsq0Ql%2FtGA%2Bo7mAdZj3IzZt%2Be8UOAPSZBIepIJsufdAjm%2B2aec0ZPf4lEUQ8qM09gAgv7MpuM1klHvYKP0vLuLtd5j9b95LC0x0jGSvxhNCmIV6ljUYEfYG4SbCrwjV%2B5LkVr8weVv%2FWt9W4YIbAoqehN1NV2vJW9mI5pjv0Xar4s0IhJPopU2zPp4JhJc%2FRDtZ7zIre8MmO9XOv39IksFcmVP%2FTZAJC2cxLuZnXZ4PTWfBvnZlaCaM8o36bdO1d7Kh296ABcel8onqbIlE7nxFjD4WhWwisCB9VOJpFzFZ%2BxX%2F3JLe%2FyO60fHhJKyvbw%2BJyEXhEb3zRYOgtOxRYq1uSnc6r7XNJF9RF%2BgI2piUQFlwdX%2FNG6MozL8jp8NukopbM9UtCEf5n%2BmoLgQ49spo6jLEownMvpvwY6pgG3%2B99m28H2R2vwqF45s9tf2p86RCStDMRFnjY07Oo3Hlhyz69OPkyy4IPBxKRalTeH2DFcMrflVptoLRdddSmz2YuhN6aBV%2B40wRwxlFL0y7jlzZ1Y20VnoyOyU0Ts02HnL4u6GTYQ81wfm4KvNrt3lzcCVnR5248QcpD6UfKQsaLZdsXWBvBv7fkiQhzntuCNHLb0t2oWK2zCrwtNSHGpiPK99Vrm&X-Amz-Signature=aabec6fdd01b015aa5a0a2238a5e15e86b8ae6de7de9e9fea0107e66e8f4b059&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
