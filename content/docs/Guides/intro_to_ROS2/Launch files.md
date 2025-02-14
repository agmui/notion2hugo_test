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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG4GS4N%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDyyZZ%2Bj8kaKUFRXLQitFbCWoQYB%2FqlcbK6b1DxqGr%2FMgIgP9OT5r9kvo9iOOmcmSPqtIgUdAIUT5vzhh0GSEA4YQ4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPgm7V7Y4yE3vuAfDyrcA7HqSiF0ZBiowVr%2BsCPlRQ548VAVJLDGv9hz83fLiDD5adrGBMxU5vhkkxUVwkGr9zR0dIZhBDfmJTtJLtR850x197eg%2Fctr%2Bccc0u9R6BdiOodb65aF5V9pCHjcxXLdBHPUMZhiUEqG5kpW4np14YI3S4X9H10g58BemlRIdczE3iPOtejgnZQTAKTejpwQ7axarCYbnv6YvACxqO6698Mw20RuLh8cUGhzNLrraR72pRm7mB1wBC2qgS6ixEsTxNVcL5WWF45rdHCdBScp2%2BHQOxvLYAo8kE3hzvwY8xqvMoZYw3q5ZFz4JV7EFhnNgRH4sKpSafM7sH0FyRs1h4OitONJeQGcCRePyhIXvVPc84c82TGdlww%2BEqyNiWLdGda8Q0kQ%2BQ7o5q7tVoR4nvVCbq6l5SVVFUd4UJ0pE5hpwsu1t%2BJ%2F%2F1mZKgBmcp3OuzVyx%2FlsuQXUYy2nwr1gPxdNVSVEgox%2BUpbA%2BWCJ6igYoIrtFqi6HWlChgUciwuFJ4rFGZF1WUJCdh3%2Bw3M2gyVRdSNd98E8ERGPy%2FBducmjz2OlV%2BL8b28v02uoxNP6MWJMiTn8m6BCuQ8WwPWfJsT0FBvVODDX5PSzrOefsNnv4fD1JhZQlB8eICDiMNLRvr0GOqUBh%2Fi81kTOxdUVBTW6T4W8ElZ6s%2B%2Bf%2BnHrMWfCjzLyjN0Fgi5p7JiVxDDlKoMkoxifAIweN9vbQX01DQDalOgcrnYhwApiLF3NNwGN0XIYs38lPhvObsGswjZn2O4XV8yFekOfBzhO4h6iZtNwwmoMKPqUbqmxWrY%2BYJiMBb1qRrxzVRivBEKWd5zYN8o27v3%2B1fiwzU1o8d7et6f5HlxNUqfUlolU&X-Amz-Signature=1321850ac765d4bc9e638f28ed444555d8cb6c714fe177826c8538289287f18d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG4GS4N%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDyyZZ%2Bj8kaKUFRXLQitFbCWoQYB%2FqlcbK6b1DxqGr%2FMgIgP9OT5r9kvo9iOOmcmSPqtIgUdAIUT5vzhh0GSEA4YQ4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPgm7V7Y4yE3vuAfDyrcA7HqSiF0ZBiowVr%2BsCPlRQ548VAVJLDGv9hz83fLiDD5adrGBMxU5vhkkxUVwkGr9zR0dIZhBDfmJTtJLtR850x197eg%2Fctr%2Bccc0u9R6BdiOodb65aF5V9pCHjcxXLdBHPUMZhiUEqG5kpW4np14YI3S4X9H10g58BemlRIdczE3iPOtejgnZQTAKTejpwQ7axarCYbnv6YvACxqO6698Mw20RuLh8cUGhzNLrraR72pRm7mB1wBC2qgS6ixEsTxNVcL5WWF45rdHCdBScp2%2BHQOxvLYAo8kE3hzvwY8xqvMoZYw3q5ZFz4JV7EFhnNgRH4sKpSafM7sH0FyRs1h4OitONJeQGcCRePyhIXvVPc84c82TGdlww%2BEqyNiWLdGda8Q0kQ%2BQ7o5q7tVoR4nvVCbq6l5SVVFUd4UJ0pE5hpwsu1t%2BJ%2F%2F1mZKgBmcp3OuzVyx%2FlsuQXUYy2nwr1gPxdNVSVEgox%2BUpbA%2BWCJ6igYoIrtFqi6HWlChgUciwuFJ4rFGZF1WUJCdh3%2Bw3M2gyVRdSNd98E8ERGPy%2FBducmjz2OlV%2BL8b28v02uoxNP6MWJMiTn8m6BCuQ8WwPWfJsT0FBvVODDX5PSzrOefsNnv4fD1JhZQlB8eICDiMNLRvr0GOqUBh%2Fi81kTOxdUVBTW6T4W8ElZ6s%2B%2Bf%2BnHrMWfCjzLyjN0Fgi5p7JiVxDDlKoMkoxifAIweN9vbQX01DQDalOgcrnYhwApiLF3NNwGN0XIYs38lPhvObsGswjZn2O4XV8yFekOfBzhO4h6iZtNwwmoMKPqUbqmxWrY%2BYJiMBb1qRrxzVRivBEKWd5zYN8o27v3%2B1fiwzU1o8d7et6f5HlxNUqfUlolU&X-Amz-Signature=38215ea944a4abca7f73f8ca0bdaf009e6474a2a00f0b10e259ad5effd031e88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YG4GS4N%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDyyZZ%2Bj8kaKUFRXLQitFbCWoQYB%2FqlcbK6b1DxqGr%2FMgIgP9OT5r9kvo9iOOmcmSPqtIgUdAIUT5vzhh0GSEA4YQ4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPgm7V7Y4yE3vuAfDyrcA7HqSiF0ZBiowVr%2BsCPlRQ548VAVJLDGv9hz83fLiDD5adrGBMxU5vhkkxUVwkGr9zR0dIZhBDfmJTtJLtR850x197eg%2Fctr%2Bccc0u9R6BdiOodb65aF5V9pCHjcxXLdBHPUMZhiUEqG5kpW4np14YI3S4X9H10g58BemlRIdczE3iPOtejgnZQTAKTejpwQ7axarCYbnv6YvACxqO6698Mw20RuLh8cUGhzNLrraR72pRm7mB1wBC2qgS6ixEsTxNVcL5WWF45rdHCdBScp2%2BHQOxvLYAo8kE3hzvwY8xqvMoZYw3q5ZFz4JV7EFhnNgRH4sKpSafM7sH0FyRs1h4OitONJeQGcCRePyhIXvVPc84c82TGdlww%2BEqyNiWLdGda8Q0kQ%2BQ7o5q7tVoR4nvVCbq6l5SVVFUd4UJ0pE5hpwsu1t%2BJ%2F%2F1mZKgBmcp3OuzVyx%2FlsuQXUYy2nwr1gPxdNVSVEgox%2BUpbA%2BWCJ6igYoIrtFqi6HWlChgUciwuFJ4rFGZF1WUJCdh3%2Bw3M2gyVRdSNd98E8ERGPy%2FBducmjz2OlV%2BL8b28v02uoxNP6MWJMiTn8m6BCuQ8WwPWfJsT0FBvVODDX5PSzrOefsNnv4fD1JhZQlB8eICDiMNLRvr0GOqUBh%2Fi81kTOxdUVBTW6T4W8ElZ6s%2B%2Bf%2BnHrMWfCjzLyjN0Fgi5p7JiVxDDlKoMkoxifAIweN9vbQX01DQDalOgcrnYhwApiLF3NNwGN0XIYs38lPhvObsGswjZn2O4XV8yFekOfBzhO4h6iZtNwwmoMKPqUbqmxWrY%2BYJiMBb1qRrxzVRivBEKWd5zYN8o27v3%2B1fiwzU1o8d7et6f5HlxNUqfUlolU&X-Amz-Signature=764c50c8698217d25e9f42b25f05b1a3cea35e8a4f59b6d1287dc77923e17905&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
