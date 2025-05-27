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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GB3QFA5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs8yt1gnehELAHEBXSohOuuqGSzeXzM4i5qnGAX0Ip8AiEAq04srvdXjapw1%2BUEcYeVVj3fZ56ymC7yMoDJbFvlQ7Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7oy0%2BNNqZDtPzlSyrcAwYSM65p8DURa9WgsX6%2BauaIZLkV5m%2B8QDn3N56zCqZEEbUbf1r0bz8Hi8ABOCapDKpSL7wgWHmwmovHMs3c5GF4hBeZQxa4lSk3QtafrM0hFGgykGQ1a1ZurBRC%2BOZWVflX0HqsL%2F8Nay98DjBkDNzX0nIwb1XTOssJo%2B6YBJBzOmBJ3ErFEsCzg1ysPeCCuFoK1IN2GVmcbMF5fw8AWprMJi4myzyMndmjoUoQERZMiTxyhujjOHZPXmLLSt1tNjuk3pVLsk5uCdNWrhZI5saDACM2u%2FmwNfKGa61f8iW8xRy6xDH3mCmoIuTNWj%2Bso9lAsirUxrrHYRnRcHoPC6DKiGHFLQed1JAna4ZbZa%2FKQ5atql1I32C6%2B33Lf8X7oAIQL4Yz510tLdOafnozjgXFEonaZfYo9vZ2V0SK0SXWncy8AOiqaz2deSgnnulChQUApo9hLl3ehg1ehM%2F1OHcmiw0SAQz528j8voO%2B%2BZzN%2FPdN22HB6hc0UkZW4GSAbPdf0cap0Xg9SnOmsGn8mFhV6d7mgFxG22vWxdxbKy%2FZCXXdc9m8QtJ1Zs%2FwRS1b4t%2BuxaT8JvAykx%2FO5%2FGBJlW1ZH%2FFqUh%2B9kLBOz48DwH4oFXC%2FyggBymOYpa3MN%2FT08EGOqUBmueDLLySnrm5fw5I6EZon16TeBCQBkxdbq8dUyGSK3O8N8OcDZG1gwKu555FOu41ej%2BER9cs64eelqJHNJmSMjuST%2B8xjfGPqMDLJGxI%2Bgr9t2D20aVu8kFXto%2Bth2f7TBBWpKVzrgNmgErkN5bAZAacqvwxmwj1o3FknTz%2F6zXv7py3p9I1Jq1ZGQL5ZC34VBXorYFMOqI5Hwbg4Awx1ELQTZSi&X-Amz-Signature=e02397a53d5acecee00c8cb3f8bd50c7d5fbbeec0085191e531b746b869625cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GB3QFA5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs8yt1gnehELAHEBXSohOuuqGSzeXzM4i5qnGAX0Ip8AiEAq04srvdXjapw1%2BUEcYeVVj3fZ56ymC7yMoDJbFvlQ7Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7oy0%2BNNqZDtPzlSyrcAwYSM65p8DURa9WgsX6%2BauaIZLkV5m%2B8QDn3N56zCqZEEbUbf1r0bz8Hi8ABOCapDKpSL7wgWHmwmovHMs3c5GF4hBeZQxa4lSk3QtafrM0hFGgykGQ1a1ZurBRC%2BOZWVflX0HqsL%2F8Nay98DjBkDNzX0nIwb1XTOssJo%2B6YBJBzOmBJ3ErFEsCzg1ysPeCCuFoK1IN2GVmcbMF5fw8AWprMJi4myzyMndmjoUoQERZMiTxyhujjOHZPXmLLSt1tNjuk3pVLsk5uCdNWrhZI5saDACM2u%2FmwNfKGa61f8iW8xRy6xDH3mCmoIuTNWj%2Bso9lAsirUxrrHYRnRcHoPC6DKiGHFLQed1JAna4ZbZa%2FKQ5atql1I32C6%2B33Lf8X7oAIQL4Yz510tLdOafnozjgXFEonaZfYo9vZ2V0SK0SXWncy8AOiqaz2deSgnnulChQUApo9hLl3ehg1ehM%2F1OHcmiw0SAQz528j8voO%2B%2BZzN%2FPdN22HB6hc0UkZW4GSAbPdf0cap0Xg9SnOmsGn8mFhV6d7mgFxG22vWxdxbKy%2FZCXXdc9m8QtJ1Zs%2FwRS1b4t%2BuxaT8JvAykx%2FO5%2FGBJlW1ZH%2FFqUh%2B9kLBOz48DwH4oFXC%2FyggBymOYpa3MN%2FT08EGOqUBmueDLLySnrm5fw5I6EZon16TeBCQBkxdbq8dUyGSK3O8N8OcDZG1gwKu555FOu41ej%2BER9cs64eelqJHNJmSMjuST%2B8xjfGPqMDLJGxI%2Bgr9t2D20aVu8kFXto%2Bth2f7TBBWpKVzrgNmgErkN5bAZAacqvwxmwj1o3FknTz%2F6zXv7py3p9I1Jq1ZGQL5ZC34VBXorYFMOqI5Hwbg4Awx1ELQTZSi&X-Amz-Signature=cf3d5346c93b7acceb4a55719bb2fb6057da9b386d45b8de1e9d49fd3e816186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GB3QFA5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs8yt1gnehELAHEBXSohOuuqGSzeXzM4i5qnGAX0Ip8AiEAq04srvdXjapw1%2BUEcYeVVj3fZ56ymC7yMoDJbFvlQ7Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7oy0%2BNNqZDtPzlSyrcAwYSM65p8DURa9WgsX6%2BauaIZLkV5m%2B8QDn3N56zCqZEEbUbf1r0bz8Hi8ABOCapDKpSL7wgWHmwmovHMs3c5GF4hBeZQxa4lSk3QtafrM0hFGgykGQ1a1ZurBRC%2BOZWVflX0HqsL%2F8Nay98DjBkDNzX0nIwb1XTOssJo%2B6YBJBzOmBJ3ErFEsCzg1ysPeCCuFoK1IN2GVmcbMF5fw8AWprMJi4myzyMndmjoUoQERZMiTxyhujjOHZPXmLLSt1tNjuk3pVLsk5uCdNWrhZI5saDACM2u%2FmwNfKGa61f8iW8xRy6xDH3mCmoIuTNWj%2Bso9lAsirUxrrHYRnRcHoPC6DKiGHFLQed1JAna4ZbZa%2FKQ5atql1I32C6%2B33Lf8X7oAIQL4Yz510tLdOafnozjgXFEonaZfYo9vZ2V0SK0SXWncy8AOiqaz2deSgnnulChQUApo9hLl3ehg1ehM%2F1OHcmiw0SAQz528j8voO%2B%2BZzN%2FPdN22HB6hc0UkZW4GSAbPdf0cap0Xg9SnOmsGn8mFhV6d7mgFxG22vWxdxbKy%2FZCXXdc9m8QtJ1Zs%2FwRS1b4t%2BuxaT8JvAykx%2FO5%2FGBJlW1ZH%2FFqUh%2B9kLBOz48DwH4oFXC%2FyggBymOYpa3MN%2FT08EGOqUBmueDLLySnrm5fw5I6EZon16TeBCQBkxdbq8dUyGSK3O8N8OcDZG1gwKu555FOu41ej%2BER9cs64eelqJHNJmSMjuST%2B8xjfGPqMDLJGxI%2Bgr9t2D20aVu8kFXto%2Bth2f7TBBWpKVzrgNmgErkN5bAZAacqvwxmwj1o3FknTz%2F6zXv7py3p9I1Jq1ZGQL5ZC34VBXorYFMOqI5Hwbg4Awx1ELQTZSi&X-Amz-Signature=cb865fe5a7a75a6c772cc00a70143f8b1bd9746cd1dd299c65123614807a1d94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
