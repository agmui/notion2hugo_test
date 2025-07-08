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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QISSSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBKVXhL53I5y1AnEeDYlAcH0phv%2F1luKS5nj%2F9ZL54qwIgVUjadC%2F109ygaSGP4edJEWxcrut3B7T5OBWkmeZDIA0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiMtpCymmnTaKYY6ircAx0q3krvi3Tz4V09duIsDLJS5KKmpw64V5jd%2F6gHdfO0pCYRfIa1szlz6pGjS0erO7w5RitsQRIYSxI9wQVqoJtPbVARzGv6EgKb0tzgBrRremhUdiVw1uK7w%2BNlE6mueM%2B%2FoT2wIB8cXozvW75AXCynWcB0A%2BdAJRTGofsfPyXnm%2BixZEO9EdnwEL5x9E%2F1KSapaQcpo9sUbAzqUa865jPiLGQFeuQ754tvL%2B9Z8lKmHmvzTwr5TNaGT8f%2FXdwnxdAT%2BT%2FVPmkYEuGndRTvpFG1GNMZo9lhPc1jVffu4C8bMlqRFt3j9J9Bj1vCMxiWx8rvRDT6At1KC2dOQ5YO%2FnPX9EHG7UJ%2FeOTkUI9VQtfR%2FuuQQxAjBUJbv8yTBnAig5lcEyvBGgZJjyrS3kUjXEGPlJa%2BwD8RSWwTHS%2F0Rd9bpMhoPTFFKtma6lJtgX4XDlFV%2BvDDtRjvCrAfSfCdLOMSzDsbgMPTEWe4BBfidX1T1UuN1lByFPtKjRbI2sk%2B2EQRXPBOX9eEb4288LeUO0L3ddOmLZOciJb6xlalTMb9ffAYU64zrtLIss3HJlnBmP8oLq0Om7LbzQwTn%2Bc2MYCl2iLegMCbDYSSgZQ82TnsKahYtVcI3iPZsUkbMJ7Hs8MGOqUBLNH03ZLluB0Z5qWmSIqOZQ3HegeakTCnrOxTSthoHsEy%2BOEwRA%2BLNYcm3oOZaf6ezij4veS835FHIVMB4uXF9lPLBpKSJre%2F0bs680ABrIdtS%2FmPLPHq1OjL%2F%2Bd95xGOKIOeo0qKeWOwyZ5y09I2Bjo3xoECY06VusMext0qhbxTsLAsYy8uQEkg1AhZwCFmz0%2FQWyW34hlCGco2AybYNwsSwD%2BO&X-Amz-Signature=424144f0deb143a43a63fd700d6fbd06549d4ea820016a209219163701ed56fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QISSSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBKVXhL53I5y1AnEeDYlAcH0phv%2F1luKS5nj%2F9ZL54qwIgVUjadC%2F109ygaSGP4edJEWxcrut3B7T5OBWkmeZDIA0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiMtpCymmnTaKYY6ircAx0q3krvi3Tz4V09duIsDLJS5KKmpw64V5jd%2F6gHdfO0pCYRfIa1szlz6pGjS0erO7w5RitsQRIYSxI9wQVqoJtPbVARzGv6EgKb0tzgBrRremhUdiVw1uK7w%2BNlE6mueM%2B%2FoT2wIB8cXozvW75AXCynWcB0A%2BdAJRTGofsfPyXnm%2BixZEO9EdnwEL5x9E%2F1KSapaQcpo9sUbAzqUa865jPiLGQFeuQ754tvL%2B9Z8lKmHmvzTwr5TNaGT8f%2FXdwnxdAT%2BT%2FVPmkYEuGndRTvpFG1GNMZo9lhPc1jVffu4C8bMlqRFt3j9J9Bj1vCMxiWx8rvRDT6At1KC2dOQ5YO%2FnPX9EHG7UJ%2FeOTkUI9VQtfR%2FuuQQxAjBUJbv8yTBnAig5lcEyvBGgZJjyrS3kUjXEGPlJa%2BwD8RSWwTHS%2F0Rd9bpMhoPTFFKtma6lJtgX4XDlFV%2BvDDtRjvCrAfSfCdLOMSzDsbgMPTEWe4BBfidX1T1UuN1lByFPtKjRbI2sk%2B2EQRXPBOX9eEb4288LeUO0L3ddOmLZOciJb6xlalTMb9ffAYU64zrtLIss3HJlnBmP8oLq0Om7LbzQwTn%2Bc2MYCl2iLegMCbDYSSgZQ82TnsKahYtVcI3iPZsUkbMJ7Hs8MGOqUBLNH03ZLluB0Z5qWmSIqOZQ3HegeakTCnrOxTSthoHsEy%2BOEwRA%2BLNYcm3oOZaf6ezij4veS835FHIVMB4uXF9lPLBpKSJre%2F0bs680ABrIdtS%2FmPLPHq1OjL%2F%2Bd95xGOKIOeo0qKeWOwyZ5y09I2Bjo3xoECY06VusMext0qhbxTsLAsYy8uQEkg1AhZwCFmz0%2FQWyW34hlCGco2AybYNwsSwD%2BO&X-Amz-Signature=45294feb575eaa4c7cdbd6774513175942ec1f9a09926edb412bd1772afc7f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QISSSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBKVXhL53I5y1AnEeDYlAcH0phv%2F1luKS5nj%2F9ZL54qwIgVUjadC%2F109ygaSGP4edJEWxcrut3B7T5OBWkmeZDIA0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiMtpCymmnTaKYY6ircAx0q3krvi3Tz4V09duIsDLJS5KKmpw64V5jd%2F6gHdfO0pCYRfIa1szlz6pGjS0erO7w5RitsQRIYSxI9wQVqoJtPbVARzGv6EgKb0tzgBrRremhUdiVw1uK7w%2BNlE6mueM%2B%2FoT2wIB8cXozvW75AXCynWcB0A%2BdAJRTGofsfPyXnm%2BixZEO9EdnwEL5x9E%2F1KSapaQcpo9sUbAzqUa865jPiLGQFeuQ754tvL%2B9Z8lKmHmvzTwr5TNaGT8f%2FXdwnxdAT%2BT%2FVPmkYEuGndRTvpFG1GNMZo9lhPc1jVffu4C8bMlqRFt3j9J9Bj1vCMxiWx8rvRDT6At1KC2dOQ5YO%2FnPX9EHG7UJ%2FeOTkUI9VQtfR%2FuuQQxAjBUJbv8yTBnAig5lcEyvBGgZJjyrS3kUjXEGPlJa%2BwD8RSWwTHS%2F0Rd9bpMhoPTFFKtma6lJtgX4XDlFV%2BvDDtRjvCrAfSfCdLOMSzDsbgMPTEWe4BBfidX1T1UuN1lByFPtKjRbI2sk%2B2EQRXPBOX9eEb4288LeUO0L3ddOmLZOciJb6xlalTMb9ffAYU64zrtLIss3HJlnBmP8oLq0Om7LbzQwTn%2Bc2MYCl2iLegMCbDYSSgZQ82TnsKahYtVcI3iPZsUkbMJ7Hs8MGOqUBLNH03ZLluB0Z5qWmSIqOZQ3HegeakTCnrOxTSthoHsEy%2BOEwRA%2BLNYcm3oOZaf6ezij4veS835FHIVMB4uXF9lPLBpKSJre%2F0bs680ABrIdtS%2FmPLPHq1OjL%2F%2Bd95xGOKIOeo0qKeWOwyZ5y09I2Bjo3xoECY06VusMext0qhbxTsLAsYy8uQEkg1AhZwCFmz0%2FQWyW34hlCGco2AybYNwsSwD%2BO&X-Amz-Signature=b40967b44865a54f7fb8b910d5d669a221dc3e27044318f932a4fe7deda1b856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
