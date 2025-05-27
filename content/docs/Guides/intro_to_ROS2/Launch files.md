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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKH75JO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9Qwu1uLr71mc63UmImC%2BZ%2FTfBzAdVyBZIouxJ6ci9wIhAOBBWoYceI6U1rOkOS68aopSkDUzPZxqRYAAs4wrKK1pKv8DCF8QABoMNjM3NDIzMTgzODA1Igw0VV5lJU6VHQIVfzQq3AMdbW0%2BXhu%2B4UnmVyhURldue423Qte5LOUYNTN8EMH7BlBHuQIUo0nkMMI%2Fzctw0BNgb2RiyKwl5VrwND1zOI5iqJMVsz1m%2F3Y8JXYx0jGY%2FC8QNqOtKnrhcUfQsIZ6IhWHav0D5BzhAHRCubIJQvjb080oxf2rb3qj5IbfQr%2Bf8%2FVtFGsu0bapG%2FyYtViJUMOnROns6mmO8HA%2BnH6dg5X7yzk%2BgaAFuRiB9lO%2B6UfBMTlgXmoyejn3dj8b23qrwKeromylys1lEx1bZRr3B1Gdf%2FEXdazWYb%2BBjOzsye8brSwOyfPYql2UlUrohrVvk0C5pRyDAv0TKKK1nP2UoiLcz23Tmx%2BHKcx2LwTPcFjJn6hjy7fgjvSsSkbzuEsoAd3Qgl1f3twsgRRiRpdk0QkCFlcAcpH8ijM3p1wWDmgHhMox%2BjxzeGAlPkk%2B9Mgf6qiU%2BOzfjnshKGHihmhXtIlC1vnMrnXcdXuLhZ0I80YXKkTiQhk7fW4sNwR6yElyKq6B%2FyhWWmZpZ13NvxNDebqhw6KZ0AJHkDmuK6XTc3AcWMUPtNsTUFyxxbfscIWXtWg4KYNqp%2BRv9IxLZphWZrDiSFdNzFAnqhqlAh0RXcjN4ZfeC6ibwtdzKdAP6TCz%2FNbBBjqkAa7dyfafoFJVXVkaj3zHzBnjR1S6iYR7WG5gAwvlAVUEKDGz9OIs38%2FwPLRVfyfcj76CiyRFPrFgJc7u4xqbx68A4Rda75OgSIt7URUTP3AJh0gwy%2B7%2B7l0pUNGO9Kt6%2BK7nRFHALH63QCBamVuiBihlJd2lCvRhjaBjYQkxq6sbn8zArkVn4n1zeiRE87cQ%2Ft3oKRtq8ay0uhw2GFyAgXHDHSs%2B&X-Amz-Signature=ae1de63b180ac054686b51466865d5eca0653ca4348a860a4c09389bf57393a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKH75JO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9Qwu1uLr71mc63UmImC%2BZ%2FTfBzAdVyBZIouxJ6ci9wIhAOBBWoYceI6U1rOkOS68aopSkDUzPZxqRYAAs4wrKK1pKv8DCF8QABoMNjM3NDIzMTgzODA1Igw0VV5lJU6VHQIVfzQq3AMdbW0%2BXhu%2B4UnmVyhURldue423Qte5LOUYNTN8EMH7BlBHuQIUo0nkMMI%2Fzctw0BNgb2RiyKwl5VrwND1zOI5iqJMVsz1m%2F3Y8JXYx0jGY%2FC8QNqOtKnrhcUfQsIZ6IhWHav0D5BzhAHRCubIJQvjb080oxf2rb3qj5IbfQr%2Bf8%2FVtFGsu0bapG%2FyYtViJUMOnROns6mmO8HA%2BnH6dg5X7yzk%2BgaAFuRiB9lO%2B6UfBMTlgXmoyejn3dj8b23qrwKeromylys1lEx1bZRr3B1Gdf%2FEXdazWYb%2BBjOzsye8brSwOyfPYql2UlUrohrVvk0C5pRyDAv0TKKK1nP2UoiLcz23Tmx%2BHKcx2LwTPcFjJn6hjy7fgjvSsSkbzuEsoAd3Qgl1f3twsgRRiRpdk0QkCFlcAcpH8ijM3p1wWDmgHhMox%2BjxzeGAlPkk%2B9Mgf6qiU%2BOzfjnshKGHihmhXtIlC1vnMrnXcdXuLhZ0I80YXKkTiQhk7fW4sNwR6yElyKq6B%2FyhWWmZpZ13NvxNDebqhw6KZ0AJHkDmuK6XTc3AcWMUPtNsTUFyxxbfscIWXtWg4KYNqp%2BRv9IxLZphWZrDiSFdNzFAnqhqlAh0RXcjN4ZfeC6ibwtdzKdAP6TCz%2FNbBBjqkAa7dyfafoFJVXVkaj3zHzBnjR1S6iYR7WG5gAwvlAVUEKDGz9OIs38%2FwPLRVfyfcj76CiyRFPrFgJc7u4xqbx68A4Rda75OgSIt7URUTP3AJh0gwy%2B7%2B7l0pUNGO9Kt6%2BK7nRFHALH63QCBamVuiBihlJd2lCvRhjaBjYQkxq6sbn8zArkVn4n1zeiRE87cQ%2Ft3oKRtq8ay0uhw2GFyAgXHDHSs%2B&X-Amz-Signature=8548e66f028145a2c4c11ab88590b27c8bfdaf41d8d5ea76c6207563806670a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWKH75JO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9Qwu1uLr71mc63UmImC%2BZ%2FTfBzAdVyBZIouxJ6ci9wIhAOBBWoYceI6U1rOkOS68aopSkDUzPZxqRYAAs4wrKK1pKv8DCF8QABoMNjM3NDIzMTgzODA1Igw0VV5lJU6VHQIVfzQq3AMdbW0%2BXhu%2B4UnmVyhURldue423Qte5LOUYNTN8EMH7BlBHuQIUo0nkMMI%2Fzctw0BNgb2RiyKwl5VrwND1zOI5iqJMVsz1m%2F3Y8JXYx0jGY%2FC8QNqOtKnrhcUfQsIZ6IhWHav0D5BzhAHRCubIJQvjb080oxf2rb3qj5IbfQr%2Bf8%2FVtFGsu0bapG%2FyYtViJUMOnROns6mmO8HA%2BnH6dg5X7yzk%2BgaAFuRiB9lO%2B6UfBMTlgXmoyejn3dj8b23qrwKeromylys1lEx1bZRr3B1Gdf%2FEXdazWYb%2BBjOzsye8brSwOyfPYql2UlUrohrVvk0C5pRyDAv0TKKK1nP2UoiLcz23Tmx%2BHKcx2LwTPcFjJn6hjy7fgjvSsSkbzuEsoAd3Qgl1f3twsgRRiRpdk0QkCFlcAcpH8ijM3p1wWDmgHhMox%2BjxzeGAlPkk%2B9Mgf6qiU%2BOzfjnshKGHihmhXtIlC1vnMrnXcdXuLhZ0I80YXKkTiQhk7fW4sNwR6yElyKq6B%2FyhWWmZpZ13NvxNDebqhw6KZ0AJHkDmuK6XTc3AcWMUPtNsTUFyxxbfscIWXtWg4KYNqp%2BRv9IxLZphWZrDiSFdNzFAnqhqlAh0RXcjN4ZfeC6ibwtdzKdAP6TCz%2FNbBBjqkAa7dyfafoFJVXVkaj3zHzBnjR1S6iYR7WG5gAwvlAVUEKDGz9OIs38%2FwPLRVfyfcj76CiyRFPrFgJc7u4xqbx68A4Rda75OgSIt7URUTP3AJh0gwy%2B7%2B7l0pUNGO9Kt6%2BK7nRFHALH63QCBamVuiBihlJd2lCvRhjaBjYQkxq6sbn8zArkVn4n1zeiRE87cQ%2Ft3oKRtq8ay0uhw2GFyAgXHDHSs%2B&X-Amz-Signature=b2327add3870ab41b4dd3c43e8eca24c7b23f87f9c0c299df09e546d7072c55e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
