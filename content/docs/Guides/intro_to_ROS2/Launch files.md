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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZZ5SIE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCP5PukCh17HTNXWmtcB0E%2B5DSWyYTOQdF2P%2BtUE4uA8QIgG6s7aXYSA%2BK0ehY%2BdbUMwOLqLH%2FlP6CfVHKFjTkX9lUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfDcbfV%2Bv4QxyMT8CrcA4RwmWTFKg6h2n%2Fz0wQykCabIEaLSfLGdL%2Bt3AmMj%2F1cnpd%2BP6aqzzYpzwLYk%2F0fvWuusuGgUn2Ur2r34X1nzUpTtrNsciDmY4O7eA4lRQ8eNeJ3eMozs1YMSbPH3NnXS%2FfJf0qFnvKTGRcI8%2BGK2YBrgDcoEg%2B2HOGm9wJEt34TCj9tK2nDhKuBu62OGYixnsb%2BzD%2FmA75XPg0bG7AKUPW0lNa1k1m9hJFQJcruvYwYJv81GX%2FUmXc4wVYkc9duK55Ux27DB83w%2FS7AhVW8ddpEb7oQ5Ocf7CV%2FqerfuJiDT%2F9hVtf7dwEjJmWZWGUwvqdyjFxH3tEAAZMjZmK7ICKRQk4PwglpWIKZSI02Znfze9SwNMerbGbqhG50qwW63iMUISwwgvqa%2BWe9w%2BVYpJJL11zgPUzqBUSusNCfwiqWaML7bLn788Bjpd6%2BrFNVoX0uRH4TDErvJNCYg0dcbezd5GXYPAvb1FloLfy1%2B5PiqmnYGxNClR1KF1z7deT%2Bb47P%2FpMRVVb6ggWhyS5tOyTCUx%2FbZ%2BVIWB8xBhrJMLTpxhEfao%2FHPJaHSwiwjehP3Yg1chctUNguITbrV7hD3iRvP5g2PgymrgFXHk0B7OLgUGwce3uF4j1By39EMKyFl8EGOqUBoC262L9MS3svsmP2%2BvY%2Fneus1HAMkhsk8%2Flmm1WwQ0D2vU%2FgL60h9tsIxANz7DR0%2B1YcjXoqLXzoVdDxwh7XIXLZ7clwsqatDLbaC1oJVi3g52hz7urDk2O0sLMvhAj24bnNNNGwcwm7YHzf7BO4%2F3sddXVxb7vjiPF7yuqs%2FXNuO1JiWwF7DDWwDU37LdRpQaIiS5LZCXLJiSzVYHwo%2FZvSLSnJ&X-Amz-Signature=129aaab0b8dcc19b1de8b703407dd44cc15b2d34f7e4a9337ba6d9c3c253448d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZZ5SIE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCP5PukCh17HTNXWmtcB0E%2B5DSWyYTOQdF2P%2BtUE4uA8QIgG6s7aXYSA%2BK0ehY%2BdbUMwOLqLH%2FlP6CfVHKFjTkX9lUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfDcbfV%2Bv4QxyMT8CrcA4RwmWTFKg6h2n%2Fz0wQykCabIEaLSfLGdL%2Bt3AmMj%2F1cnpd%2BP6aqzzYpzwLYk%2F0fvWuusuGgUn2Ur2r34X1nzUpTtrNsciDmY4O7eA4lRQ8eNeJ3eMozs1YMSbPH3NnXS%2FfJf0qFnvKTGRcI8%2BGK2YBrgDcoEg%2B2HOGm9wJEt34TCj9tK2nDhKuBu62OGYixnsb%2BzD%2FmA75XPg0bG7AKUPW0lNa1k1m9hJFQJcruvYwYJv81GX%2FUmXc4wVYkc9duK55Ux27DB83w%2FS7AhVW8ddpEb7oQ5Ocf7CV%2FqerfuJiDT%2F9hVtf7dwEjJmWZWGUwvqdyjFxH3tEAAZMjZmK7ICKRQk4PwglpWIKZSI02Znfze9SwNMerbGbqhG50qwW63iMUISwwgvqa%2BWe9w%2BVYpJJL11zgPUzqBUSusNCfwiqWaML7bLn788Bjpd6%2BrFNVoX0uRH4TDErvJNCYg0dcbezd5GXYPAvb1FloLfy1%2B5PiqmnYGxNClR1KF1z7deT%2Bb47P%2FpMRVVb6ggWhyS5tOyTCUx%2FbZ%2BVIWB8xBhrJMLTpxhEfao%2FHPJaHSwiwjehP3Yg1chctUNguITbrV7hD3iRvP5g2PgymrgFXHk0B7OLgUGwce3uF4j1By39EMKyFl8EGOqUBoC262L9MS3svsmP2%2BvY%2Fneus1HAMkhsk8%2Flmm1WwQ0D2vU%2FgL60h9tsIxANz7DR0%2B1YcjXoqLXzoVdDxwh7XIXLZ7clwsqatDLbaC1oJVi3g52hz7urDk2O0sLMvhAj24bnNNNGwcwm7YHzf7BO4%2F3sddXVxb7vjiPF7yuqs%2FXNuO1JiWwF7DDWwDU37LdRpQaIiS5LZCXLJiSzVYHwo%2FZvSLSnJ&X-Amz-Signature=65ec3045be1ab7ba26799898bb0279c93d50eb33e1cd189ec78a565c8b28084d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZZ5SIE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCP5PukCh17HTNXWmtcB0E%2B5DSWyYTOQdF2P%2BtUE4uA8QIgG6s7aXYSA%2BK0ehY%2BdbUMwOLqLH%2FlP6CfVHKFjTkX9lUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfDcbfV%2Bv4QxyMT8CrcA4RwmWTFKg6h2n%2Fz0wQykCabIEaLSfLGdL%2Bt3AmMj%2F1cnpd%2BP6aqzzYpzwLYk%2F0fvWuusuGgUn2Ur2r34X1nzUpTtrNsciDmY4O7eA4lRQ8eNeJ3eMozs1YMSbPH3NnXS%2FfJf0qFnvKTGRcI8%2BGK2YBrgDcoEg%2B2HOGm9wJEt34TCj9tK2nDhKuBu62OGYixnsb%2BzD%2FmA75XPg0bG7AKUPW0lNa1k1m9hJFQJcruvYwYJv81GX%2FUmXc4wVYkc9duK55Ux27DB83w%2FS7AhVW8ddpEb7oQ5Ocf7CV%2FqerfuJiDT%2F9hVtf7dwEjJmWZWGUwvqdyjFxH3tEAAZMjZmK7ICKRQk4PwglpWIKZSI02Znfze9SwNMerbGbqhG50qwW63iMUISwwgvqa%2BWe9w%2BVYpJJL11zgPUzqBUSusNCfwiqWaML7bLn788Bjpd6%2BrFNVoX0uRH4TDErvJNCYg0dcbezd5GXYPAvb1FloLfy1%2B5PiqmnYGxNClR1KF1z7deT%2Bb47P%2FpMRVVb6ggWhyS5tOyTCUx%2FbZ%2BVIWB8xBhrJMLTpxhEfao%2FHPJaHSwiwjehP3Yg1chctUNguITbrV7hD3iRvP5g2PgymrgFXHk0B7OLgUGwce3uF4j1By39EMKyFl8EGOqUBoC262L9MS3svsmP2%2BvY%2Fneus1HAMkhsk8%2Flmm1WwQ0D2vU%2FgL60h9tsIxANz7DR0%2B1YcjXoqLXzoVdDxwh7XIXLZ7clwsqatDLbaC1oJVi3g52hz7urDk2O0sLMvhAj24bnNNNGwcwm7YHzf7BO4%2F3sddXVxb7vjiPF7yuqs%2FXNuO1JiWwF7DDWwDU37LdRpQaIiS5LZCXLJiSzVYHwo%2FZvSLSnJ&X-Amz-Signature=c8fa54990a6a64b48f12a1ca13655a5557bc9f58c5807b021edbd1d39f211f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
