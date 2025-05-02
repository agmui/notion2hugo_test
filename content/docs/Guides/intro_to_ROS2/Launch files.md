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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X46M76Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIApbEJ60stBmfOMiB83EihaAHxUbwfYiAk4SJLtJDe%2FhAiEAoHkcj4yL03%2FKacjBAd0fls%2FxifAcS98mTIlwZPip594qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIcgbXkn6bL18lLgircA%2Fatxxn2pYFOmMRYHnl45%2FwRB0TVTrETYBXJ6zIdbFcdGq7Ew2Bhg1gYMB0BwX6PWTdVUGuIAwDi0qXDNKsVT7TwY6ELyE3GJM%2BeIs%2BIcaUSgKKGDe5psZE2K2y85hEtjWnj53CoZcCSiYrhW%2BIDkULxuHBZrZmMky0ImeRywqBO5wKErQPGPN2DqS5OtQ7Uocgr5PunvAZdFPsujF76Pdby75dBihalHXYW6deXMLMymhexu12XNRSU1UZiTbKAYfYfYjXygnNvFxHQ29bJtXWR7S%2BY7XThTWOLmawNzixf0F8y7INcX9kW5O8auq4pNWgFK1%2FjPxLy0n5UPapyOHtlQmvXHhBDA4iT6Cp3pN0L2wUqiPkRAgdpWWMm8Mc8sl9IXGB0tbHH560QXvLvxYmHWsFtY3K5kS%2Bp5S7qrhViZQKNY7NVbmSpFPq2j82wNGoenbk%2BNwdm3s5TzFoaK6gd2RSwoWRF5UIuVb8Xrisk2FIDxVb2tVwvXx3c2XTW%2BG0bhGmEuE8pyI%2BJmCr3MG386dD7Q6WL1xx5sokD56auKg4Zd%2Ff2jPzXTlZH30niyvO%2BI0vL6uhtkJGQkHhFn6OmT2bBC3tQtF6fKSSSASYzr0r0WCEZtfL5EFAlMODR0MAGOqUB8szviz6JDru9vBOyyIV0KfRakke8NZEe0%2BhEgm3MeUeAJ%2FmYzHAfJ8pAp%2FeqsKHBnn7XbBXRg9h0R4zP3rH%2BEyiT6UGpzmUFGrxEXOZ4trxzc2eIN5QQ7jBipmUVRDjm%2Buvyeag6M5CddhsWZZQ6f52RLutLlWbd5RMe4u9BDVJ30k1%2F5o6zB3E8IliLTgT1B93YgfFuLaC6vtTETWddv7PguC%2Be&X-Amz-Signature=8dfee3aeea58b5c461c7c573a7052006a5e2bee27b4ba873805f2004cdc3ed46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X46M76Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIApbEJ60stBmfOMiB83EihaAHxUbwfYiAk4SJLtJDe%2FhAiEAoHkcj4yL03%2FKacjBAd0fls%2FxifAcS98mTIlwZPip594qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIcgbXkn6bL18lLgircA%2Fatxxn2pYFOmMRYHnl45%2FwRB0TVTrETYBXJ6zIdbFcdGq7Ew2Bhg1gYMB0BwX6PWTdVUGuIAwDi0qXDNKsVT7TwY6ELyE3GJM%2BeIs%2BIcaUSgKKGDe5psZE2K2y85hEtjWnj53CoZcCSiYrhW%2BIDkULxuHBZrZmMky0ImeRywqBO5wKErQPGPN2DqS5OtQ7Uocgr5PunvAZdFPsujF76Pdby75dBihalHXYW6deXMLMymhexu12XNRSU1UZiTbKAYfYfYjXygnNvFxHQ29bJtXWR7S%2BY7XThTWOLmawNzixf0F8y7INcX9kW5O8auq4pNWgFK1%2FjPxLy0n5UPapyOHtlQmvXHhBDA4iT6Cp3pN0L2wUqiPkRAgdpWWMm8Mc8sl9IXGB0tbHH560QXvLvxYmHWsFtY3K5kS%2Bp5S7qrhViZQKNY7NVbmSpFPq2j82wNGoenbk%2BNwdm3s5TzFoaK6gd2RSwoWRF5UIuVb8Xrisk2FIDxVb2tVwvXx3c2XTW%2BG0bhGmEuE8pyI%2BJmCr3MG386dD7Q6WL1xx5sokD56auKg4Zd%2Ff2jPzXTlZH30niyvO%2BI0vL6uhtkJGQkHhFn6OmT2bBC3tQtF6fKSSSASYzr0r0WCEZtfL5EFAlMODR0MAGOqUB8szviz6JDru9vBOyyIV0KfRakke8NZEe0%2BhEgm3MeUeAJ%2FmYzHAfJ8pAp%2FeqsKHBnn7XbBXRg9h0R4zP3rH%2BEyiT6UGpzmUFGrxEXOZ4trxzc2eIN5QQ7jBipmUVRDjm%2Buvyeag6M5CddhsWZZQ6f52RLutLlWbd5RMe4u9BDVJ30k1%2F5o6zB3E8IliLTgT1B93YgfFuLaC6vtTETWddv7PguC%2Be&X-Amz-Signature=df16a7bfbd914c41123cac3ff4ef2dad9f95af07378802b2a19566efbee32845&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X46M76Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIApbEJ60stBmfOMiB83EihaAHxUbwfYiAk4SJLtJDe%2FhAiEAoHkcj4yL03%2FKacjBAd0fls%2FxifAcS98mTIlwZPip594qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIcgbXkn6bL18lLgircA%2Fatxxn2pYFOmMRYHnl45%2FwRB0TVTrETYBXJ6zIdbFcdGq7Ew2Bhg1gYMB0BwX6PWTdVUGuIAwDi0qXDNKsVT7TwY6ELyE3GJM%2BeIs%2BIcaUSgKKGDe5psZE2K2y85hEtjWnj53CoZcCSiYrhW%2BIDkULxuHBZrZmMky0ImeRywqBO5wKErQPGPN2DqS5OtQ7Uocgr5PunvAZdFPsujF76Pdby75dBihalHXYW6deXMLMymhexu12XNRSU1UZiTbKAYfYfYjXygnNvFxHQ29bJtXWR7S%2BY7XThTWOLmawNzixf0F8y7INcX9kW5O8auq4pNWgFK1%2FjPxLy0n5UPapyOHtlQmvXHhBDA4iT6Cp3pN0L2wUqiPkRAgdpWWMm8Mc8sl9IXGB0tbHH560QXvLvxYmHWsFtY3K5kS%2Bp5S7qrhViZQKNY7NVbmSpFPq2j82wNGoenbk%2BNwdm3s5TzFoaK6gd2RSwoWRF5UIuVb8Xrisk2FIDxVb2tVwvXx3c2XTW%2BG0bhGmEuE8pyI%2BJmCr3MG386dD7Q6WL1xx5sokD56auKg4Zd%2Ff2jPzXTlZH30niyvO%2BI0vL6uhtkJGQkHhFn6OmT2bBC3tQtF6fKSSSASYzr0r0WCEZtfL5EFAlMODR0MAGOqUB8szviz6JDru9vBOyyIV0KfRakke8NZEe0%2BhEgm3MeUeAJ%2FmYzHAfJ8pAp%2FeqsKHBnn7XbBXRg9h0R4zP3rH%2BEyiT6UGpzmUFGrxEXOZ4trxzc2eIN5QQ7jBipmUVRDjm%2Buvyeag6M5CddhsWZZQ6f52RLutLlWbd5RMe4u9BDVJ30k1%2F5o6zB3E8IliLTgT1B93YgfFuLaC6vtTETWddv7PguC%2Be&X-Amz-Signature=d0541ec2a85e95629fbb01cfba476dea6a6f174e394bfa067c9fe5091c8b06e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
