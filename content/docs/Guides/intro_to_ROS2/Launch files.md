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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBKBIF2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOJAN1FkbOXBthyj0JtNJkRR9ZnBOBz9L%2FwnaJeDaiTAiAQbtfVi55vWAcpaGFAdc3QVhzDBBoyYv%2BhZ8kh4UbuFSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFc779%2Be1QgtH4A%2BKtwD6ZINwF%2FmSW%2FVDIyUdaspfPJ%2F1%2BX45ZkLc42nwCzz6vBDSmzFYMHi4wKXh8qigSQKVLOSWam6TKRibDMmrsASRhDMDS%2B8pQQ3kuHcwq48nEMWsDawKbMD7vsFBXSESF4oO8%2Fj0aqVXMhzzucrS%2Bcb2YKFDh%2B2AmuhLEpUguFs4O5P9dWxuRCzUOVa7TB3LPMG3YfxnBsVBcDhbUDpjjTF1%2FLlz3y4%2FS6LyxHIftYSg1IVt0rVdmHB%2FymXcpPnwaSTbhGrGtIHq0wuLgfvAKQfvNvW7kht9URPdTr94tBBcWLOridkkKmXNtEQj9%2FMMGVOVoka%2BybNgh6WXFVL11G%2F69ggErJiKkCGvv9By%2Fp8qMq4zl4ReMmL1cl0qcQapF%2FdZzMLeP6LAP47AfgMB2M7tZUbltEP%2BWlfnVSRGlEmYpX9bhZM0cbB2tp2Q4s5BLBJDp1bktI1YpdbPebIHG4L8naN%2BOQDaVQcqYYHBWBfZ8IkYysUdM2aG1S6a52oCQhhdULy52AX71EZGskHHYwD9%2F157WjuvBVjw%2FC2vWHaXjPS9nDb8vzIOWmlqNRMdGiffkBUcqQsPilfdlAe96B0JoSamO7t0LHrceh0UVkaplWO%2F4uqpZc%2FvktQETIwipuSvgY6pgFzzf%2BBrbnXRUN0ZHAtw7jEgHAFjmD1RhbLe%2BH9JRY545waS%2FQmEfua7ymKAp1UiLl2FutY%2FP5iFLCAELwt9jQqK20MnDqHXZNUDUYAVlXsZ561W2UG8zeKiX0fhpCuVanhCWqR9mD40YpnJDx0BqtdyblaJFq695uGb0kvsh68ktyJYdZAmXXbnthh1zCeHT9F9W3o0tbviIJQ1h8lLhmIM2Yfl%2BqA&X-Amz-Signature=c120ae8ab5d1a802bd584f6077eae9b2eec1523ca4a7b45e7dd98414fc202e44&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBKBIF2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOJAN1FkbOXBthyj0JtNJkRR9ZnBOBz9L%2FwnaJeDaiTAiAQbtfVi55vWAcpaGFAdc3QVhzDBBoyYv%2BhZ8kh4UbuFSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFc779%2Be1QgtH4A%2BKtwD6ZINwF%2FmSW%2FVDIyUdaspfPJ%2F1%2BX45ZkLc42nwCzz6vBDSmzFYMHi4wKXh8qigSQKVLOSWam6TKRibDMmrsASRhDMDS%2B8pQQ3kuHcwq48nEMWsDawKbMD7vsFBXSESF4oO8%2Fj0aqVXMhzzucrS%2Bcb2YKFDh%2B2AmuhLEpUguFs4O5P9dWxuRCzUOVa7TB3LPMG3YfxnBsVBcDhbUDpjjTF1%2FLlz3y4%2FS6LyxHIftYSg1IVt0rVdmHB%2FymXcpPnwaSTbhGrGtIHq0wuLgfvAKQfvNvW7kht9URPdTr94tBBcWLOridkkKmXNtEQj9%2FMMGVOVoka%2BybNgh6WXFVL11G%2F69ggErJiKkCGvv9By%2Fp8qMq4zl4ReMmL1cl0qcQapF%2FdZzMLeP6LAP47AfgMB2M7tZUbltEP%2BWlfnVSRGlEmYpX9bhZM0cbB2tp2Q4s5BLBJDp1bktI1YpdbPebIHG4L8naN%2BOQDaVQcqYYHBWBfZ8IkYysUdM2aG1S6a52oCQhhdULy52AX71EZGskHHYwD9%2F157WjuvBVjw%2FC2vWHaXjPS9nDb8vzIOWmlqNRMdGiffkBUcqQsPilfdlAe96B0JoSamO7t0LHrceh0UVkaplWO%2F4uqpZc%2FvktQETIwipuSvgY6pgFzzf%2BBrbnXRUN0ZHAtw7jEgHAFjmD1RhbLe%2BH9JRY545waS%2FQmEfua7ymKAp1UiLl2FutY%2FP5iFLCAELwt9jQqK20MnDqHXZNUDUYAVlXsZ561W2UG8zeKiX0fhpCuVanhCWqR9mD40YpnJDx0BqtdyblaJFq695uGb0kvsh68ktyJYdZAmXXbnthh1zCeHT9F9W3o0tbviIJQ1h8lLhmIM2Yfl%2BqA&X-Amz-Signature=5bde674011896e5849ca8985b3fd399f4797da1506254679e8639ed57a9c6e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBKBIF2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOJAN1FkbOXBthyj0JtNJkRR9ZnBOBz9L%2FwnaJeDaiTAiAQbtfVi55vWAcpaGFAdc3QVhzDBBoyYv%2BhZ8kh4UbuFSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFc779%2Be1QgtH4A%2BKtwD6ZINwF%2FmSW%2FVDIyUdaspfPJ%2F1%2BX45ZkLc42nwCzz6vBDSmzFYMHi4wKXh8qigSQKVLOSWam6TKRibDMmrsASRhDMDS%2B8pQQ3kuHcwq48nEMWsDawKbMD7vsFBXSESF4oO8%2Fj0aqVXMhzzucrS%2Bcb2YKFDh%2B2AmuhLEpUguFs4O5P9dWxuRCzUOVa7TB3LPMG3YfxnBsVBcDhbUDpjjTF1%2FLlz3y4%2FS6LyxHIftYSg1IVt0rVdmHB%2FymXcpPnwaSTbhGrGtIHq0wuLgfvAKQfvNvW7kht9URPdTr94tBBcWLOridkkKmXNtEQj9%2FMMGVOVoka%2BybNgh6WXFVL11G%2F69ggErJiKkCGvv9By%2Fp8qMq4zl4ReMmL1cl0qcQapF%2FdZzMLeP6LAP47AfgMB2M7tZUbltEP%2BWlfnVSRGlEmYpX9bhZM0cbB2tp2Q4s5BLBJDp1bktI1YpdbPebIHG4L8naN%2BOQDaVQcqYYHBWBfZ8IkYysUdM2aG1S6a52oCQhhdULy52AX71EZGskHHYwD9%2F157WjuvBVjw%2FC2vWHaXjPS9nDb8vzIOWmlqNRMdGiffkBUcqQsPilfdlAe96B0JoSamO7t0LHrceh0UVkaplWO%2F4uqpZc%2FvktQETIwipuSvgY6pgFzzf%2BBrbnXRUN0ZHAtw7jEgHAFjmD1RhbLe%2BH9JRY545waS%2FQmEfua7ymKAp1UiLl2FutY%2FP5iFLCAELwt9jQqK20MnDqHXZNUDUYAVlXsZ561W2UG8zeKiX0fhpCuVanhCWqR9mD40YpnJDx0BqtdyblaJFq695uGb0kvsh68ktyJYdZAmXXbnthh1zCeHT9F9W3o0tbviIJQ1h8lLhmIM2Yfl%2BqA&X-Amz-Signature=68a63fe6f935bf2be03daa20bbab3ec457d8d9be0e9f721a5056bb41f994e0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
