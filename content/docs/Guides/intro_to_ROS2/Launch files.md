---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHYJJHF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6GN%2BuZfPByAfpHzWC%2Bk%2BdhmQbC2lV19DH%2Bqs4zVc6IAiAsbLW6ohKwex67dASMh8NxHiwXs%2BEAvemI%2FnFtnqEQ4SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdfT1fHGUuiGyXqsKtwD%2FcgifDLaXSppHLQVN%2Fqzp4j8jvmUsGDeDSzHCMT9%2Bt22XVob1GIKohR4na7ycbPAjjDHEBcF%2BstOAiA%2BJFXol1OTnNvyi980vWjb575zuupo%2BYSSU%2F%2BR4NZ1DSdP5TFsOyz3pHB04k9IKEaJ6jvrNUJM2b%2BNkNby8m9KiU6BxIS96Bpkt35JLN6JjruhKWlUuNUuYWry5v%2Fc0Yvv76C7pNF%2FTa7osM0DdWoB0EZfv9RDxBICj30CFn76z6%2BSQM2ALVXL0ZZq8U1OB%2Fl3JoijRwDk0vqCPAoojSeRNwM%2FowiRjIwsBKOe6S8Dy%2F%2FgTXXS8gyyrwBszJxaMQvc7DJqhKdrMZaoHSvAlmth3vhnv4zdKIUDEFqaLsofgawO%2Fe51xfA%2B37UK5ibXIfGbdsVYPCT0NuHhVmwkQhlY2lNj2At0%2FAEv7ww2Rqny0B5MDfXTbPqMr4ENthWiJcfQ%2BTbDcSmSw1hhPPNHE1j19U3eUQ9yEQdEl704tHUFLAKjG6LvnnvkwD7frJIihZh79aP6G6zNkwMuu1Qc9xu4Orub9CJf%2F0wplQR012o8P642xCHClHvPpHSdwwCRCOr3Va84DYDE3SdBjH3ySOmh7QD9eg1QZgaOxrwHKMoGvpQw7LrjxAY6pgFQXX58t6tfot3dhofUOodqCcGNYueW0AzVSAiQWdBDNrztOmULWEHKsE1nBdoX0HAm3OQFbHpMNQGSTL2UNCD0RBvE%2BN3gax7khb97XlobmFbiJ%2BTxHvI21b5tVJ9H%2BzAzuLy9DQ7gixRVsksUn40hDjyoBYLRBcg5ms9pYYIYxZ4ttYjH7JtTRO6u7fLsu30pe9YYNI5OAJE1Dpfr1gfHUM%2BI9Q9I&X-Amz-Signature=f8c5fcb4ba08fa78cdf82b0e5eaec46041535b55a9c0fcab3beb14417d3905ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHYJJHF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6GN%2BuZfPByAfpHzWC%2Bk%2BdhmQbC2lV19DH%2Bqs4zVc6IAiAsbLW6ohKwex67dASMh8NxHiwXs%2BEAvemI%2FnFtnqEQ4SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdfT1fHGUuiGyXqsKtwD%2FcgifDLaXSppHLQVN%2Fqzp4j8jvmUsGDeDSzHCMT9%2Bt22XVob1GIKohR4na7ycbPAjjDHEBcF%2BstOAiA%2BJFXol1OTnNvyi980vWjb575zuupo%2BYSSU%2F%2BR4NZ1DSdP5TFsOyz3pHB04k9IKEaJ6jvrNUJM2b%2BNkNby8m9KiU6BxIS96Bpkt35JLN6JjruhKWlUuNUuYWry5v%2Fc0Yvv76C7pNF%2FTa7osM0DdWoB0EZfv9RDxBICj30CFn76z6%2BSQM2ALVXL0ZZq8U1OB%2Fl3JoijRwDk0vqCPAoojSeRNwM%2FowiRjIwsBKOe6S8Dy%2F%2FgTXXS8gyyrwBszJxaMQvc7DJqhKdrMZaoHSvAlmth3vhnv4zdKIUDEFqaLsofgawO%2Fe51xfA%2B37UK5ibXIfGbdsVYPCT0NuHhVmwkQhlY2lNj2At0%2FAEv7ww2Rqny0B5MDfXTbPqMr4ENthWiJcfQ%2BTbDcSmSw1hhPPNHE1j19U3eUQ9yEQdEl704tHUFLAKjG6LvnnvkwD7frJIihZh79aP6G6zNkwMuu1Qc9xu4Orub9CJf%2F0wplQR012o8P642xCHClHvPpHSdwwCRCOr3Va84DYDE3SdBjH3ySOmh7QD9eg1QZgaOxrwHKMoGvpQw7LrjxAY6pgFQXX58t6tfot3dhofUOodqCcGNYueW0AzVSAiQWdBDNrztOmULWEHKsE1nBdoX0HAm3OQFbHpMNQGSTL2UNCD0RBvE%2BN3gax7khb97XlobmFbiJ%2BTxHvI21b5tVJ9H%2BzAzuLy9DQ7gixRVsksUn40hDjyoBYLRBcg5ms9pYYIYxZ4ttYjH7JtTRO6u7fLsu30pe9YYNI5OAJE1Dpfr1gfHUM%2BI9Q9I&X-Amz-Signature=55e79cd5f4d425e3b37560579f91077f6a250dcf2c48dca6e138986eded417ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHYJJHF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6GN%2BuZfPByAfpHzWC%2Bk%2BdhmQbC2lV19DH%2Bqs4zVc6IAiAsbLW6ohKwex67dASMh8NxHiwXs%2BEAvemI%2FnFtnqEQ4SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdfT1fHGUuiGyXqsKtwD%2FcgifDLaXSppHLQVN%2Fqzp4j8jvmUsGDeDSzHCMT9%2Bt22XVob1GIKohR4na7ycbPAjjDHEBcF%2BstOAiA%2BJFXol1OTnNvyi980vWjb575zuupo%2BYSSU%2F%2BR4NZ1DSdP5TFsOyz3pHB04k9IKEaJ6jvrNUJM2b%2BNkNby8m9KiU6BxIS96Bpkt35JLN6JjruhKWlUuNUuYWry5v%2Fc0Yvv76C7pNF%2FTa7osM0DdWoB0EZfv9RDxBICj30CFn76z6%2BSQM2ALVXL0ZZq8U1OB%2Fl3JoijRwDk0vqCPAoojSeRNwM%2FowiRjIwsBKOe6S8Dy%2F%2FgTXXS8gyyrwBszJxaMQvc7DJqhKdrMZaoHSvAlmth3vhnv4zdKIUDEFqaLsofgawO%2Fe51xfA%2B37UK5ibXIfGbdsVYPCT0NuHhVmwkQhlY2lNj2At0%2FAEv7ww2Rqny0B5MDfXTbPqMr4ENthWiJcfQ%2BTbDcSmSw1hhPPNHE1j19U3eUQ9yEQdEl704tHUFLAKjG6LvnnvkwD7frJIihZh79aP6G6zNkwMuu1Qc9xu4Orub9CJf%2F0wplQR012o8P642xCHClHvPpHSdwwCRCOr3Va84DYDE3SdBjH3ySOmh7QD9eg1QZgaOxrwHKMoGvpQw7LrjxAY6pgFQXX58t6tfot3dhofUOodqCcGNYueW0AzVSAiQWdBDNrztOmULWEHKsE1nBdoX0HAm3OQFbHpMNQGSTL2UNCD0RBvE%2BN3gax7khb97XlobmFbiJ%2BTxHvI21b5tVJ9H%2BzAzuLy9DQ7gixRVsksUn40hDjyoBYLRBcg5ms9pYYIYxZ4ttYjH7JtTRO6u7fLsu30pe9YYNI5OAJE1Dpfr1gfHUM%2BI9Q9I&X-Amz-Signature=3c433d610e1b18e74f27d82484e466dbc8812dbe45f7d118f6273c4dac82be5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
