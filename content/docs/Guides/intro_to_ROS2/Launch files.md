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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOU47L5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDs5wZ9XbCW2rusB1TkpTRFG607JMb9Kv5vQMcEy5IfoQIhANMSILdW2weYyp4EjOc2MkGeMuAwE494szp48%2B1B5v3vKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHLsMY4DnSh1XnP4q3ANrQq2FnSmOQNuOFC5qp4UNC9FG%2Ff5SgIOGDuiexCLQ63sa%2F1L%2B4ovdVsSyP%2BanRONAouJYgyjFVoZECO%2B3j6x02LeqKXK7wxDw4E192Em1E%2BfrUZqa12ZAvwtN7SnITgzriC3i9t4sKCXMVnyM%2FMLdVYXbv9yiKsZardo1j31wZemndLiB3GyVTAM8I8aRzGJ3dKfD70b5ZKKB3tbJjVOLe%2Fx9bkInVLdXuww2wsc5bBy%2BD4X7gDx7BPnPWCbKNIyNVNWAgsVBx7Q0JktPVj%2F1IKsE3RrM0SrqLetpF5zBciLw%2FfWDnY%2BT1HXwki42JyYpmd1enbJ7%2BnOf6vax4wmnxoBdX9HGtnHGKtZyEX2zGewYueodwKdznFJn65QQ9QL42wDBvGhOdWzy%2Fop1j9bFgaRRK%2Fh4HRXA9dBSSl0sZ2ez9%2B5iA%2BCL25iwkpH8VAuqFO%2FGX5WEdUvANfeyxocSnRomGf4ah5629jB4gjEGHuNNJo6dpuKuuIuKu53qzpuDTyfMAxPgTk6RNNSPG709sQ1omzQy7tmlfTsQES7VtlQpfe45yBylgB7mXKh837nca8yRWdYnVqcKZ5MMsdEgHR6%2FIlblOkXlheqx2xGlQ%2BT7Vb4PcN0c6AmOGzC1k%2FjBBjqkAYG00rzh3j%2BQU8MAQxmqa9jVZ%2FOT9YYIxE6MStKJmUqCkdrofPLsO3Fue95EjldipZ8tKeDcIEoeyd2jkOXVlBDTnKMfrIHRInhsWpccxzo%2FJ1erGKmZtCr2CECisnOnYrRRJr2Ye5r6ra2T6BTHy92NvLB1mDEZIkvNdabaJglwZDD8%2F8p9kUzIjB0dOkZDgGEE6xp5VuxoPH70cypm%2FFVyqGtA&X-Amz-Signature=dae4339cf743a5e6002af5ffc99e4deeafcbd970b076db8d942bc7caa5c83646&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOU47L5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDs5wZ9XbCW2rusB1TkpTRFG607JMb9Kv5vQMcEy5IfoQIhANMSILdW2weYyp4EjOc2MkGeMuAwE494szp48%2B1B5v3vKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHLsMY4DnSh1XnP4q3ANrQq2FnSmOQNuOFC5qp4UNC9FG%2Ff5SgIOGDuiexCLQ63sa%2F1L%2B4ovdVsSyP%2BanRONAouJYgyjFVoZECO%2B3j6x02LeqKXK7wxDw4E192Em1E%2BfrUZqa12ZAvwtN7SnITgzriC3i9t4sKCXMVnyM%2FMLdVYXbv9yiKsZardo1j31wZemndLiB3GyVTAM8I8aRzGJ3dKfD70b5ZKKB3tbJjVOLe%2Fx9bkInVLdXuww2wsc5bBy%2BD4X7gDx7BPnPWCbKNIyNVNWAgsVBx7Q0JktPVj%2F1IKsE3RrM0SrqLetpF5zBciLw%2FfWDnY%2BT1HXwki42JyYpmd1enbJ7%2BnOf6vax4wmnxoBdX9HGtnHGKtZyEX2zGewYueodwKdznFJn65QQ9QL42wDBvGhOdWzy%2Fop1j9bFgaRRK%2Fh4HRXA9dBSSl0sZ2ez9%2B5iA%2BCL25iwkpH8VAuqFO%2FGX5WEdUvANfeyxocSnRomGf4ah5629jB4gjEGHuNNJo6dpuKuuIuKu53qzpuDTyfMAxPgTk6RNNSPG709sQ1omzQy7tmlfTsQES7VtlQpfe45yBylgB7mXKh837nca8yRWdYnVqcKZ5MMsdEgHR6%2FIlblOkXlheqx2xGlQ%2BT7Vb4PcN0c6AmOGzC1k%2FjBBjqkAYG00rzh3j%2BQU8MAQxmqa9jVZ%2FOT9YYIxE6MStKJmUqCkdrofPLsO3Fue95EjldipZ8tKeDcIEoeyd2jkOXVlBDTnKMfrIHRInhsWpccxzo%2FJ1erGKmZtCr2CECisnOnYrRRJr2Ye5r6ra2T6BTHy92NvLB1mDEZIkvNdabaJglwZDD8%2F8p9kUzIjB0dOkZDgGEE6xp5VuxoPH70cypm%2FFVyqGtA&X-Amz-Signature=1703ec424c7dc655ae63180a22ca8d3b49227a2bbcc0cafe072b53ebca93bdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOU47L5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDs5wZ9XbCW2rusB1TkpTRFG607JMb9Kv5vQMcEy5IfoQIhANMSILdW2weYyp4EjOc2MkGeMuAwE494szp48%2B1B5v3vKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHLsMY4DnSh1XnP4q3ANrQq2FnSmOQNuOFC5qp4UNC9FG%2Ff5SgIOGDuiexCLQ63sa%2F1L%2B4ovdVsSyP%2BanRONAouJYgyjFVoZECO%2B3j6x02LeqKXK7wxDw4E192Em1E%2BfrUZqa12ZAvwtN7SnITgzriC3i9t4sKCXMVnyM%2FMLdVYXbv9yiKsZardo1j31wZemndLiB3GyVTAM8I8aRzGJ3dKfD70b5ZKKB3tbJjVOLe%2Fx9bkInVLdXuww2wsc5bBy%2BD4X7gDx7BPnPWCbKNIyNVNWAgsVBx7Q0JktPVj%2F1IKsE3RrM0SrqLetpF5zBciLw%2FfWDnY%2BT1HXwki42JyYpmd1enbJ7%2BnOf6vax4wmnxoBdX9HGtnHGKtZyEX2zGewYueodwKdznFJn65QQ9QL42wDBvGhOdWzy%2Fop1j9bFgaRRK%2Fh4HRXA9dBSSl0sZ2ez9%2B5iA%2BCL25iwkpH8VAuqFO%2FGX5WEdUvANfeyxocSnRomGf4ah5629jB4gjEGHuNNJo6dpuKuuIuKu53qzpuDTyfMAxPgTk6RNNSPG709sQ1omzQy7tmlfTsQES7VtlQpfe45yBylgB7mXKh837nca8yRWdYnVqcKZ5MMsdEgHR6%2FIlblOkXlheqx2xGlQ%2BT7Vb4PcN0c6AmOGzC1k%2FjBBjqkAYG00rzh3j%2BQU8MAQxmqa9jVZ%2FOT9YYIxE6MStKJmUqCkdrofPLsO3Fue95EjldipZ8tKeDcIEoeyd2jkOXVlBDTnKMfrIHRInhsWpccxzo%2FJ1erGKmZtCr2CECisnOnYrRRJr2Ye5r6ra2T6BTHy92NvLB1mDEZIkvNdabaJglwZDD8%2F8p9kUzIjB0dOkZDgGEE6xp5VuxoPH70cypm%2FFVyqGtA&X-Amz-Signature=1ec62078e0b54b55be58f06bae70d3edf69a6cd66a187f8bcd415f7252ad56ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
