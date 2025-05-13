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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKWAT3Y%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICi2N3LWvMR9qYMVlJJRmlM%2B4yiywN%2Fw0ICv6ktSpIdQAiBcfgwf18Bu2MNEyLvESaJ7ffSVni2u7ziKgYM9pCbr5iqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQs6CBlSZ7ECO5vUKtwD%2BEqv5ETfpqTGlY41OGAlEYK7%2FijFzTP7AEV8RbIDiwivgUbD00EYEsZ7nhrzRGgHDOGyZ2IyAwxwkP8dVVj%2FMv742060MQHWOcwGAo6CwaLlUt3RCRQlJoLZO2tCe1lueNUz22YWsARk70ft9h6txW10iBgCGuM5xkjOgNcPzOTq5IQGk1DUXTc6XEGXvGtxScXBbwk9fLEWQBfgnWwmkeLXfGRSiNp5QNofvsdLEIa862mvEwbizty9Bts6LhnnVUaogClGWSLRehR7Zj09zVSz7rU%2BJMuXS2cu74pvDUGPsH2wQgw74NwaNbGT15zQf8ufhGKxg5eMOdrOXngVzMDPJZbp7F0sciTXTKWA5DmGOZkRU8qY9f00xDUOa%2F09Rplvg6G1wwmc0yjXC64UAfsFZlji9gu1R85No7wbG5Mn%2FFXhWXWrzz5bs77Gt8afU%2BZoi%2BYuZntFHxd%2Bzk2fyoGf6zFEQaVU2ExOjpBu1OvNYGp38JFDOZuckMHRnibbKMhkXfv%2Btr8%2Fd%2B94D79%2FCZLtn0sZYQrqJpgJh%2BMA23bz36XkBSCs%2BUmpVJYWnN0T826IGqUNnfBqwbgimhztZQFhY4pOV56UenYRH8KksXaMd6Fguuwyam8P4VEw8YmMwQY6pgGg4X7ncrvqCwqn22RxAgNjSO9S5E2JDb6soVNA5z%2FitwBfLfpvh9mHWrZfBsO1mLiwWfkNmeHBjxXQC35MVj3JsWJ3FGZZRlBTMZutm3vD99sKyxxkFNHj%2F7qe6pqTjfKuXUG8RZFUg%2BEjskT1%2FvV5clvPjXhJunMW%2B2vYqHv0Ziz%2F%2FbS4CvQDSvN2UOCKBhMQngKBy%2FcOnXwK2PrzxUWLcI8LmXSL&X-Amz-Signature=928ffb26b312e55ddc900d66ce24ec45649b499b11f6378f7464a9a496840e32&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKWAT3Y%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICi2N3LWvMR9qYMVlJJRmlM%2B4yiywN%2Fw0ICv6ktSpIdQAiBcfgwf18Bu2MNEyLvESaJ7ffSVni2u7ziKgYM9pCbr5iqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQs6CBlSZ7ECO5vUKtwD%2BEqv5ETfpqTGlY41OGAlEYK7%2FijFzTP7AEV8RbIDiwivgUbD00EYEsZ7nhrzRGgHDOGyZ2IyAwxwkP8dVVj%2FMv742060MQHWOcwGAo6CwaLlUt3RCRQlJoLZO2tCe1lueNUz22YWsARk70ft9h6txW10iBgCGuM5xkjOgNcPzOTq5IQGk1DUXTc6XEGXvGtxScXBbwk9fLEWQBfgnWwmkeLXfGRSiNp5QNofvsdLEIa862mvEwbizty9Bts6LhnnVUaogClGWSLRehR7Zj09zVSz7rU%2BJMuXS2cu74pvDUGPsH2wQgw74NwaNbGT15zQf8ufhGKxg5eMOdrOXngVzMDPJZbp7F0sciTXTKWA5DmGOZkRU8qY9f00xDUOa%2F09Rplvg6G1wwmc0yjXC64UAfsFZlji9gu1R85No7wbG5Mn%2FFXhWXWrzz5bs77Gt8afU%2BZoi%2BYuZntFHxd%2Bzk2fyoGf6zFEQaVU2ExOjpBu1OvNYGp38JFDOZuckMHRnibbKMhkXfv%2Btr8%2Fd%2B94D79%2FCZLtn0sZYQrqJpgJh%2BMA23bz36XkBSCs%2BUmpVJYWnN0T826IGqUNnfBqwbgimhztZQFhY4pOV56UenYRH8KksXaMd6Fguuwyam8P4VEw8YmMwQY6pgGg4X7ncrvqCwqn22RxAgNjSO9S5E2JDb6soVNA5z%2FitwBfLfpvh9mHWrZfBsO1mLiwWfkNmeHBjxXQC35MVj3JsWJ3FGZZRlBTMZutm3vD99sKyxxkFNHj%2F7qe6pqTjfKuXUG8RZFUg%2BEjskT1%2FvV5clvPjXhJunMW%2B2vYqHv0Ziz%2F%2FbS4CvQDSvN2UOCKBhMQngKBy%2FcOnXwK2PrzxUWLcI8LmXSL&X-Amz-Signature=fffbd8e0a075115749c862487624ed43906aeb53b0a4c52a4907ee7e2a101837&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKWAT3Y%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICi2N3LWvMR9qYMVlJJRmlM%2B4yiywN%2Fw0ICv6ktSpIdQAiBcfgwf18Bu2MNEyLvESaJ7ffSVni2u7ziKgYM9pCbr5iqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQs6CBlSZ7ECO5vUKtwD%2BEqv5ETfpqTGlY41OGAlEYK7%2FijFzTP7AEV8RbIDiwivgUbD00EYEsZ7nhrzRGgHDOGyZ2IyAwxwkP8dVVj%2FMv742060MQHWOcwGAo6CwaLlUt3RCRQlJoLZO2tCe1lueNUz22YWsARk70ft9h6txW10iBgCGuM5xkjOgNcPzOTq5IQGk1DUXTc6XEGXvGtxScXBbwk9fLEWQBfgnWwmkeLXfGRSiNp5QNofvsdLEIa862mvEwbizty9Bts6LhnnVUaogClGWSLRehR7Zj09zVSz7rU%2BJMuXS2cu74pvDUGPsH2wQgw74NwaNbGT15zQf8ufhGKxg5eMOdrOXngVzMDPJZbp7F0sciTXTKWA5DmGOZkRU8qY9f00xDUOa%2F09Rplvg6G1wwmc0yjXC64UAfsFZlji9gu1R85No7wbG5Mn%2FFXhWXWrzz5bs77Gt8afU%2BZoi%2BYuZntFHxd%2Bzk2fyoGf6zFEQaVU2ExOjpBu1OvNYGp38JFDOZuckMHRnibbKMhkXfv%2Btr8%2Fd%2B94D79%2FCZLtn0sZYQrqJpgJh%2BMA23bz36XkBSCs%2BUmpVJYWnN0T826IGqUNnfBqwbgimhztZQFhY4pOV56UenYRH8KksXaMd6Fguuwyam8P4VEw8YmMwQY6pgGg4X7ncrvqCwqn22RxAgNjSO9S5E2JDb6soVNA5z%2FitwBfLfpvh9mHWrZfBsO1mLiwWfkNmeHBjxXQC35MVj3JsWJ3FGZZRlBTMZutm3vD99sKyxxkFNHj%2F7qe6pqTjfKuXUG8RZFUg%2BEjskT1%2FvV5clvPjXhJunMW%2B2vYqHv0Ziz%2F%2FbS4CvQDSvN2UOCKBhMQngKBy%2FcOnXwK2PrzxUWLcI8LmXSL&X-Amz-Signature=6b253569e6ce89c79ea096e42876344aafba12f8ef59d6089dececb114ad350a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
