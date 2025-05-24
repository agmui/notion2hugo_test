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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYBPDA7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBeDtT88WNUQeS0uG0rpOztxVCmLcseF4DxKwZ2iB%2FimAiEA%2BlNztWpiJpBt0jyVVPEbM%2FjphQvWFEL6jaMyJ%2FIZfjIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIm%2FWip9u8ENeOJwKSrcAxJJCFpbcRPEPWXT%2Fj6tCZG8JGzg4b3Qs0Hl%2FfoeAYSA%2B%2FSh8XTIv8MyFBr1HPiNP7%2FUS0GZq9lFxX4tffv7IvfNUXiTh89NCF336No6fCZdL3QBifeH9h%2FPK4jKjXOr%2BUV2MAImfl3P%2F9lZtbTXRmfRA8q5sAfn1iRtRy%2B0f0SEQBNQsRV%2FG5jtDA%2BAfoNKo3gGk2I5Zm3LgPwtLDwZW2ujBA4PlFvQ9QWt9j1t0b%2FLbBMYiuSDaS%2BJb9jwXY73a%2B5bSvDCz9GL4aRPBspBlYpHhRSPsR3evNqv3JAfBkID5og5XPv1pyslJnx7OKcjB0XJw8Spp9fKm9Z2U%2BEJpLUDJ5qF%2FdMg8Lj7skoOO7imJJKpbX8HHaw3vAmdSOkvC0BqtzoI44gYhKrXx%2BWq1my1T0CV37DKkYhaea0ZJE3qqpNvUKOKHH8d5Ur578X1GflSyU%2FkEIMtCFtsilr3degPJp3jIbbDMv5sOBFl9MNizUvrlv6NoQ6UJ5DSE3c3kvjmNn00rUiJo9kY28Rk5t8PWOR2XpUGoh5XN%2FRqsQOt%2FnDhY1RNq68oXEp%2FzUApy7QZpwlvtUQliCr5d0CPw1EW6S4KoT%2B4g4mlx5BtiCe%2F5x44YU9luaFElwDUMMfCxsEGOqUB3aoMgnYHIyJSJgM%2FUddIW%2Fc0gV0zjrlyTyObNjb5WQ7rASXzVKS3vpPiuBDpVqvJvnq4igDrUVGn6QlmYzOIcG5Y5lY1VQLOUqcPBW9PUAs4%2BWDE0TpIHZPH1EbKwZ4pmRqmX2y3RkvdQSw653vDi1898KOGv1Z3JI3eWL2claShV3NGIZhqMj6HRSgxxwTO8RX7pDDjNA6YATo3RF%2FNpxOOKpCY&X-Amz-Signature=8b669b97eff202a5351dd583d3b3c86e51d036f13bd436f5a3d0ae7531c09a93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYBPDA7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBeDtT88WNUQeS0uG0rpOztxVCmLcseF4DxKwZ2iB%2FimAiEA%2BlNztWpiJpBt0jyVVPEbM%2FjphQvWFEL6jaMyJ%2FIZfjIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIm%2FWip9u8ENeOJwKSrcAxJJCFpbcRPEPWXT%2Fj6tCZG8JGzg4b3Qs0Hl%2FfoeAYSA%2B%2FSh8XTIv8MyFBr1HPiNP7%2FUS0GZq9lFxX4tffv7IvfNUXiTh89NCF336No6fCZdL3QBifeH9h%2FPK4jKjXOr%2BUV2MAImfl3P%2F9lZtbTXRmfRA8q5sAfn1iRtRy%2B0f0SEQBNQsRV%2FG5jtDA%2BAfoNKo3gGk2I5Zm3LgPwtLDwZW2ujBA4PlFvQ9QWt9j1t0b%2FLbBMYiuSDaS%2BJb9jwXY73a%2B5bSvDCz9GL4aRPBspBlYpHhRSPsR3evNqv3JAfBkID5og5XPv1pyslJnx7OKcjB0XJw8Spp9fKm9Z2U%2BEJpLUDJ5qF%2FdMg8Lj7skoOO7imJJKpbX8HHaw3vAmdSOkvC0BqtzoI44gYhKrXx%2BWq1my1T0CV37DKkYhaea0ZJE3qqpNvUKOKHH8d5Ur578X1GflSyU%2FkEIMtCFtsilr3degPJp3jIbbDMv5sOBFl9MNizUvrlv6NoQ6UJ5DSE3c3kvjmNn00rUiJo9kY28Rk5t8PWOR2XpUGoh5XN%2FRqsQOt%2FnDhY1RNq68oXEp%2FzUApy7QZpwlvtUQliCr5d0CPw1EW6S4KoT%2B4g4mlx5BtiCe%2F5x44YU9luaFElwDUMMfCxsEGOqUB3aoMgnYHIyJSJgM%2FUddIW%2Fc0gV0zjrlyTyObNjb5WQ7rASXzVKS3vpPiuBDpVqvJvnq4igDrUVGn6QlmYzOIcG5Y5lY1VQLOUqcPBW9PUAs4%2BWDE0TpIHZPH1EbKwZ4pmRqmX2y3RkvdQSw653vDi1898KOGv1Z3JI3eWL2claShV3NGIZhqMj6HRSgxxwTO8RX7pDDjNA6YATo3RF%2FNpxOOKpCY&X-Amz-Signature=6873634116822221910d80a6cffe786c8e206854df2a167fabfa11f4bc8ebfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYBPDA7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBeDtT88WNUQeS0uG0rpOztxVCmLcseF4DxKwZ2iB%2FimAiEA%2BlNztWpiJpBt0jyVVPEbM%2FjphQvWFEL6jaMyJ%2FIZfjIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIm%2FWip9u8ENeOJwKSrcAxJJCFpbcRPEPWXT%2Fj6tCZG8JGzg4b3Qs0Hl%2FfoeAYSA%2B%2FSh8XTIv8MyFBr1HPiNP7%2FUS0GZq9lFxX4tffv7IvfNUXiTh89NCF336No6fCZdL3QBifeH9h%2FPK4jKjXOr%2BUV2MAImfl3P%2F9lZtbTXRmfRA8q5sAfn1iRtRy%2B0f0SEQBNQsRV%2FG5jtDA%2BAfoNKo3gGk2I5Zm3LgPwtLDwZW2ujBA4PlFvQ9QWt9j1t0b%2FLbBMYiuSDaS%2BJb9jwXY73a%2B5bSvDCz9GL4aRPBspBlYpHhRSPsR3evNqv3JAfBkID5og5XPv1pyslJnx7OKcjB0XJw8Spp9fKm9Z2U%2BEJpLUDJ5qF%2FdMg8Lj7skoOO7imJJKpbX8HHaw3vAmdSOkvC0BqtzoI44gYhKrXx%2BWq1my1T0CV37DKkYhaea0ZJE3qqpNvUKOKHH8d5Ur578X1GflSyU%2FkEIMtCFtsilr3degPJp3jIbbDMv5sOBFl9MNizUvrlv6NoQ6UJ5DSE3c3kvjmNn00rUiJo9kY28Rk5t8PWOR2XpUGoh5XN%2FRqsQOt%2FnDhY1RNq68oXEp%2FzUApy7QZpwlvtUQliCr5d0CPw1EW6S4KoT%2B4g4mlx5BtiCe%2F5x44YU9luaFElwDUMMfCxsEGOqUB3aoMgnYHIyJSJgM%2FUddIW%2Fc0gV0zjrlyTyObNjb5WQ7rASXzVKS3vpPiuBDpVqvJvnq4igDrUVGn6QlmYzOIcG5Y5lY1VQLOUqcPBW9PUAs4%2BWDE0TpIHZPH1EbKwZ4pmRqmX2y3RkvdQSw653vDi1898KOGv1Z3JI3eWL2claShV3NGIZhqMj6HRSgxxwTO8RX7pDDjNA6YATo3RF%2FNpxOOKpCY&X-Amz-Signature=03744a284bbcc88c06871748958adc8f4a31d7444e449f232a87b755c8a6fa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
