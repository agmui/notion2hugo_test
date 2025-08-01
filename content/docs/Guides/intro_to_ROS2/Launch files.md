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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKE7OAF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPeCTJs4xmF5OdXWrAwJNO7Cw1Pnv2%2BEJcAm%2BX9TgFlQIhAN2MaKdtPrUQ%2FKywteOdwIlmwVkWhwZ5%2Bu83StDbHtVlKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz60OpW%2BTWh4OLxMIq3AN2%2FrCsVG6kIYSnuj4LRH%2Bq4h041SvDFIPQQQWKM3%2FufwyVeiBZl%2FQlRGK5hHwpCZYcFt3FhFSYwg2C%2BYdp1i8f1K%2BbUZV9aGAhaNQVp7n%2BzKcwru%2FfXqNJg7f1NEso0jXQ5L1sFyTIiHbSZ91kEgg66a7YMiI6Z%2BoNmJbMJNYPHcX83%2BqgKXD7HQx90hxzdtxXRNCFzS0T13xjJwG%2FeTx6aK6qjDTBRRGoA5k1EUXdN%2FwDFHVUrRXaC%2BCXt4FCBsV8XwzzkITKB0Vv76PiV1rvChC%2BS0OWTJZ7X9C85KYzlCC1Ra%2BYxD05brm5guPaEfpcd0xJeiG05CP6C41csOxSxfn0GG9EuubYG3NnWKnpotznwMkdrGOFG9ktidbJ7ApCunsz5ki7jHDqJNVO%2F3kNyx%2FmWPkVpde0sYy3ZdQ9x8NlyZLZv2%2FNIqZ9vUygB15Ihw2nXCiuawpI2QLE2Sx6H%2FlIXRCFmuA8i%2BSLW5qeMW43cp0AWRSAwVO2qT0ek%2Fpakim7uQ69FG8pqrynNvh1J3KONSEx1w0JAtgYH6ntSqtLrl60PLCRxA6b%2B74NdEQiUcyCIuv4hokUdecRzHaosSQxpNZel2smAMl1i6HRlQUTdF39OaUElkD%2BUTCLkrLEBjqkAXEMV3JBFSA3Xxe4zU4%2F%2FKYeJUEZkS2937Zo4371kKaK9WYphO6qXgE5m5AZlEM%2FuV1l4JYeCpbQB10dtFKqkjoZykjAhNTzEF5balSAYxy%2FB%2FHtx%2B%2FrKtHHIK%2FBxuKHmUt8H0swnYngSXAEE30PvQQo4KoWk2iBn8gV6hp1UnLMQ6iu%2FhLpHBauxy2DwCm8%2FvXiifddeA6KT98hEQAPZgaadnKC&X-Amz-Signature=c41913c2940007e2e17f5074feb1d0adeb95236a80e25488bcb48cf675dee227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKE7OAF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPeCTJs4xmF5OdXWrAwJNO7Cw1Pnv2%2BEJcAm%2BX9TgFlQIhAN2MaKdtPrUQ%2FKywteOdwIlmwVkWhwZ5%2Bu83StDbHtVlKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz60OpW%2BTWh4OLxMIq3AN2%2FrCsVG6kIYSnuj4LRH%2Bq4h041SvDFIPQQQWKM3%2FufwyVeiBZl%2FQlRGK5hHwpCZYcFt3FhFSYwg2C%2BYdp1i8f1K%2BbUZV9aGAhaNQVp7n%2BzKcwru%2FfXqNJg7f1NEso0jXQ5L1sFyTIiHbSZ91kEgg66a7YMiI6Z%2BoNmJbMJNYPHcX83%2BqgKXD7HQx90hxzdtxXRNCFzS0T13xjJwG%2FeTx6aK6qjDTBRRGoA5k1EUXdN%2FwDFHVUrRXaC%2BCXt4FCBsV8XwzzkITKB0Vv76PiV1rvChC%2BS0OWTJZ7X9C85KYzlCC1Ra%2BYxD05brm5guPaEfpcd0xJeiG05CP6C41csOxSxfn0GG9EuubYG3NnWKnpotznwMkdrGOFG9ktidbJ7ApCunsz5ki7jHDqJNVO%2F3kNyx%2FmWPkVpde0sYy3ZdQ9x8NlyZLZv2%2FNIqZ9vUygB15Ihw2nXCiuawpI2QLE2Sx6H%2FlIXRCFmuA8i%2BSLW5qeMW43cp0AWRSAwVO2qT0ek%2Fpakim7uQ69FG8pqrynNvh1J3KONSEx1w0JAtgYH6ntSqtLrl60PLCRxA6b%2B74NdEQiUcyCIuv4hokUdecRzHaosSQxpNZel2smAMl1i6HRlQUTdF39OaUElkD%2BUTCLkrLEBjqkAXEMV3JBFSA3Xxe4zU4%2F%2FKYeJUEZkS2937Zo4371kKaK9WYphO6qXgE5m5AZlEM%2FuV1l4JYeCpbQB10dtFKqkjoZykjAhNTzEF5balSAYxy%2FB%2FHtx%2B%2FrKtHHIK%2FBxuKHmUt8H0swnYngSXAEE30PvQQo4KoWk2iBn8gV6hp1UnLMQ6iu%2FhLpHBauxy2DwCm8%2FvXiifddeA6KT98hEQAPZgaadnKC&X-Amz-Signature=e341848c92881059812f2ca49504d4f0f13f2abd1740fba43c78e31a91d393cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKE7OAF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPeCTJs4xmF5OdXWrAwJNO7Cw1Pnv2%2BEJcAm%2BX9TgFlQIhAN2MaKdtPrUQ%2FKywteOdwIlmwVkWhwZ5%2Bu83StDbHtVlKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz60OpW%2BTWh4OLxMIq3AN2%2FrCsVG6kIYSnuj4LRH%2Bq4h041SvDFIPQQQWKM3%2FufwyVeiBZl%2FQlRGK5hHwpCZYcFt3FhFSYwg2C%2BYdp1i8f1K%2BbUZV9aGAhaNQVp7n%2BzKcwru%2FfXqNJg7f1NEso0jXQ5L1sFyTIiHbSZ91kEgg66a7YMiI6Z%2BoNmJbMJNYPHcX83%2BqgKXD7HQx90hxzdtxXRNCFzS0T13xjJwG%2FeTx6aK6qjDTBRRGoA5k1EUXdN%2FwDFHVUrRXaC%2BCXt4FCBsV8XwzzkITKB0Vv76PiV1rvChC%2BS0OWTJZ7X9C85KYzlCC1Ra%2BYxD05brm5guPaEfpcd0xJeiG05CP6C41csOxSxfn0GG9EuubYG3NnWKnpotznwMkdrGOFG9ktidbJ7ApCunsz5ki7jHDqJNVO%2F3kNyx%2FmWPkVpde0sYy3ZdQ9x8NlyZLZv2%2FNIqZ9vUygB15Ihw2nXCiuawpI2QLE2Sx6H%2FlIXRCFmuA8i%2BSLW5qeMW43cp0AWRSAwVO2qT0ek%2Fpakim7uQ69FG8pqrynNvh1J3KONSEx1w0JAtgYH6ntSqtLrl60PLCRxA6b%2B74NdEQiUcyCIuv4hokUdecRzHaosSQxpNZel2smAMl1i6HRlQUTdF39OaUElkD%2BUTCLkrLEBjqkAXEMV3JBFSA3Xxe4zU4%2F%2FKYeJUEZkS2937Zo4371kKaK9WYphO6qXgE5m5AZlEM%2FuV1l4JYeCpbQB10dtFKqkjoZykjAhNTzEF5balSAYxy%2FB%2FHtx%2B%2FrKtHHIK%2FBxuKHmUt8H0swnYngSXAEE30PvQQo4KoWk2iBn8gV6hp1UnLMQ6iu%2FhLpHBauxy2DwCm8%2FvXiifddeA6KT98hEQAPZgaadnKC&X-Amz-Signature=5ede51703c77f2bc25d8bcee87c962f1c3919c3c2eed402cd22d8037f14e13a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
