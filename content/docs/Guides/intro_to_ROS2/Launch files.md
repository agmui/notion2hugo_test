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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCROMAWL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFR9B9A%2BYKVbvdAopAlceGljHoixqbPA0Hvv9x9dgPqjAiArIvz3PwAOaG2hmmv1m3y0kMc04L9qR93fRbOuJtIYcyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSu%2Bw8dfhtKabqCt0KtwDh4t2eT4AL49WI4AEF9CUKW3gfHMxSoAcDpuptSQonawIc%2FDuvykIIoPsJn2D9cpDzyaY6v848Cmc%2BE5P7jBvwPTJvtv0lR2kd5uw5NpjbLIOW16D8%2F9PiJ9M5by9HUGZeXHinqLDlp8A2wKfDsfvYzhyj%2BDOGdR3s9weaOeYna55c6U9S8YP5W%2BR2Yp6vTVmy%2Bs9ibNgKs%2BugwXTloOQgJSqg5aoaRhPNSv2qE1r7ViAOAiwgiJc9leZV2SR8tIQNFk3wqJvU%2F2Axd2MIzSiInF%2BSzus2SF4dOxz38dlKzW%2BVALyb3u6cbm2DAurhRF2HqJl2QwNwM08krU4ERKshPqQJGqbENkW23XpbcJ4C6ff2a8rZUUlH%2BQ1ss3Y2othHL3DQOf6Ffj57P9mWwrgszM7tZpuioDkfE4lkdd3%2B8z79ovprWa5f4dBK%2BWsTU80ZMq%2Fkug%2BLb2XhauJ8uAgX2oQvuwBdQk4VgOL1e3pGJc3%2FoGSNtNsDD1aT%2BqY6LL9hFCaAJwNQ6dzMBadZspRQMG2Jb%2FINwnio8XLhoM1TIQ1CUoZbbVyC3BKoTZpKNPpX0hIMlo72upO45E82b0Ani7OQSXV7Zs9r6Ozm7%2FcZEfDghTw4%2FDNzck%2FqDAwg7CwwgY6pgG6uzMXHiD2irNBsfVbryMU9HPOscolYx21XGUE0nnQ4QnwuF4OHsCx4ELiNFuRj5VECHZSO2U8fv1YdPDyfFA8HwA%2BYjNg1qb2uZ1VSqo%2BtAcpJkKq3seKjjVJSQR9wT55hl%2BCoMIjX0LYgYjdI%2F1i8maQyavbuRylezPcr9enlXSxnro3vhDR9Ggzw5eUGDcGseEsCDWPZwFE6yEi3hRZLwJwWw5w&X-Amz-Signature=a6608dff2b6fbcde65c8df98de961a7ee2dfd28eee6c5f5a74054c952c1fdac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCROMAWL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFR9B9A%2BYKVbvdAopAlceGljHoixqbPA0Hvv9x9dgPqjAiArIvz3PwAOaG2hmmv1m3y0kMc04L9qR93fRbOuJtIYcyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSu%2Bw8dfhtKabqCt0KtwDh4t2eT4AL49WI4AEF9CUKW3gfHMxSoAcDpuptSQonawIc%2FDuvykIIoPsJn2D9cpDzyaY6v848Cmc%2BE5P7jBvwPTJvtv0lR2kd5uw5NpjbLIOW16D8%2F9PiJ9M5by9HUGZeXHinqLDlp8A2wKfDsfvYzhyj%2BDOGdR3s9weaOeYna55c6U9S8YP5W%2BR2Yp6vTVmy%2Bs9ibNgKs%2BugwXTloOQgJSqg5aoaRhPNSv2qE1r7ViAOAiwgiJc9leZV2SR8tIQNFk3wqJvU%2F2Axd2MIzSiInF%2BSzus2SF4dOxz38dlKzW%2BVALyb3u6cbm2DAurhRF2HqJl2QwNwM08krU4ERKshPqQJGqbENkW23XpbcJ4C6ff2a8rZUUlH%2BQ1ss3Y2othHL3DQOf6Ffj57P9mWwrgszM7tZpuioDkfE4lkdd3%2B8z79ovprWa5f4dBK%2BWsTU80ZMq%2Fkug%2BLb2XhauJ8uAgX2oQvuwBdQk4VgOL1e3pGJc3%2FoGSNtNsDD1aT%2BqY6LL9hFCaAJwNQ6dzMBadZspRQMG2Jb%2FINwnio8XLhoM1TIQ1CUoZbbVyC3BKoTZpKNPpX0hIMlo72upO45E82b0Ani7OQSXV7Zs9r6Ozm7%2FcZEfDghTw4%2FDNzck%2FqDAwg7CwwgY6pgG6uzMXHiD2irNBsfVbryMU9HPOscolYx21XGUE0nnQ4QnwuF4OHsCx4ELiNFuRj5VECHZSO2U8fv1YdPDyfFA8HwA%2BYjNg1qb2uZ1VSqo%2BtAcpJkKq3seKjjVJSQR9wT55hl%2BCoMIjX0LYgYjdI%2F1i8maQyavbuRylezPcr9enlXSxnro3vhDR9Ggzw5eUGDcGseEsCDWPZwFE6yEi3hRZLwJwWw5w&X-Amz-Signature=8077a1a120ef0fba1d16960416201b81220959ca7d0a185b2173028fac1e1e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCROMAWL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFR9B9A%2BYKVbvdAopAlceGljHoixqbPA0Hvv9x9dgPqjAiArIvz3PwAOaG2hmmv1m3y0kMc04L9qR93fRbOuJtIYcyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSu%2Bw8dfhtKabqCt0KtwDh4t2eT4AL49WI4AEF9CUKW3gfHMxSoAcDpuptSQonawIc%2FDuvykIIoPsJn2D9cpDzyaY6v848Cmc%2BE5P7jBvwPTJvtv0lR2kd5uw5NpjbLIOW16D8%2F9PiJ9M5by9HUGZeXHinqLDlp8A2wKfDsfvYzhyj%2BDOGdR3s9weaOeYna55c6U9S8YP5W%2BR2Yp6vTVmy%2Bs9ibNgKs%2BugwXTloOQgJSqg5aoaRhPNSv2qE1r7ViAOAiwgiJc9leZV2SR8tIQNFk3wqJvU%2F2Axd2MIzSiInF%2BSzus2SF4dOxz38dlKzW%2BVALyb3u6cbm2DAurhRF2HqJl2QwNwM08krU4ERKshPqQJGqbENkW23XpbcJ4C6ff2a8rZUUlH%2BQ1ss3Y2othHL3DQOf6Ffj57P9mWwrgszM7tZpuioDkfE4lkdd3%2B8z79ovprWa5f4dBK%2BWsTU80ZMq%2Fkug%2BLb2XhauJ8uAgX2oQvuwBdQk4VgOL1e3pGJc3%2FoGSNtNsDD1aT%2BqY6LL9hFCaAJwNQ6dzMBadZspRQMG2Jb%2FINwnio8XLhoM1TIQ1CUoZbbVyC3BKoTZpKNPpX0hIMlo72upO45E82b0Ani7OQSXV7Zs9r6Ozm7%2FcZEfDghTw4%2FDNzck%2FqDAwg7CwwgY6pgG6uzMXHiD2irNBsfVbryMU9HPOscolYx21XGUE0nnQ4QnwuF4OHsCx4ELiNFuRj5VECHZSO2U8fv1YdPDyfFA8HwA%2BYjNg1qb2uZ1VSqo%2BtAcpJkKq3seKjjVJSQR9wT55hl%2BCoMIjX0LYgYjdI%2F1i8maQyavbuRylezPcr9enlXSxnro3vhDR9Ggzw5eUGDcGseEsCDWPZwFE6yEi3hRZLwJwWw5w&X-Amz-Signature=fce46b4b83ff9da2c4adc2dc46a44a332efd9bed63aecdd6169e185ee71a96e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
