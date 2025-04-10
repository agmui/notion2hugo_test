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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VB7NL2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDP6uUsXHOVVWFLppIezpTTrfUR5sPvDREqv8Pcs3pq0QIhAKOieZ7Pgns1%2B452KFnHvQ%2B7aHXyJzw%2FtJTvpqzHKEBQKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqnwQgE24GSs37Wk4q3APwdSk5Gzh%2FXp%2FQgXk5427SIjR0FRwn%2FDIdcffVeFWUOKPJaurXpA%2BLttkovUE6%2FKDNs3hyQHyDy5v8BFu11XrYKC%2FXhlAa%2FUratKj30nhKEWthOxtOesesOnsM7%2FTHoaVnB29OWG42mNvSZoXF9wUIA3I8WGyBuFMWi9LZL96XgrbMvdA7iQmUU3zppacy5IKfqN1JTwEuptTrCLQZ9%2BRQzyKV0%2FAAaVrYaBxXv%2B4DztaNP%2BtfJJXk7XWFOIyT8gc230k%2FWmxPogp%2FhIPpbgenFQJWuqfHdSBfXT90wUPjhp6K2a%2FzblSjfgrkit0FwLnq0cKPGnaCrxNqu3C9AWqNFb7q1MbwnZwMWI%2Fel2KaE%2BRDc6wUjmw3qfnskNdAKMyVbw5mrbmHEvLMSEzXLgm1PqPcL2EywBvRDExj5MqHAf0Jh8j3MNSPjzC7yGnTG0RVcVUsuT0JM8MO0hsqlwQWUnzKak%2Fc%2BZezadPlO5FGt2Rknk122vEcEkJgg6JKeOBdS3f5ZlddVgaPq11O3ys3GA3%2BTxFzHi90K1efP6ZTMyj0pjqgCQWRJ9gCqa6VWkgbz13ojmXR0GYMDuVfHPWq3wLDCvJQ6yFhBJiVObawIEDH6jd2p5LfWMfHKzDmvd6%2FBjqkAWpytVPshMKwD2hBosbf4NaGRiCa271zpUiFVPe2SXZGziXaACsjfiUG9iJhK2LwFXPBoq8ph0p7qLe3u8Wci0RJrESv%2BcYG6Pge7P3fB30gaX47uSP%2Bj6PG5rRrGiIjbcuHVog%2FkTkQhTZ%2FaROMG%2BXd%2Fsc%2BpXuXXjMUzGg8d0KGNVt%2FAAMIgDMoDeTk9%2BWO33nwiWqPLuYE62GGzlRIr9yabWjh&X-Amz-Signature=47c9ccd5d8a082f4440c3d67a9b3154eba024ec9ac4c92fb5768e3f8e0119d34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VB7NL2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDP6uUsXHOVVWFLppIezpTTrfUR5sPvDREqv8Pcs3pq0QIhAKOieZ7Pgns1%2B452KFnHvQ%2B7aHXyJzw%2FtJTvpqzHKEBQKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqnwQgE24GSs37Wk4q3APwdSk5Gzh%2FXp%2FQgXk5427SIjR0FRwn%2FDIdcffVeFWUOKPJaurXpA%2BLttkovUE6%2FKDNs3hyQHyDy5v8BFu11XrYKC%2FXhlAa%2FUratKj30nhKEWthOxtOesesOnsM7%2FTHoaVnB29OWG42mNvSZoXF9wUIA3I8WGyBuFMWi9LZL96XgrbMvdA7iQmUU3zppacy5IKfqN1JTwEuptTrCLQZ9%2BRQzyKV0%2FAAaVrYaBxXv%2B4DztaNP%2BtfJJXk7XWFOIyT8gc230k%2FWmxPogp%2FhIPpbgenFQJWuqfHdSBfXT90wUPjhp6K2a%2FzblSjfgrkit0FwLnq0cKPGnaCrxNqu3C9AWqNFb7q1MbwnZwMWI%2Fel2KaE%2BRDc6wUjmw3qfnskNdAKMyVbw5mrbmHEvLMSEzXLgm1PqPcL2EywBvRDExj5MqHAf0Jh8j3MNSPjzC7yGnTG0RVcVUsuT0JM8MO0hsqlwQWUnzKak%2Fc%2BZezadPlO5FGt2Rknk122vEcEkJgg6JKeOBdS3f5ZlddVgaPq11O3ys3GA3%2BTxFzHi90K1efP6ZTMyj0pjqgCQWRJ9gCqa6VWkgbz13ojmXR0GYMDuVfHPWq3wLDCvJQ6yFhBJiVObawIEDH6jd2p5LfWMfHKzDmvd6%2FBjqkAWpytVPshMKwD2hBosbf4NaGRiCa271zpUiFVPe2SXZGziXaACsjfiUG9iJhK2LwFXPBoq8ph0p7qLe3u8Wci0RJrESv%2BcYG6Pge7P3fB30gaX47uSP%2Bj6PG5rRrGiIjbcuHVog%2FkTkQhTZ%2FaROMG%2BXd%2Fsc%2BpXuXXjMUzGg8d0KGNVt%2FAAMIgDMoDeTk9%2BWO33nwiWqPLuYE62GGzlRIr9yabWjh&X-Amz-Signature=dd2de9fc1a22e9cdb1eeacea6044fe45b2c1d94a5f86d0a42362263fb06eb29e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VB7NL2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDP6uUsXHOVVWFLppIezpTTrfUR5sPvDREqv8Pcs3pq0QIhAKOieZ7Pgns1%2B452KFnHvQ%2B7aHXyJzw%2FtJTvpqzHKEBQKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqnwQgE24GSs37Wk4q3APwdSk5Gzh%2FXp%2FQgXk5427SIjR0FRwn%2FDIdcffVeFWUOKPJaurXpA%2BLttkovUE6%2FKDNs3hyQHyDy5v8BFu11XrYKC%2FXhlAa%2FUratKj30nhKEWthOxtOesesOnsM7%2FTHoaVnB29OWG42mNvSZoXF9wUIA3I8WGyBuFMWi9LZL96XgrbMvdA7iQmUU3zppacy5IKfqN1JTwEuptTrCLQZ9%2BRQzyKV0%2FAAaVrYaBxXv%2B4DztaNP%2BtfJJXk7XWFOIyT8gc230k%2FWmxPogp%2FhIPpbgenFQJWuqfHdSBfXT90wUPjhp6K2a%2FzblSjfgrkit0FwLnq0cKPGnaCrxNqu3C9AWqNFb7q1MbwnZwMWI%2Fel2KaE%2BRDc6wUjmw3qfnskNdAKMyVbw5mrbmHEvLMSEzXLgm1PqPcL2EywBvRDExj5MqHAf0Jh8j3MNSPjzC7yGnTG0RVcVUsuT0JM8MO0hsqlwQWUnzKak%2Fc%2BZezadPlO5FGt2Rknk122vEcEkJgg6JKeOBdS3f5ZlddVgaPq11O3ys3GA3%2BTxFzHi90K1efP6ZTMyj0pjqgCQWRJ9gCqa6VWkgbz13ojmXR0GYMDuVfHPWq3wLDCvJQ6yFhBJiVObawIEDH6jd2p5LfWMfHKzDmvd6%2FBjqkAWpytVPshMKwD2hBosbf4NaGRiCa271zpUiFVPe2SXZGziXaACsjfiUG9iJhK2LwFXPBoq8ph0p7qLe3u8Wci0RJrESv%2BcYG6Pge7P3fB30gaX47uSP%2Bj6PG5rRrGiIjbcuHVog%2FkTkQhTZ%2FaROMG%2BXd%2Fsc%2BpXuXXjMUzGg8d0KGNVt%2FAAMIgDMoDeTk9%2BWO33nwiWqPLuYE62GGzlRIr9yabWjh&X-Amz-Signature=e9ff03cec7f7da7a93af352b86725bb491dc7c321dfc20780cab5e54ecff350b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
