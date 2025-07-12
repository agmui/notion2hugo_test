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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3UJNMS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqnUIfQb3lwJ0QI%2FHFctF5Rv3QeSCAVxuvbgQN1AooPAiEAtRnpH3Q0BuPVDFA4uDWo%2FRQxgpyY3x%2F8yXCQs80RsjAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FpC3J%2BYzXN5o0GdyrcA8dh7xYRAdUv8ha1G8uMeA8JL5OjBRJP63dusVfMJIbifktsuGW9%2B1mLsBCLTIvjTixg8SEOCJTHLtG1Yu5caMM0C%2Bd3hNiuSPN583UUFJ5tfz0AneQn465xfLcnQTBYYF0IOMp3t5GEv5LzutikVQYGctUFsbxEm9NPVbFxwSrLS7j2sgVLtyrkMx2oCKS0thQEXJUgIaFr3RR5mXTJe5t8Y%2B2NPAQyhiA1iyEKABmuO4FJEi%2FnJlKoEes6T2Hh8c6Nm%2BaRbPeZvTljZDU4y3HlDdTVRzO7fOtftxLW5McToTFgUzzBMCQHqZtRUOjHQIetCLaIVZ2qxUegglKhKFfluk3cCq724OUdMtHkZA6xVxLhsTPqMS6p0ik9XLtEfJU2YrYHIU5%2FPLFOi36kWaqhaFR971OL5NOlyWJQ%2BaJIiz3wiwL8GgTzY4ggUL0SakwgwTmIhfyh%2FTUbdkpv1lIovwSBAXSZ62BV%2F44TM49pRPU%2FB7DMvI1kCwB2rhuBZj%2B46WWacb7hlN9nkFwmaH0vLcR7tgxAfAR8HXpsH8U0gCmuPI7k1T07RFpdTHnBCQEAT%2B8aWZ188m5Uy70MHUuK%2F5f9%2Bp%2FZgtgh9dLhr5qJ7PEC%2BB%2FzlBM0xWBKMO7YysMGOqUBbE3hFGXkydghsbXwxPLgVganpMm0Qp0Of9qW3yLHOzAHM7QX1XlqVHKOniB0WFPGOLXP3z6bWa4jGhH3JtEaBOjNU60Dj6aU5GdGm5I5BpomVwgdbV18JaW7yRw%2FKeBybna1qpPSkBE2zXiv2NAYxeydwA%2B2EM%2BurhlRrJly4BStWvYVcQ4adnNowUy5qI6XR%2F0PXaUYBQTm4VACgUcgpr7%2BlHrf&X-Amz-Signature=b2c3e6db35e0d8720a1d50ebc3f0f1bf4822a03891c31822de3f3c1fd98e6332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3UJNMS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqnUIfQb3lwJ0QI%2FHFctF5Rv3QeSCAVxuvbgQN1AooPAiEAtRnpH3Q0BuPVDFA4uDWo%2FRQxgpyY3x%2F8yXCQs80RsjAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FpC3J%2BYzXN5o0GdyrcA8dh7xYRAdUv8ha1G8uMeA8JL5OjBRJP63dusVfMJIbifktsuGW9%2B1mLsBCLTIvjTixg8SEOCJTHLtG1Yu5caMM0C%2Bd3hNiuSPN583UUFJ5tfz0AneQn465xfLcnQTBYYF0IOMp3t5GEv5LzutikVQYGctUFsbxEm9NPVbFxwSrLS7j2sgVLtyrkMx2oCKS0thQEXJUgIaFr3RR5mXTJe5t8Y%2B2NPAQyhiA1iyEKABmuO4FJEi%2FnJlKoEes6T2Hh8c6Nm%2BaRbPeZvTljZDU4y3HlDdTVRzO7fOtftxLW5McToTFgUzzBMCQHqZtRUOjHQIetCLaIVZ2qxUegglKhKFfluk3cCq724OUdMtHkZA6xVxLhsTPqMS6p0ik9XLtEfJU2YrYHIU5%2FPLFOi36kWaqhaFR971OL5NOlyWJQ%2BaJIiz3wiwL8GgTzY4ggUL0SakwgwTmIhfyh%2FTUbdkpv1lIovwSBAXSZ62BV%2F44TM49pRPU%2FB7DMvI1kCwB2rhuBZj%2B46WWacb7hlN9nkFwmaH0vLcR7tgxAfAR8HXpsH8U0gCmuPI7k1T07RFpdTHnBCQEAT%2B8aWZ188m5Uy70MHUuK%2F5f9%2Bp%2FZgtgh9dLhr5qJ7PEC%2BB%2FzlBM0xWBKMO7YysMGOqUBbE3hFGXkydghsbXwxPLgVganpMm0Qp0Of9qW3yLHOzAHM7QX1XlqVHKOniB0WFPGOLXP3z6bWa4jGhH3JtEaBOjNU60Dj6aU5GdGm5I5BpomVwgdbV18JaW7yRw%2FKeBybna1qpPSkBE2zXiv2NAYxeydwA%2B2EM%2BurhlRrJly4BStWvYVcQ4adnNowUy5qI6XR%2F0PXaUYBQTm4VACgUcgpr7%2BlHrf&X-Amz-Signature=9f4cd38f8da3cd1f6e41b0e35d005d2242f05822db9665c3e057f41e611188c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3UJNMS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqnUIfQb3lwJ0QI%2FHFctF5Rv3QeSCAVxuvbgQN1AooPAiEAtRnpH3Q0BuPVDFA4uDWo%2FRQxgpyY3x%2F8yXCQs80RsjAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FpC3J%2BYzXN5o0GdyrcA8dh7xYRAdUv8ha1G8uMeA8JL5OjBRJP63dusVfMJIbifktsuGW9%2B1mLsBCLTIvjTixg8SEOCJTHLtG1Yu5caMM0C%2Bd3hNiuSPN583UUFJ5tfz0AneQn465xfLcnQTBYYF0IOMp3t5GEv5LzutikVQYGctUFsbxEm9NPVbFxwSrLS7j2sgVLtyrkMx2oCKS0thQEXJUgIaFr3RR5mXTJe5t8Y%2B2NPAQyhiA1iyEKABmuO4FJEi%2FnJlKoEes6T2Hh8c6Nm%2BaRbPeZvTljZDU4y3HlDdTVRzO7fOtftxLW5McToTFgUzzBMCQHqZtRUOjHQIetCLaIVZ2qxUegglKhKFfluk3cCq724OUdMtHkZA6xVxLhsTPqMS6p0ik9XLtEfJU2YrYHIU5%2FPLFOi36kWaqhaFR971OL5NOlyWJQ%2BaJIiz3wiwL8GgTzY4ggUL0SakwgwTmIhfyh%2FTUbdkpv1lIovwSBAXSZ62BV%2F44TM49pRPU%2FB7DMvI1kCwB2rhuBZj%2B46WWacb7hlN9nkFwmaH0vLcR7tgxAfAR8HXpsH8U0gCmuPI7k1T07RFpdTHnBCQEAT%2B8aWZ188m5Uy70MHUuK%2F5f9%2Bp%2FZgtgh9dLhr5qJ7PEC%2BB%2FzlBM0xWBKMO7YysMGOqUBbE3hFGXkydghsbXwxPLgVganpMm0Qp0Of9qW3yLHOzAHM7QX1XlqVHKOniB0WFPGOLXP3z6bWa4jGhH3JtEaBOjNU60Dj6aU5GdGm5I5BpomVwgdbV18JaW7yRw%2FKeBybna1qpPSkBE2zXiv2NAYxeydwA%2B2EM%2BurhlRrJly4BStWvYVcQ4adnNowUy5qI6XR%2F0PXaUYBQTm4VACgUcgpr7%2BlHrf&X-Amz-Signature=27e2ca9605644244236654a8e8f803c3295625235ef5d3320795d57774dbd444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
