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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR33WOIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASFPks6QIbc%2Bm9JCHJQnWcWqdmneRg3SH0thkfF8okgIgTIEvG6u6I5tHwArSYHLQIv68MwbVM3TQIQ4u%2FyWMjcwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRJEgob21s3xyZgMyrcA7saHtRmZN1iJlDlswOi3kgO9a9kyBMnZoCikX8tETBBQX57RokQso%2FqTsCLkgxAMInHqV7dK2paCYqdJc%2B2C%2FUKfwyuS5RMf4kH%2F%2BIvuwyhnDwJHVbxIOR79D3FjJcglprXFoI0httK0sOIa3TlUDJ0ASjpZnqa0%2FMUEcxMSf7AxYqWzYp1AIJED1rKiViOwmkcD67176zWfUmPPAaMiZhfJvIFydX9zqjrP82Y2A2nunyn9EvxiP3ONJvejkJa34iPa5g4nCTN4Eq9MmyGmb00yzAG15%2Ba%2BUWDpCLhJYL6NrpZ50yQDTbiUKvOLv0o07yxgTT1QBAxk7ReW%2BIYmwrNCI%2BpKj%2BcU3VcUvkqYGNmqYV7I%2FEBT%2F8BUL361uVOXvazm0lRvu3%2FIjzZyjFbUpwmzL4ML11olNdTSDdbmSdCPjXDjCJ2gzMYwMgAQitiNJ91Y6M%2Bd4VW2xi1m0g9mJ1T2hfGmYQwNio85aBFRtqIS1zRQNUv2xVKsBXppEal6c%2FwPdpnB9qoSFBK5KOz5ODTFR%2FvfwMGkVD%2BGW1mMbv%2Bftgq3aunrBKYtnhGXvTz74VQDx4uwLTDDPacxLXT%2FihpInu2gUf%2BXDjAbjD19zPiSUPUaEfmI0uXW95cMLuow8MGOqUB75hzTewAMBugocXzSEMAJ81AVhT27U9EyTKztiH3asfjy8yumyNbuxs6rWAF5XXiBftI3u1gYQgIMJWCaP2EfchN4Q2p0A6VmIK39aV0ZygThf%2BB88aHK6Sg%2BqTm%2F%2FMO4nbffIohNuyCEVLXoyO669e9ov62%2FdZKDTS5ynzwdK2pB3Numz3g7zySZFnI%2FaGKtNVFQOQWH%2FJ3mZIPYkV5QXfT6kQ6&X-Amz-Signature=7301972296a67726dd60a31c1014225e95b238504721bc1374bb024574f43b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR33WOIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASFPks6QIbc%2Bm9JCHJQnWcWqdmneRg3SH0thkfF8okgIgTIEvG6u6I5tHwArSYHLQIv68MwbVM3TQIQ4u%2FyWMjcwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRJEgob21s3xyZgMyrcA7saHtRmZN1iJlDlswOi3kgO9a9kyBMnZoCikX8tETBBQX57RokQso%2FqTsCLkgxAMInHqV7dK2paCYqdJc%2B2C%2FUKfwyuS5RMf4kH%2F%2BIvuwyhnDwJHVbxIOR79D3FjJcglprXFoI0httK0sOIa3TlUDJ0ASjpZnqa0%2FMUEcxMSf7AxYqWzYp1AIJED1rKiViOwmkcD67176zWfUmPPAaMiZhfJvIFydX9zqjrP82Y2A2nunyn9EvxiP3ONJvejkJa34iPa5g4nCTN4Eq9MmyGmb00yzAG15%2Ba%2BUWDpCLhJYL6NrpZ50yQDTbiUKvOLv0o07yxgTT1QBAxk7ReW%2BIYmwrNCI%2BpKj%2BcU3VcUvkqYGNmqYV7I%2FEBT%2F8BUL361uVOXvazm0lRvu3%2FIjzZyjFbUpwmzL4ML11olNdTSDdbmSdCPjXDjCJ2gzMYwMgAQitiNJ91Y6M%2Bd4VW2xi1m0g9mJ1T2hfGmYQwNio85aBFRtqIS1zRQNUv2xVKsBXppEal6c%2FwPdpnB9qoSFBK5KOz5ODTFR%2FvfwMGkVD%2BGW1mMbv%2Bftgq3aunrBKYtnhGXvTz74VQDx4uwLTDDPacxLXT%2FihpInu2gUf%2BXDjAbjD19zPiSUPUaEfmI0uXW95cMLuow8MGOqUB75hzTewAMBugocXzSEMAJ81AVhT27U9EyTKztiH3asfjy8yumyNbuxs6rWAF5XXiBftI3u1gYQgIMJWCaP2EfchN4Q2p0A6VmIK39aV0ZygThf%2BB88aHK6Sg%2BqTm%2F%2FMO4nbffIohNuyCEVLXoyO669e9ov62%2FdZKDTS5ynzwdK2pB3Numz3g7zySZFnI%2FaGKtNVFQOQWH%2FJ3mZIPYkV5QXfT6kQ6&X-Amz-Signature=ad06be7a0db6434216eb09d440af75c77c6c0906d0a8c756ec1a4c3c2ee53eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR33WOIZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASFPks6QIbc%2Bm9JCHJQnWcWqdmneRg3SH0thkfF8okgIgTIEvG6u6I5tHwArSYHLQIv68MwbVM3TQIQ4u%2FyWMjcwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRJEgob21s3xyZgMyrcA7saHtRmZN1iJlDlswOi3kgO9a9kyBMnZoCikX8tETBBQX57RokQso%2FqTsCLkgxAMInHqV7dK2paCYqdJc%2B2C%2FUKfwyuS5RMf4kH%2F%2BIvuwyhnDwJHVbxIOR79D3FjJcglprXFoI0httK0sOIa3TlUDJ0ASjpZnqa0%2FMUEcxMSf7AxYqWzYp1AIJED1rKiViOwmkcD67176zWfUmPPAaMiZhfJvIFydX9zqjrP82Y2A2nunyn9EvxiP3ONJvejkJa34iPa5g4nCTN4Eq9MmyGmb00yzAG15%2Ba%2BUWDpCLhJYL6NrpZ50yQDTbiUKvOLv0o07yxgTT1QBAxk7ReW%2BIYmwrNCI%2BpKj%2BcU3VcUvkqYGNmqYV7I%2FEBT%2F8BUL361uVOXvazm0lRvu3%2FIjzZyjFbUpwmzL4ML11olNdTSDdbmSdCPjXDjCJ2gzMYwMgAQitiNJ91Y6M%2Bd4VW2xi1m0g9mJ1T2hfGmYQwNio85aBFRtqIS1zRQNUv2xVKsBXppEal6c%2FwPdpnB9qoSFBK5KOz5ODTFR%2FvfwMGkVD%2BGW1mMbv%2Bftgq3aunrBKYtnhGXvTz74VQDx4uwLTDDPacxLXT%2FihpInu2gUf%2BXDjAbjD19zPiSUPUaEfmI0uXW95cMLuow8MGOqUB75hzTewAMBugocXzSEMAJ81AVhT27U9EyTKztiH3asfjy8yumyNbuxs6rWAF5XXiBftI3u1gYQgIMJWCaP2EfchN4Q2p0A6VmIK39aV0ZygThf%2BB88aHK6Sg%2BqTm%2F%2FMO4nbffIohNuyCEVLXoyO669e9ov62%2FdZKDTS5ynzwdK2pB3Numz3g7zySZFnI%2FaGKtNVFQOQWH%2FJ3mZIPYkV5QXfT6kQ6&X-Amz-Signature=27d4be021941f7e3fa3c0bd7a5f14c23226243fba4e1cfe5728f83c23e9f1a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
