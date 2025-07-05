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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPGMRQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCHV196Thi3wRIWGpOibpK9FFCIF%2BAJexSFjAjCdQCFJgIhAPfWJSWGAFvdcOkwJTkzp6VSo0BHzRoPBDfvUvk3yNJmKv8DCEwQABoMNjM3NDIzMTgzODA1IgyrCkI%2FgF4urVB6a14q3AOLAlieogodEcSzD3ovhozQpkdW8h6KGdgJh9do%2BtE4yOoNSVsnXK%2BTGExfnR6uRCc9HL2Ckth3o46hNXU5aopMresIHX5tk1zUUM8DWQ4FfLN8B3fBsgUkniFWyTgZLuAz4TWAd9%2ByeKcXTaQVuXGQMaq%2BREt63MZHDInN7u7L3lKjN47IXk2id9HZV41ZNnNi88oNV5LRAvzSGQoVkejSCFLoAfS34%2BvA7J0c9PpCxAVNj6o%2BVgTknEXNZ4CPsUnODzxIHS6KjWWSxcFu7QvejTM3diIhdQdXNFseEiXo2J%2FORo1XaYy518yOEApl%2BS2HqnPgF3AUJAQSCygXVtpVhGfE%2FJnezATp39uq6NKQROQN4CAXTA6pkxHWBg1oBeuRhSdiWUHCDjXUux0vZ0EkrL%2BtC3pnD4z%2B678Lxb%2FF2dzi8jXoWlDPgzX0SbiZedeSxGGxqJuwEkrUEoAn0RfXrsxct0vLOahxOHIeR5npZvxSZ5zGRqi2i4tCnPk7FniG5PQb1168EDVJkFIBcMu9Q8aI2aheAjOYzdxshwPOTVgy3A%2Fg0A438%2B6yT%2FzIl4PpEE%2FWWIiPpcn9W6K02%2Fd%2F5amVe%2FNUvm64%2B%2BKD%2FymlmEzAuqjd%2FVxmdkyFGDCV66XDBjqkARAk8H2MV9cv0UgfzArkg6aeOb8a5OHRGrYYfKnbkOYJpZZy2HKVYZvUbnCNkcyc%2B7OBvKgiHNgjsbpkLNdkldAf6szXxy%2F6wFAuK%2BIagbYwzvxi2WN70XlvOm3jjY2gQJIyBkNoTeJ%2FgCBRnR8WbP3%2BwMtKwMbFiF4YgkEbyM4CRdZs%2BCVZ5uy%2BRbYy4mibLJ7dm%2FjzsGb1wsIFYs2xrbEQYpmR&X-Amz-Signature=ea107408611a344444c096dcbbfc8eff436d02ef4ff0ee46bdd697c9394e5550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPGMRQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCHV196Thi3wRIWGpOibpK9FFCIF%2BAJexSFjAjCdQCFJgIhAPfWJSWGAFvdcOkwJTkzp6VSo0BHzRoPBDfvUvk3yNJmKv8DCEwQABoMNjM3NDIzMTgzODA1IgyrCkI%2FgF4urVB6a14q3AOLAlieogodEcSzD3ovhozQpkdW8h6KGdgJh9do%2BtE4yOoNSVsnXK%2BTGExfnR6uRCc9HL2Ckth3o46hNXU5aopMresIHX5tk1zUUM8DWQ4FfLN8B3fBsgUkniFWyTgZLuAz4TWAd9%2ByeKcXTaQVuXGQMaq%2BREt63MZHDInN7u7L3lKjN47IXk2id9HZV41ZNnNi88oNV5LRAvzSGQoVkejSCFLoAfS34%2BvA7J0c9PpCxAVNj6o%2BVgTknEXNZ4CPsUnODzxIHS6KjWWSxcFu7QvejTM3diIhdQdXNFseEiXo2J%2FORo1XaYy518yOEApl%2BS2HqnPgF3AUJAQSCygXVtpVhGfE%2FJnezATp39uq6NKQROQN4CAXTA6pkxHWBg1oBeuRhSdiWUHCDjXUux0vZ0EkrL%2BtC3pnD4z%2B678Lxb%2FF2dzi8jXoWlDPgzX0SbiZedeSxGGxqJuwEkrUEoAn0RfXrsxct0vLOahxOHIeR5npZvxSZ5zGRqi2i4tCnPk7FniG5PQb1168EDVJkFIBcMu9Q8aI2aheAjOYzdxshwPOTVgy3A%2Fg0A438%2B6yT%2FzIl4PpEE%2FWWIiPpcn9W6K02%2Fd%2F5amVe%2FNUvm64%2B%2BKD%2FymlmEzAuqjd%2FVxmdkyFGDCV66XDBjqkARAk8H2MV9cv0UgfzArkg6aeOb8a5OHRGrYYfKnbkOYJpZZy2HKVYZvUbnCNkcyc%2B7OBvKgiHNgjsbpkLNdkldAf6szXxy%2F6wFAuK%2BIagbYwzvxi2WN70XlvOm3jjY2gQJIyBkNoTeJ%2FgCBRnR8WbP3%2BwMtKwMbFiF4YgkEbyM4CRdZs%2BCVZ5uy%2BRbYy4mibLJ7dm%2FjzsGb1wsIFYs2xrbEQYpmR&X-Amz-Signature=e842270460435761887c4be9451a51a69af3dc10b71e939c05829a865815ae57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QNPGMRQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCHV196Thi3wRIWGpOibpK9FFCIF%2BAJexSFjAjCdQCFJgIhAPfWJSWGAFvdcOkwJTkzp6VSo0BHzRoPBDfvUvk3yNJmKv8DCEwQABoMNjM3NDIzMTgzODA1IgyrCkI%2FgF4urVB6a14q3AOLAlieogodEcSzD3ovhozQpkdW8h6KGdgJh9do%2BtE4yOoNSVsnXK%2BTGExfnR6uRCc9HL2Ckth3o46hNXU5aopMresIHX5tk1zUUM8DWQ4FfLN8B3fBsgUkniFWyTgZLuAz4TWAd9%2ByeKcXTaQVuXGQMaq%2BREt63MZHDInN7u7L3lKjN47IXk2id9HZV41ZNnNi88oNV5LRAvzSGQoVkejSCFLoAfS34%2BvA7J0c9PpCxAVNj6o%2BVgTknEXNZ4CPsUnODzxIHS6KjWWSxcFu7QvejTM3diIhdQdXNFseEiXo2J%2FORo1XaYy518yOEApl%2BS2HqnPgF3AUJAQSCygXVtpVhGfE%2FJnezATp39uq6NKQROQN4CAXTA6pkxHWBg1oBeuRhSdiWUHCDjXUux0vZ0EkrL%2BtC3pnD4z%2B678Lxb%2FF2dzi8jXoWlDPgzX0SbiZedeSxGGxqJuwEkrUEoAn0RfXrsxct0vLOahxOHIeR5npZvxSZ5zGRqi2i4tCnPk7FniG5PQb1168EDVJkFIBcMu9Q8aI2aheAjOYzdxshwPOTVgy3A%2Fg0A438%2B6yT%2FzIl4PpEE%2FWWIiPpcn9W6K02%2Fd%2F5amVe%2FNUvm64%2B%2BKD%2FymlmEzAuqjd%2FVxmdkyFGDCV66XDBjqkARAk8H2MV9cv0UgfzArkg6aeOb8a5OHRGrYYfKnbkOYJpZZy2HKVYZvUbnCNkcyc%2B7OBvKgiHNgjsbpkLNdkldAf6szXxy%2F6wFAuK%2BIagbYwzvxi2WN70XlvOm3jjY2gQJIyBkNoTeJ%2FgCBRnR8WbP3%2BwMtKwMbFiF4YgkEbyM4CRdZs%2BCVZ5uy%2BRbYy4mibLJ7dm%2FjzsGb1wsIFYs2xrbEQYpmR&X-Amz-Signature=86dbf9cd116d4a36f673b8a3a574f5ccc42da97c4b6dc504256b1fec92a89bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
