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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M3D6DLP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0nHXHDNosfte%2Bsc5EOxBFLdKiASR2IUW9omJAlUUuAAIgZ277dVs%2B40786y8DmVtLZwhdikQbL58wV1W1MBMRb6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnSeMAsXPt%2BLwU%2B%2FircA43VZ5uAxy87mTDyKqX4xPEhcEzvisIRlietkHOYVzhsytF2iPDnd6fHkQoLhw9%2FJiCf%2FZHx%2FDyafVaOXOIlSIaDSW%2FjJYpbWrsf7aN%2BRP0fGTW29aIvaKRVhrDxlrtex6XC17nO5%2Fv9lW8ZWbpH0h8N%2BWqqrzJY28Qo5IeGFvFu5%2FruAld2uxPTCZa54efSzceDgaBfsUSQ0fHTlvN959rbGEquYiuddfuMFnSwlT0ANCootBtczKX4eukQuJvnQtC6EVIXJhrrYGxuWHT0mF9pAx4hFufM0ZPrPV6PGZ7XwFPBSE3ebTp18bcrXnCC7WLlqaPO4QSGnqxLHjEYyE3XXsGwxJ8HntUH%2FT84%2FHoL%2FsG%2FSp16NlUe8RfuwZi6bAgihmmC3vEWD6TYnM45GihzvCQ0YpdUUIzMJXv98eOMxQQ2CSyRGQDZLPsDoewwrSlZgWGa%2B3WGvCtxMOB6oqCN24JQ5hjJYmBPa6m1t5IiAE0Q2BnQx0YQO3Usn3RqYCp7Prwq4nYtPf9VZwEga2FntT%2BT%2BFJ0FB7kjIiVteNhRhgnGPwwmpgTywlBmSrdavZOWl728Hd1KoHHLCR9n3%2Btry5nFPCiS0bMM0a48iCHn51kI6bVoVJBlh8pMLDa38EGOqUBzOIAl4bXQSRbcvZaK%2B8O9y7DgIxSyHKqO3Sp%2FYrwsfd%2Bx3LUro7sT4jecnAjDf55POaWUL06GUHZ1pkT1ie37uddI8yB9r1sG43Uad%2BzHQoKE%2FfWcWC1yJOyhl02xuGUqVjD%2FUH4gAqwM2sJYqtio8WZprqXDXovK4p5p0gCEjvaXWR%2Fm4g%2BwPZrbRvnJtq1Wig74ZrIKBxt72b%2Bah5ycUCiEHav&X-Amz-Signature=6072f42ddb5d7da88f5764e69eabdd8d018c2f271e4bf02a21015ef20ab10750&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M3D6DLP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0nHXHDNosfte%2Bsc5EOxBFLdKiASR2IUW9omJAlUUuAAIgZ277dVs%2B40786y8DmVtLZwhdikQbL58wV1W1MBMRb6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnSeMAsXPt%2BLwU%2B%2FircA43VZ5uAxy87mTDyKqX4xPEhcEzvisIRlietkHOYVzhsytF2iPDnd6fHkQoLhw9%2FJiCf%2FZHx%2FDyafVaOXOIlSIaDSW%2FjJYpbWrsf7aN%2BRP0fGTW29aIvaKRVhrDxlrtex6XC17nO5%2Fv9lW8ZWbpH0h8N%2BWqqrzJY28Qo5IeGFvFu5%2FruAld2uxPTCZa54efSzceDgaBfsUSQ0fHTlvN959rbGEquYiuddfuMFnSwlT0ANCootBtczKX4eukQuJvnQtC6EVIXJhrrYGxuWHT0mF9pAx4hFufM0ZPrPV6PGZ7XwFPBSE3ebTp18bcrXnCC7WLlqaPO4QSGnqxLHjEYyE3XXsGwxJ8HntUH%2FT84%2FHoL%2FsG%2FSp16NlUe8RfuwZi6bAgihmmC3vEWD6TYnM45GihzvCQ0YpdUUIzMJXv98eOMxQQ2CSyRGQDZLPsDoewwrSlZgWGa%2B3WGvCtxMOB6oqCN24JQ5hjJYmBPa6m1t5IiAE0Q2BnQx0YQO3Usn3RqYCp7Prwq4nYtPf9VZwEga2FntT%2BT%2BFJ0FB7kjIiVteNhRhgnGPwwmpgTywlBmSrdavZOWl728Hd1KoHHLCR9n3%2Btry5nFPCiS0bMM0a48iCHn51kI6bVoVJBlh8pMLDa38EGOqUBzOIAl4bXQSRbcvZaK%2B8O9y7DgIxSyHKqO3Sp%2FYrwsfd%2Bx3LUro7sT4jecnAjDf55POaWUL06GUHZ1pkT1ie37uddI8yB9r1sG43Uad%2BzHQoKE%2FfWcWC1yJOyhl02xuGUqVjD%2FUH4gAqwM2sJYqtio8WZprqXDXovK4p5p0gCEjvaXWR%2Fm4g%2BwPZrbRvnJtq1Wig74ZrIKBxt72b%2Bah5ycUCiEHav&X-Amz-Signature=ca9cd9f715950bea77b6b1aca0dfb20a1c1134ed8ac80102574840b36054a053&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M3D6DLP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0nHXHDNosfte%2Bsc5EOxBFLdKiASR2IUW9omJAlUUuAAIgZ277dVs%2B40786y8DmVtLZwhdikQbL58wV1W1MBMRb6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnSeMAsXPt%2BLwU%2B%2FircA43VZ5uAxy87mTDyKqX4xPEhcEzvisIRlietkHOYVzhsytF2iPDnd6fHkQoLhw9%2FJiCf%2FZHx%2FDyafVaOXOIlSIaDSW%2FjJYpbWrsf7aN%2BRP0fGTW29aIvaKRVhrDxlrtex6XC17nO5%2Fv9lW8ZWbpH0h8N%2BWqqrzJY28Qo5IeGFvFu5%2FruAld2uxPTCZa54efSzceDgaBfsUSQ0fHTlvN959rbGEquYiuddfuMFnSwlT0ANCootBtczKX4eukQuJvnQtC6EVIXJhrrYGxuWHT0mF9pAx4hFufM0ZPrPV6PGZ7XwFPBSE3ebTp18bcrXnCC7WLlqaPO4QSGnqxLHjEYyE3XXsGwxJ8HntUH%2FT84%2FHoL%2FsG%2FSp16NlUe8RfuwZi6bAgihmmC3vEWD6TYnM45GihzvCQ0YpdUUIzMJXv98eOMxQQ2CSyRGQDZLPsDoewwrSlZgWGa%2B3WGvCtxMOB6oqCN24JQ5hjJYmBPa6m1t5IiAE0Q2BnQx0YQO3Usn3RqYCp7Prwq4nYtPf9VZwEga2FntT%2BT%2BFJ0FB7kjIiVteNhRhgnGPwwmpgTywlBmSrdavZOWl728Hd1KoHHLCR9n3%2Btry5nFPCiS0bMM0a48iCHn51kI6bVoVJBlh8pMLDa38EGOqUBzOIAl4bXQSRbcvZaK%2B8O9y7DgIxSyHKqO3Sp%2FYrwsfd%2Bx3LUro7sT4jecnAjDf55POaWUL06GUHZ1pkT1ie37uddI8yB9r1sG43Uad%2BzHQoKE%2FfWcWC1yJOyhl02xuGUqVjD%2FUH4gAqwM2sJYqtio8WZprqXDXovK4p5p0gCEjvaXWR%2Fm4g%2BwPZrbRvnJtq1Wig74ZrIKBxt72b%2Bah5ycUCiEHav&X-Amz-Signature=be5532763b1f3da5ecc7bee7638d6f52b0ed1bbc78725321d99b34eafef3f2af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
