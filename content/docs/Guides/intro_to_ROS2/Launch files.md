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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVJYMLQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDq52Wj70bDhxSvI2tTdA%2FBF2wSWlbshBuWcb4plW6W1AIhAIASoHwrhlmoAQc09TcrvfB3WrN%2Bq0aAo73AhB7IvJQ%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAC6zSY452Bf4bUu0q3APF5dUa9tG9pp0V9vmJuUjsWI9RQZOxZPXueRGsdG71DovUjJ8%2Fp6E8EUxRzTkT%2FGec0R1soV%2FM3TpprEQ3aVW5kP6L3HwAdwcnVe32Q1jJHDc6n018AXhdnXKzvmoST%2FwVFxA3o3JsNtC8%2Fy%2FtiLr3i8ZgQITPOmHKZeqiheJAy8yA325c6Tt8QS0iHlgqj50YtysnFNMsNCH5TDR1y7JmaDl9xlQrwqf%2FVDj4Rqb0eDVOfcF0z7GhWp8rnwnRo0KERwRsUyd5Suek9xTYGpcc2NGi%2FAJcEb0jMT76rUfCSop3NeypsRFXKmF2VKw4CJE5C%2B%2F5hWAo867F5PVyZAyicOI7fVL%2FDY6UEJ5ceJZRxSFOy58Rs9HqPicY2dpqgT00PR8%2BA37eoh%2FyMitbvlQEVmNrkNdLlGtHW3QPyd6EvJpicHY%2FuiJIIbunNlsQZYSs7cr%2Bgoj2CQv8ieRSm7cnb0hX6pu2rZwTSIqyufFIWjKm9cxjhlqnlDodxCVW52nV6ow5q4LH%2BiE5aQJITZheAFe0khBxKLqwPV0jSym97DgNaDOV9ya3cbsgS22uSMJPv0KjFiV244QldZjUiNv3sc03A2BfPyGkEednzbNo6Abj1%2F8sp2%2BLeFrGCDCIit%2B%2FBjqkAQx9AxEQB%2FIRyWq1JHUFhH2qJTjjBC4uKr22MxGI%2Fj13CxOqnJRjg723tp8JuDDW8VX%2Bbg0KQqC%2BzQUOSWQzhXZcW%2FzPCh9EcEiclVd6iNyE1Fi%2F88QL7KetnyMk1xVqvS6KHRob0%2BvM7jYVYJUN39yKC9X01BuT6%2FhfaGytfC3SS%2F4QgtFq0p2%2FUIos8840YKhXUirdINskbuDv6gJGyhoSXQlA&X-Amz-Signature=3c7858b3ffbd03f39821b208bd480888377163609a2ac419f1a0892e9e07e41a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVJYMLQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDq52Wj70bDhxSvI2tTdA%2FBF2wSWlbshBuWcb4plW6W1AIhAIASoHwrhlmoAQc09TcrvfB3WrN%2Bq0aAo73AhB7IvJQ%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAC6zSY452Bf4bUu0q3APF5dUa9tG9pp0V9vmJuUjsWI9RQZOxZPXueRGsdG71DovUjJ8%2Fp6E8EUxRzTkT%2FGec0R1soV%2FM3TpprEQ3aVW5kP6L3HwAdwcnVe32Q1jJHDc6n018AXhdnXKzvmoST%2FwVFxA3o3JsNtC8%2Fy%2FtiLr3i8ZgQITPOmHKZeqiheJAy8yA325c6Tt8QS0iHlgqj50YtysnFNMsNCH5TDR1y7JmaDl9xlQrwqf%2FVDj4Rqb0eDVOfcF0z7GhWp8rnwnRo0KERwRsUyd5Suek9xTYGpcc2NGi%2FAJcEb0jMT76rUfCSop3NeypsRFXKmF2VKw4CJE5C%2B%2F5hWAo867F5PVyZAyicOI7fVL%2FDY6UEJ5ceJZRxSFOy58Rs9HqPicY2dpqgT00PR8%2BA37eoh%2FyMitbvlQEVmNrkNdLlGtHW3QPyd6EvJpicHY%2FuiJIIbunNlsQZYSs7cr%2Bgoj2CQv8ieRSm7cnb0hX6pu2rZwTSIqyufFIWjKm9cxjhlqnlDodxCVW52nV6ow5q4LH%2BiE5aQJITZheAFe0khBxKLqwPV0jSym97DgNaDOV9ya3cbsgS22uSMJPv0KjFiV244QldZjUiNv3sc03A2BfPyGkEednzbNo6Abj1%2F8sp2%2BLeFrGCDCIit%2B%2FBjqkAQx9AxEQB%2FIRyWq1JHUFhH2qJTjjBC4uKr22MxGI%2Fj13CxOqnJRjg723tp8JuDDW8VX%2Bbg0KQqC%2BzQUOSWQzhXZcW%2FzPCh9EcEiclVd6iNyE1Fi%2F88QL7KetnyMk1xVqvS6KHRob0%2BvM7jYVYJUN39yKC9X01BuT6%2FhfaGytfC3SS%2F4QgtFq0p2%2FUIos8840YKhXUirdINskbuDv6gJGyhoSXQlA&X-Amz-Signature=51b3a1758d02c5a5a601574c0abdea8e0b7e938b2af4221cb7303346df1e5ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVJYMLQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDq52Wj70bDhxSvI2tTdA%2FBF2wSWlbshBuWcb4plW6W1AIhAIASoHwrhlmoAQc09TcrvfB3WrN%2Bq0aAo73AhB7IvJQ%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAC6zSY452Bf4bUu0q3APF5dUa9tG9pp0V9vmJuUjsWI9RQZOxZPXueRGsdG71DovUjJ8%2Fp6E8EUxRzTkT%2FGec0R1soV%2FM3TpprEQ3aVW5kP6L3HwAdwcnVe32Q1jJHDc6n018AXhdnXKzvmoST%2FwVFxA3o3JsNtC8%2Fy%2FtiLr3i8ZgQITPOmHKZeqiheJAy8yA325c6Tt8QS0iHlgqj50YtysnFNMsNCH5TDR1y7JmaDl9xlQrwqf%2FVDj4Rqb0eDVOfcF0z7GhWp8rnwnRo0KERwRsUyd5Suek9xTYGpcc2NGi%2FAJcEb0jMT76rUfCSop3NeypsRFXKmF2VKw4CJE5C%2B%2F5hWAo867F5PVyZAyicOI7fVL%2FDY6UEJ5ceJZRxSFOy58Rs9HqPicY2dpqgT00PR8%2BA37eoh%2FyMitbvlQEVmNrkNdLlGtHW3QPyd6EvJpicHY%2FuiJIIbunNlsQZYSs7cr%2Bgoj2CQv8ieRSm7cnb0hX6pu2rZwTSIqyufFIWjKm9cxjhlqnlDodxCVW52nV6ow5q4LH%2BiE5aQJITZheAFe0khBxKLqwPV0jSym97DgNaDOV9ya3cbsgS22uSMJPv0KjFiV244QldZjUiNv3sc03A2BfPyGkEednzbNo6Abj1%2F8sp2%2BLeFrGCDCIit%2B%2FBjqkAQx9AxEQB%2FIRyWq1JHUFhH2qJTjjBC4uKr22MxGI%2Fj13CxOqnJRjg723tp8JuDDW8VX%2Bbg0KQqC%2BzQUOSWQzhXZcW%2FzPCh9EcEiclVd6iNyE1Fi%2F88QL7KetnyMk1xVqvS6KHRob0%2BvM7jYVYJUN39yKC9X01BuT6%2FhfaGytfC3SS%2F4QgtFq0p2%2FUIos8840YKhXUirdINskbuDv6gJGyhoSXQlA&X-Amz-Signature=996dc8bb4718c478b09f41750e43324ad4db3ac7cb15b846d109cb3df339ae56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
