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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5JW67D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDaA%2Flx8Vls2yRP6OftQFy%2F7b3DGjLOpLVQFvXJmncktAiByqFgwOIiQlkmXXmIKX8kQSpfNbDPsVJhfvj71Cqn1sSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMawYDeP8P0UXi94ewKtwDVUauIIqRHMGe%2FW7PexWUeG3V9VvB1l4ulYnAUzLgHswYduJKq7yKFcusN9uqDy3Gv1vytTXTmk%2FLY2s4LqtvNBwSyA1IAfHT%2FrSZis5excS8VQxcCYQSN3yVGvH8yN5LVGVotv6fW8e0ilom%2FgcghCiTMYbqUn9NHPTTQS78789B22iI7y31LiQxIbN1E%2F%2Fw0CBJ%2BOtscbVGOZktK1kxx9gZ8XPBqn%2BTy2hObDpUBGmdAwqDKqN5hNzbX%2FZoral6PmZHSVz%2B9nml7pLsJ4s4EmV%2FiLrh0anQwE3O6L4KuDanEodUoZI6RAv1Fkc%2BlDYKnf6XpB%2BVKtLyoIhDUYFPGFur516VoPmOkKHmDT8eGKmR7m9NonJ9XqfpDefP5kpfCQcavYVxa7HZ9fYDyxc4Iv6ZOe6o10ZOEUyA1XSdigLElS6tMa9FKjBaJ%2FFxCkpZlJksgLXjyL0csvWzCn7ddbMO69g1LP%2BY1XlV7TmMMeixrJmwuceKqP67oTvNe1JnRH2t8KxjVznTskej7Q%2Bc8SjSUmU8L%2FpQmgLB9hqjpCn9bJtUTdP4IiLU2igoxqmydfm2oIzETEoP%2BLWBL0gWPYCYRn76mRD4nYyGj6RkoKRJsZnJXeHyQYJQ2vMwp5HLwQY6pgHZRvybyRnnI%2BEtS%2FFDh%2BExDVyjLQlqdY2UttqfR%2FWfOXkg6M94GfuabE1Es09HZDc68zySqV%2F4UyPpUAB2Fw99BkZ4KodDG2Y1bkAUNQGF0xbJT%2BJ%2BL%2BHC%2BdMdPsQjIfmOMvJhuKEZHWC3%2BQ0rddmJZ6hkHXVYlxzCeZHXtYKA57fbxgH%2BYD3oqKYO3RMJ2M%2F%2Br4H3CAdgLuFYy6oC1jCH9wfupMqA&X-Amz-Signature=e812d544d64ecdc05ff125811a66d504101f5b069420f548133f236cc3a88fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5JW67D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDaA%2Flx8Vls2yRP6OftQFy%2F7b3DGjLOpLVQFvXJmncktAiByqFgwOIiQlkmXXmIKX8kQSpfNbDPsVJhfvj71Cqn1sSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMawYDeP8P0UXi94ewKtwDVUauIIqRHMGe%2FW7PexWUeG3V9VvB1l4ulYnAUzLgHswYduJKq7yKFcusN9uqDy3Gv1vytTXTmk%2FLY2s4LqtvNBwSyA1IAfHT%2FrSZis5excS8VQxcCYQSN3yVGvH8yN5LVGVotv6fW8e0ilom%2FgcghCiTMYbqUn9NHPTTQS78789B22iI7y31LiQxIbN1E%2F%2Fw0CBJ%2BOtscbVGOZktK1kxx9gZ8XPBqn%2BTy2hObDpUBGmdAwqDKqN5hNzbX%2FZoral6PmZHSVz%2B9nml7pLsJ4s4EmV%2FiLrh0anQwE3O6L4KuDanEodUoZI6RAv1Fkc%2BlDYKnf6XpB%2BVKtLyoIhDUYFPGFur516VoPmOkKHmDT8eGKmR7m9NonJ9XqfpDefP5kpfCQcavYVxa7HZ9fYDyxc4Iv6ZOe6o10ZOEUyA1XSdigLElS6tMa9FKjBaJ%2FFxCkpZlJksgLXjyL0csvWzCn7ddbMO69g1LP%2BY1XlV7TmMMeixrJmwuceKqP67oTvNe1JnRH2t8KxjVznTskej7Q%2Bc8SjSUmU8L%2FpQmgLB9hqjpCn9bJtUTdP4IiLU2igoxqmydfm2oIzETEoP%2BLWBL0gWPYCYRn76mRD4nYyGj6RkoKRJsZnJXeHyQYJQ2vMwp5HLwQY6pgHZRvybyRnnI%2BEtS%2FFDh%2BExDVyjLQlqdY2UttqfR%2FWfOXkg6M94GfuabE1Es09HZDc68zySqV%2F4UyPpUAB2Fw99BkZ4KodDG2Y1bkAUNQGF0xbJT%2BJ%2BL%2BHC%2BdMdPsQjIfmOMvJhuKEZHWC3%2BQ0rddmJZ6hkHXVYlxzCeZHXtYKA57fbxgH%2BYD3oqKYO3RMJ2M%2F%2Br4H3CAdgLuFYy6oC1jCH9wfupMqA&X-Amz-Signature=bc282720a9616bfacdfa80d71bafd453befe1565d1d0d538d94e95d2c8dd3b59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD5JW67D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDaA%2Flx8Vls2yRP6OftQFy%2F7b3DGjLOpLVQFvXJmncktAiByqFgwOIiQlkmXXmIKX8kQSpfNbDPsVJhfvj71Cqn1sSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMawYDeP8P0UXi94ewKtwDVUauIIqRHMGe%2FW7PexWUeG3V9VvB1l4ulYnAUzLgHswYduJKq7yKFcusN9uqDy3Gv1vytTXTmk%2FLY2s4LqtvNBwSyA1IAfHT%2FrSZis5excS8VQxcCYQSN3yVGvH8yN5LVGVotv6fW8e0ilom%2FgcghCiTMYbqUn9NHPTTQS78789B22iI7y31LiQxIbN1E%2F%2Fw0CBJ%2BOtscbVGOZktK1kxx9gZ8XPBqn%2BTy2hObDpUBGmdAwqDKqN5hNzbX%2FZoral6PmZHSVz%2B9nml7pLsJ4s4EmV%2FiLrh0anQwE3O6L4KuDanEodUoZI6RAv1Fkc%2BlDYKnf6XpB%2BVKtLyoIhDUYFPGFur516VoPmOkKHmDT8eGKmR7m9NonJ9XqfpDefP5kpfCQcavYVxa7HZ9fYDyxc4Iv6ZOe6o10ZOEUyA1XSdigLElS6tMa9FKjBaJ%2FFxCkpZlJksgLXjyL0csvWzCn7ddbMO69g1LP%2BY1XlV7TmMMeixrJmwuceKqP67oTvNe1JnRH2t8KxjVznTskej7Q%2Bc8SjSUmU8L%2FpQmgLB9hqjpCn9bJtUTdP4IiLU2igoxqmydfm2oIzETEoP%2BLWBL0gWPYCYRn76mRD4nYyGj6RkoKRJsZnJXeHyQYJQ2vMwp5HLwQY6pgHZRvybyRnnI%2BEtS%2FFDh%2BExDVyjLQlqdY2UttqfR%2FWfOXkg6M94GfuabE1Es09HZDc68zySqV%2F4UyPpUAB2Fw99BkZ4KodDG2Y1bkAUNQGF0xbJT%2BJ%2BL%2BHC%2BdMdPsQjIfmOMvJhuKEZHWC3%2BQ0rddmJZ6hkHXVYlxzCeZHXtYKA57fbxgH%2BYD3oqKYO3RMJ2M%2F%2Br4H3CAdgLuFYy6oC1jCH9wfupMqA&X-Amz-Signature=45dd8a8384b3b11284a88764624b1cd4dc42ba7ab3921080fa1e126bfca412dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
