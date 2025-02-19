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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277W4OLD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICr88IjkdnP3yo0yVw96vIpVB7b8Qu5RR98%2BRP35GWN9AiA9ZZ8frDTbNnnOgSTLXs2MJ7TCSRWAb%2BluLKw5jSnC%2FyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmsSGFssuunKQpFdKtwDroikPnuPmfX72gO3jz36mu%2FUuFv0yEo8lp26WGAb3diy767ihOvXPlKOW5UqVr41ANmkMGnsA%2BHewZZG6n3ZdsSBwyBU84lKIjdJNY%2B9CQzz3vR0voSSYvKgPxlBoHIMbFLXxsDglaAwIEOS8pAv%2BbRwj6%2FZwJtul8lP%2FnkrpozxWCQyW8P7gv56I1qvMWG1Ac0sVtOQxYBz%2Ft4mPcVHjVjdwzu0XbQ4crGERUkKhGyyqFoGa0Xz3P1x6fqgyR87KFYsk%2BIkMLqRvuiPFlDbIbmA7SUVOZpDiqgCaYE9L4XUaBybt%2FwOhg1KwfCW02rgN2YnhOmEUNGwQFjmhOp67mocB3kYwiMzoJ7QgBQxVn92QZZFk5jMDvHwLHLNSfimkfvP25v%2BsIEN1oTsUWEg8%2F%2By9b%2B3%2Fi7wsip3pqOeF4zbwHlmTyMh0ddy9sSIL3DyC3dpSmqgv3aDFfsDiWpZQRTIIxn559StyqtC%2B%2BWAaJayo3UWuPhfL1oASkR90dB2Z3NPal%2FKWbaCG0ojYa6XYG1WFLrnDutscul%2BvCLtGFcA5qPc793IS%2BzfTODYFBCFTHFalwVn0sY39OxwgkbZYQjfMKz4wkBu1Fh8XhAxkLEjkjMzlgrcNnuRxNww8%2FrWvQY6pgF8z6acKHPPi2PCMK%2FlKWPjOTRQ2u1pET2FfnMOVdmMQ2j5VjR5SofSY6CEhhRi19NfMAv6apnldYyl2pLlBnPRzILjqbkut3Ly6Iovkop8XQaz%2Fz5Jy1VlcaaiBNhyAT9tAUWlTmU%2FcDuqZU9xcg1rPPWt%2FqLgPf4CJA03ROhFRLVT%2BV%2Fu8o1KtAyczYYaMbhu1gwHE45e3oy%2BWnLL682FqNkn%2BCwa&X-Amz-Signature=fdd3402accd5e6df772f8a7e03a92585f0bb3e18fb7a7244fe8a38ef16334e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277W4OLD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICr88IjkdnP3yo0yVw96vIpVB7b8Qu5RR98%2BRP35GWN9AiA9ZZ8frDTbNnnOgSTLXs2MJ7TCSRWAb%2BluLKw5jSnC%2FyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmsSGFssuunKQpFdKtwDroikPnuPmfX72gO3jz36mu%2FUuFv0yEo8lp26WGAb3diy767ihOvXPlKOW5UqVr41ANmkMGnsA%2BHewZZG6n3ZdsSBwyBU84lKIjdJNY%2B9CQzz3vR0voSSYvKgPxlBoHIMbFLXxsDglaAwIEOS8pAv%2BbRwj6%2FZwJtul8lP%2FnkrpozxWCQyW8P7gv56I1qvMWG1Ac0sVtOQxYBz%2Ft4mPcVHjVjdwzu0XbQ4crGERUkKhGyyqFoGa0Xz3P1x6fqgyR87KFYsk%2BIkMLqRvuiPFlDbIbmA7SUVOZpDiqgCaYE9L4XUaBybt%2FwOhg1KwfCW02rgN2YnhOmEUNGwQFjmhOp67mocB3kYwiMzoJ7QgBQxVn92QZZFk5jMDvHwLHLNSfimkfvP25v%2BsIEN1oTsUWEg8%2F%2By9b%2B3%2Fi7wsip3pqOeF4zbwHlmTyMh0ddy9sSIL3DyC3dpSmqgv3aDFfsDiWpZQRTIIxn559StyqtC%2B%2BWAaJayo3UWuPhfL1oASkR90dB2Z3NPal%2FKWbaCG0ojYa6XYG1WFLrnDutscul%2BvCLtGFcA5qPc793IS%2BzfTODYFBCFTHFalwVn0sY39OxwgkbZYQjfMKz4wkBu1Fh8XhAxkLEjkjMzlgrcNnuRxNww8%2FrWvQY6pgF8z6acKHPPi2PCMK%2FlKWPjOTRQ2u1pET2FfnMOVdmMQ2j5VjR5SofSY6CEhhRi19NfMAv6apnldYyl2pLlBnPRzILjqbkut3Ly6Iovkop8XQaz%2Fz5Jy1VlcaaiBNhyAT9tAUWlTmU%2FcDuqZU9xcg1rPPWt%2FqLgPf4CJA03ROhFRLVT%2BV%2Fu8o1KtAyczYYaMbhu1gwHE45e3oy%2BWnLL682FqNkn%2BCwa&X-Amz-Signature=10376028beee7ed26522347c6393a04831cdf8e4260d408bdeaf5ca96076c48d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277W4OLD%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICr88IjkdnP3yo0yVw96vIpVB7b8Qu5RR98%2BRP35GWN9AiA9ZZ8frDTbNnnOgSTLXs2MJ7TCSRWAb%2BluLKw5jSnC%2FyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmsSGFssuunKQpFdKtwDroikPnuPmfX72gO3jz36mu%2FUuFv0yEo8lp26WGAb3diy767ihOvXPlKOW5UqVr41ANmkMGnsA%2BHewZZG6n3ZdsSBwyBU84lKIjdJNY%2B9CQzz3vR0voSSYvKgPxlBoHIMbFLXxsDglaAwIEOS8pAv%2BbRwj6%2FZwJtul8lP%2FnkrpozxWCQyW8P7gv56I1qvMWG1Ac0sVtOQxYBz%2Ft4mPcVHjVjdwzu0XbQ4crGERUkKhGyyqFoGa0Xz3P1x6fqgyR87KFYsk%2BIkMLqRvuiPFlDbIbmA7SUVOZpDiqgCaYE9L4XUaBybt%2FwOhg1KwfCW02rgN2YnhOmEUNGwQFjmhOp67mocB3kYwiMzoJ7QgBQxVn92QZZFk5jMDvHwLHLNSfimkfvP25v%2BsIEN1oTsUWEg8%2F%2By9b%2B3%2Fi7wsip3pqOeF4zbwHlmTyMh0ddy9sSIL3DyC3dpSmqgv3aDFfsDiWpZQRTIIxn559StyqtC%2B%2BWAaJayo3UWuPhfL1oASkR90dB2Z3NPal%2FKWbaCG0ojYa6XYG1WFLrnDutscul%2BvCLtGFcA5qPc793IS%2BzfTODYFBCFTHFalwVn0sY39OxwgkbZYQjfMKz4wkBu1Fh8XhAxkLEjkjMzlgrcNnuRxNww8%2FrWvQY6pgF8z6acKHPPi2PCMK%2FlKWPjOTRQ2u1pET2FfnMOVdmMQ2j5VjR5SofSY6CEhhRi19NfMAv6apnldYyl2pLlBnPRzILjqbkut3Ly6Iovkop8XQaz%2Fz5Jy1VlcaaiBNhyAT9tAUWlTmU%2FcDuqZU9xcg1rPPWt%2FqLgPf4CJA03ROhFRLVT%2BV%2Fu8o1KtAyczYYaMbhu1gwHE45e3oy%2BWnLL682FqNkn%2BCwa&X-Amz-Signature=c83b8a54f61cd3c30c4deacec26ebda61c60de75e204164cf76fd6d88952f4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
