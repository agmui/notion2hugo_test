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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTZDIH4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiUujS88br6tkgQ%2FFcQD9xJ6sR4upvXcnK%2FIqOq1G4sAiEAucVVoodIxpjHkM4QU%2F6sZ48kOT3IEg6HZWWhz%2F8875kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ3hoWq0cjGnd5riHircA0xTdVtpjtCCTK0NUz35QC4Wtgv5jMaOwBBh%2BJVq7Htir6m%2FTYK36GNMKjdzf%2F%2FY93Cgp%2BPhZ0eAJ5JHQbR1Xe4trFDumK%2FI80byyMtDHnUFsjJ1M2XvTrfM0X7wuQBFltHuQ1TDGe%2FH%2FWeHUbLq0hSUzRGmImV9ZmJ07xUy5UifSIktP3Dh5WonDrn09nHPfr6N%2B0ZgmmkfIdQODlScmYFnOpP7teU09OHDM%2BWXz4qttzK4v3kKkfTOGkU0Mubm%2FKnYE5a%2F4m6x7tG59%2Bl1fU1Z3Pp1w2AdInfUBsQUPDv9gbzUm1cTxBRskpKEBa9msSVKUFbGLps3AQhSNzrpeKsrvbPRyR63Ary%2FLyql0O5m8CyHDs%2BLgwG8vN928B17Jm7Rj4H6ECB%2F2GrGWhR9r3VwOYM1uaz3ElJFOCkTRm8qDTvgVkMhz3vaTfeA%2FzU1ohReBkWSh%2F31B1Z3qn%2BU%2FF6d8Tegie9VunzdPPZQRfuvRDExJC2%2Fh%2Fl3Rv0ic6OQYVrAGMG71kHlZY%2BPYQp4xmhyUNf9rzEG%2FMz%2B6r0k6wBwIepRtcaJDJKKeN4AnL3vfQO%2Bcj5SAZbyMk9OgsDxio3H2H4i4tjVgIm8a03XUuuBPw9G%2BqXodee%2Beb8AMJGL%2Fb8GOqUBabQsUEXg68av3yfWABvYTojkW1LgBA1jG8YgIgaYuFnI6QdkdPKPH2sw1tGOf4ZUBHR5cAWYtFl80rE5%2Bu06Sq32U%2FfLt9MnQuXWZxHJxEptKqMv59bpnrjBSE%2FRJG0t5lyvTOSmDj5abDFxvq9d1vH5ThX%2BI%2FVXjETcN7CWlyI0WjR0jy%2Fq2V7HkzrfaKzoiR20Sfl3TOTTiAdld%2BTs3yqTi%2BzZ&X-Amz-Signature=b99106b82d92c3be3286d2873c172f53f9222e159f1acba7a4438f971fb9acb1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTZDIH4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiUujS88br6tkgQ%2FFcQD9xJ6sR4upvXcnK%2FIqOq1G4sAiEAucVVoodIxpjHkM4QU%2F6sZ48kOT3IEg6HZWWhz%2F8875kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ3hoWq0cjGnd5riHircA0xTdVtpjtCCTK0NUz35QC4Wtgv5jMaOwBBh%2BJVq7Htir6m%2FTYK36GNMKjdzf%2F%2FY93Cgp%2BPhZ0eAJ5JHQbR1Xe4trFDumK%2FI80byyMtDHnUFsjJ1M2XvTrfM0X7wuQBFltHuQ1TDGe%2FH%2FWeHUbLq0hSUzRGmImV9ZmJ07xUy5UifSIktP3Dh5WonDrn09nHPfr6N%2B0ZgmmkfIdQODlScmYFnOpP7teU09OHDM%2BWXz4qttzK4v3kKkfTOGkU0Mubm%2FKnYE5a%2F4m6x7tG59%2Bl1fU1Z3Pp1w2AdInfUBsQUPDv9gbzUm1cTxBRskpKEBa9msSVKUFbGLps3AQhSNzrpeKsrvbPRyR63Ary%2FLyql0O5m8CyHDs%2BLgwG8vN928B17Jm7Rj4H6ECB%2F2GrGWhR9r3VwOYM1uaz3ElJFOCkTRm8qDTvgVkMhz3vaTfeA%2FzU1ohReBkWSh%2F31B1Z3qn%2BU%2FF6d8Tegie9VunzdPPZQRfuvRDExJC2%2Fh%2Fl3Rv0ic6OQYVrAGMG71kHlZY%2BPYQp4xmhyUNf9rzEG%2FMz%2B6r0k6wBwIepRtcaJDJKKeN4AnL3vfQO%2Bcj5SAZbyMk9OgsDxio3H2H4i4tjVgIm8a03XUuuBPw9G%2BqXodee%2Beb8AMJGL%2Fb8GOqUBabQsUEXg68av3yfWABvYTojkW1LgBA1jG8YgIgaYuFnI6QdkdPKPH2sw1tGOf4ZUBHR5cAWYtFl80rE5%2Bu06Sq32U%2FfLt9MnQuXWZxHJxEptKqMv59bpnrjBSE%2FRJG0t5lyvTOSmDj5abDFxvq9d1vH5ThX%2BI%2FVXjETcN7CWlyI0WjR0jy%2Fq2V7HkzrfaKzoiR20Sfl3TOTTiAdld%2BTs3yqTi%2BzZ&X-Amz-Signature=9130121ca8c0442a7b61fc8409d19f764a55996519ef1f92065dc5a4b4417d33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USTZDIH4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiUujS88br6tkgQ%2FFcQD9xJ6sR4upvXcnK%2FIqOq1G4sAiEAucVVoodIxpjHkM4QU%2F6sZ48kOT3IEg6HZWWhz%2F8875kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ3hoWq0cjGnd5riHircA0xTdVtpjtCCTK0NUz35QC4Wtgv5jMaOwBBh%2BJVq7Htir6m%2FTYK36GNMKjdzf%2F%2FY93Cgp%2BPhZ0eAJ5JHQbR1Xe4trFDumK%2FI80byyMtDHnUFsjJ1M2XvTrfM0X7wuQBFltHuQ1TDGe%2FH%2FWeHUbLq0hSUzRGmImV9ZmJ07xUy5UifSIktP3Dh5WonDrn09nHPfr6N%2B0ZgmmkfIdQODlScmYFnOpP7teU09OHDM%2BWXz4qttzK4v3kKkfTOGkU0Mubm%2FKnYE5a%2F4m6x7tG59%2Bl1fU1Z3Pp1w2AdInfUBsQUPDv9gbzUm1cTxBRskpKEBa9msSVKUFbGLps3AQhSNzrpeKsrvbPRyR63Ary%2FLyql0O5m8CyHDs%2BLgwG8vN928B17Jm7Rj4H6ECB%2F2GrGWhR9r3VwOYM1uaz3ElJFOCkTRm8qDTvgVkMhz3vaTfeA%2FzU1ohReBkWSh%2F31B1Z3qn%2BU%2FF6d8Tegie9VunzdPPZQRfuvRDExJC2%2Fh%2Fl3Rv0ic6OQYVrAGMG71kHlZY%2BPYQp4xmhyUNf9rzEG%2FMz%2B6r0k6wBwIepRtcaJDJKKeN4AnL3vfQO%2Bcj5SAZbyMk9OgsDxio3H2H4i4tjVgIm8a03XUuuBPw9G%2BqXodee%2Beb8AMJGL%2Fb8GOqUBabQsUEXg68av3yfWABvYTojkW1LgBA1jG8YgIgaYuFnI6QdkdPKPH2sw1tGOf4ZUBHR5cAWYtFl80rE5%2Bu06Sq32U%2FfLt9MnQuXWZxHJxEptKqMv59bpnrjBSE%2FRJG0t5lyvTOSmDj5abDFxvq9d1vH5ThX%2BI%2FVXjETcN7CWlyI0WjR0jy%2Fq2V7HkzrfaKzoiR20Sfl3TOTTiAdld%2BTs3yqTi%2BzZ&X-Amz-Signature=1d141ec49e0e426d31e4ede8226219a2f4108c5f0848e13c492c2a591f62d218&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
