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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSJ2FSS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB39V2M0j60R9nwk7bbkFQkmcwc0Bg0THyCQjH42IkNXAiA%2B52oOIX6KUfO7b%2FtiimyzMCApNEm%2BZow5ed7bG2754ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAZ16AVeb3ONqUa0uKtwDEyTDTHW6KmiYax8Fe635mDglTOvuZRm8Bu2%2FjaWcR6DUIIGJEsHy9IUIoBKzaFPJNLCquaJG1kXZ1ucNJwfqsLbGB8MY28wkqxqujSEOkwLa%2B9btmXLLNMR3p%2FHUagp3yQ2qwZ6TM5%2FdckGAIJdUjalAuJ6sr%2F34gmguMVwIY8pR6LnTjJYn0umx1U0U2mhuxfJdBL22vA%2FkEL5ByTbN4cWM57ayUaKhIOsJIsbJ0TIy5Brhd0%2Bcw12QMtqALVSrujJlnmJ5iWSoZ%2BZ8P0%2BHEmezzGKTKCNSHwYxWo1xOTWhkD1dH8lsCoOUVwP4vws%2FtNHsPHMs5hAimLVe9OD74AksoaSLGS7B7asedlTwf0r4RwdH%2FevsMCu9sEP7Ee6vCPFpUSr8Bli%2Brv6GnBXT4VLtYrnk%2FAxL546e7Ek8y2yp8adtDTPcINTxWCcC86kgyoegLAFZPLEmXAchF1S19QRmXEMm87XlNOzJTMdSAhkwyvG1VLSxbvXkrpmjhPss7oeaSLVUWWZ56qe%2BZ6NDlcEnZ0Doi7YI3i9oprK7ki91FY6JZdfFVrkecU92CAUSV14daL5yNDOdISbjHNSH3gGykVU%2BA8Yh6qRO6Uf4JgzqvQ6IRRrOndCufTcwtt%2FGwgY6pgEEpCWZGxah%2BXVErS%2F3vHFWWcDT7AQVRNrnln%2FP2QI%2FuM3LD1AkzVUzIqb4%2B1Y7kyAAn5w%2BXr4cyrRanLef3dtC8XQxvKgIgzfLqgJLAv0rS2BiCE16F2%2B7nLiUh8KHwZKF0gE%2BcO60vFn0dFNmyZf26ar0U%2FR1kDB0CXyIp%2B2VSJ2tkW63o%2B%2FXPQuJuRqCYNzvKWLOimaKwU2h59qXfOwZ%2FcEIgJJV&X-Amz-Signature=cc159d792aaa3611aa52edfd0db58a531f696c61d4ad2149ef3cf32c3135d004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSJ2FSS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB39V2M0j60R9nwk7bbkFQkmcwc0Bg0THyCQjH42IkNXAiA%2B52oOIX6KUfO7b%2FtiimyzMCApNEm%2BZow5ed7bG2754ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAZ16AVeb3ONqUa0uKtwDEyTDTHW6KmiYax8Fe635mDglTOvuZRm8Bu2%2FjaWcR6DUIIGJEsHy9IUIoBKzaFPJNLCquaJG1kXZ1ucNJwfqsLbGB8MY28wkqxqujSEOkwLa%2B9btmXLLNMR3p%2FHUagp3yQ2qwZ6TM5%2FdckGAIJdUjalAuJ6sr%2F34gmguMVwIY8pR6LnTjJYn0umx1U0U2mhuxfJdBL22vA%2FkEL5ByTbN4cWM57ayUaKhIOsJIsbJ0TIy5Brhd0%2Bcw12QMtqALVSrujJlnmJ5iWSoZ%2BZ8P0%2BHEmezzGKTKCNSHwYxWo1xOTWhkD1dH8lsCoOUVwP4vws%2FtNHsPHMs5hAimLVe9OD74AksoaSLGS7B7asedlTwf0r4RwdH%2FevsMCu9sEP7Ee6vCPFpUSr8Bli%2Brv6GnBXT4VLtYrnk%2FAxL546e7Ek8y2yp8adtDTPcINTxWCcC86kgyoegLAFZPLEmXAchF1S19QRmXEMm87XlNOzJTMdSAhkwyvG1VLSxbvXkrpmjhPss7oeaSLVUWWZ56qe%2BZ6NDlcEnZ0Doi7YI3i9oprK7ki91FY6JZdfFVrkecU92CAUSV14daL5yNDOdISbjHNSH3gGykVU%2BA8Yh6qRO6Uf4JgzqvQ6IRRrOndCufTcwtt%2FGwgY6pgEEpCWZGxah%2BXVErS%2F3vHFWWcDT7AQVRNrnln%2FP2QI%2FuM3LD1AkzVUzIqb4%2B1Y7kyAAn5w%2BXr4cyrRanLef3dtC8XQxvKgIgzfLqgJLAv0rS2BiCE16F2%2B7nLiUh8KHwZKF0gE%2BcO60vFn0dFNmyZf26ar0U%2FR1kDB0CXyIp%2B2VSJ2tkW63o%2B%2FXPQuJuRqCYNzvKWLOimaKwU2h59qXfOwZ%2FcEIgJJV&X-Amz-Signature=9103a49e10f2fc63b000e180f43ea00da40e97dbbea5906512167399a1205d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSJ2FSS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB39V2M0j60R9nwk7bbkFQkmcwc0Bg0THyCQjH42IkNXAiA%2B52oOIX6KUfO7b%2FtiimyzMCApNEm%2BZow5ed7bG2754ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAZ16AVeb3ONqUa0uKtwDEyTDTHW6KmiYax8Fe635mDglTOvuZRm8Bu2%2FjaWcR6DUIIGJEsHy9IUIoBKzaFPJNLCquaJG1kXZ1ucNJwfqsLbGB8MY28wkqxqujSEOkwLa%2B9btmXLLNMR3p%2FHUagp3yQ2qwZ6TM5%2FdckGAIJdUjalAuJ6sr%2F34gmguMVwIY8pR6LnTjJYn0umx1U0U2mhuxfJdBL22vA%2FkEL5ByTbN4cWM57ayUaKhIOsJIsbJ0TIy5Brhd0%2Bcw12QMtqALVSrujJlnmJ5iWSoZ%2BZ8P0%2BHEmezzGKTKCNSHwYxWo1xOTWhkD1dH8lsCoOUVwP4vws%2FtNHsPHMs5hAimLVe9OD74AksoaSLGS7B7asedlTwf0r4RwdH%2FevsMCu9sEP7Ee6vCPFpUSr8Bli%2Brv6GnBXT4VLtYrnk%2FAxL546e7Ek8y2yp8adtDTPcINTxWCcC86kgyoegLAFZPLEmXAchF1S19QRmXEMm87XlNOzJTMdSAhkwyvG1VLSxbvXkrpmjhPss7oeaSLVUWWZ56qe%2BZ6NDlcEnZ0Doi7YI3i9oprK7ki91FY6JZdfFVrkecU92CAUSV14daL5yNDOdISbjHNSH3gGykVU%2BA8Yh6qRO6Uf4JgzqvQ6IRRrOndCufTcwtt%2FGwgY6pgEEpCWZGxah%2BXVErS%2F3vHFWWcDT7AQVRNrnln%2FP2QI%2FuM3LD1AkzVUzIqb4%2B1Y7kyAAn5w%2BXr4cyrRanLef3dtC8XQxvKgIgzfLqgJLAv0rS2BiCE16F2%2B7nLiUh8KHwZKF0gE%2BcO60vFn0dFNmyZf26ar0U%2FR1kDB0CXyIp%2B2VSJ2tkW63o%2B%2FXPQuJuRqCYNzvKWLOimaKwU2h59qXfOwZ%2FcEIgJJV&X-Amz-Signature=71924d46ad592bb8f51ca922d78d1e5ca5482f3bc914de5ca84e9e585b09936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
