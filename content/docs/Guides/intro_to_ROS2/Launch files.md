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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YY423K%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDFbX9BBOkGgzWK%2F6PE%2FaEibPOJpU%2BiJDNnB9bE2nAg1wIgVHrvTISeQiwOKOI%2BF%2BifLybrbHswVHBs2sQliRNzuXoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHzD9fnht%2BdwkP%2FmbircA4wGpDAdsIY0wSmaYDg7v2GONaj10cLEnnXCetkXHmcjGuWuEjHSG0OldZwBYfqSZi3AeYbNAHWjydvqjMFWsQ0LOuOJl5YTKJl%2F1vDdzXhp%2BLrGPjDrFbPqgKrGyBU4ydRoDhSxnqRGWaQPx0hJGzu%2F17JTJpFhttVIswIOZfK2xEx6SZB0ijhxSiuu8g9AcfmUt7dOgcnSRkXJjbiUEB2x8nQBowe8nZiEjYkxFZDsLaMfFmOMtV6qzyKuAZTJbCEweD6lupWYrh6C4syNWIRiXGkwkBUw2H5S4u%2FiYWljmLzPAb4uEMMTAEFJyNYKtaHIlNuGIWxhSY1w49V3Z18LOT6qtegcU%2F7GwA2%2Bm%2BExyam19h7jykuS9RjxV7oU2rpORyL5HThgEVnUQ%2FQE3A%2BFYVmAooZgdk8MR%2F4lA7sZakSGGZVxhH7QdR92jZR98%2Bp%2B5p51mKYo0F8mj1LK7k4%2FCyJRJC6XE5IfTFQhcqyRcAxyklLnkthtuz2SroUF3THS3AMi1A6VCB9X%2FPlWefn3HK1OOjfdQEep5nzOFA9CdVgd%2BP8sfZY71eM6MAkeJs1nFeoJhWaGPgZkEL5MnSc5LJbY9%2FOFQFcujhv6Ns5mCDx%2FAcb8IrACiS73MOi8%2Bb0GOqUBJTng68dn90HVXquIFTNXJfbw6eI4dn64fFX0L0tCMb4bcu2RyeK1ZusK0vICUgqUNII3a8Eb%2BR7d2oHIgOvYrEDSMRCvl8akZvAEuq%2FoKfyt1GANsa6oUqUDbBVKXxrxmUQBV3q7LzwXmbkEz3IqQiD6pq%2ByxdVmUf%2FbeVXuJCsuMtVdojGmh6trVFt31kI%2BpADEgi0waxVqzqVACrmQLhsDakT%2F&X-Amz-Signature=e1180e1cb561dbf754a887fabdf9f71c545146067b6697876775d06d323e6db1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YY423K%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDFbX9BBOkGgzWK%2F6PE%2FaEibPOJpU%2BiJDNnB9bE2nAg1wIgVHrvTISeQiwOKOI%2BF%2BifLybrbHswVHBs2sQliRNzuXoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHzD9fnht%2BdwkP%2FmbircA4wGpDAdsIY0wSmaYDg7v2GONaj10cLEnnXCetkXHmcjGuWuEjHSG0OldZwBYfqSZi3AeYbNAHWjydvqjMFWsQ0LOuOJl5YTKJl%2F1vDdzXhp%2BLrGPjDrFbPqgKrGyBU4ydRoDhSxnqRGWaQPx0hJGzu%2F17JTJpFhttVIswIOZfK2xEx6SZB0ijhxSiuu8g9AcfmUt7dOgcnSRkXJjbiUEB2x8nQBowe8nZiEjYkxFZDsLaMfFmOMtV6qzyKuAZTJbCEweD6lupWYrh6C4syNWIRiXGkwkBUw2H5S4u%2FiYWljmLzPAb4uEMMTAEFJyNYKtaHIlNuGIWxhSY1w49V3Z18LOT6qtegcU%2F7GwA2%2Bm%2BExyam19h7jykuS9RjxV7oU2rpORyL5HThgEVnUQ%2FQE3A%2BFYVmAooZgdk8MR%2F4lA7sZakSGGZVxhH7QdR92jZR98%2Bp%2B5p51mKYo0F8mj1LK7k4%2FCyJRJC6XE5IfTFQhcqyRcAxyklLnkthtuz2SroUF3THS3AMi1A6VCB9X%2FPlWefn3HK1OOjfdQEep5nzOFA9CdVgd%2BP8sfZY71eM6MAkeJs1nFeoJhWaGPgZkEL5MnSc5LJbY9%2FOFQFcujhv6Ns5mCDx%2FAcb8IrACiS73MOi8%2Bb0GOqUBJTng68dn90HVXquIFTNXJfbw6eI4dn64fFX0L0tCMb4bcu2RyeK1ZusK0vICUgqUNII3a8Eb%2BR7d2oHIgOvYrEDSMRCvl8akZvAEuq%2FoKfyt1GANsa6oUqUDbBVKXxrxmUQBV3q7LzwXmbkEz3IqQiD6pq%2ByxdVmUf%2FbeVXuJCsuMtVdojGmh6trVFt31kI%2BpADEgi0waxVqzqVACrmQLhsDakT%2F&X-Amz-Signature=1f7e2b071e3a776ee7aabdff7cc31b15ce63c4e3e6795710bf47380add400754&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YY423K%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDFbX9BBOkGgzWK%2F6PE%2FaEibPOJpU%2BiJDNnB9bE2nAg1wIgVHrvTISeQiwOKOI%2BF%2BifLybrbHswVHBs2sQliRNzuXoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHzD9fnht%2BdwkP%2FmbircA4wGpDAdsIY0wSmaYDg7v2GONaj10cLEnnXCetkXHmcjGuWuEjHSG0OldZwBYfqSZi3AeYbNAHWjydvqjMFWsQ0LOuOJl5YTKJl%2F1vDdzXhp%2BLrGPjDrFbPqgKrGyBU4ydRoDhSxnqRGWaQPx0hJGzu%2F17JTJpFhttVIswIOZfK2xEx6SZB0ijhxSiuu8g9AcfmUt7dOgcnSRkXJjbiUEB2x8nQBowe8nZiEjYkxFZDsLaMfFmOMtV6qzyKuAZTJbCEweD6lupWYrh6C4syNWIRiXGkwkBUw2H5S4u%2FiYWljmLzPAb4uEMMTAEFJyNYKtaHIlNuGIWxhSY1w49V3Z18LOT6qtegcU%2F7GwA2%2Bm%2BExyam19h7jykuS9RjxV7oU2rpORyL5HThgEVnUQ%2FQE3A%2BFYVmAooZgdk8MR%2F4lA7sZakSGGZVxhH7QdR92jZR98%2Bp%2B5p51mKYo0F8mj1LK7k4%2FCyJRJC6XE5IfTFQhcqyRcAxyklLnkthtuz2SroUF3THS3AMi1A6VCB9X%2FPlWefn3HK1OOjfdQEep5nzOFA9CdVgd%2BP8sfZY71eM6MAkeJs1nFeoJhWaGPgZkEL5MnSc5LJbY9%2FOFQFcujhv6Ns5mCDx%2FAcb8IrACiS73MOi8%2Bb0GOqUBJTng68dn90HVXquIFTNXJfbw6eI4dn64fFX0L0tCMb4bcu2RyeK1ZusK0vICUgqUNII3a8Eb%2BR7d2oHIgOvYrEDSMRCvl8akZvAEuq%2FoKfyt1GANsa6oUqUDbBVKXxrxmUQBV3q7LzwXmbkEz3IqQiD6pq%2ByxdVmUf%2FbeVXuJCsuMtVdojGmh6trVFt31kI%2BpADEgi0waxVqzqVACrmQLhsDakT%2F&X-Amz-Signature=b2c55cb761de6adc52e894b44581f7727210c523d7cffe4d9b65df28be1c0319&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
