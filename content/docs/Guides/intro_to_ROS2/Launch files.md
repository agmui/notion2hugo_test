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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXWX4PF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDVaj%2FI7zqW1tqo9%2FAGzadDE3gIICcVHpCowaAhzU37UAiB6cU%2FNbs6%2FPHoTIkTpkORSUG6lhFn6Li0vKtiGRFmQ5Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMVH8rI9IUz%2FSPyEEPKtwDw0%2F%2FuIOxoQXApz4WU5ZDp0Kc4UM12X0B1v35hox1cqn4dvDYQBh6lCFh82raiIqvje4BM52B%2BMhNnOB5tT%2BsbBUkCxxhEtpONZ%2B65cCEiTtgXHMLtQAGyp3tkcbwN8QCp%2BqgOXD1gZZPICKvM5HYKoH2lDaHo%2FRhdYg7C53LJt61HN5QWemIjyU1BRUTjybwPXDG8Z1ZC%2FC5jX8VUFMa3v2eWu4NSOk4GdGGdTTalflyWxm0NHXUslKgviC6rPGAZa7zKMv7kOeR8SBvio24FT0N1y2zL0XsktyigA5k4uO%2BO%2BfIWIy9jY71oUJEU3T6X3oK8cMpSoyd7dUWs6KBeCfQYUarwhL2YAOFd5rOYLpiyCLD0Gai%2BSStec5dq2%2BdUU5wQaUOIZttR3feA7uAdLk%2BaCCAjUfujKzicxJ%2FXibTBPbhJttwOg%2BiOwNIwGbC9MioTJyMW2LiU7JnV1Cle4J663%2FP1R9EWWMqsX%2BrhGWiotDXmjdwdWmhZdKncBuIXA0TuA5x5yvU1sR%2BJYTpJ%2BQoaDV%2BgqOVa9fTYj9vPK%2FbrvCfU7IjU0hxbbZoiiqlfadVNwph3Xli%2FDvINJPeC5M%2BgggMOIdoS3AiW8qTrRRat8e6gqvov6XUiPMw277BvQY6pgETNm%2BtaYm9u2cPrA669CVE2wpcM5j%2FiYeKlq5lY849f3fTVPpGvR4mZXgEwt%2FplRtuhkjJ9LbslLI71HXKTUpF8Zgnq7GFiHVBt%2BiOvmc3OOxBaYejYkgtwBWFgconMEztjxksSZ9Sdzc0xSPf36EicmkSl1R1B7TysKwpq9YfYW28UtWDwBcNVbedJw0kjlmBnsSLvakUUsZQfblRTY6w817tvEFP&X-Amz-Signature=acb2185692215a9355ea1b562ff57814f9527c0c3d59ff1fe58b3bd9a9fdf0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXWX4PF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDVaj%2FI7zqW1tqo9%2FAGzadDE3gIICcVHpCowaAhzU37UAiB6cU%2FNbs6%2FPHoTIkTpkORSUG6lhFn6Li0vKtiGRFmQ5Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMVH8rI9IUz%2FSPyEEPKtwDw0%2F%2FuIOxoQXApz4WU5ZDp0Kc4UM12X0B1v35hox1cqn4dvDYQBh6lCFh82raiIqvje4BM52B%2BMhNnOB5tT%2BsbBUkCxxhEtpONZ%2B65cCEiTtgXHMLtQAGyp3tkcbwN8QCp%2BqgOXD1gZZPICKvM5HYKoH2lDaHo%2FRhdYg7C53LJt61HN5QWemIjyU1BRUTjybwPXDG8Z1ZC%2FC5jX8VUFMa3v2eWu4NSOk4GdGGdTTalflyWxm0NHXUslKgviC6rPGAZa7zKMv7kOeR8SBvio24FT0N1y2zL0XsktyigA5k4uO%2BO%2BfIWIy9jY71oUJEU3T6X3oK8cMpSoyd7dUWs6KBeCfQYUarwhL2YAOFd5rOYLpiyCLD0Gai%2BSStec5dq2%2BdUU5wQaUOIZttR3feA7uAdLk%2BaCCAjUfujKzicxJ%2FXibTBPbhJttwOg%2BiOwNIwGbC9MioTJyMW2LiU7JnV1Cle4J663%2FP1R9EWWMqsX%2BrhGWiotDXmjdwdWmhZdKncBuIXA0TuA5x5yvU1sR%2BJYTpJ%2BQoaDV%2BgqOVa9fTYj9vPK%2FbrvCfU7IjU0hxbbZoiiqlfadVNwph3Xli%2FDvINJPeC5M%2BgggMOIdoS3AiW8qTrRRat8e6gqvov6XUiPMw277BvQY6pgETNm%2BtaYm9u2cPrA669CVE2wpcM5j%2FiYeKlq5lY849f3fTVPpGvR4mZXgEwt%2FplRtuhkjJ9LbslLI71HXKTUpF8Zgnq7GFiHVBt%2BiOvmc3OOxBaYejYkgtwBWFgconMEztjxksSZ9Sdzc0xSPf36EicmkSl1R1B7TysKwpq9YfYW28UtWDwBcNVbedJw0kjlmBnsSLvakUUsZQfblRTY6w817tvEFP&X-Amz-Signature=f7013786783f6359739f2c08f308af220301675d06f9c26acb7458fc87d0b906&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXWX4PF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDVaj%2FI7zqW1tqo9%2FAGzadDE3gIICcVHpCowaAhzU37UAiB6cU%2FNbs6%2FPHoTIkTpkORSUG6lhFn6Li0vKtiGRFmQ5Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMVH8rI9IUz%2FSPyEEPKtwDw0%2F%2FuIOxoQXApz4WU5ZDp0Kc4UM12X0B1v35hox1cqn4dvDYQBh6lCFh82raiIqvje4BM52B%2BMhNnOB5tT%2BsbBUkCxxhEtpONZ%2B65cCEiTtgXHMLtQAGyp3tkcbwN8QCp%2BqgOXD1gZZPICKvM5HYKoH2lDaHo%2FRhdYg7C53LJt61HN5QWemIjyU1BRUTjybwPXDG8Z1ZC%2FC5jX8VUFMa3v2eWu4NSOk4GdGGdTTalflyWxm0NHXUslKgviC6rPGAZa7zKMv7kOeR8SBvio24FT0N1y2zL0XsktyigA5k4uO%2BO%2BfIWIy9jY71oUJEU3T6X3oK8cMpSoyd7dUWs6KBeCfQYUarwhL2YAOFd5rOYLpiyCLD0Gai%2BSStec5dq2%2BdUU5wQaUOIZttR3feA7uAdLk%2BaCCAjUfujKzicxJ%2FXibTBPbhJttwOg%2BiOwNIwGbC9MioTJyMW2LiU7JnV1Cle4J663%2FP1R9EWWMqsX%2BrhGWiotDXmjdwdWmhZdKncBuIXA0TuA5x5yvU1sR%2BJYTpJ%2BQoaDV%2BgqOVa9fTYj9vPK%2FbrvCfU7IjU0hxbbZoiiqlfadVNwph3Xli%2FDvINJPeC5M%2BgggMOIdoS3AiW8qTrRRat8e6gqvov6XUiPMw277BvQY6pgETNm%2BtaYm9u2cPrA669CVE2wpcM5j%2FiYeKlq5lY849f3fTVPpGvR4mZXgEwt%2FplRtuhkjJ9LbslLI71HXKTUpF8Zgnq7GFiHVBt%2BiOvmc3OOxBaYejYkgtwBWFgconMEztjxksSZ9Sdzc0xSPf36EicmkSl1R1B7TysKwpq9YfYW28UtWDwBcNVbedJw0kjlmBnsSLvakUUsZQfblRTY6w817tvEFP&X-Amz-Signature=1a73a7ef00d06646f0dcbca2e0cf40a196e9d84f9680fc659ae8c9908d31424c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
