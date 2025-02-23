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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEA4RCF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNF%2BQ7JkVf1pYLsRbgKIUYEcqpBeSISAdLxI6jm%2FaSoAiEAgM6yBbrw928YchiBED02lRudUgAK%2B2OQSIbtIrP5BTkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMno2JhCoNHyJXC98CrcA1RFNoT8ap%2F5fvpaZ%2F14yZp8jbeIvECZEZeaqDxcDe7nOnQk3GNJtOb8OmepNmtvVFJxmReej%2FzqoxUdlU%2BgUTAJQ13x57SPNjkxTuIb9vJMkw%2B9j3xznJnr4UBURvuj0Tm4kEY7DFQkwjf8gw2f7vvoZ5fXyLn1NVWESixLWuEStVMJIiF9KVRmtmJ2gkcS%2BE96kKmqxAfjG7KNyZBR%2BPPZdodtCzujI7GS0pV0Cyb5Y4%2BtK7vj3tHnFq1R46wLhec1ayCBBxtiPHPLiXfAPut1hTr6QLouB4ui17dbTMJocwog9RbpyD%2FZy3D9esDTayL7%2FU%2BCgYumiXWightdoniILPR%2B1lmbTLIjwHk%2Fd748V23mHM1cnryfqQ3RH43TOGX2JcaDeRp5BDXVe6IJf%2F0PAK%2FdTbEoLCJjDFuQtjf1MU3DsGFXhv2jmvOurIHYlklsQj4fTvrgq2585h33tak1xb66YntRy2AZexbDSR9pBj47j2sAc62ZjdRAUK%2FuWhZeAIlRb4k84Am5F%2FWHDphWfICPbgwa9tdeJf4UnCu4mIPKZnS7nSf6Vfg29bdtIi0RD9txSf4dEbP1hsgxulOzB4SwOdZi7WemZZSgSIxKqd5eL6CHw%2B%2FRofrTMOC06b0GOqUB4qxVMCASk4LFIbl9TDIhin7Zdo5C9jZUiGYVVSGp345aLYnbpaFTR5xJfExPRUnpoYEgniGMl%2BDrhQa9xyA1YwqM2J1bqEvdeaKtS1x6%2BKnkYIngVAgY6YIp%2BRmj%2FNGsjolq9Aw%2Fv7eeA1Gt%2FjSlEBitAYpny33MYVfX5G0fKOIAk9PY9dcTjjZiiZJoogTc%2BTH1nTuVF%2BqgVcAaf09xCa78MEAi&X-Amz-Signature=7d9f73731ecba1d95ed64700b3e3edccd7dc745a0d62e387f03e3294446da2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEA4RCF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNF%2BQ7JkVf1pYLsRbgKIUYEcqpBeSISAdLxI6jm%2FaSoAiEAgM6yBbrw928YchiBED02lRudUgAK%2B2OQSIbtIrP5BTkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMno2JhCoNHyJXC98CrcA1RFNoT8ap%2F5fvpaZ%2F14yZp8jbeIvECZEZeaqDxcDe7nOnQk3GNJtOb8OmepNmtvVFJxmReej%2FzqoxUdlU%2BgUTAJQ13x57SPNjkxTuIb9vJMkw%2B9j3xznJnr4UBURvuj0Tm4kEY7DFQkwjf8gw2f7vvoZ5fXyLn1NVWESixLWuEStVMJIiF9KVRmtmJ2gkcS%2BE96kKmqxAfjG7KNyZBR%2BPPZdodtCzujI7GS0pV0Cyb5Y4%2BtK7vj3tHnFq1R46wLhec1ayCBBxtiPHPLiXfAPut1hTr6QLouB4ui17dbTMJocwog9RbpyD%2FZy3D9esDTayL7%2FU%2BCgYumiXWightdoniILPR%2B1lmbTLIjwHk%2Fd748V23mHM1cnryfqQ3RH43TOGX2JcaDeRp5BDXVe6IJf%2F0PAK%2FdTbEoLCJjDFuQtjf1MU3DsGFXhv2jmvOurIHYlklsQj4fTvrgq2585h33tak1xb66YntRy2AZexbDSR9pBj47j2sAc62ZjdRAUK%2FuWhZeAIlRb4k84Am5F%2FWHDphWfICPbgwa9tdeJf4UnCu4mIPKZnS7nSf6Vfg29bdtIi0RD9txSf4dEbP1hsgxulOzB4SwOdZi7WemZZSgSIxKqd5eL6CHw%2B%2FRofrTMOC06b0GOqUB4qxVMCASk4LFIbl9TDIhin7Zdo5C9jZUiGYVVSGp345aLYnbpaFTR5xJfExPRUnpoYEgniGMl%2BDrhQa9xyA1YwqM2J1bqEvdeaKtS1x6%2BKnkYIngVAgY6YIp%2BRmj%2FNGsjolq9Aw%2Fv7eeA1Gt%2FjSlEBitAYpny33MYVfX5G0fKOIAk9PY9dcTjjZiiZJoogTc%2BTH1nTuVF%2BqgVcAaf09xCa78MEAi&X-Amz-Signature=cf31127a98612138f19c7359359e4f75b3298d01587b4c6e721b46bc0fbc4353&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEA4RCF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNF%2BQ7JkVf1pYLsRbgKIUYEcqpBeSISAdLxI6jm%2FaSoAiEAgM6yBbrw928YchiBED02lRudUgAK%2B2OQSIbtIrP5BTkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMno2JhCoNHyJXC98CrcA1RFNoT8ap%2F5fvpaZ%2F14yZp8jbeIvECZEZeaqDxcDe7nOnQk3GNJtOb8OmepNmtvVFJxmReej%2FzqoxUdlU%2BgUTAJQ13x57SPNjkxTuIb9vJMkw%2B9j3xznJnr4UBURvuj0Tm4kEY7DFQkwjf8gw2f7vvoZ5fXyLn1NVWESixLWuEStVMJIiF9KVRmtmJ2gkcS%2BE96kKmqxAfjG7KNyZBR%2BPPZdodtCzujI7GS0pV0Cyb5Y4%2BtK7vj3tHnFq1R46wLhec1ayCBBxtiPHPLiXfAPut1hTr6QLouB4ui17dbTMJocwog9RbpyD%2FZy3D9esDTayL7%2FU%2BCgYumiXWightdoniILPR%2B1lmbTLIjwHk%2Fd748V23mHM1cnryfqQ3RH43TOGX2JcaDeRp5BDXVe6IJf%2F0PAK%2FdTbEoLCJjDFuQtjf1MU3DsGFXhv2jmvOurIHYlklsQj4fTvrgq2585h33tak1xb66YntRy2AZexbDSR9pBj47j2sAc62ZjdRAUK%2FuWhZeAIlRb4k84Am5F%2FWHDphWfICPbgwa9tdeJf4UnCu4mIPKZnS7nSf6Vfg29bdtIi0RD9txSf4dEbP1hsgxulOzB4SwOdZi7WemZZSgSIxKqd5eL6CHw%2B%2FRofrTMOC06b0GOqUB4qxVMCASk4LFIbl9TDIhin7Zdo5C9jZUiGYVVSGp345aLYnbpaFTR5xJfExPRUnpoYEgniGMl%2BDrhQa9xyA1YwqM2J1bqEvdeaKtS1x6%2BKnkYIngVAgY6YIp%2BRmj%2FNGsjolq9Aw%2Fv7eeA1Gt%2FjSlEBitAYpny33MYVfX5G0fKOIAk9PY9dcTjjZiiZJoogTc%2BTH1nTuVF%2BqgVcAaf09xCa78MEAi&X-Amz-Signature=b241423b9244ea7ad2f2bf199cbfcad27ca43d85e63d9cf1b83fccc7eb486f47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
