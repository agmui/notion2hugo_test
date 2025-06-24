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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOIRPDF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCQBZECxc9DZZh1q5M3bGngKO0Bwj3DnyIDI8Kh%2FuveAwIhAMQqSkOek2WcMge5c829reUyJdh0K%2BqT77md3vE4ZTu1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzD7aQ0blYZOWWNGcMq3AOyZtK7GSqJow%2BfjBh2cxxyZ6t6vZkC3rxc4Pi5rz%2FFgbA1ekfhVcXB4fGUVr6cdLvv8fjR7rNcEvk9FvncwnqBxR7lxGrCbwezgWP8FrlRpgCRvXmQ%2BohnFXaZ7PK7v8KkrLlYOBZZet6z%2BzFN5N6%2FhReSfQkMtRnA1tN4xYzu3DeBbUvi5x5C42R7X8i1R%2FyFUZE0vI3YMt6LWDzhPQOb6ll4lFgDkPZps1yF4mlIVSehzhqOOL5guf38%2FImpIFGAvZwOeewRrqTe665zJgeyNMD4zMNcSmrV7Hu69v6P5bf8Hx4fyyoCr134FJ5uEMWJnObwg0kNyue3OocXi1m1dZFw9abvk%2Bg5Y3gVVm5Mk%2FvBtazl9yZaMx43QwqmE8p%2FC8iDnaBIFM69u85SPM0wiveG%2FBJ31jgxBrR6nweXE0E1qelV2YVmUa2ivqwu2IGVHw08sCrXoLRBu4d0eSjgAFFrwMKl3rvNi2sy8o%2BvTB%2BGDYVybxYWvBeEDTCQXQYpRAoAcQhenbFskZoVDs4LhPM6YYlOz%2B9twClIiTv66k4U6cGVkkKENxBBHuYV995AavNmSnpcD90jUW3eOMMHyS7Q1P4R5q6draX5eguPvHCe7APICKhoiqG25DCRuunCBjqkAUc21zpP8MOEahPFporKcddsht1bnAIJwrnjTDh0z6ztCDXX6rr2ymg7gxecVfQyUCW9V5IUyjL7OJ2FLe2Vl5PH3BKkvLyH12ZNfffrBgYxqM4VMnEbQt4DiddOHhOGgI2jPg4dvoT7WzyUcFq7kTAVckqytbBQmbSHIcHX0O6ad6XO5jnbDKYZIMJ88LLKx0uo5RVsr8C57jWPKZ%2Bv3adGuzxA&X-Amz-Signature=4e273d052f248b42d68a8be29a512bf566194bf0708efbf1b1baa35ee9410255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOIRPDF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCQBZECxc9DZZh1q5M3bGngKO0Bwj3DnyIDI8Kh%2FuveAwIhAMQqSkOek2WcMge5c829reUyJdh0K%2BqT77md3vE4ZTu1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzD7aQ0blYZOWWNGcMq3AOyZtK7GSqJow%2BfjBh2cxxyZ6t6vZkC3rxc4Pi5rz%2FFgbA1ekfhVcXB4fGUVr6cdLvv8fjR7rNcEvk9FvncwnqBxR7lxGrCbwezgWP8FrlRpgCRvXmQ%2BohnFXaZ7PK7v8KkrLlYOBZZet6z%2BzFN5N6%2FhReSfQkMtRnA1tN4xYzu3DeBbUvi5x5C42R7X8i1R%2FyFUZE0vI3YMt6LWDzhPQOb6ll4lFgDkPZps1yF4mlIVSehzhqOOL5guf38%2FImpIFGAvZwOeewRrqTe665zJgeyNMD4zMNcSmrV7Hu69v6P5bf8Hx4fyyoCr134FJ5uEMWJnObwg0kNyue3OocXi1m1dZFw9abvk%2Bg5Y3gVVm5Mk%2FvBtazl9yZaMx43QwqmE8p%2FC8iDnaBIFM69u85SPM0wiveG%2FBJ31jgxBrR6nweXE0E1qelV2YVmUa2ivqwu2IGVHw08sCrXoLRBu4d0eSjgAFFrwMKl3rvNi2sy8o%2BvTB%2BGDYVybxYWvBeEDTCQXQYpRAoAcQhenbFskZoVDs4LhPM6YYlOz%2B9twClIiTv66k4U6cGVkkKENxBBHuYV995AavNmSnpcD90jUW3eOMMHyS7Q1P4R5q6draX5eguPvHCe7APICKhoiqG25DCRuunCBjqkAUc21zpP8MOEahPFporKcddsht1bnAIJwrnjTDh0z6ztCDXX6rr2ymg7gxecVfQyUCW9V5IUyjL7OJ2FLe2Vl5PH3BKkvLyH12ZNfffrBgYxqM4VMnEbQt4DiddOHhOGgI2jPg4dvoT7WzyUcFq7kTAVckqytbBQmbSHIcHX0O6ad6XO5jnbDKYZIMJ88LLKx0uo5RVsr8C57jWPKZ%2Bv3adGuzxA&X-Amz-Signature=d7a82eb12e18e858b98d96d86846724ba8fd6a4f6ac76cf5b4397fa93fc94b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOIRPDF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCQBZECxc9DZZh1q5M3bGngKO0Bwj3DnyIDI8Kh%2FuveAwIhAMQqSkOek2WcMge5c829reUyJdh0K%2BqT77md3vE4ZTu1Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzD7aQ0blYZOWWNGcMq3AOyZtK7GSqJow%2BfjBh2cxxyZ6t6vZkC3rxc4Pi5rz%2FFgbA1ekfhVcXB4fGUVr6cdLvv8fjR7rNcEvk9FvncwnqBxR7lxGrCbwezgWP8FrlRpgCRvXmQ%2BohnFXaZ7PK7v8KkrLlYOBZZet6z%2BzFN5N6%2FhReSfQkMtRnA1tN4xYzu3DeBbUvi5x5C42R7X8i1R%2FyFUZE0vI3YMt6LWDzhPQOb6ll4lFgDkPZps1yF4mlIVSehzhqOOL5guf38%2FImpIFGAvZwOeewRrqTe665zJgeyNMD4zMNcSmrV7Hu69v6P5bf8Hx4fyyoCr134FJ5uEMWJnObwg0kNyue3OocXi1m1dZFw9abvk%2Bg5Y3gVVm5Mk%2FvBtazl9yZaMx43QwqmE8p%2FC8iDnaBIFM69u85SPM0wiveG%2FBJ31jgxBrR6nweXE0E1qelV2YVmUa2ivqwu2IGVHw08sCrXoLRBu4d0eSjgAFFrwMKl3rvNi2sy8o%2BvTB%2BGDYVybxYWvBeEDTCQXQYpRAoAcQhenbFskZoVDs4LhPM6YYlOz%2B9twClIiTv66k4U6cGVkkKENxBBHuYV995AavNmSnpcD90jUW3eOMMHyS7Q1P4R5q6draX5eguPvHCe7APICKhoiqG25DCRuunCBjqkAUc21zpP8MOEahPFporKcddsht1bnAIJwrnjTDh0z6ztCDXX6rr2ymg7gxecVfQyUCW9V5IUyjL7OJ2FLe2Vl5PH3BKkvLyH12ZNfffrBgYxqM4VMnEbQt4DiddOHhOGgI2jPg4dvoT7WzyUcFq7kTAVckqytbBQmbSHIcHX0O6ad6XO5jnbDKYZIMJ88LLKx0uo5RVsr8C57jWPKZ%2Bv3adGuzxA&X-Amz-Signature=7eeef5f1a264a29dc71e7a3f8399f5e65b6946f1c0b881e9042b3d4276939daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
