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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWGO7RG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDt2%2Bv0%2BE1Yr0lR6JMo0an2KotQmz0mKphibo9heKC91wIgT2IY1SqDu9nZCoNocJdMbhBF7PZKJGuyNKFe91ow5%2BwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRS8D1KP968UOcRtCrcAwpZqLDbOlNtRO59rougtHQOI%2FzeOTe0BwofFkD84YIBZTqa0zPzI%2BLlW4eSv0zbRXXvwq%2FDwDqKQ4xrQ4oN0l3S9gHW6LOqOIobGbUTcUagfBe3%2FrDH8zz1CXTfT8asObbS5cfJU4skXyUXvJBI4Jm4kE2dQKJhw%2F%2FzLFZmbEKoHAHd%2F3Zf0BUre%2BxXhJIzfxSPgWTBVPkVj7a47hhfMUdW6KP90NMa%2BsqTqQOj1k5PFTZrKWXCnyjuJeNYvgs7Xsxvm2OIoJyaZXc4W5Kb1JQRvx7Rq1bFDaFNlnUGAM4j6xhfziEfctBLQDXzEasqNqDqerc5e8ppD1nuGOBZ0ZN1Wg3ciixNWW%2B233srkyN01GoJqIj%2Fp7fueX%2BOtLPLia6JZSehUPrsPAzbQ1rpL7wnxBUlmT6I7kDv6a5FI%2FYRd6%2BHkmLTd2S3PyljvTJ9BEXTMNtw4jOTcZdtgkZbrg99pJ%2FeJI8HC8XcWNY3S5Qyv3OPwr8LafDLIW79X5Bd4uBdPZfUu7N73aczogmd6x35pcI6ENm3KPj7dgWkmmp7GuzPJ90vmd%2FcFTEkgFjv2%2FiiGmOd1dmr7y8RooKKaZlrHmetnuMmIDbqM5MNii3onSAon5GMjTuLhQwpMM7FgNMGOqUB1W0XSoooWWCqu3Y1HnxqjlIG4dwB6tANpOaurbdpLiQzeOEHrwwLI2ZRTn5vv8EwYvp%2FzBPkPpscGiD7GJXZ1%2FQQiW0BaIlLtw3ueSpIe5xYIAjaclBjzqaHNUpOWOF9yNhc5leRKgD4fVLDchCriaNPQ30wJIGC8oEkYmVK%2BESBb22l171A9NKzlQolvUt1ZLTbEoFZP0Rq3P0ZWvFUefOaUAau&X-Amz-Signature=c33ea213232d2cffbca5ff6613327c758e930544eb3dbc48fd9af83f01b16894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWGO7RG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDt2%2Bv0%2BE1Yr0lR6JMo0an2KotQmz0mKphibo9heKC91wIgT2IY1SqDu9nZCoNocJdMbhBF7PZKJGuyNKFe91ow5%2BwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRS8D1KP968UOcRtCrcAwpZqLDbOlNtRO59rougtHQOI%2FzeOTe0BwofFkD84YIBZTqa0zPzI%2BLlW4eSv0zbRXXvwq%2FDwDqKQ4xrQ4oN0l3S9gHW6LOqOIobGbUTcUagfBe3%2FrDH8zz1CXTfT8asObbS5cfJU4skXyUXvJBI4Jm4kE2dQKJhw%2F%2FzLFZmbEKoHAHd%2F3Zf0BUre%2BxXhJIzfxSPgWTBVPkVj7a47hhfMUdW6KP90NMa%2BsqTqQOj1k5PFTZrKWXCnyjuJeNYvgs7Xsxvm2OIoJyaZXc4W5Kb1JQRvx7Rq1bFDaFNlnUGAM4j6xhfziEfctBLQDXzEasqNqDqerc5e8ppD1nuGOBZ0ZN1Wg3ciixNWW%2B233srkyN01GoJqIj%2Fp7fueX%2BOtLPLia6JZSehUPrsPAzbQ1rpL7wnxBUlmT6I7kDv6a5FI%2FYRd6%2BHkmLTd2S3PyljvTJ9BEXTMNtw4jOTcZdtgkZbrg99pJ%2FeJI8HC8XcWNY3S5Qyv3OPwr8LafDLIW79X5Bd4uBdPZfUu7N73aczogmd6x35pcI6ENm3KPj7dgWkmmp7GuzPJ90vmd%2FcFTEkgFjv2%2FiiGmOd1dmr7y8RooKKaZlrHmetnuMmIDbqM5MNii3onSAon5GMjTuLhQwpMM7FgNMGOqUB1W0XSoooWWCqu3Y1HnxqjlIG4dwB6tANpOaurbdpLiQzeOEHrwwLI2ZRTn5vv8EwYvp%2FzBPkPpscGiD7GJXZ1%2FQQiW0BaIlLtw3ueSpIe5xYIAjaclBjzqaHNUpOWOF9yNhc5leRKgD4fVLDchCriaNPQ30wJIGC8oEkYmVK%2BESBb22l171A9NKzlQolvUt1ZLTbEoFZP0Rq3P0ZWvFUefOaUAau&X-Amz-Signature=c05df7ad8fab46ae5375e3d9520b7b9365e6de84d56312c28403abdc5a15c8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWGO7RG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDt2%2Bv0%2BE1Yr0lR6JMo0an2KotQmz0mKphibo9heKC91wIgT2IY1SqDu9nZCoNocJdMbhBF7PZKJGuyNKFe91ow5%2BwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRS8D1KP968UOcRtCrcAwpZqLDbOlNtRO59rougtHQOI%2FzeOTe0BwofFkD84YIBZTqa0zPzI%2BLlW4eSv0zbRXXvwq%2FDwDqKQ4xrQ4oN0l3S9gHW6LOqOIobGbUTcUagfBe3%2FrDH8zz1CXTfT8asObbS5cfJU4skXyUXvJBI4Jm4kE2dQKJhw%2F%2FzLFZmbEKoHAHd%2F3Zf0BUre%2BxXhJIzfxSPgWTBVPkVj7a47hhfMUdW6KP90NMa%2BsqTqQOj1k5PFTZrKWXCnyjuJeNYvgs7Xsxvm2OIoJyaZXc4W5Kb1JQRvx7Rq1bFDaFNlnUGAM4j6xhfziEfctBLQDXzEasqNqDqerc5e8ppD1nuGOBZ0ZN1Wg3ciixNWW%2B233srkyN01GoJqIj%2Fp7fueX%2BOtLPLia6JZSehUPrsPAzbQ1rpL7wnxBUlmT6I7kDv6a5FI%2FYRd6%2BHkmLTd2S3PyljvTJ9BEXTMNtw4jOTcZdtgkZbrg99pJ%2FeJI8HC8XcWNY3S5Qyv3OPwr8LafDLIW79X5Bd4uBdPZfUu7N73aczogmd6x35pcI6ENm3KPj7dgWkmmp7GuzPJ90vmd%2FcFTEkgFjv2%2FiiGmOd1dmr7y8RooKKaZlrHmetnuMmIDbqM5MNii3onSAon5GMjTuLhQwpMM7FgNMGOqUB1W0XSoooWWCqu3Y1HnxqjlIG4dwB6tANpOaurbdpLiQzeOEHrwwLI2ZRTn5vv8EwYvp%2FzBPkPpscGiD7GJXZ1%2FQQiW0BaIlLtw3ueSpIe5xYIAjaclBjzqaHNUpOWOF9yNhc5leRKgD4fVLDchCriaNPQ30wJIGC8oEkYmVK%2BESBb22l171A9NKzlQolvUt1ZLTbEoFZP0Rq3P0ZWvFUefOaUAau&X-Amz-Signature=3ea3d71153237d45139c11d752adcadcfca6e07a09ae652dd4d60c4d7a1b5cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
