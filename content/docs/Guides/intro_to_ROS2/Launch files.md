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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2O3U6BN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAr1%2FI0BYBKdiUErPwFvMaIChTL1sJU6Uxgni95%2BEs9UAiEAwR%2FpfKYMxzfbZqarRUgrLVgkHrJwzOR1uQZCZm%2B%2BK18q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHRpObSlfn9kn0cu9ircA3UVTuWXQC2Anr%2FV2BRXcmOP4gGtLsL47MUZmxR7LHJ1d5SmzM44SbPHI9fumuL7zRT2DfhaL7c4O7Bq0SOH9ON5wfv5ZkzTVaj1QSsl6%2FGxAs3sOh8Nc1z38jUCrnaSZ9YZttsNGEoZoamCJxqT1Fr0GXvuSKiSUt%2BqEc%2F6pXtLfrAnr9PrRA3QKgOhh%2FAFwI3336TLAGE9%2BOAuM8ucTq%2BYUQv4Z1ySh7vKOTYvSHv0vlTyapzPWY%2F65U3Q%2FEK%2BcYlVOSd6pyPlPqewebJ8Q2Rh2k1NCeHD0w0fCm11g1r07nhwUEs9XntZSPSiH5KLgLLtCGoy3qcIjoQgsQhcA%2FUadFb27%2F2YwZXyNiAbjOBKDPR2ZVLJ4jM32JkzSa7Qi2YfzOB2bfKhEFmfsvc56HzwuXJG3nyPyZ8JHxQxKO0Q%2BZ2CGtdwBQNKRqAuPrIsji1hpeVl0JWuxrHAm0wQ7zPR4evhro1s%2FteNH4Q%2F%2BAEK%2BLUDehnDPCwpZ8rWabF5H4ztwGX5QuKret4LTSSU%2BkKpzUeeesddD0sLrVwEMwFep5hMOTODqljcEn8q3aLXBE8LhuRgIu0S%2Fi5xTmtVcC0sPQNjiA7arwjNKrg9WvJ9HNyGc0bUqYjRn8ynMICDsr4GOqUBtLfq7P1rWbGTAZM2misP8n1aSoikS1qqa2DBiwGkUpVVFQQDm0%2FnCdVEuxHi6DTCIwQVCrPXOSO6ysJtJY1UmmzxevcPv6hRdzEwu8jgOUwJuOgUctKy57Wm95zVqpKZaPIbQFrOfteVcMIb9yEcfVdyN%2BXokrF0AuzYVr4gHYnLLeM31I%2FK3J4iDi9oqF%2F5qJa4mjcMdLzupviwtfYWH9YWZ0fl&X-Amz-Signature=4b580f6964854a588a83fd2001394fd329506c59a4f681c8b90fffd0884b1b68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2O3U6BN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAr1%2FI0BYBKdiUErPwFvMaIChTL1sJU6Uxgni95%2BEs9UAiEAwR%2FpfKYMxzfbZqarRUgrLVgkHrJwzOR1uQZCZm%2B%2BK18q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHRpObSlfn9kn0cu9ircA3UVTuWXQC2Anr%2FV2BRXcmOP4gGtLsL47MUZmxR7LHJ1d5SmzM44SbPHI9fumuL7zRT2DfhaL7c4O7Bq0SOH9ON5wfv5ZkzTVaj1QSsl6%2FGxAs3sOh8Nc1z38jUCrnaSZ9YZttsNGEoZoamCJxqT1Fr0GXvuSKiSUt%2BqEc%2F6pXtLfrAnr9PrRA3QKgOhh%2FAFwI3336TLAGE9%2BOAuM8ucTq%2BYUQv4Z1ySh7vKOTYvSHv0vlTyapzPWY%2F65U3Q%2FEK%2BcYlVOSd6pyPlPqewebJ8Q2Rh2k1NCeHD0w0fCm11g1r07nhwUEs9XntZSPSiH5KLgLLtCGoy3qcIjoQgsQhcA%2FUadFb27%2F2YwZXyNiAbjOBKDPR2ZVLJ4jM32JkzSa7Qi2YfzOB2bfKhEFmfsvc56HzwuXJG3nyPyZ8JHxQxKO0Q%2BZ2CGtdwBQNKRqAuPrIsji1hpeVl0JWuxrHAm0wQ7zPR4evhro1s%2FteNH4Q%2F%2BAEK%2BLUDehnDPCwpZ8rWabF5H4ztwGX5QuKret4LTSSU%2BkKpzUeeesddD0sLrVwEMwFep5hMOTODqljcEn8q3aLXBE8LhuRgIu0S%2Fi5xTmtVcC0sPQNjiA7arwjNKrg9WvJ9HNyGc0bUqYjRn8ynMICDsr4GOqUBtLfq7P1rWbGTAZM2misP8n1aSoikS1qqa2DBiwGkUpVVFQQDm0%2FnCdVEuxHi6DTCIwQVCrPXOSO6ysJtJY1UmmzxevcPv6hRdzEwu8jgOUwJuOgUctKy57Wm95zVqpKZaPIbQFrOfteVcMIb9yEcfVdyN%2BXokrF0AuzYVr4gHYnLLeM31I%2FK3J4iDi9oqF%2F5qJa4mjcMdLzupviwtfYWH9YWZ0fl&X-Amz-Signature=d366b17ea404664512c8c0a2f0566a0cb02743ac2c49c8c87a4d991e8a6b0dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2O3U6BN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAr1%2FI0BYBKdiUErPwFvMaIChTL1sJU6Uxgni95%2BEs9UAiEAwR%2FpfKYMxzfbZqarRUgrLVgkHrJwzOR1uQZCZm%2B%2BK18q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHRpObSlfn9kn0cu9ircA3UVTuWXQC2Anr%2FV2BRXcmOP4gGtLsL47MUZmxR7LHJ1d5SmzM44SbPHI9fumuL7zRT2DfhaL7c4O7Bq0SOH9ON5wfv5ZkzTVaj1QSsl6%2FGxAs3sOh8Nc1z38jUCrnaSZ9YZttsNGEoZoamCJxqT1Fr0GXvuSKiSUt%2BqEc%2F6pXtLfrAnr9PrRA3QKgOhh%2FAFwI3336TLAGE9%2BOAuM8ucTq%2BYUQv4Z1ySh7vKOTYvSHv0vlTyapzPWY%2F65U3Q%2FEK%2BcYlVOSd6pyPlPqewebJ8Q2Rh2k1NCeHD0w0fCm11g1r07nhwUEs9XntZSPSiH5KLgLLtCGoy3qcIjoQgsQhcA%2FUadFb27%2F2YwZXyNiAbjOBKDPR2ZVLJ4jM32JkzSa7Qi2YfzOB2bfKhEFmfsvc56HzwuXJG3nyPyZ8JHxQxKO0Q%2BZ2CGtdwBQNKRqAuPrIsji1hpeVl0JWuxrHAm0wQ7zPR4evhro1s%2FteNH4Q%2F%2BAEK%2BLUDehnDPCwpZ8rWabF5H4ztwGX5QuKret4LTSSU%2BkKpzUeeesddD0sLrVwEMwFep5hMOTODqljcEn8q3aLXBE8LhuRgIu0S%2Fi5xTmtVcC0sPQNjiA7arwjNKrg9WvJ9HNyGc0bUqYjRn8ynMICDsr4GOqUBtLfq7P1rWbGTAZM2misP8n1aSoikS1qqa2DBiwGkUpVVFQQDm0%2FnCdVEuxHi6DTCIwQVCrPXOSO6ysJtJY1UmmzxevcPv6hRdzEwu8jgOUwJuOgUctKy57Wm95zVqpKZaPIbQFrOfteVcMIb9yEcfVdyN%2BXokrF0AuzYVr4gHYnLLeM31I%2FK3J4iDi9oqF%2F5qJa4mjcMdLzupviwtfYWH9YWZ0fl&X-Amz-Signature=93e3e2df77ae09b9e498049f5ec9df24cd8446f85dab5e101f0734e7a191e08d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
