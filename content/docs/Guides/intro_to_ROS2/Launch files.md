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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZAROHW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDlhgm6NerX0M7wQURHyIwd1XsMRm8gt67RMYsnFWOJQIhAIUTm%2BWtCw3BbfGvToBoFWp7gmOBPRPjwGowxnkZMhn%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLHeX0%2B16dpNlQiWcq3ANcLF2iUunCUJQcq5%2Fn8FKhpTyh6kefjsfzU4mlbFzeMK1yWXShVZ6cC8k5aiYe6OLJWWL47Zh9GghRSP5RrhIyALi3Q7GMnTs%2FR9S8XrLCR8n06aj4IspxtxwBPcCAopSTyxGJU3utugJvlogK557gcxlxCRu%2FIbuy8v7tFVwqFvFRohcYv5SWxcGHNqG3Yu7MLScU%2FV%2BS%2BQALaYWIVURkitDCbIf1NXl03sxoa%2FVCuYxa13Zu3nJMQSn5dZK5NX6nq01srSTZsv%2Fm4yrYR8EakeTzZoKNjK6AfVOESCCvszDtIzOAuP4x2OnJhyYH0N%2B4JRBSb%2F6dG4jcQIzE1ydQNChVLkDPBHM%2BzgsvcFSReRldyPFwq%2Bkdz8wsiFN9lzAwSXtSreWtPVSaCOT4jXaGO1rMYruHfE2iFj6K1WR9YqSg%2BW%2Bar1fN%2Bb2fdzzYAuStVAt%2FQUH5bDn4XJ8aiL5y34uF5HNpt43dAf5b5SJPp1IcwEXB1IDIL3FnyppJHXp3tPTO73O%2FPDgBok13icLWBSBzcpq1BZ%2FHcCVXlzw72BJ3ay%2BZyXap4GH%2F5%2FrauPj6uJG3v5sc3pUgKpFpCkNZF5a8Vtw7H0uRvsgVs0Tk5JbngnRyfSgQsOtVBDDVl6m9BjqkAXbM12uIr10juty8heMi1%2BRwXOusX2Oy06nqHJUl0smiLFXjYDZBqZdQJcrW%2FVq%2FnghO5FoBASrbiZQoBiZbjUEDnAJVSJE0TGqrVWDiT24vG3BunnSWGZHW6%2F7pBhXFjbaPjrFhoH07A9PTCYNy21SJrL%2F6B3EOxCia1S64amyJIxMJfndzkHoMFQ7DDsadE0Iq2s8pWFnQdL%2FI7WxXdLiS3Oyj&X-Amz-Signature=b890e1e1e9fd2137a0488d43f0be017f100a56c35852fcfb6e28b65d68a1a0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZAROHW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDlhgm6NerX0M7wQURHyIwd1XsMRm8gt67RMYsnFWOJQIhAIUTm%2BWtCw3BbfGvToBoFWp7gmOBPRPjwGowxnkZMhn%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLHeX0%2B16dpNlQiWcq3ANcLF2iUunCUJQcq5%2Fn8FKhpTyh6kefjsfzU4mlbFzeMK1yWXShVZ6cC8k5aiYe6OLJWWL47Zh9GghRSP5RrhIyALi3Q7GMnTs%2FR9S8XrLCR8n06aj4IspxtxwBPcCAopSTyxGJU3utugJvlogK557gcxlxCRu%2FIbuy8v7tFVwqFvFRohcYv5SWxcGHNqG3Yu7MLScU%2FV%2BS%2BQALaYWIVURkitDCbIf1NXl03sxoa%2FVCuYxa13Zu3nJMQSn5dZK5NX6nq01srSTZsv%2Fm4yrYR8EakeTzZoKNjK6AfVOESCCvszDtIzOAuP4x2OnJhyYH0N%2B4JRBSb%2F6dG4jcQIzE1ydQNChVLkDPBHM%2BzgsvcFSReRldyPFwq%2Bkdz8wsiFN9lzAwSXtSreWtPVSaCOT4jXaGO1rMYruHfE2iFj6K1WR9YqSg%2BW%2Bar1fN%2Bb2fdzzYAuStVAt%2FQUH5bDn4XJ8aiL5y34uF5HNpt43dAf5b5SJPp1IcwEXB1IDIL3FnyppJHXp3tPTO73O%2FPDgBok13icLWBSBzcpq1BZ%2FHcCVXlzw72BJ3ay%2BZyXap4GH%2F5%2FrauPj6uJG3v5sc3pUgKpFpCkNZF5a8Vtw7H0uRvsgVs0Tk5JbngnRyfSgQsOtVBDDVl6m9BjqkAXbM12uIr10juty8heMi1%2BRwXOusX2Oy06nqHJUl0smiLFXjYDZBqZdQJcrW%2FVq%2FnghO5FoBASrbiZQoBiZbjUEDnAJVSJE0TGqrVWDiT24vG3BunnSWGZHW6%2F7pBhXFjbaPjrFhoH07A9PTCYNy21SJrL%2F6B3EOxCia1S64amyJIxMJfndzkHoMFQ7DDsadE0Iq2s8pWFnQdL%2FI7WxXdLiS3Oyj&X-Amz-Signature=ff8c90382e6e7ee0f042802a1e55f4f9b71be773060ce9a0a1a710394fd6e3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZAROHW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDlhgm6NerX0M7wQURHyIwd1XsMRm8gt67RMYsnFWOJQIhAIUTm%2BWtCw3BbfGvToBoFWp7gmOBPRPjwGowxnkZMhn%2BKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLHeX0%2B16dpNlQiWcq3ANcLF2iUunCUJQcq5%2Fn8FKhpTyh6kefjsfzU4mlbFzeMK1yWXShVZ6cC8k5aiYe6OLJWWL47Zh9GghRSP5RrhIyALi3Q7GMnTs%2FR9S8XrLCR8n06aj4IspxtxwBPcCAopSTyxGJU3utugJvlogK557gcxlxCRu%2FIbuy8v7tFVwqFvFRohcYv5SWxcGHNqG3Yu7MLScU%2FV%2BS%2BQALaYWIVURkitDCbIf1NXl03sxoa%2FVCuYxa13Zu3nJMQSn5dZK5NX6nq01srSTZsv%2Fm4yrYR8EakeTzZoKNjK6AfVOESCCvszDtIzOAuP4x2OnJhyYH0N%2B4JRBSb%2F6dG4jcQIzE1ydQNChVLkDPBHM%2BzgsvcFSReRldyPFwq%2Bkdz8wsiFN9lzAwSXtSreWtPVSaCOT4jXaGO1rMYruHfE2iFj6K1WR9YqSg%2BW%2Bar1fN%2Bb2fdzzYAuStVAt%2FQUH5bDn4XJ8aiL5y34uF5HNpt43dAf5b5SJPp1IcwEXB1IDIL3FnyppJHXp3tPTO73O%2FPDgBok13icLWBSBzcpq1BZ%2FHcCVXlzw72BJ3ay%2BZyXap4GH%2F5%2FrauPj6uJG3v5sc3pUgKpFpCkNZF5a8Vtw7H0uRvsgVs0Tk5JbngnRyfSgQsOtVBDDVl6m9BjqkAXbM12uIr10juty8heMi1%2BRwXOusX2Oy06nqHJUl0smiLFXjYDZBqZdQJcrW%2FVq%2FnghO5FoBASrbiZQoBiZbjUEDnAJVSJE0TGqrVWDiT24vG3BunnSWGZHW6%2F7pBhXFjbaPjrFhoH07A9PTCYNy21SJrL%2F6B3EOxCia1S64amyJIxMJfndzkHoMFQ7DDsadE0Iq2s8pWFnQdL%2FI7WxXdLiS3Oyj&X-Amz-Signature=b79adb428b211530938e5e49ac5ff964ae33f3a17e82dca974c54672a860d725&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
