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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUVVJPI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2BAv4dFgolgdTywbsHW8SufQJPhrK9cESSjqUK8fRLAIgR5czs%2FXAI7VC0Y432F6Cii5aI1ZEpJNxLNZ3xg9kfbMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIuR44ztwOTXJzG0OyrcAw6347xj3C%2FhYbeGp2Z8sechWi%2FJxsyJtbH5fzE%2BDvcXzH55jbQhdjhgFM6k%2FltMYMOZnvqof%2BxeWmC4fbM7yKArbvkdrPi8nQuPQ4qZ588KnrzNjRH5eBdZ3hKOlhfpKdCvfWJR5XNPIef6%2BvcLUaTYGwpsUOSvGccAk0cwv3CszabZ1QtuD5domDxKjJOa5GMjJv2KFAnijLavgC7PnYK9rjCeirlaV3Cyj9QGEQzvOBn9uGbrpbV2ycTsLwcw4t1%2FMDNJPl%2F2DQjz9a4m8A84BJzWD2uJQSjgLArrIYHNnURBcGt95WPuoD%2BN59yyCLIZUcmDt8M8circbFhHBEOagDcW9Ds0UpGiCBacTA8aRb4yEAzrvEWqGk18sXdio0We3438Bi1GzbziVuptEeDf%2B1%2F7PpSmDW3lMtjjGAajGecBAfvNKOtpuaownVfQZN2957mq48WKgLSICGoU3T1%2BHYoDdoFssAVow%2BBVJgVKVo%2Bkitw9J33%2FId%2B6q%2BrzKqfXhgT%2FoNljUZ6zKLD%2B%2F%2FtLrKyN7MakGWLFY2niKSnGFyr4BdkjN685PKlCjviobeiqWfdkmbaRwmSD%2FnRNQgiA1%2FMTFN8tktYXcp2Dnz7NftXhKjq6MIMHRx8LMMqv9sQGOqUBcddUbTmUn8LcGtu%2BdOYdL6Ui%2BF%2BqCD%2BB73%2FCI06Xe0OslPWpWbQ5BiLmeEXSPV623r4on43B6To4YCfgQFzAvaEF19o907K%2FHYS7B2jNwNrHLpkMcs0nQ%2BCvuedgcuZArW7BInyj6sS3brXjgIM245l41AK%2FvUzwSsuQmcEzxTZqTWzEhOKf1BpNPQHD9fzqsNsVzt3jw5JaDszsWTdK6si0dctW&X-Amz-Signature=5c4559f566580fd660427f16a04e345a337bd50609a52cd5c6abdbfbaf416d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUVVJPI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2BAv4dFgolgdTywbsHW8SufQJPhrK9cESSjqUK8fRLAIgR5czs%2FXAI7VC0Y432F6Cii5aI1ZEpJNxLNZ3xg9kfbMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIuR44ztwOTXJzG0OyrcAw6347xj3C%2FhYbeGp2Z8sechWi%2FJxsyJtbH5fzE%2BDvcXzH55jbQhdjhgFM6k%2FltMYMOZnvqof%2BxeWmC4fbM7yKArbvkdrPi8nQuPQ4qZ588KnrzNjRH5eBdZ3hKOlhfpKdCvfWJR5XNPIef6%2BvcLUaTYGwpsUOSvGccAk0cwv3CszabZ1QtuD5domDxKjJOa5GMjJv2KFAnijLavgC7PnYK9rjCeirlaV3Cyj9QGEQzvOBn9uGbrpbV2ycTsLwcw4t1%2FMDNJPl%2F2DQjz9a4m8A84BJzWD2uJQSjgLArrIYHNnURBcGt95WPuoD%2BN59yyCLIZUcmDt8M8circbFhHBEOagDcW9Ds0UpGiCBacTA8aRb4yEAzrvEWqGk18sXdio0We3438Bi1GzbziVuptEeDf%2B1%2F7PpSmDW3lMtjjGAajGecBAfvNKOtpuaownVfQZN2957mq48WKgLSICGoU3T1%2BHYoDdoFssAVow%2BBVJgVKVo%2Bkitw9J33%2FId%2B6q%2BrzKqfXhgT%2FoNljUZ6zKLD%2B%2F%2FtLrKyN7MakGWLFY2niKSnGFyr4BdkjN685PKlCjviobeiqWfdkmbaRwmSD%2FnRNQgiA1%2FMTFN8tktYXcp2Dnz7NftXhKjq6MIMHRx8LMMqv9sQGOqUBcddUbTmUn8LcGtu%2BdOYdL6Ui%2BF%2BqCD%2BB73%2FCI06Xe0OslPWpWbQ5BiLmeEXSPV623r4on43B6To4YCfgQFzAvaEF19o907K%2FHYS7B2jNwNrHLpkMcs0nQ%2BCvuedgcuZArW7BInyj6sS3brXjgIM245l41AK%2FvUzwSsuQmcEzxTZqTWzEhOKf1BpNPQHD9fzqsNsVzt3jw5JaDszsWTdK6si0dctW&X-Amz-Signature=6ad17d93cf1fa7541181a4a943381a9cc5a8ff369230169f6fe0e6b1cceac05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUVVJPI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2BAv4dFgolgdTywbsHW8SufQJPhrK9cESSjqUK8fRLAIgR5czs%2FXAI7VC0Y432F6Cii5aI1ZEpJNxLNZ3xg9kfbMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIuR44ztwOTXJzG0OyrcAw6347xj3C%2FhYbeGp2Z8sechWi%2FJxsyJtbH5fzE%2BDvcXzH55jbQhdjhgFM6k%2FltMYMOZnvqof%2BxeWmC4fbM7yKArbvkdrPi8nQuPQ4qZ588KnrzNjRH5eBdZ3hKOlhfpKdCvfWJR5XNPIef6%2BvcLUaTYGwpsUOSvGccAk0cwv3CszabZ1QtuD5domDxKjJOa5GMjJv2KFAnijLavgC7PnYK9rjCeirlaV3Cyj9QGEQzvOBn9uGbrpbV2ycTsLwcw4t1%2FMDNJPl%2F2DQjz9a4m8A84BJzWD2uJQSjgLArrIYHNnURBcGt95WPuoD%2BN59yyCLIZUcmDt8M8circbFhHBEOagDcW9Ds0UpGiCBacTA8aRb4yEAzrvEWqGk18sXdio0We3438Bi1GzbziVuptEeDf%2B1%2F7PpSmDW3lMtjjGAajGecBAfvNKOtpuaownVfQZN2957mq48WKgLSICGoU3T1%2BHYoDdoFssAVow%2BBVJgVKVo%2Bkitw9J33%2FId%2B6q%2BrzKqfXhgT%2FoNljUZ6zKLD%2B%2F%2FtLrKyN7MakGWLFY2niKSnGFyr4BdkjN685PKlCjviobeiqWfdkmbaRwmSD%2FnRNQgiA1%2FMTFN8tktYXcp2Dnz7NftXhKjq6MIMHRx8LMMqv9sQGOqUBcddUbTmUn8LcGtu%2BdOYdL6Ui%2BF%2BqCD%2BB73%2FCI06Xe0OslPWpWbQ5BiLmeEXSPV623r4on43B6To4YCfgQFzAvaEF19o907K%2FHYS7B2jNwNrHLpkMcs0nQ%2BCvuedgcuZArW7BInyj6sS3brXjgIM245l41AK%2FvUzwSsuQmcEzxTZqTWzEhOKf1BpNPQHD9fzqsNsVzt3jw5JaDszsWTdK6si0dctW&X-Amz-Signature=e00648be0199c93210e7acf4ad18fe6f56f7e8e1001861449378c3a97e0dce53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
