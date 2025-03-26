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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWLD3RP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb5ejEY9c5KBNbL9e3G7RDSLI0tCvPKQBdWwBW1z0NzAiEA4BOnCgonwqemjGy5IUgF7tq0shi9vbZmWB90mH%2Bqq8cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA6zA0spHk8cyHvi1SrcAzK5qQnIcMEIh9oTvlmL466KjOAVZLg6QbtvuRifkNKnLA7ZAabQxAZ%2F31bN69UDw%2BK3Bd01EzUKudIfcRsrLOAYMkDoIINy0QdyIj5mPA7ydb%2FpR71lZpVRujrPnAIr7RYquyAwqp1NrfBi3JYJu8zoLWsy0wr7l0f4ITnRtzBQGTPy2gN%2BqMdzHNwQQV8uAYS6Ok%2FtOera2Bu1ANqhWPlyzLZXj0K%2BB%2Ffcgbl3M%2BgxstaFwsyk7ybqXK3usNssYZsXG6zxVAWfOHJznPDAqQSnojsZmgZLa%2FmSxN2WeqkeVIwP%2Fxb0%2FJvTpubm%2BGp1UDhB2RIl%2F7ZNzDO5UI5ibi3S98G2JKNa2XZ0zZlZuFoV%2BWsGyntluDcHkqTqs%2FDPrkqbctMCPxVfURl6%2Btcma6u22Ipyz1okc0iU1zRZhXU9GaXfQqug9ko3DqUmL4sXHCPC1dQnVvbGt8YzqV5EGdgcAkznqdTU6SzL1CQ7U547YqbLVVMj2mV1plrFlwWGaMgHVz5u%2FjuBzo5smYTMl%2FdPcPtpJQO%2FWbyj0MnjGO7x0MZhLPoIMIvjnxZKASkXN%2Bj0QXzu3CPBjlCzODIApHtcbtEPtXHgA4ddp1paa9hzvWHB8Ih3ZAn9KX2FMPD5j78GOqUB3SyhQFhs6QoWISiEEYq%2Bv8seQNDUuodzjhDKS9ELf%2FqIRKfsUbQ426FMfzv%2FcQZd18phpOhAo%2B206J49mYSqB3xdAvdyf5kjKg%2Fd%2FgOJBbakxhJqA8Nq81x4DqDNDh7bEZ9gm1kbG5mEVmVFVDyETMvjbughWazGzd%2FWd53IXu4YA2lBXFiydRgIfuPIREVHmEHYvPZbsSu1DmL7h%2Fjed59%2FCnr3&X-Amz-Signature=0f0c0afb3e2da27845eb393f26120a5c43489f05d691897e517fd63aaa974268&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWLD3RP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb5ejEY9c5KBNbL9e3G7RDSLI0tCvPKQBdWwBW1z0NzAiEA4BOnCgonwqemjGy5IUgF7tq0shi9vbZmWB90mH%2Bqq8cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA6zA0spHk8cyHvi1SrcAzK5qQnIcMEIh9oTvlmL466KjOAVZLg6QbtvuRifkNKnLA7ZAabQxAZ%2F31bN69UDw%2BK3Bd01EzUKudIfcRsrLOAYMkDoIINy0QdyIj5mPA7ydb%2FpR71lZpVRujrPnAIr7RYquyAwqp1NrfBi3JYJu8zoLWsy0wr7l0f4ITnRtzBQGTPy2gN%2BqMdzHNwQQV8uAYS6Ok%2FtOera2Bu1ANqhWPlyzLZXj0K%2BB%2Ffcgbl3M%2BgxstaFwsyk7ybqXK3usNssYZsXG6zxVAWfOHJznPDAqQSnojsZmgZLa%2FmSxN2WeqkeVIwP%2Fxb0%2FJvTpubm%2BGp1UDhB2RIl%2F7ZNzDO5UI5ibi3S98G2JKNa2XZ0zZlZuFoV%2BWsGyntluDcHkqTqs%2FDPrkqbctMCPxVfURl6%2Btcma6u22Ipyz1okc0iU1zRZhXU9GaXfQqug9ko3DqUmL4sXHCPC1dQnVvbGt8YzqV5EGdgcAkznqdTU6SzL1CQ7U547YqbLVVMj2mV1plrFlwWGaMgHVz5u%2FjuBzo5smYTMl%2FdPcPtpJQO%2FWbyj0MnjGO7x0MZhLPoIMIvjnxZKASkXN%2Bj0QXzu3CPBjlCzODIApHtcbtEPtXHgA4ddp1paa9hzvWHB8Ih3ZAn9KX2FMPD5j78GOqUB3SyhQFhs6QoWISiEEYq%2Bv8seQNDUuodzjhDKS9ELf%2FqIRKfsUbQ426FMfzv%2FcQZd18phpOhAo%2B206J49mYSqB3xdAvdyf5kjKg%2Fd%2FgOJBbakxhJqA8Nq81x4DqDNDh7bEZ9gm1kbG5mEVmVFVDyETMvjbughWazGzd%2FWd53IXu4YA2lBXFiydRgIfuPIREVHmEHYvPZbsSu1DmL7h%2Fjed59%2FCnr3&X-Amz-Signature=0d243f8a58364726e77a06067c5126ec96ec3bd3e012019bc2f89cf5d104ef46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWLD3RP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb5ejEY9c5KBNbL9e3G7RDSLI0tCvPKQBdWwBW1z0NzAiEA4BOnCgonwqemjGy5IUgF7tq0shi9vbZmWB90mH%2Bqq8cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA6zA0spHk8cyHvi1SrcAzK5qQnIcMEIh9oTvlmL466KjOAVZLg6QbtvuRifkNKnLA7ZAabQxAZ%2F31bN69UDw%2BK3Bd01EzUKudIfcRsrLOAYMkDoIINy0QdyIj5mPA7ydb%2FpR71lZpVRujrPnAIr7RYquyAwqp1NrfBi3JYJu8zoLWsy0wr7l0f4ITnRtzBQGTPy2gN%2BqMdzHNwQQV8uAYS6Ok%2FtOera2Bu1ANqhWPlyzLZXj0K%2BB%2Ffcgbl3M%2BgxstaFwsyk7ybqXK3usNssYZsXG6zxVAWfOHJznPDAqQSnojsZmgZLa%2FmSxN2WeqkeVIwP%2Fxb0%2FJvTpubm%2BGp1UDhB2RIl%2F7ZNzDO5UI5ibi3S98G2JKNa2XZ0zZlZuFoV%2BWsGyntluDcHkqTqs%2FDPrkqbctMCPxVfURl6%2Btcma6u22Ipyz1okc0iU1zRZhXU9GaXfQqug9ko3DqUmL4sXHCPC1dQnVvbGt8YzqV5EGdgcAkznqdTU6SzL1CQ7U547YqbLVVMj2mV1plrFlwWGaMgHVz5u%2FjuBzo5smYTMl%2FdPcPtpJQO%2FWbyj0MnjGO7x0MZhLPoIMIvjnxZKASkXN%2Bj0QXzu3CPBjlCzODIApHtcbtEPtXHgA4ddp1paa9hzvWHB8Ih3ZAn9KX2FMPD5j78GOqUB3SyhQFhs6QoWISiEEYq%2Bv8seQNDUuodzjhDKS9ELf%2FqIRKfsUbQ426FMfzv%2FcQZd18phpOhAo%2B206J49mYSqB3xdAvdyf5kjKg%2Fd%2FgOJBbakxhJqA8Nq81x4DqDNDh7bEZ9gm1kbG5mEVmVFVDyETMvjbughWazGzd%2FWd53IXu4YA2lBXFiydRgIfuPIREVHmEHYvPZbsSu1DmL7h%2Fjed59%2FCnr3&X-Amz-Signature=838f0ce8ce0a065eee3fca571d9883053a0af84c614c8b7948f6a58d15b8625d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
