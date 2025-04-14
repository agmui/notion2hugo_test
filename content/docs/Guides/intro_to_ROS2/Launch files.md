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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHAEFOI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFkltsNAZpxErLHSJC%2BR8wQuntGxsY4R5MH6zvWEZsoAiAvjn4yZCu4qJsMzYAXiUAzqPbNuakAbZPNlzt5CkOF7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMEZ0Y3lxgNNT5MZhhKtwDCMydi%2BoN0Xate7%2BQnBsrstu6NRZ3irHTH%2BhVvtq6zVhw6uGXTxuIrU3i7jPO2Z%2F8kPQ5VfVbmmhyueKialDNupEhJ%2Fa6BQwoFlq8%2Fa%2B4iRk%2B4sAnfqL6yFIrA3yqs8enM0PM7oYymhnZxUaHif3h2Wc5z%2BGQC67GQ5QvIw2D6VE7cli84BdUT51Pgsjy8JChciulDP6LFtacBQrcVzHfYx0LEcgw2btAf645XahCN3P33GrIFNS25OpqrBzMHlcLuGH0N1vk2xIcmSGv760QS4qNCZT%2FsvF%2FoyhASA9bbfhMVU73l2ROUzOYSv66kRFtaPDVzwc%2B%2Fd3EBU79JWbgezbf41iNWTWVjJqO8F6bIQc%2FpIsPDgir7ShgNesycVl7SwQoqLw7oYzGmSO8fZpuWsAk8Iupf7AjxIYXI4UKzL0y%2BMJpZrHJr3oCpl6JJnUv7KhiejSKntjCyKnuhruA1hsxLvFva0wsUNfs9FGWmAfhcd9dZWDEJxjHbridJmV2EMcyM8Piail0xNQ98R%2B8N2sp%2F%2FnE%2Bq2grDU8TiA0QBsyDhy2yNOXdkDPkI3oQ8a%2FSzJDFtM2C%2B1PW9ek5%2FurdOzWv2wo2HSpzqSrHIK45L%2F%2Bvn1g%2FUmHCnC5EU8w8fn0vwY6pgFxOyKvP8wZCzghfrxRSf0GaipqJy3j1hOYnsrF1DzwRgXHxqY1PcIhBrew%2F%2BQs8rUwQxB0%2BOFq%2BIAnAo9G%2BQO0DneGaZkJ6a0TwfN2LbHkwSIoB1PfZ60am7ei8m6qpgeCJHTfaalaQBLkLAghFWyKE0M7xbdbVdRRhjbrrf%2BqfUz7739cnqi57xefSzv9sXM8KK1yuHjFHbPzJmjCrRYczqK0a%2BXA&X-Amz-Signature=ea00ca1933aae10a9549bd44ee3cb4f6cf1358642acacc70648c6366b2c8beb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHAEFOI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFkltsNAZpxErLHSJC%2BR8wQuntGxsY4R5MH6zvWEZsoAiAvjn4yZCu4qJsMzYAXiUAzqPbNuakAbZPNlzt5CkOF7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMEZ0Y3lxgNNT5MZhhKtwDCMydi%2BoN0Xate7%2BQnBsrstu6NRZ3irHTH%2BhVvtq6zVhw6uGXTxuIrU3i7jPO2Z%2F8kPQ5VfVbmmhyueKialDNupEhJ%2Fa6BQwoFlq8%2Fa%2B4iRk%2B4sAnfqL6yFIrA3yqs8enM0PM7oYymhnZxUaHif3h2Wc5z%2BGQC67GQ5QvIw2D6VE7cli84BdUT51Pgsjy8JChciulDP6LFtacBQrcVzHfYx0LEcgw2btAf645XahCN3P33GrIFNS25OpqrBzMHlcLuGH0N1vk2xIcmSGv760QS4qNCZT%2FsvF%2FoyhASA9bbfhMVU73l2ROUzOYSv66kRFtaPDVzwc%2B%2Fd3EBU79JWbgezbf41iNWTWVjJqO8F6bIQc%2FpIsPDgir7ShgNesycVl7SwQoqLw7oYzGmSO8fZpuWsAk8Iupf7AjxIYXI4UKzL0y%2BMJpZrHJr3oCpl6JJnUv7KhiejSKntjCyKnuhruA1hsxLvFva0wsUNfs9FGWmAfhcd9dZWDEJxjHbridJmV2EMcyM8Piail0xNQ98R%2B8N2sp%2F%2FnE%2Bq2grDU8TiA0QBsyDhy2yNOXdkDPkI3oQ8a%2FSzJDFtM2C%2B1PW9ek5%2FurdOzWv2wo2HSpzqSrHIK45L%2F%2Bvn1g%2FUmHCnC5EU8w8fn0vwY6pgFxOyKvP8wZCzghfrxRSf0GaipqJy3j1hOYnsrF1DzwRgXHxqY1PcIhBrew%2F%2BQs8rUwQxB0%2BOFq%2BIAnAo9G%2BQO0DneGaZkJ6a0TwfN2LbHkwSIoB1PfZ60am7ei8m6qpgeCJHTfaalaQBLkLAghFWyKE0M7xbdbVdRRhjbrrf%2BqfUz7739cnqi57xefSzv9sXM8KK1yuHjFHbPzJmjCrRYczqK0a%2BXA&X-Amz-Signature=38c8d6a52690163629151f0f2dc5393578ba34811bddadd5942462bafdac5919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHAEFOI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFkltsNAZpxErLHSJC%2BR8wQuntGxsY4R5MH6zvWEZsoAiAvjn4yZCu4qJsMzYAXiUAzqPbNuakAbZPNlzt5CkOF7yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMEZ0Y3lxgNNT5MZhhKtwDCMydi%2BoN0Xate7%2BQnBsrstu6NRZ3irHTH%2BhVvtq6zVhw6uGXTxuIrU3i7jPO2Z%2F8kPQ5VfVbmmhyueKialDNupEhJ%2Fa6BQwoFlq8%2Fa%2B4iRk%2B4sAnfqL6yFIrA3yqs8enM0PM7oYymhnZxUaHif3h2Wc5z%2BGQC67GQ5QvIw2D6VE7cli84BdUT51Pgsjy8JChciulDP6LFtacBQrcVzHfYx0LEcgw2btAf645XahCN3P33GrIFNS25OpqrBzMHlcLuGH0N1vk2xIcmSGv760QS4qNCZT%2FsvF%2FoyhASA9bbfhMVU73l2ROUzOYSv66kRFtaPDVzwc%2B%2Fd3EBU79JWbgezbf41iNWTWVjJqO8F6bIQc%2FpIsPDgir7ShgNesycVl7SwQoqLw7oYzGmSO8fZpuWsAk8Iupf7AjxIYXI4UKzL0y%2BMJpZrHJr3oCpl6JJnUv7KhiejSKntjCyKnuhruA1hsxLvFva0wsUNfs9FGWmAfhcd9dZWDEJxjHbridJmV2EMcyM8Piail0xNQ98R%2B8N2sp%2F%2FnE%2Bq2grDU8TiA0QBsyDhy2yNOXdkDPkI3oQ8a%2FSzJDFtM2C%2B1PW9ek5%2FurdOzWv2wo2HSpzqSrHIK45L%2F%2Bvn1g%2FUmHCnC5EU8w8fn0vwY6pgFxOyKvP8wZCzghfrxRSf0GaipqJy3j1hOYnsrF1DzwRgXHxqY1PcIhBrew%2F%2BQs8rUwQxB0%2BOFq%2BIAnAo9G%2BQO0DneGaZkJ6a0TwfN2LbHkwSIoB1PfZ60am7ei8m6qpgeCJHTfaalaQBLkLAghFWyKE0M7xbdbVdRRhjbrrf%2BqfUz7739cnqi57xefSzv9sXM8KK1yuHjFHbPzJmjCrRYczqK0a%2BXA&X-Amz-Signature=a0259902aa17190a22c85e5060bd5ed00d5ef5ceb601a35c9aceb1d1fc2d620f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
