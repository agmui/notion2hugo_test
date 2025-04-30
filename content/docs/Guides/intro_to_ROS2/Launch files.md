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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GJOWFCS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCJf%2FfEBU1zMRL2Mu33EuGyY%2Bul2OqhwE3rpuQKvQLj4QIhAJ2TlJSSGn2Wf3C5F93os4%2FbD1z1a1YEqsxtQbaCuzsbKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww%2F1TMYnss09hnbOgq3AOZrlL674Bk2fk2BN%2Bd0S81HtA0u8Wk8tb4VXPciBKa%2FFDDMflcznj%2FPgQgvS2zfdmu30EBMj8lu3CJuhsGop%2FJTVhXe2ZeMHbiFsvX6ey4Aueuf7WlAEFlHG%2FF9RklA4BPYIHsfAmxwV05YmdMuV5RTpn544nRrR%2BbYiGk%2BjTDgcYXpI%2FEWR2a9GZGBZ%2Fz1fPv1x6naD56N9pA1BY9FMqNHUP3PO8nVQijY5MrPzbXcS7%2FOSdPAyF6EWrLmWu9RIHxbKY8V8TjeWU6w23vjjFT10fxUtxf%2BzDr%2FS%2FMoVxlaADLNGlCLvBv6026g5MXJVkW%2FMVCIR%2BeG%2B3iDgYH8h2GScSpocIAh0wJZE6%2F%2Fw8gxs9DXvm8II%2BETaLffzllnPHViS6sg%2BaLN2qp%2FhELz0VQJWuMf9qDCL%2BTX7OXiKx2uJk6xUEg5rkgfia5xAvxsEN9bsFxpOA6nT3aD1eIEGUQ6xy1T2QUfMfawZVKluB3R28WMeQEv1rRAzlrgeGbdEUHocqG853bHPNZF2cW0cFZpJQ0XP9K41gH7ECp71Sn5buHJB2bG4tt5BJihNoijhgOda%2FdAMDJWKdly7HqSTqgjN1dCyLvCefvlUts8Lv7XGryt5X%2BOxcylgum1DCukMrABjqkAW%2BIBtWg8GGKSQ2YkDwM212XebQ0jWczUxlO3%2BUDHVt8JlI4GSPC21J8k7nemtT3wktJkES734LMdD1dFbGEh2iNfnlhwhJ1G9%2FSYbbl4nS8v1VTPM5TWef%2FpPviEScKLPQbbZsnp%2B0tY7qkNKmEe9bXMGHYp4VFBNmtkqn1PhAW57da%2F10djr8kLE62%2BozI7CQ2oyWcFr4p4X5wNCfHXmkPL8zb&X-Amz-Signature=9d08fcdead390d98f2628f1be66d3753146fc9024892729529cbe851406d1ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GJOWFCS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCJf%2FfEBU1zMRL2Mu33EuGyY%2Bul2OqhwE3rpuQKvQLj4QIhAJ2TlJSSGn2Wf3C5F93os4%2FbD1z1a1YEqsxtQbaCuzsbKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww%2F1TMYnss09hnbOgq3AOZrlL674Bk2fk2BN%2Bd0S81HtA0u8Wk8tb4VXPciBKa%2FFDDMflcznj%2FPgQgvS2zfdmu30EBMj8lu3CJuhsGop%2FJTVhXe2ZeMHbiFsvX6ey4Aueuf7WlAEFlHG%2FF9RklA4BPYIHsfAmxwV05YmdMuV5RTpn544nRrR%2BbYiGk%2BjTDgcYXpI%2FEWR2a9GZGBZ%2Fz1fPv1x6naD56N9pA1BY9FMqNHUP3PO8nVQijY5MrPzbXcS7%2FOSdPAyF6EWrLmWu9RIHxbKY8V8TjeWU6w23vjjFT10fxUtxf%2BzDr%2FS%2FMoVxlaADLNGlCLvBv6026g5MXJVkW%2FMVCIR%2BeG%2B3iDgYH8h2GScSpocIAh0wJZE6%2F%2Fw8gxs9DXvm8II%2BETaLffzllnPHViS6sg%2BaLN2qp%2FhELz0VQJWuMf9qDCL%2BTX7OXiKx2uJk6xUEg5rkgfia5xAvxsEN9bsFxpOA6nT3aD1eIEGUQ6xy1T2QUfMfawZVKluB3R28WMeQEv1rRAzlrgeGbdEUHocqG853bHPNZF2cW0cFZpJQ0XP9K41gH7ECp71Sn5buHJB2bG4tt5BJihNoijhgOda%2FdAMDJWKdly7HqSTqgjN1dCyLvCefvlUts8Lv7XGryt5X%2BOxcylgum1DCukMrABjqkAW%2BIBtWg8GGKSQ2YkDwM212XebQ0jWczUxlO3%2BUDHVt8JlI4GSPC21J8k7nemtT3wktJkES734LMdD1dFbGEh2iNfnlhwhJ1G9%2FSYbbl4nS8v1VTPM5TWef%2FpPviEScKLPQbbZsnp%2B0tY7qkNKmEe9bXMGHYp4VFBNmtkqn1PhAW57da%2F10djr8kLE62%2BozI7CQ2oyWcFr4p4X5wNCfHXmkPL8zb&X-Amz-Signature=ee5cde8c5dd4efc41d9831fb8c86d908ff356e0e3b804c77fd42bf3afde7493e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GJOWFCS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCJf%2FfEBU1zMRL2Mu33EuGyY%2Bul2OqhwE3rpuQKvQLj4QIhAJ2TlJSSGn2Wf3C5F93os4%2FbD1z1a1YEqsxtQbaCuzsbKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww%2F1TMYnss09hnbOgq3AOZrlL674Bk2fk2BN%2Bd0S81HtA0u8Wk8tb4VXPciBKa%2FFDDMflcznj%2FPgQgvS2zfdmu30EBMj8lu3CJuhsGop%2FJTVhXe2ZeMHbiFsvX6ey4Aueuf7WlAEFlHG%2FF9RklA4BPYIHsfAmxwV05YmdMuV5RTpn544nRrR%2BbYiGk%2BjTDgcYXpI%2FEWR2a9GZGBZ%2Fz1fPv1x6naD56N9pA1BY9FMqNHUP3PO8nVQijY5MrPzbXcS7%2FOSdPAyF6EWrLmWu9RIHxbKY8V8TjeWU6w23vjjFT10fxUtxf%2BzDr%2FS%2FMoVxlaADLNGlCLvBv6026g5MXJVkW%2FMVCIR%2BeG%2B3iDgYH8h2GScSpocIAh0wJZE6%2F%2Fw8gxs9DXvm8II%2BETaLffzllnPHViS6sg%2BaLN2qp%2FhELz0VQJWuMf9qDCL%2BTX7OXiKx2uJk6xUEg5rkgfia5xAvxsEN9bsFxpOA6nT3aD1eIEGUQ6xy1T2QUfMfawZVKluB3R28WMeQEv1rRAzlrgeGbdEUHocqG853bHPNZF2cW0cFZpJQ0XP9K41gH7ECp71Sn5buHJB2bG4tt5BJihNoijhgOda%2FdAMDJWKdly7HqSTqgjN1dCyLvCefvlUts8Lv7XGryt5X%2BOxcylgum1DCukMrABjqkAW%2BIBtWg8GGKSQ2YkDwM212XebQ0jWczUxlO3%2BUDHVt8JlI4GSPC21J8k7nemtT3wktJkES734LMdD1dFbGEh2iNfnlhwhJ1G9%2FSYbbl4nS8v1VTPM5TWef%2FpPviEScKLPQbbZsnp%2B0tY7qkNKmEe9bXMGHYp4VFBNmtkqn1PhAW57da%2F10djr8kLE62%2BozI7CQ2oyWcFr4p4X5wNCfHXmkPL8zb&X-Amz-Signature=7a28568ba1109b19daa965825e517a5227ef47a393ce0216efd58c9d363229cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
