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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBPQ2BY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCDzbigzvArezIL8nVyoWKCiNByNgBN%2FNH5V7apN5gqSQIhAI%2Fko4%2BngKc7REIuE355w9F3hmk1Ns63vQCMXtp86az5KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW%2Fiw5dIMnzFsCqUAq3AMbBBLCNd7%2BBWg295ZMIiX0XhxX8h4a%2BR%2BqTnoYlUUjpOXyqEMJ9s6H3mP9lGtkx6fkj3ybQFfaxbRrmKDcbBQ5rrLZ%2Bz%2FkbBrYm4ZDYwRPOGJORQEankOm641684uPQPQ9q9iSLLdVnjHgDmCnimhNpx5hRrbrTEe%2FBfEuN1DzEEhR4DfMMbFQpr5sG%2FjoggZsJOicGlfjDKkLCB1ywzwHpwPjz1RqGl4D%2BQWddn2fICSNcXAhBZzHJKBO68CYgVBUyOedzmQkTTJaXTxvagOH8c3PP5WNhIpbeU9ySgaK5lWNns2OXW%2F%2B5eX%2BnYj%2FWUjXQlfOPo7Ovsmo1ie4oowIa3B%2BzTIQbMFQZ%2B1kXlMmSXJydYE%2FTDQ%2BoB3ZDBkfxhocx7pKYoNX11luBo5PQjzB8ry7nKWN7bKc96nw5RX9O90Y0Qi%2BdiD%2BxgR7MSGPA2tBfGCcs9gz5D6ux5%2FpS3weirwSH7Y60rv1IbbwoJtZAlYpBRZSdnNVwsQ6gtgqjmgpeus%2BUruvfgTKQ4pr0rYxVlcZjWkZsgkC%2BBCzwwqg7VOflCuR%2BpTFrRNhnjkIezBtk3dedVpI42bRwy7ms1ggTnFcYtRbuwiFrge92mmA9H3FaC%2F5nqNy3Rl4CTDY9%2FPBBjqkAcqLeB%2F8co7Nvbkm%2Fh0m%2FpcfsLAoi2x%2BRQEhZ8j3VYDKnBTq1qUVOUqyskZWHoStiv%2FQ%2Fh4Yt6uFTUMteRTEteKFGsqI2oYddJEvIRi807dtNr5Fn1JXY0zog%2BRtRvvLgRTDdGpJ3CN%2FAP9JtDm%2FSzrxL7TuHGdtz0TXH39WfTR01woTttF3H%2BHCBjJgZ%2B8r2iApfkW0GYDH3MTcQiPJtAn58FMv&X-Amz-Signature=5192d7140a4a267a58507cd369e4c79653f88a8a4f3726b05406df6be2a51773&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBPQ2BY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCDzbigzvArezIL8nVyoWKCiNByNgBN%2FNH5V7apN5gqSQIhAI%2Fko4%2BngKc7REIuE355w9F3hmk1Ns63vQCMXtp86az5KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW%2Fiw5dIMnzFsCqUAq3AMbBBLCNd7%2BBWg295ZMIiX0XhxX8h4a%2BR%2BqTnoYlUUjpOXyqEMJ9s6H3mP9lGtkx6fkj3ybQFfaxbRrmKDcbBQ5rrLZ%2Bz%2FkbBrYm4ZDYwRPOGJORQEankOm641684uPQPQ9q9iSLLdVnjHgDmCnimhNpx5hRrbrTEe%2FBfEuN1DzEEhR4DfMMbFQpr5sG%2FjoggZsJOicGlfjDKkLCB1ywzwHpwPjz1RqGl4D%2BQWddn2fICSNcXAhBZzHJKBO68CYgVBUyOedzmQkTTJaXTxvagOH8c3PP5WNhIpbeU9ySgaK5lWNns2OXW%2F%2B5eX%2BnYj%2FWUjXQlfOPo7Ovsmo1ie4oowIa3B%2BzTIQbMFQZ%2B1kXlMmSXJydYE%2FTDQ%2BoB3ZDBkfxhocx7pKYoNX11luBo5PQjzB8ry7nKWN7bKc96nw5RX9O90Y0Qi%2BdiD%2BxgR7MSGPA2tBfGCcs9gz5D6ux5%2FpS3weirwSH7Y60rv1IbbwoJtZAlYpBRZSdnNVwsQ6gtgqjmgpeus%2BUruvfgTKQ4pr0rYxVlcZjWkZsgkC%2BBCzwwqg7VOflCuR%2BpTFrRNhnjkIezBtk3dedVpI42bRwy7ms1ggTnFcYtRbuwiFrge92mmA9H3FaC%2F5nqNy3Rl4CTDY9%2FPBBjqkAcqLeB%2F8co7Nvbkm%2Fh0m%2FpcfsLAoi2x%2BRQEhZ8j3VYDKnBTq1qUVOUqyskZWHoStiv%2FQ%2Fh4Yt6uFTUMteRTEteKFGsqI2oYddJEvIRi807dtNr5Fn1JXY0zog%2BRtRvvLgRTDdGpJ3CN%2FAP9JtDm%2FSzrxL7TuHGdtz0TXH39WfTR01woTttF3H%2BHCBjJgZ%2B8r2iApfkW0GYDH3MTcQiPJtAn58FMv&X-Amz-Signature=dba3c9409eeb81301e6fc048dd237d154672141cb09a9ac414bb1bfa04adf17c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBPQ2BY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCDzbigzvArezIL8nVyoWKCiNByNgBN%2FNH5V7apN5gqSQIhAI%2Fko4%2BngKc7REIuE355w9F3hmk1Ns63vQCMXtp86az5KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW%2Fiw5dIMnzFsCqUAq3AMbBBLCNd7%2BBWg295ZMIiX0XhxX8h4a%2BR%2BqTnoYlUUjpOXyqEMJ9s6H3mP9lGtkx6fkj3ybQFfaxbRrmKDcbBQ5rrLZ%2Bz%2FkbBrYm4ZDYwRPOGJORQEankOm641684uPQPQ9q9iSLLdVnjHgDmCnimhNpx5hRrbrTEe%2FBfEuN1DzEEhR4DfMMbFQpr5sG%2FjoggZsJOicGlfjDKkLCB1ywzwHpwPjz1RqGl4D%2BQWddn2fICSNcXAhBZzHJKBO68CYgVBUyOedzmQkTTJaXTxvagOH8c3PP5WNhIpbeU9ySgaK5lWNns2OXW%2F%2B5eX%2BnYj%2FWUjXQlfOPo7Ovsmo1ie4oowIa3B%2BzTIQbMFQZ%2B1kXlMmSXJydYE%2FTDQ%2BoB3ZDBkfxhocx7pKYoNX11luBo5PQjzB8ry7nKWN7bKc96nw5RX9O90Y0Qi%2BdiD%2BxgR7MSGPA2tBfGCcs9gz5D6ux5%2FpS3weirwSH7Y60rv1IbbwoJtZAlYpBRZSdnNVwsQ6gtgqjmgpeus%2BUruvfgTKQ4pr0rYxVlcZjWkZsgkC%2BBCzwwqg7VOflCuR%2BpTFrRNhnjkIezBtk3dedVpI42bRwy7ms1ggTnFcYtRbuwiFrge92mmA9H3FaC%2F5nqNy3Rl4CTDY9%2FPBBjqkAcqLeB%2F8co7Nvbkm%2Fh0m%2FpcfsLAoi2x%2BRQEhZ8j3VYDKnBTq1qUVOUqyskZWHoStiv%2FQ%2Fh4Yt6uFTUMteRTEteKFGsqI2oYddJEvIRi807dtNr5Fn1JXY0zog%2BRtRvvLgRTDdGpJ3CN%2FAP9JtDm%2FSzrxL7TuHGdtz0TXH39WfTR01woTttF3H%2BHCBjJgZ%2B8r2iApfkW0GYDH3MTcQiPJtAn58FMv&X-Amz-Signature=43b3c7c7c5e099d383658ebe3a9f7d9e9f475a486f025c6862a912a2239a204c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
