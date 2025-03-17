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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEHH4LI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoKa9r11EJW0Im1q0S5S4YCDtHkgbr%2BiV5heR57lXKOQIhALyK35Xt%2BPHgViusFdsKl%2BN9Drc69GpnWKuXtw0GLm5%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgzAoZV%2Fni8fnfEJ5uMq3ANM5C8udNo%2Fzm6hjuwTXWjQmBqZpKnyY3HsgNLPQGGjEw4yP2EpJjHnifqppTCxPjvkJXX25psdHdTkcAaXRumZlruL4BIgjc59A51k6nelCB%2ByXHrI8TZz33CFnLDHcgSMaAMltq81SBQ0R55EMB3%2FnR9SCQSI%2BPCmMaX7Z8rJvy80JwA4ribV2pGd%2FxvdUEQJjoFDUY7wytVsIz75d84qh5X7hU%2BGnT6VhFEmL6iZ5YCyiGGxFYht05xuREGDhgvmYswFGVzE2bOYeqj4mei5AM2PF5GqwSC5l2kcKt3g1Axkk6RN5ffgsUi9%2FLa8PPplQyIU%2FiUUKs5PQY%2BBRUda%2FTi7sNE3c7f3vW7sjv3luB61w6nsgHkJKpvFvAZ3uVDHoCEmeKAsvspbT%2FpuKUOAITJCFsVLSuFySkNTA%2Fb5GKesYnLhrXpVwdPaKYFzVh81FfrQzVUvQt9X%2Fn1ZBaidmM49HyUkXMyTpAZmWvRnRJ55GaLwiuWYjIy2giVR5jsoevTbP0RtCzhuYfHqyZ2f3LsBN%2FZ8IGg5untqBHmsaZs%2BZiPFVfcmXOSqnsM9vEXG4csaWYLbr00Jo4e9SOUZCjC55e0ttiQ1MFVsv1PU8cMwSyvEAfkSr1%2BcHTC1q%2BC%2BBjqkAerhmAawbrneRdeXkeLPTRk8byDldZ5fOQqoWDmdtgi7UdJ21uf8B%2FPCE%2FdnGBIb9V1rFJPW0yx%2FfM8WGdano7BJyvgPCpmtzhe%2BqtVf5UtWZZYxFWnIH%2FfJkhGBMqsjH%2FzzVBPIioIT%2BMqaf0318GxS8P4SBiDoRZDRYbfE8QOxyEfuqqNayDD1hSxahoCq%2BN0PqtuFmNUGWsGBRvg9y4GLoc%2FL&X-Amz-Signature=33d3778fa12ce6d2a968e3e6129d364d5b349ab1070a21fb828c8dae6cd6101b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEHH4LI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoKa9r11EJW0Im1q0S5S4YCDtHkgbr%2BiV5heR57lXKOQIhALyK35Xt%2BPHgViusFdsKl%2BN9Drc69GpnWKuXtw0GLm5%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgzAoZV%2Fni8fnfEJ5uMq3ANM5C8udNo%2Fzm6hjuwTXWjQmBqZpKnyY3HsgNLPQGGjEw4yP2EpJjHnifqppTCxPjvkJXX25psdHdTkcAaXRumZlruL4BIgjc59A51k6nelCB%2ByXHrI8TZz33CFnLDHcgSMaAMltq81SBQ0R55EMB3%2FnR9SCQSI%2BPCmMaX7Z8rJvy80JwA4ribV2pGd%2FxvdUEQJjoFDUY7wytVsIz75d84qh5X7hU%2BGnT6VhFEmL6iZ5YCyiGGxFYht05xuREGDhgvmYswFGVzE2bOYeqj4mei5AM2PF5GqwSC5l2kcKt3g1Axkk6RN5ffgsUi9%2FLa8PPplQyIU%2FiUUKs5PQY%2BBRUda%2FTi7sNE3c7f3vW7sjv3luB61w6nsgHkJKpvFvAZ3uVDHoCEmeKAsvspbT%2FpuKUOAITJCFsVLSuFySkNTA%2Fb5GKesYnLhrXpVwdPaKYFzVh81FfrQzVUvQt9X%2Fn1ZBaidmM49HyUkXMyTpAZmWvRnRJ55GaLwiuWYjIy2giVR5jsoevTbP0RtCzhuYfHqyZ2f3LsBN%2FZ8IGg5untqBHmsaZs%2BZiPFVfcmXOSqnsM9vEXG4csaWYLbr00Jo4e9SOUZCjC55e0ttiQ1MFVsv1PU8cMwSyvEAfkSr1%2BcHTC1q%2BC%2BBjqkAerhmAawbrneRdeXkeLPTRk8byDldZ5fOQqoWDmdtgi7UdJ21uf8B%2FPCE%2FdnGBIb9V1rFJPW0yx%2FfM8WGdano7BJyvgPCpmtzhe%2BqtVf5UtWZZYxFWnIH%2FfJkhGBMqsjH%2FzzVBPIioIT%2BMqaf0318GxS8P4SBiDoRZDRYbfE8QOxyEfuqqNayDD1hSxahoCq%2BN0PqtuFmNUGWsGBRvg9y4GLoc%2FL&X-Amz-Signature=37f9427c161782ad2bf8be93f4e6a86829e5610f8fece1486c53520a55496d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEHH4LI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoKa9r11EJW0Im1q0S5S4YCDtHkgbr%2BiV5heR57lXKOQIhALyK35Xt%2BPHgViusFdsKl%2BN9Drc69GpnWKuXtw0GLm5%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgzAoZV%2Fni8fnfEJ5uMq3ANM5C8udNo%2Fzm6hjuwTXWjQmBqZpKnyY3HsgNLPQGGjEw4yP2EpJjHnifqppTCxPjvkJXX25psdHdTkcAaXRumZlruL4BIgjc59A51k6nelCB%2ByXHrI8TZz33CFnLDHcgSMaAMltq81SBQ0R55EMB3%2FnR9SCQSI%2BPCmMaX7Z8rJvy80JwA4ribV2pGd%2FxvdUEQJjoFDUY7wytVsIz75d84qh5X7hU%2BGnT6VhFEmL6iZ5YCyiGGxFYht05xuREGDhgvmYswFGVzE2bOYeqj4mei5AM2PF5GqwSC5l2kcKt3g1Axkk6RN5ffgsUi9%2FLa8PPplQyIU%2FiUUKs5PQY%2BBRUda%2FTi7sNE3c7f3vW7sjv3luB61w6nsgHkJKpvFvAZ3uVDHoCEmeKAsvspbT%2FpuKUOAITJCFsVLSuFySkNTA%2Fb5GKesYnLhrXpVwdPaKYFzVh81FfrQzVUvQt9X%2Fn1ZBaidmM49HyUkXMyTpAZmWvRnRJ55GaLwiuWYjIy2giVR5jsoevTbP0RtCzhuYfHqyZ2f3LsBN%2FZ8IGg5untqBHmsaZs%2BZiPFVfcmXOSqnsM9vEXG4csaWYLbr00Jo4e9SOUZCjC55e0ttiQ1MFVsv1PU8cMwSyvEAfkSr1%2BcHTC1q%2BC%2BBjqkAerhmAawbrneRdeXkeLPTRk8byDldZ5fOQqoWDmdtgi7UdJ21uf8B%2FPCE%2FdnGBIb9V1rFJPW0yx%2FfM8WGdano7BJyvgPCpmtzhe%2BqtVf5UtWZZYxFWnIH%2FfJkhGBMqsjH%2FzzVBPIioIT%2BMqaf0318GxS8P4SBiDoRZDRYbfE8QOxyEfuqqNayDD1hSxahoCq%2BN0PqtuFmNUGWsGBRvg9y4GLoc%2FL&X-Amz-Signature=bc93e5f17f3913a51b72d1cae8640233729bb1a2c13ab39b44aaf49dbe6c90d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
