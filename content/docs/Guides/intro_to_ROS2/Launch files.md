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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYSSIOP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe74U4uBb4WPZZIuNe9ZXY743cqHZEbt4a3qToEp0XvAIgTRz8ifVMminInflP%2BjDDNoEXteD4iIa%2FzSWzV0wqgFoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsc0KDui6KbQf1C0CrcA24X4wW%2B8gtbdCuivC8JG4XsGiNH5Pd1Us0sOqWjZAlxpMiSVV3BcbrCpBvIYVSfw0fzvQRxvTpMXaaQ42et7I%2F3xc2%2Flz0Gtvb5ZY219yv7px26gYCaAcchBELOjxKW4bQbNdUmXg%2FitTpqfrQ7OnIP5fkO9m5DEyG1l%2FeK2HNt7rSurl651o7j6BwZpw1y7IbYzyY8EHa16HoTXAn%2BjnR77b%2FDqte6jZQoZhP8die3ElTU7Tgp6dhdiSpHL1eRNOPU47%2B7TGUuEtjtZa0yhAhzSHHWxBdNjm8bIhVzl%2B7gmfBpjZ4mABhAlGiLOkuXWu%2BpmpmKYq9n0wWUXwVXPUdiXFuJYm9NuMob6jAUzRxaqB2unLtaERGFley9f3Xi%2FSWcf3ECPykYmiuQTy%2F6f%2B2jaou0RmKupvzdKL4ydJLn%2BI800WarRjoumZJqhG5sRQpfoAcvkJjiLTe%2B6YpWTVyiYgPuzSqg8bZvMZgu048lgvKXXCdBnfEnA7WyanJfFgArsm%2F5m5RQwP7OruHRkxcH9kvABFxJRic6Rk3vujGYh%2FfR%2FOVut2zdF%2FubiVDQV2mC0%2FALGLSgph7JjCPWyAxFPowXK8si15mn2WX0jbG7p4yC%2FbdnqATG1xiqMO7p3MQGOqUB9DaUMhgbCIB3Xf56UgCPFGJ1%2BeQyZ5LbpBKRMSNfkp%2BrGTOyp%2F8TAZZRfVl7qfUy5wn%2BGZLLBEpj%2Bvx5ZX8kGm5VtavhbAQKE5Cr3%2Ff5Pvl3y9ma65eRHZUGk39Oo%2F6Yq9w56dGgBNgJu1AGOAos69u9oOCZn5S9xcP9tXUS3SmhhGww7S1xBBujZO1mLXPb5otNu6AUXFGShzFAeQy%2FHT3qXxkG&X-Amz-Signature=ce3ec7ea57b451a133260e25e63fdc4e2db6f98bcfd3bf824981bf74f7d13ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYSSIOP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe74U4uBb4WPZZIuNe9ZXY743cqHZEbt4a3qToEp0XvAIgTRz8ifVMminInflP%2BjDDNoEXteD4iIa%2FzSWzV0wqgFoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsc0KDui6KbQf1C0CrcA24X4wW%2B8gtbdCuivC8JG4XsGiNH5Pd1Us0sOqWjZAlxpMiSVV3BcbrCpBvIYVSfw0fzvQRxvTpMXaaQ42et7I%2F3xc2%2Flz0Gtvb5ZY219yv7px26gYCaAcchBELOjxKW4bQbNdUmXg%2FitTpqfrQ7OnIP5fkO9m5DEyG1l%2FeK2HNt7rSurl651o7j6BwZpw1y7IbYzyY8EHa16HoTXAn%2BjnR77b%2FDqte6jZQoZhP8die3ElTU7Tgp6dhdiSpHL1eRNOPU47%2B7TGUuEtjtZa0yhAhzSHHWxBdNjm8bIhVzl%2B7gmfBpjZ4mABhAlGiLOkuXWu%2BpmpmKYq9n0wWUXwVXPUdiXFuJYm9NuMob6jAUzRxaqB2unLtaERGFley9f3Xi%2FSWcf3ECPykYmiuQTy%2F6f%2B2jaou0RmKupvzdKL4ydJLn%2BI800WarRjoumZJqhG5sRQpfoAcvkJjiLTe%2B6YpWTVyiYgPuzSqg8bZvMZgu048lgvKXXCdBnfEnA7WyanJfFgArsm%2F5m5RQwP7OruHRkxcH9kvABFxJRic6Rk3vujGYh%2FfR%2FOVut2zdF%2FubiVDQV2mC0%2FALGLSgph7JjCPWyAxFPowXK8si15mn2WX0jbG7p4yC%2FbdnqATG1xiqMO7p3MQGOqUB9DaUMhgbCIB3Xf56UgCPFGJ1%2BeQyZ5LbpBKRMSNfkp%2BrGTOyp%2F8TAZZRfVl7qfUy5wn%2BGZLLBEpj%2Bvx5ZX8kGm5VtavhbAQKE5Cr3%2Ff5Pvl3y9ma65eRHZUGk39Oo%2F6Yq9w56dGgBNgJu1AGOAos69u9oOCZn5S9xcP9tXUS3SmhhGww7S1xBBujZO1mLXPb5otNu6AUXFGShzFAeQy%2FHT3qXxkG&X-Amz-Signature=2256386cd8b7fce82a2ec61500894114f0168de893b9eff91705bd716026d6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYSSIOP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe74U4uBb4WPZZIuNe9ZXY743cqHZEbt4a3qToEp0XvAIgTRz8ifVMminInflP%2BjDDNoEXteD4iIa%2FzSWzV0wqgFoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsc0KDui6KbQf1C0CrcA24X4wW%2B8gtbdCuivC8JG4XsGiNH5Pd1Us0sOqWjZAlxpMiSVV3BcbrCpBvIYVSfw0fzvQRxvTpMXaaQ42et7I%2F3xc2%2Flz0Gtvb5ZY219yv7px26gYCaAcchBELOjxKW4bQbNdUmXg%2FitTpqfrQ7OnIP5fkO9m5DEyG1l%2FeK2HNt7rSurl651o7j6BwZpw1y7IbYzyY8EHa16HoTXAn%2BjnR77b%2FDqte6jZQoZhP8die3ElTU7Tgp6dhdiSpHL1eRNOPU47%2B7TGUuEtjtZa0yhAhzSHHWxBdNjm8bIhVzl%2B7gmfBpjZ4mABhAlGiLOkuXWu%2BpmpmKYq9n0wWUXwVXPUdiXFuJYm9NuMob6jAUzRxaqB2unLtaERGFley9f3Xi%2FSWcf3ECPykYmiuQTy%2F6f%2B2jaou0RmKupvzdKL4ydJLn%2BI800WarRjoumZJqhG5sRQpfoAcvkJjiLTe%2B6YpWTVyiYgPuzSqg8bZvMZgu048lgvKXXCdBnfEnA7WyanJfFgArsm%2F5m5RQwP7OruHRkxcH9kvABFxJRic6Rk3vujGYh%2FfR%2FOVut2zdF%2FubiVDQV2mC0%2FALGLSgph7JjCPWyAxFPowXK8si15mn2WX0jbG7p4yC%2FbdnqATG1xiqMO7p3MQGOqUB9DaUMhgbCIB3Xf56UgCPFGJ1%2BeQyZ5LbpBKRMSNfkp%2BrGTOyp%2F8TAZZRfVl7qfUy5wn%2BGZLLBEpj%2Bvx5ZX8kGm5VtavhbAQKE5Cr3%2Ff5Pvl3y9ma65eRHZUGk39Oo%2F6Yq9w56dGgBNgJu1AGOAos69u9oOCZn5S9xcP9tXUS3SmhhGww7S1xBBujZO1mLXPb5otNu6AUXFGShzFAeQy%2FHT3qXxkG&X-Amz-Signature=4ad7695ebf206375ab5233cc3ef34a6f8756a4f87dbb150595c031452b82eefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
