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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQJE3A%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZv3a1De%2FXLOg6rWmybjXEUFu750iyXHo9ep2B6%2FTfswIhAPhLIg23u%2BvwQSz0NLZHyn6AyjH%2BRsLV4TG%2FfKcxiLjgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKTGqenV0pLynx7Ngq3APsZ3QpUTP4x2fEXjaPAsG4wr7Qt6up8gc7UMN4V7RRW7EZ%2BPC8hAURDSG7V3ljvRU34H6wsY0BiZM%2BXJNeK2flOflNpFO5ncRD4N9eq%2BDgfF2criLFsfMdv%2B26bk79MErOjRK587prnE2ZMMMv5cMea1RZka4t%2B361jWzOnznvcXGUBlwotWoWVv%2F%2BBCRVLpRzyOvspor5g500iXa9sUciGZmsObmePJ22snVi%2F%2BEv2cqHAsOyGf3aS42ntACjxQrLOKV28YZFJy9LML6SrIAs49nMqQrJCpYQU6NJyG0%2BveqUYA8bh5BnGWMUApt6lFtOpURjpOlZ1PcgQ0rVs7eyaV5%2FDZL%2FYp7tyA9a0SHAkdYE%2B1OPKCiQepmrhObsse8sPA5GXIvOudC4EQFcy2Wj%2BWaU3bXRwOHYKAp%2FqJ2G%2FbiigBtgQTSnLc3Q0uR9%2FYIm0x6IwV5xfh4jh3TFeAtWQmcDUKfU77I18oknGt1lYxZz3Ychv%2BJlZIZtIKGrSqnT4W%2Fj%2BANyo0PJKViqMDBjHiIUIbJD1c4krwIyV%2FqBYlDXE5fkjEWHXzKEO5yYjudsneuEGM233En1Nan6%2FB3Gti2i39qjz995JLc5zmFyx%2F0EjYFvn%2BJwOfPCWjD0rcvDBjqkAXM21X1u4dPD2OWP7Jn0ezdpgzaK%2Bn1c5AhHTzUv1L5TzRH4SZb%2F3UwU1a0ZqV0T%2FMgnjuRO1HbtNgr1k7c3o90b0HMEKNQqoJ2a3lXY5EEGyQafkWGsqH0ojg1cqIE%2Bhp9ex2wV%2F4tzQpac%2BDIz3D%2B8kTalShDHAahHCZD78Ppmb2JSdgEhFEQnt4v84pdd372FGRBWtEFTIxefdBebUZsME0ru&X-Amz-Signature=89c3afcaff4e77968d5c93408e5fd73452719f248ca370d4ad9884b72616bcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQJE3A%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZv3a1De%2FXLOg6rWmybjXEUFu750iyXHo9ep2B6%2FTfswIhAPhLIg23u%2BvwQSz0NLZHyn6AyjH%2BRsLV4TG%2FfKcxiLjgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKTGqenV0pLynx7Ngq3APsZ3QpUTP4x2fEXjaPAsG4wr7Qt6up8gc7UMN4V7RRW7EZ%2BPC8hAURDSG7V3ljvRU34H6wsY0BiZM%2BXJNeK2flOflNpFO5ncRD4N9eq%2BDgfF2criLFsfMdv%2B26bk79MErOjRK587prnE2ZMMMv5cMea1RZka4t%2B361jWzOnznvcXGUBlwotWoWVv%2F%2BBCRVLpRzyOvspor5g500iXa9sUciGZmsObmePJ22snVi%2F%2BEv2cqHAsOyGf3aS42ntACjxQrLOKV28YZFJy9LML6SrIAs49nMqQrJCpYQU6NJyG0%2BveqUYA8bh5BnGWMUApt6lFtOpURjpOlZ1PcgQ0rVs7eyaV5%2FDZL%2FYp7tyA9a0SHAkdYE%2B1OPKCiQepmrhObsse8sPA5GXIvOudC4EQFcy2Wj%2BWaU3bXRwOHYKAp%2FqJ2G%2FbiigBtgQTSnLc3Q0uR9%2FYIm0x6IwV5xfh4jh3TFeAtWQmcDUKfU77I18oknGt1lYxZz3Ychv%2BJlZIZtIKGrSqnT4W%2Fj%2BANyo0PJKViqMDBjHiIUIbJD1c4krwIyV%2FqBYlDXE5fkjEWHXzKEO5yYjudsneuEGM233En1Nan6%2FB3Gti2i39qjz995JLc5zmFyx%2F0EjYFvn%2BJwOfPCWjD0rcvDBjqkAXM21X1u4dPD2OWP7Jn0ezdpgzaK%2Bn1c5AhHTzUv1L5TzRH4SZb%2F3UwU1a0ZqV0T%2FMgnjuRO1HbtNgr1k7c3o90b0HMEKNQqoJ2a3lXY5EEGyQafkWGsqH0ojg1cqIE%2Bhp9ex2wV%2F4tzQpac%2BDIz3D%2B8kTalShDHAahHCZD78Ppmb2JSdgEhFEQnt4v84pdd372FGRBWtEFTIxefdBebUZsME0ru&X-Amz-Signature=8080063c99216ea1207c1573bf4e97a175a63d5c37852bb2825e4e015e69056a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AQJE3A%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZv3a1De%2FXLOg6rWmybjXEUFu750iyXHo9ep2B6%2FTfswIhAPhLIg23u%2BvwQSz0NLZHyn6AyjH%2BRsLV4TG%2FfKcxiLjgKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKTGqenV0pLynx7Ngq3APsZ3QpUTP4x2fEXjaPAsG4wr7Qt6up8gc7UMN4V7RRW7EZ%2BPC8hAURDSG7V3ljvRU34H6wsY0BiZM%2BXJNeK2flOflNpFO5ncRD4N9eq%2BDgfF2criLFsfMdv%2B26bk79MErOjRK587prnE2ZMMMv5cMea1RZka4t%2B361jWzOnznvcXGUBlwotWoWVv%2F%2BBCRVLpRzyOvspor5g500iXa9sUciGZmsObmePJ22snVi%2F%2BEv2cqHAsOyGf3aS42ntACjxQrLOKV28YZFJy9LML6SrIAs49nMqQrJCpYQU6NJyG0%2BveqUYA8bh5BnGWMUApt6lFtOpURjpOlZ1PcgQ0rVs7eyaV5%2FDZL%2FYp7tyA9a0SHAkdYE%2B1OPKCiQepmrhObsse8sPA5GXIvOudC4EQFcy2Wj%2BWaU3bXRwOHYKAp%2FqJ2G%2FbiigBtgQTSnLc3Q0uR9%2FYIm0x6IwV5xfh4jh3TFeAtWQmcDUKfU77I18oknGt1lYxZz3Ychv%2BJlZIZtIKGrSqnT4W%2Fj%2BANyo0PJKViqMDBjHiIUIbJD1c4krwIyV%2FqBYlDXE5fkjEWHXzKEO5yYjudsneuEGM233En1Nan6%2FB3Gti2i39qjz995JLc5zmFyx%2F0EjYFvn%2BJwOfPCWjD0rcvDBjqkAXM21X1u4dPD2OWP7Jn0ezdpgzaK%2Bn1c5AhHTzUv1L5TzRH4SZb%2F3UwU1a0ZqV0T%2FMgnjuRO1HbtNgr1k7c3o90b0HMEKNQqoJ2a3lXY5EEGyQafkWGsqH0ojg1cqIE%2Bhp9ex2wV%2F4tzQpac%2BDIz3D%2B8kTalShDHAahHCZD78Ppmb2JSdgEhFEQnt4v84pdd372FGRBWtEFTIxefdBebUZsME0ru&X-Amz-Signature=259cf036423f406da492b6d56db4be3dc7bd357f8ebcfad9d2ca379fd4b3ab77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
