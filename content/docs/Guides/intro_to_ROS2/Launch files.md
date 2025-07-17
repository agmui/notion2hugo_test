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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHME3VT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICVkwVocRcnRMjPYU1U0aZgB6D%2Bg%2BSHyDMuE4TsFcIdxAiBRhM8u4DV3AlpZ8tSLshY%2Fte1Sf3n4wmVtO%2B83mAqdxir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqpmwf3Quis8taSeRKtwD6JzbLN18Kqxp%2FPNc8D5IT8b5Y8gYOKHVLL0k%2BrjzWaMBW5WWyVY0iTqNb7psl3Atbm7kK5JdSG4U7ynbOJZ3Q6hjygypgsIFiYzAMZ2R%2BYb4FsQibP6LTzDQFCHkumQxxBvvc71GDECFEh0IumcFgMkbR9ljLGI8njCeC0HCheH6QQvmKiigUDFKYcu4qR8EtwLDFNSGTA3NL10SHjshnorCDYFQUq6tUHx%2FR%2FT%2Fm3JIRm717TJmizR4tAWN6nI90CV6kNuZXhKR%2FzU76h8KQ4EqFjyraKeReW8Bio2b36EuzndWFkGFR2ftc9lADDW6Vv2yHo%2FqUFn932y73GmbfaG8Boikcgq79XLz7y0enZfEr%2Bt%2BbV6Bvuorvf8X4%2Fz7q0LOPwkm%2Fq%2FLn0849KgCblF3GuCCD1cwrs06zF0UbjSTbkZ2ujk%2F5niYfeV8vFNM0iaCf1r9v6TmB943mig4y%2Beu08%2FwuSzq0fTWELrQ2lozFGFhNdWqR3p2EyIBu89k4X1Hq6pz2ICybih5XJRhMFFcbMKnZ%2BzCFTTRZ2dS4N8DlDJ1spoZafgKOmNUbIyKYCy8u0lekeugOfvdCLshIdmLloO3Vq2QPchfe9I0HxWl9%2BlQ2wuPlO%2FBVAcwjO7hwwY6pgGoLqZ77bPibTM7o6VIcOVAWi%2BUvu09RjKg7KEGLv1rIfhKi53ECMGX0%2BR5uppL8FasKs4M4%2BjOaxAPK8LyxU%2ByUXYkGsd5J%2Fc4%2Bcmsi8wOyJOM78HQqgppTIcUhsetf%2Fg3nOC2fQfV%2Bb9o2Sr1YTE%2BGmIi6ZE5buyYIDbnhqlBFE1JLULvvipcFezlQFaMKNC6YA0qb1jSQFSBLnokjeuV5ajNWRel&X-Amz-Signature=404792b8466968d2f7c3a15ef654a5000bb904ffcd96bdab0ef555d59976cafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHME3VT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICVkwVocRcnRMjPYU1U0aZgB6D%2Bg%2BSHyDMuE4TsFcIdxAiBRhM8u4DV3AlpZ8tSLshY%2Fte1Sf3n4wmVtO%2B83mAqdxir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqpmwf3Quis8taSeRKtwD6JzbLN18Kqxp%2FPNc8D5IT8b5Y8gYOKHVLL0k%2BrjzWaMBW5WWyVY0iTqNb7psl3Atbm7kK5JdSG4U7ynbOJZ3Q6hjygypgsIFiYzAMZ2R%2BYb4FsQibP6LTzDQFCHkumQxxBvvc71GDECFEh0IumcFgMkbR9ljLGI8njCeC0HCheH6QQvmKiigUDFKYcu4qR8EtwLDFNSGTA3NL10SHjshnorCDYFQUq6tUHx%2FR%2FT%2Fm3JIRm717TJmizR4tAWN6nI90CV6kNuZXhKR%2FzU76h8KQ4EqFjyraKeReW8Bio2b36EuzndWFkGFR2ftc9lADDW6Vv2yHo%2FqUFn932y73GmbfaG8Boikcgq79XLz7y0enZfEr%2Bt%2BbV6Bvuorvf8X4%2Fz7q0LOPwkm%2Fq%2FLn0849KgCblF3GuCCD1cwrs06zF0UbjSTbkZ2ujk%2F5niYfeV8vFNM0iaCf1r9v6TmB943mig4y%2Beu08%2FwuSzq0fTWELrQ2lozFGFhNdWqR3p2EyIBu89k4X1Hq6pz2ICybih5XJRhMFFcbMKnZ%2BzCFTTRZ2dS4N8DlDJ1spoZafgKOmNUbIyKYCy8u0lekeugOfvdCLshIdmLloO3Vq2QPchfe9I0HxWl9%2BlQ2wuPlO%2FBVAcwjO7hwwY6pgGoLqZ77bPibTM7o6VIcOVAWi%2BUvu09RjKg7KEGLv1rIfhKi53ECMGX0%2BR5uppL8FasKs4M4%2BjOaxAPK8LyxU%2ByUXYkGsd5J%2Fc4%2Bcmsi8wOyJOM78HQqgppTIcUhsetf%2Fg3nOC2fQfV%2Bb9o2Sr1YTE%2BGmIi6ZE5buyYIDbnhqlBFE1JLULvvipcFezlQFaMKNC6YA0qb1jSQFSBLnokjeuV5ajNWRel&X-Amz-Signature=d7aa702aaacd87e60bda8c4f70c618ccb5f1f608923c487037453cf84e91b48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHME3VT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICVkwVocRcnRMjPYU1U0aZgB6D%2Bg%2BSHyDMuE4TsFcIdxAiBRhM8u4DV3AlpZ8tSLshY%2Fte1Sf3n4wmVtO%2B83mAqdxir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqpmwf3Quis8taSeRKtwD6JzbLN18Kqxp%2FPNc8D5IT8b5Y8gYOKHVLL0k%2BrjzWaMBW5WWyVY0iTqNb7psl3Atbm7kK5JdSG4U7ynbOJZ3Q6hjygypgsIFiYzAMZ2R%2BYb4FsQibP6LTzDQFCHkumQxxBvvc71GDECFEh0IumcFgMkbR9ljLGI8njCeC0HCheH6QQvmKiigUDFKYcu4qR8EtwLDFNSGTA3NL10SHjshnorCDYFQUq6tUHx%2FR%2FT%2Fm3JIRm717TJmizR4tAWN6nI90CV6kNuZXhKR%2FzU76h8KQ4EqFjyraKeReW8Bio2b36EuzndWFkGFR2ftc9lADDW6Vv2yHo%2FqUFn932y73GmbfaG8Boikcgq79XLz7y0enZfEr%2Bt%2BbV6Bvuorvf8X4%2Fz7q0LOPwkm%2Fq%2FLn0849KgCblF3GuCCD1cwrs06zF0UbjSTbkZ2ujk%2F5niYfeV8vFNM0iaCf1r9v6TmB943mig4y%2Beu08%2FwuSzq0fTWELrQ2lozFGFhNdWqR3p2EyIBu89k4X1Hq6pz2ICybih5XJRhMFFcbMKnZ%2BzCFTTRZ2dS4N8DlDJ1spoZafgKOmNUbIyKYCy8u0lekeugOfvdCLshIdmLloO3Vq2QPchfe9I0HxWl9%2BlQ2wuPlO%2FBVAcwjO7hwwY6pgGoLqZ77bPibTM7o6VIcOVAWi%2BUvu09RjKg7KEGLv1rIfhKi53ECMGX0%2BR5uppL8FasKs4M4%2BjOaxAPK8LyxU%2ByUXYkGsd5J%2Fc4%2Bcmsi8wOyJOM78HQqgppTIcUhsetf%2Fg3nOC2fQfV%2Bb9o2Sr1YTE%2BGmIi6ZE5buyYIDbnhqlBFE1JLULvvipcFezlQFaMKNC6YA0qb1jSQFSBLnokjeuV5ajNWRel&X-Amz-Signature=de5d0ed76c5e809a812d535e9d156d86616dd9d16b9a53ad1f2fb3e5a2ade73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
