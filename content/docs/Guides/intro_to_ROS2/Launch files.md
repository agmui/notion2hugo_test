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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA5D3E7%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh5vz1BuPNkV1Bi6ynUdXBtDOl%2BaeEZl1COSyKweSIhAiEAwPw%2BmSMgkwaayfqlSEDynrZ7jWroCNAtX1Ixvwg3HDAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDECy9Yg5201H55rmcircAxrbtEiNshma9YoR4YpE0AmM3x4aXkxujAoZUikVUiZwM1AE5i%2BllwDoOF6iZ24Wa79tsqLYcH8AO3mRexyZDCjISUH0a8hssniSOgMlvzojipeS9ebFJXFJ%2FVV4jiQnW2RRz5X9yUlOc4z3HtqSUS6V4ce1ibb%2FEc9wEa3AHRYiHUd5tNWl21x70%2F02yCbLm0ixsIYeWFpOPfY7N4NfA0sbGM2yOc%2BUsjKVC91twgBT2ZKEq7HsEeIk8UeBec1hw4kS3Gxu%2Bk7U%2FzQDQPRMwegUoiH%2B57E95WWT%2BndqiVH4PDoA16bpEUhLdmlO9zMdY4fXq7%2FtmN7xhnWCFawuTFYI%2FZuZSdgtemeDvGA6gDTtYuDv2f209JS9WK7rRq9cUs%2Fvq8X337ERL32jr0nT2Ux%2BIgoq8j%2F0G9b3OzD3Gmo8yJEDHCSRnVOvpeRGcH1zlvk08yj69EGTSw0d3tJMyuaQn72cfGXBXeB3q56q%2BwKAjuhD4z%2Byc4ZX4qCL2S3PfJ6Od2cuf7g%2FkqmMRfSupnFpo5ltdAZgWIoZ%2BeE%2Fs3Aw8ycxNsILr9qfHgIoIdElQ7O3P2xIBbIK58f6Hi8zeVAXjbu6K2Gl%2BY%2F1WzZmixOoZNr6BaZfphFswVRwMJXdqcgGOqUB9XR7EIhaG4ENPZJFagos8qW5Hvl0qo0hTRGC7zPuZaaASslQIBJKaLKXGRm6THj7SS%2Fx%2BSlsb8Keo%2FAe5OlxBNmt3lTsCvpumBix0IhtXcm%2BLWRJ26EOT3vSNIDgCzn4Om0TRgh%2F%2BOsnQMrp9ouueBJ2y9ccGUYj%2BhzYAEiXvEofB9oNrDtj7cjF%2F8Gc9HsTZsig1HJM16CNL16ZmapWAw4O9c%2B0&X-Amz-Signature=df50c49963b8c27085cb823c051441333368c90fb9499c144b866312d63fcdba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA5D3E7%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh5vz1BuPNkV1Bi6ynUdXBtDOl%2BaeEZl1COSyKweSIhAiEAwPw%2BmSMgkwaayfqlSEDynrZ7jWroCNAtX1Ixvwg3HDAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDECy9Yg5201H55rmcircAxrbtEiNshma9YoR4YpE0AmM3x4aXkxujAoZUikVUiZwM1AE5i%2BllwDoOF6iZ24Wa79tsqLYcH8AO3mRexyZDCjISUH0a8hssniSOgMlvzojipeS9ebFJXFJ%2FVV4jiQnW2RRz5X9yUlOc4z3HtqSUS6V4ce1ibb%2FEc9wEa3AHRYiHUd5tNWl21x70%2F02yCbLm0ixsIYeWFpOPfY7N4NfA0sbGM2yOc%2BUsjKVC91twgBT2ZKEq7HsEeIk8UeBec1hw4kS3Gxu%2Bk7U%2FzQDQPRMwegUoiH%2B57E95WWT%2BndqiVH4PDoA16bpEUhLdmlO9zMdY4fXq7%2FtmN7xhnWCFawuTFYI%2FZuZSdgtemeDvGA6gDTtYuDv2f209JS9WK7rRq9cUs%2Fvq8X337ERL32jr0nT2Ux%2BIgoq8j%2F0G9b3OzD3Gmo8yJEDHCSRnVOvpeRGcH1zlvk08yj69EGTSw0d3tJMyuaQn72cfGXBXeB3q56q%2BwKAjuhD4z%2Byc4ZX4qCL2S3PfJ6Od2cuf7g%2FkqmMRfSupnFpo5ltdAZgWIoZ%2BeE%2Fs3Aw8ycxNsILr9qfHgIoIdElQ7O3P2xIBbIK58f6Hi8zeVAXjbu6K2Gl%2BY%2F1WzZmixOoZNr6BaZfphFswVRwMJXdqcgGOqUB9XR7EIhaG4ENPZJFagos8qW5Hvl0qo0hTRGC7zPuZaaASslQIBJKaLKXGRm6THj7SS%2Fx%2BSlsb8Keo%2FAe5OlxBNmt3lTsCvpumBix0IhtXcm%2BLWRJ26EOT3vSNIDgCzn4Om0TRgh%2F%2BOsnQMrp9ouueBJ2y9ccGUYj%2BhzYAEiXvEofB9oNrDtj7cjF%2F8Gc9HsTZsig1HJM16CNL16ZmapWAw4O9c%2B0&X-Amz-Signature=8f60daff9c572fe2cdb5f96727191ad5bd2f60dc3fe77cdedb8925ecbc67e9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA5D3E7%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGh5vz1BuPNkV1Bi6ynUdXBtDOl%2BaeEZl1COSyKweSIhAiEAwPw%2BmSMgkwaayfqlSEDynrZ7jWroCNAtX1Ixvwg3HDAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDECy9Yg5201H55rmcircAxrbtEiNshma9YoR4YpE0AmM3x4aXkxujAoZUikVUiZwM1AE5i%2BllwDoOF6iZ24Wa79tsqLYcH8AO3mRexyZDCjISUH0a8hssniSOgMlvzojipeS9ebFJXFJ%2FVV4jiQnW2RRz5X9yUlOc4z3HtqSUS6V4ce1ibb%2FEc9wEa3AHRYiHUd5tNWl21x70%2F02yCbLm0ixsIYeWFpOPfY7N4NfA0sbGM2yOc%2BUsjKVC91twgBT2ZKEq7HsEeIk8UeBec1hw4kS3Gxu%2Bk7U%2FzQDQPRMwegUoiH%2B57E95WWT%2BndqiVH4PDoA16bpEUhLdmlO9zMdY4fXq7%2FtmN7xhnWCFawuTFYI%2FZuZSdgtemeDvGA6gDTtYuDv2f209JS9WK7rRq9cUs%2Fvq8X337ERL32jr0nT2Ux%2BIgoq8j%2F0G9b3OzD3Gmo8yJEDHCSRnVOvpeRGcH1zlvk08yj69EGTSw0d3tJMyuaQn72cfGXBXeB3q56q%2BwKAjuhD4z%2Byc4ZX4qCL2S3PfJ6Od2cuf7g%2FkqmMRfSupnFpo5ltdAZgWIoZ%2BeE%2Fs3Aw8ycxNsILr9qfHgIoIdElQ7O3P2xIBbIK58f6Hi8zeVAXjbu6K2Gl%2BY%2F1WzZmixOoZNr6BaZfphFswVRwMJXdqcgGOqUB9XR7EIhaG4ENPZJFagos8qW5Hvl0qo0hTRGC7zPuZaaASslQIBJKaLKXGRm6THj7SS%2Fx%2BSlsb8Keo%2FAe5OlxBNmt3lTsCvpumBix0IhtXcm%2BLWRJ26EOT3vSNIDgCzn4Om0TRgh%2F%2BOsnQMrp9ouueBJ2y9ccGUYj%2BhzYAEiXvEofB9oNrDtj7cjF%2F8Gc9HsTZsig1HJM16CNL16ZmapWAw4O9c%2B0&X-Amz-Signature=7fb21dea8be18cdbb89436d373787dd72f5e5328cb8a5b7449fe3a1806a39535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
