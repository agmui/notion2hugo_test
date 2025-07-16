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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GE4ZVJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEGCUwIE8Fm38ic5gbWjVLlsvEx1iGI2odsFiHXn29gUAiAxo7rYaEcDbGqcWkvgxjD9faGPgTdlVSj7zdJfgH0Wzyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcvmfCqou82Yd5VQkKtwDcriJpUKhf7sX0iVOp4LFxFsGFonDpCxjNslzWuQ7zkXUIZNWFAJVLUorupDhIlcJ8YjlGeN%2B%2F3IjadJDSnJN8TCVRNpkElnnU%2FRIZM25ZEMVgJmZSmQxYCFX4NvQTaeAGjqLcVk4kid2PPcvEb4Rxr85j7AIcHCiLOFl%2BDcTUe0OC8wHOEXjoAVh2RX5FRhIp%2FvMgEeBwdHVXOCI0i039cUU8uy%2BSqF8qCS07KLKFtyMcQMZlbmmg9td%2BU%2Bd8sDXDfI0uH8%2Ff6gExjjVa4EmYAZICC9BVkgLYGkITMpMSS9CQTCQUmsB72o47PWhlJWtSrEWH663PblUKLOsqIAQeDmToxqEx7%2BKCQfjsUZ%2FJWPGi1fp4TkRhXW%2FDPC9gimkMAKFyY6zQ97TYi8gMQg%2F08KMGWBFtkcCbUtIv%2BSrmwxqp1YtTXxFLlG8%2Fz1iD9EIngCfCTp0rKtG%2FNyyKHoWC7u%2BJ4%2Fu0TglQqTBBOGqqQyKZ90TkzCUJBokb9ocJ%2BKHy2RD8jHnyt%2BhwTR%2FMFx%2BswSWY0QgRXGwgwCV02p0NDUc4YbO3BmT%2Bt2JFTBPPR7iusYxdxXQS2UDm%2FdUYC7JkHO3zc0SjEyETxt5D2MMIcLqsKay6TRI%2BC9cS6swzv3bwwY6pgHzCNqVkgo1j%2FTJrgmiJEMNw5lx4%2FvzjjEHBnTImzGhszh%2FpQcUu3VMIYEunXhDLiWkz9fCEga9wc3mhkZ8pchXc6RJZm78Ot%2BLKcZzgKyvtYE%2BXox7OzMtOnSE7MEyL5ky3Uy%2B5XgBlQNrt4SJzMuuc3UzM3CJJss0LV%2BmHbnaB58nWf4lAHonmcWxpzZAR8hBQla8XSagbmTbIN3eGv%2Fy4TGpdayZ&X-Amz-Signature=b22ff7fcbfc2cbc67dd8f44dc100356e63882c9b2cb9349ca1b486955f50cea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GE4ZVJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEGCUwIE8Fm38ic5gbWjVLlsvEx1iGI2odsFiHXn29gUAiAxo7rYaEcDbGqcWkvgxjD9faGPgTdlVSj7zdJfgH0Wzyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcvmfCqou82Yd5VQkKtwDcriJpUKhf7sX0iVOp4LFxFsGFonDpCxjNslzWuQ7zkXUIZNWFAJVLUorupDhIlcJ8YjlGeN%2B%2F3IjadJDSnJN8TCVRNpkElnnU%2FRIZM25ZEMVgJmZSmQxYCFX4NvQTaeAGjqLcVk4kid2PPcvEb4Rxr85j7AIcHCiLOFl%2BDcTUe0OC8wHOEXjoAVh2RX5FRhIp%2FvMgEeBwdHVXOCI0i039cUU8uy%2BSqF8qCS07KLKFtyMcQMZlbmmg9td%2BU%2Bd8sDXDfI0uH8%2Ff6gExjjVa4EmYAZICC9BVkgLYGkITMpMSS9CQTCQUmsB72o47PWhlJWtSrEWH663PblUKLOsqIAQeDmToxqEx7%2BKCQfjsUZ%2FJWPGi1fp4TkRhXW%2FDPC9gimkMAKFyY6zQ97TYi8gMQg%2F08KMGWBFtkcCbUtIv%2BSrmwxqp1YtTXxFLlG8%2Fz1iD9EIngCfCTp0rKtG%2FNyyKHoWC7u%2BJ4%2Fu0TglQqTBBOGqqQyKZ90TkzCUJBokb9ocJ%2BKHy2RD8jHnyt%2BhwTR%2FMFx%2BswSWY0QgRXGwgwCV02p0NDUc4YbO3BmT%2Bt2JFTBPPR7iusYxdxXQS2UDm%2FdUYC7JkHO3zc0SjEyETxt5D2MMIcLqsKay6TRI%2BC9cS6swzv3bwwY6pgHzCNqVkgo1j%2FTJrgmiJEMNw5lx4%2FvzjjEHBnTImzGhszh%2FpQcUu3VMIYEunXhDLiWkz9fCEga9wc3mhkZ8pchXc6RJZm78Ot%2BLKcZzgKyvtYE%2BXox7OzMtOnSE7MEyL5ky3Uy%2B5XgBlQNrt4SJzMuuc3UzM3CJJss0LV%2BmHbnaB58nWf4lAHonmcWxpzZAR8hBQla8XSagbmTbIN3eGv%2Fy4TGpdayZ&X-Amz-Signature=6c46d63b3dec19d546bb4a686fa81ef58896c76fbe8eb4cd8bde709b643dd70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GE4ZVJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEGCUwIE8Fm38ic5gbWjVLlsvEx1iGI2odsFiHXn29gUAiAxo7rYaEcDbGqcWkvgxjD9faGPgTdlVSj7zdJfgH0Wzyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMcvmfCqou82Yd5VQkKtwDcriJpUKhf7sX0iVOp4LFxFsGFonDpCxjNslzWuQ7zkXUIZNWFAJVLUorupDhIlcJ8YjlGeN%2B%2F3IjadJDSnJN8TCVRNpkElnnU%2FRIZM25ZEMVgJmZSmQxYCFX4NvQTaeAGjqLcVk4kid2PPcvEb4Rxr85j7AIcHCiLOFl%2BDcTUe0OC8wHOEXjoAVh2RX5FRhIp%2FvMgEeBwdHVXOCI0i039cUU8uy%2BSqF8qCS07KLKFtyMcQMZlbmmg9td%2BU%2Bd8sDXDfI0uH8%2Ff6gExjjVa4EmYAZICC9BVkgLYGkITMpMSS9CQTCQUmsB72o47PWhlJWtSrEWH663PblUKLOsqIAQeDmToxqEx7%2BKCQfjsUZ%2FJWPGi1fp4TkRhXW%2FDPC9gimkMAKFyY6zQ97TYi8gMQg%2F08KMGWBFtkcCbUtIv%2BSrmwxqp1YtTXxFLlG8%2Fz1iD9EIngCfCTp0rKtG%2FNyyKHoWC7u%2BJ4%2Fu0TglQqTBBOGqqQyKZ90TkzCUJBokb9ocJ%2BKHy2RD8jHnyt%2BhwTR%2FMFx%2BswSWY0QgRXGwgwCV02p0NDUc4YbO3BmT%2Bt2JFTBPPR7iusYxdxXQS2UDm%2FdUYC7JkHO3zc0SjEyETxt5D2MMIcLqsKay6TRI%2BC9cS6swzv3bwwY6pgHzCNqVkgo1j%2FTJrgmiJEMNw5lx4%2FvzjjEHBnTImzGhszh%2FpQcUu3VMIYEunXhDLiWkz9fCEga9wc3mhkZ8pchXc6RJZm78Ot%2BLKcZzgKyvtYE%2BXox7OzMtOnSE7MEyL5ky3Uy%2B5XgBlQNrt4SJzMuuc3UzM3CJJss0LV%2BmHbnaB58nWf4lAHonmcWxpzZAR8hBQla8XSagbmTbIN3eGv%2Fy4TGpdayZ&X-Amz-Signature=096e2b414139d56379dd12f223a42618b46cc3ce18d70d478ff21a419ba2bcee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
