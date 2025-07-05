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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27GZYG4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFbE5RePJmZSs7qfrGWaevNfxh%2FUEWz5fZoxkDfIkzs2AiA2UtFOfBcqAU5Wivf8tFTDisAZZ%2BlrA4p92HYUOC47jSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIjhM%2F2iO41isjP%2BAKtwDAl0Z3LWZ7EceeMRDoBsyp2qMxTyUs3AYhfUoqABa2FF6B4Vl9TCe1PnuU0pucaZLuWdFGKSMXtTsjhF1wT9ToAHAZQnuOTRjohRz9mZ663OuVuuiVQEWSrELkScT6FkuVWggXYGuHd%2BMBDFIF%2FiY7R6OqzhQwWg%2FLXiZ7PHwMfjawh4LlarVF7nOLGQCul2cbeQIuN%2BW28stdT1GyCNAHjMSpQsL9eXZ6ngsI59GYrREdeE4nMAxRfLohoFtT1rUEXJzpeFY%2FmketJmii34diTdODpVIE6AMFzMf3946Mn78PEmAiuMnGxComEKCFg7QDs98b8ARNfG%2FRoghbMcVnx%2Bba%2Fa9utQE64l4fEUEecU8aS6MDoAKrRqboM6u4Sk9GJDVmqqcLw%2FPOKHSuc3cu6q1kQib41OGk%2FKovXKOwyodAYYROb%2BEIuDFs%2Bz05KPbPL%2B5Oq7ZxVn1xI81xNstVNv7HxIaN84XFFDX%2FeRWdDFoFDhbOjBqWJU3r%2FmxYIxphoD1u1n85WzJOz3CcIXl5fFcs2%2FLu2qvY%2FNzF2aQ2YszX3qIkwOPWnI%2BpxzDwqj%2FCSyYv1upD9RwBjPczC50Ea3oNgfstV9vANhW83U3bNF1HpvxxVjixRQGLqAw6KejwwY6pgGbswuRab6BB3scv3O0ck1dzDTXOv9MCoDREyPrWwan1WIBaRK6NzXtvTRRfPWdWzDJCnq6wDBuASgz623KOyMKBaIP34qHA1zZrcamC3nc%2BkwqBFUmQ0xANecTy9zafMm56Derixu8Rok%2BNR2gYhNDclL4Rsuuld2TY6pAPduF3xWZ3NwhVPbQkw39DUYtioYMbsIx8dRRyTYIpOkgq3MEeI4MzTvY&X-Amz-Signature=1a0700be0a374cb142258318fde6208c8897ccfac7abf8ee4ee9ae586b302888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27GZYG4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFbE5RePJmZSs7qfrGWaevNfxh%2FUEWz5fZoxkDfIkzs2AiA2UtFOfBcqAU5Wivf8tFTDisAZZ%2BlrA4p92HYUOC47jSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIjhM%2F2iO41isjP%2BAKtwDAl0Z3LWZ7EceeMRDoBsyp2qMxTyUs3AYhfUoqABa2FF6B4Vl9TCe1PnuU0pucaZLuWdFGKSMXtTsjhF1wT9ToAHAZQnuOTRjohRz9mZ663OuVuuiVQEWSrELkScT6FkuVWggXYGuHd%2BMBDFIF%2FiY7R6OqzhQwWg%2FLXiZ7PHwMfjawh4LlarVF7nOLGQCul2cbeQIuN%2BW28stdT1GyCNAHjMSpQsL9eXZ6ngsI59GYrREdeE4nMAxRfLohoFtT1rUEXJzpeFY%2FmketJmii34diTdODpVIE6AMFzMf3946Mn78PEmAiuMnGxComEKCFg7QDs98b8ARNfG%2FRoghbMcVnx%2Bba%2Fa9utQE64l4fEUEecU8aS6MDoAKrRqboM6u4Sk9GJDVmqqcLw%2FPOKHSuc3cu6q1kQib41OGk%2FKovXKOwyodAYYROb%2BEIuDFs%2Bz05KPbPL%2B5Oq7ZxVn1xI81xNstVNv7HxIaN84XFFDX%2FeRWdDFoFDhbOjBqWJU3r%2FmxYIxphoD1u1n85WzJOz3CcIXl5fFcs2%2FLu2qvY%2FNzF2aQ2YszX3qIkwOPWnI%2BpxzDwqj%2FCSyYv1upD9RwBjPczC50Ea3oNgfstV9vANhW83U3bNF1HpvxxVjixRQGLqAw6KejwwY6pgGbswuRab6BB3scv3O0ck1dzDTXOv9MCoDREyPrWwan1WIBaRK6NzXtvTRRfPWdWzDJCnq6wDBuASgz623KOyMKBaIP34qHA1zZrcamC3nc%2BkwqBFUmQ0xANecTy9zafMm56Derixu8Rok%2BNR2gYhNDclL4Rsuuld2TY6pAPduF3xWZ3NwhVPbQkw39DUYtioYMbsIx8dRRyTYIpOkgq3MEeI4MzTvY&X-Amz-Signature=ae621d0f4df99cb2f3cd3e54879f25a5599ea750c0a62461526417778e99d1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27GZYG4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFbE5RePJmZSs7qfrGWaevNfxh%2FUEWz5fZoxkDfIkzs2AiA2UtFOfBcqAU5Wivf8tFTDisAZZ%2BlrA4p92HYUOC47jSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMIjhM%2F2iO41isjP%2BAKtwDAl0Z3LWZ7EceeMRDoBsyp2qMxTyUs3AYhfUoqABa2FF6B4Vl9TCe1PnuU0pucaZLuWdFGKSMXtTsjhF1wT9ToAHAZQnuOTRjohRz9mZ663OuVuuiVQEWSrELkScT6FkuVWggXYGuHd%2BMBDFIF%2FiY7R6OqzhQwWg%2FLXiZ7PHwMfjawh4LlarVF7nOLGQCul2cbeQIuN%2BW28stdT1GyCNAHjMSpQsL9eXZ6ngsI59GYrREdeE4nMAxRfLohoFtT1rUEXJzpeFY%2FmketJmii34diTdODpVIE6AMFzMf3946Mn78PEmAiuMnGxComEKCFg7QDs98b8ARNfG%2FRoghbMcVnx%2Bba%2Fa9utQE64l4fEUEecU8aS6MDoAKrRqboM6u4Sk9GJDVmqqcLw%2FPOKHSuc3cu6q1kQib41OGk%2FKovXKOwyodAYYROb%2BEIuDFs%2Bz05KPbPL%2B5Oq7ZxVn1xI81xNstVNv7HxIaN84XFFDX%2FeRWdDFoFDhbOjBqWJU3r%2FmxYIxphoD1u1n85WzJOz3CcIXl5fFcs2%2FLu2qvY%2FNzF2aQ2YszX3qIkwOPWnI%2BpxzDwqj%2FCSyYv1upD9RwBjPczC50Ea3oNgfstV9vANhW83U3bNF1HpvxxVjixRQGLqAw6KejwwY6pgGbswuRab6BB3scv3O0ck1dzDTXOv9MCoDREyPrWwan1WIBaRK6NzXtvTRRfPWdWzDJCnq6wDBuASgz623KOyMKBaIP34qHA1zZrcamC3nc%2BkwqBFUmQ0xANecTy9zafMm56Derixu8Rok%2BNR2gYhNDclL4Rsuuld2TY6pAPduF3xWZ3NwhVPbQkw39DUYtioYMbsIx8dRRyTYIpOkgq3MEeI4MzTvY&X-Amz-Signature=841db7ce19f147b7a9325ba072fd1a97455b26641d0175252323a65af5b503cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
