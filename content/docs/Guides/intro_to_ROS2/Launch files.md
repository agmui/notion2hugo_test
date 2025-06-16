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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPRBVUX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDRysiq%2FsTO02cpTqbwEUwGBUUkBaQHXS7cpDjwZFhmMgIhAMPFQsk0P%2BO0u%2FsUKqhp5dQ3ppc3mHijibLe0YMbQfhNKv8DCF8QABoMNjM3NDIzMTgzODA1Igxsf4X2AWJCboNf7oUq3APeVsuWNJODb7KizKSUNfpCcUSsAOnp%2F32eio2HEcx0opeXGEjibQ3g87oBwZWoxHaj9mXAob72sXB4FKnJyIzD7aoeb7y%2FUrh0eDQI9Witlhj7fmIl4zc4gdG14%2F5cC9%2FXW9qTCgdbl2sTS0dx2%2FjTLux2yfUjigu3Ct8V7pGpn%2BjfIsEzNb34yfKSgK21H5hSW%2F5IHD67wmGc9T2V6SdaYvFqWAEd%2FLEuMYYgxNE56LmZGXMhHjEQe03SltkZpz8G72jnoy0YUTTA29678mJURE8qUSYIontnh5tQTZmn5TQW%2F4oeYDvCHLv6z9DhQVLxkGaen9Q1%2FaP6IHAMetfgP854eLId2OSPTpB7YCZFIDYo9X4jciK82uQTVw%2BWOp0xzzxB2s39zhPKfnWujx9Sh%2B4QLVu%2F4ZVH8amFDn8tf32UeHudcktZV2DVGkkdkonPWOP1KiwlNUUU8D31aRoLLe9LRwpOyWSbMPsEs5BaeV76Mb1QFL5%2Bki3EEUI4B6gucc2qMibvrextGoDeP%2Feb4M0Kjn7dyTRcUmuUiKaSVsyb6acoZxUOlNqWai1PBq0fucI9wPmTri0K2UDNzPk%2ByPxW2MJLeCNGS65XDlqGUJuAgoXOAq9f9dmTSzChycDCBjqkAdU0qD0P%2BuLg%2Fm5p0V0CbBHb5l9IR3K7Hw8YELdiTsflE28oFE3J%2BQbexyKsy08LegHTatEVzfaB5DSbTYE1PSc10H3lwL26pdcpURepvld95cRx4MJv%2F8Jb3aN%2Bui%2BAWfAsl4BYCUzW7R%2Bz3fgvz3Ch0ac8Rp5C0MYL05PWnHPl%2FSc3mv8hlWs0F665Z2f7Z6aTfND3xoSiRnFaU%2FDuBo2GWDtJ&X-Amz-Signature=09125f904391005f4a62d44d8caba6aa68ab5cc9006f7f3e917bea06a1e9ea17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPRBVUX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDRysiq%2FsTO02cpTqbwEUwGBUUkBaQHXS7cpDjwZFhmMgIhAMPFQsk0P%2BO0u%2FsUKqhp5dQ3ppc3mHijibLe0YMbQfhNKv8DCF8QABoMNjM3NDIzMTgzODA1Igxsf4X2AWJCboNf7oUq3APeVsuWNJODb7KizKSUNfpCcUSsAOnp%2F32eio2HEcx0opeXGEjibQ3g87oBwZWoxHaj9mXAob72sXB4FKnJyIzD7aoeb7y%2FUrh0eDQI9Witlhj7fmIl4zc4gdG14%2F5cC9%2FXW9qTCgdbl2sTS0dx2%2FjTLux2yfUjigu3Ct8V7pGpn%2BjfIsEzNb34yfKSgK21H5hSW%2F5IHD67wmGc9T2V6SdaYvFqWAEd%2FLEuMYYgxNE56LmZGXMhHjEQe03SltkZpz8G72jnoy0YUTTA29678mJURE8qUSYIontnh5tQTZmn5TQW%2F4oeYDvCHLv6z9DhQVLxkGaen9Q1%2FaP6IHAMetfgP854eLId2OSPTpB7YCZFIDYo9X4jciK82uQTVw%2BWOp0xzzxB2s39zhPKfnWujx9Sh%2B4QLVu%2F4ZVH8amFDn8tf32UeHudcktZV2DVGkkdkonPWOP1KiwlNUUU8D31aRoLLe9LRwpOyWSbMPsEs5BaeV76Mb1QFL5%2Bki3EEUI4B6gucc2qMibvrextGoDeP%2Feb4M0Kjn7dyTRcUmuUiKaSVsyb6acoZxUOlNqWai1PBq0fucI9wPmTri0K2UDNzPk%2ByPxW2MJLeCNGS65XDlqGUJuAgoXOAq9f9dmTSzChycDCBjqkAdU0qD0P%2BuLg%2Fm5p0V0CbBHb5l9IR3K7Hw8YELdiTsflE28oFE3J%2BQbexyKsy08LegHTatEVzfaB5DSbTYE1PSc10H3lwL26pdcpURepvld95cRx4MJv%2F8Jb3aN%2Bui%2BAWfAsl4BYCUzW7R%2Bz3fgvz3Ch0ac8Rp5C0MYL05PWnHPl%2FSc3mv8hlWs0F665Z2f7Z6aTfND3xoSiRnFaU%2FDuBo2GWDtJ&X-Amz-Signature=c5fa6e0d599be217db0670388707978ba2a972e59dfa91f4c87bb9cc5c357279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPRBVUX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDRysiq%2FsTO02cpTqbwEUwGBUUkBaQHXS7cpDjwZFhmMgIhAMPFQsk0P%2BO0u%2FsUKqhp5dQ3ppc3mHijibLe0YMbQfhNKv8DCF8QABoMNjM3NDIzMTgzODA1Igxsf4X2AWJCboNf7oUq3APeVsuWNJODb7KizKSUNfpCcUSsAOnp%2F32eio2HEcx0opeXGEjibQ3g87oBwZWoxHaj9mXAob72sXB4FKnJyIzD7aoeb7y%2FUrh0eDQI9Witlhj7fmIl4zc4gdG14%2F5cC9%2FXW9qTCgdbl2sTS0dx2%2FjTLux2yfUjigu3Ct8V7pGpn%2BjfIsEzNb34yfKSgK21H5hSW%2F5IHD67wmGc9T2V6SdaYvFqWAEd%2FLEuMYYgxNE56LmZGXMhHjEQe03SltkZpz8G72jnoy0YUTTA29678mJURE8qUSYIontnh5tQTZmn5TQW%2F4oeYDvCHLv6z9DhQVLxkGaen9Q1%2FaP6IHAMetfgP854eLId2OSPTpB7YCZFIDYo9X4jciK82uQTVw%2BWOp0xzzxB2s39zhPKfnWujx9Sh%2B4QLVu%2F4ZVH8amFDn8tf32UeHudcktZV2DVGkkdkonPWOP1KiwlNUUU8D31aRoLLe9LRwpOyWSbMPsEs5BaeV76Mb1QFL5%2Bki3EEUI4B6gucc2qMibvrextGoDeP%2Feb4M0Kjn7dyTRcUmuUiKaSVsyb6acoZxUOlNqWai1PBq0fucI9wPmTri0K2UDNzPk%2ByPxW2MJLeCNGS65XDlqGUJuAgoXOAq9f9dmTSzChycDCBjqkAdU0qD0P%2BuLg%2Fm5p0V0CbBHb5l9IR3K7Hw8YELdiTsflE28oFE3J%2BQbexyKsy08LegHTatEVzfaB5DSbTYE1PSc10H3lwL26pdcpURepvld95cRx4MJv%2F8Jb3aN%2Bui%2BAWfAsl4BYCUzW7R%2Bz3fgvz3Ch0ac8Rp5C0MYL05PWnHPl%2FSc3mv8hlWs0F665Z2f7Z6aTfND3xoSiRnFaU%2FDuBo2GWDtJ&X-Amz-Signature=84fe9fdd9c4cb6e7fcd92e5e062258cd6f1c1d8382e8c1d9ac35666f587b7d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
