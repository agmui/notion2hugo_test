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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767KKGAO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDEM72T0tNzFUDHFg16azGriQIPMxgKbgVnvRGrrnluQQIgEpCtAZ%2BgNL54P0OSIXv69CqrZGHL15F1Q8FCfZghtU8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi%2BEY3uPiB%2BSUnmuyrcAw8YybNm1JTkistTxqp0G2eCoD22VrfOkBSRM5tyjd58J6N7D9E5mB8RGH0MqeqSm%2BDwYwyAdiLSS0GZNiteiOV04YrD9maLs%2BL%2FXZ4W4qEqT3v8pWJAYseCBH6yZ%2BexYoh0SAo3ZpnvwfGFbGev6z%2FqYoZ8XfTwb%2FCwHZUWFbXq3%2FsDjPEJcdi1ye8sRpCVDPOpIc%2BLReBN%2Fh2zS7XHYK%2BkfFi3pD0Vzw%2FAkyQr4RljLAzvW4%2FF%2BQcJn4%2Br%2FCetTTOZH%2FN3Zz%2F8oK03%2FAizHQhUjLZM%2FCG%2B0YgxVxATTxsf%2FVByrsQ69VAPvqFjDtfFsiXdVqJfYbOSPXYoulQuqU2DhLooGOLIw0JDFMB0L2tZZcufTq0eoKIBbE7YpfgiHIAXMVqUmM3xajq8w2RlsO8bUO55ZM%2F9O4hero6wnWPFFboehBkVeoz%2Fnri08nmqZKHcinrBKVcjpLJ%2BJ6P0jqKFnnnuG1Tdfo7IE2zTsJxTR6VvLSYE0X2Wl1ibdBoAF%2F5R2utUFgzBMh1CXR8fy4o4%2F9uefMeOXxMtm0lAvC6rEVC39Zc4%2BzRzOn1SW5SKz%2Fc1s%2B6a6YHVT0hOwSDMtohKOXTDUfQDJ6tq6Wbf6JnQ1cLFaB3heicU34F7MM7X9MEGOqUBssMTRTJtXHFXLQFzSr5zn%2FGPc7BxToMxe6Jnn82dh1tikgYm8Sf5sXNJvXJSUHxUJHMvEx7FBVn4g5IebNcK%2Fq4gsbpb4viRDYQTCkvlBGq7eTccvZ4UxDXB%2FByybEyWnuu3JXwJ8OXEquBMvRiMa4mtTZpIrTAs3fF8PGuFESVvSv9M08Sdh5bosZIVKCnT1ALk7zR3sBBkU7%2BwFEeMetNGHY2h&X-Amz-Signature=b66c2975239376993760145c8280590ef336bc30da8cf1139e9157d678ee9963&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767KKGAO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDEM72T0tNzFUDHFg16azGriQIPMxgKbgVnvRGrrnluQQIgEpCtAZ%2BgNL54P0OSIXv69CqrZGHL15F1Q8FCfZghtU8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi%2BEY3uPiB%2BSUnmuyrcAw8YybNm1JTkistTxqp0G2eCoD22VrfOkBSRM5tyjd58J6N7D9E5mB8RGH0MqeqSm%2BDwYwyAdiLSS0GZNiteiOV04YrD9maLs%2BL%2FXZ4W4qEqT3v8pWJAYseCBH6yZ%2BexYoh0SAo3ZpnvwfGFbGev6z%2FqYoZ8XfTwb%2FCwHZUWFbXq3%2FsDjPEJcdi1ye8sRpCVDPOpIc%2BLReBN%2Fh2zS7XHYK%2BkfFi3pD0Vzw%2FAkyQr4RljLAzvW4%2FF%2BQcJn4%2Br%2FCetTTOZH%2FN3Zz%2F8oK03%2FAizHQhUjLZM%2FCG%2B0YgxVxATTxsf%2FVByrsQ69VAPvqFjDtfFsiXdVqJfYbOSPXYoulQuqU2DhLooGOLIw0JDFMB0L2tZZcufTq0eoKIBbE7YpfgiHIAXMVqUmM3xajq8w2RlsO8bUO55ZM%2F9O4hero6wnWPFFboehBkVeoz%2Fnri08nmqZKHcinrBKVcjpLJ%2BJ6P0jqKFnnnuG1Tdfo7IE2zTsJxTR6VvLSYE0X2Wl1ibdBoAF%2F5R2utUFgzBMh1CXR8fy4o4%2F9uefMeOXxMtm0lAvC6rEVC39Zc4%2BzRzOn1SW5SKz%2Fc1s%2B6a6YHVT0hOwSDMtohKOXTDUfQDJ6tq6Wbf6JnQ1cLFaB3heicU34F7MM7X9MEGOqUBssMTRTJtXHFXLQFzSr5zn%2FGPc7BxToMxe6Jnn82dh1tikgYm8Sf5sXNJvXJSUHxUJHMvEx7FBVn4g5IebNcK%2Fq4gsbpb4viRDYQTCkvlBGq7eTccvZ4UxDXB%2FByybEyWnuu3JXwJ8OXEquBMvRiMa4mtTZpIrTAs3fF8PGuFESVvSv9M08Sdh5bosZIVKCnT1ALk7zR3sBBkU7%2BwFEeMetNGHY2h&X-Amz-Signature=2a293e0307abf742d8ee137c9a2e3fedb9c8cfa00fdbb61e2e4dececce9b137e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767KKGAO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDEM72T0tNzFUDHFg16azGriQIPMxgKbgVnvRGrrnluQQIgEpCtAZ%2BgNL54P0OSIXv69CqrZGHL15F1Q8FCfZghtU8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi%2BEY3uPiB%2BSUnmuyrcAw8YybNm1JTkistTxqp0G2eCoD22VrfOkBSRM5tyjd58J6N7D9E5mB8RGH0MqeqSm%2BDwYwyAdiLSS0GZNiteiOV04YrD9maLs%2BL%2FXZ4W4qEqT3v8pWJAYseCBH6yZ%2BexYoh0SAo3ZpnvwfGFbGev6z%2FqYoZ8XfTwb%2FCwHZUWFbXq3%2FsDjPEJcdi1ye8sRpCVDPOpIc%2BLReBN%2Fh2zS7XHYK%2BkfFi3pD0Vzw%2FAkyQr4RljLAzvW4%2FF%2BQcJn4%2Br%2FCetTTOZH%2FN3Zz%2F8oK03%2FAizHQhUjLZM%2FCG%2B0YgxVxATTxsf%2FVByrsQ69VAPvqFjDtfFsiXdVqJfYbOSPXYoulQuqU2DhLooGOLIw0JDFMB0L2tZZcufTq0eoKIBbE7YpfgiHIAXMVqUmM3xajq8w2RlsO8bUO55ZM%2F9O4hero6wnWPFFboehBkVeoz%2Fnri08nmqZKHcinrBKVcjpLJ%2BJ6P0jqKFnnnuG1Tdfo7IE2zTsJxTR6VvLSYE0X2Wl1ibdBoAF%2F5R2utUFgzBMh1CXR8fy4o4%2F9uefMeOXxMtm0lAvC6rEVC39Zc4%2BzRzOn1SW5SKz%2Fc1s%2B6a6YHVT0hOwSDMtohKOXTDUfQDJ6tq6Wbf6JnQ1cLFaB3heicU34F7MM7X9MEGOqUBssMTRTJtXHFXLQFzSr5zn%2FGPc7BxToMxe6Jnn82dh1tikgYm8Sf5sXNJvXJSUHxUJHMvEx7FBVn4g5IebNcK%2Fq4gsbpb4viRDYQTCkvlBGq7eTccvZ4UxDXB%2FByybEyWnuu3JXwJ8OXEquBMvRiMa4mtTZpIrTAs3fF8PGuFESVvSv9M08Sdh5bosZIVKCnT1ALk7zR3sBBkU7%2BwFEeMetNGHY2h&X-Amz-Signature=ca1fe035270bfe2dc67e37f920f24643cd8716c23290e479f5b0075a78c92b52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
