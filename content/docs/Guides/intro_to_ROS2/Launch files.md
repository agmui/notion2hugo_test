---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEOBWZSI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQm%2Bb28V5BerDgAIFmrluTMZ5TzHR2zL4k1BQuRnzGqAiEAlO9TpulPb7v3jtMdYG2CZJZEp8DSJuBfQ5R8ERSDeygqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbacSlqE5O14wKhCrcA04mW2C7smaW2vAqM2jMLnPjIFFDToN%2F1pNvQ1fLBm0QSiZYEBhKUUWs7pczZPgXVl7o9mmMIcJ2YnbzNWOF7LMEZM9xYhnIPoM8rx5dTWIl0h1h5OH0ban2muAvztypJio9brrQD2EiQc8KWZGI9%2BmY3XV9L9Df1f7CBwDthLZpFAG3ZYyISPcQJhK7bkkoFByg38QuJAgefitSMRl0q7eymyidxIVgCEvSCZH9Gh0yZaLE6yVh5il1CNDWnH3wNzIpfbcS3MDunO6RePNtJett6WHg2ZfI04r0oqRPHERNEh0YqSHOWSfUcYp4Wk91iwYMzoma%2BX8VyebOCiRHTUb7%2BfsGfOJdrKd1CghUkw83CEeLMNxmBH3vdY%2Bok3aKFdIWWlX6PbwVGVqGRBLTLmzlSNJvDm7dluY5EBKVSXcecH61kYm1npdinTlr5L6wnOiS2O5Ae8mjTmMmEO2JYlbJt%2FrL%2F9j6kVmvwZRfa1%2BpW43S2TADRvKSnjBpgF8dwQpk0Bod7hWN%2Bqo7xQhHyt42UbTCjIulQJLdWXD3W8XA8S%2BHQFkZEaK2M1%2BS0%2BG986AbGiuh9Uu29w4vhqSdM6xCA8qQu07wRkW1mQSDGtmGVUUJ7AGlrApeHBdGMOPprcQGOqUBw8NoSfKpR226qIVjPDwxiZ4vfEYKTwD4%2Ff4Pjx0EdC917v%2BBs2DzpfXZ%2B%2FaeBh0dtNVZz1outZRIRIZdDpwrUkiVtXKTfoAQwz%2BHWLY%2BKUdpyr2ABvi5IxbsaLQRSU3g9%2FFfScrCjrr7WlCJpJwIOSicuvNWM0zpbwg%2Bay6mrNOjhtKxnIcLEj6Ah26eAgFuAGxMbIRC8eTpB1pftUVl9PcEwaH9&X-Amz-Signature=6b9e11ad847b6ead12464ccb1903a13f3b7dfa11b2e4dc1f177a05eb6ea0b7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEOBWZSI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQm%2Bb28V5BerDgAIFmrluTMZ5TzHR2zL4k1BQuRnzGqAiEAlO9TpulPb7v3jtMdYG2CZJZEp8DSJuBfQ5R8ERSDeygqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbacSlqE5O14wKhCrcA04mW2C7smaW2vAqM2jMLnPjIFFDToN%2F1pNvQ1fLBm0QSiZYEBhKUUWs7pczZPgXVl7o9mmMIcJ2YnbzNWOF7LMEZM9xYhnIPoM8rx5dTWIl0h1h5OH0ban2muAvztypJio9brrQD2EiQc8KWZGI9%2BmY3XV9L9Df1f7CBwDthLZpFAG3ZYyISPcQJhK7bkkoFByg38QuJAgefitSMRl0q7eymyidxIVgCEvSCZH9Gh0yZaLE6yVh5il1CNDWnH3wNzIpfbcS3MDunO6RePNtJett6WHg2ZfI04r0oqRPHERNEh0YqSHOWSfUcYp4Wk91iwYMzoma%2BX8VyebOCiRHTUb7%2BfsGfOJdrKd1CghUkw83CEeLMNxmBH3vdY%2Bok3aKFdIWWlX6PbwVGVqGRBLTLmzlSNJvDm7dluY5EBKVSXcecH61kYm1npdinTlr5L6wnOiS2O5Ae8mjTmMmEO2JYlbJt%2FrL%2F9j6kVmvwZRfa1%2BpW43S2TADRvKSnjBpgF8dwQpk0Bod7hWN%2Bqo7xQhHyt42UbTCjIulQJLdWXD3W8XA8S%2BHQFkZEaK2M1%2BS0%2BG986AbGiuh9Uu29w4vhqSdM6xCA8qQu07wRkW1mQSDGtmGVUUJ7AGlrApeHBdGMOPprcQGOqUBw8NoSfKpR226qIVjPDwxiZ4vfEYKTwD4%2Ff4Pjx0EdC917v%2BBs2DzpfXZ%2B%2FaeBh0dtNVZz1outZRIRIZdDpwrUkiVtXKTfoAQwz%2BHWLY%2BKUdpyr2ABvi5IxbsaLQRSU3g9%2FFfScrCjrr7WlCJpJwIOSicuvNWM0zpbwg%2Bay6mrNOjhtKxnIcLEj6Ah26eAgFuAGxMbIRC8eTpB1pftUVl9PcEwaH9&X-Amz-Signature=19f111497a2c5d4f7051e241639ace424d4fa763040e3f905d12c3a64aeb4506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEOBWZSI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQm%2Bb28V5BerDgAIFmrluTMZ5TzHR2zL4k1BQuRnzGqAiEAlO9TpulPb7v3jtMdYG2CZJZEp8DSJuBfQ5R8ERSDeygqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbacSlqE5O14wKhCrcA04mW2C7smaW2vAqM2jMLnPjIFFDToN%2F1pNvQ1fLBm0QSiZYEBhKUUWs7pczZPgXVl7o9mmMIcJ2YnbzNWOF7LMEZM9xYhnIPoM8rx5dTWIl0h1h5OH0ban2muAvztypJio9brrQD2EiQc8KWZGI9%2BmY3XV9L9Df1f7CBwDthLZpFAG3ZYyISPcQJhK7bkkoFByg38QuJAgefitSMRl0q7eymyidxIVgCEvSCZH9Gh0yZaLE6yVh5il1CNDWnH3wNzIpfbcS3MDunO6RePNtJett6WHg2ZfI04r0oqRPHERNEh0YqSHOWSfUcYp4Wk91iwYMzoma%2BX8VyebOCiRHTUb7%2BfsGfOJdrKd1CghUkw83CEeLMNxmBH3vdY%2Bok3aKFdIWWlX6PbwVGVqGRBLTLmzlSNJvDm7dluY5EBKVSXcecH61kYm1npdinTlr5L6wnOiS2O5Ae8mjTmMmEO2JYlbJt%2FrL%2F9j6kVmvwZRfa1%2BpW43S2TADRvKSnjBpgF8dwQpk0Bod7hWN%2Bqo7xQhHyt42UbTCjIulQJLdWXD3W8XA8S%2BHQFkZEaK2M1%2BS0%2BG986AbGiuh9Uu29w4vhqSdM6xCA8qQu07wRkW1mQSDGtmGVUUJ7AGlrApeHBdGMOPprcQGOqUBw8NoSfKpR226qIVjPDwxiZ4vfEYKTwD4%2Ff4Pjx0EdC917v%2BBs2DzpfXZ%2B%2FaeBh0dtNVZz1outZRIRIZdDpwrUkiVtXKTfoAQwz%2BHWLY%2BKUdpyr2ABvi5IxbsaLQRSU3g9%2FFfScrCjrr7WlCJpJwIOSicuvNWM0zpbwg%2Bay6mrNOjhtKxnIcLEj6Ah26eAgFuAGxMbIRC8eTpB1pftUVl9PcEwaH9&X-Amz-Signature=70f2a081b00b602de65328cfd353dbab55226da35f83f02dbf2da8344fb36418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
