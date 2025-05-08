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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGKWZ7G%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnmCwuL7tWzaos2KlJ3o6hR0D21CeOsRw0uzlMMuKaAiBvpluGzBWT4obWFYMZh91civgzInRoEN64c6UrStrMbSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMN%2F%2F9Z%2FR0MU04jZvGKtwDyAaJYx1Ns%2Fk9balyY7Mgnfy4MAoQPPAyxR8i9GAlUUC7RZGYS9eHt2A29Ysj%2F7lbVI8WQahrs5AOV3zLDI3sP3pp55YskdB6DMOd4PE99Tsz%2B2A76KgcQAeTt%2BOVV4rdo%2BdIIKG2lApHsDk3lZ5XYiwyL9ZgIjKGKZUi3IWzRjMCHNr2YRMcS8WHMeCQep7QUiwkn223Iy8mXYAT%2B3DIerbgjpOQ3yd481ORVY6KNJasDhVouiBEGYtkIi%2FPdI5xZYhaLEXJv%2FUYKyah7qCgJEjJFnkjHQcPvn%2Fyw1X0mkDFPWH8gD0tLqUKUs1bqldk57Jrdt9JBcHNiOWSGDS0kZGNrzqsiRNOB46EgLs%2B315u4s6SYWtBIMgWgAYt5nqWE2JDMCbB0RIPmMeEfjykLa83jKi5WvfrB5ngrCcowvKb69KsRU47pEr4msCdgQWm23BL1uBx%2FHKKJRRfqHzakWnubYdCcrbsqk0o1JoSzXRrZ43qBkgWx%2FOZhExZGNAV1FhQ1rkBFXUt50QEK6Db9YXC1J4yP14UDXDq%2FH1xzAwIG7W0HNkb9eyI%2BheAIp5sxtZBGMerNkfV7YukDRsczH%2FZeAh%2FXu83pHKzXkJIAReu%2BWLG%2B7z9AdD6%2FWQwoeXywAY6pgFSJ6oIv%2FsAVUs%2FqvC1mijKOsBYBWaq4Yx%2F69BUoWN9Cs7ABP3qxqeVwfVZUm%2B8%2FgAetyHvtl5bE96AYrfI1XtLuRzncsG8AoGag88cpAGORRtjvpo5pvhSjzXub4GTv3ybHdexLD7kdHhgT9G%2F%2B7stIVrGgmxks3wPtD0YBJFyLvfJ9YhVn7vID6LyIhKMmWARG1Ej8Ch35lNYbDBLb7XgukTWzXgz&X-Amz-Signature=a9695d0298d1a975cfe16e14e65225ba60479d714fda181bc32367086c9a9070&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGKWZ7G%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnmCwuL7tWzaos2KlJ3o6hR0D21CeOsRw0uzlMMuKaAiBvpluGzBWT4obWFYMZh91civgzInRoEN64c6UrStrMbSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMN%2F%2F9Z%2FR0MU04jZvGKtwDyAaJYx1Ns%2Fk9balyY7Mgnfy4MAoQPPAyxR8i9GAlUUC7RZGYS9eHt2A29Ysj%2F7lbVI8WQahrs5AOV3zLDI3sP3pp55YskdB6DMOd4PE99Tsz%2B2A76KgcQAeTt%2BOVV4rdo%2BdIIKG2lApHsDk3lZ5XYiwyL9ZgIjKGKZUi3IWzRjMCHNr2YRMcS8WHMeCQep7QUiwkn223Iy8mXYAT%2B3DIerbgjpOQ3yd481ORVY6KNJasDhVouiBEGYtkIi%2FPdI5xZYhaLEXJv%2FUYKyah7qCgJEjJFnkjHQcPvn%2Fyw1X0mkDFPWH8gD0tLqUKUs1bqldk57Jrdt9JBcHNiOWSGDS0kZGNrzqsiRNOB46EgLs%2B315u4s6SYWtBIMgWgAYt5nqWE2JDMCbB0RIPmMeEfjykLa83jKi5WvfrB5ngrCcowvKb69KsRU47pEr4msCdgQWm23BL1uBx%2FHKKJRRfqHzakWnubYdCcrbsqk0o1JoSzXRrZ43qBkgWx%2FOZhExZGNAV1FhQ1rkBFXUt50QEK6Db9YXC1J4yP14UDXDq%2FH1xzAwIG7W0HNkb9eyI%2BheAIp5sxtZBGMerNkfV7YukDRsczH%2FZeAh%2FXu83pHKzXkJIAReu%2BWLG%2B7z9AdD6%2FWQwoeXywAY6pgFSJ6oIv%2FsAVUs%2FqvC1mijKOsBYBWaq4Yx%2F69BUoWN9Cs7ABP3qxqeVwfVZUm%2B8%2FgAetyHvtl5bE96AYrfI1XtLuRzncsG8AoGag88cpAGORRtjvpo5pvhSjzXub4GTv3ybHdexLD7kdHhgT9G%2F%2B7stIVrGgmxks3wPtD0YBJFyLvfJ9YhVn7vID6LyIhKMmWARG1Ej8Ch35lNYbDBLb7XgukTWzXgz&X-Amz-Signature=68710562ec7b31203d0b7fa2ac5a57cf1bb9ce3e1ec59e3538488618fb691fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGKWZ7G%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnmCwuL7tWzaos2KlJ3o6hR0D21CeOsRw0uzlMMuKaAiBvpluGzBWT4obWFYMZh91civgzInRoEN64c6UrStrMbSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMN%2F%2F9Z%2FR0MU04jZvGKtwDyAaJYx1Ns%2Fk9balyY7Mgnfy4MAoQPPAyxR8i9GAlUUC7RZGYS9eHt2A29Ysj%2F7lbVI8WQahrs5AOV3zLDI3sP3pp55YskdB6DMOd4PE99Tsz%2B2A76KgcQAeTt%2BOVV4rdo%2BdIIKG2lApHsDk3lZ5XYiwyL9ZgIjKGKZUi3IWzRjMCHNr2YRMcS8WHMeCQep7QUiwkn223Iy8mXYAT%2B3DIerbgjpOQ3yd481ORVY6KNJasDhVouiBEGYtkIi%2FPdI5xZYhaLEXJv%2FUYKyah7qCgJEjJFnkjHQcPvn%2Fyw1X0mkDFPWH8gD0tLqUKUs1bqldk57Jrdt9JBcHNiOWSGDS0kZGNrzqsiRNOB46EgLs%2B315u4s6SYWtBIMgWgAYt5nqWE2JDMCbB0RIPmMeEfjykLa83jKi5WvfrB5ngrCcowvKb69KsRU47pEr4msCdgQWm23BL1uBx%2FHKKJRRfqHzakWnubYdCcrbsqk0o1JoSzXRrZ43qBkgWx%2FOZhExZGNAV1FhQ1rkBFXUt50QEK6Db9YXC1J4yP14UDXDq%2FH1xzAwIG7W0HNkb9eyI%2BheAIp5sxtZBGMerNkfV7YukDRsczH%2FZeAh%2FXu83pHKzXkJIAReu%2BWLG%2B7z9AdD6%2FWQwoeXywAY6pgFSJ6oIv%2FsAVUs%2FqvC1mijKOsBYBWaq4Yx%2F69BUoWN9Cs7ABP3qxqeVwfVZUm%2B8%2FgAetyHvtl5bE96AYrfI1XtLuRzncsG8AoGag88cpAGORRtjvpo5pvhSjzXub4GTv3ybHdexLD7kdHhgT9G%2F%2B7stIVrGgmxks3wPtD0YBJFyLvfJ9YhVn7vID6LyIhKMmWARG1Ej8Ch35lNYbDBLb7XgukTWzXgz&X-Amz-Signature=69854b919396eb9a30686b1b750b04e19857e6ccc2251f764f827e68d496b62d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
