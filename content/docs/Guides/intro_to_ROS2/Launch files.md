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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6XEVYC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGv1urrL17FvXADQTEoowY3Yr18dOIphdoWvzud%2F0MgIhAIGLmiYlKhJsgeEDQoJPA2SucZ%2FXkkM9fJO%2Bt2xtUNFMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy69qvEIBcz5WlF8kYq3AOWgMzJ1iLxFJ6WBRueq2J03C9lu2wCNIsZs3e4UnUz%2BOG%2F7wB7mazLg95MmgGegl14E%2BTyPTQF1S939I1NzzHPjoXLuXiuWsGfhg84aXxKeWs6pMI%2FcEcysyTNU%2FAUicD%2BBe2Onajo4%2FJRGL5rQ5cIbUoVpwsvceKmZHkeWEJVuFBLzRv9KpjkOwGEGAKyZQv3WBz6MDlcux9DvGT1wbmn31a6vj2oHou0mbYdiX%2BZk4cF5jO1YPHqqNxsmhuHwMGwllIBD5tTOf1tO3O9KBCuJdHw52HAdmloaE%2F2gM4bYaLB6TCBp3CFWfl0XhA%2BmnL4M%2BLSp%2Fx94VY%2BMitu7op7XCN7GPYymBIkSSbyfAkjkKtnVAN4s7tANjMDslDvSd0yRhY2qLnwcsUl4BGwc4i7%2BOBf1%2FilGEgojFq5Wo7%2Bz2QdCRey8%2F61KO7RNvfp4%2FYIhnnYBD6Tt1CYEcw4cKeVYUO4Q%2BkELkVUnpCueuaN3Cwbn6%2Fhe8ZPfR0oCakRV%2FVnkhcb4Ok1R89iMHwPdPtkoHmTQrq8P3Q3xGpB4opK6gZA8O8eSvmhAJ0DD5sHRQ90tli2ICnMYowLyYZW5Zs1%2BjdparShp2PeMjiDHSeNgSAVhtyScGO0H9M0jDD3tdHCBjqkAW486oXZTC8elqzxxDjzN8TLr%2Fon9svAze9O5ef0084nOhjXLtHT6uh%2FEds9L%2B3niNMI0P%2F45z4ypk%2BrEQl6860Xq8utkar%2BnotM4VTjC%2BCqkHGFLCfYA1MtTlXC5GpIPjTqI4XZwk%2FSYxoP6iaUu5tSful5hk3T2BUvcPv3kiemNi5V10%2Ff%2B8t%2BYMQtz14z1QtuB1dCJte9BvGHrRHsbXYcudxO&X-Amz-Signature=99addfbb8afddbf628eb2465f125c4dfa478331d03d9c046542c6ff2492a455d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6XEVYC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGv1urrL17FvXADQTEoowY3Yr18dOIphdoWvzud%2F0MgIhAIGLmiYlKhJsgeEDQoJPA2SucZ%2FXkkM9fJO%2Bt2xtUNFMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy69qvEIBcz5WlF8kYq3AOWgMzJ1iLxFJ6WBRueq2J03C9lu2wCNIsZs3e4UnUz%2BOG%2F7wB7mazLg95MmgGegl14E%2BTyPTQF1S939I1NzzHPjoXLuXiuWsGfhg84aXxKeWs6pMI%2FcEcysyTNU%2FAUicD%2BBe2Onajo4%2FJRGL5rQ5cIbUoVpwsvceKmZHkeWEJVuFBLzRv9KpjkOwGEGAKyZQv3WBz6MDlcux9DvGT1wbmn31a6vj2oHou0mbYdiX%2BZk4cF5jO1YPHqqNxsmhuHwMGwllIBD5tTOf1tO3O9KBCuJdHw52HAdmloaE%2F2gM4bYaLB6TCBp3CFWfl0XhA%2BmnL4M%2BLSp%2Fx94VY%2BMitu7op7XCN7GPYymBIkSSbyfAkjkKtnVAN4s7tANjMDslDvSd0yRhY2qLnwcsUl4BGwc4i7%2BOBf1%2FilGEgojFq5Wo7%2Bz2QdCRey8%2F61KO7RNvfp4%2FYIhnnYBD6Tt1CYEcw4cKeVYUO4Q%2BkELkVUnpCueuaN3Cwbn6%2Fhe8ZPfR0oCakRV%2FVnkhcb4Ok1R89iMHwPdPtkoHmTQrq8P3Q3xGpB4opK6gZA8O8eSvmhAJ0DD5sHRQ90tli2ICnMYowLyYZW5Zs1%2BjdparShp2PeMjiDHSeNgSAVhtyScGO0H9M0jDD3tdHCBjqkAW486oXZTC8elqzxxDjzN8TLr%2Fon9svAze9O5ef0084nOhjXLtHT6uh%2FEds9L%2B3niNMI0P%2F45z4ypk%2BrEQl6860Xq8utkar%2BnotM4VTjC%2BCqkHGFLCfYA1MtTlXC5GpIPjTqI4XZwk%2FSYxoP6iaUu5tSful5hk3T2BUvcPv3kiemNi5V10%2Ff%2B8t%2BYMQtz14z1QtuB1dCJte9BvGHrRHsbXYcudxO&X-Amz-Signature=d10c9d9019f9f00d7cffee9f451faf2bb36c442dc87b8bdb2e3cab6e77d142d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6XEVYC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGv1urrL17FvXADQTEoowY3Yr18dOIphdoWvzud%2F0MgIhAIGLmiYlKhJsgeEDQoJPA2SucZ%2FXkkM9fJO%2Bt2xtUNFMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy69qvEIBcz5WlF8kYq3AOWgMzJ1iLxFJ6WBRueq2J03C9lu2wCNIsZs3e4UnUz%2BOG%2F7wB7mazLg95MmgGegl14E%2BTyPTQF1S939I1NzzHPjoXLuXiuWsGfhg84aXxKeWs6pMI%2FcEcysyTNU%2FAUicD%2BBe2Onajo4%2FJRGL5rQ5cIbUoVpwsvceKmZHkeWEJVuFBLzRv9KpjkOwGEGAKyZQv3WBz6MDlcux9DvGT1wbmn31a6vj2oHou0mbYdiX%2BZk4cF5jO1YPHqqNxsmhuHwMGwllIBD5tTOf1tO3O9KBCuJdHw52HAdmloaE%2F2gM4bYaLB6TCBp3CFWfl0XhA%2BmnL4M%2BLSp%2Fx94VY%2BMitu7op7XCN7GPYymBIkSSbyfAkjkKtnVAN4s7tANjMDslDvSd0yRhY2qLnwcsUl4BGwc4i7%2BOBf1%2FilGEgojFq5Wo7%2Bz2QdCRey8%2F61KO7RNvfp4%2FYIhnnYBD6Tt1CYEcw4cKeVYUO4Q%2BkELkVUnpCueuaN3Cwbn6%2Fhe8ZPfR0oCakRV%2FVnkhcb4Ok1R89iMHwPdPtkoHmTQrq8P3Q3xGpB4opK6gZA8O8eSvmhAJ0DD5sHRQ90tli2ICnMYowLyYZW5Zs1%2BjdparShp2PeMjiDHSeNgSAVhtyScGO0H9M0jDD3tdHCBjqkAW486oXZTC8elqzxxDjzN8TLr%2Fon9svAze9O5ef0084nOhjXLtHT6uh%2FEds9L%2B3niNMI0P%2F45z4ypk%2BrEQl6860Xq8utkar%2BnotM4VTjC%2BCqkHGFLCfYA1MtTlXC5GpIPjTqI4XZwk%2FSYxoP6iaUu5tSful5hk3T2BUvcPv3kiemNi5V10%2Ff%2B8t%2BYMQtz14z1QtuB1dCJte9BvGHrRHsbXYcudxO&X-Amz-Signature=6622eafa20c7dee902c17e12bb781e267e60eb7244c826457cef345140443a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
