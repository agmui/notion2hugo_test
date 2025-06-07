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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NLMKUX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB6rOHu56%2BlzIgiRx1vYuNYBTsx3I2WETmK6CDinCJ8AiA8BRWq0ILl77XeF3ocBjqPoUKUU0RSwYMOuH0NO5IcZSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMzVL7Bij%2F8XWLLSZ9KtwDsFXQuNJqgI4fgzucq%2FqMyPPAyG0uAmBMIKMJ9bPjGDNpAfkJn96okG%2B4I1hShBSsJ20iD6RjScUhDmjfcmyWW7emBTcDPWAYGeww%2FAZt0UGfvCfNB70UOpVfk451obErmLFxVNjNRSe28MLu1ybFXSzlqTrE33XVeW27EWKOvcxb%2B1UJ1mDlMNbwsmGQvQWbXJs5gjXorRWVuMV6shiETQ6aVQkZpMQUE0yxy7J3IXBIQXHE%2Blv1qC15%2B1eFy%2B8q1WX18Oi1jeUf3oKYPHEEhoYOOFmchawtFh208%2BrQK5zSn9OSnFy3nRkB%2BjTiQpUcnhkQj5BkOhLWlcAegXnfLXBAuzgNuVE7KYtbWCqijwnGCvcBeEQ3zqrnam0V78kfLXMJs44EArwqCaHcUZJiaELEWLl3YlbndbGh%2FyV8%2B6CesCEvugVYf3lg1g8dhlD3xH8a1xmF0wMBYd95Xt2Wr9cTeyjpXQT3wD6QzsAtTh50OnqaUfYw%2FxsAHx4y94D7rxADqb7XjjhFDPQrCldzSYZDsQuEbp5Ln8CGLiAT5rT5%2FQYzoR%2BKtCbC0PERzOxnOW1ycP0DqVvqjTytQyp54CoRo8pwAt1CMo2Y%2BCzZ8NjEBQZsifsTCVZhMHAw9NKSwgY6pgFjluCCTAeUtDr2mSWWWbMLnFzpZ8%2Fvvu5j9OsIN4zpmmbcpUNKvBfXPUjwZrki4pmv5i3gZoCZbH1qyuKpkAMWI8k9xzBqYcYkeISBXnpvgX6mMdI9xJ0qrFnuo%2F6p%2BmZ%2Bqu%2Ff1qe%2BAF%2BZ%2BcVpPFHl5nHaQhuJEQJ6%2F4ClSeDUWfHXm5M1IJjFNtJYaNGPeSt6atlEdUD0M1wGpvfP2vzllwOKjiiX&X-Amz-Signature=62f31c58041ca0a5d013e31b5e4d5c28d84b7eb40ffef7381913563c5f752d88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NLMKUX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB6rOHu56%2BlzIgiRx1vYuNYBTsx3I2WETmK6CDinCJ8AiA8BRWq0ILl77XeF3ocBjqPoUKUU0RSwYMOuH0NO5IcZSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMzVL7Bij%2F8XWLLSZ9KtwDsFXQuNJqgI4fgzucq%2FqMyPPAyG0uAmBMIKMJ9bPjGDNpAfkJn96okG%2B4I1hShBSsJ20iD6RjScUhDmjfcmyWW7emBTcDPWAYGeww%2FAZt0UGfvCfNB70UOpVfk451obErmLFxVNjNRSe28MLu1ybFXSzlqTrE33XVeW27EWKOvcxb%2B1UJ1mDlMNbwsmGQvQWbXJs5gjXorRWVuMV6shiETQ6aVQkZpMQUE0yxy7J3IXBIQXHE%2Blv1qC15%2B1eFy%2B8q1WX18Oi1jeUf3oKYPHEEhoYOOFmchawtFh208%2BrQK5zSn9OSnFy3nRkB%2BjTiQpUcnhkQj5BkOhLWlcAegXnfLXBAuzgNuVE7KYtbWCqijwnGCvcBeEQ3zqrnam0V78kfLXMJs44EArwqCaHcUZJiaELEWLl3YlbndbGh%2FyV8%2B6CesCEvugVYf3lg1g8dhlD3xH8a1xmF0wMBYd95Xt2Wr9cTeyjpXQT3wD6QzsAtTh50OnqaUfYw%2FxsAHx4y94D7rxADqb7XjjhFDPQrCldzSYZDsQuEbp5Ln8CGLiAT5rT5%2FQYzoR%2BKtCbC0PERzOxnOW1ycP0DqVvqjTytQyp54CoRo8pwAt1CMo2Y%2BCzZ8NjEBQZsifsTCVZhMHAw9NKSwgY6pgFjluCCTAeUtDr2mSWWWbMLnFzpZ8%2Fvvu5j9OsIN4zpmmbcpUNKvBfXPUjwZrki4pmv5i3gZoCZbH1qyuKpkAMWI8k9xzBqYcYkeISBXnpvgX6mMdI9xJ0qrFnuo%2F6p%2BmZ%2Bqu%2Ff1qe%2BAF%2BZ%2BcVpPFHl5nHaQhuJEQJ6%2F4ClSeDUWfHXm5M1IJjFNtJYaNGPeSt6atlEdUD0M1wGpvfP2vzllwOKjiiX&X-Amz-Signature=df850011738d313f8092a70b4976be8530b2ac9db07e2c00d3ecca47a10ed154&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NLMKUX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB6rOHu56%2BlzIgiRx1vYuNYBTsx3I2WETmK6CDinCJ8AiA8BRWq0ILl77XeF3ocBjqPoUKUU0RSwYMOuH0NO5IcZSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMzVL7Bij%2F8XWLLSZ9KtwDsFXQuNJqgI4fgzucq%2FqMyPPAyG0uAmBMIKMJ9bPjGDNpAfkJn96okG%2B4I1hShBSsJ20iD6RjScUhDmjfcmyWW7emBTcDPWAYGeww%2FAZt0UGfvCfNB70UOpVfk451obErmLFxVNjNRSe28MLu1ybFXSzlqTrE33XVeW27EWKOvcxb%2B1UJ1mDlMNbwsmGQvQWbXJs5gjXorRWVuMV6shiETQ6aVQkZpMQUE0yxy7J3IXBIQXHE%2Blv1qC15%2B1eFy%2B8q1WX18Oi1jeUf3oKYPHEEhoYOOFmchawtFh208%2BrQK5zSn9OSnFy3nRkB%2BjTiQpUcnhkQj5BkOhLWlcAegXnfLXBAuzgNuVE7KYtbWCqijwnGCvcBeEQ3zqrnam0V78kfLXMJs44EArwqCaHcUZJiaELEWLl3YlbndbGh%2FyV8%2B6CesCEvugVYf3lg1g8dhlD3xH8a1xmF0wMBYd95Xt2Wr9cTeyjpXQT3wD6QzsAtTh50OnqaUfYw%2FxsAHx4y94D7rxADqb7XjjhFDPQrCldzSYZDsQuEbp5Ln8CGLiAT5rT5%2FQYzoR%2BKtCbC0PERzOxnOW1ycP0DqVvqjTytQyp54CoRo8pwAt1CMo2Y%2BCzZ8NjEBQZsifsTCVZhMHAw9NKSwgY6pgFjluCCTAeUtDr2mSWWWbMLnFzpZ8%2Fvvu5j9OsIN4zpmmbcpUNKvBfXPUjwZrki4pmv5i3gZoCZbH1qyuKpkAMWI8k9xzBqYcYkeISBXnpvgX6mMdI9xJ0qrFnuo%2F6p%2BmZ%2Bqu%2Ff1qe%2BAF%2BZ%2BcVpPFHl5nHaQhuJEQJ6%2F4ClSeDUWfHXm5M1IJjFNtJYaNGPeSt6atlEdUD0M1wGpvfP2vzllwOKjiiX&X-Amz-Signature=f8a0096063a774e2585b3d40749d619d4b3db0f2c7776e9f3d0e10c8af0a6add&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
