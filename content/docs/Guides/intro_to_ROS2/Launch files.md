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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEKOE2J%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDk8qkqki4ACxQVvTEfFOkQN%2B8mK3Z97N0rXjJPi%2F6TrAiAKgFjUQ7iWInjECwJfn6UiTjQfOPS3UnxgE%2BkrAVPueSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfK1OejNYaRW9mUmnKtwDVzRREIOwTp2zry0nJl1u7PG8%2FXLKVM2B9K63UDhYvXWygo%2FGXKbr5oUky%2FkzDRBof9aoKf6YwUlKSpUr8z%2B%2FC4qw2B%2FDCoTaHwkkC3QYrjW%2BwPvblXPGpvYNMDZ1rVO%2BvH6ne3C9E7clBQToJ3MiqccjY%2BRpB2o%2BufyRPEQKj0E29E5FIQdifPjgtqt8U%2BqtnR5eX6uQs0sDF1U3cJqT0jU6FLAlRTRB%2BW2GHpExEX2W%2Bcz1cc4ArUwrHjfXihGfLDpMmsx10mZpgcMHXbWi31w4KgiMJVv%2Fe3MKwQ%2BGUD9uNFghJv45Wpaogal7bqbGMNYiBKkDoYtCLakXlEV6K%2Beh%2FiMQEEtTJ06YKTRDlJjVna1Yl4Wqu3DNNYUUrkmNwVMEEwFMSFDR2znbjuRBzckUQlRMDnJnRmhpAPP1En3RhVbwwDG6xmwef680NLb0WWFa1P37aVEAp7S6kiB6knAXq74G15DZskDzgl2ZRaiJG%2FIAyx8SjJsMs%2BJZucMyj9cwB2cGWoOXvBX17uuKbMBqtlVmxStrRkSzUwtTkQMZDTF4Rifnr9ZSMhsFUpxnvByLLdyh2EhjIeBmEfY0hhBB%2BTmYifSd%2BRzc30JuH6HDhUP%2FDQw5ZYSKXEYwmLWfvwY6pgGdpiV7MRV8h3fKkVDPGY3iEDktWAGddAo9y%2F1g%2Bl%2B0vBMnbd3yON3Y3ryH5ZceVZR%2BvAhWxO4zpoRfaxT5PEtUQkg7DQkpsGMClk0%2BILSXw%2FORl9%2FuNb18HvUeihm9il7H%2B8teVsoNNdNkjtN%2BhA9KqgfAhI6Mx%2BUGjUmvyxJv3oPyKczBXTExolXR%2Bz6X0reIzFmM6QTOxcq4REGvQHC0qJHUrjZ3&X-Amz-Signature=caa9d4c8d06fc797eb19106664a7a046487c5e6818d20cd28c76d32d29dfbce2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEKOE2J%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDk8qkqki4ACxQVvTEfFOkQN%2B8mK3Z97N0rXjJPi%2F6TrAiAKgFjUQ7iWInjECwJfn6UiTjQfOPS3UnxgE%2BkrAVPueSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfK1OejNYaRW9mUmnKtwDVzRREIOwTp2zry0nJl1u7PG8%2FXLKVM2B9K63UDhYvXWygo%2FGXKbr5oUky%2FkzDRBof9aoKf6YwUlKSpUr8z%2B%2FC4qw2B%2FDCoTaHwkkC3QYrjW%2BwPvblXPGpvYNMDZ1rVO%2BvH6ne3C9E7clBQToJ3MiqccjY%2BRpB2o%2BufyRPEQKj0E29E5FIQdifPjgtqt8U%2BqtnR5eX6uQs0sDF1U3cJqT0jU6FLAlRTRB%2BW2GHpExEX2W%2Bcz1cc4ArUwrHjfXihGfLDpMmsx10mZpgcMHXbWi31w4KgiMJVv%2Fe3MKwQ%2BGUD9uNFghJv45Wpaogal7bqbGMNYiBKkDoYtCLakXlEV6K%2Beh%2FiMQEEtTJ06YKTRDlJjVna1Yl4Wqu3DNNYUUrkmNwVMEEwFMSFDR2znbjuRBzckUQlRMDnJnRmhpAPP1En3RhVbwwDG6xmwef680NLb0WWFa1P37aVEAp7S6kiB6knAXq74G15DZskDzgl2ZRaiJG%2FIAyx8SjJsMs%2BJZucMyj9cwB2cGWoOXvBX17uuKbMBqtlVmxStrRkSzUwtTkQMZDTF4Rifnr9ZSMhsFUpxnvByLLdyh2EhjIeBmEfY0hhBB%2BTmYifSd%2BRzc30JuH6HDhUP%2FDQw5ZYSKXEYwmLWfvwY6pgGdpiV7MRV8h3fKkVDPGY3iEDktWAGddAo9y%2F1g%2Bl%2B0vBMnbd3yON3Y3ryH5ZceVZR%2BvAhWxO4zpoRfaxT5PEtUQkg7DQkpsGMClk0%2BILSXw%2FORl9%2FuNb18HvUeihm9il7H%2B8teVsoNNdNkjtN%2BhA9KqgfAhI6Mx%2BUGjUmvyxJv3oPyKczBXTExolXR%2Bz6X0reIzFmM6QTOxcq4REGvQHC0qJHUrjZ3&X-Amz-Signature=5806848c042ed7d84785f689be069b298a24eea139ac820a484e1dd124dadb28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEKOE2J%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDk8qkqki4ACxQVvTEfFOkQN%2B8mK3Z97N0rXjJPi%2F6TrAiAKgFjUQ7iWInjECwJfn6UiTjQfOPS3UnxgE%2BkrAVPueSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfK1OejNYaRW9mUmnKtwDVzRREIOwTp2zry0nJl1u7PG8%2FXLKVM2B9K63UDhYvXWygo%2FGXKbr5oUky%2FkzDRBof9aoKf6YwUlKSpUr8z%2B%2FC4qw2B%2FDCoTaHwkkC3QYrjW%2BwPvblXPGpvYNMDZ1rVO%2BvH6ne3C9E7clBQToJ3MiqccjY%2BRpB2o%2BufyRPEQKj0E29E5FIQdifPjgtqt8U%2BqtnR5eX6uQs0sDF1U3cJqT0jU6FLAlRTRB%2BW2GHpExEX2W%2Bcz1cc4ArUwrHjfXihGfLDpMmsx10mZpgcMHXbWi31w4KgiMJVv%2Fe3MKwQ%2BGUD9uNFghJv45Wpaogal7bqbGMNYiBKkDoYtCLakXlEV6K%2Beh%2FiMQEEtTJ06YKTRDlJjVna1Yl4Wqu3DNNYUUrkmNwVMEEwFMSFDR2znbjuRBzckUQlRMDnJnRmhpAPP1En3RhVbwwDG6xmwef680NLb0WWFa1P37aVEAp7S6kiB6knAXq74G15DZskDzgl2ZRaiJG%2FIAyx8SjJsMs%2BJZucMyj9cwB2cGWoOXvBX17uuKbMBqtlVmxStrRkSzUwtTkQMZDTF4Rifnr9ZSMhsFUpxnvByLLdyh2EhjIeBmEfY0hhBB%2BTmYifSd%2BRzc30JuH6HDhUP%2FDQw5ZYSKXEYwmLWfvwY6pgGdpiV7MRV8h3fKkVDPGY3iEDktWAGddAo9y%2F1g%2Bl%2B0vBMnbd3yON3Y3ryH5ZceVZR%2BvAhWxO4zpoRfaxT5PEtUQkg7DQkpsGMClk0%2BILSXw%2FORl9%2FuNb18HvUeihm9il7H%2B8teVsoNNdNkjtN%2BhA9KqgfAhI6Mx%2BUGjUmvyxJv3oPyKczBXTExolXR%2Bz6X0reIzFmM6QTOxcq4REGvQHC0qJHUrjZ3&X-Amz-Signature=46aa5f5867e7af3ef1adb08bbd6bf688f3e4e7d8406c06bf23fd555db2ab67b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
