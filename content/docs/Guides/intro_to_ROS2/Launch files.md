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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7C6VIZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyUIqDie%2F5YAwdhonRIu0fefolprx9wBcRo2gDjPrt2AiBHbrS6xsbeFostiY0ARfGgkQ%2FKjmE8AtQ7n82DK6H4YyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF1gYTcA%2FAioMsNbKtwDgdUapFyyFSKo%2FLQmgKgdjX0FbPk97bVpl9x8rg3kIFFNpSWkIadDWic3Y2G5jq0Fbppn1bQCnD5QbKT5Y9PZxddANg4ToolwgoK5Bzqz3xH%2BCzhzf7k8F%2Bw%2FXcWu3cS15thRXs%2FVHrTkuxCrG0xaPZtFdPg5urf%2BA2O60A%2FvURnWyHt3mqT9RuQ6%2FwZtktmbjigEm1Wf2YMaSH5JCppPF9DhxZDFcT2qMs3mHiHWwjypwKRj8CfryqTOyd%2BbNFI5XqmyDPP6NCcbRn8%2Fy6DF9FTCF2jqrzP%2FSoQp3%2F%2BpfU98iMHeZU6nhQv32JmD6Rn2zi02GwQsahIcpXbCU%2FE0Q3hat5nhgZGVv0D9ihKyi9IYUqr1KHLemyH3o0Nz6iCfRmDNPnc4KN7yElVIe6aYTmp6hx1MsDTcgCpJk%2BGW%2BGeIyT8PdFJJSVIso%2FxHYlEabqzy2mQ9Akl7qpe8AG%2FYXeche7fthVct89dPWSPNB6eFBrqhtLx1%2BaIK5kG%2Fg7tJoGc8PGQZqyB3JHiWjX9LzRwQMJE%2BWm29fhuAEpPHu1gLxDck3yXVelCNPwQPEwruDfoNWwfFgi%2BkH6RvMlQ%2BTRFqibqv1zYELLttEurx9A2hxexXU39I5m1sEsQwt4vlvQY6pgGGZBfpLHgva8HrClEfgkKYPrdM5CBDw9GquQjLSDwYkMHlUbqEgJKrS%2FHf%2FUeDBJrjPTqHIuUiYX4AG8jKQWlvdo%2FFTwAmN00Gf6g7W660xq5a2YynU1mYk5zdSbzxvnhQXnkk1XapVJ3HQk3siR8Msd0hxhL9ISdCUYnIdpElZxJVxEVFT2%2Bxot%2Bnxgk8aE43qk02GY8S9uKIvqbbMdCM13aje2rq&X-Amz-Signature=4b898258f1996701895be58d7add7160361676555573b96e8e5b01bc02cf1661&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7C6VIZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyUIqDie%2F5YAwdhonRIu0fefolprx9wBcRo2gDjPrt2AiBHbrS6xsbeFostiY0ARfGgkQ%2FKjmE8AtQ7n82DK6H4YyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF1gYTcA%2FAioMsNbKtwDgdUapFyyFSKo%2FLQmgKgdjX0FbPk97bVpl9x8rg3kIFFNpSWkIadDWic3Y2G5jq0Fbppn1bQCnD5QbKT5Y9PZxddANg4ToolwgoK5Bzqz3xH%2BCzhzf7k8F%2Bw%2FXcWu3cS15thRXs%2FVHrTkuxCrG0xaPZtFdPg5urf%2BA2O60A%2FvURnWyHt3mqT9RuQ6%2FwZtktmbjigEm1Wf2YMaSH5JCppPF9DhxZDFcT2qMs3mHiHWwjypwKRj8CfryqTOyd%2BbNFI5XqmyDPP6NCcbRn8%2Fy6DF9FTCF2jqrzP%2FSoQp3%2F%2BpfU98iMHeZU6nhQv32JmD6Rn2zi02GwQsahIcpXbCU%2FE0Q3hat5nhgZGVv0D9ihKyi9IYUqr1KHLemyH3o0Nz6iCfRmDNPnc4KN7yElVIe6aYTmp6hx1MsDTcgCpJk%2BGW%2BGeIyT8PdFJJSVIso%2FxHYlEabqzy2mQ9Akl7qpe8AG%2FYXeche7fthVct89dPWSPNB6eFBrqhtLx1%2BaIK5kG%2Fg7tJoGc8PGQZqyB3JHiWjX9LzRwQMJE%2BWm29fhuAEpPHu1gLxDck3yXVelCNPwQPEwruDfoNWwfFgi%2BkH6RvMlQ%2BTRFqibqv1zYELLttEurx9A2hxexXU39I5m1sEsQwt4vlvQY6pgGGZBfpLHgva8HrClEfgkKYPrdM5CBDw9GquQjLSDwYkMHlUbqEgJKrS%2FHf%2FUeDBJrjPTqHIuUiYX4AG8jKQWlvdo%2FFTwAmN00Gf6g7W660xq5a2YynU1mYk5zdSbzxvnhQXnkk1XapVJ3HQk3siR8Msd0hxhL9ISdCUYnIdpElZxJVxEVFT2%2Bxot%2Bnxgk8aE43qk02GY8S9uKIvqbbMdCM13aje2rq&X-Amz-Signature=dbedb626278d45634e2240d911992a5a4f6351d933e90e697722820b11a1ab08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7C6VIZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyUIqDie%2F5YAwdhonRIu0fefolprx9wBcRo2gDjPrt2AiBHbrS6xsbeFostiY0ARfGgkQ%2FKjmE8AtQ7n82DK6H4YyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF1gYTcA%2FAioMsNbKtwDgdUapFyyFSKo%2FLQmgKgdjX0FbPk97bVpl9x8rg3kIFFNpSWkIadDWic3Y2G5jq0Fbppn1bQCnD5QbKT5Y9PZxddANg4ToolwgoK5Bzqz3xH%2BCzhzf7k8F%2Bw%2FXcWu3cS15thRXs%2FVHrTkuxCrG0xaPZtFdPg5urf%2BA2O60A%2FvURnWyHt3mqT9RuQ6%2FwZtktmbjigEm1Wf2YMaSH5JCppPF9DhxZDFcT2qMs3mHiHWwjypwKRj8CfryqTOyd%2BbNFI5XqmyDPP6NCcbRn8%2Fy6DF9FTCF2jqrzP%2FSoQp3%2F%2BpfU98iMHeZU6nhQv32JmD6Rn2zi02GwQsahIcpXbCU%2FE0Q3hat5nhgZGVv0D9ihKyi9IYUqr1KHLemyH3o0Nz6iCfRmDNPnc4KN7yElVIe6aYTmp6hx1MsDTcgCpJk%2BGW%2BGeIyT8PdFJJSVIso%2FxHYlEabqzy2mQ9Akl7qpe8AG%2FYXeche7fthVct89dPWSPNB6eFBrqhtLx1%2BaIK5kG%2Fg7tJoGc8PGQZqyB3JHiWjX9LzRwQMJE%2BWm29fhuAEpPHu1gLxDck3yXVelCNPwQPEwruDfoNWwfFgi%2BkH6RvMlQ%2BTRFqibqv1zYELLttEurx9A2hxexXU39I5m1sEsQwt4vlvQY6pgGGZBfpLHgva8HrClEfgkKYPrdM5CBDw9GquQjLSDwYkMHlUbqEgJKrS%2FHf%2FUeDBJrjPTqHIuUiYX4AG8jKQWlvdo%2FFTwAmN00Gf6g7W660xq5a2YynU1mYk5zdSbzxvnhQXnkk1XapVJ3HQk3siR8Msd0hxhL9ISdCUYnIdpElZxJVxEVFT2%2Bxot%2Bnxgk8aE43qk02GY8S9uKIvqbbMdCM13aje2rq&X-Amz-Signature=bc981e842252ea12849ae101287a78404aa3496573aeb8970eb455c2a7794258&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
