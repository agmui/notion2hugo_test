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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDIACYB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAlGvwwn6z8EMnF6MrrGlmaM9rr3nhD70SP3kp54270qAiAIV2k0JsnUt3VZAFIfYOs2NQCfwzLqAUPvLKGoWltLnSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKs5b6igeaxwvC7rKtwDDwkjYjMTO7gecKsbIMKM4PNF8om55NUzr1lsf%2BbLSNKJA0uvUPC59xRRW3ysoMVJPH6aZf3Up1%2Fyr%2F9Lu8mZg8QxVnRPoLumSkQsoVT062cw4roXeRn86NZT8WWPJciH7mBfTuJtdn2ZueQsUedTeRuj6yFIS3bQsn7ZELLG%2FIpaK0p0r8gkaSF0Axlel8yXDfFjQ5fv0OCvEJiSfhwcALuO3%2Fj03PHD21wzwhw%2BH6r0xaBQGvCX7%2F%2FO1zbFYo6LbsyHFTpBrIoXT%2BvyUmPpJGhLiGoasm03che3ZPQuasfQkzhRsB7CwFMHpVPqZVZXbxoFq1Yv%2BkJGwbAzvuPH1nPOd2buqfaOFTSfQgiJAygaPvdW3D2uX94EutwnCuuA6oP192WLZgn5JetBaJKxFLF3tuWI%2BhHHUb1W5VGxERIgDJyZ8dQLUnF77ejsAD%2Fj57MbY%2Fw78uwXtnLtgX21Agg1MACpuAq8sEAOrAeRDC0tdgzlVrAAuQKjKVksbgyzd8xxdvI7pdR6fykNvTfkSfmCWw9Z5wcozRv%2BCdPfe1P5eJb1S0ge4PtP8dCyKBU3tCc%2B1a%2FwfujQQyM9UTDZwdsshawn7yYsOT5edbPFOaLEND1mkhzzDxdKb%2F4wtO7TxAY6pgF8zb8%2BbtSb039QJoWoA0bTPsznICPFRUOFVasXrwJquNdK2DqmsOKdmojWu11ZBLY852seOZkixrJVl4c7Csqqv92QMv9ZIACQA1Y1x%2Bt4X%2B9tXUSUiYbFTahxPBWCW8ln0531usX2Ks3bM8rXJTC0u6d9Lyab8M1IDYFJ4xoAZv2nWAccMT1IAVcg5DB0sMYEbkttuP2zalHptwxnTsnnTHAJ%2BCIJ&X-Amz-Signature=095b6d629209dc0b9080fefc8f870b5a9c26e2d8c63f13aec8b3b1d77c9b4a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDIACYB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAlGvwwn6z8EMnF6MrrGlmaM9rr3nhD70SP3kp54270qAiAIV2k0JsnUt3VZAFIfYOs2NQCfwzLqAUPvLKGoWltLnSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKs5b6igeaxwvC7rKtwDDwkjYjMTO7gecKsbIMKM4PNF8om55NUzr1lsf%2BbLSNKJA0uvUPC59xRRW3ysoMVJPH6aZf3Up1%2Fyr%2F9Lu8mZg8QxVnRPoLumSkQsoVT062cw4roXeRn86NZT8WWPJciH7mBfTuJtdn2ZueQsUedTeRuj6yFIS3bQsn7ZELLG%2FIpaK0p0r8gkaSF0Axlel8yXDfFjQ5fv0OCvEJiSfhwcALuO3%2Fj03PHD21wzwhw%2BH6r0xaBQGvCX7%2F%2FO1zbFYo6LbsyHFTpBrIoXT%2BvyUmPpJGhLiGoasm03che3ZPQuasfQkzhRsB7CwFMHpVPqZVZXbxoFq1Yv%2BkJGwbAzvuPH1nPOd2buqfaOFTSfQgiJAygaPvdW3D2uX94EutwnCuuA6oP192WLZgn5JetBaJKxFLF3tuWI%2BhHHUb1W5VGxERIgDJyZ8dQLUnF77ejsAD%2Fj57MbY%2Fw78uwXtnLtgX21Agg1MACpuAq8sEAOrAeRDC0tdgzlVrAAuQKjKVksbgyzd8xxdvI7pdR6fykNvTfkSfmCWw9Z5wcozRv%2BCdPfe1P5eJb1S0ge4PtP8dCyKBU3tCc%2B1a%2FwfujQQyM9UTDZwdsshawn7yYsOT5edbPFOaLEND1mkhzzDxdKb%2F4wtO7TxAY6pgF8zb8%2BbtSb039QJoWoA0bTPsznICPFRUOFVasXrwJquNdK2DqmsOKdmojWu11ZBLY852seOZkixrJVl4c7Csqqv92QMv9ZIACQA1Y1x%2Bt4X%2B9tXUSUiYbFTahxPBWCW8ln0531usX2Ks3bM8rXJTC0u6d9Lyab8M1IDYFJ4xoAZv2nWAccMT1IAVcg5DB0sMYEbkttuP2zalHptwxnTsnnTHAJ%2BCIJ&X-Amz-Signature=7914a7bca38e5d5bd10396e5d18bc7045d95965f8f422c502477e5228dc5b07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDIACYB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAlGvwwn6z8EMnF6MrrGlmaM9rr3nhD70SP3kp54270qAiAIV2k0JsnUt3VZAFIfYOs2NQCfwzLqAUPvLKGoWltLnSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKs5b6igeaxwvC7rKtwDDwkjYjMTO7gecKsbIMKM4PNF8om55NUzr1lsf%2BbLSNKJA0uvUPC59xRRW3ysoMVJPH6aZf3Up1%2Fyr%2F9Lu8mZg8QxVnRPoLumSkQsoVT062cw4roXeRn86NZT8WWPJciH7mBfTuJtdn2ZueQsUedTeRuj6yFIS3bQsn7ZELLG%2FIpaK0p0r8gkaSF0Axlel8yXDfFjQ5fv0OCvEJiSfhwcALuO3%2Fj03PHD21wzwhw%2BH6r0xaBQGvCX7%2F%2FO1zbFYo6LbsyHFTpBrIoXT%2BvyUmPpJGhLiGoasm03che3ZPQuasfQkzhRsB7CwFMHpVPqZVZXbxoFq1Yv%2BkJGwbAzvuPH1nPOd2buqfaOFTSfQgiJAygaPvdW3D2uX94EutwnCuuA6oP192WLZgn5JetBaJKxFLF3tuWI%2BhHHUb1W5VGxERIgDJyZ8dQLUnF77ejsAD%2Fj57MbY%2Fw78uwXtnLtgX21Agg1MACpuAq8sEAOrAeRDC0tdgzlVrAAuQKjKVksbgyzd8xxdvI7pdR6fykNvTfkSfmCWw9Z5wcozRv%2BCdPfe1P5eJb1S0ge4PtP8dCyKBU3tCc%2B1a%2FwfujQQyM9UTDZwdsshawn7yYsOT5edbPFOaLEND1mkhzzDxdKb%2F4wtO7TxAY6pgF8zb8%2BbtSb039QJoWoA0bTPsznICPFRUOFVasXrwJquNdK2DqmsOKdmojWu11ZBLY852seOZkixrJVl4c7Csqqv92QMv9ZIACQA1Y1x%2Bt4X%2B9tXUSUiYbFTahxPBWCW8ln0531usX2Ks3bM8rXJTC0u6d9Lyab8M1IDYFJ4xoAZv2nWAccMT1IAVcg5DB0sMYEbkttuP2zalHptwxnTsnnTHAJ%2BCIJ&X-Amz-Signature=890bfdf1ff73e6a7ef7df6f855142eb1315223754b04b78102078236a89abf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
