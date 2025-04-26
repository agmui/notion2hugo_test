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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVX3UKZG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDciJTKluLjyN%2FX1cYVtTVzdPUg0gwPI6kBukvRC9uxHQIhAKtosQTouoPvCr4szkRCy73OEqfRvLjpMZyz6Tu0txAjKv8DCEAQABoMNjM3NDIzMTgzODA1IgyGormmdvtKO6%2BJYDkq3AN0Am0TAbBYxdnEcWhpLTFyfTU6zWFIkYFquYskFcsmbsBFvQhflK%2FBuHvD5ZX%2B6rlY4TdhR1LbsKnfXBhOUdjnij36K98egolzbwIpCJ4F249Xqe%2FXk0cSOK%2Fj4YJh9RZJNz0%2FgqRT6APEb65kTDUMKiR5z6V%2FNwKFYAJwbNwgb3%2F8S%2FN%2Fsy74%2F3eo1rDISD7DGy%2B0qtEYqbJo7GEZWSkwKF%2FOrKemAm8bfgCVynL4iMNsKouwiE%2FkN54DPfPKL%2BOfRenK93Avqm1uRK8RH0Ufy64GtP5HZBfI2IJRLK91qI5VpH5CUtJ%2FAyIn%2FcOIQitzsBYG9tZyptIXZFreEb8LmR0a9GRQKeQ7waxAFoLe%2FYvxHrb0K7%2FV5IJE5AXWNCL8kt7TTcCf7cw6g0vfJI1NIZr7mws16zEjpmSTvKVGSLbJfld7ypHWaq6wyeCaX2xVpwnEHmgb59MjrNwOsqtsSdXnJLBMuxhpSPxiPVQbm44Jg7WSDz6I0hhdAIlc2R7kwXKk8DpxkC4zd1NNrYllnryUpEQeDahdMoWF985x8lwI8nmjuMR6UwqkSoy%2BZxcs%2BrQVHzbBWNlgw2L6Z9aJMmTjfySilTPsvzvHSTF%2BCRtd1XpNHJYDL0ZATDCVhLLABjqkAe4TSaJHW%2Fn90%2BmSP%2FO4MJdx2AiTfvJB3mOHGxwG8e5DlEODbMX49vSSPIBafiUbGWgqnph0%2BBmGj7%2B5ABuDt7VOAB8a5t0CwQdZzgC3pyyQXkbQ0TJ7RZrZiwPwkNCAP0o5fOcRxmwmMVmOZ94jC58onL9UPPY4tOIbEkizkCH7Mdk%2Fm5iM2ZEXMmbT8VfGHx8%2F6Sok1QmkVgT7w%2Flk8HIXGUo3&X-Amz-Signature=13cd5e7e1788e3e890eaa3e29364354454045f3a7a26f7147b51ae323faae720&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVX3UKZG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDciJTKluLjyN%2FX1cYVtTVzdPUg0gwPI6kBukvRC9uxHQIhAKtosQTouoPvCr4szkRCy73OEqfRvLjpMZyz6Tu0txAjKv8DCEAQABoMNjM3NDIzMTgzODA1IgyGormmdvtKO6%2BJYDkq3AN0Am0TAbBYxdnEcWhpLTFyfTU6zWFIkYFquYskFcsmbsBFvQhflK%2FBuHvD5ZX%2B6rlY4TdhR1LbsKnfXBhOUdjnij36K98egolzbwIpCJ4F249Xqe%2FXk0cSOK%2Fj4YJh9RZJNz0%2FgqRT6APEb65kTDUMKiR5z6V%2FNwKFYAJwbNwgb3%2F8S%2FN%2Fsy74%2F3eo1rDISD7DGy%2B0qtEYqbJo7GEZWSkwKF%2FOrKemAm8bfgCVynL4iMNsKouwiE%2FkN54DPfPKL%2BOfRenK93Avqm1uRK8RH0Ufy64GtP5HZBfI2IJRLK91qI5VpH5CUtJ%2FAyIn%2FcOIQitzsBYG9tZyptIXZFreEb8LmR0a9GRQKeQ7waxAFoLe%2FYvxHrb0K7%2FV5IJE5AXWNCL8kt7TTcCf7cw6g0vfJI1NIZr7mws16zEjpmSTvKVGSLbJfld7ypHWaq6wyeCaX2xVpwnEHmgb59MjrNwOsqtsSdXnJLBMuxhpSPxiPVQbm44Jg7WSDz6I0hhdAIlc2R7kwXKk8DpxkC4zd1NNrYllnryUpEQeDahdMoWF985x8lwI8nmjuMR6UwqkSoy%2BZxcs%2BrQVHzbBWNlgw2L6Z9aJMmTjfySilTPsvzvHSTF%2BCRtd1XpNHJYDL0ZATDCVhLLABjqkAe4TSaJHW%2Fn90%2BmSP%2FO4MJdx2AiTfvJB3mOHGxwG8e5DlEODbMX49vSSPIBafiUbGWgqnph0%2BBmGj7%2B5ABuDt7VOAB8a5t0CwQdZzgC3pyyQXkbQ0TJ7RZrZiwPwkNCAP0o5fOcRxmwmMVmOZ94jC58onL9UPPY4tOIbEkizkCH7Mdk%2Fm5iM2ZEXMmbT8VfGHx8%2F6Sok1QmkVgT7w%2Flk8HIXGUo3&X-Amz-Signature=86ea790a3a1789f8700d2dd4aa4d5a300d72c14baa6e38ec43e5f02c940341a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVX3UKZG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDciJTKluLjyN%2FX1cYVtTVzdPUg0gwPI6kBukvRC9uxHQIhAKtosQTouoPvCr4szkRCy73OEqfRvLjpMZyz6Tu0txAjKv8DCEAQABoMNjM3NDIzMTgzODA1IgyGormmdvtKO6%2BJYDkq3AN0Am0TAbBYxdnEcWhpLTFyfTU6zWFIkYFquYskFcsmbsBFvQhflK%2FBuHvD5ZX%2B6rlY4TdhR1LbsKnfXBhOUdjnij36K98egolzbwIpCJ4F249Xqe%2FXk0cSOK%2Fj4YJh9RZJNz0%2FgqRT6APEb65kTDUMKiR5z6V%2FNwKFYAJwbNwgb3%2F8S%2FN%2Fsy74%2F3eo1rDISD7DGy%2B0qtEYqbJo7GEZWSkwKF%2FOrKemAm8bfgCVynL4iMNsKouwiE%2FkN54DPfPKL%2BOfRenK93Avqm1uRK8RH0Ufy64GtP5HZBfI2IJRLK91qI5VpH5CUtJ%2FAyIn%2FcOIQitzsBYG9tZyptIXZFreEb8LmR0a9GRQKeQ7waxAFoLe%2FYvxHrb0K7%2FV5IJE5AXWNCL8kt7TTcCf7cw6g0vfJI1NIZr7mws16zEjpmSTvKVGSLbJfld7ypHWaq6wyeCaX2xVpwnEHmgb59MjrNwOsqtsSdXnJLBMuxhpSPxiPVQbm44Jg7WSDz6I0hhdAIlc2R7kwXKk8DpxkC4zd1NNrYllnryUpEQeDahdMoWF985x8lwI8nmjuMR6UwqkSoy%2BZxcs%2BrQVHzbBWNlgw2L6Z9aJMmTjfySilTPsvzvHSTF%2BCRtd1XpNHJYDL0ZATDCVhLLABjqkAe4TSaJHW%2Fn90%2BmSP%2FO4MJdx2AiTfvJB3mOHGxwG8e5DlEODbMX49vSSPIBafiUbGWgqnph0%2BBmGj7%2B5ABuDt7VOAB8a5t0CwQdZzgC3pyyQXkbQ0TJ7RZrZiwPwkNCAP0o5fOcRxmwmMVmOZ94jC58onL9UPPY4tOIbEkizkCH7Mdk%2Fm5iM2ZEXMmbT8VfGHx8%2F6Sok1QmkVgT7w%2Flk8HIXGUo3&X-Amz-Signature=bbe8380dc6d35087a4612640404f83c0c3380c9fcf1bb822052cff9699fde8df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
