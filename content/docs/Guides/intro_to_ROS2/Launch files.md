---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOD6RAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGs2ITkN%2B%2FZytoTDqqr0SSZm9ifRlZCSUWrV26EipobnAiAXi9QlWYNQ2bUYxDMDTpPJ01ooaG4qmpzE1vP%2BDDJqgCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKmUPW0ZfMiGAs5pFKtwDj2%2FSyJ9c8hLegOIxCdbT2BAwa8DP7leOuXT2AuRLnI%2FRXS%2BBSybo4yzWVRMnp7znYof9X1IPYMlkcUVgLbMWgvoAwtkf6jCFNqxN12ClolnePR%2BBzQ4RFF0zcLk7zrSq9BEHTxFVAmSO6Hcz5uZNKrgxzRq4KHm5KcNZcyM%2F%2FCiX25r8q6xq1skA6Qh8Len35lw46Y%2BN%2Fnyn8W4MYF9DQJUJShjKReDpz%2FG6NFWk7ReAMelBvyGo6D3hmKrxyPyDpku0wTAG3lXETd%2Few%2FL0lBtxw0PIEAw5FGmND%2FBTOT9Wxi5IFwYpvyTboLi%2FxydibBEzYT9RR4tJM2txZGIkGqaqARpVLMs1xTd9YxV1s525DDON%2BNpgCd7DyNHpxm5PBIwYTTzi7%2F943iW%2BeGqKzgQZ51ClVPNKGQE7fGTDHLvAEvt4mCDJeTVWruqef%2FknZHQDAB799%2B2Z3nOY729HppH%2BPGXvvINCr%2FweBTlOjnrk5FrDTqFCgFU8ToMruPNLPydgUUvwWAhp%2FNBpRzmyxwJrjFYUvxCZBqhR3GpXGOmzZOFXKEou3oUELQx5iJRmJcZjs3ThjXnaUl0wimfkk%2Bwu7lUgqLgsr2%2BNSSvOqYYcMGmNb1jcxMJRt%2BswuoPIxAY6pgFfEpoGj7NyFjByaKTfuP%2FCBZkcZtE3ICtBS9wG0u3eY1EutV46iGuj0Ing8JRf5thhLR3Hzja371YDS%2BlDJYRoGEpVX%2ByFP3sHlrbm4cF3u63SrFd%2BdH2KmkyPmrNRMa8TfqWvZzosOW0sUjvARYxzNyhEh1cPQdvMr0IO4t5OyDoaoKLPS%2F%2BSIFQkzl%2BaSk5Mmm%2BRu9UgxmFC7txuLermFsbc%2FTng&X-Amz-Signature=4f26e7f005239d67750e976d7083682f58c41759cbc27ab284e0d6e5c30c5767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOD6RAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGs2ITkN%2B%2FZytoTDqqr0SSZm9ifRlZCSUWrV26EipobnAiAXi9QlWYNQ2bUYxDMDTpPJ01ooaG4qmpzE1vP%2BDDJqgCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKmUPW0ZfMiGAs5pFKtwDj2%2FSyJ9c8hLegOIxCdbT2BAwa8DP7leOuXT2AuRLnI%2FRXS%2BBSybo4yzWVRMnp7znYof9X1IPYMlkcUVgLbMWgvoAwtkf6jCFNqxN12ClolnePR%2BBzQ4RFF0zcLk7zrSq9BEHTxFVAmSO6Hcz5uZNKrgxzRq4KHm5KcNZcyM%2F%2FCiX25r8q6xq1skA6Qh8Len35lw46Y%2BN%2Fnyn8W4MYF9DQJUJShjKReDpz%2FG6NFWk7ReAMelBvyGo6D3hmKrxyPyDpku0wTAG3lXETd%2Few%2FL0lBtxw0PIEAw5FGmND%2FBTOT9Wxi5IFwYpvyTboLi%2FxydibBEzYT9RR4tJM2txZGIkGqaqARpVLMs1xTd9YxV1s525DDON%2BNpgCd7DyNHpxm5PBIwYTTzi7%2F943iW%2BeGqKzgQZ51ClVPNKGQE7fGTDHLvAEvt4mCDJeTVWruqef%2FknZHQDAB799%2B2Z3nOY729HppH%2BPGXvvINCr%2FweBTlOjnrk5FrDTqFCgFU8ToMruPNLPydgUUvwWAhp%2FNBpRzmyxwJrjFYUvxCZBqhR3GpXGOmzZOFXKEou3oUELQx5iJRmJcZjs3ThjXnaUl0wimfkk%2Bwu7lUgqLgsr2%2BNSSvOqYYcMGmNb1jcxMJRt%2BswuoPIxAY6pgFfEpoGj7NyFjByaKTfuP%2FCBZkcZtE3ICtBS9wG0u3eY1EutV46iGuj0Ing8JRf5thhLR3Hzja371YDS%2BlDJYRoGEpVX%2ByFP3sHlrbm4cF3u63SrFd%2BdH2KmkyPmrNRMa8TfqWvZzosOW0sUjvARYxzNyhEh1cPQdvMr0IO4t5OyDoaoKLPS%2F%2BSIFQkzl%2BaSk5Mmm%2BRu9UgxmFC7txuLermFsbc%2FTng&X-Amz-Signature=c3b9d27124892a98044beb7a5e4a069979eea197f030b5b5826385a440eccdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOD6RAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGs2ITkN%2B%2FZytoTDqqr0SSZm9ifRlZCSUWrV26EipobnAiAXi9QlWYNQ2bUYxDMDTpPJ01ooaG4qmpzE1vP%2BDDJqgCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKmUPW0ZfMiGAs5pFKtwDj2%2FSyJ9c8hLegOIxCdbT2BAwa8DP7leOuXT2AuRLnI%2FRXS%2BBSybo4yzWVRMnp7znYof9X1IPYMlkcUVgLbMWgvoAwtkf6jCFNqxN12ClolnePR%2BBzQ4RFF0zcLk7zrSq9BEHTxFVAmSO6Hcz5uZNKrgxzRq4KHm5KcNZcyM%2F%2FCiX25r8q6xq1skA6Qh8Len35lw46Y%2BN%2Fnyn8W4MYF9DQJUJShjKReDpz%2FG6NFWk7ReAMelBvyGo6D3hmKrxyPyDpku0wTAG3lXETd%2Few%2FL0lBtxw0PIEAw5FGmND%2FBTOT9Wxi5IFwYpvyTboLi%2FxydibBEzYT9RR4tJM2txZGIkGqaqARpVLMs1xTd9YxV1s525DDON%2BNpgCd7DyNHpxm5PBIwYTTzi7%2F943iW%2BeGqKzgQZ51ClVPNKGQE7fGTDHLvAEvt4mCDJeTVWruqef%2FknZHQDAB799%2B2Z3nOY729HppH%2BPGXvvINCr%2FweBTlOjnrk5FrDTqFCgFU8ToMruPNLPydgUUvwWAhp%2FNBpRzmyxwJrjFYUvxCZBqhR3GpXGOmzZOFXKEou3oUELQx5iJRmJcZjs3ThjXnaUl0wimfkk%2Bwu7lUgqLgsr2%2BNSSvOqYYcMGmNb1jcxMJRt%2BswuoPIxAY6pgFfEpoGj7NyFjByaKTfuP%2FCBZkcZtE3ICtBS9wG0u3eY1EutV46iGuj0Ing8JRf5thhLR3Hzja371YDS%2BlDJYRoGEpVX%2ByFP3sHlrbm4cF3u63SrFd%2BdH2KmkyPmrNRMa8TfqWvZzosOW0sUjvARYxzNyhEh1cPQdvMr0IO4t5OyDoaoKLPS%2F%2BSIFQkzl%2BaSk5Mmm%2BRu9UgxmFC7txuLermFsbc%2FTng&X-Amz-Signature=25c38a6ba46e94783388400ed383bfe887a8760c116709b0fdbe20e3f2a797c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
