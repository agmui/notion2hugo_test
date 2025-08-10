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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL4V3GN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z1oY4GDp%2ButKTzstqXYKAkaz1W2%2F%2FpXn7FB1XkOabgIhANRhJkb32fIRfMdvJQ9NIYTd9pjvRjmOyuUtxE2urlZEKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWuOZmwRu33Z2Olo4q3AMVy2XlsYwTGmSAOEZQCm2GtAb26DGyOtOfq8fRTmb5L9OpzCrbaTMnDDhz8lzXR45jK0LXaBhnfJOUV2Z%2BdxG9dHT3ud02Ocd9lTiXFiAyPspvBRQ2B0lgBLwfKVM4VB7VFUelVD4CP4qfg8LmXkpjPCIdOQdzq7tLeEyKkgQteMB83uOSzdq%2BoCzP%2Fu3WTQCS32xOfB8EJTiHhoJbE%2FjBij3pSQY1C2fd1agT5bAYJJAqXOA1oTLIzNDpI02raaYDOquTsdP8rqB6o4EjJzmV%2F2oip3AvkdCj6QahGBJa%2F8wl4URt%2Fsz8Ek8B%2BUgMB8hi6yf%2Fejm9wvbVLEbHtaf46yaSJ46zpPJL2NsAAlgLniMIagCr1iHGIacloeZzUXdtxpLkJUzmSeoSJRo0gqgrJdLQd%2B6uKcbepf4yQ4hrMJO2VoUGeZP%2B%2F%2BoAeLTLt5lFK8pO9W5w7mDnF2xU3K41MOc8rEwhbxN5REsX%2BFDvfz0XaTocdFWA%2BPcJpGuPQ87nZoPLgQ4CHG3%2BZ7DbYCmo%2FchdFNrB4vA2IvQwSvSEJ9P%2FndN44O8%2Fv3XuGp5NYH%2F54mUUEyjglTNN47iL1F243Zqc6ebefqa82LaMEi2tBVAN2k256iMdxnB%2B%2FTDm0eDEBjqkAaFcuRj%2FUxAMh%2FfokggZGfOdBeAdb3F49ROMSKDYaaN8VWtkMgzuMMu3tTcZz1m2kUV%2B3NxohLlip6VyJmU%2B8buqDhLg9zJ9mummE7zuMykeCzulLaxB7hYzfUCkOQAUlMSMfcLQQ%2FyMBeEu2I4J0s04IQ7ynavE9FyJKaHJM8bjjvvAH1igADyMA3CjBuZCtuQeiXf7Yw9EXcpKf0UR87I2G20f&X-Amz-Signature=07fde067c0ba777e6f924d545ca5e373b41a079bf152147db4d9a04badc45fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL4V3GN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z1oY4GDp%2ButKTzstqXYKAkaz1W2%2F%2FpXn7FB1XkOabgIhANRhJkb32fIRfMdvJQ9NIYTd9pjvRjmOyuUtxE2urlZEKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWuOZmwRu33Z2Olo4q3AMVy2XlsYwTGmSAOEZQCm2GtAb26DGyOtOfq8fRTmb5L9OpzCrbaTMnDDhz8lzXR45jK0LXaBhnfJOUV2Z%2BdxG9dHT3ud02Ocd9lTiXFiAyPspvBRQ2B0lgBLwfKVM4VB7VFUelVD4CP4qfg8LmXkpjPCIdOQdzq7tLeEyKkgQteMB83uOSzdq%2BoCzP%2Fu3WTQCS32xOfB8EJTiHhoJbE%2FjBij3pSQY1C2fd1agT5bAYJJAqXOA1oTLIzNDpI02raaYDOquTsdP8rqB6o4EjJzmV%2F2oip3AvkdCj6QahGBJa%2F8wl4URt%2Fsz8Ek8B%2BUgMB8hi6yf%2Fejm9wvbVLEbHtaf46yaSJ46zpPJL2NsAAlgLniMIagCr1iHGIacloeZzUXdtxpLkJUzmSeoSJRo0gqgrJdLQd%2B6uKcbepf4yQ4hrMJO2VoUGeZP%2B%2F%2BoAeLTLt5lFK8pO9W5w7mDnF2xU3K41MOc8rEwhbxN5REsX%2BFDvfz0XaTocdFWA%2BPcJpGuPQ87nZoPLgQ4CHG3%2BZ7DbYCmo%2FchdFNrB4vA2IvQwSvSEJ9P%2FndN44O8%2Fv3XuGp5NYH%2F54mUUEyjglTNN47iL1F243Zqc6ebefqa82LaMEi2tBVAN2k256iMdxnB%2B%2FTDm0eDEBjqkAaFcuRj%2FUxAMh%2FfokggZGfOdBeAdb3F49ROMSKDYaaN8VWtkMgzuMMu3tTcZz1m2kUV%2B3NxohLlip6VyJmU%2B8buqDhLg9zJ9mummE7zuMykeCzulLaxB7hYzfUCkOQAUlMSMfcLQQ%2FyMBeEu2I4J0s04IQ7ynavE9FyJKaHJM8bjjvvAH1igADyMA3CjBuZCtuQeiXf7Yw9EXcpKf0UR87I2G20f&X-Amz-Signature=f66f07f2882f3b690d961587cb2e08b42c8f3b6bafbea43957ef4cb731af7cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAL4V3GN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z1oY4GDp%2ButKTzstqXYKAkaz1W2%2F%2FpXn7FB1XkOabgIhANRhJkb32fIRfMdvJQ9NIYTd9pjvRjmOyuUtxE2urlZEKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWuOZmwRu33Z2Olo4q3AMVy2XlsYwTGmSAOEZQCm2GtAb26DGyOtOfq8fRTmb5L9OpzCrbaTMnDDhz8lzXR45jK0LXaBhnfJOUV2Z%2BdxG9dHT3ud02Ocd9lTiXFiAyPspvBRQ2B0lgBLwfKVM4VB7VFUelVD4CP4qfg8LmXkpjPCIdOQdzq7tLeEyKkgQteMB83uOSzdq%2BoCzP%2Fu3WTQCS32xOfB8EJTiHhoJbE%2FjBij3pSQY1C2fd1agT5bAYJJAqXOA1oTLIzNDpI02raaYDOquTsdP8rqB6o4EjJzmV%2F2oip3AvkdCj6QahGBJa%2F8wl4URt%2Fsz8Ek8B%2BUgMB8hi6yf%2Fejm9wvbVLEbHtaf46yaSJ46zpPJL2NsAAlgLniMIagCr1iHGIacloeZzUXdtxpLkJUzmSeoSJRo0gqgrJdLQd%2B6uKcbepf4yQ4hrMJO2VoUGeZP%2B%2F%2BoAeLTLt5lFK8pO9W5w7mDnF2xU3K41MOc8rEwhbxN5REsX%2BFDvfz0XaTocdFWA%2BPcJpGuPQ87nZoPLgQ4CHG3%2BZ7DbYCmo%2FchdFNrB4vA2IvQwSvSEJ9P%2FndN44O8%2Fv3XuGp5NYH%2F54mUUEyjglTNN47iL1F243Zqc6ebefqa82LaMEi2tBVAN2k256iMdxnB%2B%2FTDm0eDEBjqkAaFcuRj%2FUxAMh%2FfokggZGfOdBeAdb3F49ROMSKDYaaN8VWtkMgzuMMu3tTcZz1m2kUV%2B3NxohLlip6VyJmU%2B8buqDhLg9zJ9mummE7zuMykeCzulLaxB7hYzfUCkOQAUlMSMfcLQQ%2FyMBeEu2I4J0s04IQ7ynavE9FyJKaHJM8bjjvvAH1igADyMA3CjBuZCtuQeiXf7Yw9EXcpKf0UR87I2G20f&X-Amz-Signature=3f6cdf722563a847ee522212dc454f991db1c8efeae393643d4777978df1f727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
