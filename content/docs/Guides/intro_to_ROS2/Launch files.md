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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK27ZPLH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEiZuh7ySY5iefT4t9vwIFlKd%2F5CCahbsFBU6obo1562AiEA7CyQp4MiGd2r%2F9KpZiWrgt9Z4LKMEUaoiliOXeupS60qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH4KTxNLENxDNjk7SrcAxW5S9yVTS3sr8aDmgfRej36zY0efz5rasoLGlncdK5wCT56H2xug3i2wbetC5XLBcHNmWDgh%2F7Dndh6npD4iaUqgIpRD6Q%2Bj8OHBk9Yf22Zoe8zB19MtpCNoKuDr5gX35a0tFmA5ofwcxothSI6AVptPthUKaMKnjckc%2FT9f0rxlDYmLD0hRnxnzvgCB%2Boo%2BZoZc7ikEVzAW14Gdd%2B%2Fjd0FJ5y1x0c7wcgXZkL6AHqPe2QYL%2BZRfSYq8US6iO64D00YDpKCUlvFOLMwgmLl%2BjW7Jjg4IpKqY1yrF%2BqF%2Fxtx4QpVReM76taFO5Afdv3G7I2wtrTXv6KK6F2I6jOLXbjsZGIiXTkHPZF6OkQCFFZAWD1mUSs%2BLAy6RdKpnZOmCAZVg0IULhmRVF7JAQw%2B1ACktPfBjSJfD3FVXhS84ZEiq%2BAs1XtLfjmx4BfUvB1ZWQIsWwMbZs7E%2BDLNobiJ8%2BD2bjbphG1rgVIdKhaJnurlDZDGDM6VG5uC4BXviMLU7Bph4YEfnOvOk9gMcMyUaJ8YodISqcFH2zTOWp%2BlXQk9yL%2FrQCZZ6ctXIktzvvv2Z2ACQFhdj5M9nz8kt4RVGydcnv%2BkyphQ0nIA562pvFVtvtvzn1Ozbahvu9NSMLOWjsAGOqUBb2YMmbXHReu8bX2Ge%2FbHhReHol%2BBSFdGdPelk1ttUbNZU5KmxVB%2Fep4AOG%2B32FQgDPY9naofw9IzVXmMPd%2FCOV7X69Bx9aaVeEiPV1QEFW%2B5de1K%2FaK94ZCOAU%2BubCdt1%2FOf9Ykm4%2BLplgEbJvMcLuvB1wcyb8aljXmHn68SVRhnqhL1XH6PRVigNoquvGCswG5L%2FbELLNV%2BPMRIQ9d1%2Bp4LhUIC&X-Amz-Signature=70e860360ecee7f286359f4a1ab751c0537ca9c4ecd1f99be42618183bd81c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK27ZPLH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEiZuh7ySY5iefT4t9vwIFlKd%2F5CCahbsFBU6obo1562AiEA7CyQp4MiGd2r%2F9KpZiWrgt9Z4LKMEUaoiliOXeupS60qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH4KTxNLENxDNjk7SrcAxW5S9yVTS3sr8aDmgfRej36zY0efz5rasoLGlncdK5wCT56H2xug3i2wbetC5XLBcHNmWDgh%2F7Dndh6npD4iaUqgIpRD6Q%2Bj8OHBk9Yf22Zoe8zB19MtpCNoKuDr5gX35a0tFmA5ofwcxothSI6AVptPthUKaMKnjckc%2FT9f0rxlDYmLD0hRnxnzvgCB%2Boo%2BZoZc7ikEVzAW14Gdd%2B%2Fjd0FJ5y1x0c7wcgXZkL6AHqPe2QYL%2BZRfSYq8US6iO64D00YDpKCUlvFOLMwgmLl%2BjW7Jjg4IpKqY1yrF%2BqF%2Fxtx4QpVReM76taFO5Afdv3G7I2wtrTXv6KK6F2I6jOLXbjsZGIiXTkHPZF6OkQCFFZAWD1mUSs%2BLAy6RdKpnZOmCAZVg0IULhmRVF7JAQw%2B1ACktPfBjSJfD3FVXhS84ZEiq%2BAs1XtLfjmx4BfUvB1ZWQIsWwMbZs7E%2BDLNobiJ8%2BD2bjbphG1rgVIdKhaJnurlDZDGDM6VG5uC4BXviMLU7Bph4YEfnOvOk9gMcMyUaJ8YodISqcFH2zTOWp%2BlXQk9yL%2FrQCZZ6ctXIktzvvv2Z2ACQFhdj5M9nz8kt4RVGydcnv%2BkyphQ0nIA562pvFVtvtvzn1Ozbahvu9NSMLOWjsAGOqUBb2YMmbXHReu8bX2Ge%2FbHhReHol%2BBSFdGdPelk1ttUbNZU5KmxVB%2Fep4AOG%2B32FQgDPY9naofw9IzVXmMPd%2FCOV7X69Bx9aaVeEiPV1QEFW%2B5de1K%2FaK94ZCOAU%2BubCdt1%2FOf9Ykm4%2BLplgEbJvMcLuvB1wcyb8aljXmHn68SVRhnqhL1XH6PRVigNoquvGCswG5L%2FbELLNV%2BPMRIQ9d1%2Bp4LhUIC&X-Amz-Signature=eab3544d25b7661682153855f6765cf273b2fbcd5f45e869738f694e83cf2a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK27ZPLH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEiZuh7ySY5iefT4t9vwIFlKd%2F5CCahbsFBU6obo1562AiEA7CyQp4MiGd2r%2F9KpZiWrgt9Z4LKMEUaoiliOXeupS60qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH4KTxNLENxDNjk7SrcAxW5S9yVTS3sr8aDmgfRej36zY0efz5rasoLGlncdK5wCT56H2xug3i2wbetC5XLBcHNmWDgh%2F7Dndh6npD4iaUqgIpRD6Q%2Bj8OHBk9Yf22Zoe8zB19MtpCNoKuDr5gX35a0tFmA5ofwcxothSI6AVptPthUKaMKnjckc%2FT9f0rxlDYmLD0hRnxnzvgCB%2Boo%2BZoZc7ikEVzAW14Gdd%2B%2Fjd0FJ5y1x0c7wcgXZkL6AHqPe2QYL%2BZRfSYq8US6iO64D00YDpKCUlvFOLMwgmLl%2BjW7Jjg4IpKqY1yrF%2BqF%2Fxtx4QpVReM76taFO5Afdv3G7I2wtrTXv6KK6F2I6jOLXbjsZGIiXTkHPZF6OkQCFFZAWD1mUSs%2BLAy6RdKpnZOmCAZVg0IULhmRVF7JAQw%2B1ACktPfBjSJfD3FVXhS84ZEiq%2BAs1XtLfjmx4BfUvB1ZWQIsWwMbZs7E%2BDLNobiJ8%2BD2bjbphG1rgVIdKhaJnurlDZDGDM6VG5uC4BXviMLU7Bph4YEfnOvOk9gMcMyUaJ8YodISqcFH2zTOWp%2BlXQk9yL%2FrQCZZ6ctXIktzvvv2Z2ACQFhdj5M9nz8kt4RVGydcnv%2BkyphQ0nIA562pvFVtvtvzn1Ozbahvu9NSMLOWjsAGOqUBb2YMmbXHReu8bX2Ge%2FbHhReHol%2BBSFdGdPelk1ttUbNZU5KmxVB%2Fep4AOG%2B32FQgDPY9naofw9IzVXmMPd%2FCOV7X69Bx9aaVeEiPV1QEFW%2B5de1K%2FaK94ZCOAU%2BubCdt1%2FOf9Ykm4%2BLplgEbJvMcLuvB1wcyb8aljXmHn68SVRhnqhL1XH6PRVigNoquvGCswG5L%2FbELLNV%2BPMRIQ9d1%2Bp4LhUIC&X-Amz-Signature=9c1fad3124b121ea1b0f13758a681210bbed62453a560ac19228265eee2e009d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
