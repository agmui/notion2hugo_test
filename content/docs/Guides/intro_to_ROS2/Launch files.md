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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ7JIQS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeW%2BGonE9lppQDLqpOPZbK75UkBsESb7lXsDi6zexN5wIgEcR3rT%2FjHRiR8oZyWEhv6LVmhGlAXtUZuQ%2BTopF6%2BXIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPMhy0No9WxRYJMnwircA4n9ShMgD%2Fb%2FPJz54%2BysCfgKQ858ht1u7CxlegzyJiB9lzlFzEg4TgoTHnmRbGmnSh6%2BH5nMwdG6BTXDD46ty9spqiGTKSPeoH%2BRmdOyW0Qbh6T4aoeaTZkJUTOg4GzjjqSbXKihXpcKpyJSFE5gDE8%2Bfs6FiNBHH4bOEXwgoxomU4ybSgPMJAkw9iEpXzKNunKGCU8LbJFe6AE9oIQkkpoXXfc7zG2uqTXOy66hCA8S%2FlVsePer2HEDmkIBHcH6aplc58tx6Hx0yb6Ga%2BDtaJGuAceI688RuKxGUPzATBzgbeCRu9XU3wjDXj1Bx11gczFURfvYVfEodW4yFdvQNZgmuxpV%2Fv3jjv3Yqz8zbM3vb7uanDKb4k36GYlGcQwpgoYIAoD686umU2NSaDfrdGX2oi6sMWwQFL18UCtYgdbYtXcufMBRfdhhCovVKQm%2FCjidAHFLnDsuvOOH%2FHS8tLJhNDDN8to794EvSP8J2fp956YtXdDjcC4DSQH70NdQ9mrZLLRp23pr8GN%2FJqumrvmKgEImONyRavSS46P4VXsF3xHb8JgEhqDAwaTbFt4A%2FGamEz2ujNjggy8fuT18PA8tHD%2FdFh8fdd%2FXdQgtQApqe0YO2v%2FhpKYfDdl5MP6I88IGOqUB%2FsL029O1iRfHsPCMTh84C5la%2FDYIJFwfPabOnZLcdv%2FmomoxpBGc96rjslptq8tIiy4%2FW%2BQpSwpcBri8sXYkxx5iTsnE3h%2BTRe3URaSHadQGtXvscXteiGwHyVFPqze2L0bSce5LlrqtpO9NXddpSRxkKiBi9Ckq2PG%2BMDlFaDF90E3XdWpDSP%2F7VP3zvGg4%2BIMJIlaxHnQvwaxaX5uyq%2F6jjKXL&X-Amz-Signature=dbb004e7afa4e2579ca5c2ea0c78203218e8ab0d929e332a998f3d64341ad019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ7JIQS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeW%2BGonE9lppQDLqpOPZbK75UkBsESb7lXsDi6zexN5wIgEcR3rT%2FjHRiR8oZyWEhv6LVmhGlAXtUZuQ%2BTopF6%2BXIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPMhy0No9WxRYJMnwircA4n9ShMgD%2Fb%2FPJz54%2BysCfgKQ858ht1u7CxlegzyJiB9lzlFzEg4TgoTHnmRbGmnSh6%2BH5nMwdG6BTXDD46ty9spqiGTKSPeoH%2BRmdOyW0Qbh6T4aoeaTZkJUTOg4GzjjqSbXKihXpcKpyJSFE5gDE8%2Bfs6FiNBHH4bOEXwgoxomU4ybSgPMJAkw9iEpXzKNunKGCU8LbJFe6AE9oIQkkpoXXfc7zG2uqTXOy66hCA8S%2FlVsePer2HEDmkIBHcH6aplc58tx6Hx0yb6Ga%2BDtaJGuAceI688RuKxGUPzATBzgbeCRu9XU3wjDXj1Bx11gczFURfvYVfEodW4yFdvQNZgmuxpV%2Fv3jjv3Yqz8zbM3vb7uanDKb4k36GYlGcQwpgoYIAoD686umU2NSaDfrdGX2oi6sMWwQFL18UCtYgdbYtXcufMBRfdhhCovVKQm%2FCjidAHFLnDsuvOOH%2FHS8tLJhNDDN8to794EvSP8J2fp956YtXdDjcC4DSQH70NdQ9mrZLLRp23pr8GN%2FJqumrvmKgEImONyRavSS46P4VXsF3xHb8JgEhqDAwaTbFt4A%2FGamEz2ujNjggy8fuT18PA8tHD%2FdFh8fdd%2FXdQgtQApqe0YO2v%2FhpKYfDdl5MP6I88IGOqUB%2FsL029O1iRfHsPCMTh84C5la%2FDYIJFwfPabOnZLcdv%2FmomoxpBGc96rjslptq8tIiy4%2FW%2BQpSwpcBri8sXYkxx5iTsnE3h%2BTRe3URaSHadQGtXvscXteiGwHyVFPqze2L0bSce5LlrqtpO9NXddpSRxkKiBi9Ckq2PG%2BMDlFaDF90E3XdWpDSP%2F7VP3zvGg4%2BIMJIlaxHnQvwaxaX5uyq%2F6jjKXL&X-Amz-Signature=402f24eb9e15db22eff5dd92144bb53641c224ccf6c9e29bc428ab28ebfaba57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ7JIQS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeW%2BGonE9lppQDLqpOPZbK75UkBsESb7lXsDi6zexN5wIgEcR3rT%2FjHRiR8oZyWEhv6LVmhGlAXtUZuQ%2BTopF6%2BXIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPMhy0No9WxRYJMnwircA4n9ShMgD%2Fb%2FPJz54%2BysCfgKQ858ht1u7CxlegzyJiB9lzlFzEg4TgoTHnmRbGmnSh6%2BH5nMwdG6BTXDD46ty9spqiGTKSPeoH%2BRmdOyW0Qbh6T4aoeaTZkJUTOg4GzjjqSbXKihXpcKpyJSFE5gDE8%2Bfs6FiNBHH4bOEXwgoxomU4ybSgPMJAkw9iEpXzKNunKGCU8LbJFe6AE9oIQkkpoXXfc7zG2uqTXOy66hCA8S%2FlVsePer2HEDmkIBHcH6aplc58tx6Hx0yb6Ga%2BDtaJGuAceI688RuKxGUPzATBzgbeCRu9XU3wjDXj1Bx11gczFURfvYVfEodW4yFdvQNZgmuxpV%2Fv3jjv3Yqz8zbM3vb7uanDKb4k36GYlGcQwpgoYIAoD686umU2NSaDfrdGX2oi6sMWwQFL18UCtYgdbYtXcufMBRfdhhCovVKQm%2FCjidAHFLnDsuvOOH%2FHS8tLJhNDDN8to794EvSP8J2fp956YtXdDjcC4DSQH70NdQ9mrZLLRp23pr8GN%2FJqumrvmKgEImONyRavSS46P4VXsF3xHb8JgEhqDAwaTbFt4A%2FGamEz2ujNjggy8fuT18PA8tHD%2FdFh8fdd%2FXdQgtQApqe0YO2v%2FhpKYfDdl5MP6I88IGOqUB%2FsL029O1iRfHsPCMTh84C5la%2FDYIJFwfPabOnZLcdv%2FmomoxpBGc96rjslptq8tIiy4%2FW%2BQpSwpcBri8sXYkxx5iTsnE3h%2BTRe3URaSHadQGtXvscXteiGwHyVFPqze2L0bSce5LlrqtpO9NXddpSRxkKiBi9Ckq2PG%2BMDlFaDF90E3XdWpDSP%2F7VP3zvGg4%2BIMJIlaxHnQvwaxaX5uyq%2F6jjKXL&X-Amz-Signature=c94e37d26ef9bd763b4d0feab715e173ca0ab729f8619f25a5b6022c36222031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
