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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNP2FAP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHbeHxntqZjytNIX8VpWjXF8YbJwGPoMWes3tb2elwgrAiBvJ7FwP1m1W5EjIXd%2BWw3LzaVuUQg08cr4hyI3KZDAVyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM66QW2ByBUwo3aVAtKtwD%2BChFgd1peEzUtFgRVMPcvw0ztgQEiZfwVfJasHjfGle6WYeZ3LCdYNZkwkEuWBaieJSN6HLST7SiFHBGS3EaP3oFW7NyRvjg9cmEoLcMHogayxlNWBh0WhjI4Sil0FJChBK5bVr0LKaEjAOkP0YaPxffl%2F8BeoIlCMJQjrNkvsxhABCnHS%2FqIGPPM%2F8%2B7XAUc57Bu49V5s4kJijApcmbSqckjx8ZrhsD9BKZqm4NKqI1Ld07QSZ%2FDKimB8%2FkkBKk%2FfxlC8iKfc%2BSxhAirfqvsbmif%2Fd2RoXhzSheFX2t%2BJYDLJhbDNLMYqZHckeqmWbaa8Up%2FT%2FfAooLMptDmeAUrXcR3uvf6l1jZuuQQq0mViAxn%2Fzqk%2FPJ38MC%2BpyUt%2BKn%2BXz3ghHnc%2Bb6iGnE75dIK1hSes6LyMxWwydPtMC%2Bu1cylT9PcrDJvkAefCAp7vCJCLk1hiWXwM3BdMhy9segR6NteTPEI9ao3KRWywrDf20rnezu7NBQtoKUkGCLOOt5anIVxLUpQXZqe6HXVKLYl6J0W4uFE8xQ3P0cX6d6cXqLR4qus4Cjro83GJ0bW9Azia3KvPuukwhhjKs52XHOA1mmk%2FyOE%2FPalOM10cydPvMniEo%2FPF0oNM%2B2Ikww6uq8vQY6pgG%2B2eHp1HZYlGp2ucPf5hDhQBxBfqxYQq17Vfp%2BdM8ZIh4ptoQB0GEonN4RNsDSL2X2E7DbZTwUmi5NWlgE7OLN1YZ0uT71i1Z692M5XM0aC3OTDvvSCZudOgM86%2FwcVThjDWiVl7toKSRQp4fEHRLfm6zUG4OBd%2FpylvUwVtcsEmsV3zCeTPAm2jwTbM%2BWXUAQcQLZELgWWVdIN3IzA3v0cl43jiHK&X-Amz-Signature=4b2470be36007f8e2116ab58b2a74a36b1d852a9cd5e92fe33c955b3fa33c625&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNP2FAP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHbeHxntqZjytNIX8VpWjXF8YbJwGPoMWes3tb2elwgrAiBvJ7FwP1m1W5EjIXd%2BWw3LzaVuUQg08cr4hyI3KZDAVyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM66QW2ByBUwo3aVAtKtwD%2BChFgd1peEzUtFgRVMPcvw0ztgQEiZfwVfJasHjfGle6WYeZ3LCdYNZkwkEuWBaieJSN6HLST7SiFHBGS3EaP3oFW7NyRvjg9cmEoLcMHogayxlNWBh0WhjI4Sil0FJChBK5bVr0LKaEjAOkP0YaPxffl%2F8BeoIlCMJQjrNkvsxhABCnHS%2FqIGPPM%2F8%2B7XAUc57Bu49V5s4kJijApcmbSqckjx8ZrhsD9BKZqm4NKqI1Ld07QSZ%2FDKimB8%2FkkBKk%2FfxlC8iKfc%2BSxhAirfqvsbmif%2Fd2RoXhzSheFX2t%2BJYDLJhbDNLMYqZHckeqmWbaa8Up%2FT%2FfAooLMptDmeAUrXcR3uvf6l1jZuuQQq0mViAxn%2Fzqk%2FPJ38MC%2BpyUt%2BKn%2BXz3ghHnc%2Bb6iGnE75dIK1hSes6LyMxWwydPtMC%2Bu1cylT9PcrDJvkAefCAp7vCJCLk1hiWXwM3BdMhy9segR6NteTPEI9ao3KRWywrDf20rnezu7NBQtoKUkGCLOOt5anIVxLUpQXZqe6HXVKLYl6J0W4uFE8xQ3P0cX6d6cXqLR4qus4Cjro83GJ0bW9Azia3KvPuukwhhjKs52XHOA1mmk%2FyOE%2FPalOM10cydPvMniEo%2FPF0oNM%2B2Ikww6uq8vQY6pgG%2B2eHp1HZYlGp2ucPf5hDhQBxBfqxYQq17Vfp%2BdM8ZIh4ptoQB0GEonN4RNsDSL2X2E7DbZTwUmi5NWlgE7OLN1YZ0uT71i1Z692M5XM0aC3OTDvvSCZudOgM86%2FwcVThjDWiVl7toKSRQp4fEHRLfm6zUG4OBd%2FpylvUwVtcsEmsV3zCeTPAm2jwTbM%2BWXUAQcQLZELgWWVdIN3IzA3v0cl43jiHK&X-Amz-Signature=684b2947e4abf928a0a19b9da6c64c4e3b8e66a8b018e35d9b2acbf0275b3e35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNP2FAP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHbeHxntqZjytNIX8VpWjXF8YbJwGPoMWes3tb2elwgrAiBvJ7FwP1m1W5EjIXd%2BWw3LzaVuUQg08cr4hyI3KZDAVyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM66QW2ByBUwo3aVAtKtwD%2BChFgd1peEzUtFgRVMPcvw0ztgQEiZfwVfJasHjfGle6WYeZ3LCdYNZkwkEuWBaieJSN6HLST7SiFHBGS3EaP3oFW7NyRvjg9cmEoLcMHogayxlNWBh0WhjI4Sil0FJChBK5bVr0LKaEjAOkP0YaPxffl%2F8BeoIlCMJQjrNkvsxhABCnHS%2FqIGPPM%2F8%2B7XAUc57Bu49V5s4kJijApcmbSqckjx8ZrhsD9BKZqm4NKqI1Ld07QSZ%2FDKimB8%2FkkBKk%2FfxlC8iKfc%2BSxhAirfqvsbmif%2Fd2RoXhzSheFX2t%2BJYDLJhbDNLMYqZHckeqmWbaa8Up%2FT%2FfAooLMptDmeAUrXcR3uvf6l1jZuuQQq0mViAxn%2Fzqk%2FPJ38MC%2BpyUt%2BKn%2BXz3ghHnc%2Bb6iGnE75dIK1hSes6LyMxWwydPtMC%2Bu1cylT9PcrDJvkAefCAp7vCJCLk1hiWXwM3BdMhy9segR6NteTPEI9ao3KRWywrDf20rnezu7NBQtoKUkGCLOOt5anIVxLUpQXZqe6HXVKLYl6J0W4uFE8xQ3P0cX6d6cXqLR4qus4Cjro83GJ0bW9Azia3KvPuukwhhjKs52XHOA1mmk%2FyOE%2FPalOM10cydPvMniEo%2FPF0oNM%2B2Ikww6uq8vQY6pgG%2B2eHp1HZYlGp2ucPf5hDhQBxBfqxYQq17Vfp%2BdM8ZIh4ptoQB0GEonN4RNsDSL2X2E7DbZTwUmi5NWlgE7OLN1YZ0uT71i1Z692M5XM0aC3OTDvvSCZudOgM86%2FwcVThjDWiVl7toKSRQp4fEHRLfm6zUG4OBd%2FpylvUwVtcsEmsV3zCeTPAm2jwTbM%2BWXUAQcQLZELgWWVdIN3IzA3v0cl43jiHK&X-Amz-Signature=9068cd48ea61eb7972fa495ede0ba4b81430cb19d355be1dee9a8059934e4e83&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
