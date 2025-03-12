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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIJTUJH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCTwv1QKuGcmRcsgvjFKSNoedgGcJ%2B7t%2BQVn41iwNk%2BbgIgZhl4%2Frl9WQoT3w%2B%2FRva5eGkfuRLZZ14U8visWXg4c9gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28aPBxHouP4Vk99CrcA1ZI8DQL3RTn9s%2FmepBXcAe8nwLe%2Bwsy1fR8xQdMyYk39IGrN1d753azfLY1i7GTfIns9P98GpXnKXkjjKluJmyfE5JagTikQBFP4gQFnR6NPoNMmdZN3iuFfe%2Fdlg0LWIPNTH%2Fn%2Fqbl1jgaj5m3yNfmQ2V%2Fxk9b0pn9iualjyjaNhaT9jt9fitrvsl4GzlEBdojMjq3I12gsFBziz9D7GLSDLs7YgQTYEnn62Q3iaSTF%2B4QaZxaghdKcgwEdwz%2BuebFL57%2FhVYTOPXNnQtRlk6DlFto0e9LJ3Hl7Dtu2XKrPCH0z5db%2FnnzohaH7F5710NVkxFMbLbD3ysvy4%2Ff2a0p8AZI%2FEfyYS4AeJlnPwCOZctaabwL13IuORqVmToKH1gyumOMOHY8o3RVbqSs30NvqKCLcZ%2BgasSvp4krzAGuP7NTenXq9WOgSPAFn4Ce5BSLjd%2BHrxT4uGv8W8rk2XwH7GWYPVdRbuWbt5crDsUV2FrY1JVJ00LVDcTCxxm3awuzb0yKT5UTZqVIroz0bV6LaLEK9GYMMDjDGqEPsm6n7cDG4X415FN42z04XumblGY7yOVSaMNg3WSVytw4PajhczE7zQdDZXlk0NJRF%2FrH9jgDf8xf%2FPmNjcHvMJWgxr4GOqUBBKhRQoi208wCscb67vI93RGxGjpsPj%2Fi7crvgqx1mZenNRNyb5w1KR672PS6kMF9KgxVGuBnLL8yFLV1hbu%2F1GSbsf77pWyRzfPlOYdF2rmnxdZiu3m1AsRuun4mc%2B30f8ffRRNcyJDG52QiZhwAsXA86HlZN%2F3yPBH6m2G5EPCq51Y2ec3Nl2IQ%2F%2BalNhcHzH0lx%2BoPmvTcK1khtvfimWGkZw5F&X-Amz-Signature=b944618cdc0019e547431567918f35cafdf8321161ce1f14964dbdf19191041a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIJTUJH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCTwv1QKuGcmRcsgvjFKSNoedgGcJ%2B7t%2BQVn41iwNk%2BbgIgZhl4%2Frl9WQoT3w%2B%2FRva5eGkfuRLZZ14U8visWXg4c9gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28aPBxHouP4Vk99CrcA1ZI8DQL3RTn9s%2FmepBXcAe8nwLe%2Bwsy1fR8xQdMyYk39IGrN1d753azfLY1i7GTfIns9P98GpXnKXkjjKluJmyfE5JagTikQBFP4gQFnR6NPoNMmdZN3iuFfe%2Fdlg0LWIPNTH%2Fn%2Fqbl1jgaj5m3yNfmQ2V%2Fxk9b0pn9iualjyjaNhaT9jt9fitrvsl4GzlEBdojMjq3I12gsFBziz9D7GLSDLs7YgQTYEnn62Q3iaSTF%2B4QaZxaghdKcgwEdwz%2BuebFL57%2FhVYTOPXNnQtRlk6DlFto0e9LJ3Hl7Dtu2XKrPCH0z5db%2FnnzohaH7F5710NVkxFMbLbD3ysvy4%2Ff2a0p8AZI%2FEfyYS4AeJlnPwCOZctaabwL13IuORqVmToKH1gyumOMOHY8o3RVbqSs30NvqKCLcZ%2BgasSvp4krzAGuP7NTenXq9WOgSPAFn4Ce5BSLjd%2BHrxT4uGv8W8rk2XwH7GWYPVdRbuWbt5crDsUV2FrY1JVJ00LVDcTCxxm3awuzb0yKT5UTZqVIroz0bV6LaLEK9GYMMDjDGqEPsm6n7cDG4X415FN42z04XumblGY7yOVSaMNg3WSVytw4PajhczE7zQdDZXlk0NJRF%2FrH9jgDf8xf%2FPmNjcHvMJWgxr4GOqUBBKhRQoi208wCscb67vI93RGxGjpsPj%2Fi7crvgqx1mZenNRNyb5w1KR672PS6kMF9KgxVGuBnLL8yFLV1hbu%2F1GSbsf77pWyRzfPlOYdF2rmnxdZiu3m1AsRuun4mc%2B30f8ffRRNcyJDG52QiZhwAsXA86HlZN%2F3yPBH6m2G5EPCq51Y2ec3Nl2IQ%2F%2BalNhcHzH0lx%2BoPmvTcK1khtvfimWGkZw5F&X-Amz-Signature=689a5cc29e7ea85486a93777d2a66b524369ec16da185de6fce36d903fdf239a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIJTUJH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCTwv1QKuGcmRcsgvjFKSNoedgGcJ%2B7t%2BQVn41iwNk%2BbgIgZhl4%2Frl9WQoT3w%2B%2FRva5eGkfuRLZZ14U8visWXg4c9gqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ28aPBxHouP4Vk99CrcA1ZI8DQL3RTn9s%2FmepBXcAe8nwLe%2Bwsy1fR8xQdMyYk39IGrN1d753azfLY1i7GTfIns9P98GpXnKXkjjKluJmyfE5JagTikQBFP4gQFnR6NPoNMmdZN3iuFfe%2Fdlg0LWIPNTH%2Fn%2Fqbl1jgaj5m3yNfmQ2V%2Fxk9b0pn9iualjyjaNhaT9jt9fitrvsl4GzlEBdojMjq3I12gsFBziz9D7GLSDLs7YgQTYEnn62Q3iaSTF%2B4QaZxaghdKcgwEdwz%2BuebFL57%2FhVYTOPXNnQtRlk6DlFto0e9LJ3Hl7Dtu2XKrPCH0z5db%2FnnzohaH7F5710NVkxFMbLbD3ysvy4%2Ff2a0p8AZI%2FEfyYS4AeJlnPwCOZctaabwL13IuORqVmToKH1gyumOMOHY8o3RVbqSs30NvqKCLcZ%2BgasSvp4krzAGuP7NTenXq9WOgSPAFn4Ce5BSLjd%2BHrxT4uGv8W8rk2XwH7GWYPVdRbuWbt5crDsUV2FrY1JVJ00LVDcTCxxm3awuzb0yKT5UTZqVIroz0bV6LaLEK9GYMMDjDGqEPsm6n7cDG4X415FN42z04XumblGY7yOVSaMNg3WSVytw4PajhczE7zQdDZXlk0NJRF%2FrH9jgDf8xf%2FPmNjcHvMJWgxr4GOqUBBKhRQoi208wCscb67vI93RGxGjpsPj%2Fi7crvgqx1mZenNRNyb5w1KR672PS6kMF9KgxVGuBnLL8yFLV1hbu%2F1GSbsf77pWyRzfPlOYdF2rmnxdZiu3m1AsRuun4mc%2B30f8ffRRNcyJDG52QiZhwAsXA86HlZN%2F3yPBH6m2G5EPCq51Y2ec3Nl2IQ%2F%2BalNhcHzH0lx%2BoPmvTcK1khtvfimWGkZw5F&X-Amz-Signature=4db13cbda75dd46eea2c2357506231c989c905f2ad8deb6362c9a06b18a0406d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
