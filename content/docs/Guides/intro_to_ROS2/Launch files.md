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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67KIWGY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvKCmpmbnNHgr48BxAbXQ%2B%2BCW%2BY2frH1bfbh%2BQfoTo1QIgVI%2FYLu6stCm24Cp2idCYRsq18rWEJHbj9TdF7Lvs%2FOgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bra7bDEWuY3LcwsyrcA1iqyCZYNfU8mzjvgFJKi31%2FB9t1CVRtqZH8Pt82z%2B4c6xHhw%2BksDwfWoO0D%2BvfGl7Cn9y%2FDh5wJHT6nFkufFHiNPKyknQJMqtYt3keX0DqqZi%2BPrjCHTgMjQmWReqaBA8Sc%2FBJdZ29PuyK40OUVRM9OoeeTGzXDNjcimLUB4NAU5XPUJpyyUQd9lphz5bCPayGLj4DjJH8GJ%2Ba1DD4V1nk%2FIh89YjhPDMQGhWh8XYKkPy4ZuKQYdlTvaW6G4I0Wwtia03XAN5SCz7O3e%2FYgYEBkwrvtKpHGLJL%2FEDY5jIXQtBOMGNiZ6oe4BssUHkiPY%2BaCQXsH1xRDrG%2BEh0Jb%2BgIcIUYe1tHCtokQewwU0O0fOVgPRIYOnHjWjlVMseiP9zmBGiOEqQSWrRZoEsAIt%2BkD1l7OdDy5ca5YckdNp2wMmZxIYIfTMfNf9X1HEcQh%2BOonlt%2FpCBMusnhoLlQoiyYnMr4y9bk4iXFSEnszWbcQLuq1eBf6KfDiG%2BYSAL2CUQuCUlMp5drDrRYn2TF76cKbxeijMJrn0ERYCxJ0A31bmweUM9Nzx1JxTVbB9kjYdf6pSXPTpCd3mdS6Y%2FcRMBH71DQXneVsUJ49VYPwwIyAsPcvghFzPK%2FE1vboMNHJpMIGOqUBrK4FX%2BE5jOvxbqy4gIFPFVt5MASS2KWSr70JKFTZYQcUyVDDe0IfLfN%2BdHTKoWkiQoJjL3Ucs3mNsO4a5XPvtin8PDHQpIDbD%2Bq7wVcF7Bc6UsMZHuwhMdxikBVAHVIfVY%2FcwG5VkpfQ5%2FxqhGFHFxW5Y84kHGZLH3Or5LIwM%2BHSTfz4uw74YhqxjcBwaZG5dtgDwvRRl1v3pBVpDeEGLO7x5lna&X-Amz-Signature=7f85d38c17399cc041c8bded51636a8404b39aacb68c164bafa8aface396b3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67KIWGY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvKCmpmbnNHgr48BxAbXQ%2B%2BCW%2BY2frH1bfbh%2BQfoTo1QIgVI%2FYLu6stCm24Cp2idCYRsq18rWEJHbj9TdF7Lvs%2FOgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bra7bDEWuY3LcwsyrcA1iqyCZYNfU8mzjvgFJKi31%2FB9t1CVRtqZH8Pt82z%2B4c6xHhw%2BksDwfWoO0D%2BvfGl7Cn9y%2FDh5wJHT6nFkufFHiNPKyknQJMqtYt3keX0DqqZi%2BPrjCHTgMjQmWReqaBA8Sc%2FBJdZ29PuyK40OUVRM9OoeeTGzXDNjcimLUB4NAU5XPUJpyyUQd9lphz5bCPayGLj4DjJH8GJ%2Ba1DD4V1nk%2FIh89YjhPDMQGhWh8XYKkPy4ZuKQYdlTvaW6G4I0Wwtia03XAN5SCz7O3e%2FYgYEBkwrvtKpHGLJL%2FEDY5jIXQtBOMGNiZ6oe4BssUHkiPY%2BaCQXsH1xRDrG%2BEh0Jb%2BgIcIUYe1tHCtokQewwU0O0fOVgPRIYOnHjWjlVMseiP9zmBGiOEqQSWrRZoEsAIt%2BkD1l7OdDy5ca5YckdNp2wMmZxIYIfTMfNf9X1HEcQh%2BOonlt%2FpCBMusnhoLlQoiyYnMr4y9bk4iXFSEnszWbcQLuq1eBf6KfDiG%2BYSAL2CUQuCUlMp5drDrRYn2TF76cKbxeijMJrn0ERYCxJ0A31bmweUM9Nzx1JxTVbB9kjYdf6pSXPTpCd3mdS6Y%2FcRMBH71DQXneVsUJ49VYPwwIyAsPcvghFzPK%2FE1vboMNHJpMIGOqUBrK4FX%2BE5jOvxbqy4gIFPFVt5MASS2KWSr70JKFTZYQcUyVDDe0IfLfN%2BdHTKoWkiQoJjL3Ucs3mNsO4a5XPvtin8PDHQpIDbD%2Bq7wVcF7Bc6UsMZHuwhMdxikBVAHVIfVY%2FcwG5VkpfQ5%2FxqhGFHFxW5Y84kHGZLH3Or5LIwM%2BHSTfz4uw74YhqxjcBwaZG5dtgDwvRRl1v3pBVpDeEGLO7x5lna&X-Amz-Signature=84ba7e265077e1c8426642675e9cee091ba950f44a1cc5b8414385bf44461413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67KIWGY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvKCmpmbnNHgr48BxAbXQ%2B%2BCW%2BY2frH1bfbh%2BQfoTo1QIgVI%2FYLu6stCm24Cp2idCYRsq18rWEJHbj9TdF7Lvs%2FOgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bra7bDEWuY3LcwsyrcA1iqyCZYNfU8mzjvgFJKi31%2FB9t1CVRtqZH8Pt82z%2B4c6xHhw%2BksDwfWoO0D%2BvfGl7Cn9y%2FDh5wJHT6nFkufFHiNPKyknQJMqtYt3keX0DqqZi%2BPrjCHTgMjQmWReqaBA8Sc%2FBJdZ29PuyK40OUVRM9OoeeTGzXDNjcimLUB4NAU5XPUJpyyUQd9lphz5bCPayGLj4DjJH8GJ%2Ba1DD4V1nk%2FIh89YjhPDMQGhWh8XYKkPy4ZuKQYdlTvaW6G4I0Wwtia03XAN5SCz7O3e%2FYgYEBkwrvtKpHGLJL%2FEDY5jIXQtBOMGNiZ6oe4BssUHkiPY%2BaCQXsH1xRDrG%2BEh0Jb%2BgIcIUYe1tHCtokQewwU0O0fOVgPRIYOnHjWjlVMseiP9zmBGiOEqQSWrRZoEsAIt%2BkD1l7OdDy5ca5YckdNp2wMmZxIYIfTMfNf9X1HEcQh%2BOonlt%2FpCBMusnhoLlQoiyYnMr4y9bk4iXFSEnszWbcQLuq1eBf6KfDiG%2BYSAL2CUQuCUlMp5drDrRYn2TF76cKbxeijMJrn0ERYCxJ0A31bmweUM9Nzx1JxTVbB9kjYdf6pSXPTpCd3mdS6Y%2FcRMBH71DQXneVsUJ49VYPwwIyAsPcvghFzPK%2FE1vboMNHJpMIGOqUBrK4FX%2BE5jOvxbqy4gIFPFVt5MASS2KWSr70JKFTZYQcUyVDDe0IfLfN%2BdHTKoWkiQoJjL3Ucs3mNsO4a5XPvtin8PDHQpIDbD%2Bq7wVcF7Bc6UsMZHuwhMdxikBVAHVIfVY%2FcwG5VkpfQ5%2FxqhGFHFxW5Y84kHGZLH3Or5LIwM%2BHSTfz4uw74YhqxjcBwaZG5dtgDwvRRl1v3pBVpDeEGLO7x5lna&X-Amz-Signature=10034165a72e8acd1e1a4e1798b1233c8780ebe6a67922a9f5cca997b250d3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
