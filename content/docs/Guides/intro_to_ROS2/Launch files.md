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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4XZUT4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHU5l8LzIAypHcPquRNuP%2FtTw3Du1oefy2RaXCnEw%2FutAiEAw2t8kyeSacMJjcz6BXiX%2B9p1SCHi2HO9S4Gz3SkfyGwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHzu9H8IE06eGthJ2SrcA9bsUMbxWRhfgDKMZpO%2FeiLKMrTi5j9y%2F%2B6uqUVhz4uj3bJaeMp4H%2FvAAprHbdRc92n3NdPp9Dwru1744RchfqqOB6olSxKSvcdTO%2FFQzYiU%2FQWCK9Qw3KPLmh4jElk9h3YnKkUyGZQQ4UB0S6yubXFNRCNavgWwmiB2z5rVBYYKiANlgfcYFQTfmrZeO%2FT1YcDgRFSTAT4TvUDPWTb5E5f%2B3vNlW5Wmdkhtzg1wXmuxJaaBEvPzx%2B3V5o0VSeRNg5EeBtVOS9WiznP2%2FFaR3EJ6z%2FynXymIEhJxoo8s3RJWoqXfO3LdkA7Y45cUK31P%2FqfOyEFvpxNYK1Byb9Yt%2B8Y140WwccKlxCl9d%2F%2F1R%2F%2B%2BIIuwEu7l1FFOcQ%2BhEg%2Bj1SeELyeO9XtKuuVx5Hu9F54fLZ9YjZj771%2FtZ6GzkjGR8jsIMytVO%2BuSHDEPXFSunL6OflgZt7PW6kDNdqtVbyjnohJdebsw3QCsloSSv%2FiweDMMOV%2FFPEmqW3%2FABAKkDJi99%2Ba63lnsMdh7SHsGag85glxixkrgx8NAwcIonRQ3HwYm66I0ld1Xu%2FABO%2FXsbP2ZWdSJboaa4wp03%2Fx%2F2WxjCp6rdC9kASadoVxGn8u2Q1nhBmMArhL5nU25MJTLyr0GOqUBdV7P3g4hlwlOCMU65TtI7kgR697BzoKg1X3Lx8csemwiguvDFWr8KDTOmCQimVGU1H7oprC5dPr%2F7QNxYj2ZYUVm3RYDKZIEhhkcYfn6R1loTLlU0uvXW%2ByM4NuroVuzmVnZy8cnCATxBjDviL4LDXlCDHo3Yp7d0sWJF4dbzFffCh4cvMTuzHDVbYOPMwmIAA%2F03rAKFg5FUGza6v7og4aaEN57&X-Amz-Signature=352399ec190c2657d495a5d6f4acc6069c8a3eeffebe43bdb1448a4d4c4d4003&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4XZUT4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHU5l8LzIAypHcPquRNuP%2FtTw3Du1oefy2RaXCnEw%2FutAiEAw2t8kyeSacMJjcz6BXiX%2B9p1SCHi2HO9S4Gz3SkfyGwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHzu9H8IE06eGthJ2SrcA9bsUMbxWRhfgDKMZpO%2FeiLKMrTi5j9y%2F%2B6uqUVhz4uj3bJaeMp4H%2FvAAprHbdRc92n3NdPp9Dwru1744RchfqqOB6olSxKSvcdTO%2FFQzYiU%2FQWCK9Qw3KPLmh4jElk9h3YnKkUyGZQQ4UB0S6yubXFNRCNavgWwmiB2z5rVBYYKiANlgfcYFQTfmrZeO%2FT1YcDgRFSTAT4TvUDPWTb5E5f%2B3vNlW5Wmdkhtzg1wXmuxJaaBEvPzx%2B3V5o0VSeRNg5EeBtVOS9WiznP2%2FFaR3EJ6z%2FynXymIEhJxoo8s3RJWoqXfO3LdkA7Y45cUK31P%2FqfOyEFvpxNYK1Byb9Yt%2B8Y140WwccKlxCl9d%2F%2F1R%2F%2B%2BIIuwEu7l1FFOcQ%2BhEg%2Bj1SeELyeO9XtKuuVx5Hu9F54fLZ9YjZj771%2FtZ6GzkjGR8jsIMytVO%2BuSHDEPXFSunL6OflgZt7PW6kDNdqtVbyjnohJdebsw3QCsloSSv%2FiweDMMOV%2FFPEmqW3%2FABAKkDJi99%2Ba63lnsMdh7SHsGag85glxixkrgx8NAwcIonRQ3HwYm66I0ld1Xu%2FABO%2FXsbP2ZWdSJboaa4wp03%2Fx%2F2WxjCp6rdC9kASadoVxGn8u2Q1nhBmMArhL5nU25MJTLyr0GOqUBdV7P3g4hlwlOCMU65TtI7kgR697BzoKg1X3Lx8csemwiguvDFWr8KDTOmCQimVGU1H7oprC5dPr%2F7QNxYj2ZYUVm3RYDKZIEhhkcYfn6R1loTLlU0uvXW%2ByM4NuroVuzmVnZy8cnCATxBjDviL4LDXlCDHo3Yp7d0sWJF4dbzFffCh4cvMTuzHDVbYOPMwmIAA%2F03rAKFg5FUGza6v7og4aaEN57&X-Amz-Signature=fd41ffb82e279b61c5c05a1281df5a0bd23b1489b0641decee80ebc034909391&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4XZUT4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHU5l8LzIAypHcPquRNuP%2FtTw3Du1oefy2RaXCnEw%2FutAiEAw2t8kyeSacMJjcz6BXiX%2B9p1SCHi2HO9S4Gz3SkfyGwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHzu9H8IE06eGthJ2SrcA9bsUMbxWRhfgDKMZpO%2FeiLKMrTi5j9y%2F%2B6uqUVhz4uj3bJaeMp4H%2FvAAprHbdRc92n3NdPp9Dwru1744RchfqqOB6olSxKSvcdTO%2FFQzYiU%2FQWCK9Qw3KPLmh4jElk9h3YnKkUyGZQQ4UB0S6yubXFNRCNavgWwmiB2z5rVBYYKiANlgfcYFQTfmrZeO%2FT1YcDgRFSTAT4TvUDPWTb5E5f%2B3vNlW5Wmdkhtzg1wXmuxJaaBEvPzx%2B3V5o0VSeRNg5EeBtVOS9WiznP2%2FFaR3EJ6z%2FynXymIEhJxoo8s3RJWoqXfO3LdkA7Y45cUK31P%2FqfOyEFvpxNYK1Byb9Yt%2B8Y140WwccKlxCl9d%2F%2F1R%2F%2B%2BIIuwEu7l1FFOcQ%2BhEg%2Bj1SeELyeO9XtKuuVx5Hu9F54fLZ9YjZj771%2FtZ6GzkjGR8jsIMytVO%2BuSHDEPXFSunL6OflgZt7PW6kDNdqtVbyjnohJdebsw3QCsloSSv%2FiweDMMOV%2FFPEmqW3%2FABAKkDJi99%2Ba63lnsMdh7SHsGag85glxixkrgx8NAwcIonRQ3HwYm66I0ld1Xu%2FABO%2FXsbP2ZWdSJboaa4wp03%2Fx%2F2WxjCp6rdC9kASadoVxGn8u2Q1nhBmMArhL5nU25MJTLyr0GOqUBdV7P3g4hlwlOCMU65TtI7kgR697BzoKg1X3Lx8csemwiguvDFWr8KDTOmCQimVGU1H7oprC5dPr%2F7QNxYj2ZYUVm3RYDKZIEhhkcYfn6R1loTLlU0uvXW%2ByM4NuroVuzmVnZy8cnCATxBjDviL4LDXlCDHo3Yp7d0sWJF4dbzFffCh4cvMTuzHDVbYOPMwmIAA%2F03rAKFg5FUGza6v7og4aaEN57&X-Amz-Signature=d790692df398143bb689061fc27a4911eb0cd2cf4c24b2ba78550f6f0573a4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
