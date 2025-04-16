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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQG7XAM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KQ2LzDuRo%2BVz8OytgGteBmyuHsRwB0W2Q%2Bf8gwdM4gIgIWFXbemjjPtW9Hqb1wZc%2FVYi6vCtfggPolTQIcdrqikq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCkLeaPGei39mOIbuSrcAzVCgVNKzMuIZNi4pyvsf61ngao4cEEZ0326%2Fpp43HesjvGvuADrxjRD0jUh8JpqxCMTzYrUyOFLKIITlVi3QBhAUzNlGK2lcbK%2Fi8%2B%2FcJtdJxnZpX0btSfTk7FC%2Bq4tCpaAHw1HRcugMHGEm2kCXknIZX4gcg9Y%2B2pZ7c3isKCPDPSL0nDdpLJjcs8n0Gmrhp76pK8hsJwBMkxTs84RZh5qqj9RbVpGNDraMW7fZONfbPovJn8atESVpBD2j6%2F34%2FhPTrJQAeIbvMlRCjeyb5jcH3RKIdVCihQHIWYAPlArmYZm7qkpQ%2Bg2UKl%2BWVch7dJ9l5Lyemk4mO6ztca%2BsW4CQ9xHGcIxkzlsZPgSfVvW4YKgD679tH8PtDuwiI6pxz02Wq4ybZFh%2Bsq2JRgaXngtPjX3jlmMGVOTZ2s9w9cUshvNHnTBgYQ9uvFl0%2B3C%2FTbnLkEBHmyX%2FuEUCTM%2BN3P03XnNc%2Bv209gCJMZHZv%2BfujfST34gl%2FB8ThIemDh31S2bu8FQbqQM6o5gsAvv9BvTwALGZTz6vE7Jmxy4XEj2%2BQqjbBmHdgBVr%2FEZASOHWfjj0gfw1%2FGKD39KlFoUiLma%2FQGDWTOqISfoo65TSHLa1hKoK4dnG02hcVRGMLyj%2Fb8GOqUBggLlGHeLpB%2BoNlCsKYejhz3bjRpIREfqvlxBMaVn0wq4PLZu3chTn%2FNXKrFUrGoMdr7f1bzg0JuQXZDMTObgO5orSEZBvr2%2BYgVGN64SCv1J9LouQeWofYjpijVZW9s3B92%2Fa3BH%2FMtt43t0ckGDCFR6bAW%2B3KiIYIxnkyHcGESzqSZbif7ueri7wTJ2u11ICAFhNHkZg1sj%2B6tLr%2Bp9ZsHc1w4b&X-Amz-Signature=9dc109ce02203a159d1a50e79bf764ace20d92ffb6b3e2ad9cc57612e7f7ca7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQG7XAM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KQ2LzDuRo%2BVz8OytgGteBmyuHsRwB0W2Q%2Bf8gwdM4gIgIWFXbemjjPtW9Hqb1wZc%2FVYi6vCtfggPolTQIcdrqikq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCkLeaPGei39mOIbuSrcAzVCgVNKzMuIZNi4pyvsf61ngao4cEEZ0326%2Fpp43HesjvGvuADrxjRD0jUh8JpqxCMTzYrUyOFLKIITlVi3QBhAUzNlGK2lcbK%2Fi8%2B%2FcJtdJxnZpX0btSfTk7FC%2Bq4tCpaAHw1HRcugMHGEm2kCXknIZX4gcg9Y%2B2pZ7c3isKCPDPSL0nDdpLJjcs8n0Gmrhp76pK8hsJwBMkxTs84RZh5qqj9RbVpGNDraMW7fZONfbPovJn8atESVpBD2j6%2F34%2FhPTrJQAeIbvMlRCjeyb5jcH3RKIdVCihQHIWYAPlArmYZm7qkpQ%2Bg2UKl%2BWVch7dJ9l5Lyemk4mO6ztca%2BsW4CQ9xHGcIxkzlsZPgSfVvW4YKgD679tH8PtDuwiI6pxz02Wq4ybZFh%2Bsq2JRgaXngtPjX3jlmMGVOTZ2s9w9cUshvNHnTBgYQ9uvFl0%2B3C%2FTbnLkEBHmyX%2FuEUCTM%2BN3P03XnNc%2Bv209gCJMZHZv%2BfujfST34gl%2FB8ThIemDh31S2bu8FQbqQM6o5gsAvv9BvTwALGZTz6vE7Jmxy4XEj2%2BQqjbBmHdgBVr%2FEZASOHWfjj0gfw1%2FGKD39KlFoUiLma%2FQGDWTOqISfoo65TSHLa1hKoK4dnG02hcVRGMLyj%2Fb8GOqUBggLlGHeLpB%2BoNlCsKYejhz3bjRpIREfqvlxBMaVn0wq4PLZu3chTn%2FNXKrFUrGoMdr7f1bzg0JuQXZDMTObgO5orSEZBvr2%2BYgVGN64SCv1J9LouQeWofYjpijVZW9s3B92%2Fa3BH%2FMtt43t0ckGDCFR6bAW%2B3KiIYIxnkyHcGESzqSZbif7ueri7wTJ2u11ICAFhNHkZg1sj%2B6tLr%2Bp9ZsHc1w4b&X-Amz-Signature=1ab900db115a43408244aae36326d3bc13ee23cf9ca420c7d4dc07f9b2b4d642&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQG7XAM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KQ2LzDuRo%2BVz8OytgGteBmyuHsRwB0W2Q%2Bf8gwdM4gIgIWFXbemjjPtW9Hqb1wZc%2FVYi6vCtfggPolTQIcdrqikq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCkLeaPGei39mOIbuSrcAzVCgVNKzMuIZNi4pyvsf61ngao4cEEZ0326%2Fpp43HesjvGvuADrxjRD0jUh8JpqxCMTzYrUyOFLKIITlVi3QBhAUzNlGK2lcbK%2Fi8%2B%2FcJtdJxnZpX0btSfTk7FC%2Bq4tCpaAHw1HRcugMHGEm2kCXknIZX4gcg9Y%2B2pZ7c3isKCPDPSL0nDdpLJjcs8n0Gmrhp76pK8hsJwBMkxTs84RZh5qqj9RbVpGNDraMW7fZONfbPovJn8atESVpBD2j6%2F34%2FhPTrJQAeIbvMlRCjeyb5jcH3RKIdVCihQHIWYAPlArmYZm7qkpQ%2Bg2UKl%2BWVch7dJ9l5Lyemk4mO6ztca%2BsW4CQ9xHGcIxkzlsZPgSfVvW4YKgD679tH8PtDuwiI6pxz02Wq4ybZFh%2Bsq2JRgaXngtPjX3jlmMGVOTZ2s9w9cUshvNHnTBgYQ9uvFl0%2B3C%2FTbnLkEBHmyX%2FuEUCTM%2BN3P03XnNc%2Bv209gCJMZHZv%2BfujfST34gl%2FB8ThIemDh31S2bu8FQbqQM6o5gsAvv9BvTwALGZTz6vE7Jmxy4XEj2%2BQqjbBmHdgBVr%2FEZASOHWfjj0gfw1%2FGKD39KlFoUiLma%2FQGDWTOqISfoo65TSHLa1hKoK4dnG02hcVRGMLyj%2Fb8GOqUBggLlGHeLpB%2BoNlCsKYejhz3bjRpIREfqvlxBMaVn0wq4PLZu3chTn%2FNXKrFUrGoMdr7f1bzg0JuQXZDMTObgO5orSEZBvr2%2BYgVGN64SCv1J9LouQeWofYjpijVZW9s3B92%2Fa3BH%2FMtt43t0ckGDCFR6bAW%2B3KiIYIxnkyHcGESzqSZbif7ueri7wTJ2u11ICAFhNHkZg1sj%2B6tLr%2Bp9ZsHc1w4b&X-Amz-Signature=52c64fe39d093285a17b83122c0e1e9afcb98aeff9e14bfb069295ded09ff685&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
