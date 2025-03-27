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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBKLZDN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDskBI6B06p%2Fe%2BBUFz24Wfzp9mlCJ2d6NCGSk%2Bz8sSfdAIgG0qoTDFBBUUBHrfqLgvxr%2FM2fMis1Pmh3LldLyIGMK8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDlc%2FoJxM5b%2BhNIBuircAyN6%2BB5bheQXTS33WFLL4JByRxgeknjJUhPjr5OvjwBX6Cg0ONF7Pi3ujd4s6GkmjjHlbGl24akTrBO9W0C7Yyq6lQypmq1S6amXjTJIiN1RYsr%2BGafPr5IQkFFVxkbojt%2Bz6WEurlmBrcB45W21FsePShP%2FX9G%2FqiKeFhs%2BzOtdKfz3741O3FFEyB%2BPZ4Opd1Dnripv8YnowazOEsRthRC%2FNLfuVhRQRALbWsMPYK86EqwOsijWI5Mz2xqesXUK4hOhXnF9fzFcdrwdVxoPEnQ3Emyttq6pV0E2sAVHn70fxH3y9KynI4RSGh0bMMG9ZDg1UMGp5AASVfpXALi0DFs6%2BeDN7NdOgZ1tckT3FY9YDIN8TtOcgYB9ktz%2BX%2FrGBjPUwMrpJ28zuotzl7UJXY6lZpWsOsU2QZK2KtZQgERcWeV6qEn3CmRf8c9igQJoybG2wdqMAcvja212o41G4prBttmYtvJETHxgfDVswhB9OJ5BrGhDBZbTP%2B4a%2BjzjaHFilrESu91LOqoyeQyIGSjeowfdUHonIhtjn2zsH%2BgNiTJBav3hMlyyCAsRwNpZMI5jKKKvBlNU%2FQJDjfPVE%2FckXC%2FUcLsVH8fUetFmf9QuCcq2nZbHREoDQP7aMJK%2BlL8GOqUBC6CtMkRGf12A13eyFElbS9GFtO%2F9Js5eq9QMK7D7VqOIfEqZAtOmi1cRjOrvIEZ4hjWrhDbPx2%2Fo%2FnsR16vBIfQQ27GO1SUc5NhieoTOXpaEa%2F68mZNQ%2BZMUmO7gi0tQEHfqlMvrGPxlV1UtiVAyY9e8gNHG7xWyw1C0vuxvKya%2FjquIzVh7XZSk7q00Gdd1NisNOigr%2FPYfP1A%2F%2FizdielXBjje&X-Amz-Signature=ba7df40cea24bd9be6370fdda78b66fd5bbcab52eb42f4c1b724979f45572945&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBKLZDN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDskBI6B06p%2Fe%2BBUFz24Wfzp9mlCJ2d6NCGSk%2Bz8sSfdAIgG0qoTDFBBUUBHrfqLgvxr%2FM2fMis1Pmh3LldLyIGMK8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDlc%2FoJxM5b%2BhNIBuircAyN6%2BB5bheQXTS33WFLL4JByRxgeknjJUhPjr5OvjwBX6Cg0ONF7Pi3ujd4s6GkmjjHlbGl24akTrBO9W0C7Yyq6lQypmq1S6amXjTJIiN1RYsr%2BGafPr5IQkFFVxkbojt%2Bz6WEurlmBrcB45W21FsePShP%2FX9G%2FqiKeFhs%2BzOtdKfz3741O3FFEyB%2BPZ4Opd1Dnripv8YnowazOEsRthRC%2FNLfuVhRQRALbWsMPYK86EqwOsijWI5Mz2xqesXUK4hOhXnF9fzFcdrwdVxoPEnQ3Emyttq6pV0E2sAVHn70fxH3y9KynI4RSGh0bMMG9ZDg1UMGp5AASVfpXALi0DFs6%2BeDN7NdOgZ1tckT3FY9YDIN8TtOcgYB9ktz%2BX%2FrGBjPUwMrpJ28zuotzl7UJXY6lZpWsOsU2QZK2KtZQgERcWeV6qEn3CmRf8c9igQJoybG2wdqMAcvja212o41G4prBttmYtvJETHxgfDVswhB9OJ5BrGhDBZbTP%2B4a%2BjzjaHFilrESu91LOqoyeQyIGSjeowfdUHonIhtjn2zsH%2BgNiTJBav3hMlyyCAsRwNpZMI5jKKKvBlNU%2FQJDjfPVE%2FckXC%2FUcLsVH8fUetFmf9QuCcq2nZbHREoDQP7aMJK%2BlL8GOqUBC6CtMkRGf12A13eyFElbS9GFtO%2F9Js5eq9QMK7D7VqOIfEqZAtOmi1cRjOrvIEZ4hjWrhDbPx2%2Fo%2FnsR16vBIfQQ27GO1SUc5NhieoTOXpaEa%2F68mZNQ%2BZMUmO7gi0tQEHfqlMvrGPxlV1UtiVAyY9e8gNHG7xWyw1C0vuxvKya%2FjquIzVh7XZSk7q00Gdd1NisNOigr%2FPYfP1A%2F%2FizdielXBjje&X-Amz-Signature=c204d813d6fda63f16747f851c8df522a709f04c904af694f2ef2e2005860317&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBKLZDN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDskBI6B06p%2Fe%2BBUFz24Wfzp9mlCJ2d6NCGSk%2Bz8sSfdAIgG0qoTDFBBUUBHrfqLgvxr%2FM2fMis1Pmh3LldLyIGMK8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDlc%2FoJxM5b%2BhNIBuircAyN6%2BB5bheQXTS33WFLL4JByRxgeknjJUhPjr5OvjwBX6Cg0ONF7Pi3ujd4s6GkmjjHlbGl24akTrBO9W0C7Yyq6lQypmq1S6amXjTJIiN1RYsr%2BGafPr5IQkFFVxkbojt%2Bz6WEurlmBrcB45W21FsePShP%2FX9G%2FqiKeFhs%2BzOtdKfz3741O3FFEyB%2BPZ4Opd1Dnripv8YnowazOEsRthRC%2FNLfuVhRQRALbWsMPYK86EqwOsijWI5Mz2xqesXUK4hOhXnF9fzFcdrwdVxoPEnQ3Emyttq6pV0E2sAVHn70fxH3y9KynI4RSGh0bMMG9ZDg1UMGp5AASVfpXALi0DFs6%2BeDN7NdOgZ1tckT3FY9YDIN8TtOcgYB9ktz%2BX%2FrGBjPUwMrpJ28zuotzl7UJXY6lZpWsOsU2QZK2KtZQgERcWeV6qEn3CmRf8c9igQJoybG2wdqMAcvja212o41G4prBttmYtvJETHxgfDVswhB9OJ5BrGhDBZbTP%2B4a%2BjzjaHFilrESu91LOqoyeQyIGSjeowfdUHonIhtjn2zsH%2BgNiTJBav3hMlyyCAsRwNpZMI5jKKKvBlNU%2FQJDjfPVE%2FckXC%2FUcLsVH8fUetFmf9QuCcq2nZbHREoDQP7aMJK%2BlL8GOqUBC6CtMkRGf12A13eyFElbS9GFtO%2F9Js5eq9QMK7D7VqOIfEqZAtOmi1cRjOrvIEZ4hjWrhDbPx2%2Fo%2FnsR16vBIfQQ27GO1SUc5NhieoTOXpaEa%2F68mZNQ%2BZMUmO7gi0tQEHfqlMvrGPxlV1UtiVAyY9e8gNHG7xWyw1C0vuxvKya%2FjquIzVh7XZSk7q00Gdd1NisNOigr%2FPYfP1A%2F%2FizdielXBjje&X-Amz-Signature=0782977cdca876dab464e06520b0c8df6e4aa28ea96935818b97c0087f874413&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
