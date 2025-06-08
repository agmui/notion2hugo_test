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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLUAXQB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BPR8bbMegtt5b0Af7LFvrLuEzQLok9MX0MW%2FUilnNWQIgJVCcEmhJhPzC6WiZOQrs7rcrxwqY7AL5VEZoeGT%2FHWgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxUoC%2BlgejbeX%2Fr3SrcAygKVk3za58LgzfsFtlWECL%2BUvOcLL5eSKMeWcIJyoxC1DeCS1vECEEuQc4feq2u6tOxnO1%2BRv5aBfaLL5eBtZYSymu9cGTgUuVLX0fRzrplV1p46Txr6tRmmVoQvET5M2Rk1mJ4UmAbiTVU9vKWdLPKwR65HI9lhUIvAZv5DdnEfnrFcANDnHS74FCPnovgyyJzJyAli6ZMoaxK07udl0bia01gMSeWZzxPQBrHVe%2FdV4dYqo1n9p8L3NsVS9%2B2YadtbzzmtVbs8kvQ9jyKE1Jq279UnqFqShxeDMzHK24wlAhvyioL3G9AN2CChtuJYtnpbgK7p%2FJyJW3KvnzYYsMzM83GG%2FNeYkvv8j80MgUF9l%2BzdDzWXqL6FilCNcoOfTCBcxtQGEQAEgT6WNpTEbmRUHzlfihVWTBYkqmxMxD0Cdp19DEhV%2FvAm1Jy8VC2xN%2BAGUSev7Bfxw1AJaw0UNGiD%2FW8CGgudxYOhu7RDdsRCGjsAAtX9WsnjGrdzYvRrZNaG56xtqFw%2FaGIIfhoqU6HtYKoHyojjKnfP93UZb7Emmmv3a7HMa8DCXranpkSzbviOVyayvrOSfpv24wm7S7X3zsJc2TGyE%2FzpTYtXGUxnKqUztk3%2B7i%2F6g1DMMCimMIGOqUBpeJtqaeLXF5CfPx5%2FXYxLUIi7Y%2F9OrJWSIB3pVLqVySUsCkCXGahlXJO4LgWZWBIH%2FVraqnkilpcSyW5a4P691bdVqaQMb1h%2FFGmOqXEz2GdzBi%2FNUyyUKndKBCHXdy6BtD2EcgHiSfrRUefMJD4%2F5fKLY8QdLA%2FDk6SAcnSXvxudycSQPFX2xpTgY827ylTnHeXpnxXWAMdzS0oR58nPlFUF0Pe&X-Amz-Signature=54977c8436051db2baf8ff8a2e415a2659e2dd0d6ff3b437867e9619e2c22f36&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLUAXQB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BPR8bbMegtt5b0Af7LFvrLuEzQLok9MX0MW%2FUilnNWQIgJVCcEmhJhPzC6WiZOQrs7rcrxwqY7AL5VEZoeGT%2FHWgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxUoC%2BlgejbeX%2Fr3SrcAygKVk3za58LgzfsFtlWECL%2BUvOcLL5eSKMeWcIJyoxC1DeCS1vECEEuQc4feq2u6tOxnO1%2BRv5aBfaLL5eBtZYSymu9cGTgUuVLX0fRzrplV1p46Txr6tRmmVoQvET5M2Rk1mJ4UmAbiTVU9vKWdLPKwR65HI9lhUIvAZv5DdnEfnrFcANDnHS74FCPnovgyyJzJyAli6ZMoaxK07udl0bia01gMSeWZzxPQBrHVe%2FdV4dYqo1n9p8L3NsVS9%2B2YadtbzzmtVbs8kvQ9jyKE1Jq279UnqFqShxeDMzHK24wlAhvyioL3G9AN2CChtuJYtnpbgK7p%2FJyJW3KvnzYYsMzM83GG%2FNeYkvv8j80MgUF9l%2BzdDzWXqL6FilCNcoOfTCBcxtQGEQAEgT6WNpTEbmRUHzlfihVWTBYkqmxMxD0Cdp19DEhV%2FvAm1Jy8VC2xN%2BAGUSev7Bfxw1AJaw0UNGiD%2FW8CGgudxYOhu7RDdsRCGjsAAtX9WsnjGrdzYvRrZNaG56xtqFw%2FaGIIfhoqU6HtYKoHyojjKnfP93UZb7Emmmv3a7HMa8DCXranpkSzbviOVyayvrOSfpv24wm7S7X3zsJc2TGyE%2FzpTYtXGUxnKqUztk3%2B7i%2F6g1DMMCimMIGOqUBpeJtqaeLXF5CfPx5%2FXYxLUIi7Y%2F9OrJWSIB3pVLqVySUsCkCXGahlXJO4LgWZWBIH%2FVraqnkilpcSyW5a4P691bdVqaQMb1h%2FFGmOqXEz2GdzBi%2FNUyyUKndKBCHXdy6BtD2EcgHiSfrRUefMJD4%2F5fKLY8QdLA%2FDk6SAcnSXvxudycSQPFX2xpTgY827ylTnHeXpnxXWAMdzS0oR58nPlFUF0Pe&X-Amz-Signature=f0bf4f9be304d027ac5b6600d3974b32f9c74e5604984ec07d2c05b8486af906&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLUAXQB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BPR8bbMegtt5b0Af7LFvrLuEzQLok9MX0MW%2FUilnNWQIgJVCcEmhJhPzC6WiZOQrs7rcrxwqY7AL5VEZoeGT%2FHWgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxUoC%2BlgejbeX%2Fr3SrcAygKVk3za58LgzfsFtlWECL%2BUvOcLL5eSKMeWcIJyoxC1DeCS1vECEEuQc4feq2u6tOxnO1%2BRv5aBfaLL5eBtZYSymu9cGTgUuVLX0fRzrplV1p46Txr6tRmmVoQvET5M2Rk1mJ4UmAbiTVU9vKWdLPKwR65HI9lhUIvAZv5DdnEfnrFcANDnHS74FCPnovgyyJzJyAli6ZMoaxK07udl0bia01gMSeWZzxPQBrHVe%2FdV4dYqo1n9p8L3NsVS9%2B2YadtbzzmtVbs8kvQ9jyKE1Jq279UnqFqShxeDMzHK24wlAhvyioL3G9AN2CChtuJYtnpbgK7p%2FJyJW3KvnzYYsMzM83GG%2FNeYkvv8j80MgUF9l%2BzdDzWXqL6FilCNcoOfTCBcxtQGEQAEgT6WNpTEbmRUHzlfihVWTBYkqmxMxD0Cdp19DEhV%2FvAm1Jy8VC2xN%2BAGUSev7Bfxw1AJaw0UNGiD%2FW8CGgudxYOhu7RDdsRCGjsAAtX9WsnjGrdzYvRrZNaG56xtqFw%2FaGIIfhoqU6HtYKoHyojjKnfP93UZb7Emmmv3a7HMa8DCXranpkSzbviOVyayvrOSfpv24wm7S7X3zsJc2TGyE%2FzpTYtXGUxnKqUztk3%2B7i%2F6g1DMMCimMIGOqUBpeJtqaeLXF5CfPx5%2FXYxLUIi7Y%2F9OrJWSIB3pVLqVySUsCkCXGahlXJO4LgWZWBIH%2FVraqnkilpcSyW5a4P691bdVqaQMb1h%2FFGmOqXEz2GdzBi%2FNUyyUKndKBCHXdy6BtD2EcgHiSfrRUefMJD4%2F5fKLY8QdLA%2FDk6SAcnSXvxudycSQPFX2xpTgY827ylTnHeXpnxXWAMdzS0oR58nPlFUF0Pe&X-Amz-Signature=b5aa52ef0abed2c6d17a55b0a6ae832587f8ef5321983acbe69237f248a0c003&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
