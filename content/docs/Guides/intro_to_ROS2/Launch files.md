---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIXSRXH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDHnU2%2BK2dQTnlh1xSalBmavAFSNrU2bc2yK0vA1%2BtscAiAqTWub0ESPwRhmOvPuGdBKesCcAJq%2FQlF8H9L95F2cLCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4Qpzhm0%2FO1KZN1iDKtwDQodAiHqx5yUx8WLAgyXrhhKyWuPyfbXDWbGsnn9KKDjHkTOcyVA6hm%2FtY78ijce0qyj8VnkLdAI5lVZjXfQymvdyg55Kaq%2FUb%2F8H0WdKh8iTEejlyWBdEZLkZ06XvT%2B4ONuATMWnLC8mGpzwk7Dj1uSEmkALSfCzQXTqa%2BBl6GtHy6OxM2Rbl%2FpMwItNhBSx84nZVS0CTtCRww6ACfBYuwzBjIUEyCvlzVLvmA0E6LKadcReffvBNXXZiiZwRwXu1UtVuCaMvorNhI4GNNlxOi4oxw3lvOO6NFxQ3pbOkZmCyDlLCZmNhXPjFULEQVt5Ifp%2F7iYVfzr0dbcmQA8f9ri7iNRA6PiFgSP0tsKu0mh%2FzMoIkmpungmQ8nSUx3rUeJ7BL2duOtlR%2BUaCGAy4oAxV502ahDahDmKoigWKH6b87P9bW5NDFgQ1nnJEmSvUM8r5q%2F5PyTAMWRoqeGMZxvo10qSXkZWhLZP4Zs%2B%2Fm0AwtofIox%2BesUa66jkxya8P%2FbGTzDIHJ55qOTzfaYDzIWK2PX0VrOgBcEdJ0y870I6jNmvso1KLwyCQYylq8xMvlb3MciqN7dtn5Um%2FSqcucpvHI14EcuwYK9GcYKtBPs7RJD7MY%2FgTEvWDorMw27qWxAY6pgFImGRlwsdJwhXcWygaBez2m7nIOve3r5E39rTNQxmhqMRRvqrY3VFIITu%2F%2Bvo3vgy6KIzFD%2BzAN2P2xVOBmLxUcUqF1lYODfF44C2IEdDrTl4TIpemO06wGedg%2BSk1zQGSDCpTFtODBcYhj1fFV5gb%2Bvqlp%2F2r4mMIDsyO%2FhCr%2FnM8ZggLjjZHvF%2FtsDRlKDmUNo%2BzJ%2Fb5XglXhdxWExu2HOLsAnZn&X-Amz-Signature=5d832617b9afa8be44e1b84fd3d5f0dc1d4fc4282a68c9e168e50a5aae6c9c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIXSRXH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDHnU2%2BK2dQTnlh1xSalBmavAFSNrU2bc2yK0vA1%2BtscAiAqTWub0ESPwRhmOvPuGdBKesCcAJq%2FQlF8H9L95F2cLCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4Qpzhm0%2FO1KZN1iDKtwDQodAiHqx5yUx8WLAgyXrhhKyWuPyfbXDWbGsnn9KKDjHkTOcyVA6hm%2FtY78ijce0qyj8VnkLdAI5lVZjXfQymvdyg55Kaq%2FUb%2F8H0WdKh8iTEejlyWBdEZLkZ06XvT%2B4ONuATMWnLC8mGpzwk7Dj1uSEmkALSfCzQXTqa%2BBl6GtHy6OxM2Rbl%2FpMwItNhBSx84nZVS0CTtCRww6ACfBYuwzBjIUEyCvlzVLvmA0E6LKadcReffvBNXXZiiZwRwXu1UtVuCaMvorNhI4GNNlxOi4oxw3lvOO6NFxQ3pbOkZmCyDlLCZmNhXPjFULEQVt5Ifp%2F7iYVfzr0dbcmQA8f9ri7iNRA6PiFgSP0tsKu0mh%2FzMoIkmpungmQ8nSUx3rUeJ7BL2duOtlR%2BUaCGAy4oAxV502ahDahDmKoigWKH6b87P9bW5NDFgQ1nnJEmSvUM8r5q%2F5PyTAMWRoqeGMZxvo10qSXkZWhLZP4Zs%2B%2Fm0AwtofIox%2BesUa66jkxya8P%2FbGTzDIHJ55qOTzfaYDzIWK2PX0VrOgBcEdJ0y870I6jNmvso1KLwyCQYylq8xMvlb3MciqN7dtn5Um%2FSqcucpvHI14EcuwYK9GcYKtBPs7RJD7MY%2FgTEvWDorMw27qWxAY6pgFImGRlwsdJwhXcWygaBez2m7nIOve3r5E39rTNQxmhqMRRvqrY3VFIITu%2F%2Bvo3vgy6KIzFD%2BzAN2P2xVOBmLxUcUqF1lYODfF44C2IEdDrTl4TIpemO06wGedg%2BSk1zQGSDCpTFtODBcYhj1fFV5gb%2Bvqlp%2F2r4mMIDsyO%2FhCr%2FnM8ZggLjjZHvF%2FtsDRlKDmUNo%2BzJ%2Fb5XglXhdxWExu2HOLsAnZn&X-Amz-Signature=3e9680435639a12feb6d57e6ece09b5e2ecd39f336d546e71541265b1a0e9f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIXSRXH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDHnU2%2BK2dQTnlh1xSalBmavAFSNrU2bc2yK0vA1%2BtscAiAqTWub0ESPwRhmOvPuGdBKesCcAJq%2FQlF8H9L95F2cLCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM4Qpzhm0%2FO1KZN1iDKtwDQodAiHqx5yUx8WLAgyXrhhKyWuPyfbXDWbGsnn9KKDjHkTOcyVA6hm%2FtY78ijce0qyj8VnkLdAI5lVZjXfQymvdyg55Kaq%2FUb%2F8H0WdKh8iTEejlyWBdEZLkZ06XvT%2B4ONuATMWnLC8mGpzwk7Dj1uSEmkALSfCzQXTqa%2BBl6GtHy6OxM2Rbl%2FpMwItNhBSx84nZVS0CTtCRww6ACfBYuwzBjIUEyCvlzVLvmA0E6LKadcReffvBNXXZiiZwRwXu1UtVuCaMvorNhI4GNNlxOi4oxw3lvOO6NFxQ3pbOkZmCyDlLCZmNhXPjFULEQVt5Ifp%2F7iYVfzr0dbcmQA8f9ri7iNRA6PiFgSP0tsKu0mh%2FzMoIkmpungmQ8nSUx3rUeJ7BL2duOtlR%2BUaCGAy4oAxV502ahDahDmKoigWKH6b87P9bW5NDFgQ1nnJEmSvUM8r5q%2F5PyTAMWRoqeGMZxvo10qSXkZWhLZP4Zs%2B%2Fm0AwtofIox%2BesUa66jkxya8P%2FbGTzDIHJ55qOTzfaYDzIWK2PX0VrOgBcEdJ0y870I6jNmvso1KLwyCQYylq8xMvlb3MciqN7dtn5Um%2FSqcucpvHI14EcuwYK9GcYKtBPs7RJD7MY%2FgTEvWDorMw27qWxAY6pgFImGRlwsdJwhXcWygaBez2m7nIOve3r5E39rTNQxmhqMRRvqrY3VFIITu%2F%2Bvo3vgy6KIzFD%2BzAN2P2xVOBmLxUcUqF1lYODfF44C2IEdDrTl4TIpemO06wGedg%2BSk1zQGSDCpTFtODBcYhj1fFV5gb%2Bvqlp%2F2r4mMIDsyO%2FhCr%2FnM8ZggLjjZHvF%2FtsDRlKDmUNo%2BzJ%2Fb5XglXhdxWExu2HOLsAnZn&X-Amz-Signature=2df7cc3105b2d7cfe7ec36b606d1bfa46139691847e1032227e47e3f06177d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
