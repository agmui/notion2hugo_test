---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDV43OD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGyo0UH%2BKFqNgZ0oX4Z9cP6uz%2BTuALlqAX0Jv%2B%2B5HVOuAiEA%2BjUdSlq6CxRaQNCWNE6KlRlZBLWNxQUOGvnn%2BkyllAoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcB12n47q3StXilzSrcAypiyWVgetj%2FfSiprbxwDYZykL4i24MHFw8E1PNdPDIHlmX%2B%2FJh82SKhOuAeLqYmI%2BNRTjd680FVxf8fPHLfH%2BHbNjCYpEwEdwfvsFcnpt60T9oorv6YiuQk943%2BG8iFJ%2FlCLRsGBzieFQw7bed%2BJMwIaWQT8OQmdKvLKgi7kQYHfEzyqFDIJQnQv8D6hwPwP9FXzBAJXmS8T6%2FgSflR1n8bAMidYQhf9%2FuzViunxJxF7abpPlfdDd7gu%2BW6XQRqtnvpA3nycKjaFtb344yOewOKHoUWZHkGEDGTpWsb3jBM%2BMc3fQC%2FDm0AKL4OjjYfkhp0YPB6Uc%2Fxc9d1SsVCH8PsYwcqV1kL78olAavcz4c6f1e0hRJGWxjxyL9H0w5JH93H989BAVbuzaUQ%2BoM6CiKpxdmhSjvYROFLOeJPQOirwdYeP%2F1y0rhTNaeEh4fSpz7eRoUwHj5wgSK8hXptpktesqT9b8rEFxUjYtNrAczVVIFSuWZrZp8yyca9BvJnvCKRDlbrqPBh2nlSIHC9nGxW6if8bH42g5EI8QiSaYqksX2H3xH0yhSqSJWuBaz3p8cAeETSVtM9Spooq7xxzx%2Bt8lT4aloRKOsIgoufZoX5GmZiPZSEh06ITg8OMNaxosQGOqUBRBKL2Q%2BQe1B2WVmB%2BxGnNmycoYGCD%2FJmsDWpqr5uONJinsfQRgT1YWmMBleSGbQ5FiDjS2wRFcIhP7BJj2b9VLhsHEhzQSq473%2FewuJpBB%2FWH7ZUMP97muWRr8Cet6QhPFQcdgDgsFxlgfUxodqcmgdfUXxIqZF3Y%2BBLv9PCrRCcpncE2HCc%2Bx12RHtSIdPEN0YXQqj7dYcMoVd0zI50wCWwKklI&X-Amz-Signature=49fa1f1fd9b6b9632cf66096f9624a417f9111ff39de5723959c2417dd65ad75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDV43OD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGyo0UH%2BKFqNgZ0oX4Z9cP6uz%2BTuALlqAX0Jv%2B%2B5HVOuAiEA%2BjUdSlq6CxRaQNCWNE6KlRlZBLWNxQUOGvnn%2BkyllAoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcB12n47q3StXilzSrcAypiyWVgetj%2FfSiprbxwDYZykL4i24MHFw8E1PNdPDIHlmX%2B%2FJh82SKhOuAeLqYmI%2BNRTjd680FVxf8fPHLfH%2BHbNjCYpEwEdwfvsFcnpt60T9oorv6YiuQk943%2BG8iFJ%2FlCLRsGBzieFQw7bed%2BJMwIaWQT8OQmdKvLKgi7kQYHfEzyqFDIJQnQv8D6hwPwP9FXzBAJXmS8T6%2FgSflR1n8bAMidYQhf9%2FuzViunxJxF7abpPlfdDd7gu%2BW6XQRqtnvpA3nycKjaFtb344yOewOKHoUWZHkGEDGTpWsb3jBM%2BMc3fQC%2FDm0AKL4OjjYfkhp0YPB6Uc%2Fxc9d1SsVCH8PsYwcqV1kL78olAavcz4c6f1e0hRJGWxjxyL9H0w5JH93H989BAVbuzaUQ%2BoM6CiKpxdmhSjvYROFLOeJPQOirwdYeP%2F1y0rhTNaeEh4fSpz7eRoUwHj5wgSK8hXptpktesqT9b8rEFxUjYtNrAczVVIFSuWZrZp8yyca9BvJnvCKRDlbrqPBh2nlSIHC9nGxW6if8bH42g5EI8QiSaYqksX2H3xH0yhSqSJWuBaz3p8cAeETSVtM9Spooq7xxzx%2Bt8lT4aloRKOsIgoufZoX5GmZiPZSEh06ITg8OMNaxosQGOqUBRBKL2Q%2BQe1B2WVmB%2BxGnNmycoYGCD%2FJmsDWpqr5uONJinsfQRgT1YWmMBleSGbQ5FiDjS2wRFcIhP7BJj2b9VLhsHEhzQSq473%2FewuJpBB%2FWH7ZUMP97muWRr8Cet6QhPFQcdgDgsFxlgfUxodqcmgdfUXxIqZF3Y%2BBLv9PCrRCcpncE2HCc%2Bx12RHtSIdPEN0YXQqj7dYcMoVd0zI50wCWwKklI&X-Amz-Signature=ccdd10887d48ec28d495f37d70835be6997dd55daa75b8ebf6594da914d11c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDV43OD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGyo0UH%2BKFqNgZ0oX4Z9cP6uz%2BTuALlqAX0Jv%2B%2B5HVOuAiEA%2BjUdSlq6CxRaQNCWNE6KlRlZBLWNxQUOGvnn%2BkyllAoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcB12n47q3StXilzSrcAypiyWVgetj%2FfSiprbxwDYZykL4i24MHFw8E1PNdPDIHlmX%2B%2FJh82SKhOuAeLqYmI%2BNRTjd680FVxf8fPHLfH%2BHbNjCYpEwEdwfvsFcnpt60T9oorv6YiuQk943%2BG8iFJ%2FlCLRsGBzieFQw7bed%2BJMwIaWQT8OQmdKvLKgi7kQYHfEzyqFDIJQnQv8D6hwPwP9FXzBAJXmS8T6%2FgSflR1n8bAMidYQhf9%2FuzViunxJxF7abpPlfdDd7gu%2BW6XQRqtnvpA3nycKjaFtb344yOewOKHoUWZHkGEDGTpWsb3jBM%2BMc3fQC%2FDm0AKL4OjjYfkhp0YPB6Uc%2Fxc9d1SsVCH8PsYwcqV1kL78olAavcz4c6f1e0hRJGWxjxyL9H0w5JH93H989BAVbuzaUQ%2BoM6CiKpxdmhSjvYROFLOeJPQOirwdYeP%2F1y0rhTNaeEh4fSpz7eRoUwHj5wgSK8hXptpktesqT9b8rEFxUjYtNrAczVVIFSuWZrZp8yyca9BvJnvCKRDlbrqPBh2nlSIHC9nGxW6if8bH42g5EI8QiSaYqksX2H3xH0yhSqSJWuBaz3p8cAeETSVtM9Spooq7xxzx%2Bt8lT4aloRKOsIgoufZoX5GmZiPZSEh06ITg8OMNaxosQGOqUBRBKL2Q%2BQe1B2WVmB%2BxGnNmycoYGCD%2FJmsDWpqr5uONJinsfQRgT1YWmMBleSGbQ5FiDjS2wRFcIhP7BJj2b9VLhsHEhzQSq473%2FewuJpBB%2FWH7ZUMP97muWRr8Cet6QhPFQcdgDgsFxlgfUxodqcmgdfUXxIqZF3Y%2BBLv9PCrRCcpncE2HCc%2Bx12RHtSIdPEN0YXQqj7dYcMoVd0zI50wCWwKklI&X-Amz-Signature=f957331826f1f3ea5bfe1d5c96a8140182c10640f8786e6be274b0ec4634d471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
