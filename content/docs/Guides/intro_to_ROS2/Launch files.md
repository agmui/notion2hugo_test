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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OO7V6MX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHIt%2BUk6%2FD2aC1UcFPqRF5uLALmOU59aEZhpvGeBgS5mAiABeyIiRNcEXefJA%2B5%2BkddCmfhxR52V%2F3M3sOLkZFAdQSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFNF5xL4BUdbPQ%2BJKtwDPEWap1h9C3oOYlaWObEx%2FT31vQKlkmcLqIqgGCX97RPRkN43Jcon8BsAV2sDIvdu5C8plmMS76rlCofu6yf0HWv7dtiNSqp1PY5Mvinje3UTd1KI%2F0tINwB01FiyI6Hg7rRdTSS2dXrtiBh7mkaFpytGt6mEC52eX0Dam31iPqIltT3%2Fjk4i8h4ftn%2B%2F0eMRZMgR1czEjq692t9%2F63hJ7PF24iYHQBMrU7xWKSRJl9ybF43%2F8w0SKttgDYC3LrkCq5hXUe2JqyLviOfj%2FFsPXv3GkzXr%2BB7WikSaOt0H4Be9NuqJ3ONAL6NzBjQ1a7RIFm%2FAAMRImHKe8uw1IDtfff7o32ivAMXSe0CDrJH7xYbG2AR%2BM5s3Snicis6uvgYU7rhTjdebrJehoMuyRa6LCFmBm%2BgC5Gg0UXlaAbUjDYatDthckNeN4nf7ur%2Fs2HzpssBRyrRSXNkY6Tm4VIh1b8OOjz8zRIysn1KqpNi%2Fi3cJB3rO4%2BjxOnnqpcQdg2DPY0G53%2BfW%2FL8njZrxS68yGwtPwJ2l%2Fsp1MWWs22WxiHnOj2oyOHxLszh%2FlY76v8JVV1yMtDA%2FiHsHUlWe590acf5Tjorlxlv6Liui5UX%2BfZl51k28cUZS0Whptc8wqrCFvgY6pgHLBIrLjSD1bDAORnY2m0aiZVQ%2BOpU9OySS7trBNI0V%2F5UPiorm69RGchN1WXm7cQhjT%2B16D074fPolBQh8Cf6hXM298pxDUCaZ8Xh7oycxix%2F3sr46bcKFXslWmOZTGIsadwI303u8yHpEVJbHLeh67g5LuFZLb0XwNDddoYHPoNhB%2BOzLMGLTNtzkWdDt2A3H6%2B%2F5p4hF8a4rnBksykvvcPISvz2h&X-Amz-Signature=9225bf1d9de3c837751d590283329bcfb3b6a56bf1516fce82573db0093a172b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OO7V6MX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHIt%2BUk6%2FD2aC1UcFPqRF5uLALmOU59aEZhpvGeBgS5mAiABeyIiRNcEXefJA%2B5%2BkddCmfhxR52V%2F3M3sOLkZFAdQSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFNF5xL4BUdbPQ%2BJKtwDPEWap1h9C3oOYlaWObEx%2FT31vQKlkmcLqIqgGCX97RPRkN43Jcon8BsAV2sDIvdu5C8plmMS76rlCofu6yf0HWv7dtiNSqp1PY5Mvinje3UTd1KI%2F0tINwB01FiyI6Hg7rRdTSS2dXrtiBh7mkaFpytGt6mEC52eX0Dam31iPqIltT3%2Fjk4i8h4ftn%2B%2F0eMRZMgR1czEjq692t9%2F63hJ7PF24iYHQBMrU7xWKSRJl9ybF43%2F8w0SKttgDYC3LrkCq5hXUe2JqyLviOfj%2FFsPXv3GkzXr%2BB7WikSaOt0H4Be9NuqJ3ONAL6NzBjQ1a7RIFm%2FAAMRImHKe8uw1IDtfff7o32ivAMXSe0CDrJH7xYbG2AR%2BM5s3Snicis6uvgYU7rhTjdebrJehoMuyRa6LCFmBm%2BgC5Gg0UXlaAbUjDYatDthckNeN4nf7ur%2Fs2HzpssBRyrRSXNkY6Tm4VIh1b8OOjz8zRIysn1KqpNi%2Fi3cJB3rO4%2BjxOnnqpcQdg2DPY0G53%2BfW%2FL8njZrxS68yGwtPwJ2l%2Fsp1MWWs22WxiHnOj2oyOHxLszh%2FlY76v8JVV1yMtDA%2FiHsHUlWe590acf5Tjorlxlv6Liui5UX%2BfZl51k28cUZS0Whptc8wqrCFvgY6pgHLBIrLjSD1bDAORnY2m0aiZVQ%2BOpU9OySS7trBNI0V%2F5UPiorm69RGchN1WXm7cQhjT%2B16D074fPolBQh8Cf6hXM298pxDUCaZ8Xh7oycxix%2F3sr46bcKFXslWmOZTGIsadwI303u8yHpEVJbHLeh67g5LuFZLb0XwNDddoYHPoNhB%2BOzLMGLTNtzkWdDt2A3H6%2B%2F5p4hF8a4rnBksykvvcPISvz2h&X-Amz-Signature=725503977a288d160c97504d6fdc1bb6bd1ccf728fbda22b19f7aa9869aef164&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OO7V6MX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHIt%2BUk6%2FD2aC1UcFPqRF5uLALmOU59aEZhpvGeBgS5mAiABeyIiRNcEXefJA%2B5%2BkddCmfhxR52V%2F3M3sOLkZFAdQSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFNF5xL4BUdbPQ%2BJKtwDPEWap1h9C3oOYlaWObEx%2FT31vQKlkmcLqIqgGCX97RPRkN43Jcon8BsAV2sDIvdu5C8plmMS76rlCofu6yf0HWv7dtiNSqp1PY5Mvinje3UTd1KI%2F0tINwB01FiyI6Hg7rRdTSS2dXrtiBh7mkaFpytGt6mEC52eX0Dam31iPqIltT3%2Fjk4i8h4ftn%2B%2F0eMRZMgR1czEjq692t9%2F63hJ7PF24iYHQBMrU7xWKSRJl9ybF43%2F8w0SKttgDYC3LrkCq5hXUe2JqyLviOfj%2FFsPXv3GkzXr%2BB7WikSaOt0H4Be9NuqJ3ONAL6NzBjQ1a7RIFm%2FAAMRImHKe8uw1IDtfff7o32ivAMXSe0CDrJH7xYbG2AR%2BM5s3Snicis6uvgYU7rhTjdebrJehoMuyRa6LCFmBm%2BgC5Gg0UXlaAbUjDYatDthckNeN4nf7ur%2Fs2HzpssBRyrRSXNkY6Tm4VIh1b8OOjz8zRIysn1KqpNi%2Fi3cJB3rO4%2BjxOnnqpcQdg2DPY0G53%2BfW%2FL8njZrxS68yGwtPwJ2l%2Fsp1MWWs22WxiHnOj2oyOHxLszh%2FlY76v8JVV1yMtDA%2FiHsHUlWe590acf5Tjorlxlv6Liui5UX%2BfZl51k28cUZS0Whptc8wqrCFvgY6pgHLBIrLjSD1bDAORnY2m0aiZVQ%2BOpU9OySS7trBNI0V%2F5UPiorm69RGchN1WXm7cQhjT%2B16D074fPolBQh8Cf6hXM298pxDUCaZ8Xh7oycxix%2F3sr46bcKFXslWmOZTGIsadwI303u8yHpEVJbHLeh67g5LuFZLb0XwNDddoYHPoNhB%2BOzLMGLTNtzkWdDt2A3H6%2B%2F5p4hF8a4rnBksykvvcPISvz2h&X-Amz-Signature=651a794c893f10645d6c5fc71286eac7550c8dbe63ab2bb6a9a372c6acf5baa8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
