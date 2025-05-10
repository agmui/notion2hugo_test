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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEYHI3F%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdREmV3jl7uVNPWEaIBIUJdvvJxLyhaEEJkeHwB9jTpAiA%2BpBMsOhru3axiL4hcssjyCNrc330EhqTEOQt8%2F3f%2BgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYZZh1W1pyRHDUl1KtwDX%2F%2B0MxQAVec0WifwsItGbh7SkEJKOECpejQO0%2F9KMRUIP9TVI87lnpWVp6H7wOuNvbRQ2I1jfEEQ9a3MeeBOZNAMAPa7WyMDWvX3%2BuYPwLFoymuUj5yrJi0sbc1oF7Iy6mwvVIqEJxXa465mLWS%2BCAYJOiSwa0eTDSfqMr9FZ%2FfflPNIkT0B3RtHVf3Jy4u0kjmaenYkCUrDRbq%2FnD5LuT%2BK%2BVW4IxYePqOJ90LhfJl1BkZMkqlc%2F2vRSjFYm4erKRXXc8gsIdA1fEJSTovNdMyjkEf3xtBXdNkQHFNZixdQYIFnJoInNef29NGGmz9z7IsC4GP4JyTnhfsauZR0cJ%2FsxNTj1infX4oS3LqpgKWMoHwnijWj2zjUDBWr56I4GS938ot092Y9J%2B2kLfoyp96pH%2FURaWPvwdu%2BAg8RBQ3ldRaD%2F2itMyyLU5BLHXRknSoLNC2NBWOwsuPVo0q7aMRu1qpU0qd37GYdNOhrHn3B0%2FbcM76Jaj5UXZHKVEvRWPesSX%2Fv8iT2n5uP3Y0hX8T3Xg05Ud7nClWggooqBCX5vKQjfW8kT318Fkn14LuXxO7CTp8NsAeqQvD7BJyWLePYi7EizGKJRD7GRgS8lU5GMM%2BgrGexo1vTspkw5qD7wAY6pgHEorTCjlp8r8P%2BRkVIBLONlaMaKuajhWv%2Fic4R0r4t73wGmTcc2CINvskPGSYfchL1ZtKTHDihMlIAljj%2Bcliel0lhMDqZr1lhtVQfkPILMwSX7G2yKtO1Sn0lYIiT49EDhYF%2FuAmQyohDARtMjubVmOHB5SlJMf51hDWd%2BOlBa%2BhtTkRKmTK67kZPt4Hq4YQ35Hcu0HW260jqN1%2FqmgI3GwfC4T%2B%2B&X-Amz-Signature=9492112aa4d9c4d5e436d9aaaa68328c89869910c4db7b2c71e9a320f9fcdf3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEYHI3F%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdREmV3jl7uVNPWEaIBIUJdvvJxLyhaEEJkeHwB9jTpAiA%2BpBMsOhru3axiL4hcssjyCNrc330EhqTEOQt8%2F3f%2BgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYZZh1W1pyRHDUl1KtwDX%2F%2B0MxQAVec0WifwsItGbh7SkEJKOECpejQO0%2F9KMRUIP9TVI87lnpWVp6H7wOuNvbRQ2I1jfEEQ9a3MeeBOZNAMAPa7WyMDWvX3%2BuYPwLFoymuUj5yrJi0sbc1oF7Iy6mwvVIqEJxXa465mLWS%2BCAYJOiSwa0eTDSfqMr9FZ%2FfflPNIkT0B3RtHVf3Jy4u0kjmaenYkCUrDRbq%2FnD5LuT%2BK%2BVW4IxYePqOJ90LhfJl1BkZMkqlc%2F2vRSjFYm4erKRXXc8gsIdA1fEJSTovNdMyjkEf3xtBXdNkQHFNZixdQYIFnJoInNef29NGGmz9z7IsC4GP4JyTnhfsauZR0cJ%2FsxNTj1infX4oS3LqpgKWMoHwnijWj2zjUDBWr56I4GS938ot092Y9J%2B2kLfoyp96pH%2FURaWPvwdu%2BAg8RBQ3ldRaD%2F2itMyyLU5BLHXRknSoLNC2NBWOwsuPVo0q7aMRu1qpU0qd37GYdNOhrHn3B0%2FbcM76Jaj5UXZHKVEvRWPesSX%2Fv8iT2n5uP3Y0hX8T3Xg05Ud7nClWggooqBCX5vKQjfW8kT318Fkn14LuXxO7CTp8NsAeqQvD7BJyWLePYi7EizGKJRD7GRgS8lU5GMM%2BgrGexo1vTspkw5qD7wAY6pgHEorTCjlp8r8P%2BRkVIBLONlaMaKuajhWv%2Fic4R0r4t73wGmTcc2CINvskPGSYfchL1ZtKTHDihMlIAljj%2Bcliel0lhMDqZr1lhtVQfkPILMwSX7G2yKtO1Sn0lYIiT49EDhYF%2FuAmQyohDARtMjubVmOHB5SlJMf51hDWd%2BOlBa%2BhtTkRKmTK67kZPt4Hq4YQ35Hcu0HW260jqN1%2FqmgI3GwfC4T%2B%2B&X-Amz-Signature=04a61c86e7bf639b04202f85867a12f8e7aeae5c3d870080a2db66acdf783534&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEYHI3F%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdREmV3jl7uVNPWEaIBIUJdvvJxLyhaEEJkeHwB9jTpAiA%2BpBMsOhru3axiL4hcssjyCNrc330EhqTEOQt8%2F3f%2BgiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYZZh1W1pyRHDUl1KtwDX%2F%2B0MxQAVec0WifwsItGbh7SkEJKOECpejQO0%2F9KMRUIP9TVI87lnpWVp6H7wOuNvbRQ2I1jfEEQ9a3MeeBOZNAMAPa7WyMDWvX3%2BuYPwLFoymuUj5yrJi0sbc1oF7Iy6mwvVIqEJxXa465mLWS%2BCAYJOiSwa0eTDSfqMr9FZ%2FfflPNIkT0B3RtHVf3Jy4u0kjmaenYkCUrDRbq%2FnD5LuT%2BK%2BVW4IxYePqOJ90LhfJl1BkZMkqlc%2F2vRSjFYm4erKRXXc8gsIdA1fEJSTovNdMyjkEf3xtBXdNkQHFNZixdQYIFnJoInNef29NGGmz9z7IsC4GP4JyTnhfsauZR0cJ%2FsxNTj1infX4oS3LqpgKWMoHwnijWj2zjUDBWr56I4GS938ot092Y9J%2B2kLfoyp96pH%2FURaWPvwdu%2BAg8RBQ3ldRaD%2F2itMyyLU5BLHXRknSoLNC2NBWOwsuPVo0q7aMRu1qpU0qd37GYdNOhrHn3B0%2FbcM76Jaj5UXZHKVEvRWPesSX%2Fv8iT2n5uP3Y0hX8T3Xg05Ud7nClWggooqBCX5vKQjfW8kT318Fkn14LuXxO7CTp8NsAeqQvD7BJyWLePYi7EizGKJRD7GRgS8lU5GMM%2BgrGexo1vTspkw5qD7wAY6pgHEorTCjlp8r8P%2BRkVIBLONlaMaKuajhWv%2Fic4R0r4t73wGmTcc2CINvskPGSYfchL1ZtKTHDihMlIAljj%2Bcliel0lhMDqZr1lhtVQfkPILMwSX7G2yKtO1Sn0lYIiT49EDhYF%2FuAmQyohDARtMjubVmOHB5SlJMf51hDWd%2BOlBa%2BhtTkRKmTK67kZPt4Hq4YQ35Hcu0HW260jqN1%2FqmgI3GwfC4T%2B%2B&X-Amz-Signature=b091f843a5e0b355626e2fe6ad50ab97b859ca2df2df4ab07bf940c6479a9ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
