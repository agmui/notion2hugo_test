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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKWDGIH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FqCCYLPx%2B7mjtwZGhNJcxuYpt%2BsY6p9du0pUee4XAgAiEAs1Kf15miYvkTB8SERChgo7tDxqKMlVE7GxAYOrbGnCQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHXQ2gb6aEWfN8c5GCrcA0uJmf6Yff5sGMbTdDe8krTPuVitzhgCx02DFj311MPDxtWw3PiN36yiGbZB%2BPhV2yvCNHTc0lYEr23waSj7kmh%2FbvkYkSZW4MhVy47cd4CIjCMb9nH1%2F2ISlWch6TgSeIHfXXM6Aq5XhtHYQ%2FhedEhEiJXcQPQFu444Hd0ypxULn8sgMFCiWJUpou36xf%2Fkv97HezI1zuoQ5JHTyC92Q%2FL2CSdYYU3u0sJL30Csgg4Bat0AIdhUg18GqINcCAR7lhlq5N8jHqOHYN9HItu%2BQ0H0GyvS5k%2BupRRUtlpKRsq8Y6wZV0Hbx9iCHP9my1refbKbMi%2FmbSoObv3vE1l3RPVbMQhjh9o%2BcdGq6w4qEtpMYDe0mC%2FE%2FYt%2BczFZqEeSkptLBzimzBzjfeQfRgc2tFZQTWa7OnIHAcSz6lkYk1GZNMfL9bfLSNphcn2JtuzuLZ4RKC9rOWEJziwHG8ipkO1l4%2F9Lc4uLG37iHQF4I6K5hge5ccMLjnX1FYvZ67QsEqJQL6ryEpZn7YI7caWRwhNoe6T1YtjQmFfyNX5IcoWA7y75Pu7ucnToUmtChKrk0kfokIJ1NRKJmPosmlFzUWKAuU0VGiiGr8Cmo%2FcZYE7LgXpBk1LwAYUEjkQWMPvIscAGOqUBL7RwYY0Jcjw2qmOBlyYzjY%2B4jkQZKEJPeAKZHGE5bJS8zi397uBgglGhOh6J7KpTe0ncOMlCvejCl0Vnfq7j6knU%2BHOG%2B9YMliYg4wCEvtV3ynzRMq0osSTLt9IL4VDsSQr%2BglE8xqTNVxOVwC7hOuGoH8Vrui01f%2F9xn8nsAm9QV2hhnAlEnDmYSJdjFuy1%2BcJH23BKePdqCbIEfgo8uKf4Wl0f&X-Amz-Signature=81c5b1f9a48b5bb678e122801f82051ab3567df1479be1bd21a0c2d74aa56d18&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKWDGIH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FqCCYLPx%2B7mjtwZGhNJcxuYpt%2BsY6p9du0pUee4XAgAiEAs1Kf15miYvkTB8SERChgo7tDxqKMlVE7GxAYOrbGnCQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHXQ2gb6aEWfN8c5GCrcA0uJmf6Yff5sGMbTdDe8krTPuVitzhgCx02DFj311MPDxtWw3PiN36yiGbZB%2BPhV2yvCNHTc0lYEr23waSj7kmh%2FbvkYkSZW4MhVy47cd4CIjCMb9nH1%2F2ISlWch6TgSeIHfXXM6Aq5XhtHYQ%2FhedEhEiJXcQPQFu444Hd0ypxULn8sgMFCiWJUpou36xf%2Fkv97HezI1zuoQ5JHTyC92Q%2FL2CSdYYU3u0sJL30Csgg4Bat0AIdhUg18GqINcCAR7lhlq5N8jHqOHYN9HItu%2BQ0H0GyvS5k%2BupRRUtlpKRsq8Y6wZV0Hbx9iCHP9my1refbKbMi%2FmbSoObv3vE1l3RPVbMQhjh9o%2BcdGq6w4qEtpMYDe0mC%2FE%2FYt%2BczFZqEeSkptLBzimzBzjfeQfRgc2tFZQTWa7OnIHAcSz6lkYk1GZNMfL9bfLSNphcn2JtuzuLZ4RKC9rOWEJziwHG8ipkO1l4%2F9Lc4uLG37iHQF4I6K5hge5ccMLjnX1FYvZ67QsEqJQL6ryEpZn7YI7caWRwhNoe6T1YtjQmFfyNX5IcoWA7y75Pu7ucnToUmtChKrk0kfokIJ1NRKJmPosmlFzUWKAuU0VGiiGr8Cmo%2FcZYE7LgXpBk1LwAYUEjkQWMPvIscAGOqUBL7RwYY0Jcjw2qmOBlyYzjY%2B4jkQZKEJPeAKZHGE5bJS8zi397uBgglGhOh6J7KpTe0ncOMlCvejCl0Vnfq7j6knU%2BHOG%2B9YMliYg4wCEvtV3ynzRMq0osSTLt9IL4VDsSQr%2BglE8xqTNVxOVwC7hOuGoH8Vrui01f%2F9xn8nsAm9QV2hhnAlEnDmYSJdjFuy1%2BcJH23BKePdqCbIEfgo8uKf4Wl0f&X-Amz-Signature=eafd00192271aa7c2dd4dde883bff727b7bc0855193ed0b08209d0e53866b9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKWDGIH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FqCCYLPx%2B7mjtwZGhNJcxuYpt%2BsY6p9du0pUee4XAgAiEAs1Kf15miYvkTB8SERChgo7tDxqKMlVE7GxAYOrbGnCQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHXQ2gb6aEWfN8c5GCrcA0uJmf6Yff5sGMbTdDe8krTPuVitzhgCx02DFj311MPDxtWw3PiN36yiGbZB%2BPhV2yvCNHTc0lYEr23waSj7kmh%2FbvkYkSZW4MhVy47cd4CIjCMb9nH1%2F2ISlWch6TgSeIHfXXM6Aq5XhtHYQ%2FhedEhEiJXcQPQFu444Hd0ypxULn8sgMFCiWJUpou36xf%2Fkv97HezI1zuoQ5JHTyC92Q%2FL2CSdYYU3u0sJL30Csgg4Bat0AIdhUg18GqINcCAR7lhlq5N8jHqOHYN9HItu%2BQ0H0GyvS5k%2BupRRUtlpKRsq8Y6wZV0Hbx9iCHP9my1refbKbMi%2FmbSoObv3vE1l3RPVbMQhjh9o%2BcdGq6w4qEtpMYDe0mC%2FE%2FYt%2BczFZqEeSkptLBzimzBzjfeQfRgc2tFZQTWa7OnIHAcSz6lkYk1GZNMfL9bfLSNphcn2JtuzuLZ4RKC9rOWEJziwHG8ipkO1l4%2F9Lc4uLG37iHQF4I6K5hge5ccMLjnX1FYvZ67QsEqJQL6ryEpZn7YI7caWRwhNoe6T1YtjQmFfyNX5IcoWA7y75Pu7ucnToUmtChKrk0kfokIJ1NRKJmPosmlFzUWKAuU0VGiiGr8Cmo%2FcZYE7LgXpBk1LwAYUEjkQWMPvIscAGOqUBL7RwYY0Jcjw2qmOBlyYzjY%2B4jkQZKEJPeAKZHGE5bJS8zi397uBgglGhOh6J7KpTe0ncOMlCvejCl0Vnfq7j6knU%2BHOG%2B9YMliYg4wCEvtV3ynzRMq0osSTLt9IL4VDsSQr%2BglE8xqTNVxOVwC7hOuGoH8Vrui01f%2F9xn8nsAm9QV2hhnAlEnDmYSJdjFuy1%2BcJH23BKePdqCbIEfgo8uKf4Wl0f&X-Amz-Signature=0b1e380b84b022dd049e71f177b2611ea10bf9251b94f9c84e4c43357c4b282d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
