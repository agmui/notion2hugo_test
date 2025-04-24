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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQONXMUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG6ecBoDUCESd%2BOq2h%2BlObBamGoY4pLU2J8AB%2F2oeuhCAiEAjGmeb502NaFnEtMAAKiQB09KdIs62m3UR3QnavKNEZcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI7OxAyBH6iLI9sImircA3my3YQPUJRw7YWCfuGdRK8ULCvX%2BJNlL1Xx%2Bq0KpD099dw5TzOM0wOpiF3TTbhRv7WTG8etR%2FaN%2F7nBAzfnBp1bHobWsXYzG7QgcRUJ5vgi%2Fd1vRbJ%2FEXpc1UllAa3XQF2wCtwdeyGPQOwRzHdcbf4B%2B2%2FgLe0Rj9CPHGBfTrEax3jccgS4DqJEg5GQ8qaKVViltwyIGdFWytBwTv4Vr3Fw9iA3d25QjqBjmfmOda4lL0px5vekjAzaYQ8Nw2Bp9TEwXo9o7SzZnHsEyBK5zG11RCWodUB20nhK0UMCRM0rZwyu5cvpufDmVWLmHfWTzZb0vcegu%2BQKzkthVPLmBZV7DbLuU8%2Bl8SoCruCBoje5zxPrYYcd60zKChS9g4PM6QiLzQU5P8tdlFzLt6Vooyh6njGqfRWqF23s%2F9BjtGl3lIVA70z%2FQTL69wMOsdW4P8P7nIq2VmGY6appHXF%2FvACNxbpOF2igB3ye70c4tYuNsLsK54nYqxtI%2FYcDvZGBnHoVU3ZObESB7q09BSnfZwdPi1s7WwIDnwqhbPSD%2BaRCz6trgBMhz0O47VdmvUJs9C%2B5xB%2BaRZz%2BcHjC5aIhgGkwERJ4izqETIt7sRRQJEwSAArTIDGw1MpPM79KMMDOp8AGOqUBhtV1SQGZlxy8XYc7O2p9o0od9XFmwxdaHpR3q6Kyxf7%2F8r5WsMk1zRhg9ge%2BlUq9IQk3tPj2ACvHEeICASqv2NIQPS6kBkiIktOEc6PankDRHZ1%2BvzjMzLt3lv3hZITuqlsUPtZzKMkYswJj33cKGY87Bmn4AZBiLEXm%2BIBPhkKP1XEOae2HMX34%2FSJxKG3ORZMV%2Bs%2BYAAGnDyHilIpzev3kmuLn&X-Amz-Signature=af36c9919c4e86e49e00782d17330fd86779d86931f6d129f3c2d5157493c76b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQONXMUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG6ecBoDUCESd%2BOq2h%2BlObBamGoY4pLU2J8AB%2F2oeuhCAiEAjGmeb502NaFnEtMAAKiQB09KdIs62m3UR3QnavKNEZcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI7OxAyBH6iLI9sImircA3my3YQPUJRw7YWCfuGdRK8ULCvX%2BJNlL1Xx%2Bq0KpD099dw5TzOM0wOpiF3TTbhRv7WTG8etR%2FaN%2F7nBAzfnBp1bHobWsXYzG7QgcRUJ5vgi%2Fd1vRbJ%2FEXpc1UllAa3XQF2wCtwdeyGPQOwRzHdcbf4B%2B2%2FgLe0Rj9CPHGBfTrEax3jccgS4DqJEg5GQ8qaKVViltwyIGdFWytBwTv4Vr3Fw9iA3d25QjqBjmfmOda4lL0px5vekjAzaYQ8Nw2Bp9TEwXo9o7SzZnHsEyBK5zG11RCWodUB20nhK0UMCRM0rZwyu5cvpufDmVWLmHfWTzZb0vcegu%2BQKzkthVPLmBZV7DbLuU8%2Bl8SoCruCBoje5zxPrYYcd60zKChS9g4PM6QiLzQU5P8tdlFzLt6Vooyh6njGqfRWqF23s%2F9BjtGl3lIVA70z%2FQTL69wMOsdW4P8P7nIq2VmGY6appHXF%2FvACNxbpOF2igB3ye70c4tYuNsLsK54nYqxtI%2FYcDvZGBnHoVU3ZObESB7q09BSnfZwdPi1s7WwIDnwqhbPSD%2BaRCz6trgBMhz0O47VdmvUJs9C%2B5xB%2BaRZz%2BcHjC5aIhgGkwERJ4izqETIt7sRRQJEwSAArTIDGw1MpPM79KMMDOp8AGOqUBhtV1SQGZlxy8XYc7O2p9o0od9XFmwxdaHpR3q6Kyxf7%2F8r5WsMk1zRhg9ge%2BlUq9IQk3tPj2ACvHEeICASqv2NIQPS6kBkiIktOEc6PankDRHZ1%2BvzjMzLt3lv3hZITuqlsUPtZzKMkYswJj33cKGY87Bmn4AZBiLEXm%2BIBPhkKP1XEOae2HMX34%2FSJxKG3ORZMV%2Bs%2BYAAGnDyHilIpzev3kmuLn&X-Amz-Signature=0f38c7a605fdf829a60597bc4359aa98e0f8b83114e29fe89a5bbef0a9acb730&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQONXMUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG6ecBoDUCESd%2BOq2h%2BlObBamGoY4pLU2J8AB%2F2oeuhCAiEAjGmeb502NaFnEtMAAKiQB09KdIs62m3UR3QnavKNEZcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI7OxAyBH6iLI9sImircA3my3YQPUJRw7YWCfuGdRK8ULCvX%2BJNlL1Xx%2Bq0KpD099dw5TzOM0wOpiF3TTbhRv7WTG8etR%2FaN%2F7nBAzfnBp1bHobWsXYzG7QgcRUJ5vgi%2Fd1vRbJ%2FEXpc1UllAa3XQF2wCtwdeyGPQOwRzHdcbf4B%2B2%2FgLe0Rj9CPHGBfTrEax3jccgS4DqJEg5GQ8qaKVViltwyIGdFWytBwTv4Vr3Fw9iA3d25QjqBjmfmOda4lL0px5vekjAzaYQ8Nw2Bp9TEwXo9o7SzZnHsEyBK5zG11RCWodUB20nhK0UMCRM0rZwyu5cvpufDmVWLmHfWTzZb0vcegu%2BQKzkthVPLmBZV7DbLuU8%2Bl8SoCruCBoje5zxPrYYcd60zKChS9g4PM6QiLzQU5P8tdlFzLt6Vooyh6njGqfRWqF23s%2F9BjtGl3lIVA70z%2FQTL69wMOsdW4P8P7nIq2VmGY6appHXF%2FvACNxbpOF2igB3ye70c4tYuNsLsK54nYqxtI%2FYcDvZGBnHoVU3ZObESB7q09BSnfZwdPi1s7WwIDnwqhbPSD%2BaRCz6trgBMhz0O47VdmvUJs9C%2B5xB%2BaRZz%2BcHjC5aIhgGkwERJ4izqETIt7sRRQJEwSAArTIDGw1MpPM79KMMDOp8AGOqUBhtV1SQGZlxy8XYc7O2p9o0od9XFmwxdaHpR3q6Kyxf7%2F8r5WsMk1zRhg9ge%2BlUq9IQk3tPj2ACvHEeICASqv2NIQPS6kBkiIktOEc6PankDRHZ1%2BvzjMzLt3lv3hZITuqlsUPtZzKMkYswJj33cKGY87Bmn4AZBiLEXm%2BIBPhkKP1XEOae2HMX34%2FSJxKG3ORZMV%2Bs%2BYAAGnDyHilIpzev3kmuLn&X-Amz-Signature=79ffbda80eec6a2ed49ea30168568be6b12bb6358dffcf620548864bf1a16c34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
