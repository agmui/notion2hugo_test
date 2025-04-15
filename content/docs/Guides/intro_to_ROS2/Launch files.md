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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXSFXU5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCf63vIe0f9vaIXuvTqrLislkuURYjAsjL9mrmuOXDugIgG8vs032Blu3d3Lxq4f73wCSONUEa59GGHUVzxGniSocq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJq4p8ouhZlXyf4SGSrcA9e2VCB3tzODCyHNlf5cW7JCxVuZ%2BjgqtMYRwuRtZah7k0aeHGYSios8b3ikFTTRvM9BBKIwsDmHs1aLlZZK3%2BaveBWIAB%2FPvqdzxGhn2MFzgxuTla2q7BsRAlz5M%2BFRZamUiJcRJVkjqHhqyo2BYGrR2xfhhuV9h5%2FlNEFPYE%2B5DXztomsuAavTo%2ByvNYWCLI1JJXLR3Gj8E6YTTFcNEUcqx16XvqixHwj7%2B1jg%2B57uWhOppjyR2jG4JB%2Fa%2FoP6fhaG9JO%2FTW08ye9dP0fJ6zdq%2FhoUG8Y2DDGX91s7rzfyucDf1uPPlvfXyhEJWuJWTvWAu%2FjPOh7eUeitCnlUOMIreGvzH1rsE3ZeEtM5e86hAs1%2B6kfwxsiz1V%2F3H4SPJdrr8WU5LzoSA8eOHsQ4yfePlKBAcxM6i9bsLAt4xzUzL4iR0hwbtnCpPG%2BbWY6lrkbo%2Bi6xaTju%2FLyLaEvLBlK1sw9ILpg6ckdUlzwvuYLl2rjHDyIxeqY23gQ7jk%2BzuDBV0XNlOBJr2PU%2FZocd3T0BU5abxeUeOrTNVBhFn123g7YsGHXBp4R%2FAM0F8ZAmWzuIEcSRY0SATbDwwImiwdGYfdukIGSnHUDhFvbIKW1N3CuCX3BKib%2BkEX61MNO1%2BL8GOqUBhqUQx9aq410COoQAp9iPf7NrGD%2FLgC02X3MUQ1tOTEABRufZdKrV2XLmBIqDXah%2BqOKrEX415kyVpKHupanhznL0qTRImE41ftLFaBjq%2Flf4Xh9jvRu2F2Nr4frlhUIPNDF6QuuRMxW6q1yFNQd4WpvPOXupikWqeUn3OH1hwZSyIWeB79sCbkxuGhTiwxlDBNgGYPi8scVj3KeTJJE8gskhvUFN&X-Amz-Signature=ff2b99132a6d542ccf5b727b87b86f0382c56e69249ec93cef4fa4dd519df38c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXSFXU5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCf63vIe0f9vaIXuvTqrLislkuURYjAsjL9mrmuOXDugIgG8vs032Blu3d3Lxq4f73wCSONUEa59GGHUVzxGniSocq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJq4p8ouhZlXyf4SGSrcA9e2VCB3tzODCyHNlf5cW7JCxVuZ%2BjgqtMYRwuRtZah7k0aeHGYSios8b3ikFTTRvM9BBKIwsDmHs1aLlZZK3%2BaveBWIAB%2FPvqdzxGhn2MFzgxuTla2q7BsRAlz5M%2BFRZamUiJcRJVkjqHhqyo2BYGrR2xfhhuV9h5%2FlNEFPYE%2B5DXztomsuAavTo%2ByvNYWCLI1JJXLR3Gj8E6YTTFcNEUcqx16XvqixHwj7%2B1jg%2B57uWhOppjyR2jG4JB%2Fa%2FoP6fhaG9JO%2FTW08ye9dP0fJ6zdq%2FhoUG8Y2DDGX91s7rzfyucDf1uPPlvfXyhEJWuJWTvWAu%2FjPOh7eUeitCnlUOMIreGvzH1rsE3ZeEtM5e86hAs1%2B6kfwxsiz1V%2F3H4SPJdrr8WU5LzoSA8eOHsQ4yfePlKBAcxM6i9bsLAt4xzUzL4iR0hwbtnCpPG%2BbWY6lrkbo%2Bi6xaTju%2FLyLaEvLBlK1sw9ILpg6ckdUlzwvuYLl2rjHDyIxeqY23gQ7jk%2BzuDBV0XNlOBJr2PU%2FZocd3T0BU5abxeUeOrTNVBhFn123g7YsGHXBp4R%2FAM0F8ZAmWzuIEcSRY0SATbDwwImiwdGYfdukIGSnHUDhFvbIKW1N3CuCX3BKib%2BkEX61MNO1%2BL8GOqUBhqUQx9aq410COoQAp9iPf7NrGD%2FLgC02X3MUQ1tOTEABRufZdKrV2XLmBIqDXah%2BqOKrEX415kyVpKHupanhznL0qTRImE41ftLFaBjq%2Flf4Xh9jvRu2F2Nr4frlhUIPNDF6QuuRMxW6q1yFNQd4WpvPOXupikWqeUn3OH1hwZSyIWeB79sCbkxuGhTiwxlDBNgGYPi8scVj3KeTJJE8gskhvUFN&X-Amz-Signature=5fd05a04be6eeca07f3fd73f6cbf7c8b72f312b255e69dfa36cf65e1b2fd6dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXSFXU5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCf63vIe0f9vaIXuvTqrLislkuURYjAsjL9mrmuOXDugIgG8vs032Blu3d3Lxq4f73wCSONUEa59GGHUVzxGniSocq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJq4p8ouhZlXyf4SGSrcA9e2VCB3tzODCyHNlf5cW7JCxVuZ%2BjgqtMYRwuRtZah7k0aeHGYSios8b3ikFTTRvM9BBKIwsDmHs1aLlZZK3%2BaveBWIAB%2FPvqdzxGhn2MFzgxuTla2q7BsRAlz5M%2BFRZamUiJcRJVkjqHhqyo2BYGrR2xfhhuV9h5%2FlNEFPYE%2B5DXztomsuAavTo%2ByvNYWCLI1JJXLR3Gj8E6YTTFcNEUcqx16XvqixHwj7%2B1jg%2B57uWhOppjyR2jG4JB%2Fa%2FoP6fhaG9JO%2FTW08ye9dP0fJ6zdq%2FhoUG8Y2DDGX91s7rzfyucDf1uPPlvfXyhEJWuJWTvWAu%2FjPOh7eUeitCnlUOMIreGvzH1rsE3ZeEtM5e86hAs1%2B6kfwxsiz1V%2F3H4SPJdrr8WU5LzoSA8eOHsQ4yfePlKBAcxM6i9bsLAt4xzUzL4iR0hwbtnCpPG%2BbWY6lrkbo%2Bi6xaTju%2FLyLaEvLBlK1sw9ILpg6ckdUlzwvuYLl2rjHDyIxeqY23gQ7jk%2BzuDBV0XNlOBJr2PU%2FZocd3T0BU5abxeUeOrTNVBhFn123g7YsGHXBp4R%2FAM0F8ZAmWzuIEcSRY0SATbDwwImiwdGYfdukIGSnHUDhFvbIKW1N3CuCX3BKib%2BkEX61MNO1%2BL8GOqUBhqUQx9aq410COoQAp9iPf7NrGD%2FLgC02X3MUQ1tOTEABRufZdKrV2XLmBIqDXah%2BqOKrEX415kyVpKHupanhznL0qTRImE41ftLFaBjq%2Flf4Xh9jvRu2F2Nr4frlhUIPNDF6QuuRMxW6q1yFNQd4WpvPOXupikWqeUn3OH1hwZSyIWeB79sCbkxuGhTiwxlDBNgGYPi8scVj3KeTJJE8gskhvUFN&X-Amz-Signature=f5c30572462d9bd75ba13e70b6d3fb411ca3220319699ef0e4e8e3a42d72899d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
