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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPMS5RR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBVoj3tBCOe6H%2BMpEz1t6e7A40s4QRL6EEibjIS7%2BGCFAiBXoG1DlaYatNiSWTlGv2pLnlBH2eLCwlwCxMBXBOXZXiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgbrnADB6kXNk88JKtwDUO683AZl5RznnyjTF2mZNPzq6AvCmD%2BEjg7ZaIqpEmrcxg9kk0gKGYgQwAjlbp8F5e62GoZM7vbJ5H%2FU7ezI39bSgad0YWD5dQNoJXxKNBwO2zRjWIQ%2B1UpuK6Ohex43euMs1QCC9gjq0ur0CTRsCLPytm3EywUv1mwg6WVeiAbp6oMjiRR%2Bm60gMzRiHPqOCet%2BZdpGk234pxuYIeTIUVYHZ2oyMgdUk6rtycHjDjWbx3EGCZB%2FcYWSZXY2%2B9MSmDAbyo266ls3KBdSSV0fmF9mIq1mxpLRjBqtkJAcKuuXiftw2BZ0MY1Ac3JfQIwr66JvWOZHMxDzpYAXYM9U9AjLComC1vKZTt20KMa0JZv6AvCJ1oM4jZ57HShYZbzrue%2B1UCb7JoC2cIPQWp57xc0HN3QKKqFOwttOU5yqjaWr7bWFiewBd1wiPePfuiEAJxBuaGt2PvW6V4wCR0JAPuB6wq0%2F%2B6CnjuemXVNLTUFmRI%2F4Qudh%2FS12TbAPgO5m3ZB3%2BXdxffALG%2FW8w7zHPqrzFjYEZZ22vn8ETss0T8rLdEyMFrtJKYes9eya1csh0Opkvp2qI1h5CVy35DEjFD%2F%2BNotID06jrgfGGKYF9ATrrdyV1w2nBws7%2BfYwidimvwY6pgHrGXCqxJjQgGaBER9KAM6%2FHq%2FDDYoA6v%2BeibSsRal4Zxc60ffCWnHr7ehnOQafyStGbpjX5DjH%2BuuviMTytWAqiEkVoYrxJ0XgXKQSWOp5uSiOkGdWTd8f5QZ57vOwkYAjH2h6IcWV5BGGuchgz1RAS1H0%2BABT11DqZ1z38e5eVpUr73zHMM8n0GymhDlWXslWxRUcCBGf%2BDCmInpZxOx9qGfAe9xV&X-Amz-Signature=46aaf9c0f07ef7196a2ea31a329d155c0876e7b4bba5c5fc851ed1280766bcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPMS5RR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBVoj3tBCOe6H%2BMpEz1t6e7A40s4QRL6EEibjIS7%2BGCFAiBXoG1DlaYatNiSWTlGv2pLnlBH2eLCwlwCxMBXBOXZXiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgbrnADB6kXNk88JKtwDUO683AZl5RznnyjTF2mZNPzq6AvCmD%2BEjg7ZaIqpEmrcxg9kk0gKGYgQwAjlbp8F5e62GoZM7vbJ5H%2FU7ezI39bSgad0YWD5dQNoJXxKNBwO2zRjWIQ%2B1UpuK6Ohex43euMs1QCC9gjq0ur0CTRsCLPytm3EywUv1mwg6WVeiAbp6oMjiRR%2Bm60gMzRiHPqOCet%2BZdpGk234pxuYIeTIUVYHZ2oyMgdUk6rtycHjDjWbx3EGCZB%2FcYWSZXY2%2B9MSmDAbyo266ls3KBdSSV0fmF9mIq1mxpLRjBqtkJAcKuuXiftw2BZ0MY1Ac3JfQIwr66JvWOZHMxDzpYAXYM9U9AjLComC1vKZTt20KMa0JZv6AvCJ1oM4jZ57HShYZbzrue%2B1UCb7JoC2cIPQWp57xc0HN3QKKqFOwttOU5yqjaWr7bWFiewBd1wiPePfuiEAJxBuaGt2PvW6V4wCR0JAPuB6wq0%2F%2B6CnjuemXVNLTUFmRI%2F4Qudh%2FS12TbAPgO5m3ZB3%2BXdxffALG%2FW8w7zHPqrzFjYEZZ22vn8ETss0T8rLdEyMFrtJKYes9eya1csh0Opkvp2qI1h5CVy35DEjFD%2F%2BNotID06jrgfGGKYF9ATrrdyV1w2nBws7%2BfYwidimvwY6pgHrGXCqxJjQgGaBER9KAM6%2FHq%2FDDYoA6v%2BeibSsRal4Zxc60ffCWnHr7ehnOQafyStGbpjX5DjH%2BuuviMTytWAqiEkVoYrxJ0XgXKQSWOp5uSiOkGdWTd8f5QZ57vOwkYAjH2h6IcWV5BGGuchgz1RAS1H0%2BABT11DqZ1z38e5eVpUr73zHMM8n0GymhDlWXslWxRUcCBGf%2BDCmInpZxOx9qGfAe9xV&X-Amz-Signature=ec78ea2b91dda0069f10a8a3f08f85690b4ef88aea93012833abdbb92ffda515&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPMS5RR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBVoj3tBCOe6H%2BMpEz1t6e7A40s4QRL6EEibjIS7%2BGCFAiBXoG1DlaYatNiSWTlGv2pLnlBH2eLCwlwCxMBXBOXZXiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgbrnADB6kXNk88JKtwDUO683AZl5RznnyjTF2mZNPzq6AvCmD%2BEjg7ZaIqpEmrcxg9kk0gKGYgQwAjlbp8F5e62GoZM7vbJ5H%2FU7ezI39bSgad0YWD5dQNoJXxKNBwO2zRjWIQ%2B1UpuK6Ohex43euMs1QCC9gjq0ur0CTRsCLPytm3EywUv1mwg6WVeiAbp6oMjiRR%2Bm60gMzRiHPqOCet%2BZdpGk234pxuYIeTIUVYHZ2oyMgdUk6rtycHjDjWbx3EGCZB%2FcYWSZXY2%2B9MSmDAbyo266ls3KBdSSV0fmF9mIq1mxpLRjBqtkJAcKuuXiftw2BZ0MY1Ac3JfQIwr66JvWOZHMxDzpYAXYM9U9AjLComC1vKZTt20KMa0JZv6AvCJ1oM4jZ57HShYZbzrue%2B1UCb7JoC2cIPQWp57xc0HN3QKKqFOwttOU5yqjaWr7bWFiewBd1wiPePfuiEAJxBuaGt2PvW6V4wCR0JAPuB6wq0%2F%2B6CnjuemXVNLTUFmRI%2F4Qudh%2FS12TbAPgO5m3ZB3%2BXdxffALG%2FW8w7zHPqrzFjYEZZ22vn8ETss0T8rLdEyMFrtJKYes9eya1csh0Opkvp2qI1h5CVy35DEjFD%2F%2BNotID06jrgfGGKYF9ATrrdyV1w2nBws7%2BfYwidimvwY6pgHrGXCqxJjQgGaBER9KAM6%2FHq%2FDDYoA6v%2BeibSsRal4Zxc60ffCWnHr7ehnOQafyStGbpjX5DjH%2BuuviMTytWAqiEkVoYrxJ0XgXKQSWOp5uSiOkGdWTd8f5QZ57vOwkYAjH2h6IcWV5BGGuchgz1RAS1H0%2BABT11DqZ1z38e5eVpUr73zHMM8n0GymhDlWXslWxRUcCBGf%2BDCmInpZxOx9qGfAe9xV&X-Amz-Signature=6d09c6e9744015e0c06f5dde36b7c4745d56bbf6f03c2f30d0ea7ab409dddd30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
