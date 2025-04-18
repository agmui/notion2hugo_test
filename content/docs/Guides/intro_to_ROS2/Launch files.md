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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ24KLJW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjH%2F1jDw2r6t7oyUzPrCTEk17ew%2B26WRF%2B1PZ1w2nADgIgQrrPRk%2BFdW%2BAwiF9voBJyfhMNxxNUrO8VbFu%2B9Om21sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJcbgVOh9lBiqwgwsSrcA04RMnWjxRRES%2BeW0ZYH69F69n2iC%2Fq%2BVSTnna7bn82LXtUArqTtO3A4YINPevrBzst8gTKuAZjOYvVuMp3C2lnb0svbKt2Rufz%2BB%2FJQ7PtFEAbQ%2B8XV%2BCM7oeGSYmH6Get2xpIOtIQi2c%2FR2yLifnmS0z9zN%2Fyfg7ujTo%2BBmssOcn0MR1ZX6AeOuNnjkJt5x6FqiBzi%2B42pADr7RiQH%2FN1FsuNCiXuDgKkD3umT4dD9nyQc%2Bv%2BcBdFNqRvBoCi6459s5ur1rslEcmB7XIVRN%2BwHBtdtiPV5Le37q5fVwpOsLWPElFizfuQpvD%2FJgr7Ma%2B7B6kGnilSnl52NP4OgrVW1ilg16QqLX%2BRZnDVfgpVIIwQXKZ1Cq9EryzkB%2F95%2FP0XKpdC75%2BFhVeNrFzNMMjAzJXSoHB8MFPnWW3K0it0JBeN8rnOiYKKO1%2FzlUDjgJPYE%2BpLfXmNticN0PeguSn4wi0xuJ7GuWuE8q3pu%2F05lvcQq0Qm9VqkEgo5jKqrtUsZxfV5n0xg1maBsCTKYrTh1eUQq3y8D%2BnjZoOY%2FnWtf4f3QrJz11%2FwiptCdnWdfRDpYueEy14gDwkUoqNnzZDPcrqeepBcNYYa69CvObV0lEeTqA9y8%2Bgsa2mKkMI%2BOicAGOqUBomv3p%2FY6LHmJkuB6aE%2Fp2U0Q3fuR9NjX%2FaoUqf4hSSLXLHeKsgdcj%2ByAtsUMWWPyb4ZO7PMnS8T6devm8d52%2B0XhhZ%2BwZ%2BH5kZGSdkUkIHr2G%2BwZ9v79Z8Q6UMMxl5KSi8zokjRH1vSX3fpF5YurZvFtna%2FqPvj%2F%2BGZmBmwDy%2Bl6tBUbsvezlCGLrUJoWuv0C69cbT3MMmIInTVKpnjbumthlXKA&X-Amz-Signature=b3573322e2c46a3cbcb4f6aa9ce256f0cabdf9926a1b97ee9952f00e3862a8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ24KLJW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjH%2F1jDw2r6t7oyUzPrCTEk17ew%2B26WRF%2B1PZ1w2nADgIgQrrPRk%2BFdW%2BAwiF9voBJyfhMNxxNUrO8VbFu%2B9Om21sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJcbgVOh9lBiqwgwsSrcA04RMnWjxRRES%2BeW0ZYH69F69n2iC%2Fq%2BVSTnna7bn82LXtUArqTtO3A4YINPevrBzst8gTKuAZjOYvVuMp3C2lnb0svbKt2Rufz%2BB%2FJQ7PtFEAbQ%2B8XV%2BCM7oeGSYmH6Get2xpIOtIQi2c%2FR2yLifnmS0z9zN%2Fyfg7ujTo%2BBmssOcn0MR1ZX6AeOuNnjkJt5x6FqiBzi%2B42pADr7RiQH%2FN1FsuNCiXuDgKkD3umT4dD9nyQc%2Bv%2BcBdFNqRvBoCi6459s5ur1rslEcmB7XIVRN%2BwHBtdtiPV5Le37q5fVwpOsLWPElFizfuQpvD%2FJgr7Ma%2B7B6kGnilSnl52NP4OgrVW1ilg16QqLX%2BRZnDVfgpVIIwQXKZ1Cq9EryzkB%2F95%2FP0XKpdC75%2BFhVeNrFzNMMjAzJXSoHB8MFPnWW3K0it0JBeN8rnOiYKKO1%2FzlUDjgJPYE%2BpLfXmNticN0PeguSn4wi0xuJ7GuWuE8q3pu%2F05lvcQq0Qm9VqkEgo5jKqrtUsZxfV5n0xg1maBsCTKYrTh1eUQq3y8D%2BnjZoOY%2FnWtf4f3QrJz11%2FwiptCdnWdfRDpYueEy14gDwkUoqNnzZDPcrqeepBcNYYa69CvObV0lEeTqA9y8%2Bgsa2mKkMI%2BOicAGOqUBomv3p%2FY6LHmJkuB6aE%2Fp2U0Q3fuR9NjX%2FaoUqf4hSSLXLHeKsgdcj%2ByAtsUMWWPyb4ZO7PMnS8T6devm8d52%2B0XhhZ%2BwZ%2BH5kZGSdkUkIHr2G%2BwZ9v79Z8Q6UMMxl5KSi8zokjRH1vSX3fpF5YurZvFtna%2FqPvj%2F%2BGZmBmwDy%2Bl6tBUbsvezlCGLrUJoWuv0C69cbT3MMmIInTVKpnjbumthlXKA&X-Amz-Signature=7d3f40e78695256334fd77c3aed3b261f12b8dd7b678c51edb07d741616291f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ24KLJW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjH%2F1jDw2r6t7oyUzPrCTEk17ew%2B26WRF%2B1PZ1w2nADgIgQrrPRk%2BFdW%2BAwiF9voBJyfhMNxxNUrO8VbFu%2B9Om21sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJcbgVOh9lBiqwgwsSrcA04RMnWjxRRES%2BeW0ZYH69F69n2iC%2Fq%2BVSTnna7bn82LXtUArqTtO3A4YINPevrBzst8gTKuAZjOYvVuMp3C2lnb0svbKt2Rufz%2BB%2FJQ7PtFEAbQ%2B8XV%2BCM7oeGSYmH6Get2xpIOtIQi2c%2FR2yLifnmS0z9zN%2Fyfg7ujTo%2BBmssOcn0MR1ZX6AeOuNnjkJt5x6FqiBzi%2B42pADr7RiQH%2FN1FsuNCiXuDgKkD3umT4dD9nyQc%2Bv%2BcBdFNqRvBoCi6459s5ur1rslEcmB7XIVRN%2BwHBtdtiPV5Le37q5fVwpOsLWPElFizfuQpvD%2FJgr7Ma%2B7B6kGnilSnl52NP4OgrVW1ilg16QqLX%2BRZnDVfgpVIIwQXKZ1Cq9EryzkB%2F95%2FP0XKpdC75%2BFhVeNrFzNMMjAzJXSoHB8MFPnWW3K0it0JBeN8rnOiYKKO1%2FzlUDjgJPYE%2BpLfXmNticN0PeguSn4wi0xuJ7GuWuE8q3pu%2F05lvcQq0Qm9VqkEgo5jKqrtUsZxfV5n0xg1maBsCTKYrTh1eUQq3y8D%2BnjZoOY%2FnWtf4f3QrJz11%2FwiptCdnWdfRDpYueEy14gDwkUoqNnzZDPcrqeepBcNYYa69CvObV0lEeTqA9y8%2Bgsa2mKkMI%2BOicAGOqUBomv3p%2FY6LHmJkuB6aE%2Fp2U0Q3fuR9NjX%2FaoUqf4hSSLXLHeKsgdcj%2ByAtsUMWWPyb4ZO7PMnS8T6devm8d52%2B0XhhZ%2BwZ%2BH5kZGSdkUkIHr2G%2BwZ9v79Z8Q6UMMxl5KSi8zokjRH1vSX3fpF5YurZvFtna%2FqPvj%2F%2BGZmBmwDy%2Bl6tBUbsvezlCGLrUJoWuv0C69cbT3MMmIInTVKpnjbumthlXKA&X-Amz-Signature=f16f8772268dff6530240cbb746f2a7ce24a7cc2eb17b0daafea96f8ef3f94eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
