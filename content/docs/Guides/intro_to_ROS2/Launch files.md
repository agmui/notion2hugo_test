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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN3XPDK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2BStJikWrtbgcI6ucX33a%2BsJ5Lrnrs%2B%2F0SyAWb2j7%2FAiEA8Wr1vPY1749zNSRnxtGE2jqcYj8lgEM4PC0oXV7SNtIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO8yvgmw3fY19NfwircAz5tyiWrng4jm0tpbnNpU4cXn%2BdaFfnUcuZG7qVedK%2BScd8DrEHQw4ZolG0CQqUsM0SOAR4DEd6tuWuCJ3y1gwXjnRpkvNe3jUUNGxy65DcKC3TFIe8oe%2FMWCrD4CrVvsSP6cqP7C9zXetsAU9aErszmc%2F8bNTcC38Dvs1Fmr1oHXKWR64hgookdNkjnUnFyUKi01N6mbEmH4PMWHXtEYsUALDFIOuvQRpdOevNHtCOBVhcgiCYgB1R2YAb3R2nNFdg%2FzoTX6eaDkyDkT2vIsJ0txUATTsApDkIFjYiwZRzkuk0jmBdsJRwdrepghCx2vlEISJdTS2onmUrrIP8lm7ioDsuegTDbMyqduN1d8m2pEKszbq1pY5rc0lScCwPJSAT1AwzX6Nh7TC1%2BIx5qrU7%2F%2FdoAlgxEVzNrNDyZBt5TfS6%2BwUAHP7eTXa4M%2BwVQ54GHmC34QDFeiQv6%2B2NXyP41pIKr74FkBCB9YWXJMLTZCQLie8BwIot0T0Xe%2BKR9fToh0ghn6X8LYpSMxCLR4eq7tSKWFaHOwEC8uGQY7kRb7PmY01BiT%2BDLpr%2B7zBYilc3kmP2ZYiAbLxfVWwuF2vJlQIKx%2FuoDM1phCquS9cBrcLKatJkP8k8sDsMPMOfUvsMGOqUBH0sBwBDW50WEif732v74Y89gMv4HQGhoAAGHDeylzMzM8OozK3mfEEAYUoc8S%2B0gKIPLrr2GLFIFFUSv7SViHirciqI7bqyNYn5l5E15lntPvVE9N6c4rhfiqK76BN%2BalgsT9l%2F7c9YZXoOjMj1VpboUgW4d1QmPLXKdyCBfCMOw2dd0KcthZkTr6P4BX2S0AuCaDoK%2Fxq7B7CFPoM2jfds5qSKe&X-Amz-Signature=e777aa08d081278461d666980ae257745dc7b045a992576cb4056cbdad5dc1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN3XPDK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2BStJikWrtbgcI6ucX33a%2BsJ5Lrnrs%2B%2F0SyAWb2j7%2FAiEA8Wr1vPY1749zNSRnxtGE2jqcYj8lgEM4PC0oXV7SNtIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO8yvgmw3fY19NfwircAz5tyiWrng4jm0tpbnNpU4cXn%2BdaFfnUcuZG7qVedK%2BScd8DrEHQw4ZolG0CQqUsM0SOAR4DEd6tuWuCJ3y1gwXjnRpkvNe3jUUNGxy65DcKC3TFIe8oe%2FMWCrD4CrVvsSP6cqP7C9zXetsAU9aErszmc%2F8bNTcC38Dvs1Fmr1oHXKWR64hgookdNkjnUnFyUKi01N6mbEmH4PMWHXtEYsUALDFIOuvQRpdOevNHtCOBVhcgiCYgB1R2YAb3R2nNFdg%2FzoTX6eaDkyDkT2vIsJ0txUATTsApDkIFjYiwZRzkuk0jmBdsJRwdrepghCx2vlEISJdTS2onmUrrIP8lm7ioDsuegTDbMyqduN1d8m2pEKszbq1pY5rc0lScCwPJSAT1AwzX6Nh7TC1%2BIx5qrU7%2F%2FdoAlgxEVzNrNDyZBt5TfS6%2BwUAHP7eTXa4M%2BwVQ54GHmC34QDFeiQv6%2B2NXyP41pIKr74FkBCB9YWXJMLTZCQLie8BwIot0T0Xe%2BKR9fToh0ghn6X8LYpSMxCLR4eq7tSKWFaHOwEC8uGQY7kRb7PmY01BiT%2BDLpr%2B7zBYilc3kmP2ZYiAbLxfVWwuF2vJlQIKx%2FuoDM1phCquS9cBrcLKatJkP8k8sDsMPMOfUvsMGOqUBH0sBwBDW50WEif732v74Y89gMv4HQGhoAAGHDeylzMzM8OozK3mfEEAYUoc8S%2B0gKIPLrr2GLFIFFUSv7SViHirciqI7bqyNYn5l5E15lntPvVE9N6c4rhfiqK76BN%2BalgsT9l%2F7c9YZXoOjMj1VpboUgW4d1QmPLXKdyCBfCMOw2dd0KcthZkTr6P4BX2S0AuCaDoK%2Fxq7B7CFPoM2jfds5qSKe&X-Amz-Signature=fe63af0fba253cb3d19ef18056d85814094080effa5c1622477eec9df6eb62e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXN3XPDK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2BStJikWrtbgcI6ucX33a%2BsJ5Lrnrs%2B%2F0SyAWb2j7%2FAiEA8Wr1vPY1749zNSRnxtGE2jqcYj8lgEM4PC0oXV7SNtIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO8yvgmw3fY19NfwircAz5tyiWrng4jm0tpbnNpU4cXn%2BdaFfnUcuZG7qVedK%2BScd8DrEHQw4ZolG0CQqUsM0SOAR4DEd6tuWuCJ3y1gwXjnRpkvNe3jUUNGxy65DcKC3TFIe8oe%2FMWCrD4CrVvsSP6cqP7C9zXetsAU9aErszmc%2F8bNTcC38Dvs1Fmr1oHXKWR64hgookdNkjnUnFyUKi01N6mbEmH4PMWHXtEYsUALDFIOuvQRpdOevNHtCOBVhcgiCYgB1R2YAb3R2nNFdg%2FzoTX6eaDkyDkT2vIsJ0txUATTsApDkIFjYiwZRzkuk0jmBdsJRwdrepghCx2vlEISJdTS2onmUrrIP8lm7ioDsuegTDbMyqduN1d8m2pEKszbq1pY5rc0lScCwPJSAT1AwzX6Nh7TC1%2BIx5qrU7%2F%2FdoAlgxEVzNrNDyZBt5TfS6%2BwUAHP7eTXa4M%2BwVQ54GHmC34QDFeiQv6%2B2NXyP41pIKr74FkBCB9YWXJMLTZCQLie8BwIot0T0Xe%2BKR9fToh0ghn6X8LYpSMxCLR4eq7tSKWFaHOwEC8uGQY7kRb7PmY01BiT%2BDLpr%2B7zBYilc3kmP2ZYiAbLxfVWwuF2vJlQIKx%2FuoDM1phCquS9cBrcLKatJkP8k8sDsMPMOfUvsMGOqUBH0sBwBDW50WEif732v74Y89gMv4HQGhoAAGHDeylzMzM8OozK3mfEEAYUoc8S%2B0gKIPLrr2GLFIFFUSv7SViHirciqI7bqyNYn5l5E15lntPvVE9N6c4rhfiqK76BN%2BalgsT9l%2F7c9YZXoOjMj1VpboUgW4d1QmPLXKdyCBfCMOw2dd0KcthZkTr6P4BX2S0AuCaDoK%2Fxq7B7CFPoM2jfds5qSKe&X-Amz-Signature=ef3af0be1ca22bb322caeeb18e5615d1fc4d220ba1308bd401e2e77984289388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
