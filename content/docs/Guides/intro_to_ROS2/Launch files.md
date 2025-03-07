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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CDP3I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9sk3iYXQ%2BBSQdn6gBIXnlMbtgYouvioS6ekJ76iuDzAiEAoNxuEi2a5lJM%2F%2F6f8mqJdY1Xkqpx090BRP5k6DEmwbAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDImGTcOunoZgg2fw4yrcA4VNKddFBx5Q8drhMW8zFc%2BH5ftfbozfRs1sygE6cqixHSkdqMAFfGUjmio56qoQw9K4VbqZbrrLO8%2FGdXNy4wP15N8n9O173Bmjf0TiEKFkRM%2B2cq0Ll6ybOq7bItAlwYssodlKe3jfUC9kJeJOuflxPGanKgtBIr4ObOT5YG8Ygs2Axs7G43XBqkt6phX7dL8nRtNWwFa87qptNF9FsFRN5ssfRYkqDdr0MArubiWYIpj8RLVDC4muz5jE4yvK1ACCI65LSDUrXe7s21YkVjHruuBXML5HtuMfUFrcmSzxAbVwVVArHtw3wLuc6OUNvQgfA%2BkfP2hM4iEqjfgTgiBb22cbJ634sK%2BSvRFXKFqE5%2BYriUvjOM9tIU54z9i0LRQrwAW6NRjehXvX1Sx6y2KXrjlpE3YRtdwkL9v54qs7qIG2hIvr6D05mujHL6VTkAE1GtPD6Oo%2BRWmMlbk9dfhHx27iemDT%2FRPNk9b4bWbDl1n49wp2TAtAfzQ2FdDnAnpfUtvSkTBv5U4QNAqEy2zVHTpbdMwmd0hEPzUiVcLZyK8OOFqPtZQ%2BHmUJP2HsmyWsu2WGqqDzIe8AyTV8Lq3%2FYC7r%2FCh4y7LTBkXOmG3%2BsYTnxUyxGAokZsLFMIunqr4GOqUBowUbhtM3yUCZyGZameItWZj6zvR%2F68xQba%2BBogS7RIurNXlrCbTV7vvSe1NGsYjWmd3Za7p8T%2BqZbIgI1IeP8RSfJsMYjy%2Bq8w6E%2Bjhd8tKXDhceOMDgq38M6yrpDDxDsnJzQ5hhTe6JR%2BA%2FSCbYQ8tfXIqFCtgY3P%2BetddBMC3Lypnubyp0M8gCYP7iswseCxtplcXJgtnfhKrxFTTvVOK6Kgyh&X-Amz-Signature=90c354c15a5d3c192e2993f8d269608d78b083cd457fcb1f70b5300ba4b409ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CDP3I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9sk3iYXQ%2BBSQdn6gBIXnlMbtgYouvioS6ekJ76iuDzAiEAoNxuEi2a5lJM%2F%2F6f8mqJdY1Xkqpx090BRP5k6DEmwbAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDImGTcOunoZgg2fw4yrcA4VNKddFBx5Q8drhMW8zFc%2BH5ftfbozfRs1sygE6cqixHSkdqMAFfGUjmio56qoQw9K4VbqZbrrLO8%2FGdXNy4wP15N8n9O173Bmjf0TiEKFkRM%2B2cq0Ll6ybOq7bItAlwYssodlKe3jfUC9kJeJOuflxPGanKgtBIr4ObOT5YG8Ygs2Axs7G43XBqkt6phX7dL8nRtNWwFa87qptNF9FsFRN5ssfRYkqDdr0MArubiWYIpj8RLVDC4muz5jE4yvK1ACCI65LSDUrXe7s21YkVjHruuBXML5HtuMfUFrcmSzxAbVwVVArHtw3wLuc6OUNvQgfA%2BkfP2hM4iEqjfgTgiBb22cbJ634sK%2BSvRFXKFqE5%2BYriUvjOM9tIU54z9i0LRQrwAW6NRjehXvX1Sx6y2KXrjlpE3YRtdwkL9v54qs7qIG2hIvr6D05mujHL6VTkAE1GtPD6Oo%2BRWmMlbk9dfhHx27iemDT%2FRPNk9b4bWbDl1n49wp2TAtAfzQ2FdDnAnpfUtvSkTBv5U4QNAqEy2zVHTpbdMwmd0hEPzUiVcLZyK8OOFqPtZQ%2BHmUJP2HsmyWsu2WGqqDzIe8AyTV8Lq3%2FYC7r%2FCh4y7LTBkXOmG3%2BsYTnxUyxGAokZsLFMIunqr4GOqUBowUbhtM3yUCZyGZameItWZj6zvR%2F68xQba%2BBogS7RIurNXlrCbTV7vvSe1NGsYjWmd3Za7p8T%2BqZbIgI1IeP8RSfJsMYjy%2Bq8w6E%2Bjhd8tKXDhceOMDgq38M6yrpDDxDsnJzQ5hhTe6JR%2BA%2FSCbYQ8tfXIqFCtgY3P%2BetddBMC3Lypnubyp0M8gCYP7iswseCxtplcXJgtnfhKrxFTTvVOK6Kgyh&X-Amz-Signature=b2841142313e87486d8b47e28f0843a65115b6576376b629d86cafd5591bdcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4CDP3I%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9sk3iYXQ%2BBSQdn6gBIXnlMbtgYouvioS6ekJ76iuDzAiEAoNxuEi2a5lJM%2F%2F6f8mqJdY1Xkqpx090BRP5k6DEmwbAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDImGTcOunoZgg2fw4yrcA4VNKddFBx5Q8drhMW8zFc%2BH5ftfbozfRs1sygE6cqixHSkdqMAFfGUjmio56qoQw9K4VbqZbrrLO8%2FGdXNy4wP15N8n9O173Bmjf0TiEKFkRM%2B2cq0Ll6ybOq7bItAlwYssodlKe3jfUC9kJeJOuflxPGanKgtBIr4ObOT5YG8Ygs2Axs7G43XBqkt6phX7dL8nRtNWwFa87qptNF9FsFRN5ssfRYkqDdr0MArubiWYIpj8RLVDC4muz5jE4yvK1ACCI65LSDUrXe7s21YkVjHruuBXML5HtuMfUFrcmSzxAbVwVVArHtw3wLuc6OUNvQgfA%2BkfP2hM4iEqjfgTgiBb22cbJ634sK%2BSvRFXKFqE5%2BYriUvjOM9tIU54z9i0LRQrwAW6NRjehXvX1Sx6y2KXrjlpE3YRtdwkL9v54qs7qIG2hIvr6D05mujHL6VTkAE1GtPD6Oo%2BRWmMlbk9dfhHx27iemDT%2FRPNk9b4bWbDl1n49wp2TAtAfzQ2FdDnAnpfUtvSkTBv5U4QNAqEy2zVHTpbdMwmd0hEPzUiVcLZyK8OOFqPtZQ%2BHmUJP2HsmyWsu2WGqqDzIe8AyTV8Lq3%2FYC7r%2FCh4y7LTBkXOmG3%2BsYTnxUyxGAokZsLFMIunqr4GOqUBowUbhtM3yUCZyGZameItWZj6zvR%2F68xQba%2BBogS7RIurNXlrCbTV7vvSe1NGsYjWmd3Za7p8T%2BqZbIgI1IeP8RSfJsMYjy%2Bq8w6E%2Bjhd8tKXDhceOMDgq38M6yrpDDxDsnJzQ5hhTe6JR%2BA%2FSCbYQ8tfXIqFCtgY3P%2BetddBMC3Lypnubyp0M8gCYP7iswseCxtplcXJgtnfhKrxFTTvVOK6Kgyh&X-Amz-Signature=a93c072e018ae712a6a5d244a0810b1b5ccf0a00a05bd88b5455fa4bbdbcb9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
