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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGD5Q7FB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPZjrCb%2FLHYPt3CHvoDcb8ReSp5RBfUWSm%2BHh19wvtUQIhAOHJHunzV6qNH1vMNze4IUrcF9tmObCGKQPp76jaFkrNKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvpq6zQImMHwxME1Iq3AM8g3%2BN160lmtkLUB%2F72LS6hvXSvUYuTAK%2Fc6gXrGoAfTFX%2Fso2l1TJyh6IA6%2BPUTl0I%2Fyh8y47kthnXHZIMbSJK0uu5aIUlKHtMfC0E7iva4LTfo%2FzxzJyDsbuVfk0NmzFW9QBabCiHN6KiPO8WWlBxvw54PbCz%2Fu384hVwKJD4vVBTf1vGWChNC2BR8rdzqJm3d44FSCwjOHACYEIUWigQhXPRvjYTCW3nppyHGA82veMvhdW489Kkdn%2Fs9XV6S%2BO4bZxLgQsqqSzEJchtwQ99jC54%2BH08RBDenDq6asIihs%2F8fqk5SEVkP%2FWjVyfKdRZHDlWS5uUR0DV%2FmDDBNAZVnhlcVbg75IG%2FxtSaEgkdyxVFvbLYF%2BJ5z8j6EIfsMm%2FBO4wxwrDygEBZCP8g64oap6%2BCAC7W9aVLxoj%2Bc39yYK1vxjhJkUgDzJXThr04sPyULxzUYfZkE3FCs2YaZ2NRhx2lCrHmiMUfopF1OJ1%2FV%2FmklNKkmFLUOMdRQ8EftQ6PpyEfVCbmjVqA9yZGDZVELXHhZ%2FiKjFQWBuTc%2BSxVvKN3ph7cVGp28AoDXLDDNdMPnaCDvope%2FHkn1%2BoRufFp17bq8cCfVn%2FH%2Bq207a0Asnyv%2BN418qCVM1JWDCt6ea9BjqkAeTQ%2Bjh6ae8TEsc3%2BF2XcOUdu3Ays2u0IRu%2Fickq73l5KQg3sOapcZUyQB0eNmMaOqpEPf%2F1q7CafRZ95XQ7zH7hLkngTibNjccOc4bb6Il6uWthLNh5wxnFWTaxYAEoU%2F2UrqwqQOhUoC%2FwdnPGWplKcR4Om3ZnFAFyOE2ZkNyOmvlgsv0U%2BYHtTlPqJEfUKSeqIcdRs6qluytupV2nR3s7Ir%2BA&X-Amz-Signature=2bc15016c055b04a7afd351982ebf19d24d5297653493dd3c7960d6353063b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGD5Q7FB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPZjrCb%2FLHYPt3CHvoDcb8ReSp5RBfUWSm%2BHh19wvtUQIhAOHJHunzV6qNH1vMNze4IUrcF9tmObCGKQPp76jaFkrNKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvpq6zQImMHwxME1Iq3AM8g3%2BN160lmtkLUB%2F72LS6hvXSvUYuTAK%2Fc6gXrGoAfTFX%2Fso2l1TJyh6IA6%2BPUTl0I%2Fyh8y47kthnXHZIMbSJK0uu5aIUlKHtMfC0E7iva4LTfo%2FzxzJyDsbuVfk0NmzFW9QBabCiHN6KiPO8WWlBxvw54PbCz%2Fu384hVwKJD4vVBTf1vGWChNC2BR8rdzqJm3d44FSCwjOHACYEIUWigQhXPRvjYTCW3nppyHGA82veMvhdW489Kkdn%2Fs9XV6S%2BO4bZxLgQsqqSzEJchtwQ99jC54%2BH08RBDenDq6asIihs%2F8fqk5SEVkP%2FWjVyfKdRZHDlWS5uUR0DV%2FmDDBNAZVnhlcVbg75IG%2FxtSaEgkdyxVFvbLYF%2BJ5z8j6EIfsMm%2FBO4wxwrDygEBZCP8g64oap6%2BCAC7W9aVLxoj%2Bc39yYK1vxjhJkUgDzJXThr04sPyULxzUYfZkE3FCs2YaZ2NRhx2lCrHmiMUfopF1OJ1%2FV%2FmklNKkmFLUOMdRQ8EftQ6PpyEfVCbmjVqA9yZGDZVELXHhZ%2FiKjFQWBuTc%2BSxVvKN3ph7cVGp28AoDXLDDNdMPnaCDvope%2FHkn1%2BoRufFp17bq8cCfVn%2FH%2Bq207a0Asnyv%2BN418qCVM1JWDCt6ea9BjqkAeTQ%2Bjh6ae8TEsc3%2BF2XcOUdu3Ays2u0IRu%2Fickq73l5KQg3sOapcZUyQB0eNmMaOqpEPf%2F1q7CafRZ95XQ7zH7hLkngTibNjccOc4bb6Il6uWthLNh5wxnFWTaxYAEoU%2F2UrqwqQOhUoC%2FwdnPGWplKcR4Om3ZnFAFyOE2ZkNyOmvlgsv0U%2BYHtTlPqJEfUKSeqIcdRs6qluytupV2nR3s7Ir%2BA&X-Amz-Signature=5065549087751cb7451738838c52a8cabb61bb57aec42647e59939b0e40d022f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGD5Q7FB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPZjrCb%2FLHYPt3CHvoDcb8ReSp5RBfUWSm%2BHh19wvtUQIhAOHJHunzV6qNH1vMNze4IUrcF9tmObCGKQPp76jaFkrNKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvpq6zQImMHwxME1Iq3AM8g3%2BN160lmtkLUB%2F72LS6hvXSvUYuTAK%2Fc6gXrGoAfTFX%2Fso2l1TJyh6IA6%2BPUTl0I%2Fyh8y47kthnXHZIMbSJK0uu5aIUlKHtMfC0E7iva4LTfo%2FzxzJyDsbuVfk0NmzFW9QBabCiHN6KiPO8WWlBxvw54PbCz%2Fu384hVwKJD4vVBTf1vGWChNC2BR8rdzqJm3d44FSCwjOHACYEIUWigQhXPRvjYTCW3nppyHGA82veMvhdW489Kkdn%2Fs9XV6S%2BO4bZxLgQsqqSzEJchtwQ99jC54%2BH08RBDenDq6asIihs%2F8fqk5SEVkP%2FWjVyfKdRZHDlWS5uUR0DV%2FmDDBNAZVnhlcVbg75IG%2FxtSaEgkdyxVFvbLYF%2BJ5z8j6EIfsMm%2FBO4wxwrDygEBZCP8g64oap6%2BCAC7W9aVLxoj%2Bc39yYK1vxjhJkUgDzJXThr04sPyULxzUYfZkE3FCs2YaZ2NRhx2lCrHmiMUfopF1OJ1%2FV%2FmklNKkmFLUOMdRQ8EftQ6PpyEfVCbmjVqA9yZGDZVELXHhZ%2FiKjFQWBuTc%2BSxVvKN3ph7cVGp28AoDXLDDNdMPnaCDvope%2FHkn1%2BoRufFp17bq8cCfVn%2FH%2Bq207a0Asnyv%2BN418qCVM1JWDCt6ea9BjqkAeTQ%2Bjh6ae8TEsc3%2BF2XcOUdu3Ays2u0IRu%2Fickq73l5KQg3sOapcZUyQB0eNmMaOqpEPf%2F1q7CafRZ95XQ7zH7hLkngTibNjccOc4bb6Il6uWthLNh5wxnFWTaxYAEoU%2F2UrqwqQOhUoC%2FwdnPGWplKcR4Om3ZnFAFyOE2ZkNyOmvlgsv0U%2BYHtTlPqJEfUKSeqIcdRs6qluytupV2nR3s7Ir%2BA&X-Amz-Signature=843428df58ee7a53df0c3d5ce503295308fb5cbcb38e8a495f18902a522d31aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
