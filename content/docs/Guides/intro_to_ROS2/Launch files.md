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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCVCVS6K%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtPlrir4gEXTPsDSUZ8A36%2FMJ%2BBZpJfbrI3OsUCB5B6AiEAn01YVihk8ypwKFTmhSexh9iQnW%2FyNNNUksGS3Tr7fTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDH9DD4j4fc8reilXircAx3qB%2FW2BlxkuY38VT%2F42mC9%2FqR13Kt2uimAeKZlHw%2Ftw0lSCLzIoHKiBCSJrvfwGCWDuELAQ19HYPLjaWVt4zj7AfWtQ1Li46ZQbbLQV7CFoOnvsetk3wiknudIWbApcLZFj3s3bugaOoajr8ghJ4XXm9dP9GZOu2kwNx%2F4xWgdxrJJ2DyywjJo5Vze76awWgdrW1BaIdTIfGw3XcBwDBhFryFVl6x5nWbgnEBqnjLn6Qk7v47gV9OVgA%2BLVfclBEIl%2FvgSiy7W1sNG9KDBQsA9rIzMNwCGuP67fuAd46POoN8tJHAvPMBQa4HOkgvOZFkuWJpoOJVsSYESxFrOc5QAhJ1%2BWEjB6p7soc5KHh2DZ%2F5L3R25D%2Bie8z60VN2ykUqqswu9p%2FxUedkDrPIbMgZ%2BkiwokeobVsMUYGAg2K%2BEgfbb3eBOnhnj8BT62Udnu%2BjmItL30dBnFQp0zo%2BgaTtR6Ow7tycszXnByhFCy4Z8KLHZQxncGHvw3yuWe0BSpsEVK%2BsJPT1ignNN%2F5%2FhnnYjUOHzSQP5P7DH7bETQDayKBT7Ey723mfxbzAuPQcYLJjhwMmgUmif4%2FiDIpkakNm7HklcM71iCQLByS2rDnyrvHTHk%2FRMAmqyqwAAMIrx078GOqUB%2FuNEq2F9w5rFU3OkJbb5XCLxcO3r8dDMM2j48S8BALu90I1J47CeaskpcUWwO%2B2c%2FXmsaqttKiIUDiP0Ts91FhjciIJy9MbygQTfpijoVZUlAGCiq97UQocyfgs7fzEOF0C3JmgIGRIYbqxXlirAyDegqL0mGNrW6wT1ThheEX%2FPYW%2BWZaajwdHSQTysQg2BetjT79yfAoD8G1oGpEAQANF8Ndqy&X-Amz-Signature=a4483a6c520878cf5e4d919e78fe208d2f6ea9d8a7b664c9611296e5d0b6e288&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCVCVS6K%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtPlrir4gEXTPsDSUZ8A36%2FMJ%2BBZpJfbrI3OsUCB5B6AiEAn01YVihk8ypwKFTmhSexh9iQnW%2FyNNNUksGS3Tr7fTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDH9DD4j4fc8reilXircAx3qB%2FW2BlxkuY38VT%2F42mC9%2FqR13Kt2uimAeKZlHw%2Ftw0lSCLzIoHKiBCSJrvfwGCWDuELAQ19HYPLjaWVt4zj7AfWtQ1Li46ZQbbLQV7CFoOnvsetk3wiknudIWbApcLZFj3s3bugaOoajr8ghJ4XXm9dP9GZOu2kwNx%2F4xWgdxrJJ2DyywjJo5Vze76awWgdrW1BaIdTIfGw3XcBwDBhFryFVl6x5nWbgnEBqnjLn6Qk7v47gV9OVgA%2BLVfclBEIl%2FvgSiy7W1sNG9KDBQsA9rIzMNwCGuP67fuAd46POoN8tJHAvPMBQa4HOkgvOZFkuWJpoOJVsSYESxFrOc5QAhJ1%2BWEjB6p7soc5KHh2DZ%2F5L3R25D%2Bie8z60VN2ykUqqswu9p%2FxUedkDrPIbMgZ%2BkiwokeobVsMUYGAg2K%2BEgfbb3eBOnhnj8BT62Udnu%2BjmItL30dBnFQp0zo%2BgaTtR6Ow7tycszXnByhFCy4Z8KLHZQxncGHvw3yuWe0BSpsEVK%2BsJPT1ignNN%2F5%2FhnnYjUOHzSQP5P7DH7bETQDayKBT7Ey723mfxbzAuPQcYLJjhwMmgUmif4%2FiDIpkakNm7HklcM71iCQLByS2rDnyrvHTHk%2FRMAmqyqwAAMIrx078GOqUB%2FuNEq2F9w5rFU3OkJbb5XCLxcO3r8dDMM2j48S8BALu90I1J47CeaskpcUWwO%2B2c%2FXmsaqttKiIUDiP0Ts91FhjciIJy9MbygQTfpijoVZUlAGCiq97UQocyfgs7fzEOF0C3JmgIGRIYbqxXlirAyDegqL0mGNrW6wT1ThheEX%2FPYW%2BWZaajwdHSQTysQg2BetjT79yfAoD8G1oGpEAQANF8Ndqy&X-Amz-Signature=b0a65b37a97b507cf7b1c23a47b622e5a65df05a6469752dd6fb2cfcb64951c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCVCVS6K%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtPlrir4gEXTPsDSUZ8A36%2FMJ%2BBZpJfbrI3OsUCB5B6AiEAn01YVihk8ypwKFTmhSexh9iQnW%2FyNNNUksGS3Tr7fTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDH9DD4j4fc8reilXircAx3qB%2FW2BlxkuY38VT%2F42mC9%2FqR13Kt2uimAeKZlHw%2Ftw0lSCLzIoHKiBCSJrvfwGCWDuELAQ19HYPLjaWVt4zj7AfWtQ1Li46ZQbbLQV7CFoOnvsetk3wiknudIWbApcLZFj3s3bugaOoajr8ghJ4XXm9dP9GZOu2kwNx%2F4xWgdxrJJ2DyywjJo5Vze76awWgdrW1BaIdTIfGw3XcBwDBhFryFVl6x5nWbgnEBqnjLn6Qk7v47gV9OVgA%2BLVfclBEIl%2FvgSiy7W1sNG9KDBQsA9rIzMNwCGuP67fuAd46POoN8tJHAvPMBQa4HOkgvOZFkuWJpoOJVsSYESxFrOc5QAhJ1%2BWEjB6p7soc5KHh2DZ%2F5L3R25D%2Bie8z60VN2ykUqqswu9p%2FxUedkDrPIbMgZ%2BkiwokeobVsMUYGAg2K%2BEgfbb3eBOnhnj8BT62Udnu%2BjmItL30dBnFQp0zo%2BgaTtR6Ow7tycszXnByhFCy4Z8KLHZQxncGHvw3yuWe0BSpsEVK%2BsJPT1ignNN%2F5%2FhnnYjUOHzSQP5P7DH7bETQDayKBT7Ey723mfxbzAuPQcYLJjhwMmgUmif4%2FiDIpkakNm7HklcM71iCQLByS2rDnyrvHTHk%2FRMAmqyqwAAMIrx078GOqUB%2FuNEq2F9w5rFU3OkJbb5XCLxcO3r8dDMM2j48S8BALu90I1J47CeaskpcUWwO%2B2c%2FXmsaqttKiIUDiP0Ts91FhjciIJy9MbygQTfpijoVZUlAGCiq97UQocyfgs7fzEOF0C3JmgIGRIYbqxXlirAyDegqL0mGNrW6wT1ThheEX%2FPYW%2BWZaajwdHSQTysQg2BetjT79yfAoD8G1oGpEAQANF8Ndqy&X-Amz-Signature=6f8254a504e9e6493aca746ac3a95ffaabc86be4a047903a486443d7b487ae82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
