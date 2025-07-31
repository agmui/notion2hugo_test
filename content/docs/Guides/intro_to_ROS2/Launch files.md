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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIFDFHS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXG%2F9tpAjdjUc8ynFBiop32U5aLuQo7qJC5HPvw951TAIgFHJRFLVyZZBTYowhdG0ji%2F3d0Coz6ytvKAi9ixnrnWMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxSGwhFJF3H1ODPWSrcA6q%2BqTeYdBJ4LIRI9CkSBD6oFi2oD56gzTgv%2B%2F4GBLODWTQFxxsHEGdoMXaE2VsGUKtSlPhxUcOc3ygMNeluukwde3YEbIg%2FUzIzrifebWi%2BlKT85%2BPk%2BKhy5NT4nD4cA%2BYhHNHmGJHfofWuCCVD10bhFzRaS%2BXvWzfADhMnOZ7zUoIVi3h14eQjP4VK%2BJ0%2Ffq3XPvHLtfYWZMAWWOjISOke27rKNFYWNKNSL3OUxKm1iVfZSmHRCuQnVk7LJGTk7P56dJMNCQTN%2BsqYgZhY5NcE%2BMd76oeWpXn%2F%2FaqEYBYYpSNL45fvTJWkl9ZoPCF5vKfXmqGSpLIRFAjI6bbTxkbLrA90urFH3zKyIsAxSJhAvW8d34O4qiWCFLSocM1d%2BrYe7S3v7Ye082U0gFXGNbtA%2F%2BB2U32CN%2BM7MF%2FJWhUXLjTDMjDEGacCTjcmtyxGlZN2Cy8Cr2kCsgt6ru12XW%2BsC7mUkedM6CicS9QQRWxK8KpQMGT4J9BqkWT8umMprLBY%2BlLnAClxbVw%2BVIS6g4lKrwKwQPb7P7Kuti0HOmSwqxuO4uYE%2BaUbWoZdQT1nYiejsoMMNfNwlwvuxZOwgTicoLj2U26UP5hqAIf44ifkYQytMxRwhTYft5afMPj1q8QGOqUBmlz12u91GUwshXSlR8OffUSN31sjBPJcuFBVaE7szUVPHxkfHUf%2BubzvcdlOCmeKW8e1gy4HQ8erSMUnW5nc3fvs9KrbJV2M7%2F1S%2FVBfhz7%2Bsr6RSopnWZBSMN7yUErjnoQIpVeJGeW6F9t8UeKONlSqWHXW8gvfcRUDKwC7fzl6fWvKsXHRTE938lSMQYMcjONZBBabiN31VADf%2F6khjRd2QPDb&X-Amz-Signature=03a9679d4617b835dcea30bc17dd33a824eac4114c4ff09f1e931cd45e362852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIFDFHS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXG%2F9tpAjdjUc8ynFBiop32U5aLuQo7qJC5HPvw951TAIgFHJRFLVyZZBTYowhdG0ji%2F3d0Coz6ytvKAi9ixnrnWMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxSGwhFJF3H1ODPWSrcA6q%2BqTeYdBJ4LIRI9CkSBD6oFi2oD56gzTgv%2B%2F4GBLODWTQFxxsHEGdoMXaE2VsGUKtSlPhxUcOc3ygMNeluukwde3YEbIg%2FUzIzrifebWi%2BlKT85%2BPk%2BKhy5NT4nD4cA%2BYhHNHmGJHfofWuCCVD10bhFzRaS%2BXvWzfADhMnOZ7zUoIVi3h14eQjP4VK%2BJ0%2Ffq3XPvHLtfYWZMAWWOjISOke27rKNFYWNKNSL3OUxKm1iVfZSmHRCuQnVk7LJGTk7P56dJMNCQTN%2BsqYgZhY5NcE%2BMd76oeWpXn%2F%2FaqEYBYYpSNL45fvTJWkl9ZoPCF5vKfXmqGSpLIRFAjI6bbTxkbLrA90urFH3zKyIsAxSJhAvW8d34O4qiWCFLSocM1d%2BrYe7S3v7Ye082U0gFXGNbtA%2F%2BB2U32CN%2BM7MF%2FJWhUXLjTDMjDEGacCTjcmtyxGlZN2Cy8Cr2kCsgt6ru12XW%2BsC7mUkedM6CicS9QQRWxK8KpQMGT4J9BqkWT8umMprLBY%2BlLnAClxbVw%2BVIS6g4lKrwKwQPb7P7Kuti0HOmSwqxuO4uYE%2BaUbWoZdQT1nYiejsoMMNfNwlwvuxZOwgTicoLj2U26UP5hqAIf44ifkYQytMxRwhTYft5afMPj1q8QGOqUBmlz12u91GUwshXSlR8OffUSN31sjBPJcuFBVaE7szUVPHxkfHUf%2BubzvcdlOCmeKW8e1gy4HQ8erSMUnW5nc3fvs9KrbJV2M7%2F1S%2FVBfhz7%2Bsr6RSopnWZBSMN7yUErjnoQIpVeJGeW6F9t8UeKONlSqWHXW8gvfcRUDKwC7fzl6fWvKsXHRTE938lSMQYMcjONZBBabiN31VADf%2F6khjRd2QPDb&X-Amz-Signature=b4bd6f440dd3253dac883d8f44935823060a31c65515996777b09b52de09c8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIFDFHS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXG%2F9tpAjdjUc8ynFBiop32U5aLuQo7qJC5HPvw951TAIgFHJRFLVyZZBTYowhdG0ji%2F3d0Coz6ytvKAi9ixnrnWMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxSGwhFJF3H1ODPWSrcA6q%2BqTeYdBJ4LIRI9CkSBD6oFi2oD56gzTgv%2B%2F4GBLODWTQFxxsHEGdoMXaE2VsGUKtSlPhxUcOc3ygMNeluukwde3YEbIg%2FUzIzrifebWi%2BlKT85%2BPk%2BKhy5NT4nD4cA%2BYhHNHmGJHfofWuCCVD10bhFzRaS%2BXvWzfADhMnOZ7zUoIVi3h14eQjP4VK%2BJ0%2Ffq3XPvHLtfYWZMAWWOjISOke27rKNFYWNKNSL3OUxKm1iVfZSmHRCuQnVk7LJGTk7P56dJMNCQTN%2BsqYgZhY5NcE%2BMd76oeWpXn%2F%2FaqEYBYYpSNL45fvTJWkl9ZoPCF5vKfXmqGSpLIRFAjI6bbTxkbLrA90urFH3zKyIsAxSJhAvW8d34O4qiWCFLSocM1d%2BrYe7S3v7Ye082U0gFXGNbtA%2F%2BB2U32CN%2BM7MF%2FJWhUXLjTDMjDEGacCTjcmtyxGlZN2Cy8Cr2kCsgt6ru12XW%2BsC7mUkedM6CicS9QQRWxK8KpQMGT4J9BqkWT8umMprLBY%2BlLnAClxbVw%2BVIS6g4lKrwKwQPb7P7Kuti0HOmSwqxuO4uYE%2BaUbWoZdQT1nYiejsoMMNfNwlwvuxZOwgTicoLj2U26UP5hqAIf44ifkYQytMxRwhTYft5afMPj1q8QGOqUBmlz12u91GUwshXSlR8OffUSN31sjBPJcuFBVaE7szUVPHxkfHUf%2BubzvcdlOCmeKW8e1gy4HQ8erSMUnW5nc3fvs9KrbJV2M7%2F1S%2FVBfhz7%2Bsr6RSopnWZBSMN7yUErjnoQIpVeJGeW6F9t8UeKONlSqWHXW8gvfcRUDKwC7fzl6fWvKsXHRTE938lSMQYMcjONZBBabiN31VADf%2F6khjRd2QPDb&X-Amz-Signature=759d10765015bf49a241c079ea6a9adf7ba9dbeba5c7769f7dade18f5f000eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
