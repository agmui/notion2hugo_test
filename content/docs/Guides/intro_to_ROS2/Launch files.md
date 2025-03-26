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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTSVFNL2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQ3dVY0z7%2Fhw1k5%2F%2FvCXPtdXCYPrd%2BSi902ka%2FnRxNgIgA08wJVjBcYC7ucsgUzd3IW9Ngc%2Fzk9ZOP3Pp%2FjudqcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCoCCohgZfmdBXLJ%2BCrcA3P%2BaSB3sYR%2BFHgj8l2Yh%2FHqJs12ozZz2fDQAMzfn145F%2FL8tVuoMHopAcsdHvOEVr9kA00MCfWJfLD7K4ogu%2F16hasBRtSkmL3GdUHMMihHIXmf1%2FW%2BQ48DqUyqcuN%2FwlNXDbo69X63Zk9tjQBMwY%2BJurPCM%2B03IdgiSzeZ2tQma02pSccMi4UtIs0ouKsMNOJD2EgmpNwJ7K7zrSWax17xnN9%2BFSHk%2BYtOJC%2BufUr3lXP7We9EuFhFfpiTwTBrWRtJuKHLNjme7vEoAPTm0%2BTQ6McumUsdA9RYtL3i63PJvkGYBuxQJEmQQmBb5RJk5tqKsJBxVHsaud%2BshdkqVp0S%2F5tZgflVByBualwXUYB%2BAHZ7YyQOv8JD356pLmes5wKyuAmcBD8UYA0CPYY8tKf8hg5%2FhTNyFRywSU9uc6GIBsNLHJr2rQLNPNmrTLG7ovk8SZSy4VFBfH9Nr%2FDrw8J%2BQx5TJCgsZTQu7zwHrHfQIl5NmRV6QqPFE8Ug6wU8HvGUjac94iSmUMFeeTEoi8AaWDTpV7BEXS37AUgd7vA4n67IDsaUEUvFigAiyh05FtdpCNMuhRkurQPJsHlsXmcLPdxTjydK0hNzVrso3AiwJxbl6DE1oOqBHR4cMLjTkb8GOqUBlOZxl%2BMdw1HMOmJd7pSmiHpWWGTpvY5f5T6NAYrRTRy65F%2BWJTVMmip5Ss1%2FyRBgCbNZ7X3bWO6dk7%2ByeqAUtcaKfONl8JQKkBJjh4Q%2BZ2knb3YcpInZ3d30NusMl5yN3%2FlRTQH1zifj5fd1GCzBiCdR1VRiF%2Fo9fLxTSXM4VcynX3vdRXZFO%2Bl68IDNYTRFVjqjSoBojCiUmlQbk98bpj%2BJFUSQ&X-Amz-Signature=b4e0cb271735fa180f3070945b945fcee8825a56f2e1e9a9e5eaf2f81ca86959&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTSVFNL2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQ3dVY0z7%2Fhw1k5%2F%2FvCXPtdXCYPrd%2BSi902ka%2FnRxNgIgA08wJVjBcYC7ucsgUzd3IW9Ngc%2Fzk9ZOP3Pp%2FjudqcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCoCCohgZfmdBXLJ%2BCrcA3P%2BaSB3sYR%2BFHgj8l2Yh%2FHqJs12ozZz2fDQAMzfn145F%2FL8tVuoMHopAcsdHvOEVr9kA00MCfWJfLD7K4ogu%2F16hasBRtSkmL3GdUHMMihHIXmf1%2FW%2BQ48DqUyqcuN%2FwlNXDbo69X63Zk9tjQBMwY%2BJurPCM%2B03IdgiSzeZ2tQma02pSccMi4UtIs0ouKsMNOJD2EgmpNwJ7K7zrSWax17xnN9%2BFSHk%2BYtOJC%2BufUr3lXP7We9EuFhFfpiTwTBrWRtJuKHLNjme7vEoAPTm0%2BTQ6McumUsdA9RYtL3i63PJvkGYBuxQJEmQQmBb5RJk5tqKsJBxVHsaud%2BshdkqVp0S%2F5tZgflVByBualwXUYB%2BAHZ7YyQOv8JD356pLmes5wKyuAmcBD8UYA0CPYY8tKf8hg5%2FhTNyFRywSU9uc6GIBsNLHJr2rQLNPNmrTLG7ovk8SZSy4VFBfH9Nr%2FDrw8J%2BQx5TJCgsZTQu7zwHrHfQIl5NmRV6QqPFE8Ug6wU8HvGUjac94iSmUMFeeTEoi8AaWDTpV7BEXS37AUgd7vA4n67IDsaUEUvFigAiyh05FtdpCNMuhRkurQPJsHlsXmcLPdxTjydK0hNzVrso3AiwJxbl6DE1oOqBHR4cMLjTkb8GOqUBlOZxl%2BMdw1HMOmJd7pSmiHpWWGTpvY5f5T6NAYrRTRy65F%2BWJTVMmip5Ss1%2FyRBgCbNZ7X3bWO6dk7%2ByeqAUtcaKfONl8JQKkBJjh4Q%2BZ2knb3YcpInZ3d30NusMl5yN3%2FlRTQH1zifj5fd1GCzBiCdR1VRiF%2Fo9fLxTSXM4VcynX3vdRXZFO%2Bl68IDNYTRFVjqjSoBojCiUmlQbk98bpj%2BJFUSQ&X-Amz-Signature=05000e2e24e4af41ceb3658357f2cd83aaac9571f54d5565ac27786572205758&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTSVFNL2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUQ3dVY0z7%2Fhw1k5%2F%2FvCXPtdXCYPrd%2BSi902ka%2FnRxNgIgA08wJVjBcYC7ucsgUzd3IW9Ngc%2Fzk9ZOP3Pp%2FjudqcEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCoCCohgZfmdBXLJ%2BCrcA3P%2BaSB3sYR%2BFHgj8l2Yh%2FHqJs12ozZz2fDQAMzfn145F%2FL8tVuoMHopAcsdHvOEVr9kA00MCfWJfLD7K4ogu%2F16hasBRtSkmL3GdUHMMihHIXmf1%2FW%2BQ48DqUyqcuN%2FwlNXDbo69X63Zk9tjQBMwY%2BJurPCM%2B03IdgiSzeZ2tQma02pSccMi4UtIs0ouKsMNOJD2EgmpNwJ7K7zrSWax17xnN9%2BFSHk%2BYtOJC%2BufUr3lXP7We9EuFhFfpiTwTBrWRtJuKHLNjme7vEoAPTm0%2BTQ6McumUsdA9RYtL3i63PJvkGYBuxQJEmQQmBb5RJk5tqKsJBxVHsaud%2BshdkqVp0S%2F5tZgflVByBualwXUYB%2BAHZ7YyQOv8JD356pLmes5wKyuAmcBD8UYA0CPYY8tKf8hg5%2FhTNyFRywSU9uc6GIBsNLHJr2rQLNPNmrTLG7ovk8SZSy4VFBfH9Nr%2FDrw8J%2BQx5TJCgsZTQu7zwHrHfQIl5NmRV6QqPFE8Ug6wU8HvGUjac94iSmUMFeeTEoi8AaWDTpV7BEXS37AUgd7vA4n67IDsaUEUvFigAiyh05FtdpCNMuhRkurQPJsHlsXmcLPdxTjydK0hNzVrso3AiwJxbl6DE1oOqBHR4cMLjTkb8GOqUBlOZxl%2BMdw1HMOmJd7pSmiHpWWGTpvY5f5T6NAYrRTRy65F%2BWJTVMmip5Ss1%2FyRBgCbNZ7X3bWO6dk7%2ByeqAUtcaKfONl8JQKkBJjh4Q%2BZ2knb3YcpInZ3d30NusMl5yN3%2FlRTQH1zifj5fd1GCzBiCdR1VRiF%2Fo9fLxTSXM4VcynX3vdRXZFO%2Bl68IDNYTRFVjqjSoBojCiUmlQbk98bpj%2BJFUSQ&X-Amz-Signature=8f83d0be10be05c30370bbcec8d2b6482c662f6a61f9c497b9f19ffc79cc3e88&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
