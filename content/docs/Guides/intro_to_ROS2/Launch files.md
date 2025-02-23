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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUXXHM4T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxd14Gb2yQSaNVXM5KbPP2AbSq4ijDrBe1FI80Yk%2BmBAIhAPbdPOYoBOEEbKgkIgYwJH7PPDRgMvx4MFdx%2FhHiQQ5nKv8DCBQQABoMNjM3NDIzMTgzODA1IgxdICwgTv6AczAFCoAq3AMzXR5r5ShQKj2ZEinViJu0h7dC14gDQtuuZlntg%2B7vABDvoWmpDd6rO3NLGj4eiPySB4ZYj4hPbYrlnAvEZRFHSCng%2FZYf9oLsZEqnaRvSvJYRpTcshz25soXMFkTwvQxzBqmgJYaVU7Zh6gGdLSWWdtqH8pc6ezISOWmJGoHJ4j%2FuUs1CnZUY%2Fr%2BrNFa4LsFnVrSMeQSrtq8fKW%2Bj%2B%2FkwJbbpmttxFPAkG5BEEwuVh%2BzjNWgTbXTTKA1xuPdlnAebaY3RJHO7Vkb1whp39GW4JIgpnhfhB2Kulu9Wl%2BFkROY%2Bb3lz%2FdJbFF1Fyi%2FWV%2FXAVFoVIALLvOaSzQiaptOZHasTYWWyJzvue1RquF633%2BuAd2iyp3L%2FR0Oa2lEYksgCaR1ILRqoPgxw8%2F02YMRLIOdeSno36FuiC%2F%2BJm%2FymRiiw4FD3r8Dbxq5kLZoVMZbD1uh6RKw0%2Fu72V3uyIzew7iwRjDUqfABifxo6IQ8l6qJLNfqvw6wRd%2F6LX%2FD5gtwaZHYV418LhDct7FNsq%2Fb5R5u8tKp%2FEIUUwK%2FY7o7YY0DRe7C6Ao963%2FvtSegBNTGMjvWgfy%2B%2BOP7QCp0pQfalUlAyFLnEaLTpOWExQ0gURVKwWlTKf2vZg50L6jDt7%2Bu9BjqkAdwuDwOwAmFmVAxkYQsgk72mSznTVkNAovXGv93xStHhyLgt2uRFD5MSX8jlSdNEpbbO2YJBQ4bI9HW6r10iaiYZ09%2FnP5hlmcM38xSsQ0jL2cnfeEeqiTXka2PS26w2aYHia%2FnymDoYVpM0way3%2BIMwy50dSsbioZyM5quQgDq5XXWl%2Bu1vf58qQAiQbUxHPLW2pami0Cj8TXpYcVjekRkxFwET&X-Amz-Signature=03036273637a27b83332187a8aad6837c74a5ff0fdbebbf6789677422f9d61ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUXXHM4T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxd14Gb2yQSaNVXM5KbPP2AbSq4ijDrBe1FI80Yk%2BmBAIhAPbdPOYoBOEEbKgkIgYwJH7PPDRgMvx4MFdx%2FhHiQQ5nKv8DCBQQABoMNjM3NDIzMTgzODA1IgxdICwgTv6AczAFCoAq3AMzXR5r5ShQKj2ZEinViJu0h7dC14gDQtuuZlntg%2B7vABDvoWmpDd6rO3NLGj4eiPySB4ZYj4hPbYrlnAvEZRFHSCng%2FZYf9oLsZEqnaRvSvJYRpTcshz25soXMFkTwvQxzBqmgJYaVU7Zh6gGdLSWWdtqH8pc6ezISOWmJGoHJ4j%2FuUs1CnZUY%2Fr%2BrNFa4LsFnVrSMeQSrtq8fKW%2Bj%2B%2FkwJbbpmttxFPAkG5BEEwuVh%2BzjNWgTbXTTKA1xuPdlnAebaY3RJHO7Vkb1whp39GW4JIgpnhfhB2Kulu9Wl%2BFkROY%2Bb3lz%2FdJbFF1Fyi%2FWV%2FXAVFoVIALLvOaSzQiaptOZHasTYWWyJzvue1RquF633%2BuAd2iyp3L%2FR0Oa2lEYksgCaR1ILRqoPgxw8%2F02YMRLIOdeSno36FuiC%2F%2BJm%2FymRiiw4FD3r8Dbxq5kLZoVMZbD1uh6RKw0%2Fu72V3uyIzew7iwRjDUqfABifxo6IQ8l6qJLNfqvw6wRd%2F6LX%2FD5gtwaZHYV418LhDct7FNsq%2Fb5R5u8tKp%2FEIUUwK%2FY7o7YY0DRe7C6Ao963%2FvtSegBNTGMjvWgfy%2B%2BOP7QCp0pQfalUlAyFLnEaLTpOWExQ0gURVKwWlTKf2vZg50L6jDt7%2Bu9BjqkAdwuDwOwAmFmVAxkYQsgk72mSznTVkNAovXGv93xStHhyLgt2uRFD5MSX8jlSdNEpbbO2YJBQ4bI9HW6r10iaiYZ09%2FnP5hlmcM38xSsQ0jL2cnfeEeqiTXka2PS26w2aYHia%2FnymDoYVpM0way3%2BIMwy50dSsbioZyM5quQgDq5XXWl%2Bu1vf58qQAiQbUxHPLW2pami0Cj8TXpYcVjekRkxFwET&X-Amz-Signature=af799d2346916c76497845663c93c97dfd3374cff4a7013a46dde21a4aeccec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUXXHM4T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxd14Gb2yQSaNVXM5KbPP2AbSq4ijDrBe1FI80Yk%2BmBAIhAPbdPOYoBOEEbKgkIgYwJH7PPDRgMvx4MFdx%2FhHiQQ5nKv8DCBQQABoMNjM3NDIzMTgzODA1IgxdICwgTv6AczAFCoAq3AMzXR5r5ShQKj2ZEinViJu0h7dC14gDQtuuZlntg%2B7vABDvoWmpDd6rO3NLGj4eiPySB4ZYj4hPbYrlnAvEZRFHSCng%2FZYf9oLsZEqnaRvSvJYRpTcshz25soXMFkTwvQxzBqmgJYaVU7Zh6gGdLSWWdtqH8pc6ezISOWmJGoHJ4j%2FuUs1CnZUY%2Fr%2BrNFa4LsFnVrSMeQSrtq8fKW%2Bj%2B%2FkwJbbpmttxFPAkG5BEEwuVh%2BzjNWgTbXTTKA1xuPdlnAebaY3RJHO7Vkb1whp39GW4JIgpnhfhB2Kulu9Wl%2BFkROY%2Bb3lz%2FdJbFF1Fyi%2FWV%2FXAVFoVIALLvOaSzQiaptOZHasTYWWyJzvue1RquF633%2BuAd2iyp3L%2FR0Oa2lEYksgCaR1ILRqoPgxw8%2F02YMRLIOdeSno36FuiC%2F%2BJm%2FymRiiw4FD3r8Dbxq5kLZoVMZbD1uh6RKw0%2Fu72V3uyIzew7iwRjDUqfABifxo6IQ8l6qJLNfqvw6wRd%2F6LX%2FD5gtwaZHYV418LhDct7FNsq%2Fb5R5u8tKp%2FEIUUwK%2FY7o7YY0DRe7C6Ao963%2FvtSegBNTGMjvWgfy%2B%2BOP7QCp0pQfalUlAyFLnEaLTpOWExQ0gURVKwWlTKf2vZg50L6jDt7%2Bu9BjqkAdwuDwOwAmFmVAxkYQsgk72mSznTVkNAovXGv93xStHhyLgt2uRFD5MSX8jlSdNEpbbO2YJBQ4bI9HW6r10iaiYZ09%2FnP5hlmcM38xSsQ0jL2cnfeEeqiTXka2PS26w2aYHia%2FnymDoYVpM0way3%2BIMwy50dSsbioZyM5quQgDq5XXWl%2Bu1vf58qQAiQbUxHPLW2pami0Cj8TXpYcVjekRkxFwET&X-Amz-Signature=58cc199de148a4ce0048f9f0a7170f6f8cc4f12295b8bd888a86e042c578f8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
