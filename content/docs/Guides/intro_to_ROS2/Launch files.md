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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHSMU4N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcj3wd%2F7LmLZOAJPCncC9IoyqmXJrw9wY%2FqsTRzVHZEAiBJ3oo%2BTiQskUDsHfvqmjtAbtUNcT53GYRTgqaExockjSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1MWTt7eF3UOadOMiKtwDUClySZ%2BBekowXHaWE48l5yknMECFq5kpB1YNPg%2BvVmvUPHZhDKoVMNCevnCoZbmzHWpvUReS%2FUPA%2B1eknl2nOqf0m0GCTmB8GJPXh9HrIR0LRR9f5rkFUiFjyNoosNdvjVgyu18luu9fvEYDSaxY95XBfIDq0mHjxBXsilyeNFyoFRVZm2bWSOwlOwhG9%2BjFXd0vAxDHalcHBhVzp9tQK6ysCs9ICiG%2Bj0RHBzyA9LnUTLj6ckP4pUnIm8bFgc08Uj24Bggao0xrv2WbHI5lb3z0ZCleRsABjuBy6g1I9rpGBe8T8qprJ9K1thIAj9VNMupSgt7dnCyOJ2GRgROGMGj9cFCyqVVUSy2lYoTiDKwxjwLbVb%2FbYZ4PCOl1Op94IPkYvjon%2FEHTxc3mxtCtl8lxjuPRmiw46JSdteaXTVq4DC%2BX%2BfK6YT9mKKLECBRP2LZmh2aK5sxHorXRPOwUUxSYXj9hj2CuynRv73dxJHxIV7j791gMbFxkhr%2ByUZgFc6OEdTSFAO5GgkSkUkSmOhY%2BzkFbNyUEbpxk1Ga1F5Gy4SiCDSzZ59rti7PB8gJMqtml5%2B%2FeTsW0rfXzJCj5E9TmTzCjl%2FfhhecRKVR3F0UkXCj7pT4Pf0Z1Bfswo9%2BrvgY6pgFtE1mSIO0mG0HShmD%2FI1EbJ1vv9CFift4rMF%2FWXwvFLAYqBOSFnhBwWT4IzrGym9MyCQuBgULa6s92mJAzipOBgCHYoeDYG3gZiILbBLdvnLxJKov%2FJMqNqp7B6HIiV2LkzdnYeZgNBHVgXkjG1Tylb%2FUxQ61QpQCc7A0B4oG2FNBd6b5QPs42QYoYSdkAUYf7tLpOpWeTGfomSF%2B%2Fu4UvNRZoUbG4&X-Amz-Signature=f880ac3dd860da6950673b0da683e3e97d2b7acc4f5c611cbb75991e5d32854e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHSMU4N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcj3wd%2F7LmLZOAJPCncC9IoyqmXJrw9wY%2FqsTRzVHZEAiBJ3oo%2BTiQskUDsHfvqmjtAbtUNcT53GYRTgqaExockjSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1MWTt7eF3UOadOMiKtwDUClySZ%2BBekowXHaWE48l5yknMECFq5kpB1YNPg%2BvVmvUPHZhDKoVMNCevnCoZbmzHWpvUReS%2FUPA%2B1eknl2nOqf0m0GCTmB8GJPXh9HrIR0LRR9f5rkFUiFjyNoosNdvjVgyu18luu9fvEYDSaxY95XBfIDq0mHjxBXsilyeNFyoFRVZm2bWSOwlOwhG9%2BjFXd0vAxDHalcHBhVzp9tQK6ysCs9ICiG%2Bj0RHBzyA9LnUTLj6ckP4pUnIm8bFgc08Uj24Bggao0xrv2WbHI5lb3z0ZCleRsABjuBy6g1I9rpGBe8T8qprJ9K1thIAj9VNMupSgt7dnCyOJ2GRgROGMGj9cFCyqVVUSy2lYoTiDKwxjwLbVb%2FbYZ4PCOl1Op94IPkYvjon%2FEHTxc3mxtCtl8lxjuPRmiw46JSdteaXTVq4DC%2BX%2BfK6YT9mKKLECBRP2LZmh2aK5sxHorXRPOwUUxSYXj9hj2CuynRv73dxJHxIV7j791gMbFxkhr%2ByUZgFc6OEdTSFAO5GgkSkUkSmOhY%2BzkFbNyUEbpxk1Ga1F5Gy4SiCDSzZ59rti7PB8gJMqtml5%2B%2FeTsW0rfXzJCj5E9TmTzCjl%2FfhhecRKVR3F0UkXCj7pT4Pf0Z1Bfswo9%2BrvgY6pgFtE1mSIO0mG0HShmD%2FI1EbJ1vv9CFift4rMF%2FWXwvFLAYqBOSFnhBwWT4IzrGym9MyCQuBgULa6s92mJAzipOBgCHYoeDYG3gZiILbBLdvnLxJKov%2FJMqNqp7B6HIiV2LkzdnYeZgNBHVgXkjG1Tylb%2FUxQ61QpQCc7A0B4oG2FNBd6b5QPs42QYoYSdkAUYf7tLpOpWeTGfomSF%2B%2Fu4UvNRZoUbG4&X-Amz-Signature=6d08958e2571416d9b5b97a0674207e7a63fb3927948f29f8fc91ed83f6a1a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHSMU4N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcj3wd%2F7LmLZOAJPCncC9IoyqmXJrw9wY%2FqsTRzVHZEAiBJ3oo%2BTiQskUDsHfvqmjtAbtUNcT53GYRTgqaExockjSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1MWTt7eF3UOadOMiKtwDUClySZ%2BBekowXHaWE48l5yknMECFq5kpB1YNPg%2BvVmvUPHZhDKoVMNCevnCoZbmzHWpvUReS%2FUPA%2B1eknl2nOqf0m0GCTmB8GJPXh9HrIR0LRR9f5rkFUiFjyNoosNdvjVgyu18luu9fvEYDSaxY95XBfIDq0mHjxBXsilyeNFyoFRVZm2bWSOwlOwhG9%2BjFXd0vAxDHalcHBhVzp9tQK6ysCs9ICiG%2Bj0RHBzyA9LnUTLj6ckP4pUnIm8bFgc08Uj24Bggao0xrv2WbHI5lb3z0ZCleRsABjuBy6g1I9rpGBe8T8qprJ9K1thIAj9VNMupSgt7dnCyOJ2GRgROGMGj9cFCyqVVUSy2lYoTiDKwxjwLbVb%2FbYZ4PCOl1Op94IPkYvjon%2FEHTxc3mxtCtl8lxjuPRmiw46JSdteaXTVq4DC%2BX%2BfK6YT9mKKLECBRP2LZmh2aK5sxHorXRPOwUUxSYXj9hj2CuynRv73dxJHxIV7j791gMbFxkhr%2ByUZgFc6OEdTSFAO5GgkSkUkSmOhY%2BzkFbNyUEbpxk1Ga1F5Gy4SiCDSzZ59rti7PB8gJMqtml5%2B%2FeTsW0rfXzJCj5E9TmTzCjl%2FfhhecRKVR3F0UkXCj7pT4Pf0Z1Bfswo9%2BrvgY6pgFtE1mSIO0mG0HShmD%2FI1EbJ1vv9CFift4rMF%2FWXwvFLAYqBOSFnhBwWT4IzrGym9MyCQuBgULa6s92mJAzipOBgCHYoeDYG3gZiILbBLdvnLxJKov%2FJMqNqp7B6HIiV2LkzdnYeZgNBHVgXkjG1Tylb%2FUxQ61QpQCc7A0B4oG2FNBd6b5QPs42QYoYSdkAUYf7tLpOpWeTGfomSF%2B%2Fu4UvNRZoUbG4&X-Amz-Signature=d1d8f79c81a409d63fe9678e9fa190f892a660974069333bd5be4f8027ca82ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
