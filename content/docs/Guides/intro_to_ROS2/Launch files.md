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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A533WI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw%2BqXGgLFMrwDG5w1GjGqzqEWCy%2FX07sVvZgba7hXXjwIgO8X%2BeTWRC6cdE48E3%2BXfVnKiNFNZPj9A9sMd%2BgtT3ewqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2UU9dNS2aG%2BTXClyrcA%2FsLqSgQ8l0vpNL3RH7hz3aSZkf3gNZAtb2PS1ycwpCyc40Md02kcBoJR0K5t8bq7DBUFYsM361TpDHdHq0sVsk%2FAqMi%2B2GRJE8IPYCz%2B1%2Fw4SLwsVVGTevNH8lyuaPmtEVHpx9%2FxlFMt0KKMzieHO8cdpw659VzRCbLHpAiRFwFoqO5NV8zwGpAllWj7T6Ljfm9iealPZrrMhpK2m%2BGpHJ6ngXOM6JmOFuaz8%2B%2B1%2F0oXjnbOiRnxa79PVo9G4y%2BIFuYERtCOx%2BR%2BlUXR2bDtn9FY7B5BrDRrltUvBO2eOCQI8IXnV%2FMtcMcFW1zlqrcR%2B5jJR8hG%2Be90iJ4naLPNzwtRlpo0scSV26WOsLTm5YquKi%2B7lBz2zkLQXhqJi%2F7JbaRnYovwRlD3JesIwpP6DUofDWfNf92i6uK3ovH4cPgCgWk2pTf2wMiHD84z1Ql6VO08mANvKt4f4bihlBE4JI8DPvnLz0EHoEnDtUTP6HfYQstzuYqqd8NT1YAkvwpUsi5Y8iLncpgUk%2F2XMa%2BGBuoXh2KTmklYSJAxeqeft4bAg%2FI%2FPMKoJhNfQE4h%2F68GIwAjsta3w%2BzBZGqztClsw1hxDxNr0YhJUKppJWIEA6k4NeUMpNgqzoAGiD7MK75kL4GOqUBQz55Crqf4XGZN5bJfOp8G%2B6FIkYQgpceXTAKqXvNQ9UoCn3DozdxERt4zfy3RO7WKB4AfWOuJynbS9fqtOK6EC1cUacFWRAFNwjowclWBy2M1SI0FOmw6qpNu0QC6YlxhKrJYZiwHCGgTY0hi2A89cDUT9l%2FQOhJAnzhqcqC%2BGuplYLgNOnq2jQLJZ8dlzUSiPJGx9N%2BtKtEOpK3E3G5M7D4FDHQ&X-Amz-Signature=3128e42febd7905e61683b5a911b34230a608891ef38da7ccddddce2a33a5258&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A533WI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw%2BqXGgLFMrwDG5w1GjGqzqEWCy%2FX07sVvZgba7hXXjwIgO8X%2BeTWRC6cdE48E3%2BXfVnKiNFNZPj9A9sMd%2BgtT3ewqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2UU9dNS2aG%2BTXClyrcA%2FsLqSgQ8l0vpNL3RH7hz3aSZkf3gNZAtb2PS1ycwpCyc40Md02kcBoJR0K5t8bq7DBUFYsM361TpDHdHq0sVsk%2FAqMi%2B2GRJE8IPYCz%2B1%2Fw4SLwsVVGTevNH8lyuaPmtEVHpx9%2FxlFMt0KKMzieHO8cdpw659VzRCbLHpAiRFwFoqO5NV8zwGpAllWj7T6Ljfm9iealPZrrMhpK2m%2BGpHJ6ngXOM6JmOFuaz8%2B%2B1%2F0oXjnbOiRnxa79PVo9G4y%2BIFuYERtCOx%2BR%2BlUXR2bDtn9FY7B5BrDRrltUvBO2eOCQI8IXnV%2FMtcMcFW1zlqrcR%2B5jJR8hG%2Be90iJ4naLPNzwtRlpo0scSV26WOsLTm5YquKi%2B7lBz2zkLQXhqJi%2F7JbaRnYovwRlD3JesIwpP6DUofDWfNf92i6uK3ovH4cPgCgWk2pTf2wMiHD84z1Ql6VO08mANvKt4f4bihlBE4JI8DPvnLz0EHoEnDtUTP6HfYQstzuYqqd8NT1YAkvwpUsi5Y8iLncpgUk%2F2XMa%2BGBuoXh2KTmklYSJAxeqeft4bAg%2FI%2FPMKoJhNfQE4h%2F68GIwAjsta3w%2BzBZGqztClsw1hxDxNr0YhJUKppJWIEA6k4NeUMpNgqzoAGiD7MK75kL4GOqUBQz55Crqf4XGZN5bJfOp8G%2B6FIkYQgpceXTAKqXvNQ9UoCn3DozdxERt4zfy3RO7WKB4AfWOuJynbS9fqtOK6EC1cUacFWRAFNwjowclWBy2M1SI0FOmw6qpNu0QC6YlxhKrJYZiwHCGgTY0hi2A89cDUT9l%2FQOhJAnzhqcqC%2BGuplYLgNOnq2jQLJZ8dlzUSiPJGx9N%2BtKtEOpK3E3G5M7D4FDHQ&X-Amz-Signature=425c9987e1aaad6a582d08f6d59f8b324e1f133913a24aff3a0b586264767e05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A533WI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw%2BqXGgLFMrwDG5w1GjGqzqEWCy%2FX07sVvZgba7hXXjwIgO8X%2BeTWRC6cdE48E3%2BXfVnKiNFNZPj9A9sMd%2BgtT3ewqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2UU9dNS2aG%2BTXClyrcA%2FsLqSgQ8l0vpNL3RH7hz3aSZkf3gNZAtb2PS1ycwpCyc40Md02kcBoJR0K5t8bq7DBUFYsM361TpDHdHq0sVsk%2FAqMi%2B2GRJE8IPYCz%2B1%2Fw4SLwsVVGTevNH8lyuaPmtEVHpx9%2FxlFMt0KKMzieHO8cdpw659VzRCbLHpAiRFwFoqO5NV8zwGpAllWj7T6Ljfm9iealPZrrMhpK2m%2BGpHJ6ngXOM6JmOFuaz8%2B%2B1%2F0oXjnbOiRnxa79PVo9G4y%2BIFuYERtCOx%2BR%2BlUXR2bDtn9FY7B5BrDRrltUvBO2eOCQI8IXnV%2FMtcMcFW1zlqrcR%2B5jJR8hG%2Be90iJ4naLPNzwtRlpo0scSV26WOsLTm5YquKi%2B7lBz2zkLQXhqJi%2F7JbaRnYovwRlD3JesIwpP6DUofDWfNf92i6uK3ovH4cPgCgWk2pTf2wMiHD84z1Ql6VO08mANvKt4f4bihlBE4JI8DPvnLz0EHoEnDtUTP6HfYQstzuYqqd8NT1YAkvwpUsi5Y8iLncpgUk%2F2XMa%2BGBuoXh2KTmklYSJAxeqeft4bAg%2FI%2FPMKoJhNfQE4h%2F68GIwAjsta3w%2BzBZGqztClsw1hxDxNr0YhJUKppJWIEA6k4NeUMpNgqzoAGiD7MK75kL4GOqUBQz55Crqf4XGZN5bJfOp8G%2B6FIkYQgpceXTAKqXvNQ9UoCn3DozdxERt4zfy3RO7WKB4AfWOuJynbS9fqtOK6EC1cUacFWRAFNwjowclWBy2M1SI0FOmw6qpNu0QC6YlxhKrJYZiwHCGgTY0hi2A89cDUT9l%2FQOhJAnzhqcqC%2BGuplYLgNOnq2jQLJZ8dlzUSiPJGx9N%2BtKtEOpK3E3G5M7D4FDHQ&X-Amz-Signature=53e58b996f42c3a41c32166273236af47e4166bb2aa06f0790e4118a84f3ccd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
