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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WHFTZJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo2Mstvl3r9a%2FWyX50m8oi6jMqdfE8WELwC1jBw6YQvAiEA%2FqV6acegf40VRbi%2BTmfwOXAIssNt%2FYwMemBeCZZjBIwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQg7%2FAy%2FEtZsmSgSrcA%2F9cz78cuueJXxp%2BbtlQlKWI4f9XlPK89U951ltx7682vVR3KYXrLZ9NzRAszgi6dpus5ONv4QJ9tKbZ6%2FUmLr8bO%2F2FDnaTatGPYlQ%2BDxq1PHV4vVFrI611cLWxbcH7wTCSeTpbq554vPNbeZtBzFs8in75G9Sk2sLHG%2BSIwGn329NgsAZQOXVcgnIaKHRYH%2FWIWudONlXiDvK5I2ut1QwxAkpUa2jb1uzw0RcQ6VxWuPUf1CoO%2F1069ONa02nXMJ7q8P4wMf67UWqdOYcOlkdnKL0%2Bg54Y6t8AY4ScI%2FgeP80ab7EFZDXu8BEunIY6OkktbV40QGvNc0U8T8j325z%2BQ3KBB5XHI%2FAzo1HzcWsTOMBJctz%2FuChDb9i7E5%2B%2F2NbPepOxuK4VJ%2BHX3sUYBwdWdG7c9Ol3FdAiiqyzukNVAdntLgfKke%2FWH6GeV4FYG5%2FyMs7Gy2sny0uSQkVN%2BLJ2sciH4KNmaz8ThERyrtXR2%2BAgWQZFt4ILQOhMdxlQtkcgaU5%2BuOIKWkv%2BV25iMeQ5CcBdkdSUVtm7nXzuatas5jvwuENAOUlsLq5eA9aWg3ZnpWyzntZjmbczAUKBLyH3dE1EYWgU%2FEhMZrlSDeBQcg10XR38J6JGkOZdMNTZm8IGOqUBV4MuRYu8mxWoVdVTovieEiWyTEClHspWzbREvRcKlI5tt6lt5T62ZDiwaztOSHnUDlf1Nj%2FC6Tqp4yN3NZ%2FcoFDl2K3%2FZRKieqKXMRWSfQ1HAUqWdgF6CKQoQj8GkPOnE4MctjCHW52tdnUisjEJZA8Cp0YQLTlc%2BWSYq5DF2sWwfux9GKGPc5eFbDwwgczdcOO68pOxx0T70qBGIYUXthwxE6hk&X-Amz-Signature=b8dda03817f5f6ac38d904fd3075c562d367a3fb1fa7bbf88cd145eb22c5b228&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WHFTZJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo2Mstvl3r9a%2FWyX50m8oi6jMqdfE8WELwC1jBw6YQvAiEA%2FqV6acegf40VRbi%2BTmfwOXAIssNt%2FYwMemBeCZZjBIwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQg7%2FAy%2FEtZsmSgSrcA%2F9cz78cuueJXxp%2BbtlQlKWI4f9XlPK89U951ltx7682vVR3KYXrLZ9NzRAszgi6dpus5ONv4QJ9tKbZ6%2FUmLr8bO%2F2FDnaTatGPYlQ%2BDxq1PHV4vVFrI611cLWxbcH7wTCSeTpbq554vPNbeZtBzFs8in75G9Sk2sLHG%2BSIwGn329NgsAZQOXVcgnIaKHRYH%2FWIWudONlXiDvK5I2ut1QwxAkpUa2jb1uzw0RcQ6VxWuPUf1CoO%2F1069ONa02nXMJ7q8P4wMf67UWqdOYcOlkdnKL0%2Bg54Y6t8AY4ScI%2FgeP80ab7EFZDXu8BEunIY6OkktbV40QGvNc0U8T8j325z%2BQ3KBB5XHI%2FAzo1HzcWsTOMBJctz%2FuChDb9i7E5%2B%2F2NbPepOxuK4VJ%2BHX3sUYBwdWdG7c9Ol3FdAiiqyzukNVAdntLgfKke%2FWH6GeV4FYG5%2FyMs7Gy2sny0uSQkVN%2BLJ2sciH4KNmaz8ThERyrtXR2%2BAgWQZFt4ILQOhMdxlQtkcgaU5%2BuOIKWkv%2BV25iMeQ5CcBdkdSUVtm7nXzuatas5jvwuENAOUlsLq5eA9aWg3ZnpWyzntZjmbczAUKBLyH3dE1EYWgU%2FEhMZrlSDeBQcg10XR38J6JGkOZdMNTZm8IGOqUBV4MuRYu8mxWoVdVTovieEiWyTEClHspWzbREvRcKlI5tt6lt5T62ZDiwaztOSHnUDlf1Nj%2FC6Tqp4yN3NZ%2FcoFDl2K3%2FZRKieqKXMRWSfQ1HAUqWdgF6CKQoQj8GkPOnE4MctjCHW52tdnUisjEJZA8Cp0YQLTlc%2BWSYq5DF2sWwfux9GKGPc5eFbDwwgczdcOO68pOxx0T70qBGIYUXthwxE6hk&X-Amz-Signature=65b8f8f6abf09576f31ed2667f76dd4ff68214f067040a0c515c83b4282d2b19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WHFTZJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo2Mstvl3r9a%2FWyX50m8oi6jMqdfE8WELwC1jBw6YQvAiEA%2FqV6acegf40VRbi%2BTmfwOXAIssNt%2FYwMemBeCZZjBIwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQg7%2FAy%2FEtZsmSgSrcA%2F9cz78cuueJXxp%2BbtlQlKWI4f9XlPK89U951ltx7682vVR3KYXrLZ9NzRAszgi6dpus5ONv4QJ9tKbZ6%2FUmLr8bO%2F2FDnaTatGPYlQ%2BDxq1PHV4vVFrI611cLWxbcH7wTCSeTpbq554vPNbeZtBzFs8in75G9Sk2sLHG%2BSIwGn329NgsAZQOXVcgnIaKHRYH%2FWIWudONlXiDvK5I2ut1QwxAkpUa2jb1uzw0RcQ6VxWuPUf1CoO%2F1069ONa02nXMJ7q8P4wMf67UWqdOYcOlkdnKL0%2Bg54Y6t8AY4ScI%2FgeP80ab7EFZDXu8BEunIY6OkktbV40QGvNc0U8T8j325z%2BQ3KBB5XHI%2FAzo1HzcWsTOMBJctz%2FuChDb9i7E5%2B%2F2NbPepOxuK4VJ%2BHX3sUYBwdWdG7c9Ol3FdAiiqyzukNVAdntLgfKke%2FWH6GeV4FYG5%2FyMs7Gy2sny0uSQkVN%2BLJ2sciH4KNmaz8ThERyrtXR2%2BAgWQZFt4ILQOhMdxlQtkcgaU5%2BuOIKWkv%2BV25iMeQ5CcBdkdSUVtm7nXzuatas5jvwuENAOUlsLq5eA9aWg3ZnpWyzntZjmbczAUKBLyH3dE1EYWgU%2FEhMZrlSDeBQcg10XR38J6JGkOZdMNTZm8IGOqUBV4MuRYu8mxWoVdVTovieEiWyTEClHspWzbREvRcKlI5tt6lt5T62ZDiwaztOSHnUDlf1Nj%2FC6Tqp4yN3NZ%2FcoFDl2K3%2FZRKieqKXMRWSfQ1HAUqWdgF6CKQoQj8GkPOnE4MctjCHW52tdnUisjEJZA8Cp0YQLTlc%2BWSYq5DF2sWwfux9GKGPc5eFbDwwgczdcOO68pOxx0T70qBGIYUXthwxE6hk&X-Amz-Signature=d3cc580c0489ae97308fec41f518e7011d828deaaad6b494558131eac1186ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
