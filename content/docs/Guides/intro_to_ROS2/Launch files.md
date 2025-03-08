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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPK2GVB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGiN9WP%2FNrAREW8iOWSVut4zYyLQruNG5yGewSQ6nMDEAiAyXV6x9zA8slpXyup7e%2BwzwX6z6kwKErdIe57%2BNrF6RCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIML1Hf09Sn8X0fvN85KtwDM2ltci46GMzurmSy20xLb0t%2BeeV2eckd5iKPXdbFtwG7TQS5DW7V8gxXJph%2FKLWs5SqWxeq8i9CFD1hn0R4WGSvMGG5Ey83EfUiJIFzXg9SjHeRMJwqTWOiyPS%2Fg3rq%2FZARNVdhpkWNtV%2FQb4X1KsRUgFLiWtQKTHc0ZaOpar3b5tvXe5DDo9EX8zw5gA6pFSEjpudzLV1GqGLBWwT4x76mTd8Us3fYMXqoiSkSIB%2Fw6tzoAE7SGQCsiuA7socHYlkcW6n6CM3%2FLJub1xyXnP1IA6wbT1jJu6jNccEU7ao8B%2BoxhszkGkRqYKXuKL81l4%2B5v19MUbYXIM5T4iurFxl%2BS6fVCzWPzvLnwTsU%2BUhlkyq2Jexu%2FSU0ZCnoLdYEC9FztFz2J4Qh7SxQCafjeijYg4p92lV7r5uIqPPdPHn934SD26KS3W0xaGFofCSDr4jzC7bL6UYcb6xK5XSB1gLMNAdOTd0wRMtEXCw2%2FZTwNR9dr5X6dvriaW%2FldBbBhNO7ajhWK7LSUWSHSI5Kg%2BL%2Bt4kRXC0YhaSs0u7xDkUUVdBanB3jhNkOPgqjiP%2Bti%2FOx%2BhdX5jmMl95VoRF%2B%2Fd3%2FS9vTvJaiYKE3yt2ZTDjCoS6Os17X8JNC9KvEwvOCvvgY6pgEHqhxKmoNut045VWAJHHkyOCMh1NDso6vXhH5Z1KZkEI%2FRAyFAwTwS6qZE2TTj8cq%2FRzF5lymwH3eYrTqxv9D3U7AKKFZS9jy0asf4Dbj21NPrnjT%2BoEAEIU2h6u5I21htkoE9pxYer3VlNN3OTLwTsYTwio3Mk8i4%2B56SPEArsVVVqErKu5XD8PqROskSNw9okZ3t3A5Kg4mIIhwMfKm7TEQMVGXv&X-Amz-Signature=7fea4ebc657f2405c128452ca3e9a994e07381cd2080b04d9b7c07d7a023cf33&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPK2GVB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGiN9WP%2FNrAREW8iOWSVut4zYyLQruNG5yGewSQ6nMDEAiAyXV6x9zA8slpXyup7e%2BwzwX6z6kwKErdIe57%2BNrF6RCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIML1Hf09Sn8X0fvN85KtwDM2ltci46GMzurmSy20xLb0t%2BeeV2eckd5iKPXdbFtwG7TQS5DW7V8gxXJph%2FKLWs5SqWxeq8i9CFD1hn0R4WGSvMGG5Ey83EfUiJIFzXg9SjHeRMJwqTWOiyPS%2Fg3rq%2FZARNVdhpkWNtV%2FQb4X1KsRUgFLiWtQKTHc0ZaOpar3b5tvXe5DDo9EX8zw5gA6pFSEjpudzLV1GqGLBWwT4x76mTd8Us3fYMXqoiSkSIB%2Fw6tzoAE7SGQCsiuA7socHYlkcW6n6CM3%2FLJub1xyXnP1IA6wbT1jJu6jNccEU7ao8B%2BoxhszkGkRqYKXuKL81l4%2B5v19MUbYXIM5T4iurFxl%2BS6fVCzWPzvLnwTsU%2BUhlkyq2Jexu%2FSU0ZCnoLdYEC9FztFz2J4Qh7SxQCafjeijYg4p92lV7r5uIqPPdPHn934SD26KS3W0xaGFofCSDr4jzC7bL6UYcb6xK5XSB1gLMNAdOTd0wRMtEXCw2%2FZTwNR9dr5X6dvriaW%2FldBbBhNO7ajhWK7LSUWSHSI5Kg%2BL%2Bt4kRXC0YhaSs0u7xDkUUVdBanB3jhNkOPgqjiP%2Bti%2FOx%2BhdX5jmMl95VoRF%2B%2Fd3%2FS9vTvJaiYKE3yt2ZTDjCoS6Os17X8JNC9KvEwvOCvvgY6pgEHqhxKmoNut045VWAJHHkyOCMh1NDso6vXhH5Z1KZkEI%2FRAyFAwTwS6qZE2TTj8cq%2FRzF5lymwH3eYrTqxv9D3U7AKKFZS9jy0asf4Dbj21NPrnjT%2BoEAEIU2h6u5I21htkoE9pxYer3VlNN3OTLwTsYTwio3Mk8i4%2B56SPEArsVVVqErKu5XD8PqROskSNw9okZ3t3A5Kg4mIIhwMfKm7TEQMVGXv&X-Amz-Signature=89133eb501886acd964fb749777208bf4b2a9bd7303ee1ef936705e52f553ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPK2GVB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGiN9WP%2FNrAREW8iOWSVut4zYyLQruNG5yGewSQ6nMDEAiAyXV6x9zA8slpXyup7e%2BwzwX6z6kwKErdIe57%2BNrF6RCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIML1Hf09Sn8X0fvN85KtwDM2ltci46GMzurmSy20xLb0t%2BeeV2eckd5iKPXdbFtwG7TQS5DW7V8gxXJph%2FKLWs5SqWxeq8i9CFD1hn0R4WGSvMGG5Ey83EfUiJIFzXg9SjHeRMJwqTWOiyPS%2Fg3rq%2FZARNVdhpkWNtV%2FQb4X1KsRUgFLiWtQKTHc0ZaOpar3b5tvXe5DDo9EX8zw5gA6pFSEjpudzLV1GqGLBWwT4x76mTd8Us3fYMXqoiSkSIB%2Fw6tzoAE7SGQCsiuA7socHYlkcW6n6CM3%2FLJub1xyXnP1IA6wbT1jJu6jNccEU7ao8B%2BoxhszkGkRqYKXuKL81l4%2B5v19MUbYXIM5T4iurFxl%2BS6fVCzWPzvLnwTsU%2BUhlkyq2Jexu%2FSU0ZCnoLdYEC9FztFz2J4Qh7SxQCafjeijYg4p92lV7r5uIqPPdPHn934SD26KS3W0xaGFofCSDr4jzC7bL6UYcb6xK5XSB1gLMNAdOTd0wRMtEXCw2%2FZTwNR9dr5X6dvriaW%2FldBbBhNO7ajhWK7LSUWSHSI5Kg%2BL%2Bt4kRXC0YhaSs0u7xDkUUVdBanB3jhNkOPgqjiP%2Bti%2FOx%2BhdX5jmMl95VoRF%2B%2Fd3%2FS9vTvJaiYKE3yt2ZTDjCoS6Os17X8JNC9KvEwvOCvvgY6pgEHqhxKmoNut045VWAJHHkyOCMh1NDso6vXhH5Z1KZkEI%2FRAyFAwTwS6qZE2TTj8cq%2FRzF5lymwH3eYrTqxv9D3U7AKKFZS9jy0asf4Dbj21NPrnjT%2BoEAEIU2h6u5I21htkoE9pxYer3VlNN3OTLwTsYTwio3Mk8i4%2B56SPEArsVVVqErKu5XD8PqROskSNw9okZ3t3A5Kg4mIIhwMfKm7TEQMVGXv&X-Amz-Signature=f85abdb1a8d42c827fd742f592dd50e30223e086f8105bc70bca1df3885616a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
