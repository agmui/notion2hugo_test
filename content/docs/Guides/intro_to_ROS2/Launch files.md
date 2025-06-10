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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBXTV2U%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf5jRRA6Sq3jEBA0zqMgL%2B9kAbYW%2BEEDaqLoJRXP1qQIhAPO%2Bz5ZmXmsUxi4ns2CQjGtiXZgKx4xBp6jEDGCfzG1HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC6si6Qub1Iom4YrEq3AN3SWk4huAlqr3n8v7a52cazNmPsAAM%2BFuUfEZ7Oari4YE5rLLjD3QoxqPC2KB%2FZHqS1sdOTUagGObK9QKKfUf4xVccXZUCFyZrFtwWcdbpuiNP4oKxbxKE5pPZwIlqmI%2FhYRJWgRghJ416uWKQhDc0vVphaqAeaLL9CAS8s0m3qygEzI%2BmwqgjlCO1BRGEwVbBHQYMHdYz8iLjcdik3Hy2SKIKGbSS%2F%2B%2Fomjsh%2F0CfuIOHMHNwQ7M8gqHwWxnlpVWnOZzXteqmRvYQd7YtNyLL%2FxESq%2FqODfCtqsVnYrmIz%2FZ6dYZfRGh171rLqVf1lSUskE%2BFm04%2FQNX%2B2AXmJO%2Fgqr%2F881PE2Vn5k1hVgNlXg41eNkmeH56E7EaLeFRTP1AsSKKItJQqJdVmHakn3eBYSkDOWt9jku%2BhzZz32775jPtr06N0yD9EtRkV4qGJpqGiJU3NrX94W75HiECGm6De7T%2BiqniU1Z4sKKESJkJonIHq2%2BIFG7KXEr%2BSWeWGPqlS2jTxeYZDECQ28x8ydc2hgnox1r6iUvyH9qRK393yz8JZHqfooFFMBveTZSp5HQbGVx0Ao0aR9Bc7IlhqDxVRxLRPqKuFYS%2BGgSqIWXn9ytpXDN9tzCestukEEDCG35%2FCBjqkAf05xpoxfjDhWOuuS4Nh8b2Y97e78cnt%2Bp9IU1zOqr3QOCBq5vAKGgQwXgkcoBvcuM0TvzcKQmQJmMmoD%2F54Q8MpjmWwLdDOcn3Fs9SmGtB%2FbZjaVSgxlDRcK4CZ3XDcadiFcFBfYpJ79hS2ERcafyYJMFlMlJyBgI1UL20nakWlekRQ6kEoeHz82jlv4Tg6mj%2BzwC2Xe0vobAazUwwoKkozgxJH&X-Amz-Signature=c1800af61f1b3e2a6a166d1a07451526c9711ce52d5fa4e30d9965d264da81e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBXTV2U%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf5jRRA6Sq3jEBA0zqMgL%2B9kAbYW%2BEEDaqLoJRXP1qQIhAPO%2Bz5ZmXmsUxi4ns2CQjGtiXZgKx4xBp6jEDGCfzG1HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC6si6Qub1Iom4YrEq3AN3SWk4huAlqr3n8v7a52cazNmPsAAM%2BFuUfEZ7Oari4YE5rLLjD3QoxqPC2KB%2FZHqS1sdOTUagGObK9QKKfUf4xVccXZUCFyZrFtwWcdbpuiNP4oKxbxKE5pPZwIlqmI%2FhYRJWgRghJ416uWKQhDc0vVphaqAeaLL9CAS8s0m3qygEzI%2BmwqgjlCO1BRGEwVbBHQYMHdYz8iLjcdik3Hy2SKIKGbSS%2F%2B%2Fomjsh%2F0CfuIOHMHNwQ7M8gqHwWxnlpVWnOZzXteqmRvYQd7YtNyLL%2FxESq%2FqODfCtqsVnYrmIz%2FZ6dYZfRGh171rLqVf1lSUskE%2BFm04%2FQNX%2B2AXmJO%2Fgqr%2F881PE2Vn5k1hVgNlXg41eNkmeH56E7EaLeFRTP1AsSKKItJQqJdVmHakn3eBYSkDOWt9jku%2BhzZz32775jPtr06N0yD9EtRkV4qGJpqGiJU3NrX94W75HiECGm6De7T%2BiqniU1Z4sKKESJkJonIHq2%2BIFG7KXEr%2BSWeWGPqlS2jTxeYZDECQ28x8ydc2hgnox1r6iUvyH9qRK393yz8JZHqfooFFMBveTZSp5HQbGVx0Ao0aR9Bc7IlhqDxVRxLRPqKuFYS%2BGgSqIWXn9ytpXDN9tzCestukEEDCG35%2FCBjqkAf05xpoxfjDhWOuuS4Nh8b2Y97e78cnt%2Bp9IU1zOqr3QOCBq5vAKGgQwXgkcoBvcuM0TvzcKQmQJmMmoD%2F54Q8MpjmWwLdDOcn3Fs9SmGtB%2FbZjaVSgxlDRcK4CZ3XDcadiFcFBfYpJ79hS2ERcafyYJMFlMlJyBgI1UL20nakWlekRQ6kEoeHz82jlv4Tg6mj%2BzwC2Xe0vobAazUwwoKkozgxJH&X-Amz-Signature=ab0d3de6f377b6f32ce5aef198059e8b98aff798df5050966ed03d08a4d9a9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBXTV2U%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmf5jRRA6Sq3jEBA0zqMgL%2B9kAbYW%2BEEDaqLoJRXP1qQIhAPO%2Bz5ZmXmsUxi4ns2CQjGtiXZgKx4xBp6jEDGCfzG1HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC6si6Qub1Iom4YrEq3AN3SWk4huAlqr3n8v7a52cazNmPsAAM%2BFuUfEZ7Oari4YE5rLLjD3QoxqPC2KB%2FZHqS1sdOTUagGObK9QKKfUf4xVccXZUCFyZrFtwWcdbpuiNP4oKxbxKE5pPZwIlqmI%2FhYRJWgRghJ416uWKQhDc0vVphaqAeaLL9CAS8s0m3qygEzI%2BmwqgjlCO1BRGEwVbBHQYMHdYz8iLjcdik3Hy2SKIKGbSS%2F%2B%2Fomjsh%2F0CfuIOHMHNwQ7M8gqHwWxnlpVWnOZzXteqmRvYQd7YtNyLL%2FxESq%2FqODfCtqsVnYrmIz%2FZ6dYZfRGh171rLqVf1lSUskE%2BFm04%2FQNX%2B2AXmJO%2Fgqr%2F881PE2Vn5k1hVgNlXg41eNkmeH56E7EaLeFRTP1AsSKKItJQqJdVmHakn3eBYSkDOWt9jku%2BhzZz32775jPtr06N0yD9EtRkV4qGJpqGiJU3NrX94W75HiECGm6De7T%2BiqniU1Z4sKKESJkJonIHq2%2BIFG7KXEr%2BSWeWGPqlS2jTxeYZDECQ28x8ydc2hgnox1r6iUvyH9qRK393yz8JZHqfooFFMBveTZSp5HQbGVx0Ao0aR9Bc7IlhqDxVRxLRPqKuFYS%2BGgSqIWXn9ytpXDN9tzCestukEEDCG35%2FCBjqkAf05xpoxfjDhWOuuS4Nh8b2Y97e78cnt%2Bp9IU1zOqr3QOCBq5vAKGgQwXgkcoBvcuM0TvzcKQmQJmMmoD%2F54Q8MpjmWwLdDOcn3Fs9SmGtB%2FbZjaVSgxlDRcK4CZ3XDcadiFcFBfYpJ79hS2ERcafyYJMFlMlJyBgI1UL20nakWlekRQ6kEoeHz82jlv4Tg6mj%2BzwC2Xe0vobAazUwwoKkozgxJH&X-Amz-Signature=894ef0616a56017e59f794206305f87d7ce9016d4d7a3ccde5232fc5d1619e02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
