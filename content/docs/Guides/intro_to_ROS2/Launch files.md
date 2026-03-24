---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZCGAMG4%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHdNHCZCEyeIHI4XWDDSL3AW60Ek8X2DAlN5xnB1btJAiBE02v1x6cDa3G0Lk2LFWbqFNEcTXgsKNO6P970UxcudCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo0pxPcEE%2B7M0MNPKtwDThnVl7RgAtb5a%2FKzXpiz3JX1vLhWgkmtqmb6Y7SpAL6wedZYwHNQNeHlpxhlvT3egYylU17dnQRirTiiZczPv7WRJAssWm1W0AcljfMmt5uV5GxCVW7yngjk1qVFaHSgrdvMxWaLp5%2BNIu8y%2B44fDl6jiZ4DRun5f8Xv7fwb5m7ImSTlJRmw9mcNTfvpcMBgYZHnGOvhnV9DnUvCovrrIfeTvwS93GvGgAY4MKv05gtYKBs5d7YTVIqLn6w%2F%2FNtgYQBdp9OiF5r6U0tlOrbzftRVd5BcEx89AI2hT%2BcA8IkfI5ysKpj7IbRhR8l5kIlsz1NVC9qe8S4A9URMbg0rknkR8fdpA%2BzjKm7sj%2FiJ5VPzs4wQZOWwKAkfSAt3dnR%2F0Mdlo95YDM2VbdnmH1kR%2FHizGWwBPW0ai5Y%2Fn19eqHRbUMQxRKumeJzAjxXF6TQpsg3YMqBNRDJPMH%2BFPwC7LIYLH5JyGBZSJqJtojv1t7kpoanE%2FgR6d6tIhN0TtiMDt1VysKnO2tMNawNbdkHamcYXL0jcXLcx9nu1YiXL7qw8y1pGGaR6I7jaSnsVNDUCHURnLCjv2Y31mSJ07AxWG5nkGhZ31S1NRqhTzyqd9qVT2QiBLIUkMWphNPYwhcmHzgY6pgG1GxqgvvLXqEcsJ9EagcVhthIaOc4owVf0F7plSPd9xPhjy1aQbLTSTi3iqtBUWLvzn5gry6Q4Ez43cs3q%2Bo8YleIXH%2BYFkz6uytHIyG9%2F5OZqAF2ZytHLi9SqAv39%2B9gOLlH%2FCTPWGrgKJUGT0VvtpwuPw0pebq50QiN3x6g9xMfjPKXxSZHxJQnZGfU%2FjgbmX%2Bb7qwF5d7yGYOBuIjS7eSVSBZ87&X-Amz-Signature=81d16de4104b6ca1e6a396f1162dbbc072d3683207f1184972ca3b576abd3313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZCGAMG4%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHdNHCZCEyeIHI4XWDDSL3AW60Ek8X2DAlN5xnB1btJAiBE02v1x6cDa3G0Lk2LFWbqFNEcTXgsKNO6P970UxcudCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo0pxPcEE%2B7M0MNPKtwDThnVl7RgAtb5a%2FKzXpiz3JX1vLhWgkmtqmb6Y7SpAL6wedZYwHNQNeHlpxhlvT3egYylU17dnQRirTiiZczPv7WRJAssWm1W0AcljfMmt5uV5GxCVW7yngjk1qVFaHSgrdvMxWaLp5%2BNIu8y%2B44fDl6jiZ4DRun5f8Xv7fwb5m7ImSTlJRmw9mcNTfvpcMBgYZHnGOvhnV9DnUvCovrrIfeTvwS93GvGgAY4MKv05gtYKBs5d7YTVIqLn6w%2F%2FNtgYQBdp9OiF5r6U0tlOrbzftRVd5BcEx89AI2hT%2BcA8IkfI5ysKpj7IbRhR8l5kIlsz1NVC9qe8S4A9URMbg0rknkR8fdpA%2BzjKm7sj%2FiJ5VPzs4wQZOWwKAkfSAt3dnR%2F0Mdlo95YDM2VbdnmH1kR%2FHizGWwBPW0ai5Y%2Fn19eqHRbUMQxRKumeJzAjxXF6TQpsg3YMqBNRDJPMH%2BFPwC7LIYLH5JyGBZSJqJtojv1t7kpoanE%2FgR6d6tIhN0TtiMDt1VysKnO2tMNawNbdkHamcYXL0jcXLcx9nu1YiXL7qw8y1pGGaR6I7jaSnsVNDUCHURnLCjv2Y31mSJ07AxWG5nkGhZ31S1NRqhTzyqd9qVT2QiBLIUkMWphNPYwhcmHzgY6pgG1GxqgvvLXqEcsJ9EagcVhthIaOc4owVf0F7plSPd9xPhjy1aQbLTSTi3iqtBUWLvzn5gry6Q4Ez43cs3q%2Bo8YleIXH%2BYFkz6uytHIyG9%2F5OZqAF2ZytHLi9SqAv39%2B9gOLlH%2FCTPWGrgKJUGT0VvtpwuPw0pebq50QiN3x6g9xMfjPKXxSZHxJQnZGfU%2FjgbmX%2Bb7qwF5d7yGYOBuIjS7eSVSBZ87&X-Amz-Signature=04cf8fa3798eb8826088ca998c0869debb0feb6e57b5efca18865a9a2d348fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZCGAMG4%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHdNHCZCEyeIHI4XWDDSL3AW60Ek8X2DAlN5xnB1btJAiBE02v1x6cDa3G0Lk2LFWbqFNEcTXgsKNO6P970UxcudCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo0pxPcEE%2B7M0MNPKtwDThnVl7RgAtb5a%2FKzXpiz3JX1vLhWgkmtqmb6Y7SpAL6wedZYwHNQNeHlpxhlvT3egYylU17dnQRirTiiZczPv7WRJAssWm1W0AcljfMmt5uV5GxCVW7yngjk1qVFaHSgrdvMxWaLp5%2BNIu8y%2B44fDl6jiZ4DRun5f8Xv7fwb5m7ImSTlJRmw9mcNTfvpcMBgYZHnGOvhnV9DnUvCovrrIfeTvwS93GvGgAY4MKv05gtYKBs5d7YTVIqLn6w%2F%2FNtgYQBdp9OiF5r6U0tlOrbzftRVd5BcEx89AI2hT%2BcA8IkfI5ysKpj7IbRhR8l5kIlsz1NVC9qe8S4A9URMbg0rknkR8fdpA%2BzjKm7sj%2FiJ5VPzs4wQZOWwKAkfSAt3dnR%2F0Mdlo95YDM2VbdnmH1kR%2FHizGWwBPW0ai5Y%2Fn19eqHRbUMQxRKumeJzAjxXF6TQpsg3YMqBNRDJPMH%2BFPwC7LIYLH5JyGBZSJqJtojv1t7kpoanE%2FgR6d6tIhN0TtiMDt1VysKnO2tMNawNbdkHamcYXL0jcXLcx9nu1YiXL7qw8y1pGGaR6I7jaSnsVNDUCHURnLCjv2Y31mSJ07AxWG5nkGhZ31S1NRqhTzyqd9qVT2QiBLIUkMWphNPYwhcmHzgY6pgG1GxqgvvLXqEcsJ9EagcVhthIaOc4owVf0F7plSPd9xPhjy1aQbLTSTi3iqtBUWLvzn5gry6Q4Ez43cs3q%2Bo8YleIXH%2BYFkz6uytHIyG9%2F5OZqAF2ZytHLi9SqAv39%2B9gOLlH%2FCTPWGrgKJUGT0VvtpwuPw0pebq50QiN3x6g9xMfjPKXxSZHxJQnZGfU%2FjgbmX%2Bb7qwF5d7yGYOBuIjS7eSVSBZ87&X-Amz-Signature=251c43e664f15eaa0e016708697246ce9de1609260f962a506f081be901362e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
