---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAZP5PX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4cE8xfJx9Xw3vwbMNFRtnU0eOQ%2BynvjqCAalBcvYztwIgYgocU9PkSxmhLQgEB35ZprEscc%2ByICtu5WLxviev1h0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEGk80uqQ2XlvfSSrcA1XGdEqWY%2Fra2PAorfQbL6CPJWtsF%2F88g3%2BiS6JbglD7z7K0dOm3CiaM3fwZbbHiosxRx7IVxO9rwokWjXGAiboAa01pFyZU4fCzvw3Js2BJZPiywIpb9UNVVD3TJjehehygm%2Fnds9RD5c9ohHhLjKeqs8cqFHCV7yekAVbIk272dxNTG7aWB4YyyskiSUSJSXtVwOTEL3LBjVo342ULhuUM5%2B7JNjpRHBd0tmcneHGmEbhgscIB09Rhy%2BvYXaSdcbENGSBfYVOlprhIttyK2fLWDSzD9gWWh8cj7vAVlRV40TjWnPdwHpQFj%2FZYFlMmxq9i84YwpRD%2Bg%2FvKHExnk0R%2B1YorTiWVs3tFQFb4D%2BzFOzKoOlScL6q%2BPSlyOFtEhn6p3kizm0uexBvymxL7hK0kdyGjZmEqC6y9SrirfAbe9PAFKe%2B8E01TnY3LwCS%2FN8z135MAIXz4RCkVpVS2H5msfxSJorEr%2Boesa%2BmQ%2BcKfsSaaCVScBthWBkRSygY0s95jSepu9v1nsDtLB0gja7QFNLphY3%2FKHF3yPPbzYfDmurH%2Bbygf18cRoEalQgtXX77g%2B0xu2Cx2DGGeiX3vf5WS3HWglB2B5Lgz3zTiebFQZulvHZJ1svWjsLrTMPKd%2FLwGOqUBy6rc7gjm2NRcEIZoC4zJxTWbi8hupqVAZJueTXsjGvdWbfkF3nIUOJEDUlnh3yZUNXzsT2hIyN%2FpDPSbUkWtP0h8UgTDhuSpL3Rft1%2Fq9COeCIBOKLZ4shJ%2FPNxxTpUtsMoWj%2Fwok0vwuXNx3978%2BJp1qGsNtVkITaVaNbYEf1UTt6%2FcijGbuqv8IfvqvIoCHAB%2F7Ne9SFCOikIHBxlTnXdY5AqA&X-Amz-Signature=6122e9bfc7b14aa297078827003ea773ca879d62c2586618b9b01ee7b4518360&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAZP5PX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4cE8xfJx9Xw3vwbMNFRtnU0eOQ%2BynvjqCAalBcvYztwIgYgocU9PkSxmhLQgEB35ZprEscc%2ByICtu5WLxviev1h0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEGk80uqQ2XlvfSSrcA1XGdEqWY%2Fra2PAorfQbL6CPJWtsF%2F88g3%2BiS6JbglD7z7K0dOm3CiaM3fwZbbHiosxRx7IVxO9rwokWjXGAiboAa01pFyZU4fCzvw3Js2BJZPiywIpb9UNVVD3TJjehehygm%2Fnds9RD5c9ohHhLjKeqs8cqFHCV7yekAVbIk272dxNTG7aWB4YyyskiSUSJSXtVwOTEL3LBjVo342ULhuUM5%2B7JNjpRHBd0tmcneHGmEbhgscIB09Rhy%2BvYXaSdcbENGSBfYVOlprhIttyK2fLWDSzD9gWWh8cj7vAVlRV40TjWnPdwHpQFj%2FZYFlMmxq9i84YwpRD%2Bg%2FvKHExnk0R%2B1YorTiWVs3tFQFb4D%2BzFOzKoOlScL6q%2BPSlyOFtEhn6p3kizm0uexBvymxL7hK0kdyGjZmEqC6y9SrirfAbe9PAFKe%2B8E01TnY3LwCS%2FN8z135MAIXz4RCkVpVS2H5msfxSJorEr%2Boesa%2BmQ%2BcKfsSaaCVScBthWBkRSygY0s95jSepu9v1nsDtLB0gja7QFNLphY3%2FKHF3yPPbzYfDmurH%2Bbygf18cRoEalQgtXX77g%2B0xu2Cx2DGGeiX3vf5WS3HWglB2B5Lgz3zTiebFQZulvHZJ1svWjsLrTMPKd%2FLwGOqUBy6rc7gjm2NRcEIZoC4zJxTWbi8hupqVAZJueTXsjGvdWbfkF3nIUOJEDUlnh3yZUNXzsT2hIyN%2FpDPSbUkWtP0h8UgTDhuSpL3Rft1%2Fq9COeCIBOKLZ4shJ%2FPNxxTpUtsMoWj%2Fwok0vwuXNx3978%2BJp1qGsNtVkITaVaNbYEf1UTt6%2FcijGbuqv8IfvqvIoCHAB%2F7Ne9SFCOikIHBxlTnXdY5AqA&X-Amz-Signature=8ad964ffb49c2bd1b00176825d19da39966cc739bebd0874e51453beb52200ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAZP5PX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4cE8xfJx9Xw3vwbMNFRtnU0eOQ%2BynvjqCAalBcvYztwIgYgocU9PkSxmhLQgEB35ZprEscc%2ByICtu5WLxviev1h0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEGk80uqQ2XlvfSSrcA1XGdEqWY%2Fra2PAorfQbL6CPJWtsF%2F88g3%2BiS6JbglD7z7K0dOm3CiaM3fwZbbHiosxRx7IVxO9rwokWjXGAiboAa01pFyZU4fCzvw3Js2BJZPiywIpb9UNVVD3TJjehehygm%2Fnds9RD5c9ohHhLjKeqs8cqFHCV7yekAVbIk272dxNTG7aWB4YyyskiSUSJSXtVwOTEL3LBjVo342ULhuUM5%2B7JNjpRHBd0tmcneHGmEbhgscIB09Rhy%2BvYXaSdcbENGSBfYVOlprhIttyK2fLWDSzD9gWWh8cj7vAVlRV40TjWnPdwHpQFj%2FZYFlMmxq9i84YwpRD%2Bg%2FvKHExnk0R%2B1YorTiWVs3tFQFb4D%2BzFOzKoOlScL6q%2BPSlyOFtEhn6p3kizm0uexBvymxL7hK0kdyGjZmEqC6y9SrirfAbe9PAFKe%2B8E01TnY3LwCS%2FN8z135MAIXz4RCkVpVS2H5msfxSJorEr%2Boesa%2BmQ%2BcKfsSaaCVScBthWBkRSygY0s95jSepu9v1nsDtLB0gja7QFNLphY3%2FKHF3yPPbzYfDmurH%2Bbygf18cRoEalQgtXX77g%2B0xu2Cx2DGGeiX3vf5WS3HWglB2B5Lgz3zTiebFQZulvHZJ1svWjsLrTMPKd%2FLwGOqUBy6rc7gjm2NRcEIZoC4zJxTWbi8hupqVAZJueTXsjGvdWbfkF3nIUOJEDUlnh3yZUNXzsT2hIyN%2FpDPSbUkWtP0h8UgTDhuSpL3Rft1%2Fq9COeCIBOKLZ4shJ%2FPNxxTpUtsMoWj%2Fwok0vwuXNx3978%2BJp1qGsNtVkITaVaNbYEf1UTt6%2FcijGbuqv8IfvqvIoCHAB%2F7Ne9SFCOikIHBxlTnXdY5AqA&X-Amz-Signature=3cc6a645e2da5140ab934ef5115f5d86c8c5655ab4d0848c83b80bdb5dd3a3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
