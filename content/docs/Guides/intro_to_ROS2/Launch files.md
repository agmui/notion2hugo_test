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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEBNVKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEW%2BkBf%2BVOsyEOoBM7BANfF11otrcmjmC1eBV81u5DVAiAAjTx%2B1eNteTS%2BOmHUYCKQObbnmtSVBN2zkEivK%2FW6ICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1O%2BRpSbN%2F13t5APKtwDFELo80oUjAYO72RPbT8M277U%2FJM4xI%2FgYwpgKzaLGfgsnOLaFbaQ53BAKM4W7UHl9l%2FD2QNelDO0YU%2Fdw6JghjRIBGjGnyyW7gb13hdhdqx9kdbGRHC9oTDLkJbQXnFqjRQXAKRoCyu2Xu9L7v63bfSdm3YNirMmwY8cVnWcvFkvhy1%2BLtR561%2BCgp6tbraYLUW9csIkbPjRlF5ACvZSXTkK3%2FO4K1mHTot1AGZhqQJ1TMM%2FY5wdpMkV05rTtzkQR0%2Bt7uqOiz9Rx9XMDe1jtIGNhS6KntsH3oTMeBN9L%2BLJ7oEjMQ6ysUeUXGNExycKuTHGkkd%2FsK74VJFl2YFN37dw2KoJ1WVb0cAbilor79JdNzOWNXd9ZwdeR1WMtOiSPRgPyrhGLPUHjNCrJzyAGRUXxXl0MX5%2BLEVz4CZijn0I53jOZ1EsKOLOIQEUOlW5NWJWA5rUFKespEVkJGUAS%2B%2B7bIRduaRZtBZtbEpAAWmN%2FgNfzmne1cjTbSp1WTBsi9rbJM3tk6ltCR5n7y9VGppKY2Y6fDU0qbI%2BKZH2DqMR8lmnHeE%2FKUFL7tkjukGqUzbYkhWR4zw%2FHUTQ207C4rWw1pe2TBT54EOnSOXSwtjDKE%2FCgAh0uch78aowr%2F6jxAY6pgGISuqliuffOGRkrt5iBfUdV6j5lBG9SfM3Cd3JphD9zZA3kjOB0OcddHYwPhrFd8edIUyM15c%2FLl1eoSvltQFoq6JTJtM2oz6QtDdFjVRRVm4issPr%2F4vRAFz1A%2BcCmlPBpMsGcA%2BhFxBH3ApKsJJV7EJ%2BiJTmZ6sd%2BOkKJYIpLpoEzh4U%2Bkwmyb4vmqIFQCksHUoG3qkqMWr01v9T2THe3fCk5RBB&X-Amz-Signature=1d4e5f1a8fecd2f366a5f0fd3c672e9947fab820282c8d62a6e97cc81a5ed1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEBNVKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEW%2BkBf%2BVOsyEOoBM7BANfF11otrcmjmC1eBV81u5DVAiAAjTx%2B1eNteTS%2BOmHUYCKQObbnmtSVBN2zkEivK%2FW6ICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1O%2BRpSbN%2F13t5APKtwDFELo80oUjAYO72RPbT8M277U%2FJM4xI%2FgYwpgKzaLGfgsnOLaFbaQ53BAKM4W7UHl9l%2FD2QNelDO0YU%2Fdw6JghjRIBGjGnyyW7gb13hdhdqx9kdbGRHC9oTDLkJbQXnFqjRQXAKRoCyu2Xu9L7v63bfSdm3YNirMmwY8cVnWcvFkvhy1%2BLtR561%2BCgp6tbraYLUW9csIkbPjRlF5ACvZSXTkK3%2FO4K1mHTot1AGZhqQJ1TMM%2FY5wdpMkV05rTtzkQR0%2Bt7uqOiz9Rx9XMDe1jtIGNhS6KntsH3oTMeBN9L%2BLJ7oEjMQ6ysUeUXGNExycKuTHGkkd%2FsK74VJFl2YFN37dw2KoJ1WVb0cAbilor79JdNzOWNXd9ZwdeR1WMtOiSPRgPyrhGLPUHjNCrJzyAGRUXxXl0MX5%2BLEVz4CZijn0I53jOZ1EsKOLOIQEUOlW5NWJWA5rUFKespEVkJGUAS%2B%2B7bIRduaRZtBZtbEpAAWmN%2FgNfzmne1cjTbSp1WTBsi9rbJM3tk6ltCR5n7y9VGppKY2Y6fDU0qbI%2BKZH2DqMR8lmnHeE%2FKUFL7tkjukGqUzbYkhWR4zw%2FHUTQ207C4rWw1pe2TBT54EOnSOXSwtjDKE%2FCgAh0uch78aowr%2F6jxAY6pgGISuqliuffOGRkrt5iBfUdV6j5lBG9SfM3Cd3JphD9zZA3kjOB0OcddHYwPhrFd8edIUyM15c%2FLl1eoSvltQFoq6JTJtM2oz6QtDdFjVRRVm4issPr%2F4vRAFz1A%2BcCmlPBpMsGcA%2BhFxBH3ApKsJJV7EJ%2BiJTmZ6sd%2BOkKJYIpLpoEzh4U%2Bkwmyb4vmqIFQCksHUoG3qkqMWr01v9T2THe3fCk5RBB&X-Amz-Signature=880254b7c20fe585d8b9d4ecd6c4c84354eddac9617248d459db2b72d7ac3c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEBNVKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEW%2BkBf%2BVOsyEOoBM7BANfF11otrcmjmC1eBV81u5DVAiAAjTx%2B1eNteTS%2BOmHUYCKQObbnmtSVBN2zkEivK%2FW6ICqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1O%2BRpSbN%2F13t5APKtwDFELo80oUjAYO72RPbT8M277U%2FJM4xI%2FgYwpgKzaLGfgsnOLaFbaQ53BAKM4W7UHl9l%2FD2QNelDO0YU%2Fdw6JghjRIBGjGnyyW7gb13hdhdqx9kdbGRHC9oTDLkJbQXnFqjRQXAKRoCyu2Xu9L7v63bfSdm3YNirMmwY8cVnWcvFkvhy1%2BLtR561%2BCgp6tbraYLUW9csIkbPjRlF5ACvZSXTkK3%2FO4K1mHTot1AGZhqQJ1TMM%2FY5wdpMkV05rTtzkQR0%2Bt7uqOiz9Rx9XMDe1jtIGNhS6KntsH3oTMeBN9L%2BLJ7oEjMQ6ysUeUXGNExycKuTHGkkd%2FsK74VJFl2YFN37dw2KoJ1WVb0cAbilor79JdNzOWNXd9ZwdeR1WMtOiSPRgPyrhGLPUHjNCrJzyAGRUXxXl0MX5%2BLEVz4CZijn0I53jOZ1EsKOLOIQEUOlW5NWJWA5rUFKespEVkJGUAS%2B%2B7bIRduaRZtBZtbEpAAWmN%2FgNfzmne1cjTbSp1WTBsi9rbJM3tk6ltCR5n7y9VGppKY2Y6fDU0qbI%2BKZH2DqMR8lmnHeE%2FKUFL7tkjukGqUzbYkhWR4zw%2FHUTQ207C4rWw1pe2TBT54EOnSOXSwtjDKE%2FCgAh0uch78aowr%2F6jxAY6pgGISuqliuffOGRkrt5iBfUdV6j5lBG9SfM3Cd3JphD9zZA3kjOB0OcddHYwPhrFd8edIUyM15c%2FLl1eoSvltQFoq6JTJtM2oz6QtDdFjVRRVm4issPr%2F4vRAFz1A%2BcCmlPBpMsGcA%2BhFxBH3ApKsJJV7EJ%2BiJTmZ6sd%2BOkKJYIpLpoEzh4U%2Bkwmyb4vmqIFQCksHUoG3qkqMWr01v9T2THe3fCk5RBB&X-Amz-Signature=4ce8480ac1d8814bdc26e7846242e02c471b0f8d83c94f70391c5197c05508c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
