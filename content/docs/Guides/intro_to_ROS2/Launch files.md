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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPDKIZX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIATAwegWWzlvw4Vt8DDLkN2KM8mLX8oqjQRl8vWh8o2JAiEAk0SfQWYS1gOcm6JmDdYL56mPyyFKkmgrwrU2a3vC9Z4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIU2g5dXyfIZQuIXbCrcAxJS%2FYAOdZrF2HDDMMcFnWrIwx1S5LLc5AiIBD6u0uYYiT7m001Zr4OH2gz6QJF3P0zK4X24WI%2FA4ElwjplqGpVx5vI8XMWKNywskOaD%2FpyorUvJmn8xthhcMoEAad4QAQO8vj%2F3v%2FHmzTW%2FtsBGTDtL9zXSzBkDl48QigM%2FZE1LL3EyNOdtvkPj2ZH837%2FcQNFBo2e5lM%2FrsfZS9w3D8IAcCD1%2Bd9g%2B6PZmqV2S86Yl7OeV5kk87Em%2B3q3AaSU3DJfB4I4a3jzHQd9SYJaCSd5erlNKlPBsUv1aEdmYA1JGrgeRfkhzrjd0OCRQaGgOhHmOgmE01%2FIHup4ZyNtTCJ47TdsLPmG3a6Xt0YXBVYlS%2FNC0Kg7ceE4WY2CKLf6%2B0zBPHnRtX6sP%2BzdUzK35hL7%2FdT2Vfs6AVv%2FzzlKQCVg%2BjoDQfZP31qsJWQRJ56pp0E8MLqq28Qyv0s3VhH%2Fe6u%2B0cHjgwAL3X%2FttrUMTpnfFogz%2FM5ErqvFB6s186bqhXFg8HvtBqGtyzDkjpOjfMUmx755ve%2BI%2Fl3QtGICfMMSJ05qMMJ85u1zk55EzeOAX34PiM4tE87y7K%2F%2FnN3c7yDfoB0Wt0Ck1M%2FOyptvnZ7ltNKIqQstLiEA8lvyDMK6G2sMGOqUBmhKX7NTm%2BXtKcLSlrACVEAhG%2B14HLBc%2FvaP7IFoNzeZ2JcySryqTIHtgAnqX1D9jDjpJIOzCQQ0pl2fp3x4qoEn8fqRno2NnTUeDdY%2FlquGe4xK%2Fr6o%2BJE9WPfP2yZTAuW0ZmkpuOqkJPftTqq72R0r0ylAdfSbBbq4%2Feuy%2FLoOwxeXfLmoNpo8RHnhiTQ2yDE%2B757yJTlg%2BWjtvpniVSiGTzY6r&X-Amz-Signature=30612912251c68656fbf6e543feba4888c5fb1b87045f19fe2497390e9e3b56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPDKIZX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIATAwegWWzlvw4Vt8DDLkN2KM8mLX8oqjQRl8vWh8o2JAiEAk0SfQWYS1gOcm6JmDdYL56mPyyFKkmgrwrU2a3vC9Z4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIU2g5dXyfIZQuIXbCrcAxJS%2FYAOdZrF2HDDMMcFnWrIwx1S5LLc5AiIBD6u0uYYiT7m001Zr4OH2gz6QJF3P0zK4X24WI%2FA4ElwjplqGpVx5vI8XMWKNywskOaD%2FpyorUvJmn8xthhcMoEAad4QAQO8vj%2F3v%2FHmzTW%2FtsBGTDtL9zXSzBkDl48QigM%2FZE1LL3EyNOdtvkPj2ZH837%2FcQNFBo2e5lM%2FrsfZS9w3D8IAcCD1%2Bd9g%2B6PZmqV2S86Yl7OeV5kk87Em%2B3q3AaSU3DJfB4I4a3jzHQd9SYJaCSd5erlNKlPBsUv1aEdmYA1JGrgeRfkhzrjd0OCRQaGgOhHmOgmE01%2FIHup4ZyNtTCJ47TdsLPmG3a6Xt0YXBVYlS%2FNC0Kg7ceE4WY2CKLf6%2B0zBPHnRtX6sP%2BzdUzK35hL7%2FdT2Vfs6AVv%2FzzlKQCVg%2BjoDQfZP31qsJWQRJ56pp0E8MLqq28Qyv0s3VhH%2Fe6u%2B0cHjgwAL3X%2FttrUMTpnfFogz%2FM5ErqvFB6s186bqhXFg8HvtBqGtyzDkjpOjfMUmx755ve%2BI%2Fl3QtGICfMMSJ05qMMJ85u1zk55EzeOAX34PiM4tE87y7K%2F%2FnN3c7yDfoB0Wt0Ck1M%2FOyptvnZ7ltNKIqQstLiEA8lvyDMK6G2sMGOqUBmhKX7NTm%2BXtKcLSlrACVEAhG%2B14HLBc%2FvaP7IFoNzeZ2JcySryqTIHtgAnqX1D9jDjpJIOzCQQ0pl2fp3x4qoEn8fqRno2NnTUeDdY%2FlquGe4xK%2Fr6o%2BJE9WPfP2yZTAuW0ZmkpuOqkJPftTqq72R0r0ylAdfSbBbq4%2Feuy%2FLoOwxeXfLmoNpo8RHnhiTQ2yDE%2B757yJTlg%2BWjtvpniVSiGTzY6r&X-Amz-Signature=e51f006220582f0170284e20a0d824e3274610f70ed6dd6f5c0ae2ff1f332060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPDKIZX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIATAwegWWzlvw4Vt8DDLkN2KM8mLX8oqjQRl8vWh8o2JAiEAk0SfQWYS1gOcm6JmDdYL56mPyyFKkmgrwrU2a3vC9Z4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIU2g5dXyfIZQuIXbCrcAxJS%2FYAOdZrF2HDDMMcFnWrIwx1S5LLc5AiIBD6u0uYYiT7m001Zr4OH2gz6QJF3P0zK4X24WI%2FA4ElwjplqGpVx5vI8XMWKNywskOaD%2FpyorUvJmn8xthhcMoEAad4QAQO8vj%2F3v%2FHmzTW%2FtsBGTDtL9zXSzBkDl48QigM%2FZE1LL3EyNOdtvkPj2ZH837%2FcQNFBo2e5lM%2FrsfZS9w3D8IAcCD1%2Bd9g%2B6PZmqV2S86Yl7OeV5kk87Em%2B3q3AaSU3DJfB4I4a3jzHQd9SYJaCSd5erlNKlPBsUv1aEdmYA1JGrgeRfkhzrjd0OCRQaGgOhHmOgmE01%2FIHup4ZyNtTCJ47TdsLPmG3a6Xt0YXBVYlS%2FNC0Kg7ceE4WY2CKLf6%2B0zBPHnRtX6sP%2BzdUzK35hL7%2FdT2Vfs6AVv%2FzzlKQCVg%2BjoDQfZP31qsJWQRJ56pp0E8MLqq28Qyv0s3VhH%2Fe6u%2B0cHjgwAL3X%2FttrUMTpnfFogz%2FM5ErqvFB6s186bqhXFg8HvtBqGtyzDkjpOjfMUmx755ve%2BI%2Fl3QtGICfMMSJ05qMMJ85u1zk55EzeOAX34PiM4tE87y7K%2F%2FnN3c7yDfoB0Wt0Ck1M%2FOyptvnZ7ltNKIqQstLiEA8lvyDMK6G2sMGOqUBmhKX7NTm%2BXtKcLSlrACVEAhG%2B14HLBc%2FvaP7IFoNzeZ2JcySryqTIHtgAnqX1D9jDjpJIOzCQQ0pl2fp3x4qoEn8fqRno2NnTUeDdY%2FlquGe4xK%2Fr6o%2BJE9WPfP2yZTAuW0ZmkpuOqkJPftTqq72R0r0ylAdfSbBbq4%2Feuy%2FLoOwxeXfLmoNpo8RHnhiTQ2yDE%2B757yJTlg%2BWjtvpniVSiGTzY6r&X-Amz-Signature=1fb2742f6c5277b75b836ba3a6c1220675192e34a2fe895a3f7e9cf3be4facb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
