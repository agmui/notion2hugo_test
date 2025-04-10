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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JITRDO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCeRQL8Ij50QEagj05SCEpeEHL69tjFrhRfs0o7vE%2FKrQIgBXiThKTV7XTP4nI4zcQ7Qx1KWrY4%2FncP8B%2Fd3U%2B9A3kqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvEzoelPp3Zgr0QOSrcAywYhCyQetzfwfuBdb7ffpjVo4nP0lLVrqr5nwvS9nR9kYr4OcGBDdpCkRR%2BIGyFlp%2Fj%2BJB8mfWNIGuurYlnoqS%2F2Lh4IXeo3tqISFmM%2Fz8mJgHwCXMeToLIu4gBQRUDteBTOFi7t8RYSKRgVYpk4RZMblrtPPQpsTD2XLuVQntVYSMGHZexYU6%2FmcIR5FGL%2B4kSSjNJRyMjJLvVpQx8GqhpeL%2FeuaOlV4d94UB3LBV%2F3jSJ%2FqI8LWwDqFHuhjlBvfSt5orehj%2F5Dl8c1Db60EPxUlj%2B6hmQCo2kjLiGG0No%2FTwvMIf9Ra1Klj6InGmQ9ouiLs%2BYJ6SIXAzn0WPUjOn833JIk8qqcIef4oSh%2BdPtyAN7%2FWfDNyaC1ooc92Ak21LPdxySsJQtgRLZi393QRlJCQbjq82hSLNfdZcD%2FZz5pnz%2BycO2PnbX0EdXaFJpus36N%2F4Xl0DOjaYGW40zexfPAAVwh21xBh9jmzGiO99bVdbE7S8zwVqSLNFDLbYyWd8QRS1J4L9DTPfBz1%2F5eZlBndMeGrBSMakcH6C2kxRqiFH2Nsa8v0quHllYOpCNS2kpJBtqhZX2kS1a5nQpRpFUFBufEl7Nlmd0n6yDDKh%2BRTa2JYFWlOtS4q%2F0MOG5378GOqUBVLfSZu2kyngGlwQzrbZnvl66j2IFsxOy%2FKjQZJ%2BIyh%2Fqy7uqwkHbY5%2BbvViC68t8%2BR2aV%2BNGrnoRNfyIf8fA8hlu3Rc%2Fw%2F8TMsDZidgY9yb9wzP98oiEFll7wjvXG3VxNUWbMFvWV3o0em0MZ%2FXaK2LJJvyEQeK5ZkoHCxHGxlEC8WDXPW0Ly7fGTcTcn3kK2EAJImAnUA7aeXrQeXqrLK9%2BR2xl&X-Amz-Signature=81fa4f4c597f9f67130ccb79db049cfa33ca59bc09d7dfcc2139709527d90888&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JITRDO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCeRQL8Ij50QEagj05SCEpeEHL69tjFrhRfs0o7vE%2FKrQIgBXiThKTV7XTP4nI4zcQ7Qx1KWrY4%2FncP8B%2Fd3U%2B9A3kqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvEzoelPp3Zgr0QOSrcAywYhCyQetzfwfuBdb7ffpjVo4nP0lLVrqr5nwvS9nR9kYr4OcGBDdpCkRR%2BIGyFlp%2Fj%2BJB8mfWNIGuurYlnoqS%2F2Lh4IXeo3tqISFmM%2Fz8mJgHwCXMeToLIu4gBQRUDteBTOFi7t8RYSKRgVYpk4RZMblrtPPQpsTD2XLuVQntVYSMGHZexYU6%2FmcIR5FGL%2B4kSSjNJRyMjJLvVpQx8GqhpeL%2FeuaOlV4d94UB3LBV%2F3jSJ%2FqI8LWwDqFHuhjlBvfSt5orehj%2F5Dl8c1Db60EPxUlj%2B6hmQCo2kjLiGG0No%2FTwvMIf9Ra1Klj6InGmQ9ouiLs%2BYJ6SIXAzn0WPUjOn833JIk8qqcIef4oSh%2BdPtyAN7%2FWfDNyaC1ooc92Ak21LPdxySsJQtgRLZi393QRlJCQbjq82hSLNfdZcD%2FZz5pnz%2BycO2PnbX0EdXaFJpus36N%2F4Xl0DOjaYGW40zexfPAAVwh21xBh9jmzGiO99bVdbE7S8zwVqSLNFDLbYyWd8QRS1J4L9DTPfBz1%2F5eZlBndMeGrBSMakcH6C2kxRqiFH2Nsa8v0quHllYOpCNS2kpJBtqhZX2kS1a5nQpRpFUFBufEl7Nlmd0n6yDDKh%2BRTa2JYFWlOtS4q%2F0MOG5378GOqUBVLfSZu2kyngGlwQzrbZnvl66j2IFsxOy%2FKjQZJ%2BIyh%2Fqy7uqwkHbY5%2BbvViC68t8%2BR2aV%2BNGrnoRNfyIf8fA8hlu3Rc%2Fw%2F8TMsDZidgY9yb9wzP98oiEFll7wjvXG3VxNUWbMFvWV3o0em0MZ%2FXaK2LJJvyEQeK5ZkoHCxHGxlEC8WDXPW0Ly7fGTcTcn3kK2EAJImAnUA7aeXrQeXqrLK9%2BR2xl&X-Amz-Signature=5599f0d8a846b87d4a212fe9503b9ec52a65c8d0988fd7eb175ac4b5dd9c96f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JITRDO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCeRQL8Ij50QEagj05SCEpeEHL69tjFrhRfs0o7vE%2FKrQIgBXiThKTV7XTP4nI4zcQ7Qx1KWrY4%2FncP8B%2Fd3U%2B9A3kqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvEzoelPp3Zgr0QOSrcAywYhCyQetzfwfuBdb7ffpjVo4nP0lLVrqr5nwvS9nR9kYr4OcGBDdpCkRR%2BIGyFlp%2Fj%2BJB8mfWNIGuurYlnoqS%2F2Lh4IXeo3tqISFmM%2Fz8mJgHwCXMeToLIu4gBQRUDteBTOFi7t8RYSKRgVYpk4RZMblrtPPQpsTD2XLuVQntVYSMGHZexYU6%2FmcIR5FGL%2B4kSSjNJRyMjJLvVpQx8GqhpeL%2FeuaOlV4d94UB3LBV%2F3jSJ%2FqI8LWwDqFHuhjlBvfSt5orehj%2F5Dl8c1Db60EPxUlj%2B6hmQCo2kjLiGG0No%2FTwvMIf9Ra1Klj6InGmQ9ouiLs%2BYJ6SIXAzn0WPUjOn833JIk8qqcIef4oSh%2BdPtyAN7%2FWfDNyaC1ooc92Ak21LPdxySsJQtgRLZi393QRlJCQbjq82hSLNfdZcD%2FZz5pnz%2BycO2PnbX0EdXaFJpus36N%2F4Xl0DOjaYGW40zexfPAAVwh21xBh9jmzGiO99bVdbE7S8zwVqSLNFDLbYyWd8QRS1J4L9DTPfBz1%2F5eZlBndMeGrBSMakcH6C2kxRqiFH2Nsa8v0quHllYOpCNS2kpJBtqhZX2kS1a5nQpRpFUFBufEl7Nlmd0n6yDDKh%2BRTa2JYFWlOtS4q%2F0MOG5378GOqUBVLfSZu2kyngGlwQzrbZnvl66j2IFsxOy%2FKjQZJ%2BIyh%2Fqy7uqwkHbY5%2BbvViC68t8%2BR2aV%2BNGrnoRNfyIf8fA8hlu3Rc%2Fw%2F8TMsDZidgY9yb9wzP98oiEFll7wjvXG3VxNUWbMFvWV3o0em0MZ%2FXaK2LJJvyEQeK5ZkoHCxHGxlEC8WDXPW0Ly7fGTcTcn3kK2EAJImAnUA7aeXrQeXqrLK9%2BR2xl&X-Amz-Signature=77bd1c7550dbdb3d53a110863f74a989c1825b4c7d44fbc824ea8ef01524830e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
