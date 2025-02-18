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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVUQZ5Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHEo4%2BGiimfu3V3xdFymqEmMgeJQ%2Fp%2BEdSWBrIEPeY9dAiAq0PG1%2Bt2QDPnWoQwPN%2Bx%2FXOk0y2wm0rM%2BuKJeZ0GM9SqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIiC5Pjjpzw0Nqq3KtwDtOC4ZhwcsZrpOCdAYfUO994DXemRL%2BkF2o7OFNFxSWnR8cagCY5eE1bZcDHy80eu678Voh6yAs%2FB2wJpaurdSMtIc8nojQ5f0P2okJQ%2FgGfvtrqdjejPsG5Qmku2%2BN6%2FOiE%2Fiw5NiiNoY0dBdOM4a0gKRInvsm1%2B7bbXljeZbY0Sc%2BtqjMemD5rypj%2FwwbhdpznDi5gZIeGB9qIdN3oUryMxr29cJTjRrrqhP2LHNtElsI5EuDdYPXii5UutTiqjj%2BRx89zrg97R4FJw3xNEtWT5EVNTDqPzj5XiyRmGdh5cKTkNN3uQ3KCIGNbStB6nuvHhlBrV49bCAdRkbPIjTZr0rUdf1gEgdqLXPPB1gd6uhNTmzMpCGVULLvy2wvRrid9HNYuKnwEtebSIOh2LMiUqN4oJAA%2Fq3U29aXKHLTytPjGSxfgzbIlz2Hcvmde%2Biln4ydI%2FQLVJOw6WYOW8zkIcnCVmPuYBEU%2Blw%2ByYo%2Fdzl%2BJEzTVOemB5dn7dZbpW%2B8L1SjWBygkBRNxYgIpm07vfRQhHBLBKJUeRkZwdRHh5UanG3uLiO59Mgjip%2FgkHgvHHSlhW3QFHHUvEhPlf%2BcJ2HVrzy5hoeSPnjkPOCFtxxv4S0GAoz8gH5LAwzvDPvQY6pgGj2yH1Jk%2BqTaCBqCH3dsof31zKG0htF0%2FIw43x42tOMNYl5zG4uxo31tbPDqlbkJObLGz4pQGuF5%2FhFKo0JddmrHDu8MoguMPF6r%2Fu18JpAKUEEsL5JYeF4kWOsGq740lX4UBHS81DVbQWlFyaoll2UsLFDfTQkc0zcirQ2833%2BXRtUeH720kfCgCJf%2BElgWzwDEoUiUnaX2zT5fcdfqw5YiomSDHy&X-Amz-Signature=3b22624b17e3e7b66e0717ec5c293032e54bb30a7ebd668e92a0416c6a09713b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVUQZ5Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHEo4%2BGiimfu3V3xdFymqEmMgeJQ%2Fp%2BEdSWBrIEPeY9dAiAq0PG1%2Bt2QDPnWoQwPN%2Bx%2FXOk0y2wm0rM%2BuKJeZ0GM9SqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIiC5Pjjpzw0Nqq3KtwDtOC4ZhwcsZrpOCdAYfUO994DXemRL%2BkF2o7OFNFxSWnR8cagCY5eE1bZcDHy80eu678Voh6yAs%2FB2wJpaurdSMtIc8nojQ5f0P2okJQ%2FgGfvtrqdjejPsG5Qmku2%2BN6%2FOiE%2Fiw5NiiNoY0dBdOM4a0gKRInvsm1%2B7bbXljeZbY0Sc%2BtqjMemD5rypj%2FwwbhdpznDi5gZIeGB9qIdN3oUryMxr29cJTjRrrqhP2LHNtElsI5EuDdYPXii5UutTiqjj%2BRx89zrg97R4FJw3xNEtWT5EVNTDqPzj5XiyRmGdh5cKTkNN3uQ3KCIGNbStB6nuvHhlBrV49bCAdRkbPIjTZr0rUdf1gEgdqLXPPB1gd6uhNTmzMpCGVULLvy2wvRrid9HNYuKnwEtebSIOh2LMiUqN4oJAA%2Fq3U29aXKHLTytPjGSxfgzbIlz2Hcvmde%2Biln4ydI%2FQLVJOw6WYOW8zkIcnCVmPuYBEU%2Blw%2ByYo%2Fdzl%2BJEzTVOemB5dn7dZbpW%2B8L1SjWBygkBRNxYgIpm07vfRQhHBLBKJUeRkZwdRHh5UanG3uLiO59Mgjip%2FgkHgvHHSlhW3QFHHUvEhPlf%2BcJ2HVrzy5hoeSPnjkPOCFtxxv4S0GAoz8gH5LAwzvDPvQY6pgGj2yH1Jk%2BqTaCBqCH3dsof31zKG0htF0%2FIw43x42tOMNYl5zG4uxo31tbPDqlbkJObLGz4pQGuF5%2FhFKo0JddmrHDu8MoguMPF6r%2Fu18JpAKUEEsL5JYeF4kWOsGq740lX4UBHS81DVbQWlFyaoll2UsLFDfTQkc0zcirQ2833%2BXRtUeH720kfCgCJf%2BElgWzwDEoUiUnaX2zT5fcdfqw5YiomSDHy&X-Amz-Signature=368ae35ad695051ef8bc7218504c27b3714fac31d0d5ae81e1bb6b699106e46f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVUQZ5Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHEo4%2BGiimfu3V3xdFymqEmMgeJQ%2Fp%2BEdSWBrIEPeY9dAiAq0PG1%2Bt2QDPnWoQwPN%2Bx%2FXOk0y2wm0rM%2BuKJeZ0GM9SqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIiC5Pjjpzw0Nqq3KtwDtOC4ZhwcsZrpOCdAYfUO994DXemRL%2BkF2o7OFNFxSWnR8cagCY5eE1bZcDHy80eu678Voh6yAs%2FB2wJpaurdSMtIc8nojQ5f0P2okJQ%2FgGfvtrqdjejPsG5Qmku2%2BN6%2FOiE%2Fiw5NiiNoY0dBdOM4a0gKRInvsm1%2B7bbXljeZbY0Sc%2BtqjMemD5rypj%2FwwbhdpznDi5gZIeGB9qIdN3oUryMxr29cJTjRrrqhP2LHNtElsI5EuDdYPXii5UutTiqjj%2BRx89zrg97R4FJw3xNEtWT5EVNTDqPzj5XiyRmGdh5cKTkNN3uQ3KCIGNbStB6nuvHhlBrV49bCAdRkbPIjTZr0rUdf1gEgdqLXPPB1gd6uhNTmzMpCGVULLvy2wvRrid9HNYuKnwEtebSIOh2LMiUqN4oJAA%2Fq3U29aXKHLTytPjGSxfgzbIlz2Hcvmde%2Biln4ydI%2FQLVJOw6WYOW8zkIcnCVmPuYBEU%2Blw%2ByYo%2Fdzl%2BJEzTVOemB5dn7dZbpW%2B8L1SjWBygkBRNxYgIpm07vfRQhHBLBKJUeRkZwdRHh5UanG3uLiO59Mgjip%2FgkHgvHHSlhW3QFHHUvEhPlf%2BcJ2HVrzy5hoeSPnjkPOCFtxxv4S0GAoz8gH5LAwzvDPvQY6pgGj2yH1Jk%2BqTaCBqCH3dsof31zKG0htF0%2FIw43x42tOMNYl5zG4uxo31tbPDqlbkJObLGz4pQGuF5%2FhFKo0JddmrHDu8MoguMPF6r%2Fu18JpAKUEEsL5JYeF4kWOsGq740lX4UBHS81DVbQWlFyaoll2UsLFDfTQkc0zcirQ2833%2BXRtUeH720kfCgCJf%2BElgWzwDEoUiUnaX2zT5fcdfqw5YiomSDHy&X-Amz-Signature=b8c09837d0e02c8c88ef5b2059ad885dfa43f83d3804ba431d111fab64813d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
