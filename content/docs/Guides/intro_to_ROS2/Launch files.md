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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C26TNEE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAbXHSknZucAvMdCSaEe%2F7M2wZ%2FDUuWJ5PJJe1w88a40AiAYVcmfoS0AE7YHQitvVaZyQPTXSQax7HmdRdOLkHwsdyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMABH1yNyhnckNVd8IKtwDBfgoTUkvZYFxUWddT5LqO5nBudRDlFg%2BY6BvF7ftnlnG83pHBpzys%2FZY3%2BBfe9bV579DIfo9KvZClSWQCgzRQogRio94pkpZB%2Bms%2FzzJCPtOfQIOM5CiISBJhKBnv47IlpTt%2FUmvbpYd6EDDhjT2u3MzVi9xM7AjBf50PAxdkrMQffQ%2Bo8Hs1zmpyWSe6ckkHOamcqKdHvgc0Rl8H1hXMuDeYTIr2o7wGzpzrwaTjMEGrgWYcd3HS7Tk1PAUO3q0Lj15YShkkO50Ss30dRvClqcpmZtWT8MV6FAKqiAwIEUZZ3%2BX2ZVAIh7sCP9P7BLp7rQRrr7HwTxfMvrPqFh0sVGsh8pnnkGzwsjCOdjR%2B1Fumi%2BHkEIsrrsgqTRDfjZ9dGHwmGYJSt%2B4lYeeQd0jm4cRP%2FqorPTXeHiW8CY6G32GjKpd7htanOYU89O2i0m6fGAz2EMgds3HlaFqJeq7kygYAE08%2B11cWavBiYKRt6ADwZP0JgsPxCY9HJS4VZ3wwyh9M5zbZZVaaVx6Fpopv5KgOcbcrl2Bz3c%2FDKGm3PdCdRsp%2BJtPCNY%2BMChtOsbBi1BY31fh%2FurGyipll7yiYX0LVyP8sAAwRwRDLEpvUmN%2BayMowrclXWUwk3wwq7aJwgY6pgEGtRrAiMk7oQTeqs4qK0cE5fcoPwQ9s0RrzhiSXgs3f56ONokV15Hr61%2F4DSXZvBjlLldc9Q7xY94KTZBeNUCkNTwU%2BqrapmvDon1bGvmcRCuxJ%2FiF4lSvB5BWINMvfFFO3AM3BE0SfJCiLDN29vr5EjkBAWf8NoPHyEI03JHAuN4SCiLQ%2FgaOwr8JL4HtTVhOpPrb%2FEIlTPOonEzgbYcgF1y%2BaolO&X-Amz-Signature=26166d857eafb5fea35184ea47d3a85a7caf2298e75b605a908dbc5de48fec44&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C26TNEE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAbXHSknZucAvMdCSaEe%2F7M2wZ%2FDUuWJ5PJJe1w88a40AiAYVcmfoS0AE7YHQitvVaZyQPTXSQax7HmdRdOLkHwsdyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMABH1yNyhnckNVd8IKtwDBfgoTUkvZYFxUWddT5LqO5nBudRDlFg%2BY6BvF7ftnlnG83pHBpzys%2FZY3%2BBfe9bV579DIfo9KvZClSWQCgzRQogRio94pkpZB%2Bms%2FzzJCPtOfQIOM5CiISBJhKBnv47IlpTt%2FUmvbpYd6EDDhjT2u3MzVi9xM7AjBf50PAxdkrMQffQ%2Bo8Hs1zmpyWSe6ckkHOamcqKdHvgc0Rl8H1hXMuDeYTIr2o7wGzpzrwaTjMEGrgWYcd3HS7Tk1PAUO3q0Lj15YShkkO50Ss30dRvClqcpmZtWT8MV6FAKqiAwIEUZZ3%2BX2ZVAIh7sCP9P7BLp7rQRrr7HwTxfMvrPqFh0sVGsh8pnnkGzwsjCOdjR%2B1Fumi%2BHkEIsrrsgqTRDfjZ9dGHwmGYJSt%2B4lYeeQd0jm4cRP%2FqorPTXeHiW8CY6G32GjKpd7htanOYU89O2i0m6fGAz2EMgds3HlaFqJeq7kygYAE08%2B11cWavBiYKRt6ADwZP0JgsPxCY9HJS4VZ3wwyh9M5zbZZVaaVx6Fpopv5KgOcbcrl2Bz3c%2FDKGm3PdCdRsp%2BJtPCNY%2BMChtOsbBi1BY31fh%2FurGyipll7yiYX0LVyP8sAAwRwRDLEpvUmN%2BayMowrclXWUwk3wwq7aJwgY6pgEGtRrAiMk7oQTeqs4qK0cE5fcoPwQ9s0RrzhiSXgs3f56ONokV15Hr61%2F4DSXZvBjlLldc9Q7xY94KTZBeNUCkNTwU%2BqrapmvDon1bGvmcRCuxJ%2FiF4lSvB5BWINMvfFFO3AM3BE0SfJCiLDN29vr5EjkBAWf8NoPHyEI03JHAuN4SCiLQ%2FgaOwr8JL4HtTVhOpPrb%2FEIlTPOonEzgbYcgF1y%2BaolO&X-Amz-Signature=74eac8ac1e4eef28f34b5183577754ee7fb1c9bc7cca01cf027c53f8de95f934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C26TNEE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAbXHSknZucAvMdCSaEe%2F7M2wZ%2FDUuWJ5PJJe1w88a40AiAYVcmfoS0AE7YHQitvVaZyQPTXSQax7HmdRdOLkHwsdyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMABH1yNyhnckNVd8IKtwDBfgoTUkvZYFxUWddT5LqO5nBudRDlFg%2BY6BvF7ftnlnG83pHBpzys%2FZY3%2BBfe9bV579DIfo9KvZClSWQCgzRQogRio94pkpZB%2Bms%2FzzJCPtOfQIOM5CiISBJhKBnv47IlpTt%2FUmvbpYd6EDDhjT2u3MzVi9xM7AjBf50PAxdkrMQffQ%2Bo8Hs1zmpyWSe6ckkHOamcqKdHvgc0Rl8H1hXMuDeYTIr2o7wGzpzrwaTjMEGrgWYcd3HS7Tk1PAUO3q0Lj15YShkkO50Ss30dRvClqcpmZtWT8MV6FAKqiAwIEUZZ3%2BX2ZVAIh7sCP9P7BLp7rQRrr7HwTxfMvrPqFh0sVGsh8pnnkGzwsjCOdjR%2B1Fumi%2BHkEIsrrsgqTRDfjZ9dGHwmGYJSt%2B4lYeeQd0jm4cRP%2FqorPTXeHiW8CY6G32GjKpd7htanOYU89O2i0m6fGAz2EMgds3HlaFqJeq7kygYAE08%2B11cWavBiYKRt6ADwZP0JgsPxCY9HJS4VZ3wwyh9M5zbZZVaaVx6Fpopv5KgOcbcrl2Bz3c%2FDKGm3PdCdRsp%2BJtPCNY%2BMChtOsbBi1BY31fh%2FurGyipll7yiYX0LVyP8sAAwRwRDLEpvUmN%2BayMowrclXWUwk3wwq7aJwgY6pgEGtRrAiMk7oQTeqs4qK0cE5fcoPwQ9s0RrzhiSXgs3f56ONokV15Hr61%2F4DSXZvBjlLldc9Q7xY94KTZBeNUCkNTwU%2BqrapmvDon1bGvmcRCuxJ%2FiF4lSvB5BWINMvfFFO3AM3BE0SfJCiLDN29vr5EjkBAWf8NoPHyEI03JHAuN4SCiLQ%2FgaOwr8JL4HtTVhOpPrb%2FEIlTPOonEzgbYcgF1y%2BaolO&X-Amz-Signature=66d6587832119f96527a6ba5b0827b3b98dabc8aaf0f6778dd32768b0fc8183f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
