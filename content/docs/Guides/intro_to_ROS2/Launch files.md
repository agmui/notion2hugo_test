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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTU6LPN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYttS9eogPXxcUu7u%2FYma8fN%2FSs7cWExuZJi5B7T3seAiEAjmt4Qyr8Oq3THcERoWWpujGq2XnpVq2fXGXBDY5DgxIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHL4CUT4wnRd4Z3BICrcA5SxhEKgZBJANkVtynKIINjXp%2B%2F%2Bo34d6GIljuCR9v9204xYO6RzW4svExkG20FxYSNFmK5CPWjoUubrdFanmQIUFduIegMBuZ6oaquz05baFPqBFCsQTJ9zUXgP450YChZuY4jSS8LVJOLEnBl%2Fj%2FBpm0n1zvIkws4o%2BMhyA3J2DrH3w8uhob2XOCBi1pCc2IhfjEVZNJw5%2B5UZdjMuLJOmd2SKyg4glwAAPjHaog9NUDfufQoDPAp1KxN%2BsnJJ9ebg%2BjZvJzL7%2FSLSFJ0OVAc%2BFjI9RDtdVw0Sbe0RbIWzrRw1KMlZaR5DYf8jmyywdGTndgILYb0sSQ9c1dxPDZGxuMuzavKR3gfOqViY2ocCFjArVhsvNFOanhGVEh%2BPGLV94%2FAx8oXHCIIpJcO%2B7mXqSl9DLQinBSXFjwS3f3joqzE%2BKIFgsfOAXb3tu%2FP2ZipKwPNPVeQwyVdst3OZU653Hy2JuiRuzrIJq6YoIAKInAUBVwwvAk%2BGUWbgep%2BP9JT1Yqxz0nNDTe7TdCC2Qv489z9cjhyEBDY3ZxRTbKGzsAuW2hW9er2Un5XTcjvKt2kksDipG6g8TWgG%2F7YV%2FgRzOkIq6eVIy5M8RoT561GNWV7EpnhKkvdrk2vJMP2b9cIGOqUB6FCbPiX8YE1wm9jJkvXV%2BbZ6SN7CJr4FcEzKt%2B9aL17Tqz24%2FF0xr5F%2F3DZmQn4%2Fc4PSBfN4Y9krgCLPXN4rUp8KlKWThU09yyhcZec8pRixr5kS82ZRJh3ZPR6baJ64WUlN6vuIaNrayfe2Xs1fbPhPB%2Fc1WKkVsUTFE7aAM%2Bv2ppbI7P%2F%2B8MfUN7m2jmDxxQeFBfG3BgDEnQ2MKQookOw88aMv&X-Amz-Signature=7aae02f877908eb2a45f7a5f35df2c875b099dd46099cfc9b06ac5707282c35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTU6LPN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYttS9eogPXxcUu7u%2FYma8fN%2FSs7cWExuZJi5B7T3seAiEAjmt4Qyr8Oq3THcERoWWpujGq2XnpVq2fXGXBDY5DgxIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHL4CUT4wnRd4Z3BICrcA5SxhEKgZBJANkVtynKIINjXp%2B%2F%2Bo34d6GIljuCR9v9204xYO6RzW4svExkG20FxYSNFmK5CPWjoUubrdFanmQIUFduIegMBuZ6oaquz05baFPqBFCsQTJ9zUXgP450YChZuY4jSS8LVJOLEnBl%2Fj%2FBpm0n1zvIkws4o%2BMhyA3J2DrH3w8uhob2XOCBi1pCc2IhfjEVZNJw5%2B5UZdjMuLJOmd2SKyg4glwAAPjHaog9NUDfufQoDPAp1KxN%2BsnJJ9ebg%2BjZvJzL7%2FSLSFJ0OVAc%2BFjI9RDtdVw0Sbe0RbIWzrRw1KMlZaR5DYf8jmyywdGTndgILYb0sSQ9c1dxPDZGxuMuzavKR3gfOqViY2ocCFjArVhsvNFOanhGVEh%2BPGLV94%2FAx8oXHCIIpJcO%2B7mXqSl9DLQinBSXFjwS3f3joqzE%2BKIFgsfOAXb3tu%2FP2ZipKwPNPVeQwyVdst3OZU653Hy2JuiRuzrIJq6YoIAKInAUBVwwvAk%2BGUWbgep%2BP9JT1Yqxz0nNDTe7TdCC2Qv489z9cjhyEBDY3ZxRTbKGzsAuW2hW9er2Un5XTcjvKt2kksDipG6g8TWgG%2F7YV%2FgRzOkIq6eVIy5M8RoT561GNWV7EpnhKkvdrk2vJMP2b9cIGOqUB6FCbPiX8YE1wm9jJkvXV%2BbZ6SN7CJr4FcEzKt%2B9aL17Tqz24%2FF0xr5F%2F3DZmQn4%2Fc4PSBfN4Y9krgCLPXN4rUp8KlKWThU09yyhcZec8pRixr5kS82ZRJh3ZPR6baJ64WUlN6vuIaNrayfe2Xs1fbPhPB%2Fc1WKkVsUTFE7aAM%2Bv2ppbI7P%2F%2B8MfUN7m2jmDxxQeFBfG3BgDEnQ2MKQookOw88aMv&X-Amz-Signature=ad112b0021c777b92d1ba1ebdf4abbfd3e7eba7a9e35553281ee2497f470bc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTU6LPN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBYttS9eogPXxcUu7u%2FYma8fN%2FSs7cWExuZJi5B7T3seAiEAjmt4Qyr8Oq3THcERoWWpujGq2XnpVq2fXGXBDY5DgxIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHL4CUT4wnRd4Z3BICrcA5SxhEKgZBJANkVtynKIINjXp%2B%2F%2Bo34d6GIljuCR9v9204xYO6RzW4svExkG20FxYSNFmK5CPWjoUubrdFanmQIUFduIegMBuZ6oaquz05baFPqBFCsQTJ9zUXgP450YChZuY4jSS8LVJOLEnBl%2Fj%2FBpm0n1zvIkws4o%2BMhyA3J2DrH3w8uhob2XOCBi1pCc2IhfjEVZNJw5%2B5UZdjMuLJOmd2SKyg4glwAAPjHaog9NUDfufQoDPAp1KxN%2BsnJJ9ebg%2BjZvJzL7%2FSLSFJ0OVAc%2BFjI9RDtdVw0Sbe0RbIWzrRw1KMlZaR5DYf8jmyywdGTndgILYb0sSQ9c1dxPDZGxuMuzavKR3gfOqViY2ocCFjArVhsvNFOanhGVEh%2BPGLV94%2FAx8oXHCIIpJcO%2B7mXqSl9DLQinBSXFjwS3f3joqzE%2BKIFgsfOAXb3tu%2FP2ZipKwPNPVeQwyVdst3OZU653Hy2JuiRuzrIJq6YoIAKInAUBVwwvAk%2BGUWbgep%2BP9JT1Yqxz0nNDTe7TdCC2Qv489z9cjhyEBDY3ZxRTbKGzsAuW2hW9er2Un5XTcjvKt2kksDipG6g8TWgG%2F7YV%2FgRzOkIq6eVIy5M8RoT561GNWV7EpnhKkvdrk2vJMP2b9cIGOqUB6FCbPiX8YE1wm9jJkvXV%2BbZ6SN7CJr4FcEzKt%2B9aL17Tqz24%2FF0xr5F%2F3DZmQn4%2Fc4PSBfN4Y9krgCLPXN4rUp8KlKWThU09yyhcZec8pRixr5kS82ZRJh3ZPR6baJ64WUlN6vuIaNrayfe2Xs1fbPhPB%2Fc1WKkVsUTFE7aAM%2Bv2ppbI7P%2F%2B8MfUN7m2jmDxxQeFBfG3BgDEnQ2MKQookOw88aMv&X-Amz-Signature=36a76954679d56e3295e62dfb95dd1dbe9f5cf99b9b48b3fc98253cb4bfc8461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
