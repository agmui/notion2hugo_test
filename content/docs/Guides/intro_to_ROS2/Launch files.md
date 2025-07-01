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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYQPLZP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmzaToJFnkEnyjyn3ixXK%2BipPaWRuEi06Ah831JvV1mAiBgW4yjO1ActzMykT5qJ31qewj7g7u52FzVCvtg%2Bn6qPyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkH4Qgl7l0fOAdqVKtwD3yDjYZr27Lg7qINxAEnIO8lD77EpXFXFXbxpD863cMacu7eypBjyQRKvReQDs5%2BD0Hbd1tmbXQ%2BnfMjQx0SIXw%2BQSF%2FFiwGlV0ZyG%2FwDrQQG%2F%2BH9LhCXShjrbh%2FMu4PjmRDU2pgAJDl2wFgdhICTPReLJt8T6lYo2lbt%2Fjp3ck0zenY6Vp8qulA8enrnE8UU5ra8HMOoLmeAZKQLNDVZyta7l0Se0jpeeJzmCLM8uCKGeWBwEbWaOm2Ofkw%2F2FWAKYwcYFglq5zCTBd1ckMdOLnsxxz2K50td0fVHrEs75MImLbAEhPvPANbOtMyBWQCTJ940D81u%2FLaqeQ8lWYIfukuZAmmcYkM6%2FdGxcUmKhSRjnP3spzcnZVwpsAIjBDkW3HkglIMPLTlEGT6tNwJs%2BKaNZODJsfBhqNrafsrcjBEleHcV2ut4voq99Xr9MGAzMC1q%2B7kShtrVcczEP1n9d6Dllov4ccpWUz2mQPDzBKQc9No%2BE4WBr3RC7lK%2FR8QTY37CIupSPMsKELZK4yzjQycOhB%2BkqM1JluAooTRVZ2ucFs6o1Vd%2Flrg66PH5xWcY1Gx9bXc%2BKMpXQZJgxx4pVSc0r3iDlUWOG7z%2BX%2F%2BS5wrL3FfrTQpZekFx%2B8wx4WOwwY6pgFjE56CAA3N1x40YujaxpJPngNBmUst5JwsVTRsITWvoK2y6khmyu9oc4lmLKBzq9EZuEVSQPOYTQLzFzZvbC21FdSIrCh7Cf%2FXaWraK%2Ft18oK9jtMcdBW4FhgPKPPueZZhiHxsTLoXVOOoYUd%2FBheCI3YCdqWXKkN3RddyeEpOhk5bnsiJh4ZE6S0dSF5cTNb0zclYKKZDU3ZV428cSgcHDjLAJUXD&X-Amz-Signature=957e26edaa02379642f4a2d60379339c4349a78a77a1c1b6a353c3de94984750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYQPLZP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmzaToJFnkEnyjyn3ixXK%2BipPaWRuEi06Ah831JvV1mAiBgW4yjO1ActzMykT5qJ31qewj7g7u52FzVCvtg%2Bn6qPyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkH4Qgl7l0fOAdqVKtwD3yDjYZr27Lg7qINxAEnIO8lD77EpXFXFXbxpD863cMacu7eypBjyQRKvReQDs5%2BD0Hbd1tmbXQ%2BnfMjQx0SIXw%2BQSF%2FFiwGlV0ZyG%2FwDrQQG%2F%2BH9LhCXShjrbh%2FMu4PjmRDU2pgAJDl2wFgdhICTPReLJt8T6lYo2lbt%2Fjp3ck0zenY6Vp8qulA8enrnE8UU5ra8HMOoLmeAZKQLNDVZyta7l0Se0jpeeJzmCLM8uCKGeWBwEbWaOm2Ofkw%2F2FWAKYwcYFglq5zCTBd1ckMdOLnsxxz2K50td0fVHrEs75MImLbAEhPvPANbOtMyBWQCTJ940D81u%2FLaqeQ8lWYIfukuZAmmcYkM6%2FdGxcUmKhSRjnP3spzcnZVwpsAIjBDkW3HkglIMPLTlEGT6tNwJs%2BKaNZODJsfBhqNrafsrcjBEleHcV2ut4voq99Xr9MGAzMC1q%2B7kShtrVcczEP1n9d6Dllov4ccpWUz2mQPDzBKQc9No%2BE4WBr3RC7lK%2FR8QTY37CIupSPMsKELZK4yzjQycOhB%2BkqM1JluAooTRVZ2ucFs6o1Vd%2Flrg66PH5xWcY1Gx9bXc%2BKMpXQZJgxx4pVSc0r3iDlUWOG7z%2BX%2F%2BS5wrL3FfrTQpZekFx%2B8wx4WOwwY6pgFjE56CAA3N1x40YujaxpJPngNBmUst5JwsVTRsITWvoK2y6khmyu9oc4lmLKBzq9EZuEVSQPOYTQLzFzZvbC21FdSIrCh7Cf%2FXaWraK%2Ft18oK9jtMcdBW4FhgPKPPueZZhiHxsTLoXVOOoYUd%2FBheCI3YCdqWXKkN3RddyeEpOhk5bnsiJh4ZE6S0dSF5cTNb0zclYKKZDU3ZV428cSgcHDjLAJUXD&X-Amz-Signature=ff124ce44f33f784369f35e0c39132d92c8d8c2bc2d4dfc0f12f7962db74f6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYQPLZP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmzaToJFnkEnyjyn3ixXK%2BipPaWRuEi06Ah831JvV1mAiBgW4yjO1ActzMykT5qJ31qewj7g7u52FzVCvtg%2Bn6qPyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkH4Qgl7l0fOAdqVKtwD3yDjYZr27Lg7qINxAEnIO8lD77EpXFXFXbxpD863cMacu7eypBjyQRKvReQDs5%2BD0Hbd1tmbXQ%2BnfMjQx0SIXw%2BQSF%2FFiwGlV0ZyG%2FwDrQQG%2F%2BH9LhCXShjrbh%2FMu4PjmRDU2pgAJDl2wFgdhICTPReLJt8T6lYo2lbt%2Fjp3ck0zenY6Vp8qulA8enrnE8UU5ra8HMOoLmeAZKQLNDVZyta7l0Se0jpeeJzmCLM8uCKGeWBwEbWaOm2Ofkw%2F2FWAKYwcYFglq5zCTBd1ckMdOLnsxxz2K50td0fVHrEs75MImLbAEhPvPANbOtMyBWQCTJ940D81u%2FLaqeQ8lWYIfukuZAmmcYkM6%2FdGxcUmKhSRjnP3spzcnZVwpsAIjBDkW3HkglIMPLTlEGT6tNwJs%2BKaNZODJsfBhqNrafsrcjBEleHcV2ut4voq99Xr9MGAzMC1q%2B7kShtrVcczEP1n9d6Dllov4ccpWUz2mQPDzBKQc9No%2BE4WBr3RC7lK%2FR8QTY37CIupSPMsKELZK4yzjQycOhB%2BkqM1JluAooTRVZ2ucFs6o1Vd%2Flrg66PH5xWcY1Gx9bXc%2BKMpXQZJgxx4pVSc0r3iDlUWOG7z%2BX%2F%2BS5wrL3FfrTQpZekFx%2B8wx4WOwwY6pgFjE56CAA3N1x40YujaxpJPngNBmUst5JwsVTRsITWvoK2y6khmyu9oc4lmLKBzq9EZuEVSQPOYTQLzFzZvbC21FdSIrCh7Cf%2FXaWraK%2Ft18oK9jtMcdBW4FhgPKPPueZZhiHxsTLoXVOOoYUd%2FBheCI3YCdqWXKkN3RddyeEpOhk5bnsiJh4ZE6S0dSF5cTNb0zclYKKZDU3ZV428cSgcHDjLAJUXD&X-Amz-Signature=74079014f6f2b8e72a1e13549073d7efad84bc77a35fd7ed7829ad840c4585a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
