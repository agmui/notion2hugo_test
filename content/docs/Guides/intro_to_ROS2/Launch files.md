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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7VKPK7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBHYvUsjEkUQqJGEeCmVuvfpdPnQlXikk52bgeuNcLOwIgbUiEUaVsAR779o3rmf8WNBJGnieEUWMm58hY989jsckqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3S6iodSrt2fhWWRCrcA3G6M%2Fl161Ds%2Bx5eS%2FbqF8u%2FZkkTjEulL%2BtOqbgGomw4%2Fe%2FBglh5wwqoQNOXxcyLo%2B0O1VxlbGjFhVTaMXB5DvmVC43DDnCOCM8nxXMKuCc9u305vjgmXoyoKkRdnKZvlWwi6rD3KxrgM4op%2FRnmzc%2FGhEblJEZksvac6tDPU0LUD%2FIyAo0LL3rUsdxTcGybtduaYDCUa3LIX5AISBbuoIV58Ufno68wvbSw4ECln1bnkUiLdxxtyYlgit4ugjg98rYJNkyGYmAaeGsAkAskkDtUYsU0w5kayxlaJ9Y0NUYBtor2hYwyru9ehRkilmJf1ywZVA%2FKIoKtdJjl2X0rNPUKscrZONbflBAerKL3qJJ6l%2FcJJJc5mIC8goWLoHWqLZhPmLux2MhWU7W9rd3%2BAUjPEss%2FWsNvsWlrIgNzW%2FTk2ft9z%2FAlQLcJfzl3JEIgo3FHfadQ4dJLz5FzlrTxg6T1HU9RNX7lT%2B1cJIPa7RpwB8K9tF7mvtGHkD7FdSW3QO5faF%2B38VdHQjuqMwzun8wsU0sdQCg7wpCt3vFXb5b4eH80EBxMtFz4ppBiRWroI%2BBrfq8CF6yP%2BJ9uqGsYClIDg2de4TYOBCYiK40aDdyDHk3Ch%2Fa4Gf6YIH9pMP%2BKn8QGOqUBSYFGEXwVPkatPtlCwldTYYi3G3L1j0T0fGgZ%2BVINiFzjiuo%2FeuGZMIr45%2B9eL47MDPpSXZLUB8L2QrRF56%2FSEsObF9mTQhiBJx%2Bv4nicbZYj1Chkwn3b%2BB3Ajs8OvQ0WrFtSm6vXUVP3wom9PrLsvzPXa4Odlf1zOw6Xs13H5t39lheCG89QHrARlXnE3BqUxg8LwemMqUdaFzgYczabug%2FAXJZH&X-Amz-Signature=ee7656000d848ac5f1edc5d1e557816e7facc2abd14869188230abaa53bb384d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7VKPK7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBHYvUsjEkUQqJGEeCmVuvfpdPnQlXikk52bgeuNcLOwIgbUiEUaVsAR779o3rmf8WNBJGnieEUWMm58hY989jsckqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3S6iodSrt2fhWWRCrcA3G6M%2Fl161Ds%2Bx5eS%2FbqF8u%2FZkkTjEulL%2BtOqbgGomw4%2Fe%2FBglh5wwqoQNOXxcyLo%2B0O1VxlbGjFhVTaMXB5DvmVC43DDnCOCM8nxXMKuCc9u305vjgmXoyoKkRdnKZvlWwi6rD3KxrgM4op%2FRnmzc%2FGhEblJEZksvac6tDPU0LUD%2FIyAo0LL3rUsdxTcGybtduaYDCUa3LIX5AISBbuoIV58Ufno68wvbSw4ECln1bnkUiLdxxtyYlgit4ugjg98rYJNkyGYmAaeGsAkAskkDtUYsU0w5kayxlaJ9Y0NUYBtor2hYwyru9ehRkilmJf1ywZVA%2FKIoKtdJjl2X0rNPUKscrZONbflBAerKL3qJJ6l%2FcJJJc5mIC8goWLoHWqLZhPmLux2MhWU7W9rd3%2BAUjPEss%2FWsNvsWlrIgNzW%2FTk2ft9z%2FAlQLcJfzl3JEIgo3FHfadQ4dJLz5FzlrTxg6T1HU9RNX7lT%2B1cJIPa7RpwB8K9tF7mvtGHkD7FdSW3QO5faF%2B38VdHQjuqMwzun8wsU0sdQCg7wpCt3vFXb5b4eH80EBxMtFz4ppBiRWroI%2BBrfq8CF6yP%2BJ9uqGsYClIDg2de4TYOBCYiK40aDdyDHk3Ch%2Fa4Gf6YIH9pMP%2BKn8QGOqUBSYFGEXwVPkatPtlCwldTYYi3G3L1j0T0fGgZ%2BVINiFzjiuo%2FeuGZMIr45%2B9eL47MDPpSXZLUB8L2QrRF56%2FSEsObF9mTQhiBJx%2Bv4nicbZYj1Chkwn3b%2BB3Ajs8OvQ0WrFtSm6vXUVP3wom9PrLsvzPXa4Odlf1zOw6Xs13H5t39lheCG89QHrARlXnE3BqUxg8LwemMqUdaFzgYczabug%2FAXJZH&X-Amz-Signature=53d1c5f9452afe5f04fd3faaaaf1b03792cc1c2a6d5c3dbf633ed259f119b2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7VKPK7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBHYvUsjEkUQqJGEeCmVuvfpdPnQlXikk52bgeuNcLOwIgbUiEUaVsAR779o3rmf8WNBJGnieEUWMm58hY989jsckqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3S6iodSrt2fhWWRCrcA3G6M%2Fl161Ds%2Bx5eS%2FbqF8u%2FZkkTjEulL%2BtOqbgGomw4%2Fe%2FBglh5wwqoQNOXxcyLo%2B0O1VxlbGjFhVTaMXB5DvmVC43DDnCOCM8nxXMKuCc9u305vjgmXoyoKkRdnKZvlWwi6rD3KxrgM4op%2FRnmzc%2FGhEblJEZksvac6tDPU0LUD%2FIyAo0LL3rUsdxTcGybtduaYDCUa3LIX5AISBbuoIV58Ufno68wvbSw4ECln1bnkUiLdxxtyYlgit4ugjg98rYJNkyGYmAaeGsAkAskkDtUYsU0w5kayxlaJ9Y0NUYBtor2hYwyru9ehRkilmJf1ywZVA%2FKIoKtdJjl2X0rNPUKscrZONbflBAerKL3qJJ6l%2FcJJJc5mIC8goWLoHWqLZhPmLux2MhWU7W9rd3%2BAUjPEss%2FWsNvsWlrIgNzW%2FTk2ft9z%2FAlQLcJfzl3JEIgo3FHfadQ4dJLz5FzlrTxg6T1HU9RNX7lT%2B1cJIPa7RpwB8K9tF7mvtGHkD7FdSW3QO5faF%2B38VdHQjuqMwzun8wsU0sdQCg7wpCt3vFXb5b4eH80EBxMtFz4ppBiRWroI%2BBrfq8CF6yP%2BJ9uqGsYClIDg2de4TYOBCYiK40aDdyDHk3Ch%2Fa4Gf6YIH9pMP%2BKn8QGOqUBSYFGEXwVPkatPtlCwldTYYi3G3L1j0T0fGgZ%2BVINiFzjiuo%2FeuGZMIr45%2B9eL47MDPpSXZLUB8L2QrRF56%2FSEsObF9mTQhiBJx%2Bv4nicbZYj1Chkwn3b%2BB3Ajs8OvQ0WrFtSm6vXUVP3wom9PrLsvzPXa4Odlf1zOw6Xs13H5t39lheCG89QHrARlXnE3BqUxg8LwemMqUdaFzgYczabug%2FAXJZH&X-Amz-Signature=2fa802cc5420c0f50159235025cc1fc279fc4cdfb0b43f9fa02c965272f3456a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
