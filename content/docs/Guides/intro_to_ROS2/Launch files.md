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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XFUXX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlX%2B1lpg7RjWhywcTFGX0eJpwEG3PngKWYb%2BIDil2cfwIhAN2yD8wpcCyNuBx%2FjWjdcf4u6cOyKn2AgCq2bSwod3WLKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj7ALDGJxaxt54r64q3AO%2BARXDOvG5dKFG%2BZy6aJviw6DJmIHM7wUNQaf%2F2bsyVAsJ5IMd5ty7cuP1g92NQkAU4nn7ytzJopggpMfj1nnnDjX3MUAMoZOdO%2BI9QahPFPplvT7KtSeiBr1WTrjXjuNpGAB3LYmrx8YtNpSV9djjXRAARUb%2BjHZMpWal3AGtOfyfhVH42yaXYfanw7RK4Rtqx3z1RACBQ2kxNA8dTFSxd%2Bztlewi6u20funDakamN8db9OFuhGhEP8XY%2BJiTPYU0inxMpGHi3YYoo68UKpViuXwq6iVzAot0GOSfvoPspL3AqcQ924g7lm1%2ByfNuWeMLzo%2Fi%2BHmp12W7jHwuwLuq8fEVZCw1lzE89IVuzMJlOuSjOFAv1Cmg8QxHgevlBYbgS7303%2Fs0Vrz07NMTt1vi4WILosK0OX9JbwaXYcejZyj3xsL1FNSRabYjzKZ1%2BSZo2Pg70BZZH%2FbteUFH%2B%2Ba7tYHG4ta2ISIoIwF0e13LxKi4k5DGDTgFFg%2FW2IgfgTK8YEJabMkg2fLGLyJfr%2FivRM9rGi2PcsR4AXodajt8kKsIEw0uEvO24MGEpDRBGbshDEYfz8hwf08%2BX2HlUq85wpJg8d%2BW9mu6HjiNYMiaIaqYwjs33nvzbnrKozDrkbG9BjqkAZDvYLsSTeG3i53ifhrfAhZwVr58BNP8ZOYDsQqjMuJ%2BfhPJvdKzw7NcNxiuano1%2Fo8yYshlooA%2FA1KPNy%2BqRcY%2BoqbcqeRT%2BGUzyey9pg%2BsYKtf96xxS%2BJogqxVU09DC0QWWUWuR1ZQPyhlGwYlpKOexGWpbtA38UD52jbHXlcyLJK16iR7Tr1M%2FlWrPn10b17%2FfMUSwjrXxP9pmwef6yObpLS3&X-Amz-Signature=0170a4e763fc727114f4619cdd60b6fc2c50cd77b41d96021e4fc6b87d073553&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XFUXX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlX%2B1lpg7RjWhywcTFGX0eJpwEG3PngKWYb%2BIDil2cfwIhAN2yD8wpcCyNuBx%2FjWjdcf4u6cOyKn2AgCq2bSwod3WLKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj7ALDGJxaxt54r64q3AO%2BARXDOvG5dKFG%2BZy6aJviw6DJmIHM7wUNQaf%2F2bsyVAsJ5IMd5ty7cuP1g92NQkAU4nn7ytzJopggpMfj1nnnDjX3MUAMoZOdO%2BI9QahPFPplvT7KtSeiBr1WTrjXjuNpGAB3LYmrx8YtNpSV9djjXRAARUb%2BjHZMpWal3AGtOfyfhVH42yaXYfanw7RK4Rtqx3z1RACBQ2kxNA8dTFSxd%2Bztlewi6u20funDakamN8db9OFuhGhEP8XY%2BJiTPYU0inxMpGHi3YYoo68UKpViuXwq6iVzAot0GOSfvoPspL3AqcQ924g7lm1%2ByfNuWeMLzo%2Fi%2BHmp12W7jHwuwLuq8fEVZCw1lzE89IVuzMJlOuSjOFAv1Cmg8QxHgevlBYbgS7303%2Fs0Vrz07NMTt1vi4WILosK0OX9JbwaXYcejZyj3xsL1FNSRabYjzKZ1%2BSZo2Pg70BZZH%2FbteUFH%2B%2Ba7tYHG4ta2ISIoIwF0e13LxKi4k5DGDTgFFg%2FW2IgfgTK8YEJabMkg2fLGLyJfr%2FivRM9rGi2PcsR4AXodajt8kKsIEw0uEvO24MGEpDRBGbshDEYfz8hwf08%2BX2HlUq85wpJg8d%2BW9mu6HjiNYMiaIaqYwjs33nvzbnrKozDrkbG9BjqkAZDvYLsSTeG3i53ifhrfAhZwVr58BNP8ZOYDsQqjMuJ%2BfhPJvdKzw7NcNxiuano1%2Fo8yYshlooA%2FA1KPNy%2BqRcY%2BoqbcqeRT%2BGUzyey9pg%2BsYKtf96xxS%2BJogqxVU09DC0QWWUWuR1ZQPyhlGwYlpKOexGWpbtA38UD52jbHXlcyLJK16iR7Tr1M%2FlWrPn10b17%2FfMUSwjrXxP9pmwef6yObpLS3&X-Amz-Signature=d6753549a151d47ed5fbf00cd7e98415a98cc6397a3eee08fc15d544213128c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XFUXX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlX%2B1lpg7RjWhywcTFGX0eJpwEG3PngKWYb%2BIDil2cfwIhAN2yD8wpcCyNuBx%2FjWjdcf4u6cOyKn2AgCq2bSwod3WLKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj7ALDGJxaxt54r64q3AO%2BARXDOvG5dKFG%2BZy6aJviw6DJmIHM7wUNQaf%2F2bsyVAsJ5IMd5ty7cuP1g92NQkAU4nn7ytzJopggpMfj1nnnDjX3MUAMoZOdO%2BI9QahPFPplvT7KtSeiBr1WTrjXjuNpGAB3LYmrx8YtNpSV9djjXRAARUb%2BjHZMpWal3AGtOfyfhVH42yaXYfanw7RK4Rtqx3z1RACBQ2kxNA8dTFSxd%2Bztlewi6u20funDakamN8db9OFuhGhEP8XY%2BJiTPYU0inxMpGHi3YYoo68UKpViuXwq6iVzAot0GOSfvoPspL3AqcQ924g7lm1%2ByfNuWeMLzo%2Fi%2BHmp12W7jHwuwLuq8fEVZCw1lzE89IVuzMJlOuSjOFAv1Cmg8QxHgevlBYbgS7303%2Fs0Vrz07NMTt1vi4WILosK0OX9JbwaXYcejZyj3xsL1FNSRabYjzKZ1%2BSZo2Pg70BZZH%2FbteUFH%2B%2Ba7tYHG4ta2ISIoIwF0e13LxKi4k5DGDTgFFg%2FW2IgfgTK8YEJabMkg2fLGLyJfr%2FivRM9rGi2PcsR4AXodajt8kKsIEw0uEvO24MGEpDRBGbshDEYfz8hwf08%2BX2HlUq85wpJg8d%2BW9mu6HjiNYMiaIaqYwjs33nvzbnrKozDrkbG9BjqkAZDvYLsSTeG3i53ifhrfAhZwVr58BNP8ZOYDsQqjMuJ%2BfhPJvdKzw7NcNxiuano1%2Fo8yYshlooA%2FA1KPNy%2BqRcY%2BoqbcqeRT%2BGUzyey9pg%2BsYKtf96xxS%2BJogqxVU09DC0QWWUWuR1ZQPyhlGwYlpKOexGWpbtA38UD52jbHXlcyLJK16iR7Tr1M%2FlWrPn10b17%2FfMUSwjrXxP9pmwef6yObpLS3&X-Amz-Signature=ff5a81eb21bb531797835081caa14eff18dbcf486b0b67c6d01aedc5774f02fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
