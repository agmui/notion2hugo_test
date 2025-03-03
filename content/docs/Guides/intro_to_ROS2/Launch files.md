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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YISVKST4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuCRPWJs0EWFwjMYgMAmIQsYYWzUViyQ8dVjRJUI8FgIgDaEpupHCy2gveChl%2B8bLq4XDl%2FxmBd2dGUg7%2B4yGje8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BSycG5leW%2FI7rGGSrcAwLivqDYIS9iPW4PdQHYLwemL8eZ62epV%2B76eKZx4RJTpqwx5JT45GRcYxXLYSrKgEPPbUL9KQjKirVGwJmeEMi9ZtFiqNUpUE6UpG%2B9s1YBzLL7Ut7xaC%2B4qC7aZC3OCwaso0lhJ8abPhfBVdhBxbkrPgiExD%2BlmhzoGNc4HCwMhaJob1g0tDdMx7m%2FtmxqWHkUMoOnTUt8NKlJjzmw%2BCQEo7%2BluhlkMRnC8jkF1QROGEe75sndSHpZzkn0UO8nkYVTCVV7AlT4a8YMc62NOUh4W8gKLQ%2BVG5x4gj7JoB1CWL8S25FvBivIlcAbGUm%2BwxpAV340FM9bBF1YH7UWfappKwEMLnNw3KL3wGZc19LE5uhUxq6UnDCLlFQpQ7B76rD8%2BHbMHFm%2BuxHMkGTwGW4zIa5vAe29GEizenE9%2F3JUOpOjJyqIaSDdq7yVjf8QRItiVCk57XN16RgL5jYE%2FU99yRgmcxiplVI9QQidwlLif%2FXYygA%2B8gxujJGWRCINHtiFsZ0Gzr1HIO%2FgPfdAutQERkMhx5P18CEn9GpxNRkkLeN288VsR28q4XwTi3mK8bKJHs5cqEqx506d3%2BZ4qnLfogJ4JdZtxtWENLtECGG6EjWu%2FAgrLxTQyY%2FGMN7Zlr4GOqUB1az5uk1SX%2F8Uxu9SZSZfO8bdW1zsuOEscH%2F%2FQl4yg6N%2F4J8E39sQLdn9GdZehZslRdYJkuPNPSwwEw%2FGtX8Kcf6Na2C71Nc1dTgcPuIV2xX4DOUVHOvhpNvUyAIfa7v%2BWvOWX%2BUtHKAx4VREJB96YmXwm1MR0oJwYB5RJ6gDN0iGRSAgQFiT9N4O5sI9f7tRL0CGA8nF0icnazcga3FI8QG5hXMa&X-Amz-Signature=06302b4046dc7629def41c1e642514fafa8b06dca14d82c6f3e0b385dd3de12c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YISVKST4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuCRPWJs0EWFwjMYgMAmIQsYYWzUViyQ8dVjRJUI8FgIgDaEpupHCy2gveChl%2B8bLq4XDl%2FxmBd2dGUg7%2B4yGje8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BSycG5leW%2FI7rGGSrcAwLivqDYIS9iPW4PdQHYLwemL8eZ62epV%2B76eKZx4RJTpqwx5JT45GRcYxXLYSrKgEPPbUL9KQjKirVGwJmeEMi9ZtFiqNUpUE6UpG%2B9s1YBzLL7Ut7xaC%2B4qC7aZC3OCwaso0lhJ8abPhfBVdhBxbkrPgiExD%2BlmhzoGNc4HCwMhaJob1g0tDdMx7m%2FtmxqWHkUMoOnTUt8NKlJjzmw%2BCQEo7%2BluhlkMRnC8jkF1QROGEe75sndSHpZzkn0UO8nkYVTCVV7AlT4a8YMc62NOUh4W8gKLQ%2BVG5x4gj7JoB1CWL8S25FvBivIlcAbGUm%2BwxpAV340FM9bBF1YH7UWfappKwEMLnNw3KL3wGZc19LE5uhUxq6UnDCLlFQpQ7B76rD8%2BHbMHFm%2BuxHMkGTwGW4zIa5vAe29GEizenE9%2F3JUOpOjJyqIaSDdq7yVjf8QRItiVCk57XN16RgL5jYE%2FU99yRgmcxiplVI9QQidwlLif%2FXYygA%2B8gxujJGWRCINHtiFsZ0Gzr1HIO%2FgPfdAutQERkMhx5P18CEn9GpxNRkkLeN288VsR28q4XwTi3mK8bKJHs5cqEqx506d3%2BZ4qnLfogJ4JdZtxtWENLtECGG6EjWu%2FAgrLxTQyY%2FGMN7Zlr4GOqUB1az5uk1SX%2F8Uxu9SZSZfO8bdW1zsuOEscH%2F%2FQl4yg6N%2F4J8E39sQLdn9GdZehZslRdYJkuPNPSwwEw%2FGtX8Kcf6Na2C71Nc1dTgcPuIV2xX4DOUVHOvhpNvUyAIfa7v%2BWvOWX%2BUtHKAx4VREJB96YmXwm1MR0oJwYB5RJ6gDN0iGRSAgQFiT9N4O5sI9f7tRL0CGA8nF0icnazcga3FI8QG5hXMa&X-Amz-Signature=f228a54fbff1ad506a362346f8f9cad256f884b4ab16ea195d4b5744800bb488&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YISVKST4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuCRPWJs0EWFwjMYgMAmIQsYYWzUViyQ8dVjRJUI8FgIgDaEpupHCy2gveChl%2B8bLq4XDl%2FxmBd2dGUg7%2B4yGje8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BSycG5leW%2FI7rGGSrcAwLivqDYIS9iPW4PdQHYLwemL8eZ62epV%2B76eKZx4RJTpqwx5JT45GRcYxXLYSrKgEPPbUL9KQjKirVGwJmeEMi9ZtFiqNUpUE6UpG%2B9s1YBzLL7Ut7xaC%2B4qC7aZC3OCwaso0lhJ8abPhfBVdhBxbkrPgiExD%2BlmhzoGNc4HCwMhaJob1g0tDdMx7m%2FtmxqWHkUMoOnTUt8NKlJjzmw%2BCQEo7%2BluhlkMRnC8jkF1QROGEe75sndSHpZzkn0UO8nkYVTCVV7AlT4a8YMc62NOUh4W8gKLQ%2BVG5x4gj7JoB1CWL8S25FvBivIlcAbGUm%2BwxpAV340FM9bBF1YH7UWfappKwEMLnNw3KL3wGZc19LE5uhUxq6UnDCLlFQpQ7B76rD8%2BHbMHFm%2BuxHMkGTwGW4zIa5vAe29GEizenE9%2F3JUOpOjJyqIaSDdq7yVjf8QRItiVCk57XN16RgL5jYE%2FU99yRgmcxiplVI9QQidwlLif%2FXYygA%2B8gxujJGWRCINHtiFsZ0Gzr1HIO%2FgPfdAutQERkMhx5P18CEn9GpxNRkkLeN288VsR28q4XwTi3mK8bKJHs5cqEqx506d3%2BZ4qnLfogJ4JdZtxtWENLtECGG6EjWu%2FAgrLxTQyY%2FGMN7Zlr4GOqUB1az5uk1SX%2F8Uxu9SZSZfO8bdW1zsuOEscH%2F%2FQl4yg6N%2F4J8E39sQLdn9GdZehZslRdYJkuPNPSwwEw%2FGtX8Kcf6Na2C71Nc1dTgcPuIV2xX4DOUVHOvhpNvUyAIfa7v%2BWvOWX%2BUtHKAx4VREJB96YmXwm1MR0oJwYB5RJ6gDN0iGRSAgQFiT9N4O5sI9f7tRL0CGA8nF0icnazcga3FI8QG5hXMa&X-Amz-Signature=e3d7210a3291769ca2eb0bb1dc3f8986530ddd2a9d0f198be846217aa138b9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
