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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXPCOV6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAELa5rCVyGdTzI7eBpV21yV41QJ4Kl3yQZkWaUyYvGNAiA2w7Uqw1851aYdBlQkiDXL8XU9azrmTaYLH7Uou978YSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0rXlMeu4BYl9odyAKtwDi8FsfxlJ%2B2CJcXbUCH%2B4jWGFX1AIU83r0q8jIILlS%2BKaKxdnlgUd2z%2FAWszEJ%2Ffi91a4X1RaktdKtx9soJvUBK4WXJOj5p085u0NEGNv%2BygCXNNEGUt1eLRUKTLHB3xXkXRAaCdAl90qPVKBjjnxKVeT%2FaaNTx0eTyyg%2B2E0JF6BdXSq5t9LDAWD59vwRNHb%2F20PJveP9zvySSziCAF0LPpQeSA9cehZApZW46Ic1qiGXV%2FuXUROQ8tUie0Y0%2FzmbiZddXqOkvM8kQHDmzKCNYvA3zcAGODoX9ngwGe%2BxWmFMQTfQPUTaUlH1CSvASkCVKWQgUAsv7q1m%2FYeTcYzd4YKmTrbEUGgBJY7cVFBMfDXFGLvIeCdoFRfeunFepVAMvjidi5JlMdckkBdRB7XroH0PP0MtOij6H4znej9as4osGG%2BYx6aaFvtU0wGjtU9lM8ojDGfsxTMueRkex%2FP8W3yWfiTgdpa4oesi3ouyMO2mi8DVSO%2FJbc2TO1LfJ1HD12ahNEqFcY%2BBMFxB%2FvOWpVTxlK2WAnRlE8lFxLRWAcUPonogWdkfIV2UAVGKg1GPF12QGR%2Fbs7cKwVVfUPfYoUMk87aTZe9qzLob4ZofRUBYQtsvC7419mY6zwwoJrkwgY6pgEFlUFJHTYHfUoQi5mf1FlRazxtNk2%2FfrEPZ2zeYssg%2BMY9yNfUSPVZbYH%2ByznFl5x1S1JQXTjI6GTQ4LSGW5A6LymHwm9s1OOIbyZFptQO3pbRVjssgyNOFxjuo1HOJ31J1gXrZFayTTYS5UFILXBrGI%2BqMyfk7JzfnMvp5qhskk81nXtfPc7gjSdSf1h7eNya49lnfVmRfDnY6IBDBQ%2B4j0INaugu&X-Amz-Signature=ec31eb379f03a5114ae546de0f8e4b5bf82980cc01baea7f7b793ad7dc739139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXPCOV6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAELa5rCVyGdTzI7eBpV21yV41QJ4Kl3yQZkWaUyYvGNAiA2w7Uqw1851aYdBlQkiDXL8XU9azrmTaYLH7Uou978YSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0rXlMeu4BYl9odyAKtwDi8FsfxlJ%2B2CJcXbUCH%2B4jWGFX1AIU83r0q8jIILlS%2BKaKxdnlgUd2z%2FAWszEJ%2Ffi91a4X1RaktdKtx9soJvUBK4WXJOj5p085u0NEGNv%2BygCXNNEGUt1eLRUKTLHB3xXkXRAaCdAl90qPVKBjjnxKVeT%2FaaNTx0eTyyg%2B2E0JF6BdXSq5t9LDAWD59vwRNHb%2F20PJveP9zvySSziCAF0LPpQeSA9cehZApZW46Ic1qiGXV%2FuXUROQ8tUie0Y0%2FzmbiZddXqOkvM8kQHDmzKCNYvA3zcAGODoX9ngwGe%2BxWmFMQTfQPUTaUlH1CSvASkCVKWQgUAsv7q1m%2FYeTcYzd4YKmTrbEUGgBJY7cVFBMfDXFGLvIeCdoFRfeunFepVAMvjidi5JlMdckkBdRB7XroH0PP0MtOij6H4znej9as4osGG%2BYx6aaFvtU0wGjtU9lM8ojDGfsxTMueRkex%2FP8W3yWfiTgdpa4oesi3ouyMO2mi8DVSO%2FJbc2TO1LfJ1HD12ahNEqFcY%2BBMFxB%2FvOWpVTxlK2WAnRlE8lFxLRWAcUPonogWdkfIV2UAVGKg1GPF12QGR%2Fbs7cKwVVfUPfYoUMk87aTZe9qzLob4ZofRUBYQtsvC7419mY6zwwoJrkwgY6pgEFlUFJHTYHfUoQi5mf1FlRazxtNk2%2FfrEPZ2zeYssg%2BMY9yNfUSPVZbYH%2ByznFl5x1S1JQXTjI6GTQ4LSGW5A6LymHwm9s1OOIbyZFptQO3pbRVjssgyNOFxjuo1HOJ31J1gXrZFayTTYS5UFILXBrGI%2BqMyfk7JzfnMvp5qhskk81nXtfPc7gjSdSf1h7eNya49lnfVmRfDnY6IBDBQ%2B4j0INaugu&X-Amz-Signature=40403fa1051bea6b193a4b2a5a9a07fc538d1e3bdd507508277bd633b4a3ac14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXPCOV6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAELa5rCVyGdTzI7eBpV21yV41QJ4Kl3yQZkWaUyYvGNAiA2w7Uqw1851aYdBlQkiDXL8XU9azrmTaYLH7Uou978YSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0rXlMeu4BYl9odyAKtwDi8FsfxlJ%2B2CJcXbUCH%2B4jWGFX1AIU83r0q8jIILlS%2BKaKxdnlgUd2z%2FAWszEJ%2Ffi91a4X1RaktdKtx9soJvUBK4WXJOj5p085u0NEGNv%2BygCXNNEGUt1eLRUKTLHB3xXkXRAaCdAl90qPVKBjjnxKVeT%2FaaNTx0eTyyg%2B2E0JF6BdXSq5t9LDAWD59vwRNHb%2F20PJveP9zvySSziCAF0LPpQeSA9cehZApZW46Ic1qiGXV%2FuXUROQ8tUie0Y0%2FzmbiZddXqOkvM8kQHDmzKCNYvA3zcAGODoX9ngwGe%2BxWmFMQTfQPUTaUlH1CSvASkCVKWQgUAsv7q1m%2FYeTcYzd4YKmTrbEUGgBJY7cVFBMfDXFGLvIeCdoFRfeunFepVAMvjidi5JlMdckkBdRB7XroH0PP0MtOij6H4znej9as4osGG%2BYx6aaFvtU0wGjtU9lM8ojDGfsxTMueRkex%2FP8W3yWfiTgdpa4oesi3ouyMO2mi8DVSO%2FJbc2TO1LfJ1HD12ahNEqFcY%2BBMFxB%2FvOWpVTxlK2WAnRlE8lFxLRWAcUPonogWdkfIV2UAVGKg1GPF12QGR%2Fbs7cKwVVfUPfYoUMk87aTZe9qzLob4ZofRUBYQtsvC7419mY6zwwoJrkwgY6pgEFlUFJHTYHfUoQi5mf1FlRazxtNk2%2FfrEPZ2zeYssg%2BMY9yNfUSPVZbYH%2ByznFl5x1S1JQXTjI6GTQ4LSGW5A6LymHwm9s1OOIbyZFptQO3pbRVjssgyNOFxjuo1HOJ31J1gXrZFayTTYS5UFILXBrGI%2BqMyfk7JzfnMvp5qhskk81nXtfPc7gjSdSf1h7eNya49lnfVmRfDnY6IBDBQ%2B4j0INaugu&X-Amz-Signature=e81bb31c995560fb3621b14a1692983e1653f486f1476ca4b46e8157bf5eeb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
