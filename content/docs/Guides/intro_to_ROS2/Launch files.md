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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2GSKHS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBrv7pNxC4WKwm%2BndE8VnLtXcsBmLquRPwvipFBNOAIhAI0GOVxwhfy1rxN6OfgFv91ZOci5p45Mxj%2F2DUNKssuiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaYrKtsvGdCBvnRJIq3ANGeV8Sf2QpR6kSa6%2FpIiET0vb5v2z8jvu%2FPJ9eaySgj%2FPsvt7wHuQpf7HlNVQkynTPwpXgtJrWotp%2FGXCIavbNBFu6NTmBt02quMUep5ib4q%2BES4Zn86F%2FR3ykX6sfb3D4m6DGUXc4L7ZE%2FKd9S4AKmfv4zQRK5W9Tn6j0OExKvNBNu4%2FXhbX7dxW5znUQQynY1%2BtRtAZm5tG1dWedt74tCUIX1ciVegPkAROvndbuojig0iwA0I59%2FlAaMTk1AHJNQGLtQhDtTIa8nauHrQGEMhVxBSHSYtFgEtE8k2a%2BbWuMZJzt0A0%2Ble3iTZlJtZsRKTM7rheoJ9B5N0QGk0oFKyTbox4axvWy0lFoEO2CNfQz8RBoqMM7tDCamc8mc3MTozUTw14bU%2FKdyiDKTZwWasWBDBWw%2BuR2y0sUOt6fZ1SM7kSS32SipC9SmOpiqXEmWLa3YrKGm7hty0kgIEV31j84wWAsLdhFAQgnIc6D5ncC1P350M37JUJ8MQyVPT5hpFS2UKt1Gn3IsL6zptt1FgTK5Ei7r4u6QG6Iqm08PSmSy3K3NZMwAYTU52ytgUvX1hYT%2Fn02AQP24lfRluFC2IoecXvazoIW1i6Sk03pRTGnxSxDz25kVEM4ozCi%2F52%2BBjqkAdYkhkvuEp8lrcZjK0sKbfg1sXoRRXOTnNOTApJwZKhsfn%2FDSoklQ3Qrw3gWPoQC%2B1RycUNqlB67GtkuQRBt7pDRHVV5gieJHih1UQHpsZcvOzRu02Gx%2FrHywN4%2FHH40ptu8v4qmgDpRd4edApOA9yMIjrFYTBN%2B4o%2BTVw280vzjnFF%2FdYaNdGvVo8F%2BV0eZJyV%2ByXBBwH6NPeEWVE3pZXjSiT1V&X-Amz-Signature=964212cfa844f8c722a1ee254bea721db2e7f01aa86a1802c4656d4714cbbc3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2GSKHS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBrv7pNxC4WKwm%2BndE8VnLtXcsBmLquRPwvipFBNOAIhAI0GOVxwhfy1rxN6OfgFv91ZOci5p45Mxj%2F2DUNKssuiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaYrKtsvGdCBvnRJIq3ANGeV8Sf2QpR6kSa6%2FpIiET0vb5v2z8jvu%2FPJ9eaySgj%2FPsvt7wHuQpf7HlNVQkynTPwpXgtJrWotp%2FGXCIavbNBFu6NTmBt02quMUep5ib4q%2BES4Zn86F%2FR3ykX6sfb3D4m6DGUXc4L7ZE%2FKd9S4AKmfv4zQRK5W9Tn6j0OExKvNBNu4%2FXhbX7dxW5znUQQynY1%2BtRtAZm5tG1dWedt74tCUIX1ciVegPkAROvndbuojig0iwA0I59%2FlAaMTk1AHJNQGLtQhDtTIa8nauHrQGEMhVxBSHSYtFgEtE8k2a%2BbWuMZJzt0A0%2Ble3iTZlJtZsRKTM7rheoJ9B5N0QGk0oFKyTbox4axvWy0lFoEO2CNfQz8RBoqMM7tDCamc8mc3MTozUTw14bU%2FKdyiDKTZwWasWBDBWw%2BuR2y0sUOt6fZ1SM7kSS32SipC9SmOpiqXEmWLa3YrKGm7hty0kgIEV31j84wWAsLdhFAQgnIc6D5ncC1P350M37JUJ8MQyVPT5hpFS2UKt1Gn3IsL6zptt1FgTK5Ei7r4u6QG6Iqm08PSmSy3K3NZMwAYTU52ytgUvX1hYT%2Fn02AQP24lfRluFC2IoecXvazoIW1i6Sk03pRTGnxSxDz25kVEM4ozCi%2F52%2BBjqkAdYkhkvuEp8lrcZjK0sKbfg1sXoRRXOTnNOTApJwZKhsfn%2FDSoklQ3Qrw3gWPoQC%2B1RycUNqlB67GtkuQRBt7pDRHVV5gieJHih1UQHpsZcvOzRu02Gx%2FrHywN4%2FHH40ptu8v4qmgDpRd4edApOA9yMIjrFYTBN%2B4o%2BTVw280vzjnFF%2FdYaNdGvVo8F%2BV0eZJyV%2ByXBBwH6NPeEWVE3pZXjSiT1V&X-Amz-Signature=d552b1e23a72195549f2ce0f341a5c7adae11d2cd105f39ef0ba108fe50f1e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2GSKHS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAuBrv7pNxC4WKwm%2BndE8VnLtXcsBmLquRPwvipFBNOAIhAI0GOVxwhfy1rxN6OfgFv91ZOci5p45Mxj%2F2DUNKssuiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaYrKtsvGdCBvnRJIq3ANGeV8Sf2QpR6kSa6%2FpIiET0vb5v2z8jvu%2FPJ9eaySgj%2FPsvt7wHuQpf7HlNVQkynTPwpXgtJrWotp%2FGXCIavbNBFu6NTmBt02quMUep5ib4q%2BES4Zn86F%2FR3ykX6sfb3D4m6DGUXc4L7ZE%2FKd9S4AKmfv4zQRK5W9Tn6j0OExKvNBNu4%2FXhbX7dxW5znUQQynY1%2BtRtAZm5tG1dWedt74tCUIX1ciVegPkAROvndbuojig0iwA0I59%2FlAaMTk1AHJNQGLtQhDtTIa8nauHrQGEMhVxBSHSYtFgEtE8k2a%2BbWuMZJzt0A0%2Ble3iTZlJtZsRKTM7rheoJ9B5N0QGk0oFKyTbox4axvWy0lFoEO2CNfQz8RBoqMM7tDCamc8mc3MTozUTw14bU%2FKdyiDKTZwWasWBDBWw%2BuR2y0sUOt6fZ1SM7kSS32SipC9SmOpiqXEmWLa3YrKGm7hty0kgIEV31j84wWAsLdhFAQgnIc6D5ncC1P350M37JUJ8MQyVPT5hpFS2UKt1Gn3IsL6zptt1FgTK5Ei7r4u6QG6Iqm08PSmSy3K3NZMwAYTU52ytgUvX1hYT%2Fn02AQP24lfRluFC2IoecXvazoIW1i6Sk03pRTGnxSxDz25kVEM4ozCi%2F52%2BBjqkAdYkhkvuEp8lrcZjK0sKbfg1sXoRRXOTnNOTApJwZKhsfn%2FDSoklQ3Qrw3gWPoQC%2B1RycUNqlB67GtkuQRBt7pDRHVV5gieJHih1UQHpsZcvOzRu02Gx%2FrHywN4%2FHH40ptu8v4qmgDpRd4edApOA9yMIjrFYTBN%2B4o%2BTVw280vzjnFF%2FdYaNdGvVo8F%2BV0eZJyV%2ByXBBwH6NPeEWVE3pZXjSiT1V&X-Amz-Signature=a26ab97f4ac96853df2c3c6067693947d96a1a9445a249c7777817ce847fd073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
