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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSVMD4T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDAxe6uTMeRVLowz%2FF2kv2uptbiKcoq1IB%2B2fQjhOCQ3AIhAM2PTHjYM%2FzAN3MWo9Ea0KmGOHB%2FHFxH88j%2Ba2ZjgMJhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXZIdybl7qN6CQEDcq3AM589cSGS3SFvnuPryjchB%2BAlXUEHpGmSlXNzQa%2BbMe%2BBjeKFP1IekIlSKVAUOcM9OuL4lBt1iIa3J2KmFbNG5jLxUhaquPG9MCZqhAVLxbrqOit7350jNb6fEbMsnAbU1YKIrBgM00HVjduHHTzIKtU%2BWbb0s3BP99oAgOOdPNcrgHk65cyR84U8WXMrSMEldFNflMN0ki8Qce618uw8mVkL6UmWYVj%2FteOumJ4XIFweuhTPqnD%2BbULohOEAKfGwNztYnqc63y6ji65XDt6%2ByT%2FIavWmgaR6oNM8y5NH%2FgsFmGAi76ocsQSY9A5kP5nf0Xt2T5caGZ3Nd%2FhjhIl%2Bbphk5bMY4KmJoSSvTnYKHRHXQtHaTqkls9yJGphx63gn65pXygT5dcPZvk7U6evKIQAHVSIAU%2BiR%2B6d8upD%2Bs2Xk989CVh2lTFom%2Fup6CNLe%2BIYW%2BbQ4Gy8lmwoviURora2qdXMgowHC4Pw16BwdZ%2FSQyaZfDnEEnB1oXKUNOmA0ZKdfvZCC0qs2yBZ9A3JfuDS6V60RwRNe9jiwI05b8doeaHdckKnnf2eYoc%2BJKWOgIeMji7vgTlE4mGuDmXjFG%2F3Dg0VI3UOmY%2BZ5VxXmPU1x8JjulJHOVELvanjjD%2Fxo2%2BBjqkAb0%2BjSrdotkSRgvNdl%2BZLEGhP%2Bn0T0FIebpWlRR36vbzFVOmfW7yCFpKgJAFjOfglABVrILSKdzPfY5ZNFATnQQ%2FEETKF0lPSqZP%2BcsXHylCqhGtrwrFFbXx7UOdcjiSZgLu5gyakmtm%2FgkuBVDpcKKe28Iza1GC7T%2FFjJHKKVRNHwJK1SlNiBOOauwQY0jKXZHCFjKEWO2FbXg5L5SEYAh9hDFj&X-Amz-Signature=dea1f84154245ef0f764ac54063ebcd432e7afdaf75909d123d534bdf9714ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSVMD4T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDAxe6uTMeRVLowz%2FF2kv2uptbiKcoq1IB%2B2fQjhOCQ3AIhAM2PTHjYM%2FzAN3MWo9Ea0KmGOHB%2FHFxH88j%2Ba2ZjgMJhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXZIdybl7qN6CQEDcq3AM589cSGS3SFvnuPryjchB%2BAlXUEHpGmSlXNzQa%2BbMe%2BBjeKFP1IekIlSKVAUOcM9OuL4lBt1iIa3J2KmFbNG5jLxUhaquPG9MCZqhAVLxbrqOit7350jNb6fEbMsnAbU1YKIrBgM00HVjduHHTzIKtU%2BWbb0s3BP99oAgOOdPNcrgHk65cyR84U8WXMrSMEldFNflMN0ki8Qce618uw8mVkL6UmWYVj%2FteOumJ4XIFweuhTPqnD%2BbULohOEAKfGwNztYnqc63y6ji65XDt6%2ByT%2FIavWmgaR6oNM8y5NH%2FgsFmGAi76ocsQSY9A5kP5nf0Xt2T5caGZ3Nd%2FhjhIl%2Bbphk5bMY4KmJoSSvTnYKHRHXQtHaTqkls9yJGphx63gn65pXygT5dcPZvk7U6evKIQAHVSIAU%2BiR%2B6d8upD%2Bs2Xk989CVh2lTFom%2Fup6CNLe%2BIYW%2BbQ4Gy8lmwoviURora2qdXMgowHC4Pw16BwdZ%2FSQyaZfDnEEnB1oXKUNOmA0ZKdfvZCC0qs2yBZ9A3JfuDS6V60RwRNe9jiwI05b8doeaHdckKnnf2eYoc%2BJKWOgIeMji7vgTlE4mGuDmXjFG%2F3Dg0VI3UOmY%2BZ5VxXmPU1x8JjulJHOVELvanjjD%2Fxo2%2BBjqkAb0%2BjSrdotkSRgvNdl%2BZLEGhP%2Bn0T0FIebpWlRR36vbzFVOmfW7yCFpKgJAFjOfglABVrILSKdzPfY5ZNFATnQQ%2FEETKF0lPSqZP%2BcsXHylCqhGtrwrFFbXx7UOdcjiSZgLu5gyakmtm%2FgkuBVDpcKKe28Iza1GC7T%2FFjJHKKVRNHwJK1SlNiBOOauwQY0jKXZHCFjKEWO2FbXg5L5SEYAh9hDFj&X-Amz-Signature=9b044d12addafe15e15ef2a6379e88e16ea41d197740eb0ad0dd4f49e2ba6a86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSVMD4T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDAxe6uTMeRVLowz%2FF2kv2uptbiKcoq1IB%2B2fQjhOCQ3AIhAM2PTHjYM%2FzAN3MWo9Ea0KmGOHB%2FHFxH88j%2Ba2ZjgMJhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXZIdybl7qN6CQEDcq3AM589cSGS3SFvnuPryjchB%2BAlXUEHpGmSlXNzQa%2BbMe%2BBjeKFP1IekIlSKVAUOcM9OuL4lBt1iIa3J2KmFbNG5jLxUhaquPG9MCZqhAVLxbrqOit7350jNb6fEbMsnAbU1YKIrBgM00HVjduHHTzIKtU%2BWbb0s3BP99oAgOOdPNcrgHk65cyR84U8WXMrSMEldFNflMN0ki8Qce618uw8mVkL6UmWYVj%2FteOumJ4XIFweuhTPqnD%2BbULohOEAKfGwNztYnqc63y6ji65XDt6%2ByT%2FIavWmgaR6oNM8y5NH%2FgsFmGAi76ocsQSY9A5kP5nf0Xt2T5caGZ3Nd%2FhjhIl%2Bbphk5bMY4KmJoSSvTnYKHRHXQtHaTqkls9yJGphx63gn65pXygT5dcPZvk7U6evKIQAHVSIAU%2BiR%2B6d8upD%2Bs2Xk989CVh2lTFom%2Fup6CNLe%2BIYW%2BbQ4Gy8lmwoviURora2qdXMgowHC4Pw16BwdZ%2FSQyaZfDnEEnB1oXKUNOmA0ZKdfvZCC0qs2yBZ9A3JfuDS6V60RwRNe9jiwI05b8doeaHdckKnnf2eYoc%2BJKWOgIeMji7vgTlE4mGuDmXjFG%2F3Dg0VI3UOmY%2BZ5VxXmPU1x8JjulJHOVELvanjjD%2Fxo2%2BBjqkAb0%2BjSrdotkSRgvNdl%2BZLEGhP%2Bn0T0FIebpWlRR36vbzFVOmfW7yCFpKgJAFjOfglABVrILSKdzPfY5ZNFATnQQ%2FEETKF0lPSqZP%2BcsXHylCqhGtrwrFFbXx7UOdcjiSZgLu5gyakmtm%2FgkuBVDpcKKe28Iza1GC7T%2FFjJHKKVRNHwJK1SlNiBOOauwQY0jKXZHCFjKEWO2FbXg5L5SEYAh9hDFj&X-Amz-Signature=ee60c9a4c97d99270998463879a0f488e691febcf6aad50d6ad3ddd62c1a2718&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
