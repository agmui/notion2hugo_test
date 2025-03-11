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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHI5EXD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDZ32Vg3z%2B7tJFSSl4dZpbuqEJO3WUFx6mPH%2BlZVVEziwIhANOcRUx0nKICBZ0gicLXfD2SP2%2BbVC1F%2BlHXftmcBGfXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXaudaXysy5U6XEQq3AOLjtzVgT1JxvIYZ3ncZl3K45766yN4a7s0QQeXPr%2FNvaGiEYvwy1sF%2FLgThmItXMi0weQAf9hbsIclN3HxmduCy3KsrZQb9CzQ4YWOeS2inpv3gbYpdaH8Dt2lFjtkmE4NKPZLqD8Gb8hX0l0aNj05TlkSH4vwBmOZCiqVoOrVBXPfdyKxVJgb6YZISs3NOFHv4fitdrdaMM5M8T8G7NBmR9hAVx65RTi2UHE3tY%2F7XcIIdDl1Ryz8VxdyabzFJt3QNbMqWRTvBCaGhT0K9LArJEn2WdVr5t28xvk9qRl5HzstZ79YX1psCksKUiSgx8uAFlprPaBeSKr%2BLFhWpYDQNUHtK18rcPjwpqFa6eo4Q%2Bjs9I4YF9fJ1ctiN5aAgPnDcsfS3W%2BDTpFcx9ruB5xYGHVMRxwNCYMMGWo0ZLsHdL3SiK3HP%2FfizjBtLeUEgxNON7REQ05a9D3l%2FvvIJSjX6yoqI9TvXgQMhkzi8X272lgdYLF6Q49qxUUAD23OeYoFGzsnjHWwEzuy860VZ3VVwZCwJnUJNz5q3Jy0ayo8i8aSFaCf4s21rKJGTUTNRokMe%2BBNxiHZNpQ8oqs0GVpFbZ3sv2gQW9OVIzV3NFj6tBk%2F%2BzdzniCLWrGCgDCVkMK%2BBjqkAXqqbL0BcVwuxMdYiCH2NqpRjxJSsTeNVsFTuh2o9QW3vU3PAFmTbmzjl%2FXXonScphb%2BYG3ocY2yXW6HF94fVk%2FSVfdf71ShLaBfDLHww%2FWbZ%2FMocCyZVu6wYq%2FXEDjLSvjrY%2BBlQ7DfRzETaUCEcEmdvJBQJD%2B%2B%2F4ih6Qt5A%2Bc66T%2FiwMIEeIRK1584pSddAqQIhL%2BkKjysGWK3XNotBiY6Ner%2F&X-Amz-Signature=66f9317739396bb786e9ac05d9b9657ff84732c6e7767bf845171d75a0141087&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHI5EXD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDZ32Vg3z%2B7tJFSSl4dZpbuqEJO3WUFx6mPH%2BlZVVEziwIhANOcRUx0nKICBZ0gicLXfD2SP2%2BbVC1F%2BlHXftmcBGfXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXaudaXysy5U6XEQq3AOLjtzVgT1JxvIYZ3ncZl3K45766yN4a7s0QQeXPr%2FNvaGiEYvwy1sF%2FLgThmItXMi0weQAf9hbsIclN3HxmduCy3KsrZQb9CzQ4YWOeS2inpv3gbYpdaH8Dt2lFjtkmE4NKPZLqD8Gb8hX0l0aNj05TlkSH4vwBmOZCiqVoOrVBXPfdyKxVJgb6YZISs3NOFHv4fitdrdaMM5M8T8G7NBmR9hAVx65RTi2UHE3tY%2F7XcIIdDl1Ryz8VxdyabzFJt3QNbMqWRTvBCaGhT0K9LArJEn2WdVr5t28xvk9qRl5HzstZ79YX1psCksKUiSgx8uAFlprPaBeSKr%2BLFhWpYDQNUHtK18rcPjwpqFa6eo4Q%2Bjs9I4YF9fJ1ctiN5aAgPnDcsfS3W%2BDTpFcx9ruB5xYGHVMRxwNCYMMGWo0ZLsHdL3SiK3HP%2FfizjBtLeUEgxNON7REQ05a9D3l%2FvvIJSjX6yoqI9TvXgQMhkzi8X272lgdYLF6Q49qxUUAD23OeYoFGzsnjHWwEzuy860VZ3VVwZCwJnUJNz5q3Jy0ayo8i8aSFaCf4s21rKJGTUTNRokMe%2BBNxiHZNpQ8oqs0GVpFbZ3sv2gQW9OVIzV3NFj6tBk%2F%2BzdzniCLWrGCgDCVkMK%2BBjqkAXqqbL0BcVwuxMdYiCH2NqpRjxJSsTeNVsFTuh2o9QW3vU3PAFmTbmzjl%2FXXonScphb%2BYG3ocY2yXW6HF94fVk%2FSVfdf71ShLaBfDLHww%2FWbZ%2FMocCyZVu6wYq%2FXEDjLSvjrY%2BBlQ7DfRzETaUCEcEmdvJBQJD%2B%2B%2F4ih6Qt5A%2Bc66T%2FiwMIEeIRK1584pSddAqQIhL%2BkKjysGWK3XNotBiY6Ner%2F&X-Amz-Signature=03add8773865c1a360e07fdda8037bc5cc9d8e362441814aeca9997f38a8c90b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHI5EXD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDZ32Vg3z%2B7tJFSSl4dZpbuqEJO3WUFx6mPH%2BlZVVEziwIhANOcRUx0nKICBZ0gicLXfD2SP2%2BbVC1F%2BlHXftmcBGfXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXaudaXysy5U6XEQq3AOLjtzVgT1JxvIYZ3ncZl3K45766yN4a7s0QQeXPr%2FNvaGiEYvwy1sF%2FLgThmItXMi0weQAf9hbsIclN3HxmduCy3KsrZQb9CzQ4YWOeS2inpv3gbYpdaH8Dt2lFjtkmE4NKPZLqD8Gb8hX0l0aNj05TlkSH4vwBmOZCiqVoOrVBXPfdyKxVJgb6YZISs3NOFHv4fitdrdaMM5M8T8G7NBmR9hAVx65RTi2UHE3tY%2F7XcIIdDl1Ryz8VxdyabzFJt3QNbMqWRTvBCaGhT0K9LArJEn2WdVr5t28xvk9qRl5HzstZ79YX1psCksKUiSgx8uAFlprPaBeSKr%2BLFhWpYDQNUHtK18rcPjwpqFa6eo4Q%2Bjs9I4YF9fJ1ctiN5aAgPnDcsfS3W%2BDTpFcx9ruB5xYGHVMRxwNCYMMGWo0ZLsHdL3SiK3HP%2FfizjBtLeUEgxNON7REQ05a9D3l%2FvvIJSjX6yoqI9TvXgQMhkzi8X272lgdYLF6Q49qxUUAD23OeYoFGzsnjHWwEzuy860VZ3VVwZCwJnUJNz5q3Jy0ayo8i8aSFaCf4s21rKJGTUTNRokMe%2BBNxiHZNpQ8oqs0GVpFbZ3sv2gQW9OVIzV3NFj6tBk%2F%2BzdzniCLWrGCgDCVkMK%2BBjqkAXqqbL0BcVwuxMdYiCH2NqpRjxJSsTeNVsFTuh2o9QW3vU3PAFmTbmzjl%2FXXonScphb%2BYG3ocY2yXW6HF94fVk%2FSVfdf71ShLaBfDLHww%2FWbZ%2FMocCyZVu6wYq%2FXEDjLSvjrY%2BBlQ7DfRzETaUCEcEmdvJBQJD%2B%2B%2F4ih6Qt5A%2Bc66T%2FiwMIEeIRK1584pSddAqQIhL%2BkKjysGWK3XNotBiY6Ner%2F&X-Amz-Signature=a581a363019cb236687efa1b12b28f878678e89f06e94e750289850fed8fb20a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
