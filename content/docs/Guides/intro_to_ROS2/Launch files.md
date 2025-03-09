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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326PVRXB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDMRT84LF%2BYF8%2FA4RSL1XSHcjZSZYRaklfSl33LNPdwgQIgdxT9nS4ApVTrLTGXT7IRp0X2OtBgveflMMzPa44JrV4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPp4hu0T8aNLWLc1PCrcA685LzWbejQcoc%2FKtxjSWMddzsqgkHSHTHWWjblBTnl5b9bSW7tNzFNePRf%2F%2BrIJdvRrgE1LjDM6NbTohKcoRVWkfRe5eJgI3AFl3uJWedmWQlT3cBvqRd6vOknrGhK68t7t7DzXdnrTt06mf6khuCtP4sl1%2BJ9AZ1VfVEWh8ZNNQP1urgVK%2FKL%2FeGPPqz9aFFTTmIzdcZAytAyD0N5LSFUQ6doVuTvt8e2YwsPeyoa8T6b0lGe9zSg7diDg%2FR1gMAcPDJuq8TebPaJdZILuHPuxOdrXzjq2M%2Bmtgm6BIIg2aNJ%2BwA%2BT0yZmHulT4Ua5YcCSvlLf%2FOMdw6pcRyWq%2BdaPtNvyIcD18PVByp2HUCahcvwTZPdx8gbO8bx0STSuvZX40Hc7qs8SEeqwNbhYAggEtrRM9%2BVy2S03b8Ds%2BjQcwBYZ%2F6VHqGpHNf8fdRZ6EpKkBvSlNGZE97oBKWOgtynzUpBBks0Rrp4caTQlnpeaf0PwizUOe36VcNEhlYY7Ky8yzZ5QeAp2I0aw023AG%2BqvPugdIR8HZzHD60kDwsCtU7l17%2FI4v0Ycvy9Z6gqc%2BvY%2B229P4Tp40%2B8QXuav4mveOObX7nPtgR8o%2BjDqDrtMELWH27JHvQO2VBBqMJSLtL4GOqUBapc0xctZOn0eQ17WqwNnr1DXGGh5uvjG9SEDVXiJdiIrvLwolJmoeB6g0EIa58NSU5DAOe56ASsoV4FQWBBcPHDA%2Fxp3Ui9nGW4MJ8mrv1yN8a9hRnJgHzaNovj8eNvpTjJZMzxjcevsirdODDch%2B9XkiR9fE9B7prtQ5DdirLj%2F%2FPYREqLf7wSBNfPOoyzqNKmvum%2FRudC9kEL4nC%2FzdF6X0xzM&X-Amz-Signature=ba401469774e2ae10d65e57a21ca2a99586eb9fca58dc3a76393bc285e442571&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326PVRXB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDMRT84LF%2BYF8%2FA4RSL1XSHcjZSZYRaklfSl33LNPdwgQIgdxT9nS4ApVTrLTGXT7IRp0X2OtBgveflMMzPa44JrV4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPp4hu0T8aNLWLc1PCrcA685LzWbejQcoc%2FKtxjSWMddzsqgkHSHTHWWjblBTnl5b9bSW7tNzFNePRf%2F%2BrIJdvRrgE1LjDM6NbTohKcoRVWkfRe5eJgI3AFl3uJWedmWQlT3cBvqRd6vOknrGhK68t7t7DzXdnrTt06mf6khuCtP4sl1%2BJ9AZ1VfVEWh8ZNNQP1urgVK%2FKL%2FeGPPqz9aFFTTmIzdcZAytAyD0N5LSFUQ6doVuTvt8e2YwsPeyoa8T6b0lGe9zSg7diDg%2FR1gMAcPDJuq8TebPaJdZILuHPuxOdrXzjq2M%2Bmtgm6BIIg2aNJ%2BwA%2BT0yZmHulT4Ua5YcCSvlLf%2FOMdw6pcRyWq%2BdaPtNvyIcD18PVByp2HUCahcvwTZPdx8gbO8bx0STSuvZX40Hc7qs8SEeqwNbhYAggEtrRM9%2BVy2S03b8Ds%2BjQcwBYZ%2F6VHqGpHNf8fdRZ6EpKkBvSlNGZE97oBKWOgtynzUpBBks0Rrp4caTQlnpeaf0PwizUOe36VcNEhlYY7Ky8yzZ5QeAp2I0aw023AG%2BqvPugdIR8HZzHD60kDwsCtU7l17%2FI4v0Ycvy9Z6gqc%2BvY%2B229P4Tp40%2B8QXuav4mveOObX7nPtgR8o%2BjDqDrtMELWH27JHvQO2VBBqMJSLtL4GOqUBapc0xctZOn0eQ17WqwNnr1DXGGh5uvjG9SEDVXiJdiIrvLwolJmoeB6g0EIa58NSU5DAOe56ASsoV4FQWBBcPHDA%2Fxp3Ui9nGW4MJ8mrv1yN8a9hRnJgHzaNovj8eNvpTjJZMzxjcevsirdODDch%2B9XkiR9fE9B7prtQ5DdirLj%2F%2FPYREqLf7wSBNfPOoyzqNKmvum%2FRudC9kEL4nC%2FzdF6X0xzM&X-Amz-Signature=69c1f5ffa45056bfb4a7937ab1df3790709c9bee530e6750a3f3222f27c8446f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326PVRXB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDMRT84LF%2BYF8%2FA4RSL1XSHcjZSZYRaklfSl33LNPdwgQIgdxT9nS4ApVTrLTGXT7IRp0X2OtBgveflMMzPa44JrV4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPp4hu0T8aNLWLc1PCrcA685LzWbejQcoc%2FKtxjSWMddzsqgkHSHTHWWjblBTnl5b9bSW7tNzFNePRf%2F%2BrIJdvRrgE1LjDM6NbTohKcoRVWkfRe5eJgI3AFl3uJWedmWQlT3cBvqRd6vOknrGhK68t7t7DzXdnrTt06mf6khuCtP4sl1%2BJ9AZ1VfVEWh8ZNNQP1urgVK%2FKL%2FeGPPqz9aFFTTmIzdcZAytAyD0N5LSFUQ6doVuTvt8e2YwsPeyoa8T6b0lGe9zSg7diDg%2FR1gMAcPDJuq8TebPaJdZILuHPuxOdrXzjq2M%2Bmtgm6BIIg2aNJ%2BwA%2BT0yZmHulT4Ua5YcCSvlLf%2FOMdw6pcRyWq%2BdaPtNvyIcD18PVByp2HUCahcvwTZPdx8gbO8bx0STSuvZX40Hc7qs8SEeqwNbhYAggEtrRM9%2BVy2S03b8Ds%2BjQcwBYZ%2F6VHqGpHNf8fdRZ6EpKkBvSlNGZE97oBKWOgtynzUpBBks0Rrp4caTQlnpeaf0PwizUOe36VcNEhlYY7Ky8yzZ5QeAp2I0aw023AG%2BqvPugdIR8HZzHD60kDwsCtU7l17%2FI4v0Ycvy9Z6gqc%2BvY%2B229P4Tp40%2B8QXuav4mveOObX7nPtgR8o%2BjDqDrtMELWH27JHvQO2VBBqMJSLtL4GOqUBapc0xctZOn0eQ17WqwNnr1DXGGh5uvjG9SEDVXiJdiIrvLwolJmoeB6g0EIa58NSU5DAOe56ASsoV4FQWBBcPHDA%2Fxp3Ui9nGW4MJ8mrv1yN8a9hRnJgHzaNovj8eNvpTjJZMzxjcevsirdODDch%2B9XkiR9fE9B7prtQ5DdirLj%2F%2FPYREqLf7wSBNfPOoyzqNKmvum%2FRudC9kEL4nC%2FzdF6X0xzM&X-Amz-Signature=e53025fd8202850c866f49db97e0bbe147d01da8b43cbcf3280c253e2e554828&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
