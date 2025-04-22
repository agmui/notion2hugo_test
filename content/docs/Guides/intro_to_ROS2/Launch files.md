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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RXT7TG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIC0NUgI4Prq2JKMaB6J7OrM8Pds5vuPBPC0z574BIhplAiBaCDpMmw4q4uSWYBmmzGOAJEd8Bcw1uSFi%2Bs0e3IbXLCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt7ZA8DDF4QUsbJQKtwDFSWkgRsz2J5XH1OnqNMT%2F2TfT%2F6KlRKv3vTLxPxowTY7GhNNruo4BPREP8rBIC3rMeB%2FQjnhjf25C%2FktHTCPyRit6AhUa6xZUTUjiVwhhD0NLk4MDPr20dOc15P%2FLFaLPgPMTl7LHGQ1Hoz%2Fv1ZArG2agZU3sxrHeXT1ZJwLwi4OE0SW1oVnY5nuaqd64sb07haQyUGe9stpqsndL%2BdLGdnZ6V0sGCEOznHonWmvjrHal0orHJx%2BwlCb4jFozL8EJSKQKCDQxgoYRYkW9WYiQ9LbrJ%2FFXOrH9OqiXWccg23Opmb9jZkTKTD1qcGG7V%2BDkYPJ7MBRJdQN4nkuKV6gY89Wpstv8hN5lI4b5%2BaIuLyFxoZhF9eLJMHCrUQzxs9NN2pJlA5n9s87DmSwpYNH9zLkn66T1C5jdFMBKYtEdHaiJ%2BXw9CFVhHAqsBv34%2BllhC%2BpgQIQs9EHfkGDTib8Y%2BY%2FVhlCBPp5gH3RFNCBu1Pec6SMRecyL8Sfa8sIaY4zI0It3IOcM%2FlXVeN32mRN%2Bjbo%2F%2FLoCtveyE2Hd4cjBSL1GeyKe2oSfq5ssmGR%2B1icAe5%2BrG96zhlKtkYgxjGtNA60%2FT18hxxrqShT9R9VMuawDz3xZ%2Fte4SlM1z0wzMKdwAY6pgE8Bgbd721VdxcT%2FRu6SsZ4If93QwZG8ljx%2B1hOjcem5oL1YmysRcif9jmyFXR98lV26yT%2FJmCVIZxo1p8osVfigwe1Ejoz7RFXhhhJwpIRgNjJDvlLlrLURods7%2Bid%2F5yRvoZdKWlvbMzEbrNgnWbx9IWDEGW03RzB%2FuQ0F5l9n6KGctckYdLKg%2Fg33skT9G1ED1VEzAconalpyhOY83g7RqVng%2FWn&X-Amz-Signature=6a112047686eacb5565310cd137f3675dc8242cfcf5183ad9ec044c793fe54b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RXT7TG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIC0NUgI4Prq2JKMaB6J7OrM8Pds5vuPBPC0z574BIhplAiBaCDpMmw4q4uSWYBmmzGOAJEd8Bcw1uSFi%2Bs0e3IbXLCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt7ZA8DDF4QUsbJQKtwDFSWkgRsz2J5XH1OnqNMT%2F2TfT%2F6KlRKv3vTLxPxowTY7GhNNruo4BPREP8rBIC3rMeB%2FQjnhjf25C%2FktHTCPyRit6AhUa6xZUTUjiVwhhD0NLk4MDPr20dOc15P%2FLFaLPgPMTl7LHGQ1Hoz%2Fv1ZArG2agZU3sxrHeXT1ZJwLwi4OE0SW1oVnY5nuaqd64sb07haQyUGe9stpqsndL%2BdLGdnZ6V0sGCEOznHonWmvjrHal0orHJx%2BwlCb4jFozL8EJSKQKCDQxgoYRYkW9WYiQ9LbrJ%2FFXOrH9OqiXWccg23Opmb9jZkTKTD1qcGG7V%2BDkYPJ7MBRJdQN4nkuKV6gY89Wpstv8hN5lI4b5%2BaIuLyFxoZhF9eLJMHCrUQzxs9NN2pJlA5n9s87DmSwpYNH9zLkn66T1C5jdFMBKYtEdHaiJ%2BXw9CFVhHAqsBv34%2BllhC%2BpgQIQs9EHfkGDTib8Y%2BY%2FVhlCBPp5gH3RFNCBu1Pec6SMRecyL8Sfa8sIaY4zI0It3IOcM%2FlXVeN32mRN%2Bjbo%2F%2FLoCtveyE2Hd4cjBSL1GeyKe2oSfq5ssmGR%2B1icAe5%2BrG96zhlKtkYgxjGtNA60%2FT18hxxrqShT9R9VMuawDz3xZ%2Fte4SlM1z0wzMKdwAY6pgE8Bgbd721VdxcT%2FRu6SsZ4If93QwZG8ljx%2B1hOjcem5oL1YmysRcif9jmyFXR98lV26yT%2FJmCVIZxo1p8osVfigwe1Ejoz7RFXhhhJwpIRgNjJDvlLlrLURods7%2Bid%2F5yRvoZdKWlvbMzEbrNgnWbx9IWDEGW03RzB%2FuQ0F5l9n6KGctckYdLKg%2Fg33skT9G1ED1VEzAconalpyhOY83g7RqVng%2FWn&X-Amz-Signature=201d46fc2b20c394ac5aac30da2993c484aeb8f16d9a576377fe2e03bbb88169&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RXT7TG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIC0NUgI4Prq2JKMaB6J7OrM8Pds5vuPBPC0z574BIhplAiBaCDpMmw4q4uSWYBmmzGOAJEd8Bcw1uSFi%2Bs0e3IbXLCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt7ZA8DDF4QUsbJQKtwDFSWkgRsz2J5XH1OnqNMT%2F2TfT%2F6KlRKv3vTLxPxowTY7GhNNruo4BPREP8rBIC3rMeB%2FQjnhjf25C%2FktHTCPyRit6AhUa6xZUTUjiVwhhD0NLk4MDPr20dOc15P%2FLFaLPgPMTl7LHGQ1Hoz%2Fv1ZArG2agZU3sxrHeXT1ZJwLwi4OE0SW1oVnY5nuaqd64sb07haQyUGe9stpqsndL%2BdLGdnZ6V0sGCEOznHonWmvjrHal0orHJx%2BwlCb4jFozL8EJSKQKCDQxgoYRYkW9WYiQ9LbrJ%2FFXOrH9OqiXWccg23Opmb9jZkTKTD1qcGG7V%2BDkYPJ7MBRJdQN4nkuKV6gY89Wpstv8hN5lI4b5%2BaIuLyFxoZhF9eLJMHCrUQzxs9NN2pJlA5n9s87DmSwpYNH9zLkn66T1C5jdFMBKYtEdHaiJ%2BXw9CFVhHAqsBv34%2BllhC%2BpgQIQs9EHfkGDTib8Y%2BY%2FVhlCBPp5gH3RFNCBu1Pec6SMRecyL8Sfa8sIaY4zI0It3IOcM%2FlXVeN32mRN%2Bjbo%2F%2FLoCtveyE2Hd4cjBSL1GeyKe2oSfq5ssmGR%2B1icAe5%2BrG96zhlKtkYgxjGtNA60%2FT18hxxrqShT9R9VMuawDz3xZ%2Fte4SlM1z0wzMKdwAY6pgE8Bgbd721VdxcT%2FRu6SsZ4If93QwZG8ljx%2B1hOjcem5oL1YmysRcif9jmyFXR98lV26yT%2FJmCVIZxo1p8osVfigwe1Ejoz7RFXhhhJwpIRgNjJDvlLlrLURods7%2Bid%2F5yRvoZdKWlvbMzEbrNgnWbx9IWDEGW03RzB%2FuQ0F5l9n6KGctckYdLKg%2Fg33skT9G1ED1VEzAconalpyhOY83g7RqVng%2FWn&X-Amz-Signature=7145e2e556e200cd58b782599168fc622a3a8f346351da78af44b994158137d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
