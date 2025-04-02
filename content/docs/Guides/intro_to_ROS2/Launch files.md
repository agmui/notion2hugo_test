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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE4YQPH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCcDg3wRCQGCkbHbHvILosgnYdc7HLcEwdR%2B24wkzpOWwIhAKwB4ZkmtyrSqeeaYKJ62iFWvLXrOBLHSXYyQL2q7dKDKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQKGnyx9S%2BbW92Nwq3APkg%2B4FRKon8P8J5E1H%2Fk%2FVXAD9162QQUwpL6uF3yXDfjbu6Xit2X381nsErKPhxdHpzaNPHk4tktjvMjyX0O9J7ncphCZvpdUeRTpeNYlxHovILEllnxqIj1oJ0J%2Bgj0gjEFjzHSFdfGsH%2BDaOj5VuIygnnXcJvOz3CLkRi7UmJGLgZ9vItGXsSy7YDIATwK0LWxoI%2F1vTa5Ff21riKgl0UjhA81mr0i3E5uGQRgdkF2%2FyFTFftM6ykZsszjEyNyXT1xNV9kkJvV9cxst5LlNhQDSd5OzdcKlhIg%2BFnl%2FCnebTqxucomQDLpsuPPN9gd%2BOKFc%2FmirW9Ww2WHwhqz2X6y4KfDpcsECv2FcjL3CFaRCr8xBZeKPUuvkXRo%2FA0%2FVSPpXiQc8qf2vdfSFKwPeYmYhZpvBx9%2Bi2pRphfE3XY0s3d9HluqPppARo6mdi9ptsVZ7RkuJQqL70ApBI5CmYrkdiKQq1DwtY4nnvRmS23v8%2F%2BrVsrMOp0TMcio35sKsa9yDUtAwWJICYc0JUKKUU4nDvVMliRlRmZ%2BtDd37IziT8TFNBm2suevt5jXSNwIp5tBv%2BF4%2Fpij6Z6YSbl1agqShqLMQQYqwPFc4ZjSWYCwkL1y9S9oIWyJfMljDQ%2BrS%2FBjqkAceK150wSfOR5y0CBtlbUrFRysKKkopWU%2FavCg7ppo5suFRG%2B5wuV1ATH%2BCjvtU9buLWWZFv6bD%2Bm2CzitEJ9Rusg8zHTSIjUzWO1sIDKQEzJKCt1%2BYVULylkCRBlgxR2n%2ByZMVRDUuNAbbM8bADJNUmQiy%2B6LVpDfL0LBleSrQFoJHxLS0Un4fr2h%2B%2FWzX293VGy8vejxSP1O4ONMPK4rPfcVjI&X-Amz-Signature=ed2a9e88450ffcba9215a25d2ef18ca11199c0bbf29a7d6e28d42d422d12ad2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE4YQPH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCcDg3wRCQGCkbHbHvILosgnYdc7HLcEwdR%2B24wkzpOWwIhAKwB4ZkmtyrSqeeaYKJ62iFWvLXrOBLHSXYyQL2q7dKDKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQKGnyx9S%2BbW92Nwq3APkg%2B4FRKon8P8J5E1H%2Fk%2FVXAD9162QQUwpL6uF3yXDfjbu6Xit2X381nsErKPhxdHpzaNPHk4tktjvMjyX0O9J7ncphCZvpdUeRTpeNYlxHovILEllnxqIj1oJ0J%2Bgj0gjEFjzHSFdfGsH%2BDaOj5VuIygnnXcJvOz3CLkRi7UmJGLgZ9vItGXsSy7YDIATwK0LWxoI%2F1vTa5Ff21riKgl0UjhA81mr0i3E5uGQRgdkF2%2FyFTFftM6ykZsszjEyNyXT1xNV9kkJvV9cxst5LlNhQDSd5OzdcKlhIg%2BFnl%2FCnebTqxucomQDLpsuPPN9gd%2BOKFc%2FmirW9Ww2WHwhqz2X6y4KfDpcsECv2FcjL3CFaRCr8xBZeKPUuvkXRo%2FA0%2FVSPpXiQc8qf2vdfSFKwPeYmYhZpvBx9%2Bi2pRphfE3XY0s3d9HluqPppARo6mdi9ptsVZ7RkuJQqL70ApBI5CmYrkdiKQq1DwtY4nnvRmS23v8%2F%2BrVsrMOp0TMcio35sKsa9yDUtAwWJICYc0JUKKUU4nDvVMliRlRmZ%2BtDd37IziT8TFNBm2suevt5jXSNwIp5tBv%2BF4%2Fpij6Z6YSbl1agqShqLMQQYqwPFc4ZjSWYCwkL1y9S9oIWyJfMljDQ%2BrS%2FBjqkAceK150wSfOR5y0CBtlbUrFRysKKkopWU%2FavCg7ppo5suFRG%2B5wuV1ATH%2BCjvtU9buLWWZFv6bD%2Bm2CzitEJ9Rusg8zHTSIjUzWO1sIDKQEzJKCt1%2BYVULylkCRBlgxR2n%2ByZMVRDUuNAbbM8bADJNUmQiy%2B6LVpDfL0LBleSrQFoJHxLS0Un4fr2h%2B%2FWzX293VGy8vejxSP1O4ONMPK4rPfcVjI&X-Amz-Signature=9b39b00d3f0299fac215378d0898c7ea4bdb98f8a7cddd265db9c700387f2a58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGE4YQPH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCcDg3wRCQGCkbHbHvILosgnYdc7HLcEwdR%2B24wkzpOWwIhAKwB4ZkmtyrSqeeaYKJ62iFWvLXrOBLHSXYyQL2q7dKDKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQKGnyx9S%2BbW92Nwq3APkg%2B4FRKon8P8J5E1H%2Fk%2FVXAD9162QQUwpL6uF3yXDfjbu6Xit2X381nsErKPhxdHpzaNPHk4tktjvMjyX0O9J7ncphCZvpdUeRTpeNYlxHovILEllnxqIj1oJ0J%2Bgj0gjEFjzHSFdfGsH%2BDaOj5VuIygnnXcJvOz3CLkRi7UmJGLgZ9vItGXsSy7YDIATwK0LWxoI%2F1vTa5Ff21riKgl0UjhA81mr0i3E5uGQRgdkF2%2FyFTFftM6ykZsszjEyNyXT1xNV9kkJvV9cxst5LlNhQDSd5OzdcKlhIg%2BFnl%2FCnebTqxucomQDLpsuPPN9gd%2BOKFc%2FmirW9Ww2WHwhqz2X6y4KfDpcsECv2FcjL3CFaRCr8xBZeKPUuvkXRo%2FA0%2FVSPpXiQc8qf2vdfSFKwPeYmYhZpvBx9%2Bi2pRphfE3XY0s3d9HluqPppARo6mdi9ptsVZ7RkuJQqL70ApBI5CmYrkdiKQq1DwtY4nnvRmS23v8%2F%2BrVsrMOp0TMcio35sKsa9yDUtAwWJICYc0JUKKUU4nDvVMliRlRmZ%2BtDd37IziT8TFNBm2suevt5jXSNwIp5tBv%2BF4%2Fpij6Z6YSbl1agqShqLMQQYqwPFc4ZjSWYCwkL1y9S9oIWyJfMljDQ%2BrS%2FBjqkAceK150wSfOR5y0CBtlbUrFRysKKkopWU%2FavCg7ppo5suFRG%2B5wuV1ATH%2BCjvtU9buLWWZFv6bD%2Bm2CzitEJ9Rusg8zHTSIjUzWO1sIDKQEzJKCt1%2BYVULylkCRBlgxR2n%2ByZMVRDUuNAbbM8bADJNUmQiy%2B6LVpDfL0LBleSrQFoJHxLS0Un4fr2h%2B%2FWzX293VGy8vejxSP1O4ONMPK4rPfcVjI&X-Amz-Signature=e7d443f7b90c5410dd7c13ae2b6d19c8ac391ee4c948f2ff086438917755b2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
