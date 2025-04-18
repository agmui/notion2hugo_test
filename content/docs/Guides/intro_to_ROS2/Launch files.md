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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYWY2RO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb8IjQAl4CfzfCFJLNLdbn8Sh8ZbIAJgVFzobxO%2BCoDgIgRk%2B0%2FldWMX7yaPigS4vtJWloaScqEHnAVSHlgaRFu84q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHYLyQh%2ByI1ETKRMuSrcA9fAGP4Gru7zHzwLTlk5TBkbndMMMV1opT3anGk6bh6H1Wh6m9fw2yoAzGXD26LDO5IKsMc72Phwc4UJZA2TKGu%2BZzhOpH5lv3uyuJp4jwYUFO6s3yMTQgakjr0JtlqDTnzZZ%2BA%2BpK11VYD6DTq%2F%2FO7YsFFBInLHIlFNtl%2FuXMzOhSfH6MGj6knXaO4dFg1NhJJIEf7sC7vxQEHfjGlrHKymGxCeUYIZAAiK36oml8%2F%2FQRnk5X4%2BZIBFaFSgv7eJhYVVsJDYPhMcmlR5N%2BFYoRRuWB4sjjLwJ56sAIleaCD9wA7%2FUqUBKhuLn2AONPSbENyNO9GC%2FfN1jrhVkK0LI1Ra97WwU020tAT8Cuet6xBoyFbZd3n5ykCPpnGl%2Fw4d7hNDuXa1jBucwMv8sNWhmhZFQuEPZxxfJRYdxTRcKTFuN8kOSoTiefOM9caiTg00vHAKX%2FLjJTHROxV6LYXeSzTXaapIqvyXkWeFpKd3%2FOKE89J9zzorcHsm575RhPdF3fs3pf08XcrGlibthXmE5fEe4ooURR3Mw6jkIQSyAWfDD2gWfiv5FP4ZvuWrNnh3NiuQ0qnzTQG3YrdTgX8qfCdVLBqMae0c%2Bom%2FHqzEB%2BkA%2BRdTOChODtcRDXCcMPbeicAGOqUBq88O5g%2BJ3tXDgVnLesdSxQUZz0xPd70yEbpkaYVrX7NIfvYQtduvCB9p5MSoWxWjU4sNoDHRdoqwUVwS%2FuymzcOXKh0xPnBLFr3bANZlmeSbxswLEVUY2fzaGeDHlOfSiKj5vhcLZCHvefqzKEi9Q0xLo52uXrqLjhYquFA7Wr77Knxd9C9iXC%2BOYkKUrig9Jg5jcoZdj6YaBMcKfwDCe%2FZtU6e4&X-Amz-Signature=06f8357043408f7fd9813483b930bafc7657841d9ea7065539d7b5a17dd63180&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYWY2RO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb8IjQAl4CfzfCFJLNLdbn8Sh8ZbIAJgVFzobxO%2BCoDgIgRk%2B0%2FldWMX7yaPigS4vtJWloaScqEHnAVSHlgaRFu84q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHYLyQh%2ByI1ETKRMuSrcA9fAGP4Gru7zHzwLTlk5TBkbndMMMV1opT3anGk6bh6H1Wh6m9fw2yoAzGXD26LDO5IKsMc72Phwc4UJZA2TKGu%2BZzhOpH5lv3uyuJp4jwYUFO6s3yMTQgakjr0JtlqDTnzZZ%2BA%2BpK11VYD6DTq%2F%2FO7YsFFBInLHIlFNtl%2FuXMzOhSfH6MGj6knXaO4dFg1NhJJIEf7sC7vxQEHfjGlrHKymGxCeUYIZAAiK36oml8%2F%2FQRnk5X4%2BZIBFaFSgv7eJhYVVsJDYPhMcmlR5N%2BFYoRRuWB4sjjLwJ56sAIleaCD9wA7%2FUqUBKhuLn2AONPSbENyNO9GC%2FfN1jrhVkK0LI1Ra97WwU020tAT8Cuet6xBoyFbZd3n5ykCPpnGl%2Fw4d7hNDuXa1jBucwMv8sNWhmhZFQuEPZxxfJRYdxTRcKTFuN8kOSoTiefOM9caiTg00vHAKX%2FLjJTHROxV6LYXeSzTXaapIqvyXkWeFpKd3%2FOKE89J9zzorcHsm575RhPdF3fs3pf08XcrGlibthXmE5fEe4ooURR3Mw6jkIQSyAWfDD2gWfiv5FP4ZvuWrNnh3NiuQ0qnzTQG3YrdTgX8qfCdVLBqMae0c%2Bom%2FHqzEB%2BkA%2BRdTOChODtcRDXCcMPbeicAGOqUBq88O5g%2BJ3tXDgVnLesdSxQUZz0xPd70yEbpkaYVrX7NIfvYQtduvCB9p5MSoWxWjU4sNoDHRdoqwUVwS%2FuymzcOXKh0xPnBLFr3bANZlmeSbxswLEVUY2fzaGeDHlOfSiKj5vhcLZCHvefqzKEi9Q0xLo52uXrqLjhYquFA7Wr77Knxd9C9iXC%2BOYkKUrig9Jg5jcoZdj6YaBMcKfwDCe%2FZtU6e4&X-Amz-Signature=dec03e9ef7ebf10097e7abf7c07aeef3ba0000cfecc7d1ac96f3f802bed827ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYWY2RO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb8IjQAl4CfzfCFJLNLdbn8Sh8ZbIAJgVFzobxO%2BCoDgIgRk%2B0%2FldWMX7yaPigS4vtJWloaScqEHnAVSHlgaRFu84q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHYLyQh%2ByI1ETKRMuSrcA9fAGP4Gru7zHzwLTlk5TBkbndMMMV1opT3anGk6bh6H1Wh6m9fw2yoAzGXD26LDO5IKsMc72Phwc4UJZA2TKGu%2BZzhOpH5lv3uyuJp4jwYUFO6s3yMTQgakjr0JtlqDTnzZZ%2BA%2BpK11VYD6DTq%2F%2FO7YsFFBInLHIlFNtl%2FuXMzOhSfH6MGj6knXaO4dFg1NhJJIEf7sC7vxQEHfjGlrHKymGxCeUYIZAAiK36oml8%2F%2FQRnk5X4%2BZIBFaFSgv7eJhYVVsJDYPhMcmlR5N%2BFYoRRuWB4sjjLwJ56sAIleaCD9wA7%2FUqUBKhuLn2AONPSbENyNO9GC%2FfN1jrhVkK0LI1Ra97WwU020tAT8Cuet6xBoyFbZd3n5ykCPpnGl%2Fw4d7hNDuXa1jBucwMv8sNWhmhZFQuEPZxxfJRYdxTRcKTFuN8kOSoTiefOM9caiTg00vHAKX%2FLjJTHROxV6LYXeSzTXaapIqvyXkWeFpKd3%2FOKE89J9zzorcHsm575RhPdF3fs3pf08XcrGlibthXmE5fEe4ooURR3Mw6jkIQSyAWfDD2gWfiv5FP4ZvuWrNnh3NiuQ0qnzTQG3YrdTgX8qfCdVLBqMae0c%2Bom%2FHqzEB%2BkA%2BRdTOChODtcRDXCcMPbeicAGOqUBq88O5g%2BJ3tXDgVnLesdSxQUZz0xPd70yEbpkaYVrX7NIfvYQtduvCB9p5MSoWxWjU4sNoDHRdoqwUVwS%2FuymzcOXKh0xPnBLFr3bANZlmeSbxswLEVUY2fzaGeDHlOfSiKj5vhcLZCHvefqzKEi9Q0xLo52uXrqLjhYquFA7Wr77Knxd9C9iXC%2BOYkKUrig9Jg5jcoZdj6YaBMcKfwDCe%2FZtU6e4&X-Amz-Signature=4e136a70e77182787ba6028efa9258b43503f05932940198300aecf8000bdf02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
