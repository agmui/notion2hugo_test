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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLFHLQA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC2cB8aUy2au2Z8e2QyiLhi6hg2qzUQCPNGLAAOmn8Q1wIgTtt8xSwYiTGp4C1yIcLEiKZtt%2Fn3THihgLBX7nJe%2BJkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe%2Fyr8eB%2B1XLBI2eCrcAz4ILr7TnescsFuNuQB2dCphzoXo2qIpaIYjA%2Fcvo13BBdQpwzymrGVAQXW6Ctfjm3OlCXH56maVavmGCxRz4NP1cdd3xRHzUIA2uk5gTyXvrVRK0CpRU9nspzWz%2F57w5zum6P9cuZuXfFlyJhYaV1%2FkRAeHBE0wvffaBd%2F66TpVNktB5pBjzdnEDKdcWakS%2B0ypFQfv8vGf829vzlV3wB95%2FJo%2Fnmka8MzJuEbZs5RWwrhPkyPCNRYCi8YgO4Ob9V%2Bl%2Flykyx%2FNJjHkfQdWVzeMq%2F3MSXHhriIP4gws54UZ3bRcltbK0b%2Fpav5xwTguLWciyNF2OCJVQNHqOP8jEbvzUFJFJ6TGMw4flIJ2uGd1Jj2a9s8szOH72uE95J%2BCajkDRVeF8RRT4YIVtfi4XW1%2BhZafLwhtMiAUMNciXSPfGbVo2IGWafjweOM8XUzYBoOn6QGZZvlOc1%2F59lhH%2Fmfubx2YN23omFjiGqOfBqAQzxeSiBvRxlmJSROdn5ptYtZ7pJ7UD3grYEm2qQH5mDVGgm0qT7aWiQNRG%2B4IvrTPVBSSBSpJuW%2FVQJBSN6m32I4%2BD3S9ZJCPtkmNu%2FT6WjV5Kzcbe9vuRI5Mg3%2BOIl7ekZxEIbsHM1vzJyThMKjY9L4GOqUBbmTAVAEMl5tPG9RQ8g9DE59Rtj9%2BtVW1fL8s%2BSK2p7e6Vz%2F3fyD6Ig0LUZNb07ENWk3tZognWwXwLuxGWZvHIw2vEIrfwoZAS5DZj1O8eSLYm2a8DJlkw0JaiBdCfqUr%2F1el%2BBPovJpD8Qa9RQ1z6EDgQUdPGK4DYS4wk7TpJxB4qUjK3a%2FNlYA74DxRhIl%2FeJXLeto3vHsC91cUzVVbmrB%2Fo6NV&X-Amz-Signature=ffb52e24965ceebc76e32523e477b5da2ac1335bb02609852ea5b03e0654e5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLFHLQA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC2cB8aUy2au2Z8e2QyiLhi6hg2qzUQCPNGLAAOmn8Q1wIgTtt8xSwYiTGp4C1yIcLEiKZtt%2Fn3THihgLBX7nJe%2BJkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe%2Fyr8eB%2B1XLBI2eCrcAz4ILr7TnescsFuNuQB2dCphzoXo2qIpaIYjA%2Fcvo13BBdQpwzymrGVAQXW6Ctfjm3OlCXH56maVavmGCxRz4NP1cdd3xRHzUIA2uk5gTyXvrVRK0CpRU9nspzWz%2F57w5zum6P9cuZuXfFlyJhYaV1%2FkRAeHBE0wvffaBd%2F66TpVNktB5pBjzdnEDKdcWakS%2B0ypFQfv8vGf829vzlV3wB95%2FJo%2Fnmka8MzJuEbZs5RWwrhPkyPCNRYCi8YgO4Ob9V%2Bl%2Flykyx%2FNJjHkfQdWVzeMq%2F3MSXHhriIP4gws54UZ3bRcltbK0b%2Fpav5xwTguLWciyNF2OCJVQNHqOP8jEbvzUFJFJ6TGMw4flIJ2uGd1Jj2a9s8szOH72uE95J%2BCajkDRVeF8RRT4YIVtfi4XW1%2BhZafLwhtMiAUMNciXSPfGbVo2IGWafjweOM8XUzYBoOn6QGZZvlOc1%2F59lhH%2Fmfubx2YN23omFjiGqOfBqAQzxeSiBvRxlmJSROdn5ptYtZ7pJ7UD3grYEm2qQH5mDVGgm0qT7aWiQNRG%2B4IvrTPVBSSBSpJuW%2FVQJBSN6m32I4%2BD3S9ZJCPtkmNu%2FT6WjV5Kzcbe9vuRI5Mg3%2BOIl7ekZxEIbsHM1vzJyThMKjY9L4GOqUBbmTAVAEMl5tPG9RQ8g9DE59Rtj9%2BtVW1fL8s%2BSK2p7e6Vz%2F3fyD6Ig0LUZNb07ENWk3tZognWwXwLuxGWZvHIw2vEIrfwoZAS5DZj1O8eSLYm2a8DJlkw0JaiBdCfqUr%2F1el%2BBPovJpD8Qa9RQ1z6EDgQUdPGK4DYS4wk7TpJxB4qUjK3a%2FNlYA74DxRhIl%2FeJXLeto3vHsC91cUzVVbmrB%2Fo6NV&X-Amz-Signature=fca5b218eb953db6662a5e852797f81d415a7275dadaeb25ab3ea41f5b0dd07c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLFHLQA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC2cB8aUy2au2Z8e2QyiLhi6hg2qzUQCPNGLAAOmn8Q1wIgTtt8xSwYiTGp4C1yIcLEiKZtt%2Fn3THihgLBX7nJe%2BJkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe%2Fyr8eB%2B1XLBI2eCrcAz4ILr7TnescsFuNuQB2dCphzoXo2qIpaIYjA%2Fcvo13BBdQpwzymrGVAQXW6Ctfjm3OlCXH56maVavmGCxRz4NP1cdd3xRHzUIA2uk5gTyXvrVRK0CpRU9nspzWz%2F57w5zum6P9cuZuXfFlyJhYaV1%2FkRAeHBE0wvffaBd%2F66TpVNktB5pBjzdnEDKdcWakS%2B0ypFQfv8vGf829vzlV3wB95%2FJo%2Fnmka8MzJuEbZs5RWwrhPkyPCNRYCi8YgO4Ob9V%2Bl%2Flykyx%2FNJjHkfQdWVzeMq%2F3MSXHhriIP4gws54UZ3bRcltbK0b%2Fpav5xwTguLWciyNF2OCJVQNHqOP8jEbvzUFJFJ6TGMw4flIJ2uGd1Jj2a9s8szOH72uE95J%2BCajkDRVeF8RRT4YIVtfi4XW1%2BhZafLwhtMiAUMNciXSPfGbVo2IGWafjweOM8XUzYBoOn6QGZZvlOc1%2F59lhH%2Fmfubx2YN23omFjiGqOfBqAQzxeSiBvRxlmJSROdn5ptYtZ7pJ7UD3grYEm2qQH5mDVGgm0qT7aWiQNRG%2B4IvrTPVBSSBSpJuW%2FVQJBSN6m32I4%2BD3S9ZJCPtkmNu%2FT6WjV5Kzcbe9vuRI5Mg3%2BOIl7ekZxEIbsHM1vzJyThMKjY9L4GOqUBbmTAVAEMl5tPG9RQ8g9DE59Rtj9%2BtVW1fL8s%2BSK2p7e6Vz%2F3fyD6Ig0LUZNb07ENWk3tZognWwXwLuxGWZvHIw2vEIrfwoZAS5DZj1O8eSLYm2a8DJlkw0JaiBdCfqUr%2F1el%2BBPovJpD8Qa9RQ1z6EDgQUdPGK4DYS4wk7TpJxB4qUjK3a%2FNlYA74DxRhIl%2FeJXLeto3vHsC91cUzVVbmrB%2Fo6NV&X-Amz-Signature=a5915b3b315c2774a5732e1c839b26cc4f3fabf9f4776a26fc39faa88e55f094&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
