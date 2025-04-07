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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5KKNJK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdQZFps9R%2BKuOtna6awzPz1Ru6dcljpflqtr6IBZe6DAiA4Efju4EeYv7dNhKXVs4FkPU%2FdFlzRC5eV5cQQEj1ltCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5J%2FtBfDnh8R2dBbTKtwDGJc8%2FJKAmlVqcpL6Mp5CRxiXyZeyXxcMHoGIhSmx%2BE9ZAQ5UEP2bKeWsZBGRsWCA4Bij5yi8InCZTQbGHYlRo%2BFuwMdlXzXFf4AhxADwXqg1il%2BIL7kZ1%2BQR0WmgUJTGGlDRSdDzNKk5%2Bq%2B2R0kl6eSWffSWs2Qw4JmyTuHXhkG9XsikwVzvbZ0BNnFtVq61tsuE9eJ5dAuNBmM28Z2gWuOYvUTnlMWwp6oM5ZfD9eucb%2BxZ9DTJMRN3MpVq6a28iqgFCh1UDQ2UK9L9ABfgX55WbP4yQugLkLFxf3n0A9WgxvWx%2BC5bHQxGLqfPF2IIgnN7gQn2hYU1LaobomUKLa%2BpvtRBX8%2BnyGVDxnV4%2BCxyOIEtqJQbtfqJhuXf5NtAfYMa7y2kHIge3vceztia1PCnl%2FDyEU73BaHH81K%2B%2F3pQ0HRSnWAMMPSvN%2B%2F6KETRvu7c8oRft1PJfeN%2FZI97wUk4uiAHwLzrZWK7v1uqPLvmHfTLlWWRvGjDuBObMNm73KS8YYBRrr6XqN%2FXFe0eHRpk7EBHtepLCIeFlIpAWzGYliGsi90U2el1SSdGz4wwO%2Fnc6cXtLGMmB2ifY0sgrt5ehzZ4vdB4PNklOAdCkhQqxb3GNPZGCghvtIEwyrfPvwY6pgEfKaboS04rBn3LDNu1m3N98qzCcH21r7lBPgQy9s2YsYr0FfpbyKGQk5LU1VnO81RMLgHRTA%2FeCS0e%2BqOrUeOrm9uHhDHb2Y71rAToWo7AY3YxmS%2Fbd%2F%2FBut5KnmRCStgFnC8bntZpngYnFKwVaSsP0baBTqMMXW7pkqaICEWPD1B%2FwQGg4xKMJB6mF509jvQu6Bv4%2F1oTW5%2BsweeyWaKWdSUzikEJ&X-Amz-Signature=2623794666a620ec749cbbc731de9b0cdc5c186f824200eaaf608ebdd2f51f25&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5KKNJK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdQZFps9R%2BKuOtna6awzPz1Ru6dcljpflqtr6IBZe6DAiA4Efju4EeYv7dNhKXVs4FkPU%2FdFlzRC5eV5cQQEj1ltCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5J%2FtBfDnh8R2dBbTKtwDGJc8%2FJKAmlVqcpL6Mp5CRxiXyZeyXxcMHoGIhSmx%2BE9ZAQ5UEP2bKeWsZBGRsWCA4Bij5yi8InCZTQbGHYlRo%2BFuwMdlXzXFf4AhxADwXqg1il%2BIL7kZ1%2BQR0WmgUJTGGlDRSdDzNKk5%2Bq%2B2R0kl6eSWffSWs2Qw4JmyTuHXhkG9XsikwVzvbZ0BNnFtVq61tsuE9eJ5dAuNBmM28Z2gWuOYvUTnlMWwp6oM5ZfD9eucb%2BxZ9DTJMRN3MpVq6a28iqgFCh1UDQ2UK9L9ABfgX55WbP4yQugLkLFxf3n0A9WgxvWx%2BC5bHQxGLqfPF2IIgnN7gQn2hYU1LaobomUKLa%2BpvtRBX8%2BnyGVDxnV4%2BCxyOIEtqJQbtfqJhuXf5NtAfYMa7y2kHIge3vceztia1PCnl%2FDyEU73BaHH81K%2B%2F3pQ0HRSnWAMMPSvN%2B%2F6KETRvu7c8oRft1PJfeN%2FZI97wUk4uiAHwLzrZWK7v1uqPLvmHfTLlWWRvGjDuBObMNm73KS8YYBRrr6XqN%2FXFe0eHRpk7EBHtepLCIeFlIpAWzGYliGsi90U2el1SSdGz4wwO%2Fnc6cXtLGMmB2ifY0sgrt5ehzZ4vdB4PNklOAdCkhQqxb3GNPZGCghvtIEwyrfPvwY6pgEfKaboS04rBn3LDNu1m3N98qzCcH21r7lBPgQy9s2YsYr0FfpbyKGQk5LU1VnO81RMLgHRTA%2FeCS0e%2BqOrUeOrm9uHhDHb2Y71rAToWo7AY3YxmS%2Fbd%2F%2FBut5KnmRCStgFnC8bntZpngYnFKwVaSsP0baBTqMMXW7pkqaICEWPD1B%2FwQGg4xKMJB6mF509jvQu6Bv4%2F1oTW5%2BsweeyWaKWdSUzikEJ&X-Amz-Signature=56267421ae7b8ac76b3d2bee8613577cc6f2a031176f5fb23fd0c3e9787878a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5KKNJK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdQZFps9R%2BKuOtna6awzPz1Ru6dcljpflqtr6IBZe6DAiA4Efju4EeYv7dNhKXVs4FkPU%2FdFlzRC5eV5cQQEj1ltCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5J%2FtBfDnh8R2dBbTKtwDGJc8%2FJKAmlVqcpL6Mp5CRxiXyZeyXxcMHoGIhSmx%2BE9ZAQ5UEP2bKeWsZBGRsWCA4Bij5yi8InCZTQbGHYlRo%2BFuwMdlXzXFf4AhxADwXqg1il%2BIL7kZ1%2BQR0WmgUJTGGlDRSdDzNKk5%2Bq%2B2R0kl6eSWffSWs2Qw4JmyTuHXhkG9XsikwVzvbZ0BNnFtVq61tsuE9eJ5dAuNBmM28Z2gWuOYvUTnlMWwp6oM5ZfD9eucb%2BxZ9DTJMRN3MpVq6a28iqgFCh1UDQ2UK9L9ABfgX55WbP4yQugLkLFxf3n0A9WgxvWx%2BC5bHQxGLqfPF2IIgnN7gQn2hYU1LaobomUKLa%2BpvtRBX8%2BnyGVDxnV4%2BCxyOIEtqJQbtfqJhuXf5NtAfYMa7y2kHIge3vceztia1PCnl%2FDyEU73BaHH81K%2B%2F3pQ0HRSnWAMMPSvN%2B%2F6KETRvu7c8oRft1PJfeN%2FZI97wUk4uiAHwLzrZWK7v1uqPLvmHfTLlWWRvGjDuBObMNm73KS8YYBRrr6XqN%2FXFe0eHRpk7EBHtepLCIeFlIpAWzGYliGsi90U2el1SSdGz4wwO%2Fnc6cXtLGMmB2ifY0sgrt5ehzZ4vdB4PNklOAdCkhQqxb3GNPZGCghvtIEwyrfPvwY6pgEfKaboS04rBn3LDNu1m3N98qzCcH21r7lBPgQy9s2YsYr0FfpbyKGQk5LU1VnO81RMLgHRTA%2FeCS0e%2BqOrUeOrm9uHhDHb2Y71rAToWo7AY3YxmS%2Fbd%2F%2FBut5KnmRCStgFnC8bntZpngYnFKwVaSsP0baBTqMMXW7pkqaICEWPD1B%2FwQGg4xKMJB6mF509jvQu6Bv4%2F1oTW5%2BsweeyWaKWdSUzikEJ&X-Amz-Signature=15c49ddbd459246a0e81e039b965870cf5bba8d26e5356871447f8eeae7d0f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
