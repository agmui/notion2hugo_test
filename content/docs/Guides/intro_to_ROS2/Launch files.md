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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVW3HV2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxhkilzHRxjz8Yn1BZobL8mF3DbAWHuBjDeXpiy6zQAAiBmV2ri5eGwZTWP0KN9rzMNj0wHevHO%2FcRlAaPMJUBdpCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMtLRYINA3UL5NCfzAKtwDuWohxddahv9PRrgHP2LWJ7WO%2FU%2B9ySOZhknjDK7XwBUr3lApDYi7KmUY2XFUss6IYS17WPXXepCA6ZGxhPOQbBwHczxCIpKES8gm9xZ%2FIBoTBFlHm36mU9m%2F1zty9movZG%2BkTRRE4gWwyUbL6ab2XP6YukIHJTTBpSK2%2BhmJlJ%2FSXjdNAjjDknJxA13eH2D9OjKUsFF50uJuYMOmsjm%2BB0FHsyHmO1NOSKAwEmGhV3%2B86mb6ryT8Y%2FWqPfJhAm6ezMqgSt0dTHrCXTYME3LMT4L7D4EENhy7VxnLo2TtEeWghgZYEq03OcCo0Q4cHfN6xVWDjMZAsN3LPKtpbpICXWGC1kLTXYU3b%2BHi4iEAuwPHDsNQeFdbef7J67ELCpqfA8FkMb6ROTVtXOq%2BSOwhtsLXHejJ%2FJAfDASdccG5hCJHmFTC%2B%2BLhGGrB%2FTVy1t1wwWUciNFxK5JOtOMa%2FNAccM8tdB80sU61VGiQDpjn1Q5qxwthQ9ThE44vgIhnPYDYBwpWDc%2Fxtcd0zzh9vFDgk2XDJYSem2m3dAdkHDRZiwKSnQwRPDXuq%2F2eOqLM2lJ5dFN9s%2FTWUfa0H3Bgzyb6%2BryRneA68F6c28XbIlCC91eQNqMZieREggJfVH0wroaZvwY6pgHh485myAyfn7IHkXJrKforrFI%2BgqsiIgKEvxKJFFKn3qbCAeiCq%2BF25wg8mfmpfyePlSi5FmcMZD%2Bm%2BIqxYJKngizETq0IMQBTCrQedbZfWsdzhwRS3MGR2UPzhhd9MwoR%2FHaDX%2FilSFuO71Gnv1aW%2BCWvysGhmfh%2FhTJdFfNUZYpDN%2BIsCASbuR4z21E3Pf%2B2WU9Dr94AlOnui%2BRfLHdPwvrUVCf5&X-Amz-Signature=81e1daefc1356ec35f40b5d10f74548d7e40539c7400b395495294abb9a3a4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVW3HV2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxhkilzHRxjz8Yn1BZobL8mF3DbAWHuBjDeXpiy6zQAAiBmV2ri5eGwZTWP0KN9rzMNj0wHevHO%2FcRlAaPMJUBdpCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMtLRYINA3UL5NCfzAKtwDuWohxddahv9PRrgHP2LWJ7WO%2FU%2B9ySOZhknjDK7XwBUr3lApDYi7KmUY2XFUss6IYS17WPXXepCA6ZGxhPOQbBwHczxCIpKES8gm9xZ%2FIBoTBFlHm36mU9m%2F1zty9movZG%2BkTRRE4gWwyUbL6ab2XP6YukIHJTTBpSK2%2BhmJlJ%2FSXjdNAjjDknJxA13eH2D9OjKUsFF50uJuYMOmsjm%2BB0FHsyHmO1NOSKAwEmGhV3%2B86mb6ryT8Y%2FWqPfJhAm6ezMqgSt0dTHrCXTYME3LMT4L7D4EENhy7VxnLo2TtEeWghgZYEq03OcCo0Q4cHfN6xVWDjMZAsN3LPKtpbpICXWGC1kLTXYU3b%2BHi4iEAuwPHDsNQeFdbef7J67ELCpqfA8FkMb6ROTVtXOq%2BSOwhtsLXHejJ%2FJAfDASdccG5hCJHmFTC%2B%2BLhGGrB%2FTVy1t1wwWUciNFxK5JOtOMa%2FNAccM8tdB80sU61VGiQDpjn1Q5qxwthQ9ThE44vgIhnPYDYBwpWDc%2Fxtcd0zzh9vFDgk2XDJYSem2m3dAdkHDRZiwKSnQwRPDXuq%2F2eOqLM2lJ5dFN9s%2FTWUfa0H3Bgzyb6%2BryRneA68F6c28XbIlCC91eQNqMZieREggJfVH0wroaZvwY6pgHh485myAyfn7IHkXJrKforrFI%2BgqsiIgKEvxKJFFKn3qbCAeiCq%2BF25wg8mfmpfyePlSi5FmcMZD%2Bm%2BIqxYJKngizETq0IMQBTCrQedbZfWsdzhwRS3MGR2UPzhhd9MwoR%2FHaDX%2FilSFuO71Gnv1aW%2BCWvysGhmfh%2FhTJdFfNUZYpDN%2BIsCASbuR4z21E3Pf%2B2WU9Dr94AlOnui%2BRfLHdPwvrUVCf5&X-Amz-Signature=0a5512ba0261f4c55a24e27ebd12984ecfb83e9cb4b40e02a0817c457df9627a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVW3HV2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxhkilzHRxjz8Yn1BZobL8mF3DbAWHuBjDeXpiy6zQAAiBmV2ri5eGwZTWP0KN9rzMNj0wHevHO%2FcRlAaPMJUBdpCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMtLRYINA3UL5NCfzAKtwDuWohxddahv9PRrgHP2LWJ7WO%2FU%2B9ySOZhknjDK7XwBUr3lApDYi7KmUY2XFUss6IYS17WPXXepCA6ZGxhPOQbBwHczxCIpKES8gm9xZ%2FIBoTBFlHm36mU9m%2F1zty9movZG%2BkTRRE4gWwyUbL6ab2XP6YukIHJTTBpSK2%2BhmJlJ%2FSXjdNAjjDknJxA13eH2D9OjKUsFF50uJuYMOmsjm%2BB0FHsyHmO1NOSKAwEmGhV3%2B86mb6ryT8Y%2FWqPfJhAm6ezMqgSt0dTHrCXTYME3LMT4L7D4EENhy7VxnLo2TtEeWghgZYEq03OcCo0Q4cHfN6xVWDjMZAsN3LPKtpbpICXWGC1kLTXYU3b%2BHi4iEAuwPHDsNQeFdbef7J67ELCpqfA8FkMb6ROTVtXOq%2BSOwhtsLXHejJ%2FJAfDASdccG5hCJHmFTC%2B%2BLhGGrB%2FTVy1t1wwWUciNFxK5JOtOMa%2FNAccM8tdB80sU61VGiQDpjn1Q5qxwthQ9ThE44vgIhnPYDYBwpWDc%2Fxtcd0zzh9vFDgk2XDJYSem2m3dAdkHDRZiwKSnQwRPDXuq%2F2eOqLM2lJ5dFN9s%2FTWUfa0H3Bgzyb6%2BryRneA68F6c28XbIlCC91eQNqMZieREggJfVH0wroaZvwY6pgHh485myAyfn7IHkXJrKforrFI%2BgqsiIgKEvxKJFFKn3qbCAeiCq%2BF25wg8mfmpfyePlSi5FmcMZD%2Bm%2BIqxYJKngizETq0IMQBTCrQedbZfWsdzhwRS3MGR2UPzhhd9MwoR%2FHaDX%2FilSFuO71Gnv1aW%2BCWvysGhmfh%2FhTJdFfNUZYpDN%2BIsCASbuR4z21E3Pf%2B2WU9Dr94AlOnui%2BRfLHdPwvrUVCf5&X-Amz-Signature=6a99a017e2faf1eb64d363666b922c7818742bfca6a338826c3423f30ba0c0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
