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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662355WDYU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCJCemepThMM2Gug3TjfgM03WOhEM%2F417iMj0b%2FcIWpVQIhAIVM97VK6gH62noJSXQD6Mm4jEVjuoBdkP7bKqn2rINHKv8DCGYQABoMNjM3NDIzMTgzODA1IgwtaFhg4VC5ttopkQIq3APCujStTt36C6U8a0w%2BrzAb%2FYWdvN97X4sG4AgKvi67gPFoeKwKfgoTJKM3CO15g7XvXcGJjlb0l%2FRwOWgx1ggagUsYH9hd8HY1MyJSJW1K2RVog4Mz%2FwnCpnerEwZpNilC5cd%2B5kgFx1AwVzZlUI48956vmBgKoF9YiKREGDvxb3VSqprUZQbERLH3W0naFXmUkEg4TGGkq7hjzFXFv1VRv6Ou3xnQSF6iMwSyyVb1D078TOsVrP93cCGvo%2FzkBCPNc0O64WMLKceKN5qPGc3p6AYvwQvNOBCGgmnL%2FSsXZ4lUx97ZM%2BgOPtNmX939NUm7V4e2enUfr9JfPR%2BKY6JEhZoaLKtunyZe1o%2FGiqSxYeYkd1xYiOPHI0PGrnEHyehTE0qvhZ%2BVU1I%2BEIdlBy6IO2inP1WvdjucnWBcT7r92SN%2F4B2Q6YJ%2FAbfu4KYLGeIMCg5m07rJxe369NPTNvd6bDHF18fq8BrPUzRNnp3whDyLVlwQtA4e%2Fz%2FBjEf3V4hFBzAeMr1G2nlZwlXKX2Xf5NIrtit3SBghiyjJ%2FRUggifMAWzOX6HEOoTBYqIbZzJzGnhJqowyo4Y60QxdcRs7U3B%2FQT6g39lBAii4hJkJl8hrzosExUl4%2B%2BHTbDDopMm9BjqkAXmX8aH%2FADXmHTV3VDuHTbDdMq1INwDE6G0Y50F8DFY1MsMjFecrURiYT6HR5E%2FEUOg5i%2F8RgC5KCfRNtdKxOjGToIlVSuZSbDqcnKVmJh%2FJM0FWGCgu5M%2FTc7YOIeC%2BSjQ2%2B1Tsz55pfIePaxFzvaXOFsf%2Bw3hx0YFiLH5Dxfn3osfhqOJnqv3Jd%2BqBHuQY7IIwFB4S0gP7XCQmcZra9inTbli2&X-Amz-Signature=5a2294ef4ee26759a7186cca1298ee22522b91679fabc17ce2eda71203cd20f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662355WDYU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCJCemepThMM2Gug3TjfgM03WOhEM%2F417iMj0b%2FcIWpVQIhAIVM97VK6gH62noJSXQD6Mm4jEVjuoBdkP7bKqn2rINHKv8DCGYQABoMNjM3NDIzMTgzODA1IgwtaFhg4VC5ttopkQIq3APCujStTt36C6U8a0w%2BrzAb%2FYWdvN97X4sG4AgKvi67gPFoeKwKfgoTJKM3CO15g7XvXcGJjlb0l%2FRwOWgx1ggagUsYH9hd8HY1MyJSJW1K2RVog4Mz%2FwnCpnerEwZpNilC5cd%2B5kgFx1AwVzZlUI48956vmBgKoF9YiKREGDvxb3VSqprUZQbERLH3W0naFXmUkEg4TGGkq7hjzFXFv1VRv6Ou3xnQSF6iMwSyyVb1D078TOsVrP93cCGvo%2FzkBCPNc0O64WMLKceKN5qPGc3p6AYvwQvNOBCGgmnL%2FSsXZ4lUx97ZM%2BgOPtNmX939NUm7V4e2enUfr9JfPR%2BKY6JEhZoaLKtunyZe1o%2FGiqSxYeYkd1xYiOPHI0PGrnEHyehTE0qvhZ%2BVU1I%2BEIdlBy6IO2inP1WvdjucnWBcT7r92SN%2F4B2Q6YJ%2FAbfu4KYLGeIMCg5m07rJxe369NPTNvd6bDHF18fq8BrPUzRNnp3whDyLVlwQtA4e%2Fz%2FBjEf3V4hFBzAeMr1G2nlZwlXKX2Xf5NIrtit3SBghiyjJ%2FRUggifMAWzOX6HEOoTBYqIbZzJzGnhJqowyo4Y60QxdcRs7U3B%2FQT6g39lBAii4hJkJl8hrzosExUl4%2B%2BHTbDDopMm9BjqkAXmX8aH%2FADXmHTV3VDuHTbDdMq1INwDE6G0Y50F8DFY1MsMjFecrURiYT6HR5E%2FEUOg5i%2F8RgC5KCfRNtdKxOjGToIlVSuZSbDqcnKVmJh%2FJM0FWGCgu5M%2FTc7YOIeC%2BSjQ2%2B1Tsz55pfIePaxFzvaXOFsf%2Bw3hx0YFiLH5Dxfn3osfhqOJnqv3Jd%2BqBHuQY7IIwFB4S0gP7XCQmcZra9inTbli2&X-Amz-Signature=3c4c98b1d6932e8f73079f2efd2c93b07bb1b7310d45988abb7219d88074aa7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662355WDYU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCJCemepThMM2Gug3TjfgM03WOhEM%2F417iMj0b%2FcIWpVQIhAIVM97VK6gH62noJSXQD6Mm4jEVjuoBdkP7bKqn2rINHKv8DCGYQABoMNjM3NDIzMTgzODA1IgwtaFhg4VC5ttopkQIq3APCujStTt36C6U8a0w%2BrzAb%2FYWdvN97X4sG4AgKvi67gPFoeKwKfgoTJKM3CO15g7XvXcGJjlb0l%2FRwOWgx1ggagUsYH9hd8HY1MyJSJW1K2RVog4Mz%2FwnCpnerEwZpNilC5cd%2B5kgFx1AwVzZlUI48956vmBgKoF9YiKREGDvxb3VSqprUZQbERLH3W0naFXmUkEg4TGGkq7hjzFXFv1VRv6Ou3xnQSF6iMwSyyVb1D078TOsVrP93cCGvo%2FzkBCPNc0O64WMLKceKN5qPGc3p6AYvwQvNOBCGgmnL%2FSsXZ4lUx97ZM%2BgOPtNmX939NUm7V4e2enUfr9JfPR%2BKY6JEhZoaLKtunyZe1o%2FGiqSxYeYkd1xYiOPHI0PGrnEHyehTE0qvhZ%2BVU1I%2BEIdlBy6IO2inP1WvdjucnWBcT7r92SN%2F4B2Q6YJ%2FAbfu4KYLGeIMCg5m07rJxe369NPTNvd6bDHF18fq8BrPUzRNnp3whDyLVlwQtA4e%2Fz%2FBjEf3V4hFBzAeMr1G2nlZwlXKX2Xf5NIrtit3SBghiyjJ%2FRUggifMAWzOX6HEOoTBYqIbZzJzGnhJqowyo4Y60QxdcRs7U3B%2FQT6g39lBAii4hJkJl8hrzosExUl4%2B%2BHTbDDopMm9BjqkAXmX8aH%2FADXmHTV3VDuHTbDdMq1INwDE6G0Y50F8DFY1MsMjFecrURiYT6HR5E%2FEUOg5i%2F8RgC5KCfRNtdKxOjGToIlVSuZSbDqcnKVmJh%2FJM0FWGCgu5M%2FTc7YOIeC%2BSjQ2%2B1Tsz55pfIePaxFzvaXOFsf%2Bw3hx0YFiLH5Dxfn3osfhqOJnqv3Jd%2BqBHuQY7IIwFB4S0gP7XCQmcZra9inTbli2&X-Amz-Signature=4a1882408cbbd03abbf3dd1d27d930f5889a6eaf9d860840fe0f73f130dd8efa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
