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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXIBXLL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDtZ7yzpnv3rTKa1lFXveXSRabJAS68G8PyGJOSC9JDxwIgDVmyuWEYy7FZpULZvLdf7nT3JOKaVKco7tU3VGHlwCwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7FXOREtqtVWG3EtCrcAxhmkR263g1MQ3fRhqHn03mRlUwQXiNcq1m1PRPBD8vQ7WtlW7Y62flyoC2UiPOTRVJJlIbYVf2R1A8jzux%2B3ChpfP8KFL9jWhD8vHvYr0X0JjpIZXLK3ujjA3UQBc3xUQik2FzgvD3qwZ%2FneDBD%2FZeZo83FHclEoknr8H%2FZTwWGHDuGbYzcEXMV8shq44W5qUM4WELV3ND28%2BZbjWmb0h1wiImz6Vwwax%2FEQ7Op6G2mOpdMRWxVQfuRkQq6%2FpzaU51uFOuXWMnpSWToNEIPv5ai8Mc3%2FfjsdOB7tSuo1nQGp7czqUEqpaoRnwkSQAMzewZigRe6wM9VzasNJLSXGP8WIFJNDro5SEDYjr4QXwkLGcSCVGAqfZ4nNRJOjqoqw6YD%2FzaLyzd7qNmApWl%2F3y0a851Oa5NhL5SsQqs2UF6ZH2mYutXwaYPtLnyNe8rAXtyY2in2pJ6ppucH%2Byj4jjxvb6MkxQ8ye1bMIboG7rkKKZTy40PmqDMwJUaVMFbj%2FEk5Luoh40roEhbxD4HUef44HnshdPoXcGOQo3rdSv0akkaXL8Zp97rwHpi3jJkxbNypAEZY0G5VydWq0mTQx%2BvG03dIK0nPbEt3RX4HVBiNyEcb2PGtoHe3y%2B%2B%2FMJ2%2B7sEGOqUBUdmWjaKQoPqVGPeIuv7xwzQuGntHCw0Lk84uziW5zwG36s1RJleFAp3qIA%2FOgX9QRzbF%2FWIw8mL5HQYY4TQQGb36FcAnEvYPokn9%2BtWNKvhVKnk54tdfrOJC49yk4V8H3pxIVZvrEySn2xGM6FnMPCj0x8tOOCsP3mkwaJ6SyqI87sNsKkQXMlFmD38Zy7eUlmF98IT4oXmT0ILquXP2a8HHio8z&X-Amz-Signature=82557f56b79b6d3e8c65974e5b8f20d88e55194a386f9dc5abbc585d0d3b16f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXIBXLL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDtZ7yzpnv3rTKa1lFXveXSRabJAS68G8PyGJOSC9JDxwIgDVmyuWEYy7FZpULZvLdf7nT3JOKaVKco7tU3VGHlwCwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7FXOREtqtVWG3EtCrcAxhmkR263g1MQ3fRhqHn03mRlUwQXiNcq1m1PRPBD8vQ7WtlW7Y62flyoC2UiPOTRVJJlIbYVf2R1A8jzux%2B3ChpfP8KFL9jWhD8vHvYr0X0JjpIZXLK3ujjA3UQBc3xUQik2FzgvD3qwZ%2FneDBD%2FZeZo83FHclEoknr8H%2FZTwWGHDuGbYzcEXMV8shq44W5qUM4WELV3ND28%2BZbjWmb0h1wiImz6Vwwax%2FEQ7Op6G2mOpdMRWxVQfuRkQq6%2FpzaU51uFOuXWMnpSWToNEIPv5ai8Mc3%2FfjsdOB7tSuo1nQGp7czqUEqpaoRnwkSQAMzewZigRe6wM9VzasNJLSXGP8WIFJNDro5SEDYjr4QXwkLGcSCVGAqfZ4nNRJOjqoqw6YD%2FzaLyzd7qNmApWl%2F3y0a851Oa5NhL5SsQqs2UF6ZH2mYutXwaYPtLnyNe8rAXtyY2in2pJ6ppucH%2Byj4jjxvb6MkxQ8ye1bMIboG7rkKKZTy40PmqDMwJUaVMFbj%2FEk5Luoh40roEhbxD4HUef44HnshdPoXcGOQo3rdSv0akkaXL8Zp97rwHpi3jJkxbNypAEZY0G5VydWq0mTQx%2BvG03dIK0nPbEt3RX4HVBiNyEcb2PGtoHe3y%2B%2B%2FMJ2%2B7sEGOqUBUdmWjaKQoPqVGPeIuv7xwzQuGntHCw0Lk84uziW5zwG36s1RJleFAp3qIA%2FOgX9QRzbF%2FWIw8mL5HQYY4TQQGb36FcAnEvYPokn9%2BtWNKvhVKnk54tdfrOJC49yk4V8H3pxIVZvrEySn2xGM6FnMPCj0x8tOOCsP3mkwaJ6SyqI87sNsKkQXMlFmD38Zy7eUlmF98IT4oXmT0ILquXP2a8HHio8z&X-Amz-Signature=9c0bd871fc1d717c4bc50744c5b9d8fca7b248d27b574565f8cb8d316174c229&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXIBXLL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDtZ7yzpnv3rTKa1lFXveXSRabJAS68G8PyGJOSC9JDxwIgDVmyuWEYy7FZpULZvLdf7nT3JOKaVKco7tU3VGHlwCwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7FXOREtqtVWG3EtCrcAxhmkR263g1MQ3fRhqHn03mRlUwQXiNcq1m1PRPBD8vQ7WtlW7Y62flyoC2UiPOTRVJJlIbYVf2R1A8jzux%2B3ChpfP8KFL9jWhD8vHvYr0X0JjpIZXLK3ujjA3UQBc3xUQik2FzgvD3qwZ%2FneDBD%2FZeZo83FHclEoknr8H%2FZTwWGHDuGbYzcEXMV8shq44W5qUM4WELV3ND28%2BZbjWmb0h1wiImz6Vwwax%2FEQ7Op6G2mOpdMRWxVQfuRkQq6%2FpzaU51uFOuXWMnpSWToNEIPv5ai8Mc3%2FfjsdOB7tSuo1nQGp7czqUEqpaoRnwkSQAMzewZigRe6wM9VzasNJLSXGP8WIFJNDro5SEDYjr4QXwkLGcSCVGAqfZ4nNRJOjqoqw6YD%2FzaLyzd7qNmApWl%2F3y0a851Oa5NhL5SsQqs2UF6ZH2mYutXwaYPtLnyNe8rAXtyY2in2pJ6ppucH%2Byj4jjxvb6MkxQ8ye1bMIboG7rkKKZTy40PmqDMwJUaVMFbj%2FEk5Luoh40roEhbxD4HUef44HnshdPoXcGOQo3rdSv0akkaXL8Zp97rwHpi3jJkxbNypAEZY0G5VydWq0mTQx%2BvG03dIK0nPbEt3RX4HVBiNyEcb2PGtoHe3y%2B%2B%2FMJ2%2B7sEGOqUBUdmWjaKQoPqVGPeIuv7xwzQuGntHCw0Lk84uziW5zwG36s1RJleFAp3qIA%2FOgX9QRzbF%2FWIw8mL5HQYY4TQQGb36FcAnEvYPokn9%2BtWNKvhVKnk54tdfrOJC49yk4V8H3pxIVZvrEySn2xGM6FnMPCj0x8tOOCsP3mkwaJ6SyqI87sNsKkQXMlFmD38Zy7eUlmF98IT4oXmT0ILquXP2a8HHio8z&X-Amz-Signature=b541ba3f2297446399122c054e69ae42666df081e2bf17bfb7b2261408fe209a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
