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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVLZFRI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXzHP%2FjsbeRBhOymAHG9DBtmgLbNXZSnCj1ycFUHGhjAiAJPZFN1I2RPEn83gVYFJ7G46ads%2FbI%2FKdQ7eNg7LMTOSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTva4ik%2FgsKeXpacKtwDLRbBiGS40GQfLfG9J7rFeDk2q8JuNh0FXwlLR2EUVkW5NhMPon9uNDyIqAhsZMTvTwrsOJQApAgYBUZajxse%2Bp0%2F6kl%2BkzyFW4jL0OjgiHUDRPTt6%2B8eWS1Fa75XBjQboEkoyhEOIiTWNfEkw8LBQ5CKlMPpTe%2B9FuZnPgYi5791qdXascBv6eQRXsXjkPKaM4xHya6G42g5dJGvcmSBtVk4M56Vo0HM%2BUHLdhDcFhxsch1Nq8ssX2p%2FsRgj%2FpsfrOLLAKSNaQ8roLI9t8Rt1Gd5SBLPLgAK6XQw6egvPcLws6ec56hkp9SH%2B8WIBHSSCire645BwF0X%2Fd4v55LbYDWaw4zgJFNRnM%2BkLhIPECzDvDpy5JIl5YylAdC%2B%2BHM1%2BqzNd1pJcaw3gwJqK8%2BzbcKCZooMTAxmoAIAo49LOsfoz8x9EB0kdhiqtgcCgphmPq6esoCgCpvgyB822EZn5R0Sytm3U8anQeWtWUZFhUvU0PP3kmzyHIg8TgESFmKoO5%2FIEya9pjabInvprhz%2BUwcWTwyZj%2BDRcXSW%2BsmQnTiBlAWJQmtBWOrcC6r4hIP8yDUKYgh9Xp4LZmRnvfeXtqGl75dUwLDZE%2FzBqIM1TjzDHkN5yIVQfUfsNeAw7JijxAY6pgFpl8sohLA8lZyZk8Yo3om38%2BJlwTglWlLCNK4mKHoyeXHR6NMW1%2F3vSAkVWfIr9BFKxX2vzCn1lF7Zbbv%2B8N5ujfyhNVZYd9QRYyFFwnMX2YR7VEz%2FqQaEmQS4GAVvm7AXWF%2FbltopVAKT83kKVhFwKEt8mMOnq1BeBUiUENBaCMxzWMR0kY0ovNqdivaZsGbgV7Wv2ypkXwItGgi%2FCOoEytxkQm5w&X-Amz-Signature=5a41ace1097bfc872190768de2c6dee6df9cd6b7292f2fb2322f4164037e8e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVLZFRI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXzHP%2FjsbeRBhOymAHG9DBtmgLbNXZSnCj1ycFUHGhjAiAJPZFN1I2RPEn83gVYFJ7G46ads%2FbI%2FKdQ7eNg7LMTOSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTva4ik%2FgsKeXpacKtwDLRbBiGS40GQfLfG9J7rFeDk2q8JuNh0FXwlLR2EUVkW5NhMPon9uNDyIqAhsZMTvTwrsOJQApAgYBUZajxse%2Bp0%2F6kl%2BkzyFW4jL0OjgiHUDRPTt6%2B8eWS1Fa75XBjQboEkoyhEOIiTWNfEkw8LBQ5CKlMPpTe%2B9FuZnPgYi5791qdXascBv6eQRXsXjkPKaM4xHya6G42g5dJGvcmSBtVk4M56Vo0HM%2BUHLdhDcFhxsch1Nq8ssX2p%2FsRgj%2FpsfrOLLAKSNaQ8roLI9t8Rt1Gd5SBLPLgAK6XQw6egvPcLws6ec56hkp9SH%2B8WIBHSSCire645BwF0X%2Fd4v55LbYDWaw4zgJFNRnM%2BkLhIPECzDvDpy5JIl5YylAdC%2B%2BHM1%2BqzNd1pJcaw3gwJqK8%2BzbcKCZooMTAxmoAIAo49LOsfoz8x9EB0kdhiqtgcCgphmPq6esoCgCpvgyB822EZn5R0Sytm3U8anQeWtWUZFhUvU0PP3kmzyHIg8TgESFmKoO5%2FIEya9pjabInvprhz%2BUwcWTwyZj%2BDRcXSW%2BsmQnTiBlAWJQmtBWOrcC6r4hIP8yDUKYgh9Xp4LZmRnvfeXtqGl75dUwLDZE%2FzBqIM1TjzDHkN5yIVQfUfsNeAw7JijxAY6pgFpl8sohLA8lZyZk8Yo3om38%2BJlwTglWlLCNK4mKHoyeXHR6NMW1%2F3vSAkVWfIr9BFKxX2vzCn1lF7Zbbv%2B8N5ujfyhNVZYd9QRYyFFwnMX2YR7VEz%2FqQaEmQS4GAVvm7AXWF%2FbltopVAKT83kKVhFwKEt8mMOnq1BeBUiUENBaCMxzWMR0kY0ovNqdivaZsGbgV7Wv2ypkXwItGgi%2FCOoEytxkQm5w&X-Amz-Signature=5e2eac54277c5eb58483b05f8787cee2c9370c1a198aec54b9c10cc4e649d8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVLZFRI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXzHP%2FjsbeRBhOymAHG9DBtmgLbNXZSnCj1ycFUHGhjAiAJPZFN1I2RPEn83gVYFJ7G46ads%2FbI%2FKdQ7eNg7LMTOSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTva4ik%2FgsKeXpacKtwDLRbBiGS40GQfLfG9J7rFeDk2q8JuNh0FXwlLR2EUVkW5NhMPon9uNDyIqAhsZMTvTwrsOJQApAgYBUZajxse%2Bp0%2F6kl%2BkzyFW4jL0OjgiHUDRPTt6%2B8eWS1Fa75XBjQboEkoyhEOIiTWNfEkw8LBQ5CKlMPpTe%2B9FuZnPgYi5791qdXascBv6eQRXsXjkPKaM4xHya6G42g5dJGvcmSBtVk4M56Vo0HM%2BUHLdhDcFhxsch1Nq8ssX2p%2FsRgj%2FpsfrOLLAKSNaQ8roLI9t8Rt1Gd5SBLPLgAK6XQw6egvPcLws6ec56hkp9SH%2B8WIBHSSCire645BwF0X%2Fd4v55LbYDWaw4zgJFNRnM%2BkLhIPECzDvDpy5JIl5YylAdC%2B%2BHM1%2BqzNd1pJcaw3gwJqK8%2BzbcKCZooMTAxmoAIAo49LOsfoz8x9EB0kdhiqtgcCgphmPq6esoCgCpvgyB822EZn5R0Sytm3U8anQeWtWUZFhUvU0PP3kmzyHIg8TgESFmKoO5%2FIEya9pjabInvprhz%2BUwcWTwyZj%2BDRcXSW%2BsmQnTiBlAWJQmtBWOrcC6r4hIP8yDUKYgh9Xp4LZmRnvfeXtqGl75dUwLDZE%2FzBqIM1TjzDHkN5yIVQfUfsNeAw7JijxAY6pgFpl8sohLA8lZyZk8Yo3om38%2BJlwTglWlLCNK4mKHoyeXHR6NMW1%2F3vSAkVWfIr9BFKxX2vzCn1lF7Zbbv%2B8N5ujfyhNVZYd9QRYyFFwnMX2YR7VEz%2FqQaEmQS4GAVvm7AXWF%2FbltopVAKT83kKVhFwKEt8mMOnq1BeBUiUENBaCMxzWMR0kY0ovNqdivaZsGbgV7Wv2ypkXwItGgi%2FCOoEytxkQm5w&X-Amz-Signature=9198e45fad4c9d65869f1098cd83274f2c93b76eaa119370fd1fd44f7b3f936f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
