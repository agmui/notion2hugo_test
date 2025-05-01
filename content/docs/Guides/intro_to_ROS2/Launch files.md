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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2ML3ND%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE15PwyJIbQrfiWaC4b41HkkHgTTW24DXhqqAaJCKd5BAiBcKbn%2BVNWJlx0RVVFhj46Q5Vsj1OOAtxJ%2BJUNgC1rnZiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhkaVpQn3rUkh9eCKtwDWBOXWJikomD8M6E0%2FifKUqreEx%2BcV9DfDD7DwxaZIaT%2BWDcx9o7qAR8QBxhPVcRNc9CNdgK8hNy58ofdUb4ypactg5e%2FZqdlh%2BJEQ4nJWfoGAEl0R2LN98NGncFACbelAezBwUmvwbvZMn1CErH3jjyG2nDAnDSaJ6XczDutruYm%2BNRG7FRIEk5IbNnN%2BFWmM4qCC2xlbFZ31LGsgGCLN3JtRO3aPt9kxo%2B5lLJIi5bjaZ176ICOJ3SmVOMOu6OYwoo08nPjuQ87xW3ft1GgY%2FBmL6ds8eGGcORK%2F4gqorp8ab3b%2B%2BO%2FJp6SeJ9qBv0d8uc4KimUAwwVkorioJmwzDcpEbzyjVB%2Fe%2BOYT4KzFNObJ8XfCND3XE%2B7OXrpAm1owGNiT4Ej3AaDQBVW6R%2BBW%2FpWKC0YVSiL7hyhvPaVJ27Vz4U7oeB%2F1ZhE2Dll2d85s7kBV0fFCFRSEIRPQWx5BwWlKUYukd3m0G3zM6lXyRalFJNGyXK5JWCTb5BtpcSrFdAj3qUCg3DznDuHw%2FwMY1RgKFbaHYfs947Cq6vGm93vIA%2FAfOELYUnDybqUB0oIsJPuOkju5bYTtrBi0xogARe5kEXg8EMzaVO1X4pUZbzX%2FnvVdS3qTzLXOc4wxZLPwAY6pgFJl5Q9XNtydK3IMMRT08mufhC40fEae%2BDWjABoOyWOM%2FiRwA24wb2nOvY7WXk%2FNC8TmcJyrDaDKZZLm44wb8eQvJbgKMHIO6yXeQ8qV%2BR3irEIk8QNZag9ytLmnx1mUvi0XMCc6gCPE%2Bu1F93gfQAUMsYmnKfckw5I1WEX7KFpDXaIYHdIEgYzEVJ1E9aCAweurs3Q2oH2%2FZEFu80WrmmMv9cwsVDZ&X-Amz-Signature=779b7a37f0e3a8eea26034cbf227469830ac623bba0574ee45329a42d3626f43&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2ML3ND%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE15PwyJIbQrfiWaC4b41HkkHgTTW24DXhqqAaJCKd5BAiBcKbn%2BVNWJlx0RVVFhj46Q5Vsj1OOAtxJ%2BJUNgC1rnZiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhkaVpQn3rUkh9eCKtwDWBOXWJikomD8M6E0%2FifKUqreEx%2BcV9DfDD7DwxaZIaT%2BWDcx9o7qAR8QBxhPVcRNc9CNdgK8hNy58ofdUb4ypactg5e%2FZqdlh%2BJEQ4nJWfoGAEl0R2LN98NGncFACbelAezBwUmvwbvZMn1CErH3jjyG2nDAnDSaJ6XczDutruYm%2BNRG7FRIEk5IbNnN%2BFWmM4qCC2xlbFZ31LGsgGCLN3JtRO3aPt9kxo%2B5lLJIi5bjaZ176ICOJ3SmVOMOu6OYwoo08nPjuQ87xW3ft1GgY%2FBmL6ds8eGGcORK%2F4gqorp8ab3b%2B%2BO%2FJp6SeJ9qBv0d8uc4KimUAwwVkorioJmwzDcpEbzyjVB%2Fe%2BOYT4KzFNObJ8XfCND3XE%2B7OXrpAm1owGNiT4Ej3AaDQBVW6R%2BBW%2FpWKC0YVSiL7hyhvPaVJ27Vz4U7oeB%2F1ZhE2Dll2d85s7kBV0fFCFRSEIRPQWx5BwWlKUYukd3m0G3zM6lXyRalFJNGyXK5JWCTb5BtpcSrFdAj3qUCg3DznDuHw%2FwMY1RgKFbaHYfs947Cq6vGm93vIA%2FAfOELYUnDybqUB0oIsJPuOkju5bYTtrBi0xogARe5kEXg8EMzaVO1X4pUZbzX%2FnvVdS3qTzLXOc4wxZLPwAY6pgFJl5Q9XNtydK3IMMRT08mufhC40fEae%2BDWjABoOyWOM%2FiRwA24wb2nOvY7WXk%2FNC8TmcJyrDaDKZZLm44wb8eQvJbgKMHIO6yXeQ8qV%2BR3irEIk8QNZag9ytLmnx1mUvi0XMCc6gCPE%2Bu1F93gfQAUMsYmnKfckw5I1WEX7KFpDXaIYHdIEgYzEVJ1E9aCAweurs3Q2oH2%2FZEFu80WrmmMv9cwsVDZ&X-Amz-Signature=e0d841277817c8b83e6a4f9bb7e9862600e20da0e6e650c86b5155e22ce78783&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2ML3ND%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE15PwyJIbQrfiWaC4b41HkkHgTTW24DXhqqAaJCKd5BAiBcKbn%2BVNWJlx0RVVFhj46Q5Vsj1OOAtxJ%2BJUNgC1rnZiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhkaVpQn3rUkh9eCKtwDWBOXWJikomD8M6E0%2FifKUqreEx%2BcV9DfDD7DwxaZIaT%2BWDcx9o7qAR8QBxhPVcRNc9CNdgK8hNy58ofdUb4ypactg5e%2FZqdlh%2BJEQ4nJWfoGAEl0R2LN98NGncFACbelAezBwUmvwbvZMn1CErH3jjyG2nDAnDSaJ6XczDutruYm%2BNRG7FRIEk5IbNnN%2BFWmM4qCC2xlbFZ31LGsgGCLN3JtRO3aPt9kxo%2B5lLJIi5bjaZ176ICOJ3SmVOMOu6OYwoo08nPjuQ87xW3ft1GgY%2FBmL6ds8eGGcORK%2F4gqorp8ab3b%2B%2BO%2FJp6SeJ9qBv0d8uc4KimUAwwVkorioJmwzDcpEbzyjVB%2Fe%2BOYT4KzFNObJ8XfCND3XE%2B7OXrpAm1owGNiT4Ej3AaDQBVW6R%2BBW%2FpWKC0YVSiL7hyhvPaVJ27Vz4U7oeB%2F1ZhE2Dll2d85s7kBV0fFCFRSEIRPQWx5BwWlKUYukd3m0G3zM6lXyRalFJNGyXK5JWCTb5BtpcSrFdAj3qUCg3DznDuHw%2FwMY1RgKFbaHYfs947Cq6vGm93vIA%2FAfOELYUnDybqUB0oIsJPuOkju5bYTtrBi0xogARe5kEXg8EMzaVO1X4pUZbzX%2FnvVdS3qTzLXOc4wxZLPwAY6pgFJl5Q9XNtydK3IMMRT08mufhC40fEae%2BDWjABoOyWOM%2FiRwA24wb2nOvY7WXk%2FNC8TmcJyrDaDKZZLm44wb8eQvJbgKMHIO6yXeQ8qV%2BR3irEIk8QNZag9ytLmnx1mUvi0XMCc6gCPE%2Bu1F93gfQAUMsYmnKfckw5I1WEX7KFpDXaIYHdIEgYzEVJ1E9aCAweurs3Q2oH2%2FZEFu80WrmmMv9cwsVDZ&X-Amz-Signature=3d099a679dd0c0918351de286744e1010656f4fdb5979289bddcbc9de1363cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
