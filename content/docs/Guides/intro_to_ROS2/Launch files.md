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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S275LHZC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCAbTDB%2FN9qrUmXI7zwcj%2Bs7Mi7vqLg8BXe5wLPz5tByAIhAJ0xM2dMThP%2Bp9XwXpv%2BiyhHKaRX4x5bYX51UxruCxCWKv8DCF0QABoMNjM3NDIzMTgzODA1IgwwTa%2Frf1caTodJN2oq3ANE3U%2FaJ3TkU%2BjcwaBgUgk%2F9EKX61Njm5rD7h7JIaVlskmcW59%2Burhy9jznEXgnOz6OkDx3Fo85pH1Bp%2BvqevN5dL7BJe0dqKHx0IgtrFkP0Vq33zPRr7HTVuVijPcCy%2BjKN2nTx8Zba04%2FDuVbouDsRkaYPFRi2wk1HYWDDUdu%2BSk1cGzz925b1UZmvgdGjJidGHYXZMqiktjzAQfshIumuiKH5Bhhz%2FZGWdr78MEXGkg7oVQeRrha8EXc1W12dsrjnTInhZusUG4aKywaKHMbwBSisGlur434lpWWQyFwAhPw9mxhevcnDseFxFqmCxSeKub20p7KPNZcqLJGdqxnm38TrVkIpY1ttlZayKfIL%2BCU1P1up%2BfA4E9yd5OPlE0W3kb6S7ZUiNWZswAooFZc%2Fa27TiGKHNvwTuivwscEhRD88qlsBpkNAf2VjbON4je7324w6%2BSE5VQUUt44HEemMoCZm8Dlk04Aul1bFmDYWnHzsR8k3gyLV2QRbwydB6aEArGTDRp7x4fl7V6c2uz8UqqPoxm6c5diZlIfPYhnPu7LKJLZnrzAsjdf7Y2LtUUTa%2Bzi6DAjqPUAvzkWZ0sfFqWNc%2BkrnZSvK4Nt6h3PsWlKXhOYL5FHLHKZoDCl1KnDBjqkAcMP3GC48bDK7BMI8iQM0%2FxOic6qT6MVshJWR3TsjqMdFJUSDGhze0hv8sf2fNdpwlJikASqFCa96t7VWP5iTo1qsXcn0DQG1ySHy9us9uiw4isWJQIUjpNBUYTg5%2FQ7gd5EsADGJSVIPqQba%2FQH0aqWERNhoDexIi087PeqNaomB%2BL6Aiazw3hANL1mIIAUJ8pkce2%2FhsAiX%2FEoWUm7LdMTBcy%2B&X-Amz-Signature=79b89d21ac9d3aa176acb8d6799c5e421edcf177d73cb997cdfa7cf683e58155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S275LHZC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCAbTDB%2FN9qrUmXI7zwcj%2Bs7Mi7vqLg8BXe5wLPz5tByAIhAJ0xM2dMThP%2Bp9XwXpv%2BiyhHKaRX4x5bYX51UxruCxCWKv8DCF0QABoMNjM3NDIzMTgzODA1IgwwTa%2Frf1caTodJN2oq3ANE3U%2FaJ3TkU%2BjcwaBgUgk%2F9EKX61Njm5rD7h7JIaVlskmcW59%2Burhy9jznEXgnOz6OkDx3Fo85pH1Bp%2BvqevN5dL7BJe0dqKHx0IgtrFkP0Vq33zPRr7HTVuVijPcCy%2BjKN2nTx8Zba04%2FDuVbouDsRkaYPFRi2wk1HYWDDUdu%2BSk1cGzz925b1UZmvgdGjJidGHYXZMqiktjzAQfshIumuiKH5Bhhz%2FZGWdr78MEXGkg7oVQeRrha8EXc1W12dsrjnTInhZusUG4aKywaKHMbwBSisGlur434lpWWQyFwAhPw9mxhevcnDseFxFqmCxSeKub20p7KPNZcqLJGdqxnm38TrVkIpY1ttlZayKfIL%2BCU1P1up%2BfA4E9yd5OPlE0W3kb6S7ZUiNWZswAooFZc%2Fa27TiGKHNvwTuivwscEhRD88qlsBpkNAf2VjbON4je7324w6%2BSE5VQUUt44HEemMoCZm8Dlk04Aul1bFmDYWnHzsR8k3gyLV2QRbwydB6aEArGTDRp7x4fl7V6c2uz8UqqPoxm6c5diZlIfPYhnPu7LKJLZnrzAsjdf7Y2LtUUTa%2Bzi6DAjqPUAvzkWZ0sfFqWNc%2BkrnZSvK4Nt6h3PsWlKXhOYL5FHLHKZoDCl1KnDBjqkAcMP3GC48bDK7BMI8iQM0%2FxOic6qT6MVshJWR3TsjqMdFJUSDGhze0hv8sf2fNdpwlJikASqFCa96t7VWP5iTo1qsXcn0DQG1ySHy9us9uiw4isWJQIUjpNBUYTg5%2FQ7gd5EsADGJSVIPqQba%2FQH0aqWERNhoDexIi087PeqNaomB%2BL6Aiazw3hANL1mIIAUJ8pkce2%2FhsAiX%2FEoWUm7LdMTBcy%2B&X-Amz-Signature=9ede6c4eb31ca53c634cd4f2fa8c91157c6429dc60166efd7d2f6eb62ec387ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S275LHZC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCAbTDB%2FN9qrUmXI7zwcj%2Bs7Mi7vqLg8BXe5wLPz5tByAIhAJ0xM2dMThP%2Bp9XwXpv%2BiyhHKaRX4x5bYX51UxruCxCWKv8DCF0QABoMNjM3NDIzMTgzODA1IgwwTa%2Frf1caTodJN2oq3ANE3U%2FaJ3TkU%2BjcwaBgUgk%2F9EKX61Njm5rD7h7JIaVlskmcW59%2Burhy9jznEXgnOz6OkDx3Fo85pH1Bp%2BvqevN5dL7BJe0dqKHx0IgtrFkP0Vq33zPRr7HTVuVijPcCy%2BjKN2nTx8Zba04%2FDuVbouDsRkaYPFRi2wk1HYWDDUdu%2BSk1cGzz925b1UZmvgdGjJidGHYXZMqiktjzAQfshIumuiKH5Bhhz%2FZGWdr78MEXGkg7oVQeRrha8EXc1W12dsrjnTInhZusUG4aKywaKHMbwBSisGlur434lpWWQyFwAhPw9mxhevcnDseFxFqmCxSeKub20p7KPNZcqLJGdqxnm38TrVkIpY1ttlZayKfIL%2BCU1P1up%2BfA4E9yd5OPlE0W3kb6S7ZUiNWZswAooFZc%2Fa27TiGKHNvwTuivwscEhRD88qlsBpkNAf2VjbON4je7324w6%2BSE5VQUUt44HEemMoCZm8Dlk04Aul1bFmDYWnHzsR8k3gyLV2QRbwydB6aEArGTDRp7x4fl7V6c2uz8UqqPoxm6c5diZlIfPYhnPu7LKJLZnrzAsjdf7Y2LtUUTa%2Bzi6DAjqPUAvzkWZ0sfFqWNc%2BkrnZSvK4Nt6h3PsWlKXhOYL5FHLHKZoDCl1KnDBjqkAcMP3GC48bDK7BMI8iQM0%2FxOic6qT6MVshJWR3TsjqMdFJUSDGhze0hv8sf2fNdpwlJikASqFCa96t7VWP5iTo1qsXcn0DQG1ySHy9us9uiw4isWJQIUjpNBUYTg5%2FQ7gd5EsADGJSVIPqQba%2FQH0aqWERNhoDexIi087PeqNaomB%2BL6Aiazw3hANL1mIIAUJ8pkce2%2FhsAiX%2FEoWUm7LdMTBcy%2B&X-Amz-Signature=8e323ec9944363ccd1f66b2c6215857a0ef1aa2d22fd20e762aa90989adf8022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
