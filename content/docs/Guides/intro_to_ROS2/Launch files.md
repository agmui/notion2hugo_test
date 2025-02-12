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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO5GTQL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBia2X%2FodzuGr4A5kSF9PECjD%2F%2BO2ZbUuC7SzxNPelVwAiEAmdxe6Z20OmQMRrxTizyAfMwB7A9%2Bftdgd4Y9Ca2P0DsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJqfQMOOsey07aZiyrcA33P9hAk8XVB3NMcJgLOlEpziwd1i26JhWtr5bx6uKDCYzCtOAv%2BZEQPEp2U%2FAoMcThl8DNBvIsflqL5i0WNwU8j%2BC8lK%2F%2F8IasKkg8DBJFr%2BmlW%2Fllxndo5LHJlZ8lciU%2FX1nPW4WyQsuWqHyxBQAKZofodLMN0bpDclmRZl%2BRHYzxtQHG0I2VG5z89aNk9jQDvSdwMOxgk%2BGkQNhe8BILRZrz7pDLSSs9gcIIfoiEX225Gcb1B4WuXwxKMctZ0laI%2FWRV2%2BlisjZDwUhGy7EZzUl6%2FZlZwGleKr4XNuCgDDOGDk3q9Zvrk85U4CfFBr%2F7WcnYTZw0KQ156BzoGEfc%2Bnl9UWpXXTHTBrG%2BUJvpDvvDNfInXlIfiCY7cRUC8QQIQ8V8pd67nGQzjWWOt%2BT%2FceDXSZATDiBfVaRbWykKVU8aO1aySP67MBmP1ii%2F8W4iYqHjq9BLBCHEdJO%2BX6VBYnGbCIhzla2G37UIBS8QuA8Zub7NQGNlC%2FMicf9NWvpc%2F3EK24Bz9P7OpDWxTYTv0Die0kkSEqrFyp4DaV0lXE%2FMD5hSQ5HUIzhgM8RnBtgcNGbJceZiPhoQY9PImy7bMZoGKtEGfjQoAVyYld3OBBJ0hUs41TCUjvd%2B%2BMO%2BotL0GOqUB9bNE%2F0GwR8FP1jMkXILN5MX7qqL8gd7gRM7wTq8jxYN6lK18LBjINOOUbfHi9mbe3eUfMH891RIm7FYFYJCWlJhDVJvZ1jL0Y2Bfd%2BGYKNbU%2BXBZiPRkys70zg8TfwNOZJAriT%2B%2F0ma88J3B2RPe6ZDrL760SpmysitJ1bIew8yD95MXQLlzAkDuNJI8qIVGYZHyJN3aPoUWYtrw81s8bLA246XI&X-Amz-Signature=1e0e9c0c9af497c672939d8f4e7f6fea7ab21bb12282f586c61088a91f8d52e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO5GTQL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBia2X%2FodzuGr4A5kSF9PECjD%2F%2BO2ZbUuC7SzxNPelVwAiEAmdxe6Z20OmQMRrxTizyAfMwB7A9%2Bftdgd4Y9Ca2P0DsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJqfQMOOsey07aZiyrcA33P9hAk8XVB3NMcJgLOlEpziwd1i26JhWtr5bx6uKDCYzCtOAv%2BZEQPEp2U%2FAoMcThl8DNBvIsflqL5i0WNwU8j%2BC8lK%2F%2F8IasKkg8DBJFr%2BmlW%2Fllxndo5LHJlZ8lciU%2FX1nPW4WyQsuWqHyxBQAKZofodLMN0bpDclmRZl%2BRHYzxtQHG0I2VG5z89aNk9jQDvSdwMOxgk%2BGkQNhe8BILRZrz7pDLSSs9gcIIfoiEX225Gcb1B4WuXwxKMctZ0laI%2FWRV2%2BlisjZDwUhGy7EZzUl6%2FZlZwGleKr4XNuCgDDOGDk3q9Zvrk85U4CfFBr%2F7WcnYTZw0KQ156BzoGEfc%2Bnl9UWpXXTHTBrG%2BUJvpDvvDNfInXlIfiCY7cRUC8QQIQ8V8pd67nGQzjWWOt%2BT%2FceDXSZATDiBfVaRbWykKVU8aO1aySP67MBmP1ii%2F8W4iYqHjq9BLBCHEdJO%2BX6VBYnGbCIhzla2G37UIBS8QuA8Zub7NQGNlC%2FMicf9NWvpc%2F3EK24Bz9P7OpDWxTYTv0Die0kkSEqrFyp4DaV0lXE%2FMD5hSQ5HUIzhgM8RnBtgcNGbJceZiPhoQY9PImy7bMZoGKtEGfjQoAVyYld3OBBJ0hUs41TCUjvd%2B%2BMO%2BotL0GOqUB9bNE%2F0GwR8FP1jMkXILN5MX7qqL8gd7gRM7wTq8jxYN6lK18LBjINOOUbfHi9mbe3eUfMH891RIm7FYFYJCWlJhDVJvZ1jL0Y2Bfd%2BGYKNbU%2BXBZiPRkys70zg8TfwNOZJAriT%2B%2F0ma88J3B2RPe6ZDrL760SpmysitJ1bIew8yD95MXQLlzAkDuNJI8qIVGYZHyJN3aPoUWYtrw81s8bLA246XI&X-Amz-Signature=cdfaba9cdd5d65e461b53787f29f99a1fbdcfc514958265c6583819f75715528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO5GTQL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBia2X%2FodzuGr4A5kSF9PECjD%2F%2BO2ZbUuC7SzxNPelVwAiEAmdxe6Z20OmQMRrxTizyAfMwB7A9%2Bftdgd4Y9Ca2P0DsqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJqfQMOOsey07aZiyrcA33P9hAk8XVB3NMcJgLOlEpziwd1i26JhWtr5bx6uKDCYzCtOAv%2BZEQPEp2U%2FAoMcThl8DNBvIsflqL5i0WNwU8j%2BC8lK%2F%2F8IasKkg8DBJFr%2BmlW%2Fllxndo5LHJlZ8lciU%2FX1nPW4WyQsuWqHyxBQAKZofodLMN0bpDclmRZl%2BRHYzxtQHG0I2VG5z89aNk9jQDvSdwMOxgk%2BGkQNhe8BILRZrz7pDLSSs9gcIIfoiEX225Gcb1B4WuXwxKMctZ0laI%2FWRV2%2BlisjZDwUhGy7EZzUl6%2FZlZwGleKr4XNuCgDDOGDk3q9Zvrk85U4CfFBr%2F7WcnYTZw0KQ156BzoGEfc%2Bnl9UWpXXTHTBrG%2BUJvpDvvDNfInXlIfiCY7cRUC8QQIQ8V8pd67nGQzjWWOt%2BT%2FceDXSZATDiBfVaRbWykKVU8aO1aySP67MBmP1ii%2F8W4iYqHjq9BLBCHEdJO%2BX6VBYnGbCIhzla2G37UIBS8QuA8Zub7NQGNlC%2FMicf9NWvpc%2F3EK24Bz9P7OpDWxTYTv0Die0kkSEqrFyp4DaV0lXE%2FMD5hSQ5HUIzhgM8RnBtgcNGbJceZiPhoQY9PImy7bMZoGKtEGfjQoAVyYld3OBBJ0hUs41TCUjvd%2B%2BMO%2BotL0GOqUB9bNE%2F0GwR8FP1jMkXILN5MX7qqL8gd7gRM7wTq8jxYN6lK18LBjINOOUbfHi9mbe3eUfMH891RIm7FYFYJCWlJhDVJvZ1jL0Y2Bfd%2BGYKNbU%2BXBZiPRkys70zg8TfwNOZJAriT%2B%2F0ma88J3B2RPe6ZDrL760SpmysitJ1bIew8yD95MXQLlzAkDuNJI8qIVGYZHyJN3aPoUWYtrw81s8bLA246XI&X-Amz-Signature=9dcce80fbd4a21df82af5126c93bf9f04197322c0f0ee0bc84d8b63cf1a6abc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
