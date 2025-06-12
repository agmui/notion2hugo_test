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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP4FH4X%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBoI%2B1SEouG25PSoqa0Bw7w1U%2FzKtTjmykELOep0l3leAiBDDc1FcSxGXVijbVISbKBwVnwl50dC0LDH%2BrR78BJZPCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZur8Ayj%2FnAJTjPigKtwDUQ6Y0KcDwt3nC5VDdFJ%2BfNdDFYAAQrK5Pd2ZJl9%2BVVwbZMzAwoxxyavfzj8b%2FC8X0wVirtZOM7bWu6D3T39MM53YGjNNU9XqXjwOy9a%2BekTUiWnuV2tPcQ1rXBWC30KDYuqyxCKtjdSPq2jPW73NFFEs4qtqqtvjlLofQHZsdqlSMJht5fps74DSEgB1yGAAHk3BQW5BvL3q7OFG5j4nbCT5OfeLXbcucygR1wzbdczREP4CbNykIjRKxyMGwrReJHjB%2B2mHoxXPu0gJHzpwo7I97kmlVFkO3nfqfPwSa9CqLq%2Fwi4Y0HXAFRVOtXrXbIB99tBh%2BdMMxdSTuDHw393PyFWmFUJ1Bhv2P6XvNiJe0eA49ki3cDGGxuUKZ8UO6fTFPL%2BQbxKQF7pFJYHCF4ErLB9DOjbB8oc5dmmRI97afJw2RN4qqed7b0ilzhC%2FTk5eriL1bACzSxnIhaKXaXuz3IAskyCpx4%2Bn7UUFH6YhuxtMB5oE3fW1yJWF%2FSyWDnDKBwc%2Fsy6v4Q8R%2Fks%2F0cqjyt%2F0VdLyLXj6jX93rNOkuaW0K6diSgnru1UuYTsKu49AzwldnJV8cLPlk1WbSGB9Q4A5uA%2FzxDNjqWY2kXoeZi%2B6j0tMkDC4oAkowkIiqwgY6pgGumWuF1C0qwdhW%2BuU9Dv9qAK4L61rJnTC9%2BZcvrjJRO9I0fbvTNzeoSeUzMQvmuTYtB3Q9zjpZNyK2E1gZGXOm0X5ZmuBq4jPSsc9sYu%2FZA8bx9z%2Bp4QAfIGeeBLCHXYRdsXjGXPCe1L2mr74DY0JG%2FnsuXHUsfKSahWKrUf2GveHBJDw8mEj0EchBFOhGLRoNHv57SWn66Eelx3gqQVFdTBzxKcpu&X-Amz-Signature=f1f2a4dcb8b9662d03d9e9cb611822056df3e92666456734f93591b85e37fed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP4FH4X%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBoI%2B1SEouG25PSoqa0Bw7w1U%2FzKtTjmykELOep0l3leAiBDDc1FcSxGXVijbVISbKBwVnwl50dC0LDH%2BrR78BJZPCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZur8Ayj%2FnAJTjPigKtwDUQ6Y0KcDwt3nC5VDdFJ%2BfNdDFYAAQrK5Pd2ZJl9%2BVVwbZMzAwoxxyavfzj8b%2FC8X0wVirtZOM7bWu6D3T39MM53YGjNNU9XqXjwOy9a%2BekTUiWnuV2tPcQ1rXBWC30KDYuqyxCKtjdSPq2jPW73NFFEs4qtqqtvjlLofQHZsdqlSMJht5fps74DSEgB1yGAAHk3BQW5BvL3q7OFG5j4nbCT5OfeLXbcucygR1wzbdczREP4CbNykIjRKxyMGwrReJHjB%2B2mHoxXPu0gJHzpwo7I97kmlVFkO3nfqfPwSa9CqLq%2Fwi4Y0HXAFRVOtXrXbIB99tBh%2BdMMxdSTuDHw393PyFWmFUJ1Bhv2P6XvNiJe0eA49ki3cDGGxuUKZ8UO6fTFPL%2BQbxKQF7pFJYHCF4ErLB9DOjbB8oc5dmmRI97afJw2RN4qqed7b0ilzhC%2FTk5eriL1bACzSxnIhaKXaXuz3IAskyCpx4%2Bn7UUFH6YhuxtMB5oE3fW1yJWF%2FSyWDnDKBwc%2Fsy6v4Q8R%2Fks%2F0cqjyt%2F0VdLyLXj6jX93rNOkuaW0K6diSgnru1UuYTsKu49AzwldnJV8cLPlk1WbSGB9Q4A5uA%2FzxDNjqWY2kXoeZi%2B6j0tMkDC4oAkowkIiqwgY6pgGumWuF1C0qwdhW%2BuU9Dv9qAK4L61rJnTC9%2BZcvrjJRO9I0fbvTNzeoSeUzMQvmuTYtB3Q9zjpZNyK2E1gZGXOm0X5ZmuBq4jPSsc9sYu%2FZA8bx9z%2Bp4QAfIGeeBLCHXYRdsXjGXPCe1L2mr74DY0JG%2FnsuXHUsfKSahWKrUf2GveHBJDw8mEj0EchBFOhGLRoNHv57SWn66Eelx3gqQVFdTBzxKcpu&X-Amz-Signature=9b9854ce4664ccc8a1b732bef60a5867aa7ca1ba55e0e4bb6129cb1084431ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP4FH4X%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBoI%2B1SEouG25PSoqa0Bw7w1U%2FzKtTjmykELOep0l3leAiBDDc1FcSxGXVijbVISbKBwVnwl50dC0LDH%2BrR78BJZPCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZur8Ayj%2FnAJTjPigKtwDUQ6Y0KcDwt3nC5VDdFJ%2BfNdDFYAAQrK5Pd2ZJl9%2BVVwbZMzAwoxxyavfzj8b%2FC8X0wVirtZOM7bWu6D3T39MM53YGjNNU9XqXjwOy9a%2BekTUiWnuV2tPcQ1rXBWC30KDYuqyxCKtjdSPq2jPW73NFFEs4qtqqtvjlLofQHZsdqlSMJht5fps74DSEgB1yGAAHk3BQW5BvL3q7OFG5j4nbCT5OfeLXbcucygR1wzbdczREP4CbNykIjRKxyMGwrReJHjB%2B2mHoxXPu0gJHzpwo7I97kmlVFkO3nfqfPwSa9CqLq%2Fwi4Y0HXAFRVOtXrXbIB99tBh%2BdMMxdSTuDHw393PyFWmFUJ1Bhv2P6XvNiJe0eA49ki3cDGGxuUKZ8UO6fTFPL%2BQbxKQF7pFJYHCF4ErLB9DOjbB8oc5dmmRI97afJw2RN4qqed7b0ilzhC%2FTk5eriL1bACzSxnIhaKXaXuz3IAskyCpx4%2Bn7UUFH6YhuxtMB5oE3fW1yJWF%2FSyWDnDKBwc%2Fsy6v4Q8R%2Fks%2F0cqjyt%2F0VdLyLXj6jX93rNOkuaW0K6diSgnru1UuYTsKu49AzwldnJV8cLPlk1WbSGB9Q4A5uA%2FzxDNjqWY2kXoeZi%2B6j0tMkDC4oAkowkIiqwgY6pgGumWuF1C0qwdhW%2BuU9Dv9qAK4L61rJnTC9%2BZcvrjJRO9I0fbvTNzeoSeUzMQvmuTYtB3Q9zjpZNyK2E1gZGXOm0X5ZmuBq4jPSsc9sYu%2FZA8bx9z%2Bp4QAfIGeeBLCHXYRdsXjGXPCe1L2mr74DY0JG%2FnsuXHUsfKSahWKrUf2GveHBJDw8mEj0EchBFOhGLRoNHv57SWn66Eelx3gqQVFdTBzxKcpu&X-Amz-Signature=dc5e0168e98f914e8e3fc0ad0658328b05f3c9b095bb36e840aafc88c5a132cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
