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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBQGW2T%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI6XO6s%2FD6X2TaGI6Q5X0KVqHFPWqSGsB7k0TYkCDiAIgSD%2BIoz%2BgbhNN%2BGS%2BeURg%2FdDY8C4vbcpxO6%2FYqAUg2Skq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMwijrMRSscFEZ70sCrcA4IzlysQHPJKHpAn6EaUaJ9nyzLMTu9rKTDeHts7s2IZPzY3S9AHvJw5E2YCzM%2BXnELovOsxlmov8VDKl2CcztKMSN722OO5PU8oVawUYG67r9lizMMeZPD%2FiGvdksSMjylG51J%2BDPhv%2FQ%2FCKM4aPqmLX4xua84bo4zSIDdpwdr9TBd7oZvo%2BH35o01gii38e9swH9x1AORSrFwiWojeD%2BdiN4Mdg7V70lvatzAfBy1hPz%2BMEBQBWKWrLK1qBbxZvXAfuusZkpPg1yctBet1MW%2FcyXvoZvu0%2F06BhZU9aCKI15vPAWfRWQT8YGEl6jIg10YGLKw6jfcOhuMocFzPdKtBrrZWMkYWQnLhTK3c%2FSdAZxbTHlWRX9rKzTHbmYcieWyLT4Ab7TTkEvrHySDMvd6Ch15%2Fdu6sIctKFB%2F%2BeKDGsCKgG5W1k6YQHHZpZ5bSJ2W8W2vNBxW5lKKAviIWHTmj6NefappUcI5m5Ov55pAUbF%2FB%2BldRWuh2apbNUGk3NkEWupax%2Bwt6r3aCHYW9h%2Bh09FpburSJ9QjLzibOasQCPVr9Cj1P3zZ3gZxtdX1GiKVTThJqcvI11GtIIUFnfRyCt95GJnFt37Q%2FmRIF0VvGnbWssUfWJuRT%2FXqlMKX5vb8GOqUBFsMd16frk7%2BkDClznUQ4br87DekTvZX8OwRsMO%2FDOF0BjYuNm39DFBHk9a%2FqjYb2LXl7caC1GtTrN%2Fz3KNL9gNf1otSObWsIZddxuVIg4Pp3U3KAJ992DY1izmvNsvbnTRv1FS4x7PowO8YV%2Bd3lNjw8hsoIfJemXqzF4FqEtZ6FPk7speAYR4IoiDiKWMEV9CuBdxUuY5aTkgDblcDYLleEPrGX&X-Amz-Signature=d1311b1e60e65445dda01bbbc0587f5bcca395b8163d39cf709470c0a201d610&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBQGW2T%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI6XO6s%2FD6X2TaGI6Q5X0KVqHFPWqSGsB7k0TYkCDiAIgSD%2BIoz%2BgbhNN%2BGS%2BeURg%2FdDY8C4vbcpxO6%2FYqAUg2Skq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMwijrMRSscFEZ70sCrcA4IzlysQHPJKHpAn6EaUaJ9nyzLMTu9rKTDeHts7s2IZPzY3S9AHvJw5E2YCzM%2BXnELovOsxlmov8VDKl2CcztKMSN722OO5PU8oVawUYG67r9lizMMeZPD%2FiGvdksSMjylG51J%2BDPhv%2FQ%2FCKM4aPqmLX4xua84bo4zSIDdpwdr9TBd7oZvo%2BH35o01gii38e9swH9x1AORSrFwiWojeD%2BdiN4Mdg7V70lvatzAfBy1hPz%2BMEBQBWKWrLK1qBbxZvXAfuusZkpPg1yctBet1MW%2FcyXvoZvu0%2F06BhZU9aCKI15vPAWfRWQT8YGEl6jIg10YGLKw6jfcOhuMocFzPdKtBrrZWMkYWQnLhTK3c%2FSdAZxbTHlWRX9rKzTHbmYcieWyLT4Ab7TTkEvrHySDMvd6Ch15%2Fdu6sIctKFB%2F%2BeKDGsCKgG5W1k6YQHHZpZ5bSJ2W8W2vNBxW5lKKAviIWHTmj6NefappUcI5m5Ov55pAUbF%2FB%2BldRWuh2apbNUGk3NkEWupax%2Bwt6r3aCHYW9h%2Bh09FpburSJ9QjLzibOasQCPVr9Cj1P3zZ3gZxtdX1GiKVTThJqcvI11GtIIUFnfRyCt95GJnFt37Q%2FmRIF0VvGnbWssUfWJuRT%2FXqlMKX5vb8GOqUBFsMd16frk7%2BkDClznUQ4br87DekTvZX8OwRsMO%2FDOF0BjYuNm39DFBHk9a%2FqjYb2LXl7caC1GtTrN%2Fz3KNL9gNf1otSObWsIZddxuVIg4Pp3U3KAJ992DY1izmvNsvbnTRv1FS4x7PowO8YV%2Bd3lNjw8hsoIfJemXqzF4FqEtZ6FPk7speAYR4IoiDiKWMEV9CuBdxUuY5aTkgDblcDYLleEPrGX&X-Amz-Signature=93793079d923bc450fa0098307afd68c8bec1d121c8064ef1184369fbf2935ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBQGW2T%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI6XO6s%2FD6X2TaGI6Q5X0KVqHFPWqSGsB7k0TYkCDiAIgSD%2BIoz%2BgbhNN%2BGS%2BeURg%2FdDY8C4vbcpxO6%2FYqAUg2Skq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMwijrMRSscFEZ70sCrcA4IzlysQHPJKHpAn6EaUaJ9nyzLMTu9rKTDeHts7s2IZPzY3S9AHvJw5E2YCzM%2BXnELovOsxlmov8VDKl2CcztKMSN722OO5PU8oVawUYG67r9lizMMeZPD%2FiGvdksSMjylG51J%2BDPhv%2FQ%2FCKM4aPqmLX4xua84bo4zSIDdpwdr9TBd7oZvo%2BH35o01gii38e9swH9x1AORSrFwiWojeD%2BdiN4Mdg7V70lvatzAfBy1hPz%2BMEBQBWKWrLK1qBbxZvXAfuusZkpPg1yctBet1MW%2FcyXvoZvu0%2F06BhZU9aCKI15vPAWfRWQT8YGEl6jIg10YGLKw6jfcOhuMocFzPdKtBrrZWMkYWQnLhTK3c%2FSdAZxbTHlWRX9rKzTHbmYcieWyLT4Ab7TTkEvrHySDMvd6Ch15%2Fdu6sIctKFB%2F%2BeKDGsCKgG5W1k6YQHHZpZ5bSJ2W8W2vNBxW5lKKAviIWHTmj6NefappUcI5m5Ov55pAUbF%2FB%2BldRWuh2apbNUGk3NkEWupax%2Bwt6r3aCHYW9h%2Bh09FpburSJ9QjLzibOasQCPVr9Cj1P3zZ3gZxtdX1GiKVTThJqcvI11GtIIUFnfRyCt95GJnFt37Q%2FmRIF0VvGnbWssUfWJuRT%2FXqlMKX5vb8GOqUBFsMd16frk7%2BkDClznUQ4br87DekTvZX8OwRsMO%2FDOF0BjYuNm39DFBHk9a%2FqjYb2LXl7caC1GtTrN%2Fz3KNL9gNf1otSObWsIZddxuVIg4Pp3U3KAJ992DY1izmvNsvbnTRv1FS4x7PowO8YV%2Bd3lNjw8hsoIfJemXqzF4FqEtZ6FPk7speAYR4IoiDiKWMEV9CuBdxUuY5aTkgDblcDYLleEPrGX&X-Amz-Signature=97ef6da7257d00564ad8b48ca3e8ed315d2739a61bf2aaca6ed5e7574cf18c26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
