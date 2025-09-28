---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCE7IBN%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCWOEAaThd1BK3lglrGaM73jazsEb6bQ0Go%2B0vsf%2FDf9gIgb%2BU5wmHaaENGmhv9QU%2FHo6ETqPJ%2Bq%2Fyi0nWTcoRR6LwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4SMdPkI0yo1AUGQSrcAyLb3ko4IvvnGS4cGMMEleukmWsZ1mmKz%2FLyClwcbmV4f%2BP%2BQM1o0cilKje8aWTGtxIr1sb10NwbqWLSePcCDkj26NZZ3sN0UXT3iCDbMVEh9kQBfax8aH3%2FCFbCmQUVaD633hWoBVs6ZVFVJNGG7sDV2feXLXeP4BZLXka8N5xD3o1axA86l3MxMhKfCegPx7x54qzoPM354jN%2FRQoNy2Pvu5rNmtud%2FWzkv6%2FAZqJAhS75VNxpL5dhQRTO5UuLtkdacfh09EN6W6ugAbOg6emovIUuFPTXNGpCgCsLuL1SMfdYxzoVdjpXTyjKpOxYZ8zcOlUnnX9Y8EOIC%2FCx5sCDgqb472g%2FH%2BLCNT59%2FzpLWgCouKv106vDWaE3hL3MME6jxBC0ydQGGVysQXnTbCw16toDmFPXfm0Fj0vA6u%2F9HK1wls1C6vJawwH9hVyxw7uujSno63gZ1qmAybrbKGUW7qp%2BIM0of%2FbHlSiuxBnCN3m2pz8W0%2Bpe2sE1gVxMpoAlPptg00zMYjgCmegL%2BKFKAgB8QwMLPGwm1CRo0QoEdn0YDxbVRR%2FqNDUP5QZLNlUEXGHXQLauCG%2FGYY%2BAvkFjWd4M5d%2BLOwVXEJ7ppcJ6NT3SbNcTQ%2FLUY1OdMI6%2F4cYGOqUBpUsUtQU6AbmZV0DFTqXwR4h3RVdt6jdnDPXwQTIZF5KFuuPndjIG%2BkRW6pAjBbwbwyezGokFrIvvsnYKjy1%2BiukP%2BAyJJeReyU4ecY5optMO9CUzvwOgiZQzHBsAUk6ZKwcwm64NYb%2BOL6U%2B0U7pVjAg7RcE6cFt%2FU9eRQIAIZJbiiHC%2Fbg4UwRvAL6DGX0fuVMhrahhylOSltXnWHyWc5LJCIp4&X-Amz-Signature=fa7bbc323ec0f9463d95ddef8f4702cb88a3f8440191f281c3920ff09fb00443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCE7IBN%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCWOEAaThd1BK3lglrGaM73jazsEb6bQ0Go%2B0vsf%2FDf9gIgb%2BU5wmHaaENGmhv9QU%2FHo6ETqPJ%2Bq%2Fyi0nWTcoRR6LwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4SMdPkI0yo1AUGQSrcAyLb3ko4IvvnGS4cGMMEleukmWsZ1mmKz%2FLyClwcbmV4f%2BP%2BQM1o0cilKje8aWTGtxIr1sb10NwbqWLSePcCDkj26NZZ3sN0UXT3iCDbMVEh9kQBfax8aH3%2FCFbCmQUVaD633hWoBVs6ZVFVJNGG7sDV2feXLXeP4BZLXka8N5xD3o1axA86l3MxMhKfCegPx7x54qzoPM354jN%2FRQoNy2Pvu5rNmtud%2FWzkv6%2FAZqJAhS75VNxpL5dhQRTO5UuLtkdacfh09EN6W6ugAbOg6emovIUuFPTXNGpCgCsLuL1SMfdYxzoVdjpXTyjKpOxYZ8zcOlUnnX9Y8EOIC%2FCx5sCDgqb472g%2FH%2BLCNT59%2FzpLWgCouKv106vDWaE3hL3MME6jxBC0ydQGGVysQXnTbCw16toDmFPXfm0Fj0vA6u%2F9HK1wls1C6vJawwH9hVyxw7uujSno63gZ1qmAybrbKGUW7qp%2BIM0of%2FbHlSiuxBnCN3m2pz8W0%2Bpe2sE1gVxMpoAlPptg00zMYjgCmegL%2BKFKAgB8QwMLPGwm1CRo0QoEdn0YDxbVRR%2FqNDUP5QZLNlUEXGHXQLauCG%2FGYY%2BAvkFjWd4M5d%2BLOwVXEJ7ppcJ6NT3SbNcTQ%2FLUY1OdMI6%2F4cYGOqUBpUsUtQU6AbmZV0DFTqXwR4h3RVdt6jdnDPXwQTIZF5KFuuPndjIG%2BkRW6pAjBbwbwyezGokFrIvvsnYKjy1%2BiukP%2BAyJJeReyU4ecY5optMO9CUzvwOgiZQzHBsAUk6ZKwcwm64NYb%2BOL6U%2B0U7pVjAg7RcE6cFt%2FU9eRQIAIZJbiiHC%2Fbg4UwRvAL6DGX0fuVMhrahhylOSltXnWHyWc5LJCIp4&X-Amz-Signature=b0e070fe53d5adebb559364704379941c8f1e93e189d944069a66fff7fad25ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCE7IBN%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCWOEAaThd1BK3lglrGaM73jazsEb6bQ0Go%2B0vsf%2FDf9gIgb%2BU5wmHaaENGmhv9QU%2FHo6ETqPJ%2Bq%2Fyi0nWTcoRR6LwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4SMdPkI0yo1AUGQSrcAyLb3ko4IvvnGS4cGMMEleukmWsZ1mmKz%2FLyClwcbmV4f%2BP%2BQM1o0cilKje8aWTGtxIr1sb10NwbqWLSePcCDkj26NZZ3sN0UXT3iCDbMVEh9kQBfax8aH3%2FCFbCmQUVaD633hWoBVs6ZVFVJNGG7sDV2feXLXeP4BZLXka8N5xD3o1axA86l3MxMhKfCegPx7x54qzoPM354jN%2FRQoNy2Pvu5rNmtud%2FWzkv6%2FAZqJAhS75VNxpL5dhQRTO5UuLtkdacfh09EN6W6ugAbOg6emovIUuFPTXNGpCgCsLuL1SMfdYxzoVdjpXTyjKpOxYZ8zcOlUnnX9Y8EOIC%2FCx5sCDgqb472g%2FH%2BLCNT59%2FzpLWgCouKv106vDWaE3hL3MME6jxBC0ydQGGVysQXnTbCw16toDmFPXfm0Fj0vA6u%2F9HK1wls1C6vJawwH9hVyxw7uujSno63gZ1qmAybrbKGUW7qp%2BIM0of%2FbHlSiuxBnCN3m2pz8W0%2Bpe2sE1gVxMpoAlPptg00zMYjgCmegL%2BKFKAgB8QwMLPGwm1CRo0QoEdn0YDxbVRR%2FqNDUP5QZLNlUEXGHXQLauCG%2FGYY%2BAvkFjWd4M5d%2BLOwVXEJ7ppcJ6NT3SbNcTQ%2FLUY1OdMI6%2F4cYGOqUBpUsUtQU6AbmZV0DFTqXwR4h3RVdt6jdnDPXwQTIZF5KFuuPndjIG%2BkRW6pAjBbwbwyezGokFrIvvsnYKjy1%2BiukP%2BAyJJeReyU4ecY5optMO9CUzvwOgiZQzHBsAUk6ZKwcwm64NYb%2BOL6U%2B0U7pVjAg7RcE6cFt%2FU9eRQIAIZJbiiHC%2Fbg4UwRvAL6DGX0fuVMhrahhylOSltXnWHyWc5LJCIp4&X-Amz-Signature=56ca86b03697bf3682e801afa73355c819477a54b5ac618d4505191b10d1123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
