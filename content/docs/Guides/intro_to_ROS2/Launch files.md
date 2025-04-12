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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXMAESE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICcAfI7iDgyDJk5LcGBsFX%2BN6y5iErfpMatccAtkBWtFAiEA9EyNWBkPPYLguiH31WqHlQ1w%2BM6mj5QkhMREiETofvIqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9Q2wtdYp91HoyYBCrcA7lpd%2BfDam%2Be7q%2BAHIpngRrDrCSmX4GhJTQJEzYlSPXSCljOafb6qzS9B7PT17weCT6OpDGkzeLJZ6G1fgR8xvRE6QdNsPsSrGLpyLTpQ0Oq2BIgImPd25uaa8ixL7qPYD3LQ9QTho9mMqaHTfei9G7eU%2FsxFDembOWK6vOS4OIq3A9WLado8p36%2F%2BOr8s06FlDraI%2BxFqg4vm7ircNQvtB38hDbANWDqQRuI7DlM202Y2XW5Cf4jnen%2FnkCZFOkYHhN1OdpZD8fUVIK4xWXuCkFwYlC%2BizJ4A9Pr5zZ21qget0D3D5z%2BLjYo3HthvlPwfoQLm4o%2BcSgZvdlsi6qdVe%2F9mwtYScMkm2rJJ434T0inu%2FwFE4hXWRtGpMGL8pr12bv3o0De0KpCZ71tu4FX7Piwzcqth4%2B5VUMTwYNFkVHYYdago4VjzDk9s%2Bvsnw4AaEnNV9Lh3CsW0g6MuCrGv1qDwqNkbNV48pxnCZ5r0pFKRC67%2F1RZOLMddxCrkdw4%2B3j9zp2bN%2B%2BkL5oPdkeAuJ44LWeGzKe9vBPkZB%2BNYibJwSfsk19SlFyNhGG7wLvVnolXkb7eacuFocIN%2FVfHA7NbBiNqs%2FBOm0%2FCWvsl0969NRHzjyGUgzTtBC3MIL66r8GOqUBIQkwxW4bbkfOvIxPLvxCBxgUsPf5UyPOkI4e8i2XtPVkiCxdo1RQmHHNUJMGknxiLl2ySIoB%2FITDE2gmrR3aqUyIJr12Gc7q0lGHRxMl5rBq4oXb3sqL7bAOEnF5ZCgCwznIqa5Yb86hoslLN7bdpsM8xW%2FzvsDOhVOJGrp97eabzrDpS8Rw%2F3KefUsPz%2FlS0Mam0%2FteRXpiYTQo7awWjIWU1jnr&X-Amz-Signature=fa525d660440ceb6aabe1490825578b559a866019801f431c1df6ce389988161&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXMAESE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICcAfI7iDgyDJk5LcGBsFX%2BN6y5iErfpMatccAtkBWtFAiEA9EyNWBkPPYLguiH31WqHlQ1w%2BM6mj5QkhMREiETofvIqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9Q2wtdYp91HoyYBCrcA7lpd%2BfDam%2Be7q%2BAHIpngRrDrCSmX4GhJTQJEzYlSPXSCljOafb6qzS9B7PT17weCT6OpDGkzeLJZ6G1fgR8xvRE6QdNsPsSrGLpyLTpQ0Oq2BIgImPd25uaa8ixL7qPYD3LQ9QTho9mMqaHTfei9G7eU%2FsxFDembOWK6vOS4OIq3A9WLado8p36%2F%2BOr8s06FlDraI%2BxFqg4vm7ircNQvtB38hDbANWDqQRuI7DlM202Y2XW5Cf4jnen%2FnkCZFOkYHhN1OdpZD8fUVIK4xWXuCkFwYlC%2BizJ4A9Pr5zZ21qget0D3D5z%2BLjYo3HthvlPwfoQLm4o%2BcSgZvdlsi6qdVe%2F9mwtYScMkm2rJJ434T0inu%2FwFE4hXWRtGpMGL8pr12bv3o0De0KpCZ71tu4FX7Piwzcqth4%2B5VUMTwYNFkVHYYdago4VjzDk9s%2Bvsnw4AaEnNV9Lh3CsW0g6MuCrGv1qDwqNkbNV48pxnCZ5r0pFKRC67%2F1RZOLMddxCrkdw4%2B3j9zp2bN%2B%2BkL5oPdkeAuJ44LWeGzKe9vBPkZB%2BNYibJwSfsk19SlFyNhGG7wLvVnolXkb7eacuFocIN%2FVfHA7NbBiNqs%2FBOm0%2FCWvsl0969NRHzjyGUgzTtBC3MIL66r8GOqUBIQkwxW4bbkfOvIxPLvxCBxgUsPf5UyPOkI4e8i2XtPVkiCxdo1RQmHHNUJMGknxiLl2ySIoB%2FITDE2gmrR3aqUyIJr12Gc7q0lGHRxMl5rBq4oXb3sqL7bAOEnF5ZCgCwznIqa5Yb86hoslLN7bdpsM8xW%2FzvsDOhVOJGrp97eabzrDpS8Rw%2F3KefUsPz%2FlS0Mam0%2FteRXpiYTQo7awWjIWU1jnr&X-Amz-Signature=379d5b45f65951842eb22f09fdd05ff410f0bc079a5f4a94a09ba35018215563&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXMAESE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICcAfI7iDgyDJk5LcGBsFX%2BN6y5iErfpMatccAtkBWtFAiEA9EyNWBkPPYLguiH31WqHlQ1w%2BM6mj5QkhMREiETofvIqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9Q2wtdYp91HoyYBCrcA7lpd%2BfDam%2Be7q%2BAHIpngRrDrCSmX4GhJTQJEzYlSPXSCljOafb6qzS9B7PT17weCT6OpDGkzeLJZ6G1fgR8xvRE6QdNsPsSrGLpyLTpQ0Oq2BIgImPd25uaa8ixL7qPYD3LQ9QTho9mMqaHTfei9G7eU%2FsxFDembOWK6vOS4OIq3A9WLado8p36%2F%2BOr8s06FlDraI%2BxFqg4vm7ircNQvtB38hDbANWDqQRuI7DlM202Y2XW5Cf4jnen%2FnkCZFOkYHhN1OdpZD8fUVIK4xWXuCkFwYlC%2BizJ4A9Pr5zZ21qget0D3D5z%2BLjYo3HthvlPwfoQLm4o%2BcSgZvdlsi6qdVe%2F9mwtYScMkm2rJJ434T0inu%2FwFE4hXWRtGpMGL8pr12bv3o0De0KpCZ71tu4FX7Piwzcqth4%2B5VUMTwYNFkVHYYdago4VjzDk9s%2Bvsnw4AaEnNV9Lh3CsW0g6MuCrGv1qDwqNkbNV48pxnCZ5r0pFKRC67%2F1RZOLMddxCrkdw4%2B3j9zp2bN%2B%2BkL5oPdkeAuJ44LWeGzKe9vBPkZB%2BNYibJwSfsk19SlFyNhGG7wLvVnolXkb7eacuFocIN%2FVfHA7NbBiNqs%2FBOm0%2FCWvsl0969NRHzjyGUgzTtBC3MIL66r8GOqUBIQkwxW4bbkfOvIxPLvxCBxgUsPf5UyPOkI4e8i2XtPVkiCxdo1RQmHHNUJMGknxiLl2ySIoB%2FITDE2gmrR3aqUyIJr12Gc7q0lGHRxMl5rBq4oXb3sqL7bAOEnF5ZCgCwznIqa5Yb86hoslLN7bdpsM8xW%2FzvsDOhVOJGrp97eabzrDpS8Rw%2F3KefUsPz%2FlS0Mam0%2FteRXpiYTQo7awWjIWU1jnr&X-Amz-Signature=6defb8d7bfe03f40deca1af419fd7cd5e818d00ada94618bc91a027bef10e4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
