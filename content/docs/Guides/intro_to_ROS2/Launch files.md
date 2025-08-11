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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPQHQMUP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIo4DfdFLf9UY0MX6%2BJCOFe0wuuENVwnwwiknRakTHAIgf65a1XnGaGWE%2FwO8y2FM3O4sxCVdbWBr73FhhS8X9V8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2r3jUDhCn8%2FInUsSrcA3leH%2FxyzzfSrc2f3dpRRhloxri209ETKGdlLEuLPtjLMCbwwWgWPeycbbPEDgehuxFe4CZkO%2BKoa6g7hUowHD8Kz1fgVqboivpHVTavdKYsUfZqHHlmVPU53vdpnIA1lxhAOhTnM0KSztNvXK9SROjeI0c55zoRpLj%2BRF1TCfYvwsQoGUjEK5UUgMOauz4fMxjiQ5xwOKXrF0Ro4DMUNnpeGk0dczexw2H6gzU8Oj8zZApKONtq3OJb%2F8Rb5JkWOBw8jB%2BKmGVE6GIqt6o7IFrLAz5yOEipa%2BAmsi8sClpA0FvGA8OPWZDBXXJ2ydt9FuyqbtJfYYsS8UbGr0Izu8dOQ07LflSd0CvIz7JbIbxu6bmAEppnp6E%2F502BW3LbchNmf3xZgpNJ%2BILOMxq2t9amlRaAqHBZMDPqPjkWeR6hr%2FEdbQFHS3KcxRVcT9GUPUJJhnmb4PB4jijD1sGehIgYAV56x8iCtmu%2FX2jEsoODgBRgHaL5nVdoEDb35izEegb%2FIc4YM6WPWO7mKmjXxrct8WHzYg3aCFOW1MOy%2BzXk0HgNnL6qhuv%2FZs7l22YMj8ezqCNoNZNtt%2FSx6RoP01HAljplcv3RvyLIlnBnbZX0ByEFW4pJRZ81lDsCMI345sQGOqUBRUJ%2F2WYG6JKWVIEVWFCF2PtU5CKPiZR8%2FZniKtq85P1oGcr4FyfZFeIafWCMCNjZlk%2FNoS4WlEN9jAjnsClyEIOThEM%2F%2F%2BHi2pHQg%2B0E3uQ4XiSDrvWbCyJi61HIbqZBTMfpEpuvrn7LZaXRXvx2UMUYxHsK%2BLL5vAq1jd1lE%2F3Paar3xTOfhz3etFwdD41nMiBmnREdfl61l7DcAyAYpIv6c%2Foy&X-Amz-Signature=a79cac6b0da657ace8a6db9dfc11fdabeb419c8574649a3b3a0552f850f4f832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPQHQMUP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIo4DfdFLf9UY0MX6%2BJCOFe0wuuENVwnwwiknRakTHAIgf65a1XnGaGWE%2FwO8y2FM3O4sxCVdbWBr73FhhS8X9V8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2r3jUDhCn8%2FInUsSrcA3leH%2FxyzzfSrc2f3dpRRhloxri209ETKGdlLEuLPtjLMCbwwWgWPeycbbPEDgehuxFe4CZkO%2BKoa6g7hUowHD8Kz1fgVqboivpHVTavdKYsUfZqHHlmVPU53vdpnIA1lxhAOhTnM0KSztNvXK9SROjeI0c55zoRpLj%2BRF1TCfYvwsQoGUjEK5UUgMOauz4fMxjiQ5xwOKXrF0Ro4DMUNnpeGk0dczexw2H6gzU8Oj8zZApKONtq3OJb%2F8Rb5JkWOBw8jB%2BKmGVE6GIqt6o7IFrLAz5yOEipa%2BAmsi8sClpA0FvGA8OPWZDBXXJ2ydt9FuyqbtJfYYsS8UbGr0Izu8dOQ07LflSd0CvIz7JbIbxu6bmAEppnp6E%2F502BW3LbchNmf3xZgpNJ%2BILOMxq2t9amlRaAqHBZMDPqPjkWeR6hr%2FEdbQFHS3KcxRVcT9GUPUJJhnmb4PB4jijD1sGehIgYAV56x8iCtmu%2FX2jEsoODgBRgHaL5nVdoEDb35izEegb%2FIc4YM6WPWO7mKmjXxrct8WHzYg3aCFOW1MOy%2BzXk0HgNnL6qhuv%2FZs7l22YMj8ezqCNoNZNtt%2FSx6RoP01HAljplcv3RvyLIlnBnbZX0ByEFW4pJRZ81lDsCMI345sQGOqUBRUJ%2F2WYG6JKWVIEVWFCF2PtU5CKPiZR8%2FZniKtq85P1oGcr4FyfZFeIafWCMCNjZlk%2FNoS4WlEN9jAjnsClyEIOThEM%2F%2F%2BHi2pHQg%2B0E3uQ4XiSDrvWbCyJi61HIbqZBTMfpEpuvrn7LZaXRXvx2UMUYxHsK%2BLL5vAq1jd1lE%2F3Paar3xTOfhz3etFwdD41nMiBmnREdfl61l7DcAyAYpIv6c%2Foy&X-Amz-Signature=cccd53d8864b453d2f1c3c01ab9680eb4e17509e2194b8a8822fc13d8fd5f37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPQHQMUP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIo4DfdFLf9UY0MX6%2BJCOFe0wuuENVwnwwiknRakTHAIgf65a1XnGaGWE%2FwO8y2FM3O4sxCVdbWBr73FhhS8X9V8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2r3jUDhCn8%2FInUsSrcA3leH%2FxyzzfSrc2f3dpRRhloxri209ETKGdlLEuLPtjLMCbwwWgWPeycbbPEDgehuxFe4CZkO%2BKoa6g7hUowHD8Kz1fgVqboivpHVTavdKYsUfZqHHlmVPU53vdpnIA1lxhAOhTnM0KSztNvXK9SROjeI0c55zoRpLj%2BRF1TCfYvwsQoGUjEK5UUgMOauz4fMxjiQ5xwOKXrF0Ro4DMUNnpeGk0dczexw2H6gzU8Oj8zZApKONtq3OJb%2F8Rb5JkWOBw8jB%2BKmGVE6GIqt6o7IFrLAz5yOEipa%2BAmsi8sClpA0FvGA8OPWZDBXXJ2ydt9FuyqbtJfYYsS8UbGr0Izu8dOQ07LflSd0CvIz7JbIbxu6bmAEppnp6E%2F502BW3LbchNmf3xZgpNJ%2BILOMxq2t9amlRaAqHBZMDPqPjkWeR6hr%2FEdbQFHS3KcxRVcT9GUPUJJhnmb4PB4jijD1sGehIgYAV56x8iCtmu%2FX2jEsoODgBRgHaL5nVdoEDb35izEegb%2FIc4YM6WPWO7mKmjXxrct8WHzYg3aCFOW1MOy%2BzXk0HgNnL6qhuv%2FZs7l22YMj8ezqCNoNZNtt%2FSx6RoP01HAljplcv3RvyLIlnBnbZX0ByEFW4pJRZ81lDsCMI345sQGOqUBRUJ%2F2WYG6JKWVIEVWFCF2PtU5CKPiZR8%2FZniKtq85P1oGcr4FyfZFeIafWCMCNjZlk%2FNoS4WlEN9jAjnsClyEIOThEM%2F%2F%2BHi2pHQg%2B0E3uQ4XiSDrvWbCyJi61HIbqZBTMfpEpuvrn7LZaXRXvx2UMUYxHsK%2BLL5vAq1jd1lE%2F3Paar3xTOfhz3etFwdD41nMiBmnREdfl61l7DcAyAYpIv6c%2Foy&X-Amz-Signature=07130ed478eda495310d39fb2509c5239f0c043ccfb77a22c09775cf9cc18edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
