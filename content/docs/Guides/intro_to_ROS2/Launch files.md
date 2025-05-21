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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7DKDKH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCZCP6bUtH%2Bn1d7yZMmTQtyWcu9P00YoGazmgMgygNK3gIhALLsrN80lGBwuCRHqKaRXeSju1Mf5lMPcaT5DRBxymGaKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzH7p9OI%2BAz5XdOIYq3AOOZdtvEl5%2BccEUYCTn3JmT6BklkJ%2B4Q4VIzJFMS9tMO%2F2Gu5sZ4v8j4H71F30sHKuDC%2FyivFwrAywbwZkPlctWep%2F4o5vcljig6iC4c3tQblgphd9Sn9b%2BUPNGik7jZHqamDxLyLRobkRiha5plc7CvQICSFuAfgxmgOHQBFlxRY9d9rBpiO7JoKc5rBOVl2w%2FneRdGwgamBe1nLNTJTJ6qGCWcwSOn2mylG7BnK7nF6GyHNY6%2BZcCQHnXcRYeeQ9NztDfDg7AQb%2Fv9koJ%2Ba0EN6ffv%2BVBtTGw5hcBGJfKh3YsjPunMbkU%2BiD3XfRpqzhnHHAHxuc2H8qqV2%2BIeTRuemF%2F4OsysKUFskZ7KNK3Kpz72Lfxr2WLDvxugVv5pC3YY997qGrthTIrtCpAkg1inhSkJ91CWC2qB%2BrrPA%2B%2B2zl7BaFKx4UIJJlH55w9jUBoNRKlnmcf21Ju7855NJL07532cDCTtRdzkM8Ka8%2B2qTAwT7Vy0DUGEyF%2BAW6AQ3H2G3Zvvi%2BdI9TWk2X0NhtuUBsb5IqcBumJ7lNImPQA5wT3EllbGtu12eViclDVHkHZXRAh5Wg6yfu05OELcB18whYLaa%2BfvIFO01KXqB0nYPtMrHFgrFpas7%2FZiTCj17jBBjqkAeqNSFHse9t9U9hD4yZ7WauF0b6w3a6ObVvQxl%2FW5L0XgDbrsIOs3ncyQSzdceUD7q4JzDvRcoc4l0%2BX8aPwo81dGBxW%2F%2BGl5oGZG%2Fw6dg6Mict%2BoTvrcRrYl0OKTdkHfZ0VqV82ISYkgSvBpu0%2B8UAuvFdgnR0QIlTOFmzRjafGhrcQfy5ATlHmz8tjRXO5alH8gy%2FGk%2FBdKYQFzjt%2FU%2B7Tpt5d&X-Amz-Signature=56ecdd2832a11569c3aa73dd888a767e5c66f48058349cdef3feeb3d391e98a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7DKDKH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCZCP6bUtH%2Bn1d7yZMmTQtyWcu9P00YoGazmgMgygNK3gIhALLsrN80lGBwuCRHqKaRXeSju1Mf5lMPcaT5DRBxymGaKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzH7p9OI%2BAz5XdOIYq3AOOZdtvEl5%2BccEUYCTn3JmT6BklkJ%2B4Q4VIzJFMS9tMO%2F2Gu5sZ4v8j4H71F30sHKuDC%2FyivFwrAywbwZkPlctWep%2F4o5vcljig6iC4c3tQblgphd9Sn9b%2BUPNGik7jZHqamDxLyLRobkRiha5plc7CvQICSFuAfgxmgOHQBFlxRY9d9rBpiO7JoKc5rBOVl2w%2FneRdGwgamBe1nLNTJTJ6qGCWcwSOn2mylG7BnK7nF6GyHNY6%2BZcCQHnXcRYeeQ9NztDfDg7AQb%2Fv9koJ%2Ba0EN6ffv%2BVBtTGw5hcBGJfKh3YsjPunMbkU%2BiD3XfRpqzhnHHAHxuc2H8qqV2%2BIeTRuemF%2F4OsysKUFskZ7KNK3Kpz72Lfxr2WLDvxugVv5pC3YY997qGrthTIrtCpAkg1inhSkJ91CWC2qB%2BrrPA%2B%2B2zl7BaFKx4UIJJlH55w9jUBoNRKlnmcf21Ju7855NJL07532cDCTtRdzkM8Ka8%2B2qTAwT7Vy0DUGEyF%2BAW6AQ3H2G3Zvvi%2BdI9TWk2X0NhtuUBsb5IqcBumJ7lNImPQA5wT3EllbGtu12eViclDVHkHZXRAh5Wg6yfu05OELcB18whYLaa%2BfvIFO01KXqB0nYPtMrHFgrFpas7%2FZiTCj17jBBjqkAeqNSFHse9t9U9hD4yZ7WauF0b6w3a6ObVvQxl%2FW5L0XgDbrsIOs3ncyQSzdceUD7q4JzDvRcoc4l0%2BX8aPwo81dGBxW%2F%2BGl5oGZG%2Fw6dg6Mict%2BoTvrcRrYl0OKTdkHfZ0VqV82ISYkgSvBpu0%2B8UAuvFdgnR0QIlTOFmzRjafGhrcQfy5ATlHmz8tjRXO5alH8gy%2FGk%2FBdKYQFzjt%2FU%2B7Tpt5d&X-Amz-Signature=ff900299e7363d595a4210ccf4ee68e63b2f886d77e803973450579ab49c9e18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX7DKDKH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCZCP6bUtH%2Bn1d7yZMmTQtyWcu9P00YoGazmgMgygNK3gIhALLsrN80lGBwuCRHqKaRXeSju1Mf5lMPcaT5DRBxymGaKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzH7p9OI%2BAz5XdOIYq3AOOZdtvEl5%2BccEUYCTn3JmT6BklkJ%2B4Q4VIzJFMS9tMO%2F2Gu5sZ4v8j4H71F30sHKuDC%2FyivFwrAywbwZkPlctWep%2F4o5vcljig6iC4c3tQblgphd9Sn9b%2BUPNGik7jZHqamDxLyLRobkRiha5plc7CvQICSFuAfgxmgOHQBFlxRY9d9rBpiO7JoKc5rBOVl2w%2FneRdGwgamBe1nLNTJTJ6qGCWcwSOn2mylG7BnK7nF6GyHNY6%2BZcCQHnXcRYeeQ9NztDfDg7AQb%2Fv9koJ%2Ba0EN6ffv%2BVBtTGw5hcBGJfKh3YsjPunMbkU%2BiD3XfRpqzhnHHAHxuc2H8qqV2%2BIeTRuemF%2F4OsysKUFskZ7KNK3Kpz72Lfxr2WLDvxugVv5pC3YY997qGrthTIrtCpAkg1inhSkJ91CWC2qB%2BrrPA%2B%2B2zl7BaFKx4UIJJlH55w9jUBoNRKlnmcf21Ju7855NJL07532cDCTtRdzkM8Ka8%2B2qTAwT7Vy0DUGEyF%2BAW6AQ3H2G3Zvvi%2BdI9TWk2X0NhtuUBsb5IqcBumJ7lNImPQA5wT3EllbGtu12eViclDVHkHZXRAh5Wg6yfu05OELcB18whYLaa%2BfvIFO01KXqB0nYPtMrHFgrFpas7%2FZiTCj17jBBjqkAeqNSFHse9t9U9hD4yZ7WauF0b6w3a6ObVvQxl%2FW5L0XgDbrsIOs3ncyQSzdceUD7q4JzDvRcoc4l0%2BX8aPwo81dGBxW%2F%2BGl5oGZG%2Fw6dg6Mict%2BoTvrcRrYl0OKTdkHfZ0VqV82ISYkgSvBpu0%2B8UAuvFdgnR0QIlTOFmzRjafGhrcQfy5ATlHmz8tjRXO5alH8gy%2FGk%2FBdKYQFzjt%2FU%2B7Tpt5d&X-Amz-Signature=e4396cf02ec4fc197fbd795f71bb818e8cf5dac520eca6d7fe313b603ed913ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
