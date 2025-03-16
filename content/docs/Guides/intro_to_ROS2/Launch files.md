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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJPR3PV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXUh%2BOYAldndDib8EnJYJC0xp70dUdlL%2Fo8%2FeTIbjz8AiBcrLL61ra3kadQRzs3bxFj4n3jwuyl1CILOyXxkzM9qir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMADLGNsxgyDYNNAlJKtwDzzi1LdQdUlRQUSJ3SFVW56AHN70z5BQtSbh8c6huvcIbUZrHUWav%2Ba8wJIQpxiuBW1n8zye9p%2Bx4yIBhDT1MFpTDH6BxNndipkM2w3fQOcBzETc16ynOyS6erNolUy9zPPiQ1tD4AzJo95jQtvT3J6IuHwHXywAs1K7roA6hUuI7kUc7JyXyGvnuXPObiSyr1jIpkU4YbR5OFfwRle%2FOnlHvi%2Fi2OWi5BvlnM1FzJyK4hO7u5rfSbkl%2F%2BCVaxULGM%2FBU99vmXPhJSgyXbWBE3v9pZ%2BOtfd%2BaH9RMIIGCK3%2FW2dWSMhEceiutjzO0IznzlE%2BLR3IYZYz5TlDUBgAvzWVlWUL1etguvnRK17KcU2eQm9RThu91%2BOziTBdpPA9Hmnp9qwktyTA5WFA4bAppN8VAqqKaZDug4ptjaJ%2FXi%2FLjfpB3%2Bsa2whVgVtSaXcSD4c5PoR4%2FBbybRg5DgzmLBKReUSIO962hw5kYIa8ovipHeo5E%2F1AFSa8dat5RluDo0oK6Ju2QbWMFySxDP%2Fj41A3nnYfqUycQIGR9Bn7PqMwxpd%2FGZuzukFEernF1AOKLYFjHHRAajXcYK31vTC91SdGIigiboGQbbHcLYbsd7pm5c4VAe7b1A7l%2Bx3Ewzv3cvgY6pgE7vlWFiHW7P4fwMQ1fc32v60jSVR9darXMoHKC0XtJtB4iFWugGGVBnLh6eIK8ka42HJcwv5%2FgbYwUXITW5sD5BBtV7ie4%2FYUtSRcu5TvXDQi3GyWV7K%2B8Bq78pueqcyr9L48cpZbHoiH3c5LZnuf3ZTT5tJsP7yfIWsZQvruWMAkUIlyw8FgJyBHrw9%2BQriEvG8Nstvm0XfXXc25DYoxPQFYmxBDN&X-Amz-Signature=ce2fad759ba032cd6471f621d7dc56f26ad3517e0ba9efe12dbfc7b04121ac47&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJPR3PV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXUh%2BOYAldndDib8EnJYJC0xp70dUdlL%2Fo8%2FeTIbjz8AiBcrLL61ra3kadQRzs3bxFj4n3jwuyl1CILOyXxkzM9qir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMADLGNsxgyDYNNAlJKtwDzzi1LdQdUlRQUSJ3SFVW56AHN70z5BQtSbh8c6huvcIbUZrHUWav%2Ba8wJIQpxiuBW1n8zye9p%2Bx4yIBhDT1MFpTDH6BxNndipkM2w3fQOcBzETc16ynOyS6erNolUy9zPPiQ1tD4AzJo95jQtvT3J6IuHwHXywAs1K7roA6hUuI7kUc7JyXyGvnuXPObiSyr1jIpkU4YbR5OFfwRle%2FOnlHvi%2Fi2OWi5BvlnM1FzJyK4hO7u5rfSbkl%2F%2BCVaxULGM%2FBU99vmXPhJSgyXbWBE3v9pZ%2BOtfd%2BaH9RMIIGCK3%2FW2dWSMhEceiutjzO0IznzlE%2BLR3IYZYz5TlDUBgAvzWVlWUL1etguvnRK17KcU2eQm9RThu91%2BOziTBdpPA9Hmnp9qwktyTA5WFA4bAppN8VAqqKaZDug4ptjaJ%2FXi%2FLjfpB3%2Bsa2whVgVtSaXcSD4c5PoR4%2FBbybRg5DgzmLBKReUSIO962hw5kYIa8ovipHeo5E%2F1AFSa8dat5RluDo0oK6Ju2QbWMFySxDP%2Fj41A3nnYfqUycQIGR9Bn7PqMwxpd%2FGZuzukFEernF1AOKLYFjHHRAajXcYK31vTC91SdGIigiboGQbbHcLYbsd7pm5c4VAe7b1A7l%2Bx3Ewzv3cvgY6pgE7vlWFiHW7P4fwMQ1fc32v60jSVR9darXMoHKC0XtJtB4iFWugGGVBnLh6eIK8ka42HJcwv5%2FgbYwUXITW5sD5BBtV7ie4%2FYUtSRcu5TvXDQi3GyWV7K%2B8Bq78pueqcyr9L48cpZbHoiH3c5LZnuf3ZTT5tJsP7yfIWsZQvruWMAkUIlyw8FgJyBHrw9%2BQriEvG8Nstvm0XfXXc25DYoxPQFYmxBDN&X-Amz-Signature=3ca6169b256d183c25e70caef6284f18531cb420988d565749e3151a306dbed7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJPR3PV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXUh%2BOYAldndDib8EnJYJC0xp70dUdlL%2Fo8%2FeTIbjz8AiBcrLL61ra3kadQRzs3bxFj4n3jwuyl1CILOyXxkzM9qir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMADLGNsxgyDYNNAlJKtwDzzi1LdQdUlRQUSJ3SFVW56AHN70z5BQtSbh8c6huvcIbUZrHUWav%2Ba8wJIQpxiuBW1n8zye9p%2Bx4yIBhDT1MFpTDH6BxNndipkM2w3fQOcBzETc16ynOyS6erNolUy9zPPiQ1tD4AzJo95jQtvT3J6IuHwHXywAs1K7roA6hUuI7kUc7JyXyGvnuXPObiSyr1jIpkU4YbR5OFfwRle%2FOnlHvi%2Fi2OWi5BvlnM1FzJyK4hO7u5rfSbkl%2F%2BCVaxULGM%2FBU99vmXPhJSgyXbWBE3v9pZ%2BOtfd%2BaH9RMIIGCK3%2FW2dWSMhEceiutjzO0IznzlE%2BLR3IYZYz5TlDUBgAvzWVlWUL1etguvnRK17KcU2eQm9RThu91%2BOziTBdpPA9Hmnp9qwktyTA5WFA4bAppN8VAqqKaZDug4ptjaJ%2FXi%2FLjfpB3%2Bsa2whVgVtSaXcSD4c5PoR4%2FBbybRg5DgzmLBKReUSIO962hw5kYIa8ovipHeo5E%2F1AFSa8dat5RluDo0oK6Ju2QbWMFySxDP%2Fj41A3nnYfqUycQIGR9Bn7PqMwxpd%2FGZuzukFEernF1AOKLYFjHHRAajXcYK31vTC91SdGIigiboGQbbHcLYbsd7pm5c4VAe7b1A7l%2Bx3Ewzv3cvgY6pgE7vlWFiHW7P4fwMQ1fc32v60jSVR9darXMoHKC0XtJtB4iFWugGGVBnLh6eIK8ka42HJcwv5%2FgbYwUXITW5sD5BBtV7ie4%2FYUtSRcu5TvXDQi3GyWV7K%2B8Bq78pueqcyr9L48cpZbHoiH3c5LZnuf3ZTT5tJsP7yfIWsZQvruWMAkUIlyw8FgJyBHrw9%2BQriEvG8Nstvm0XfXXc25DYoxPQFYmxBDN&X-Amz-Signature=02681bf81f402b4772e469829c3de72b3e790ca8ed1edf3fe672a759d679ed35&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
