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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZVJD66%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7fgNFelxb1C4ixeDN9Y1HIIH5eKK5%2BHdQw8e18Jr40AiBkOlWDjM%2FR9toglXn9NLLJagrepGmygL8ZRL5QfOJsIyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVRaGad2U3JYBogjKtwDw3KDhvAwEMpD9ZYP3YXEZLZ2t%2FXiNjsdK6G0h3W3ZYkzwt3RqxFHxAO9iQYUOhLeptlRDekUyeIVmVOjm8UyxmCJpXsWQCJq%2F7vt3oa6iIePi7yUXa4dKjr3C6mKgGfowoXLvlW6FbghUlK8cyTvNceRkebKgFFzNNV2mM8F4dsFcP%2B5c5BgFOh9VpLNAmDKk%2BYHQ1GuCKPMf%2FAs0EuKz60DLgLJYu4ytxx0xMEcMOwOvy%2Bcuzy%2FFuA0xFP97Qi8mCjFOmFsF7gK4jcmTX1qkkythVu4r58yf%2BSXvjMR0XAocWmQsMh6kjkurU%2BqRKudS%2BNHjzz31lnL4GOcUM%2BSCo5PkKD%2FIZ1CrcudTE2EvEdqjV3sYhV7axfXcCGmqIBHrrk1i7UkkV%2BAVg%2Bs2weDYl3CAqAmON1gk1LXjIJRsPEgyRivQwefu5NJerBP%2F8ZADaUJF9fUVarMj7F6oPr2gurCx10Jv2KoK9p1%2F1aDAaviJhm02cjEb6lVT4iaaF79O%2BldPun9%2FR4AdVpGjU7a1JE2xBRnxrUyApLABVJkfbiYuAOj5CaqAE%2BDCo0M%2BnPIqUi8pydZTdOD5pk1k4L8kHfMxH%2B4Ivxuv55by2xYII2tGXcQr7Z7i0sPJRQwgoXpvAY6pgEBaZZmwEnx6UTylz1mquw9Fp1bsxYIRovgqtFtcelrwudyK%2BIN51X%2BWAkJH%2Ftf5QrDiHPi4LgQyoejx17TXrv012MGDJZMOvUI0zl3Nteb3RwQraHS43EoisiED%2FaVRD5742YW74ywL2f%2FxTNgt4nWde6gEfY%2FU8IOXalvjWyfPD%2FR4dRC52U2czgcfKtbXThwazoQGQG1C8NgXjwK44csq8J23Q%2Bo&X-Amz-Signature=38c1826c70d0d69d7dd0f0b6a21c2872ea9fb625bf3c3613156c8ca6b7166de3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZVJD66%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7fgNFelxb1C4ixeDN9Y1HIIH5eKK5%2BHdQw8e18Jr40AiBkOlWDjM%2FR9toglXn9NLLJagrepGmygL8ZRL5QfOJsIyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVRaGad2U3JYBogjKtwDw3KDhvAwEMpD9ZYP3YXEZLZ2t%2FXiNjsdK6G0h3W3ZYkzwt3RqxFHxAO9iQYUOhLeptlRDekUyeIVmVOjm8UyxmCJpXsWQCJq%2F7vt3oa6iIePi7yUXa4dKjr3C6mKgGfowoXLvlW6FbghUlK8cyTvNceRkebKgFFzNNV2mM8F4dsFcP%2B5c5BgFOh9VpLNAmDKk%2BYHQ1GuCKPMf%2FAs0EuKz60DLgLJYu4ytxx0xMEcMOwOvy%2Bcuzy%2FFuA0xFP97Qi8mCjFOmFsF7gK4jcmTX1qkkythVu4r58yf%2BSXvjMR0XAocWmQsMh6kjkurU%2BqRKudS%2BNHjzz31lnL4GOcUM%2BSCo5PkKD%2FIZ1CrcudTE2EvEdqjV3sYhV7axfXcCGmqIBHrrk1i7UkkV%2BAVg%2Bs2weDYl3CAqAmON1gk1LXjIJRsPEgyRivQwefu5NJerBP%2F8ZADaUJF9fUVarMj7F6oPr2gurCx10Jv2KoK9p1%2F1aDAaviJhm02cjEb6lVT4iaaF79O%2BldPun9%2FR4AdVpGjU7a1JE2xBRnxrUyApLABVJkfbiYuAOj5CaqAE%2BDCo0M%2BnPIqUi8pydZTdOD5pk1k4L8kHfMxH%2B4Ivxuv55by2xYII2tGXcQr7Z7i0sPJRQwgoXpvAY6pgEBaZZmwEnx6UTylz1mquw9Fp1bsxYIRovgqtFtcelrwudyK%2BIN51X%2BWAkJH%2Ftf5QrDiHPi4LgQyoejx17TXrv012MGDJZMOvUI0zl3Nteb3RwQraHS43EoisiED%2FaVRD5742YW74ywL2f%2FxTNgt4nWde6gEfY%2FU8IOXalvjWyfPD%2FR4dRC52U2czgcfKtbXThwazoQGQG1C8NgXjwK44csq8J23Q%2Bo&X-Amz-Signature=701df4bc62147bc63a3077c44e6e7f860a02a14b1b9339e587590379d267e49b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZVJD66%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7fgNFelxb1C4ixeDN9Y1HIIH5eKK5%2BHdQw8e18Jr40AiBkOlWDjM%2FR9toglXn9NLLJagrepGmygL8ZRL5QfOJsIyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVRaGad2U3JYBogjKtwDw3KDhvAwEMpD9ZYP3YXEZLZ2t%2FXiNjsdK6G0h3W3ZYkzwt3RqxFHxAO9iQYUOhLeptlRDekUyeIVmVOjm8UyxmCJpXsWQCJq%2F7vt3oa6iIePi7yUXa4dKjr3C6mKgGfowoXLvlW6FbghUlK8cyTvNceRkebKgFFzNNV2mM8F4dsFcP%2B5c5BgFOh9VpLNAmDKk%2BYHQ1GuCKPMf%2FAs0EuKz60DLgLJYu4ytxx0xMEcMOwOvy%2Bcuzy%2FFuA0xFP97Qi8mCjFOmFsF7gK4jcmTX1qkkythVu4r58yf%2BSXvjMR0XAocWmQsMh6kjkurU%2BqRKudS%2BNHjzz31lnL4GOcUM%2BSCo5PkKD%2FIZ1CrcudTE2EvEdqjV3sYhV7axfXcCGmqIBHrrk1i7UkkV%2BAVg%2Bs2weDYl3CAqAmON1gk1LXjIJRsPEgyRivQwefu5NJerBP%2F8ZADaUJF9fUVarMj7F6oPr2gurCx10Jv2KoK9p1%2F1aDAaviJhm02cjEb6lVT4iaaF79O%2BldPun9%2FR4AdVpGjU7a1JE2xBRnxrUyApLABVJkfbiYuAOj5CaqAE%2BDCo0M%2BnPIqUi8pydZTdOD5pk1k4L8kHfMxH%2B4Ivxuv55by2xYII2tGXcQr7Z7i0sPJRQwgoXpvAY6pgEBaZZmwEnx6UTylz1mquw9Fp1bsxYIRovgqtFtcelrwudyK%2BIN51X%2BWAkJH%2Ftf5QrDiHPi4LgQyoejx17TXrv012MGDJZMOvUI0zl3Nteb3RwQraHS43EoisiED%2FaVRD5742YW74ywL2f%2FxTNgt4nWde6gEfY%2FU8IOXalvjWyfPD%2FR4dRC52U2czgcfKtbXThwazoQGQG1C8NgXjwK44csq8J23Q%2Bo&X-Amz-Signature=482b48f22c1f85e67631419be5de1319e58556694b7aaa0be80cc71346fa465e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
