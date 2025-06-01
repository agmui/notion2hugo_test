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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISXFASO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAoU%2FORxG0l7QE7pMKZHzov%2Fy9VKSv5mwvPwQPRvz%2Fb4AiEAkUZr95CV%2BzHc4a59x8rkndUWIthAHbxor4ICwoLuOhYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIGxyPbi62QZ0kE3yrcA7iM%2F0Zfws41N4nD5BLOzldSBg1rt7i4%2FsqoZEXOZ%2Bl9ub0KqO3SjkpFzvb1CHrV7DLWLbM8Eypwd3DlUgyu4xVF5lPFeS0bF6wSbvwnxtmaMetU0IjdsGf9w4Rt5hvOnZrMR5yreb83zaqH%2Bu74gD8%2B0OtRVaYwVYE0a%2BhzFr%2FN8etrpj924jIkp%2BlcJgfgYqJZ%2BPRD8ChdeKjU077iaiSqJN7ROhQUW3PCzFW7Va2maD0cR5iWnBuOp%2B1yOtGqast%2BKokPqZTp18uinuzUQxT6wVQr4Wh84H7nTVP2LtbKppV7ZV6z8Y%2BnxNic2Y3pAqjrXEwh77nba46f5SBZ%2FOSL3SP7UvC42vElg0Yr2gSJsJpH690kv0IspnumqlGrwtPGYm8KVVxvzeTiqvZgFW0StJEmzrXi1fDW%2Bol7rdzKiajl4KPZ%2BECCW6kSqLjqVo6NAn14TYlh6jra6zoBureX0WsYM%2FeWZfOGNADLX2q8r9oS17Pcif%2FfqvYbaKCDDyyIwk79F65rrbio54Ot4vGBC053D8BrLF%2Ftecdzm5%2FuhIQnDeu1QdS%2BsUFmDC37RDryimkKrdwSQu%2BJt0gsNG34teRgQFnYT2xrF84wz4FnFT379p79U6aVi7x9MOuq8cEGOqUBo83xR8kHF%2FruYvTAfwnd4lukf20mPqiTqeexwvNzdW4%2BpKVjQdcrGMKMMLWsozeq4CPG4vjDVQ5nHztlBW6iDuelQo43%2FXTjk4ToY9iL5M8mYGFjLTalv%2FZPGz1PKJoJhLwGcasGYvB%2BSgulg9LXnfBT1X0v%2FW7Lvvg%2FmtHDhqinawuFOIgal4lLcT6jhAvuzmBxSoamC1F%2F4KFUhI2JIsnWrMnI&X-Amz-Signature=24ce544745b190914f21d85b3ad644514cbc503db69255b578f6c1cb42cb4dab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISXFASO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAoU%2FORxG0l7QE7pMKZHzov%2Fy9VKSv5mwvPwQPRvz%2Fb4AiEAkUZr95CV%2BzHc4a59x8rkndUWIthAHbxor4ICwoLuOhYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIGxyPbi62QZ0kE3yrcA7iM%2F0Zfws41N4nD5BLOzldSBg1rt7i4%2FsqoZEXOZ%2Bl9ub0KqO3SjkpFzvb1CHrV7DLWLbM8Eypwd3DlUgyu4xVF5lPFeS0bF6wSbvwnxtmaMetU0IjdsGf9w4Rt5hvOnZrMR5yreb83zaqH%2Bu74gD8%2B0OtRVaYwVYE0a%2BhzFr%2FN8etrpj924jIkp%2BlcJgfgYqJZ%2BPRD8ChdeKjU077iaiSqJN7ROhQUW3PCzFW7Va2maD0cR5iWnBuOp%2B1yOtGqast%2BKokPqZTp18uinuzUQxT6wVQr4Wh84H7nTVP2LtbKppV7ZV6z8Y%2BnxNic2Y3pAqjrXEwh77nba46f5SBZ%2FOSL3SP7UvC42vElg0Yr2gSJsJpH690kv0IspnumqlGrwtPGYm8KVVxvzeTiqvZgFW0StJEmzrXi1fDW%2Bol7rdzKiajl4KPZ%2BECCW6kSqLjqVo6NAn14TYlh6jra6zoBureX0WsYM%2FeWZfOGNADLX2q8r9oS17Pcif%2FfqvYbaKCDDyyIwk79F65rrbio54Ot4vGBC053D8BrLF%2Ftecdzm5%2FuhIQnDeu1QdS%2BsUFmDC37RDryimkKrdwSQu%2BJt0gsNG34teRgQFnYT2xrF84wz4FnFT379p79U6aVi7x9MOuq8cEGOqUBo83xR8kHF%2FruYvTAfwnd4lukf20mPqiTqeexwvNzdW4%2BpKVjQdcrGMKMMLWsozeq4CPG4vjDVQ5nHztlBW6iDuelQo43%2FXTjk4ToY9iL5M8mYGFjLTalv%2FZPGz1PKJoJhLwGcasGYvB%2BSgulg9LXnfBT1X0v%2FW7Lvvg%2FmtHDhqinawuFOIgal4lLcT6jhAvuzmBxSoamC1F%2F4KFUhI2JIsnWrMnI&X-Amz-Signature=0baf58f61f7eb9487f0761421cb5a023faf9387405eea5d5252c5d64bedcfbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISXFASO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAoU%2FORxG0l7QE7pMKZHzov%2Fy9VKSv5mwvPwQPRvz%2Fb4AiEAkUZr95CV%2BzHc4a59x8rkndUWIthAHbxor4ICwoLuOhYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIGxyPbi62QZ0kE3yrcA7iM%2F0Zfws41N4nD5BLOzldSBg1rt7i4%2FsqoZEXOZ%2Bl9ub0KqO3SjkpFzvb1CHrV7DLWLbM8Eypwd3DlUgyu4xVF5lPFeS0bF6wSbvwnxtmaMetU0IjdsGf9w4Rt5hvOnZrMR5yreb83zaqH%2Bu74gD8%2B0OtRVaYwVYE0a%2BhzFr%2FN8etrpj924jIkp%2BlcJgfgYqJZ%2BPRD8ChdeKjU077iaiSqJN7ROhQUW3PCzFW7Va2maD0cR5iWnBuOp%2B1yOtGqast%2BKokPqZTp18uinuzUQxT6wVQr4Wh84H7nTVP2LtbKppV7ZV6z8Y%2BnxNic2Y3pAqjrXEwh77nba46f5SBZ%2FOSL3SP7UvC42vElg0Yr2gSJsJpH690kv0IspnumqlGrwtPGYm8KVVxvzeTiqvZgFW0StJEmzrXi1fDW%2Bol7rdzKiajl4KPZ%2BECCW6kSqLjqVo6NAn14TYlh6jra6zoBureX0WsYM%2FeWZfOGNADLX2q8r9oS17Pcif%2FfqvYbaKCDDyyIwk79F65rrbio54Ot4vGBC053D8BrLF%2Ftecdzm5%2FuhIQnDeu1QdS%2BsUFmDC37RDryimkKrdwSQu%2BJt0gsNG34teRgQFnYT2xrF84wz4FnFT379p79U6aVi7x9MOuq8cEGOqUBo83xR8kHF%2FruYvTAfwnd4lukf20mPqiTqeexwvNzdW4%2BpKVjQdcrGMKMMLWsozeq4CPG4vjDVQ5nHztlBW6iDuelQo43%2FXTjk4ToY9iL5M8mYGFjLTalv%2FZPGz1PKJoJhLwGcasGYvB%2BSgulg9LXnfBT1X0v%2FW7Lvvg%2FmtHDhqinawuFOIgal4lLcT6jhAvuzmBxSoamC1F%2F4KFUhI2JIsnWrMnI&X-Amz-Signature=2347c5162b99adcdc379b8965b173ebc1c9c7d725192f3ac94a678387e7daad0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
