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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X44ZU5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4gwCfTcm0yVPLonaLBA7XOJSg17vQQdw2QG0cfBzlcAiEAlKNEtZsNiFwlcKcMbkTXFjkZHlTUrnOuFZ8F5OExugYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUmvswKGXmEY0FDYSrcA4WgA%2Brjd2A2nvqDC6nl9JZNgNvDFjsZnOqX0Mt6xtx7SpROzmAHdOaaKeLw4H6CEDqbsU0XLvX5iKAR%2F5zkfFZaNqWZIErC6RNW0W%2Bal44D5qDhLBw9sxrf6xgJhyhnzFfGDnk5Lt2jMCzVlgIlCpKB8qiApVQd4WRWlWmDsVtlvlYoSWs4tVb1ZEBj9R%2BX1M3HHcf6Oqklle7E7onQ5feIYF6s2%2B3n7oRJxayHYeDQuW6KogPLglvmEoOknNzMHSrDmoYdixIjT3%2B5YpHwQnTQtUEvP035fSRAAyBBewKFxx0TRqchiOmewzz6pEvgjoVLlT4UjFjF3LXxKcpHF7V94kY2hmXU2XJiQb172FArLNWIwNW4LUSrOyhTwgL15Zdss5LwgjMkSTuJSEXydhgqH4FqEEQa19kKJ9PUhii0ON%2BzwV4ZikQt9abJlJoWF9doyG6NZtX1SDm3xkHkPjmVGEgRExpwa107ex%2FQLNl8Cew7qzEF2sWmXQrwEWQLtAFdsc1xqgUSpiOLBCW0wN6SxY5Db1uYE1BsXqs39nQHpddRv4E%2F96Y2luBbHdAiA4odTnYhZHrRhv%2Bk3CbnK8xqVB%2Bkuw%2B6f9BDtgc0yikB7DaMgvQFAP3TVdvEMKiL38QGOqUBjca%2F5AKaEKcJnw2aI8zgPNzj3jfVAqNsiAnhySBH6BAEUAjah8CGlApDlpd%2Bn4JSHD3T4bM1m9Gl2BbCSAeSXbq%2Fw92pFw7N1A6lj87VzOlAgac67ala%2BbvpBWiXqJkT%2FTSOtN9YK3GgTrFeEaae1LDUPeoXetEUEitJnMdnDSvEIHXjCUTC8q%2BmX%2FM2%2B3tZL0J4P7Rrn518jIde4DrMUjhUsOuI&X-Amz-Signature=7e2e804efc120a008e349dd99ce59476d8917985969b34c93c62b60c2736048a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X44ZU5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4gwCfTcm0yVPLonaLBA7XOJSg17vQQdw2QG0cfBzlcAiEAlKNEtZsNiFwlcKcMbkTXFjkZHlTUrnOuFZ8F5OExugYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUmvswKGXmEY0FDYSrcA4WgA%2Brjd2A2nvqDC6nl9JZNgNvDFjsZnOqX0Mt6xtx7SpROzmAHdOaaKeLw4H6CEDqbsU0XLvX5iKAR%2F5zkfFZaNqWZIErC6RNW0W%2Bal44D5qDhLBw9sxrf6xgJhyhnzFfGDnk5Lt2jMCzVlgIlCpKB8qiApVQd4WRWlWmDsVtlvlYoSWs4tVb1ZEBj9R%2BX1M3HHcf6Oqklle7E7onQ5feIYF6s2%2B3n7oRJxayHYeDQuW6KogPLglvmEoOknNzMHSrDmoYdixIjT3%2B5YpHwQnTQtUEvP035fSRAAyBBewKFxx0TRqchiOmewzz6pEvgjoVLlT4UjFjF3LXxKcpHF7V94kY2hmXU2XJiQb172FArLNWIwNW4LUSrOyhTwgL15Zdss5LwgjMkSTuJSEXydhgqH4FqEEQa19kKJ9PUhii0ON%2BzwV4ZikQt9abJlJoWF9doyG6NZtX1SDm3xkHkPjmVGEgRExpwa107ex%2FQLNl8Cew7qzEF2sWmXQrwEWQLtAFdsc1xqgUSpiOLBCW0wN6SxY5Db1uYE1BsXqs39nQHpddRv4E%2F96Y2luBbHdAiA4odTnYhZHrRhv%2Bk3CbnK8xqVB%2Bkuw%2B6f9BDtgc0yikB7DaMgvQFAP3TVdvEMKiL38QGOqUBjca%2F5AKaEKcJnw2aI8zgPNzj3jfVAqNsiAnhySBH6BAEUAjah8CGlApDlpd%2Bn4JSHD3T4bM1m9Gl2BbCSAeSXbq%2Fw92pFw7N1A6lj87VzOlAgac67ala%2BbvpBWiXqJkT%2FTSOtN9YK3GgTrFeEaae1LDUPeoXetEUEitJnMdnDSvEIHXjCUTC8q%2BmX%2FM2%2B3tZL0J4P7Rrn518jIde4DrMUjhUsOuI&X-Amz-Signature=3ec5c10f73cea99f9552e1c980b6a363b0f53245960338ec2c3e4a7c5f3d0021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X44ZU5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4gwCfTcm0yVPLonaLBA7XOJSg17vQQdw2QG0cfBzlcAiEAlKNEtZsNiFwlcKcMbkTXFjkZHlTUrnOuFZ8F5OExugYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUmvswKGXmEY0FDYSrcA4WgA%2Brjd2A2nvqDC6nl9JZNgNvDFjsZnOqX0Mt6xtx7SpROzmAHdOaaKeLw4H6CEDqbsU0XLvX5iKAR%2F5zkfFZaNqWZIErC6RNW0W%2Bal44D5qDhLBw9sxrf6xgJhyhnzFfGDnk5Lt2jMCzVlgIlCpKB8qiApVQd4WRWlWmDsVtlvlYoSWs4tVb1ZEBj9R%2BX1M3HHcf6Oqklle7E7onQ5feIYF6s2%2B3n7oRJxayHYeDQuW6KogPLglvmEoOknNzMHSrDmoYdixIjT3%2B5YpHwQnTQtUEvP035fSRAAyBBewKFxx0TRqchiOmewzz6pEvgjoVLlT4UjFjF3LXxKcpHF7V94kY2hmXU2XJiQb172FArLNWIwNW4LUSrOyhTwgL15Zdss5LwgjMkSTuJSEXydhgqH4FqEEQa19kKJ9PUhii0ON%2BzwV4ZikQt9abJlJoWF9doyG6NZtX1SDm3xkHkPjmVGEgRExpwa107ex%2FQLNl8Cew7qzEF2sWmXQrwEWQLtAFdsc1xqgUSpiOLBCW0wN6SxY5Db1uYE1BsXqs39nQHpddRv4E%2F96Y2luBbHdAiA4odTnYhZHrRhv%2Bk3CbnK8xqVB%2Bkuw%2B6f9BDtgc0yikB7DaMgvQFAP3TVdvEMKiL38QGOqUBjca%2F5AKaEKcJnw2aI8zgPNzj3jfVAqNsiAnhySBH6BAEUAjah8CGlApDlpd%2Bn4JSHD3T4bM1m9Gl2BbCSAeSXbq%2Fw92pFw7N1A6lj87VzOlAgac67ala%2BbvpBWiXqJkT%2FTSOtN9YK3GgTrFeEaae1LDUPeoXetEUEitJnMdnDSvEIHXjCUTC8q%2BmX%2FM2%2B3tZL0J4P7Rrn518jIde4DrMUjhUsOuI&X-Amz-Signature=8cf8bf44359352999d7d4058a6971a69b67dfbf7f2a230cab31c1be9098ce1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
