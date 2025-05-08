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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJQFEZH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnY0dZH0WZPupMfO5mxhqBJVbBDjl5CAIoYYEWjusnAiBBOChTgCtP8gRKbm5yIqUqK5pvxRr%2B8PWLBGsZft38wyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdb8%2FA6DMKlLtQNadKtwDhOAEw8efO7dXryTVBHo9cDSpKJkSQgD9oDGKN0MwL6odI6RR0yvSLlOm5zt9pO%2B%2Fi5fR6UbJXb7ABQCBue%2B1n5LDP1xGiq5KD8iO3tZ3z5KeaSB72ds7EVDKm9s%2BzXyIF7vW0MRo3vaLttfU%2BUO0pVK0vnWJFvR2bNd94%2FpULFvNvecYYAEbaI6WjtSmxkf1FP%2Fdbn0QqujmHzIMUQNzNuHDuGjav6JmrXRf4fcggOZJj9mai7qXls0M%2BUsxSj%2FKNIoRw%2FlTpAOS8BcbNG6%2F1iIg46n%2FxRc85IaJmw5S2EZjoi4vYHBbzvNvkDE2%2B%2Fmz52DAHdSkrrkFVCGN8N0h2fAAxP%2F%2BpKOHmynrYM%2BO0qzKDIe3UkBqdK9CnWVSK2vm1tzxq4C0JS94iPrI01ynjb3Hb6HOVk%2FLAMzAJafMcdAsUgRFlPFPDeXp7i%2FFFcFrNsyYTa8q6qg0d3yXk9DL93uyGNVsG1VOhNOQdJX3NDhsZe%2Bz5JZEH7ah%2FRhGjolqCnqdzL%2FIdPkRmqW2KiFRVlMjfZLasQ01DSl5RdF0AAUp%2BBPf7ynRxGd27hTvlTLjXDYpYRVHsjrXYdtiutD5Gc8%2B33bOR%2FUjohse64LBwFm8mGntUlniNdq3bwgwr5TxwAY6pgHGrIuKT37tX4Tuo6fMKrQDsiYRZsv8imUcgs%2FQu9YkMl1jMSn8efRl0ZChRYKb%2Febq1LfExXImw0MIb2nem9ezxL17%2Fg2QznmbcCK%2FldrCc8kD8ivLOSxZZP%2BhBIXWL1j4wqprDNx2C6JCqTND7947RxiR%2F5kjXzepUenkjaxGrpfeUPv3utbSdXJe14aGSb7ikrR9N8QVs0aFaoP4B%2F%2FCoLM7ptQn&X-Amz-Signature=fdd2dc01f642b037e40f74e19e2894b810ec512223fac6629139c0fb1256cadf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJQFEZH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnY0dZH0WZPupMfO5mxhqBJVbBDjl5CAIoYYEWjusnAiBBOChTgCtP8gRKbm5yIqUqK5pvxRr%2B8PWLBGsZft38wyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdb8%2FA6DMKlLtQNadKtwDhOAEw8efO7dXryTVBHo9cDSpKJkSQgD9oDGKN0MwL6odI6RR0yvSLlOm5zt9pO%2B%2Fi5fR6UbJXb7ABQCBue%2B1n5LDP1xGiq5KD8iO3tZ3z5KeaSB72ds7EVDKm9s%2BzXyIF7vW0MRo3vaLttfU%2BUO0pVK0vnWJFvR2bNd94%2FpULFvNvecYYAEbaI6WjtSmxkf1FP%2Fdbn0QqujmHzIMUQNzNuHDuGjav6JmrXRf4fcggOZJj9mai7qXls0M%2BUsxSj%2FKNIoRw%2FlTpAOS8BcbNG6%2F1iIg46n%2FxRc85IaJmw5S2EZjoi4vYHBbzvNvkDE2%2B%2Fmz52DAHdSkrrkFVCGN8N0h2fAAxP%2F%2BpKOHmynrYM%2BO0qzKDIe3UkBqdK9CnWVSK2vm1tzxq4C0JS94iPrI01ynjb3Hb6HOVk%2FLAMzAJafMcdAsUgRFlPFPDeXp7i%2FFFcFrNsyYTa8q6qg0d3yXk9DL93uyGNVsG1VOhNOQdJX3NDhsZe%2Bz5JZEH7ah%2FRhGjolqCnqdzL%2FIdPkRmqW2KiFRVlMjfZLasQ01DSl5RdF0AAUp%2BBPf7ynRxGd27hTvlTLjXDYpYRVHsjrXYdtiutD5Gc8%2B33bOR%2FUjohse64LBwFm8mGntUlniNdq3bwgwr5TxwAY6pgHGrIuKT37tX4Tuo6fMKrQDsiYRZsv8imUcgs%2FQu9YkMl1jMSn8efRl0ZChRYKb%2Febq1LfExXImw0MIb2nem9ezxL17%2Fg2QznmbcCK%2FldrCc8kD8ivLOSxZZP%2BhBIXWL1j4wqprDNx2C6JCqTND7947RxiR%2F5kjXzepUenkjaxGrpfeUPv3utbSdXJe14aGSb7ikrR9N8QVs0aFaoP4B%2F%2FCoLM7ptQn&X-Amz-Signature=4b4dddbe95515b8113a59b34a507a8508c0dbf551b68304bfe77cf1d0323bc97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJQFEZH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMnY0dZH0WZPupMfO5mxhqBJVbBDjl5CAIoYYEWjusnAiBBOChTgCtP8gRKbm5yIqUqK5pvxRr%2B8PWLBGsZft38wyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMdb8%2FA6DMKlLtQNadKtwDhOAEw8efO7dXryTVBHo9cDSpKJkSQgD9oDGKN0MwL6odI6RR0yvSLlOm5zt9pO%2B%2Fi5fR6UbJXb7ABQCBue%2B1n5LDP1xGiq5KD8iO3tZ3z5KeaSB72ds7EVDKm9s%2BzXyIF7vW0MRo3vaLttfU%2BUO0pVK0vnWJFvR2bNd94%2FpULFvNvecYYAEbaI6WjtSmxkf1FP%2Fdbn0QqujmHzIMUQNzNuHDuGjav6JmrXRf4fcggOZJj9mai7qXls0M%2BUsxSj%2FKNIoRw%2FlTpAOS8BcbNG6%2F1iIg46n%2FxRc85IaJmw5S2EZjoi4vYHBbzvNvkDE2%2B%2Fmz52DAHdSkrrkFVCGN8N0h2fAAxP%2F%2BpKOHmynrYM%2BO0qzKDIe3UkBqdK9CnWVSK2vm1tzxq4C0JS94iPrI01ynjb3Hb6HOVk%2FLAMzAJafMcdAsUgRFlPFPDeXp7i%2FFFcFrNsyYTa8q6qg0d3yXk9DL93uyGNVsG1VOhNOQdJX3NDhsZe%2Bz5JZEH7ah%2FRhGjolqCnqdzL%2FIdPkRmqW2KiFRVlMjfZLasQ01DSl5RdF0AAUp%2BBPf7ynRxGd27hTvlTLjXDYpYRVHsjrXYdtiutD5Gc8%2B33bOR%2FUjohse64LBwFm8mGntUlniNdq3bwgwr5TxwAY6pgHGrIuKT37tX4Tuo6fMKrQDsiYRZsv8imUcgs%2FQu9YkMl1jMSn8efRl0ZChRYKb%2Febq1LfExXImw0MIb2nem9ezxL17%2Fg2QznmbcCK%2FldrCc8kD8ivLOSxZZP%2BhBIXWL1j4wqprDNx2C6JCqTND7947RxiR%2F5kjXzepUenkjaxGrpfeUPv3utbSdXJe14aGSb7ikrR9N8QVs0aFaoP4B%2F%2FCoLM7ptQn&X-Amz-Signature=75a51a4179c38f01aa4a29ae6681171f9a27e9e2d5341690f4d2585d6e40e344&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
