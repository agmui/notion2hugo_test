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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NW4Y7GF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHAQZBnFEgmTLJmYRUWMELi1RXcZSy7qGA%2FhhCRNF0sQIgGcLSvEwZnhJ2VRO0PbG5Jgzg4Is%2Foj3Le63lWIOPUcgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkkgb3jjhFIl6q%2FdyrcAxqOuvEhHmxIGRZX3KafMyHWjU7eOOsSZbG6cgn9ikZ93ZOlsWhzXMqDERlZ1%2FdYIdvKQ4oAP2SRhD35%2BarxsYXsEf0D1i%2FEQYRi6NDkabAOA3G5F6rlplYkiwndMoKitWEF4Or8gfigmfKOnihItTefdsJSXyULwm23A83wSfTLuLaW%2Bwlf5Zuuu7j6T0vRMh730XnYfx%2B1THTxKLuTBrsvoCPHNDy1WY5MXE67YWofCoX6uj%2F8EitTIViI531TAh1Vtf%2BtyrzACE44qu9O73U4jA5av3yRwlivauOVmugNiEHMNp6W%2F%2BNoVXxc4GTOc52ze9%2FNMMdBXjR90CLK3h89Z1An5bign0jMf6zi4r9nbP%2BcqxzSt5Y4JTVfjESSMxvLrM806bhhKGDrq2IW3wQ%2Fs7%2FElRaqnGpTTApsiZbY2rxJ9GqYeOrvHIpSFb%2FKHOBLJLs1mheGoLDQwUq7Evs%2FqkBDp5hjlOsejptLZxU27%2FhT9t3IYgwVGGQ91QXZrX0ucdQ88aHLCmWw8n%2BZ9iZYavr3uttZUtIkjSMN2UKabpQPQk63V3tHS3HTidNI9%2FXQU3IoyhiBcbSj9%2BkVb0%2FC12qa9G8MqvmMVIjmn7OY3%2FStzyXForWOKtLDMLnF%2BcMGOqUBHcKeuExcdie87qInNL9DKpw8yN22W3fQNjaHKRG3TdDRjAmVn%2BlMPlUEcjf%2BBRdDmaucWlt4cBOccIn9lLBUw%2FabUokVpPghWIMf%2Fx54mRVO%2F30Cv7oPU00fDsQAS8ARfbjGUYmj2rLz7gHZTPScC%2BjoMiAjl%2Fc1mhM%2Bm946m2rKvWexRb60qaKv8ssiGMlhMnhwacdhal5oLSezMYF6UIKNpj1I&X-Amz-Signature=b99db3e71343ea9c5f7f2e655bd41eadb22cad76ebec5667590821631e88681b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NW4Y7GF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHAQZBnFEgmTLJmYRUWMELi1RXcZSy7qGA%2FhhCRNF0sQIgGcLSvEwZnhJ2VRO0PbG5Jgzg4Is%2Foj3Le63lWIOPUcgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkkgb3jjhFIl6q%2FdyrcAxqOuvEhHmxIGRZX3KafMyHWjU7eOOsSZbG6cgn9ikZ93ZOlsWhzXMqDERlZ1%2FdYIdvKQ4oAP2SRhD35%2BarxsYXsEf0D1i%2FEQYRi6NDkabAOA3G5F6rlplYkiwndMoKitWEF4Or8gfigmfKOnihItTefdsJSXyULwm23A83wSfTLuLaW%2Bwlf5Zuuu7j6T0vRMh730XnYfx%2B1THTxKLuTBrsvoCPHNDy1WY5MXE67YWofCoX6uj%2F8EitTIViI531TAh1Vtf%2BtyrzACE44qu9O73U4jA5av3yRwlivauOVmugNiEHMNp6W%2F%2BNoVXxc4GTOc52ze9%2FNMMdBXjR90CLK3h89Z1An5bign0jMf6zi4r9nbP%2BcqxzSt5Y4JTVfjESSMxvLrM806bhhKGDrq2IW3wQ%2Fs7%2FElRaqnGpTTApsiZbY2rxJ9GqYeOrvHIpSFb%2FKHOBLJLs1mheGoLDQwUq7Evs%2FqkBDp5hjlOsejptLZxU27%2FhT9t3IYgwVGGQ91QXZrX0ucdQ88aHLCmWw8n%2BZ9iZYavr3uttZUtIkjSMN2UKabpQPQk63V3tHS3HTidNI9%2FXQU3IoyhiBcbSj9%2BkVb0%2FC12qa9G8MqvmMVIjmn7OY3%2FStzyXForWOKtLDMLnF%2BcMGOqUBHcKeuExcdie87qInNL9DKpw8yN22W3fQNjaHKRG3TdDRjAmVn%2BlMPlUEcjf%2BBRdDmaucWlt4cBOccIn9lLBUw%2FabUokVpPghWIMf%2Fx54mRVO%2F30Cv7oPU00fDsQAS8ARfbjGUYmj2rLz7gHZTPScC%2BjoMiAjl%2Fc1mhM%2Bm946m2rKvWexRb60qaKv8ssiGMlhMnhwacdhal5oLSezMYF6UIKNpj1I&X-Amz-Signature=de033bbe440815cca82392522a57cf48bdcd33aabc1777051266705f2c1d9997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NW4Y7GF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHAQZBnFEgmTLJmYRUWMELi1RXcZSy7qGA%2FhhCRNF0sQIgGcLSvEwZnhJ2VRO0PbG5Jgzg4Is%2Foj3Le63lWIOPUcgqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkkgb3jjhFIl6q%2FdyrcAxqOuvEhHmxIGRZX3KafMyHWjU7eOOsSZbG6cgn9ikZ93ZOlsWhzXMqDERlZ1%2FdYIdvKQ4oAP2SRhD35%2BarxsYXsEf0D1i%2FEQYRi6NDkabAOA3G5F6rlplYkiwndMoKitWEF4Or8gfigmfKOnihItTefdsJSXyULwm23A83wSfTLuLaW%2Bwlf5Zuuu7j6T0vRMh730XnYfx%2B1THTxKLuTBrsvoCPHNDy1WY5MXE67YWofCoX6uj%2F8EitTIViI531TAh1Vtf%2BtyrzACE44qu9O73U4jA5av3yRwlivauOVmugNiEHMNp6W%2F%2BNoVXxc4GTOc52ze9%2FNMMdBXjR90CLK3h89Z1An5bign0jMf6zi4r9nbP%2BcqxzSt5Y4JTVfjESSMxvLrM806bhhKGDrq2IW3wQ%2Fs7%2FElRaqnGpTTApsiZbY2rxJ9GqYeOrvHIpSFb%2FKHOBLJLs1mheGoLDQwUq7Evs%2FqkBDp5hjlOsejptLZxU27%2FhT9t3IYgwVGGQ91QXZrX0ucdQ88aHLCmWw8n%2BZ9iZYavr3uttZUtIkjSMN2UKabpQPQk63V3tHS3HTidNI9%2FXQU3IoyhiBcbSj9%2BkVb0%2FC12qa9G8MqvmMVIjmn7OY3%2FStzyXForWOKtLDMLnF%2BcMGOqUBHcKeuExcdie87qInNL9DKpw8yN22W3fQNjaHKRG3TdDRjAmVn%2BlMPlUEcjf%2BBRdDmaucWlt4cBOccIn9lLBUw%2FabUokVpPghWIMf%2Fx54mRVO%2F30Cv7oPU00fDsQAS8ARfbjGUYmj2rLz7gHZTPScC%2BjoMiAjl%2Fc1mhM%2Bm946m2rKvWexRb60qaKv8ssiGMlhMnhwacdhal5oLSezMYF6UIKNpj1I&X-Amz-Signature=4d2a3fec97ae0195af58a03f43c5d135f63758fb25d5a2526bfbc9823082805e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
