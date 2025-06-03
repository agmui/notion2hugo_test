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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJEWU7J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDsEEbkB0TUqGJ8cnLQGqd5j%2BEWhbiur5j1KougsX0E2AiAr%2FHdMfzA0A%2FSRa5FakzEXHegG1S5uAE0ynsnDpLVzVSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIME2H2sFXqGfNnqMhkKtwDpzhNDY6L%2FQ5%2BYuVN0h6k5yfZrLJuJFtR8kAH2dX0GMnjT18wuBnnknCYL9gOixRMcVzM%2FWX0JhmkJXyRgaHLqCVza86FbTKgdh5EpqJdJys7GFd%2Be4yqdanUUTVVhjreKIqsuSMxrddvFwJitDYmEyLeC9X9aYRUFEGBOhhL7%2Bgtn2zwbDadhUN4ZyOvFk5vd1ROQmZhgCt7gM4NauRgr0NtWGNfJjckDtNguREDOtir82bn6HmYQQleEwNJJenkg5sh36nDbzw61TIl2uW9vqqwLixEpSSIsFzOwKRpRhCs6KBCHreVOicuaNV8%2FLu8AO%2FVpK6tevwuLJm4twnEIBNlC38vHFD1z16vzU%2BPg70bUvCj78W%2B2keU0FFlQXhWsBGnAcBJBuisOFurSWyjO%2B3VItSY0t25iESakNVFWtJx1r7p2CHyhHng2onQ6RZUiUBWOjLUSlyEaPGFR0InbWZYD%2FRTCgg768Ao070cEbF44RbEjEa6miChZ3xFCk1J58kNnVZ2sgtsyUg1zKf95j8bEFQ7oeuwRgqJbQUqsc%2FpJRIcYAu3QVPjoFhkkDSCedcccNC2jOOZe521Ut%2FnL5lkDGEJqk7hzYIn9t2dhfD6b7qUHxAwmfH6IU4w4IX9wQY6pgEtdafNPqmyjCXPTKLOBXB2Qrac%2F%2F6Q95xuewAUbAi5KOTY94v%2BGtSAzZnBj0N2BYKObSrMeIZHJt4%2Be5BYeME%2F7NKwXD%2FxOi7zqRx8oqbW92TGt2slic%2FUdMZm73bhv8MZXXzukLBp0KRIdtBEFj6LPljYVV59d628uMCaP39%2B2LToMcweVollIa%2BWQ1RYu6zIglInamkHnQZ6ZN2MAErsovEKTQuD&X-Amz-Signature=3af8b691c67d23912848f6c5c38fc07124fe005f4c4a2aa5b4624c0160506145&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJEWU7J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDsEEbkB0TUqGJ8cnLQGqd5j%2BEWhbiur5j1KougsX0E2AiAr%2FHdMfzA0A%2FSRa5FakzEXHegG1S5uAE0ynsnDpLVzVSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIME2H2sFXqGfNnqMhkKtwDpzhNDY6L%2FQ5%2BYuVN0h6k5yfZrLJuJFtR8kAH2dX0GMnjT18wuBnnknCYL9gOixRMcVzM%2FWX0JhmkJXyRgaHLqCVza86FbTKgdh5EpqJdJys7GFd%2Be4yqdanUUTVVhjreKIqsuSMxrddvFwJitDYmEyLeC9X9aYRUFEGBOhhL7%2Bgtn2zwbDadhUN4ZyOvFk5vd1ROQmZhgCt7gM4NauRgr0NtWGNfJjckDtNguREDOtir82bn6HmYQQleEwNJJenkg5sh36nDbzw61TIl2uW9vqqwLixEpSSIsFzOwKRpRhCs6KBCHreVOicuaNV8%2FLu8AO%2FVpK6tevwuLJm4twnEIBNlC38vHFD1z16vzU%2BPg70bUvCj78W%2B2keU0FFlQXhWsBGnAcBJBuisOFurSWyjO%2B3VItSY0t25iESakNVFWtJx1r7p2CHyhHng2onQ6RZUiUBWOjLUSlyEaPGFR0InbWZYD%2FRTCgg768Ao070cEbF44RbEjEa6miChZ3xFCk1J58kNnVZ2sgtsyUg1zKf95j8bEFQ7oeuwRgqJbQUqsc%2FpJRIcYAu3QVPjoFhkkDSCedcccNC2jOOZe521Ut%2FnL5lkDGEJqk7hzYIn9t2dhfD6b7qUHxAwmfH6IU4w4IX9wQY6pgEtdafNPqmyjCXPTKLOBXB2Qrac%2F%2F6Q95xuewAUbAi5KOTY94v%2BGtSAzZnBj0N2BYKObSrMeIZHJt4%2Be5BYeME%2F7NKwXD%2FxOi7zqRx8oqbW92TGt2slic%2FUdMZm73bhv8MZXXzukLBp0KRIdtBEFj6LPljYVV59d628uMCaP39%2B2LToMcweVollIa%2BWQ1RYu6zIglInamkHnQZ6ZN2MAErsovEKTQuD&X-Amz-Signature=e74cd0f61e50d03898f41e851fe82e00fde0088bbf2d056f73c9577f2015e5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJEWU7J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDsEEbkB0TUqGJ8cnLQGqd5j%2BEWhbiur5j1KougsX0E2AiAr%2FHdMfzA0A%2FSRa5FakzEXHegG1S5uAE0ynsnDpLVzVSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIME2H2sFXqGfNnqMhkKtwDpzhNDY6L%2FQ5%2BYuVN0h6k5yfZrLJuJFtR8kAH2dX0GMnjT18wuBnnknCYL9gOixRMcVzM%2FWX0JhmkJXyRgaHLqCVza86FbTKgdh5EpqJdJys7GFd%2Be4yqdanUUTVVhjreKIqsuSMxrddvFwJitDYmEyLeC9X9aYRUFEGBOhhL7%2Bgtn2zwbDadhUN4ZyOvFk5vd1ROQmZhgCt7gM4NauRgr0NtWGNfJjckDtNguREDOtir82bn6HmYQQleEwNJJenkg5sh36nDbzw61TIl2uW9vqqwLixEpSSIsFzOwKRpRhCs6KBCHreVOicuaNV8%2FLu8AO%2FVpK6tevwuLJm4twnEIBNlC38vHFD1z16vzU%2BPg70bUvCj78W%2B2keU0FFlQXhWsBGnAcBJBuisOFurSWyjO%2B3VItSY0t25iESakNVFWtJx1r7p2CHyhHng2onQ6RZUiUBWOjLUSlyEaPGFR0InbWZYD%2FRTCgg768Ao070cEbF44RbEjEa6miChZ3xFCk1J58kNnVZ2sgtsyUg1zKf95j8bEFQ7oeuwRgqJbQUqsc%2FpJRIcYAu3QVPjoFhkkDSCedcccNC2jOOZe521Ut%2FnL5lkDGEJqk7hzYIn9t2dhfD6b7qUHxAwmfH6IU4w4IX9wQY6pgEtdafNPqmyjCXPTKLOBXB2Qrac%2F%2F6Q95xuewAUbAi5KOTY94v%2BGtSAzZnBj0N2BYKObSrMeIZHJt4%2Be5BYeME%2F7NKwXD%2FxOi7zqRx8oqbW92TGt2slic%2FUdMZm73bhv8MZXXzukLBp0KRIdtBEFj6LPljYVV59d628uMCaP39%2B2LToMcweVollIa%2BWQ1RYu6zIglInamkHnQZ6ZN2MAErsovEKTQuD&X-Amz-Signature=56f39c6c543f5b82fd87a8f26b241926259679defb02c8c1377e5c379e5a2858&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
