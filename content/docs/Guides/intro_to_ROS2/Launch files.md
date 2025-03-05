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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKOCZ3E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyG%2FqaNCs5r3%2BVb1RPD74Oz%2B2vbxbqYCbOnSN7MaaToAiEA4xpOKRiym3ypwsPT%2Bpucg6gh1VnC86qSoxW%2F%2BhUXmYEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FNNeJn%2FLJNaY6YiSrcA%2FtfKkshma2aLuzPN3nloc8xWmTj8n%2Bu6pDxYfeDRJE4a5WHUNi4Hd1oAJJ9QidtCpeYrwZiIRpbja%2B88keTL%2Fim54olRDlXcsV1S5X4ZeZhOxHuSJ7tJdaZrRaVEbemkthS3%2BUIbAOrFQGGxAmX67xw7gGVTD0TgO8lTVVjwVP5ZeJii5G8XEati233wCuPnlti22aD3kOXIXRaEI8A4YVRXVLwR0ZJpnbDuGdplqX1lJ2Ht%2BegxUmgjJAvAZ%2FZjXZBBWFItf4cG%2BdNULbeQqTT4zYPDE00FXPNWc7tg5hpdlXalMgKTjOCXN6ovSBPdHZ%2B28K%2FbuuHfpFGpfHjbCtn%2FR%2FaTzEmaiOY8y3BulXC0kB7OAFJHeEx43%2Bc1UD8tHnKtAL2qhNX6%2BCvJO89iB%2FWArLnEHSU45DDuwc9AuxFaeCWdfFBCtW7GoHSCHOEwb5Cy603d%2F3UlW42GxaGeMLYGpgogRNoKensaMIrW0JNvFsrAOsZwLHOeZ5Tj320y2UVHgWd4fuH7c2wtnb6Z1y8OcQ1phA8lS1ZHqYrWhUIIMBKJVasykQ%2FgEXwMaFGGItVb5tDCRjzbvPt7tyexkBScix0%2FdIhZDiKmFiXOXfZDXYSunFsFV%2FJutnzMK3Kn74GOqUBJWV5MZ4ABUdMWO%2BzRb6H4%2FjoS%2BxV2Z%2FQ3bPcneo%2BhQsrd5WMlQ2qhmi%2B5mfZ1Odgg0IpaWBBKtSh8tVKSqZzwq1BEt9HL3AcxNxrBbp959QpfI7MKymNJtvnprlhl1amVW7vBK5Irz7UXoWwqGXdXbyDp8%2B1Srm69yuUFPIoH8WSGZxK0zNSQPZA0qAQOXy0Fjzb37lacD22bRLt6MS0Y107Yfyp&X-Amz-Signature=106de33daa46af0bc42b5851e3bc36c872fe90393200aac968858b913f155397&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKOCZ3E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyG%2FqaNCs5r3%2BVb1RPD74Oz%2B2vbxbqYCbOnSN7MaaToAiEA4xpOKRiym3ypwsPT%2Bpucg6gh1VnC86qSoxW%2F%2BhUXmYEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FNNeJn%2FLJNaY6YiSrcA%2FtfKkshma2aLuzPN3nloc8xWmTj8n%2Bu6pDxYfeDRJE4a5WHUNi4Hd1oAJJ9QidtCpeYrwZiIRpbja%2B88keTL%2Fim54olRDlXcsV1S5X4ZeZhOxHuSJ7tJdaZrRaVEbemkthS3%2BUIbAOrFQGGxAmX67xw7gGVTD0TgO8lTVVjwVP5ZeJii5G8XEati233wCuPnlti22aD3kOXIXRaEI8A4YVRXVLwR0ZJpnbDuGdplqX1lJ2Ht%2BegxUmgjJAvAZ%2FZjXZBBWFItf4cG%2BdNULbeQqTT4zYPDE00FXPNWc7tg5hpdlXalMgKTjOCXN6ovSBPdHZ%2B28K%2FbuuHfpFGpfHjbCtn%2FR%2FaTzEmaiOY8y3BulXC0kB7OAFJHeEx43%2Bc1UD8tHnKtAL2qhNX6%2BCvJO89iB%2FWArLnEHSU45DDuwc9AuxFaeCWdfFBCtW7GoHSCHOEwb5Cy603d%2F3UlW42GxaGeMLYGpgogRNoKensaMIrW0JNvFsrAOsZwLHOeZ5Tj320y2UVHgWd4fuH7c2wtnb6Z1y8OcQ1phA8lS1ZHqYrWhUIIMBKJVasykQ%2FgEXwMaFGGItVb5tDCRjzbvPt7tyexkBScix0%2FdIhZDiKmFiXOXfZDXYSunFsFV%2FJutnzMK3Kn74GOqUBJWV5MZ4ABUdMWO%2BzRb6H4%2FjoS%2BxV2Z%2FQ3bPcneo%2BhQsrd5WMlQ2qhmi%2B5mfZ1Odgg0IpaWBBKtSh8tVKSqZzwq1BEt9HL3AcxNxrBbp959QpfI7MKymNJtvnprlhl1amVW7vBK5Irz7UXoWwqGXdXbyDp8%2B1Srm69yuUFPIoH8WSGZxK0zNSQPZA0qAQOXy0Fjzb37lacD22bRLt6MS0Y107Yfyp&X-Amz-Signature=c1ce9dbc0d8dc6d4612af5d0e05c1b8ee98ba3faf5afe5d9892d822d7312ad98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKOCZ3E%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyG%2FqaNCs5r3%2BVb1RPD74Oz%2B2vbxbqYCbOnSN7MaaToAiEA4xpOKRiym3ypwsPT%2Bpucg6gh1VnC86qSoxW%2F%2BhUXmYEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FNNeJn%2FLJNaY6YiSrcA%2FtfKkshma2aLuzPN3nloc8xWmTj8n%2Bu6pDxYfeDRJE4a5WHUNi4Hd1oAJJ9QidtCpeYrwZiIRpbja%2B88keTL%2Fim54olRDlXcsV1S5X4ZeZhOxHuSJ7tJdaZrRaVEbemkthS3%2BUIbAOrFQGGxAmX67xw7gGVTD0TgO8lTVVjwVP5ZeJii5G8XEati233wCuPnlti22aD3kOXIXRaEI8A4YVRXVLwR0ZJpnbDuGdplqX1lJ2Ht%2BegxUmgjJAvAZ%2FZjXZBBWFItf4cG%2BdNULbeQqTT4zYPDE00FXPNWc7tg5hpdlXalMgKTjOCXN6ovSBPdHZ%2B28K%2FbuuHfpFGpfHjbCtn%2FR%2FaTzEmaiOY8y3BulXC0kB7OAFJHeEx43%2Bc1UD8tHnKtAL2qhNX6%2BCvJO89iB%2FWArLnEHSU45DDuwc9AuxFaeCWdfFBCtW7GoHSCHOEwb5Cy603d%2F3UlW42GxaGeMLYGpgogRNoKensaMIrW0JNvFsrAOsZwLHOeZ5Tj320y2UVHgWd4fuH7c2wtnb6Z1y8OcQ1phA8lS1ZHqYrWhUIIMBKJVasykQ%2FgEXwMaFGGItVb5tDCRjzbvPt7tyexkBScix0%2FdIhZDiKmFiXOXfZDXYSunFsFV%2FJutnzMK3Kn74GOqUBJWV5MZ4ABUdMWO%2BzRb6H4%2FjoS%2BxV2Z%2FQ3bPcneo%2BhQsrd5WMlQ2qhmi%2B5mfZ1Odgg0IpaWBBKtSh8tVKSqZzwq1BEt9HL3AcxNxrBbp959QpfI7MKymNJtvnprlhl1amVW7vBK5Irz7UXoWwqGXdXbyDp8%2B1Srm69yuUFPIoH8WSGZxK0zNSQPZA0qAQOXy0Fjzb37lacD22bRLt6MS0Y107Yfyp&X-Amz-Signature=3de9f53d51f3cf5760636ae26d85f9a6ed4c5ba0c9d42ff0c43ec0c347337639&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
