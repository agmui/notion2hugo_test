---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYL262MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDi7cY8YPzByZFv6LcD6yrgq0nsGTZphhdEsKFhXTqo9AIgVeZTWcqjEWk2UiU8G8h9MFFrK3c%2BOHSWOUlvFpR6jlEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp4pPSp6Kl%2FMBtYRCrcA%2F6uzoFq%2FBmDGmFvm4scOy%2BXTnzwQM8ZRr0FK9E%2BN%2BGotiY2vsJkwRaYMCRw5POASsHNwyg2rwobyMCFXwoULW9jpRlv%2BndGpLWFutdGYyYlWTStyZcSui3gJ1m1051VjfrhlJsUGHdiMhtJO3brY7Fp31Y31u7h%2B7lc3VBpl5iya18vr8Bf7MKPDlL%2BJzg0fkcDD1ZynZGr%2BshOXS8uZIgThQ%2BhtoRjnRdGpvk6a7beqFTElzQNqK%2BD3Vd%2Fr0Vu2R4EVVONfGx3q%2Bh%2B%2FtiVkD3SZ2R1%2FhZH2geoP21OByAXOctodJNmaiXRmhh62lU4sjT0S%2BUgPIsnTaxvUia0E%2BM6HQCqDyAfVRzbSsH9WEV9I6sBqpF%2BMMNjynrPQa0TncACMx5vcZnNSrvM1pVgcBpBFKARMgdxjXh13MBcGhZu1ZIdUHGqzcna%2FWXwdsTodKedEXvywBbiLbj1AG6O4FEx8g%2B484urK3ueAkoEZf7%2BHWxgq%2Bp965eV1hlDnAtUY2WmXteq0qxCOhM2yg39Q2QQDh%2FmI1cXH6XLFv9naI3YrixBlpTQN7jr9%2FweVktpPQEpxluhY4fHGGhjTsjFHj5YKKu8QwAST5SrC5zcC%2BUrQ5JVQHfoCQsSPfIrMM7s7swGOqUBS44PUhQBTJJsxsF0MH2pWLnRo4Mw%2B8%2Bj2croPTSTYXZe2%2BKuLeOnRolUBh2wJOVFgbB0nqI63lWoxjr6Rld7JQrkU2zOFLryB5hMtSYmm2GJ3s8bY2iuHEvBIyhHDJWBVXxOvHea44qBE85mWXox0zCMYxr2zN8bOiYL4733BAvySVd7mtWJoVvy8cWw9nuvuBJxaCKj%2Ft96L5n44B2WMxByWtL7&X-Amz-Signature=3db64db57816b4b5be5370604dcee3e9fdc13a6a6f6b79bbb909a182fa6b9a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYL262MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDi7cY8YPzByZFv6LcD6yrgq0nsGTZphhdEsKFhXTqo9AIgVeZTWcqjEWk2UiU8G8h9MFFrK3c%2BOHSWOUlvFpR6jlEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp4pPSp6Kl%2FMBtYRCrcA%2F6uzoFq%2FBmDGmFvm4scOy%2BXTnzwQM8ZRr0FK9E%2BN%2BGotiY2vsJkwRaYMCRw5POASsHNwyg2rwobyMCFXwoULW9jpRlv%2BndGpLWFutdGYyYlWTStyZcSui3gJ1m1051VjfrhlJsUGHdiMhtJO3brY7Fp31Y31u7h%2B7lc3VBpl5iya18vr8Bf7MKPDlL%2BJzg0fkcDD1ZynZGr%2BshOXS8uZIgThQ%2BhtoRjnRdGpvk6a7beqFTElzQNqK%2BD3Vd%2Fr0Vu2R4EVVONfGx3q%2Bh%2B%2FtiVkD3SZ2R1%2FhZH2geoP21OByAXOctodJNmaiXRmhh62lU4sjT0S%2BUgPIsnTaxvUia0E%2BM6HQCqDyAfVRzbSsH9WEV9I6sBqpF%2BMMNjynrPQa0TncACMx5vcZnNSrvM1pVgcBpBFKARMgdxjXh13MBcGhZu1ZIdUHGqzcna%2FWXwdsTodKedEXvywBbiLbj1AG6O4FEx8g%2B484urK3ueAkoEZf7%2BHWxgq%2Bp965eV1hlDnAtUY2WmXteq0qxCOhM2yg39Q2QQDh%2FmI1cXH6XLFv9naI3YrixBlpTQN7jr9%2FweVktpPQEpxluhY4fHGGhjTsjFHj5YKKu8QwAST5SrC5zcC%2BUrQ5JVQHfoCQsSPfIrMM7s7swGOqUBS44PUhQBTJJsxsF0MH2pWLnRo4Mw%2B8%2Bj2croPTSTYXZe2%2BKuLeOnRolUBh2wJOVFgbB0nqI63lWoxjr6Rld7JQrkU2zOFLryB5hMtSYmm2GJ3s8bY2iuHEvBIyhHDJWBVXxOvHea44qBE85mWXox0zCMYxr2zN8bOiYL4733BAvySVd7mtWJoVvy8cWw9nuvuBJxaCKj%2Ft96L5n44B2WMxByWtL7&X-Amz-Signature=1238982a81e27fa047d95e8a290b4bf5dc4bd980e102d23b832e7a3483231dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYL262MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDi7cY8YPzByZFv6LcD6yrgq0nsGTZphhdEsKFhXTqo9AIgVeZTWcqjEWk2UiU8G8h9MFFrK3c%2BOHSWOUlvFpR6jlEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp4pPSp6Kl%2FMBtYRCrcA%2F6uzoFq%2FBmDGmFvm4scOy%2BXTnzwQM8ZRr0FK9E%2BN%2BGotiY2vsJkwRaYMCRw5POASsHNwyg2rwobyMCFXwoULW9jpRlv%2BndGpLWFutdGYyYlWTStyZcSui3gJ1m1051VjfrhlJsUGHdiMhtJO3brY7Fp31Y31u7h%2B7lc3VBpl5iya18vr8Bf7MKPDlL%2BJzg0fkcDD1ZynZGr%2BshOXS8uZIgThQ%2BhtoRjnRdGpvk6a7beqFTElzQNqK%2BD3Vd%2Fr0Vu2R4EVVONfGx3q%2Bh%2B%2FtiVkD3SZ2R1%2FhZH2geoP21OByAXOctodJNmaiXRmhh62lU4sjT0S%2BUgPIsnTaxvUia0E%2BM6HQCqDyAfVRzbSsH9WEV9I6sBqpF%2BMMNjynrPQa0TncACMx5vcZnNSrvM1pVgcBpBFKARMgdxjXh13MBcGhZu1ZIdUHGqzcna%2FWXwdsTodKedEXvywBbiLbj1AG6O4FEx8g%2B484urK3ueAkoEZf7%2BHWxgq%2Bp965eV1hlDnAtUY2WmXteq0qxCOhM2yg39Q2QQDh%2FmI1cXH6XLFv9naI3YrixBlpTQN7jr9%2FweVktpPQEpxluhY4fHGGhjTsjFHj5YKKu8QwAST5SrC5zcC%2BUrQ5JVQHfoCQsSPfIrMM7s7swGOqUBS44PUhQBTJJsxsF0MH2pWLnRo4Mw%2B8%2Bj2croPTSTYXZe2%2BKuLeOnRolUBh2wJOVFgbB0nqI63lWoxjr6Rld7JQrkU2zOFLryB5hMtSYmm2GJ3s8bY2iuHEvBIyhHDJWBVXxOvHea44qBE85mWXox0zCMYxr2zN8bOiYL4733BAvySVd7mtWJoVvy8cWw9nuvuBJxaCKj%2Ft96L5n44B2WMxByWtL7&X-Amz-Signature=f16ab67f64ba655433016147f790b92c6126683fcdb426210e345c30752db8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
