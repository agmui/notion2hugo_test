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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLISPIQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC8MXi6fImyoLUbtj06KWmx3NUdHMIOV3oL7XOHbwC8bQIhAKdQemdRv7Dik%2BeAeWsN5kZ1t3oOXSfYw7FVSAs4WWY8Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx6qnB2JeaUEDrws1kq3APgJWGxbm95jP6Ca4naPGCh%2BwrAQ00KL8YXR1%2FChdHqh0UctvRUIVGKI9Phw95JmzPCNqvReWhhZ0z63Iksu2r3YRSqdXoJmWJ5mdaSLBRpwGryHjE0xzjME2W9%2Bqraq05%2BoAH36t20n%2FxZ%2BbcawK3VXeCzeIL%2Fjq%2FccGQQ0PL5H24N05eWQAGBAI0AE3%2FfzsblOAZHhudlaBF0roO9m7%2F5f7XMf05qaT0WyXlvrfERBOeq5lWA4%2BE3OHaxwfeKpqPx3u33ieewaSYUeXSt5PAjZBwJbhMW1O1FaX2vst%2Flg5%2BpAYYyxW9qa5oA29WRHrKHmCvg1XBiNmjH%2Bdert2HLNQmaYyRYfV3%2Bv%2BUizIADbhuKUHRHp9A38y3RrMnk%2F%2FaXuHhoc6f3SmuH60u59exzQXSO6UnV38yd8nRTh5ee2oOOZRkpLclPvaj90uFxEuSN45%2FaaHmKex3DC4FucGNVlEy6ogLiIM8dRvS1j9I7dPvsZHr6kBcsuoM57wSIQEZdxnBYqwzvJNbVQV1Z8iOKOU3I%2B3bhn09rSHnnquvLb9bTTJLMnlyLgLzfcFOf4AgMpwWadj%2ByOP5tQlOhAJ6SSkHMJZ37ACwfpKGkacvNjCrWa%2BRjrwYLFbNfiTCy5prDBjqkAR8TXsn%2BC7Uggerb6Q41RKrzGGAnsKAq0%2FBubE3rJjZv%2F10J68wARm743SfTBrvWjTlr42iVKJP4Kld5O7OpAE7dN%2BvWXBZF7Iw6qTOduOoJXGwPP9XS8AcOBP8m4NFf82zLsZ0x4SKikSdGK6huDXee1n8uEOS%2F3sYLpXKXmf%2FQsfNaOaDLltipGIC9LXQrFc7%2FkYbCRps%2BtGwQ9pbr30muERhE&X-Amz-Signature=3bcf159e54ef5554601e61c9231cbd2c48e495335c28bf07fd1c4a7d52e33111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLISPIQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC8MXi6fImyoLUbtj06KWmx3NUdHMIOV3oL7XOHbwC8bQIhAKdQemdRv7Dik%2BeAeWsN5kZ1t3oOXSfYw7FVSAs4WWY8Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx6qnB2JeaUEDrws1kq3APgJWGxbm95jP6Ca4naPGCh%2BwrAQ00KL8YXR1%2FChdHqh0UctvRUIVGKI9Phw95JmzPCNqvReWhhZ0z63Iksu2r3YRSqdXoJmWJ5mdaSLBRpwGryHjE0xzjME2W9%2Bqraq05%2BoAH36t20n%2FxZ%2BbcawK3VXeCzeIL%2Fjq%2FccGQQ0PL5H24N05eWQAGBAI0AE3%2FfzsblOAZHhudlaBF0roO9m7%2F5f7XMf05qaT0WyXlvrfERBOeq5lWA4%2BE3OHaxwfeKpqPx3u33ieewaSYUeXSt5PAjZBwJbhMW1O1FaX2vst%2Flg5%2BpAYYyxW9qa5oA29WRHrKHmCvg1XBiNmjH%2Bdert2HLNQmaYyRYfV3%2Bv%2BUizIADbhuKUHRHp9A38y3RrMnk%2F%2FaXuHhoc6f3SmuH60u59exzQXSO6UnV38yd8nRTh5ee2oOOZRkpLclPvaj90uFxEuSN45%2FaaHmKex3DC4FucGNVlEy6ogLiIM8dRvS1j9I7dPvsZHr6kBcsuoM57wSIQEZdxnBYqwzvJNbVQV1Z8iOKOU3I%2B3bhn09rSHnnquvLb9bTTJLMnlyLgLzfcFOf4AgMpwWadj%2ByOP5tQlOhAJ6SSkHMJZ37ACwfpKGkacvNjCrWa%2BRjrwYLFbNfiTCy5prDBjqkAR8TXsn%2BC7Uggerb6Q41RKrzGGAnsKAq0%2FBubE3rJjZv%2F10J68wARm743SfTBrvWjTlr42iVKJP4Kld5O7OpAE7dN%2BvWXBZF7Iw6qTOduOoJXGwPP9XS8AcOBP8m4NFf82zLsZ0x4SKikSdGK6huDXee1n8uEOS%2F3sYLpXKXmf%2FQsfNaOaDLltipGIC9LXQrFc7%2FkYbCRps%2BtGwQ9pbr30muERhE&X-Amz-Signature=4fdbed33aad6b46992f4286acf0638bd709a59457a322290e0199a746539d678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLISPIQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC8MXi6fImyoLUbtj06KWmx3NUdHMIOV3oL7XOHbwC8bQIhAKdQemdRv7Dik%2BeAeWsN5kZ1t3oOXSfYw7FVSAs4WWY8Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx6qnB2JeaUEDrws1kq3APgJWGxbm95jP6Ca4naPGCh%2BwrAQ00KL8YXR1%2FChdHqh0UctvRUIVGKI9Phw95JmzPCNqvReWhhZ0z63Iksu2r3YRSqdXoJmWJ5mdaSLBRpwGryHjE0xzjME2W9%2Bqraq05%2BoAH36t20n%2FxZ%2BbcawK3VXeCzeIL%2Fjq%2FccGQQ0PL5H24N05eWQAGBAI0AE3%2FfzsblOAZHhudlaBF0roO9m7%2F5f7XMf05qaT0WyXlvrfERBOeq5lWA4%2BE3OHaxwfeKpqPx3u33ieewaSYUeXSt5PAjZBwJbhMW1O1FaX2vst%2Flg5%2BpAYYyxW9qa5oA29WRHrKHmCvg1XBiNmjH%2Bdert2HLNQmaYyRYfV3%2Bv%2BUizIADbhuKUHRHp9A38y3RrMnk%2F%2FaXuHhoc6f3SmuH60u59exzQXSO6UnV38yd8nRTh5ee2oOOZRkpLclPvaj90uFxEuSN45%2FaaHmKex3DC4FucGNVlEy6ogLiIM8dRvS1j9I7dPvsZHr6kBcsuoM57wSIQEZdxnBYqwzvJNbVQV1Z8iOKOU3I%2B3bhn09rSHnnquvLb9bTTJLMnlyLgLzfcFOf4AgMpwWadj%2ByOP5tQlOhAJ6SSkHMJZ37ACwfpKGkacvNjCrWa%2BRjrwYLFbNfiTCy5prDBjqkAR8TXsn%2BC7Uggerb6Q41RKrzGGAnsKAq0%2FBubE3rJjZv%2F10J68wARm743SfTBrvWjTlr42iVKJP4Kld5O7OpAE7dN%2BvWXBZF7Iw6qTOduOoJXGwPP9XS8AcOBP8m4NFf82zLsZ0x4SKikSdGK6huDXee1n8uEOS%2F3sYLpXKXmf%2FQsfNaOaDLltipGIC9LXQrFc7%2FkYbCRps%2BtGwQ9pbr30muERhE&X-Amz-Signature=55a9424b2600af066a5fc73761ceed035423ce8f57d1e6a2e92ac4d83277f329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
