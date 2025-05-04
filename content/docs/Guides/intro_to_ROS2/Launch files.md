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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GY6DF2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF9H9mHCYoqgMN7IM%2BC6gXlAWNVJXES32SJX07GQ7LzsAiEAm8qUfLvdZQwtUwcUj386IrsZ9rGMVtfmdEKPFNP0e58q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ8wS1ZFYYhxOd7sTyrcA%2BZDwFSZ9lrrBjqAbrxcccsOxtZDIkCCBGt0hXOM%2BRL1ooWa5Sxt0uQrA72dUUQI3sWnkZGA2978qwlPcKBQVTsCsLt3o9qFgPWuiqsPNm%2FurSA3HM%2FvN2VXYXp0agJ%2Bl1%2FwHPDmqBZ4jVH7vLvGz9gcBJWITmFs9a4cAuh4oI2dQmCrURd1ChinTLz%2F4ZXZyFbHF8u74Zy%2B1HqA%2B8dE%2Bv3vGDgLyFCjmUWcTQ3WUVQ8EaHYAywu6HEx6oxx9Rh5ZKHX1PK%2Bq5JvYl4sci%2Ft%2B2qq8T7nTpvxTm1vakSgjhA48BiWNKxHyniFj3Auf32tQLIFjPaPO4jPlhNrybBV4wLSs%2BuvETrdYanam%2F0pqcG0bYDV8eoOHvJYLfFh7qhz29C57lhglLAg15zD7Qv6mc93ojP%2BF5r0YSs8s67YJcQyl9GkZ3PFIZmeMxvh6omDqmCS23c3DvpojP2aCMGDV4N7%2Bbeb8sXPbuVPJANmLg63tDEGsMpjN96NdLXwSH5kGiJ%2FkVFvL6U%2FNh9adv1MsZ0A4diaxA6rQ3uOT69mhaaCA558Leo5yopEOg%2BgKNBAHhEqm1df8zOMYPgbrZAtU%2F%2Fs9GKPb1Jx3y56WaAEggaHzcEHJ4VPK%2F0MjKcoMOms38AGOqUBsNPXv2yWe%2Bw5Q6GQB17WfPUkTgvr95YiOBZlgOSblAli0He2Ys%2FuC89%2FV03UqsP7q8TKkydfMNxjhL2LllQEsKCLF2um5pV69Ent5U8S%2FCo%2BD5ClMGPuHpAAndmTOWZ6y2XInqNxCeQpNJLtbVGAW2Oq8ucJFLRhLmVmQPOfZVqHzE5uRoWNDMnbQBusl7e3qHHmWaD2eEUXVER0VmeeR3umlyHq&X-Amz-Signature=f2e878ec26e67061a67f8ba3f6ae1bb30f46a7c648639263891edd13341f1c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GY6DF2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF9H9mHCYoqgMN7IM%2BC6gXlAWNVJXES32SJX07GQ7LzsAiEAm8qUfLvdZQwtUwcUj386IrsZ9rGMVtfmdEKPFNP0e58q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ8wS1ZFYYhxOd7sTyrcA%2BZDwFSZ9lrrBjqAbrxcccsOxtZDIkCCBGt0hXOM%2BRL1ooWa5Sxt0uQrA72dUUQI3sWnkZGA2978qwlPcKBQVTsCsLt3o9qFgPWuiqsPNm%2FurSA3HM%2FvN2VXYXp0agJ%2Bl1%2FwHPDmqBZ4jVH7vLvGz9gcBJWITmFs9a4cAuh4oI2dQmCrURd1ChinTLz%2F4ZXZyFbHF8u74Zy%2B1HqA%2B8dE%2Bv3vGDgLyFCjmUWcTQ3WUVQ8EaHYAywu6HEx6oxx9Rh5ZKHX1PK%2Bq5JvYl4sci%2Ft%2B2qq8T7nTpvxTm1vakSgjhA48BiWNKxHyniFj3Auf32tQLIFjPaPO4jPlhNrybBV4wLSs%2BuvETrdYanam%2F0pqcG0bYDV8eoOHvJYLfFh7qhz29C57lhglLAg15zD7Qv6mc93ojP%2BF5r0YSs8s67YJcQyl9GkZ3PFIZmeMxvh6omDqmCS23c3DvpojP2aCMGDV4N7%2Bbeb8sXPbuVPJANmLg63tDEGsMpjN96NdLXwSH5kGiJ%2FkVFvL6U%2FNh9adv1MsZ0A4diaxA6rQ3uOT69mhaaCA558Leo5yopEOg%2BgKNBAHhEqm1df8zOMYPgbrZAtU%2F%2Fs9GKPb1Jx3y56WaAEggaHzcEHJ4VPK%2F0MjKcoMOms38AGOqUBsNPXv2yWe%2Bw5Q6GQB17WfPUkTgvr95YiOBZlgOSblAli0He2Ys%2FuC89%2FV03UqsP7q8TKkydfMNxjhL2LllQEsKCLF2um5pV69Ent5U8S%2FCo%2BD5ClMGPuHpAAndmTOWZ6y2XInqNxCeQpNJLtbVGAW2Oq8ucJFLRhLmVmQPOfZVqHzE5uRoWNDMnbQBusl7e3qHHmWaD2eEUXVER0VmeeR3umlyHq&X-Amz-Signature=580ddc2e1e11b864ce3975f66b202ae1ff32f72b12403b5a02f8b3302f477467&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GY6DF2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIF9H9mHCYoqgMN7IM%2BC6gXlAWNVJXES32SJX07GQ7LzsAiEAm8qUfLvdZQwtUwcUj386IrsZ9rGMVtfmdEKPFNP0e58q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJ8wS1ZFYYhxOd7sTyrcA%2BZDwFSZ9lrrBjqAbrxcccsOxtZDIkCCBGt0hXOM%2BRL1ooWa5Sxt0uQrA72dUUQI3sWnkZGA2978qwlPcKBQVTsCsLt3o9qFgPWuiqsPNm%2FurSA3HM%2FvN2VXYXp0agJ%2Bl1%2FwHPDmqBZ4jVH7vLvGz9gcBJWITmFs9a4cAuh4oI2dQmCrURd1ChinTLz%2F4ZXZyFbHF8u74Zy%2B1HqA%2B8dE%2Bv3vGDgLyFCjmUWcTQ3WUVQ8EaHYAywu6HEx6oxx9Rh5ZKHX1PK%2Bq5JvYl4sci%2Ft%2B2qq8T7nTpvxTm1vakSgjhA48BiWNKxHyniFj3Auf32tQLIFjPaPO4jPlhNrybBV4wLSs%2BuvETrdYanam%2F0pqcG0bYDV8eoOHvJYLfFh7qhz29C57lhglLAg15zD7Qv6mc93ojP%2BF5r0YSs8s67YJcQyl9GkZ3PFIZmeMxvh6omDqmCS23c3DvpojP2aCMGDV4N7%2Bbeb8sXPbuVPJANmLg63tDEGsMpjN96NdLXwSH5kGiJ%2FkVFvL6U%2FNh9adv1MsZ0A4diaxA6rQ3uOT69mhaaCA558Leo5yopEOg%2BgKNBAHhEqm1df8zOMYPgbrZAtU%2F%2Fs9GKPb1Jx3y56WaAEggaHzcEHJ4VPK%2F0MjKcoMOms38AGOqUBsNPXv2yWe%2Bw5Q6GQB17WfPUkTgvr95YiOBZlgOSblAli0He2Ys%2FuC89%2FV03UqsP7q8TKkydfMNxjhL2LllQEsKCLF2um5pV69Ent5U8S%2FCo%2BD5ClMGPuHpAAndmTOWZ6y2XInqNxCeQpNJLtbVGAW2Oq8ucJFLRhLmVmQPOfZVqHzE5uRoWNDMnbQBusl7e3qHHmWaD2eEUXVER0VmeeR3umlyHq&X-Amz-Signature=b8dcad3b0ab16c2d754fe65a58cc6a2ebf3dd5a10724d1d0f2cac0a333a61260&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
