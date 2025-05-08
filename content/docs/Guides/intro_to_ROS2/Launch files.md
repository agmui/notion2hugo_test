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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYWRBWH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2F9BOqiZag1fzQ76p60Yej56eBLIMtOLrb2runi4LpAIgAxxIAu9t7PUQe7VJLSThCGO9X8jHD7Y5L7qzGt9KEEMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBPfOBdvEDySnh1t6ircAz2Waz%2BgovZFhA9e0J8RskNlyCt74lt5xzuO4SRjTLgt6onxFdWX2CE%2BtvN0N%2FherrOjv9iorBLkN4UQWKcILn2X0Q%2BesYeMxsvm%2FHc2fdsfW0AElLRTdA9VjU4g6vlYBkSrdtOn3pRTaRV%2F%2FIClV8dXHt8meh7Azk1kPkSw3FfFueHlX%2B8X4nefQw%2FsFBZWIuJlzwWORcT2SQRF%2F4WuTKoT64GH%2BIa04g8wPrjuMiRCaPL%2B1kQhQpNgV6YJ36cHZueqjDss%2FadcoxzSuhO%2BVZAZbGuxkPDd0eW%2FlzF9sJsURdmpSfBI3G6x%2Bg7fmShRhT%2Fgot24HVKyrzMcIlpGsOrAPZq2WPCZz9SwRvDxYV6niXee1mjuidC49%2FgZGM1Cdc9LRoKxRRWKOYnpsAhj0VOLpSQges3jJHpYuLYgsfNdISnzHandtOjAJwAlhB0aMIychmtEwrg55UULs3kN0h4MOBQ7RbkmdZnGtpTHwNuWbIeAWhApWyfrk%2Bhwpz3DW5V0dJziPkkdgJ%2BV6ewjmSWOACSQVsW7w7hp%2FfdJd%2FIsPsOK2ci%2BfxrzfefBz9OHamM8zbekunCR0Z4DjDZF44i%2BSDrknFO2%2BP94YIyHuuJqMx%2Fl7xovjwwpCuDNMN6z88AGOqUB6x16hT1DjHnaOfAN1fL%2F81VX2O0oYkJLxng9zkSoFELwzqADGYapTp9Dhkkzal6NvEvUp%2FdpUXXRn1AzdryIeiaRFdUHIQYEbGgxEool1%2BVAVNyuVvHoYddFUtleckpxx1P7O9yyc%2FfJ36Lk%2FZEM5uHil8GhR5wpuAxDcNCYPGgo%2FmeAUS5RmvwKxuMwC4zaq8aMKEPAyEQDl%2FKM0XNK8hYJSI4d&X-Amz-Signature=cfdc32c99516d20de677c03ae1563d292051e8745331c7b34b4dedc8d5473574&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYWRBWH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2F9BOqiZag1fzQ76p60Yej56eBLIMtOLrb2runi4LpAIgAxxIAu9t7PUQe7VJLSThCGO9X8jHD7Y5L7qzGt9KEEMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBPfOBdvEDySnh1t6ircAz2Waz%2BgovZFhA9e0J8RskNlyCt74lt5xzuO4SRjTLgt6onxFdWX2CE%2BtvN0N%2FherrOjv9iorBLkN4UQWKcILn2X0Q%2BesYeMxsvm%2FHc2fdsfW0AElLRTdA9VjU4g6vlYBkSrdtOn3pRTaRV%2F%2FIClV8dXHt8meh7Azk1kPkSw3FfFueHlX%2B8X4nefQw%2FsFBZWIuJlzwWORcT2SQRF%2F4WuTKoT64GH%2BIa04g8wPrjuMiRCaPL%2B1kQhQpNgV6YJ36cHZueqjDss%2FadcoxzSuhO%2BVZAZbGuxkPDd0eW%2FlzF9sJsURdmpSfBI3G6x%2Bg7fmShRhT%2Fgot24HVKyrzMcIlpGsOrAPZq2WPCZz9SwRvDxYV6niXee1mjuidC49%2FgZGM1Cdc9LRoKxRRWKOYnpsAhj0VOLpSQges3jJHpYuLYgsfNdISnzHandtOjAJwAlhB0aMIychmtEwrg55UULs3kN0h4MOBQ7RbkmdZnGtpTHwNuWbIeAWhApWyfrk%2Bhwpz3DW5V0dJziPkkdgJ%2BV6ewjmSWOACSQVsW7w7hp%2FfdJd%2FIsPsOK2ci%2BfxrzfefBz9OHamM8zbekunCR0Z4DjDZF44i%2BSDrknFO2%2BP94YIyHuuJqMx%2Fl7xovjwwpCuDNMN6z88AGOqUB6x16hT1DjHnaOfAN1fL%2F81VX2O0oYkJLxng9zkSoFELwzqADGYapTp9Dhkkzal6NvEvUp%2FdpUXXRn1AzdryIeiaRFdUHIQYEbGgxEool1%2BVAVNyuVvHoYddFUtleckpxx1P7O9yyc%2FfJ36Lk%2FZEM5uHil8GhR5wpuAxDcNCYPGgo%2FmeAUS5RmvwKxuMwC4zaq8aMKEPAyEQDl%2FKM0XNK8hYJSI4d&X-Amz-Signature=96d8a50c9351a74feeb54856e2b47d304ffb5f1a60f4a46c5cb5391341468937&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYWRBWH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2F9BOqiZag1fzQ76p60Yej56eBLIMtOLrb2runi4LpAIgAxxIAu9t7PUQe7VJLSThCGO9X8jHD7Y5L7qzGt9KEEMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBPfOBdvEDySnh1t6ircAz2Waz%2BgovZFhA9e0J8RskNlyCt74lt5xzuO4SRjTLgt6onxFdWX2CE%2BtvN0N%2FherrOjv9iorBLkN4UQWKcILn2X0Q%2BesYeMxsvm%2FHc2fdsfW0AElLRTdA9VjU4g6vlYBkSrdtOn3pRTaRV%2F%2FIClV8dXHt8meh7Azk1kPkSw3FfFueHlX%2B8X4nefQw%2FsFBZWIuJlzwWORcT2SQRF%2F4WuTKoT64GH%2BIa04g8wPrjuMiRCaPL%2B1kQhQpNgV6YJ36cHZueqjDss%2FadcoxzSuhO%2BVZAZbGuxkPDd0eW%2FlzF9sJsURdmpSfBI3G6x%2Bg7fmShRhT%2Fgot24HVKyrzMcIlpGsOrAPZq2WPCZz9SwRvDxYV6niXee1mjuidC49%2FgZGM1Cdc9LRoKxRRWKOYnpsAhj0VOLpSQges3jJHpYuLYgsfNdISnzHandtOjAJwAlhB0aMIychmtEwrg55UULs3kN0h4MOBQ7RbkmdZnGtpTHwNuWbIeAWhApWyfrk%2Bhwpz3DW5V0dJziPkkdgJ%2BV6ewjmSWOACSQVsW7w7hp%2FfdJd%2FIsPsOK2ci%2BfxrzfefBz9OHamM8zbekunCR0Z4DjDZF44i%2BSDrknFO2%2BP94YIyHuuJqMx%2Fl7xovjwwpCuDNMN6z88AGOqUB6x16hT1DjHnaOfAN1fL%2F81VX2O0oYkJLxng9zkSoFELwzqADGYapTp9Dhkkzal6NvEvUp%2FdpUXXRn1AzdryIeiaRFdUHIQYEbGgxEool1%2BVAVNyuVvHoYddFUtleckpxx1P7O9yyc%2FfJ36Lk%2FZEM5uHil8GhR5wpuAxDcNCYPGgo%2FmeAUS5RmvwKxuMwC4zaq8aMKEPAyEQDl%2FKM0XNK8hYJSI4d&X-Amz-Signature=73331727e51d2f836935a9706aa8489942a23003d680a101bfcad72da843a71d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
