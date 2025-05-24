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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVTMPMP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDotl8qyDwhrLP3ildgeE6EMteYG3z4ZpNpxEcAHCWtbAiEA9GQaYmoMnZaJi0tDhu61Xp02bjehR%2BBkxY9NlPmL4Osq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFydJMu2bSlyVQVo3SrcAyFGVJuDmuUG44KknkDpRi2iZjpQhhMd2TwrOBSVYgmbwcXUBmVQJeMFA9qI7Gyk3b0%2Ft3mbsFZtwaqHEN09K68BDgBRM2AsK%2Fb6jUvQS6tBPF79mfJdTbQ0YWe2WSYUSSyMQaBoE8jRUE3OXvrZf0n2fluUqh0BwLXmJ7rjm4iDHws1%2Fxl8JdmwqDcRutZvpYfnHtQYNG9f0V48JvrTOiJMKvzxMcxELIwheM0FGdsDbQ3NrI6kRg7FNdkQrJU4YBqxJpcjMBzCPJ4psJK563w83YTwbuWNP927sq%2BHnMBdJKENPlvexe0kwsQxLKi2cfdkYZTcDAIKrqrBaBGO9Vx3nKCPVgjllLMVpmIllU5FdHG6vGssdRdskJC2z%2BrPPqe7O8TDdC%2F1kmjE855n8BqAaFZh7FebeVrmouz%2B%2BhE1GE4%2Bo0xlQbOK%2BrP2ZNy0wFIy116ER84BYa1HjwoBig9oui2jB3I28HlFu546GWUdni49rqD8O6rzzpsOM6cDaSm0AeKaUeDjr9WpqdXgYACXfk8yPEous6y6UFP0FDbylFYr0vHyLejUqJUBlx1iqz66yqs4WSfixn%2FMqA1CsGDBzW8Eg8bdc1sIX3E%2FR%2BnH3q%2Fx%2BWWaSYRdatf9MNuVyMEGOqUBZ7QYivB9L9zM8IwW6lBeaf6iCtKQQkt7R4BnfH80GZwE0UE7COi9QktStxZO2iEml0xV3218ZG9AfNCVTQOYMWCkLt8VwuwszWOaTp1ysAJ5CEQ3exT2T4TkxqSKg%2B8042Aa9Rq0JHiZJ%2FXFij7dRCIl9GYLpywbBq6Js83laSEhiKR3DidhzrZXOeAR39hCZeptzc%2FF49yfA2hIWBbtbbOIWQ%2Bb&X-Amz-Signature=c5ebc8c7fd43a4bd4eda8aa1e6420bec747c69eada79e0cca84fbc5bd6d24df1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVTMPMP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDotl8qyDwhrLP3ildgeE6EMteYG3z4ZpNpxEcAHCWtbAiEA9GQaYmoMnZaJi0tDhu61Xp02bjehR%2BBkxY9NlPmL4Osq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFydJMu2bSlyVQVo3SrcAyFGVJuDmuUG44KknkDpRi2iZjpQhhMd2TwrOBSVYgmbwcXUBmVQJeMFA9qI7Gyk3b0%2Ft3mbsFZtwaqHEN09K68BDgBRM2AsK%2Fb6jUvQS6tBPF79mfJdTbQ0YWe2WSYUSSyMQaBoE8jRUE3OXvrZf0n2fluUqh0BwLXmJ7rjm4iDHws1%2Fxl8JdmwqDcRutZvpYfnHtQYNG9f0V48JvrTOiJMKvzxMcxELIwheM0FGdsDbQ3NrI6kRg7FNdkQrJU4YBqxJpcjMBzCPJ4psJK563w83YTwbuWNP927sq%2BHnMBdJKENPlvexe0kwsQxLKi2cfdkYZTcDAIKrqrBaBGO9Vx3nKCPVgjllLMVpmIllU5FdHG6vGssdRdskJC2z%2BrPPqe7O8TDdC%2F1kmjE855n8BqAaFZh7FebeVrmouz%2B%2BhE1GE4%2Bo0xlQbOK%2BrP2ZNy0wFIy116ER84BYa1HjwoBig9oui2jB3I28HlFu546GWUdni49rqD8O6rzzpsOM6cDaSm0AeKaUeDjr9WpqdXgYACXfk8yPEous6y6UFP0FDbylFYr0vHyLejUqJUBlx1iqz66yqs4WSfixn%2FMqA1CsGDBzW8Eg8bdc1sIX3E%2FR%2BnH3q%2Fx%2BWWaSYRdatf9MNuVyMEGOqUBZ7QYivB9L9zM8IwW6lBeaf6iCtKQQkt7R4BnfH80GZwE0UE7COi9QktStxZO2iEml0xV3218ZG9AfNCVTQOYMWCkLt8VwuwszWOaTp1ysAJ5CEQ3exT2T4TkxqSKg%2B8042Aa9Rq0JHiZJ%2FXFij7dRCIl9GYLpywbBq6Js83laSEhiKR3DidhzrZXOeAR39hCZeptzc%2FF49yfA2hIWBbtbbOIWQ%2Bb&X-Amz-Signature=7b14b8cc77f1fbdb572501f904e51941ef6a041441d24109924efb1c5908b0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVTMPMP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDotl8qyDwhrLP3ildgeE6EMteYG3z4ZpNpxEcAHCWtbAiEA9GQaYmoMnZaJi0tDhu61Xp02bjehR%2BBkxY9NlPmL4Osq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFydJMu2bSlyVQVo3SrcAyFGVJuDmuUG44KknkDpRi2iZjpQhhMd2TwrOBSVYgmbwcXUBmVQJeMFA9qI7Gyk3b0%2Ft3mbsFZtwaqHEN09K68BDgBRM2AsK%2Fb6jUvQS6tBPF79mfJdTbQ0YWe2WSYUSSyMQaBoE8jRUE3OXvrZf0n2fluUqh0BwLXmJ7rjm4iDHws1%2Fxl8JdmwqDcRutZvpYfnHtQYNG9f0V48JvrTOiJMKvzxMcxELIwheM0FGdsDbQ3NrI6kRg7FNdkQrJU4YBqxJpcjMBzCPJ4psJK563w83YTwbuWNP927sq%2BHnMBdJKENPlvexe0kwsQxLKi2cfdkYZTcDAIKrqrBaBGO9Vx3nKCPVgjllLMVpmIllU5FdHG6vGssdRdskJC2z%2BrPPqe7O8TDdC%2F1kmjE855n8BqAaFZh7FebeVrmouz%2B%2BhE1GE4%2Bo0xlQbOK%2BrP2ZNy0wFIy116ER84BYa1HjwoBig9oui2jB3I28HlFu546GWUdni49rqD8O6rzzpsOM6cDaSm0AeKaUeDjr9WpqdXgYACXfk8yPEous6y6UFP0FDbylFYr0vHyLejUqJUBlx1iqz66yqs4WSfixn%2FMqA1CsGDBzW8Eg8bdc1sIX3E%2FR%2BnH3q%2Fx%2BWWaSYRdatf9MNuVyMEGOqUBZ7QYivB9L9zM8IwW6lBeaf6iCtKQQkt7R4BnfH80GZwE0UE7COi9QktStxZO2iEml0xV3218ZG9AfNCVTQOYMWCkLt8VwuwszWOaTp1ysAJ5CEQ3exT2T4TkxqSKg%2B8042Aa9Rq0JHiZJ%2FXFij7dRCIl9GYLpywbBq6Js83laSEhiKR3DidhzrZXOeAR39hCZeptzc%2FF49yfA2hIWBbtbbOIWQ%2Bb&X-Amz-Signature=f3b8eccc4017bad242a63ee17e21eae08b417033f1d6848f531b49aecc0b0d38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
