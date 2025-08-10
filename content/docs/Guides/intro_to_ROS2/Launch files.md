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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBZCLCR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkvUAe27PNO0PiM1BKbWFKGYMbSFcdejUuJe6RIMyIjwIgP3X0nImuRZZ2uUjahzowe03T9kyl9D3F5N1y8ppYAkQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO1TsW0nUldkfb9qyrcAw1VSAFBAGXrfhqyDhdmY8UoJ9QDxKkiQKYpru%2FCFpek9XlHnvCykT%2Fd8G4jLWrXk9A%2FJbRmtxWg5ie0IxUJHdj5ZFM1sjb9PCOFGKC5l4PjX62pWXj1w3TCoSxusOniCd4aEqtUc9OOJ3n0MFw0vkUArYNSL42UKwyHQDv3YhXvK6qRf1zDq7wHqIkkSkouznbhLpRjw68pr%2BL8590%2Fr%2BzyHSWGp96U8I07X0CBzhItGp9xdpwUaqhjzQ6rRjXFiWsXfbMvDWrKo9prNfAANEqe5ud84O4QvJuOgksfW37iTZ1dVSu0wJs0Unhk6BwSLlUI0HYKU559rYloLdOpC4z8Pn%2Fbmr4VbzwT9UV%2BUXVcmAdXOewxUHNCoFAbyLaSGk5zXQDiQUmj0F3bFf8N7QSGhhgeqpz2vrZdY13Sx1ZwHEB2NuPxRSzCW%2B01tbxpD49ncgiT6Xg2HCLwDGnvpnlzFK6KOHjCzdWVVtlvFHKjDmK80GOt2JbYxrDKWKbYGEm9Kzd%2BgA3jh%2FmOhWbkEaTdpJ4bokDmg81y2bWsyZJk31tHA9nD7NycVON6jpB1gjUzXWg5of%2BQYG2s672YZmL6fx32xS8y3QfknZ0SphnT1zccyKK5yRVtPGnRML6648QGOqUBlWQhizZ%2BPnju45BlaQbXMk%2B%2Fw6a2FnBVxqWPGqq5TEw3N4UyJbwMga9c1xB%2BV6ULxIxnj3%2Fy7R7GAVGLEkDAxpXhmW7pSOPUlqIukQc6mJJIunqa2Cv3Njbic8q%2FV4I%2FlvVpEuApstz%2F7WyTl2dnJpRV5%2FD2etaxbDmbdV%2FTHXHM8mZaukLyVJmm0jtINvH6LHGeFt%2BpHfiDoLsztQmxn6JpKeQC&X-Amz-Signature=baa248985efbf04d006d6338e5313ed7c580536a6685ce89d871884ea4248000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBZCLCR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkvUAe27PNO0PiM1BKbWFKGYMbSFcdejUuJe6RIMyIjwIgP3X0nImuRZZ2uUjahzowe03T9kyl9D3F5N1y8ppYAkQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO1TsW0nUldkfb9qyrcAw1VSAFBAGXrfhqyDhdmY8UoJ9QDxKkiQKYpru%2FCFpek9XlHnvCykT%2Fd8G4jLWrXk9A%2FJbRmtxWg5ie0IxUJHdj5ZFM1sjb9PCOFGKC5l4PjX62pWXj1w3TCoSxusOniCd4aEqtUc9OOJ3n0MFw0vkUArYNSL42UKwyHQDv3YhXvK6qRf1zDq7wHqIkkSkouznbhLpRjw68pr%2BL8590%2Fr%2BzyHSWGp96U8I07X0CBzhItGp9xdpwUaqhjzQ6rRjXFiWsXfbMvDWrKo9prNfAANEqe5ud84O4QvJuOgksfW37iTZ1dVSu0wJs0Unhk6BwSLlUI0HYKU559rYloLdOpC4z8Pn%2Fbmr4VbzwT9UV%2BUXVcmAdXOewxUHNCoFAbyLaSGk5zXQDiQUmj0F3bFf8N7QSGhhgeqpz2vrZdY13Sx1ZwHEB2NuPxRSzCW%2B01tbxpD49ncgiT6Xg2HCLwDGnvpnlzFK6KOHjCzdWVVtlvFHKjDmK80GOt2JbYxrDKWKbYGEm9Kzd%2BgA3jh%2FmOhWbkEaTdpJ4bokDmg81y2bWsyZJk31tHA9nD7NycVON6jpB1gjUzXWg5of%2BQYG2s672YZmL6fx32xS8y3QfknZ0SphnT1zccyKK5yRVtPGnRML6648QGOqUBlWQhizZ%2BPnju45BlaQbXMk%2B%2Fw6a2FnBVxqWPGqq5TEw3N4UyJbwMga9c1xB%2BV6ULxIxnj3%2Fy7R7GAVGLEkDAxpXhmW7pSOPUlqIukQc6mJJIunqa2Cv3Njbic8q%2FV4I%2FlvVpEuApstz%2F7WyTl2dnJpRV5%2FD2etaxbDmbdV%2FTHXHM8mZaukLyVJmm0jtINvH6LHGeFt%2BpHfiDoLsztQmxn6JpKeQC&X-Amz-Signature=f7b5f83355263e4f575360bd812c9e19b1f17db6d11121fd3558f10a87597550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBZCLCR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkvUAe27PNO0PiM1BKbWFKGYMbSFcdejUuJe6RIMyIjwIgP3X0nImuRZZ2uUjahzowe03T9kyl9D3F5N1y8ppYAkQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO1TsW0nUldkfb9qyrcAw1VSAFBAGXrfhqyDhdmY8UoJ9QDxKkiQKYpru%2FCFpek9XlHnvCykT%2Fd8G4jLWrXk9A%2FJbRmtxWg5ie0IxUJHdj5ZFM1sjb9PCOFGKC5l4PjX62pWXj1w3TCoSxusOniCd4aEqtUc9OOJ3n0MFw0vkUArYNSL42UKwyHQDv3YhXvK6qRf1zDq7wHqIkkSkouznbhLpRjw68pr%2BL8590%2Fr%2BzyHSWGp96U8I07X0CBzhItGp9xdpwUaqhjzQ6rRjXFiWsXfbMvDWrKo9prNfAANEqe5ud84O4QvJuOgksfW37iTZ1dVSu0wJs0Unhk6BwSLlUI0HYKU559rYloLdOpC4z8Pn%2Fbmr4VbzwT9UV%2BUXVcmAdXOewxUHNCoFAbyLaSGk5zXQDiQUmj0F3bFf8N7QSGhhgeqpz2vrZdY13Sx1ZwHEB2NuPxRSzCW%2B01tbxpD49ncgiT6Xg2HCLwDGnvpnlzFK6KOHjCzdWVVtlvFHKjDmK80GOt2JbYxrDKWKbYGEm9Kzd%2BgA3jh%2FmOhWbkEaTdpJ4bokDmg81y2bWsyZJk31tHA9nD7NycVON6jpB1gjUzXWg5of%2BQYG2s672YZmL6fx32xS8y3QfknZ0SphnT1zccyKK5yRVtPGnRML6648QGOqUBlWQhizZ%2BPnju45BlaQbXMk%2B%2Fw6a2FnBVxqWPGqq5TEw3N4UyJbwMga9c1xB%2BV6ULxIxnj3%2Fy7R7GAVGLEkDAxpXhmW7pSOPUlqIukQc6mJJIunqa2Cv3Njbic8q%2FV4I%2FlvVpEuApstz%2F7WyTl2dnJpRV5%2FD2etaxbDmbdV%2FTHXHM8mZaukLyVJmm0jtINvH6LHGeFt%2BpHfiDoLsztQmxn6JpKeQC&X-Amz-Signature=562be119f299ff4c6a4324aaaa6aaf4bf0daae6c514b7b0fa9314152c57edcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
