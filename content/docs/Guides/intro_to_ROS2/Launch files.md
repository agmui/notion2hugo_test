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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRQ7UTH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC08shMWwgLOl8r3rQhq4ECIAyKJEY%2BBBYflGNcfHqnlAIhAJwZDWO577haTOVFz7JF6sauNlaiNyq0VSrMQv6NUq3PKv8DCFoQABoMNjM3NDIzMTgzODA1IgzSmwbgws4ciPH%2Fkxcq3AMCllhv1GK4Tu0irp23qeBDstniCJwObAWcSpgP7FLKgHBt9VxlygwGo%2B0RV%2FKHYyIYzqr8hr%2Fp%2BpMhtvct6VWwJ3cJJc%2Fn1LReE%2BfhL6BhEC%2BuKV5Ch2K%2FfFyQ3wSm%2BocveJew50kt9MSmHrEfQp%2BBqm62nySUbB6lsOBzQCo5IuwneV2UPhP1G%2BmigT32FeHhjNKQHBAYs4i3W6SWLEYXs%2B6tYfElQeghq0XPQdxqztN7Ka%2FGx6ZxKmqQps9w%2BoZm7%2BJtwNyM1VUzIwjxc5hmMMuP13BVyU7YR6OVLPppJyG4GEAJMF%2BRL1bANuc2PW1P8rUfQROAtdwxiD50QefYdMEQxRE%2FPQNX4FHh43tZ%2F19M8dzuFcVpKlCwWjzCWGe896RHLcrxOgiSw6U08%2FlbB9N2PWM4o2clNSxnCsMr0PD1YvL5tLQy3bH4zh55lwLnQ70aW6%2BA0SnR6838lmpUy7N2y2%2BWrx5%2FWKxN94HHj5Nd58d0knkmTqU6hma0pFcmmNpPSAN0HiA1BQhnnEeNqmfq46UL9NdC4UmG0oBOXwETAw5%2BGg6Gegdd0c7R881IWHloTfAULS3revtSepa3qK%2BwDdqXVt7ZEWwqQnWv7%2Bfc7nQWGDE%2BzS5yIjCQsuzABjqkARIu9C%2FIrw8Ria02ZHMjPKCcCR6ZeuieYo6lQ1zVg1WZBGvjJvo4CFP5GyCnk9Bplv%2FzIHwPjitns5FqAWjNOdq06CKVEsBhIpLPIMAxEWXOHV5NddaL0zuuMBjizKafx%2BrQ9ykLBIKb008L25kFCinDZBSbhz7YzuhwJSzkm4D32ibgFsak9j5QwacZE%2Fz96%2FBPEZ3TVr1zCxJ%2FBcDAQQUiNkDt&X-Amz-Signature=7e8bc25facece6d0fc13de70b744f7dcfe968f674c276f631e87c5bbb1f0fd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRQ7UTH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC08shMWwgLOl8r3rQhq4ECIAyKJEY%2BBBYflGNcfHqnlAIhAJwZDWO577haTOVFz7JF6sauNlaiNyq0VSrMQv6NUq3PKv8DCFoQABoMNjM3NDIzMTgzODA1IgzSmwbgws4ciPH%2Fkxcq3AMCllhv1GK4Tu0irp23qeBDstniCJwObAWcSpgP7FLKgHBt9VxlygwGo%2B0RV%2FKHYyIYzqr8hr%2Fp%2BpMhtvct6VWwJ3cJJc%2Fn1LReE%2BfhL6BhEC%2BuKV5Ch2K%2FfFyQ3wSm%2BocveJew50kt9MSmHrEfQp%2BBqm62nySUbB6lsOBzQCo5IuwneV2UPhP1G%2BmigT32FeHhjNKQHBAYs4i3W6SWLEYXs%2B6tYfElQeghq0XPQdxqztN7Ka%2FGx6ZxKmqQps9w%2BoZm7%2BJtwNyM1VUzIwjxc5hmMMuP13BVyU7YR6OVLPppJyG4GEAJMF%2BRL1bANuc2PW1P8rUfQROAtdwxiD50QefYdMEQxRE%2FPQNX4FHh43tZ%2F19M8dzuFcVpKlCwWjzCWGe896RHLcrxOgiSw6U08%2FlbB9N2PWM4o2clNSxnCsMr0PD1YvL5tLQy3bH4zh55lwLnQ70aW6%2BA0SnR6838lmpUy7N2y2%2BWrx5%2FWKxN94HHj5Nd58d0knkmTqU6hma0pFcmmNpPSAN0HiA1BQhnnEeNqmfq46UL9NdC4UmG0oBOXwETAw5%2BGg6Gegdd0c7R881IWHloTfAULS3revtSepa3qK%2BwDdqXVt7ZEWwqQnWv7%2Bfc7nQWGDE%2BzS5yIjCQsuzABjqkARIu9C%2FIrw8Ria02ZHMjPKCcCR6ZeuieYo6lQ1zVg1WZBGvjJvo4CFP5GyCnk9Bplv%2FzIHwPjitns5FqAWjNOdq06CKVEsBhIpLPIMAxEWXOHV5NddaL0zuuMBjizKafx%2BrQ9ykLBIKb008L25kFCinDZBSbhz7YzuhwJSzkm4D32ibgFsak9j5QwacZE%2Fz96%2FBPEZ3TVr1zCxJ%2FBcDAQQUiNkDt&X-Amz-Signature=b736c706d74fbbc4f5aede55cdd1a4e23434e52b7397928cf67157ffb4441953&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRQ7UTH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC08shMWwgLOl8r3rQhq4ECIAyKJEY%2BBBYflGNcfHqnlAIhAJwZDWO577haTOVFz7JF6sauNlaiNyq0VSrMQv6NUq3PKv8DCFoQABoMNjM3NDIzMTgzODA1IgzSmwbgws4ciPH%2Fkxcq3AMCllhv1GK4Tu0irp23qeBDstniCJwObAWcSpgP7FLKgHBt9VxlygwGo%2B0RV%2FKHYyIYzqr8hr%2Fp%2BpMhtvct6VWwJ3cJJc%2Fn1LReE%2BfhL6BhEC%2BuKV5Ch2K%2FfFyQ3wSm%2BocveJew50kt9MSmHrEfQp%2BBqm62nySUbB6lsOBzQCo5IuwneV2UPhP1G%2BmigT32FeHhjNKQHBAYs4i3W6SWLEYXs%2B6tYfElQeghq0XPQdxqztN7Ka%2FGx6ZxKmqQps9w%2BoZm7%2BJtwNyM1VUzIwjxc5hmMMuP13BVyU7YR6OVLPppJyG4GEAJMF%2BRL1bANuc2PW1P8rUfQROAtdwxiD50QefYdMEQxRE%2FPQNX4FHh43tZ%2F19M8dzuFcVpKlCwWjzCWGe896RHLcrxOgiSw6U08%2FlbB9N2PWM4o2clNSxnCsMr0PD1YvL5tLQy3bH4zh55lwLnQ70aW6%2BA0SnR6838lmpUy7N2y2%2BWrx5%2FWKxN94HHj5Nd58d0knkmTqU6hma0pFcmmNpPSAN0HiA1BQhnnEeNqmfq46UL9NdC4UmG0oBOXwETAw5%2BGg6Gegdd0c7R881IWHloTfAULS3revtSepa3qK%2BwDdqXVt7ZEWwqQnWv7%2Bfc7nQWGDE%2BzS5yIjCQsuzABjqkARIu9C%2FIrw8Ria02ZHMjPKCcCR6ZeuieYo6lQ1zVg1WZBGvjJvo4CFP5GyCnk9Bplv%2FzIHwPjitns5FqAWjNOdq06CKVEsBhIpLPIMAxEWXOHV5NddaL0zuuMBjizKafx%2BrQ9ykLBIKb008L25kFCinDZBSbhz7YzuhwJSzkm4D32ibgFsak9j5QwacZE%2Fz96%2FBPEZ3TVr1zCxJ%2FBcDAQQUiNkDt&X-Amz-Signature=886b0160ab958f7834f217861f7c74b411e491ecfd436c22d701d8db1296d0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
