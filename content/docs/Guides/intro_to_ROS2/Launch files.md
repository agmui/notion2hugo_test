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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4YNHDX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdoVp%2BnaJ5qHgLQ1ixBqYAWU%2F443t9BO%2FevfLV8hzWWAiEA9DaiB%2Ft8Dl0EKdvqG4lxEJ9dwxJMERmUyBrgsPMi8BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDH4aauJUO25NEzJCrcAwA6kKiQMa1w%2FubhcAAtdvKSBV7P8IT0UFLppEhGrJ%2BRqaxFpDiB3rlk13SBY%2FUAGAbfG512McMlXoFW2CJmhBnlbRcaKjQ4YQEHFfcrIKp7QJSzv4iAA3q2rw%2Ff9tq7lxPotju1GRuGtqqWTvT9WbDXEKqFalrKKIY9Zz8EyK2VgTcy24LY6FrB6OdaaV2wmYpmWMhYoQq90HnMMa7ECW%2Fj7jNiBIimrx%2Ff954p2eDLelW5OqtNAOKW9OVlqio%2FOc5hWzaJBjR6qossWEJqb9Gx0MEIvPQikBu3SXtzPpem52twBlna7XbrIf7p%2BQKKdmH%2BCLRcYNdI5ISJJUY1j82BRSHWtxn3oozFe17Yb2oWKCuPlEbNkgd0QqSZ2AJ%2FzKmMhfUFCM8Ubz1KLrcDM0mU39EJOrn4UnoYrU8KzRyZdp8LUL2gGQ%2F%2F8emWturYXac0rVQMuO3TnSsSuxfP5%2FNLPW5BECHI4RCR0mToyZ%2FtJXfyO0JNRTUhG27GuOAV%2B6JjQzlI1VhOtpO5TLxsGZ%2FXLVu2tl%2BGnht9dVGzQYOCzN8r%2FcTQ4p2RkQeIX4NVN715SfsNaTgaijW4pTvybfAmeaHwVOESjMf4%2Fl9EZnfr8WxP7zHNWGq5DezQMMSdrcQGOqUBZYPiw5%2Byi3B8U0JAmnictSjioQ39WCR291IbFxyshYQuonXm2%2FkMH1jrLtt7c0%2BrtBaPiNZ54C3bElHPKwfeKFp3VNJLDym%2FeNyvhLo9fClpFjszjtk2%2FnuxU0uSeJqac1zDwW3e8o8dsifIy%2Bk8e%2BRw4HTpqjUgmlUYHDegOVCOfKCuI3gBKC17qUG3zVEcVQBZMTicEHj8Ri6qgvnFbqOTbeBG&X-Amz-Signature=83960fc3145ab1f54216ac79074b644faaa1648de73362a2ff0e4f8b699f3875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4YNHDX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdoVp%2BnaJ5qHgLQ1ixBqYAWU%2F443t9BO%2FevfLV8hzWWAiEA9DaiB%2Ft8Dl0EKdvqG4lxEJ9dwxJMERmUyBrgsPMi8BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDH4aauJUO25NEzJCrcAwA6kKiQMa1w%2FubhcAAtdvKSBV7P8IT0UFLppEhGrJ%2BRqaxFpDiB3rlk13SBY%2FUAGAbfG512McMlXoFW2CJmhBnlbRcaKjQ4YQEHFfcrIKp7QJSzv4iAA3q2rw%2Ff9tq7lxPotju1GRuGtqqWTvT9WbDXEKqFalrKKIY9Zz8EyK2VgTcy24LY6FrB6OdaaV2wmYpmWMhYoQq90HnMMa7ECW%2Fj7jNiBIimrx%2Ff954p2eDLelW5OqtNAOKW9OVlqio%2FOc5hWzaJBjR6qossWEJqb9Gx0MEIvPQikBu3SXtzPpem52twBlna7XbrIf7p%2BQKKdmH%2BCLRcYNdI5ISJJUY1j82BRSHWtxn3oozFe17Yb2oWKCuPlEbNkgd0QqSZ2AJ%2FzKmMhfUFCM8Ubz1KLrcDM0mU39EJOrn4UnoYrU8KzRyZdp8LUL2gGQ%2F%2F8emWturYXac0rVQMuO3TnSsSuxfP5%2FNLPW5BECHI4RCR0mToyZ%2FtJXfyO0JNRTUhG27GuOAV%2B6JjQzlI1VhOtpO5TLxsGZ%2FXLVu2tl%2BGnht9dVGzQYOCzN8r%2FcTQ4p2RkQeIX4NVN715SfsNaTgaijW4pTvybfAmeaHwVOESjMf4%2Fl9EZnfr8WxP7zHNWGq5DezQMMSdrcQGOqUBZYPiw5%2Byi3B8U0JAmnictSjioQ39WCR291IbFxyshYQuonXm2%2FkMH1jrLtt7c0%2BrtBaPiNZ54C3bElHPKwfeKFp3VNJLDym%2FeNyvhLo9fClpFjszjtk2%2FnuxU0uSeJqac1zDwW3e8o8dsifIy%2Bk8e%2BRw4HTpqjUgmlUYHDegOVCOfKCuI3gBKC17qUG3zVEcVQBZMTicEHj8Ri6qgvnFbqOTbeBG&X-Amz-Signature=4f3d59d3838da13ff62c66c5b1dbe451c4ce98c582390b494bdf21289f68d302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4YNHDX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdoVp%2BnaJ5qHgLQ1ixBqYAWU%2F443t9BO%2FevfLV8hzWWAiEA9DaiB%2Ft8Dl0EKdvqG4lxEJ9dwxJMERmUyBrgsPMi8BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDH4aauJUO25NEzJCrcAwA6kKiQMa1w%2FubhcAAtdvKSBV7P8IT0UFLppEhGrJ%2BRqaxFpDiB3rlk13SBY%2FUAGAbfG512McMlXoFW2CJmhBnlbRcaKjQ4YQEHFfcrIKp7QJSzv4iAA3q2rw%2Ff9tq7lxPotju1GRuGtqqWTvT9WbDXEKqFalrKKIY9Zz8EyK2VgTcy24LY6FrB6OdaaV2wmYpmWMhYoQq90HnMMa7ECW%2Fj7jNiBIimrx%2Ff954p2eDLelW5OqtNAOKW9OVlqio%2FOc5hWzaJBjR6qossWEJqb9Gx0MEIvPQikBu3SXtzPpem52twBlna7XbrIf7p%2BQKKdmH%2BCLRcYNdI5ISJJUY1j82BRSHWtxn3oozFe17Yb2oWKCuPlEbNkgd0QqSZ2AJ%2FzKmMhfUFCM8Ubz1KLrcDM0mU39EJOrn4UnoYrU8KzRyZdp8LUL2gGQ%2F%2F8emWturYXac0rVQMuO3TnSsSuxfP5%2FNLPW5BECHI4RCR0mToyZ%2FtJXfyO0JNRTUhG27GuOAV%2B6JjQzlI1VhOtpO5TLxsGZ%2FXLVu2tl%2BGnht9dVGzQYOCzN8r%2FcTQ4p2RkQeIX4NVN715SfsNaTgaijW4pTvybfAmeaHwVOESjMf4%2Fl9EZnfr8WxP7zHNWGq5DezQMMSdrcQGOqUBZYPiw5%2Byi3B8U0JAmnictSjioQ39WCR291IbFxyshYQuonXm2%2FkMH1jrLtt7c0%2BrtBaPiNZ54C3bElHPKwfeKFp3VNJLDym%2FeNyvhLo9fClpFjszjtk2%2FnuxU0uSeJqac1zDwW3e8o8dsifIy%2Bk8e%2BRw4HTpqjUgmlUYHDegOVCOfKCuI3gBKC17qUG3zVEcVQBZMTicEHj8Ri6qgvnFbqOTbeBG&X-Amz-Signature=b7919b97d81c6361cf17e12ef66641fc8e8d4388021abde6c524dbebf2c9df89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
