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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISIECAH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDSpO68cEYgfNo5LaGeWTmb8u3tCugv2vGIIaTD5toJqAiBrOWeuCT9BcYIkpkyYMHvzTilKUxE8BkznSfbm7BJVAir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMEDJNJKY1zvEXev%2FRKtwDa%2BXZzrHNwb7STRr2zUXeuVFVY186vv5c%2FgBgW4I1MJa%2FvdiOqJ%2FZu9iFOQ838UMpjU2%2FckMZC7CFeTeYON4jZMBf%2BXYwgzwpdR5PXOc%2Fg4GAgQv5rt2WyhsI5wDDmJ17P3k7J%2B0kBuUhTjIwKlDmUKVnTkDLq7sP9UdjYn24bbezXKUzZ7PM0k1EbYYIQ1vefUXylXekrDvXpnTOlqgnpKWTW9g1Mcn3I3taHjv56dxKyr9zJ0XP8YSlGkIkZipNZ6snnO6YAeZcKL1WyjywnkiLpDB0%2FGNv3Hrf9XUEbVdyoHrfHdziuy400NY2o%2BYyShf8DIJutHEVRU67b4LYBGvOxkBcOjcBUhfEete%2FXTYyt0sIWlMNL6Y0MATM4sE%2F4t7Vnky88MqtUEw%2FXMgcjPxAeWN5TANE3kEGK1%2BS%2B9Hg%2B2s1v5pHVYTV%2FbtoIzPSnI1BYHD%2F83jvhBTWSllncAx5gr%2BSDrMjzntbe13HViXWI19NisuElK6ZDieNi00hW%2FwjkmHa7kcCwhqWSI3pAGM6g5%2FPB19m8kbDWC4DsH%2Bm41e8dofKOw0S78EbmeP7dNaK9Wh9TCN802wfQ33YPYmhmqrVoDHLm%2B4DfW%2FpW9%2FT99mBGDxYW5ZrL6Ewj6i7wgY6pgGEfDHjCHmsEMU65IXk9kNlXa8%2BJvFKpKCcHMnmfwU0FgqNgsGsHkFR3fENNUCg%2FkMFg%2BgAcQ6unpa72cMWwHq5%2B1F%2FB%2FD%2BRIHZ1Umt0OkY0g%2FoGKJOxDFPVqwQ4Y7DNDDjSnKiO3HQZwGfVYMIXLDgLH7aY9GL%2FCN33GzwwLHJdtpadilJ0O6weJJI8CKcDge8ug6YY6lZJAxLoDfZFBtluU57%2FQDC&X-Amz-Signature=e2357b7e38eb64bd8174ceaa9ccf0bd3556159cb9a1e34436d838efb67e32ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISIECAH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDSpO68cEYgfNo5LaGeWTmb8u3tCugv2vGIIaTD5toJqAiBrOWeuCT9BcYIkpkyYMHvzTilKUxE8BkznSfbm7BJVAir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMEDJNJKY1zvEXev%2FRKtwDa%2BXZzrHNwb7STRr2zUXeuVFVY186vv5c%2FgBgW4I1MJa%2FvdiOqJ%2FZu9iFOQ838UMpjU2%2FckMZC7CFeTeYON4jZMBf%2BXYwgzwpdR5PXOc%2Fg4GAgQv5rt2WyhsI5wDDmJ17P3k7J%2B0kBuUhTjIwKlDmUKVnTkDLq7sP9UdjYn24bbezXKUzZ7PM0k1EbYYIQ1vefUXylXekrDvXpnTOlqgnpKWTW9g1Mcn3I3taHjv56dxKyr9zJ0XP8YSlGkIkZipNZ6snnO6YAeZcKL1WyjywnkiLpDB0%2FGNv3Hrf9XUEbVdyoHrfHdziuy400NY2o%2BYyShf8DIJutHEVRU67b4LYBGvOxkBcOjcBUhfEete%2FXTYyt0sIWlMNL6Y0MATM4sE%2F4t7Vnky88MqtUEw%2FXMgcjPxAeWN5TANE3kEGK1%2BS%2B9Hg%2B2s1v5pHVYTV%2FbtoIzPSnI1BYHD%2F83jvhBTWSllncAx5gr%2BSDrMjzntbe13HViXWI19NisuElK6ZDieNi00hW%2FwjkmHa7kcCwhqWSI3pAGM6g5%2FPB19m8kbDWC4DsH%2Bm41e8dofKOw0S78EbmeP7dNaK9Wh9TCN802wfQ33YPYmhmqrVoDHLm%2B4DfW%2FpW9%2FT99mBGDxYW5ZrL6Ewj6i7wgY6pgGEfDHjCHmsEMU65IXk9kNlXa8%2BJvFKpKCcHMnmfwU0FgqNgsGsHkFR3fENNUCg%2FkMFg%2BgAcQ6unpa72cMWwHq5%2B1F%2FB%2FD%2BRIHZ1Umt0OkY0g%2FoGKJOxDFPVqwQ4Y7DNDDjSnKiO3HQZwGfVYMIXLDgLH7aY9GL%2FCN33GzwwLHJdtpadilJ0O6weJJI8CKcDge8ug6YY6lZJAxLoDfZFBtluU57%2FQDC&X-Amz-Signature=4108fe0a1172615aa7a22ac256d63b3d2808d6cc6f7f94b8e74fe12a5d0cd482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISIECAH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDSpO68cEYgfNo5LaGeWTmb8u3tCugv2vGIIaTD5toJqAiBrOWeuCT9BcYIkpkyYMHvzTilKUxE8BkznSfbm7BJVAir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMEDJNJKY1zvEXev%2FRKtwDa%2BXZzrHNwb7STRr2zUXeuVFVY186vv5c%2FgBgW4I1MJa%2FvdiOqJ%2FZu9iFOQ838UMpjU2%2FckMZC7CFeTeYON4jZMBf%2BXYwgzwpdR5PXOc%2Fg4GAgQv5rt2WyhsI5wDDmJ17P3k7J%2B0kBuUhTjIwKlDmUKVnTkDLq7sP9UdjYn24bbezXKUzZ7PM0k1EbYYIQ1vefUXylXekrDvXpnTOlqgnpKWTW9g1Mcn3I3taHjv56dxKyr9zJ0XP8YSlGkIkZipNZ6snnO6YAeZcKL1WyjywnkiLpDB0%2FGNv3Hrf9XUEbVdyoHrfHdziuy400NY2o%2BYyShf8DIJutHEVRU67b4LYBGvOxkBcOjcBUhfEete%2FXTYyt0sIWlMNL6Y0MATM4sE%2F4t7Vnky88MqtUEw%2FXMgcjPxAeWN5TANE3kEGK1%2BS%2B9Hg%2B2s1v5pHVYTV%2FbtoIzPSnI1BYHD%2F83jvhBTWSllncAx5gr%2BSDrMjzntbe13HViXWI19NisuElK6ZDieNi00hW%2FwjkmHa7kcCwhqWSI3pAGM6g5%2FPB19m8kbDWC4DsH%2Bm41e8dofKOw0S78EbmeP7dNaK9Wh9TCN802wfQ33YPYmhmqrVoDHLm%2B4DfW%2FpW9%2FT99mBGDxYW5ZrL6Ewj6i7wgY6pgGEfDHjCHmsEMU65IXk9kNlXa8%2BJvFKpKCcHMnmfwU0FgqNgsGsHkFR3fENNUCg%2FkMFg%2BgAcQ6unpa72cMWwHq5%2B1F%2FB%2FD%2BRIHZ1Umt0OkY0g%2FoGKJOxDFPVqwQ4Y7DNDDjSnKiO3HQZwGfVYMIXLDgLH7aY9GL%2FCN33GzwwLHJdtpadilJ0O6weJJI8CKcDge8ug6YY6lZJAxLoDfZFBtluU57%2FQDC&X-Amz-Signature=51304a6aaa843cb9c96f3626ef5f5735a0e11d4bfb602114523bc6fa810a27a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
