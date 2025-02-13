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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZWGG7L%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC76LR2na%2FZqFiu8buePkzYrhUVSOZrOPx51weycH2KbgIgH8e2awP%2B9m0udXeol5bJfbgc6fCfnlyK6iLnC%2FH1B%2FUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHJ9P%2F1MLdyWh8m8rSrcA%2FnGjFdFJ1brZobOFrdnSFMHzlqJk1heAOk5EJtt58gm2kXsLaRblo6aKhZZdQ15ick5xXuDiH2kGqKSr2VaX1gU2QITIP7EzPcBwLRQ0RJAyV4ObprcI51ZUKtmflkAAPTaYv01hg8G0Y7tKs%2Bb%2FwFBxetVpnaFksxphJpJnJQH%2B%2FT73atz5dHGef2HI0IxcEMyKRrRJ%2B0yWEIv77ATdKGyBU7im5sYZrGLSBJUmnDMAvt7wgYy3htL07NoB1WtVTMmvjQIsy2Z7ZESs2MntDqemXCh0uP5kn0%2FLV3jIK9%2BLlAcr2QDHjvsAOHz%2F4BF3Sv38gnMbN87IWALafnBeq%2FGDqIa55WKIfuYpmvyTXGK6H7%2F4JStWwFh9v7Q3A%2FixfXTQcPkxWdqZ24qMK9WyLQhcPInna2mFNqR1El5Tg0qOPElm%2FowQFtcNPk3qVrH1vDuXzhb9luQCJu4EtIscozY8FEwWRLyyubVTomWKWT88z81REBcVfYfooLis4e85Vnl0ZDk4hid60v69rMIlxJodoVbPyGQvXIOU2LQKNkCxRKmCBTlbOS3fUdlz%2FZfbJWAJFc3AJmcIX0bOF0ZS8vFDblneJ4McdAS6EeY77NL5UEfjL2lm4%2FXmukvMKret70GOqUBvV2bJo0SE76IjGx9hhY6JQO6Vt8RnNFDstVKRuAZYlV4WZdhoY3K%2F%2FpNfBUbIjJjUtLaP0RvHUI2abSOXcyFm7LAr20gffeARTcNLnVyVSimGTrSwwwF1h1fuAvvFIZJK2XakDJATn3WuoLan1wxno3nS81dLZjhOgvSIquZoqCvD8eGkg4U0vFACxG0ABrInd1Orp6Qtt%2BPv31irU495yxGZ8TN&X-Amz-Signature=8082d1da913afcee62168dc02bbf24213554d5cdf049bd0d758a693837144938&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZWGG7L%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC76LR2na%2FZqFiu8buePkzYrhUVSOZrOPx51weycH2KbgIgH8e2awP%2B9m0udXeol5bJfbgc6fCfnlyK6iLnC%2FH1B%2FUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHJ9P%2F1MLdyWh8m8rSrcA%2FnGjFdFJ1brZobOFrdnSFMHzlqJk1heAOk5EJtt58gm2kXsLaRblo6aKhZZdQ15ick5xXuDiH2kGqKSr2VaX1gU2QITIP7EzPcBwLRQ0RJAyV4ObprcI51ZUKtmflkAAPTaYv01hg8G0Y7tKs%2Bb%2FwFBxetVpnaFksxphJpJnJQH%2B%2FT73atz5dHGef2HI0IxcEMyKRrRJ%2B0yWEIv77ATdKGyBU7im5sYZrGLSBJUmnDMAvt7wgYy3htL07NoB1WtVTMmvjQIsy2Z7ZESs2MntDqemXCh0uP5kn0%2FLV3jIK9%2BLlAcr2QDHjvsAOHz%2F4BF3Sv38gnMbN87IWALafnBeq%2FGDqIa55WKIfuYpmvyTXGK6H7%2F4JStWwFh9v7Q3A%2FixfXTQcPkxWdqZ24qMK9WyLQhcPInna2mFNqR1El5Tg0qOPElm%2FowQFtcNPk3qVrH1vDuXzhb9luQCJu4EtIscozY8FEwWRLyyubVTomWKWT88z81REBcVfYfooLis4e85Vnl0ZDk4hid60v69rMIlxJodoVbPyGQvXIOU2LQKNkCxRKmCBTlbOS3fUdlz%2FZfbJWAJFc3AJmcIX0bOF0ZS8vFDblneJ4McdAS6EeY77NL5UEfjL2lm4%2FXmukvMKret70GOqUBvV2bJo0SE76IjGx9hhY6JQO6Vt8RnNFDstVKRuAZYlV4WZdhoY3K%2F%2FpNfBUbIjJjUtLaP0RvHUI2abSOXcyFm7LAr20gffeARTcNLnVyVSimGTrSwwwF1h1fuAvvFIZJK2XakDJATn3WuoLan1wxno3nS81dLZjhOgvSIquZoqCvD8eGkg4U0vFACxG0ABrInd1Orp6Qtt%2BPv31irU495yxGZ8TN&X-Amz-Signature=f3a797330576b62ce750252c34a12e364a88847388bf5e42929c83154f724f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CZWGG7L%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC76LR2na%2FZqFiu8buePkzYrhUVSOZrOPx51weycH2KbgIgH8e2awP%2B9m0udXeol5bJfbgc6fCfnlyK6iLnC%2FH1B%2FUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHJ9P%2F1MLdyWh8m8rSrcA%2FnGjFdFJ1brZobOFrdnSFMHzlqJk1heAOk5EJtt58gm2kXsLaRblo6aKhZZdQ15ick5xXuDiH2kGqKSr2VaX1gU2QITIP7EzPcBwLRQ0RJAyV4ObprcI51ZUKtmflkAAPTaYv01hg8G0Y7tKs%2Bb%2FwFBxetVpnaFksxphJpJnJQH%2B%2FT73atz5dHGef2HI0IxcEMyKRrRJ%2B0yWEIv77ATdKGyBU7im5sYZrGLSBJUmnDMAvt7wgYy3htL07NoB1WtVTMmvjQIsy2Z7ZESs2MntDqemXCh0uP5kn0%2FLV3jIK9%2BLlAcr2QDHjvsAOHz%2F4BF3Sv38gnMbN87IWALafnBeq%2FGDqIa55WKIfuYpmvyTXGK6H7%2F4JStWwFh9v7Q3A%2FixfXTQcPkxWdqZ24qMK9WyLQhcPInna2mFNqR1El5Tg0qOPElm%2FowQFtcNPk3qVrH1vDuXzhb9luQCJu4EtIscozY8FEwWRLyyubVTomWKWT88z81REBcVfYfooLis4e85Vnl0ZDk4hid60v69rMIlxJodoVbPyGQvXIOU2LQKNkCxRKmCBTlbOS3fUdlz%2FZfbJWAJFc3AJmcIX0bOF0ZS8vFDblneJ4McdAS6EeY77NL5UEfjL2lm4%2FXmukvMKret70GOqUBvV2bJo0SE76IjGx9hhY6JQO6Vt8RnNFDstVKRuAZYlV4WZdhoY3K%2F%2FpNfBUbIjJjUtLaP0RvHUI2abSOXcyFm7LAr20gffeARTcNLnVyVSimGTrSwwwF1h1fuAvvFIZJK2XakDJATn3WuoLan1wxno3nS81dLZjhOgvSIquZoqCvD8eGkg4U0vFACxG0ABrInd1Orp6Qtt%2BPv31irU495yxGZ8TN&X-Amz-Signature=319954afca640a290295d0be7a0a538f1a588482406a183dcb963eab8963e450&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
