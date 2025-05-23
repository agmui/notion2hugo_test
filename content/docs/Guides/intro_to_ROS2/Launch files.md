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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL23FXE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCRJo%2B0Rypufox0qh0TqrRd3E2jc9dbNGN2S0XfhR4oyQIgS0GkrCfWqtOZDUFLR1aOHMod88ifgJIBA3zz1BuWszMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvpduQh%2FuGrvpHucircA%2BK9Si0SHk7ZqdLUy30AFQNdM8Wu3vxdCm1M3an2gUL5toXk75lu4lI50Hsu13OSM%2BIEN8bRDzgvTfUO%2FaAI0s9Jbvn6eBs%2Fpl3lkFEZme0cRgfgtfhqt6s5GGYhdEskvL8Mikh5nOi7snNAIhL5eKrkGzazYQVlepB41%2BLmVFb4WO3lu7ykvslQlbiG55cN2V84z3rwq5WA2RquN6RLfQFZnsn%2BPGbSUnQcHlZItDFEiNA0Z8rN1OwYbW0Th5S4nNI7wtWrScFYJUkW3D4a4CH4%2FrKDnLMB%2BBV56VJ6hpGrx8cqK3o7%2FSUVbNTZgUH72ilf3%2FQGUU7QafyM%2F2xTSx6tXm98GLonX5vdMRGvcXtNOl%2BZol6oMMM3GAsAjWpbdLa4DP3h3JPbfEM3cEP1c%2FedrVqA3Q6kF%2BMcL1c6iEF9xFuR0lhLQjqsd%2Fc%2FhCxfj3nVf6E8vM3A2T%2BxxoMX1pgo7mi2EdJtiEshitOjG3paI5UmhmlUp2t0sOmFYF2MvvclRUhfS8fF5Kda3OhcUl7oUbQN%2BKKPubuYYjHaUi8zxPDxhwV1R1rvS%2FwY%2FnvTZEojdgSG0covhES0qYd5MSAPFTHX3JweEyyJ3gm0Ac5eEMx02SBn0f19kCRFMM%2Fyw8EGOqUBEE7teRvdSpySg37KX0erYL21l%2F5fW85hfE4Jyki8wWWBw39EzBMx3r7BViAOGARec07aTWxITjHcfxV3GvuGEh7T0eyI3%2FSZ02ILbq8Jfq41qlUQoubpAM4b%2FIPwTdIWSqEf98eNFFaj%2BPUq5FE94WbJElbjGKemZSXLvonYfBz78y%2FiKs6g%2FwcQUyn8ygL8MDJHvuAYUompo0M2N0Ti8y9UQ3lW&X-Amz-Signature=dd58e646450d3232046087b8e0185c78b164845b8f07ad3930521470f3f5804f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL23FXE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCRJo%2B0Rypufox0qh0TqrRd3E2jc9dbNGN2S0XfhR4oyQIgS0GkrCfWqtOZDUFLR1aOHMod88ifgJIBA3zz1BuWszMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvpduQh%2FuGrvpHucircA%2BK9Si0SHk7ZqdLUy30AFQNdM8Wu3vxdCm1M3an2gUL5toXk75lu4lI50Hsu13OSM%2BIEN8bRDzgvTfUO%2FaAI0s9Jbvn6eBs%2Fpl3lkFEZme0cRgfgtfhqt6s5GGYhdEskvL8Mikh5nOi7snNAIhL5eKrkGzazYQVlepB41%2BLmVFb4WO3lu7ykvslQlbiG55cN2V84z3rwq5WA2RquN6RLfQFZnsn%2BPGbSUnQcHlZItDFEiNA0Z8rN1OwYbW0Th5S4nNI7wtWrScFYJUkW3D4a4CH4%2FrKDnLMB%2BBV56VJ6hpGrx8cqK3o7%2FSUVbNTZgUH72ilf3%2FQGUU7QafyM%2F2xTSx6tXm98GLonX5vdMRGvcXtNOl%2BZol6oMMM3GAsAjWpbdLa4DP3h3JPbfEM3cEP1c%2FedrVqA3Q6kF%2BMcL1c6iEF9xFuR0lhLQjqsd%2Fc%2FhCxfj3nVf6E8vM3A2T%2BxxoMX1pgo7mi2EdJtiEshitOjG3paI5UmhmlUp2t0sOmFYF2MvvclRUhfS8fF5Kda3OhcUl7oUbQN%2BKKPubuYYjHaUi8zxPDxhwV1R1rvS%2FwY%2FnvTZEojdgSG0covhES0qYd5MSAPFTHX3JweEyyJ3gm0Ac5eEMx02SBn0f19kCRFMM%2Fyw8EGOqUBEE7teRvdSpySg37KX0erYL21l%2F5fW85hfE4Jyki8wWWBw39EzBMx3r7BViAOGARec07aTWxITjHcfxV3GvuGEh7T0eyI3%2FSZ02ILbq8Jfq41qlUQoubpAM4b%2FIPwTdIWSqEf98eNFFaj%2BPUq5FE94WbJElbjGKemZSXLvonYfBz78y%2FiKs6g%2FwcQUyn8ygL8MDJHvuAYUompo0M2N0Ti8y9UQ3lW&X-Amz-Signature=448f2d25a7eaf632fd95f959fec7265da92e3a86dee17992357534f9f216d5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL23FXE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCRJo%2B0Rypufox0qh0TqrRd3E2jc9dbNGN2S0XfhR4oyQIgS0GkrCfWqtOZDUFLR1aOHMod88ifgJIBA3zz1BuWszMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvpduQh%2FuGrvpHucircA%2BK9Si0SHk7ZqdLUy30AFQNdM8Wu3vxdCm1M3an2gUL5toXk75lu4lI50Hsu13OSM%2BIEN8bRDzgvTfUO%2FaAI0s9Jbvn6eBs%2Fpl3lkFEZme0cRgfgtfhqt6s5GGYhdEskvL8Mikh5nOi7snNAIhL5eKrkGzazYQVlepB41%2BLmVFb4WO3lu7ykvslQlbiG55cN2V84z3rwq5WA2RquN6RLfQFZnsn%2BPGbSUnQcHlZItDFEiNA0Z8rN1OwYbW0Th5S4nNI7wtWrScFYJUkW3D4a4CH4%2FrKDnLMB%2BBV56VJ6hpGrx8cqK3o7%2FSUVbNTZgUH72ilf3%2FQGUU7QafyM%2F2xTSx6tXm98GLonX5vdMRGvcXtNOl%2BZol6oMMM3GAsAjWpbdLa4DP3h3JPbfEM3cEP1c%2FedrVqA3Q6kF%2BMcL1c6iEF9xFuR0lhLQjqsd%2Fc%2FhCxfj3nVf6E8vM3A2T%2BxxoMX1pgo7mi2EdJtiEshitOjG3paI5UmhmlUp2t0sOmFYF2MvvclRUhfS8fF5Kda3OhcUl7oUbQN%2BKKPubuYYjHaUi8zxPDxhwV1R1rvS%2FwY%2FnvTZEojdgSG0covhES0qYd5MSAPFTHX3JweEyyJ3gm0Ac5eEMx02SBn0f19kCRFMM%2Fyw8EGOqUBEE7teRvdSpySg37KX0erYL21l%2F5fW85hfE4Jyki8wWWBw39EzBMx3r7BViAOGARec07aTWxITjHcfxV3GvuGEh7T0eyI3%2FSZ02ILbq8Jfq41qlUQoubpAM4b%2FIPwTdIWSqEf98eNFFaj%2BPUq5FE94WbJElbjGKemZSXLvonYfBz78y%2FiKs6g%2FwcQUyn8ygL8MDJHvuAYUompo0M2N0Ti8y9UQ3lW&X-Amz-Signature=bf3275daaa204f8aec447d1e0e2b19c78b13aeeb3f0bfc01545c64a14a1d61a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
