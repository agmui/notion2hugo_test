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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI62MRY5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDns1pmWTEBO6EJobfuuS7dnV1MiQktZT0sJHFGh24rDQIgThkQw5Jbk8%2B6F4Jv7g16oiCPZUjONsBJaJKZ0Dxr%2Fgkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJvM29qf3HNoh6y9hCrcAyPG%2BvDwio0S6mlWj3GvHfTutVkOpb9A8Fh79IyDtLqPll2Plvcbrv7OSnlP1Pwr4%2FujoipV1izaJOlyUcvDNFjhcsviRAW8Q6n6jzTh2WoQtdhFBt4XxbgnElZygP0KzbZ%2BkOktwo%2B2Xf%2FnDlJ88uWdPweRRRBFNqIwW9fgRua7iSxssb1LA0UqGB3Mf1RJnP7pT0yRqEZvtFpBakB7aHMP5lJK1NZgTjr%2BgZVqaLpRuYMHHyH9QLK8vqzclfwWryhNXQhrHCoY6DNfLf91S89TGryD%2F3VHDebT%2Bq%2Fon8zHTLjOhzNINAi0EVSi7tik%2BGu7BquXUpz1kJsgC%2BfMvvYKlIcMsyUaNiBYq1zHbgCMU44KWIZj%2Bvn79Pp4DGEiHMGoYe2xuX5WuCpj1ANSdFgmwYOmWk7c8ixHJ20WfSrLbXvdj%2B6QBbf6jqf6WyyrNvgA8RlhQ3jsPOzmMaXMxNlD4KN5f9dPT4ETyJcrTjiFyGmPdjAdmg7VIQM3eMIbEHVLShpayqsk229gxTefCwBhyP%2FtIw5tuzbbpLEmfyTRpkzV%2FybDfIV5UYl3nXcbpkOWAiUJlC4J0Ua9mzca12SMkMeh%2FeXI9ne6CH3rFBpHvXLGt8vH3JtTZTaMMNup1r8GOqUBSnuXnKzu7d75GMSkz%2BQwmbnOqfYX8KdrZPQSk3jhhY2hyJZuKjHb9%2FhA3WL1UUQQscf%2F4YDQLLVp0wPQ26vKYoQM0FXc3Xe0cICDBM0oKczQVwe3VcrO6TIGlnQOF0doWIwyPB0ZblRRvld%2FftGskHNW6SjkxV8XuixnndE%2B8rW3ITiYrrqz9ps7yS%2FkDXJZmztqxuKAa%2B1%2FiyFSub51p9uDicxF&X-Amz-Signature=6ccbaeceb0e64b46d45f3612ba6228224105a654aba2eddc12cfe69001715098&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI62MRY5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDns1pmWTEBO6EJobfuuS7dnV1MiQktZT0sJHFGh24rDQIgThkQw5Jbk8%2B6F4Jv7g16oiCPZUjONsBJaJKZ0Dxr%2Fgkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJvM29qf3HNoh6y9hCrcAyPG%2BvDwio0S6mlWj3GvHfTutVkOpb9A8Fh79IyDtLqPll2Plvcbrv7OSnlP1Pwr4%2FujoipV1izaJOlyUcvDNFjhcsviRAW8Q6n6jzTh2WoQtdhFBt4XxbgnElZygP0KzbZ%2BkOktwo%2B2Xf%2FnDlJ88uWdPweRRRBFNqIwW9fgRua7iSxssb1LA0UqGB3Mf1RJnP7pT0yRqEZvtFpBakB7aHMP5lJK1NZgTjr%2BgZVqaLpRuYMHHyH9QLK8vqzclfwWryhNXQhrHCoY6DNfLf91S89TGryD%2F3VHDebT%2Bq%2Fon8zHTLjOhzNINAi0EVSi7tik%2BGu7BquXUpz1kJsgC%2BfMvvYKlIcMsyUaNiBYq1zHbgCMU44KWIZj%2Bvn79Pp4DGEiHMGoYe2xuX5WuCpj1ANSdFgmwYOmWk7c8ixHJ20WfSrLbXvdj%2B6QBbf6jqf6WyyrNvgA8RlhQ3jsPOzmMaXMxNlD4KN5f9dPT4ETyJcrTjiFyGmPdjAdmg7VIQM3eMIbEHVLShpayqsk229gxTefCwBhyP%2FtIw5tuzbbpLEmfyTRpkzV%2FybDfIV5UYl3nXcbpkOWAiUJlC4J0Ua9mzca12SMkMeh%2FeXI9ne6CH3rFBpHvXLGt8vH3JtTZTaMMNup1r8GOqUBSnuXnKzu7d75GMSkz%2BQwmbnOqfYX8KdrZPQSk3jhhY2hyJZuKjHb9%2FhA3WL1UUQQscf%2F4YDQLLVp0wPQ26vKYoQM0FXc3Xe0cICDBM0oKczQVwe3VcrO6TIGlnQOF0doWIwyPB0ZblRRvld%2FftGskHNW6SjkxV8XuixnndE%2B8rW3ITiYrrqz9ps7yS%2FkDXJZmztqxuKAa%2B1%2FiyFSub51p9uDicxF&X-Amz-Signature=5f868c0dbf9293a2cb28dc5fc25d928ccec19cfee63d5547a791809497bf8085&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI62MRY5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDns1pmWTEBO6EJobfuuS7dnV1MiQktZT0sJHFGh24rDQIgThkQw5Jbk8%2B6F4Jv7g16oiCPZUjONsBJaJKZ0Dxr%2Fgkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJvM29qf3HNoh6y9hCrcAyPG%2BvDwio0S6mlWj3GvHfTutVkOpb9A8Fh79IyDtLqPll2Plvcbrv7OSnlP1Pwr4%2FujoipV1izaJOlyUcvDNFjhcsviRAW8Q6n6jzTh2WoQtdhFBt4XxbgnElZygP0KzbZ%2BkOktwo%2B2Xf%2FnDlJ88uWdPweRRRBFNqIwW9fgRua7iSxssb1LA0UqGB3Mf1RJnP7pT0yRqEZvtFpBakB7aHMP5lJK1NZgTjr%2BgZVqaLpRuYMHHyH9QLK8vqzclfwWryhNXQhrHCoY6DNfLf91S89TGryD%2F3VHDebT%2Bq%2Fon8zHTLjOhzNINAi0EVSi7tik%2BGu7BquXUpz1kJsgC%2BfMvvYKlIcMsyUaNiBYq1zHbgCMU44KWIZj%2Bvn79Pp4DGEiHMGoYe2xuX5WuCpj1ANSdFgmwYOmWk7c8ixHJ20WfSrLbXvdj%2B6QBbf6jqf6WyyrNvgA8RlhQ3jsPOzmMaXMxNlD4KN5f9dPT4ETyJcrTjiFyGmPdjAdmg7VIQM3eMIbEHVLShpayqsk229gxTefCwBhyP%2FtIw5tuzbbpLEmfyTRpkzV%2FybDfIV5UYl3nXcbpkOWAiUJlC4J0Ua9mzca12SMkMeh%2FeXI9ne6CH3rFBpHvXLGt8vH3JtTZTaMMNup1r8GOqUBSnuXnKzu7d75GMSkz%2BQwmbnOqfYX8KdrZPQSk3jhhY2hyJZuKjHb9%2FhA3WL1UUQQscf%2F4YDQLLVp0wPQ26vKYoQM0FXc3Xe0cICDBM0oKczQVwe3VcrO6TIGlnQOF0doWIwyPB0ZblRRvld%2FftGskHNW6SjkxV8XuixnndE%2B8rW3ITiYrrqz9ps7yS%2FkDXJZmztqxuKAa%2B1%2FiyFSub51p9uDicxF&X-Amz-Signature=522d62128b5480a796d53c5ed202f75dcd2b5b9728097af1373d67384027c3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
