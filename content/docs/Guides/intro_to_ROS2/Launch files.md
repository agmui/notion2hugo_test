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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHALGDMB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDjyewcoC0bnBTpnKa7y4GCn9mQqmczptfw6srT%2BcLHsAIhAKKyMmIpk35AZR59SmZWlRgpHECS73U%2FyHjhgZUOZuoDKv8DCCMQABoMNjM3NDIzMTgzODA1IgzimZDKSloT9hLplBEq3AOEgvM5YpBTx8UGvacJ695aCgSC8%2BS9%2F44Ealjaxq6Aq3Ij0SWE2tO2luBUET7WanOOFkpUN5mg3UIkUhL5MqSZIPTDPuddPngNq3A9pTtfqwS6kNh3bR9EsfbSjvE2vk8Gte2t9ielISnGXl78%2Fjci1GjaEz4S9Hsz6NVk1xkRWZFQtMzfjv5cbQ9edxlUPD8eBv6ed7NT%2FLHshz%2BRXxwd8SL6MKwu5s63DsNk6KjNER8bU7nyinF5K4AhBYzoD%2F6LYZVX4uKNxN5EV9PzLZXhDwXL0nJlog8JKcr6qVGojlIF1wFmZM6qCTYHMHXkyxDxBukPwepeRzedN2qkg%2FMwRQR36sEPbTOdTiIgf7McWAQbZmOO5dhZl6g3ODSZ0%2FY1VhKXgF3sf9H7UmHjznONwg6M3wMAlmptl2Ys7Q%2Ba386ObroFRVuWhgpc%2FMm6VyIAxG7f0EdGmFgIZeqAxaG1bPDgnDvkEzJ2OQNBFzxP3Qncv%2BltBU%2BLFAlYelP4iVvD93TeM7ImPgFZrA%2BqmJHMhTiD6Zogw%2Fx6sMes4n2dWanaIliAlvbJUAgoQiKRwNH0o9B6DWrnAEMMY8n8d2zoNkm%2FD48A0wfvbeHPy2soJavefsbfMs3eWESjwDCBzNHDBjqkAeb5OMH4zA89c2Dw2uo%2BQ%2B8Br2j1znP4e6nbgyzl%2B4EJnw35e1N%2Fm%2F91MubNgbyt94J4bPoseg%2F81khoLHbBagGvzpvUUThTqmpyvR90rF%2FtWvCWKLR60rHvtzNiRG4pemtm7%2Bq54p6irtqfjWonevsbXwcOti8Q2OnTBjVeIy0RAwkEVFLad6QcFhZSeH%2FEba%2FNxaUTSLz4iLveR5Q1JZqeRudg&X-Amz-Signature=cae8011e58719bac5c0eb7b27e4ed5f7e1a1f83e373c212ab260d9597d379b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHALGDMB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDjyewcoC0bnBTpnKa7y4GCn9mQqmczptfw6srT%2BcLHsAIhAKKyMmIpk35AZR59SmZWlRgpHECS73U%2FyHjhgZUOZuoDKv8DCCMQABoMNjM3NDIzMTgzODA1IgzimZDKSloT9hLplBEq3AOEgvM5YpBTx8UGvacJ695aCgSC8%2BS9%2F44Ealjaxq6Aq3Ij0SWE2tO2luBUET7WanOOFkpUN5mg3UIkUhL5MqSZIPTDPuddPngNq3A9pTtfqwS6kNh3bR9EsfbSjvE2vk8Gte2t9ielISnGXl78%2Fjci1GjaEz4S9Hsz6NVk1xkRWZFQtMzfjv5cbQ9edxlUPD8eBv6ed7NT%2FLHshz%2BRXxwd8SL6MKwu5s63DsNk6KjNER8bU7nyinF5K4AhBYzoD%2F6LYZVX4uKNxN5EV9PzLZXhDwXL0nJlog8JKcr6qVGojlIF1wFmZM6qCTYHMHXkyxDxBukPwepeRzedN2qkg%2FMwRQR36sEPbTOdTiIgf7McWAQbZmOO5dhZl6g3ODSZ0%2FY1VhKXgF3sf9H7UmHjznONwg6M3wMAlmptl2Ys7Q%2Ba386ObroFRVuWhgpc%2FMm6VyIAxG7f0EdGmFgIZeqAxaG1bPDgnDvkEzJ2OQNBFzxP3Qncv%2BltBU%2BLFAlYelP4iVvD93TeM7ImPgFZrA%2BqmJHMhTiD6Zogw%2Fx6sMes4n2dWanaIliAlvbJUAgoQiKRwNH0o9B6DWrnAEMMY8n8d2zoNkm%2FD48A0wfvbeHPy2soJavefsbfMs3eWESjwDCBzNHDBjqkAeb5OMH4zA89c2Dw2uo%2BQ%2B8Br2j1znP4e6nbgyzl%2B4EJnw35e1N%2Fm%2F91MubNgbyt94J4bPoseg%2F81khoLHbBagGvzpvUUThTqmpyvR90rF%2FtWvCWKLR60rHvtzNiRG4pemtm7%2Bq54p6irtqfjWonevsbXwcOti8Q2OnTBjVeIy0RAwkEVFLad6QcFhZSeH%2FEba%2FNxaUTSLz4iLveR5Q1JZqeRudg&X-Amz-Signature=ca395c5106b94211f68060afe136623c38ed1361944a505fde9fa587c19000ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHALGDMB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDjyewcoC0bnBTpnKa7y4GCn9mQqmczptfw6srT%2BcLHsAIhAKKyMmIpk35AZR59SmZWlRgpHECS73U%2FyHjhgZUOZuoDKv8DCCMQABoMNjM3NDIzMTgzODA1IgzimZDKSloT9hLplBEq3AOEgvM5YpBTx8UGvacJ695aCgSC8%2BS9%2F44Ealjaxq6Aq3Ij0SWE2tO2luBUET7WanOOFkpUN5mg3UIkUhL5MqSZIPTDPuddPngNq3A9pTtfqwS6kNh3bR9EsfbSjvE2vk8Gte2t9ielISnGXl78%2Fjci1GjaEz4S9Hsz6NVk1xkRWZFQtMzfjv5cbQ9edxlUPD8eBv6ed7NT%2FLHshz%2BRXxwd8SL6MKwu5s63DsNk6KjNER8bU7nyinF5K4AhBYzoD%2F6LYZVX4uKNxN5EV9PzLZXhDwXL0nJlog8JKcr6qVGojlIF1wFmZM6qCTYHMHXkyxDxBukPwepeRzedN2qkg%2FMwRQR36sEPbTOdTiIgf7McWAQbZmOO5dhZl6g3ODSZ0%2FY1VhKXgF3sf9H7UmHjznONwg6M3wMAlmptl2Ys7Q%2Ba386ObroFRVuWhgpc%2FMm6VyIAxG7f0EdGmFgIZeqAxaG1bPDgnDvkEzJ2OQNBFzxP3Qncv%2BltBU%2BLFAlYelP4iVvD93TeM7ImPgFZrA%2BqmJHMhTiD6Zogw%2Fx6sMes4n2dWanaIliAlvbJUAgoQiKRwNH0o9B6DWrnAEMMY8n8d2zoNkm%2FD48A0wfvbeHPy2soJavefsbfMs3eWESjwDCBzNHDBjqkAeb5OMH4zA89c2Dw2uo%2BQ%2B8Br2j1znP4e6nbgyzl%2B4EJnw35e1N%2Fm%2F91MubNgbyt94J4bPoseg%2F81khoLHbBagGvzpvUUThTqmpyvR90rF%2FtWvCWKLR60rHvtzNiRG4pemtm7%2Bq54p6irtqfjWonevsbXwcOti8Q2OnTBjVeIy0RAwkEVFLad6QcFhZSeH%2FEba%2FNxaUTSLz4iLveR5Q1JZqeRudg&X-Amz-Signature=cb8406603e1afd9a2e694a55ba56f9e5e85295038f5fc52356fd654e0c0e0583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
