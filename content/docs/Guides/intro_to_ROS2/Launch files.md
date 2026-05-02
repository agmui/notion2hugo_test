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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLT3TGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBtuTjFFVF8j5QNM6t1HByj8GR33njQyzL7uPe3FOLtgIgaccQR3uFU%2Fk%2BbSwJT1j%2FW4IyNtALkzGGZRgp8NKJvI4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLrAjGfTbpA2xRodEyrcA%2B5QUeGnI%2BVT3arkABWE972TVGudTp5i%2FVzWRnQVYCMS6jaweVhCVh4mEHU9mYC4THeocs3HpTIyMxRKocQx65rIU8gYx%2BwSOYkI4yIUXTQFnftqo5bn%2BeMKpg3Vnx9rVBVd3o5BQ4M%2BikxX%2BfSyfkXicnXidiyxZuZMbWOxcA6r4xNF0qA1qZf5b3pBGFcRbYxITmnqEj4CWByY8NAHV0Xq2PIVIe144Q0Kr0mDWqnB6Rd3K%2FZKoesnYvXuA2IoBTj5ebKamcIow729YSEZPotPlxBWOnU1zEvbVq1HEa4vpFjPhHdTRWFfsXQ60wfXqujLUIqFI7E%2FrzxAHgXIm7fPJBRWhY%2F2brj28s5%2FyC4TUnN9UGchktNRsunOzZGuqIAaAws2AHH8wzg27zqHSCkMZOGRdAvl1%2FDxhiLEKUi2sch657Cof2JJ9HwC1Qe7pPZZx81wL7SAn%2B39bhXILlBqfXSLL78icrx5JpSPykE%2BXUZggjtDPltIQYQJ9D7bToA4mrvEJ9yJB74boHuMVD08lsrNjqmtiis6NuQSJoACdNWP%2FDziGmFxYyIGvB%2B1OSqdHUcXiq03Ovkti0YkoukKYFItBP0erFtmjggGaAvT%2BMIKm7ZMFnl4biqAMMbJ1c8GOqUBdJNkVZpQckpnRPMfYweFnKjFV1tYw8XhBArZkKcIxbrsG3FD71s6fTCYGkQvmTS1VZ4BXyYOCOIYNaclDXdnc6is%2FkSWyucs%2BYE5eDsmuJ4iozulW%2BeE3vl6ljUo49xOV1vk4%2BzcQDqV7qBEAsPQuuoMiCjr0PWimtiCr%2F4V3sAkjmbnNMWDHIsCjhR3Nf1K5khmNBeP12%2BJRRb2EiY3fj0pYRZi&X-Amz-Signature=3735f45dd4f409f5ebc9011eb19f119f4faa88ca4cf6a4d251a3ba286d89ed9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLT3TGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBtuTjFFVF8j5QNM6t1HByj8GR33njQyzL7uPe3FOLtgIgaccQR3uFU%2Fk%2BbSwJT1j%2FW4IyNtALkzGGZRgp8NKJvI4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLrAjGfTbpA2xRodEyrcA%2B5QUeGnI%2BVT3arkABWE972TVGudTp5i%2FVzWRnQVYCMS6jaweVhCVh4mEHU9mYC4THeocs3HpTIyMxRKocQx65rIU8gYx%2BwSOYkI4yIUXTQFnftqo5bn%2BeMKpg3Vnx9rVBVd3o5BQ4M%2BikxX%2BfSyfkXicnXidiyxZuZMbWOxcA6r4xNF0qA1qZf5b3pBGFcRbYxITmnqEj4CWByY8NAHV0Xq2PIVIe144Q0Kr0mDWqnB6Rd3K%2FZKoesnYvXuA2IoBTj5ebKamcIow729YSEZPotPlxBWOnU1zEvbVq1HEa4vpFjPhHdTRWFfsXQ60wfXqujLUIqFI7E%2FrzxAHgXIm7fPJBRWhY%2F2brj28s5%2FyC4TUnN9UGchktNRsunOzZGuqIAaAws2AHH8wzg27zqHSCkMZOGRdAvl1%2FDxhiLEKUi2sch657Cof2JJ9HwC1Qe7pPZZx81wL7SAn%2B39bhXILlBqfXSLL78icrx5JpSPykE%2BXUZggjtDPltIQYQJ9D7bToA4mrvEJ9yJB74boHuMVD08lsrNjqmtiis6NuQSJoACdNWP%2FDziGmFxYyIGvB%2B1OSqdHUcXiq03Ovkti0YkoukKYFItBP0erFtmjggGaAvT%2BMIKm7ZMFnl4biqAMMbJ1c8GOqUBdJNkVZpQckpnRPMfYweFnKjFV1tYw8XhBArZkKcIxbrsG3FD71s6fTCYGkQvmTS1VZ4BXyYOCOIYNaclDXdnc6is%2FkSWyucs%2BYE5eDsmuJ4iozulW%2BeE3vl6ljUo49xOV1vk4%2BzcQDqV7qBEAsPQuuoMiCjr0PWimtiCr%2F4V3sAkjmbnNMWDHIsCjhR3Nf1K5khmNBeP12%2BJRRb2EiY3fj0pYRZi&X-Amz-Signature=ec56f41f06d7e87fdb04bd2ec451482c7bcb1ab8ee8d69c779ca6e434302fd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLT3TGJ%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCBtuTjFFVF8j5QNM6t1HByj8GR33njQyzL7uPe3FOLtgIgaccQR3uFU%2Fk%2BbSwJT1j%2FW4IyNtALkzGGZRgp8NKJvI4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLrAjGfTbpA2xRodEyrcA%2B5QUeGnI%2BVT3arkABWE972TVGudTp5i%2FVzWRnQVYCMS6jaweVhCVh4mEHU9mYC4THeocs3HpTIyMxRKocQx65rIU8gYx%2BwSOYkI4yIUXTQFnftqo5bn%2BeMKpg3Vnx9rVBVd3o5BQ4M%2BikxX%2BfSyfkXicnXidiyxZuZMbWOxcA6r4xNF0qA1qZf5b3pBGFcRbYxITmnqEj4CWByY8NAHV0Xq2PIVIe144Q0Kr0mDWqnB6Rd3K%2FZKoesnYvXuA2IoBTj5ebKamcIow729YSEZPotPlxBWOnU1zEvbVq1HEa4vpFjPhHdTRWFfsXQ60wfXqujLUIqFI7E%2FrzxAHgXIm7fPJBRWhY%2F2brj28s5%2FyC4TUnN9UGchktNRsunOzZGuqIAaAws2AHH8wzg27zqHSCkMZOGRdAvl1%2FDxhiLEKUi2sch657Cof2JJ9HwC1Qe7pPZZx81wL7SAn%2B39bhXILlBqfXSLL78icrx5JpSPykE%2BXUZggjtDPltIQYQJ9D7bToA4mrvEJ9yJB74boHuMVD08lsrNjqmtiis6NuQSJoACdNWP%2FDziGmFxYyIGvB%2B1OSqdHUcXiq03Ovkti0YkoukKYFItBP0erFtmjggGaAvT%2BMIKm7ZMFnl4biqAMMbJ1c8GOqUBdJNkVZpQckpnRPMfYweFnKjFV1tYw8XhBArZkKcIxbrsG3FD71s6fTCYGkQvmTS1VZ4BXyYOCOIYNaclDXdnc6is%2FkSWyucs%2BYE5eDsmuJ4iozulW%2BeE3vl6ljUo49xOV1vk4%2BzcQDqV7qBEAsPQuuoMiCjr0PWimtiCr%2F4V3sAkjmbnNMWDHIsCjhR3Nf1K5khmNBeP12%2BJRRb2EiY3fj0pYRZi&X-Amz-Signature=fbf455a6a5dbc9271740b2534b4ff36515741f86a20866f81f97b3ddcd1f88a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
