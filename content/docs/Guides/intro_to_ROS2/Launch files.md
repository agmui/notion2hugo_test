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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK26NVUQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDWeKRB7V0JnHpq%2BkB0nF2tN%2FcboSgRcorfjhEAK%2F8eqgIgAPkhsvh%2B5aARoNeApC5ireL4woHQ7mtlBj5hsMpQYOwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsEElssvjxC4hAkAyrcA0ez6hyVEmaD0ueAEp6lzXtdkQurBrt3Ce0%2BA9XLxrqAtpO2nWRiAHqpLAVFfRn9sR3uVZHTbIWRCbjxR5ooDlj6b9sPvtCPBDhXSlE5pBzq1mVKSFrMTGFXJ%2FukR3VkHDzIO3uIyMgiyQTFYvxMwcRyfJFgKCpR22PXRqCU89duhMkVF4YnAR8PR9GednFXdmBp%2BsfV2VRRQYbWQ2G14rxFvL%2BzxCgVJKyGrpXWvEvGkAbmLDIjYLlgAwNdg5D3YOYRR8e2yDQx6S74O5UUzPsxoxfHJJV%2Fx1EaELaaZ0Dgb4USLY3FwlwxpFhNDfU3BS7ESRnuI1I%2F2qHDM932ntseqHObrFjfMIdJNKAZSY1EHtjDX%2FbKuDhCDl6OJODtrXhBtc1MbzYthN67%2F0%2BFYR3ZOXjd2qVwgo0xBqMdeniqnC%2BLGdGk6UBCFaoB5xDFMJck3aqfiPfNzoTfvdkGvral1WbfsNnkQqS1iu1xO%2BeI4goF66HsKudY%2F3JANgaSJLNkD50Iz8RzwGt0RKaEtm%2FZF%2FMExnWAjkJ5ujEh7qSuDzSzLK2XpqVtNgc0gGBwTE7Xk2fn5oY6BgTyRGOfQiidPo46ASZaCxrei8FVlRjJkwJ8muhCObAdxdAzMJyap8IGOqUBhHncKlc3B681MuGtMMAUN3pSW5ggoLbP43gSATErr%2Bv%2FvSWobZi%2BQzt8BxRiL%2FjRt1g7sh23Q2KNFY2uEDDSjroeX01D%2FTUZzeQWfkbfZhCKcBIknlbJWSQj9mil1CRfghciYUWbScJ2CkQXh6Zbsiwyr8FCSvrKP73R76Uc4J2STRsOWvJNlsM%2FnhRT3YfhFG8jENWxMG%2FtmrZ4fqt1y%2FMFuMiJ&X-Amz-Signature=295f057a498008f090ad40c698724a6ffeff70ba3035df3cbff1830422072a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK26NVUQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDWeKRB7V0JnHpq%2BkB0nF2tN%2FcboSgRcorfjhEAK%2F8eqgIgAPkhsvh%2B5aARoNeApC5ireL4woHQ7mtlBj5hsMpQYOwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsEElssvjxC4hAkAyrcA0ez6hyVEmaD0ueAEp6lzXtdkQurBrt3Ce0%2BA9XLxrqAtpO2nWRiAHqpLAVFfRn9sR3uVZHTbIWRCbjxR5ooDlj6b9sPvtCPBDhXSlE5pBzq1mVKSFrMTGFXJ%2FukR3VkHDzIO3uIyMgiyQTFYvxMwcRyfJFgKCpR22PXRqCU89duhMkVF4YnAR8PR9GednFXdmBp%2BsfV2VRRQYbWQ2G14rxFvL%2BzxCgVJKyGrpXWvEvGkAbmLDIjYLlgAwNdg5D3YOYRR8e2yDQx6S74O5UUzPsxoxfHJJV%2Fx1EaELaaZ0Dgb4USLY3FwlwxpFhNDfU3BS7ESRnuI1I%2F2qHDM932ntseqHObrFjfMIdJNKAZSY1EHtjDX%2FbKuDhCDl6OJODtrXhBtc1MbzYthN67%2F0%2BFYR3ZOXjd2qVwgo0xBqMdeniqnC%2BLGdGk6UBCFaoB5xDFMJck3aqfiPfNzoTfvdkGvral1WbfsNnkQqS1iu1xO%2BeI4goF66HsKudY%2F3JANgaSJLNkD50Iz8RzwGt0RKaEtm%2FZF%2FMExnWAjkJ5ujEh7qSuDzSzLK2XpqVtNgc0gGBwTE7Xk2fn5oY6BgTyRGOfQiidPo46ASZaCxrei8FVlRjJkwJ8muhCObAdxdAzMJyap8IGOqUBhHncKlc3B681MuGtMMAUN3pSW5ggoLbP43gSATErr%2Bv%2FvSWobZi%2BQzt8BxRiL%2FjRt1g7sh23Q2KNFY2uEDDSjroeX01D%2FTUZzeQWfkbfZhCKcBIknlbJWSQj9mil1CRfghciYUWbScJ2CkQXh6Zbsiwyr8FCSvrKP73R76Uc4J2STRsOWvJNlsM%2FnhRT3YfhFG8jENWxMG%2FtmrZ4fqt1y%2FMFuMiJ&X-Amz-Signature=cfde379cb5820d3e7e2f24f7758a46b542d7e8ee51a50ed926115fe5a0f5a49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK26NVUQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDWeKRB7V0JnHpq%2BkB0nF2tN%2FcboSgRcorfjhEAK%2F8eqgIgAPkhsvh%2B5aARoNeApC5ireL4woHQ7mtlBj5hsMpQYOwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsEElssvjxC4hAkAyrcA0ez6hyVEmaD0ueAEp6lzXtdkQurBrt3Ce0%2BA9XLxrqAtpO2nWRiAHqpLAVFfRn9sR3uVZHTbIWRCbjxR5ooDlj6b9sPvtCPBDhXSlE5pBzq1mVKSFrMTGFXJ%2FukR3VkHDzIO3uIyMgiyQTFYvxMwcRyfJFgKCpR22PXRqCU89duhMkVF4YnAR8PR9GednFXdmBp%2BsfV2VRRQYbWQ2G14rxFvL%2BzxCgVJKyGrpXWvEvGkAbmLDIjYLlgAwNdg5D3YOYRR8e2yDQx6S74O5UUzPsxoxfHJJV%2Fx1EaELaaZ0Dgb4USLY3FwlwxpFhNDfU3BS7ESRnuI1I%2F2qHDM932ntseqHObrFjfMIdJNKAZSY1EHtjDX%2FbKuDhCDl6OJODtrXhBtc1MbzYthN67%2F0%2BFYR3ZOXjd2qVwgo0xBqMdeniqnC%2BLGdGk6UBCFaoB5xDFMJck3aqfiPfNzoTfvdkGvral1WbfsNnkQqS1iu1xO%2BeI4goF66HsKudY%2F3JANgaSJLNkD50Iz8RzwGt0RKaEtm%2FZF%2FMExnWAjkJ5ujEh7qSuDzSzLK2XpqVtNgc0gGBwTE7Xk2fn5oY6BgTyRGOfQiidPo46ASZaCxrei8FVlRjJkwJ8muhCObAdxdAzMJyap8IGOqUBhHncKlc3B681MuGtMMAUN3pSW5ggoLbP43gSATErr%2Bv%2FvSWobZi%2BQzt8BxRiL%2FjRt1g7sh23Q2KNFY2uEDDSjroeX01D%2FTUZzeQWfkbfZhCKcBIknlbJWSQj9mil1CRfghciYUWbScJ2CkQXh6Zbsiwyr8FCSvrKP73R76Uc4J2STRsOWvJNlsM%2FnhRT3YfhFG8jENWxMG%2FtmrZ4fqt1y%2FMFuMiJ&X-Amz-Signature=95ce9f43619fb34a51697cc259b2069410c6b5d603d4890258512b8e8b071610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
