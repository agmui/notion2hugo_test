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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457KZUEM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHyETLvOcane6J%2F0ySGUJn1Qt7MG8TcfqsVXe6%2BZIp4dAiAxFYTY92WcM5ysz2OKmvz8z2EuztdKb0u%2Fur35jmQ30Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCHNHCVclc%2BMBVhZEKtwDCs2bR21ZkHSkOLVd6JhbQ1SxrUOmbXRMGEpN%2BdKCawb%2BcgV2cMYB8j2VWJ%2FEo8VgwaZeXlZdpq1UozNltKyIXeKwNlIFViDBSzK3a35bYrLaLB%2Bs5YJX%2B9z68AUxY%2Flg1ddkAFfKdJw5aKdkA%2BUDnQg8ev8fH8gaHZeAlnlrrtqz4Dq90L1gOBm8Ul9LkO%2FMOlDGzN2UgorDz6Hi5CkkaSzAelini0N6VULLpkjQ%2FbuCDCS3o%2Bq1b%2B8dbuicUX94dVN8pJ0NOKq3ONmqkSjZCDQhMfnyVvUT%2FzztP3dHIkzsawkD6%2B2n6bwatRQBoHj0%2FBW1qRcC%2BzFnOSn1g4NuuO2A1%2Bb7CHO4eYpLEERD1zDoY6uM%2FuR5gznxo%2F4PeTs3uO1PieSof9kmF2xAM1ADcKApl65BFLfRnZcblo78WJbBHgxzrJbi2xIi9r3ex41Pe9A50gUzbYa9kplaBJY36SydvXg0y6Iwyon63KbTPw5lKPVyZptmIaAiUGc%2FeNEsAgOylcmzQ9G0WMKtMGXnaDLPyo4QtLRtfgOcwQYYWpP6BkQN%2BKMSXeIEqsjDOJ9LDGmeWP2Y18i2J47D14yNvAldSwm0vpTP%2FU5v4ZtJAeB%2B3bh2mfxH9bvLRjAw%2BcCTxAY6pgEYdHzCG46geYotOX%2BY%2FX5TJHngPFpYPfuZKUyeb%2BIzdgAjT98Dr4fEb9rQmG%2F2hSnt3%2F5uw3M%2FWzE1Nn8jEdm5lMN20RLif2VJCT0udGlnFkr8lbgsDnVkxUVgbVPtqDZy6XWTOKjkrRk0bqVNJz7R78pjO2RIDWJlQoqnO4t2TyxitDAQLcEXfnC7eSGxu0VKXWaycKTrYBpmGU0Stfmlpee4sn2E&X-Amz-Signature=b1fd038f5f6a7dcd6cea0a01f4e256c4ddbaa679dcd194428812ae13686ffad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457KZUEM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHyETLvOcane6J%2F0ySGUJn1Qt7MG8TcfqsVXe6%2BZIp4dAiAxFYTY92WcM5ysz2OKmvz8z2EuztdKb0u%2Fur35jmQ30Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCHNHCVclc%2BMBVhZEKtwDCs2bR21ZkHSkOLVd6JhbQ1SxrUOmbXRMGEpN%2BdKCawb%2BcgV2cMYB8j2VWJ%2FEo8VgwaZeXlZdpq1UozNltKyIXeKwNlIFViDBSzK3a35bYrLaLB%2Bs5YJX%2B9z68AUxY%2Flg1ddkAFfKdJw5aKdkA%2BUDnQg8ev8fH8gaHZeAlnlrrtqz4Dq90L1gOBm8Ul9LkO%2FMOlDGzN2UgorDz6Hi5CkkaSzAelini0N6VULLpkjQ%2FbuCDCS3o%2Bq1b%2B8dbuicUX94dVN8pJ0NOKq3ONmqkSjZCDQhMfnyVvUT%2FzztP3dHIkzsawkD6%2B2n6bwatRQBoHj0%2FBW1qRcC%2BzFnOSn1g4NuuO2A1%2Bb7CHO4eYpLEERD1zDoY6uM%2FuR5gznxo%2F4PeTs3uO1PieSof9kmF2xAM1ADcKApl65BFLfRnZcblo78WJbBHgxzrJbi2xIi9r3ex41Pe9A50gUzbYa9kplaBJY36SydvXg0y6Iwyon63KbTPw5lKPVyZptmIaAiUGc%2FeNEsAgOylcmzQ9G0WMKtMGXnaDLPyo4QtLRtfgOcwQYYWpP6BkQN%2BKMSXeIEqsjDOJ9LDGmeWP2Y18i2J47D14yNvAldSwm0vpTP%2FU5v4ZtJAeB%2B3bh2mfxH9bvLRjAw%2BcCTxAY6pgEYdHzCG46geYotOX%2BY%2FX5TJHngPFpYPfuZKUyeb%2BIzdgAjT98Dr4fEb9rQmG%2F2hSnt3%2F5uw3M%2FWzE1Nn8jEdm5lMN20RLif2VJCT0udGlnFkr8lbgsDnVkxUVgbVPtqDZy6XWTOKjkrRk0bqVNJz7R78pjO2RIDWJlQoqnO4t2TyxitDAQLcEXfnC7eSGxu0VKXWaycKTrYBpmGU0Stfmlpee4sn2E&X-Amz-Signature=098810efd6a5a3b433520013cbf81fbad061d45b30e8945b14e5bfacd9838b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457KZUEM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHyETLvOcane6J%2F0ySGUJn1Qt7MG8TcfqsVXe6%2BZIp4dAiAxFYTY92WcM5ysz2OKmvz8z2EuztdKb0u%2Fur35jmQ30Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCHNHCVclc%2BMBVhZEKtwDCs2bR21ZkHSkOLVd6JhbQ1SxrUOmbXRMGEpN%2BdKCawb%2BcgV2cMYB8j2VWJ%2FEo8VgwaZeXlZdpq1UozNltKyIXeKwNlIFViDBSzK3a35bYrLaLB%2Bs5YJX%2B9z68AUxY%2Flg1ddkAFfKdJw5aKdkA%2BUDnQg8ev8fH8gaHZeAlnlrrtqz4Dq90L1gOBm8Ul9LkO%2FMOlDGzN2UgorDz6Hi5CkkaSzAelini0N6VULLpkjQ%2FbuCDCS3o%2Bq1b%2B8dbuicUX94dVN8pJ0NOKq3ONmqkSjZCDQhMfnyVvUT%2FzztP3dHIkzsawkD6%2B2n6bwatRQBoHj0%2FBW1qRcC%2BzFnOSn1g4NuuO2A1%2Bb7CHO4eYpLEERD1zDoY6uM%2FuR5gznxo%2F4PeTs3uO1PieSof9kmF2xAM1ADcKApl65BFLfRnZcblo78WJbBHgxzrJbi2xIi9r3ex41Pe9A50gUzbYa9kplaBJY36SydvXg0y6Iwyon63KbTPw5lKPVyZptmIaAiUGc%2FeNEsAgOylcmzQ9G0WMKtMGXnaDLPyo4QtLRtfgOcwQYYWpP6BkQN%2BKMSXeIEqsjDOJ9LDGmeWP2Y18i2J47D14yNvAldSwm0vpTP%2FU5v4ZtJAeB%2B3bh2mfxH9bvLRjAw%2BcCTxAY6pgEYdHzCG46geYotOX%2BY%2FX5TJHngPFpYPfuZKUyeb%2BIzdgAjT98Dr4fEb9rQmG%2F2hSnt3%2F5uw3M%2FWzE1Nn8jEdm5lMN20RLif2VJCT0udGlnFkr8lbgsDnVkxUVgbVPtqDZy6XWTOKjkrRk0bqVNJz7R78pjO2RIDWJlQoqnO4t2TyxitDAQLcEXfnC7eSGxu0VKXWaycKTrYBpmGU0Stfmlpee4sn2E&X-Amz-Signature=a18637fd4264ea92a5fe4f138b72603dd2cc1be9a65bfa36b2359b617da8b9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
