---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMR6RTS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDuYPFK%2Bx%2B16wz7PLWJn5L0aV4tVSxSrdR6%2BQCb0SKwTQIgX0EtM102nNgTvBhHqdJNSW5fPx5UbwPgxgP32R%2FjpW0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHuVJIYaGS3%2FSRlUkircAw4rdDvN8e3vv94W45Cy8ECtvDg7WqnGZ8TjGSpUJqWcfawm2ogn5zCekNrNyHIKH9zJYUngp0qQTI%2Btklz1tKlLqaxkRoKiLT9lsL%2FvME196XILlMqVlkKFF09U%2FVYnE1Gi3cHf%2FhAxU1gwzA5YNVGLO4be1uSZsqIhE2tGyzfX7UQ%2F98m806ohi5WV6hJm%2FDd6A24OP%2B1sZq2en%2FG%2Bj5ea5VYd5ZZ369Neaynnq71n%2FUYC0QL9l%2BDArV3iSzY9ceK1%2FX6IKaHSech0KMgzQ7a9PZXNP7i6MBkF6llxONqAXF%2FRrmsnoYFZ5%2BQUXrPg9ZMYXNEYKfu91pms%2Bt1oO%2FYW370e4Oa1HL6L8HbVDUSSb4yqCVuQOlrfzT1qfDgE2bIZBT5DnJWQPVPnxY8wmDq299jtQ%2F0YxT1nAMvlPVLuY4dhb95Y5o8rDev1626nCvulczQWKT3DgEd3zeWeiYcSSYrjjGVCj2yXoJ2nYjWlWeaoq1EbIkdDecWeZbDTxdJKx5aBmUdMzsEHskaRaPehgnC2fFhdxrpULXbelw8aJza6Y7HFgP3l1yasUgj%2FEVj9ObdrqRuqQqA8BpsioWXlzbi%2Bkcl%2BvqenaELx6OWX7bLRnjGAimOzECRJMNzBk8QGOqUB0kwk5IcaiXCWghn4Wbx9YqIYkfh9C79FkfzBhNTUcRRvHBQI3rFoyc5%2BJwX2TJQoJsb6a1RfpbcrsGSHJ68VMlhBQTZpgtjwEdBs8IVFjdDltkX%2B3BAMzi3h%2Bj%2FFyzAcubc1WD21BYtEx34CpDLeOiTrhDBTPWM73XRVhGk9f2kw5NvVchKIO4p%2BYHi%2B%2BHVWeKPXQpXK5JNuA4U5sNvlxHTjYhGj&X-Amz-Signature=899154c56172f5117ac6b75356750b3edbb181d2c5014df7dba8218b6708f8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMR6RTS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDuYPFK%2Bx%2B16wz7PLWJn5L0aV4tVSxSrdR6%2BQCb0SKwTQIgX0EtM102nNgTvBhHqdJNSW5fPx5UbwPgxgP32R%2FjpW0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHuVJIYaGS3%2FSRlUkircAw4rdDvN8e3vv94W45Cy8ECtvDg7WqnGZ8TjGSpUJqWcfawm2ogn5zCekNrNyHIKH9zJYUngp0qQTI%2Btklz1tKlLqaxkRoKiLT9lsL%2FvME196XILlMqVlkKFF09U%2FVYnE1Gi3cHf%2FhAxU1gwzA5YNVGLO4be1uSZsqIhE2tGyzfX7UQ%2F98m806ohi5WV6hJm%2FDd6A24OP%2B1sZq2en%2FG%2Bj5ea5VYd5ZZ369Neaynnq71n%2FUYC0QL9l%2BDArV3iSzY9ceK1%2FX6IKaHSech0KMgzQ7a9PZXNP7i6MBkF6llxONqAXF%2FRrmsnoYFZ5%2BQUXrPg9ZMYXNEYKfu91pms%2Bt1oO%2FYW370e4Oa1HL6L8HbVDUSSb4yqCVuQOlrfzT1qfDgE2bIZBT5DnJWQPVPnxY8wmDq299jtQ%2F0YxT1nAMvlPVLuY4dhb95Y5o8rDev1626nCvulczQWKT3DgEd3zeWeiYcSSYrjjGVCj2yXoJ2nYjWlWeaoq1EbIkdDecWeZbDTxdJKx5aBmUdMzsEHskaRaPehgnC2fFhdxrpULXbelw8aJza6Y7HFgP3l1yasUgj%2FEVj9ObdrqRuqQqA8BpsioWXlzbi%2Bkcl%2BvqenaELx6OWX7bLRnjGAimOzECRJMNzBk8QGOqUB0kwk5IcaiXCWghn4Wbx9YqIYkfh9C79FkfzBhNTUcRRvHBQI3rFoyc5%2BJwX2TJQoJsb6a1RfpbcrsGSHJ68VMlhBQTZpgtjwEdBs8IVFjdDltkX%2B3BAMzi3h%2Bj%2FFyzAcubc1WD21BYtEx34CpDLeOiTrhDBTPWM73XRVhGk9f2kw5NvVchKIO4p%2BYHi%2B%2BHVWeKPXQpXK5JNuA4U5sNvlxHTjYhGj&X-Amz-Signature=88bc3744d9cb001611c5333bbd88d351bf638d2128c4484db5d893cd6653dbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMR6RTS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDuYPFK%2Bx%2B16wz7PLWJn5L0aV4tVSxSrdR6%2BQCb0SKwTQIgX0EtM102nNgTvBhHqdJNSW5fPx5UbwPgxgP32R%2FjpW0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHuVJIYaGS3%2FSRlUkircAw4rdDvN8e3vv94W45Cy8ECtvDg7WqnGZ8TjGSpUJqWcfawm2ogn5zCekNrNyHIKH9zJYUngp0qQTI%2Btklz1tKlLqaxkRoKiLT9lsL%2FvME196XILlMqVlkKFF09U%2FVYnE1Gi3cHf%2FhAxU1gwzA5YNVGLO4be1uSZsqIhE2tGyzfX7UQ%2F98m806ohi5WV6hJm%2FDd6A24OP%2B1sZq2en%2FG%2Bj5ea5VYd5ZZ369Neaynnq71n%2FUYC0QL9l%2BDArV3iSzY9ceK1%2FX6IKaHSech0KMgzQ7a9PZXNP7i6MBkF6llxONqAXF%2FRrmsnoYFZ5%2BQUXrPg9ZMYXNEYKfu91pms%2Bt1oO%2FYW370e4Oa1HL6L8HbVDUSSb4yqCVuQOlrfzT1qfDgE2bIZBT5DnJWQPVPnxY8wmDq299jtQ%2F0YxT1nAMvlPVLuY4dhb95Y5o8rDev1626nCvulczQWKT3DgEd3zeWeiYcSSYrjjGVCj2yXoJ2nYjWlWeaoq1EbIkdDecWeZbDTxdJKx5aBmUdMzsEHskaRaPehgnC2fFhdxrpULXbelw8aJza6Y7HFgP3l1yasUgj%2FEVj9ObdrqRuqQqA8BpsioWXlzbi%2Bkcl%2BvqenaELx6OWX7bLRnjGAimOzECRJMNzBk8QGOqUB0kwk5IcaiXCWghn4Wbx9YqIYkfh9C79FkfzBhNTUcRRvHBQI3rFoyc5%2BJwX2TJQoJsb6a1RfpbcrsGSHJ68VMlhBQTZpgtjwEdBs8IVFjdDltkX%2B3BAMzi3h%2Bj%2FFyzAcubc1WD21BYtEx34CpDLeOiTrhDBTPWM73XRVhGk9f2kw5NvVchKIO4p%2BYHi%2B%2BHVWeKPXQpXK5JNuA4U5sNvlxHTjYhGj&X-Amz-Signature=3c719ed9a8450836c781ffda242a7ac8acf8690afb0608288b9cf9e592a6914a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
