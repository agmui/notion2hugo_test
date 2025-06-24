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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTAJHN6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD70RbLBbYvqYa6KxZHyd5lIVtuhB4WvfkeJq6XLjbVdwIgTJzOywsj0MjWhInDvpCor%2FPGQBFu2B6RlCiBBXaXfv8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFmgBN0IwKfnEMPa9SrcA7yL0rtXkbqqOosrCy6QkB9VfHUthc8Qwb9QhmSEQllDPjeTRZ5sPv%2FgLlaUbcK5iyw51ZdNyNyGC67QE9VMSj6gf8H8WyJPQDyf32XMlamrnco2%2FDStSuG3laBpFllCUlIy5wCSYTu50BMpEPIrUmLZVkUD1kOqEYGT3CP3AKmaD1DY7NhH210MfImDtspehLtFhYMCpc9lzX25DUFKSOY5Y4bGLEaW6kt%2BzU3F%2BBfjtG8wz4M2959pDk8CZecwwwEDQd7BgDxs542bju%2FiRxCbdH5oR88m0tCDsBbgwABeJO8LNtnNWc6ytM62q0qZpiJS6l2FV3vwpIICUzCnk9nuHETwBgT38goDpv2hdpNVY5Vt36pf7LvlHVAeFWnyeI9uQaUSEYVFnE6ld7FPlI1Gyq8g6fsm3QRJHp19GE3Iw%2FiC9ifrZCrtzW%2F5rmgGa%2F1fQ6QyjFb40T%2F5aWCRcUJepnc9I2RG3tTaTmVd510IC%2BRjEorJBf2El2e1AtkxIfZdIZSsFdu%2FT52i6k8OmxpjFHE9qhTIWFP2vX4jZvBLfBCyN2j1PUSeynVnMQWBPk2KRtceYJ1a%2Bej1cjhDwXkn2el4dxkXKcrQ4ca7MhriDC%2BPcNP2IaCzwK9XMNyU6MIGOqUBo7VM3qoHmPjZZPwtnAAP5b56keoHbI32h%2BFeRthhC8EYv6Wpeqr%2BvI58XVSjGRko2aB0mFxAf854bDIuVUGGQLJbli4LG1pTsbaeXe6QeKnz0aHT287BLuKb1D3l79uYLAg61IM8Bw8w%2FQLfVNlBUDBjz53rU4As9ZjNXv7ddF7gCDHgiVYTZ724lRcsBMUd6uvgdb%2FfKKyzQkC90k%2BWBpNINHpN&X-Amz-Signature=90dddc2eb4ccfe8e107837aa553a1bd24ca913a198a37ca9071335966c83baa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTAJHN6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD70RbLBbYvqYa6KxZHyd5lIVtuhB4WvfkeJq6XLjbVdwIgTJzOywsj0MjWhInDvpCor%2FPGQBFu2B6RlCiBBXaXfv8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFmgBN0IwKfnEMPa9SrcA7yL0rtXkbqqOosrCy6QkB9VfHUthc8Qwb9QhmSEQllDPjeTRZ5sPv%2FgLlaUbcK5iyw51ZdNyNyGC67QE9VMSj6gf8H8WyJPQDyf32XMlamrnco2%2FDStSuG3laBpFllCUlIy5wCSYTu50BMpEPIrUmLZVkUD1kOqEYGT3CP3AKmaD1DY7NhH210MfImDtspehLtFhYMCpc9lzX25DUFKSOY5Y4bGLEaW6kt%2BzU3F%2BBfjtG8wz4M2959pDk8CZecwwwEDQd7BgDxs542bju%2FiRxCbdH5oR88m0tCDsBbgwABeJO8LNtnNWc6ytM62q0qZpiJS6l2FV3vwpIICUzCnk9nuHETwBgT38goDpv2hdpNVY5Vt36pf7LvlHVAeFWnyeI9uQaUSEYVFnE6ld7FPlI1Gyq8g6fsm3QRJHp19GE3Iw%2FiC9ifrZCrtzW%2F5rmgGa%2F1fQ6QyjFb40T%2F5aWCRcUJepnc9I2RG3tTaTmVd510IC%2BRjEorJBf2El2e1AtkxIfZdIZSsFdu%2FT52i6k8OmxpjFHE9qhTIWFP2vX4jZvBLfBCyN2j1PUSeynVnMQWBPk2KRtceYJ1a%2Bej1cjhDwXkn2el4dxkXKcrQ4ca7MhriDC%2BPcNP2IaCzwK9XMNyU6MIGOqUBo7VM3qoHmPjZZPwtnAAP5b56keoHbI32h%2BFeRthhC8EYv6Wpeqr%2BvI58XVSjGRko2aB0mFxAf854bDIuVUGGQLJbli4LG1pTsbaeXe6QeKnz0aHT287BLuKb1D3l79uYLAg61IM8Bw8w%2FQLfVNlBUDBjz53rU4As9ZjNXv7ddF7gCDHgiVYTZ724lRcsBMUd6uvgdb%2FfKKyzQkC90k%2BWBpNINHpN&X-Amz-Signature=ecee7d905832ac4fc8c8b406679c4f5f7d9bc6fc06c38a37c4f11661a5a92299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKTAJHN6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD70RbLBbYvqYa6KxZHyd5lIVtuhB4WvfkeJq6XLjbVdwIgTJzOywsj0MjWhInDvpCor%2FPGQBFu2B6RlCiBBXaXfv8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFmgBN0IwKfnEMPa9SrcA7yL0rtXkbqqOosrCy6QkB9VfHUthc8Qwb9QhmSEQllDPjeTRZ5sPv%2FgLlaUbcK5iyw51ZdNyNyGC67QE9VMSj6gf8H8WyJPQDyf32XMlamrnco2%2FDStSuG3laBpFllCUlIy5wCSYTu50BMpEPIrUmLZVkUD1kOqEYGT3CP3AKmaD1DY7NhH210MfImDtspehLtFhYMCpc9lzX25DUFKSOY5Y4bGLEaW6kt%2BzU3F%2BBfjtG8wz4M2959pDk8CZecwwwEDQd7BgDxs542bju%2FiRxCbdH5oR88m0tCDsBbgwABeJO8LNtnNWc6ytM62q0qZpiJS6l2FV3vwpIICUzCnk9nuHETwBgT38goDpv2hdpNVY5Vt36pf7LvlHVAeFWnyeI9uQaUSEYVFnE6ld7FPlI1Gyq8g6fsm3QRJHp19GE3Iw%2FiC9ifrZCrtzW%2F5rmgGa%2F1fQ6QyjFb40T%2F5aWCRcUJepnc9I2RG3tTaTmVd510IC%2BRjEorJBf2El2e1AtkxIfZdIZSsFdu%2FT52i6k8OmxpjFHE9qhTIWFP2vX4jZvBLfBCyN2j1PUSeynVnMQWBPk2KRtceYJ1a%2Bej1cjhDwXkn2el4dxkXKcrQ4ca7MhriDC%2BPcNP2IaCzwK9XMNyU6MIGOqUBo7VM3qoHmPjZZPwtnAAP5b56keoHbI32h%2BFeRthhC8EYv6Wpeqr%2BvI58XVSjGRko2aB0mFxAf854bDIuVUGGQLJbli4LG1pTsbaeXe6QeKnz0aHT287BLuKb1D3l79uYLAg61IM8Bw8w%2FQLfVNlBUDBjz53rU4As9ZjNXv7ddF7gCDHgiVYTZ724lRcsBMUd6uvgdb%2FfKKyzQkC90k%2BWBpNINHpN&X-Amz-Signature=cac96d712fbd325f52d903f592b4edb9c3e815e049505041390bb73e2e0361ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
