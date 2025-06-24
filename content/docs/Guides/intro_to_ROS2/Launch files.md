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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2HR6H7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDtpkPeE6PvuLhY7QRBNx00FtDldPP4Y79manq0ZTstywIhAJtco8zLgCAdDfrVz8xyn3nhWOT33Tyn7cuGlas4UJmVKv8DCDEQABoMNjM3NDIzMTgzODA1IgzoRO4OwBipcqYooDAq3AN8y650p0PdSLhX7CXr3gSSH5RaFdYV6jl0deLgSIm8fz4u5Qhr%2FP8GsypDkBemmDysn1hWeIDMGvGcwcISj1f9zuXkMWQw5kO6h4qHH8z0EsmvrUX0GltEVFeUMb%2B9oGJNY3NLtxYRulpFCijnT1wySpb1gwFCvwj9z%2FZCKLpnfR60QHf1rPgCYF1btVLmEvAA%2BhUIeGavEoYh%2BPrmtwh%2B2uQb9gjrC7my6dpEZbhG%2FdUHJlTjOwDBkGyohnCaZmRpC05uSRd80vZx6orAAEPHjUXujT7naFpwDA5n4i5FzutwG2syto%2F6KOznKB1mVSVEKvAVyekZL6lTL2lPfAFGB6t0x%2BHD%2BrB58jQo%2B%2FHelo267VmIXx6VczUMtYwV1zS%2BwTriRSWshYE8Y3uAWfqiAzK20P78BICV%2F78Oi4zn6IrKOFLgIZ3Qej9LOOy2lTeHs9tOI7q%2F1bhDu%2FMSC5pgsNXNiQKg6VNZotD%2BuyDXCpVccWg0rSrmAQCirXkINdh4cgXrNkMpBbDNXT1pdm97VdP9%2F2MjErEwI9Y0mG99CQpbwcaQ46ACDf37bMDMqkM9c8MQ0%2BUpJ18abiWS52S8xynDjscJezAiPBBO%2FTG7Va52Jkc%2BMLfZpVDhATD2j%2BvCBjqkASfAy%2FF3cbvVYW%2FKE%2BCEjG996kez3o6IIagotAxqz5P1my1e7SZhHm4SiqEfAIFXaloJLVTflBeTFKaaPDduJVetMLVrBN9FgQwGHks1MNCyNSeg76is0pdjRlobl7TSLDaZHu2YgpRO8nIs4e0gI4JawiSTXZvl2bF4C6TxUrDTm210J23l%2FjsYJuZ11vokarO85GJRKsg%2Bae0Mm0WKDaYOg7Yn&X-Amz-Signature=8b308b220a16fe27ad4bf49c1ab78a2e3e43d4a7803d77ea7fc284e01e64d3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2HR6H7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDtpkPeE6PvuLhY7QRBNx00FtDldPP4Y79manq0ZTstywIhAJtco8zLgCAdDfrVz8xyn3nhWOT33Tyn7cuGlas4UJmVKv8DCDEQABoMNjM3NDIzMTgzODA1IgzoRO4OwBipcqYooDAq3AN8y650p0PdSLhX7CXr3gSSH5RaFdYV6jl0deLgSIm8fz4u5Qhr%2FP8GsypDkBemmDysn1hWeIDMGvGcwcISj1f9zuXkMWQw5kO6h4qHH8z0EsmvrUX0GltEVFeUMb%2B9oGJNY3NLtxYRulpFCijnT1wySpb1gwFCvwj9z%2FZCKLpnfR60QHf1rPgCYF1btVLmEvAA%2BhUIeGavEoYh%2BPrmtwh%2B2uQb9gjrC7my6dpEZbhG%2FdUHJlTjOwDBkGyohnCaZmRpC05uSRd80vZx6orAAEPHjUXujT7naFpwDA5n4i5FzutwG2syto%2F6KOznKB1mVSVEKvAVyekZL6lTL2lPfAFGB6t0x%2BHD%2BrB58jQo%2B%2FHelo267VmIXx6VczUMtYwV1zS%2BwTriRSWshYE8Y3uAWfqiAzK20P78BICV%2F78Oi4zn6IrKOFLgIZ3Qej9LOOy2lTeHs9tOI7q%2F1bhDu%2FMSC5pgsNXNiQKg6VNZotD%2BuyDXCpVccWg0rSrmAQCirXkINdh4cgXrNkMpBbDNXT1pdm97VdP9%2F2MjErEwI9Y0mG99CQpbwcaQ46ACDf37bMDMqkM9c8MQ0%2BUpJ18abiWS52S8xynDjscJezAiPBBO%2FTG7Va52Jkc%2BMLfZpVDhATD2j%2BvCBjqkASfAy%2FF3cbvVYW%2FKE%2BCEjG996kez3o6IIagotAxqz5P1my1e7SZhHm4SiqEfAIFXaloJLVTflBeTFKaaPDduJVetMLVrBN9FgQwGHks1MNCyNSeg76is0pdjRlobl7TSLDaZHu2YgpRO8nIs4e0gI4JawiSTXZvl2bF4C6TxUrDTm210J23l%2FjsYJuZ11vokarO85GJRKsg%2Bae0Mm0WKDaYOg7Yn&X-Amz-Signature=952b18947ba1097daf1822bee9c3ecbb53166edbad81145fc39e3a6c2b398ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2HR6H7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDtpkPeE6PvuLhY7QRBNx00FtDldPP4Y79manq0ZTstywIhAJtco8zLgCAdDfrVz8xyn3nhWOT33Tyn7cuGlas4UJmVKv8DCDEQABoMNjM3NDIzMTgzODA1IgzoRO4OwBipcqYooDAq3AN8y650p0PdSLhX7CXr3gSSH5RaFdYV6jl0deLgSIm8fz4u5Qhr%2FP8GsypDkBemmDysn1hWeIDMGvGcwcISj1f9zuXkMWQw5kO6h4qHH8z0EsmvrUX0GltEVFeUMb%2B9oGJNY3NLtxYRulpFCijnT1wySpb1gwFCvwj9z%2FZCKLpnfR60QHf1rPgCYF1btVLmEvAA%2BhUIeGavEoYh%2BPrmtwh%2B2uQb9gjrC7my6dpEZbhG%2FdUHJlTjOwDBkGyohnCaZmRpC05uSRd80vZx6orAAEPHjUXujT7naFpwDA5n4i5FzutwG2syto%2F6KOznKB1mVSVEKvAVyekZL6lTL2lPfAFGB6t0x%2BHD%2BrB58jQo%2B%2FHelo267VmIXx6VczUMtYwV1zS%2BwTriRSWshYE8Y3uAWfqiAzK20P78BICV%2F78Oi4zn6IrKOFLgIZ3Qej9LOOy2lTeHs9tOI7q%2F1bhDu%2FMSC5pgsNXNiQKg6VNZotD%2BuyDXCpVccWg0rSrmAQCirXkINdh4cgXrNkMpBbDNXT1pdm97VdP9%2F2MjErEwI9Y0mG99CQpbwcaQ46ACDf37bMDMqkM9c8MQ0%2BUpJ18abiWS52S8xynDjscJezAiPBBO%2FTG7Va52Jkc%2BMLfZpVDhATD2j%2BvCBjqkASfAy%2FF3cbvVYW%2FKE%2BCEjG996kez3o6IIagotAxqz5P1my1e7SZhHm4SiqEfAIFXaloJLVTflBeTFKaaPDduJVetMLVrBN9FgQwGHks1MNCyNSeg76is0pdjRlobl7TSLDaZHu2YgpRO8nIs4e0gI4JawiSTXZvl2bF4C6TxUrDTm210J23l%2FjsYJuZ11vokarO85GJRKsg%2Bae0Mm0WKDaYOg7Yn&X-Amz-Signature=101fff91bb246d5c066c8020d2d95869dcabc6aa731dfb8e5b6cd223a217b238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
