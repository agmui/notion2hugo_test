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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBOK32P%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCID9oVt7XgfpPttcF%2F%2BehasgrQ3jBRQDzec7Zcto6bmrNAiBMSGQnIqQJOGFLj7XplXeV5Or1UYNPhBIogibcJwiUNCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTEZaBwrXsHNa36aGKtwDg7bbvA37D3k6ewtZnvuuwFDIA3YxC3JXNEfIp%2BP1J0%2F0OCqD9qExJOBvWO3vsLaiueQ1K4bUejEZQFvxa00MImCFpg1aWaJmIIeQeSdOCJ60w3Rf1am59MJFyNs5sFH8e6kewHDc78LqH85YUcI%2FocrhZe2z378BQ4WX9Mup1vviPxRyhZ34aA8urhvwDXRxi837Qcquj12U7xe9gQpaM1HPYQAieRTxsX%2B1htfLoRP5JqBE2xQahHWRHfsHn5WEWLH6WNOCzZ%2BO%2F44poYbOiY42%2BkQIbqc6w0jIuhvXIBvDT%2BOQVzquBHKNMgt62RSKJpEW2tEmwlTh9WKj3%2FAEN8y5AnqoORCcnyo%2FoDgsJb%2B6bIEVuxhKrTOsXhwUJwoae%2FxVOdS0jbizJe6iRz1XtqwjkbcCAL6b%2FotAV7QiieXfDBkJ17zL%2BFfG43%2B6LyDVVgC3g%2F5jJtfhE54z5gCrhOMMf3Sho%2FhztrXcieKW%2FESIm0XMt0MzDKtaVFona%2FzoHaHOIj7aRAGBiLq0LFsTeQ%2Brcn6j4GZ3j2PSm0K%2FNmc3JsARprRlJlFIfNGmmY7xcfrMn3u52qr36TrIvyTGM%2BAyvC8VxhbrZscF58u6NJgn2XrOI6UYYQ592kswiuvOxAY6pgGjM4tNOs0V16VAa5KCJwdcHOoz862x7NawvjMYmMmC1ejCldYcIDBWhQzgsPLwb3MIGR14oO6AL7fFcWfifjK4m52OUJ%2B%2Br0PimRo1zX3UjDko6STID5dJnqMdRPbDf%2FA65Ok8nzl%2BBBuYK%2BALt2S1vGcOURfRm%2FzK4SAnnqfvc736gxmrMTFvrXVpKzV3JBQm9LM0U2tDFBACE99TWZ%2F6myvtgAgX&X-Amz-Signature=e7414469202106c4d295865529230461b30aa39058e7ce582f4ad4102ab3a4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBOK32P%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCID9oVt7XgfpPttcF%2F%2BehasgrQ3jBRQDzec7Zcto6bmrNAiBMSGQnIqQJOGFLj7XplXeV5Or1UYNPhBIogibcJwiUNCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTEZaBwrXsHNa36aGKtwDg7bbvA37D3k6ewtZnvuuwFDIA3YxC3JXNEfIp%2BP1J0%2F0OCqD9qExJOBvWO3vsLaiueQ1K4bUejEZQFvxa00MImCFpg1aWaJmIIeQeSdOCJ60w3Rf1am59MJFyNs5sFH8e6kewHDc78LqH85YUcI%2FocrhZe2z378BQ4WX9Mup1vviPxRyhZ34aA8urhvwDXRxi837Qcquj12U7xe9gQpaM1HPYQAieRTxsX%2B1htfLoRP5JqBE2xQahHWRHfsHn5WEWLH6WNOCzZ%2BO%2F44poYbOiY42%2BkQIbqc6w0jIuhvXIBvDT%2BOQVzquBHKNMgt62RSKJpEW2tEmwlTh9WKj3%2FAEN8y5AnqoORCcnyo%2FoDgsJb%2B6bIEVuxhKrTOsXhwUJwoae%2FxVOdS0jbizJe6iRz1XtqwjkbcCAL6b%2FotAV7QiieXfDBkJ17zL%2BFfG43%2B6LyDVVgC3g%2F5jJtfhE54z5gCrhOMMf3Sho%2FhztrXcieKW%2FESIm0XMt0MzDKtaVFona%2FzoHaHOIj7aRAGBiLq0LFsTeQ%2Brcn6j4GZ3j2PSm0K%2FNmc3JsARprRlJlFIfNGmmY7xcfrMn3u52qr36TrIvyTGM%2BAyvC8VxhbrZscF58u6NJgn2XrOI6UYYQ592kswiuvOxAY6pgGjM4tNOs0V16VAa5KCJwdcHOoz862x7NawvjMYmMmC1ejCldYcIDBWhQzgsPLwb3MIGR14oO6AL7fFcWfifjK4m52OUJ%2B%2Br0PimRo1zX3UjDko6STID5dJnqMdRPbDf%2FA65Ok8nzl%2BBBuYK%2BALt2S1vGcOURfRm%2FzK4SAnnqfvc736gxmrMTFvrXVpKzV3JBQm9LM0U2tDFBACE99TWZ%2F6myvtgAgX&X-Amz-Signature=9b781b2f1368a7686f8e682f21cf453ffa0987a3b9a6eafe18132a309e00bb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBOK32P%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCID9oVt7XgfpPttcF%2F%2BehasgrQ3jBRQDzec7Zcto6bmrNAiBMSGQnIqQJOGFLj7XplXeV5Or1UYNPhBIogibcJwiUNCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMTEZaBwrXsHNa36aGKtwDg7bbvA37D3k6ewtZnvuuwFDIA3YxC3JXNEfIp%2BP1J0%2F0OCqD9qExJOBvWO3vsLaiueQ1K4bUejEZQFvxa00MImCFpg1aWaJmIIeQeSdOCJ60w3Rf1am59MJFyNs5sFH8e6kewHDc78LqH85YUcI%2FocrhZe2z378BQ4WX9Mup1vviPxRyhZ34aA8urhvwDXRxi837Qcquj12U7xe9gQpaM1HPYQAieRTxsX%2B1htfLoRP5JqBE2xQahHWRHfsHn5WEWLH6WNOCzZ%2BO%2F44poYbOiY42%2BkQIbqc6w0jIuhvXIBvDT%2BOQVzquBHKNMgt62RSKJpEW2tEmwlTh9WKj3%2FAEN8y5AnqoORCcnyo%2FoDgsJb%2B6bIEVuxhKrTOsXhwUJwoae%2FxVOdS0jbizJe6iRz1XtqwjkbcCAL6b%2FotAV7QiieXfDBkJ17zL%2BFfG43%2B6LyDVVgC3g%2F5jJtfhE54z5gCrhOMMf3Sho%2FhztrXcieKW%2FESIm0XMt0MzDKtaVFona%2FzoHaHOIj7aRAGBiLq0LFsTeQ%2Brcn6j4GZ3j2PSm0K%2FNmc3JsARprRlJlFIfNGmmY7xcfrMn3u52qr36TrIvyTGM%2BAyvC8VxhbrZscF58u6NJgn2XrOI6UYYQ592kswiuvOxAY6pgGjM4tNOs0V16VAa5KCJwdcHOoz862x7NawvjMYmMmC1ejCldYcIDBWhQzgsPLwb3MIGR14oO6AL7fFcWfifjK4m52OUJ%2B%2Br0PimRo1zX3UjDko6STID5dJnqMdRPbDf%2FA65Ok8nzl%2BBBuYK%2BALt2S1vGcOURfRm%2FzK4SAnnqfvc736gxmrMTFvrXVpKzV3JBQm9LM0U2tDFBACE99TWZ%2F6myvtgAgX&X-Amz-Signature=a62ff578f693a16b492067da8bea93187a20861503c7ed7511bbf07967a85b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
