---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=6dc9cde9c4a2dca535462c18e4e75e1fb8d42a2a3218c9c5a750c779c31163a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=f2a7b2ce158512bef46173e98d128ca14231b1cebee7925a2c94506323ab1d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPVUE2P%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDwNjEyFqFiXi9DQW9E18F4RkqeUCbpuRVKI4MN6AyfbgIhAMRFqDG8IpL%2F%2BmNzZ1D9vK7AN9%2FxT%2F1yjAETlx4HztWYKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9nBdDLByHUgCaZmgq3AMUZVpyo9mrYkwQayQB16MDOYLG4ORJMi%2BnKrBkMibwVYuA6J3RUIhSc%2B%2FFaDjNId3EySOJW3CWWB3ImKruSHaMf%2FvCPxOA1yl3f7fqiFwlNs6e4h%2F7NtBn1L9dIcfyo%2FofCt%2F1TnExdXtmLVj%2B2oNAZFMYJdTsceDthb1Oyc1XBxff%2FzGWdNdAkPWe1qbBguiDenwEEBgmsAgskGVjy%2FLcsE15eu%2F4ShDOtij1iJ0QfoJ688wS45PAl%2BTXaRtbl7HItYbEO0yw4%2FtKvYzALdDARBFpIkTleAD%2BApF4reO2QNimaufcPs2873lrz%2F7Ig%2F%2BAtsJnD56fneOzlj6h9R%2B5vKcciEJAwaGR53CqVcNJA43xh3jD5vVomDG%2BNXY%2BZlvtLdFkpgrtZMemBQD6S4jz2qfhvfjX9LXcLFqFxry7%2FrdM4Kbnjm6YgQt6dl%2F%2F7Heqp2dwL4q3agpfysGBLsTv3SPNq82Q1r0iL3LEUXap0rJgXfaTzKz10I2Fw%2FKtCTtJSQYa8yZw4c0juHUQr57RAnYK1mG%2Ft1ZTwfLCMuHMGRV1Mbg0nW1CMKLOAvi9rKBc8PdDzlgQmVV3XuiIg9KQUYLrSoQIp46vFUg4R4WEWF2JQF9a7XqGEpBQBTDB8v3FBjqkAezPkLgsmX5ZE0cl5MvFogkVx6qJ8OhTjs4bufT%2BnmxBCqtRJgQWn%2FMvV90RHkzk1uMlQ7Q886bsD3gakZn3vWsBlZ9OXsRMo8H9%2Fg7or%2Fb8%2BepP5Cy3Vv9axb1RdPNQxIlt50LbKpYiQGhef65PePi52y42z9c6S3uALRwi1hu%2F5lnz0B%2BGvnr%2FphGOkXJZvYqiGFa2XNP4R4TMcDYpjGEp3%2Fnb&X-Amz-Signature=9ccf5b7a2b435a19ac808814824d1333fa33522840dc0d514eacf23489222bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
