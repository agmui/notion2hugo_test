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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6LMGKA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfFxi3ro9tjMCX0yoKC6RASXbN85Rh1v4C16wuluuuXwIhAJVTYUNvfDVY017huyf6F06abxXnZZK1WHHZv7Vu5LDBKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FKZP%2Bmeepy60aCGsq3AMRX8lpW1O5r6qRy8a1Vrz7yMaKYkcKhQz1wKeLajf9i0fKvS8ov6f9YfYJ0cybTrRUtn1xpTo5TY0WBWAYOWM4sneEeTJ9pp3pG65LOk1tQjF5b6pvg3P2BEoxjWYlr2zTTA4%2Fu5bMPuoLXAKMyqDNQ9O6bS9uoWvKtFkD6uMbdCEKWgbt%2FwhLQrTJQeJdjnPH7FyXIxzwtT9i3tGHyaliuMb%2F0boxIJkh9xBCs7fMQWNZPXKhT64coW7ZAgJkLBrmHp3yVa8%2Buv4o%2F7HZ52yzGW%2F0%2Fkgkz4ca6da2uoZ1ebJkjHd8ejJU58fXGAoqK75lW%2BdjySQ81H5V6flOK7YzxZ6HjZPHAImcf04hXZfyTr6q5Iva0Nkiv8%2B1ilePqFiSVLtqsDkAV2%2BqWFKnmZCHFBpPWbex6DHAZbVfJXTO2ZHQ77c%2Fv48bB%2B6pUlIJLh%2BSi7PulnC0Z640lL2drBdz3VqbqyCMdSRqbMTknyVGACZzyL7TI6cd%2FvPeIcIIN6Lri9u%2Bdw9Xhg44ikQzdPEzgZOAYTNGSoyuf491mfE9e7Np0C53KaNSGSbtJUOYcjUAz0R6xkBI7cZnI%2B8hHviIWadjOGcGiEUZye%2FjvycEltMSZNv1e7uit7RzyzDslqvCBjqkAfvkQhQLYNCZFC7SEcakfRGchGDWTsF9EBVsptOPJUAEfrBJh3l7FUpceDsNdPFSk7OCS8ujm7E52e8Qg5j6CEgJSrMRKOJJ8SUY7IhjFvhMYc%2BeeUofacwsOFR9Qo2W03JqM0XdodndYkuwqDk6EyTm5PkfFmNFpuc62JnDHypihhLpBsLg%2F%2ByCwDZojyx6pKFeHAVEbPoMJItNiJj%2Flm7a14Yu&X-Amz-Signature=1364176449a9863993a8f80fea6ddfaabc394d27adf2efb489c02239ffc6586a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6LMGKA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfFxi3ro9tjMCX0yoKC6RASXbN85Rh1v4C16wuluuuXwIhAJVTYUNvfDVY017huyf6F06abxXnZZK1WHHZv7Vu5LDBKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FKZP%2Bmeepy60aCGsq3AMRX8lpW1O5r6qRy8a1Vrz7yMaKYkcKhQz1wKeLajf9i0fKvS8ov6f9YfYJ0cybTrRUtn1xpTo5TY0WBWAYOWM4sneEeTJ9pp3pG65LOk1tQjF5b6pvg3P2BEoxjWYlr2zTTA4%2Fu5bMPuoLXAKMyqDNQ9O6bS9uoWvKtFkD6uMbdCEKWgbt%2FwhLQrTJQeJdjnPH7FyXIxzwtT9i3tGHyaliuMb%2F0boxIJkh9xBCs7fMQWNZPXKhT64coW7ZAgJkLBrmHp3yVa8%2Buv4o%2F7HZ52yzGW%2F0%2Fkgkz4ca6da2uoZ1ebJkjHd8ejJU58fXGAoqK75lW%2BdjySQ81H5V6flOK7YzxZ6HjZPHAImcf04hXZfyTr6q5Iva0Nkiv8%2B1ilePqFiSVLtqsDkAV2%2BqWFKnmZCHFBpPWbex6DHAZbVfJXTO2ZHQ77c%2Fv48bB%2B6pUlIJLh%2BSi7PulnC0Z640lL2drBdz3VqbqyCMdSRqbMTknyVGACZzyL7TI6cd%2FvPeIcIIN6Lri9u%2Bdw9Xhg44ikQzdPEzgZOAYTNGSoyuf491mfE9e7Np0C53KaNSGSbtJUOYcjUAz0R6xkBI7cZnI%2B8hHviIWadjOGcGiEUZye%2FjvycEltMSZNv1e7uit7RzyzDslqvCBjqkAfvkQhQLYNCZFC7SEcakfRGchGDWTsF9EBVsptOPJUAEfrBJh3l7FUpceDsNdPFSk7OCS8ujm7E52e8Qg5j6CEgJSrMRKOJJ8SUY7IhjFvhMYc%2BeeUofacwsOFR9Qo2W03JqM0XdodndYkuwqDk6EyTm5PkfFmNFpuc62JnDHypihhLpBsLg%2F%2ByCwDZojyx6pKFeHAVEbPoMJItNiJj%2Flm7a14Yu&X-Amz-Signature=0dd44c512e9ef08fefd51ab0210ab758509cb0824b5e9dd2d1bd7636655fe029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6LMGKA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDfFxi3ro9tjMCX0yoKC6RASXbN85Rh1v4C16wuluuuXwIhAJVTYUNvfDVY017huyf6F06abxXnZZK1WHHZv7Vu5LDBKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FKZP%2Bmeepy60aCGsq3AMRX8lpW1O5r6qRy8a1Vrz7yMaKYkcKhQz1wKeLajf9i0fKvS8ov6f9YfYJ0cybTrRUtn1xpTo5TY0WBWAYOWM4sneEeTJ9pp3pG65LOk1tQjF5b6pvg3P2BEoxjWYlr2zTTA4%2Fu5bMPuoLXAKMyqDNQ9O6bS9uoWvKtFkD6uMbdCEKWgbt%2FwhLQrTJQeJdjnPH7FyXIxzwtT9i3tGHyaliuMb%2F0boxIJkh9xBCs7fMQWNZPXKhT64coW7ZAgJkLBrmHp3yVa8%2Buv4o%2F7HZ52yzGW%2F0%2Fkgkz4ca6da2uoZ1ebJkjHd8ejJU58fXGAoqK75lW%2BdjySQ81H5V6flOK7YzxZ6HjZPHAImcf04hXZfyTr6q5Iva0Nkiv8%2B1ilePqFiSVLtqsDkAV2%2BqWFKnmZCHFBpPWbex6DHAZbVfJXTO2ZHQ77c%2Fv48bB%2B6pUlIJLh%2BSi7PulnC0Z640lL2drBdz3VqbqyCMdSRqbMTknyVGACZzyL7TI6cd%2FvPeIcIIN6Lri9u%2Bdw9Xhg44ikQzdPEzgZOAYTNGSoyuf491mfE9e7Np0C53KaNSGSbtJUOYcjUAz0R6xkBI7cZnI%2B8hHviIWadjOGcGiEUZye%2FjvycEltMSZNv1e7uit7RzyzDslqvCBjqkAfvkQhQLYNCZFC7SEcakfRGchGDWTsF9EBVsptOPJUAEfrBJh3l7FUpceDsNdPFSk7OCS8ujm7E52e8Qg5j6CEgJSrMRKOJJ8SUY7IhjFvhMYc%2BeeUofacwsOFR9Qo2W03JqM0XdodndYkuwqDk6EyTm5PkfFmNFpuc62JnDHypihhLpBsLg%2F%2ByCwDZojyx6pKFeHAVEbPoMJItNiJj%2Flm7a14Yu&X-Amz-Signature=7f98330f8cbe5b43c37f0dde1f2454ba3edebddd66d35c4e8d8216e4935aa0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
