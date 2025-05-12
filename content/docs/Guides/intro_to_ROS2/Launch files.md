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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCIPQGV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH0un3SI8aLeH0V0cz7mfkaKhFcwek8wMKG67cGJlnT0AiEAjSy0JwpBuylsAbZ7J8mQ9MjwU95%2FkB56l%2BaOsVa2DAsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM0tlcY4nFp3CL0gSrcA%2BypW6VDSzG%2FtKqFeprP1zNVoD1ZOaDO59QuRjGAZBMMfNXPZciPFH1AoXxnfcMA9PfMgbp9UDhG2EdhRuY0GJtf6XbWcHqE7wU%2F4dHLnVFkzGSCN3csTZiDa%2FN1Xj%2BIhHjbKnu6dTVVF6URJIER1fDtcSH3wjL4%2BqXwz8Fjdm1ikL63NX9FcJYY2mc%2BOIm07Gp6zSXG3DjnaG1BXfKlwbCeHYWI1xc%2BJ6xMYliDNx6QaXua6d%2BRdF40SwAFIk4GNB9AGPr2%2Br3mU3D6lLUSdWO3BL1TYG0Try6R%2BGpHkpZZDoKyXNLW0tU9Ji7ab4h5huChAMLAZlIVRNY4B4%2BxcwSaHZ%2F0EIpljJDzl90QdEWDdp0gVCQsKCjluOhy%2FmWmjuCVy7Cf0kGm7PJvnjKDmpzTZSCCWbu5oOpW05O7ncDEJMgVObDyHr1YF8fRrJoOvhaMfVmpX%2FQyrXxTqwYaAAhB5GD5w%2BmaTwsvni4jn01umm2ojmgzZTWfQRswdqT3xtEfGP0TH4zNvVHtMEbvL9EDAZAMxHzpknUvJUgP%2F6PmPTn8G6in318eJ71uPR37figDeTXwEP5RxOGT74dWHg0X%2Fvo01bzyCs8HvENt0jD8NoZ2cRH945yEjEsCMPWDiMEGOqUBhrC2bvelD44fBoFyaSOUT6ciHZ%2F2RFoZ%2Fd0SgxlXqfDaTfhiT8iXnd6ZUhp8CppNFslFeHNTiZJatrEGj9WAmG3cyBkaVAAxY2Pdvpch%2BZU1QeGVqiu0fwUTdw9VjPcCSREmoVOJ4mkxdx92Ec1GsQhRZGtOov5EeZGPV8TCVhdqcY7mXw62kz4oNjahf1IcbK%2BTu%2B1b9pgSIVMwJs1WA4edvYAo&X-Amz-Signature=e8b9fb278e9e38bc9265b1bcec2ddc417b445cdac43ba1a9da772cd432efbfa5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCIPQGV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH0un3SI8aLeH0V0cz7mfkaKhFcwek8wMKG67cGJlnT0AiEAjSy0JwpBuylsAbZ7J8mQ9MjwU95%2FkB56l%2BaOsVa2DAsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM0tlcY4nFp3CL0gSrcA%2BypW6VDSzG%2FtKqFeprP1zNVoD1ZOaDO59QuRjGAZBMMfNXPZciPFH1AoXxnfcMA9PfMgbp9UDhG2EdhRuY0GJtf6XbWcHqE7wU%2F4dHLnVFkzGSCN3csTZiDa%2FN1Xj%2BIhHjbKnu6dTVVF6URJIER1fDtcSH3wjL4%2BqXwz8Fjdm1ikL63NX9FcJYY2mc%2BOIm07Gp6zSXG3DjnaG1BXfKlwbCeHYWI1xc%2BJ6xMYliDNx6QaXua6d%2BRdF40SwAFIk4GNB9AGPr2%2Br3mU3D6lLUSdWO3BL1TYG0Try6R%2BGpHkpZZDoKyXNLW0tU9Ji7ab4h5huChAMLAZlIVRNY4B4%2BxcwSaHZ%2F0EIpljJDzl90QdEWDdp0gVCQsKCjluOhy%2FmWmjuCVy7Cf0kGm7PJvnjKDmpzTZSCCWbu5oOpW05O7ncDEJMgVObDyHr1YF8fRrJoOvhaMfVmpX%2FQyrXxTqwYaAAhB5GD5w%2BmaTwsvni4jn01umm2ojmgzZTWfQRswdqT3xtEfGP0TH4zNvVHtMEbvL9EDAZAMxHzpknUvJUgP%2F6PmPTn8G6in318eJ71uPR37figDeTXwEP5RxOGT74dWHg0X%2Fvo01bzyCs8HvENt0jD8NoZ2cRH945yEjEsCMPWDiMEGOqUBhrC2bvelD44fBoFyaSOUT6ciHZ%2F2RFoZ%2Fd0SgxlXqfDaTfhiT8iXnd6ZUhp8CppNFslFeHNTiZJatrEGj9WAmG3cyBkaVAAxY2Pdvpch%2BZU1QeGVqiu0fwUTdw9VjPcCSREmoVOJ4mkxdx92Ec1GsQhRZGtOov5EeZGPV8TCVhdqcY7mXw62kz4oNjahf1IcbK%2BTu%2B1b9pgSIVMwJs1WA4edvYAo&X-Amz-Signature=19d0086d931ac2b424a1b41fe52770df59997f8a5ef9100f0c8e2c82cc433550&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCIPQGV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH0un3SI8aLeH0V0cz7mfkaKhFcwek8wMKG67cGJlnT0AiEAjSy0JwpBuylsAbZ7J8mQ9MjwU95%2FkB56l%2BaOsVa2DAsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM0tlcY4nFp3CL0gSrcA%2BypW6VDSzG%2FtKqFeprP1zNVoD1ZOaDO59QuRjGAZBMMfNXPZciPFH1AoXxnfcMA9PfMgbp9UDhG2EdhRuY0GJtf6XbWcHqE7wU%2F4dHLnVFkzGSCN3csTZiDa%2FN1Xj%2BIhHjbKnu6dTVVF6URJIER1fDtcSH3wjL4%2BqXwz8Fjdm1ikL63NX9FcJYY2mc%2BOIm07Gp6zSXG3DjnaG1BXfKlwbCeHYWI1xc%2BJ6xMYliDNx6QaXua6d%2BRdF40SwAFIk4GNB9AGPr2%2Br3mU3D6lLUSdWO3BL1TYG0Try6R%2BGpHkpZZDoKyXNLW0tU9Ji7ab4h5huChAMLAZlIVRNY4B4%2BxcwSaHZ%2F0EIpljJDzl90QdEWDdp0gVCQsKCjluOhy%2FmWmjuCVy7Cf0kGm7PJvnjKDmpzTZSCCWbu5oOpW05O7ncDEJMgVObDyHr1YF8fRrJoOvhaMfVmpX%2FQyrXxTqwYaAAhB5GD5w%2BmaTwsvni4jn01umm2ojmgzZTWfQRswdqT3xtEfGP0TH4zNvVHtMEbvL9EDAZAMxHzpknUvJUgP%2F6PmPTn8G6in318eJ71uPR37figDeTXwEP5RxOGT74dWHg0X%2Fvo01bzyCs8HvENt0jD8NoZ2cRH945yEjEsCMPWDiMEGOqUBhrC2bvelD44fBoFyaSOUT6ciHZ%2F2RFoZ%2Fd0SgxlXqfDaTfhiT8iXnd6ZUhp8CppNFslFeHNTiZJatrEGj9WAmG3cyBkaVAAxY2Pdvpch%2BZU1QeGVqiu0fwUTdw9VjPcCSREmoVOJ4mkxdx92Ec1GsQhRZGtOov5EeZGPV8TCVhdqcY7mXw62kz4oNjahf1IcbK%2BTu%2B1b9pgSIVMwJs1WA4edvYAo&X-Amz-Signature=270a0ac2cd839b323d2fff5496a989f9e8b325cb62e7a2a0b49cca9fc29b339f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
