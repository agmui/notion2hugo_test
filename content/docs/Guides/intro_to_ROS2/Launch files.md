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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSXJT6D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDCIxfSKR7y5Nplyg2snecIIE4NPJPYaT7BLFxt%2BRpDXQIgFa%2FUg0gRIJhTNbNjyq7OPwB7wxa7omWH9gnfI1wFABkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEvLjJC%2BpUd8iI7%2FxircA1NQxd0%2FiAoMAYBSdEqyvPg8Wdd9f4dJtZJ%2FzmiYJuEMsoBL6dxKoAJLIlJD5nKO4UJPzYk8%2FsHHfuLICq8PY9w1u%2Fo54bbP3CNM2RwC9o%2BLKPnZmOHuq7O1%2FVgnzS1wcZwEcxfde5md1bdXfyF5IL3zgprLNVjCpWcT6krR3k40HvaJGOIMlRPxr5FnrshNgZksqC4qo0%2BS1JIRNXXu3jlbMvnLtXLZED46TKrXWFBCvq0HjPTj0XgfxUBaFcLC4dhP1dPuojqqUoAdA2gNneQhNTu5z4B6bFmejzs%2FhoD8Eowvef7j%2FclOcFO2lu9TPE%2F7O0q5Fatq1IvgziEvPm%2FOw5sdK3qtgvo%2FdniyQs9d9P%2Bl7XNZTIHa0AmxO%2Fkjnr76QH7%2FEbxZRB83zpszz9VvpT3%2FHABpWERvTOmZmv6wLnO1h%2BQ4ZCCqnw6NjmO%2FEm0drVT5p%2Fx%2FMSLVNGTfQfrOL7bD3IO%2FMuq87Rga9IvY1m%2FzKlGzKuAqhUOFiZ5gfougxxluDtXL1ZgJDvLamV6VD4dLHB5OZ4k0RAtHAId08ujbn5CKsX0HwgcPFfcs%2FunwkAXeoteY%2F0FDKPNwjiHrkBhtzZRsRgHcwEI5L4YTmqSVYhIpdBm9QchZMLSFhL0GOqUBgMVnO%2BUOfEVpQwFXm3ELvx4cRPIpogHjZT37%2FVSDiuKjijtY9efATDU7gbLzskE80xnZ42MmkKr1wuVmsaUEXP%2FYcevQZmDZuve7zkRrOdXf3c6QHr6wFfZEyD21aMs%2Fx6rJ%2Blm05aQu5AoqYWwhW9gg1jzPSJLV6etjX6ocMSTwrBqaWYCVlgMon1OQ%2F5XkwoP%2FfnqNZctrlth1wSYPLAI%2Fe026&X-Amz-Signature=09737515a793b87130c5c8d62e17d4c2a5d600bb201219b20de3b9d9e30e09e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSXJT6D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDCIxfSKR7y5Nplyg2snecIIE4NPJPYaT7BLFxt%2BRpDXQIgFa%2FUg0gRIJhTNbNjyq7OPwB7wxa7omWH9gnfI1wFABkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEvLjJC%2BpUd8iI7%2FxircA1NQxd0%2FiAoMAYBSdEqyvPg8Wdd9f4dJtZJ%2FzmiYJuEMsoBL6dxKoAJLIlJD5nKO4UJPzYk8%2FsHHfuLICq8PY9w1u%2Fo54bbP3CNM2RwC9o%2BLKPnZmOHuq7O1%2FVgnzS1wcZwEcxfde5md1bdXfyF5IL3zgprLNVjCpWcT6krR3k40HvaJGOIMlRPxr5FnrshNgZksqC4qo0%2BS1JIRNXXu3jlbMvnLtXLZED46TKrXWFBCvq0HjPTj0XgfxUBaFcLC4dhP1dPuojqqUoAdA2gNneQhNTu5z4B6bFmejzs%2FhoD8Eowvef7j%2FclOcFO2lu9TPE%2F7O0q5Fatq1IvgziEvPm%2FOw5sdK3qtgvo%2FdniyQs9d9P%2Bl7XNZTIHa0AmxO%2Fkjnr76QH7%2FEbxZRB83zpszz9VvpT3%2FHABpWERvTOmZmv6wLnO1h%2BQ4ZCCqnw6NjmO%2FEm0drVT5p%2Fx%2FMSLVNGTfQfrOL7bD3IO%2FMuq87Rga9IvY1m%2FzKlGzKuAqhUOFiZ5gfougxxluDtXL1ZgJDvLamV6VD4dLHB5OZ4k0RAtHAId08ujbn5CKsX0HwgcPFfcs%2FunwkAXeoteY%2F0FDKPNwjiHrkBhtzZRsRgHcwEI5L4YTmqSVYhIpdBm9QchZMLSFhL0GOqUBgMVnO%2BUOfEVpQwFXm3ELvx4cRPIpogHjZT37%2FVSDiuKjijtY9efATDU7gbLzskE80xnZ42MmkKr1wuVmsaUEXP%2FYcevQZmDZuve7zkRrOdXf3c6QHr6wFfZEyD21aMs%2Fx6rJ%2Blm05aQu5AoqYWwhW9gg1jzPSJLV6etjX6ocMSTwrBqaWYCVlgMon1OQ%2F5XkwoP%2FfnqNZctrlth1wSYPLAI%2Fe026&X-Amz-Signature=1834a984c7eba7eccda9708b0dc7af0c0c46811c2f6689ff2ab55b60f567f1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSXJT6D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDCIxfSKR7y5Nplyg2snecIIE4NPJPYaT7BLFxt%2BRpDXQIgFa%2FUg0gRIJhTNbNjyq7OPwB7wxa7omWH9gnfI1wFABkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEvLjJC%2BpUd8iI7%2FxircA1NQxd0%2FiAoMAYBSdEqyvPg8Wdd9f4dJtZJ%2FzmiYJuEMsoBL6dxKoAJLIlJD5nKO4UJPzYk8%2FsHHfuLICq8PY9w1u%2Fo54bbP3CNM2RwC9o%2BLKPnZmOHuq7O1%2FVgnzS1wcZwEcxfde5md1bdXfyF5IL3zgprLNVjCpWcT6krR3k40HvaJGOIMlRPxr5FnrshNgZksqC4qo0%2BS1JIRNXXu3jlbMvnLtXLZED46TKrXWFBCvq0HjPTj0XgfxUBaFcLC4dhP1dPuojqqUoAdA2gNneQhNTu5z4B6bFmejzs%2FhoD8Eowvef7j%2FclOcFO2lu9TPE%2F7O0q5Fatq1IvgziEvPm%2FOw5sdK3qtgvo%2FdniyQs9d9P%2Bl7XNZTIHa0AmxO%2Fkjnr76QH7%2FEbxZRB83zpszz9VvpT3%2FHABpWERvTOmZmv6wLnO1h%2BQ4ZCCqnw6NjmO%2FEm0drVT5p%2Fx%2FMSLVNGTfQfrOL7bD3IO%2FMuq87Rga9IvY1m%2FzKlGzKuAqhUOFiZ5gfougxxluDtXL1ZgJDvLamV6VD4dLHB5OZ4k0RAtHAId08ujbn5CKsX0HwgcPFfcs%2FunwkAXeoteY%2F0FDKPNwjiHrkBhtzZRsRgHcwEI5L4YTmqSVYhIpdBm9QchZMLSFhL0GOqUBgMVnO%2BUOfEVpQwFXm3ELvx4cRPIpogHjZT37%2FVSDiuKjijtY9efATDU7gbLzskE80xnZ42MmkKr1wuVmsaUEXP%2FYcevQZmDZuve7zkRrOdXf3c6QHr6wFfZEyD21aMs%2Fx6rJ%2Blm05aQu5AoqYWwhW9gg1jzPSJLV6etjX6ocMSTwrBqaWYCVlgMon1OQ%2F5XkwoP%2FfnqNZctrlth1wSYPLAI%2Fe026&X-Amz-Signature=13bf31e0ec6988830c4f6b0c962e1205e6da6226903da5a53a3575c0b7db7fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
