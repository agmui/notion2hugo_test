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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNKKNL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBKL4M3Lh%2FuDs%2Fj5LLPHyA1ZN3goHesyxAL7CZTuHb5iAiEAmvmk5m6Wi3gxTBfr3GPGH4X8cGU7W%2FB2X%2Fk8NbsUU9IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODWZaHOX1YjlPbDYircA2VQad523BNZzHakhRBK9%2BLW01xnrQv%2FsI9%2BIvxDghjuZPkActLARlhwAr9wthPS5q%2Bu1Uf4dizeNSgHhtsQVZ5v96Qi7ljfNkqhHcPwFA0xHKvWKpkAsSCAwAqL7tGZI%2BVRElOCA6j9LS0WirhBbzyzMqnH0uaKesIPAc%2Ba%2FXQv9xa0I5a9y019uWHfyIRsNSPWnSGdrm5JNypcdCji6s0oaVqKNH%2F46r7rI0OjuxPCsgoBH5CKdTuAkuhXW9Fvq3nhDlNPYhIRfp%2Fg0LrPLYieVigIX3FtkA%2FnakhZ3Qc6elY0EQHnOpQGL7lCgK%2FQWygbVpky7rAEmQl7QelqYH56et0q%2FDwK%2FQlI2vNIqOLgCKnN%2Bf1Pn0w%2B1WIsphY3E4Ao86OeGqWOJK3POJnpFG5i6uQB1uELMKetO0owdX4usS1k4o9%2B8FVYV11IdtUrYxIc4P7Jmpj9Ja%2FzUznV46AUbcxwaK1Tx0DFi8yBjmre%2BkUi6xI1gKxa2%2FAe7l%2Fn9fF2igA1Mi6WusN7PouXV0ZXH4K4%2FKoAY7o9d1myTK0h%2BWE1whj1cO9YuqiSy5cDS12gB56%2BqZkCy2J%2FY%2FXFu47BHkqoQKNANrZLo%2BPMy1BMgsw%2BDRq9zEzSge5dMJadycAGOqUBlsrqc2z0kkBGqMGI6OoLxi8S7YMVPJuUhnnWSf3h0%2F1xNUyjj5vgph0kvbg6H%2Bn7X%2B5IRNOyuNJtth0UhPe06bHZQkG55EaR7bInNlYZQ59%2FqBv3nJBK8hNTCKnhLlg%2BC17DCiN8ivd8nE%2B74RFrupeItLSpy6euxyodjC2hg8RBEm64EIJiQrbbj5grYzaWqqTWstH0jUyrL7OdshdrXeDd7%2FYj&X-Amz-Signature=c8bcba1caa4a808dc1d024b3b797626778b55a8081849af732868ec7723e5fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNKKNL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBKL4M3Lh%2FuDs%2Fj5LLPHyA1ZN3goHesyxAL7CZTuHb5iAiEAmvmk5m6Wi3gxTBfr3GPGH4X8cGU7W%2FB2X%2Fk8NbsUU9IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODWZaHOX1YjlPbDYircA2VQad523BNZzHakhRBK9%2BLW01xnrQv%2FsI9%2BIvxDghjuZPkActLARlhwAr9wthPS5q%2Bu1Uf4dizeNSgHhtsQVZ5v96Qi7ljfNkqhHcPwFA0xHKvWKpkAsSCAwAqL7tGZI%2BVRElOCA6j9LS0WirhBbzyzMqnH0uaKesIPAc%2Ba%2FXQv9xa0I5a9y019uWHfyIRsNSPWnSGdrm5JNypcdCji6s0oaVqKNH%2F46r7rI0OjuxPCsgoBH5CKdTuAkuhXW9Fvq3nhDlNPYhIRfp%2Fg0LrPLYieVigIX3FtkA%2FnakhZ3Qc6elY0EQHnOpQGL7lCgK%2FQWygbVpky7rAEmQl7QelqYH56et0q%2FDwK%2FQlI2vNIqOLgCKnN%2Bf1Pn0w%2B1WIsphY3E4Ao86OeGqWOJK3POJnpFG5i6uQB1uELMKetO0owdX4usS1k4o9%2B8FVYV11IdtUrYxIc4P7Jmpj9Ja%2FzUznV46AUbcxwaK1Tx0DFi8yBjmre%2BkUi6xI1gKxa2%2FAe7l%2Fn9fF2igA1Mi6WusN7PouXV0ZXH4K4%2FKoAY7o9d1myTK0h%2BWE1whj1cO9YuqiSy5cDS12gB56%2BqZkCy2J%2FY%2FXFu47BHkqoQKNANrZLo%2BPMy1BMgsw%2BDRq9zEzSge5dMJadycAGOqUBlsrqc2z0kkBGqMGI6OoLxi8S7YMVPJuUhnnWSf3h0%2F1xNUyjj5vgph0kvbg6H%2Bn7X%2B5IRNOyuNJtth0UhPe06bHZQkG55EaR7bInNlYZQ59%2FqBv3nJBK8hNTCKnhLlg%2BC17DCiN8ivd8nE%2B74RFrupeItLSpy6euxyodjC2hg8RBEm64EIJiQrbbj5grYzaWqqTWstH0jUyrL7OdshdrXeDd7%2FYj&X-Amz-Signature=a59bf7f4028803d31aa63e5562a2ea9eb7cd7ece6f8aabbc0597effc23a6506f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KNKKNL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBKL4M3Lh%2FuDs%2Fj5LLPHyA1ZN3goHesyxAL7CZTuHb5iAiEAmvmk5m6Wi3gxTBfr3GPGH4X8cGU7W%2FB2X%2Fk8NbsUU9IqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODWZaHOX1YjlPbDYircA2VQad523BNZzHakhRBK9%2BLW01xnrQv%2FsI9%2BIvxDghjuZPkActLARlhwAr9wthPS5q%2Bu1Uf4dizeNSgHhtsQVZ5v96Qi7ljfNkqhHcPwFA0xHKvWKpkAsSCAwAqL7tGZI%2BVRElOCA6j9LS0WirhBbzyzMqnH0uaKesIPAc%2Ba%2FXQv9xa0I5a9y019uWHfyIRsNSPWnSGdrm5JNypcdCji6s0oaVqKNH%2F46r7rI0OjuxPCsgoBH5CKdTuAkuhXW9Fvq3nhDlNPYhIRfp%2Fg0LrPLYieVigIX3FtkA%2FnakhZ3Qc6elY0EQHnOpQGL7lCgK%2FQWygbVpky7rAEmQl7QelqYH56et0q%2FDwK%2FQlI2vNIqOLgCKnN%2Bf1Pn0w%2B1WIsphY3E4Ao86OeGqWOJK3POJnpFG5i6uQB1uELMKetO0owdX4usS1k4o9%2B8FVYV11IdtUrYxIc4P7Jmpj9Ja%2FzUznV46AUbcxwaK1Tx0DFi8yBjmre%2BkUi6xI1gKxa2%2FAe7l%2Fn9fF2igA1Mi6WusN7PouXV0ZXH4K4%2FKoAY7o9d1myTK0h%2BWE1whj1cO9YuqiSy5cDS12gB56%2BqZkCy2J%2FY%2FXFu47BHkqoQKNANrZLo%2BPMy1BMgsw%2BDRq9zEzSge5dMJadycAGOqUBlsrqc2z0kkBGqMGI6OoLxi8S7YMVPJuUhnnWSf3h0%2F1xNUyjj5vgph0kvbg6H%2Bn7X%2B5IRNOyuNJtth0UhPe06bHZQkG55EaR7bInNlYZQ59%2FqBv3nJBK8hNTCKnhLlg%2BC17DCiN8ivd8nE%2B74RFrupeItLSpy6euxyodjC2hg8RBEm64EIJiQrbbj5grYzaWqqTWstH0jUyrL7OdshdrXeDd7%2FYj&X-Amz-Signature=9ca5fa3ecc4d17f96e68f3474dc1a6de4435d8ae9f8817be9f2aa9b411afd1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
