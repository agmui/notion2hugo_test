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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICQCYMX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeJyASuJCoLxMRM3Cl%2FN4E89f7aWREpUseg6DF2c7jrAIgIJRK%2FfmoAA%2Fh1RkpJ32pwai4Ob3q21eF245pu4Omutsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMYSNVAmlFSmykdC2yrcA7ft1l%2B0EmjcvFZ90N2ycNBQZpNOkEWXNU6il63K2JFr9%2F0koSBNGGZVJTJwmSxWsOoZWas46PFd2z7MtJzBinBf8p8ZO2srArm2P9EeI8RJ9ToPqxq%2FZZhXOHDW3uzDtSRG9cih1EfG9p7DYt9Wy1v0t08SBYkir7VdUbpqtqwV9NPObErKZYHa1zliBnT5%2Fjr2nA4UtCB5zoGSVQcnfMueStz37GipnqcHWD7EDX6kduCpkad9LjIcbSW0PCG0PDxsm9j%2FGpiMO0W9XJFz%2FN05wTL2Paleff9GhTccrLmOcJSIH0Sfe3ee1idGTgXVWyydI2jspIsvlkukHfrxK%2BMV%2B8zzuKUyHH4b40gfu5%2BXXNfusl4rSPDbtxS1be1qb4Vf9WqFBvoSkXMeGTfWiY8TnibRo8wl%2Fit70uIvnByeDynj3iG4yX5I8FtS2VQR8OHEL73c9qxxdTW%2BwodAeVxSaaTdOcM1kbilO68iPjlBrU9TfDqHuqoQog4bnAS2DaLuOaXdV8jvtcx%2FdDLEM5tUk99GYyFeDgOMr00s0Qt1jkCEQa6h2LOoXmJtby6lSV%2BodsgJ1vFqbKOBhlaNhguAxYOtRf2Y%2BKRbMIy%2BwbYaaSJd5eWPLWZ%2F23U6MKa88r0GOqUBCn8eF3gS7O0WsW8GmOJSteMFLLrW3P%2FBSE2NWEVOpR7O3KZbuez7cw2EA1SDarH%2BvQo4Q5hqCeteWAZJyGzBjnLnwC3en%2FjvimitvuZ%2BMqcZU0ulmiqlDQA%2FUuFIeR6QqCUg1A%2BrOOkwyC46oI56scCZESX%2B21wD4%2FvKKger6ORIOKAHx6Ek%2FLism%2BNE9BCXwZKneP4NLnSEQyhN%2Bsir5%2F1aIeyN&X-Amz-Signature=31e58cd532b7a84fa687c2026378a0df6d444dade759fe88f1c6aae45201dee0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICQCYMX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeJyASuJCoLxMRM3Cl%2FN4E89f7aWREpUseg6DF2c7jrAIgIJRK%2FfmoAA%2Fh1RkpJ32pwai4Ob3q21eF245pu4Omutsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMYSNVAmlFSmykdC2yrcA7ft1l%2B0EmjcvFZ90N2ycNBQZpNOkEWXNU6il63K2JFr9%2F0koSBNGGZVJTJwmSxWsOoZWas46PFd2z7MtJzBinBf8p8ZO2srArm2P9EeI8RJ9ToPqxq%2FZZhXOHDW3uzDtSRG9cih1EfG9p7DYt9Wy1v0t08SBYkir7VdUbpqtqwV9NPObErKZYHa1zliBnT5%2Fjr2nA4UtCB5zoGSVQcnfMueStz37GipnqcHWD7EDX6kduCpkad9LjIcbSW0PCG0PDxsm9j%2FGpiMO0W9XJFz%2FN05wTL2Paleff9GhTccrLmOcJSIH0Sfe3ee1idGTgXVWyydI2jspIsvlkukHfrxK%2BMV%2B8zzuKUyHH4b40gfu5%2BXXNfusl4rSPDbtxS1be1qb4Vf9WqFBvoSkXMeGTfWiY8TnibRo8wl%2Fit70uIvnByeDynj3iG4yX5I8FtS2VQR8OHEL73c9qxxdTW%2BwodAeVxSaaTdOcM1kbilO68iPjlBrU9TfDqHuqoQog4bnAS2DaLuOaXdV8jvtcx%2FdDLEM5tUk99GYyFeDgOMr00s0Qt1jkCEQa6h2LOoXmJtby6lSV%2BodsgJ1vFqbKOBhlaNhguAxYOtRf2Y%2BKRbMIy%2BwbYaaSJd5eWPLWZ%2F23U6MKa88r0GOqUBCn8eF3gS7O0WsW8GmOJSteMFLLrW3P%2FBSE2NWEVOpR7O3KZbuez7cw2EA1SDarH%2BvQo4Q5hqCeteWAZJyGzBjnLnwC3en%2FjvimitvuZ%2BMqcZU0ulmiqlDQA%2FUuFIeR6QqCUg1A%2BrOOkwyC46oI56scCZESX%2B21wD4%2FvKKger6ORIOKAHx6Ek%2FLism%2BNE9BCXwZKneP4NLnSEQyhN%2Bsir5%2F1aIeyN&X-Amz-Signature=e6d80e573abdcc28effea38661401bf094e1e45f89509bf3536c5386b2dac1de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICQCYMX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeJyASuJCoLxMRM3Cl%2FN4E89f7aWREpUseg6DF2c7jrAIgIJRK%2FfmoAA%2Fh1RkpJ32pwai4Ob3q21eF245pu4Omutsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMYSNVAmlFSmykdC2yrcA7ft1l%2B0EmjcvFZ90N2ycNBQZpNOkEWXNU6il63K2JFr9%2F0koSBNGGZVJTJwmSxWsOoZWas46PFd2z7MtJzBinBf8p8ZO2srArm2P9EeI8RJ9ToPqxq%2FZZhXOHDW3uzDtSRG9cih1EfG9p7DYt9Wy1v0t08SBYkir7VdUbpqtqwV9NPObErKZYHa1zliBnT5%2Fjr2nA4UtCB5zoGSVQcnfMueStz37GipnqcHWD7EDX6kduCpkad9LjIcbSW0PCG0PDxsm9j%2FGpiMO0W9XJFz%2FN05wTL2Paleff9GhTccrLmOcJSIH0Sfe3ee1idGTgXVWyydI2jspIsvlkukHfrxK%2BMV%2B8zzuKUyHH4b40gfu5%2BXXNfusl4rSPDbtxS1be1qb4Vf9WqFBvoSkXMeGTfWiY8TnibRo8wl%2Fit70uIvnByeDynj3iG4yX5I8FtS2VQR8OHEL73c9qxxdTW%2BwodAeVxSaaTdOcM1kbilO68iPjlBrU9TfDqHuqoQog4bnAS2DaLuOaXdV8jvtcx%2FdDLEM5tUk99GYyFeDgOMr00s0Qt1jkCEQa6h2LOoXmJtby6lSV%2BodsgJ1vFqbKOBhlaNhguAxYOtRf2Y%2BKRbMIy%2BwbYaaSJd5eWPLWZ%2F23U6MKa88r0GOqUBCn8eF3gS7O0WsW8GmOJSteMFLLrW3P%2FBSE2NWEVOpR7O3KZbuez7cw2EA1SDarH%2BvQo4Q5hqCeteWAZJyGzBjnLnwC3en%2FjvimitvuZ%2BMqcZU0ulmiqlDQA%2FUuFIeR6QqCUg1A%2BrOOkwyC46oI56scCZESX%2B21wD4%2FvKKger6ORIOKAHx6Ek%2FLism%2BNE9BCXwZKneP4NLnSEQyhN%2Bsir5%2F1aIeyN&X-Amz-Signature=6a5663fe571a422418d2255cc59937562d69c62592dadae97087825c83b8a3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
