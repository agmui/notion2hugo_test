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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVMKZQ6%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDfAZdE9peFCnyhkAvOMpaVcZoR59cig7pJb3WpAtzV9QIhAPVVrU7t99rGBtq8JhNfdBU8QgDdMj7MMXNKELidANrHKv8DCAMQABoMNjM3NDIzMTgzODA1IgxOc7%2F%2Foq0N6hgfrhgq3APOIWHNm8lyd%2FwRFwn0emjR1rohCsHdXxZX3sKd2dauBjMp1VU0VAjdXFgCerOIOTlgYWPTNZoXaLhI5prdZPrQQTFSHrwYLSQR8xrvyutt8OETe623fDM0NJ2s96jTYd%2FBgjMY4CX%2FCKf0zVp44Scxm9NP20iwSE6X5lLJIIFz0OnwuoHPyis9g5r4R0qPdWFwqsBBE6vjvCmGqcDUATIDm3ySdyJn064clSl7M3qETzvA0jX%2BwnuK9N57uV%2FS7cRt2kUhQy3FMKQK3QZzOkU2l1hagJlgeZgfkYYx5Z1l6kc2L5BSExaK9bOqkUKnz6m9o3aoTY%2BLxyt2NyXxqA%2BAvdEmPM6y7eX%2BW0n2SB3xpByktauQj4KCVQFQpuL%2BvdXHzJ4Rt78T9oeBtZB%2FjW0hKtg4JsMVkYk0fzsHHLR2aUpYTozYUftUq5OrmXk7mw6McM7hPW3vtc9MtInUcNdGhVxTd%2BcSJuCpDQRtDpL9dwv1ALeTpopTPdQqzmKHiKEC7daWTs1Lr3a2qmAipyIb5A3XoSzauEpCmis0y30t1ZrYzDSCVOo8orsynGgvYHfhbV6fFCty%2BlyEv00oAsZJLYbN3qaBQSoN%2FuED1pyGJkbz4Jf0Z%2FNCQxaoPTDAuZzSBjqkAbNEv4qPWvWtNJFJNC8YL389iJenLnZBpR2MtWRUURMKsPgSy8GMN8IzjLAFDvGlWXJNIwmNzOZPALon2mXv725MTPRCtRHEr0yNBPALOuinWiCN%2BmqtjJsvnp1Lq%2BDE6saJLNXchoqlfqCo1k8JyMdARCR546Ux8FGsYqIWr8jcKlKR1dtRk4Z03iKy6mokU3Cf9fY%2BQmA39HlMDWxAbSyD78Dn&X-Amz-Signature=96dfe7d93f53603cc830617fe8858c2067a1934452a2fec8e9d9d828b5d67b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVMKZQ6%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDfAZdE9peFCnyhkAvOMpaVcZoR59cig7pJb3WpAtzV9QIhAPVVrU7t99rGBtq8JhNfdBU8QgDdMj7MMXNKELidANrHKv8DCAMQABoMNjM3NDIzMTgzODA1IgxOc7%2F%2Foq0N6hgfrhgq3APOIWHNm8lyd%2FwRFwn0emjR1rohCsHdXxZX3sKd2dauBjMp1VU0VAjdXFgCerOIOTlgYWPTNZoXaLhI5prdZPrQQTFSHrwYLSQR8xrvyutt8OETe623fDM0NJ2s96jTYd%2FBgjMY4CX%2FCKf0zVp44Scxm9NP20iwSE6X5lLJIIFz0OnwuoHPyis9g5r4R0qPdWFwqsBBE6vjvCmGqcDUATIDm3ySdyJn064clSl7M3qETzvA0jX%2BwnuK9N57uV%2FS7cRt2kUhQy3FMKQK3QZzOkU2l1hagJlgeZgfkYYx5Z1l6kc2L5BSExaK9bOqkUKnz6m9o3aoTY%2BLxyt2NyXxqA%2BAvdEmPM6y7eX%2BW0n2SB3xpByktauQj4KCVQFQpuL%2BvdXHzJ4Rt78T9oeBtZB%2FjW0hKtg4JsMVkYk0fzsHHLR2aUpYTozYUftUq5OrmXk7mw6McM7hPW3vtc9MtInUcNdGhVxTd%2BcSJuCpDQRtDpL9dwv1ALeTpopTPdQqzmKHiKEC7daWTs1Lr3a2qmAipyIb5A3XoSzauEpCmis0y30t1ZrYzDSCVOo8orsynGgvYHfhbV6fFCty%2BlyEv00oAsZJLYbN3qaBQSoN%2FuED1pyGJkbz4Jf0Z%2FNCQxaoPTDAuZzSBjqkAbNEv4qPWvWtNJFJNC8YL389iJenLnZBpR2MtWRUURMKsPgSy8GMN8IzjLAFDvGlWXJNIwmNzOZPALon2mXv725MTPRCtRHEr0yNBPALOuinWiCN%2BmqtjJsvnp1Lq%2BDE6saJLNXchoqlfqCo1k8JyMdARCR546Ux8FGsYqIWr8jcKlKR1dtRk4Z03iKy6mokU3Cf9fY%2BQmA39HlMDWxAbSyD78Dn&X-Amz-Signature=b0d89d0b61231f2cf9fe0d18b361796fdb8e4d39aac26f4253c60a77d6ade3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVMKZQ6%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDfAZdE9peFCnyhkAvOMpaVcZoR59cig7pJb3WpAtzV9QIhAPVVrU7t99rGBtq8JhNfdBU8QgDdMj7MMXNKELidANrHKv8DCAMQABoMNjM3NDIzMTgzODA1IgxOc7%2F%2Foq0N6hgfrhgq3APOIWHNm8lyd%2FwRFwn0emjR1rohCsHdXxZX3sKd2dauBjMp1VU0VAjdXFgCerOIOTlgYWPTNZoXaLhI5prdZPrQQTFSHrwYLSQR8xrvyutt8OETe623fDM0NJ2s96jTYd%2FBgjMY4CX%2FCKf0zVp44Scxm9NP20iwSE6X5lLJIIFz0OnwuoHPyis9g5r4R0qPdWFwqsBBE6vjvCmGqcDUATIDm3ySdyJn064clSl7M3qETzvA0jX%2BwnuK9N57uV%2FS7cRt2kUhQy3FMKQK3QZzOkU2l1hagJlgeZgfkYYx5Z1l6kc2L5BSExaK9bOqkUKnz6m9o3aoTY%2BLxyt2NyXxqA%2BAvdEmPM6y7eX%2BW0n2SB3xpByktauQj4KCVQFQpuL%2BvdXHzJ4Rt78T9oeBtZB%2FjW0hKtg4JsMVkYk0fzsHHLR2aUpYTozYUftUq5OrmXk7mw6McM7hPW3vtc9MtInUcNdGhVxTd%2BcSJuCpDQRtDpL9dwv1ALeTpopTPdQqzmKHiKEC7daWTs1Lr3a2qmAipyIb5A3XoSzauEpCmis0y30t1ZrYzDSCVOo8orsynGgvYHfhbV6fFCty%2BlyEv00oAsZJLYbN3qaBQSoN%2FuED1pyGJkbz4Jf0Z%2FNCQxaoPTDAuZzSBjqkAbNEv4qPWvWtNJFJNC8YL389iJenLnZBpR2MtWRUURMKsPgSy8GMN8IzjLAFDvGlWXJNIwmNzOZPALon2mXv725MTPRCtRHEr0yNBPALOuinWiCN%2BmqtjJsvnp1Lq%2BDE6saJLNXchoqlfqCo1k8JyMdARCR546Ux8FGsYqIWr8jcKlKR1dtRk4Z03iKy6mokU3Cf9fY%2BQmA39HlMDWxAbSyD78Dn&X-Amz-Signature=b6512fa11268ec27a0f5bf7b1d781e8be7811327e98bf1477f80dc628f129634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
