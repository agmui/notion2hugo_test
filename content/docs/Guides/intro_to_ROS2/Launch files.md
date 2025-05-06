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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKTHL3V%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzUYH4j%2BwJ3pX%2FHzs2WPt2E9NGzIkMbEoq3glvwHtlCAiEA4qKJnDAHpiWUszRFg5xVolhY8Zt2Zx4s4XocJ2Ko1Hkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBs1OB2rvlqQxvuzMCrcAwcPDhzlsyUpYFUcu4N%2BXpmeiH%2FdNX13D2q3gN4vLxkpO6kRdFXxdLwFlR95aFzAStCoMdE77cqG1KwHXRBjSIKZBzJnA22RqRmvapIvFnqOO0C5Z53oo4DMFU%2B0Jt98dJnST1cWm1G0D3CDUC7h5h7yTfEwHLT0K0PV9QD6TXWN5UTGP31KWqDHKAd390PyUH3KntyCqdmdGHy1YkfUM1Sw7uhG0oXCVpwyvnPU9ykS5UKAZNmC9h6dD1TF%2FkSEzRsv2%2F%2FBlSYKEu7P%2FNcrKkIYXkZwk%2BPVjJFArwLP3CFGmGaCWq1%2BOrDU8e3Vi2OxEhw7iVzKnWF7S0BQhVrrgDBuSh0zsLOyV3aVb5DVUECY6%2Bl1nPlYkF1ZbpKHDXzej6YrXk99qgyXJrDvLrmLmt4ajWmbU%2Fxry29DDWfUiKYUL4F%2Br8bSBEK%2BEx%2B03OA7DrwhC7py%2BWOfrddKxPTdriajAePklQCHwWNuD4JqoroLLnKvXErqBqxuyA%2BD9H4Vbo5d3RPUSgFJ51zcd612bNP6Zp3PD0d67EdOk%2F1ZnP1Wyzp1x6k5H%2BPWDtWBbG2WvD9efoykgBhDav9Fx6ZFosUQLhguQzcSq6oiA%2B3XfSivgH9aXniY896iPO3TMMmL58AGOqUB05GdgAXrHL95rlWZ1O9lzjeRzr6JtWGlB4nCjyPbZo8SB2gOfJXh%2FcEIT3yeHVAfE0jXjlYj0wQicLXFESxi5uowZQyHHDoEzbQBqM3Vw5j%2BITZtNdf%2Bzspz0DiTTz6E94PUXaMm1T0s5PS%2FkvvACgZ27MAyvhHaJA7jkyWGK8jLlnfTzod08iRRcihIkYuIWqcBL%2BlLdPPBoe4ZvTllXVroXD90&X-Amz-Signature=f1c086f2f731e9d832314935f42029f6e17e8c23321c0c3aca0f5efd25a79dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKTHL3V%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzUYH4j%2BwJ3pX%2FHzs2WPt2E9NGzIkMbEoq3glvwHtlCAiEA4qKJnDAHpiWUszRFg5xVolhY8Zt2Zx4s4XocJ2Ko1Hkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBs1OB2rvlqQxvuzMCrcAwcPDhzlsyUpYFUcu4N%2BXpmeiH%2FdNX13D2q3gN4vLxkpO6kRdFXxdLwFlR95aFzAStCoMdE77cqG1KwHXRBjSIKZBzJnA22RqRmvapIvFnqOO0C5Z53oo4DMFU%2B0Jt98dJnST1cWm1G0D3CDUC7h5h7yTfEwHLT0K0PV9QD6TXWN5UTGP31KWqDHKAd390PyUH3KntyCqdmdGHy1YkfUM1Sw7uhG0oXCVpwyvnPU9ykS5UKAZNmC9h6dD1TF%2FkSEzRsv2%2F%2FBlSYKEu7P%2FNcrKkIYXkZwk%2BPVjJFArwLP3CFGmGaCWq1%2BOrDU8e3Vi2OxEhw7iVzKnWF7S0BQhVrrgDBuSh0zsLOyV3aVb5DVUECY6%2Bl1nPlYkF1ZbpKHDXzej6YrXk99qgyXJrDvLrmLmt4ajWmbU%2Fxry29DDWfUiKYUL4F%2Br8bSBEK%2BEx%2B03OA7DrwhC7py%2BWOfrddKxPTdriajAePklQCHwWNuD4JqoroLLnKvXErqBqxuyA%2BD9H4Vbo5d3RPUSgFJ51zcd612bNP6Zp3PD0d67EdOk%2F1ZnP1Wyzp1x6k5H%2BPWDtWBbG2WvD9efoykgBhDav9Fx6ZFosUQLhguQzcSq6oiA%2B3XfSivgH9aXniY896iPO3TMMmL58AGOqUB05GdgAXrHL95rlWZ1O9lzjeRzr6JtWGlB4nCjyPbZo8SB2gOfJXh%2FcEIT3yeHVAfE0jXjlYj0wQicLXFESxi5uowZQyHHDoEzbQBqM3Vw5j%2BITZtNdf%2Bzspz0DiTTz6E94PUXaMm1T0s5PS%2FkvvACgZ27MAyvhHaJA7jkyWGK8jLlnfTzod08iRRcihIkYuIWqcBL%2BlLdPPBoe4ZvTllXVroXD90&X-Amz-Signature=de9398ecb39fdb57d17d006cfc4aca5b0a16b82b2ee023a10fef912c2ab9801f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKTHL3V%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzUYH4j%2BwJ3pX%2FHzs2WPt2E9NGzIkMbEoq3glvwHtlCAiEA4qKJnDAHpiWUszRFg5xVolhY8Zt2Zx4s4XocJ2Ko1Hkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBs1OB2rvlqQxvuzMCrcAwcPDhzlsyUpYFUcu4N%2BXpmeiH%2FdNX13D2q3gN4vLxkpO6kRdFXxdLwFlR95aFzAStCoMdE77cqG1KwHXRBjSIKZBzJnA22RqRmvapIvFnqOO0C5Z53oo4DMFU%2B0Jt98dJnST1cWm1G0D3CDUC7h5h7yTfEwHLT0K0PV9QD6TXWN5UTGP31KWqDHKAd390PyUH3KntyCqdmdGHy1YkfUM1Sw7uhG0oXCVpwyvnPU9ykS5UKAZNmC9h6dD1TF%2FkSEzRsv2%2F%2FBlSYKEu7P%2FNcrKkIYXkZwk%2BPVjJFArwLP3CFGmGaCWq1%2BOrDU8e3Vi2OxEhw7iVzKnWF7S0BQhVrrgDBuSh0zsLOyV3aVb5DVUECY6%2Bl1nPlYkF1ZbpKHDXzej6YrXk99qgyXJrDvLrmLmt4ajWmbU%2Fxry29DDWfUiKYUL4F%2Br8bSBEK%2BEx%2B03OA7DrwhC7py%2BWOfrddKxPTdriajAePklQCHwWNuD4JqoroLLnKvXErqBqxuyA%2BD9H4Vbo5d3RPUSgFJ51zcd612bNP6Zp3PD0d67EdOk%2F1ZnP1Wyzp1x6k5H%2BPWDtWBbG2WvD9efoykgBhDav9Fx6ZFosUQLhguQzcSq6oiA%2B3XfSivgH9aXniY896iPO3TMMmL58AGOqUB05GdgAXrHL95rlWZ1O9lzjeRzr6JtWGlB4nCjyPbZo8SB2gOfJXh%2FcEIT3yeHVAfE0jXjlYj0wQicLXFESxi5uowZQyHHDoEzbQBqM3Vw5j%2BITZtNdf%2Bzspz0DiTTz6E94PUXaMm1T0s5PS%2FkvvACgZ27MAyvhHaJA7jkyWGK8jLlnfTzod08iRRcihIkYuIWqcBL%2BlLdPPBoe4ZvTllXVroXD90&X-Amz-Signature=7aa910c0daf22d5c1c73a824fe868a255502f8ac00fb17f359b30c634dcefb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
