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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPU3COF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHjWygJmdw06H2TtVCmdJkMrZcptbrm8qGgFW86JujwFAiB9M%2FEl8k3tix%2BzfiBKXN0Gl8Ghd5G%2Fa3MboL105yAZryqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Bw5ldQjlUawQcaXKtwDLlq1Ruh4cQRfwrtcNsC%2FpT%2FtKXF3rqzm3VvWSA0XmAjrpy6jnRLNLjnkBRoAZ3D2Mg4tOu5lXMs%2BmIMeDH2S%2FaAfbTJ%2FHWwfBJbOAdY1dPH48B1gyQE7ltRSssJYk749KXxaq%2BgLfCorn5FPruyGeR2azWc7uBMBJjbH07YfbBX5Us7HKQ6AWg8zEVK1%2Fuj3u8Eb11hR7dKjO9SFWZPu9BENHWCvTE%2FqgZUgrj8KYNX%2BMmupanFQXxWmFYrEY6DumCWBPgtnvM4Zu98JEOnTj4NQQKlHuPqdIGvS%2BtCRzMeBQznw6d0FEYDrwmsxDLqqjjqxGnk7Z2GSXHeEKoZcWQRkpc8PlU9fXQ5fpLr%2FXkfo0fNOZbE%2FwOHDYxRHsIg%2BD92f2VRYARZvangPDzbqczcyexvItVFubhGJbmFyvPj%2FiFGC3lB9iZihWIaSIilmklKtZMiQhirHLVkmjsVMvwARbQ9Ngsyzm0dbYJpCR9j3FQx24aCpzH70j2mRqUS1snvXZTqV5WB08f2tUAAj48YjCoUQnNmUwxWpcvmwhVQ%2FijNgVsRY4hAFR3WFI%2BySEPRM3Uxa8E%2FJpZGJZQj1q0BMRe%2FE24d7WN72mJL9MHlMWpKNCnXNufcrj5AwrtWfwAY6pgE%2BS%2BVuYzBs1X0h0sMnSSSii0lCSeIXceH39tKIBuBMZV6br9argYm7SXdxceh3qaQy8QVbFev%2BSkW92LcC3LMVIFpOxtPxM%2F4xIB0Cw7oY3%2BOD%2F7FcTST0X2NtvVKhhpIEHISXErBOsdH5juSRL%2BRu4bNUGQgHYVYYthiOhm9IsgiU8vQ6zDFC6wCgfgcivlbt7co5MPFwhOC7LTK%2BYsuUz1R84FdB&X-Amz-Signature=b4eef292d8fef06cd43d1b746feb24056649e6ab3bda391dab371a3c5b3a9cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPU3COF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHjWygJmdw06H2TtVCmdJkMrZcptbrm8qGgFW86JujwFAiB9M%2FEl8k3tix%2BzfiBKXN0Gl8Ghd5G%2Fa3MboL105yAZryqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Bw5ldQjlUawQcaXKtwDLlq1Ruh4cQRfwrtcNsC%2FpT%2FtKXF3rqzm3VvWSA0XmAjrpy6jnRLNLjnkBRoAZ3D2Mg4tOu5lXMs%2BmIMeDH2S%2FaAfbTJ%2FHWwfBJbOAdY1dPH48B1gyQE7ltRSssJYk749KXxaq%2BgLfCorn5FPruyGeR2azWc7uBMBJjbH07YfbBX5Us7HKQ6AWg8zEVK1%2Fuj3u8Eb11hR7dKjO9SFWZPu9BENHWCvTE%2FqgZUgrj8KYNX%2BMmupanFQXxWmFYrEY6DumCWBPgtnvM4Zu98JEOnTj4NQQKlHuPqdIGvS%2BtCRzMeBQznw6d0FEYDrwmsxDLqqjjqxGnk7Z2GSXHeEKoZcWQRkpc8PlU9fXQ5fpLr%2FXkfo0fNOZbE%2FwOHDYxRHsIg%2BD92f2VRYARZvangPDzbqczcyexvItVFubhGJbmFyvPj%2FiFGC3lB9iZihWIaSIilmklKtZMiQhirHLVkmjsVMvwARbQ9Ngsyzm0dbYJpCR9j3FQx24aCpzH70j2mRqUS1snvXZTqV5WB08f2tUAAj48YjCoUQnNmUwxWpcvmwhVQ%2FijNgVsRY4hAFR3WFI%2BySEPRM3Uxa8E%2FJpZGJZQj1q0BMRe%2FE24d7WN72mJL9MHlMWpKNCnXNufcrj5AwrtWfwAY6pgE%2BS%2BVuYzBs1X0h0sMnSSSii0lCSeIXceH39tKIBuBMZV6br9argYm7SXdxceh3qaQy8QVbFev%2BSkW92LcC3LMVIFpOxtPxM%2F4xIB0Cw7oY3%2BOD%2F7FcTST0X2NtvVKhhpIEHISXErBOsdH5juSRL%2BRu4bNUGQgHYVYYthiOhm9IsgiU8vQ6zDFC6wCgfgcivlbt7co5MPFwhOC7LTK%2BYsuUz1R84FdB&X-Amz-Signature=716cb0b25f611be18c8e7b839be7e340b40acff65cd33058d2da0a1fbcece11a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPU3COF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHjWygJmdw06H2TtVCmdJkMrZcptbrm8qGgFW86JujwFAiB9M%2FEl8k3tix%2BzfiBKXN0Gl8Ghd5G%2Fa3MboL105yAZryqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Bw5ldQjlUawQcaXKtwDLlq1Ruh4cQRfwrtcNsC%2FpT%2FtKXF3rqzm3VvWSA0XmAjrpy6jnRLNLjnkBRoAZ3D2Mg4tOu5lXMs%2BmIMeDH2S%2FaAfbTJ%2FHWwfBJbOAdY1dPH48B1gyQE7ltRSssJYk749KXxaq%2BgLfCorn5FPruyGeR2azWc7uBMBJjbH07YfbBX5Us7HKQ6AWg8zEVK1%2Fuj3u8Eb11hR7dKjO9SFWZPu9BENHWCvTE%2FqgZUgrj8KYNX%2BMmupanFQXxWmFYrEY6DumCWBPgtnvM4Zu98JEOnTj4NQQKlHuPqdIGvS%2BtCRzMeBQznw6d0FEYDrwmsxDLqqjjqxGnk7Z2GSXHeEKoZcWQRkpc8PlU9fXQ5fpLr%2FXkfo0fNOZbE%2FwOHDYxRHsIg%2BD92f2VRYARZvangPDzbqczcyexvItVFubhGJbmFyvPj%2FiFGC3lB9iZihWIaSIilmklKtZMiQhirHLVkmjsVMvwARbQ9Ngsyzm0dbYJpCR9j3FQx24aCpzH70j2mRqUS1snvXZTqV5WB08f2tUAAj48YjCoUQnNmUwxWpcvmwhVQ%2FijNgVsRY4hAFR3WFI%2BySEPRM3Uxa8E%2FJpZGJZQj1q0BMRe%2FE24d7WN72mJL9MHlMWpKNCnXNufcrj5AwrtWfwAY6pgE%2BS%2BVuYzBs1X0h0sMnSSSii0lCSeIXceH39tKIBuBMZV6br9argYm7SXdxceh3qaQy8QVbFev%2BSkW92LcC3LMVIFpOxtPxM%2F4xIB0Cw7oY3%2BOD%2F7FcTST0X2NtvVKhhpIEHISXErBOsdH5juSRL%2BRu4bNUGQgHYVYYthiOhm9IsgiU8vQ6zDFC6wCgfgcivlbt7co5MPFwhOC7LTK%2BYsuUz1R84FdB&X-Amz-Signature=91a41305f035164529ac27078c9c45ee2c001fc8d60d786a40fd1afc014f6c23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
