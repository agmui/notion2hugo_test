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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQFHGE4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5FdEfB6KLXh%2FdKCp5Q76ngD9RkzLpthFCG8Ped12qegIhAN2F1rJ0TkRNZv7aZpwtWR0xujJ81RRcBQFnmcAgaHzMKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Nn7JIZ7aK9QAVlEq3AOM0SZQM%2FRj8ktVnb2Ln6hRhFWlnT%2BXMCGHUDvSQBpQK1H6XmV3ic50hUiJhuRwoV9%2Bf1vGoWycicrw7Co1f%2FFTFiJPNgHb3jI%2FKUtC0LmNlKJ0YxiC2cjTmgrl1SZg3rkSkp%2BWKurA%2FAP1wz8mH%2B97P0nDoQGLXSpzAtDm2UnAsNMuxyZvTQdoRf54V%2FN9%2B%2BP7YYFFx4kAM37D%2FNSk4J5NAwCW1oOWMXYA%2Fnddjgw2fPqs2TCRTxnJengiB1kSfEFJsiS1t9Hju07YsOSKOVdqfnOIMsguNufGjPph6gN4sxOzq%2Bg8r7rDYRrX%2FUEAzoMRTYpG2a6zdbT%2Bl2%2Fg7C1nuNhkxwJF5H0zfjWCI75WAwjT9JEWIhRJ4cQey%2BMh%2FF1cl2n1aH2zOn%2B95%2BgyQVaD0DSmoxGXeZhWHVTi3Rd%2F7qaO%2BG2dp0sCU%2BOA8ca642J2pRF4LFOotEZ2yhN4h4hTlEQrJjxCnuxoN%2FKC8Znhvd0daWDosutwbEaYj9ZnisH47Ixqh40%2BLJoGuX7kNqfbpLwq%2FJ2myUba8FFJDm9ied%2FC9BZS5093aTYplm7ATbsJfsgUWcyDWG0O2G0x1a0jhgcvXRGa2iYAv%2Fqovur7a0YhXMXMqFPmhpYKETCB1NnCBjqkATtC3twmxspp%2F%2F6lcfc3R%2Fl1Bgdntg%2BWhELDhWaoU9WB%2FjECLaQCp7ZeMFIaJbyCNMSPHymxp2vvVhf6rD%2Fo4B959ny0W7Zx9f0p%2BztGZrHa82xVAyDgY%2F1vc3dTx7UmqRvIhJPDTya3GsYGL%2BXhW1rZ6%2B5MmspSgnkvLWuNI5Ym8n4vRPVHrnX8XuaEJYzF2Uy464dkVXw%2FJE5jBZf3JYRjVnEi&X-Amz-Signature=bee7eafa02ca0351f8ba840218323ba60d1ac64e59b1947e2e235ff2dbc4d883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQFHGE4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5FdEfB6KLXh%2FdKCp5Q76ngD9RkzLpthFCG8Ped12qegIhAN2F1rJ0TkRNZv7aZpwtWR0xujJ81RRcBQFnmcAgaHzMKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Nn7JIZ7aK9QAVlEq3AOM0SZQM%2FRj8ktVnb2Ln6hRhFWlnT%2BXMCGHUDvSQBpQK1H6XmV3ic50hUiJhuRwoV9%2Bf1vGoWycicrw7Co1f%2FFTFiJPNgHb3jI%2FKUtC0LmNlKJ0YxiC2cjTmgrl1SZg3rkSkp%2BWKurA%2FAP1wz8mH%2B97P0nDoQGLXSpzAtDm2UnAsNMuxyZvTQdoRf54V%2FN9%2B%2BP7YYFFx4kAM37D%2FNSk4J5NAwCW1oOWMXYA%2Fnddjgw2fPqs2TCRTxnJengiB1kSfEFJsiS1t9Hju07YsOSKOVdqfnOIMsguNufGjPph6gN4sxOzq%2Bg8r7rDYRrX%2FUEAzoMRTYpG2a6zdbT%2Bl2%2Fg7C1nuNhkxwJF5H0zfjWCI75WAwjT9JEWIhRJ4cQey%2BMh%2FF1cl2n1aH2zOn%2B95%2BgyQVaD0DSmoxGXeZhWHVTi3Rd%2F7qaO%2BG2dp0sCU%2BOA8ca642J2pRF4LFOotEZ2yhN4h4hTlEQrJjxCnuxoN%2FKC8Znhvd0daWDosutwbEaYj9ZnisH47Ixqh40%2BLJoGuX7kNqfbpLwq%2FJ2myUba8FFJDm9ied%2FC9BZS5093aTYplm7ATbsJfsgUWcyDWG0O2G0x1a0jhgcvXRGa2iYAv%2Fqovur7a0YhXMXMqFPmhpYKETCB1NnCBjqkATtC3twmxspp%2F%2F6lcfc3R%2Fl1Bgdntg%2BWhELDhWaoU9WB%2FjECLaQCp7ZeMFIaJbyCNMSPHymxp2vvVhf6rD%2Fo4B959ny0W7Zx9f0p%2BztGZrHa82xVAyDgY%2F1vc3dTx7UmqRvIhJPDTya3GsYGL%2BXhW1rZ6%2B5MmspSgnkvLWuNI5Ym8n4vRPVHrnX8XuaEJYzF2Uy464dkVXw%2FJE5jBZf3JYRjVnEi&X-Amz-Signature=dfdc40e1a2d8ed1b2502fe019950320c1abd2b136e1797dee9510573d4ad75fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQFHGE4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5FdEfB6KLXh%2FdKCp5Q76ngD9RkzLpthFCG8Ped12qegIhAN2F1rJ0TkRNZv7aZpwtWR0xujJ81RRcBQFnmcAgaHzMKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Nn7JIZ7aK9QAVlEq3AOM0SZQM%2FRj8ktVnb2Ln6hRhFWlnT%2BXMCGHUDvSQBpQK1H6XmV3ic50hUiJhuRwoV9%2Bf1vGoWycicrw7Co1f%2FFTFiJPNgHb3jI%2FKUtC0LmNlKJ0YxiC2cjTmgrl1SZg3rkSkp%2BWKurA%2FAP1wz8mH%2B97P0nDoQGLXSpzAtDm2UnAsNMuxyZvTQdoRf54V%2FN9%2B%2BP7YYFFx4kAM37D%2FNSk4J5NAwCW1oOWMXYA%2Fnddjgw2fPqs2TCRTxnJengiB1kSfEFJsiS1t9Hju07YsOSKOVdqfnOIMsguNufGjPph6gN4sxOzq%2Bg8r7rDYRrX%2FUEAzoMRTYpG2a6zdbT%2Bl2%2Fg7C1nuNhkxwJF5H0zfjWCI75WAwjT9JEWIhRJ4cQey%2BMh%2FF1cl2n1aH2zOn%2B95%2BgyQVaD0DSmoxGXeZhWHVTi3Rd%2F7qaO%2BG2dp0sCU%2BOA8ca642J2pRF4LFOotEZ2yhN4h4hTlEQrJjxCnuxoN%2FKC8Znhvd0daWDosutwbEaYj9ZnisH47Ixqh40%2BLJoGuX7kNqfbpLwq%2FJ2myUba8FFJDm9ied%2FC9BZS5093aTYplm7ATbsJfsgUWcyDWG0O2G0x1a0jhgcvXRGa2iYAv%2Fqovur7a0YhXMXMqFPmhpYKETCB1NnCBjqkATtC3twmxspp%2F%2F6lcfc3R%2Fl1Bgdntg%2BWhELDhWaoU9WB%2FjECLaQCp7ZeMFIaJbyCNMSPHymxp2vvVhf6rD%2Fo4B959ny0W7Zx9f0p%2BztGZrHa82xVAyDgY%2F1vc3dTx7UmqRvIhJPDTya3GsYGL%2BXhW1rZ6%2B5MmspSgnkvLWuNI5Ym8n4vRPVHrnX8XuaEJYzF2Uy464dkVXw%2FJE5jBZf3JYRjVnEi&X-Amz-Signature=53a174018f7373ded9ee92a465c05ed0ae99de9dd213f8e71b45688bad8c5446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
