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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEEOHPM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICz1qruaF%2F8K%2Bz2e1k0p6bVEORUYe0uOdWM76QSvDfK6AiEAxIl5X2Ursk2E1eY0JhtCiP3zm7qU%2BVch0bqbz%2FNFY50qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO3z%2FiaNCb0gKaqKyrcA%2FRgX1SKtBDgrxPaZb5sjuXKqHLxcSvTfnmFKQVgsoZb69Og%2BT%2B3z2veCjNUlam3hxfPGeo5cv6LlSFwyknn12gP0g8hjRfgRtOOckbgt165cjw2j2uYOOOYp03k661wtXfE6jt%2FbeeWOFFHjZETrcz0Q7PRYYV%2B24VzO61ovmgWX%2FsdEGzwMHu1%2BecxEhMqAI48QipQpwBodgGBJOo6OEh0Eho%2FBeV6xKtx3jcTYKJRNSx3nu1kbOQI20ii0%2BoLjnPrpeykLHEpwANJFdgQXT2hcxVKHIxNE1gMJ8Qdj3o6VBqKe1my74ZpsVJkJOCgD3sbjr4xIWRXrisWCsDmgr%2B6tz15DnPH6IfKu%2B1DOhyTsANKYNYUa59m6xabpOAcsWFjoMzYWfcvuPMo5%2Bsc38J2QpVd2LH%2BBnngnpGal%2BzLiPcLrl4kUd6aq4oQU3qmsGI%2FMPFEVZmLB%2FF15fDvD3HU9JOjeNfrWRsiY4mqJXtCHnfC7M%2FsvHsGed%2Bzb5qeqn2Hmw6DTz%2BeXNf3WrlQWnitGsRTeRVakb%2BWeIZ0wkO6Nt8IxofLG%2FI4s%2FRrYSZDxDnk0wmAi1aB6JB%2F2WBEQrev6wTOEEe%2F1vQA3XTab2ckSArTayEdwpmEA1FeMILpycIGOqUBWTccMnL3l%2Fi4sNjXT7tHZZb0NvC6eQNAPxVijirqGXerkXtph%2FL8gF08YDM1kIzdRYOo3L9kWWvZkm3c8wYzTBx8KMKZrI67LMY%2FvDosTYytUzB5kOPUIyCaZgJa34lDRMyLWO0soO8bjgbRrEq1FtIIhqmt8v4JL9hn6bRwmtsd81L3yalX9Ria0%2BftBVt8veZohwDMLTlXwEsrEzBS9bYaq6ZI&X-Amz-Signature=c98b451ce47ae00a3b5366c657b746046a8d33eb3dbb8cf369c662bdc8b9c1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEEOHPM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICz1qruaF%2F8K%2Bz2e1k0p6bVEORUYe0uOdWM76QSvDfK6AiEAxIl5X2Ursk2E1eY0JhtCiP3zm7qU%2BVch0bqbz%2FNFY50qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO3z%2FiaNCb0gKaqKyrcA%2FRgX1SKtBDgrxPaZb5sjuXKqHLxcSvTfnmFKQVgsoZb69Og%2BT%2B3z2veCjNUlam3hxfPGeo5cv6LlSFwyknn12gP0g8hjRfgRtOOckbgt165cjw2j2uYOOOYp03k661wtXfE6jt%2FbeeWOFFHjZETrcz0Q7PRYYV%2B24VzO61ovmgWX%2FsdEGzwMHu1%2BecxEhMqAI48QipQpwBodgGBJOo6OEh0Eho%2FBeV6xKtx3jcTYKJRNSx3nu1kbOQI20ii0%2BoLjnPrpeykLHEpwANJFdgQXT2hcxVKHIxNE1gMJ8Qdj3o6VBqKe1my74ZpsVJkJOCgD3sbjr4xIWRXrisWCsDmgr%2B6tz15DnPH6IfKu%2B1DOhyTsANKYNYUa59m6xabpOAcsWFjoMzYWfcvuPMo5%2Bsc38J2QpVd2LH%2BBnngnpGal%2BzLiPcLrl4kUd6aq4oQU3qmsGI%2FMPFEVZmLB%2FF15fDvD3HU9JOjeNfrWRsiY4mqJXtCHnfC7M%2FsvHsGed%2Bzb5qeqn2Hmw6DTz%2BeXNf3WrlQWnitGsRTeRVakb%2BWeIZ0wkO6Nt8IxofLG%2FI4s%2FRrYSZDxDnk0wmAi1aB6JB%2F2WBEQrev6wTOEEe%2F1vQA3XTab2ckSArTayEdwpmEA1FeMILpycIGOqUBWTccMnL3l%2Fi4sNjXT7tHZZb0NvC6eQNAPxVijirqGXerkXtph%2FL8gF08YDM1kIzdRYOo3L9kWWvZkm3c8wYzTBx8KMKZrI67LMY%2FvDosTYytUzB5kOPUIyCaZgJa34lDRMyLWO0soO8bjgbRrEq1FtIIhqmt8v4JL9hn6bRwmtsd81L3yalX9Ria0%2BftBVt8veZohwDMLTlXwEsrEzBS9bYaq6ZI&X-Amz-Signature=b74f2187d0eaf6cf48bde97f25a91f662809beff83a4471cbe71114fe6083c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEEOHPM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICz1qruaF%2F8K%2Bz2e1k0p6bVEORUYe0uOdWM76QSvDfK6AiEAxIl5X2Ursk2E1eY0JhtCiP3zm7qU%2BVch0bqbz%2FNFY50qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO3z%2FiaNCb0gKaqKyrcA%2FRgX1SKtBDgrxPaZb5sjuXKqHLxcSvTfnmFKQVgsoZb69Og%2BT%2B3z2veCjNUlam3hxfPGeo5cv6LlSFwyknn12gP0g8hjRfgRtOOckbgt165cjw2j2uYOOOYp03k661wtXfE6jt%2FbeeWOFFHjZETrcz0Q7PRYYV%2B24VzO61ovmgWX%2FsdEGzwMHu1%2BecxEhMqAI48QipQpwBodgGBJOo6OEh0Eho%2FBeV6xKtx3jcTYKJRNSx3nu1kbOQI20ii0%2BoLjnPrpeykLHEpwANJFdgQXT2hcxVKHIxNE1gMJ8Qdj3o6VBqKe1my74ZpsVJkJOCgD3sbjr4xIWRXrisWCsDmgr%2B6tz15DnPH6IfKu%2B1DOhyTsANKYNYUa59m6xabpOAcsWFjoMzYWfcvuPMo5%2Bsc38J2QpVd2LH%2BBnngnpGal%2BzLiPcLrl4kUd6aq4oQU3qmsGI%2FMPFEVZmLB%2FF15fDvD3HU9JOjeNfrWRsiY4mqJXtCHnfC7M%2FsvHsGed%2Bzb5qeqn2Hmw6DTz%2BeXNf3WrlQWnitGsRTeRVakb%2BWeIZ0wkO6Nt8IxofLG%2FI4s%2FRrYSZDxDnk0wmAi1aB6JB%2F2WBEQrev6wTOEEe%2F1vQA3XTab2ckSArTayEdwpmEA1FeMILpycIGOqUBWTccMnL3l%2Fi4sNjXT7tHZZb0NvC6eQNAPxVijirqGXerkXtph%2FL8gF08YDM1kIzdRYOo3L9kWWvZkm3c8wYzTBx8KMKZrI67LMY%2FvDosTYytUzB5kOPUIyCaZgJa34lDRMyLWO0soO8bjgbRrEq1FtIIhqmt8v4JL9hn6bRwmtsd81L3yalX9Ria0%2BftBVt8veZohwDMLTlXwEsrEzBS9bYaq6ZI&X-Amz-Signature=e4fc10bf57f6ce4c4ef3880946299ebc779dea1847d4a34dfac5bc3b2ec9502a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
