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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ3JSE4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL0zCbZUchr6N%2BAHV06u%2FvZ%2FHC51UJBwC8onkDramFqAiA3b9K8fINORdgPj%2FCteQX2BZLePbMIoHi65Yy3g2bZqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXvVgo5VSR8TKDXvKtwDy7AhWvXBuMLnb51eUZsSeIGHFBr%2BRn67saEtSgfuU%2FFW%2BDGzIBywo3NvFMFIH2xysBsxJXYPFxo3Uc%2F9W%2Fqw98SRCdO2weCDkdNDybNJMVPBHR80XU0%2BeaefLKnJxzn4dmiWcQgNqk8FbpmdQGvW5qA6eSTZeRxHebxErNSiIeC%2BHYJiVBtcw1UfH2GDR0pvV%2FXxMWxfLTmAZ%2FKP3z1cWxGnGbP7xVQk1fAz43KOp6E20opNn%2BX1fbbcXWTU77OoZfMIK8Gjr3A2wpQApWaDSk3i9nlMGrvXi4w6LqCC9TuLlirMPAknUEybqqUF%2BmGHiI8AN2IaAavPgzWa8clJ6Eys6HtCA0371iLHdsoUkAw4beyPMmuXPchbZK36zKWna5CF5bvonw9XTdAeSVWIH6i6XcFo3YA9nhoTJkHyif2%2FuSxwGFUwz%2BAmyZfPcYO%2FMTGqRDiPKif3NgKNo2%2BpZFsKpOpDr%2FIfjzdwZI8bc%2B7othoKsjtnw0TG6djlCR2a3pmBDry9HAzFL0oy0t0MO7Cbq9TCzGOG1GxpMAtBgqr0cm83umkXafyse9Zqwg4m0jb4Ir3InAPExRFHTzXR4HNxSPNczaXpNH8XVJtf2txqBJz2ns%2F9JekwDxcwwdbzwwY6pgHNHJlXgbR488EVWLMzmJ%2FN9wjYwuopo4vna6wd3Awje9Koa3WNIr4EbAgcKQiWY2qFimLCLNLFiHTAKRjya2NX2yLyK7u7yde8n6IDuM6bN0kBhMu0xzQ44GUvGExqlSMLsvI5WszQ5annamCMB8rI%2B5EoIU44Qaivq1YLuq2Y11RbPkypx1CKlDH8AQpt7%2BwgFkYhrKGd5eCW3X254CXRB3Z8zPK3&X-Amz-Signature=d405ad6ba82fcfb30dfcd9591c72f16c451dfcc94fa1a24ea824582eeeecb9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ3JSE4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL0zCbZUchr6N%2BAHV06u%2FvZ%2FHC51UJBwC8onkDramFqAiA3b9K8fINORdgPj%2FCteQX2BZLePbMIoHi65Yy3g2bZqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXvVgo5VSR8TKDXvKtwDy7AhWvXBuMLnb51eUZsSeIGHFBr%2BRn67saEtSgfuU%2FFW%2BDGzIBywo3NvFMFIH2xysBsxJXYPFxo3Uc%2F9W%2Fqw98SRCdO2weCDkdNDybNJMVPBHR80XU0%2BeaefLKnJxzn4dmiWcQgNqk8FbpmdQGvW5qA6eSTZeRxHebxErNSiIeC%2BHYJiVBtcw1UfH2GDR0pvV%2FXxMWxfLTmAZ%2FKP3z1cWxGnGbP7xVQk1fAz43KOp6E20opNn%2BX1fbbcXWTU77OoZfMIK8Gjr3A2wpQApWaDSk3i9nlMGrvXi4w6LqCC9TuLlirMPAknUEybqqUF%2BmGHiI8AN2IaAavPgzWa8clJ6Eys6HtCA0371iLHdsoUkAw4beyPMmuXPchbZK36zKWna5CF5bvonw9XTdAeSVWIH6i6XcFo3YA9nhoTJkHyif2%2FuSxwGFUwz%2BAmyZfPcYO%2FMTGqRDiPKif3NgKNo2%2BpZFsKpOpDr%2FIfjzdwZI8bc%2B7othoKsjtnw0TG6djlCR2a3pmBDry9HAzFL0oy0t0MO7Cbq9TCzGOG1GxpMAtBgqr0cm83umkXafyse9Zqwg4m0jb4Ir3InAPExRFHTzXR4HNxSPNczaXpNH8XVJtf2txqBJz2ns%2F9JekwDxcwwdbzwwY6pgHNHJlXgbR488EVWLMzmJ%2FN9wjYwuopo4vna6wd3Awje9Koa3WNIr4EbAgcKQiWY2qFimLCLNLFiHTAKRjya2NX2yLyK7u7yde8n6IDuM6bN0kBhMu0xzQ44GUvGExqlSMLsvI5WszQ5annamCMB8rI%2B5EoIU44Qaivq1YLuq2Y11RbPkypx1CKlDH8AQpt7%2BwgFkYhrKGd5eCW3X254CXRB3Z8zPK3&X-Amz-Signature=f84bf3d41a2366fd5ceae706b3bc404cc469840c388c3cf0d190c345f18f4ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ3JSE4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL0zCbZUchr6N%2BAHV06u%2FvZ%2FHC51UJBwC8onkDramFqAiA3b9K8fINORdgPj%2FCteQX2BZLePbMIoHi65Yy3g2bZqiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXvVgo5VSR8TKDXvKtwDy7AhWvXBuMLnb51eUZsSeIGHFBr%2BRn67saEtSgfuU%2FFW%2BDGzIBywo3NvFMFIH2xysBsxJXYPFxo3Uc%2F9W%2Fqw98SRCdO2weCDkdNDybNJMVPBHR80XU0%2BeaefLKnJxzn4dmiWcQgNqk8FbpmdQGvW5qA6eSTZeRxHebxErNSiIeC%2BHYJiVBtcw1UfH2GDR0pvV%2FXxMWxfLTmAZ%2FKP3z1cWxGnGbP7xVQk1fAz43KOp6E20opNn%2BX1fbbcXWTU77OoZfMIK8Gjr3A2wpQApWaDSk3i9nlMGrvXi4w6LqCC9TuLlirMPAknUEybqqUF%2BmGHiI8AN2IaAavPgzWa8clJ6Eys6HtCA0371iLHdsoUkAw4beyPMmuXPchbZK36zKWna5CF5bvonw9XTdAeSVWIH6i6XcFo3YA9nhoTJkHyif2%2FuSxwGFUwz%2BAmyZfPcYO%2FMTGqRDiPKif3NgKNo2%2BpZFsKpOpDr%2FIfjzdwZI8bc%2B7othoKsjtnw0TG6djlCR2a3pmBDry9HAzFL0oy0t0MO7Cbq9TCzGOG1GxpMAtBgqr0cm83umkXafyse9Zqwg4m0jb4Ir3InAPExRFHTzXR4HNxSPNczaXpNH8XVJtf2txqBJz2ns%2F9JekwDxcwwdbzwwY6pgHNHJlXgbR488EVWLMzmJ%2FN9wjYwuopo4vna6wd3Awje9Koa3WNIr4EbAgcKQiWY2qFimLCLNLFiHTAKRjya2NX2yLyK7u7yde8n6IDuM6bN0kBhMu0xzQ44GUvGExqlSMLsvI5WszQ5annamCMB8rI%2B5EoIU44Qaivq1YLuq2Y11RbPkypx1CKlDH8AQpt7%2BwgFkYhrKGd5eCW3X254CXRB3Z8zPK3&X-Amz-Signature=b828a5777abe33e18b8957d4414b56ea83027791977feba8bf10e33e1ade7135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
