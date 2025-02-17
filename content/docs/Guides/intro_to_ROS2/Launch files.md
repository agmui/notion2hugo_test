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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJWLKLI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGKmD8RdOz4NoFjq31jDRdf3TmrOxkHhq1mLYC4mxS%2B1AiEAhKQYQjw2zeBKu9d0GzB9BNotBSGwshyjEVQseB2iIi0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJi8Bm2QUt2LaqDMPircA5LPDlzRGJOEPVs1GW86nLUeBd2geh1QF2E9ADzCOng71an7yDEobeyPBVeHQ3%2BGgVdZU8FXmCaAtKLk9IQ%2F44yDhAppxdUB2wtWbEW57qvhN5KzbhRkr%2FzqLetz55hrfWBakwVLoumwQlXNWJ9Hbf86cKYLj%2FuGcCt%2FGoFtVfzHFRWyWUUg%2Blw7LTlvVCvhwxXLNEMjwvfXXnzqOCE60S93O6MD6OiDDcXDmSfueDIGsu9cMwpmD7f6FYJptf4RtgMy0vuPNzX2SO2sv0tfj01CY%2BWpq5p69fq0YHIUuhnagOn%2Bsr%2BCXJgRbPiS5ixun7zsEvLKA4%2B8K3oycrEcHU8aT%2BTPj27IDZU4hRKSQjRG9jDkrh%2BB1W4nC1blXYyky6D7XKvWwcutHkxWmKsMKrm%2BtdbXJtBEQhMcL5g2XlnaQX45kgazSJ4ac9dH9jOsHoTXQVZEItR0rgNWGG6176g3JR2ur%2Bwsaht%2BOmVkD0m2jIQqOaEHGrp1luVWKoTwM5klaiq6V0huQYk%2FB2ChU%2FKxJaIhH2N%2Bu43elq%2FQeRH8iZ3RP6rZ2%2BEsnOjdnJ5tBjMDIS84NYMck2aFPuBEJCL547sNSb%2BNEwpR4Z%2BF22lDYuvEY%2BbIf2hqvVmxMM2Wzb0GOqUBG5%2BxVsY0u9S3vrJGVhS%2FwMYFBZGuxMuNODkK3fFmC%2FuzxDQ9qmXZoEgytU68wUu87ceoxhfb8w80Qgaqb1NMVezO6cLRW0sYThLZ0evHe6E9dxZecFuema0dQQ4PIRIszdsez9uuRQu5KiGtV%2BiCBH5ofWwARxHNPOp2FnS%2FyH811h1cLP%2B%2BDCVV7GPnuS8c8%2FjpdfHt04om3sLYgDaB44%2BDUkmb&X-Amz-Signature=0225ecddb70fc375ecfa41254966fadee25c7c42a01afada26785780705dfa6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJWLKLI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGKmD8RdOz4NoFjq31jDRdf3TmrOxkHhq1mLYC4mxS%2B1AiEAhKQYQjw2zeBKu9d0GzB9BNotBSGwshyjEVQseB2iIi0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJi8Bm2QUt2LaqDMPircA5LPDlzRGJOEPVs1GW86nLUeBd2geh1QF2E9ADzCOng71an7yDEobeyPBVeHQ3%2BGgVdZU8FXmCaAtKLk9IQ%2F44yDhAppxdUB2wtWbEW57qvhN5KzbhRkr%2FzqLetz55hrfWBakwVLoumwQlXNWJ9Hbf86cKYLj%2FuGcCt%2FGoFtVfzHFRWyWUUg%2Blw7LTlvVCvhwxXLNEMjwvfXXnzqOCE60S93O6MD6OiDDcXDmSfueDIGsu9cMwpmD7f6FYJptf4RtgMy0vuPNzX2SO2sv0tfj01CY%2BWpq5p69fq0YHIUuhnagOn%2Bsr%2BCXJgRbPiS5ixun7zsEvLKA4%2B8K3oycrEcHU8aT%2BTPj27IDZU4hRKSQjRG9jDkrh%2BB1W4nC1blXYyky6D7XKvWwcutHkxWmKsMKrm%2BtdbXJtBEQhMcL5g2XlnaQX45kgazSJ4ac9dH9jOsHoTXQVZEItR0rgNWGG6176g3JR2ur%2Bwsaht%2BOmVkD0m2jIQqOaEHGrp1luVWKoTwM5klaiq6V0huQYk%2FB2ChU%2FKxJaIhH2N%2Bu43elq%2FQeRH8iZ3RP6rZ2%2BEsnOjdnJ5tBjMDIS84NYMck2aFPuBEJCL547sNSb%2BNEwpR4Z%2BF22lDYuvEY%2BbIf2hqvVmxMM2Wzb0GOqUBG5%2BxVsY0u9S3vrJGVhS%2FwMYFBZGuxMuNODkK3fFmC%2FuzxDQ9qmXZoEgytU68wUu87ceoxhfb8w80Qgaqb1NMVezO6cLRW0sYThLZ0evHe6E9dxZecFuema0dQQ4PIRIszdsez9uuRQu5KiGtV%2BiCBH5ofWwARxHNPOp2FnS%2FyH811h1cLP%2B%2BDCVV7GPnuS8c8%2FjpdfHt04om3sLYgDaB44%2BDUkmb&X-Amz-Signature=1538eebcbc36c77f8813a9b68d1a69a60468f3ad0a2cbf3d55154b52681dad9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJWLKLI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGKmD8RdOz4NoFjq31jDRdf3TmrOxkHhq1mLYC4mxS%2B1AiEAhKQYQjw2zeBKu9d0GzB9BNotBSGwshyjEVQseB2iIi0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJi8Bm2QUt2LaqDMPircA5LPDlzRGJOEPVs1GW86nLUeBd2geh1QF2E9ADzCOng71an7yDEobeyPBVeHQ3%2BGgVdZU8FXmCaAtKLk9IQ%2F44yDhAppxdUB2wtWbEW57qvhN5KzbhRkr%2FzqLetz55hrfWBakwVLoumwQlXNWJ9Hbf86cKYLj%2FuGcCt%2FGoFtVfzHFRWyWUUg%2Blw7LTlvVCvhwxXLNEMjwvfXXnzqOCE60S93O6MD6OiDDcXDmSfueDIGsu9cMwpmD7f6FYJptf4RtgMy0vuPNzX2SO2sv0tfj01CY%2BWpq5p69fq0YHIUuhnagOn%2Bsr%2BCXJgRbPiS5ixun7zsEvLKA4%2B8K3oycrEcHU8aT%2BTPj27IDZU4hRKSQjRG9jDkrh%2BB1W4nC1blXYyky6D7XKvWwcutHkxWmKsMKrm%2BtdbXJtBEQhMcL5g2XlnaQX45kgazSJ4ac9dH9jOsHoTXQVZEItR0rgNWGG6176g3JR2ur%2Bwsaht%2BOmVkD0m2jIQqOaEHGrp1luVWKoTwM5klaiq6V0huQYk%2FB2ChU%2FKxJaIhH2N%2Bu43elq%2FQeRH8iZ3RP6rZ2%2BEsnOjdnJ5tBjMDIS84NYMck2aFPuBEJCL547sNSb%2BNEwpR4Z%2BF22lDYuvEY%2BbIf2hqvVmxMM2Wzb0GOqUBG5%2BxVsY0u9S3vrJGVhS%2FwMYFBZGuxMuNODkK3fFmC%2FuzxDQ9qmXZoEgytU68wUu87ceoxhfb8w80Qgaqb1NMVezO6cLRW0sYThLZ0evHe6E9dxZecFuema0dQQ4PIRIszdsez9uuRQu5KiGtV%2BiCBH5ofWwARxHNPOp2FnS%2FyH811h1cLP%2B%2BDCVV7GPnuS8c8%2FjpdfHt04om3sLYgDaB44%2BDUkmb&X-Amz-Signature=c8d1e5f07caf2609942c7ebb6d4d18f75f57cd51f0e5553109850bab6aac6cea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
