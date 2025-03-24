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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZGES7Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnCi4tbWt44NeFwbnLdrVC%2BNqzBlPsHOweuQnWO8kzVAIhAMsgjNKbmPXXnMeBPITZHB%2Fp9riXfKcC6u638XBK1KkUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziM19e5lk6GVLo5N8q3APRTirkYCHMW3ajJ74EZsL74Y0EzsRppBP2SIeKATbDH7rEWvxoeDdTIgYPjvporSN1hb1Q%2BNJeJDEKI%2BDqB%2BvPK8SUAK6dwF5J123n0PTz3fFfUDwROf%2BAS00lLRjt41aipHsBnEmSErwJF4sYAvgtraACx2q%2B7DPh7yI8UFZW3BQcCf1BjBqDJwqkzAxQRDp1CiKbdqRb3Go6lHfpmfCofasmGo%2FB2ME5yJ9HytVr8z2RyKUpFMEKtcUlgkcA%2F%2BbwFQHHy0aZKASOzkvhHtut%2Fo0c7AMj8b%2BDt2%2FAUhEhGHlXLVe%2BhcXZsRcCgxEGd7r9X9hTOAZBmb0kP68TAn41l%2FJKN%2Fn77dm5JHp6sXLRQ%2FLTdl7PvyxZR%2FVTIG%2Buxt0fni%2FM%2FKGvr08DtWZvGGaoQjqyMTh%2B5PkzeFaGPKnzdR58MMZ1vEhnO8mXxY%2FHaJpkBQJAxsYSLMQoRkwVpUjQm%2BeNABCEAm3yMx1wDWM0HOdj3SxJl9f%2FJKX1X3nmlUMvfZH%2FiNqZACBq%2BnBD0S1%2FoxCJJ1FheWpQolUyapHQzhgUIjfmMUHuhIeRHt69marwh41zi8T7th0OiFNPVzuToPzf%2F%2FHQ0EcRPa8FdQ%2B4YNoh9cmtl%2BKvBvAYlDCAkIW%2FBjqkAVvruLuaUtOycjABKpEOh2h%2BVtGAfyFH%2Fo2vbor50f3%2B31I%2BAqgPnPUOzvdC5xC1UlOm1ajN9%2FobJwRYCQfg4JiDaQwupU4jVVsyLfzmh9J6T3xqbVTOsHXVAYnqr0m%2B5jycQjjTmNoRIglJM4Y0NXt%2F2Fh6NxMNcm1Vg1dweUM1QKbO25fwD5SGRIZxslmirN2c8y6F8DwmgtE2J2qv6a%2FWP2K%2B&X-Amz-Signature=0f09f10632c308e2a96df00cc87501235588dda594a82b42bf5c630cdba23a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZGES7Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnCi4tbWt44NeFwbnLdrVC%2BNqzBlPsHOweuQnWO8kzVAIhAMsgjNKbmPXXnMeBPITZHB%2Fp9riXfKcC6u638XBK1KkUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziM19e5lk6GVLo5N8q3APRTirkYCHMW3ajJ74EZsL74Y0EzsRppBP2SIeKATbDH7rEWvxoeDdTIgYPjvporSN1hb1Q%2BNJeJDEKI%2BDqB%2BvPK8SUAK6dwF5J123n0PTz3fFfUDwROf%2BAS00lLRjt41aipHsBnEmSErwJF4sYAvgtraACx2q%2B7DPh7yI8UFZW3BQcCf1BjBqDJwqkzAxQRDp1CiKbdqRb3Go6lHfpmfCofasmGo%2FB2ME5yJ9HytVr8z2RyKUpFMEKtcUlgkcA%2F%2BbwFQHHy0aZKASOzkvhHtut%2Fo0c7AMj8b%2BDt2%2FAUhEhGHlXLVe%2BhcXZsRcCgxEGd7r9X9hTOAZBmb0kP68TAn41l%2FJKN%2Fn77dm5JHp6sXLRQ%2FLTdl7PvyxZR%2FVTIG%2Buxt0fni%2FM%2FKGvr08DtWZvGGaoQjqyMTh%2B5PkzeFaGPKnzdR58MMZ1vEhnO8mXxY%2FHaJpkBQJAxsYSLMQoRkwVpUjQm%2BeNABCEAm3yMx1wDWM0HOdj3SxJl9f%2FJKX1X3nmlUMvfZH%2FiNqZACBq%2BnBD0S1%2FoxCJJ1FheWpQolUyapHQzhgUIjfmMUHuhIeRHt69marwh41zi8T7th0OiFNPVzuToPzf%2F%2FHQ0EcRPa8FdQ%2B4YNoh9cmtl%2BKvBvAYlDCAkIW%2FBjqkAVvruLuaUtOycjABKpEOh2h%2BVtGAfyFH%2Fo2vbor50f3%2B31I%2BAqgPnPUOzvdC5xC1UlOm1ajN9%2FobJwRYCQfg4JiDaQwupU4jVVsyLfzmh9J6T3xqbVTOsHXVAYnqr0m%2B5jycQjjTmNoRIglJM4Y0NXt%2F2Fh6NxMNcm1Vg1dweUM1QKbO25fwD5SGRIZxslmirN2c8y6F8DwmgtE2J2qv6a%2FWP2K%2B&X-Amz-Signature=0e6610986d474f893da897b6827e421a98b042296423a2e6043043336160c029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZGES7Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnCi4tbWt44NeFwbnLdrVC%2BNqzBlPsHOweuQnWO8kzVAIhAMsgjNKbmPXXnMeBPITZHB%2Fp9riXfKcC6u638XBK1KkUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziM19e5lk6GVLo5N8q3APRTirkYCHMW3ajJ74EZsL74Y0EzsRppBP2SIeKATbDH7rEWvxoeDdTIgYPjvporSN1hb1Q%2BNJeJDEKI%2BDqB%2BvPK8SUAK6dwF5J123n0PTz3fFfUDwROf%2BAS00lLRjt41aipHsBnEmSErwJF4sYAvgtraACx2q%2B7DPh7yI8UFZW3BQcCf1BjBqDJwqkzAxQRDp1CiKbdqRb3Go6lHfpmfCofasmGo%2FB2ME5yJ9HytVr8z2RyKUpFMEKtcUlgkcA%2F%2BbwFQHHy0aZKASOzkvhHtut%2Fo0c7AMj8b%2BDt2%2FAUhEhGHlXLVe%2BhcXZsRcCgxEGd7r9X9hTOAZBmb0kP68TAn41l%2FJKN%2Fn77dm5JHp6sXLRQ%2FLTdl7PvyxZR%2FVTIG%2Buxt0fni%2FM%2FKGvr08DtWZvGGaoQjqyMTh%2B5PkzeFaGPKnzdR58MMZ1vEhnO8mXxY%2FHaJpkBQJAxsYSLMQoRkwVpUjQm%2BeNABCEAm3yMx1wDWM0HOdj3SxJl9f%2FJKX1X3nmlUMvfZH%2FiNqZACBq%2BnBD0S1%2FoxCJJ1FheWpQolUyapHQzhgUIjfmMUHuhIeRHt69marwh41zi8T7th0OiFNPVzuToPzf%2F%2FHQ0EcRPa8FdQ%2B4YNoh9cmtl%2BKvBvAYlDCAkIW%2FBjqkAVvruLuaUtOycjABKpEOh2h%2BVtGAfyFH%2Fo2vbor50f3%2B31I%2BAqgPnPUOzvdC5xC1UlOm1ajN9%2FobJwRYCQfg4JiDaQwupU4jVVsyLfzmh9J6T3xqbVTOsHXVAYnqr0m%2B5jycQjjTmNoRIglJM4Y0NXt%2F2Fh6NxMNcm1Vg1dweUM1QKbO25fwD5SGRIZxslmirN2c8y6F8DwmgtE2J2qv6a%2FWP2K%2B&X-Amz-Signature=09cd046f8d4b53e284ca901b14dbf41ec24dd1e6c7d314aa8ac14f22c92bd415&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
