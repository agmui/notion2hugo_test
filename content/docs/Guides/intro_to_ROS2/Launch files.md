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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AC4XZL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIH4s2764kw5NIoKg9ubVqyVg%2FaqX9%2BWsowolknHCvzQCAiB6dyHSCDKwZxq7zoUuGs3bheWUYMVPU5FYE14mOUNDUCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMVEwMKYqtoG1HkpJNKtwDsaQI%2BK%2Fp2b4Wkg7uRY2ISSXHTykjgIC4akDzSdfUHFGZa6RRXGJu6UXB9N5Ppj5oTJ%2FSyP863o9DysHcVQVfFl04YQ4cdwJpsNGt%2Fsiv2WHXr3HMWAiwyNCz2Wdo9FOEkV3gKipNxYJqGHtGxwOSeaHKKkXdGZY0BK%2FUfStxS5hTXsOMMw3eKsSjgje2yI8Jy6VHUj6ttcyGD1Q851jwy%2BobiHTxcT70dOey5uZygDdeAgr%2FKQP2rn8LN9RKduLXBU%2FnW1z3MCTQTPUI2cHrbm3uuDopWsyS1SkxHL26LZHRSACg79e%2BjvwwmuwC1X6vY%2FqLpcXezxqsBQcQAYdyPyr69aPnbhOlZUsV23ezajdO%2B57mnoL0qiFmMycZmWlZFYrdJnjlo1Yfq%2Feksd4XiMOhPEwB2TOAe8e%2Fz%2Bz%2F3Ke93S7FV7QcddjSaGhTVhwMc0WEPGUmHiRxWFUziw%2FrFKiT7a3J3CNdzc7lY9%2BdgPsjxUt5cLy%2BiQ8D%2FdHFkju2SoQ8QbvvBBlCB%2BOgYj%2F7NrzmiQoAugGA3ZOP6UVtgiT6lwL6%2BGgcKz5wEqpFa1thTifJZ26NXQiWmkRvWTeKMFyqmAYEHxz9k8GG8UeftL2vQMK6ZYeazTLSjcQw4%2BeIvQY6pgGIBv0UiWM24rnyLQdCFGs0YJ1zOwp%2Fx7yrRMwHFNejBysYc649plfCakRopHO50u%2B59gIUG%2BlG8Gh3Gqvip0IQQvsQLG%2FJajN3LZkFABqcMIMJOxDsZR9x78NdBGu1tAfRE9Vd5IPKzPHYB%2F0p0laWu0ejGds6ezn%2B4tJopHlo6EjJlMymiV8uuvx60I6Eeljwbs84wcqEXLJRCxstdf%2BQBVIpkRnD&X-Amz-Signature=384b63fd1a5e16fd1c5814e77a835d9acd61c17a971f99473d2e0ca720f3d465&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AC4XZL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIH4s2764kw5NIoKg9ubVqyVg%2FaqX9%2BWsowolknHCvzQCAiB6dyHSCDKwZxq7zoUuGs3bheWUYMVPU5FYE14mOUNDUCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMVEwMKYqtoG1HkpJNKtwDsaQI%2BK%2Fp2b4Wkg7uRY2ISSXHTykjgIC4akDzSdfUHFGZa6RRXGJu6UXB9N5Ppj5oTJ%2FSyP863o9DysHcVQVfFl04YQ4cdwJpsNGt%2Fsiv2WHXr3HMWAiwyNCz2Wdo9FOEkV3gKipNxYJqGHtGxwOSeaHKKkXdGZY0BK%2FUfStxS5hTXsOMMw3eKsSjgje2yI8Jy6VHUj6ttcyGD1Q851jwy%2BobiHTxcT70dOey5uZygDdeAgr%2FKQP2rn8LN9RKduLXBU%2FnW1z3MCTQTPUI2cHrbm3uuDopWsyS1SkxHL26LZHRSACg79e%2BjvwwmuwC1X6vY%2FqLpcXezxqsBQcQAYdyPyr69aPnbhOlZUsV23ezajdO%2B57mnoL0qiFmMycZmWlZFYrdJnjlo1Yfq%2Feksd4XiMOhPEwB2TOAe8e%2Fz%2Bz%2F3Ke93S7FV7QcddjSaGhTVhwMc0WEPGUmHiRxWFUziw%2FrFKiT7a3J3CNdzc7lY9%2BdgPsjxUt5cLy%2BiQ8D%2FdHFkju2SoQ8QbvvBBlCB%2BOgYj%2F7NrzmiQoAugGA3ZOP6UVtgiT6lwL6%2BGgcKz5wEqpFa1thTifJZ26NXQiWmkRvWTeKMFyqmAYEHxz9k8GG8UeftL2vQMK6ZYeazTLSjcQw4%2BeIvQY6pgGIBv0UiWM24rnyLQdCFGs0YJ1zOwp%2Fx7yrRMwHFNejBysYc649plfCakRopHO50u%2B59gIUG%2BlG8Gh3Gqvip0IQQvsQLG%2FJajN3LZkFABqcMIMJOxDsZR9x78NdBGu1tAfRE9Vd5IPKzPHYB%2F0p0laWu0ejGds6ezn%2B4tJopHlo6EjJlMymiV8uuvx60I6Eeljwbs84wcqEXLJRCxstdf%2BQBVIpkRnD&X-Amz-Signature=6c3a84e2ab20c21d87bb9144155c22f74ff1ca4a5abee396fc52ae2efa3bf44c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AC4XZL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIH4s2764kw5NIoKg9ubVqyVg%2FaqX9%2BWsowolknHCvzQCAiB6dyHSCDKwZxq7zoUuGs3bheWUYMVPU5FYE14mOUNDUCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMVEwMKYqtoG1HkpJNKtwDsaQI%2BK%2Fp2b4Wkg7uRY2ISSXHTykjgIC4akDzSdfUHFGZa6RRXGJu6UXB9N5Ppj5oTJ%2FSyP863o9DysHcVQVfFl04YQ4cdwJpsNGt%2Fsiv2WHXr3HMWAiwyNCz2Wdo9FOEkV3gKipNxYJqGHtGxwOSeaHKKkXdGZY0BK%2FUfStxS5hTXsOMMw3eKsSjgje2yI8Jy6VHUj6ttcyGD1Q851jwy%2BobiHTxcT70dOey5uZygDdeAgr%2FKQP2rn8LN9RKduLXBU%2FnW1z3MCTQTPUI2cHrbm3uuDopWsyS1SkxHL26LZHRSACg79e%2BjvwwmuwC1X6vY%2FqLpcXezxqsBQcQAYdyPyr69aPnbhOlZUsV23ezajdO%2B57mnoL0qiFmMycZmWlZFYrdJnjlo1Yfq%2Feksd4XiMOhPEwB2TOAe8e%2Fz%2Bz%2F3Ke93S7FV7QcddjSaGhTVhwMc0WEPGUmHiRxWFUziw%2FrFKiT7a3J3CNdzc7lY9%2BdgPsjxUt5cLy%2BiQ8D%2FdHFkju2SoQ8QbvvBBlCB%2BOgYj%2F7NrzmiQoAugGA3ZOP6UVtgiT6lwL6%2BGgcKz5wEqpFa1thTifJZ26NXQiWmkRvWTeKMFyqmAYEHxz9k8GG8UeftL2vQMK6ZYeazTLSjcQw4%2BeIvQY6pgGIBv0UiWM24rnyLQdCFGs0YJ1zOwp%2Fx7yrRMwHFNejBysYc649plfCakRopHO50u%2B59gIUG%2BlG8Gh3Gqvip0IQQvsQLG%2FJajN3LZkFABqcMIMJOxDsZR9x78NdBGu1tAfRE9Vd5IPKzPHYB%2F0p0laWu0ejGds6ezn%2B4tJopHlo6EjJlMymiV8uuvx60I6Eeljwbs84wcqEXLJRCxstdf%2BQBVIpkRnD&X-Amz-Signature=68c4e65d2da89cb5de88251dab83978467e437c9fb0f824d3338178b048fb88a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
