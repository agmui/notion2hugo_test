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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPXMJ72%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fe1WIgM7568RL5tut8V7ze0PbTloA5Xa31xrsKFPuwQIgR9piebp0GiNskTzS%2FkY0cZaOh5L75bm3ZWt36mhL7dUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg67kVWeOePzbFvSrcA%2F9obqm%2Bjwl7NtMZClhXyP%2BLKqu2g8CcL1jz1picdePbEfSc6R5QUvwK6mJfkEcZt5jAVpBb41tH6aphyXUGo0MJMbfXhbI612AyfHQ5n%2FjLeNAN3fq4I2DmpcZ5l2tTGqyHwEgmTGa6Gz%2BAiLqFQXyAP3nQPZnJlLkD4qnF71vJ5DAh6%2FtbpFPk3K%2BbFdqvYEpjqPqcTrAVyTsKTvIkHTQktgwb1RvrW57W3Hb4c2VZlbu1Uny3uIIW8fOel8rppEwbh7DjAs2MBsO92E8VXuf%2B%2Fz9hrbex0BAB8MDv3t35smDo8IOAUUVCRatm%2FBUO5BxlOQ3vozmb7b1nhpkkqaSsTmOleuC4f6vKNOuFxqRPisRD4wbtp3SYLDnFWnhHqM37Dhn8%2F7sCvqH5XhXTjIrOQfsMd03CQgROnAL2oIrXjbOpDGF0R8IpD9i7zYFdhnHGe1nEOaMsgnSJWJukTMXbgCFsRWFkgptDV7%2FZpibqrk1awlGTc482K9q3czYWS6CTMiIyVHAlZpzDUZP7b1X2yWDQqTCLJTRo7PXO7lmXeCph%2F2voW75pEhw0LCJYq1QfgBCaexh39JNTQtS5Ar6R9hu0AzfI4P0ZWWo0RFRtvfjm3niWv8AHqI5%2BMOP8yMMGOqUBK0L9yhdG9DLhB2%2FQ42R8ZZoNxHSP1ntZKQbNeoyUTHWOpC0C6k9I1WwF1lCvquNL%2BIfJIKIdi8B2rnsu5RC5EX5qshhv4SkSqrz1ybnAGq9%2F338pNW1Wm%2FoogyJi9ZnJA9bbA%2BfbnJub3ulcQaBAQnQWpFRPJAqjLtp8DmvY3HKnSfw5gvSkv9swgpmSsw9mRKsE9uzAG5aZRRtwbug8dS%2BbDcRx&X-Amz-Signature=53a5c702a1921f7ab6a78d9a28da9f5e471987c55bc464f455c94fdad1945222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPXMJ72%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fe1WIgM7568RL5tut8V7ze0PbTloA5Xa31xrsKFPuwQIgR9piebp0GiNskTzS%2FkY0cZaOh5L75bm3ZWt36mhL7dUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg67kVWeOePzbFvSrcA%2F9obqm%2Bjwl7NtMZClhXyP%2BLKqu2g8CcL1jz1picdePbEfSc6R5QUvwK6mJfkEcZt5jAVpBb41tH6aphyXUGo0MJMbfXhbI612AyfHQ5n%2FjLeNAN3fq4I2DmpcZ5l2tTGqyHwEgmTGa6Gz%2BAiLqFQXyAP3nQPZnJlLkD4qnF71vJ5DAh6%2FtbpFPk3K%2BbFdqvYEpjqPqcTrAVyTsKTvIkHTQktgwb1RvrW57W3Hb4c2VZlbu1Uny3uIIW8fOel8rppEwbh7DjAs2MBsO92E8VXuf%2B%2Fz9hrbex0BAB8MDv3t35smDo8IOAUUVCRatm%2FBUO5BxlOQ3vozmb7b1nhpkkqaSsTmOleuC4f6vKNOuFxqRPisRD4wbtp3SYLDnFWnhHqM37Dhn8%2F7sCvqH5XhXTjIrOQfsMd03CQgROnAL2oIrXjbOpDGF0R8IpD9i7zYFdhnHGe1nEOaMsgnSJWJukTMXbgCFsRWFkgptDV7%2FZpibqrk1awlGTc482K9q3czYWS6CTMiIyVHAlZpzDUZP7b1X2yWDQqTCLJTRo7PXO7lmXeCph%2F2voW75pEhw0LCJYq1QfgBCaexh39JNTQtS5Ar6R9hu0AzfI4P0ZWWo0RFRtvfjm3niWv8AHqI5%2BMOP8yMMGOqUBK0L9yhdG9DLhB2%2FQ42R8ZZoNxHSP1ntZKQbNeoyUTHWOpC0C6k9I1WwF1lCvquNL%2BIfJIKIdi8B2rnsu5RC5EX5qshhv4SkSqrz1ybnAGq9%2F338pNW1Wm%2FoogyJi9ZnJA9bbA%2BfbnJub3ulcQaBAQnQWpFRPJAqjLtp8DmvY3HKnSfw5gvSkv9swgpmSsw9mRKsE9uzAG5aZRRtwbug8dS%2BbDcRx&X-Amz-Signature=855d5256c556c2a798b6da1ab0a00d3cec19a70f2311debf4bbcfe12423ebb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPXMJ72%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fe1WIgM7568RL5tut8V7ze0PbTloA5Xa31xrsKFPuwQIgR9piebp0GiNskTzS%2FkY0cZaOh5L75bm3ZWt36mhL7dUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFg67kVWeOePzbFvSrcA%2F9obqm%2Bjwl7NtMZClhXyP%2BLKqu2g8CcL1jz1picdePbEfSc6R5QUvwK6mJfkEcZt5jAVpBb41tH6aphyXUGo0MJMbfXhbI612AyfHQ5n%2FjLeNAN3fq4I2DmpcZ5l2tTGqyHwEgmTGa6Gz%2BAiLqFQXyAP3nQPZnJlLkD4qnF71vJ5DAh6%2FtbpFPk3K%2BbFdqvYEpjqPqcTrAVyTsKTvIkHTQktgwb1RvrW57W3Hb4c2VZlbu1Uny3uIIW8fOel8rppEwbh7DjAs2MBsO92E8VXuf%2B%2Fz9hrbex0BAB8MDv3t35smDo8IOAUUVCRatm%2FBUO5BxlOQ3vozmb7b1nhpkkqaSsTmOleuC4f6vKNOuFxqRPisRD4wbtp3SYLDnFWnhHqM37Dhn8%2F7sCvqH5XhXTjIrOQfsMd03CQgROnAL2oIrXjbOpDGF0R8IpD9i7zYFdhnHGe1nEOaMsgnSJWJukTMXbgCFsRWFkgptDV7%2FZpibqrk1awlGTc482K9q3czYWS6CTMiIyVHAlZpzDUZP7b1X2yWDQqTCLJTRo7PXO7lmXeCph%2F2voW75pEhw0LCJYq1QfgBCaexh39JNTQtS5Ar6R9hu0AzfI4P0ZWWo0RFRtvfjm3niWv8AHqI5%2BMOP8yMMGOqUBK0L9yhdG9DLhB2%2FQ42R8ZZoNxHSP1ntZKQbNeoyUTHWOpC0C6k9I1WwF1lCvquNL%2BIfJIKIdi8B2rnsu5RC5EX5qshhv4SkSqrz1ybnAGq9%2F338pNW1Wm%2FoogyJi9ZnJA9bbA%2BfbnJub3ulcQaBAQnQWpFRPJAqjLtp8DmvY3HKnSfw5gvSkv9swgpmSsw9mRKsE9uzAG5aZRRtwbug8dS%2BbDcRx&X-Amz-Signature=4795d6411cc14508ce6881a464696826b6d04108c1e5258e091ae79fe4085bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
