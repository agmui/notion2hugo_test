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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KUZHFIU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKHJ4%2BeZtYzZR5afbEyqI29pjtdE4SEATnOZKcMx5c4AiAvnKSfnurxLX46PZVxYJc4obl9EnvIJvSkfeDiXI1D0ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMu9jM4skCNaDI9yK8KtwDI25MT%2BcRt1qIRiiyakJih7ftm%2FVYlJfa8SANIb7lEVEDK4OKHqZ8yS2kIoHLWPoO0Eplk3yje95K%2FlITIqWigj0VebOr0k81xONnXM%2Bt0ph9%2BrRL%2BhlwH%2BwfCj9f3JfIAyGyzpcHaPNU3tc5Q9P7yOFIuknR5F11z%2BolO01VejDM%2Bvuua2UGZmRknKCAxudVOZ8x9kwE5MJ8B21srDfUNBnj2rougKBiLt3IEfX%2BVJmVhkLTTYjYe1X5qyLKnVfCl8IleHRHVO4PDE%2FwXTm0WeDZxjIvyW%2FpoPytprB1r5NEFJ9KrClNEXOEO8AtbvynjIM0QfUqdQfmkqVVZf16I%2Bz0a3uuygLWjr%2BPBrJmNnxhS0XDoU9O9wC0xjeSsw54qSuAgd2bDqkMeHAUIs%2BneRX%2FuX%2BappXgkyicKxZkt%2BzbOW2YhcO3sInjJWJG5WM%2BadNhgTk9E7CSOdVS0ONzxJuQtEm5c0e%2FErUsG4tFDcaFtj30s%2FhkQ0xsUvbEkdfnS14N0e%2BRFIsiPVYZ7iDnie0vAswAi0HtrR95vUzqf5OoxwOd7I%2FNKkJiWzkPuRBRuH8Jd%2BGdIGCEe%2BpsWV8KVsL6RVxGXQs7cu0SSzw%2BC28%2F%2FRVz2IoZkqvoi3Yw89%2BrwAY6pgH1E3Mbbg2laJbFBQ5OsuHaGQCjvfkdTiHgwKfI4May6OVOPJSBzlGb37AU%2FFnbo5YmIaw%2BhbS8u6%2B%2BRn9iKBfODllQ1oKxzG7Euvml4%2FWLBuqEO%2BQDxOg7uwKXrax%2BhMHRhOeMXrM0hWPhGJ6L7aAKstn7I2zEry1YBXrF2t9dxYvTw%2B%2BdV6TPIHICN0GcBg27Imhip32Pg8bGx2H1Vp8%2BsXSbNYJ4&X-Amz-Signature=0b1ab2d29f08901c6fc8676f4f2a9d636a72231bfa3637dccfab209a99cd4d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KUZHFIU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKHJ4%2BeZtYzZR5afbEyqI29pjtdE4SEATnOZKcMx5c4AiAvnKSfnurxLX46PZVxYJc4obl9EnvIJvSkfeDiXI1D0ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMu9jM4skCNaDI9yK8KtwDI25MT%2BcRt1qIRiiyakJih7ftm%2FVYlJfa8SANIb7lEVEDK4OKHqZ8yS2kIoHLWPoO0Eplk3yje95K%2FlITIqWigj0VebOr0k81xONnXM%2Bt0ph9%2BrRL%2BhlwH%2BwfCj9f3JfIAyGyzpcHaPNU3tc5Q9P7yOFIuknR5F11z%2BolO01VejDM%2Bvuua2UGZmRknKCAxudVOZ8x9kwE5MJ8B21srDfUNBnj2rougKBiLt3IEfX%2BVJmVhkLTTYjYe1X5qyLKnVfCl8IleHRHVO4PDE%2FwXTm0WeDZxjIvyW%2FpoPytprB1r5NEFJ9KrClNEXOEO8AtbvynjIM0QfUqdQfmkqVVZf16I%2Bz0a3uuygLWjr%2BPBrJmNnxhS0XDoU9O9wC0xjeSsw54qSuAgd2bDqkMeHAUIs%2BneRX%2FuX%2BappXgkyicKxZkt%2BzbOW2YhcO3sInjJWJG5WM%2BadNhgTk9E7CSOdVS0ONzxJuQtEm5c0e%2FErUsG4tFDcaFtj30s%2FhkQ0xsUvbEkdfnS14N0e%2BRFIsiPVYZ7iDnie0vAswAi0HtrR95vUzqf5OoxwOd7I%2FNKkJiWzkPuRBRuH8Jd%2BGdIGCEe%2BpsWV8KVsL6RVxGXQs7cu0SSzw%2BC28%2F%2FRVz2IoZkqvoi3Yw89%2BrwAY6pgH1E3Mbbg2laJbFBQ5OsuHaGQCjvfkdTiHgwKfI4May6OVOPJSBzlGb37AU%2FFnbo5YmIaw%2BhbS8u6%2B%2BRn9iKBfODllQ1oKxzG7Euvml4%2FWLBuqEO%2BQDxOg7uwKXrax%2BhMHRhOeMXrM0hWPhGJ6L7aAKstn7I2zEry1YBXrF2t9dxYvTw%2B%2BdV6TPIHICN0GcBg27Imhip32Pg8bGx2H1Vp8%2BsXSbNYJ4&X-Amz-Signature=1f86822554db9b8fd6e5a44cf8f930e0c85f128b595d45fdd0dd33ddbc448f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KUZHFIU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKHJ4%2BeZtYzZR5afbEyqI29pjtdE4SEATnOZKcMx5c4AiAvnKSfnurxLX46PZVxYJc4obl9EnvIJvSkfeDiXI1D0ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMu9jM4skCNaDI9yK8KtwDI25MT%2BcRt1qIRiiyakJih7ftm%2FVYlJfa8SANIb7lEVEDK4OKHqZ8yS2kIoHLWPoO0Eplk3yje95K%2FlITIqWigj0VebOr0k81xONnXM%2Bt0ph9%2BrRL%2BhlwH%2BwfCj9f3JfIAyGyzpcHaPNU3tc5Q9P7yOFIuknR5F11z%2BolO01VejDM%2Bvuua2UGZmRknKCAxudVOZ8x9kwE5MJ8B21srDfUNBnj2rougKBiLt3IEfX%2BVJmVhkLTTYjYe1X5qyLKnVfCl8IleHRHVO4PDE%2FwXTm0WeDZxjIvyW%2FpoPytprB1r5NEFJ9KrClNEXOEO8AtbvynjIM0QfUqdQfmkqVVZf16I%2Bz0a3uuygLWjr%2BPBrJmNnxhS0XDoU9O9wC0xjeSsw54qSuAgd2bDqkMeHAUIs%2BneRX%2FuX%2BappXgkyicKxZkt%2BzbOW2YhcO3sInjJWJG5WM%2BadNhgTk9E7CSOdVS0ONzxJuQtEm5c0e%2FErUsG4tFDcaFtj30s%2FhkQ0xsUvbEkdfnS14N0e%2BRFIsiPVYZ7iDnie0vAswAi0HtrR95vUzqf5OoxwOd7I%2FNKkJiWzkPuRBRuH8Jd%2BGdIGCEe%2BpsWV8KVsL6RVxGXQs7cu0SSzw%2BC28%2F%2FRVz2IoZkqvoi3Yw89%2BrwAY6pgH1E3Mbbg2laJbFBQ5OsuHaGQCjvfkdTiHgwKfI4May6OVOPJSBzlGb37AU%2FFnbo5YmIaw%2BhbS8u6%2B%2BRn9iKBfODllQ1oKxzG7Euvml4%2FWLBuqEO%2BQDxOg7uwKXrax%2BhMHRhOeMXrM0hWPhGJ6L7aAKstn7I2zEry1YBXrF2t9dxYvTw%2B%2BdV6TPIHICN0GcBg27Imhip32Pg8bGx2H1Vp8%2BsXSbNYJ4&X-Amz-Signature=6f337fac4f1baa1a0f9c1c3c435ba955d5fcdc146bbcfa8f75d7b95cf865e3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
