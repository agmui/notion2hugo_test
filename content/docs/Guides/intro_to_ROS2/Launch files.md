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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVU7UI2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFFfUGIWdQLfcMV57aWqmOg1mYD4Eba9MR91GHc0qONAiAv4ccWAf12lmFy0Q0VscWbUyc7MQy1eNwyHnQt8lTjgyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpFr4m044Vv3smOVGKtwDt2x7dL2O0Qn1CswtPeI2FugyPrs4wbrIvMOb4KspDY8kEVCVzoeWAorZYy7eG3EVUSMzE12i%2F3U1BM7sK2%2BM%2BqwqmNXzJPQBx61xmSwxsJIAgsE934CoWAvc2GKLwpsomOABM8CGW%2BSUJR2TZsmzCiF1lcTMs3mPlVCHTufbmnCQdN8j5u1RFr4kK23BoY5b%2Fx1XxDInzwF6T9fXdGch9aBKrCTrtmf%2FgGcKZC3ocibscBL7D75D6PWMtoxGGGm%2FvEtmZgQMx0aY2BUEktoPRchJ7ZnWMTLob4VaZLDiMMeMcN2LYpu1IDo6DS8V4oBpH9EXo4c2wjH484JHA0YY48E4nyIZbMo38m%2FHqT2x215zeh4gEmHLS%2Fol62N3JDa2q61I2WAsQrhWFnBswhZtHwFkvWx213QIjktolZ9%2BQg%2B2YxXIKvVuVprkRRt33ZS9RjCVML06yumKbtnKIgxA5yz0F%2BYNvie5BhckYs1GuQwnRkHUo%2BXd%2Ba0fxj3Fx%2FXykNRyjeW3DycUQgxq9SQrhzvqMZ%2FCru6GRJ9NjI6h70tZsH4RKVGYne3p4FUVc3TSHvkVbMtBVO4a1TV1a5oPFkWxGdV1G%2Fn3IvgVh%2FaKRINqWyeAAHdmaH4H0pAw7viQvgY6pgFgsmOnRyOM5zZ8XoHPcO01Qx6%2F4CqpYmGAm3DJJq3O7EKFLJ5iICysnVKTxhFgavStR8B58WlQUaz1z107VkeUAfz%2BDHKNNXoKyRJJaBlcOwYE96Hy1A5yokxKUZWBMrSAnwqg63Lcb5yGZCOF82KytdEUnMYd6Gbfd7wi8h9ub8TPkdcyWa5rZM93Td0z3POoAQOQoI3TUqOQxUR1t5CtKd%2BRBiC6&X-Amz-Signature=4bc2a83b1b73173ae30e1faae952d19c301acaea98e391b40e0ed471997626bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVU7UI2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFFfUGIWdQLfcMV57aWqmOg1mYD4Eba9MR91GHc0qONAiAv4ccWAf12lmFy0Q0VscWbUyc7MQy1eNwyHnQt8lTjgyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpFr4m044Vv3smOVGKtwDt2x7dL2O0Qn1CswtPeI2FugyPrs4wbrIvMOb4KspDY8kEVCVzoeWAorZYy7eG3EVUSMzE12i%2F3U1BM7sK2%2BM%2BqwqmNXzJPQBx61xmSwxsJIAgsE934CoWAvc2GKLwpsomOABM8CGW%2BSUJR2TZsmzCiF1lcTMs3mPlVCHTufbmnCQdN8j5u1RFr4kK23BoY5b%2Fx1XxDInzwF6T9fXdGch9aBKrCTrtmf%2FgGcKZC3ocibscBL7D75D6PWMtoxGGGm%2FvEtmZgQMx0aY2BUEktoPRchJ7ZnWMTLob4VaZLDiMMeMcN2LYpu1IDo6DS8V4oBpH9EXo4c2wjH484JHA0YY48E4nyIZbMo38m%2FHqT2x215zeh4gEmHLS%2Fol62N3JDa2q61I2WAsQrhWFnBswhZtHwFkvWx213QIjktolZ9%2BQg%2B2YxXIKvVuVprkRRt33ZS9RjCVML06yumKbtnKIgxA5yz0F%2BYNvie5BhckYs1GuQwnRkHUo%2BXd%2Ba0fxj3Fx%2FXykNRyjeW3DycUQgxq9SQrhzvqMZ%2FCru6GRJ9NjI6h70tZsH4RKVGYne3p4FUVc3TSHvkVbMtBVO4a1TV1a5oPFkWxGdV1G%2Fn3IvgVh%2FaKRINqWyeAAHdmaH4H0pAw7viQvgY6pgFgsmOnRyOM5zZ8XoHPcO01Qx6%2F4CqpYmGAm3DJJq3O7EKFLJ5iICysnVKTxhFgavStR8B58WlQUaz1z107VkeUAfz%2BDHKNNXoKyRJJaBlcOwYE96Hy1A5yokxKUZWBMrSAnwqg63Lcb5yGZCOF82KytdEUnMYd6Gbfd7wi8h9ub8TPkdcyWa5rZM93Td0z3POoAQOQoI3TUqOQxUR1t5CtKd%2BRBiC6&X-Amz-Signature=712faacd84ce6d0c2d941577e08fe5f6c066459a9aa64ecddb9f427424caa922&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BVU7UI2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFFfUGIWdQLfcMV57aWqmOg1mYD4Eba9MR91GHc0qONAiAv4ccWAf12lmFy0Q0VscWbUyc7MQy1eNwyHnQt8lTjgyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpFr4m044Vv3smOVGKtwDt2x7dL2O0Qn1CswtPeI2FugyPrs4wbrIvMOb4KspDY8kEVCVzoeWAorZYy7eG3EVUSMzE12i%2F3U1BM7sK2%2BM%2BqwqmNXzJPQBx61xmSwxsJIAgsE934CoWAvc2GKLwpsomOABM8CGW%2BSUJR2TZsmzCiF1lcTMs3mPlVCHTufbmnCQdN8j5u1RFr4kK23BoY5b%2Fx1XxDInzwF6T9fXdGch9aBKrCTrtmf%2FgGcKZC3ocibscBL7D75D6PWMtoxGGGm%2FvEtmZgQMx0aY2BUEktoPRchJ7ZnWMTLob4VaZLDiMMeMcN2LYpu1IDo6DS8V4oBpH9EXo4c2wjH484JHA0YY48E4nyIZbMo38m%2FHqT2x215zeh4gEmHLS%2Fol62N3JDa2q61I2WAsQrhWFnBswhZtHwFkvWx213QIjktolZ9%2BQg%2B2YxXIKvVuVprkRRt33ZS9RjCVML06yumKbtnKIgxA5yz0F%2BYNvie5BhckYs1GuQwnRkHUo%2BXd%2Ba0fxj3Fx%2FXykNRyjeW3DycUQgxq9SQrhzvqMZ%2FCru6GRJ9NjI6h70tZsH4RKVGYne3p4FUVc3TSHvkVbMtBVO4a1TV1a5oPFkWxGdV1G%2Fn3IvgVh%2FaKRINqWyeAAHdmaH4H0pAw7viQvgY6pgFgsmOnRyOM5zZ8XoHPcO01Qx6%2F4CqpYmGAm3DJJq3O7EKFLJ5iICysnVKTxhFgavStR8B58WlQUaz1z107VkeUAfz%2BDHKNNXoKyRJJaBlcOwYE96Hy1A5yokxKUZWBMrSAnwqg63Lcb5yGZCOF82KytdEUnMYd6Gbfd7wi8h9ub8TPkdcyWa5rZM93Td0z3POoAQOQoI3TUqOQxUR1t5CtKd%2BRBiC6&X-Amz-Signature=29791e3dbd5bdd54720984077a1019790afa4e86e945a9e9d039a8915ca13a82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
