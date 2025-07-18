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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VJ3G7F%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCgh%2B896TTVm9aMTEe7pRMUFUjxdjwVIdJWIIEjw2PoSgIhALxVKDfZslQ5VIvwojBE57umLDL4LLncIPeiLCTAlSUEKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyqrpKF4I%2BuaG8PeQq3AOjaqZWCGakFtvy5Z9z%2BsAxIr2rQSVN2sZu%2FW1pn4KnL0lehsz4pVe0ZhB2PCRqvMN3E72e3VDYa2Im9UPhwycdKnnCTy6t0zEQ0%2Fc4oLfTnd2%2FaELCifH6yhCRxr2w5e1Zaj1OS8tzQ6o0BU9SnsUtiptwEa5nLNWSygYu0JRPc8CgITVPf4X%2FrwC%2BQ48DKmLa912DMf1OtQM6EzQOqRoa6dzCECtjsZu%2BC84sBEiRIbGCz6OwKO4M%2Bw1AAHDgkmlHltFvNJvFIlbREPbTS%2Fnrm7pJJ1J24mPd0nBxi035AxvBFUkjihp%2Brz%2BcFPfpnKezKjasotvKX7O8GWbo3RFxi%2FJXmVNGwYMDSOsRlxDHg6dOg%2F%2BCslVBV2bDwmhgDGsu1fLe3UpDgL6OaPG8yVlLavXyThyv8uxtnrJRmum4VSXE8Clg63tJRTk2UumXwNaiY%2F9eZq0Y%2F%2BN0sFvu1WqBm3GMREiTBVOKPi2tmbWJloPO05sqGBoQ8X%2BZLV0PachoqwEcxxEVxhBuReazbB0RGfFfkUGxyimxZ%2FbGNOJ7IMRwL2IQhs6w%2F8FbEeXGZhQiF3KgHw35hzP55QlZAta%2FLY999HiRwUtTW1z3SxtAr%2Fb9C4PT%2B1YyPups%2FDCW4ebDBjqkAUPb73B8CgYSLWH6wXIwEM3Nl4h4PQd35ABR8zh54o66iRJk60G2Cq%2B9hM6m076OdWYD%2F7hrW%2F3cKvV6XOAhW4I1tQSKeqePR0bXnRxp%2B0CcYq9reACCuZD%2FmT%2FPLa6%2B0myjYYZQOJ%2B7uq7GvcrL%2BV1DkyfSlvVQ9mgm%2F6aENi8cNmJqX4QtI5JpCcs%2FlqPpK1vkYCJriPWbiqIxVwiNBoPZlKat&X-Amz-Signature=36fe4c232a126daaa2240eec602f5f29bcfbd6a66352ca824aebf072e3c90788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VJ3G7F%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCgh%2B896TTVm9aMTEe7pRMUFUjxdjwVIdJWIIEjw2PoSgIhALxVKDfZslQ5VIvwojBE57umLDL4LLncIPeiLCTAlSUEKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyqrpKF4I%2BuaG8PeQq3AOjaqZWCGakFtvy5Z9z%2BsAxIr2rQSVN2sZu%2FW1pn4KnL0lehsz4pVe0ZhB2PCRqvMN3E72e3VDYa2Im9UPhwycdKnnCTy6t0zEQ0%2Fc4oLfTnd2%2FaELCifH6yhCRxr2w5e1Zaj1OS8tzQ6o0BU9SnsUtiptwEa5nLNWSygYu0JRPc8CgITVPf4X%2FrwC%2BQ48DKmLa912DMf1OtQM6EzQOqRoa6dzCECtjsZu%2BC84sBEiRIbGCz6OwKO4M%2Bw1AAHDgkmlHltFvNJvFIlbREPbTS%2Fnrm7pJJ1J24mPd0nBxi035AxvBFUkjihp%2Brz%2BcFPfpnKezKjasotvKX7O8GWbo3RFxi%2FJXmVNGwYMDSOsRlxDHg6dOg%2F%2BCslVBV2bDwmhgDGsu1fLe3UpDgL6OaPG8yVlLavXyThyv8uxtnrJRmum4VSXE8Clg63tJRTk2UumXwNaiY%2F9eZq0Y%2F%2BN0sFvu1WqBm3GMREiTBVOKPi2tmbWJloPO05sqGBoQ8X%2BZLV0PachoqwEcxxEVxhBuReazbB0RGfFfkUGxyimxZ%2FbGNOJ7IMRwL2IQhs6w%2F8FbEeXGZhQiF3KgHw35hzP55QlZAta%2FLY999HiRwUtTW1z3SxtAr%2Fb9C4PT%2B1YyPups%2FDCW4ebDBjqkAUPb73B8CgYSLWH6wXIwEM3Nl4h4PQd35ABR8zh54o66iRJk60G2Cq%2B9hM6m076OdWYD%2F7hrW%2F3cKvV6XOAhW4I1tQSKeqePR0bXnRxp%2B0CcYq9reACCuZD%2FmT%2FPLa6%2B0myjYYZQOJ%2B7uq7GvcrL%2BV1DkyfSlvVQ9mgm%2F6aENi8cNmJqX4QtI5JpCcs%2FlqPpK1vkYCJriPWbiqIxVwiNBoPZlKat&X-Amz-Signature=81af931b1009fd87debc68d896de7ba1b610a6d165a38ed4449c73c85b9b576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VJ3G7F%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCgh%2B896TTVm9aMTEe7pRMUFUjxdjwVIdJWIIEjw2PoSgIhALxVKDfZslQ5VIvwojBE57umLDL4LLncIPeiLCTAlSUEKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyqrpKF4I%2BuaG8PeQq3AOjaqZWCGakFtvy5Z9z%2BsAxIr2rQSVN2sZu%2FW1pn4KnL0lehsz4pVe0ZhB2PCRqvMN3E72e3VDYa2Im9UPhwycdKnnCTy6t0zEQ0%2Fc4oLfTnd2%2FaELCifH6yhCRxr2w5e1Zaj1OS8tzQ6o0BU9SnsUtiptwEa5nLNWSygYu0JRPc8CgITVPf4X%2FrwC%2BQ48DKmLa912DMf1OtQM6EzQOqRoa6dzCECtjsZu%2BC84sBEiRIbGCz6OwKO4M%2Bw1AAHDgkmlHltFvNJvFIlbREPbTS%2Fnrm7pJJ1J24mPd0nBxi035AxvBFUkjihp%2Brz%2BcFPfpnKezKjasotvKX7O8GWbo3RFxi%2FJXmVNGwYMDSOsRlxDHg6dOg%2F%2BCslVBV2bDwmhgDGsu1fLe3UpDgL6OaPG8yVlLavXyThyv8uxtnrJRmum4VSXE8Clg63tJRTk2UumXwNaiY%2F9eZq0Y%2F%2BN0sFvu1WqBm3GMREiTBVOKPi2tmbWJloPO05sqGBoQ8X%2BZLV0PachoqwEcxxEVxhBuReazbB0RGfFfkUGxyimxZ%2FbGNOJ7IMRwL2IQhs6w%2F8FbEeXGZhQiF3KgHw35hzP55QlZAta%2FLY999HiRwUtTW1z3SxtAr%2Fb9C4PT%2B1YyPups%2FDCW4ebDBjqkAUPb73B8CgYSLWH6wXIwEM3Nl4h4PQd35ABR8zh54o66iRJk60G2Cq%2B9hM6m076OdWYD%2F7hrW%2F3cKvV6XOAhW4I1tQSKeqePR0bXnRxp%2B0CcYq9reACCuZD%2FmT%2FPLa6%2B0myjYYZQOJ%2B7uq7GvcrL%2BV1DkyfSlvVQ9mgm%2F6aENi8cNmJqX4QtI5JpCcs%2FlqPpK1vkYCJriPWbiqIxVwiNBoPZlKat&X-Amz-Signature=9a38fb67c6bebff960a96df126c10ad69a83dcf86c30b844dca7244752a758aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
