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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRQSGRZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoCUQPdNYkU24tzJi%2F15yHH7OiTrNvz64T0W575caTjAIhANds9vkFiXCrM0ZV%2F7Zuh6Aas29XRAyOa1kbCi5NxEc8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jJyuX3i%2F37gKMgAq3AM5ZRKyQAPjrPIBHUk%2FjrGtpFWittGksFO0m1mOY9wzTxfGKJ1FwzI%2FBCYSFGxCaUyRtmYl7W20DoKxPwH5sAI3iAMzEKYemQn%2BUpSXDykOJIHNiIte4TubepJKZibVedBCgMl4Z3V3RzgK47z06Q%2BCFWtHeDml9YmGdTLFDJw7MU0GARX4y0v20h6CHcOtrJ58bHzd1VpZXRlPfxDvjlwYnJc9etLEqusKefKNTM9n14%2BsJLGZbP1cvkTOdxlBuoVnwbj2CLa3Uq3tUNsgYdUKKsPCjB8Oj4DUq28%2F%2FvRWX%2FBLOVeez6rPJge2ozPJfwaFLK3hoc%2FF8KgVp%2FZIMzRz205g6fNyGVmlRSzNSTs043fqQWtrF1pkXh83B2m7cKqO2aTq%2BjQdQiluw636Z1tXJXoxLd5HHPWjp%2B2AbezNaV9Zfmbov0To0YyAw0TM2ZThZjwFHQzvS%2FNMJkOB7zhu7xN2joMZ%2BHrvHbjLREiflJARRrmOrrzBdejnKkIUcD8h7in1hxaOdim4l7xLAWELhQXlYWfkJGStscaBAC%2BFAab6PoNANM%2F9y7GoYOFQqcT80YM6t%2B0vmVIF2nF2rPykAxBF%2F1Z6VLxTmlnrb%2FBi4W1U0lxeQe36i5Od1DCPsuHBBjqkAU2tZa9MfVNcauUK91cVwfd%2BexeV8VEhTZTgu%2BXq%2FBiXpXKIyxsNAXyg63hrvbi%2F5WqaBGNhCWjVPZefzUDIPerAASabeHaC5NiAB%2B7fsswx%2Fx9x4fTH%2BRUUlGfFk7cs6i2JjqG3BhFxcsNggwoxGVyG%2FDnHEAiBvY6spYoziEKnZxIPSTQEN0Tkeoq3JCPjQW0ySkA2YDQO86I%2Fh0viChnlWgRN&X-Amz-Signature=176867679be2e5d681d5be3bd3f9136748f6c5af2d9c1f94da4db0b9d8dafee4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRQSGRZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoCUQPdNYkU24tzJi%2F15yHH7OiTrNvz64T0W575caTjAIhANds9vkFiXCrM0ZV%2F7Zuh6Aas29XRAyOa1kbCi5NxEc8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jJyuX3i%2F37gKMgAq3AM5ZRKyQAPjrPIBHUk%2FjrGtpFWittGksFO0m1mOY9wzTxfGKJ1FwzI%2FBCYSFGxCaUyRtmYl7W20DoKxPwH5sAI3iAMzEKYemQn%2BUpSXDykOJIHNiIte4TubepJKZibVedBCgMl4Z3V3RzgK47z06Q%2BCFWtHeDml9YmGdTLFDJw7MU0GARX4y0v20h6CHcOtrJ58bHzd1VpZXRlPfxDvjlwYnJc9etLEqusKefKNTM9n14%2BsJLGZbP1cvkTOdxlBuoVnwbj2CLa3Uq3tUNsgYdUKKsPCjB8Oj4DUq28%2F%2FvRWX%2FBLOVeez6rPJge2ozPJfwaFLK3hoc%2FF8KgVp%2FZIMzRz205g6fNyGVmlRSzNSTs043fqQWtrF1pkXh83B2m7cKqO2aTq%2BjQdQiluw636Z1tXJXoxLd5HHPWjp%2B2AbezNaV9Zfmbov0To0YyAw0TM2ZThZjwFHQzvS%2FNMJkOB7zhu7xN2joMZ%2BHrvHbjLREiflJARRrmOrrzBdejnKkIUcD8h7in1hxaOdim4l7xLAWELhQXlYWfkJGStscaBAC%2BFAab6PoNANM%2F9y7GoYOFQqcT80YM6t%2B0vmVIF2nF2rPykAxBF%2F1Z6VLxTmlnrb%2FBi4W1U0lxeQe36i5Od1DCPsuHBBjqkAU2tZa9MfVNcauUK91cVwfd%2BexeV8VEhTZTgu%2BXq%2FBiXpXKIyxsNAXyg63hrvbi%2F5WqaBGNhCWjVPZefzUDIPerAASabeHaC5NiAB%2B7fsswx%2Fx9x4fTH%2BRUUlGfFk7cs6i2JjqG3BhFxcsNggwoxGVyG%2FDnHEAiBvY6spYoziEKnZxIPSTQEN0Tkeoq3JCPjQW0ySkA2YDQO86I%2Fh0viChnlWgRN&X-Amz-Signature=e414c2c7e91f9cda3bc8d774c8b460ada904c98a8b06a127880e1c399f3f7f89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRQSGRZQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoCUQPdNYkU24tzJi%2F15yHH7OiTrNvz64T0W575caTjAIhANds9vkFiXCrM0ZV%2F7Zuh6Aas29XRAyOa1kbCi5NxEc8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jJyuX3i%2F37gKMgAq3AM5ZRKyQAPjrPIBHUk%2FjrGtpFWittGksFO0m1mOY9wzTxfGKJ1FwzI%2FBCYSFGxCaUyRtmYl7W20DoKxPwH5sAI3iAMzEKYemQn%2BUpSXDykOJIHNiIte4TubepJKZibVedBCgMl4Z3V3RzgK47z06Q%2BCFWtHeDml9YmGdTLFDJw7MU0GARX4y0v20h6CHcOtrJ58bHzd1VpZXRlPfxDvjlwYnJc9etLEqusKefKNTM9n14%2BsJLGZbP1cvkTOdxlBuoVnwbj2CLa3Uq3tUNsgYdUKKsPCjB8Oj4DUq28%2F%2FvRWX%2FBLOVeez6rPJge2ozPJfwaFLK3hoc%2FF8KgVp%2FZIMzRz205g6fNyGVmlRSzNSTs043fqQWtrF1pkXh83B2m7cKqO2aTq%2BjQdQiluw636Z1tXJXoxLd5HHPWjp%2B2AbezNaV9Zfmbov0To0YyAw0TM2ZThZjwFHQzvS%2FNMJkOB7zhu7xN2joMZ%2BHrvHbjLREiflJARRrmOrrzBdejnKkIUcD8h7in1hxaOdim4l7xLAWELhQXlYWfkJGStscaBAC%2BFAab6PoNANM%2F9y7GoYOFQqcT80YM6t%2B0vmVIF2nF2rPykAxBF%2F1Z6VLxTmlnrb%2FBi4W1U0lxeQe36i5Od1DCPsuHBBjqkAU2tZa9MfVNcauUK91cVwfd%2BexeV8VEhTZTgu%2BXq%2FBiXpXKIyxsNAXyg63hrvbi%2F5WqaBGNhCWjVPZefzUDIPerAASabeHaC5NiAB%2B7fsswx%2Fx9x4fTH%2BRUUlGfFk7cs6i2JjqG3BhFxcsNggwoxGVyG%2FDnHEAiBvY6spYoziEKnZxIPSTQEN0Tkeoq3JCPjQW0ySkA2YDQO86I%2Fh0viChnlWgRN&X-Amz-Signature=1b486c2b393a9009cd47f8eac1f6580ea0be287a4f7b307e6982316425d39815&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
