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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDC65XO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICZRYHwf5hmi06UKFM7J1PG7GAAMS5NSHw7JAvaPA4N1AiEA6ERTTTbP2TpqD3FGm7CX2vCVB6TplSNhegbQvjTHYEwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJFV9dNnPxOpilV2yrcA09ZgYpCr0Bs74FVINXGrXNyy9OvC4qkg3c6vxXJy57EH4syydVuMbENN2IKcoa0s%2BYvWIbkLx9nBP9u2cndmTv7%2FC5%2F887HnOcEd3G6RTOR%2B77kU2do%2BEu%2B9%2B43yBMlJq4l1fofS3Mc%2F8%2F%2FNCTBm5ItEPbafAS6Fy0NO0jbM0i1%2BsCbqrhje32IbIjKLOfQWWkM7P3jiSV57cSGB97itlYxqF%2BFmhb8SXtIxv7HRLezOefUCIzmvUNjhohuFUGrJRe1mJUb8PfaRQhFfZ%2F7KcsgoS4jFmN3Rh7fj5fdydhbtDzpeg0KsTqz8nSavgzu6diupz0MgrUXifzyFmf9zCIkuMtvuFQvaZwgRcAoimvbKwK%2B5uHtEl%2BWG7uv82WgAoflm2ERHtSq2o%2FUhJqpmuYiLNKVn%2BwyzQ0p9EMLKojPTBUeybF6bgs9IvK0TGcylLh2nEWXnnOlQ7fQ%2BOyfKDR3cT2tpZaSjSXufB1439wqY%2Fzv6vxxg%2B3bJ3ws5hc9aJsSYWNbsd5AYCGOyMXZCY3%2BCHmvTERLhw%2Fkm43KXGN5baeUushFqTRjQ8Uirt1Dx4ZhedZHnOL3pGg5%2BuOU520qMWV1WeZaKPfo57ezlaST7rbo6oe9JAlEv4%2B2MMCuh74GOqUBr6pbvmXB4ePCn4kjZhzmO3u1N0703i0nvVTorm3lkOMuoaUedxntDgcIESoBrrUnGms2ydHASQQmMupC1Fz6pr%2B3WwVxLgA7wGXcgczuehy1O4j2%2FAetODa6U186ZPqcJHnrz29xk116PZ25vbUaKbjo84WtW4U7uwfXwxv0BqbIDk2BnMG7uT%2FHcEOo6zeMnicayGmtBTxKfeyTGQ6jeRQ2mr81&X-Amz-Signature=cc31fc98855e2f64acbc89cd35536823607ad52e2f87a01bfa700dc8888cfcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDC65XO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICZRYHwf5hmi06UKFM7J1PG7GAAMS5NSHw7JAvaPA4N1AiEA6ERTTTbP2TpqD3FGm7CX2vCVB6TplSNhegbQvjTHYEwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJFV9dNnPxOpilV2yrcA09ZgYpCr0Bs74FVINXGrXNyy9OvC4qkg3c6vxXJy57EH4syydVuMbENN2IKcoa0s%2BYvWIbkLx9nBP9u2cndmTv7%2FC5%2F887HnOcEd3G6RTOR%2B77kU2do%2BEu%2B9%2B43yBMlJq4l1fofS3Mc%2F8%2F%2FNCTBm5ItEPbafAS6Fy0NO0jbM0i1%2BsCbqrhje32IbIjKLOfQWWkM7P3jiSV57cSGB97itlYxqF%2BFmhb8SXtIxv7HRLezOefUCIzmvUNjhohuFUGrJRe1mJUb8PfaRQhFfZ%2F7KcsgoS4jFmN3Rh7fj5fdydhbtDzpeg0KsTqz8nSavgzu6diupz0MgrUXifzyFmf9zCIkuMtvuFQvaZwgRcAoimvbKwK%2B5uHtEl%2BWG7uv82WgAoflm2ERHtSq2o%2FUhJqpmuYiLNKVn%2BwyzQ0p9EMLKojPTBUeybF6bgs9IvK0TGcylLh2nEWXnnOlQ7fQ%2BOyfKDR3cT2tpZaSjSXufB1439wqY%2Fzv6vxxg%2B3bJ3ws5hc9aJsSYWNbsd5AYCGOyMXZCY3%2BCHmvTERLhw%2Fkm43KXGN5baeUushFqTRjQ8Uirt1Dx4ZhedZHnOL3pGg5%2BuOU520qMWV1WeZaKPfo57ezlaST7rbo6oe9JAlEv4%2B2MMCuh74GOqUBr6pbvmXB4ePCn4kjZhzmO3u1N0703i0nvVTorm3lkOMuoaUedxntDgcIESoBrrUnGms2ydHASQQmMupC1Fz6pr%2B3WwVxLgA7wGXcgczuehy1O4j2%2FAetODa6U186ZPqcJHnrz29xk116PZ25vbUaKbjo84WtW4U7uwfXwxv0BqbIDk2BnMG7uT%2FHcEOo6zeMnicayGmtBTxKfeyTGQ6jeRQ2mr81&X-Amz-Signature=676b98ef412285e78c268e557918353fcb4af10ea819e7facdb6354a077d7913&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDC65XO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICZRYHwf5hmi06UKFM7J1PG7GAAMS5NSHw7JAvaPA4N1AiEA6ERTTTbP2TpqD3FGm7CX2vCVB6TplSNhegbQvjTHYEwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJFV9dNnPxOpilV2yrcA09ZgYpCr0Bs74FVINXGrXNyy9OvC4qkg3c6vxXJy57EH4syydVuMbENN2IKcoa0s%2BYvWIbkLx9nBP9u2cndmTv7%2FC5%2F887HnOcEd3G6RTOR%2B77kU2do%2BEu%2B9%2B43yBMlJq4l1fofS3Mc%2F8%2F%2FNCTBm5ItEPbafAS6Fy0NO0jbM0i1%2BsCbqrhje32IbIjKLOfQWWkM7P3jiSV57cSGB97itlYxqF%2BFmhb8SXtIxv7HRLezOefUCIzmvUNjhohuFUGrJRe1mJUb8PfaRQhFfZ%2F7KcsgoS4jFmN3Rh7fj5fdydhbtDzpeg0KsTqz8nSavgzu6diupz0MgrUXifzyFmf9zCIkuMtvuFQvaZwgRcAoimvbKwK%2B5uHtEl%2BWG7uv82WgAoflm2ERHtSq2o%2FUhJqpmuYiLNKVn%2BwyzQ0p9EMLKojPTBUeybF6bgs9IvK0TGcylLh2nEWXnnOlQ7fQ%2BOyfKDR3cT2tpZaSjSXufB1439wqY%2Fzv6vxxg%2B3bJ3ws5hc9aJsSYWNbsd5AYCGOyMXZCY3%2BCHmvTERLhw%2Fkm43KXGN5baeUushFqTRjQ8Uirt1Dx4ZhedZHnOL3pGg5%2BuOU520qMWV1WeZaKPfo57ezlaST7rbo6oe9JAlEv4%2B2MMCuh74GOqUBr6pbvmXB4ePCn4kjZhzmO3u1N0703i0nvVTorm3lkOMuoaUedxntDgcIESoBrrUnGms2ydHASQQmMupC1Fz6pr%2B3WwVxLgA7wGXcgczuehy1O4j2%2FAetODa6U186ZPqcJHnrz29xk116PZ25vbUaKbjo84WtW4U7uwfXwxv0BqbIDk2BnMG7uT%2FHcEOo6zeMnicayGmtBTxKfeyTGQ6jeRQ2mr81&X-Amz-Signature=436f8fad78a3bacc2ae09c579334f4835b16000d6b5397a816c38ed6b0953dde&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
