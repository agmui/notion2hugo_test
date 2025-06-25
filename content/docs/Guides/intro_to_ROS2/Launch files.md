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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634N7HMUX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzAv9iT7BB6%2Fmgh%2BrVAIMzV%2B%2B0rrdYUn7Z5XkErNl2agIgRvx71pSwkGB2s%2BVzxd2M04dDw%2B8q7aBxyAPiAjg67wsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDqXV3zngsV%2FWgYWByrcAzXMP6rve7Q17JvTHA5PmGy4DMoevFDxnak0gvglqZxjmJe7NjSpP64qIovZxuF1SrvSCyOBCAPaY0Q0EnH3MpDKVqRw4qkN9XIsyaStz%2BB5ESxoGhboMdIvlr5wzZXeIQy0tnERjHmyDooKLbA3iqT%2FSf0A6hXwmqM%2BZ0YVS3B1KYZPxSES%2B6O%2BPOOixTjL1lNXyaJ%2FxelHa75esajcLPUBB6Kr0LDGmYduethOGMKMDpAzIfS5v3VTttbZlHDf5xtrU%2BqMy17KKhKQCQ7m71FP51DsT0LWbMXoqJI8ydgKECa2mP283lH7r%2F8ze404KCMS%2BvcXXM1kelUd%2B7yOg%2Fj4FMvoayrw6xS8XyWkhuIJcR3Qe%2FcQUu%2BnwNqTdu4QelXNh7%2FjR%2BO7mvX5Qqm7gFi9XF6SFvEIprV5cEqB2SsbXsMCpEOTxe4OXk6wH4Y9z9TaZK6VHsc8fLvQp%2FINCCs%2BaQGvgtZy0ekqlpxffLateeFXdYGcLzs2mLWLl0f5zOqlHjZndPxIBc%2FrjphxyjVQ8lXPI%2BmnREZ0oq%2FtNSR9DPbUR2LPeJO%2F%2FDIUE%2B4lqWEcUhTKuP35zBD1%2BBrHTcB798HReu%2FJsBzrnUzeXoX%2FokFsyxEHlALvmTnHMKSQ78IGOqUB0hJwvU%2F6BTDsfykm1UMFvsc1u%2BpYVzJ%2FbafaPbIPaqoH5EkVm03i2tzvncdlQpHSpwjuEqI9ICTpOceNxkVVCr1VD3K4gmCFWw2CoItGlRNZgXEpfjJwMmzjipdv02iJEwokOTQ2CdJ%2BNs2BoIAEfnY6YzIcK4kDywkALl%2B4fVonbs%2Ft159sXPCLxsWJvCLb3DHtYZ2R%2BbZFx07leQ%2BMpXis52ET&X-Amz-Signature=f5a645cd2dcbefb6ef874bb5c7c54f14841694ede221f7c94658b503dfb3572e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634N7HMUX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzAv9iT7BB6%2Fmgh%2BrVAIMzV%2B%2B0rrdYUn7Z5XkErNl2agIgRvx71pSwkGB2s%2BVzxd2M04dDw%2B8q7aBxyAPiAjg67wsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDqXV3zngsV%2FWgYWByrcAzXMP6rve7Q17JvTHA5PmGy4DMoevFDxnak0gvglqZxjmJe7NjSpP64qIovZxuF1SrvSCyOBCAPaY0Q0EnH3MpDKVqRw4qkN9XIsyaStz%2BB5ESxoGhboMdIvlr5wzZXeIQy0tnERjHmyDooKLbA3iqT%2FSf0A6hXwmqM%2BZ0YVS3B1KYZPxSES%2B6O%2BPOOixTjL1lNXyaJ%2FxelHa75esajcLPUBB6Kr0LDGmYduethOGMKMDpAzIfS5v3VTttbZlHDf5xtrU%2BqMy17KKhKQCQ7m71FP51DsT0LWbMXoqJI8ydgKECa2mP283lH7r%2F8ze404KCMS%2BvcXXM1kelUd%2B7yOg%2Fj4FMvoayrw6xS8XyWkhuIJcR3Qe%2FcQUu%2BnwNqTdu4QelXNh7%2FjR%2BO7mvX5Qqm7gFi9XF6SFvEIprV5cEqB2SsbXsMCpEOTxe4OXk6wH4Y9z9TaZK6VHsc8fLvQp%2FINCCs%2BaQGvgtZy0ekqlpxffLateeFXdYGcLzs2mLWLl0f5zOqlHjZndPxIBc%2FrjphxyjVQ8lXPI%2BmnREZ0oq%2FtNSR9DPbUR2LPeJO%2F%2FDIUE%2B4lqWEcUhTKuP35zBD1%2BBrHTcB798HReu%2FJsBzrnUzeXoX%2FokFsyxEHlALvmTnHMKSQ78IGOqUB0hJwvU%2F6BTDsfykm1UMFvsc1u%2BpYVzJ%2FbafaPbIPaqoH5EkVm03i2tzvncdlQpHSpwjuEqI9ICTpOceNxkVVCr1VD3K4gmCFWw2CoItGlRNZgXEpfjJwMmzjipdv02iJEwokOTQ2CdJ%2BNs2BoIAEfnY6YzIcK4kDywkALl%2B4fVonbs%2Ft159sXPCLxsWJvCLb3DHtYZ2R%2BbZFx07leQ%2BMpXis52ET&X-Amz-Signature=859751e0fe0938d2884aa1fa6a479738910355b6a0132f3e2fc3b720b6a3c3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634N7HMUX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzAv9iT7BB6%2Fmgh%2BrVAIMzV%2B%2B0rrdYUn7Z5XkErNl2agIgRvx71pSwkGB2s%2BVzxd2M04dDw%2B8q7aBxyAPiAjg67wsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDqXV3zngsV%2FWgYWByrcAzXMP6rve7Q17JvTHA5PmGy4DMoevFDxnak0gvglqZxjmJe7NjSpP64qIovZxuF1SrvSCyOBCAPaY0Q0EnH3MpDKVqRw4qkN9XIsyaStz%2BB5ESxoGhboMdIvlr5wzZXeIQy0tnERjHmyDooKLbA3iqT%2FSf0A6hXwmqM%2BZ0YVS3B1KYZPxSES%2B6O%2BPOOixTjL1lNXyaJ%2FxelHa75esajcLPUBB6Kr0LDGmYduethOGMKMDpAzIfS5v3VTttbZlHDf5xtrU%2BqMy17KKhKQCQ7m71FP51DsT0LWbMXoqJI8ydgKECa2mP283lH7r%2F8ze404KCMS%2BvcXXM1kelUd%2B7yOg%2Fj4FMvoayrw6xS8XyWkhuIJcR3Qe%2FcQUu%2BnwNqTdu4QelXNh7%2FjR%2BO7mvX5Qqm7gFi9XF6SFvEIprV5cEqB2SsbXsMCpEOTxe4OXk6wH4Y9z9TaZK6VHsc8fLvQp%2FINCCs%2BaQGvgtZy0ekqlpxffLateeFXdYGcLzs2mLWLl0f5zOqlHjZndPxIBc%2FrjphxyjVQ8lXPI%2BmnREZ0oq%2FtNSR9DPbUR2LPeJO%2F%2FDIUE%2B4lqWEcUhTKuP35zBD1%2BBrHTcB798HReu%2FJsBzrnUzeXoX%2FokFsyxEHlALvmTnHMKSQ78IGOqUB0hJwvU%2F6BTDsfykm1UMFvsc1u%2BpYVzJ%2FbafaPbIPaqoH5EkVm03i2tzvncdlQpHSpwjuEqI9ICTpOceNxkVVCr1VD3K4gmCFWw2CoItGlRNZgXEpfjJwMmzjipdv02iJEwokOTQ2CdJ%2BNs2BoIAEfnY6YzIcK4kDywkALl%2B4fVonbs%2Ft159sXPCLxsWJvCLb3DHtYZ2R%2BbZFx07leQ%2BMpXis52ET&X-Amz-Signature=e7235ea01e193870c39020a823b56056a8a6c57b18685ac611cea8be984c96d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
