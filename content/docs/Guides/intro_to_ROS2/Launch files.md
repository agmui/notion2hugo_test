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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7U263JT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB95JfXWfohvVounkLgVBW29FbiZP1JG6VOo8%2FZDK6mAiBFF%2FLcGQCuKK3a2uHKK3%2FOEMKkHpjWT6fng4PTxHJoTyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMiSVZ4kmxLSVHg1d2KtwDHUMBol%2FIqh%2Ff2vNwMkIE%2BbcbAKbcdYc1oruKgKjrjP1%2B1JtkFA9ewpf96%2FHKiFI6coVt72efIGR%2FR%2BTAv%2FLDscHW%2FVqo6BKVyP5OzBGtlE%2FDwq1rAYd2HheD8jM7YYt59zkVbFOXx8YQ8L1IFaGt4e7ocaxlZ%2B40z9zLQRAtm1P9qGeGDAFuJI2Dp3jexaQY0XEt%2F1D04hoP%2BNqcqq6ixEfpG%2BSnfWK5N4RAQYFHtHFaQhXoncd26Ed1ymf7kBUOkKuAv6NDzRy2F6%2Fa2l9WUaArMm%2BIBZt8E0iAHJD3mHEhjb7RRqgTBOPQ9pPmpykKLvEy9PQ7G60%2BRJA%2BBpBIiMtdD0dMDmCqSvcK0tkufuEg3AAsBt0xy%2Fdbi5d7nDkAHQmu7ghm2RO5enMdFPcFbfUPCccz0yQDNhP%2Bn%2B%2BQCW5RQbpUyBKo696nG3PZZBrInQk%2B33Pex6%2BrrJqI6mWnnv4AdkEWuJfuY2zi6UxMLMvy%2Ft7GOnqGfLGnyAT9VkCq0%2Bgb30VphWU8Od2On3Li83iO7WignsbxckHdVj5X3CwX%2BCZVmSvlNZQ3Kgmq3VRaUE7g3uhPAslt2yzCWTWufRNdwe4VqRIgDszUAAcVD%2Fx8CniL0r%2BcB7R%2Bv6Qwt%2B2SvwY6pgHcTkpjaAPVHSILz1%2BK0YAAmGcw4c1jcfAqmjQ%2FGIFAYwmxLJTc8oRqsZTZaf7cVKnK8XUp%2FGc6gfofvcDQfBjPRP5oDU%2Bw%2B8%2FJAqtW9TBqa1D7h3GL1WIh%2BLc23uAVMOI85D%2FbM2dLG3%2BdCy%2Faxf0dEuUO3LNt%2BaF5iDr%2Fyo%2F200d6HCMxuWiRc9%2Fayv3wfDevr0BynJKA8tEhh3R7moV4qBSq44Du&X-Amz-Signature=8d4a71869b84678124dead8fc9b0848bfb3bb73fc3c826514830aaf14feb393f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7U263JT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB95JfXWfohvVounkLgVBW29FbiZP1JG6VOo8%2FZDK6mAiBFF%2FLcGQCuKK3a2uHKK3%2FOEMKkHpjWT6fng4PTxHJoTyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMiSVZ4kmxLSVHg1d2KtwDHUMBol%2FIqh%2Ff2vNwMkIE%2BbcbAKbcdYc1oruKgKjrjP1%2B1JtkFA9ewpf96%2FHKiFI6coVt72efIGR%2FR%2BTAv%2FLDscHW%2FVqo6BKVyP5OzBGtlE%2FDwq1rAYd2HheD8jM7YYt59zkVbFOXx8YQ8L1IFaGt4e7ocaxlZ%2B40z9zLQRAtm1P9qGeGDAFuJI2Dp3jexaQY0XEt%2F1D04hoP%2BNqcqq6ixEfpG%2BSnfWK5N4RAQYFHtHFaQhXoncd26Ed1ymf7kBUOkKuAv6NDzRy2F6%2Fa2l9WUaArMm%2BIBZt8E0iAHJD3mHEhjb7RRqgTBOPQ9pPmpykKLvEy9PQ7G60%2BRJA%2BBpBIiMtdD0dMDmCqSvcK0tkufuEg3AAsBt0xy%2Fdbi5d7nDkAHQmu7ghm2RO5enMdFPcFbfUPCccz0yQDNhP%2Bn%2B%2BQCW5RQbpUyBKo696nG3PZZBrInQk%2B33Pex6%2BrrJqI6mWnnv4AdkEWuJfuY2zi6UxMLMvy%2Ft7GOnqGfLGnyAT9VkCq0%2Bgb30VphWU8Od2On3Li83iO7WignsbxckHdVj5X3CwX%2BCZVmSvlNZQ3Kgmq3VRaUE7g3uhPAslt2yzCWTWufRNdwe4VqRIgDszUAAcVD%2Fx8CniL0r%2BcB7R%2Bv6Qwt%2B2SvwY6pgHcTkpjaAPVHSILz1%2BK0YAAmGcw4c1jcfAqmjQ%2FGIFAYwmxLJTc8oRqsZTZaf7cVKnK8XUp%2FGc6gfofvcDQfBjPRP5oDU%2Bw%2B8%2FJAqtW9TBqa1D7h3GL1WIh%2BLc23uAVMOI85D%2FbM2dLG3%2BdCy%2Faxf0dEuUO3LNt%2BaF5iDr%2Fyo%2F200d6HCMxuWiRc9%2Fayv3wfDevr0BynJKA8tEhh3R7moV4qBSq44Du&X-Amz-Signature=c9f2bce0a604e8ed75abd34879e0517204459351a29bb5915d8de7f0bfc410ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7U263JT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB95JfXWfohvVounkLgVBW29FbiZP1JG6VOo8%2FZDK6mAiBFF%2FLcGQCuKK3a2uHKK3%2FOEMKkHpjWT6fng4PTxHJoTyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMiSVZ4kmxLSVHg1d2KtwDHUMBol%2FIqh%2Ff2vNwMkIE%2BbcbAKbcdYc1oruKgKjrjP1%2B1JtkFA9ewpf96%2FHKiFI6coVt72efIGR%2FR%2BTAv%2FLDscHW%2FVqo6BKVyP5OzBGtlE%2FDwq1rAYd2HheD8jM7YYt59zkVbFOXx8YQ8L1IFaGt4e7ocaxlZ%2B40z9zLQRAtm1P9qGeGDAFuJI2Dp3jexaQY0XEt%2F1D04hoP%2BNqcqq6ixEfpG%2BSnfWK5N4RAQYFHtHFaQhXoncd26Ed1ymf7kBUOkKuAv6NDzRy2F6%2Fa2l9WUaArMm%2BIBZt8E0iAHJD3mHEhjb7RRqgTBOPQ9pPmpykKLvEy9PQ7G60%2BRJA%2BBpBIiMtdD0dMDmCqSvcK0tkufuEg3AAsBt0xy%2Fdbi5d7nDkAHQmu7ghm2RO5enMdFPcFbfUPCccz0yQDNhP%2Bn%2B%2BQCW5RQbpUyBKo696nG3PZZBrInQk%2B33Pex6%2BrrJqI6mWnnv4AdkEWuJfuY2zi6UxMLMvy%2Ft7GOnqGfLGnyAT9VkCq0%2Bgb30VphWU8Od2On3Li83iO7WignsbxckHdVj5X3CwX%2BCZVmSvlNZQ3Kgmq3VRaUE7g3uhPAslt2yzCWTWufRNdwe4VqRIgDszUAAcVD%2Fx8CniL0r%2BcB7R%2Bv6Qwt%2B2SvwY6pgHcTkpjaAPVHSILz1%2BK0YAAmGcw4c1jcfAqmjQ%2FGIFAYwmxLJTc8oRqsZTZaf7cVKnK8XUp%2FGc6gfofvcDQfBjPRP5oDU%2Bw%2B8%2FJAqtW9TBqa1D7h3GL1WIh%2BLc23uAVMOI85D%2FbM2dLG3%2BdCy%2Faxf0dEuUO3LNt%2BaF5iDr%2Fyo%2F200d6HCMxuWiRc9%2Fayv3wfDevr0BynJKA8tEhh3R7moV4qBSq44Du&X-Amz-Signature=c7a0afe3f7778afff5fcaaab69ca5818bfe706919054e943129ad57ee422b64e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
