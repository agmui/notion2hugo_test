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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMIIC6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEFu0vm0w4fK%2FM%2Bot3lFC6zMDZW5gB7c5vTrGuLOaSOnAiEA9gNyL%2B50fhS1lK04npuiNSkzVhMUCN1BZRHcvZPxlRsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP0DN4p8O3kJfA2W5ircA2bUrocnSQUUbUnQY%2FaqbB3SpYT6d7wWZ6EzdE3s1EO45U0FPV6Tmrs2MISyxXsP9cfXySUy%2B%2FRJ7LFhGIfNeLhWrOfJF%2Bh%2F56%2BITYBGW7%2BAXGeg79QrC6QfuZ3rtdzxSo5m9%2F2oYTmbX1cimZ5bwzRAks2RzzrsybiIk%2FxMdSry34satdR7OtOkeDEvThNWjgXxGaqNGwvTa8ohITFSd%2F382E0nl3FyrA0p%2FGsE7yx3qEWpYsOrTtN%2BvzbPkNuAsH%2FDk5dBXc5RgmZTJn0wnPAnh9Fjaj40BY1LseDPD1rFyUM8JaM0Tq9ycnFuaVAHyrEuQ5pekcJm%2Fv3bjt6Yh3Ccab%2BwDZSZPAYveGKCNs7WCOKnVqIuIZcvAPU83IstYoBCIn9Ug1vt%2FzzUQ54Kn8KtWS%2F3R41UelOXROmlgCrlWZ9DbE2KBfdKNlirwE9BWOkf4G2Y1DE7%2BRdozayJFOC1JktqNMdoY0gdAE5kUVzPogba7rFRII6LHfrlSiespGgGmtuTmt5mKriwG%2BWlCz1jeqpj94rFWJ75LEqMsU8JuMJPlIUby2DqDgtyIw4KM3gdkM6shVoRTjlspuQazc4LeQI0m9bLGG%2Fhb8setzxMvxySOtlct6oH3lK0MOXY%2FsQGOqUBpinmmk%2BxxwEu6ygtdfbMeGqqTcY%2FuP15e4x6SCQ0qyR%2F1ahQYpQ2MbzQMj4C0d%2Ffbq5caWVW1WgIwQrmz8oRZXPlcVkKKOUxiIQ86VNeFin3L8lnMbc9vsJxPQqw%2FDGZrqg88nNmefJNoO5bThQ9gfABjgveKR9bogxWu8SjEQIIGrDbC99yMLgEk%2F6Iz0HzjBSZVn2LWmSw4FGepzh4rd7X%2FuhN&X-Amz-Signature=a693e09298ed3b08c47729678a6600ed82d54ae683c103841be45103cee34fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMIIC6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEFu0vm0w4fK%2FM%2Bot3lFC6zMDZW5gB7c5vTrGuLOaSOnAiEA9gNyL%2B50fhS1lK04npuiNSkzVhMUCN1BZRHcvZPxlRsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP0DN4p8O3kJfA2W5ircA2bUrocnSQUUbUnQY%2FaqbB3SpYT6d7wWZ6EzdE3s1EO45U0FPV6Tmrs2MISyxXsP9cfXySUy%2B%2FRJ7LFhGIfNeLhWrOfJF%2Bh%2F56%2BITYBGW7%2BAXGeg79QrC6QfuZ3rtdzxSo5m9%2F2oYTmbX1cimZ5bwzRAks2RzzrsybiIk%2FxMdSry34satdR7OtOkeDEvThNWjgXxGaqNGwvTa8ohITFSd%2F382E0nl3FyrA0p%2FGsE7yx3qEWpYsOrTtN%2BvzbPkNuAsH%2FDk5dBXc5RgmZTJn0wnPAnh9Fjaj40BY1LseDPD1rFyUM8JaM0Tq9ycnFuaVAHyrEuQ5pekcJm%2Fv3bjt6Yh3Ccab%2BwDZSZPAYveGKCNs7WCOKnVqIuIZcvAPU83IstYoBCIn9Ug1vt%2FzzUQ54Kn8KtWS%2F3R41UelOXROmlgCrlWZ9DbE2KBfdKNlirwE9BWOkf4G2Y1DE7%2BRdozayJFOC1JktqNMdoY0gdAE5kUVzPogba7rFRII6LHfrlSiespGgGmtuTmt5mKriwG%2BWlCz1jeqpj94rFWJ75LEqMsU8JuMJPlIUby2DqDgtyIw4KM3gdkM6shVoRTjlspuQazc4LeQI0m9bLGG%2Fhb8setzxMvxySOtlct6oH3lK0MOXY%2FsQGOqUBpinmmk%2BxxwEu6ygtdfbMeGqqTcY%2FuP15e4x6SCQ0qyR%2F1ahQYpQ2MbzQMj4C0d%2Ffbq5caWVW1WgIwQrmz8oRZXPlcVkKKOUxiIQ86VNeFin3L8lnMbc9vsJxPQqw%2FDGZrqg88nNmefJNoO5bThQ9gfABjgveKR9bogxWu8SjEQIIGrDbC99yMLgEk%2F6Iz0HzjBSZVn2LWmSw4FGepzh4rd7X%2FuhN&X-Amz-Signature=25c0c08c00b377772d59c55381169fd9a5e075ea40094d1a8cd8d30cb5de9e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMIIC6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEFu0vm0w4fK%2FM%2Bot3lFC6zMDZW5gB7c5vTrGuLOaSOnAiEA9gNyL%2B50fhS1lK04npuiNSkzVhMUCN1BZRHcvZPxlRsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP0DN4p8O3kJfA2W5ircA2bUrocnSQUUbUnQY%2FaqbB3SpYT6d7wWZ6EzdE3s1EO45U0FPV6Tmrs2MISyxXsP9cfXySUy%2B%2FRJ7LFhGIfNeLhWrOfJF%2Bh%2F56%2BITYBGW7%2BAXGeg79QrC6QfuZ3rtdzxSo5m9%2F2oYTmbX1cimZ5bwzRAks2RzzrsybiIk%2FxMdSry34satdR7OtOkeDEvThNWjgXxGaqNGwvTa8ohITFSd%2F382E0nl3FyrA0p%2FGsE7yx3qEWpYsOrTtN%2BvzbPkNuAsH%2FDk5dBXc5RgmZTJn0wnPAnh9Fjaj40BY1LseDPD1rFyUM8JaM0Tq9ycnFuaVAHyrEuQ5pekcJm%2Fv3bjt6Yh3Ccab%2BwDZSZPAYveGKCNs7WCOKnVqIuIZcvAPU83IstYoBCIn9Ug1vt%2FzzUQ54Kn8KtWS%2F3R41UelOXROmlgCrlWZ9DbE2KBfdKNlirwE9BWOkf4G2Y1DE7%2BRdozayJFOC1JktqNMdoY0gdAE5kUVzPogba7rFRII6LHfrlSiespGgGmtuTmt5mKriwG%2BWlCz1jeqpj94rFWJ75LEqMsU8JuMJPlIUby2DqDgtyIw4KM3gdkM6shVoRTjlspuQazc4LeQI0m9bLGG%2Fhb8setzxMvxySOtlct6oH3lK0MOXY%2FsQGOqUBpinmmk%2BxxwEu6ygtdfbMeGqqTcY%2FuP15e4x6SCQ0qyR%2F1ahQYpQ2MbzQMj4C0d%2Ffbq5caWVW1WgIwQrmz8oRZXPlcVkKKOUxiIQ86VNeFin3L8lnMbc9vsJxPQqw%2FDGZrqg88nNmefJNoO5bThQ9gfABjgveKR9bogxWu8SjEQIIGrDbC99yMLgEk%2F6Iz0HzjBSZVn2LWmSw4FGepzh4rd7X%2FuhN&X-Amz-Signature=8750086d6c3ec3b6b8df8da9bf3fec9f3503ce80810d405a429acc082962758d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
