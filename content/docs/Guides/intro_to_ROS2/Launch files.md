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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQZXOWU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICq7p9%2Bmu7fHiiaXWb3cta2hdSRf01N5w8ZYEfbbN1VzAiEA0YvqgxoqODlijwtmV9LIrXp2maeB85Onl58W9HO86LwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgZaUO4Nju8v3lHWSrcA%2Fisc0S3Ah%2FEmvUVElHzJrNVY0ZYQKok0ZiGRPmJmr82Vt8zxHw1HRaha4M0QP1VYiNAowXXfk9G5fv2UU2MiBiHvG4IDLE4yHyP6fwSmN8OxdIzOwHaaBbCTzjUnYL2iFM1tbrDiRhME6vFlfJWdyrVg4BNo5IVJ1iOAQPpHPgLsJiMnmv%2BqLPY6RbjWastOQvMMlp%2BFhFYM8ycQ3Su8Dbd1Qw5OMI%2Fl4tmJkQxgts%2BNagGW2rkknCxbANzUhFNuhNZuic6oqibYxicblclwYi8SH%2FEf8n18cU0XeZQ2eNomokjUJByF04s1Zg3qUyvZSt43paBcpZuhWRIQrW4l9q2irY6R2vGOJdgctLfHWxabIHJS65eVlPL3tjYSkQLM1Qhd%2Fxjer5V%2BCAA6J0gL4eMI4HSpYe9x%2BJSEABG6y1V8GgjC1RhajysNVQBIzs0JX8yt3PBLu%2B2MsI4MKPxFQW0sGQYBKKVpVivKbO2QjicbvLNQT08lozU7muUMz3EVeBrkQ3NJfcbHAYYsX%2FhjiOZURdanrwryListAWJFh4x7BC5SvKwqMlvniVJ7avEHG%2B6D%2Fe%2F3QSYxTroNYXSsb4lSTrrYzDfGdMi4gC8G%2BZdoToxQF0FaUxBAkbxMJOYs8EGOqUBPu7FZZKb%2FOxwrbMzcxtwBNOL%2FxgVeTUMUqTKswI7EBdeSuxvNGKbnCSnUovQB31u8wV6EqqRJrjYxwxF7E7REsTszSMtkFe2bbxK9AxUMwEiTCeXTHRQvHYzSGaHQTBLNE86P0TR0XABpgGr86evxHK5ExN9I10E7BrPo27sL4BCpiJBpMHgFHYhmRRmbF0AbRkRy9A6z6YG6U2n766r9YXl0Ce%2F&X-Amz-Signature=41561f8c4761ca10b01fa5140d29afaa8c7ff61d758ad975c8df66e053a8a36e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQZXOWU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICq7p9%2Bmu7fHiiaXWb3cta2hdSRf01N5w8ZYEfbbN1VzAiEA0YvqgxoqODlijwtmV9LIrXp2maeB85Onl58W9HO86LwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgZaUO4Nju8v3lHWSrcA%2Fisc0S3Ah%2FEmvUVElHzJrNVY0ZYQKok0ZiGRPmJmr82Vt8zxHw1HRaha4M0QP1VYiNAowXXfk9G5fv2UU2MiBiHvG4IDLE4yHyP6fwSmN8OxdIzOwHaaBbCTzjUnYL2iFM1tbrDiRhME6vFlfJWdyrVg4BNo5IVJ1iOAQPpHPgLsJiMnmv%2BqLPY6RbjWastOQvMMlp%2BFhFYM8ycQ3Su8Dbd1Qw5OMI%2Fl4tmJkQxgts%2BNagGW2rkknCxbANzUhFNuhNZuic6oqibYxicblclwYi8SH%2FEf8n18cU0XeZQ2eNomokjUJByF04s1Zg3qUyvZSt43paBcpZuhWRIQrW4l9q2irY6R2vGOJdgctLfHWxabIHJS65eVlPL3tjYSkQLM1Qhd%2Fxjer5V%2BCAA6J0gL4eMI4HSpYe9x%2BJSEABG6y1V8GgjC1RhajysNVQBIzs0JX8yt3PBLu%2B2MsI4MKPxFQW0sGQYBKKVpVivKbO2QjicbvLNQT08lozU7muUMz3EVeBrkQ3NJfcbHAYYsX%2FhjiOZURdanrwryListAWJFh4x7BC5SvKwqMlvniVJ7avEHG%2B6D%2Fe%2F3QSYxTroNYXSsb4lSTrrYzDfGdMi4gC8G%2BZdoToxQF0FaUxBAkbxMJOYs8EGOqUBPu7FZZKb%2FOxwrbMzcxtwBNOL%2FxgVeTUMUqTKswI7EBdeSuxvNGKbnCSnUovQB31u8wV6EqqRJrjYxwxF7E7REsTszSMtkFe2bbxK9AxUMwEiTCeXTHRQvHYzSGaHQTBLNE86P0TR0XABpgGr86evxHK5ExN9I10E7BrPo27sL4BCpiJBpMHgFHYhmRRmbF0AbRkRy9A6z6YG6U2n766r9YXl0Ce%2F&X-Amz-Signature=ab0b3370f0137d81cf5c09acc065c11d32a99a24e865098256f5c540c69b71ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQZXOWU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICq7p9%2Bmu7fHiiaXWb3cta2hdSRf01N5w8ZYEfbbN1VzAiEA0YvqgxoqODlijwtmV9LIrXp2maeB85Onl58W9HO86LwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgZaUO4Nju8v3lHWSrcA%2Fisc0S3Ah%2FEmvUVElHzJrNVY0ZYQKok0ZiGRPmJmr82Vt8zxHw1HRaha4M0QP1VYiNAowXXfk9G5fv2UU2MiBiHvG4IDLE4yHyP6fwSmN8OxdIzOwHaaBbCTzjUnYL2iFM1tbrDiRhME6vFlfJWdyrVg4BNo5IVJ1iOAQPpHPgLsJiMnmv%2BqLPY6RbjWastOQvMMlp%2BFhFYM8ycQ3Su8Dbd1Qw5OMI%2Fl4tmJkQxgts%2BNagGW2rkknCxbANzUhFNuhNZuic6oqibYxicblclwYi8SH%2FEf8n18cU0XeZQ2eNomokjUJByF04s1Zg3qUyvZSt43paBcpZuhWRIQrW4l9q2irY6R2vGOJdgctLfHWxabIHJS65eVlPL3tjYSkQLM1Qhd%2Fxjer5V%2BCAA6J0gL4eMI4HSpYe9x%2BJSEABG6y1V8GgjC1RhajysNVQBIzs0JX8yt3PBLu%2B2MsI4MKPxFQW0sGQYBKKVpVivKbO2QjicbvLNQT08lozU7muUMz3EVeBrkQ3NJfcbHAYYsX%2FhjiOZURdanrwryListAWJFh4x7BC5SvKwqMlvniVJ7avEHG%2B6D%2Fe%2F3QSYxTroNYXSsb4lSTrrYzDfGdMi4gC8G%2BZdoToxQF0FaUxBAkbxMJOYs8EGOqUBPu7FZZKb%2FOxwrbMzcxtwBNOL%2FxgVeTUMUqTKswI7EBdeSuxvNGKbnCSnUovQB31u8wV6EqqRJrjYxwxF7E7REsTszSMtkFe2bbxK9AxUMwEiTCeXTHRQvHYzSGaHQTBLNE86P0TR0XABpgGr86evxHK5ExN9I10E7BrPo27sL4BCpiJBpMHgFHYhmRRmbF0AbRkRy9A6z6YG6U2n766r9YXl0Ce%2F&X-Amz-Signature=7980e1ae3d830f95f2a81e956d0d7c6d9e8c7373f409357942cec30b347c87dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
