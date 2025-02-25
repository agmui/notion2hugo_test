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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDATIOM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXweJlbELQSaOuiPQwF2IVT%2BTeoXX0Hme7agWL5TAIgAIgNKAYK%2FkbT%2FNxKu0wla2gUbO6M%2FpSAJUh9tsmKiKXensq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyDD5hrpbJzSd9oLSrcA%2FCpX7f8GS4fYD3O4lwuuZ%2Bmui5%2B7th9h9xwMA9qxF0Va%2BhWSbNZ1iPgEKY50VX%2FI51tppQWaywnRLcwfnve63yaZKbxPm6RTzrSSPl8QG%2BbCWPvLiEFQXUd1MwVkafxfd1jIOzjbnboHDjXKxbUGFeqKoduxpyS9YZKKwA2hNRN5c3VgdijL4VRGc8DIkoagFRvgxCaMKWcKO4Tr1MJuj2hbEQqrGbkN2k7GZXNl3gvb3sGO5ZayJ0TscoZyIfAcIbeMn1b37ALLCO3I0GkID5NRbIr3C2VEAwEHXwVld0xJqQ5K1KslbWbcxC8pijk4W4n%2FHxBxbl2EFe%2FHXW7ljYrxQR2Ec70PZ4Ljzr3R0v37DvHk7FicP%2FBvJbp2E9SkxjeEzSFiRHjoae7BGme678YhEPe9fAnQvYTOFHI8hweQPf45wPZR2%2BZkCTx13gSwoQ3mEQlTF0vBNo%2BT%2FI2orGW10ag%2Bq2p1%2FpPWB9gm5atHwSPfmouxCRjbGrbK8vG0WHz%2BjRIQKhBH2Dosi244j3%2FnfOhqbXpLNAD0II1CyPxirPw3X%2FzDfcG2bFGZBcqH8UFrNVMvCyA2xkIffozSO8mvjn01EvRUuua%2Fk2CTh%2BtaHFu03abUAX0tqf0MIOI%2FL0GOqUBmyc%2FNENi8HLW%2F%2BLesi%2BLNlqX%2FtQ61TXj2EroULgJX9JoYCHGI2jQeE0zvrUmS4LxSXrv5FBF%2FzeR3Vk696iAXZETB7LVzrFrkBaUw%2FqnOZNaV1bavHQdI2aMGYmWPnsNskiKk4dc%2BqEFDzolsVAC10LrRkc6foPnBh3HJsg52AZNwxPQlV%2BMpB83M8PdH9fVNniYhQvt8nF2QyTNa9yZHlsCsOwQ&X-Amz-Signature=6ca2433af4a3ef6c2c20dda70e3f4eaa0f9478d7aa83966041330769d30b1d57&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDATIOM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXweJlbELQSaOuiPQwF2IVT%2BTeoXX0Hme7agWL5TAIgAIgNKAYK%2FkbT%2FNxKu0wla2gUbO6M%2FpSAJUh9tsmKiKXensq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyDD5hrpbJzSd9oLSrcA%2FCpX7f8GS4fYD3O4lwuuZ%2Bmui5%2B7th9h9xwMA9qxF0Va%2BhWSbNZ1iPgEKY50VX%2FI51tppQWaywnRLcwfnve63yaZKbxPm6RTzrSSPl8QG%2BbCWPvLiEFQXUd1MwVkafxfd1jIOzjbnboHDjXKxbUGFeqKoduxpyS9YZKKwA2hNRN5c3VgdijL4VRGc8DIkoagFRvgxCaMKWcKO4Tr1MJuj2hbEQqrGbkN2k7GZXNl3gvb3sGO5ZayJ0TscoZyIfAcIbeMn1b37ALLCO3I0GkID5NRbIr3C2VEAwEHXwVld0xJqQ5K1KslbWbcxC8pijk4W4n%2FHxBxbl2EFe%2FHXW7ljYrxQR2Ec70PZ4Ljzr3R0v37DvHk7FicP%2FBvJbp2E9SkxjeEzSFiRHjoae7BGme678YhEPe9fAnQvYTOFHI8hweQPf45wPZR2%2BZkCTx13gSwoQ3mEQlTF0vBNo%2BT%2FI2orGW10ag%2Bq2p1%2FpPWB9gm5atHwSPfmouxCRjbGrbK8vG0WHz%2BjRIQKhBH2Dosi244j3%2FnfOhqbXpLNAD0II1CyPxirPw3X%2FzDfcG2bFGZBcqH8UFrNVMvCyA2xkIffozSO8mvjn01EvRUuua%2Fk2CTh%2BtaHFu03abUAX0tqf0MIOI%2FL0GOqUBmyc%2FNENi8HLW%2F%2BLesi%2BLNlqX%2FtQ61TXj2EroULgJX9JoYCHGI2jQeE0zvrUmS4LxSXrv5FBF%2FzeR3Vk696iAXZETB7LVzrFrkBaUw%2FqnOZNaV1bavHQdI2aMGYmWPnsNskiKk4dc%2BqEFDzolsVAC10LrRkc6foPnBh3HJsg52AZNwxPQlV%2BMpB83M8PdH9fVNniYhQvt8nF2QyTNa9yZHlsCsOwQ&X-Amz-Signature=f94f7df5e93d45c3c7f9efb9be8d900737fd3ca2d7ba6afcf56665d50c61324d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDATIOM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXweJlbELQSaOuiPQwF2IVT%2BTeoXX0Hme7agWL5TAIgAIgNKAYK%2FkbT%2FNxKu0wla2gUbO6M%2FpSAJUh9tsmKiKXensq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyDD5hrpbJzSd9oLSrcA%2FCpX7f8GS4fYD3O4lwuuZ%2Bmui5%2B7th9h9xwMA9qxF0Va%2BhWSbNZ1iPgEKY50VX%2FI51tppQWaywnRLcwfnve63yaZKbxPm6RTzrSSPl8QG%2BbCWPvLiEFQXUd1MwVkafxfd1jIOzjbnboHDjXKxbUGFeqKoduxpyS9YZKKwA2hNRN5c3VgdijL4VRGc8DIkoagFRvgxCaMKWcKO4Tr1MJuj2hbEQqrGbkN2k7GZXNl3gvb3sGO5ZayJ0TscoZyIfAcIbeMn1b37ALLCO3I0GkID5NRbIr3C2VEAwEHXwVld0xJqQ5K1KslbWbcxC8pijk4W4n%2FHxBxbl2EFe%2FHXW7ljYrxQR2Ec70PZ4Ljzr3R0v37DvHk7FicP%2FBvJbp2E9SkxjeEzSFiRHjoae7BGme678YhEPe9fAnQvYTOFHI8hweQPf45wPZR2%2BZkCTx13gSwoQ3mEQlTF0vBNo%2BT%2FI2orGW10ag%2Bq2p1%2FpPWB9gm5atHwSPfmouxCRjbGrbK8vG0WHz%2BjRIQKhBH2Dosi244j3%2FnfOhqbXpLNAD0II1CyPxirPw3X%2FzDfcG2bFGZBcqH8UFrNVMvCyA2xkIffozSO8mvjn01EvRUuua%2Fk2CTh%2BtaHFu03abUAX0tqf0MIOI%2FL0GOqUBmyc%2FNENi8HLW%2F%2BLesi%2BLNlqX%2FtQ61TXj2EroULgJX9JoYCHGI2jQeE0zvrUmS4LxSXrv5FBF%2FzeR3Vk696iAXZETB7LVzrFrkBaUw%2FqnOZNaV1bavHQdI2aMGYmWPnsNskiKk4dc%2BqEFDzolsVAC10LrRkc6foPnBh3HJsg52AZNwxPQlV%2BMpB83M8PdH9fVNniYhQvt8nF2QyTNa9yZHlsCsOwQ&X-Amz-Signature=c20bd303be0113392e09af3559549b639c324d398c1fc69884f0d8411153a955&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
