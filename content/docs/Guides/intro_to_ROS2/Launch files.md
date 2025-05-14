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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBV5UPH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGokCiMYMzIY19KpWwzoAJXCTc%2B5sN9QiwhMQAKu%2FNxbAiBeO5yorJiwoaVe5wi0czOO8COKRmwc500epXr9bPIZWyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSmXXVp2NipbVJX9tKtwDbl22ZxsHC9oyisnx08Elto%2BSb27CJhOd6dj3ZypEX7aEWwGo2WNAHOlDJLhLLIOe5DjavtpN%2BJEZ55fmH9SZJiInZzsy%2FEI82jKB01RpsT%2BH9vX6B0gg6hFONoFdq%2BOXjJzuKmS4s9GaQYhP4l5me3TakSlsnZ7iZ1LPCYsPNhHlFLd4Bp61SiUSfjhbxuHlrxjaImXwLZqs6F%2FDkJoln7NC1kxwiU8MOmXEoQj9gKRc2xUUcC57beN%2BwbQbgFpGK3tCukrKm5uzQjVsrQygWe0lFipHudETbWSTbipKCBi8DzllVExk%2BOwJNEeL%2BbICmsCZu37DGOAsODleAcaqI6d51Ly3KcfoP86DQegLz9ywL%2FZnehz%2FwGz6%2FCsqM9Fwqm7wPFtc6YkjqUTGHVIkT511kB%2FvPTisX3Ah%2Fmdp68aFt5lH5cyqwjq4MmIlzlP2ROJe9cVL%2BGixs%2Fif9JMzcc3Phi%2BJXnV8Z%2Fnrs5%2BBrCDUm7%2B0SSopybl3Qbu%2B2u6xOBBA%2BAkJPUFr%2F3LYO3UgURqwTVo%2BBZFJhKufNh2NxHGB4akD%2BmZQeZ10arfANS0Oi7ONhpI0yz%2F8q6KmmFiJ2kZxQHFWHfW7Bu22y22Nmpx965hBJpa%2F%2B5hRVTYwp4eSwQY6pgFEe6n6HvD0JdwzJT%2FYBJEXi39yYjKwGCneinq%2Fzpr2LT2DJWzapLJmoGoQepjvTEjy1jnmWGHbONfkmSdt%2FviMJP6Ub4sy%2FLtZRYMwT7VMFDIPX1T1SqzGEQcYJgdRnX8nDnmVIe6ncorvdIngubzRbSy2HD07TElD9V2PbICAFe%2BOr1OeZMmWPJqfxJXhBR21cnx8ftmvP0iUd8hEVWHDvRMnRm3A&X-Amz-Signature=020cf3b4c85cbf6a301fd08500f99fb013222a5b8731d47dc15055efa1271fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBV5UPH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGokCiMYMzIY19KpWwzoAJXCTc%2B5sN9QiwhMQAKu%2FNxbAiBeO5yorJiwoaVe5wi0czOO8COKRmwc500epXr9bPIZWyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSmXXVp2NipbVJX9tKtwDbl22ZxsHC9oyisnx08Elto%2BSb27CJhOd6dj3ZypEX7aEWwGo2WNAHOlDJLhLLIOe5DjavtpN%2BJEZ55fmH9SZJiInZzsy%2FEI82jKB01RpsT%2BH9vX6B0gg6hFONoFdq%2BOXjJzuKmS4s9GaQYhP4l5me3TakSlsnZ7iZ1LPCYsPNhHlFLd4Bp61SiUSfjhbxuHlrxjaImXwLZqs6F%2FDkJoln7NC1kxwiU8MOmXEoQj9gKRc2xUUcC57beN%2BwbQbgFpGK3tCukrKm5uzQjVsrQygWe0lFipHudETbWSTbipKCBi8DzllVExk%2BOwJNEeL%2BbICmsCZu37DGOAsODleAcaqI6d51Ly3KcfoP86DQegLz9ywL%2FZnehz%2FwGz6%2FCsqM9Fwqm7wPFtc6YkjqUTGHVIkT511kB%2FvPTisX3Ah%2Fmdp68aFt5lH5cyqwjq4MmIlzlP2ROJe9cVL%2BGixs%2Fif9JMzcc3Phi%2BJXnV8Z%2Fnrs5%2BBrCDUm7%2B0SSopybl3Qbu%2B2u6xOBBA%2BAkJPUFr%2F3LYO3UgURqwTVo%2BBZFJhKufNh2NxHGB4akD%2BmZQeZ10arfANS0Oi7ONhpI0yz%2F8q6KmmFiJ2kZxQHFWHfW7Bu22y22Nmpx965hBJpa%2F%2B5hRVTYwp4eSwQY6pgFEe6n6HvD0JdwzJT%2FYBJEXi39yYjKwGCneinq%2Fzpr2LT2DJWzapLJmoGoQepjvTEjy1jnmWGHbONfkmSdt%2FviMJP6Ub4sy%2FLtZRYMwT7VMFDIPX1T1SqzGEQcYJgdRnX8nDnmVIe6ncorvdIngubzRbSy2HD07TElD9V2PbICAFe%2BOr1OeZMmWPJqfxJXhBR21cnx8ftmvP0iUd8hEVWHDvRMnRm3A&X-Amz-Signature=823436cfdf1fc7ce9d2de3e52c3442dc3885b2f28d1278492021f9ee48444ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBV5UPH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGokCiMYMzIY19KpWwzoAJXCTc%2B5sN9QiwhMQAKu%2FNxbAiBeO5yorJiwoaVe5wi0czOO8COKRmwc500epXr9bPIZWyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSmXXVp2NipbVJX9tKtwDbl22ZxsHC9oyisnx08Elto%2BSb27CJhOd6dj3ZypEX7aEWwGo2WNAHOlDJLhLLIOe5DjavtpN%2BJEZ55fmH9SZJiInZzsy%2FEI82jKB01RpsT%2BH9vX6B0gg6hFONoFdq%2BOXjJzuKmS4s9GaQYhP4l5me3TakSlsnZ7iZ1LPCYsPNhHlFLd4Bp61SiUSfjhbxuHlrxjaImXwLZqs6F%2FDkJoln7NC1kxwiU8MOmXEoQj9gKRc2xUUcC57beN%2BwbQbgFpGK3tCukrKm5uzQjVsrQygWe0lFipHudETbWSTbipKCBi8DzllVExk%2BOwJNEeL%2BbICmsCZu37DGOAsODleAcaqI6d51Ly3KcfoP86DQegLz9ywL%2FZnehz%2FwGz6%2FCsqM9Fwqm7wPFtc6YkjqUTGHVIkT511kB%2FvPTisX3Ah%2Fmdp68aFt5lH5cyqwjq4MmIlzlP2ROJe9cVL%2BGixs%2Fif9JMzcc3Phi%2BJXnV8Z%2Fnrs5%2BBrCDUm7%2B0SSopybl3Qbu%2B2u6xOBBA%2BAkJPUFr%2F3LYO3UgURqwTVo%2BBZFJhKufNh2NxHGB4akD%2BmZQeZ10arfANS0Oi7ONhpI0yz%2F8q6KmmFiJ2kZxQHFWHfW7Bu22y22Nmpx965hBJpa%2F%2B5hRVTYwp4eSwQY6pgFEe6n6HvD0JdwzJT%2FYBJEXi39yYjKwGCneinq%2Fzpr2LT2DJWzapLJmoGoQepjvTEjy1jnmWGHbONfkmSdt%2FviMJP6Ub4sy%2FLtZRYMwT7VMFDIPX1T1SqzGEQcYJgdRnX8nDnmVIe6ncorvdIngubzRbSy2HD07TElD9V2PbICAFe%2BOr1OeZMmWPJqfxJXhBR21cnx8ftmvP0iUd8hEVWHDvRMnRm3A&X-Amz-Signature=d567edb4ae4b57b51e14b6ffc0a446def0bcbcda40d968cebc8ddb4f9d5e699e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
